---
title:  KeyboardKit 7.6 RC 1
date:   2023-05-11 08:00:00 +0100
tags:   releases dictation

image:  /assets/headers/icon.png

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.6-rc1
---

KeyboardKit 7.6 RC 1 is out and fixes some dictation-related problems when submitting your app to App Store Connect without dictation permission keys. Read on for some important information.

![KeyboardKit logo]({{page.image}})


## Dictation changes

KeyboardKit 7.5 added a new dictation engine that makes it easy to perform dictation in the main app as well as from the keyboard.

However, after this was released, people started reporting that submitting apps started to failed with an `Invalid Binary` error if the app didn't specify dictation permission in its configuration file, even if the app didn't use dictation.

Turns out that the `Speech` framework that lies at the heard of the new dictation feature requires these permissions, even if it isn't used by the app.

To solve this, 7.6 will separate speech recognizion from the dictation engine, and will require you to provide a speech recognizer when setting up dictation in your app. Since `Speech` usage can't be in the app, you will have to copy code into your app when you want to use dictation.

Here is a standard speech recognizer that you can just add to your app and use right away:

```swift
#if os(iOS)
import Speech
import KeyboardKitPro

public class StandardSpeechRecognizer: SpeechRecognizer {

    public init() {}

    private var resultHandler: ResultHandler?
    private var speechRecognizer: SFSpeechRecognizer?
    private var speechRecognizerRequest: SFSpeechAudioBufferRecognitionRequest?
    private var speechRecognizerTask: SFSpeechRecognitionTask?

    public var authorizationStatus: DictationAuthorizationStatus {
        SFSpeechRecognizer.authorizationStatus().keyboardDictationStatus
    }

    public func requestDictationAuthorization() async throws -> DictationAuthorizationStatus {
        await withCheckedContinuation { continuation in
            SFSpeechRecognizer.requestAuthorization { status in
                continuation.resume(returning: status.keyboardDictationStatus)
            }
        }
    }

    public func resetDictationResult() async throws {}

    public func startDictation(
        with config: DictationConfiguration
    ) async throws {
        try await startDictation(with: config, resultHandler: nil)
    }

    public func startDictation(
        with config: DictationConfiguration,
        resultHandler: ResultHandler?
    ) async throws {
        guard let recognizer = setupSpeechRecognizer(for: config) else { throw DictationServiceError.missingSpeechRecognizer }
        guard let request = setupSpeechRecognizerRequest() else { throw DictationServiceError.missingSpeechRecognitionRequest }
        self.resultHandler = resultHandler
        setupSpeechRecognizerTask(for: recognizer, and: request)
    }

    public func stopDictation() async throws {
        speechRecognizerRequest?.endAudio()
        speechRecognizerRequest = nil
        speechRecognizerTask?.cancel()
        speechRecognizerTask = nil
    }

    public func setupAudioEngineBuffer(_ buffer: AVAudioPCMBuffer) {
        speechRecognizerRequest?.append(buffer)
    }
}

private extension StandardSpeechRecognizer {

    func setupSpeechRecognizer(for config: DictationConfiguration) -> SFSpeechRecognizer? {
        let locale = Locale(identifier: config.localeId)
        speechRecognizer = SFSpeechRecognizer(locale: locale)
        return speechRecognizer
    }

    func setupSpeechRecognizerRequest() -> SFSpeechAudioBufferRecognitionRequest? {
        speechRecognizerRequest = SFSpeechAudioBufferRecognitionRequest()
        speechRecognizerRequest?.shouldReportPartialResults = true
        return speechRecognizerRequest
    }

    func setupSpeechRecognizerTask(
        for recognizer: SFSpeechRecognizer,
        and request: SFSpeechRecognitionRequest
    ) {
        speechRecognizerTask = recognizer.recognitionTask(with: request) { [weak self] in
            self?.handleTaskResult($0, error: $1)
        }
    }

    func handleTaskResult(_ result: SFSpeechRecognitionResult?, error: Error?) {
        let result = SpeechRecognizerResult(
            dictatedText: result?.bestTranscription.formattedString,
            error: error,
            isFinal: result?.isFinal ?? true)
        resultHandler?(result)
    }
}
#endif
```

If would be amazing to include this recognizer in the source code, so if you know of a way how to achieve this, please reach out.

Other than that, the dictation overlay view and the standard indicator have been redesigned to look more like the native keyboard dictation equalizer. 
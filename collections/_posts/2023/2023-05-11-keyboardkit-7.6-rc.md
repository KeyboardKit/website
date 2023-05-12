---
title:  KeyboardKit 7.6 RC
date:   2023-05-11 08:00:00 +0100
tags:   releases dictation

image:  /assets/headers/icon.png

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.6-rc1
---

The KeyboardKit 7.6 RC is out and fixes a dictation-related problem when submitting apps to the App Store Connect without adding dictation permission keys, even it the app doesn't use dictation.

![KeyboardKit logo]({{page.image}})


## Dictation changes

KeyboardKit 7.5 added a new dictation engine that makes it easy to perform dictation in the app as well as from the keyboard.

However, after it was released, people started reporting that submitting apps to App Store Connect started to failed with an `Invalid Binary` error if the app didn't specify dictation permission, even if the app didn't use the dictation features.

Turns out that the `Speech` framework at the heart of this new feature requires these permissions, even if dictation isn't used by the app.

To solve this, 7.6 will separate speech recognizion from the dictation engine, and will require you to provide a speech recognizer when setting up dictation in your app. 

Since `Speech` usage can't be in the app, since that triggers this problem, here is a standard speech recognizer that you can just add to your app and use right away:

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

If you know how the code could be included in the source code without causing this problem, feel free to reach out.


## More improvements

Besides fixing this problem, KeyboardKit 7.6 will also improve the dictation performance, add more information and make it possible to start dictation in more ways and from a DocumentGroup.

This version also redesigns the dictation overlay view and the standard indicator to look more like the native keyboard dictation equalizer. 


## Release process

There will be a few release candidates, since this is a complicated feature. Make sure that you are using the latest one.
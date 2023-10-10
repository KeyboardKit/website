---
title: Feedback
---

Feedback is an important part of the typing experience, where the keyboard can play audio and trigger haptic feedback to indicate that the user has tapped a key or performed an action.

In KeyboardKit, feedback can be triggered with a ``KeyboardActionHandler`` or by triggering ``AudioFeedback`` and ``HapticFeedback`` directly.



## Audio feedback

KeyboardKit has an ``AudioFeedback`` enum that defines various audio feedback types. It also serves as a namespace for types like ``AudioFeedback/Configuration`` and ``AudioFeedback/Engine``.



## Haptic feedback

KeyboardKit has an ``HapticFeedback`` enum that defines various haptic feedback types. It also serves as a namespace for types like ``HapticFeedback/Configuration`` and ``HapticFeedback/Engine``.



## How to configure feedback

KeyboardKit has an observable ``FeedbackConfiguration`` class that can be used to configure the feedback for various actions, for instance:

```swift
class KeyboardViewController: KeyboardInputViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        let config = state.feedbackConfiguration 
        config.audioConfiguration = .disabled
        config.audioConfiguration.input = .custom(id: 1329)
        config.hapticConfiguration = .enabled
    }
}
```

Since the settings class is observable, any changes to it will automatically cause the keyboard view to update, e.g. if you have toggles for audio and haptic feedback.
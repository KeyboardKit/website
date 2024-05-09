---
title: Feedback
---

Feedback is an important part of the typing experience, where the keyboard can trigger audio and haptic feedback when a user taps on a key or performs an action.

KeyboardKit makes it easy to trigger feedback when the user interacts with the keyboard, as part of other events, etc.

[KeyboardKit Pro][Pro] unlocks additional [tools](#pro) that let users easily toggle audio and haptic feedback.


## Core Features

KeyboardKit has `Feedback.Audio` & `Feedback.Haptic` enums that define various feedback types. You can trigger any feedback with their `.trigger()` functions:

```swift
Feedback.Audio.input.trigger()
Feedback.Haptic.success.trigger()
```

You can also trigger feedback with a ``KeyboardActionHandler``, and use the `Feedback.Configuration` to define and customize which feedback to use for a keyboard.


<a name="pro">
## 👑 Pro Features

KeyboardKit Pro unlocks a convenient feedback toggle that can be added to a keyboard toolbar, to toggle audio and haptic feedback on & off.


[Pro]: /pro

---
title: Text Input
hero-emoji: 📝
---

Keyboard extensions will by default *only* send text to the text field in the currently active app, and will not detect if you select a text field within the keyboard.

This makes it hard to build features that require the user to type within the keyboard extensions, like search features, or AI-based text inputs.

KeyboardKit therefore adds ways to make this easier, and adds ways to route text to any other text field within the keyboard extension by setting the `textInputProxy` to a custom value.


<a name="pro">
## 👑 KeyboardKit Pro

KeyboardKit Pro unlocks text input views that automatically register and unregister themselves as the `textInputProxy` when they receive and lose focus.

This makes it possible to let users type into text fields within the keyboard, without having to write any additional code. This can be used for emoji search, AI prompting, etc.

These views support SwiftUI `FocusState` and have a `focused` view modifier that lets you provide a custom done button that slides in when the view is focused.


[Pro]: /pro

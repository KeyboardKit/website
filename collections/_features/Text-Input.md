---
title: Text Input
---

Keyboard extensions will by default *only* send text to the text field in the currently active app, and will not detect if you select a text field within the keyboard.

This makes it hard to build features that require the user to type within the keyboard extensions, like search features, or AI-based text inputs.

KeyboardKit therefore adds ways to make this easier, and adds ways to route text to any other text field within the keyboard extension.

[KeyboardKit Pro][Pro] unlocks even more [input utilities](#pro), like a ``KeyboardTextField`` that automatically lets you type within a keyboard extension.


## Core Features

`UIInputController` has a `textDocumentProxy`, which is how a keyboard is meant to integrate with the currently active app. 

KeyboardKit's ``KeyboardInputViewController`` adds an additional ``textInputProxy`` property, that can be set to replace ``textDocumentProxy`` as the main text document proxy.

Setting ``textInputProxy`` will cause any text you type in the keyboard to be sent to that proxy instead. Just set the ``textInputProxy`` to `nil` to start routing text back to the main app.


<a name="pro">
## 👑 Pro Features

KeyboardKit Pro unlocks text input views that automatically register and unregister themselves as the `textInputProxy` when they receive and lose focus.

`KeyboardTextField` wraps a `UITextField` and can be used for single-line text inputs (or multi-line in later versions of iOS), while `KeyboardTextView` wraps a multi-line `UITextView`.

Both views support SwiftUI `FocusState` and have a `focused` view modifier that lets you provide a custom done button that slides in when the view is focused.


[Pro]: /pro

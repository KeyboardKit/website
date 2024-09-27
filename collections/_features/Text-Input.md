---
title: Text Input
---

Keyboard extensions will by default *only* send text to the text field in the currently active app, and will not detect if you select a text field within the keyboard.

This makes it hard to build features that require the user to type within the keyboard extensions, like search features, or AI-based text inputs.

KeyboardKit therefore adds ways to make this easier, and adds ways to route text to any other text field within the keyboard extension.

[KeyboardKit Pro][Pro] unlocks even more [input utilities](#pro), like a ``KeyboardTextField`` that automatically lets you type within a keyboard extension.


## How to support text input with KeyboardKit 

KeyboardKit makes text input easier. ``KeyboardInputViewController`` has a ``textInputProxy`` that can be set to automatically route text to any other text field or custom proxy.

Just set ``textInputProxy`` to start routing text to that proxy, and set it to nil to resume routing text to the active application. You can always access the original proxy with ``originalTextDocumentProxy``.



<a name="pro">
## 👑 KeyboardKit Pro

KeyboardKit Pro unlocks text input views that automatically register and unregister themselves as the `textInputProxy` when they receive and lose focus.

`KeyboardTextField` wraps a `UITextField` and can be used for single-line text inputs (or multi-line in later versions of iOS), while `KeyboardTextView` wraps a multi-line `UITextView`.

Both views support SwiftUI `FocusState` and have a `focused` view modifier that lets you provide a custom done button that slides in when the view is focused.


[Pro]: /pro

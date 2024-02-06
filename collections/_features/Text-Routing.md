---
title: Text Routing
---

iOS keyboard extensions use the native **UITextDocumentProxy** to interact with the currently active application's selected text field, e.g. to insert or delete text. 

If you have a text field *within* your keyboard, you therefore need to find a way to route text to that text field instead of the active application.  

KeyboardKit adds ways to make this easier. ``KeyboardInputViewController`` has a ``.textInputProxy`` that can be set to route text to any other text field.

[KeyboardKit Pro][Pro] unlocks even more routing utils, like a ``KeyboardTextField`` that automatically lets you type within a keyboard extension by registering and resigning as the main text input proxy.



## How does text routing work?

`UIInputController` has a `textDocumentProxy`, which is how a keyboard is meant to integrate with the currently active app. 

``KeyboardInputViewController`` adds a ``textInputProxy`` that can be set to replace ``textDocumentProxy`` as the main text document proxy.

Setting ``textInputProxy`` will cause any text you type in the keyboard to be sent to that proxy instead. Just set the ``textInputProxy`` to `nil` to start routing text back to the main app.



## 👑 Pro features

KeyboardKit Pro unlocks text input views that automatically register and unregister themselves as the main text input proxy when they receive and lose focus:

* `KeyboardTextField` wraps a `UITextField` and can be used for single-line text inputs.
* `KeyboardTextView` wraps a `UITextView` and can be used for multi-line text inputs.

Both views also support SwiftUI `FocusState` and have a `focused` view modifier that lets you provide a custom done button that slides in when the view is focused.


[Pro]: /pro

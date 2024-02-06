---
title: Gestures
---

iOS keyboards use many gestures. For instance, keys can be pressed, released and dragged, space can be long pressed to move the cursor, shift can be double tapped to toggle caps-lock, etc.

These gestures can be complicated to manage, but KeyboardKit provides you with handy views and extensions, and handles most gestures with the ``KeyboardActionHandler``.


## Gestures Functionality

KeyboardKit has a ``Gestures`` namespace with gesture-related types. For instance, a ``GestureButton`` can be used to apply many gestures to a single button.


The ``Gestures`` namespace has a ``KeyboardGesture`` enum that defines various keyboard gestures, like `.press`, `.release`, `.doubleTap`, `.longPress`, etc.

These gestures are used quite a bit within the library, to trigger ``KeyboardAction``s in various ways.

You can use the `keyboardButtonGestures` view modifier to add keyboard-specific gestures to a view:

```swift
Text("😀")
    .keyboardButtonGestures(for: .emoji("😀"), ...)
```

This will make the view behave like a keyboard button and trigger custom gesture-based actions. It is automatically applied by views like `SystemKeyboard`.

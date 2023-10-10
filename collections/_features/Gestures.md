---
title: Gestures
hero: /assets/heros/github.png
description: KeyboardKit has rich, keyboard-specific gestures.
---

Native iOS keyboards apply a bunch of gestures to their keys. For instance, input keys can be pressed and released, space can be long pressed to move the cursor, backspace can be long pressed, etc.

Keyboard gestures can be complicated, but KeyboardKit handles it with a ``KeyboardActionHandler``. It also comes with keyboard-specific gestures and view modifiers that you can apply to your views.



## Gestures namespace

KeyboardKit has a ``Gestures`` namespace that contains gesture-related types.

For instance, a ``GestureButton`` can be used to apply many gestures to a single button, a ``RepeatTimer`` can be used to repeat an actio, and there are also some types to configure space gestures.

The namespace doesn't contain protocols, open classes or types that are meant to be top-level ones. It's meant to contain types used by top-level types, to make the library easier to overview.



## Keyboard gestures

The ``Gestures`` namespace has a ``KeyboardGesture`` enum that defines various keyboard gestures:

* ``.press`` - occurs when a key is pressed.
* ``.release`` - occurs when a key is released, inside or outside.
* ``.doubleTap`` - occurs when a key is double tapped.
* ``.longPress`` - occurs when a key is long pressed.
* ``.repeatPress`` - triggers repeatedly while a key is pressed.

These gestures are used quite a bit within the library, to handle ``KeyboardAction``s in various ways.



## Keyboard gestures view modifier

You can use the `keyboardButtonGestures` view modifier to add keyboard-specific gestures to any view:

```swift
Text("😀")
    .keyboardButtonGestures(for: .emoji("😀"), ...)
```

This will make the view behave like a keyboard button, and update the provided contexts and bindings as you interact with the button.



## Drag gesture handlers

KeyboardKit has a ``DragGestureHandler`` protocol that can be used to handle drag gestures. For instance, a ``SpaceDragGestureHandler`` is used to handle drag gestures on the space key.

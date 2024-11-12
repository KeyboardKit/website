---
title: Gestures
---

iOS keyboards use more gestures than you may think. For instance, a key can be pressed, released, long pressed, etc. Space can be dragged to move the cursor, shift can be double tapped, etc.

These gestures can be complicated to set up, but KeyboardKit provides you with a ``Keyboard.Gesture`` enum that defines all supported gestures, as well as views & extensions that trigger gesture actions.


## Namespace

KeyboardKit has a ``Gestures`` namespace with gesture-related types, view modifiers and views.


## Gesture view modifier

You can use the ``.keyboardButtonGestures(for:...)`` modifier to apply keyboard gesture to any view:

```swift
Text("😀")
    .keyboardButtonGestures(
        for: .emoji("😀"), 
        doubleTapAction: { ... },
        ...
    )
```

This can automatically trigger standard gestures for the provided action, or fully custom actions.


## Drag gesture handlers

KeyboardKit has a ``DragGestureHandler`` protocol that is used to handle drag gestures. For instance, a ``SpaceDragGestureHandler`` handles drag gestures on the space key.


## Views

KeyboardKit has a ``GestureButton`` that can be used to apply many gestures to the same button.
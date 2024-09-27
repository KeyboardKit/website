---
title: Gestures
---

iOS keyboards use more gestures than you may think. For instance, keys can be pressed, released, long pressed, etc. Space can be dragged to move the cursor, shift can be double tapped, etc.

These gestures can be complicated to set up, but KeyboardKit provides you with a ``Keyboard.Gesture`` enum that defines all supported gestures, as well as views & extensions that trigger gesture actions.


## Gestures Namespace

KeyboardKit has a ``Gestures`` namespace with gesture-related types, view modifiers and views.


## Gesture view modifiers

You can use the ``.keyboardButtonGestures(for:...)`` modifier to apply keyboard gesture to any view:

```swift
Text("😀")
    .keyboardButtonGestures(
        for: .emoji("😀"), 
        doubleTapAction: { ... },
        ...
    )
```

This will automatically apply all standard gestures for the provided action. You can also set up completely custom actions with this modifier as well.


## Drag gesture handlers

KeyboardKit has a ``DragGestureHandler`` protocol that is used to handle drag gestures. For instance, a ``SpaceDragGestureHandler`` handles drag gestures on the space key.


## Views

KeyboardKit has a ``GestureButton`` & ``ScrollViewGestureButton`` that can be used to apply many gestures to the same button.
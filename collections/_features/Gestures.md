---
title: Gestures
hero-emoji: 👆
---

An iOS keyboard use more gestures than you may think. For instance, keys can be tapped, pressed, released, long pressed, etc. Space can be dragged to move the cursor, shift double tapped, etc.

These kind of gestures can be complicated to set up, but KeyboardKit provides ways to support and handle many gestures, as well as views and view modifier to handle and trigger gestures.

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

KeyboardKit also has a ``DragGestureHandler`` protocol for handling drag gestures. For instance, the ``SpaceDragGestureHandler`` handles drag gestures on the space key.
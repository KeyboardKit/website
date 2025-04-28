---
title: Gestures

hero-title: Features
hero-description: Gestures
hero-emoji: 👆
---

The native iOS keyboard use more gestures than you may think. Keys can be pressed, released, long pressed, etc., space can be dragged to move the cursor, shift can be double tapped, etc.

These kind of gestures can be complicated to set up, but KeyboardKit provides ways to support and handle complex gestures with very little code.

KeyboardKit also has a ``DragGestureHandler`` protocol to handle various drag gestures. For instance, a ``SpaceDragGestureHandler`` can handle spacebar drag gestures by moving the input cursor.
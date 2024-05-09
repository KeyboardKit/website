---
title: Gestures
---

iOS keyboards use many gestures. For instance, keys can be pressed, released and dragged, space can be long pressed to move the cursor, shift can be double tapped to toggle caps-lock, etc.

KeyboardKit provides you with handy gesture views and extensions that makes it easy to handle most gestures with a ``KeyboardActionHandler``.


## Core Features

KeyboardKit has a ``Gestures`` namespace with gesture-related types. For instance, a ``GestureButton``, a ``KeyboardGesture`` enum that defines various gestures like `.press`, `.release`, `.doubleTap`, etc.

The gestures are used to trigger ``KeyboardAction`` events within the library, and automatically applied by views like the `SystemKeyboard`.

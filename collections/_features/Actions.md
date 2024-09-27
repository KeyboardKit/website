---
title: Actions
---

In KeyboardKit, a ``KeyboardAction`` enum defines keyboard-specific actions, that can be triggered by the keyboard or programmatically, and handled with a ``KeyboardActionHandler``.


## Keyboard Action Namespace

KeyboardKit has a ``KeyboardAction`` enum that defines all supported keyboard actions. It's also a namespace for action-related types and views, like a standard action handler.


## Keyboard Actions

The ``KeyboardAction`` enum defines many keyboard-related actions, like ``.character(_:)``, ``.backspace``, ``.nextLocale``, ``.dismissKeyboard``, etc.


## Keyboard Action Handler

Actions can be triggered by button taps, system events, or triggered programmatically, and handled with a ``KeyboardActionHandler``.

The ``KeyboardView`` component automatically applies action handling to all its buttons, to make them support keyboard gestures, show input and action callouts, etc.



[Pro]: /pro

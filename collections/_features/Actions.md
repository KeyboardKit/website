---
title: Actions
---

In KeyboardKit, the ``KeyboardAction`` enum defines keyboard-specific actions, that can be triggered by the keyboard or by code, and handled with a ``KeyboardActionHandler``.

[KeyboardKit Pro][Pro] makes the action handler [automatically register](#pro) the most recently used emojis.


## Core Features

The ``KeyboardAction`` enum defines many keyboard-related actions, like ``.character(_:)``, ``.backspace``, ``.nextLocale``, ``.dismissKeyboard``, etc.

Actions can be triggered by button taps, system events, or triggered programmatically, and handled with a ``KeyboardActionHandler``. KeyboardKit will automatically handle triggered actions.

``SystemKeyboard`` automatically applies this functionality to all its buttons, which makes them support keyboard gestures, show input and action callouts, etc.


<a name="pro">
## 👑 Pro Features

[KeyboardKit Pro][Pro] automatically registers emojis as a users uses them, to automatically update the "most recent" emojis category in the emoji keyboard.


[Pro]: /pro

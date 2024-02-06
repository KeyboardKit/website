---
title: Actions
---

In KeyboardKit, ``KeyboardAction`` defines actions that can be handled with a ``KeyboardActionHandler``.

[KeyboardKit Pro][Pro] makes the action handler automatically register the most recently used emojis.


## Keyboard actions

The ``KeyboardAction`` enum specifies many keyboard-related actions, for instance ``.character(_:)``, ``.backspace``, ``.nextLocale``, ``.dismissKeyboard``, etc.

Actions can be triggered by button taps, system events, or triggered programmatically, and handled with a ``KeyboardActionHandler``. KeyboardKit will automatically handle triggered actions.

``SystemKeyboard`` automatically applies this functionality to all its buttons, which makes them support keyboard gestures, show input and action callouts, etc.


## 👑 Pro features

[KeyboardKit Pro][Pro] injects functionality that automatically registers emojis as a users uses them, to automatically update the "most recent" emojis category in the emoji keyboard.


[Pro]: /pro

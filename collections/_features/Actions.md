---
title: Actions
---

In KeyboardKit, ``KeyboardAction`` defines keyboard-specific actions that can be bound to buttons and handled with a ``KeyboardActionHandler``, which can be used to handle actions, trigger feedback, etc.

KeyboardKit will bind a ``StandardKeyboardActionHandler`` to ``.services`` when the keyboard is loaded. You can modify or replace this action handler at any time.

{% include features/pro-link.html title=page.title %}



## Keyboard actions

The ``KeyboardAction`` enum contains a bunch of actions, for instance:

* ``.character(_:)`` - inserts a text character.
* ``.backspace`` - deletes backwards.
* ``.dismissKeyboard`` - dismisses the keyboard.
* ``.keyboardType(_:)`` - changes the keyboard type.
* ``.nextKeyboard`` - triggers the system keyboard switcher.
* ``.nextLocale`` - triggers the locale switcher action.

See the ``KeyboardAction`` documentation for a list of all available action types.



## How to handle keyboard actions

Keyboard actions can be handled with a ``KeyboardActionHandler``, which is a protocol that describes how actions are handler. KeyboardKit has a standard action handler that it will use by default.

KeyboardKit will automatically handle actions whever the user interacts with the keyboard, or when certain system events happen. You can intercept these actions by creating a custom action handler.



## How to handle autocomplete suggestions

A ``KeyboardActionHandler`` can also handle autocomplete suggestion, since it must be able to do so when handling various actions and gestures.



## How to create a custom action handler

You must create a custom action handler to handle actions that don't have a default behavior, like ``.image``, or customize the standard behavior of certain actions or gestures.

You can either inherit ``StandardKeyboardActionHandler`` and customize what you want, or implement the ``KeyboardActionHandler`` protocol from scratch.
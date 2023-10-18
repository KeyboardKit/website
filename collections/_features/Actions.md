---
title: Actions
---

In KeyboardKit, ``KeyboardAction`` defines keyboard-specific actions that can be bound to buttons and handled with a ``KeyboardActionHandler``, which can be used to handle actions, trigger feedback, etc.

KeyboardKit will bind a ``StandardKeyboardActionHandler`` to the controller ``services`` when the keyboard is loaded. You can modify or replace this action handler at any time.

[KeyboardKit Pro][Pro] unlocks and registers local autocomplete. More information about Pro features can be found at the end of this article.



## Keyboard actions

The ``KeyboardAction`` enum contains a bunch of actions, for instance:

* ``KeyboardAction/character(_:)`` - inserts a text character.
* ``KeyboardAction/backspace`` - deletes backwards.
* ``KeyboardAction/dismissKeyboard`` - dismisses the keyboard.
* ``KeyboardAction/keyboardType(_:)`` - changes the keyboard type.
* ``KeyboardAction/nextKeyboard`` - triggers the system keyboard switcher.
* ``KeyboardAction/nextLocale`` - triggers the locale switcher action.

See the ``KeyboardAction`` documentation for a list of all available action types.



## How to handle keyboard actions

Actions can be handled with a ``KeyboardActionHandler``, which is a protocol that can be implemented by any class that can handle keyboard actions.

KeyboardKit will automatically handle actions whever the user interacts with the keyboard, or when certain system events happen. You can intercept these actions by creating a custom action handler.

You can trigger actions programmatically by calling `handle(_:)` or `handle(_:on:)`:

```swift
func doStuff(with actionHandler: KeyboardActionHandler) {
    actionHandler.handle(.backspace)
    actionHandler.handle(.press, on: .character("a")
    actionHandler.handle(.release, on: .dismissKeyboard)
}
```

Actions can also be triggered by a ``KeyboardButton.Button`` or by applying `.keyboardButton(...)` to views:

```swift
Text("Button")
    .keyboardButton(...)
```

``SystemKeyboard`` will automatically apply this modifier to all its buttons, which makes them support gestures for press, release, long press, repeat press, drag, etc.



## How to handle autocomplete suggestions

A ``KeyboardActionHandler`` can also handle ``Autocomplete.Suggestion`` items, since it must be able to do so when handling various actions and gestures:

```swift
func doStuff(with actionHandler: KeyboardActionHandler) {
    let suggestion = Autocomlete.Suggestion(text: "Hello")
    actionHandler.handle(suggestion)
}
```

This will by default insert the provided suggestion into the text document proxy and reset the autocomplete state. You can customize this behavior by creating a custom action handler.



## How to create a custom action handler

You must create a custom action handler to handle actions that don't have a default behavior, like ``.image``, or customize the standard behavior of certain actions or gestures.

You can either inherit ``StandardKeyboardActionHandler`` and customize what you want, or implement the ``KeyboardActionHandler`` protocol from scratch.



## 👑 Pro features

[KeyboardKit Pro][Pro] replaces ``StandardKeyboardActionHandler`` with a `ProKeyboardActionHandler` that will register emojis as you use them. This will automatically populate the "most recent" emojis category.



[Pro]: /pro

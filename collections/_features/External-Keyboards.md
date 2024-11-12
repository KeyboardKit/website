---
title: External Keyboards
---

A keyboard extension should be able to detect if an external keyboard is connected, since it makes it stop working as expected. For instance, the text document proxy will not update properly.

[KeyboardKit Pro][Pro] unlocks [tools](#pro) to help you detect if an external keyboard is connected, and ways to automatically collapse the keyboard into a compressed view.


## Context

KeyboardKit has an ``ExternalKeyboardContext`` that has state for if an external keyboard is connected, such as a Smart Keyboard Folio, a Magic Keyboard, any Bluetooth keyboards, etc.

KeyboardKit Pro automatically keeps this context in sync when an external keyboard is connected and disconnected. Without it, you must listen for changes and update the context yourself.


## How to collapse the keyboard

The ``KeyboardContext.isKeyboardCollapsed`` property can be used to collapse and expand a keyboard as an external keyboard is connected. KeyboardKit Pro will automatically update this value.

The ``KeyboardView`` lets you define which view to show when the keyboard is collapsed. This lets you explain why the user can't use your keyboard while an external one is connected.


[Pro]: /pro

---
title: External Keyboards
hero-emoji: ⌨️
---

KeyboardKit lets you detect if an external keyboard is connected. This is important, since this can make your extension stop working as expected. 

For instance, the text document proxy will not update properly, which means that your keyboard will not update properly, nor show things like autocomplete.

For these reasons, many custom keyboards chooses to collapse the keyboard and instead show a collapsed utility bar, with a limited set of features.

KeyboardKit has features for this, like the ``ExternalKeyboardContext``, and KeyboardKit Pro provides ways to handle it automatically.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks ways to detect if an external keyboard is connected or disconnected, and ways to automatically collapse the keyboard into a compressed view.

KeyboardKit Pro will automatically update the ``ExternalKeyboardContext`` when an external keyboard is connected or disconnected. Without it, you must listen for changes and update the context.

If `Keyboard.Settings.isKeyboardAutoCollapseEnabled` is active, KeyboardKit Pro will automatically collapse the keyboard whenever an external keyboard is connected.


[Pro]: /pro

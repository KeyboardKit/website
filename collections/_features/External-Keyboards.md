---
title: External Keyboards
hero-emoji: ⌨️
---

Custom keyboards will stop functioning as expected when an external keyboard is connected. It's therefore very important to be able to detect this and adjust the keyboard accordingly.

For instance, the text document proxy will not update properly, which means that your keyboard will not update things like casing and autocomplete properly.

For these reasons, many custom keyboards chooses to collapse the keyboard and instead show a collapsed utility bar with a limited set of features. KeyboardKit Pro can handle this automatically.


## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks ways to detect if an external keyboard is connected or disconnected, and ways to automatically collapse the keyboard into a compact view.

KeyboardKit Pro will automatically update the ``ExternalKeyboardContext`` when an external keyboard is connected or disconnected. Without it, you update it manually.

If `Keyboard.Settings.isKeyboardAutoCollapseEnabled` is active, KeyboardKit Pro will also auto-collapse the keyboard whenever an external keyboard is connected.


[Pro]: /pro

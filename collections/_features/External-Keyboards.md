---
title: External Keyboards
description: Detect and handle external keyboards
hero-emoji: ⌨️
---

Custom keyboards will stop functioning as expected when an external keyboard is connected. The text document proxy will for instance not update its text, which affects features like autocomplete.

For these reasons, many custom keyboards chooses to collapse the keyboard and instead show a utility bar with a limited set of features.


## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks ways to detect if an external keyboard is connected or disconnected, and provides you with ways to automatically collapse the keyboard into a compact view.

KeyboardKit will automatically update its observable state when an external keyboard is connected or disconnected, and can be configured to auto-collapse when a keyboard is connected.


[Pro]: /pro

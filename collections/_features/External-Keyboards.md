---
title: External Keyboards
description: Detect and handle external keyboards
hero-emoji: ⌨️
---

Custom keyboards will stop functioning as expected when an external keyboard is connected. The text document proxy will for instance not update its text, which affects features like autocomplete.

For these reasons, many custom keyboards chooses to collapse the keyboard and instead show a utility bar with a limited set of features.


## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks ways to detect if an external keyboard is connected or disconnected, and lets you automatically collapse the keyboard when an external keyboard is connected.

<img src="{{page.assets}}keyboard-collapsedview.jpg" />

``KeyboardView`` lets you define which view to use as its collapsed variant. You can add more controls to the standard collapsed view.


[Pro]: /pro

---
title: Layout
---


A flexible keyboard layout is at the heart of a software keyboard, with many considerations like the current device model, screen orientation, locale, etc.

KeyboardKit lets you use input sets to define input keys, and keyboard layouts to define the full set of keys. This gives you maximum flexibility to define layouts for different locales and configurations.

[KeyboardKit Pro][Pro] unlocks [more features](#pro), like more input sets, iPad Pro layouts, and localized input sets and layout providers for all supported locales.


## Core Features

An ``InputSet`` specifies the input keys of a keyboard. KeyboardKit has predefined sets like ``.qwerty``, ``.standardNumeric`` and ``.standardSymbolic``. You can easily define your own input sets.

A ``KeyboardLayout`` specifies the full set of keys of a keyboard. It can vary greatly for different device types, screen orientations, locales, etc. You can combine input sets and layouts for great flexibility.

For instance, iOS keyboards often have 3 input rows, where the input keys are surrounded by side buttons, and a bottom row that is often the same across locales.

![System Keyboard - English]({{page.assets}}systemkeyboard-english-350.jpg)

This is however not always true. Layouts differ between iPhone, iPad & iPad Pro, some locales (like Armenian) have 5 rows, some (like Greek) remove side-buttons, etc.

The layout engine must thus be flexible, to cater to the needs of these considerations. KeyboardKit has a bunch of base classes that define a good starting point.


<a name="pro">
## 👑 Pro Features

[KeyboardKit Pro][Pro] unlocks additional input sets like AZERTY and QWERTZ, and localized input sets and layout providers for all keyboard locales in your license.

KeyboardKit Pro automatically makes the `SystemKeyboard` support all input sets and layouts in your license, without any additional code needed. Just change locale, and the keyboard will adjust itself.

KeyboardKit Pro also unlocks a `KeyboardLayout.iPadProProvider` that can generate iPad Pro layouts. This provider is used by all supported keyboard locales by default:

![System Keyboard - iPad Pro]({{page.assets}}systemkeyboard-ipadpro.jpg)

KeyboardKit Pro also unlocks ways to easily add a character input toolbar above a `SystemKeyboard`:

![SystemKeyboard - input toolbar]({{page.assets}}inputtoolbar-ipadpro.png)


[Pro]: /pro   

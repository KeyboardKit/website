---
title: Layout
---


A flexible keyboard layout is at the heart of a software keyboard, with many considerations like the current device model, screen orientation, locale, etc.

In KeyboardKit, ``InputSet``s and ``KeyboardLayout``s are important parts of creating a layout, where the input set specifies the input keys and the layout specifies the full layout configuration.

[KeyboardKit Pro][Pro] unlocks support for iPad Pro-specific layouts, as well as localized input sets and layout providers for all ``KeyboardLocale``s.


## Layout Functionality

An ``InputSet`` specifies the input keys of a keyboard. KeyboardKit has pre-defined input sets like ``.qwerty``, ``.standardNumeric`` and ``.standardSymbolic``. You can also create your own input sets.

A ``KeyboardLayout`` specifies the full set of keys of a keyboard. It can vary greatly for different device types, screen orientations, locales, etc.

For instance, iOS keyboards often have 3 input rows, where the input keys are surrounded by side actions, as well as a bottom row with a space key and action buttons on both sides.

![System Keyboard - English]({{page.assets}}systemkeyboard-english-350.jpg)

This is however not always true. All layouts are different on iPhone and iPad, some (like Armenian) have 5 rows, some (like Greek) remove side-buttons, etc. Also, the iPad Pro differs from the iPad.

Since the layout differences can be quite significant, the layout engine must be flexible. KeyboardKit has a bunch of base classes that define a good starting point.



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks localized ``InputSet``s and ``KeyboardLayoutProvider``s for all keyboard locales.

KeyboardKit Pro also unlocks an **iPadProKeyboardLayoutProvider** that provides iPad Pro-specific layouts, and automatically use it for most locales. You can use it separately as well.

![System Keyboard - iPad Pro]({{page.assets}}systemkeyboard-ipadpro.jpg)


[Pro]: /pro   

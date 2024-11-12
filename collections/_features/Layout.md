---
title: Layout
---


A flexible keyboard layout is at the heart of a software keyboard, with many considerations like the current device model, screen orientation, locale, etc.

KeyboardKit lets you use input sets to define input keys, and keyboard layouts to define the full set of keys. This gives you maximum flexibility to define layouts for different locales and configurations.

[KeyboardKit Pro][Pro] unlocks [more features](#pro), like more input sets, iPad Pro layouts, and localized input sets and layout providers for all supported locales.


## Namespace

KeyboardKit has a ``KeyboardLayout`` type that is also a namespace for other layout-related types like ``Configuration``, ``Item``, etc.


## Input Sets

An ``InputSet`` is used to define the input keys of a keyboard. It makes it easy to define different keys for the same keyboard layout. KeyboardKit has pre-defined sets like ``qwerty``, ``numeric`` & ``symbolic``.


## Layouts

A ``KeyboardLayout`` specifies the full set of keys on a keyboard. Layouts can vary greatly for different device types, screen orientations, locales, keyboard configurations, etc.

<img width="450" alt="An English Keyboard" src="{{page.assets}}keyboardview-english.jpg" />

For instance, while most keyboards have 3 input rows, as above, and a bottom row that is often the same across locales, many languages use very different layouts. A layout must therefore be flexible.


## Services

In KeyboardKit, a ``KeyboardLayoutService`` can generate dynamic layouts at runtime, It provides us with the flexibility we need, to accomodate to the varying needs for different locales, devices, etc.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks additional input sets like `qwertz`, `azerty` and custom ones for all locales.

KeyboardKit Pro automatically makes the `KeyboardView` support all input sets and layouts, without any additional code. Just change the locale, and the keyboard will adjust itself automatically.

KeyboardKit Pro also unlocks a layout service that can generate iPad Pro layouts for all locales:

<img width="650" alt="An iPad Pro keyboard" src="{{page.assets}}keyboardview-ipadpro.jpg" />

KeyboardKit Pro also unlocks ways to easily add a character input toolbar above any `KeyboardView`:

<img width="650" alt="An input toolbar" src="{{page.assets}}inputtoolbar-ipadpro.png" />


[Pro]: /pro   

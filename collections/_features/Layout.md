---
title: Layout
---


A flexible keyboard layout is at the heart of a software keyboard, with many considerations like the current device model, screen orientation, locale, etc.

KeyboardKit lets you use input sets to define input keys, and keyboard layouts to define the full set of keys. This gives you maximum flexibility to define layouts for different locales and configurations.

[KeyboardKit Pro][Pro] unlocks [more features](#pro), like more input sets, iPad Pro layouts, and localized input sets and layout providers for all supported locales.


## KeyboardLayout namespace

KeyboardKit has a ``KeyboardLayout`` type that is also a namespace for other layout-related types like ``Configuration``, ``Item``, etc.


## Input Sets

An ``InputSet`` specifies the input keys of a keyboard. It makes it easy to define different input keys for the same keyboard layout.

KeyboardKit comes with pre-defined sets, like ``qwerty``, ``numeric(currency:)`` & ``symbolic(currencies:)``. KeyboardKit Pro unlocks more input sets like `.qwertz`, `.azerty`, and specific ones for each locale.


## Keyboard Layouts

A ``KeyboardLayout`` specifies the full set of keys on a keyboard. Layouts can vary greatly for different device types, screen orientations, locales, keyboard configurations, etc.

For instance, iOS keyboards often have 3 input rows, where the input keys are surrounded by side buttons, and a bottom row that is often the same across locales.

<img width="450" alt="An English Keyboard" src="{{page.assets}}keyboardview-english.jpg" />

This is however not always true. Layouts differ between iPhone, iPad & iPad Pro, some locales (like Armenian) have 5 rows, some (like Greek) remove side-buttons, etc.



## Keyboard Layout Services

Given all this, the layout engine has to be flexible. KeyboardKit has a ``KeyboardLayoutService`` that generates layouts at runtime, based on many different factors.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks additional input sets like `qwertz`, `azerty` and custom ones for all locales.

KeyboardKit Pro automatically makes the `KeyboardView` support all input sets and layouts, without having to write any additional code. Just change locale, and the keyboard will adjust itself.

KeyboardKit Pro also unlocks a layout service that can generate iPad Pro layouts for all locales:

<img width="650" alt="An iPad Pro keyboard" src="{{page.assets}}keyboardview-ipadpro.jpg" />

KeyboardKit Pro also unlocks ways to easily add a character input toolbar above a `KeyboardView`:

<img width="650" alt="An input toolbar" src="{{page.assets}}inputtoolbar-ipadpro.png" />


[Pro]: /pro   

---
title: Layout
---


A flexible keyboard layout is at the heart of a software keyboard, with many considerations like the current device model, screen orientation, locale, etc.

KeyboardKit lets you use input sets to define input keys, and keyboard layouts to define the full set of keys. This gives you maximum flexibility to define layouts for different locales and configurations.

[KeyboardKit Pro][Pro] unlocks [more features](#pro), like more input sets, localized input sets & layouts for all supported locales, iPad Pro layouts, and more layout capabilities.


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

KeyboardKit Pro also unlocks ways to easily add a various input toolbars above the `KeyboardView`:

<img width="650" alt="An input toolbar" src="{{page.assets}}inputtoolbar-ipadpro.png" />

KeyboardKit Pro also unlocks ``KeyboardLayout`` capabilities like ``.adjusted(for:layoutConfiguration:)``, ``.copy()``, and ``.createIdealItem(for:width:alignment:)``, which make it easier to customize layouts.

KeyboardKit Pro can also extract bottom row information, like ``.bottomRowLayout`` and has additional functions for modifying layout items and keys in various parts of the keyboard.

See the ``KeyboardLayout`` and ``KeyboardLayoutIdentifiable`` type documentation in the Pro docs for a full list of capabilities that KeyboardKit Pro unlocks.


[Pro]: /pro   

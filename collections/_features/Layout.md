---
title: Layout
---


A flexible keyboard layout is an important part of a software keyboard, where factors like the device, screen orientation, locale, etc. can all affect the layout.

In KeyboardKit, ``InputSet``s and ``KeyboardLayout``s are important layout concepts. Input sets specify the input keys of the keyboard and keyboard layouts specify the full set of keys.

KeyboardKit will register a ``StandardKeyboardLayoutProvider`` when the keyboard is loaded. It has a QWERTY layout by default, but you can inject localized providers, modify it, or replace it.

[KeyboardKit Pro][Pro] unlocks and registers localized input sets and layout providers. Information about Pro features can be found at the end of this article.



## Input Sets

An ``InputSet`` set specifies the input keys of a keyboard. KeyboardKit has input sets like ``.qwerty``, ``.standardNumeric`` and ``.standardSymbolic``. You can also create your own custom input sets.



## Keyboard layouts

A ``KeyboardLayout`` specifies the full set of keys of a keyboard. It can vary greatly for different device types, screen orientations, locales, etc. 

For instance, iOS keyboards often have 3 input rows, where the input keys are surrounded by actions on either side, as well as a bottom row with a space key and action buttons. 

This is however not true for all locales. For instance, Armenian has 4 input rows, Greek removes many side-buttons, Arabic removes the shift key, etc. 

These differences can be significant, so the layout engine has to be flexible. 



## Hot to custome the keyboard layout

In KeyboardKit, a ``KeyboardLayoutProvider`` can be used to create dynamic layouts based on many factors, such as the current device type, orientation, locale, etc. 

You can customize the layout by adding localized providers to the ``StandardKeyboardLayoutProvider``, or by replacing the controller `keyboardLayoutProvider`


## How to create a custom callout action provider

You can create a custom ``KeyboardLayoutProvider`` by inheriting ``StandardKeyboardLayoutProvider`` and customize what want, or implement the ``KeyboardLayoutProvider`` protocol from scratch.

There are also other base classes, such as ``BaseKeyboardLayoutProvider``, ``InputSetBasedKeyboardLayoutProvider``, ``iPadKeyboardLayoutProvider`` and ``iPhoneKeyboardLayoutProvider``.



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks a localized ``InputSet`` and ``KeyboardLayoutProvider`` for each locale in your license and injects them into the ``StandardKeyboardLayoutProvider``.

You can access all locale-specific input sets that your license unlocks like this:

```swift
let swedish = try InputSet.swedish
let numeric = try InputSet.spanishNumeric
let symbolic = try InputSet.germanSymbolic
```

You can access all providers that your license unlocks like this:

```swift
let providers = License.current.localizedKeyboardLayoutProviders
```

and locale-specific providers like this:

```swift
let provider = try ProKeyboardLayoutProvider.Swedish()
```

You can inherit `ProKeyboardLayoutProvider`, or any of the available localized versions, to customize the base behavior.


[Pro]: /pro   

---
title: Essentials
---

As you may have noticed, Apple provides a very limited API to custom keyboard extensions. You have to implement much functionality from scratch, including the keyboard view itself.

KeyboardKit provides essential types and functionality to simplify building custom keyboards. It extends text document proxy to make it much more capable and lets you use SwiftUI instead of UIKit.

KeyboardKit also has a ``SystemKeyboard`` component that can be used to create keyboards that mimic the native iOS keyboard. It can be customized and styled to great extent.

[KeyboardKit Pro][Pro] adds an `EmojiKeyboard` to the system keyboard and unlocks powerful system keyboard previews when you register a valid license key. You can read more about it further down.



## Keyboard input view controller

The ``KeyboardInputViewController`` is the most essential type in the library. Make your controller inherit this base class instead of `UIInputViewController` to get access to a bunch of additional capabilities.



## Keyboard namespace

KeyboardKit has a ``Keyboard`` namespace with essential types, like ``AutocapitalizationType``, ``Case``, ``ReturnKeyType``, and much more.



## Keyboard context

KeyboardKit has an observable ``KeyboardContext`` class that provides information about the keyboard, a reference to the current ``textDocumentProxy``, the current ``keyboardType``, etc.



## Keyboard behavior

KeyboardKit has a ``KeyboardBehavior`` protocol and standard implementation that can determine certain behaviors. It's used by e.g. the ``StandardKeyboardActionHandler`` to make some decisions.



## System keyboard

KeyboardKit has a ``SystemKeyboard`` that can be used to create keyboards that mimic the native iOS keyboard. It can be customized and styled to great extent. 

KeyboardKit will by default use a standard ``SystemKeyboard``. If you just want to use this standard view, you don't have to do anything. You can however customize it or replace it altogether.



## 👑 Pro features

KeyboardKit Pro unlocks powerful preview and emoji features when you register a valid license key.


### Emojis

KeyboardKit Pro makes ``SystemKeyboard`` use an `EmojisKeyboard` view as the standard emoji keyboard.

This means that by just registering a valid license key, your keyboard will automatically show an emoji keyboard when the ``keyboardType`` changes to ``.emojis``. You can still use a custom one.


### Preview

KeyboardKit Pro unlocks powerful tools to preview system keyboards and themes:

```swift
SystemKeyboardPreview(...)              // A live system keyboard preview.
SystemKeyboardPreviewHeader(...)        // A live system keyboard preview header.
SystemKeyboardThemePreview(...)         // A live theme preview.
SystemKeyboardThemePreviewHeader(...)   // A live theme preview header.
```

To preview many styles or themes at once, you can use these more lightweight previews:

```swift
SystemKeyboardButtonPreview(...)        // A system button preview.
SystemKeyboardButtonThemePreview(...)   // A system button preview for a theme.
```

These previews only render lightweight buttons.



[Pro]: /pro

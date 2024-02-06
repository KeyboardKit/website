---
title: Essentials
---

As you may have noticed, Apple's native custom keyboard APIs are limited, and forces you to build a lot of things from scratch, including the very keyboard view itself.

KeyboardKit extends the native APIs with many features, and lets you use SwiftUI instead of UIKit.

[KeyboardKit Pro][Pro] unlocks Pro features like more locales, autocomplete, emoji keyboards, dictation.


## Essential Functionality

The ``KeyboardInputViewController`` is the most essential type in the library. Just make your controller inherit this class to get access to a bunch of additional capabilities.

KeyboardKit has a ``Keyboard`` namespace with keyboard-related types, like ``Case``, ``ReturnKeyType``, etc.

The ``KeyboardContext`` class provides observable keyboard information, like the the current locale.

The ``KeyboardBehavior`` protocol and standard implementation defines the behavior of a keyboard.

The ``SystemKeyboard`` can be used to mimic a native iOS keyboard, and can be greatly customized. 

![SystemKeyboard]({{page.assets}}systemkeyboard-swedish-350.jpg)


## 👑 Pro features

KeyboardKit Pro unlocks localized layouts, callouts, and services for all ``KeyboardLocale``s. This means that you can support up to 63 locales without having to write any additional code.

KeyboardKit Pro SIlver and up unlocks an `EmojiKeyboard` and uses it as the default emoji keyboard.

![EmojiKeyboard]({{page.assets}}emojikeyboard-350.jpg)

KeyboardKit Pro also unlocks powerful tools to preview system keyboards and themes.


[Pro]: /pro

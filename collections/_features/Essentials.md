---
title: Essentials
---

As you may have noticed, Apple's native custom keyboard APIs are limited, and forces you to build a lot of things from scratch, including the very keyboard view itself.

KeyboardKit extends Apple's native APIs and provides you with a lot more functionality. It lets you mimic native iOS keyboards and tweak their style & behavior, or create completely custom ones.

[KeyboardKit Pro][Pro] unlocks [more essential features](#pro) like `SystemKeyboard` add-ons, components, etc.


## Core Features

The ``KeyboardInputViewController`` is the most essential type in the library. Just make your controller inherit this class to get access to a bunch of additional capabilities.

KeyboardKit also has a ``Keyboard`` namespace with keyboard-related types, like ``Case``, ``ReturnKeyType`` etc., as well as other essential types like ``KeyboardContext`` and  ``KeyboardBehavior``.


KeyboardKit has a ``SystemKeyboard`` that mimics a native iOS keyboard. It can be used for alphabetic, numeric & symbolic keyboards,  supports all supported locales, layouts, callouts, etc.:

![SystemKeyboard]({{page.assets}}systemkeyboard-swedish-350.jpg)

`SystemKeyboard` automatically adapts for portrait & landscape, iPhone & iPad, can be extended with emoji keyboards and toolbars, and can be styled to great extent:

![SystemKeyboard]({{page.assets}}systemkeyboard-styled-350.jpg)

KeyboardKit Pro adds a lot of functionality to this keyboard, to make it more powerful and flexible.


<a name="pro">
## 👑 Pro Features

[KeyboardKit Pro][Pro] unlocks layouts, callouts and services for all [locales](/locales), to make the `SystemKeyboard` support all locales without any additional code.

KeyboardKit Pro also unlocks more features that makes `SystemKeyboard` support an `EmojiKeyboard`, iPad pro layouts, additional toolbars, etc:

![EmojiKeyboard]({{page.assets}}emojikeyboard-350.jpg)
![SystemKeyboard]({{page.assets}}systemkeyboard-ipadpro.jpg)
![SystemKeyboard]({{page.assets}}inputtoolbar-ipadpro.png)

KeyboardKit Pro also unlocks many additional view components, like a toggle toolbar, a collapsed keyboard banner, etc.


[Pro]: /pro

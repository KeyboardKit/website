---
title: Essentials
---

KeyboardKit extends Apple's native keyboard APIs and provides you with a lot more functionality. It lets you mimic a native keyboard and tweak its style & behavior, or create completely custom ones.

[KeyboardKit Pro][Pro] unlocks [more essential features](#pro) like `SystemKeyboard` add-ons, components, etc.


## Namespaces

KeyboardKit uses namespaces to group types into logical collections, to make the SDK easier to use.

The ``Keyboard`` namespace contains a lot of essential, keyboard-related models and views. By typing ``Keyboard`` and `.`, Xcode will list all essential types in the namespace.

The namespace has a lot of essential types, like ``Accent``, ``AutocapitalizationType``, ``BackspaceRange``, ``Case``, ``Diacritic``, ``Gesture``, ``InputToolbarDisplayMode``, ``KeyboardType``, ``ReturnKeyType``, etc.


## Controller

The ``KeyboardInputViewController`` is the most essential type in the library. Just make your controller inherit this class to get access to a bunch of additional capabilities.


## Context

KeyboardKit has a ``KeyboardContext`` that provides observable state that keeps your UI up to date, as well as persistent settings that can automatically sync between the main app and its keyboard.


## Keyboard View

KeyboardKit has a ``KeyboardView`` that mimics a native iOS keyboard. It supports all locales, layouts, callouts, etc., and can be styled to great extent, using styles & themes:

<div class="grid col2">
    <div><img alt="A Swedish KeyboardView" src="{{page.assets}}keyboardview-swedish.jpg" /></div>
    <div><img alt="A styled KeyboardView" src="{{page.assets}}keyboardview-styled.jpg" /></div>
</div>

KeyboardKit Pro adds a lot of functionality to this keyboard, to make it more powerful and flexible.


## Views

Besides `KeyboardView`, the `Keyboard` namespace has many additional views and styles, like ``Button``, ``ButtonStyle``, ``NextKeyboardButton``, ``Toolbar``, etc.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks layouts, callouts and services for all [{{site.locales.count}} locales](/locales), to make the `KeyboardView` support all locales without any additional code.

KeyboardKit Pro also makes it support an `EmojiKeyboard`, iPad pro layouts, more input toolbars, etc:

<img width="450" alt="An EmojiKeyboard" src="{{page.assets}}emojikeyboard.jpg" />

<img width="650" alt="An iPad Pro keyboard" src="{{page.assets}}keyboardview-ipadpro.jpg" />

<img width="650" alt="An input toolbar" src="{{page.assets}}inputtoolbar-ipadpro.png" />

KeyboardKit Pro also unlocks many more view components, like a toggle toolbar, previews, etc.


[Pro]: /pro

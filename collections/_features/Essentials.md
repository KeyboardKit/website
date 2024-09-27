---
title: Essentials
---

KeyboardKit extends Apple's native keyboard APIs and provides you with a lot more functionality. It lets you mimic a native keyboard and tweak its style & behavior, or create completely custom ones.

[KeyboardKit Pro][Pro] unlocks [more essential features](#pro) like `SystemKeyboard` add-ons, components, etc.


## Keyboard Namespace

The ``Keyboard`` namespace contains a lot of essential, keyboard-related types and views. By typing ``Keyboard`` and `.`, Xcode will list all essential types within this namespace.

The namespace has a lot of essential types, like ``Accent``, ``AutocapitalizationType``, ``BackspaceRange``, ``Case``, ``Diacritic``, ``Gesture``, ``InputToolbarDisplayMode``, ``KeyboardType``, ``ReturnKeyType``, etc.

It also has a lot of view-related types, like ``Background``, ``Button``, ``ButtonStyle``, ``NextKeyboardButton``, ``SpaceContent``, ``Toolbar``, etc.


## Keyboard Controller

The ``KeyboardInputViewController`` is the most essential type in the library. Just make your controller inherit this class to get access to a bunch of additional capabilities.


## Keyboard Context

KeyboardKit has a ``KeyboardContext`` that provides observable state that keeps the keyboard UI up to date. It has a ``textDocumentProxy`` reference, lets you get and set ``locale``, ``keyboardType``, etc.


## Keyboard Settings

KeyboardKit has a ``KeyboardSettings`` class that has a ``store`` that is used by persisted properties in all contexts. When you set up KeyboardKit with a `KeyboardApp` that defines an App Group, the store will automatically be set up to sync data between your app and its keyboard extension.


## Keyboard View

KeyboardKit has a ``KeyboardView`` that mimics a native iOS keyboard. It supports all locales, layouts, callouts, etc., and can be styled to great extent, using styles & themes:

<div class="grid col2">
    <div><img alt="A Swedish KeyboardView" src="{{page.assets}}keyboardview-swedish.jpg" /></div>
    <div><img alt="A styled KeyboardView" src="{{page.assets}}keyboardview-styled.jpg" /></div>
</div>

KeyboardKit Pro adds a lot of functionality to this keyboard, to make it more powerful and flexible.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks layouts, callouts and services for all [{{site.locale_count}} locales](/locales), to make the `KeyboardView` support all locales without any additional code.

KeyboardKit Pro also makes it support an `EmojiKeyboard`, iPad pro layouts, more input toolbars, etc:

<img width="450" alt="An EmojiKeyboard" src="{{page.assets}}emojikeyboard.jpg" />

<img width="650" alt="An iPad Pro keyboard" src="{{page.assets}}keyboardview-ipadpro.jpg" />

<img width="650" alt="An input toolbar" src="{{page.assets}}inputtoolbar-ipadpro.png" />

KeyboardKit Pro also unlocks many more view components, like a toggle toolbar, previews, etc.


[Pro]: /pro

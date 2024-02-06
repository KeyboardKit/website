---
title: Localization
---

Flexible localization support is an important part of a software keyboard, and should be able to localize the entire keyboard and change its behavior based on the locale.

In KeyboardKit, a ``KeyboardLocale`` defines keyboard-specific languages, where each has localized strings, assets, etc. KeyboardKit also extends the native **Locale** with more capabilities.

[KeyboardKit Pro][Pro] can unlock localized keyboards and services for all locales in your license.



## Supported locales

KeyboardKit supports [{{site.locale_count}} locales](/locales):

{% include locales/flags.html %}

Each keyboard locale refers to a native `Locale` and has additional keyboard-specific information, as well as localized assets and strings that can be translated with the ``KKL10n`` enum.



## Locale Functionality

The ``KeyboardLocale`` enum defines all supported locales, like `.english`, `.swedish`, and `.persian`.

KeyboardKit extends the native `Locale` type with more capabilities, like providing a `.lineDirection`, `.isLeftToRight`, `.isTopToBottom`, etc. You can also get the `.flag`, sort locales in more ways, etc.

You can get the current keyboard locale and all available locales with ``KeyboardContext`` ``.locale`` and ``.locales``. These are raw `Locale`s, since a keyboard extension is not limited to the ``KeyboardLocale``.



## How to change keyboard locale 

You can change the keyboard locale for a ``KeyboardContext`` by setting ``locale`` to a new locale, or use the convenience functions that support ``KeyboardLocale``.

If the context ``locales`` has multiple values, you can switch locale using ``selectNextLocale()`` or using a ``LocaleContextMenu`` that lets the user select a locale.

Setting the locale updates the controller's `primaryLanguage`, which controls things like spellchecking and text direction. It will also set the display name in the system keyboard switcher.



## LTR and RTL locales

KeyboardKit supports LTR (Left-To-Right) and RTL locales. You don't need to setup your keyboard to support RTL. Just change the keyboard locale and KeyboardKit automatically adjusts the keyboard.


## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks a localized ``InputSet``, ``KeyboardLayoutProvider`` and ``CalloutActionProvider`` for every ``KeyboardLocale`` that the license unlocks.

This means that KeyboardKit Pro can create fully localized ``SystemKeyboard`` for all supported locales.



[Pro]: /pro

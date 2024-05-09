---
title: Localization
---

Flexible localization support is an important part of a software keyboard. A keyboard should be able to easily change the locale without major code changes.

KeyboardKit has a ``KeyboardLocale`` enum that defines all supported locales (languages), where each has localized strings and assets. KeyboardKit also extends the native **Locale** with more capabilities.

[KeyboardKit Pro][Pro] unlocks [localized input sets, layouts, callout actions & services](#pro) for all locales.



## Core Features

KeyboardKit supports [{{site.locale_count}} locales](/locales):

{% include locales/flags.html %}

Each keyboard locale refers to a native `Locale` and has additional keyboard-specific information, as well as localized assets and strings that can be translated with the ``KKL10n`` enum.

You can use the ``KeyboardContext`` to get and set the current locale and all available locales. If it has multiple locales, you can use ``selectNextLocale()`` or the ``.nextLocale`` action to quickly change locale.

Setting the locale updates the controller's `primaryLanguage`, which controls things like spellchecking and text direction. It will also set the display name in the system keyboard switcher.

KeyboardKit supports LTR (Left-To-Right) and RTL locales. You don't need to do anything to support RTL. Just change the locale and KeyboardKit automatically adjusts the keyboard.


<a name="pro">
## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks a localized ``InputSet``, ``KeyboardLayoutProvider`` and ``CalloutActionProvider`` for every ``KeyboardLocale`` that the license unlocks.

This means that KeyboardKit Pro can create fully localized ``SystemKeyboard`` for all supported locales, without any additional code needed. Just change the locale and the system keyboard adapts.



[Pro]: /pro

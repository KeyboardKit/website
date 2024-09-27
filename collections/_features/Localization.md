---
title: Localization
---

Flexible localization support is an important part of a software keyboard. A keyboard should be able to easily change the locale without major code changes.

KeyboardKit has a ``KeyboardLocale`` enum that defines all supported locales (languages), where each has localized strings and assets. KeyboardKit also extends the native **Locale** with more capabilities.

[KeyboardKit Pro][Pro] unlocks [localized input sets, layouts, callout actions & services](#pro) for all locales.



## Supported locales

KeyboardKit supports [{{site.locale_count}} locales](/locales):

{% include locales/flags.html %}


## Locale capabilities

Each keyboard locale refers to a native `Locale` and has additional keyboard-specific information, as well as localized assets and strings that can be translated with the ``KKL10n`` enum.

You can use the ``KeyboardContext`` to get and set the current locale and all available locales. If it has multiple locales, you can use ``selectNextLocale()`` or the ``.nextLocale`` action to quickly change locale.

Setting the locale updates the controller's `primaryLanguage`, which controls things like spellchecking and text direction. It will also set the display name in the system keyboard switcher.

KeyboardKit supports LTR (Left-To-Right) and RTL locales. You don't need to do anything to support RTL. Just change the locale and KeyboardKit automatically adjusts the keyboard.


## Views

The ``KeyboardLocale`` namespace has a ``ContextMenu`` that lets you select locales from a context menu: 

<img width="450" alt="An EmojiKeyboard" src="{{page.assets}}localecontextmenu.jpg" />

The ``KeyboardView`` applies this menu to every key that triggers the ``nextLocale`` action, as well as to the space bar, if it uses the ``openLocaleContextMenu`` behavior.

You can also add this menu to any view with the ``.keyboardLocaleContextMenu(for:...)`` view modifier.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks a localized ``InputSet``, ``KeyboardLayoutProvider`` & ``CalloutActionProvider`` for every ``KeyboardLocale`` that your license unlocks.

This means that KeyboardKit Pro can create fully localized ``KeyboardView`` for all supported locales, without having to write any additional code. Just change the locale and the keyboard adapts.



[Pro]: /pro

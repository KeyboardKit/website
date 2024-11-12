---
title: Localization
---

Flexible localization support is an important part of a software keyboard. A keyboard should be able to easily change the locale without major code changes.

In KeyboardKit, all ``keyboardKitSupported`` locales define localized strings, assets, and locale-specific information. KeyboardKit also extends the native ``Locale`` with additional capabilities.

[KeyboardKit Pro][Pro] unlocks [localized input sets, layouts, callout actions & services](#pro) for all locales.



## Supported locales

KeyboardKit supports [{{site.locales.count}} locales](/locales):

{{ site.locales.flags }}


## Locale capabilities

Each keyboard supported `Locale` has additional keyboard-specific information and capabilities, as well as localized assets and strings that can be translated with the ``KKL10n`` enum.

You can use the ``KeyboardContext`` to get and set the current locale and all available locales. If it has multiple locales, you can use ``selectNextLocale()`` or the ``.nextLocale`` action to quickly change locale.

Setting the locale updates the controller's `primaryLanguage`, which controls things like spellchecking and text direction. It will also set the display name in the system keyboard switcher.

KeyboardKit supports LTR (Left-To-Right) and RTL locales. You don't need to do anything to support RTL. Just change the locale and KeyboardKit automatically adjusts the keyboard.


## Views

The locale ``ContextMenu`` lets you select locales from a context menu. The ``KeyboardView`` applies it to every key that triggers the ``nextLocale`` action, as well as to space when it's set up to open the menu.

<img width="450" alt="An EmojiKeyboard" src="{{page.assets}}localecontextmenu.jpg" />

You can also add this menu to any view with the ``.keyboardLocaleContextMenu(for:...)`` view modifier.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks a localized ``InputSet``, ``KeyboardLayoutService`` & ``KeyboardCalloutService`` for every ``KeyboardLocale`` that your license unlocks.

KeyboardKit Pro can this create fully localized ``KeyboardView`` for all locales, with no additional code.



[Pro]: /pro

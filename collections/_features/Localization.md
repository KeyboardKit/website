---
title: Localization
---

Flexible localization support is an important part of a software keyboard, and should make it possible to localize the entire keyboard.

KeyboardKit defines keyboard-specific languages, where each has localized strings, assets, and locale-specific information. KeyboardKit also extends the native `Locale` with additional capabilities.

[KeyboardKit Pro][Pro] unlocks localized keyboards and services for all locales in your license. Information about Pro features can be found at the end of this article.



## Supported locales

KeyboardKit supports [{{site.locale_count}} locales](/locales):

{% include locales/flags.html %}

Each keyboard locale refers to a native `Locale` and has additional keyboard-specific information, as well as localized assets and strings that can be translated with the ``KKL10n`` enum.



## Locale extensions

KeyboardKit extends the native `Locale` with more functionality.

### Direction info

KeyboardKit lets you get the line and character direction of a locale:

```swift
let english = KeyboardLocale.english.locale
let persian = KeyboardLocale.persian.locale
let swedish = KeyboardLocale.swedish.locale

english.isLeftToRight  // true
english.isRightToLeft  // false
persian.isLeftToRight  // false
persian.isRightToLeft  // true
swedish.isTopToBottom  // false

english.lineDirection  // .leftToRight
persian.lineDirection  // .rightToLeft
swedish.lineDirection  // .leftToRight
```

### Flag info

KeyboardKit lets you get the flag of a locale:

```swift
english.locale.flag    // 🇺🇸
persian.locale.flag    // 🇮🇷
swedish.flag           // 🇸🇪
```

### Localized name

KeyboardKit lets you get and use the localized names of a locale:

```swift
english.localizedName              // English (United States)
swedish.localizedName(in: english) // Swedish (Sweden)
swedish.localizedName(in: swedish) // Svenska (Sverige)
```

### Sorting

KeyboardKit also provide convenient Locale collection sorted extensions.



## How to get the current keyboard locale 

You can get the current locale and all available locales with ``KeyboardContext``'s ``.locale`` and ``.locales``.

These properties return raw `Locale`s, since a keyboard extension is not limited to the ``KeyboardLocale`` model. The context also has optional, ``KeyboardLocale``-specific functions.



## How to change keyboard locale 

You can change the keyboard locale for a ``KeyboardContext`` by setting ``locale`` to a new locale, or use the convenience functions that support ``KeyboardLocale``.

If the context ``locales`` has multiple values, you can switch locale using ``selectNextLocale()`` or using a ``LocaleContextMenu`` view that lets the user select a locale.

Setting the locale will update the controller's `primaryLanguage`, which controls things like spellchecking and text direction. It will also set the display name in the system keyboard switcher.



## LTR and RTL locales

KeyboardKit supports LTR (Left-To-Right) and RTL (Right-To-Left) locales.

You don't need to configure your keyboard to support RTL. Just change the keyboard locale as explained above, and KeyboardKit will automatically adjust the text direction.



## How to translate localized content

Each ``KeyboardLocale`` has a localized strings file in `Resources/<id>.lproj`. 

Localized strings can be translated using the ``KKL10n`` enum. For instance, this translates the text for the numeric button key for the current locale:

```
let translation = KKL10n.keyboardTypeNumeric.text
```

Besides localized strings, you can get flags for a keyboard locales, using the ``flag`` property. You can also use the context's ``localePresentationLocale`` property to set how locales are displayed.



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks a localized ``InputSet``, ``KeyboardLayoutProvider`` and ``CalloutActionProvider`` for every ``KeyboardLocale`` that the license unlocks.

This means that KeyboardKit Pro can create fully localized ``SystemKeyboard`` for all supported locales.



[Pro]: /pro

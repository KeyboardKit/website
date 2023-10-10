---
title: Localization
---

A flexible localization engine is an important part of a software keyboard, which should cater to the needs of the locales it supports.

In KeyboardKit, the ``KeyboardLocale`` enum defines keyboard-specific locales, where each locale refers to a raw `Locale`. 
KeyboardKit also extends `Locale` with more features.

[KeyboardKit Pro][Pro] unlocks localized services for all the locales in your license when you register a valid license key. You can read more about it further down.



## Supported locales

KeyboardKit supports [{{site.locale_count}} locales](/locales):

{% include locales/flags.html divider=" " %}

Each keyboard locale refers to a native Locale and has additional keyboard-specific information, as well as localized assets and strings that can be translated with the ``KKL10n`` enum.



## Locale extensions

KeyboardKit extends the native Locale with more functionality.

### Direction info

KeyboardKit lets you get the line and character direction of a locale:

```swift
KeyboardLocale.english.locale.isLeftToRight     // true
KeyboardLocale.english.locale.isRightToLeft     // false
KeyboardLocale.arabic.locale.isRightToLeft      // true
KeyboardLocale.arabic.locale.lineDirection      // .rightToLeft

KeyboardLocale.spanish.locale.isTopToBottom     // false
KeyboardLocale.german.locale.isBottomToTop      // false
```

### Flag info

KeyboardKit lets you get the flag of a locale:

```swift
KeyboardLocale.english.locale.flag      // 🇺🇸
KeyboardLocale.english_uk.locale.flag   // 🇬🇧
KeyboardLocale.swedish.flag             // 🇸🇪
```

### Localized name

KeyboardKit lets you get and use the localized names of a locale:

```swift
let english = KeyboardLocale.english
let swedish = KeyboardLocale.swedish

english.locale.localizedName     // English (United States)
swedish.locale.localizedName(
    in: english.locale)          // Swedish (Sweden)
swedish.locale.localizedName(
    in: swedish.locale)          // Svenska (Sverige)

english.locale.localizedLanguageName    // English
swedish.locale.localizedLanguageName(
    in: english.locale)                 // Swedish (Sweden)
swedish.locale.localizedLanguageName(
    in: swedish.locale)                 // Svenska (Sverige)
```

### Sorting

KeyboardKit also provide convenient Locale collection sorted extensions.



## How to get the current keyboard locale 

You can get the current locale and all available locales from a ``KeyboardContext`` with the two ``.locale`` and ``.locales`` properties.

These properties return raw `Locale`s, since a keyboard extension is not limited to the ``KeyboardLocale`` model. The context also has ``KeyboardLocale``-specific functions, but they return optional locales.



## How to change keyboard locale 

You can change the keyboard locale for a ``KeyboardContext`` by setting ``locale`` to a new locale, or use the convenience functions that support both Locale and ``KeyboardLocale``.

If the context ``locales`` has multiple values, you can switch locale using ``selectNextLocale()`` or using a ``LocaleContextMenu`` view that lets the user select locale.

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

[KeyboardKit Pro][Pro] unlocks additional localization capabilities when you register a valid license key.

KeyboardKit Pro unlocks localized ``InputSet``s, ``KeyboardLayoutProvider``s and ``CalloutActionProvider``s for each ``KeyboardLocale`` that the license contains.

This means that KeyboardKit Pro can create fully localized ``SystemKeyboard`` for all supported locales.



[Pro]: /pro

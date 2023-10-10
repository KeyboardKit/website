---
title: Localization
hero: /assets/heros/github.png
description: KeyboardKit supports LTR and RTL locales.
---

A flexible localization engine is an important part of a software keyboard, which should cater to the needs of the locales it supports.

In KeyboardKit, ``KeyboardLocale`` defines keyboard locales, where each locale refers to a native `Locale` and has localized strings and assets. KeyboardKit also extends `Locale` with a bunch of capabilities.

[KeyboardKit Pro][Pro] unlocks localized services for all the locales in your license. Information about Pro features can be found at the end of this article.



## Supported locales

KeyboardKit supports **{{site.locale_count}}** keyboard-specific ``KeyboardLocale``s:

{% include locales/list.html %}

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
let english = KeyboardLocale.english.locale
let swedish = KeyboardLocale.swedish.locale

english.localizedName
swedish.localizedName(in: english)
swedish.localizedName(in: swedish)

english.localizedLanguageName
swedish.localizedLanguageName(in: english)
swedish.localizedLanguageName(in: swedish)
```

### Sorting

KeyboardKit also provide convenient Locale collection sorted extensions.



## How to get the current keyboard locale 

You can get the current locale and all available locales from a ``KeyboardContext`` with the two ``.locale`` and ``.locales`` properties.

These properties return raw Locales, since a keyboard extension is not limited to the ``KeyboardLocale`` model. The context also has ``KeyboardLocale``-specific functions, but they return optional locales.



## How to change keyboard locale 

You can change the keyboard locale for a ``KeyboardContext`` by setting ``.locale`` to a new locale, or use the convenience functions that support both Locale and ``KeyboardLocale``.

If the context's ``.locales`` has multiple values, you can switch locale using ``.selectNextLocale()`` or use a ``LocaleContextMenu`` to let the user select a locale.

Setting the locale will update the controller's **primaryLanguage**, which controls things like spellchecking and text direction. It will also set the display name in the system keyboard switcher.

> Note: The `primaryLanguage` property always returns `nil`, even after being set.



## How to use LTR and RTL locales

KeyboardKit supports LTR (Left-To-Right) and RTL (Right-To-Left) locales.

You don't need to configure your keyboard to support RTL. Just change the keyboard locale as explained above, and KeyboardKit will automatically adjust the text direction.

However, if you want to use one single RTL locale, you can however adjust the keyboard extension's `Info.plist`:

* Set `PrefersRightToLeft` to `1`.
* Set `PrimaryLanguage` to the language code of your primary RTL language, e.g. `fa` for Perian (Farsi).

Just be aware that setting the primary language like this may affect external keyboard key mappings.



## How to translate localized content

Each ``KeyboardLocale`` has a localized strings file in `Resources/<id>.lproj`. 

Localized strings can be translated using the ``KKL10n`` enum. For instance, this translates the numeric button key for the current locale:

```
let translation = KKL10n.keyboardTypeNumeric.text
```

To translate the same text for a certain ``KeyboardLocale`` or `Locale`, you can use any of the various `text(for:)` functions:

```
let translation = KKL10n.keyboardTypeNumeric.text(for: .spanish)
```

Besides localized strings, You can get a flag for a locale, using the ``.flag`` property. You can also use ``KeyboardContext`` ``.localePresentationLocale`` to set how locales are displayed.



## How to add a new keyboard locale

Since each ``KeyboardLocale`` is hard-coded into the library, new keyboard locales must be hard-coded in the same way.

You can add new keyboard locales by following these steps:

* Fork the KeyboardKit project and create a feature branch.
* Create a new ``KeyboardLocale`` case and define all required properties.
* Create a new `Resources/<id>.lproj` folder for the new locale.
* Make sure that linting works and that all tests pass, then push your changes to your fork. 
* Create a pull request from your specific fork and feature branch.

In the PR, please provide any additional information that is needed to correctly support the locale.


### Primary button types

To properly translate the various primary button types, you can find them in the following places:

* `done` - Apple Calendar, when adding new activity and tapping place or video call.
* `go` - Mobile Safari, when typing a url.  
* `join` - System Settings, when joining a wi-fi network with password.
* `next` - System Settings, when joining an enterprise wi-fi network with uid/pwd.
* `ok` - A standard OK button.
* `return` - Apple Notes, when typing.
* `search` - Mobile Safari, when typing in the google.com search bar.
* `send` - Some chat apps (WeChat, QQ), when typing in a chat text field.
* `space` - The text that is displayed on the space bar.   


### Emojis

Emojis can be localized as well, but that is a massive undertaking. Have a look at the English localization file for an example.



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks additional localization capabilities.

KeyboardKit Pro unlocks localized ``InputSet``s, ``KeyboardLayoutProvider``s and ``CalloutActionProvider``s for each ``KeyboardLocale`` that the license contains.

This means that KeyboardKit Pro can create fully localized ``SystemKeyboard`` for all supported locales.



[Pro]: /pro

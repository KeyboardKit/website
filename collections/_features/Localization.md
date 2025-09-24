---
title: Localization
description: KeyboardKit supports 75 locales
hero-emoji: 🌐
---

KeyboardKit supports [{{site.locales.count}} locales](/locales):

{{ site.locales.flags }}

Each supported language has keyboard-specific information and capabilities, and localized strings that can be translated with the ``KKL10n`` enum.

KeyboardKit supports LTR (Left-To-Right) and RTL locales. You don't need to do anything to support RTL. Just change the locale and KeyboardKit will automatically adjusts the keyboard.

KeyboardKit extends Foundation ``Locale`` with keyboard-specific views, that can be used to perform locale-specific operations, pick locales, etc.

<img src="{{page.assets}}locale-contextmenu-space.jpg" width=450 />


## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks localized callouts and layout services for every locale in your license. This lets you generate a fully localized keyboard with no additional code.

You can use the `Keyboard.LocaleSettingsScreen` to let users pick which locales to add to a keyboard.

<img src="{{page.assets}}keyboard-localesettingsscreen.jpg" width=450 />

KeyboardKit Pro also unlocks additional diacritics and input engines for languages like Vietnamese.

[Pro]: /pro

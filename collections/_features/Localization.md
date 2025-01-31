---
title: Localization
hero-emoji: 🌐
---

Flexible localization support is an important part of a software keyboard. A keyboard should be able to easily change the locale without major code changes.

KeyboardKit supports [{{site.locales.count}} locales](/locales):

{{ site.locales.flags }}

Each supported `Locale` has additional keyboard-specific information and capabilities, and localized assets and strings that can be translated with the ``KKL10n`` enum.

KeyboardKit supports LTR (Left-To-Right) and RTL locales. You don't need to do anything to support RTL. Just change the locale and KeyboardKit automatically adjusts the keyboard.


## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks locale-specific callouts, input sets and layout services for every locale in a license. This lets you create a fully localized ``KeyboardView`` for every locale, with no additional code.



[Pro]: /pro

---
title:  KeyboardKit 5.5 
date:   2022-01-03 12:00:00 +0100
tags:   general
---

KeyboardKit 5.5 is out, with RTL support! 🚀 5.5 adds support for 🇦🇪 Arabic, 🇹🇯 Kurdish Sorani and 🇮🇷 Persian.

As is always the case with new locales, KeyboardKit adds a new keyboard locale as well as localized content for the new locales. KeyboardKit Pro then adds full system keyboard support for all new locales.

This means that with KeyboardKit alone, you can create new keyboards that can use the localized content of all available locales. If you add KeyboardKit Pro to the mix, you can create complete system keyboards that mimic the native keyboards, together with native features like secondary input action callouts.

RTL support has involved some behavioral changes in the library, where some images are changed to conform to RTL keyboards. Other than that, the keyboard layout direction is still LTR, which means that you keep defining your keyboards as you've always done.

To make it easier to test RTL keyboards, the demo now has a second keyboard, which is configured for RTL. It currently specifies Persian as its primary language, but that's just to get RTL to work. Selecting this keyboard should make text fields switch to RTL input. 

Since RTL support is a brand new feature with many locale-specific behaviors, please reach out if you find anything that doesn't behave as expected.
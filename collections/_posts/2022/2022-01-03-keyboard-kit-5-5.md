---
title:  KeyboardKit 5.5 
date:   2022-01-03 12:00:00 +0100
tags:   general
---

KeyboardKit 5.5 is out! 🚀 It adds overall RTL support and support for 🇦🇪 Arabic, 🇹🇯 Kurdish Sorani and 🇮🇷 Persian.

As with all new locales, KeyboardKit adds new keyboard locales as well as localized strings for the new locales, after which KeyboardKit Pro adds full system keyboard support for all new locales.

This means that KeyboardKit lets you create keyboards that can use the localized content of all available locales, while KeyboardKit Pro lets you create complete system keyboards that mimic native keyboards.

RTL support has involved some behavioral changes in the library, where some images are changed to conform to RTL keyboards. Other than that, the keyboard layout direction is still LTR, which means that you keep defining your keyboards as you've always done.

To make it easier to test RTL keyboards, the demo now has a second keyboard, which is configured for RTL. It currently specifies Persian as its primary language, but that's just to get RTL to work. Selecting this keyboard should make text fields switch to RTL input. 

Since RTL support is a brand new feature with many locale-specific behaviors, please reach out if you find anything that doesn't behave as expected.
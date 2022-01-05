---
title:  KeyboardKit 5.6 
date:   2022-01-05 12:00:00 +0100
tags:   general
---

KeyboardKit 5.6 is out! 🚀 It adds support for for 🇧🇷 Brazilian, 🇮🇪 Irish, 🇵🇹 Portuguese and 🇹🇷 Turkish and makes it easier to setup system keyboards.

As with all new locales, KeyboardKit adds new keyboard locales as well as localized strings for the new locales, after which KeyboardKit Pro adds full system keyboard support for all new locales.

This means that KeyboardKit lets you create keyboards that can use the localized content of all available locales, while KeyboardKit Pro lets you create complete system keyboards that mimic native keyboards for all supported locales.

KeyboardKit 5.6 makes it easier to create system keyboards, by now accepting an input view controller, which is then used to resolve all other services. It defaults to the shared controller, which means that you actually don't even have to provide a controller if you don't want to.

Furthermore, the system keyboard will now automatically setup an emoji keyboard if you switch the keyboard type to emojis. This only works for iOS 14 and later, since the lazy stacks used by the emoji keyboard requires iOS 14.
---
title: Layout
hero-emoji: 🔣
---


A flexible keyboard layout is at the heart of a software keyboard, with many considerations like the current device model, screen orientation, locale, etc.

<img width="450" alt="An English Keyboard" src="{{page.assets}}keyboardview-english.jpg" />

KeyboardKit lets you use ``InputSet``s to define input keys, and ``KeyboardLayout``s to define the full set of keys. This gives you maximum flexibility to define layouts for different locales and configurations.

In KeyboardKit, a ``KeyboardLayoutService`` can generate dynamic layouts at runtime. This provides the flexibility we need to adjust the layout as needed.


## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks additional input sets like `qwertz`, `azerty` as well as locale-specific input sets and layouts for all [{{site.locales.count}} supported languages](/locales).

<img width="450" alt="A Swedish Keyboard" src="{{page.assets}}keyboardview-swedish.jpg" />

KeyboardKit Pro also unlocks a layout service that can generate iPad Pro layouts for all locales:

<img width="650" alt="An iPad Pro keyboard" src="{{page.assets}}keyboardview-ipadpro.jpg" />

KeyboardKit Pro also unlocks ways to easily add additional input rows above the `KeyboardView`:

<img width="650" alt="An input toolbar" src="{{page.assets}}inputtoolbar-ipadpro.png" />

KeyboardKit Pro also unlocks ``KeyboardLayout`` capabilities that make it easier to customize a layout.


[Pro]: /pro   

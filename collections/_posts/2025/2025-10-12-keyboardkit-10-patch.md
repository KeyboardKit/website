---
title:  The first KeyboardKit 10 patch is out
date:   2025-10-12 06:00:00 +0100
tags:   releases accessibility clipboard emojis host

assets: /assets/blog/25/1012/
image: /assets/blog/25/1012/image.jpg
image-show: 0

release: https://github.com/KeyboardKit/KeyboardKit-Binaries/releases/tag/10.0.1
---

KeyboardKit 10.0.1 is out! This first patch to 10.0 improves accessibility and the emoji keyboard, and tweaks a bunch of things.

<!--![Blog header image]({{page.image}})-->


## 🌱 Essentials

This patch adds more host applications and fixes a bug where keys were not highlighted if a theme wasn't applied. `Keyboard.ButtonStyle` defines a background opacity to help with this.

## ♿ Accessibility

The 10.0.1 patch improves and fixes accessibility by applying the `isKeyboardKey` trait instead of the `isButton` one, which enables the accessibility rotor and lets you set the typing mode.

The `Keyboard+ToggleToolbar` also applies `.accessibilityHidden` to the hidden toolbar, which stops it from interfering with the main keyboard.

We will post a separate blog post about these accessibility updates, with screenshots and examples.

## 😀 Emojis

The `EmojiKeyboard` has been updated to let you swipe between skin tones without first having to swipe up to the popover. There are also new logic to let you dismiss the popover by swiping down.

## 🏠 Host Application

This patch updates the `KeyboardHostApplication.allCases` to define some new apps. You can always reach out to us if you want to add support for more host applications.

## Conclusion

KeyboardKit 10.0.1 improves accessibility and the emoji keyboard, and tweaks some behaviors and bugs. For more info, please see the [KeyboardKit 10 release notes]({{page.release}}).
---
title:  KeyboardKit 9.9
date:   2025-08-26 07:00:00 +0100
tags:   releases design liquid-glass

image-show: 0
image: /assets/versions/9_9.jpg
assets: /assets/blog/25/0826/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.9.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.9.0
---

KeyboardKit 9.9 is out! This version adds support for Liquid Glass to all devices that run iOS 26, and reverts the layout view modifier beta feature that was introduced in KeyboardKit 9.8.

![Blog header image]({{page.image}})


## 💧 Liquid Glass Support

KeyboardKit 9.9 will automatically adjust the standard styles and layout configurations to match the new Liquid Glass design in iOS 26 and later.

This means that `KeyboardView` and all other keyboard components will automatically be updated for the new design, with no code changes needed. This also includes all predefined themes.

`KeyboardInputViewController` also has a new `setIsLiquidGlassEnabled(...)` function to let you enable or disable the Liquid Glass design regardless of the current operating system.


## 😀 Emoji Keyboard Adjustments

The `EmojiKeyboard` has been adjusted to apply a style-based spacing between its sections. This adds a better separation between categories.


## 📄 Text Input Cursor Movement

The `UITextDocumentProxy` has been extended with more cursor movement functionality, like moving the cursor to the beginning and end of the entire document.

Since this builds upon the full document reader, it's only available in KeyboardKit Pro. But it doesn't require a license to be used.


## 💥 Keyboard Layout View Modifier

This was a promising change, but it turns out that the `.keyboardLayout(...)` view modifier that was added as a beta feature in KeyboardKit 9.8 is not needed.

Since `KeyboardView` already has a `layout` parameter for custom layouts, we can use it directly. This also removes any risk of triggering multiple recalculations of the keyboard layout.

If you use the `.keyboardLayout` view modifier, please switch to injecting the layout into the initializer.


## Conclusion

KeyboardKit 9.9 is a small release that prepares the library for iOS 26 and fixes a couple of bugs. It also removes the recently added layout view modifier, since it's not needed.

For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 
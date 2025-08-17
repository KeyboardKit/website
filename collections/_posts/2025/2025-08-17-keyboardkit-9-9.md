---
title:  KeyboardKit 9.9 Beta
date:   2025-08-17 07:00:00 +0100
tags:   releases liquid-glass

image-show: 0
image: /assets/versions/9_9-beta.jpg
assets: /assets/blog/25/0817/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.9.0-beta.2
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.9.0-beta.2
---

KeyboardKit 9.9 beta is out! This version adds support for Liquid Glass to all devices that run iOS 26, and reverts the layout view modifier beta feature that was introduced in KeyboardKit 9.8.

![Blog header image]({{page.image}})


## 💧 Liquid Glass Support

KeyboardKit 9.9 will automatically adjust the standard styles and layout configurations to match the new Liquid Glass design, when it's run on a device that runs iOS 26 or later.

This means that `KeyboardView` and all other keyboard components will automatically be updated for the new design, including all predefined keyboard themes.

`KeyboardController` has a new `setIsLiquidGlassEnabled(...)` function that lets you enable or disable the new Liquid Glass design regardless of the device and operating system, if you need to.


## 🗑️ Keyboard Layout View Modifier

This was a promising change, but it turns out that the `.keyboardLayout(...)` view modifier that was added as a beta feature in KeyboardKit 9.8 is not needed.

Since `KeyboardView` already has a `layout` parameter for custom layouts, we can use it directly. This also removes any risk of triggering multiple recalculations of the keyboard layout.

If you use the `.keyboardLayout` view modifier, please switch to injecting the layout into the initializer.


## Conclusion

KeyboardKit 9.9 is a small release that prepares the library for iOS 26 and fixes a couple of bugs. It also removes the recently added layout view modifier, since it's not needed.

For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 
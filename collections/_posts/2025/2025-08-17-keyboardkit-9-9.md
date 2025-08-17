---
title:  KeyboardKit 9.9 Beta
date:   2025-08-17 07:00:00 +0100
tags:   releases liquid-glass

image-show: 0
image: /assets/versions/9_9-beta.jpg
assets: /assets/blog/25/0817/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.9.0-beta.1
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.9.0-beta.1
---

KeyboardKit 9.9 beat 1 is out! This version adds support for Liquid Glass to all devices that run iOS 26, as well as all aligned platform versions.

![Blog header image]({{page.image}})

KeyboardKit 9.9 will automatically adjust the standard styles and layout configurations for the new Liquid Glass design, when it's run on a device that runs iOS 26 or later.

Devices that are still on iOS 18 or earlier will still get the old design, which will be supported for as long as KeyboardKit supports iOS 18.


## ✨ Features

`KeyboardController` has a new `setIsLiquidGlassEnabled(...)` function that can be used to enable the new Liquid Glass design on devices that run older OS versions.

Activating Liquid Glass design on older OS versions is not recommended, but you can if you need to.


## 💡 Adjustments

`KeyboardView` and all related keyboard styles and device layout configirations have been updated to support the new Liquid Glass design when running iOS 26 or later.


## Conclusion

KeyboardKit 9.9 is a small release that prepares the library for iOS 26 and Liquid Glass. The design may change if the Liquid Glass design changes in updoming betas.

For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 
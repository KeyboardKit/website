---
title:  KeyboardKit 9.2 Beta
date:   2025-02-11 08:00:00 +0100
tags:   releases layout settings

image-show: 0
image: /assets/headers/versions/9_2-beta.jpg
assets: /assets/blog/25/0211/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.2-b.5
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.2-b.5
---

The KeyboardKit 9.2 Beta is out! 🚀 This version adds more keyboard settings, and makes it possible to use alternate keyboard layouts for locales that support it. Let's take a look!

![KeyboardKit header image]({{page.image}})


## More Settings

KeyboardKit 9.2 adds many new settings and environment properties, e.g. for the space long press behavior, trailing space action, input toolbar, and keyboard dock edge. 

![A screenshot of the new settings]({{page.assets}}screenshot-settings.jpg){:width="250"}

These new settings are added to the KeyboardKit Pro settings screens as well, which means that it's as easy for you to change them with code, as it is for your users to change them in the app.


## Alternate Keyboard Layouts

KeyboardKit 9.2 makes it possible to use alternate keyboard layouts for locales that support it, and add many keyboards for locales that support QWERTY, AZERTY, QWERTZ & Colemak layouts.

<div class="grid col3">
    <img src="{{page.assets}}screenshot-layouttype-1.jpg" />
    <img src="{{page.assets}}screenshot-layouttype-2.jpg" />
    <img src="{{page.assets}}screenshot-layouttype-3.jpg" />
</div>

The new layout capabilities are used by the locale context menu and KeyboardKit Pro locale screen, which means that you can let users pick between supported layouts when adding a locale.

The new layout capabilities are honored by all KeyboardKit Pro layout services. Since not all locales support multiple locales, KeyboardKit provides new APIs to handle locales and layouts.


## Host Application Improvements

KeyboardKit 9.2 makes the `hostApplicationBundleId` auto-persisted, so that it can be read from the main app target, when it's opened from the keyboard to perform certain operations.


## Conclusion

KeyboardKit 9.2 contains many new settings, and features that makes KeyboardKit even better. For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 
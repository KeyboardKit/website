---
title:  KeyboardKit 6.1
date:   2022-08-22 08:00:00 +0100
tags:   releases rtl localization autocomplete
---

KeyboardKit 6.1 is out, with improved preview capabilities, a bunch of autocomplete improvements and support for Kurdish Sorani (Arabic).


## Improved preview capabilities

In earlier versions of KeyboardKit, you had to enable "preview mode" to be able to preview any SwiftUI views that contained views from KeyboardKit. In 6.1, this is no longer needed, which means that previews should work without any additional work.

The remaining preview mode components are now deprecated and have no effect. They will be removed in the next major update.


## Autocomplete

The standard autocomplete provider in KeyboardKit Pro has been improved to handle casing in a way that is closer to the stock keyboard.


## Kurdish Sorani (Arabic)

This new keyboard locale uses Kurdish Sorani localization, but a pure Arabic input set and callout actions. The locale may be tweaked in future versions, if it turns out that there are locale variants that are not handled.


## Conclusion

KeyboardKit 6.1 is a small update that hopefully brings nice-to-have improvements to both standard and pro users.
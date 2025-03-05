---
title:  KeyboardKit 9.3 Beta 1
date:   2025-03-04 08:00:00 +0100
tags:   releases emojis layout localization settings

image-show: 0
image: /assets/headers/versions/9_3-beta.jpg
assets: /assets/blog/25/0304/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.3-b.1
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.3-b.1
---

KeyboardKit 9.3 Beta 1 is out! This minor update adds support for Vietnamese TELEX, VIQR and VNI, makes many locales support Dvorak layouts, and adds support for emoji colon search.

![KeyboardKit header image]({{page.image}})


## Vietnamese (Beta)

KeyboardKit 9.3 adds support for Vietnamese TELEX, VIQR and VNI, with each supporting QWERTY, QWERTZ, and AZERTY.

![A screenshot of Vietnamese layouts]({{page.assets}}vietnamese.jpg)

This Vietnamese support builds on new diacritics and a new `KeyboardInput.Vietnamese` namespace. 

Since this is in beta, give it a try and report any bugs you find or improvements that can be made.


## Dvorak

KeyboardKit 9.3 adds Dvorak layout support, which is a quite popular, alternate keyboard layout:

![A screenshot of Dvorak layout on iPhone]({{page.assets}}dvorak.jpg){: width="350"}

Dvorak is supported by all keyboard locales that support QWERTY, QWERTZ, AZERTY, and Colemak:

Catalan, Croatian, Dutch, Dutch (Belgium), English (All), Estonian, Filipino, Hungarian, Indonesian, Irish, Italian, Latvian, Malay, Polish, Portuguese, Portuguese (Brazil), Romanian, Serbian (Latin), Slovenian, Swahili, Uzbek, Welsh


## Emoji Autocomplete

KeyboardKit 9.3 adds support for emoji colon search, which integrates with the local autocomplete:

![A screenshot of emoji colon search]({{page.assets}}emojis.jpg){: width="350"}

Starting a word with colon will provide you with emoji search results in the autocomplete toolbar. This feature can be toggled on and off with the autocomplete settings.


## Action Callout Improvements

This version improves the action callout by requiring less swiping and making the callout items less wide when too many are shown to fit the screen when using the button frame width.

The callout also handles swipe gestures on RTL devices properly, which was not the case before.


## Race Condition Bug Fix

KeyboardKit Pro 9.3 fixes a race condition in the App Group set up, which could cause settings to be used before App Group sync was enabled.



## Conclusion

KeyboardKit 9.3 adds support for Vietnamese (TELEX, VIQR, and VNI), Dvorak layout, and new emoji autocomplete support. For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 
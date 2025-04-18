---
title:  KeyboardKit 9.4 Beta
date:   2025-04-18 08:00:00 +0100
tags:   releases emojis layout localization performance

image-show: 0
image: /assets/headers/versions/9_4-beta.jpg
assets: /assets/blog/25/0418/

redirect_from: /blog/2025/03/04/keyboardkit-9-3

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.4-b.1
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.4-b.1
---

KeyboardKit 9.4 beta 1 is out! This version adds new Emojis 16 emojis, localizes emojis in more languages, adds support for Pamiri Shughni and improves the typing performance.

![KeyboardKit header image]({{page.image}})


## Emojis

KeyboardKit 9.4 adds support for Emojis 16 emojis to iOS 18.4 and aligned versions, and localizes emojis in French,Italian, Portuguese (Brazil), and Russian.


## Localization 

KeyboardKit 9.4 adds support for Pamiri Shughni (Shughni Tajik), including localized resources and locale-specific keyboard layouts.


## Autocorrect

KeyboardKit 9.4 improves local autocomplete behavior by extending the additional autocorrect replacement dictionary. This should lead to fewer typing errors when typing in English, since more combines words will now be autocorrected.


## Performance

KeyboardKit 9.4 aims to improve performance by reducing the number of redraws per keypress, which in turn leads to fewer layout calculations. Initial tests show that this improves the typing experience, since fewer redraws lead to a smoother experience.


## Conclusion

KeyboardKit 9.4 adds new features, adjustments, and bug fixes. For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 
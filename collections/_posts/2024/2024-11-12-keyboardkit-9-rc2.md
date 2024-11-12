---
title:  KeyboardKit 9.0 RC 2
date:   2024-11-12 08:00:00 +0100
tags:   releases keyboard actions autocomplete callouts dictation emojis external-keyboard feedback localization layout settings text-input pro

post-rc1: /blog/2024/11/08/keyboardkit-9-rc1

tweet: https://x.com/GetKeyboardKit/status/1854865800735142275
toot:  https://techhub.social/@keyboardkit/113447367849991624

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.0.0-rc.2
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.0.0-rc.2
---

The KeyboardKit 9.0 Release Candidate 2 is out! 🚀 This update builds on the [Release Candidate 1]({{page.post-rc1}}) and improves a few things before the upcoming release.

![KeyboardKit logo]({{page.image}})

For a full specification of what's new in KeyboardKit 9, see the [Release Candidate 1 post]({{page.post-rc1}}). This is a big major release, so the RC phase most probably involve a few more candidates before the release.

This update makes the locale presentation locale non-optional, to make it easier to use. There are also new autocomplete settings to disable next word prediction.

The auto-cancellation gestures that help to fix invalid gestures that may be triggered when scrolling a scroll view in the keyboard toolbar, are now only applied to the topmost row.

The KeyboardKit Pro input toolbar handles the `.numbers` mode better, by varying its keys based on the keyboard type. Numbers are used for all keyboard types except `.numeric`, which uses symbols.

The KeyboardKit Pro themes are also tweaked to look better. The `.minimal` and `.swifty` themes properly tints the primary buttons for all keyboard types, and highlights tapped buttons.


## Conclusion

KeyboardKit 9 is a huge step forward, and makes using KeyboardKit easier than ever before. Many since long requested features are finally in place, and more will come in subsequent minor updates.

To give this release candidate a try, use the `9.0.0-rc.2` tag. For more information, see the [release]({{page.release}}) or the [KeyboardKit Pro release]({{page.release-pro}}). Don't hesistate to reach out if you find bugs or have any feedback.
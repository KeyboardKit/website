---
title:  KeyboardKit 8.5 RC1
date:   2024-04-08 08:00:00 +0100
tags:   releases emojis feedback

image:  /assets/headers/icon.png

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.5.0-rc1
release-pro: https://github.com/KeyboardKitPro/KeyboardKitPro/releases/tag/8.5.0-rc1
---

KeyboardKit 8.5 RC1 is out. This is a big update that renames and move many types and adds nice features, so make sure to check it out to test it before it goes live next week.

![KeyboardKit logo]({{page.image}})


## Renamed and moved types

KeyboardKit 8.5 moves more types into their related namespaces, to make the SDK surface smaller and easier to overview. It also renames many types to be more intuitive.

Since this release involves many renamings, the `Deprecations` section in the release notes only lists deprecated types, not renamed ones.

The version adds deprecations to help you migrate to the new type names. After upgrading to 5.0 RC1, you should get guides to help you automatically migrate to the new structure.


## Renamed and new namespaces

The `KeyboardState` namespace has been renamed to `KeyboardStatus`, since it was often confused with `Keyboard.KeyboardState`.

There are new namespaces too. For instance, `KeyboardApp` has app-related types, `KeyboardFeedback` has feedback-related types, and `KeyboardSettings` has settings-related types.


## New home screen template

KeyboardKit Pro also adds a new `KeyboardApp.HomeScreen` view, which can be used as a template for the main app home screen.


## iPad Pro used in more places

KeyboardKit Pro makes these locales use the iPad Pro layout: `Catalan`, `Czech`, `Danish`, `Faroese`, `Finnish`, `Georgian`, `German`, `German (Austria)`, `German (Switzerland)`, `Greek`, `Hawaiian`, `Icelandic`, `Inari Sámi`, `Macedonian`, `Maltese`, `Mongolian`, `Northern Sámi`, `Norwegian`, `Russian`, `Serbian`, `Slovak`, `Turkish`, `Ukrainian`.


## New feedback capabilities

KeyboardKit makes it easier to customize audio and haptic feedback, and can now play URL-based audiom, e.g. from audio files in the main bundle.


## Emoji changes

To make it even safer to use KeyboardKit Pro's emoji features, the `EmojiKeyboard` sub-components are now throwing as well, instead of rendering empty content if they fail to load.

Furthermore, the `Emoji.Grid` component has been moved to `EmojiKit`, and will no longer be a part of KeyboardKit Pro.


## UI Changes

The `KeyboardStatus.Label` now uses its style to change the enabled and disabled icons as well. This makes it even easier to customize this view. It also uses filled icon variants, by default.

The `KeyboardStyle.StandardProvider` now applies a light weight to the backspace key, instead of regular.


## Conclusion

Please see the [release notes]({{page.release}}) for a KeyboardKit and [KeyboardKit Pro]({{page.release-pro}}) for a full list of changes. Don't hesitate to reach out if you have any questions.
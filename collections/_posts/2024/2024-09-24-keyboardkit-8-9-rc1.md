---
title:  KeyboardKit 8.9 RC 1
date:   2024-09-21 08:00:00 +0100
tags:   releases essentials app callouts layout services themes views

github: https://github.com/KeyboardKit/KeyboardKit/issues/795

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.9-rc.1
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/8.9-rc.1

tweet:  https://x.com/GetKeyboardKit/status/1838362913628684781
toot:   https://techhub.social/@keyboardkit/113189510201135156
---

KeyboardKit 8.9 is another massive update that adds a lot of features, improves how the keyboard extension is set up, renames services, simplifies registering localized service overrides, etc.

![KeyboardKit logo]({{page.image}})


## 🚨 Important information

KeyboardKit 8.9 currently has a lot of deprecations, since the structure is being changed and types are being renamed to make the upcoming 9.0 cleaner.


## 💡 Renamings and Deprecations

This version continues to rename types to make things more consistent. This means that are now many deprecations, which is all in service for a clean 9.0 transition.


### ‼️ Set up changes

This version lets you use a `KeyboardApp` to set up your keyboard extension, and separates setting up the keyboard from setting up the keyboard view.

You can now call `setup(for:)` or `setupPro(for:completion:)` in `viewDidLoad()` to set up a keyboard extension with a `KeyboardApp`, then use the new `setupKeyboardView(_:)` to set up a keyboard view.


### ✨ Features

This version adds a new `Keyboard.NumberPad` component that can be used to render a number pad. The `KeyboardView` will automatically render this when a textfield prefers it.

This version also adds `tryRegisterLocalizedCalloutService` to the `Keyboard.Services` type, to make it easier to register localized callouts.

This version also adds `tryRegisterLocalizedLayoutService` to the `Keyboard.Services` type, to make it easier to register localized layouts.

This version adds more properties to `KeyboardApp`, which makes it possible to set up even more things with a single app value, both in the app and in the keyboard.

The `KeyboardView` now applies dynamic tap area sizes that are based on next character prediction, which means that more probable keys get a little larger tap area.


### 👑 Pro Features

This version adds a new `KeyboardThemeContext`, which can be used to persist themes. It also adds a `KeyboardApp.ThemeScreen` that can be used as a theme picker.


### ⚡️ Shorthands

There are many new service shorthands, which makes it easier to refer to implementations. For instance, you can now use `.standard(...)` instead of `KeyboardAction.StandardHandler`.


### 🐛 Bug Fixes

This version protect against an undefined key error when using `KeyboardInputViewController` in an app. It also makes sure that replacing some services properly updates other.

This version also fixes a missing callout action for `i` on a Ukrainian keyboard.


## Conclusion

KeyboardKit 8.8 is a massive version that prepares the SDK for the upcoming 9.0. Make sure to test the release candidate and get in touch if you have feedback or run into problems.

For more information, see the [release notes]({{page.release}}) for KeyboardKit & [KeyboardKit Pro]({{page.release-pro}}).
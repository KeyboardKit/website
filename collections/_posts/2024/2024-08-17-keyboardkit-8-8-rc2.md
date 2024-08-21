---
title:  KeyboardKit 8.8 RC2 is out
date:   2024-08-21 10:00:00 +0100
tags:   releases pro essentials app autocomplete dictation emoji feedback layout settings

image:  /assets/headers/icon.png

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.8-rc2
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/8.8-rc2

tweet:  https://x.com/GetKeyboardKit/status/1826336995431645409
toot:   https://techhub.social/@keyboardkit/113001607218567299
---

The KeyboardKit 8.8 Release Candidate 2 is out! KeyboardKit 8.8 is a massive update that adds a lot of features, improves autocomplete & emojis, renames services, and much, much more. 

You can try the RC2 by upgrading to the `8.8-rc2` tag. Since this release sets the tone for the future 9.0 update, which will continue in 8.9, your feedback is most welcome.

![KeyboardKit logo]({{page.image}})


## 🆕 New from RC1

The RC2 release fixes some bugs that were found in the RC1 and makes it a lot easier to set up App Group-synced settings, although it involves a small, breaking change (see below). 

The RC2 adds a new `KeyboardApp` struct that can specify all KeyboardKit-related information about your app, as well as a `KeyboardAppView` that makes it a lot easier to set up the main app.

These two new additions make it trivial to set up App Group syncing, KeyboardKit Pro, dictation, etc.

The `KeyboardSettings` also has a new `isAppGroupSynced` property that makes it easy to see if you've successfully set up an app group-synced store.


## 💥 Breaking changes

This RC2 has one small, but breaking change. Due to how settings are now handled by KeyboardKit, the `KeyboardSettings.store` no longer accept optional values. 

This means that you can only replace this store with another valid store, which removes the risk of accidentally ending up with a `nil` store.



## 🚨 Important information

KeyboardKit 8.8 introduces many new deprecations, since the structure is being changed and types are being renamed to make the upcoming 9.0 cleaner.

Many service types are renamed to use the new service name. Types like `KeyboardLayoutProvider` is now called `KeyboardLayoutService`, to add more consistency to the SDK.

Two exceptions are the `KeyboardActionHandler`, which is a better name, and `KeyboardStyleProvider`, which will most probably be removed in 9.0 and replaced with SwiftUI view modifiers.

KeyboardKit 9.0 is planned to be released soon after the public release of iOS 18. It will remove all deprecations and bump the deployment target to iOS 15.


## 💡 Renamings and Deprecations

This version continues to deprecate types for a clean 9.0 release. This means that there are now many deprecations (which may be confusing), but it's all in service for a wonderful 9.0 version.

This version deprecates the recently added settings types by adding persistency to the various context types instead. This avoids having to keep the contexts in sync with the settings.

This also means that from now on, you will not have to manually persist things like the keyboard context locale, since the context will persist it automatically.


## ✨ Features and Adjustments

KeyboardKit 8.8 adds a lot of new functionality and changes many things (with proper deprecations to avoid breaking changes). For instance:

### ⌨️ Essentials

KeyboardKit 8.8 renames the `SystemKeyboard` view and related views to `KeyboardView`, which plays better with the standard SwiftUI conventions.

The `KeyboardView` will now by default show a numeric input toolbar on large iPad devices. You can use the input toolbar view modifier to customize this behavior.

The `KeyboardContext` (and all other contexts) now provide auto-persisted state properties that are automatically written to `KeyboardSettings.store`.

The `KeyboardContext` also has new capabilities, like being able to override the `returnKeyType`, specify explicitly added `addedLocales`, many new locale functions etc.


### 📱 App Screens

KeyboardKit Pro adds a `KeyboardApp.SettingsScreen` and a `KeyboardApp.LocaleScreen`, which make it a lot easier than before to add keyboard settings to the main app target, as well as to the keyboard.

The `KeyboardApp.HomeScreen` can be configured to display a keyboard section, which contains links to the settings and locale screen. All screens can be customized and localized.

Just make sure to set up an App Group-synced store for settings to automatically sync between the keyboard and the main app. The `KeyboardSettings` type has new tools for this.

### 💡 Autocomplete

The `Autocomplete.Suggestion` type has a new `type` property that replaces the separate boolean type properties, which menas that the type is better handled in the library.

The `Autocomplete.Suggestion` type also has a new `source` property to indicate from where it comes.

THe `Autocomplete.LocalService` now applies a source to its suggestions and is less aggressive with autocorrect than before. Both Pro services can now perform next character prediction.

### 😀 Emojis

This version adds support for Emoji 15.1, and also adds memory optimized emoji keyboard styles that make the `EmojiKeyboard` consume a LOT less memory, by rendering lower resolution items. 

This version also tweaks the emoji keyboard configuration for all device types, to make it look a lot closer to the native one on all device types, including larger 13" iPads.

The `EmojiKeyboard` will also now display a dismiss button on iPad devices, and automatically add an extra row of emojis if an input toolbar is used.

The `Keyboard.Services` type also has a new `frequentEmojiProvider`. This lets us remove the static provider instance in `Emoji` to help prepare for strict concurrency support in Swift 6.

### 👆 Feedback

KeyboardKit 8.8 adds a new `FeedbackService` that replaces the shared feedback engines in previous verisons. This also helps us prepare for strict concurrency support.

The `.minimal` haptic feedback configuration has been replaced by `.disabled`, which now triggers the long press on space haptic feedback (this is the default behavior when disabling haptics in iOS).

The `KeyboardActionHandler` can also trigger audio and haptic feedback in more ways than before

### 🌐 Localization

The `KeyboardLocale.ContextMenu` will now use the keyboard context's new `addedLocales` property if it's set, instead of `locales`. This lets the user determine which locales to use.


## Conclusion

KeyboardKit 8.8 is a massive version that prepares the SDK for the upcoming 9.0. Make sure to test the release candidate and get in touch if you have feedback or run into problems.

For more information, see the [release notes]({{page.release}}) for KeyboardKit & [KeyboardKit Pro]({{page.release-pro}}).
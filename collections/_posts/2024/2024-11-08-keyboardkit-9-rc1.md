---
title:  KeyboardKit 9.0 RC 1
date:   2024-11-08 08:00:00 +0100
tags:   releases keyboard actions autocomplete callouts dictation emojis external-keyboard feedback localization layout settings text-input pro

tweet: https://x.com/GetKeyboardKit/status/1854865800735142275
toot:  https://techhub.social/@keyboardkit/113447367849991624

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.0.0-rc.1
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.0.0-rc.1
---

KeyboardKit 9.0 Release Candidate 1 is out! 🚀 This article will take a look at all the new things that will make KeyboardKit better than ever before, and how to best upgrade from KeyboardKit 8.

![KeyboardKit logo]({{page.image}})


## TLDR;

If you find this post too long (which is a great thing) let's sum up the most important features:

The keyboard is now able to both float and be collapsed on iPad. Local autocomplete lets you use 3rd party AI tools (Claude is first out) for next word prediction. Callouts are easier to use and look better than before. Dictation is a lot easier to use. Emoji is better localized and the emoji keyboard supports search & scrolling through categories. Haptic feedback is lighter when typing. Localization adds support for 🇦🇺 English (Australia) and 🇨🇦 English (Canada), bringing the number of supported locales up to `70`. Hey, there's so much in this release that even the TLDR; became too long to read.

Besides all the new features, KeyboardKit has been cleaned up and polished, making it a lot easier to use. Some changes have been postponed for later, to avoid making the release too big, so there are even more great things in the pipline for the future.


## Release Candidate Phase

The KeyboardKit 9 Release Candidate process will be more rigorous than for minor updates, since so much is new and has changed. KeyboardKit 9 is scheduled for late November release, so make sure to give the RC a go, and reach out if you find any bugs or have any thoughts about the release.



## KeyboardKit 8 Migration Guide

When migrating from KeyboardKit 8 to 9, first upgrade to the last 8.9 version and fix all deprecation warnings that you may receive. This will help you prepare for KeyboardKit 9.

After upgrading to KeyboardKit 9, it will provide you with migration deprecations that will help you adjust your code, if needed. You may also find that you upgrade without any warnings whatsoever.

The legacy migrations will be removed in 9.1, so make sure to address any deprecation warnings as soon as you can, before upgrading to 9.1. If you upgrade from KeyboardKit 7, first go through 8.



## KeyboardKit 9

KeyboardKit 9 upgrades the deployment targets to `iOS 15`, `macOS 12`, `tvOS 15`, `watchOS 8`, and `visionOS 1`, removes all deprecated code, and simplifies many concepts.

This version has migration deprecations to help you transition from KeyboardKit 8. Just follow the instructions to migrate your code if needed. They will be removed in 9.1.

You may still run into a few breaking changes, where migrations were not possible to add due to architectural changes. For such breaking changes, see the changes & comments below.

### 🧪 Experiments

The next keyboard button experiments have been made permanent, which should fix random bugs.

### ⌨️ Essentials

The `KeyboardContext` has a new `isKeyboardCollapsed` property that can collapse the keyboard, a new `keyboardCase` to decouple the keyboard type from its case, and a new `isKeyboardFloating` property.

The `KeyboardType.alphabetic` keyboard type is decoupled from the case, which makes the type a lot easier to use. Now set the `keyboardCase` to toggle case, instead of using the keyboard type.

The `KeyboardController` protocol now has `services` and `state` properties, so that it can be used in even more places. This drastically removes the SDKs dependencies of UIKit in certain places.

The `KeyboardView` now supports being used as a floating keyboard on iPad, which will render it as a phone keyboard. It also has a `collapsedView` that's displayed when `isKeyboardCollapsed` is true.

The new `Keyboard.CollapsedView` is a view that can be displayed when `isKeyboardCollapsed` is true.

### 💡 Autocomplete

The `AutocompleteService` now returns a `Autocomplete.ServiceResult` instead of a list of suggestions. The `Autocomplete.Suggestion` now implements `Codable` & `Equatable`, which makes it more versatile.

The `Autocomplete.Toolbar` now uses view builders to let you customize its content. The default views have been polished to look more native.

The `KeyboardInputController` now disables autocorrect instead of autocomplete if a keyboard type doesn't prefer autocomplete. The reason for this is that custom keyboards must always have a top padding, so hiding autocomplete makes little sense.

Finally, the KeyboardKit Pro `LocalService` now lets you specify a next word prediction request, to let you integrate with 3rd party AI tools. First out is Claude.

### 🗯️ Callouts

The `Callouts` namespace has been renamed to `KeyboardCallout` and simplified to only use a single style and a single context.

The `KeyboardStyleService` has been adjusted to return an optional callout style, to only override the environment style if it's defined. The `KeyboardTheme` is adjusted to only provide a single style as well.

The `.calloutStyle` view modifier can therefore be applied to `KeyboardView`, which will either use the service style or the environment one. This makes styling callouts even easier than before.

### 🎤 Dictation

The `Dictation` namespace is simplified to only use a single service that can handle all dictation. The new `DictationService` doesn't need a configuration. It uses keyboard state to set up its behavior.

### 😀 Emojis

Emoji localization has been drastically improved for English, and now supports Swedish localization.

The `.emojiKeyboardStyle` modifier takes a style builder instead of a style, to allow root level styling. This lets you apply a the memory optimized style from the root view, should you need it.

The standard emoji styles no longer take an input toolbar display mode. You can instead use a new `.augmented(for:)` style function if you need to adjust the style.

The `EmojiKeyboard` has been rebuilt from scratch, and now behaves more like the native keyboard, by scrolling through all categories. It also (finally) supports Emoji search.

### ⌨️ External Keyboard

The `ExternalKeyboardContext` has moved to the open-source library and added to `Keyboard.State`.

### 🔉 Feedback

The haptic feedback is adjusted to be lighter when typing, to make the typing not feel as heavy.

### 🇸🇪 Localization

This version adds support for 🇦🇺 English (Australia) and 🇨🇦 English (Canada), bringing the number of supported locales up to `70`.

The `KeyboardLocale` has been replaced with using the native `Locale` everywhere. This removes a lot of fiddling when handling locales in your keyboard.

### 🔣 Layout

An `InputSet` can now be created with device variations, which allows for resolving device-specific items at runtime. While the old type was destructive, the new type keeps all original state.

The `KeyboardLayout` type is now a `struct` instead of a `class`, to better represent the value type it's meant to be. This change may require you to change from `let` to `var` when you modify a layout.

### 🎛️ Settings

Persistent settings have moved from the various contexts to nested `settings` types, to separate the context properties from settings.

### 📝 Text Input

The `KeyboardContext` is now responsible for the `textInputProxy`. The controller refers to this proxy, but the context owns it.

The KeyboardKit Pro input text components can therefore be setup with a `KeyboardContext`, and no longer need a controller instance. 

### 👑 Pro

KeyboardKit Pro can now be activated with a license file, which means that you will no longer have to upgrade KeyboardKit version to upgrade your license.

License files will be provided to all yearly Gold & Enterprise customers that prefer to use a license file instead of a binary encoded license key.

### 🚨 Breaking Changes

There are breaking changes in this version, but most are handled by migration deprecations that will be removed in 9.1. Make sure to address any migration deprecation warnings you receive.

Some things that are not covered by migration deprecations are:

* All previously deprecated code has been removed.
* All previously mutable styles and configs are now computed.
* The dictation changes can't be migrated since a new service replaces the old ones.
* The `Autocomplete.Suggestion` additional info are now limited to string-based data.
* The `Autocomplete.LocalService` now requires a keyboard context for contextual info.
* The `KeyboardLayout` is now a struct, and must now be a `var` for you to customize it.
* The `KeyboardStyleService` and callout style view modifiers now only use the base style.
* The `StandardSpeechRecognizer` has been refactored, and must be updated for you to use it.

A problem that you may run into, is that the `KeyboardInputViewController` `setupKeyboardView(_ view: @autoclosure @escaping () -> Content)` is renamed to `setupKeyboardView(with:)` to remove the DocC ambiguity with the controller-based function. If you use this variant, just add an `with:` parameter.


## Conclusion

KeyboardKit 9 is a huge step forward, and makes using KeyboardKit easier than ever before. Many since long requested features are finally in place, and more will come in subsequent minor updates.

To give the KeyboardKit 9 Release Candidate a try, use the `9.0.0-rc.1` tag. For more information, see the [release]({{page.release}}) or the [KeyboardKit Pro release]({{page.release-pro}}). Don't hesistate to reach out if you find bugs or have any feedback.
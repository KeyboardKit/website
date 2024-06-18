---
title:  KeyboardKit 8.7 RC3
date:   2024-06-18 08:00:00 +0100
tags:   releases essentials autocomplete dictation feedback layout settings pro

image:  /assets/headers/icon.png

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.7-rc3
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/8.7-rc3
---

The KeyboardKit 8.7 Release Candidate 3 is out. This is a huge update that improves autocomplete, adds support for settings, improves layout handling, fixes some bugs, and much more.

![KeyboardKit logo]({{page.image}})


## Improved Autocomplete

KeyboardKit 8.7 greatly improves the autocomplete behavior and makes it possible to register your own custom autocorrections for all keyboard locales.

The `Autocomplete.LocalProvider` now returns proper unknown statuses for its suggestion, which the action handler will use to ask the provider to learn all unknown suggestions that the user applies.

You can toggle this behavior on and off, using the new `isAutoLearnEnabled` in `AutocompleteContext`.

The `AutocompleteContext` also has a new `preferredSuggestionCount` property that can be used to tell the provider how many suggestions to return, as well as a new `autocorrectDictionary`.

The `autocorrectDictionary` can be used to provide custom autocorrections for all supported locales to the provider. The local provider will prefer this dictionary before its own suggestions.

These new way to learn unknown suggestions and customize autocorrect will hopefully solve many frustrations involved with autocomplete, where the provider will behave better over time.

Another change is that the `KeyboardInputViewController` will check more places before performing autocomplete. The `KeyboardContext` `prefersAutocomplete` will now be used to make this decision.


## New Settings Types

This version adds new, observable `AutocompleteSettings`, `DictationSettings`, `FeedbackSettings`, and `Keyboard.Settings` types, which can be used to manage various settings.

`KeyboardSettings` is now an observable class with general settings. `KeyboardInputViewController` also has a new `settings` property, like it has for `services` and `state`.

Unlike the context classes, these settings types will persist changes, and can sync changes between the main app and the keyboard. KeyboardKit will sync any settings changes to its contexts.


## Sentence Configurations

`KeyboardBehavior` has a new `endSentenceText` property, which can customize how sentences should be ended. This makes it easy to configure the library for other locales, like Simplified Chinese.


## Native Keyboard Types

This version fixes a bug, where the native keyboard type was synced before becoming available. This version improves this, and also renders a correct layout for the `URL` and `webSearch` types.


## Native Font Support

The `KeyboardStyle.StandardProvider` and `Keyboard.ButtonStyle` now both supports specifying native `Fonts`, instead of just the `KeyboardFont`.

This makes it possible to more easily define a custom font for your designs, using the native APIs.


## Host Application Improvement

The KeyboardKit Pro `KeyboardHostApplication` type is extended with more applications, and has a new `url` property that can be used to open each app.

This makes it even easier to interact with many well-known apps, like LinkedIn, WhatsApp, etc.


## Conclusion

KeyboardKit 8.7 is another huge release, that adds many new features and improves many things.

Please give the new 8.7 Release Candidate a try and report if anything seems to be off. Also see the [release notes]({{page.release}}) for a KeyboardKit & [KeyboardKit Pro]({{page.release-pro}}) for more info.
---
title:  KeyboardKit 10 Developer Preview
date:   2025-08-31 07:00:00 +0100
tags:   releases

image-show: 0
image: /assets/versions/10_0-dp.jpg
assets: /assets/blog/25/0831/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/10.0.0-dp.1
---

The KeyboardKit 10 Developer Preview is now available to developers! This is a first test version for all of you who want to take the next major version for a test drive and provide some early feedback.

![Blog header image]({{page.image}})


## 📦 Project Changes

KeyboardKit 10 merges KeyboardKit and KeyboardKit Pro into a single, unified SDK that now targets iOS 16, macOS 13, tvOS 16, watchOS 10, and visionOS 1.

This means there will no longer be two separate KeyboardKit and KeyboardKit Pro projects. Instead, the Pro features are integrated into the core framework, with the same license protection as before.

This will result in a more cohesive developer experience, with a single GitHub project, a single SDK, a single way to add and set up KeyboardKit, and a single documentation for the entire SDK.

This will also result in less complexities for the development team, who for too long has struggled with keeping the two projects in sync. A single SDK will let us bring you new features faster.

Having as a single, closed-source library will also enable us to serve enterprise customers who may require enhanced security, as we can now integrate advanced protective features directly into the core engine. We are excited about the potentials that this change unlocks.

We strongly believe that going full closed-source will make it a lot easier to manage the project and to create new features and great documentation that will help everyone.


## 📄 KeyboardKit Pro License Changes

KeyboardKit 10 uses a new license file format. All KeyboardKit Pro Gold (yearly) and Custom license customers will receive updated files when KeyboardKit 10 is released.

If you use a license file and want to test the developer preview, you can [reach out]({{site.urls.email}}) to get a new file, or use your license key until KeyboardKit 10 is released.

Gumroad licenses will no longer parse locales from the purchase. Gumroad users must instead add the locales they want to use when setting up the library.


## 💿 Installing KeyboardKit 10

KeyboardKit 10 is exclusively installed from the main repository, even if you use KeyboardKit Pro.

This means that Pro users must change package URL to `https://github.com/keyboardkit/keyboardkit` and change all `import KeyboardKitPro` to `import KeyboardKit`.

If you upgrade to KeyboardKit 10 from an earlier version, make sure to follow the guide below.


## 🛣️ Upgrading from KeyboardKit 9

Migrating from KeyboardKit 9 to KeyboardKit 10 should be straightforward. Just follow these steps:

* To upgrade from even older versions, see each major version upgrade guide.
* To upgrade from KeyboardKit 9.x to 10.x, first upgrade to KeyboardKit 9.9.
* Make sure to address all deprecation warnings (if any) before you proceed.
* You can now upgrade to KeyboardKit 10.0, using the new, unified framework.
* If you face breaking changes, see the breaking changes section at the end.
* If you get migration deprecation warnings during build, you must fix them.
* You are done upgrading when you have no more breaking changes or warnings.

If you are on KeyboardKit 8.x or earlier, we recommend that you follow the upgrade guide of the older version. Once you're on KeyboardKit 9, the steps above should work.


## ⚠️ Migration Warnings

Although most deprecated parts of the library have been removed in this major version, some still remain as migration warnings, to help you migrate from KeyboardKit 9.9.

Code that triggers these warnings will not work as expected, and are only there to guide you. These warnings will be removed in KeyboardKit 10.1.

The migration warning approach has been very appreciated in earlier major versions, and we are happy to provide these warnings as an extra help this time around as well.


## 📗 Documentation

This online documentation is still built for KeyboardKit 9, but you can download the KeyboardKit 10 documentation from the [release page]({{page.release}}).


## ✨ Features

Although KeyboardKit 10 mainly focuses on project structure, architecture and simplifications, there are a few new features.

First of all `DeviceType` has a `preferredKeyboardDeviceType`, which makes `KeyboardView` render better on macOS and tvOS, where it's now using the iPad design and layout.

Several views and features that were previously in KeyboardKit Pro are now open to everyone, such as `Feedback.Toggle` and `Keyboard.BottomRow`, and many `KeyboardLayout` customizations.

Finally `Keyboard.InputType` is a new type that separates the keyboard type from the input type. This makes KeyboardKit better at switching between different text fields.


## ⚡️ Autocomplete

KeyboardKit 10 greatly improves the autocomplete service capabilities, and makes it a lot easier to integrate with remote services.

The `LocalAutocompleteService` is renamed to `StandardAutocompleteService`, and has new ways to use `RemotePredictionRequest`s to trigger remote predictions.

The `RemotePredictionRequest` is a renamed version of the now removed `NextWordPredictionRequest`. It can be used for all prediction operations, not just next word predictions.

The `.claude` and `.openAI` request builders are now generic, and can be used for any request, but have easy ways to use them for next word prediction.

The `NextWordPredictionRequestType`'s new `standardRequest(for:)` builder use the new `.claude` and `openAI` next word prediction prompts to create next word prediction requests.

Finally, the `.claude` remote prediction request builder uses `claude-sonnet-4-20250514` by default to let you keep using Claude after Sonnet 3.5 is discontinued.

Due to these many changes and improvements, the `RemoteAutocompleteService` is no longer needed and will be removed.


## 💡 Changes

Views now use environment injection instead of init injection for all observable contexts. This makes it a lot easier to use them, and will make it easier to change them as needed.

The `Keyboard.ButtonContent` no longer displays a locale name for space, since this is no longer in the native keyboard.

The `Keyboard.KeyboardType` has converted some keyboard types to input types. This makes it easier to switch input type wthout affecting the keyboard.

The `KeyboardLayout` now uses iPad Pro layouts on all iPad devices, and on macOS, tvOS & visionOS.

The `KeyboardView` has a lot less init arguments, which makes it a lot easier to use and customize.


## 🚨 Breaking Changes

If you address all deprecation warnings in KeyboardKit 9.9, you should face few breaking changes, if any. Then address all migration warnings in KeyboardKit 10 to avoid future breaking changes.

KeyboardKit 10 removes all previously deprecated code, as well as callout, layout and style services, which are now replaced by value injection and view modifier.

While most intended removals are kept as migration warnings, some have been removed and will cause breaking changes. But they should be very few, like `Keyboard.KeyboardCase.auto`.

Finally `KeyboardLayout.deviceConfiguration` is now non-optional, the `Locale.ContextMenu` no longer supports using custom views, and `RemoteAutocompleteService` is replaced by using remote request.


## Conclusion

KeyboardKit 10 is a huge step forward for the library and for KeyboardKit as a product. Please give this new developer preview a try and let us know if you run into any bugs or problems.

For more info and to download the documentaton, please see the [KeyboardKit 10 release notes]({{page.release}}). 

We hope you will love using KeyboardKit 10.
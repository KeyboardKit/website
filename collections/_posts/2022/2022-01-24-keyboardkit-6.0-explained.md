---
title:  What to expect in KeyboardKit 6.0
date:   2022-01-24 12:00:00 +0100
tags:   localization multi-platform
---

KeyboardKit 6.0 is just around the corner! This post explains what to expect in this major bump.


## No new locales

One of the big goals with KeyboardKit 5 was to improve the keyboard layout, to make it easier to add new locales. As a result, KeyboardKit now supports 60 locales, with more added over time.

KeyboardKit 6.0 will not add any new locales, but will instead remove a lot of deprecated code and make sure that the library is clean and easy to use. More locales will be added as minor updates.


## macOS support

KeyboardKit 5.9 added support for tvOS and watchOS, which means that KeyboardKit now builds on more platforms than ever before.

Although many features are unavailable on these platforms, many are available, which means that you can extend your app offering to more platforms, even though they may offer other capabilities than a custom keyboard.

KeyboardKit 6.0 will add additional support for macOS, which means that KeyboardKit will then support all major Apple platforms.


## KeyboardKit Pro improvements

Today, KeyboardKit Pro is a plugin that can be added to run alongside KeyboardKit. This is a very flexible approach that makes it easy to add Pro features to your app whenever you need them.

However, since KeyboardKit is open-source and KeyboardKit Pro is closed-source, this setup causes some challenges.

First of all, since the two libraries are released separately, there is nothing that stops you from using incompatible versions. This will cause a runtime crash that may be pretty tricky to hunt down.

Second, since KeyboardKit Pro is compiled with a KeyboardKit dependency, adding it means that you will import some symbols twice, which will cause annoying warning messages.

To fix this, KeyboardKit Pro will (most probably) become a standalone library and include KeyboardKit instead of depending on it. This means that you will just have to add a single dependency and that the duplicate symbol warnings will disappear.


## Conclusion

KeyboardKit 6.0 will not add any drastic new features, but will remove deprecated logic and aim to harmonize the public APIs. macOS support will let you use KeyboardKit on all platforms, and a standalone KeyboardKit Pro library will hopefully mean more stability.

KeyboardKit 6.0 will be released later in February.
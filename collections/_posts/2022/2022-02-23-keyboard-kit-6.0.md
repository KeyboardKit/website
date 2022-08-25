---
title:  KeyboardKit 6.0
date:   2022-02-23 08:00:00 +0100
tags:   releases multi-platform macos tvos watchos
---

KeyboardKit 6.0 is out, with features such as multi-platform support and new features, adjustments and bug ixes! 🚀 This post describes what it contains and how to best migrate from 5.x.


## Removal of deprecated code

Removing deprecated code is as close as a non-catholic like myself can come to a confession. It's like a big house cleaning, where dust under various rugs are finally removed. Check out the migration guide below if you still use deprecated code and get stuck when upgrading to 6.0.


## Multi-platform support

KeyboardKit now supports all major Apple platforms, including iOS, iPadOS, macOS, tvOS and watchOS. Although not all parts of the library are supported by all platforms (for instance, there is no input controller on macOS and watchOS) and some features probably shouldn't be available on some platforms, the fact that the library now builds on all platforms means that you are less restricted in what you can do with it.

KeyboardKit Pro is also multi-platform, but the public releases are still iOS/iPadOS-specific since the multi-platform binaries are bigger and will most probably be used by very few developers.


## KeyboardKit Pro goes standalone

Unlike KeyboardKit Pro 5.x, the new 6.0 release is completely standalone, which means that KeyboardKit Pro is no longer a plugin to the core library, but instead contains the core library as well as all pro features it brings.

Making KeyboardKit Pro standalone solves a bunch of problems, like the duplicate symbol warnings that you got since both KeyboardKit and KeyboardKit Pro specified certain types from the core library. You also no longer risk using incompatible versions that make the keyboard extension crash.


## Migration guide

Migrating from KeyboardKit 5.x to 6.0 should not be that hard, since most breaking changes just involve the renaming of various types and functions, where most are most probably only used by the library itself.

If you get stuck when migrating to 6.0 from an older 5.x version, it will help to first upgrade to the last 5.9 release, which contains deprecation guides that describe what has changed and how to fix it. After fixing these warnings, you should be able to then upgrade to 6.0 without errors.


## Conclusion

All in all, KeyboardKit 6.0 is mostly a big cleanup and brings the library to a place where further improvements will be easier to do. With multi-platform support and a standalone Pro library, KeyboardKit Pro is more versatile than ever.

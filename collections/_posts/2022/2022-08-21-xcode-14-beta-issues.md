---
title:  Xcode 14 beta issues
date:   2022-08-21 08:00:00 +0100
tags:   xcode spm

image:  /assets/blog/image-icon.png
---

For those of you who are using KeyboardKit Pro, fetching the latest version with the lastest Xcode 14 betas may cause problems.

While resolving the Keyboard Kit Pro package dependency in Xcode 13 works great, trying the same in Xcode 14 may result in an error like this:

```swift
error project: Revision ... for keyboardkitpro remoteSourceControl
https://... version 6.0.3 does not match previously recorded value f6850012077a10e01b45db9f0fe85c425d9601e5
```

The problem is not consistent, though. If you run into this problem, you can try to open the app project and resolve the dependency in Xcode 13, then open the app project in Xcode 14 again.

This has been reported to Apple (FB11329226), so hopefully it will be fixed before Xcode ships. Until then, the workaround described above should help.
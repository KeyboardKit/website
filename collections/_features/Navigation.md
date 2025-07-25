---
title: Navigation
description: Open the main app and custom URLs
hero-emoji: 🗺️
---

Custom keyboards may have to open a URL or trigger a deep link, for instance to take the user to an app to perform a task, or to Settings to perform system configurations.

Since custom keyboards can't use `UIApplication.shared`, KeyboardKit has other ways to open URLs and trigger deep links, like triggering a ``.url(_:id:)`` action with any custom URL.

KeyboardKit also adds a ``.systemSettings`` URL that can be used to open your app in System Settings.


## 👑 KeyboardKit Pro

KeyboardKit Pro can navigate back to the keyboard from the main app, using its [host app utilities](/features/host).
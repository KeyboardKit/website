---
title: Navigation
hero-emoji: 🗺️
---

Keyboard extensions may sometimes have to open a URL or trigger a deep link, for instance to take the user to the main app or to System Settings.

Since Keyboard extensions can't use `UIApplication.shared`, KeyboardKit has other ways to open any URL and to trigger deep links, by using a regular SwiftUI `Link` or by triggering a ``.url(_:id:)`` action.

KeyboardKit also adds a ``.systemSettings`` URL that can be used to open your app in System Settings.


## 👑 KeyboardKit Pro

KeyboardKit Pro can navigate back to a keyboard from the main app, by using its extended [host application capabilities](/features/host).
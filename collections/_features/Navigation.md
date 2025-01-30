---
title: Navigation
hero-emoji: 🗺️
---

Keyboard extensions may sometimes have to open a URL or trigger a deep link, for instance to take the user to the main app or System Settings.

Since Keyboard extensions can't use `UIApplication.shared`, KeyboardKit has other ways to open any URL and to trigger deep links.

The best way to open a URL from a keyboard extension, is to use a regular SwiftUI `Link` or trigger a ``.url(_:id:)`` keyboard action. The action approach can be used when an action is triggered by code.

KeyboardKit also adds a ``.systemSettings`` URL that can be used to open your app in System Settings.


<a name="pro">
## 👑 KeyboardKit Pro

KeyboardKit Pro can navigate back to a keyboard from the main app, by using its extended [host application capabilities](/features/host).
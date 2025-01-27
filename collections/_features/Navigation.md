---
title: Navigation
---

Keyboard extensions may sometimes have to open a URL or trigger a deep link, for instance to the main app or System Settings.

Since Keyboard extensions can't use `UIApplication.shared`, KeyboardKit has other alternate ways to open URLs and trigger deep links.


## How to open URLs from a keyboard extension

The best way to open a URL in a keyboard extension, where you can't access `UIApplication.shared` is to use a SwiftUI `Link`. You can also trigger a ``.url(_:id:)`` action.

Another way to open a URL from a keyboard, is to use ``KeyboardInputViewController``.``openUrl(_:)``.


## How to open System Settings

KeyboardKit defines a ``.systemSettings`` URL that can be used to open your app in System Settings.

If your keyboard randomly navigates to the System Settings root instead of your app, try to add an empty settings bundle to your app.


<a name="pro">
## 👑 KeyboardKit Pro

KeyboardKit Pro can navigate back to a keyboard from the main app, by using its extended [host application capabilities](/features/host).
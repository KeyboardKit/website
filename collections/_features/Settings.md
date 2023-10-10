---
title: Settings
hero: /assets/heros/github.png
description: KeyboardKit has a bunch of keyboard settings tools.
---

Keyboard apps need to navigate users to System Settings to enable the keyboard, allow full access etc. KeyboardKit adds utilities to make this easier, such as URL extensions and navigation links.



## System Settings

KeyboardKit provides a custom URL to make it easy to open your app's System Settings screen:

```swift
let url = URL.keyboardSettings
```

You can use a standard SwiftUI `Link` to open this URL from your app or your keyboard, or the convenient ``KeyboardSettingsLink``.

The URL's behavior is a bit inconsistent. It should always link to an app's custom settings in System Settings, but can sometimes just link to the System Settings root instead. The reason for this behavior is unknown. To improve the behavior, just add an empty Settings Bundle to your application bundle. This will make your app more likely to open the correct screen.



## Accessing System Settings

A common request is to be able to get the current user settings from System Settings, for instance the user's autocapitalization and autocorrect preferences.

This is not possible, at least not with the public APIs. You will have to implement your own settings for this. KeyboardKit Pro will soon add a bunch of convenient settings to make this easier.

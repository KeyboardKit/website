---
title: Settings
---

All keyboard apps need to navigate the user to System Settings to enable the keyboard extension, enable full access etc.

KeyboardKit adds utilities to make this easier, such as URL extensions and navigation links.



## System Settings

To make it easy to open your app's System Settings screen, KeyboardKit provides a custom URL:

```swift
let url = URL.keyboardSettings
```

You can use a standard `Link` to open this URL from your app or keyboard, or use the convenient ``KeyboardSettingsLink`` component.

Note that the URL behavior inconsistent. It should always link to an app's custom settings in System Settings, but can sometimes link to the System Settings root instead. To improve the behavior, add an empty Settings Bundle to your app bundle. This makes your app more likely to open the correct url.



## Accessing System Settings

A common request is to be able to get the current user settings from System Settings, for instance the user's autocapitalization and autocorrect preferences.

This is not possible, at least not with the public APIs. You will have to implement your own settings for this. KeyboardKit Pro will soon add a bunch of convenient settings to make this easier.

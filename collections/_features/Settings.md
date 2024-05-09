---
title: Settings
---

Great keyboard apps use the main app to show the user the state of the keyboard, if it's enabled in System Settings, if Full Access is enabled, etc.

KeyboardKit adds many utilities to make this easier, such as URL extensions and navigation links.


## Core Features

KeyboardKit has a `.keyboardSettings` URL that can be used to open your app's keyboard settings in System Settings. There's also a `KeyboardSettings.Link` that renders a customizable navigation link.


## Data Syncing

Many keyboards open the main app to let users manage app settings, such as the locale, feedback settings, etc. The larger UI makes for a great alternative for app and keyboard settings.

To share data between the app and the keyboard, you must use an **App Group** to persist data in a way that allows it to be accessed by both the app and the keyboard.

Once you have defined an App Group, you can use `UserDefaults(suiteName: "group-id")` to create a defaults instance that automatically syncs data between all targets.

The main app will always write data to an App Group in a way that makes it instantly available to the keyboard. A keyboard must however have **Full Access** enabled for data to be immediately synced.


## Limitations

A common request is to be able to access values from System Settings, for instance a user's audio or feedback preferences. This is not possible, at least not with the public APIs.
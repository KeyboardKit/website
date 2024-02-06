---
title: Settings
---

Great keyboard apps use the main app to show the user the state of the keyboard, if it's enabled in System Settings, if Full Access is enabled, etc.

The app should also let the user easily navigate to System Settings to enable the keyboard, enable Full Access, etc.

KeyboardKit adds utilities to make this easier, such as URL extensions and navigation links.



## System Settings

KeyboardKit has a **.keyboardSettings** URL extension that can be used to open your app's keyboard settings in System Settings.

If your keyboard randomly navigates to the System Settings root instead of your app, try adding an empty settings bundle to your app.

A common request is to access various settings from System Settings, for instance the user's autocapitalization and autocorrect preferences.This is not possible, at least not with the public APIs.


## Share settings between the app and the keyboard

Many keyboard extensions open the main app to let users access settings. The larger UI makes for a great alternative for app and keyboard settings.

To share data between the app and the keyboard, you must use an **App Group** to persist data in a way that allows it to be accessed by both the app and the keyboard.

The main app will always write data to an App Group in a way that makes it instantly available to the keyboard. A keyboard must however have **Full Access** enabled for data to be immediately synced.


---
title: Settings
---

Great keyboard apps use the main app to show the user the state of the keyboard, if it's enabled in System Settings, if Full Access is enabled, etc.

KeyboardKit adds many utilities to make this easier, such as URL extensions and navigation links.


## Keyboard Settings

KeyboardKit has a ``KeyboardSettings`` class that has a ``store`` that is used to persist data for various contexts. You can set it up with an App Group to sync data between the app and its keyboard.


## How to sync settings between the app and the keyboard

To sync data between the main app target and its keyboard extension, you have to create an App Group and link it to both the app and the keyboard.

You can then add the App Group ID to your ``KeyboardApp`` and use that app to set up your main app and keyboard extension.

The main app will always write data to an App Group so that it's instantly available to the keyboard. A keyboard must however have Full Access enabled for changes to be immediately synced.


## How to open System Settings

KeyboardKit defines a ``systemSettings`` URL that can be used to open your app's settings screen in System Settings, where users can enable your keyboard, enable Full Access, etc. 

You can use a standard SwiftUI `Link` to open a URL from both your app and its keyboard extension:

```swift
if let url = URL.systemSettings {
    Link("Open System Settings", destination: url)
}
```

You can also open System Settings with a ``KeyboardActionHandler``, by triggering a ``url`` action. If your app only navigates to the Settings root app, try adding an empty settings bundle to it.


## How to access System Settings values

A common question is to be able to access various settings from System Settings, for instance to access autocapitalization & autocorrect preferences.

This is not possible, at least not with the public APIs. This is most probably due to privacy concerns, and unfortunately means that your app must provide its own keyboard settings.
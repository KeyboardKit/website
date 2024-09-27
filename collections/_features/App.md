---
title: App
---

KeyboardKit provides utilities that are meant to be used in the main app target, to build a great app that can provide the user with settings, configurations, etc.



## Keyboard App Namespace

KeyboardKit has a ``KeyboardApp`` struct that is also a namespace for app-related types and views, like the ``HomeScreen``, ``SettingsScreen`` and ``LocaleScreen`` screens that are unlocked with KeyboardKit Pro.



## Keyboard App

The easiest way to set up KeyboardKit is to use a ``KeyboardApp``, which can be used to define things like ``name``, ``bundleId``, ``appGroupId``, a ``licenseKey`` and ``locales`` for KeyboardKit Pro, ``deepLinks``, etc.

You can create a static app value and add it to both the main app target and its keyboard extension:

```swift
extension KeyboardApp {

    static var keyboardKitDemo: Self {
        .init(
            name: "KeyboardKit",
            licenseKey: "abc123",
            bundleId: "com.keyboardkit.demo",
            appGroupId: "group.com.keyboardkit.demo"
        )
    }
}
```

Your app can also resolve other properties that you may need, such as a ``dictationConfiguration``.


## Keyboard App View

The ``KeyboardAppView`` view can be used as the root view of the main app target, to set up everything it needs to use KeyboardKit:

```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            KeyboardAppView(for: .myApp) {
                ContentView()
            }
        }
    }
}
```

This view will set up ``KeyboardSettings`` to use an App Group, register your KeyboardKit Pro license key, if any, inject ``state`` into the view hierarchy, set up dictation, etc.


## 👑 Pro Features

KeyboardKit Pro unlocks a ``KeyboardApp.HomeScreen`` that can be used by a main keyboard app target, as well as `SettingsScreen`, `LocaleScreen`, and `ThemeScreen` settings screens:

<div class="grid col2">
    <div><img alt="A Home Screen" src="{{page.assets}}keyboardapp-homescreen.jpg" /></div>
    <div><img alt="A Settings Screen" src="{{page.assets}}keyboardapp-settingsscreen.jpg" /></div>
    <div><img alt="A Locale Screen" src="{{page.assets}}keyboardapp-localescreen.jpg" /></div>
    <div><img alt="A Theme Screen" src="{{page.assets}}keyboardapp-themescreen.jpg" /></div>
</div>

These screens lets you add complex, yet customizable, app screens to your main app with a single line of code. Each screen can be customized, using convenient view modifiers.


[Pro]: /pro

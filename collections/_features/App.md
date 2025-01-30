---
title: App
hero-emoji: 📱
---

KeyboardKit provides main app utils that lets you build a great main app for your custom keyboard.

The main app is a perfect place to onboard users. With its full screen estate, it's also a great place to provide the user with keyboard settings, and perform certain operations like dictation.

KeyboardKit has a ``KeyboardApp`` struct that is also a namespace for app-related types and views, like KeyboardKit Pro's ``HomeScreen``, ``SettingsScreen``, ``LocaleScreen``, and ``ThemesScreen`` components.

You can create an app-specific ``KeyboardApp`` to define your app ``name``, ``appGroupId``, ``licenseKey``, etc.

```swift
extension KeyboardApp {

    static var keyboardKitDemo: Self {
        .init(
            name: "KeyboardKit",
            licenseKey: "abc123",
            appGroupId: "group.com.keyboardkit.demo"
        )
    }
}
```

You can set up your keyboard extension by passing in the ``KeyboardApp`` into the `setup` function, and set up the main app with the same configuration by passing it into a root `KeyboardAppView`.


## 👑 Pro Features

KeyboardKit Pro unlocks a ``KeyboardApp.HomeScreen`` that can be used by a main keyboard app target, as well as a `SettingsScreen`, `LocaleScreen`, and `ThemeScreen`:

<div class="grid col2">
    <div><img alt="A Home Screen" src="{{page.assets}}keyboardapp-homescreen.jpg" /></div>
    <div><img alt="A Settings Screen" src="{{page.assets}}keyboardapp-settingsscreen.jpg" /></div>
    <div><img alt="A Locale Screen" src="{{page.assets}}keyboardapp-localescreen.jpg" /></div>
    <div><img alt="A Theme Screen" src="{{page.assets}}keyboardapp-themescreen.jpg" /></div>
</div>

These screens lets you add complex, yet customizable, app screens to your main app with a single line of code. Each screen can be customized, using convenient view modifiers.


[Pro]: /pro

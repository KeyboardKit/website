---
title: Settings

hero-title: Features
hero-description: Settings
hero-emoji: ⚙️
---

Great keyboard apps use the main app to onboard the user and show the state of the keyboard, if it's enabled in System Settings, if Full Access is enabled, etc.

KeyboardKit adds ways to make this easier and provides ways to use App Groups to automatically sync data and settings between the main app and its keyboard.

The various namespaces provide their own settings classes, such as `Autocomplete.Settings`. These classes provide auto-persisted properties, that can be used to let users customize their keyboard.


## 👑 KeyboardKit Pro

KeyboardKit Pro unlocks a ``KeyboardApp.HomeScreen`` that can be used by a main keyboard app target, as well as a `SettingsScreen`, `LocaleScreen`, and `ThemeScreen`:

<div class="grid col2">
    <div><img alt="A Home Screen" src="{{page.assets}}keyboardapp-homescreen.jpg" /></div>
    <div><img alt="A Settings Screen" src="{{page.assets}}keyboardapp-settingsscreen.jpg" /></div>
    <div><img alt="A Locale Screen" src="{{page.assets}}keyboardapp-localescreen.jpg" /></div>
    <div><img alt="A Theme Screen" src="{{page.assets}}keyboardapp-themescreen.jpg" /></div>
</div>

These screens lets you add complex, yet customizable, app screens to your main app with a single line of code. Each screen can be customized, using convenient view modifiers.


[Pro]: /pro

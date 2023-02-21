---
title:  How to open your System Settings app screen
date:   2023-02-20 11:00:00 +0100

tags:   settings

image:  /assets/headers/icon.png
---

KeyboardKit has utilities to easily let you open your app's System Settings screen. However, you may have noticed that it behaves a little random, and sometimes open the System Settings root instead of your app. Let's take a look at how to improve this.


## How to get the System Settings url for your app

KeyboardKit has a `KeyboardSettingsUrlProvider` protocol that automatically extends all types that implement it with a static `.keyboardSettings` url. Under the hood, this url just resolves to `UIApplication.openSettingsURLString` on iOS and tvOS, and `nil` on macOS and watchOS. 

You can open this URL like any other url, by using `UIApplication.shared.open(...)` on iOS and tvOS and `NSWorkspace.shared.open(...)` on macOS, although in this patricular case there is no url to open on macOS.


## Keyboard settings link

To make things even easier, KeyboardKit has a `KeyboardSettingsLink` view that can be used to render a SwiftUI button with any title, icon and URL. Tapping it will open the `.keyboardSettings` by default, although you can modify this behavior.


## Random behavior

If you have used the url above, you may have noticed that it sometimes leads to your app's System Settings screen, as expected, while at other times it just takes you to the System Settings root.

This random behavior makes for a bad user experience, since it may be hard for users to find your app in System Settings, if they have to navigate to it from the root screen...if they even know that it exists. This can lead to users not being able to enable or configure your keyboard.


## How to fix this

Although this random behavior is bad, fixing it is actually very easy. All you have to do is just to add an empty `Settings Bundle` to your app.

If you look at the demo app, you can see that it has a `Settings` bundle with a `Root` file that only contains a file name. By just adding this to the app, it will now consistently take you to the correct place in System Settings, instead of randomly taking you to the settings root.

Big thanks to Kévin Quisquater for coming up with such an easy solution to this annoying problem!
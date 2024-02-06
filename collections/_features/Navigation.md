---
title: Navigation
---

Keyboard extensions may sometimes have to open a URL or trigger a deep link, for instance to the main app or System Settings.

Keyboard extensions can however not access **UIApplication.shared**, which means that you have to jump through hoops to open URLs.

KeyboardKit therefore provides alternate ways to open URLs without using **UIApplication.shared**.



## How to open URLs from a keyboard extension

To open a URL from a keyboard extension, use the ``KeyboardInputViewController`` ``openUrl(_:)``, which opens the provided URL without using the shared application.

If you don't want to depend on the controller (which can easily cause memory leaks), a better way is to trigger a ``KeyboardAction.url(_:id:)`` and let the main ``KeyboardActionHandler`` handle it.

The ``KeyboardAction`` approach removes any need to refer to the controller and lets you customize the URL handling with a custom action handler, if needed.



## How to open System Settings

KeyboardKit has a **.keyboardSettings** URL extension that can be used to open your app's keyboard settings in System Settings.

If your keyboard randomly navigates to the System Settings root instead of your app, try adding an empty settings bundle to your app. 


[Pro]: /pro   

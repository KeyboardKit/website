---
title: Navigation
---

Keyboard extensions may sometimes have to open a URL or trigger a deep link, for instance to the main app or System Settings.

Since Keyboard extensions can't use `UIApplication.shared`, KeyboardKit provides alternate ways to open URLs, without using `UIApplication.shared`.



## Core Features

To open a URL from a keyboard extension, use the ``KeyboardInputViewController`` ``openUrl(_:)``, which opens the provided URL without using the shared application.

To avoid depending on the controller (which can easily cause memory leaks), you can also trigger a ``KeyboardAction.url(_:id:)`` action and let the main ``KeyboardActionHandler`` handle it.

KeyboardKit defines a `.keyboardSettings` URL that can be used to open your app in System Settings. If your keyboard navigates to the root instead of your app, try adding a Settings Bundle to your app. 


[Pro]: /pro   

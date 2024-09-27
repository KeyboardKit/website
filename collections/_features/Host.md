---
title: Host
---

KeyboardKit provides ways to easily identify the host application, which may be of interest for many reasons, e.g. to vary the style of functionality of a keyboard based on the active app.

👑 [KeyboardKit Pro][Pro] unlocks an [additional list of popular applications](#pro), to make it even easier to get the exact identify of the active app.


## Host Application Bundle Identifier

``KeyboardInputViewController`` has a ``.hostApplicationBundleId`` property that tries to resolve the ID of the application that is currently using the keyboard.

``KeyboardContext`` also has a ``.hostApplicationBundleId`` property syncs with the controller value. Since you shouldn't pass around the controller, this may be more convenient to use.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks a ``KeyboardHostApplication`` enum that defines a bunch of commonly used applications. This will be expanded over time, so reach out if you miss a certain app.

Since it's impossible to define all apps that exist in the App Store, this enum just aims to cover the most popular ones. Reach out if you miss any app, or if an existing one stops working.

KeyboardKit Pro also extends ``KeyboardInputViewController``, ``KeyboardContext``, and ``DictationContext`` with a ``hostApplication`` property, that tries to map the bundle ID to a ``KeyboardHostApplication``.

All in all, This means that KeyboardKit Pro makes it easier to identify and navigate to many of the most popular apps in the App Store.


[Pro]: /pro

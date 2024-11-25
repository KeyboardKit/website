---
title: Host
---

👑 [KeyboardKit Pro][Pro] KeyboardKit lets you get the bundle ID of the host application, which may be of interest for many reasons, e.g. to vary the keyboard style or behavior in certain apps.

KeyboardKit Pro also unlocks an additional ``KeyboardHostApplication``, which defines many apps and makes it easier to identify and navigate to specific apps.


## Host Application Bundle Identifier

``KeyboardInputViewController`` has a ``/hostApplicationBundleId`` property that resolves the bundle ID for the app that is currently using the keyboard.

The controller automatically syncs the ID to the ``KeyboardContext``. Since you shouldn't pass around the controller, you can instead use the main ``keyboardContext``'s ``hostApplicationBundleId``.


## Host Application

KeyboardKit Pro unlocks ways to identify specific apps, using a ``KeyboardHostApplication`` type that defines many popular apps.

The ``KeyboardContext`` automatically tries to map the ``hostApplicationBundleId`` to a ``hostApplication``. If this property returns an app, the bundle ID is known.

Once you have a ``KeyboardHostApplication``, you can get additional info about it, and open it with  ``open(with:)``. Note that opening the app uses app-specific information that may change at any time.


[Pro]: https://github.com/KeyboardKit/KeyboardKitPro

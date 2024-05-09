---
title: Device Utilities
---

KeyboardKit has various device-related features that aim to help you customize for various devices.

Although you should avoid designing for a specific device, orientation, or screen size, some features do need these kinds of considerations. Just take care to know when it's needed.


## Device type

KeyboardKit has a platform-agnostic ``DeviceType`` enum that defines available device types. You can use ``.current`` to get the current device type.


## Interface orientation

KeyboardKit has a platform-agnostic ``InterfaceOrientation`` enum that defines interface orientations. You can use ``.current`` to get the current interface orientation.


## Screen sizes

KeyboardKit has `CGSize` extensions to help detecting device types, like `.iPadScreenPortrait`. There's also an `.isScreenSize(_:)` rotation-agnostic function that compares.

It's extra important to avoid designing for a specific screen size, since apps can run in split screen, a keyboard can be floating, etc.



[Pro]: /pro

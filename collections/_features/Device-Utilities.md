---
title: Device Utilities

hero-title: Features
hero-description: Device Utilities
hero-emoji: 🖥️
---

Although you should avoid designing for a specific device, orientation, or screen size, KeyboardKit can detect various devices and their supported capabilities if you ever need to.

KeyboardKit has platform-agnostic ``DeviceType`` and ``InterfaceOrientation`` enums that can be used on all devices. You can use ``.current`` to get the current device or orientation.

KeyboardKit has `CGSize` extensions to detect device-specific screen sizes, like `.iPadScreenPortrait`. There's also an `.isScreenSize(_:)` orientation-agnostic function that compares.
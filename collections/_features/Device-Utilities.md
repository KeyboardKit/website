---
title: Device Utilities
hero-emoji: 🖥️
---

Although you should avoid designing for a specific device, orientation, or screen size, KeyboardKit makes it easy to detect various devices and their supported capabilities if you ever need to.

KeyboardKit has platform-agnostic ``DeviceType`` and ``InterfaceOrientation`` enums that can be used on all devices. You can use ``.current`` to get the current values.

KeyboardKit has `CGSize` extensions to help detecting device types, like `.iPadScreenPortrait`. There's also an `.isScreenSize(_:)` rotation-agnostic function that compares.
---
title: Device Utilities
description: Detect and support various device types
hero-emoji: 🖥️
---

Although you should avoid designing for a specific device, orientation, or screen size, KeyboardKit can detect various device types and their supported capabilities.

KeyboardKit has platform-agnostic ``DeviceType`` and ``InterfaceOrientation`` enums that can be used on all devices. You can use ``.current`` to get the current device or interface orientation.

KeyboardKit has `CGSize` extensions to detect device-specific screen sizes, like `.iPadScreenPortrait`. There's also an `.isScreenSize(_:)` orientation-agnostic function that compares.
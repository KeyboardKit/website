---
title: Status
---

KeyboardKit has ways to check various keyboard state, such as if a keyboard is enabled in System Settings, if Full Access is enabled, if the keyboard is currently being used, etc.

This information can be used to make the main app help users set up their keyboard properly.


## Core Features

The observable ``KeyboardStatusContext`` class can be used to observe the state of any keyboard. Since it's observable, any state changes will immediately cause the view to refresh.

A ``KeyboardStatus.Label`` can be used to display any keyboard status, like the enabled or Full Access status of a keyboard. It can be wrapped in a `KeyboardSettings.Link` to link to System Settings:

![KeyboardStateLabel]({{page.assets}}keyboardstatelabel-350.jpg)

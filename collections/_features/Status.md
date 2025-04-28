---
title: Status

hero-title: Features
hero-description: Status
hero-emoji: 🩺
---

KeyboardKit has ways to check the keyboard status, e.g. if a keyboard is enabled in System Settings, if Full Access is enabled, if a keyboard is actively being used, etc.

This information can be used to make the main app guide users to set up their keyboard properly. 

KeyboardKit has a ``KeyboardStatus`` namespace that contains status-related types and views, and an observable ``KeyboardStatusContext`` that can be used to observe the state of one or many keyboards.


## 👑 KeyboardKit Pro

KeyboardKit Pro unlocks additional status views & utilities, like a complete ``KeyboardStatus.Section``:

<img width="450" alt="A keyboard status section" src="{{page.assets}}keyboardstatussection.jpg" />

The view is used by the ``KeyboardApp.HomeScreen`` component, and can be used as a standalone view.


[Pro]: /pro
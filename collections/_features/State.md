---
title: State
---

KeyboardKit has ways to check various keyboard state, such as if a keyboard is enabled in System Settings, if Full Access is enabled, if the keyboard is currently being used, etc.

This information can be used to make the main app help users set up their keyboard properly.


## State Functionality

The observable ``KeyboardStateContext`` can be used to observe the state of any keyboard. Since the context is observable, any state changes will immediately cause the view to refresh.

The ``KeyboardStateInspector`` protocol can be implemented by any type to make it able to inspect the state of a keyboard.

The ``KeyboardStateLabel`` can be used to display any keyboard state. It can be wrapped in a `Link` or ``KeyboardSettingsLink`` to link to System Settings:

![KeyboardStateLabel]({{page.assets}}keyboardstatelabel-350.jpg)

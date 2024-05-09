---
title: External Keyboards
---

A keyboard extension should be able to detect if an external keyboard is connected, since it causes it to stop working as expected. 
For instance, the text document proxy will not update properly.

[KeyboardKit Pro][Pro] therefore unlocks [tools](#pro) to help you detect if an external keyboard is connected.


## Core Features

KeyboardKit has no open-source support to detect external keyboards. This is a Pro-only feature.


<a name="pro">
## 👑 Pro Features

KeyboardKit has an `ExternalKeyboardContext` that detects whether or not an external keyboard is connected, either tethered of with Bluetooth. To use it, just set it up as an observed object.


[Pro]: /pro

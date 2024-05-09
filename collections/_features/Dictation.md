---
title: Dictation
---

Dictation can be used to let users enter text by speaking instead of typing. This can be hard to setup in a keyboard extension, where microphone access is unavailable.

KeyboardKit therefore provides dictation-specific tools that you can use to add dictation support to both your keyboard extension and main app.

[KeyboardKit Pro][Pro] unlocks [features](#pro) that can be used to perform app- & keyboard-based dictation.


## Core Features

KeyboardKit has a ``Dictation`` namespace with dictation types, like configurations, statuses, etc. and an observable``DictationContext`` class that provides observable state, such as the current text.

Dictation works differently in apps and keyboards, where the mic is unavailable. A ``DictationService`` can perform dictation in apps, while a ``KeyboardDictationService`` can be used in keyboards.

KeyboardKit defines all protocols and models that are needded to implement dictation, but has no service implementations.


<a name="pro">
## 👑 Pro Features

[KeyboardKit Pro][Pro] unlocks dictation services and tools that let you add dictation to the keyboard and main app in a few simple steps, with very little code involved.

KeyboardKit Pro also unlocks dictation-related views, that let you inspect the dictation progress, like the `Dictation.Screen` and `Dictation.BarVisualizer`.

![DictationScreen]({{page.assets}}dictationscreen-350.jpg)

All dictation components can be customized to great extent. You can use any custom screens and visualizers, or style the existing ones.





[Pro]: /pro

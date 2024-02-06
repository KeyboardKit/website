---
title: Dictation
---

Dictation can be used to let users enter text by speaking instead of typing. This can be hard to setup in a keyboard extension, where microphone access is unavailable.

KeyboardKit therefore provides dictation-specific tools that you can use to add dictation support to both your keyboard extension and main app.

[KeyboardKit Pro][Pro] unlocks services that can be used to perform app- and keyboard-based dictation.


## Dictation Functionality

KeyboardKit has a ``Dictation`` namespace with dictation types, like configurations, statuses, etc.

The ``DictationContext`` class provides observable state, such as the currently dictated text, in which application dictation was started, etc.


## How to perform dictation

Dictation works differently in applications, where microphone access is available, and in keyboard extensions, where it's not available.

You can use a ``DictationService`` to perform dictation where microphone access is available, and a ``KeyboardDictationService`` to perform dictation in keyboard extensions.



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks dictation service implementations and tools that let you add dictation to your keyboard and main app in a few simple steps, with very little code involved.

KeyboardKit Pro also unlocks dictation-related views, that let you inspect the dictation progress, like the `Dictation.Screen` and `Dictation.BarVisualizer`, which can both be customized to great extent.

![DictationScreen]({{page.assets}}dictationscreen-350.jpg)





[Pro]: /pro

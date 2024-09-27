---
title: Dictation
---

Dictation can be used to let users enter text by speaking instead of typing. This can be hard to setup in a keyboard extension, where microphone access is unavailable.

KeyboardKit therefore provides dictation-specific tools that you can use to add dictation support to both your keyboard extension and main app.

[KeyboardKit Pro][Pro] unlocks [features](#pro) that can be used to perform app- & keyboard-based dictation.


## Dictation Namespace

KeyboardKit has a ``Dictation`` namespace that contains dictation-related types and views like the ``KeyboardConfiguration``, plus a ``Screen`` and a ``BarVisualizer`` that are unlocked by KeyboardKit Pro. 


## Dictation Context

KeyboardKit has an observable ``DictationContext`` that has observable state and persistent settings, such as ``dictatedText``, ``silenceLimit`` etc.


## Dictation Services

In KeyboardKit, a ``DictationService`` can perform dictation where mic access is available, while a ``KeyboardDictationService`` can start dictation from a keyboard extension, by opening the main app.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks dictation services and tools that let you add dictation to the keyboard and main app in a few simple steps, with very little code involved.

KeyboardKit Pro also unlocks dictation-related views, that let you inspect the dictation progress, like the `Dictation.Screen` and `Dictation.BarVisualizer`.

<img width="450" alt="An dictation screen" src="{{page.assets}}dictationscreen.jpg" />

All dictation components can be customized to great extent. You can use any custom screens and visualizers, or style the existing ones.





[Pro]: /pro

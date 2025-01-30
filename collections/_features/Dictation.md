---
title: Dictation
hero-emoji: 🎤
---

Dictation can be used to let users enter text by speaking instead of typing. This can be hard to setup in a keyboard extension, where microphone access is unavailable.

KeyboardKit therefore provides dictation-specific tools that you can use to add dictation support to both your keyboard extension and main app.

KeyboardKit has an ``Dictation`` namespace with dictation-related types and views, an observable ``DictationContext``, and a `Dictation.Settings`  with persisted settings.

In KeyboardKit, a ``DictationService`` can be used to start start dictation from a keyboard extension, by opening its app, perform dictation in the app, then return to the keyboard to use the result.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks dictation services and tools that let you add dictation to the keyboard and main app in a few simple steps, with very little code involved.

<img width="450" alt="An dictation screen" src="{{page.assets}}dictationscreen.jpg" />

KeyboardKit Pro also unlocks dictation-related components to let you show the dictation progress. These components can be customized to great extent, and use any custom views and styles.





[Pro]: /pro

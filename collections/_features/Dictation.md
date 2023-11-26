---
title: Dictation (BETA)
---

Dictation can be used to let users enter text by speaking into the microphone, instead of typing. It can however be hard to implement, since keyboard extensions can't access the microphone.

KeyboardKit defines dictation-specific types that you can use to implement dictation for either your keyboard extension or main app.

[KeyboardKit Pro][Pro] unlocks and registers dictation services that can be easily configured to perform dictionary in keyboard extensions and main applications, with very little code involved.


## Dictation namespace

KeyboardKit has a ``Dictation`` namespace that contains dictation-related types.

For instance, the ``DictationService`` protocol describes how to perform dictation where mic access is available, while ``KeyboardDictationService`` describes how to perform dictation in a keyboard.


## Dictation context

KeyboardKit has an observable ``DictationContext`` class that is used to handle dictation state, such as the currently dictated text, in which application dictation was started, etc.


## How to perform dictation

Dictation works differently in applications, where microphone access is available, and in keyboard extensions, where it's not available.

You can use a ``DictationService`` to perform dictation where microphone access is available, and a ``KeyboardDictationService`` to perform dictation in keyboard extensions.

See the online documentation for details on how to set up dictation in both apps and keyboards.



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks dictation services and tools that let you add dictation to your keyboard and main app in a few simple steps, with very little code involved.

### Services

KeyboardKit Pro unlocks a dictation service that can be used within the main app, and a keyboard dictation service that can be used to trigger dictation from the keyboard extension.

### Supported languages

By default, the speech recognizer that is used by KeyboardKit Pro supports the following languages:

English, Arabic, Catalan, Croatian, Czech, Danish, Dutch, Finnish, French, German, Greek, Hebrew, Hungarian, Indonesian, Italian, Malay, Norwegian, Polish, Portuguese, Romanian, Russian, Slovak, Spanish, Swedish, Turkish, Ukrainian

If you want to use dictation with other languages, you must implement a custom speech recognizer.

### Additional views

KeyboardKit Pro also unlocks dictation-specific views like overlays and visualizers, that you can use to build a nice dictation experience for your users.




[Pro]: /pro

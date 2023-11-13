---
title: Dictation (BETA)
---

Dictation can be used to let users enter text by speaking into the microphone, instead of typing. It can however be hard to implement, since keyboard extensions can't access the microphone.

KeyboardKit defines dictation-specific types, enums and protocols, that you can use to implement dictation for either your keyboard extension or main application.

KeyboardKit doesn't have a standard service as it has for other services. Instead, it binds a disabled service to the controller ``services`` until you register a custom service or activate KeyboardKit Pro.

[KeyboardKit Pro][Pro] unlocks and registers dictation services that can be easily configured to perform dictionary in keyboard extensions and main applications.


## Dictation namespace

KeyboardKit has a ``Dictation`` namespace that contains dictation-related types.

For instance, the ``DictationService`` protocol describes how to perform dictation where mic access is available, while ``KeyboardDictationService`` describes how to perform dictation in a keyboard.

KeyboardKit doesn't have standard dictation services, as it has for other kind of services. Instead, it binds a disabled service instance to ``KeyboardInputViewController/services`` until you replace it with a custom instance or activate KeyboardKit Pro.


## Dictation context

KeyboardKit has an observable ``DictationContext`` class that is used to handle dictation state, such as the currently dictated text, in which application dictation was started, etc.


## How to perform dictation

Dictation works differently in applications, where microphone access is available, and in keyboard extensions, where it's not available.

You can use a ``DictationService`` to perform dictation where microphone access is available, and a ``KeyboardDictationService`` to perform dictation in keyboard extensions.

## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks dictation services and tools that let you add dictation to your keyboard and main app in a few simple steps.

KeyboardKit Pro also unlocks dictation-specific views like overlays and visualizers, that you can use to build a nice dictation experience for your users.


[Pro]: /pro

---
title: Dictation (BETA)
---

Dictation can be used to enter text by speaking into the microphone, instead of typing. It's however hard to implement, since keyboard extensions don't have access to the microphone. 

A ``DictationService`` can perform dictation where microphone access is available, such as in an app, while a ``KeyboardDictationService`` can perform dictation where microphone access is *not* available, such as in a keyboard. A keyboard dictation service will work around the limitation.

KeyboardKit doesn't have a standard service as it has for other services. Instead, it binds a disabled service to the controller ``services`` until you register a custom service or activate KeyboardKit Pro.

[KeyboardKit Pro][Pro] unlocks and registers a standard dictation service. Information about Pro features can be found at the end of this article.



## Dictation namespace

KeyboardKit has a ``Dictation`` namespace with dictation types. For instance, a ``KeyboardConfiguration`` can be used to configure a ``KeyboardDictationService`` for both a keyboard and its app.

KeyboardKit Pro adds a bunch of dictation-related views here, such as `BarVisualizer`, `Screen`, etc.



## Dictation context

KeyboardKit has an observable ``DictationContext`` class that is used to handle dictation state, such as the currently dictated text.



## How to perform dictation

You can use a ``DictationService`` to perform dictation where microphone access is available, e.g. an app.  You can use a ``KeyboardDictationService`` to perform dictation where microphone access is *not* available, e.g. in a keyboard extension.



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks dictation services and tools that let you setup and perform dictation with a few simple steps.

* **ProDictationService** - Can perform dictation within an app.
* **ProKeyboardDictationService** - Can perform dictation from a keyboard.

KeyboardKit Pro will also add a bunch of dictation-related views to the ``Dictation`` namespace, such as `BarVisualizer`, `Screen`, etc. You can use them to build a nice dictation experience for your users.

[Pro]: /pro

---
title: Proxy Utilities
---

iOS keyboard extensions use a **UITextDocumentProxy** to integrate with the currently selected text field. It lets you insert and delete text, get the selected text, move the input cursor, etc.

The native proxy APIs are however quite limited, and make it hard to get detailed information about the text and perform many standard keyboard operations. 

KeyboardKit adds a bunch of proxy extension to make things easier. ``KeyboardInputViewController`` also has a custom ``.textDocumentProxy`` that lets you do even more. 

[KeyboardKit Pro][Pro] adds even more proxy capabilities, such as the ability to read the full document context (content). Information about Pro features can be found at the end of this article. 


## Proxy Functionality

KeyboardKit has a ``Proxy`` namespace that contains proxy-related types. For now, it will only contain types when it's part of the KeyboardKit Pro build.

KeyboardKit extends `UITextDocumentProxy` with additional functionality, like autocomplete support, more ways to handle and analyze the text, etc. You get access to it by simply importing KeyboardKit.


## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks additional text document proxy capabilities, such as the ability to read the full document context (content) instead of the limited text you get access to by default.



[Pro]: /pro

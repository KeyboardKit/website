---
title: Proxy Utilities
---

iOS keyboards use a **UITextDocumentProxy** to integrate with the currently active text field. It lets you insert and delete text, get the selected text, move the input cursor, etc.

The native proxy APIs are however quite limited, and make it hard to get detailed information about the text and perform many standard keyboard operations. 

KeyboardKit adds a bunch of proxy extension to make things easier. ``KeyboardInputViewController`` also has a custom ``.textDocumentProxy`` that lets you do even more. 

[KeyboardKit Pro][Pro] adds even more [proxy capabilities](#pro), such as being able to read the full document, instead of the limited text you get access to by default.


## Core Features

KeyboardKit has a ``Proxy`` namespace that contains proxy-related types. For now, it will only contain types when it's part of the KeyboardKit Pro build.

KeyboardKit extends `UITextDocumentProxy` with additional functionality, like autocomplete support, more ways to handle and analyze the text, etc. You get access to it by simply importing KeyboardKit.


<a name="pro">
## 👑 Pro Features

[KeyboardKit Pro][Pro] unlocks additional text document proxy capabilities, like the ability to read the full document context, instead of the limited text you get access to by default.

To read the full document context, you just have to call the `fullDocumentContext` property, which will move the text cursor to unlock more text.

Omce the read operation is done, KeyboardKit will try to return the text input cursor to its original position. This is a best effort attempt, since the native APIs are very limited.



[Pro]: /pro

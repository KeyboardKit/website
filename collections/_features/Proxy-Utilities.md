---
title: Proxy Utilities
hero-emoji: 📄
---

A iOS keyboard uses a **UITextDocumentProxy** to integrate with the currently active text field. It lets you insert and delete text, get the selected text, move the input cursor, etc.

The native texts document proxy APIs are however very limited, which makes it hard to get detailed and even correct information about the text and perform many standard operations. 

KeyboardKit therefore extends the proxy with more capabilities, for instance extensions like this:

* ``currentWord``
* ``deleteBackward(range:)``
* ``deleteBackward(times:)``
* ``documentContext``
* ``endSentence(withText:)``
* ``fullDocumentContext(config:)``
* ``hasUnclosedQuotationBeforeInput(for:)``
* ``isCursorAtNewSentence``
* ``isCursorAtNewWord``
* ``isCursorAtTheEndOfTheCurrentWord``
* ``isReadingFullDocumentContext``
* ``replaceCurrentWord(with:)``
* ``sentenceBeforeInput``
* ``sentenceDelimiters``
* ``wordBeforeInput``
* ``wordDelimiters``

See the documentation for more information and a complete list of extension.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks additional text document proxy capabilities, like the ability to read the full document context, instead of the limited text that the native APIs return.


```swift
let proxy = keyboardContext.textDocumentProxy
let result = try await proxy.fullDocumentContext(config: ...)
```

KeyboardKit Pro also makes it possible to replace the main document proxy with a custom one, which is used by the text input components that let you type directly into the keyboard extension.


[Pro]: /pro

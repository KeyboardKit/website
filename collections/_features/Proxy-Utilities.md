---
title: Proxy Utilities
---

iOS keyboards use a **UITextDocumentProxy** to integrate with the currently active text field. It lets you insert and delete text, get the selected text, move the input cursor, etc.

The native proxy APIs are however quite limited, and make it hard to get detailed information about the text and perform many standard keyboard operations. 

KeyboardKit therefore extends the proxy with more capabilities. ``KeyboardInputViewController`` also has a custom ``.textDocumentProxy`` that lets you do even more. 

[KeyboardKit Pro][Pro] adds even more [proxy capabilities](#pro), such as being able to read the full document, instead of the limited text you get access to by default.


## Mamespace

KeyboardKit has a ``Proxy`` namespace with proxy-related types. It currently only contains utils when it's part of a KeyboardKit Pro build.


## Extensions

KeyboardKit extends the native ``UITextDocumentProxy`` with additional capabilities, such as the ability to get more content from the document, analyze words & sentences, end the current sentence, etc.

Here are some examples of extensions that KeyboardKit adds to it:

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

[KeyboardKit Pro][Pro] unlocks additional text document proxy capabilities, like the ability to read the full document context, instead of the limited text you get access to by default.


### Full Document Context

Apple's native text document proxy doesn't return all the text within the document. It instead cuts off the available text at any time, e.g. at the previous or next paragraph.

KeyboardKit Pro therefore lets you read **all** text from the proxy, using a proxy extension that reads the full document content by moving the input cursor in intricate ways:

```swift
let proxy = keyboardContext.textDocumentProxy
let result = try await proxy.fullDocumentContext(config: ...)
```

Note that this is a best effort operation that isn't guaranteed to return a complete result. You can therefore configure the function to yield better results.


[Pro]: /pro

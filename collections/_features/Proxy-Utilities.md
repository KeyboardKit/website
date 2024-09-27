---
title: Proxy Utilities
---

iOS keyboards use a **UITextDocumentProxy** to integrate with the currently active text field. It lets you insert and delete text, get the selected text, move the input cursor, etc.

The native proxy APIs are however quite limited, and make it hard to get detailed information about the text and perform many standard keyboard operations. 

KeyboardKit adds a bunch of proxy extension to make things easier. ``KeyboardInputViewController`` also has a custom ``.textDocumentProxy`` that lets you do even more. 

[KeyboardKit Pro][Pro] adds even more [proxy capabilities](#pro), such as being able to read the full document, instead of the limited text you get access to by default.


## Proxy namespace

KeyboardKit has a ``Proxy`` namespace with proxy-related types. It currently only contains utils when it's part of a KeyboardKit Pro build.


## Proxy extensions

KeyboardKit extends the native ``UITextDocumentProxy`` with additional capabilities, such as the ability to get more content from the document, analyze words & sentences, end the current sentence, etc.

Here are some examples of extensions that KeyboardKit adds to it:

* ``currentWord``
* ``currentWordPreCursorPart``
* ``currentWordPostCursorPart``
* ``deleteBackward(range:)``
* ``deleteBackward(times:)``
* ``documentContext``
* ``endSentence(withText:)``
* ``fullDocumentContext(config:)``
* ``hasAutocompleteInsertedSpace``
* ``hasAutocompleteRemovedSpace``
* ``hasCurrentWord``
* ``hasUnclosedAlternateQuotationBeforeInput(for:)``
* ``hasUnclosedQuotationBeforeInput(for:)``
* ``insertAutocompleteSuggestion(_:tryInsertSpace:)``
* ``insertDiacritic(_:)``
* ``isCursorAtNewSentence``
* ``isCursorAtNewSentenceWithTrailingWhitespace``
* ``isCursorAtNewWord``
* ``isCursorAtTheEndOfTheCurrentWord``
* ``isReadingFullDocumentContext``
* ``preferredQuotationReplacement(whenInserting:for:)``
* ``replaceCurrentWord(with:)``
* ``sentenceBeforeInput``
* ``sentenceDelimiters``
* ``tryInsertSpaceAfterAutocomplete()``
* ``tryRemoveAutocompleteInsertedSpace()``
* ``tryReinsertAutocompleteRemovedSpace()``
* ``wordBeforeInput``

See the documentation for more information and a complete list of extension.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks additional text document proxy capabilities, like the ability to read the full document context, instead of the limited text you get access to by default.

To read the full document context, you can call the proxy's async `fullDocumentContext`, which will move the text cursor to unlock more text.

Omce the read operation is done, KeyboardKit will try to return the text input cursor to its original position. This is a best effort attempt, since the native APIs are very limited.



[Pro]: /pro

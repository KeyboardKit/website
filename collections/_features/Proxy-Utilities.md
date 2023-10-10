---
title: Proxy Utilities
---

iOS keyboard extensions use the native `UITextDocumentProxy` to integrate with the currently active application. It lets you insert and delete text, get the selected text, move the input cursor, etc.

The native proxy APIs are however very limited, which makes it hard to get detailed information and perform many standard keyboard operations.

KeyboardKit adds a bunch of proxy extension to make things easier. ``KeyboardInputViewController`` also has a custom ``textDocumentProxy`` property that lets you do more than with the native proxy. 

[KeyboardKit Pro][Pro] adds even more proxy capabilities, such as the ability to read the full document context. You can read more about it further down.



## Proxy namespace

KeyboardKit has a ``Proxy`` namespace that contains proxy-related types. For now, this namespace will only contain types when it's part of the KeyboardKit Pro build.



## Extensions

Since `UITextDocumentProxy` extensions are not included in the generated documentation, here is a list of extensions that you get access to by simply importing KeyboardKit into your project:


### Autocomplete

- hasAutocompleteInsertedSpace
- hasAutocompleteRemovedSpace
- insertAutocompleteSuggestion(_:tryInsertSpace:)
- tryInsertSpaceAfterAutocomplete()
- tryReinsertAutocompleteRemovedSpace()
- tryRemoveAutocompleteInsertedSpace

### Content

- documentContext  
- isReadingFullDocumentContext

### Delete

- deleteBackward(range:)
- deleteBackward(times:)

### Quotation

- hasUnclosedQuotationBeforeInput(for:)
- hasUnclosedAlternateQuotationBeforeInput(for:)
- preferredQuotationReplacement(whenInserting:for:)

### Sentences

- isCursorAtNewSentence
- isCursorAtNewSentenceWithTrailingWhitespace
- sentenceBeforeInput
- sentenceDelimiters
- endSentence()

### Words

- currentWord
- currentWordPreCursorPart
- currentWordPostCursorPart
- hasCurrentWord
- isCursorAtNewWord
- isCursorAtTheEndOfTheCurrentWord
- wordBeforeInput
- replaceCurrentWord(with replacement: String)



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks additional text document proxy features when you register a valid license.


### Read the full document context

KeyboardKit Pro provides ways to read the full document context from the text document proxy, instead of the limited text amount you can read by default.


[Pro]: /pro

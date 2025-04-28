---
title: Proxy Utilities

hero-title: Features
hero-description: Text Document Proxy Utilities
hero-emoji: 📄
---

Custom keyboards use a **UITextDocumentProxy** to integrate with the currently active text field. It lets you insert and delete text, get the selected text, move the input cursor, etc.

The native proxy APIs are however *very* limited, which makes it hard to get information about the text and to perform many common keyboard operations. 

KeyboardKit therefore extends the proxy with more features to let you do more, like ``currentWord``, ``isCursorAtNewSentence``, ``deleteBackward(range:)``, ``endSentence(withText:)``, etc.

See the online documentation for more information and a for full list of available proxy extension.


## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks additional text document proxy capabilities, like the ability to read the full document context, instead of the limited text that the native APIs return.


```swift
let proxy = keyboardContext.textDocumentProxy
let result = try await proxy.fullDocumentContext(...)
```

KeyboardKit Pro also makes it possible to replace the main text document proxy with a custom one. This is used by the [text input](/features/text-input) components, to let you type within the keyboard extension.


[Pro]: /pro

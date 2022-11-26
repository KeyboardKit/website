---
title:  KeyboardKit Pro can now get all text from the proxy
date:   2022-10-05 06:00:00 +0100
tags:   releases proxy

image:  /assets/headers/icon-pro.png

article: https://keyboardkit.github.io/KeyboardKitPro/documentation/keyboardkitpro/pro-document-proxy-extensions
---

KeyboardKit Pro 6.4.2 has been extended with new text document proxy extensions that let you read all text from the proxy.

![Icon badge]({{page.image}})

As you may have noticed, calling the `UITextDocumentProxy` `documentContextBeforeInput` and `documentContextAfterInput` properties don't give you *all* content before and after the text input cursor, just the content closest to the text cursor. Any line break may stop the proxy from fetching more content, which makes it hard to do more complex operations, like proof-reading a document.

KeyboardKit Pro has therefore been extended with brand new `UITextDocumentProxy` extensions that let you access all text from the proxy. You can get the `fullDocumentContext()` as well as the full context before and after the input. Calling these functions will cause the keyboard extension to navigate through the entire text mass by moving the input cursor around, after which it will return the cursor to its original position.

There is a new [article]({{page.article}}) in the online documentation that explains these extensions in more details with some sample code, so make sure to check it out if this sounds interesting.
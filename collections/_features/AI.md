---
title: AI Support
---

Apple's native keyboard APIs have limitations that makes it hard to support AI-based features. For instance, keyboards can't by default read the entire document or let users type within the keyboard.

[KeyboardKit Pro][Pro] unlocks [features](#pro) that make it easier to add AI-based functionality to a keyboard.


## Core Features

While the open-source SDK doesn't have any pre-defined functionality for AI support, it defines protocols and models that can help you get started.

<a name="pro">
## 👑 Pro Features


### Full Document Reader

Keyboard extensions are by default only able to get a little text before and after the input cursor. This makes it hard to implement AI-based text analysis, spellchecking, and proof reading.

[KeyboardKit Pro][Pro] unlocks ways to read **all** text from any text field, by moving the text cursor in a way that unlocks more content.


### Text Routing

Keyboard extensions will by default type into the active app. Adding text fields to a keyboard will not work, since the keyboard will still send text to the main app.

[KeyboardKit Pro][Pro] unlocks text input components that lets you type within the keyboard, with no additional code needed.


[Pro]: /pro

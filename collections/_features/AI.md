---
title: AI Support
---

Apple's native keyboard APIs lack many features that are often needed by AI-based keyboards.

For instance, AI-based keyboards may need to read the entire document to perform spellchecking and proofreading, and also let users type within the keyboard to type prompts or intents.

Keyboard extensions have little native support for this. The text document proxy will only return the text closest to the input cursor. You also can't type in text fields in the keyboard, since text is always sent to the main app. This makes in-keyboard prompting hard to implement.

[KeyboardKit Pro][Pro] unlocks [features](#pro) that make it easier to add AI-based functionality to a keyboard.


<a name="pro">
## 👑 KeyboardKit Pro


### Full Document Reader

[KeyboardKit Pro][Pro] unlocks ways to read *all* text from any text field, by moving the text cursor in a way that unlocks more content. See the [proxy utilities](/features/proxy-utilities/) feature for more information.


### Text Input

[KeyboardKit Pro][Pro] unlocks text input components that lets you type within the keyboard, with no additional code needed. See the [text input](/features/text-input) feature for more information.


[Pro]: /pro

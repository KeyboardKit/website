---
title: AI Support
---

Apple's native keyboard APIs have limitations that makes it hard to support AI-based features. For instance, keyboards can't by default read the entire document or let users type within the keyboard.

[KeyboardKit Pro][Pro] unlocks features that make it easier to add AI-based functionality to a keyboard.


## Full Document Reader

Keyboard extensions are by default only able to get a little text before and after the input cursor. This makes it hard to implement AI-based text analysis, spellchecking, and proof reading.

[KeyboardKit Pro][Pro] unlocks ways to read **all** text from a text field, using the `fullDocumentContext` text document proxy extensions that are unlocked by the Silver and Gold tiers.


## Text Routing

Keyboard extensions will by default type into the active app. Adding text fields to the keyboard extension doesn't work, since the keyboard will still send text to the main app.

[KeyboardKit Pro][Pro] unlocks ways to route text from the main app to text fields within the keyboard extension. It also has a `KeyboardTextField` that handles this automatically.


[Pro]: /pro

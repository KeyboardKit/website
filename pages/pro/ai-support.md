---
id: ai-support
title: AI Support
layout: page
permalink: /pro/ai

hero-emoji: 🤖
description: KeyboardKit Pro adds support for AI-based features
---

[KeyboardKit Pro](/pro) unlocks capabilities that are needed for sophisticated AI features, like reading the full text of the main document.


## Full Document Reader

Keyboard extensions will by default only get a little bit of text before and after the input cursor. This makes it hard to build support for AI-based text analysis, spellchecking, and proof reading.

KeyboardKit Pro unlocks ways to let a keyboard and its text document proxy read the entire text in the currently selected text field (a.k.a. the text document proxy).

By getting access to all the text in the text document proxy, you can pass in a lot more information to your AI model or ChatGPT powered functionality and make AI-based features a lot more capable.


## Text Routing

Keyboard extensions will by default type into the currently selected text field in the currrently active app. Adding a text field to the keyboard doesn't work, since the keyboard will not type into it.

This makes it hard to build AI-based features into your keyboard, that requires user input, such as generating custom images with Open AI and DALL·E, asking questions to an AI, etc.

KeyboardKit Pro unlocks ways to route text from the main app to a text field within the keyboard. It also has specific text input views that handle this automatically for you.
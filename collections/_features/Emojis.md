---
title: Emojis
---

KeyboardKit has an ``Emoji`` struct that represents an emoji value. It also serves as a namespace for emoji-related functionality.

[KeyboardKit Pro][Pro] unlocks an emoji keyboard that supports all categories, skin tone variations, etc.


## Emojis Functionality

KeyboardKit has an ``Emoji`` struct that lets you work with emojis in a more structured way:

```swift
let emoji = Emoji("😀")
```

The `Emoji` type provides you with a lot of information, such as a unique unicode identifier, a unique name, ways to localize emojis, support for emoji search, `String` and `Character` extensions, etc.

KeyboardKit also provides you with all emoji categories, support for skin tone variations, emoji and Unicode version information, etc.



## 👑 Pro features

KeyboardKit Pro unlocks an **EmojiKeyboard** that mimics the native emoji keyboard and supports all categories and features like skin tone variations.

![Emoji Keyboard](/assets/screenshots/emoji-keyboard-500.jpg)

KeyboardKit Pro also unlocks an `Emoji.MostRecentProvider` that automatically registers emojis as you use them in the keyboard, to populate the `recent` category.


[Pro]: /pro

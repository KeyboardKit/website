---
title: Emojis
---

KeyboardKit has an ``Emoji`` struct that represents an emoji value. It also serves as a namespace for emoji-related functionality.

[KeyboardKit Pro][Pro] unlocks an [emoji keyboard](#pro) that supports all categories, skin tone variations, etc.


## Emojis

KeyboardKit defines emoji-specific models that lets you work with emojis in a more structured way:

```swift
let emojis = Emoji.all        // 😀😃😄😁😆🥹😅😂🤣🥲...
Emoji("😀").localizedName     // Grinning Face
Emoji("👍").unicodeIdentifier // \\N{THUMBS UP SIGN}
Emoji("👍").skinToneVariants  // 👍👍🏻👍🏼👍🏽👍🏾👍🏿'

EmojiCategory.smileysAndPeople.emojis  // 😀😃😄...

EmojiVersion.v15.emojis       // 🫨🫸🫷🪿🫎🪼🫏🪽🪻🫛🫚🪇🪈🪮🪭🩷🩵🩶🪯🛜...
```

KeyboardKit defines emoji categories, support for skin tone variations, emoji and unicode version information, etc. in a way that only exposes supported features to your users.


<a name="pro">
## 👑 KeyboardKit Pro

KeyboardKit Pro unlocks an **EmojiKeyboard** that mimics the native emoji keyboard and supports all categories and features like skin tone variations.

<img width="450" alt="An EmojiKeyboard" src="{{page.assets}}emojikeyboard.jpg" />

KeyboardKit will automatically register emojis as you use them, to populate the "frequent" category.


[Pro]: /pro

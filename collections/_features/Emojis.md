---
title: Emojis
description: Emoji models and keyboards
hero-emoji: 😀
---

KeyboardKit has an ``Emoji`` struct that represents an emoji value. It also serves as a namespace for emoji-related types and views.

```swift
let emojis = Emoji.all        // 😀😃😄😁😆🥹😅😂🤣🥲...
Emoji("😀").localizedName     // Grinning Face
Emoji("👍").unicodeIdentifier // \\N{THUMBS UP SIGN}
Emoji("👍").skinToneVariants  // 👍👍🏻👍🏼👍🏽👍🏾👍🏿'

EmojiCategory.smileysAndPeople.emojis  // 😀😃😄...

EmojiVersion.v15.emojis       // 🫨🫸🫷🪿🫎🪼🫏🪽🪻🫛🫚🪇🪈🪮🪭🩷🩵🩶🪯🛜...
```

KeyboardKit defines standard and custom emoji categories, support for skin tone variations, emoji versions, etc. in a way that only exposes supported emojis to your users.


## 👑 KeyboardKit Pro

KeyboardKit Pro unlocks an `EmojiKeyboard` that mimics the native emoji keyboard, with support for categories, skin tones, search, etc.

<div class="grid col2">
    <span><img src="{{page.assets}}emojikeyboard.jpg" /></span>
    <span><img src="{{page.assets}}emojikeyboard-callout.jpg" /></span>
</div>

KeyboardKit will automatically register emojis as you use them, to populate the `.frequent` category.


[Pro]: /pro

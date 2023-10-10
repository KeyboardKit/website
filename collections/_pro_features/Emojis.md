---
title: Emojis
---

[KeyboardKit Pro][Pro] unlocks an emoji keyboard, as well as emoji categories, keyboards, skintones, version information, etc. Information about these Pro features can be found at the end of this article.


### Emoji Keyboard

KeyboardKit Pro unlocks an `EmojiKeyboard` that mimics the native emoji keyboard. 

The keyboard uses a bunch of views that are also unlocked by KeyboardKit Pro, such as `Emojis.Grid` as well as titles, menus, etc. You can use these views as standalone components as well. 


### Emoji Categories

KeyboardKit Pro unlocks an `Emojis.Category` enum that defines all available emoji categories and their emojis, for instance:

```swift
Emojis.Category.smileys.emojis    // 😀😃😄😁😆🥹😅😂🤣🥲 ...
Emojis.Category.animals.emojis    // 🐶🐱🐭🐹🐰🦊🐻🐼🐻‍❄️🐨 ...
```

You can get a list of all available categories like this:

```swift
Emojis.Category.all     // [.frequent, .smileys, .animals, ...]
```

and use these categories to get a list of all available emojis:

```swift
Emoji.all     // 😀😃😄😁😆🥹😅😂🤣🥲 ...
```

Emoji categories are also used to power the `EmojiKeyboard`.


### Emoji Skin tones

KeyboardKit Pro unlocks additional ``Emoji`` extensions to get skin tone information:

```swift
Emoji("👍").hasSkinToneVariants     // true
Emoji("🚀").hasSkinToneVariants     // false
Emoji("👍🏿").neutralSkinToneVariant  // 👍
Emoji("👍").skinToneVariants        // 👍👍🏻👍🏼👍🏽👍🏾👍🏿
Emoji("👍").skinToneVariantActions  // The above variants as keyboard actions
```

Skin tones will also be used as secondary callout actions, which means that long pressing an emoji with skintones in an emoji keyboard will show an action callout.


### Emoji Versions

KeyboardKit Pro unlocks an `EmojiVersion` type that defines emoji versions, platform availability and included emojis, for instance:

```swift
let version = EmojiVersion.v15
version.version  // 15.0
version.iOS      // 16.4
version.macOS    // 13.3
version.tvOS     // 16.4
version.watchOS  // 9.4
```

You can also get the emoji version included in a certain platform version, for instance:

```swift
let version = EmojiVersion(iOS: 15.4)
version.version  // 14.0
```

A version specifies the emojis introduced in that version, later and older versions and emojis that were introduced in later versions:

```swift
let version = EmojiVersion.v14
version.emojis            // 🫠🫢🫣🫡🫥🫤🥹...
version.laterVersions     // [.v15]
version.olderVersions     // []
version.unavailableEmojis // 🫨🫸🫷🪿🫎🪼🫏🪽...
```

This can be used to filter out unavailable emojis from the various categories, which lets the emoji keyboard only list available emojis.


### Most recent emojis

[KeyboardKit Pro][Pro] unlocks an `Emojis.MostRecentProvider` and replaces ``StandardKeyboardActionHandler`` with a `ProKeyboardActionHandler` that automatically register emojis as you use them.


[Pro]: /pro

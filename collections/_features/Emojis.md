---
title: Emojis
---

KeyboardKit provides you with an ``Emoji`` type that has unicode and emoji information, such as localized content, flags, etc.

{% include features/pro-link.html title=page.title %}



## Emojis namespace

KeyboardKit has an ``Emojis`` namespace that contains emoji-related types and views. KeyboardKit Pro adds pro emoji features to this namespace.



## Emoji

KeyboardKit has an ``Emoji`` struct that lets you work with emojis in a more structured way.

This type provides you with a bunch of information, such as the emoji's unique unicode-based identifier and name, localized name etc.:

```swift
let emoji = Emoji("😀")
emoji.unicodeIdentifier             // \\N{GRINNING FACE}
emoji.unicodeName                   // Grinning Face
emoji.localizedName(for: .english)  // Grinning Face
emoji.localizedName(for: .swedish)  // Leende Ansikte
emoji.localizedName(for: .spanish)  // Grinning Face
```

To localize emojis for a locale, add translations to the correct `Localizable.strings` file on this format:

```
/* [😀] */ "Emoji.GrinningFace" = "Grinning Face";
/* [😃] */ "Emoji.SmilingFaceWithOpenMouth" = "Smiling Face with Open Mouth";
```

Emoji localization is a major undertaking and will therefore have to be a community effort.



## String & Character Extensions

KeyboardKit has String and Character extensions to detect emojis, for instance:

```swift
"Hello!".containsEmoji          // false
"Hello! 👋".containsEmoji       // true
"Hello! 👋".containsOnlyEmojis  // false
"👋".containsOnlyEmojis         // true
"Hello! 👋😀".emojis            // ["👋", "😀"]
"Hello! 👋😀".emojiString       // "👋😀"
"🫸🫷".isSingleEmoji            // false
"👍".isSingleEmoji              // true
```

These extensions make it easier to handle text and inputs, and power more powerful features.
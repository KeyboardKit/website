---
title: Images
---

While you can use any native `Image` you like in your custom keyboards, having access to keyboard-specific images simplifies creating custom keyboards that look more native.

KeyboardKit provides keyboard-specific `Image` extensions, both SF Symbol and asset-based ones. 


## Image Extensions

KeyboardKit has `Image` extensions that resolve to SF Symbols, like `.keyboard`, `.keyboardBackspace`, `.keyboardDismiss`, etc.

KeyboardKit also has a few `Image` extensions that resolve to custom assets, like `.keyboardEmoji`. 

KeyboardKit Pro unlocks even more emoji-related image assets, like `.emojiCategory(.frequent)`, `.emojiCategory(.smileys)`, etc.

Since these asset-based images are vectorized PDF assets, they scale well when they are resized.
---
title: Images
---

While you can use any native `Image` you like in your custom keyboards, having access to keyboard-specific images simplifies creating custom keyboards that look more native.

KeyboardKit provides keyboard-specific `Image` extensions, both SF Symbol and asset-based ones. 



## Symbol-based images

KeyboardKit has `Image` extensions that resolve to SF Symbols, for instance:

```swift
Image.keyboard
Image.keyboardBackspace
Image.keyboardDismiss
```

The images are prefixed with `keyboard`, so typing `Image.keyboard` gives you a list of available images.



## Asset-based images

KeyboardKit also has a few `Image` extensions that resolve to embedded assets, for instance:

```swift
Image.keyboardEmoji
```

These images can be used just like the symbols-based ones, but don't scale as well. 

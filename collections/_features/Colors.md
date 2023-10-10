---
title: Colors
---

While you can use any native `Color` you like in your custom keyboards, having access to keyboard-specific colors simplifies creating custom keyboards that look more native.

KeyboardKit provides a bunch of keyboard-specific `Color` extensions, such as standard colors for buttons, backgrounds, etc. Some of these colors come with some built-in logic to help work around system limitations, so make sure to read this article carefully.



## Raw colors

KeyboardKit has raw colors that aim to match the iOS system design as closely as possible, for instance:

```swift
.standardButtonBackground
.standardDarkButtonBackground
.standardKeyboardBackground
```

Colors without a `ForDarkAppearance` suffix support both light and dark mode, while the ones with the prefix are meant to be used for dark appearance keyboards in light mode.



## Contextual colors

The contextual colors take a ``KeyboardContext`` and vary the result based on the context, for instance:

```swift
Color.standardButtonBackground(for: context)
Color.standardButtonForeground(for: context)
```

Using these colors means that you don't have to check if the keyboard is in dark mode, which device that is currently used, etc. It's recommended to use these instead of the raw values. 



## Important about keyboards and colors

If you take a closer look at some of these colors, you'll notice that some of them are semi-transparent. The reason for this is to work around a system limitation (bug) in iOS.

Keyboard extensions get invalid color schemes from iOS when they are used with a dark appearance text field. iOS will tell the keyboard that is uses a dark color *scheme*, even if the system scheme is light. 

Since dark appearance keyboards in light mode look different from keyboards in dark mode, being unable to detect the real appearance and color scheme makes it difficult to style the custom keyboard correctly. 

To work around this, some colors use an internal color set that has semi-transparent white colors with an opacity that aims to look good in both light and dark mode.


[Pro]: /pro
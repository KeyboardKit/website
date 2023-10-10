---
title: Colors
---

While you can use any native `Color` you like in your custom keyboards, having access to keyboard-specific colors simplifies creating custom keyboards that look more native.

KeyboardKit provides some keyboard-specific `Color` extensions, like standard colors for buttons, backgrounds, etc. Some of these colors have built-in logic to work around system limitations.



## Raw colors

The raw colors aim to match the iOS system design as closely as possible, for instance:

```swift
Color.standardButtonBackground
Color.standardButtonBackgroundForDarkAppearance
Color.standardDarkButtonBackground
Color.standardDarkButtonBackgroundForDarkAppearance
Color.standardKeyboardBackground
Color.standardKeyboardBackgroundForDarkAppearance
```

The colors without `ForDarkAppearance` suffix support both light and dark mode, while the ones with the prefix are meant to be used for dark appearance keyboards in light mode.



## Contextual colors

The contextual colors take a ``KeyboardContext`` instance and will vary the result based on the context:

```swift
Color.standardButtonBackground(for: context)
Color.standardDarkButtonBackground(for: context)
```

Using these contextual colors mean you don't have to check if the keyboard is in dark or light mode, which device that is currently used, etc. It's recommended to use these instead of the raw values. 



## Important about keyboards and colors

If you take a look at some of these keyboard colors, you will notice that some are semi-transparent. The reason for this is to work around a system limitation (bug) in iOS.

Keyboards get invalid color scheme information when they are used with dark appearance text fields. iOS will then tell the keyboard that is uses a dark color *scheme*, even if the system scheme is light. 

Since dark appearance keyboards in light mode look different from keyboards in dark mode, being unable to detect the real appearance and scheme makes it difficult to style the keyboard correctly. 

To work around this, some colors use an internal color set that has semi-transparent white colors with an opacity that aims to look good in both light and dark mode.



[Pro]: /pro
---
title: Colors
---

While you can use any native `Color` you like in your custom keyboards, having access to keyboard-specific colors simplifies creating custom keyboards that look more native.

KeyboardKit provides some keyboard-specific `Color` extensions, like standard colors for buttons, backgrounds, etc. Some of these colors have built-in logic to work around system limitations.



## Color extensions

KeyboardKit has static colors that aim to match the iOS system colors, such as `.keyboardBackground`, `.keyboardButtonBackground`, `.keyboardButtonForeground`, etc.

KeyboardKit also has contextual colors take a ``KeyboardContext`` and vary the result based on it, like `keyboardBackground(for:)` and `keyboardButtonBackground(for:)`.

Using the contextual colors means that you don't have to check for light or dark mode, which device that is currently used, etc. It's recommended to use these instead of the raw values. 



## Important about keyboards and colors

If you take a closer look at some of these colors, you will notice that some are semi-transparent. The reason for this is to work around a system limitation (bug?) in iOS.

Keyboard extensions get invalid color scheme information when used with a dark appearance text field. iOS will say that is uses a dark color scheme, even if the system color scheme is light. 

Since dark appearance keyboards in light mode look different from keyboards in dark mode, this incorrect information makes it difficult to style keyboards correctly. 

To work around this, some colors use a semi-transparent color with an opacity that aims to look good in both light and dark mode. This has been reported to Apple, but is not yet fixed.



[Pro]: /pro
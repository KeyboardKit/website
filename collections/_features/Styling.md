---
title: Styling
---

While native iOS keyboards have few ways to customize the look and feel, KeyboardKit keyboards can be styled and customized to great extent.

KeyboardKit uses ``KeyboardStyle`` types to style its views. For instance, a ``KeyboardStyle.InputCallout`` style can be used to style a ``Callouts.InputCallout`` view.

[KeyboardKit Pro][Pro] unlocks a powerful theme engine, themes and more ways to style a keyboard.


## Terminology

KeyboardKit uses different names for different ways to style keyboards. 

* A ``KeyboardStyle`` style is *static* and can be applied to certain views.
* A ``KeyboardStyleProvider`` is *dynamic* and provides context-based styles.
* A ``KeyboardTheme`` is a *static* style provider that can define, reuse and share styles.

You can mix and match these concepts as you see fit.


## Resources & Assets

KeyboardKit comes with colors and assets that can be used to create native-looking keyboards.

* `Image` has a bunch of keyboard-specific images, e.g. `.keyboardBackspace`.
* `Color` has a bunch of keyboard-specific colors, e.g. `.keyboardBackground`.
* ``KeyboardAction`` and other types have standard images, texts and colors.


## Styling Functionality

KeyboardKit has a ``Styling`` namespace with styling-related types and a ``KeyboardStyle`` namespace  with keyboard styles like ``Button``, ``Callout`` and ``EmojiKeyboard``.

All styles can be modified, and most have a `.standard` style that you can use as template. Standard styles can also be overwritten to change the global style of that component.

A ``KeyboardStyleProvider`` can return dynamic styles for different parts of the keyboard. Unlike static styles, style providers can vary styles depending on the ``KeyboardContext``, ``KeyboardAction`` etc.



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks a theme engine that makes it a lot easier to define styles. Once you have a theme, you can apply it with a `ThemeBasedKeyboardStyleProvider`. See [themes](/features/themes) for more details.


[Pro]: /pro
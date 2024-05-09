---
title: Styling
---

While native iOS keyboards have few ways to customize the look and feel, KeyboardKit keyboards can be styled and customized to great extent.

KeyboardKit uses ``KeyboardStyle`` types to style its views. For instance, a ``KeyboardStyle.InputCallout`` style can be used to style a ``Callouts.InputCallout`` view.

[KeyboardKit Pro][Pro] unlocks a powerful [theme engine](#pro), and many more ways to style a keyboard.


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


## Core Features

KeyboardKit uses view modifier-based styling. For instance, the `.autocompleteToolbarStyle(...)` view modifier can be used to style an `Autocomplete.Toolbar` with an `Autocomplete.ToolbarStyle`.

However, some components like the `SystemKeyboard` are more complex and need dynamic styling. KeyboardKit then uses a `KeyboardStyleProvider` that can vary styles based on many factors.

A ``KeyboardStyleProvider`` can return dynamic styles for different parts of the keyboard. Unlike static styles, style providers can vary styles depending on device, locale, action, etc.


<a name="pro">
## 👑 Pro Features

[KeyboardKit Pro][Pro] unlocks a theme engine that makes it a lot easier to define and share styles. You can apply any theme with a `KeyboardStyle.ThemeBasedProvider`. See [themes](/features/themes) for more information.


[Pro]: /pro
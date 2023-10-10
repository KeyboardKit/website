---
title: Styling
---

While native iOS keyboards provide very little ways of customizing the look and feel of the keyboard, KeyboardKit-based keyboards can be styled and customized to great extent.

KeyboardKit uses ``KeyboardStyle`` types to style its views. For instance, an ``KeyboardStyle.InputCallout`` style can be used to style a ``Callouts.InputCallout`` view.

KeyboardKit will bind a ``StandardKeyboardStyleProvider`` instance to the controller ``services`` when the keyboard is loaded. You can modify or replace this provider at any time. 

[KeyboardKit Pro][Pro] unlocks a powerful theme engine and a bunch of themes when you register a valid license key. You can read more about it further down.



## Terminology

KeyboardKit uses different names for different ways to style keyboards. 

* A ``KeyboardStyle`` style is *static* and can be applied to certain views.
* A ``KeyboardStyleProvider`` is a *dynamic* style provider that provides context-based styles.
* A `KeyboardTheme` (Pro) is a *static* style provider that can define, reuse and share styles.

You can mix and match these different concepts as you see fit.



## Resources & Assets

KeyboardKit comes with colors and assets that can be used to create native-looking keyboards.

* `Image` has a bunch of keyboard-specific images, e.g. `.keyboardBackspace`.
* `Color` has a bunch of keyboard-specific colors, e.g. `.standardButtonBackground`.
* ``KeyboardAction`` and other types have standard images, texts and colors.



## Styling namespace

KeyboardKit has a ``Styling`` namespace with styling-related types and a ``KeyboardStyle`` namespace  with keyboard styles like ``Button``, ``Callout`` and ``EmojiKeyboard``.

All styles can be modified, including most standard values. For instance, here we apply a red background to the standard ``KeyboardStyle/Callout`` style:

```swift
var style = KeyboardStyle.Callout.standard
style.backgroundColor = .red
KeyboardStyle.Callout.standard = style
```

Most styles have a `.standard` style that you can use as a template. The standard styles can also be overwritten with a custom style to change the global default style of that component.



## Style providers

A ``KeyboardStyleProvider`` can return dynamic styles for different parts of the keyboard. Unlike static styles, style providers can vary styles depending on the ``KeyboardContext``, ``KeyboardAction`` etc.

KeyboardKit will bind a ``StandardKeyboardStyleProvider`` instance to the controller ``services`` when the keyboard is loaded. You can modify or replace this provider at any time.



## How to create a custom style provider

You can create a custom style provider by inheriting ``StandardKeyboardStyleProvider`` and customize the parts you want, or implement the ``KeyboardStyleProvider`` protocol from scratch.



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks a theme engine that makes it a lot easier to define styles for a keyboard.

### Themes

A `KeyboardTheme` can be used to define a bunch of styles, such as button and background styles. You can also use other themes as templates to create your own custom themes. 

KeyboardKit comes with many pre-defined themes:

```swift
KeyboardTheme.standard
KeyboardTheme.swifty
KeyboardTheme.minimal
KeyboardTheme.candyShop
KeyboardTheme.colorful
KeyboardTheme.neon
KeyboardTheme.tron
```

All pre-defined themes come with style variations that allow you to tweak parts of a theme:

```swift
KeyboardTheme.standard(.pink)
KeyboardTheme.swifty(.blue)
KeyboardTheme.minimal(.midnight)
KeyboardTheme.candyShop(.cottonCandy)
KeyboardTheme.colorful(.purple)
KeyboardTheme.neon(.night)
KeyboardTheme.tron(.sark)
```

You can access all pre-defined themes with `KeyboardTheme.allPredefined`. All pre-defined style variations also have an `allPredefined` property, e.g. `KeyboardTheme.SwiftyStyle.allPredefined`.

You can create custom themes and style variations. See the online documentation for examples.


### Theme-based styling

Once you have a theme that you want to use, you can use the `ThemeBasedKeyboardStyleProvider`. You can inherit it to customize this theme-based provider even further.


### Previews

KeyboardKit Pro unlocks powerful tools to preview themes:

```swift
SystemKeyboardThemePreview(...)         // A live theme preview.
SystemKeyboardThemePreviewHeader(...)   // A live theme preview header.
```

To preview many themes at once, you can use this more lightweight preview:

```swift
SystemKeyboardButtonThemePreview(...)   // A system button preview for a theme.
```

This will only render a set of buttons, without any build-in interactions.



[Pro]: /pro
---
title: Styling
---

While native iOS keyboards have few ways to customize the look and feel, KeyboardKit keyboards can be styled and customized to great extent.

KeyboardKit uses ``KeyboardStyle`` types to style its views. For instance, a ``KeyboardStyle.InputCallout`` style can be used to style a ``Callouts.InputCallout`` view.

[KeyboardKit Pro][Pro] unlocks a powerful [theme engine](#pro), and many more ways to style a keyboard.


## Keyboard Style Namespace

KeyboardKit has a ``KeyboardStyle`` namespace that contains style-related types. It will probably be removed in KeyboardKit 9, together with the ``KeyboardStyleService``, and replaced by view modifiers.


## Keyboard Style Services

A ``KeyboardStyleService`` can provide dynamic styles for different parts of a keyboard. Unlike static styles, a style service can vary styles depending on ``KeyboardContext``, ``KeyboardAction``, etc.


## Color & Image Extensions 

KeyboardKit defines additional, keyboard-specific ``Color`` and ``Image`` extensions, etc. to make it easy to create keyboards that look like a native iOS keyboard.

<div class="grid col2">
    <div><img alt="Image Extensions" src="{{page.assets}}styling-images.jpg" /></div>
    <div><img alt="Color Extensions" src="{{page.assets}}styling-colors.jpg" /></div>
</div>


KeyboardKit defines contextual colors that take a ``KeyboardContext``, like ``keyboardBackground(for:)``, that vary the color result based on the context. Prefer context-based colors whenever possible.

See the documentation for more information about colors and images, including some important information about how some colors are semi-transparent to work around a [system bug][Bug] in iOS.

[Bug]: https://github.com/KeyboardKit/KeyboardKit/issues/305


## Type Extensions

Many KeyboardKit types define standard images, texts & colors. For instance you can get a standard image and text for a ``KeyboardAction`` with ``standardButtonImage(for:)`` and ``standardButtonText(for:)``:

```swift
let context = KeyboardContext()
let image = KeyboardAction.command.standardButtonImage(for: context) // Command icon
let text = KeyboardAction.space.standardButtonText(for: context)     // KKL10n.space
```


## View styles

KeyboardKit defines custom styles for its various view. For instance, the ``Keyboard`` ``Keyboard/Button`` view has a ``Keyboard/ButtonStyle`` that can be applied with the ``SwiftUICore/View/keyboardButtonStyle(_:)`` view modifier.

Most views have static, standard styles that can be replaced by custom styles to change the global default style for that particular view. 


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks additional image assets, and a ``KeyboardTheme`` engine that makes easier to style keyboards with themes.


### Emoji Icons

KeyboardKit Pro unlocks vectorized emoji assets for all ``EmojiCategory``s, for instance ``keyboardEmoji`` & ``emojiCategory(_:)``:

<img alt="Emoji Images" src="{{page.assets}}images-emojis.jpg" />

Since these images are vectorized, they scale well when they are resized. They however do not support different font weights, so do not render them alongside other SF Symbols.

### Themes

KeyboardKit Pro unlocks a ``KeyboardTheme`` engine that makes easier to style keyboards with themes:

<div class="grid col3">
    <div><img alt="Standard Green Theme" src="{{site.assets}}/themes/standard-green.jpg" /></div>
    <div><img alt="Swifty Blue Theme" src="{{site.assets}}/themes/swifty-blue.jpg" /></div>
    <div><img alt="Cotton Candy Theme" src="{{site.assets}}/themes/candyshop-cottoncandy.jpg" /></div>
</div>

See [themes](/features/themes) for more information.


[Pro]: /pro
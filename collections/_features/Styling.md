---
title: Styling
hero-emoji: 🎨
---

While native iOS keyboards have few ways to customize the look and feel, KeyboardKit can be styled and customized to great extent, using style services and view modifiers.

KeyboardKit has a ``KeyboardStyle`` namespace that contains style-related types and views, as well as a ``KeyboardStyleService`` that can provide dynamic styles for different parts of a keyboard. 

Unlike static styles, a style service can vary styles depending on ``KeyboardContext``, ``KeyboardAction``, etc. This style service concept will be phased out through KeyboardKit 9 and replaced by modifiers.


## Colors & Images 

KeyboardKit defines keyboard-specific ``Color`` and ``Image`` extensions, etc. that make it easy to create keyboards that look like a native iOS keyboard.

<div class="grid col2">
    <div><img alt="Image Extensions" src="{{page.assets}}styling-images.jpg" /></div>
    <div><img alt="Color Extensions" src="{{page.assets}}styling-colors.jpg" /></div>
</div>


See the documentation for more information about colors and images, including some important information about how some colors are semi-transparent to work around a [system bug][Bug] in iOS.

[Bug]: https://github.com/KeyboardKit/KeyboardKit/issues/305


## Type Extensions

Many KeyboardKit types define standard images, texts & colors. For instance you can get a standard image and text for a ``KeyboardAction`` with ``standardButtonImage(for:)`` and ``standardButtonText(for:)``:

```swift
let context = KeyboardContext()
let image = KeyboardAction.command.standardButtonImage(for: context) // Command icon
let text = KeyboardAction.space.standardButtonText(for: context)     // KKL10n.space
```


## Style Modifiers

KeyboardKit defines custom styles for its various view. For instance, the ``Keyboard.Button`` view has a ``Keyboard.ButtonStyle`` that can be applied with the ``.keyboardButtonStyle(_:)`` view modifier.

Most views have standard styles that can be replaced by a custom style to change the default style. 


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks additional image assets, and a ``KeyboardTheme`` engine that makes easier to style keyboards with themes.


### Emoji Icons

KeyboardKit Pro emoji-specific, vectorized assets, like the ``.keyboardEmoji`` and ``.emojiCategory(_:)``:

<img alt="Emoji Images" src="{{page.assets}}images-emojis.jpg" />

### Themes

KeyboardKit Pro unlocks a ``KeyboardTheme`` engine that makes easier to style keyboards with themes:

<div class="grid col3">
    <div><img alt="Standard Green Theme" src="{{site.assets}}/themes/standard-green.jpg" /></div>
    <div><img alt="Swifty Blue Theme" src="{{site.assets}}/themes/swifty-blue.jpg" /></div>
    <div><img alt="Cotton Candy Theme" src="{{site.assets}}/themes/candyshop-cottoncandy.jpg" /></div>
</div>

See [themes](/features/themes) for more information about the KeyboardKit Pro theme engine and its various themes.


[Pro]: /pro
---
title:  dSYMs are now available
date:   2025-10-15 06:00:01 +0100
tags:   releases accessibility

assets: /assets/blog/25/1014/
image: /assets/blog/25/1014/image.jpg
image-show: 0

release: https://github.com/KeyboardKit/KeyboardKit-Binaries/releases/tag/10.0.2
---

[KeyboardKit 10.0.2]({{page.release}}) is the first version of KeyboardKit that is built with the dSYM files exported. This will make it easier for developers to analyze problems and crashes in their apps.

<!--![Blog header image]({{page.image}})-->


## Guided by Experts

The improvements in this version are the direct results of an amazing accessibility drop-in session with accessibility experts [Rob Whitaker]({{page.rob}}) and [Daniel Devesa Derksen-Staats]({{page.daniel}}).

Rob & Daniel analyzed KeyboardKit and came up with several ways to improve the keyboard. We're grateful for their help and strongly recommend you to reach out to them if you too need assistance.

For more information about keyboard accessibility, see [Supporting VoiceOver typing preferences]({{page.article1}}) by Peter Heery, and Daniel's article [Traits of a good accessible iOS app]({{page.article2}}).


## Keyboard Button Traits

KeyboardKit's `.keyboardButton` modifier adjusts the accessibility traits that it applies to the view, to make it behave better in the iOS keyboard.

Instead of `.isButton` this view modifier now applies `.isKeyboardKey`, which makes iOS enable more accessibility features. For instance, this change adds "Typing mode" to the accessibility rotor.

![Blog header image]({{page.assets}}rotor.jpg)

Typing mode makes it possible for users to select how the keyboard should behave when VoiceOver is enabled. Users can switch between standard and direct typing.

For more information about the rotor, see Apple's [About the VoiceOver rotor on iPhone or iPad]({{page.article-rotor}}).


## Toolbar Adjustments

The `Keyboard.ToggleToolbar` now applies accessibility labels and hints to the toggle button, to better explain what it does. It also hides the toggled toolbar from accessibility to avoid navigation conflicts.

Earlier versions had strange issues when navigating with VoiceOver, since the hidden toolbar items were still visible to the accessibility engine. This updated fixes this problem.


## Switch Control Support

The `KeyboardView` now applies an `.accessibilityElement(children: .contain)` modifier to each row, to group row items together. This should improve navigation with the [switch control]({{page.article-switch}}).


## Conclusion

The accessibility improvements in [KeyboardKit 10.0.1]({{page.release}}) will drastically improve the typing experience when VoiceOver is enabled. 

Big thanks again to [Rob Whitaker]({{page.rob}}) and [Daniel Devesa Derksen-Staats]({{page.daniel}}) for their invaluable support.
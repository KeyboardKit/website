---
title:  Improved Accessibility
date:   2025-10-12 07:00:00 +0100
tags:   releases accessibility

assets: /assets/blog/25/1013/
image: /assets/blog/25/1013/image.jpg
image-show: 0

rob: https://www.linkedin.com/in/rob-whitaker/
daniel: https://accessibilityupto11.com

article1: https://peterheery.me/posts/supporting-voiceover-typing-preferences/
article2: https://accessibilityupto11.com/Blog/2021-01-21-01/
article-rotor: https://support.apple.com/en-gb/111796
article-switch: https://support.apple.com/en-us/119835

release: https://github.com/KeyboardKit/KeyboardKit-Binaries/releases/tag/10.0.1
---

[KeyboardKit 10.0.1]({{page.release}}) drastically improves accessibility by applying improved button traits, hiding any hidden toolbar items to avoid interference, and enabling row navigation.

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
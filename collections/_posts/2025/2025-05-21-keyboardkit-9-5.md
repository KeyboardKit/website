---
title:  KeyboardKit 9.5
date:   2025-05-21 08:00:00 +0100
tags:   releases styling callouts

image-show: 0
image: /assets/versions/9_5.jpg
assets: /assets/blog/25/0521/

post: /blog/2025/04/22/replacing-services-with-value-builders-and-view-modifiers

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.5.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.5.0
---

KeyboardKit 9.5 is out, with new ways to apply callout actions, keyboard styles, and button styles, as well as themes, using view modifiers instead of services.

![Blog header image]({{page.image}})

As discussed in [this article]({{page.post}}), KeyboardKit's current service-based system design has many benefits, but it also comes with some challenges. While it's very easy to replace a service, the approach is too complex when it comes to customizing things like the keyboard design, and injecting plain values. 

For these cases, SwiftUI view modifiers are easier, and fits SwiftUI better. KeyboardKit 9.5 therefore adds new ways to customize callout actions, keyboard & button styles, and apply keyboard themes. If this proves successful, the approach will be expanded to layouts as well.

The view modifiers described below are opt-in, and will only replace the related services when they are applied. If not, the callout and style services will be used, just like before.

Due to this additional complexity, these new environment values are optional. If KeyboardKit 10.0 replaces these services with the view modifiers, the environment values will be made non-optional.


## Callout Actions

You can use the new `keyboardCalloutActions(_:)` view modifier to customize callout actions for any action. For instance, this would replace the standard callout actions for "k":

```swift
MyKeyboardView(...)
    .keyboardCalloutActions { params in
        if let custom = params.action.customCalloutActions { return custom }
        return params.standardCalloutActions(for: keyboardContext)
    }

...

private extension KeyboardAction {

    var customCalloutActions: [KeyboardAction]? {
        switch self {
        case .character(let char): customCalloutAction(for: char)
        default: nil
        }
    }

    func customCalloutAction(for char: String) -> [KeyboardAction]? {
        guard char.lowercased() == "k" else { return nil }
        let custom = String("keyboardkit".reversed())
        return [KeyboardAction].init(characters: custom)
    }
}
```

The code is a little complicated, but you get the idea. You can customize the callout actions for any action, and easily return the standard callouts for all other actions.

KeyboardKit will default to English callout actions, while KeyboardKit Pro will default to the standard callout actions of the current locale, if it's among the 73 supported ones.


## Keyboard Button Style

You can use the new `keyboardButtonStyle(builder:)` view modifier to customize the style of any kind of button. For instance, this would apply a custom background color to the backspace key:

```swift
MyKeyboardView(...)
    .keyboardButtonStyle { params in
        var style = params.standardStyle(for: keyboardContext)
        guard params.action == .backspace else { return style }
        style.backgroundColor = params.isPressed ? .yellow : .blue
        return style
    }
```

KeyboardKit defaults to the standard style of each button, and adds many new style extensions to `KeyboardAction` and other types, to simplify resolving many standard styles for any action.


## Keyboard View Style

You can use the new `keyboardViewStyle(_:)` view modifier to customize the style of a `KeyboardView`, like the background and foreground color, as well as the keyboard insets. For instance, this would apply a green background to the entire keyboard:

```swift
MyKeyboardView(...)
    .keyboardViewStyle(
        .init(background: .color(.green))
    )
```

KeyboardKit defaults to the standard insets and no custom color values.


## Keyboard Theme

You can use the new `keyboardTheme(_:context:)` view modifier to apply any KeyboardKit Pro theme to any view that supports theming. For instance, this would apply the `.candyShop` theme if themes are unlocked for the current license:

```swift
MyKeyboardView(...)
    .keyboardTheme(try? .candyShop, context: keyboardContext)
```

This will apply many different view modifiers to the view. If you want to override certain parts of the theme, make sure to apply those modifiers before the theme modifier.


## Conclusion

KeyboardKit 9.5 adds new view modifiers to explore if it's a better approach for applying values, like styles and callout actions. For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 
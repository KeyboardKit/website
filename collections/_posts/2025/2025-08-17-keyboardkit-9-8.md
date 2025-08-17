---
title:  KeyboardKit 9.8
date:   2025-08-17 06:00:00 +0100
tags:   releases callouts layout localization styling

image-show: 0
image: /assets/versions/9_8.jpg
assets: /assets/blog/25/0817/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.8.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.8.0
---

KeyboardKit 9.8 is out! This version adds a new keyboard layout engine that improves the overall performance and makes it easier to customize the keyboard layout.

![Blog header image]({{page.image}})


## 🗑️ Deprecated Callout & Style Services

Since the new view modifier-based callout and style customizations have been proven to work well, the callout and style services have now been soft deprecated.

The services will be removed in KeyboardKit 10, so switch to use the modifiers instead of services:

```swift
KeyboardView(
    ...
)

// 💡 Customize the style of any keyboard button.
.keyboardButtonStyle { params in
    let context = keyboardContext
    var style = params.standardStyle(for: context)
    guard params.action == .backspace else { return style }
    style.backgroundColor = params.isPressed ? .yellow : .blue
    return style
}

// 💡 Customize the callout actions in any way you want.
.keyboardCalloutActions { params in
    let context = keyboardContext
    let action = params.action
    if let actions = action.customCalloutActions { return actions }
    return params.standardActions(for: context)
}
```

Soft deprecations mean that the services are only commented as deprecated to avoid compile-time warnings, since they are still used within the library.


## ✨ New layout engine (BETA)

This version adds a `.keyboardLayout` view modifier that can be used to customize keyboard layouts:

```swift
KeyboardView(
    ...
)

// 💡 Customize the layout in any way you want.
.keyboardLayout { params in
    var layout = params.standardLayout(for: keyboardContext)
    guard keyboardContext.keyboardType == .alphabetic else { return layout }
    var item = layout.createIdealItem(for: .character("!"))
    item.size.width = .input
    layout.itemRows.insert(item, after: .space)
    return layout
}
```

This works just like the `.keyboardCalloutActions` and `.keyboardButtonStyle` view modifiers, by letting you inject a custom value builder that provides you with layout-specific parameters.

You can use `params.standardLayout(for:)` to create a standard layout, then modify it as needed. The standard layout is fully localized for all locales that are included in your license.

The new layout engine is only available in KeyboardKit Pro. KeyboardKit Pro also unlocks a localized layout builder for each supported locale.

**IMPORTANT!** This new keyboard layout modifier currently causes too many calculations, so do not use it in production yet. Only use it to evaluate if you think this is better than the service approach.


## ✨ Keyboard Type Change Handling (BETA)

KeyboardKit 9.8 can redraw the keyboard when the text field changes, to properly handle keyboard type changes. This will help avoiding the stuck state when switching between text fields.

This new feature is disabled by default in the betas, since it can cause strange behaviors and maybe even crashes. You can enable it with `.enableExperimentalKeyboardTypeChangeTracking()`.


## ✨ Keyboard Layout Improvements

Both `KeyboardLayout` and `KeyboardLayout.InputSet` have been extended with many new functions, to make it easier to customize the layout. `KeyboardLayout` also has a new `.standard(for:)` builder.

KeyboardKit Pro extends `KeyboardLayout` with new item mutations, and adds new `.baseLayout(...)`, `.iPadLayout(...)`, `.iPhoneLayout(...)`, and `.standard(for:)` layout builders.

The new layout builders will render more native looking keyboard layouts. The underlying input sets also have fewer license validations to improve the layour rendering performance.


## ✨ Keyboard Action Improvements

`KeyboardAction` has a new `.urlDomain` action for URL domain input. This will render as a `.` and also use custom callout actions with common domains, like `.com`, `.edu`, etc.

To make it easier to distinguish between URL and web search, `KeyboardType` has a new `.webSearch`.


## ✨ Callout Action Improvements

`Callouts.Actions` can now be initialized with both actions and characters, to simplify creating a mix.


## 📦 Renamings

The `KeyboardCallout` namespace has been renamed to `Callouts`, and `KeyboardCalloutContext` has been renamed to `CalloutContext`.


## Conclusion

KeyboardKit 9.8 is a bug release, with many changes to help make KeyboardKit as fast and stable as possible before bumping to KeyboardKit 10.

For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 
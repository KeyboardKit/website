---
title:  KeyboardKit 9.8 Beta
date:   2025-07-23 06:00:00 +0100
tags:   releases callouts layout localization styling

image-show: 0
image: /assets/versions/9_8-beta.jpg
assets: /assets/blog/25/0723/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.8.0-beta.2
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.8.0-beta.2
---

The KeyboardKit 9.8 beta 2 is out! This version adds a brand new layout engine that improves layout rendering performance and makes typing with KeyboardKit better than ever.

![Blog header image]({{page.image}})


## 🗑️ Deprecated Callout & Style Services

With the new view modifier-based callout & style customizations working well, the callout and style services have now been soft deprecated.

Soft deprecations mean that the services are only marked as deprecated in the docs. They WILL be removed in the next major version, so switch to use the view modifiers instead of custom services:

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

The reason for soft deprecations is to avoid compile-time warning, since the services are still in use. KeyboardKit 9.9 will restructure the code to use proper deprecations without warnings.


## ✨ BETA - New layout engine

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

This works just like the `.keyboardCalloutActions` and `.keyboardButtonStyle` view modifiers, by letting you inject a custom value builder that provides you with layour-specific parameters.

You can use `params.standardLayout(for:)` to create a standard layout, then modify it as needed. The standard layout is fully localized for all locales that are included in your license.

KeyboardKit Pro also unlocks localized layout builders like `.swedish(for:)` for all supported locales.

This new layout engine is only available in KeyboardKit Pro. Due to this, the soft deprecated layout services will not be properly deprecated in KeyboardKit 9.9.


## ✨ BETA - Keyboard Type Change Handling

KeyboardKit 9.8 can redraw the keyboard when the text field changes, to properly handle keyboard type changes. This will help avoiding the stuck state when switching between text fields.

This works by having the controller check the text document proxy's `.keyboardType` when the text changes, and redraw the keyboard view if the keyboard type changes.

This new feature is disabled by default in the betas, since it can cause strange behaviors and maybe even crashes. You can enable it with `.enableExperimentalKeyboardTypeChangeTracking()`.


## ✨ Keyboard Layout Improvements

Both `KeyboardLayout` and `KeyboardLayout.InputSet` have been extended with many new functions, to make it easier to customize the layout. `KeyboardLayout` also has a new `.standard(for:)` builder.

The new layout builders will render more native looking keyboard layouts. The underlying input sets also have fewer license validations to improve the layour rendering performance.


## ✨ Keyboard Action Improvements

`KeyboardAction` has a new `.urlDomain` action for URL domain input. This will render as a `.` and also use custom callout actions with common domains, like `.com`, `.edu`, etc.

To make it easier to distinguish between URL and web search, `KeyboardType` has a new `.webSearch`.


## ✨ Callout Action Improvements

`Callouts.Actions` can now be initialized with both actions and characters, to simplify creating a mix.


## 👑 KeyboardKit Pro

KeyboardKit Pro is required to use the new layout features, including the new layout view modifier. 

KeyboardKit Pro extends `KeyboardLayout` with new item mutations, and adds new `.baseLayout(...)`, `.iPadLayout(...)`, `.iPhoneLayout(...)`, and `.standard(for:)` layout builders.

KeyboardKit Pro also has new, localized value builders for all supported locales, like `.swedish(for:)`.


## 🔧 Performance Improvements

KeyboardKit Pro's new layout engine has improved layout performance, which should lead to better typing experience due to less lag and faster calculations.

Although the improved performance of the underlying input sets affects the old layout services, the full improvement will only be activated when using the `.keyboardLayout` view modifier.

This is because the old layout services are used by default, until the `.keyboardLayout` view modifier is applied. You can apply it and return `$0.standardLayout(for:)` to activate these improvements for the standard localized sets, and apply further customizations if needed.


## 📦 Renamings

The `KeyboardCallout` namespace has been renamed to `Callouts`, and `KeyboardCalloutContext` has been renamed to `CalloutContext`.


## Conclusion

KeyboardKit 9.8 is a huge release, with many structural changes to help make KeyboardKit 9 as fast and stable as possible before bumping to KeyboardKit 10 later in H2.

The KeyboardKit 9.8 beta is out NOW, so please make sure to give it a try and let us know if you find things that need to be improved before release.

For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 
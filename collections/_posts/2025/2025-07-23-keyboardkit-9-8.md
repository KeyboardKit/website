---
title:  KeyboardKit 9.8 Beta
date:   2025-07-23 06:00:00 +0100
tags:   releases callouts layout localization styling

image-show: 0
image: /assets/versions/9_8-beta.jpg
assets: /assets/blog/25/0723/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.8.0-beta.1
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.8.0-beta.1

bsky: https://bsky.app/profile/keyboardkit.bsky.social/post/3ltzts76i7c2r
toot: https://techhub.social/@keyboardkit/114859371001025256
---

The KeyboardKit 9.8 beta 1 is out! This version brings a huge set of improvements and changes to the layout engine, to make typing with KeyboardKit better than ever.

![Blog header image]({{page.image}})


## 🗑️ Deprecated Callout & Style Services

With the new, recently added view modifier-based callout & style customizations working well, the corresponding callout and style services have now been deprecated.

This means that they WILL be removed in the next major version, and that you should start using the view modifier-based approach instead:

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

The reason for soft deprecations is to avoid compile-time warning, since the services are still in use.


## ✨ BETA - View modifier layout customizations

This version adds a `.keyboardLayout` view modifier to KeyboardKit Pro, which can be used to apply layout customizations without using a layout service.

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

You can use the `KeyboardLayout.standard(for:)` builder to create a standard layout for any keyboard context and its active locale, then modify this standard layout as needed.

This view modifier and many new layout builders can be tested in KeyboardKit Pro. KeyboardKit Pro also unlocks localized layout builders like `.swedish(for:)` for all supported locales in your license.

This modifier based-approach will make it a lot easier to customize the keyboard layout. As such, the services are soft deprecated.



## ✨ BETA - Document Change Tracking

KeyboardKit 9.8 can redraw the keyboard when the text field changes, to properly handle keyboard type changes. This will help avoiding the stuck state when switching between text fields.

This works by observing the proxy's `.documentIdentifier` property, which changes when the current "document" changes. 

Since this property is brittle and can crash the keyboard, this feature is disabled by default. You can enable the feature by calling the controller's `enableDocumentChangeTracking` function.


## ✨ Keyboard Layout Improvements

Both `KeyboardLayout` and `KeyboardLayout.InputSet` have been extended with many new functions, to make it easier to customize the layout. `KeyboardLayout` also has a new `.standard(for:)` builder.

The new localized layout builders like `.swedish` are improved to render more consistent keyboards. They underlying input sets also have fewer license validations to improve performance.


## ✨ Keyboard Action Improvements

`KeyboardAction` has a new `.urlDomain` action for domain input, which will render as a `.` and also use custom callout actions with common domains.

To make it even easier to distinguish between URL and web search input, `KeyboardType` has a new `.webSearch` keyboard type.


## ✨ Callout Action Improvements

`Callouts.Actions` can now be initialized with both actions and characters, to simplify creating a mix. The standard callout actions now include domain actions for new `.urlDomain` action.


## 👑 KeyboardKit Pro

KeyboardKit Pro is required to use the new layout feature changes, including the new view modifier. 

KeyboardKit extends `KeyboardLayout` with new item mutation functions, and new `.baseLayout(...)`, `.iPadLayout(...)`, `.iPhoneLayout(...)`, and `.standard(for:)` layout builders.

KeyboardKit Pro also has new, localized value builders for all supported locales, like `.swedish(for:)`.


## 🔧 Performance Adjustments

KeyboardKit Pro improves the performance of creating localized input sets. You should also notice further performance improvements by switching to the new view modifier-based layout.


## 📦 Renamings

The `KeyboardCallout` namespace has been renamed to `Callouts`, and `KeyboardCalloutContext` has been renamed to `CalloutContext`.


## Conclusion

KeyboardKit 9.8 is a huge release, with many structural changes to help make KeyboardKit 9 as fast and stable as possible before bumping to KeyboardKit 10 later in H2.

The KeyboardKit 9.8 beta is out NOW, so please make sure to give it a try and let us know if you find things that need to be improved before release.

For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 
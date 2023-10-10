---
id: layout
title: Layout
layout: page
permalink: /features/layout

hero: /assets/heros/github.png
description: KeyboardKit lets you define dynamic keyboard layouts.
---


A flexible keyboard layout is an important part of a software keyboard, where many factors like device, screen orientation, locale, etc. can all affect the layout.

In KeyboardKit, ``InputSet``s and ``KeyboardLayout``s are important concepts of flexible keyboard layouts, where an input set specifies the input keys and the keyboard layout specifies the full set of keys.

KeyboardKit will bind a ``StandardKeyboardLayoutProvider`` to ``.services`` when the keyboard is loaded. It has a QWERTY layout by default, but you can inject localized providers into it or modify or replace it.

[KeyboardKit Pro][Pro] unlocks and registers localized providers for all keyboard locales. It also lets you inherit `ProKeyboardLayoutProvider` for more features. Information about Pro features can be found at the end of this article.



## Input Sets

An ``InputSet`` set specifies the input keys of a keyboard.

KeyboardKit has some input sets, like ``.qwerty``, ``.standardNumeric(...)`` and ``.standardSymbolic(...)``. You can also create your own custom input sets.



## Keyboard layouts

A ``KeyboardLayout`` specifies the full set of keys of a keyboard. 

Keyboard layouts can vary greatly for different device types, screen orientations, locales, etc. For instance, iOS keyboards often have 3 input rows, where the input keys are surrounded by actions on either side, as well as a bottom row with a space key and action buttons. 

This is however not true for all locales. For instance, Armenian has 4 input rows, Greek removes many side-buttons, Arabic removes the shift key, etc. These differences can be significat, so the layout engine has to be flexible. 



## Hot to custome the keyboard layout

In KeyboardKit, a ``KeyboardLayoutProvider`` can be used to create a dynamic layout based on many different factors, such as the current device type, orientation, locale, etc. 

You can customize keyboard layouts by adding localized providers to ``StandardKeyboardLayoutProvider``, or by replacing ``.keyboardLayoutProvider`` with a custom ``KeyboardLayoutProvider``.



## How to create a custom callout action provider

You can create a custom ``KeyboardLayoutProvider`` by inheriting ``StandardKeyboardLayoutProvider`` and customize what want, or implement the ``KeyboardLayoutProvider`` protocol from scratch.

There are also other base classes, such as ``BaseKeyboardLayoutProvider``, ``InputSetBasedKeyboardLayoutProvider``, ``iPadKeyboardLayoutProvider`` and ``iPhoneKeyboardLayoutProvider``. 

For instance, here's a custom provider that inherits ``StandardKeyboardLayoutProvider`` and injects a tab key into the layout:

```swift
class CustomKeyboardLayoutProvider: StandardKeyboardLayoutProvider {
    
    override func keyboardLayout(for context: KeyboardContext) -> KeyboardLayout {
        let layout = super.keyboardLayout(for: context)
        var rows = layout.itemRows
        var row = layout.itemRows[0]
        let next = row[0]
        let size = KeyboardLayout.ItemSize(width: .available, height: next.size.height)
        let tab = KeyboardLayout.Item(action: .tab, size: size, insets: next.insets)
        row.insert(tab, at: 0)
        rows[0] = row
        layout.itemRows = rows
        return layout
    }
}
```

To use this provider instead of the standard one, just set the ``.services`` provider to this custom one:

```swift
class KeyboardViewController: KeyboardInputViewController {

    override func viewDidLoad() {
services.keyboardLayoutProvider = CustomKeyboardLayoutProvider()
        super.viewDidLoad()
    }
}
```

This will make KeyboardKit use your custom implementation instead of the standard one.



## 👑 Pro features

igehwiughewhg guawiw
gewa
g
ewg
awe
e

[KeyboardKit Pro][Pro] unlocks additional ``InputSet``s, as well as localized ``InputSet``s and ``KeyboardLayoutProvider``s for all localess in your license when you register a valid license key, then injects all providers into the ``StandardCalloutActionProvider``.

You can access all locale-specific input sets that your license unlocks like this:

```swift
let swedish = try InputSet.swedish
let numeric = try InputSet.spanishNumeric
let symbolic = try InputSet.germanSymbolic
```

You can access all providers that your license unlocks like this:

```swift
let providers = License.current.localizedKeyboardLayoutProviders
```

and locale-specific providers like this:

```swift
let provider = try ProKeyboardLayoutProvider.Swedish()
```

You can inherit `ProKeyboardLayoutProvider`, or any of the available localized versions, to customize the base behavior:

```swift
class CustomKeyboardLayoutProvider: ProKeyboardLayoutProvider.Swedish {

    override func keyboardLayout(for context: KeyboardContext) -> KeyboardLayout {
        var layout = keyboardLayoutProvider(for: context)
            .keyboardLayout(for: context)
        layout.tryInsertFlag(for: context)
        return layout
    }
}

private extension KeyboardLayout {

    func tryInsertFlag() {
        guard let button = tryCreateBottomRowItem(for:  .character("🇸🇪")) else { return }
        itemRows.insert(button, after: .space, atRow: bottomRowIndex)
    }
}
```

To use a custom provider with KeyboardKit Pro, make sure to register it *after* registering your license key, otherwise it will be overwritten by the license registration process.

For instance, this is how you would register the custom provider that we created earlier, using the localized providers from your license:

```swift
open func setupKeyboardKit() {
    try? setupPro(withLicenseKey: key, view: keyboardView) { license in
        self.setupCustomServices(with: license)
    }
}

func setupCustomServices(with license: License) {
    services.keyboardLayoutProvider = CustomKeyboardLayoutProvider()
}
```

You can add a custom initializer to your custom provider if you need additional setup, then just call `super.init` to setup the rest.


[Pro]: /pro   

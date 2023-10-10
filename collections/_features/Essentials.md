---
title: Essentials
hero: /assets/heros/github.png
description: KeyboardKit comes with a bunch of essential features and types.
---

As you may have noticed, Apple provides a very limited API to custom keyboard extensions. You have to implement much functionality from scratch, including the keyboard view itself.

KeyboardKit provides essential types and functionality that simplify building custom keyboards. It also extends the text document proxy to make it more capable, and lets you use SwiftUI instead of UIKit.

KeyboardKit also has a `SystemKeyboard` component that can be used to create keyboards that mimic the native iOS keyboard. It can be customized and styled to great extent.

[KeyboardKit Pro][Pro] adds an `EmojiKeyboard` to the system keyboard and unlocks many system keyboard preview views. Information about Pro features can be found at the end of this article.



## Keyboard namespace

KeyboardKit has a `Keyboard` namespace with essential types, like `Keyboard/AutocapitalizationType`, `Keyboard/Case`, `Keyboard/ReturnKeyType`, and much more.

The namespace doesn't contain protocols, open classes or types that are meant to be top-level ones. It's meant to contain types used by top-level types, to make the library easier to overview.



## Keyboard input view controller

`KeyboardInputViewController` is the most essential type in the library. Make your `KeyboardController` inherit this class instead of `UIInputViewController` to get access to a bunch of additional capabilities.



## Keyboard context

KeyboardKit has an observable `KeyboardContext` that provides information about the keyboard, a reference to the current `.textDocumentProxy`, the current `.keyboardType`, etc.

You can use the context to affect the keyboard. For instance, setting the context `.locale` makes a `SystemKeyboard` render in that locale, provided that it's supported by the keyboard.

KeyboardKit automatically creates an instance of this class and binds it to ``.state``, then syncs it with the controller whenever needed.



## Keyboard behavior

KeyboardKit has a ``KeyboardBehavior`` protocol that can be used to determine the keyboard behavior. It's used by e.g. the ``StandardKeyboardActionHandler`` to make some decisions.

KeyboardKit automatically creates an instance of this class and binds it to ``.services``. You can modify or replace it at any time.



## System keyboard

KeyboardKit has a ``SystemKeyboard`` that can be used to create alphabetic, numeric and symbolic keyboards that mimic the native iOS keyboard. It can be customized and styled to great extent, and automatically adjusts itself to the observable state you pass in. 

KeyboardKit will by default use a standard ``SystemKeyboard``. If you just want to use this standard view, you don't have to do anything.

If you want to customize the standard system keyboard or replace it with a custom view, just override `.viewWillSetupKeyboard()` and call any of the `setup(...)` functions with the view you want to use.

```swift
class KeyboardController: KeyboardInputViewController {

    override func viewWillSetupKeyboard() {
        super.viewWillSetupKeyboard()
        setup { controller in
            SystemKeyboard(
                state: controller.state,
                services: controller.services,
                buttonContent: { $0.view },
                buttonView: { $0.view },
                emojiKeyboard: { $0.view },
                toolbar: { _ in MyCustomToolbar() }
            )
        }
    }
}
```

The setup view builder provides an **unowned** controller reference to help avoiding memory leaks. Use it to access its state and services, and avoid passing it around. If you do, make sure to keep any additional references to it unowned.


### How to customize a system keyboard

A ``SystemKeyboard`` can be customized and styled to great extent. For instance, you can pass in custom keyboard layouts to it, and provide it with custom services and state to modify its behavior. 

The `buttonContent` and `buttonView` parameters can be used to customize the content or the entire view of any button.

The `emojiKeyboard` parameter defines the view that will be used for the ``.emojis`` keyboard type. An `EmptyView` is used by default, but KeyboardKit Pro unlocks and uses an `EmojiKeyboard` by default.

The `toolbar` parameter defines the view to add above the keyboard. An ``AutocompleteToolbar`` will be used by default.

To use the standard views, just return `{ $0.view }`, or `{ params in params.view }` if you prefer more expressive code:

```swift
SystemKeyboard(
    controller: controller,
    buttonContent: { $0.view },
    buttonView: { $0.view },
    emojiKeyboard: { $0.view },
    toolbar: { params in params.view }
)
```

The various view builders provide more parameters than just the default view. For instance, the button content and button view builders provide you with the full layout item as well.

To customize or replace the standard content and item views for any layout item, just provide custom view builders like this:

```swift
SystemKeyboard(
    controller: controller,
    buttonContent: { params in
        switch params.item.action {
        case .backspace: Image(systemName: "trash")
        default: params.view
        }
    },
    buttonView: { params in
        switch params.item.action {
        case .space: Text("This is true, empty space")
            .opacity(0)
            .frame(maxWidth: .infinity)
        default: params.view
        }
    },
    emojiKeyboard: { $0.view },
    toolbar: { $0.view }
)
```

In the code above, the backspace button content is replaced with a trashbin icon and the spacebar is replaced by transparent text.

> Important: When customizing the toolbar, keep in mind that it's a good idea to have around 50 points padding above the keyboard, since input and action callouts may otherwise be cut off. This padding must increase if you style the callouts to be bigger. 



## 👑 Pro features

KeyboardKit Pro unlocks powerful preview and emoji capabilities.


### Emojis

KeyboardKit Pro will make `SystemKeyboard` use an `EmojisKeyboard` view as emoji keyboard.

This means that by just registering a valid license key, your keyboard will automatically show an emoji keyboard when `.keyboardType` changes to `.emojis`.

You can still provide a custom emoji keyboard if you want to use a custom one. If not, just remove the **emojiKeyboard** parameter when upgrading to KeyboardKit Pro.


### Preview

KeyboardKit Pro unlocks powerful tools to preview system keyboards and themes:

```swift
SystemKeyboardPreview(...)              // A live system keyboard preview.
SystemKeyboardPreviewHeader(...)        // A live system keyboard preview header.
SystemKeyboardThemePreview(...)         // A live theme preview.
SystemKeyboardThemePreviewHeader(...)   // A live theme preview header.
```

Since these views render system keyboards with full interation, they are quite performance demanding. 

To preview many styles or themes at once, you can use these more lightweight previews:

```swift
SystemKeyboardButtonPreview(...)        // A system button preview.
SystemKeyboardButtonThemePreview(...)   // A system button preview for a theme.
```

These previews only render lightweight buttons.


[Pro]: /pro
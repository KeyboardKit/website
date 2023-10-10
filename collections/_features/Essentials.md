---
title: Essentials
---

As you may have noticed, Apple provides a very limited API to custom keyboard extensions. You have to implement much functionality from scratch, including the keyboard view itself.

KeyboardKit provides essential types and functionality that simplify building custom keyboards. It also extends the text document proxy to make it more capable, and lets you use SwiftUI instead of UIKit.

KeyboardKit also has a `SystemKeyboard` component that can be used to create keyboards that mimic the native iOS keyboard. It can be customized and styled to great extent.

{% include features/pro-link.html title=page.title %}



## Keyboard input view controller

`KeyboardInputViewController` is the most essential type in the library. Make your `KeyboardController` inherit this class instead of `UIInputViewController` to get access to a bunch of additional capabilities.



## Keyboard namespace

KeyboardKit has a `Keyboard` namespace with essential types, like `AutocapitalizationType`, `Case`, `ReturnKeyType`, and much more.



## Keyboard context

KeyboardKit has an observable `KeyboardContext` that provides information about the keyboard, and a reference to the current proxy, keyboard type, etc.



## Keyboard behavior

KeyboardKit has a ``KeyboardBehavior`` protocol that can be used to determine the keyboard behavior. It's used by the system to make some decisions.



## System keyboard

KeyboardKit has a ``SystemKeyboard`` view that can be used to create alphabetic, numeric and symbolic keyboards that mimic the native iOS keyboard. It can be customized and styled to great extent.

KeyboardKit will by default use a standard ``SystemKeyboard``. If you just want to use this standard view, you don't have to do anything. It's very easy to customize the view or replace it with a custom view.
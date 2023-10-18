---
title: Callouts
---

Callouts are an important part of the typing experience, where input callouts show the currently pressed character and action callouts present secondary actions for a key.

In KeyboardKit, a ``CalloutActionProvider`` can provide secondary actions to a ``CalloutContext``, which in turn will update views like the ``Callouts.ActionCallout``.

KeyboardKit will bind a ``StandardCalloutActionProvider`` instance to the controller ``services`` when the keyboard is loaded. You can modify or replace this provider at any time.

[KeyboardKit Pro][Pro] unlocks and registers localized action providers. Information about Pro features can be found at the end of this article.



## Callout namespace

KeyboardKit has a ``Callouts`` namespace with callout-related types. For instance, ``InputCallout`` shows the currently pressed key while ``ActionCallout`` shows secondary actions when long pressing a key. 

These callouts are automatically used if you use a ``SystemKeyboard``.



## Callout context

KeyboardKit has an observable ``CalloutContext`` class that provides state for input and action callouts, such as the pressed key or the currently presented secondary actions.



## How to show input and action callouts

You can apply callout-specific view extensions in KeyboardKit, to make any view act as the container of input and action callouts. For instance, this will apply both an input and an action callout:

```swift
MyKeyboard()
    .keyboardCalloutContainer(...)
```

The ``SystemKeyboard`` and ``KeyboardButton/Button`` will automatically apply this extension and update the callout contexts as you interact with the keyboard.



## How to customize callout actions

In KeyboardKit, a ``CalloutActionProvider`` can be used to provide dynamic callout actions.

You can customize the actions by adding localized providers to the ``StandardCalloutActionProvider``, or by replacing the controller ``calloutActionProvider`` with a custom ``CalloutActionProvider``.



## How to create a custom callout action provider

You can create a custom ``CalloutActionProvider`` by inheriting ``StandardCalloutActionProvider`` and customize what you want, or implement the ``CalloutActionProvider`` protocol from scratch.



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks a localized ``CalloutActionProvider`` for each locale in your license and injects them into the ``StandardCalloutActionProvider``.

You can access all providers that your license unlocks like this:

```swift
let providers = License.current.localizedCalloutActionProviders
```

and locale-specific providers like this:

```swift
let provider = try ProCalloutActionProvider.Swedish()
```

To use a custom provider with KeyboardKit Pro, make sure to register it *after* registering your license key, otherwise it will be overwritten by the license registration process.



[Pro]: /pro

---
title: Callouts
---

Callouts are an important part of the typing experience, where input callouts highlight the currently pressed key and action callouts present secondary keyboard actions.

In KeyboardKit, a ``CalloutActionProvider`` can provide secondary actions to an ``CalloutContext``, which in turn will update views like ``ActionCallout``.

{% include features/pro-link.html title=page.title %}



## Callout namespace

KeyboardKit has a ``Callouts`` namespace with callout-related types. For instance, an ``InputCallout`` shows the currently pressed key while an ``ActionCallout`` shows secondary actions.



## Callout context

KeyboardKit has an observable ``CalloutContext`` that provides state for input and action callouts, such as the pressed key or the currently presented secondary actions.



## How to show input and action callouts

You can apply `.keyboardCalloutContainer(...)` to make any view act as the container of input and action callouts. ``SystemKeyboard`` applies this extension and updates the contexts as the keyboard is used.



## How to customize callout actions

In KeyboardKit, a ``CalloutActionProvider`` can be used to provide callout actions. You can customize the actions by adding localized providers to the ``StandardCalloutActionProvider``, or use a custom provider.



## How to create a custom callout action provider

You can create a custom ``CalloutActionProvider`` by inheriting ``StandardCalloutActionProvider`` and customize what you want to change, or implement the ``CalloutActionProvider`` protocol from scratch.
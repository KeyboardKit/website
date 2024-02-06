---
title: Callouts
---

Callouts are an important part of the typing experience, where input callouts highlight the currently pressed character and action callouts show secondary actions.

In KeyboardKit, a ``CalloutActionProvider`` can provide secondary actions to a ``CalloutContext``, which in turn will update views like the ``Callouts.ActionCallout``.

[KeyboardKit Pro][Pro] unlocks and registers localized action providers for [all supported locales](/locales).


## Callout Functionality

KeyboardKit has a ``Callouts`` namespace with callout-related types, like state, services and views. 

The ``CalloutContext`` class provides observable state, such as which character and actions to show.

The ``InputCallout`` can be used show the currently pressed key:

![InputCallout]({{page.assets}}inputcallout-350.jpg)

while the ``ActionCallout`` can be used to show secondary actions when the user long presses a key:

![ActionCallout]({{page.assets}}actioncallout-350.jpg)


## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks a localized ``CalloutActionProvider`` for every locale in your license and injects them into the ``StandardCalloutActionProvider``.



[Pro]: /pro

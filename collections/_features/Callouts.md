---
title: Callouts
---

Callouts are an important part of the typing experience, where input callouts highlight the currently pressed character and action callouts show secondary actions.

[KeyboardKit Pro][Pro] unlocks [localized callout actions](#pro) for all locales, with no additional code needed.


## Namespace

KeyboardKit has a ``Callouts`` namespace that contains callout-related types and views. For instance, an ``InputCallout`` shows the pressed character while an ``ActionCallout`` shows callout actions.


## Context

KeyboardKit has an observable ``CalloutContext`` class that provides observable callout state, such as the currently pressed key or the callout actions to present, as well as auto-persisted settings. 


##  Services

In KeyboardKit, a ``CalloutService`` can be used to provide secondary actions for any key, which are then presented when a key with secondary actions is long pressed.


## Views

The ``Callouts`` namespace has callout views, that can be used to mimic the native iOS callouts:

<div class="grid col2">
    <div><img alt="An input callout" src="{{page.assets}}inputcallout.jpg" /></div>
    <div><img alt="An action callour" src="{{page.assets}}actioncallout.jpg" /></div>
</div>

The ``KeyboardView`` automatically registers everything needed to automatically show these callouts.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks localized callout actions for all locales, to let `KeyboardView` show localized callout actions without having to write any additional code.



[Pro]: /pro

---
title: Callouts
hero-emoji: 🗯
---

Callouts are an important part of the typing experience, where input callouts highlight the currently pressed input key and action callouts can show secondary actions for any character.

<div class="grid col2">
    <div><img alt="An input callout" class="plain sticker" src="{{page.assets}}inputcallout.jpg" /></div>
    <div><img alt="An action callout" class="plain sticker" src="{{page.assets}}actioncallout.jpg" /></div>
</div>

KeyboardKit has a ``KeyboardCallout`` namespace with callout-related types and views, an observable ``KeyboardCalloutContext``, and a `KeyboardCallout.Settings`  with persisted settings.

In KeyboardKit, a ``CalloutService`` can be used to provide secondary actions for any key, which are then presented when a key with secondary actions is long pressed.


## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks localized callout actions for all [{{site.locales.count}} supported languages](/locales), without having to write any additional code.


[Pro]: /pro

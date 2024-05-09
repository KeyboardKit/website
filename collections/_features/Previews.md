---
title: Previews
---

SwiftUI previews are a great way to work on your design in Xcode, without having to launch an app. Just update your views and models, and the preview will update.

KeyboardKit has preview-specific services and state, that can be used in your previews. This makes it easy to set up and preview your keyboard-specific views directly in Xcode.

[KeyboardKit Pro][Pro] unlocks powerful [system keyboard and theme previews](#pro), that can be used both in SwiftUI previews, as well as in the app.



## Core Features

KeyboardKit has a ``KeyboardPreviews`` namespace that contains preview-related services and types.

KeyboardKit also defines a `.preview` implementation for all services, like `KeyboardContext.preview`. This simplifies creating SwiftUI previews for views that require KeyboardKit.



<a name="pro">
## 👑 Pro Features

KeyboardKit Pro unlocks powerful system keyboard previews.

For instance, a `SystemKeyboardPreview` can be used to preview a ``SystemKeyboard`` in different ways.

<div class="grid col2">
    <div><img src="{{page.assets}}systemkeyboardpreview-350.jpg" /></div>
    <div><img src="{{page.assets}}systemkeyboardpreview-theme-350.jpg" /></div>
</div>

There is also a lightweight `SystemKeyboardButtonPreview` that can preview many themes at once.

![System Keyboard Button Preview]({{page.assets}}systemkeyboardbuttonpreview-350.jpg)


[Pro]: /pro

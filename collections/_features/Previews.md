---
title: Previews
---

SwiftUI previews are a great way to work on your design in Xcode, without having to launch an app. Just update your views and models, and the preview will update.

KeyboardKit has preview-specific services and state, that can be used in your previews. This makes it easy to set up and preview your keyboard-specific views directly in Xcode.

[KeyboardKit Pro][Pro] unlocks powerful [keyboard and theme previews](#pro) that can be used both within SwiftUI previews, as well as in the main app target.



## Preview-specific state and services 

KeyboardKit has preview values for all services & state. For instance, ``KeyboardContext`` has a ``preview`` context, the ``KeyboardInputViewController`` has a ``preview`` controller, etc. 

```swift
#Preview {

    CustomView(actionHandler: .preview)
        .environmentObject(KeyboardContext.preview)
}
```

These types make it easy to use KeyboardKit types in SwiftUI previews. For instance, this is how you can pass in state and services into a custom view:



<a name="pro">
## 👑 KeyboardKit Pro

KeyboardKit Pro unlocks powerful system keyboard previews.

For instance, a `KeyboardViewPreview` can be used to preview a ``KeyboardView`` in different ways.

<div class="grid col2">
    <div><img src="{{page.assets}}keyboardviewpreview.jpg" /></div>
    <div><img src="{{page.assets}}keyboardviewpreview-theme.jpg" /></div>
</div>

There is also a lightweight `Keyboard.ButtonPreview` that lets you preview many themes at once.

![System Keyboard Button Preview]({{page.assets}}keyboardbuttonpreview.jpg)


[Pro]: /pro

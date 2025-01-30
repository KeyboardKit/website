---
title: Previews
hero-emoji: 👁
---

SwiftUI previews are a great way to work on your design in Xcode without having to launch the app. Just update your views and models, and the preview will update.

KeyboardKit has preview-specific services and state, that can be used in your previews. This makes it easy to set up and preview your keyboard-specific views directly in Xcode.

KeyboardKit has preview values for all services & state. For instance, ``KeyboardContext`` has a ``preview`` context, the ``KeyboardInputViewController`` has a ``preview`` controller, etc. 

```swift
#Preview {

    CustomView(actionHandler: .preview)
        .environmentObject(KeyboardContext.preview)
}
```

These types make it easy to use KeyboardKit in SwiftUI previews and pass around state & services.



<a name="pro">
## 👑 KeyboardKit Pro

KeyboardKit Pro unlocks a `KeyboardViewPreview` that makes it easy to preview the ``KeyboardView`` for various locales, keyboard types, devices, etc.

<div class="grid col2">
    <div><img src="{{page.assets}}keyboardview-english.jpg" /></div>
    <div><img src="{{page.assets}}keyboardviewpreview-theme.jpg" /></div>
</div>

Since the preview renders a full keyboard view, there's also a lightweight `Keyboard.ButtonPreview` to let you preview many themes at once.

![System Keyboard Button Preview]({{page.assets}}keyboardbuttonpreview.jpg)


[Pro]: /pro

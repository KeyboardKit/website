---
title: Previews
---

SwiftUI previews are a great way to work on your project in Xcode without having to launch an app all the time. Just update your views and models, and the preview will update.

KeyboardKit has preview-specific services and state, that can be used in your previews. This makes it easy to set up and preview your keyboard-specific views directly in Xcode.

[KeyboardKit Pro][Pro] unlocks powerful system keyboard and theme previews. Information about Pro features can be found at the end of this article.



## KeyboardPreviews namespace

KeyboardKit has a ``KeyboardPreviews`` namespace that contains preview-related services and state. This name doesn't match the group name, since "Previews" conflict with SwiftUI.

For instance, ``KeyboardContext.preview`` and ``KeyboardInputViewController.preview`` can be used in SwiftUI previews, which simplifies creating previews for views that require KeyboardKit.



## 👑 Pro features

KeyboardKit Pro unlocks powerful system keyboard previews.

For instance, a `SystemKeyboardPreview` can be used to preview a ``SystemKeyboard`` in different ways.

![System Keyboard Preview - Turkish]({{page.assets}}systemkeyboardpreview-350.jpg)

You can use the **theme** parameter to easily preview any Pro unlocked or custom ``KeyboardTheme``.

![System Keyboard Preview - Theme]({{page.assets}}systemkeyboardpreview-theme-350.jpg)

The more lightweight `SystemKeyboardButtonPreview` can preview many styles or themes at once.

![System Keyboard Button Preview]({{page.assets}}systemkeyboardbuttonpreview-350.jpg)


[Pro]: /pro

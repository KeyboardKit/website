---
title: Previews
---

Interactive SwiftUI previews are a great way to work on your project in Xcode without having to launch an app all the time. Just update your views and models, and the live preview will update.

KeyboardKit has preview-configured service and state instances, that can be used in your interactive previews. This makes it easy to preview your keyboard-specific functionality directly in Xcode.

[KeyboardKit Pro][Pro] unlocks powerful system keyboard and theme previews. You can read more about it further down.



## KeyboardPreviews namespace

KeyboardKit has a ``KeyboardPreviews`` namespace that contains preview-related services and state. In case you wonder, the name doesn't match the group name, since "Previews" conflict with SwiftUI.

For instance, ``KeyboardContext.preview`` and ``KeyboardInputViewController.preview`` can be used in SwiftUI previews, which simplifies creating previews for views that require KeyboardKit components.



## 👑 Pro features

KeyboardKit Pro unlocks powerful tools to preview system keyboards and keyboard themes:

```swift
SystemKeyboardPreview(...)              // A live system keyboard preview.
SystemKeyboardPreviewHeader(...)        // A live system keyboard preview header.
SystemKeyboardThemePreview(...)         // A live theme preview.
SystemKeyboardThemePreviewHeader(...)   // A live theme preview header.
```

Since the views render system keyboards with full interation, they are quite performance demanding. 

To preview many styles or themes at once, you can use these more lightweight previews:

```swift
SystemKeyboardButtonPreview(...)        // A system button preview.
SystemKeyboardButtonThemePreview(...)   // A system button preview for a theme.
```

These previews are not in the `KeyboardPreviews` namespace, since they are meant to be used in apps as well. They are however mentioned here, since it may be the most obvious place to look.


[Pro]: /pro

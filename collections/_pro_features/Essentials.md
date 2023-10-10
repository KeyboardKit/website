---
title: Essentials
---

[KeyboardKit Pro][Pro] unlocks additional essential tools, such as adding an `EmojiKeyboard` to the system keyboard and unlocking many system keyboard preview views.


### Emoji Keyboard

KeyboardKit Pro will use a `SystemKeyboard` with an `EmojisKeyboard` as the standard keyboard view. 

This means that by just registering a valid license key, your keyboard will automatically show an emoji keyboard when the context keyboard type changes to `.emojis`.

You can still provide a custom emoji keyboard if you want to use a custom one. If not, just remove the **emojiKeyboard** parameter when upgrading to KeyboardKit Pro.


### Preview

KeyboardKit Pro unlocks powerful tools to preview system keyboards and themes:

```swift
SystemKeyboardPreview(...)              // A live system keyboard preview.
SystemKeyboardPreviewHeader(...)        // A live system keyboard preview header.
SystemKeyboardThemePreview(...)         // A live theme preview.
SystemKeyboardThemePreviewHeader(...)   // A live theme preview header.
```

Since these views render system keyboards with full interation, they are quite performance demanding. 

To preview many styles or themes at once, you can use these more lightweight previews:

```swift
SystemKeyboardButtonPreview(...)        // A system button preview.
SystemKeyboardButtonThemePreview(...)   // A system button preview for a theme.
```

These previews only render lightweight buttons.


[Pro]: /pro
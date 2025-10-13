---
title: Essentials
description: Essential keyboard features
hero-emoji: 🌱

keyboard-view: /features/essential-keyboardview
---

KeyboardKit extends Apple's very imited native keyboard APIs with a lot more features than what is otherwise available.

KeyboardKit lets you create a fully customizable [custom keyboard](/terminology) with a few lines of code, and will automatically set up things like App Group settings sync, locales, dictation, etc.

## Core Features

KeyboardKit has essential features & views, and a [KeyboardView]({{page.keyboardview}}) that mimics the native keyboard.

<div class="grid col2">
    <span><img src="{{page.assets}}keyboardview-english-callout.jpg" /></span>
    <span><img src="{{page.assets}}keyboardview-swedish-theme.jpg" /></span>
</div>

KeyboardKit has a `KeyboardInputViewController` that extends the native input controller with more features, a `KeyboardApp` that can configure your app, and a `KeyboardAppView` to set up the main app.

KeyboardKit has a separate namespace for each feature, like `autocomplete`, `emojis`, `feedback`, etc. Each namespace has its own observable state, settings, services, etc.

## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks even more essential features, makes the [KeyboardView]({{page.keyboardview}}) support all [{{site.locales.count}} supported locales](/locales), etc.

<div class="grid col2">
    <span><img src="{{page.assets}}keyboard-settingsscreen.jpg" /></span>
    <span><img src="{{page.assets}}keyboard-localesettingsscreen.jpg" /></span>
</div>

KeyboardKit also provides [additional app utilities](/features/app), that lets you set up a full-blown main app with keyboard status handling, settings screens, etc. Be up and running in minutes, with very little code.

[Pro]: /pro

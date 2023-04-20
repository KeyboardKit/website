---
id: dictation
title: Dictation
layout: page
permalink: /dictation

hero: /assets/heros/dictation.png

description: KeyboardKit lets you perform dictation directly from your keyboard.
---

KeyboardKit has tools that let you dictate text in the main app, and start dictation from a keyboard, that performs the dictation in the app then handles the result in the keyboard.


## New dictation namespace

The new `Dictation` namespace has many new types that can be used to perform dictation. For instance, a `DictationService` can perform dictation where microphone access is available, like an app, while a `KeyboardDictationService` can perform dictation from a keyboard extension, where microphone access is not available.

KeyboardKit uses the controller `dictationService` as the standard keyboard dictation service, which in turn uses the controller `dictationContext` for shared data and observable state.

KeyboardKit doesn’t have any standard dictations services as it has for most other services, but like with autocomplete, you can unlock standard dictation services with [KeyboardKit Pro](/pro) and make your custom keyboard compatible with dictation with very little work required from you.


## How to perform basic dictation

You can use a `DictationService` to perform dictation where microphone access is available, such as in an app.

Before you can perform dictation, you must add the required permissions to your app config file, otherwise the app will crash. You can then start dictating with `startDictation(with:)` and stop with `stopDictation()`. Since dictation may stop at any time, for instance by a period of silence, services must describe how to access the result when the operation completes.

A dictation service should call `requestDictationAuthorization()` to ask users for permission before starting a dictation operation. You can call this function manually as well, to not interrupt the first dictation operation with a couple of alerts.


## How to perform keyboard dictation

You can use a `KeyboardDictationService` to perform dictation in a keyboard extension, where microphone access is *not* available.

A keyboard dictation operation should open the app and perform dictation, write the dictated text to shared storage, then return to the keyboard extension and let it use the dictated result. This can be tricky to set up, but KeyboardKit Pro lets you do it in a few simple steps.

Since keyboard dictation requires app groups, deep links etc. the demo app currently doesn't demo this feature. The KeyboardKit app will however be rebuilt and let you try out the feature from there.

For more information about how to perform dictation, please see the [online documentation]({{site.documentation_url}}dictation).
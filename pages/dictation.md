---
id: dictation
title: Dictation
layout: page
permalink: /dictation

hero: /assets/heros/dictation.png

description: KeyboardKit lets you perform dictation directly from your keyboard.
---

KeyboardKit has tools that let you dictate text in the main app, as well as start dictation from a keyboard extension, performs it in the app and handle the result in the keyboard.

KeyboardKit doesn’t include any dictations services, as it does for most other services. You can however [purchase a KeyboardKit Pro license](/pro) to support dictation with just a little work.


## The dictation namespace

The `Dictation` namespace has many types that can be used to implement dictation. For instance, a `DictationService` can perform dictation where microphone access is available, like in an app, while a `KeyboardDictationService` can perform dictation from a keyboard extension, where microphone access is not available.

KeyboardKit will use the controller's `dictationService` and `dictationContext`, which means that you can also call the service programmatically and use the context for shared data and observable state.


## How to perform in-app dictation

You can use a `DictationService` to perform dictation where microphone access is available, such as in an app. This can be used in all apps, not only in keyboard-specific ones.

For dictation to work, you must first add required permissions to your app config file, otherwise the app will crash. You can then call `startDictation(with:)` to start dictating, and `stopDictation()` to stop. Since dictation can be stopped at any time, for instance by a period of silence, your service must describe how to access the dictation result when the operation completes.

A dictation service should call `requestDictationAuthorization()` to ask the user for permission before it starts a dictation operation. You can call this function manually as well.


## How to perform keyboard dictation

You can use a `KeyboardDictationService` to perform dictation in a keyboard extension, where microphone access is *not* available.

Keyboard dictation should open the app and perform dictation, write the text to shared storage, then return to the keyboard and use the result. [KeyboardKit Pro](/pro) lets you achive this with very little code.

For more information about how to dictation, please see the [online documentation]({{site.documentation_url}}dictation).


## Try it out

Since keyboard dictation requires app groups, deep links etc. the demo app currently doesn't have this functionality. You can however [download the KeyboardKit app from the App Store]({{site.appstore_url}}) and try it there.
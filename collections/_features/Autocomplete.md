---
title: Autocomplete
description: Autocomplete and autocorrect text
hero-emoji: 💡
---

Autocomplete is an important part of the typing experience, where word suggestions can be shown as the user types, and autocorrections can automatically correct mistyped words.

KeyboardKit has an ``Autocomplete`` namespace that contains autocomplete-related types and views, an observable context, auto-persisted settings, an autocomplete service model, etc.

<img width="550" alt="An autocomplete toolbar" src="{{page.assets}}autocomplete-toolbar.jpg" />

You must use KeyboardKit Pro to unlock an `AutocompleteService` that can autocomplete the typed text and perform predictions, or implement a custom service from scratch.


## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks local autocomplete for many of the [{{site.locales.count}} supported languages](/locales), as well as a remote autocomplete service (Gold) that can integrate with any remote API.

The `StandardAutocompleteService` that is unlocked by KeyboardKit Pro will autocomplete typed text, and perform various predictions, like next character prediction.


### Next Character Prediction

KeyboardKit Pro will use autocomplete results to perform next character prediction to predict which keys that are more likely to be pressed next.

Next-character prediction is also used for "Predictive Typing", where the key tap area is increased for more probable keys. You can also integrate with 3rd party services for more powerful features.


### Next Word Prediction

KeyboardKit Pro unlocks ways to use 3rd party services to perform next word prediction. You can enable OpenAI and Claude integrations with a single line of code.


[Pro]: /pro

---
title: Autocomplete
hero-emoji: 💡
---

Autocomplete is an important part of the typing experience, where word suggestions can be shown as the user types, and where autocorrections can automatically correct the typed text.

<img width="650" alt="An autocomplete toolbar" src="{{page.assets}}autocompletetoolbar.jpg" />

KeyboardKit has an ``Autocomplete`` namespace that contains autocomplete-related types and views, an observable ``AutocompleteContext``, and an `Autocomplete.Settings`  with persisted settings.

In KeyboardKit, an ``AutocompleteService`` can provide suggestions when the user types or the cursor moves. Unlike many other services, there is no open-source autocomplete service.


## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks local autocomplete for many of the [{{site.locales.count}} supported languages](/locales), as well as a remote autocomplete service (Gold) that can integrate with any remote Rest API.

KeyboardKit Pro will automatically perform next-character predictions on the autocomplete result. These result is used for "Predictive Typing", which increases the tap area of more probable keys.

KeyboardKit Pro also unlocks ways to use 3rd party services to perform [next word prediction](/features/ai). You can enable OpenAI and Claude integrations with a single line of code.


[Pro]: /pro

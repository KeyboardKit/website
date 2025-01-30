---
title: Autocomplete
hero-emoji: 💡
---

Autocomplete is a very important part of the typing experience, where suggestions can be shown as the user types, and autocorrections can automatically correct the typed text.

KeyboardKit has an ``Autocomplete`` namespace that contains autocomplete-related types and views, an observable ``AutocompleteContext``, and an `Autocomplete.Settings`  with persisted settings.

<img width="650" alt="An autocomplete toolbar" src="{{page.assets}}autocompletetoolbar.jpg" />

In KeyboardKit, an ``AutocompleteService`` can provide suggestions when the user types or the text cursor moves in the text. [KeyboardKit Pro][pro] unlocks a local on-device service and a remote one.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks local & remote autocomplete and automatically enables autocomplete for many of the [{{site.locales.count}} supported languages](/locales).

Local and remote autocomplete will automatically perform next-character predictions based on the result. This is used by the [KeyboardView](/features/essentials-keyboardview) to increase the tap area of more probable keys.

KeyboardKit Pro also unlocks ways to inject 3rd party support for performing next word prediction. For now, OpenAI and Claude integrations can be enabled with a single line of code.


[Pro]: /pro

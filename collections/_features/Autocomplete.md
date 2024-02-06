---
title: Autocomplete
---

Autocomplete is an important part of the typing experience, where autocomplete suggestions can be shown as the user types, and autocorrect can automatically correct the typed text.

In KeyboardKit, an ``AutocompleteProvider`` can provide autocomplete and autocorrect suggestions that automatically update views like the ``AutocompleteToolbar``.

[KeyboardKit Pro][Pro] unlocks and registers a local autocomplete provider that works for most locales.


## Autocomplete Functionality

KeyboardKit has an ``Autocomplete`` namespace with autocomplete-related types, like suggestions.

The ``AutocompleteContext`` class provides observable state, such as which suggestions to present.

The ``AutocompleteToolbar`` can be used to show suggestions, and can be greatly customized. 

![AutocompleteToolbar]({{page.assets}}autocompletetoolbar-350.jpg)


## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks additional autocomplete providers and uses a `LocalAutocompleteProvider` to automatically perform autocomplete.

`LocalAutocompleteProvider` uses on-device capabilities to perform autocomplete. It works offline, doesn't require full access and integrates with other system components, like the on-device lexicon.

`RemoteAutocompleteProvider` can be used to integrate with external REST-based APIs. All you have to do is to specify endpoints, some parameters, and a model that matches the service response.



[Pro]: /pro

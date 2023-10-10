---
title: Autocomplete
---

Autocomplete is an important part of the typing experience, where autocomplete suggestions are shown as the current text changes.

In KeyboardKit, an ``AutocompleteProvider`` can provide suggestions to an ``AutocompleteContext``, which in turn can update views like an ``AutocompleteToolbar`` automatically through state observation.

KeyboardKit doesn't have a standard provider as it has for other services. Instead, it binds a disabled provider to the controller ``services`` until you register a custom provider or activate KeyboardKit Pro.

[KeyboardKit Pro][Pro] unlocks a local autocomplete provider when you register a valid license key. You can read more about it further down.



## Autocomplete namespace

KeyboardKit has an ``Autocomplete`` namespace with autocomplete-related types, like suggestions.



## Autocomplete context

KeyboardKit has an observable ``AutocompleteContext`` class that provides autocomplete state, such as which suggestions to present to the user.



## How to perform autocomplete

KeyboardKit will call the controller ``performAutocomplete()`` when the text changes. This will update the the controller ``state`` context with suggestions from the main the controller ``services`` provider. 

You can use these suggestions as you like. Views like the ``AutocompleteToolbar`` will automatically show the latest suggestions, and will handle any tapped suggestion with an action handler.

You are of course not restricted to use an ``AutocompleteToolbar``. You can use and present suggestions in any way you want. You can also modify the context at any time.



## How to customize the autocomplete behavior

You can customize the autocomplete behavior by replacing the the controller ``services`` provider with a custom ``AutocompleteProvider`` or by overriding the various ``KeyboardInputViewController`` functions.

For instance, the controller ``autocompleteText`` determines which text to pass into the provider. It uses the controller ``textDocumentProxy`` by default, but you can override it to customize which text to use.

To temporarily or permanently disable autocomplete, just can set the context's ``isEnabled`` to `false`.



## How to create a custom autocomplete provider

You can replace the the controller ``services`` autocomplete provider with a custom provider, for instance if you want to integrate with a custom SDK or 3rd party provider.  



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks additional autocomplete providers and binds a `LocalAutocompleteProvider` instance to the controller ``services`` when you register a valid license key.

### LocalAutocompleteProvider

This provider uses on-device capabilities to perform autocomplete. It works offline, doesn't require full access and integrates with other system components, like the on-device lexicon.

### RemoteAutocompleteProvider

This provider can be used to integrate with external REST-based APIs and web services. All you have to do is to specify endpoints, some parameters, and a model that matches the service response.



[Pro]: /pro

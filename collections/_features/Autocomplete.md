---
title: Autocomplete
---

Autocomplete is a very important part of the typing experience, where suggestions can be shown as the user types, and autocorrections can automatically correct the typed text.

[KeyboardKit Pro][Pro] unlocks [local & remote autocomplete](#pro) and automatically enables autocomplete for many of the supported languages when you register a valid license key.


## Namespace

KeyboardKit has an ``Autocomplete`` namespace that contains autocomplete-related types and views, like the ``Suggestion`` that is returned by an ``AutocompleteService`` when performing autocomplete.


## Context

KeyboardKit has an observable ``AutocompleteContext`` that provides observable autocomplete state, such as the ``suggestions`` to present, as well as persistent settings like ``isAutocompleteEnabled``.


## Services

In KeyboardKit, an ``AutocompleteService`` can provide suggestions when the user types or the text cursor moves in the text. [KeyboardKit Pro][pro] unlocks a local on-device service and a remote one.


## Views

The ``Autocomplete`` namespace has autocomplete-specific views, that can be used to mimic native autocomplete toolbars and items, such as the customizable `Autocomplete.Toolbar`:

<img width="650" alt="An autocomplete toolbar" src="{{page.assets}}autocompletetoolbar.jpg" />

This view can be styled with the ``autocompleteToolbarStyle(_:)`` view modifier and use custom views.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks local and remote autocomplete, and makes KeyboardKit automatically perform autocomplete on-device as the user types, without having to write any additional code.


### Local Autocomplete

An ``Autocomplete.LocalService`` performs autocomplete locally, on-device. It supports ,many locales, works offline, doesn't require Full Access and can integrate with system services, like a local lexicon.


### Remote Autocomplete

An ``Autocomplete.RemoteService`` can be used to perform autocomplete by calling an external API. It requires that the device is online, and requires Full Access to perform network requests.


### Next Character Prediction

The ``LocalService`` and ``RemoteService`` will automatically perform next-character predictions based on the result. The result is used by ``KeyboardView`` to increase the tap area of more probable keys.


### Next Word Prediction (BETA)

Apple's native text prediction utilities stopped supporting next word prediction in iOS 16, which means that we can only use it to complete and correct words that we have started typing.

KeyboardKit Pro unlocks ways to inject 3rd party support for performing next word prediction, by specifying a ``NextWordPredictionRequest`` in your ``KeyboardApp``.

KeyboardKit Pro 9.0 supports `Claude` integration, with more integrations coming in future versions.




[Pro]: /pro

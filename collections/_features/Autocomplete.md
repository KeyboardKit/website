---
title: Autocomplete
---

Autocomplete is a very important part of the typing experience, where suggestions can be shown as the user types, and autocorrections can automatically correct the typed text.

[KeyboardKit Pro][Pro] unlocks [local & remote autocomplete](#pro) and automatically enables autocomplete for many of the supported languages when you register a valid license key.


## Autocomplete Namespace

KeyboardKit has an ``Autocomplete`` namespace that contains autocomplete-related types and views, like the ``Suggestion`` that is returned by an ``AutocompleteService`` when performing autocomplete.


## Autocomplete Context

KeyboardKit has an observable ``AutocompleteContext`` that provides observable autocomplete state, such as the ``suggestions`` to present, as well as persistent settings like ``isAutocompleteEnabled``.


## Autocomplete Services

In KeyboardKit, an ``AutocompleteService`` can provide suggestions when the user types or the text input cursor moves in the text. [KeyboardKit Pro][pro] unlocks local and remote service.


## Views

The ``Autocomplete`` namespace has autocomplete-specific views, that can be used to mimic native autocomplete toolbars and items, such as the customizable `Autocomplete.Toolbar`:

<img width="650" alt="An autocomplete toolbar" src="{{page.assets}}autocompletetoolbar.jpg" />

This view can be styled with the ``autocompleteToolbarStyle(_:)`` view modifier. It can also use custom views for its various parts.


<a name="pro">
## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks local and remote autocomplete, and makes KeyboardKit automatically perform autocomplete on-device as the user types, without having to write any additional code.


### Local Autocomplete

An ``Autocomplete.LocalService`` performs autocomplete locally, on-device. It supports ,many locales, works offline, doesn't require Full Access and can integrate with system services, like a local lexicon.


### Remote Autocomplete

An ``Autocomplete.RemoteService`` can be used to perform autocomplete by calling an external API. It requires that the device is online, and requires Full Access to perform network requests.



[Pro]: /pro

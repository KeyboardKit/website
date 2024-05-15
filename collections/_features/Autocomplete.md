---
title: Autocomplete
---

Autocomplete is a very important part of the typing experience, where suggestions can be shown as the user types, and autocorrections can automatically correct the typed text.

[KeyboardKit Pro][Pro] unlocks [local & remote autocomplete](#pro) and automatically enables autocomplete for many of the supported languages when you register a valid license key.


## Core Features

In KeyboardKit, an ``AutocompleteService`` can be used to get suggestions that automatically update views like the (very customizable) ``Autocomplete.Toolbar``.

![AutocompleteToolbar]({{page.assets}}autocompletetoolbar-350.jpg)

There's also an ``Autocomplete`` namespace with autocomplete-related types, observable state, etc.


<a name="pro">
## 👑 Pro Features

[KeyboardKit Pro][Pro] unlocks local and remote autocomplete, and makes KeyboardKit automatically perform autocomplete on-device as the user types, without any additional code needed.

`Autocomplete.LocalService` uses on-device capabilities to perform autocomplete directly on device, while `Autocomplete.RemoteService` can be used to integrate with external APIs.

`LocalService` currently supports: Arabic, Bulgarian, Czech, Danish, Dutch, English, Filipino, Finnish, French, German, Greek, Hebrew (Israel), Hungarian, Irish (Ireland), Italian, Norwegian Bokmål, Nynorsk, Polish, Portuguese, Romanian, Russian, Spanish, Swedish, Turkish, and Ukrainian.



[Pro]: /pro

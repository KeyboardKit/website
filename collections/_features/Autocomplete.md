---
title: Autocomplete
---

Autocomplete is an important part of the typing experience, where autocomplete suggestions can be shown as the user types, and autocorrect can automatically correct the typed text.

[KeyboardKit Pro][Pro] unlocks [local & remote autocomplete](#pro) and automatically enables autocomplete.


## Core Features

In KeyboardKit, an ``AutocompleteProvider`` can provide suggestions that automatically update views like the customizable ``Autocomplete.Toolbar``.

![AutocompleteToolbar]({{page.assets}}autocompletetoolbar-350.jpg)

There's also an ``Autocomplete`` namespace with autocomplete-related types, observable state, etc.


<a name="pro">
## 👑 Pro Features

[KeyboardKit Pro][Pro] unlocks local and remote autocomplete, and makes KeyboardKit automatically perform autocomplete as the user types, without any additional code needed.

`Autocomplete.LocalProvider` uses on-device capabilities to perform autocomplete directly on device, while `Autocomplete.RemoteProvider` can be used to integrate with external APIs.

`Autocomplete.LocalProvider` currently supports: Arabic, Bulgarian, Czech, Danish, Dutch, Dutch (Belgium), English, English (United Kingdom), English (United States), Filipino, Finnish, French, French (Belgium), French (Switzerland), German, German (Austria), German (Switzerland), Greek, Hebrew (Israel), Hungarian, Irish (Ireland), Italian, Norwegian Bokmål, Polish, Portuguese (Brazil), Portuguese (Portugal), Romanian, Russian, Spanish, Swedish, Turkish, Ukrainian



[Pro]: /pro

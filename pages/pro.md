---
layout: page
title: Pro
permalink: /pro
hero: pro

description: KeyboardKit Pro extends KeyboardKit with pro features.
---


## About

KeyboardKit Pro is a closed-source library that extends the [open source library](/open-source) with pro features like localized system keyboards, autocomplete engines etc.

Check out the [GitHub repository]({{site.github_repo_pro}}) for more information about the library, the features it provides and how to use it in your own apps.


## Licenses

KeyboardKit Pro requires a commercial license that unlocks more features and locales. There are three tiers to choose from:

{% include grids/licenses.html %}

Licenses are currently purchased over e-mail, using your preferred payment option (Bank Transfer, Xoom etc.). Just [send an e-mail](mailto:{{site.email}}?subject=KeyboardKit License) and we'll discuss your needs.


## License Information

Licenses are valid for **one app** (app plus keyboard extension). Additional apps can be added to a license at a 50% discount per additional app.

Licenses are valid for **one year**. After expiration, you can continue to use all versions that were released during your license's validity period.

Expired licenses don't affect shipped apps. Apps will continue to function after the license expires. You will however need to renew your license to ship new app versions.

Licenses will renew at the price that was in effect when the license was purchased. This means that licenses are not affected by future price adjustments.


## Locales

KeyboardKit Pro provides complete keyboard support for all available locales:

{% include locales.html %}

This means that KeyboardKit Pro unlocks a fully implemented input set, keyboard layout and secondary input actions for each locale.


## Local autocomplete

KeyboardKit Pro unlocks a local autocomplete engine that provides basic autocomplete suggestions as the user types on the keyboard.

The local autocomplete engine is currently not predictable. It will autocomplete the currently typed word, but not predict new words based on previously typed text.


## Remote autocomplete

KeyboardKit Pro unlocks a remote autocomplete engine that lets you connect your keyboard to a remote autocomplete service, such as an external API or web service.

Remote autocomplete makes it possible to provide more powerful suggestions and predictions, since iOS extensions limit how much memory your autocomplete engine can consume.

Remote autocomplete also makes it possible to adjust and improve the autocomplete capabilities without having to ship new versions of the app. 

 However, remote autocomplete requires full access and an Internet connection, so it may be a good idea to combine local and remote autocomplete whenever possible.


## Additional Views

KeyboardKit Pro adds a bunch of additional views. Check the documentation for more information.
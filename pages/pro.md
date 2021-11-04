---
layout: page
title: Pro
permalink: /pro
hero: pro

description: KeyboardKit Pro extends KeyboardKit with pro features.
---


## About

KeyboardKit Pro is a closed-source library that extends the [open source library](/open-source) with pro features like additional locales, a multi-local autocomplete engine etc.

Check out the [GitHub repository]({{site.github_repo_pro}}) for more information about the library, the features it provides and how to use it in your own apps.


## Licenses

KeyboardKit Pro requires a commercial license that unlocks more features and locales. There are three tiers to choose from:

{% include grids/licenses.html %}

Licenses are currently purchased over e-mail, using your preferred payment option (Bank Transfer, Xoom etc.). Just [send an e-mail](mailto:{{site.email}}?subject=KeyboardKit License) and we'll discuss your needs.


## License Information

Licenses are valid for **one app** (app plus keyboard extension). Additional bundle IDs can be added to a license at a 50% discount of the current price.

Licenses are valid for **one year**. After expiration, you can continue to use any versions that were released during your license's validity period.

Expired licenses don't affect shipped apps. They will continue to function after the license expires. You will however need to renew expired licenses to ship new versions of your apps.

Licenses will renew at the price that was in effect when the license was purchased. This means that no purchased licenses will be affected by future price adjustments.


## Locales

KeyboardKit Pro provides complete keyboard support for all available locales:

{% include locales.html %}

This means that KeyboardKit Pro unlocks a fully implemented input set, keyboard layout and secondary input actions for each locale.


## Local autocomplete

The local autocomplete engine is currently not predictable, which means that it will autocomplete the current word, but not predict new words based on previously typed text.


## Remote autocomplete

The remote autocomplete provider engine lets you connect your keyboard to a remote provider, such as an external API och web service.

Remote autocomplete makes it possible to provide more powerful suggestions and predictions, since the memory limit of iOS extensions doesn't limit the remote engine. However, remote autocomplete requires full access and an Internet connection.

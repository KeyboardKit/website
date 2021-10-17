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

Licenses are currently purchased over e-mail, using your preferred payment option (Xoom, PayPal etc.). Just [send an e-mail](mailto:{{site.email}}?subject=KeyboardKit License) and we'll discuss your needs.

*Note: Prices will be adjusted at October 31. If you already signed up for a license, your price will stay the same forever. Read more below.*


## License Information

Licenses are valid for **one app** (app plus keyboard extension). Additional bundle IDs can be added to a license at a 50% discount of the current price.

Licenses are valid for **one year**. After expiration, you can continue to use any versions that were released during your license's validity period.

Expired licenses don't affect shipped apps. They will continue to function after the license expires. You will however need to renew expired licenses to ship new versions of your apps.

Licenses will renew at the price that was in effect when the license was purchased. This means that no purchased licenses will be affected by future price adjustments.


## Upcoming Price Adjustments

After 6 months of KeyboardKit Pro, with a lot more features added since launch, the KeyboardKit Pro license prices will be adjusted at October 31. 

After the price change, a **Basic** license will be **$500** and a **Silver** license **$750**. The **Gold** license will stay at **$1000**, making it the best value with all locales unlocked. 

Due to this adjustment, Basic licenses have been extended with access to remote autocomplete. This change is already in effect in KeyboardKit 5.0, so you can start using it right away.

Previously purchased licenses will renew at the original price of purchase, so make sure to sign up before October 31 to get an amazing deal for the entire lifespan of your app.


## Locales

KeyboardKit Pro provides complete keyboard support for all available locales:

{% include locales.html %}

This means that KeyboardKit Pro unlocks a fully implemented input set, keyboard layout and secondary input actions for each locale.


## Local autocomplete

The local autocomplete engine is currently not predictable, which means that it will autocomplete the current word, but not predict new words based on previously typed text.


## Remote autocomplete

The remote autocomplete provider engine lets you connect your keyboard to a remote provider, such as an external API och web service.

Remote autocomplete makes it possible to provide more powerful suggestions and predictions, since the memory limit of iOS extensions doesn't limit the remote engine. However, remote autocomplete requires full access and an Internet connection.

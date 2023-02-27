---
title:  KeyboardKit 6.5 is out
date:   2022-11-02 08:00:00 +0100
tags:   releases licenses

image:  /assets/headers/icon.png

licensekit: https://getlicensekit.com
---

KeyboardKit 6.5 is out, with a bunch of changes to the Pro license model. The release also improves the library documentation by introducing namespaces.

![Icon badge]({{page.image}})

KeyboardKit Pro now uses [LicenseKit]({{page.licensekit}}) to handle its licenses. You still setup KeyboardKit Pro in the same way as before, but the license model and license errors differ a bit from the old ones.

While breaking changes should be kept to a minimum in minor upgrades, changing the license engine was an important step to be able to add more license-based features in the future, such as letting developers use their license directly after purchasing them from Gumroad.

Furthermore, the KeyboardKit Pro input set providers and callout action providers are now nested within their base classes. This makes it a lot easier to browse all available providers and makes the documentation a lot cleaner than before.

If you run into any of these breaking changes, they should be fairly easy to fix. For the licenses, check for the new property name. For the providers, just change the type name, for instance from `SwedishInputSetProvider` to `ProInputSetProvider.Swedish`.
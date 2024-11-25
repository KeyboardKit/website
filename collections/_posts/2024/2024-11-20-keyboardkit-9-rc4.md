---
title:  KeyboardKit 9.0 RC 4
date:   2024-11-20 08:00:00 +0100
tags:   releases

image: /assets/headers/9/rc.jpg

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.0.0-rc.4
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.0.0-rc.4
---

The KeyboardKit 9.0 Release Candidate 4 is out! 🚀 It's a pretty big update that builds on previous release candidates, improves many things, and adds support for OpenAI-based word prediction.

![KeyboardKit logo]({{page.image}})

The RC 4 fixes a couple of bugs and behaviors from the earlier release candidates. For instance the theme screen properly updates when you select a theme, emoji search uses a "done" key to make it easier to understand how to dismiss search, and the emoji keyboard and emoji search enforce a minimum toolbar height to avoid incorrect rendering when the keyboard view has no toolbar.

The SDK has been simplified even further. For instance, the feedback context and its configuration are simplified, to avoid incorrect state by removing the enabled configs. Instead, we can just use the settings to disable feedback. Autocomplete has also been improved to trigger fewer times, and only on release by default.

Services have been renamed to make it easier to search and debug. We used to had many services with the same name, but in different namespaces, like the `StandardService`, but the new naming convention adds the type of service to the name, e.g. `KeyboardLayout.StandardLayoutService`. This will also help avoid future name conflicts when a namespace can have many services.

KeyboardKit Pro adds support for OpenAI-based next word prediction! Just add an `.openAI(apiKey: ...)` request to the KeyboardApp, and your keyboard will use OpenAI to predict the next word. The release also makes it possible to customize the next word requests.

Finally, KeyboardKit Pro improves license validation, to let you use multiple keyboards with a single license, without having to register any additional bundle IDs. This Terms & Condition change means that you can use one license with one product, regardless of how many keyboards it uses.


## Conclusion

KeyboardKit 9 is a huge step forward, and makes using KeyboardKit easier than ever before. Many since long requested features are finally in place, and more will come in subsequent minor updates.

To give this release candidate a try, use the `9.0.0-rc.4` tag. For more information, see the [release]({{page.release}}) or the [KeyboardKit Pro release]({{page.release-pro}}). Don't hesistate to reach out if you find bugs or have any feedback.
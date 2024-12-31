---
title:  KeyboardKit 6.2 is out
date:   2022-08-26 08:00:00 +0100
tags:   releases autocomplete emojis input-sets
---

KeyboardKit 6.2 is out, with a bunch of new emojis, input set updates and more improvements made to the standard KeyboardKit Pro autocomplete provider.

![Icon badge]({{page.image}})


## Emojis

KeyboardKit 6.2 adds a bunch of new emojis, which have been added in later versions of iOS without being added to KeyboardKit. The reason for delaying keeping the KeyboardKit emoji list in sync with the various platforms, is that there is currently no way to add a platform version to an emoji. This means that we lack this information and can't filter out emojis that aren't supported on a certain device.

Adding emojis too early to the KeyboardKit emoji keyboards would thus mean that a bunch of users would most probably have empy gaps where their iOS version lacks added emojis. While delaying doesn't guarantee that all users will be able to see all emojis, the risk is however smaller the longer we wait.


## Input sets

To make it even easier to create localized input sets, the various locale-specific alphabetic, numeric and symbolic input sets can now be accessed as extensions on the input set types, instead of having to create an input set provider.


## Autocomplete

The standard autocomplete provider's case handling has been improved further, and will handle suggestions differently depending on where they come from. Suggestions from your contacts will be prioritized lower than locale-specific ones.

The provider has also been extended with (limited) prediction capabilities, where typing a sentence will now sometimes suggest words where you would never receive updates in previous versions.


## Conclusion

KeyboardKit 6.2 is a pretty huge release, that lays the groundwork for even more improvements later on. Future versions will contain even more input sets, now that the sets have been decoupled from the providers. Don't hesitate to reach out if you'd like to see more input set variations in other languages as well.
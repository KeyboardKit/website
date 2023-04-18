---
title:  New Emojis
date:   2023-04-18 06:00:00 +0100
tags:   emojis

image:  /assets/headers/emojis.png

tweet:  https://twitter.com/GetKeyboardKit/status/1644240205409316864?s=20
toot:   https://techhub.social/@keyboardkit/110156343564099701
---

The upcoming KeyboardKit Pro 7.4 adds new emojis that were added in iOS 16.4, macOS 13.3, tvOS 16.4 and watchOS 9.4, as well as new tools to handle emoji versions.

![KeyboardKit icon with emojis]({{page.image}})


## New emojis

Several new emojis were added in iOS 16.4, macOS 13.3, tvOS 16.4 and watchOS 9.4:

* 🫨 - Shaking Face
* 🫸 - Leftwards Pushing Hand
* 🫷 - Rightwards Pushing Hand
* 🪿 - Goose
* 🫎 - Moose
* 🪼 - Jellyfish
* 🫏 - Donkey
* 🪽 - Wing
* 🪻 - Hyacinth
* 🫛 - Pea Pod
* 🫚 - Ginger Root
* 🪇 - Maracas
* 🪈 - Flute
* 🪮 - Hair Pick
* 🪭 - Folding Hand Fan
* 🩷 - Pink Heart
* 🩵 - Light Blue Heart
* 🩶 - Gray Heart
* 🪯 - Khanda
* 🛜 - Wireless

All these emojis will be available in KeyboardKit 7.4.


## Emoji version information

The number of emojis keeps growing, but since emojis require certain system versions, some of your users may not be able to use the latest additions, or at least see them.

KeyboardKit Pro 7.4 will therefore add a new `EmojiVersionInfo` type, that lets you find out all emojis that have been introduced after a certain iOS, macOS, tvOS and/or watchOS version. This is then used to provide new `Emoji` collection extensions that can filter out unavailable emojis.

This means that you will now be able to filter out unavailable emojis from the emoji keyboards. This will be added as implicit features to these keyboards in future library updates, but just reach out if you are in need of this feature sooner rather than later.


## Emoji localizations

KeyboardKit 7.4 have used Chat GPT-4 to generate English names for all supported emojis. This means that you can now use the `KKL10n` type to get the proper English name of any emoji.


## Conditions

KeyboardKit 7.4 adds many new emojis and emoji-related features. It will be released during April.
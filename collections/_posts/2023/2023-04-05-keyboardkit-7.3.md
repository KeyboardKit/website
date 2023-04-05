---
title:  KeyboardKit 7.3 RC1 is out
date:   2023-04-05 08:00:00 +0100
tags:   releases dictation appearance themes

image:  /assets/headers/icon.png
assets: /assets/themes/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.3-rc1

toot:   https://techhub.social/@keyboardkit/110057656044269753
tweet:  https://twitter.com/GetKeyboardKit/status/1637924126340837380?s=20
---

KeyboardKit 7.3 RC1 is out to let you give the upcoming version a try before it goes live. This is a big update, so your help and feedback is very important to ensure that it works as expected.

![KeyboardKit logo]({{page.image}})


## Dictation support

KeyboardKit 7.3 adds dictation support, which has been a feature long in the making. It's an early version that is not yet thoroughly tested, but your feedback regarding its design and performance is very important to ensure it's on the right path.

Just like with autocomplete, KeyboardKit adds a bunch of protocols and state that describe how to implement dictation, after which KeyboardKit Pro adds implementations to some license tiers that just makes it work automatically after registering a pro license.

Unlike other featuers, keyboard dictation requires a couple of steps to setup, and since it depends on deep links and shared data, the demo apps will not be able to demo this. Dictation will instead be added to the upcoming App Store app.

There's a new chapter on dictation in the KeyboardKit 7.3 documentation, can be downloaded from the [pre-release page]({{page.release}}). Just download and unzip it you can preview it directly in Xcode.


## Appearance and theme changes

KeyboardKit 7.3 adds a bunch of new themes and style variations to the pre-defined themes. This makes it easy to tweak certain parts of a theme, such as the tint color of the standard theme.

The `KeyboardTheme` type and all the various styles are now `Codable`, which means that you can easily persist and share themes. This however comes with some unfortunate breaking changes.

See the [release notes]({{page.release}}) for more info about these breaking changes and how they may affect you.


## New themes

KeyboardKit 7.3 adds a bunch of new themes and lays the foundation for a theme library that can be extended in the future. Note that the theme engine requires a `Gold` license.

### Standard

The `.standard` theme mimics a native keyboard. It now supports a discrete tint color variation:

![Standard]({{page.assets}}standard.jpg){:width="250px"} ![Standard Pink]({{page.assets}}standard-pink.jpg){:width="250px"}

### Swifty

The `.swifty` theme removes the borders of the system keys. It also supports a discrete tint color:

![Swifty]({{page.assets}}swifty.jpg){:width="250px"} ![Swifty Blue]({{page.assets}}swifty-blue.jpg){:width="250px"}

### Minimal

The `.minimal` theme removes the borders of all the keys. It supports extensive styling:

![Minimal]({{page.assets}}minimal.jpg){:width="250px"} ![Minimal Sunset]({{page.assets}}minimal-sunset.jpg){:width="250px"}

### Candy

The `.candy` theme applies smooth button corners and lets you define pastel color themes:

![Candy]({{page.assets}}candy.jpg){:width="250px"}

### Neon

The `.neon` theme also has smooth button corners but uses a darker color scheme:

![Neon]({{page.assets}}neon.jpg){:width="250px"}

### Tron

The `.tron` theme uses a single tint color to create a futuristic look:

![Minimal]({{page.assets}}tron.jpg){:width="250px"}  ![Minimal]({{page.assets}}tron-fcon.jpg){:width="250px"}


## Conclusion

KeyboardKit 7.3 brings dictation support to KeyboardKit and adds a bunch of power to the theme enine. There are also many smaller additions, improvements and bug fixes. For a complete list of changes, see the [release notes]({{page.release}}) and please share any feedback you may have.
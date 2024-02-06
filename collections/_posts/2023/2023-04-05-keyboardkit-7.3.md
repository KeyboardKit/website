---
title:  KeyboardKit 7.3
date:   2023-04-05 08:00:00 +0100
tags:   releases dictation appearance themes

image:  /assets/headers/icon.png
assets: /assets/themes/
image-width: 300px

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.3.0

toot:   https://techhub.social/@keyboardkit/110146436383710413
tweet:  https://twitter.com/GetKeyboardKit/status/1643606190616707078?s=20
---

KeyboardKit 7.3 is out, with many new features. Say hello to dictation support, theme collections, theme variations...and more.

![KeyboardKit logo]({{page.image}})


## Dictation support

KeyboardKit 7.3 adds dictation support, which has been a feature long in the making. It's an early version that is not yet thoroughly tested, but your feedback regarding its design and performance is very important to ensure it's on the right path.

Just like with autocomplete, KeyboardKit adds a bunch of protocols and state that describe how to implement dictation, after which KeyboardKit Pro adds implementations to some license tiers that just makes it work automatically after registering a pro license.

Unlike other featuers, keyboard dictation requires a couple of steps to setup, and since it depends on deep links and shared data, the demo apps will not be able to demo this. Dictation will instead be added to the upcoming App Store app, so that you will be able to try it out without having to implement it in your app.


## Appearance and theme changes

KeyboardKit 7.3 adds a bunch of new themes and style variations to the pre-defined themes. This makes it easy to tweak certain parts of a theme, such as the tint color of the standard theme.

The `KeyboardTheme` type and all the various styles are now `Codable`, which means that you can easily persist and share themes. This however comes with some unfortunate breaking changes.

See the [release notes]({{page.release}}) for more info about these breaking changes and how they may affect you.


## New themes

KeyboardKit 7.3 adds a bunch of new themes and lays the foundation for a theme library that can be extended in the future.

You can view a full list of themes [here](/features/themes). Note that you need a `Gold` license to use themes.

### Standard

The `.standard` theme mimics a native keyboard. It now supports a discrete tint color variation:

![Standard]({{page.assets}}standard.jpg){:width="{{page.image-width}}"} ![Standard Pink]({{page.assets}}standard-pink.jpg){:width="{{page.image-width}}"}

### Swifty

The `.swifty` theme removes the borders of the system keys. It also supports a discrete tint color:

![Swifty]({{page.assets}}swifty.jpg){:width="{{page.image-width}}"} ![Swifty Blue]({{page.assets}}swifty-blue.jpg){:width="{{page.image-width}}"}

### Minimal

The `.minimal` theme removes the borders of all the keys. It supports extensive styling:

![Minimal]({{page.assets}}minimal.jpg){:width="{{page.image-width}}"} ![Minimal Sunset]({{page.assets}}minimal-sunset.jpg){:width="{{page.image-width}}"}

### Candy

The `.candy` theme applies smooth button corners and lets you define pastel color themes:

![Candy]({{page.assets}}candyshop.jpg){:width="{{page.image-width}}"}

### Neon

The `.neon` theme also has smooth button corners but uses a darker color scheme:

![Neon]({{page.assets}}neon.jpg){:width="{{page.image-width}}"}

### Tron

The `.tron` theme uses a single tint color to create a futuristic look, for instance:

![Minimal]({{page.assets}}tron.jpg){:width="{{page.image-width}}"}  ![Minimal]({{page.assets}}tron-fcon.jpg){:width="{{page.image-width}}"}


## Conclusion

KeyboardKit 7.3 brings dictation support to KeyboardKit and adds a bunch of power to the theme enine. There are also many smaller additions, improvements and bug fixes. For a complete list of changes, see the [release notes]({{page.release}}) and please share any feedback you may have.
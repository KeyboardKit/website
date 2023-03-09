---
title:  KeyboardKit 7.1 is out
date:   2023-03-09 08:00:00 +0100
tags:   releases autocomplete locales layout

image:  /assets/headers/icon.png

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.1.0

toot:   https://techhub.social/@keyboardkit/109936849629713474
tweet:  https://twitter.com/GetKeyboardKit/status/1630191697698103296?s=20
---

KeyboardKit 7.1 is out! This minor release fixes a few bugs that were introduced in the 7.0 release, adds a brand new autocomplete experience, improves the locale picker context menu and makes it easier than ever to setup KeyboardKit.

![Icon badge]({{page.image}})


## Simplified setup

KeyboardKit currently had a setup function that took a view. This could easily lead to memory leaks when the view required a `KeyboardInputController` reference, since it's easy to forget making any controller reference `weak` or  `unowned`.

KeyboardKit 7.1 therefore adds a new setup function, that uses a view builder that is called with an `unowned` controller reference. This makes it easy to use the controller in the view, without having to handle the controller reference.

But this is not all. KeyboardKit will now by default setup a `SystemKeyboard`, which means that you don't have to actually setup a view if you just want to use a regular system keyboard. 

If you want to use a custom view, or customize the system keyboard, you can naturally override `viewWillSetupKeyboard` as you've done before, and set up KeyboardKit in any way you want.


## New autocomplete provider

There is a new autocomplete provider in KeyboardKit Pro, that produces way better results compared to the currently default provider. You can try it out by adding this to `viewDidLoad`:

```swift
FeatureToggle.shared.toggleFeature(.newAutocompleteEngine, .on)
```

If this new engine behaves as well as it should, it will replace the current one in a future update, after which the feature toggle will be removed.


## New locale switcher

The locale context menu that is shown when long pressing the locale switcher button (or space, if it's configured in that way) has been refactored to work and look a lot better on iOS 16 and macOS 12. 

The context menu will now open with a much smoother animation that keeps the keyboard open, instead of popping out the long pressed view and blur the background. This will make switching locales a lot smoother.


## Bug fixes

KeyboardKit 7.0 unfortunately had a single line of code removed, that caused some iPad layouts to become messed up. KeyboardKit 7.1 fixes this and also tweaks a bunch of Pro layouts to match their native counterparts even closer.


## Release notes

KeyboardKit 7.1 builds on the momentum from 7.0 by adding a brand new autocomplete provider and locale menu, while also simplifying the setup, reducing the risk of memory leaks and fixing a couple of layout bugs. 

You find a complete list of changes in [the release notes]({{page.release}}).
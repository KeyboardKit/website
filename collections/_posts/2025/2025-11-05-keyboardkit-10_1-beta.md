---
title:  KeyboardKit 10.1 Beta
date:   2025-11-05 06:00:00 +0100
tags:   releases performance

image-show: 0
image: /assets/versions/10_1-beta.jpg
assets: /assets/blog/25/1105/

release: https://github.com/KeyboardKit/KeyboardKit-Binaries/releases/tag/10.1-b.1
---

KeyboardKit 10.1 Beta is out! This release adds new features and improves the typing and rendering performance to reduce lag while typing. Let's take a look!

![Blog header image]({{page.image}})


## 💥 Secondary Swipe Actions

KeyboardKit 10.1 will automatically add swipe down actions to iPad, when creating a layout with an alphabetic, a numeric, and a symbolic input set.

![Alphabetic keyboard with swipe down actions]({{page.assets}}ipad-alphabetic.jpg)

Swipe down actions are automatically applied to most supported locales, but is currently disabled for some locales where the automated way is not good enough.


## 🧪 Experiments

KeyboardKit 10.1 adds a standard way to handle experimental features, where the new `Experiment` enum can be used to enable individual experiments.

Active experiments can be enabled and disabled, and can be presented to users if you want to give them the choice to opt-in to an ongoing experiment. 

Finished experiments are kept, but marked as inactive, and are removed in the next major version.


## ⚡️ Performance

KeyboardKit 10.1 improves the typing and rendering performance through layout caching and view hierarchy cleanups, which results in less expensive recalculations fewer views to render.

Layout caching caches layouts for a set of conditions, to reduce expensive recalculations. This is an experimental feature, and is enabled with `Experiment.layoutCaching.setEnabled(true)`.

The gesture button modifier that is used to trigger keyboard button actions has been optimized, by removing a geometry proxy for each modifier. This results in a cleaner and lighter view hierarchy.


## 📱 App

The `KeyboardApp.HomeScreen` is no longer a Pro feature. This means that it can be used by everyone.

![Home Screen]({{page.assets}}keyboardapp-homescreen.jpg)

The screen will only render links to the features that are included in your license, but it will show the keyboard status, and let you customize it with the `header` and `footer` view builders.


## 🏠 Host Application

KeyboardKit 10.1 lets you create and pass in your own custom host application values. This lets you extend the host application logic with more apps than what is known by the SDK.


## ⌨️ External Keyboards

The `ExternalKeyboardContext` has a new `isEnabledOnSimulator` property. This is `false` by default, to avoid a bug where the keyboard could auto-collaps when running on a Simulator. 


## Conclusion

The KeyboardKit 10.1 Beta adds many new features and fixes many small bugs and inconsistencies. Please give it a try and let us know what you think. For more info, please see the [KeyboardKit 10.1 release notes]({{page.release}}).
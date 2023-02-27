---
title:  KeyboardKit 7 RC
date:   2023-02-16 10:00:00 +0100

tags:   releases multi-platform

image:  /assets/headers/icon.png

release: https://github.com/KeyboardKit/KeyboardKit/releases
documentation: https://github.com/KeyboardKit/KeyboardKit/releases/download/7.0-rc/KeyboardKit-7rc.doccarchive.zip

tweet:  https://twitter.com/GetKeyboardKit/status/1626337838382866437?s=20
toot:   https://mastodon.social/@danielsaidi/109876618450642984
---


The KeyboardKit 7.0 Release Candidate is finally out and ready to be tested! There many changes and a fair share of breaking changes, so make sure to test it and reach out with feedback, bugs etc.

![Icon badge]({{page.image}})


## Overall ambitions

KeyboardKit 7.0 involves a major rewrite to get more consistency in structure and naming. It aims to streamline the library to make it easier to use and to make future development easier.

This version also bumps the platform deployment and targets iOS and tvOS 14 instead of 13. This lets us remove all `@available` annotations in the code, which makes the code a lot cleaner. 

This version also removes all deprecations and todos and makes more types available on more platforms, to reduce the number of types that are only available to iOS.

One problem that you may run into is the removal of many shared instances, like the shared input controller. This is done to reduce coupling and make all dependencies communicated through init parameters. To fix this, inject the types you need through the initalizer or as function parameters.

To sum up, this is a big rewrite that aims to take the library to the next level and make things easier and better moving forward. Your feedback is very important, so make sure to share your feedback and report any bugs that you may find.


## Migrating from KeyboardKit 6

Although this release aims to make as few breaking changes as possible, there are a few changes that most likely will require you to adjust your code, especially if you subclass types in the library.

Many initializer and function parameters have been renamed to be consistent within the library. You may also find that some types require more parameters, since many shared instances have been removed.

If you have problems upgrading to `7.0`, first upgrade to `6.9`. It has a lot of deprecations in place to guide you through some of the biggest changes. You may still experience breaking changes after that, but they will for sure be fewer.


## New features

KeyboardKit 7 is not all about breaking changes :) There are a bunch of new features, especially for multi-platform availability, where many types are now available to more platforms.

To provide improved multi-platform support, many platform-specific types have been replaced by new types that build on all platforms, or by more basic data types. This made it possible to make `KeyboardContext` available on all platforms, which made several service types available as well.

There is also a new multi-platform `KeyboardController` protocol that is used in many parts of the library. It specifies things that the controller can do, instead of forcing an implementation and makes many services available to more platforms, since they are no longer coupled to `UIKit`.

Other than that, the various contexts have more functions and more observable properties. There are also many new protocols to move away functionality that was previously only implemented as extensions, which means that the documentation covers more functionality than before.


## Appearance changes

KeyboardKit 7 tweaks the standard design in many places, to make the system keyboard look even more like the native iOS keyboard. Some such changes are the new emoji button design and many small tweaks to corner radius, font weight etc. for some keys.

If you are using `NextKeyboardButton` as a standalone view, it can now be customized more than before. The keyboard appearance also affects this button more than before. It also supports using any custom content, which was not possible in previous versions.


## Behavior changes

A big change to keyboard gestures, is that the keyboard action handler and the keyboard gestures no longer use `tap`, but instead use `press` and `release` which is easier to reason about.

Another big change, that may cause your layout to become a bit messed up, is that the base layout providers have been drastically simplified, with many locale-specific adjustments being moved to locale-specific providers in KeyboardKit Pro. If you notice that your custom layout looks strange, you may have to subclass the layout provider and tweak the layout.

Many views have been tweaked to behave better than before. Many views that needn't be greedy are that no longer, and the library no longer use `AnyView` anywhere. This will improve things like view performance, animations etc. since SwiftUI will be able to diff views easier.


## Breaking changes

The biggest breaking change is that KeyboardKit 7 targets iOS and tvOS 14. If your app targets iOS 13, you will not be able to upgrade to KeyboardKit 7.

Another big change that may affect you, is that the `.return` and `.newLine` keyboard actions are now part of the `.primary` action type. Just use `.primary(.return)` and `.primary(.newLine)` instead of the old actions. Furthermore, the `.shift` action's `currentState` parameter has been renamed to `currentCasing`.

As mentioned before, many shared things are removed, including the `ActionCalloutContext`, `InputCalloutContext` and `KeyboardInputViewController`. This may require you to pass some more parameters, where the shared instances were used internally before.

There are many more things to know about KeyboardKit 7, so if you update and run into problems, you find the preliminary release notes [here]({{page.release}}) and can download the documentation [here]({{page.documentation}}).
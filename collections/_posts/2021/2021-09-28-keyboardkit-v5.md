---
title:  KeyboardKit v5
date:   2021-09-28 18:00:00 +0100
tags:   uikit swiftui
---

Work on KeyboardKit v5 has begun. This post explains what to expect in this new major release.


## About

KeyboardKit was originally a UIKit-based library, where the UI part of the library used UIKit to implement features like system keyboards, autocomplete toolbars, grids etc.

However, UIKit never provided the best experience, neither to developers or users. Using stack views to create system keyboards was clunky and the end result not as native as intended.

As SwiftUI launched in 2019, there was suddenly a new, declarative framework that fit the dynamic nature of software keyboards perfectly.

KeyboardKit 3 introduced the first SwiftUI-specific features, with the SwiftUI parts defined in a separate library, since KeyboardKit did support iOS 11 and SwiftUI required iOS 13.

KeyboardKit 4 moved SwiftUI into the main library and also bumpred the iOS deployment target to iOS 13. SwiftUI was now the main focus going forward, but UIKit support was still around.

In KeyboardKit 5, things are taken even further. SwiftUI will become the only explicitly supported UI framework and all UIKit-specific parts will be removed.

Read on for more information.


## Why is UIKit going away?

Well, first of all, UIKit support is not going away. You will still be able to use KeyboardKit in your UIKit-based extensions, and make use of all the UI agnostic parts of the library.

However, the library will no longer be designed with both SwiftUI and UIKit in mind. It will now only focus on SwiftUI in order to move quickly, without any legacy holding it back.

If you were using the UIKit-specific views in the library, you should still be able to grab them from the last 4.9 release and add them to your own app. 

Also, feel free to create a separate library as well, with UIKit-specific utilities. Just let me know and I will gladly link to your project.


## What to expect

KeyboardKit 5 will focus on making the library tighter. Removing UIKit will help a lot, but I will also work on making the various parts of the library more explicit.

For instance, creating a system keyboard button is currently pretty complicated. You must setup a context, an appearance, an action handler etc.

In KK 5, I will separate the view from its behavior and make it easier to define a style. I will also try to make the views stateless and make them independent of any environment obects.

I will also remove some concepts, even if it means that others get larger responsibilities. For instance, I once separated a behavior from the action handler. However, this means that changing the behavior means that you must also generate a new action handler. This is error-prone and not great from a developer pov.

All in all, expect a tighter, more well-defined library that is easier to use.


## Timeline

Work on KeyboardKit v5 has begun. You can follow it in the "v5" branch. The work should not take more than a month, which means that KeyboardKit 5.0 should be released in October 2021.

If this work takes longer than expected, I will make sure to post about it here as well as on [Twitter](https://twitter.com/GetKeyboardKit). Make sure to follow to stay up to date.
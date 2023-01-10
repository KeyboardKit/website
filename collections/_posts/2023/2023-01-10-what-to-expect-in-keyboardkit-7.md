---
title:  What to expect in KeyboardKit 7
date:   2023-01-10 10:00:00 +0100

image:  /assets/headers/icon.png

tweet:  https://twitter.com/GetKeyboardKit/status/1596074336687099905
toot:   https://techhub.social/@keyboardkit/109403855369067876
---

With KeyboardKit 6.9 out, work will now begin on the next major version. Keyboard 7 is a couple of weeks away, but here are some things to expect from it.

![Icon badge]({{page.image}})


## iOS 14

KeyboardKit has targeted iOS 13 since moving from UIKit to SwiftUI a while back. However, as more features are coming to SwiftUI, that require later versions of Apple's platforms, it has become more and more complicated to keep evolving the library while still supporting iOS 13.

To clean up the library code, make it easier to maintain and to be able to use newer technologies, KeyboardKit 7 will therefore bump the deployment target to iOS 14, as well as bumping the other platforms to the same baseline.


## Dependency injection changes

KeyboardKit injects dependencies, such as contexts, action handlers, services etc. differently in the different parts of the code base.

For instance, most services take their dependencies as init parameters, which is great. However, this approach is currently tricky in other parts of the code base, such as for views a bit down in the view hierarchy. This has caused many parts of the library to resolve dependencies under the hood, for instance by referring to various `.shared` instances. 

This is not good at all, since dependecies become less obvious, coupling increases and clean testing becomes harder, since dependencies are not injected, but instead resolved by the type itself.

KeyboardKit 7 will most probably make changes to this, and use init injection whenever possible.


## Fewer default parameter values

Default parameter values are great when they simplify things, or apply standard values where they make sense. However, KeyboardKit sometimes uses default parameters values in a way that makes the code more complicated. 

One such example is default view builders, which require a lot of generic handling, which results in a lot more code. Another drawback is that default parameter values can hide important decisions.

KeyboardKit 7 will most probably remove default parameter values, where it will cause the code to become cleaner.


## Gesture changes

KeyboardKit has a `tap` gesture, alongside the various other gestures. Tap is however outdated and will be removed, since `press` and `release` will replace it and provide more granularity.

KeyboardKit may also add new gestures, although this is not yet decided. One such gesture could be `ended`, but perhaps this could risk causing confusion since there is already a `release`.


## Removal of outdated code

KeyboardKit 7 will remove all currently deprecated code, and fix a bunch of on-code deprecated stuff and todos. Make sure to upgrade to KeyboardKit 6.9 before 7.0, to get compiler assistance with many of these changes.


## Conclusion

All in all, moving from KeyboardKit 6 to 7 will let us clean up the library once more, and hopefully in a way that makes it easier to use. There will most probably be more breaking changes, given the initializer changes that have to be made, but this will hopefully end up with code that makes more sense. and holds together better.
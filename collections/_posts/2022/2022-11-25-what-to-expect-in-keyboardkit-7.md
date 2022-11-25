---
title:  What to expect in KeyboardKit 7
date:   2022-11-24 06:00:00 +0100
tags:   code-structure

image:  /assets/headers/icon.png

tweet:  https://twitter.com/GetKeyboardKit/status/1596074336687099905
toot:   https://techhub.social/@keyboardkit/109403855369067876
---

KeyboardKit 6 is still under active development, with a new 6.6 version being released later this week. Keyboard 7 is at least a few months away, but here are some things to expect from it.

![Icon badge]({{page.image}})


## iOS 14

KeyboardKit has targeted iOS 13 since moving from UIKit to SwiftUI a while back. However, as more features are coming to SwiftUI, that require later versions of Apple's platforms, it has become more and more complicated to keep evolving the library while still supporting iOS 13.

One example is the emoji keyboards, which require iOS 14. This means that anyone who uses your KeyboardKit powered keyboards on iOS 13 will not get these keyboards, which can be unexpected, since they are removed dynamically. Another example is the new gesture engine, which requires iOS 14 for some of its underlying functionality.

To clean up the library code, make it easier to maintain and to be able to use newer technologies, KeyboardKit 7 will therefore bump the deployment target to iOS 14, as well as bumping the other platform versions as well.


## Dependency injection changes

KeyboardKit injects dependencies, such as contexts, action handlers, services etc. differently in the different parts of the code base.

For instance, most services take their dependencies as init parameters, which is great. However, this approach is currently tricky in other parts of the code base, such as for views a bit down in the view hierarchy, where it becomes quite tricky to extend init dependencies, since it may require an entire chain of initializers to change.

This has caused many parts of the library to resolve dependencies under the hood, for instance by referring to the `.shared` keyboard input view controller to get access to its services. This is not good at all, since dependecies become less obvious, coupling increases and clean testing becomes harder, since dependencies are not injected, but instead resolved by the type itself.

KeyboardKit 7 will most probably make changes to this, and use init injection whenever possible. If this causes breaking changes to some types, we will use default parameter values as fallback, until the subsequent major version.


## Fewer default parameter values

Default parameter values are great when they simplify things, such as in the example above, or to let you apply standard values where they make sense. However, KeyboardKit currently also uses default parameters to simplify things that causes the code base to become a lot more complicated. 

One such example is using default values for view builders, which require the code to have a lot of generic handling, which results in a lot more code. Also, some default parameter values risk hiding important decisions, such as which style that should be used for a view.

Instead of having default parameter values, the source code and the documentation can help developers discover the types they can use. This will hopefully let us remove a lot of code.


## Extended documentation

Before releasing KeyboardKit 7, most of the information that are currently in readme files will be converted to real articles in the library documentation. This will help with discoverability, since the documentation can link to types, properties, functions etc.


## Conclusion

All in all, moving from KeyboardKit 6 to 7 will let us clean up the library once more, and hopefully in a way that makes KeybaordKit easier to use. There will most probably be more breaking changes, given the initializer changes that have to be made, but this will hopefully end up with code that makes more sense. and holds together better.
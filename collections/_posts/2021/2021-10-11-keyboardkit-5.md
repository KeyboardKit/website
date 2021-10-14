---
title:  KeyboardKit 5.0
date:   2021-10-11 23:00:00 +0100
tags:   general
---

KeyboardKit 5.0 is out! Let's take a look at some of the changes in this new, major release.


## Bye bye UIKit

KeyboardKit no longer contains any UIKit-specific functionality. Sure, there are still UIKit code around (lots of it), but views and functionality that was just there to get a UIKit-based keyboard to work have been removed.

Removing UIKit support has been a two year long process, where SwiftUI support has gone from being a plug-in to the core of the library. Focusing on SwiftUI will make it possible to move the library ahead much faster, resulting in a better library.


## Styling

KeyboardKit 5 tweaks the appearance and style setup and makes it a lot easier to apply custom styles to basic views. As a result, the appearance engine now provide styles and all views and styles work in the same way, which makes it a lot easier to style keyboards.


## Layout

KeyboardKit 5 itroduces a new KeyboardLayout type that makes it a lot easier to specify system keyboard properties like insets, heights etc. for different devices. This has made it possible to configure so that KeyboardKit-based keyboards look a lot more like the native keyboards than they did in previous versions.


## Callouts

KeyboardKit 5 makes it easier to work with callouts, introducing new styles and features to help you customize how callouts are handled. Futhermore, the callout views look a lot more like the native callouts than they did in previous versions.


## Type improvements

KeyboardKit 5 requires Swift 5.5, which lets the built-in types implement protocols like **Codable** and **Identifiable**  with no additional code. As a result, more types implement these protocols than ever before.


## View improvements

KeyboardKit 5 makes the built-in views take their dependencies as init parameters instead of fetching them as environment objects. This makes it much more obvious how a view must be created, reduces complexity and makes working with the views easier than before.

Also, there are new views that help you create more standalone views than ever before.


## Breaking changes

KeyboardKit 5 comes with many breaking changes, but most of them should not affect you if you just use the system keyboard parts of the library. Migrating your existing projects to KeyboardKit 5 should therefore not require a lot of work.
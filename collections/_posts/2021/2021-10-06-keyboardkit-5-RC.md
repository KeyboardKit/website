---
title:  KeyboardKit 5.0 RC
date:   2021-10-06 23:00:00 +0100
tags:   general
---

The KeyboardKit 5.0 RC is out! This post explains what to expect when upgrading your apps to the RC or running the latest demo, as well as when 5.0 can expect to launch.


## Biggest changes

You can view the full release notes in the **v5** feature branch, but to sum up, these are the big changes in KeyboardKit 5.0:

* KeyboardKit no longer contains any UIKit-specific functionality.
* Library types implement protocols like **Codable** and **Identifiable** to greater extent.
* Library views no longer depend on environment objects, which make them easier to use. 
* Styling is a lot more extensive and easier to use, and is used by all built-in views.
* All standard styles can be overwritten to easily be able to adjust the global style.
* Appearances make use of the new styles, which makes styling much easier than before.
* There are a bunch of new extensions, properties, functions and views to make life better.
* There are behavior changes and breaking changes that you may have to account for.

Although there are a BUNCH of breaking changes in this release, this will hopefully most only affect the internal workings of the api. You may notice a few init parameter changes, but it shoudn't be that painful to fix.


## Remaining work

Before releasing 5.0, it will be tested in a few apps to verify that it is production ready. The demo app looks promising, but you never know until you try it out for real.

Furthermore, the documentation must be extended and tweaked to ensure that the docs are updated for the changes in this major version bump.


## Expected launch

Since the RC is now available and looks good, the remaining work should be pretty straightforward. If nothing unexpected comes up, 5.0 should be available within a week.


## Try it out

To try the release candidate for 5.0, you can either grab the updated demo app from the **v5** feature branch, or point your own apps to that branch of KeyboardKit and KeyboardKit Pro.

Please reach out if you have any problems. The GitHub issue pages and Twitter are the best ways to discuss these things.
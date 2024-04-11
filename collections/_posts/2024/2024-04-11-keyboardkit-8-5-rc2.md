---
title:  KeyboardKit 8.5 RC2
date:   2024-04-11 08:00:00 +0100
tags:   releases emojis feedback

image:  /assets/headers/icon.png
assets: /assets/blog/2024/2024-04-11/

rc1: /blog/2024/04/08/keyboardkit-8-5-RC1

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.5.0-rc2
release-pro: https://github.com/KeyboardKitPro/KeyboardKitPro/releases/tag/8.5.0-rc2
---

KeyboardKit 8.5 RC2 is out. This is an update to [8.5.0 RC 1]({{page.rc1}}) that fixes some bugs, adjusts the input & action callout curves to look more native, and adds support for input toolbars.

![KeyboardKit logo]({{page.image}})


## Adjusted callout curves

KeyboardKit 8.5 RC 2 adjusts the input and action callout curves to look more native. For instance, this is how the action callout will look from now on:

![A screenshot of the new callout curve design]({{page.assets}}actioncalloutcurve.png)


## Input toolbar

KeyboardKit Pro 8.5 RC 2 adds support for easily adding an input toolbar to the system keyboard. For instance, here's a numeric toolbar added to an iPad Pro system keyboard:

![A screenshot of the new input toolbar]({{page.assets}}inputtoolbar-ipadpro.png)

You can easily add a toolbar with the new `.keyboardInputToolbarDisplayMode` view modifier. Note that while it has no effect in KeyboardKit, you can use this information to render a toolbar yourself.

This toolbar can present any custom characters, and comes with a predefined `numbers` mode. You can easily add your own display modes as well.


## Conclusion

KeyboardKit Pro 8.5 RC 2 is a significant update to the earlier RC1. Make sure to test it and do reach out if you run into any problems.

Please see the [release notes]({{page.release}}) for a KeyboardKit and [KeyboardKit Pro]({{page.release-pro}}) for a full list of changes. Don't hesitate to reach out if you have any questions.
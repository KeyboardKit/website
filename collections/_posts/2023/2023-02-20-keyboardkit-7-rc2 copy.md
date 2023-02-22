---
title:  KeyboardKit 7 RC 2 is out
date:   2023-02-20 10:00:00 +0100

tags:   releases

image:  /assets/headers/icon.png

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.0-rc2

tweet:  https://twitter.com/getkeyboardkit/status/1626337838382866437?s=20
toot:   https://mastodon.social/@danielsaidi/109876618450642984
---


KeyboardKit 7.0 Release Candidate 2 is out. It fixes some things found in the first version, renames some system keyboard views and makes the system keyboard set up an autocomplete toolbar, to make it even easier and safe to use. This pre-release also fixes memory leaks in the demos.

![Icon badge]({{page.image}})


## Changes from RC 1

The `InputSet` base class has been converted to a `protocol` and all input set types converted to structs. This reduces the amount of references that are passed around, and fits the model better.

The `SystemKeyboard` will now automatically set up an autocomplete toolbar, unless you explicitly tell it not to. This makes it even easier to use, and reduces the risk of memory leaks when you pass in the keyboard controller's autocomplete action. If you use a custom autocomplete toolbar in your keyboard, you *must* set the keyboard's autocomplete toolbar parameter to `.none` to avoid getting multiple autocomplete toolbars.

This version renames some views as well. The `SystemKeyboardActionButtonContent` view has been renamed to `SystemKeyboardButtonContent` and the `SystemKeyboardActionButton` view renamed to ``SystemKeyboardButton``. The old `SystemKeyboardButton` has been removed, since you can just apply the modifier it used to any content.


## Documentation

The online documentation for KeyboardKit 7.0 RC has not changed, since the changes are so small.
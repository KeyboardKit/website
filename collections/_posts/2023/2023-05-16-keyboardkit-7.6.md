---
title:  KeyboardKit 7.6
date:   2023-05-16 08:00:00 +0100
tags:   releases dictation emojis

image:  /assets/headers/icon.png

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.6-rc1

dictation-post: /blog/2023/05/15/dictation-changes
redirect_from: /blog/2023/05/11/keyboardkit-7.6-rc
---

KeyboardKit 7.6 is out! This release fixes a dictation-related problem when submitting apps to the App Store Connect and adds a bunch of dictation and emoji-related features and fixes.

![KeyboardKit logo]({{page.image}})


## Dictation changes

KeyboardKit Pro 7.6 fixes dictation-related App Store submission problems and add more features to the dictation engine. You can read more about the biggest dictation changes [in this post]({{page.dictation-post}}).

If you have upgraded to 7.6 and wonder about new speech recognizer that you must pass in when setting up dictation, you can find a complete speech recognizer [in the same post]({{page.dictation-post}}), as well as in the documentation. The code can't be added to the library, since that is what's causing these problems.


## Emoji improvements

KeyboardKit 7.6 fixes some emoji skin tone bugs. All emojis with a single skin tones will now return the proper skin tone variants and all skin tone variants will return the correct neutral variant.

Emojis with multiple skin tones (e.g. with multiple skin tone supporting persons in the same emoji) will for now return no skin tone variants, until a proper API is developed to support this.


## Gesture improvements

KeyboardKit 7.6 also fixes a bug, where the long press and repeat actions of a button did fire if the button was removed from the view hierarchy before being released.

Since the repeat action kept triggering, and the number of repeat actions accumulating over time, this will hopefully help to improve performance.
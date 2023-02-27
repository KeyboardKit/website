---
title:  Keyboard Typing Explained
date:   2022-11-24 06:00:00 +0100
tags:   gestures

image:  /assets/headers/icon.png
---

KeyboardKit is getting a new gesture engine, which will make the typing experience a lot closer to the one in the native iOS keyboards. But have you ever considered what is involved in typing on a software keyboard? It's actually a quite complex combination of gestures and features. Let's take a look at some of them.

![Icon badge]({{page.image}})

Typing on a keyboard is not as trivial as it may seem at first. It may seem like all you have to do is to handle key presses, but in reality keyboard typings involves a lot of gestures that have to play well play together.

For instance, although a character key will insert the character when it's tapped, it will also display an input callout when it's pressed and open an action callout when it's long pressed, but only if it has any secondary actions. If so, it should *not* insert the character when the button is released, once the action callout has been presented. It must also update the selected action in the action callout when you keep your finger pressed and swipe it sideways, plus hide the callout if you move your finger too far away. Oh, and you should not insert the character if you press the button, but release it outside the button bounds.

Non-character keys may not be as complicated as above, but involve various behavior as well. For instance, the shift button should switch between shift up and shift down when its released, but to caps-lock when it's double-tapped. The space bar should insert a blank space when released, but also enter cursor movement mode when it's long pressed. The backspace button should perform a backspace when it's released, but also start a repeating action it you keep it pressed down. We may also want to perform some actions for all buttons when the gesture ends, such as making sure to reset any ongoing state.

So to summarize, we have identified these gestures: **press**, **release inside**, **release outside**, **drag**, including detecting when a drag starts and ends, **double tap**, **long press**, **repeat** and **gesture end**.

In addition, native keyboards have swipe to type support for many languages, which lets you swipe between characters to let the keyboard guess which word you intended to type. This should cancel any key-specific gestures and not show any input or action callouts, and have to work across keys instead of just handling a single key.

As you can see, typing on a keyboard is a bit more complex than what one may first expect. On top of all these gestures and their features, comes the typing experiecne itself. How does it feel to type on the keyboard? Given how much time we spend with out keyboards, it should feel great as well.

Alhough KeyboardKit has supported all the gestures above for a long time, the typing experience has so far been a bit limited compared to the snappy feeling of the native keyboards. It hasn't been bad, but there has been an almost undetectable delay that has made typing feedback feel not as immediate as in native keyboards, in a way that has been hard to reason about. The reason for this has been caused by the many gestures that the KeyboardKit gesture engine has involved to get the gestures above working. 

It's therefore a pleasure to announce that a **brand new gesture engine** is coming in KeyboardKit 6.6. The old engine has been rewritten from scratch and now works with *one single gesture*, which means that feedback will be immediate and there is no risk of conflicting gestures. For scroll views, which are used in emoji keyboards, there is a toggle that makes the gestures a bit less responsive, which is needed to make the gestures not conflict with the scroll view gestures.

Since typing is at the heart of the keyboard experience, the new gesture engine will most probably be feature toggled and force you to actively enable it. Once we have verified that it works well, we can then remove the feature toggle.

KeyboardKit 6.6 is planned for release in early December.
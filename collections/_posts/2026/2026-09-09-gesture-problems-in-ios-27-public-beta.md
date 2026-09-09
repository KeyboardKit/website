---
title:  Gesture problems in iOS 27 beta
date:   2026-09-09 06:00:00 +0100
tags:   apple-bugs release gestures

assets: /assets/blog/26/0909/
image: /assets/blog/26/0909/image.jpg
image-show: 0

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/10.9.4
---

There are some subtle gesture problems with the keyboard buttons in iOS 27 beta, where typing feels a bit off. This post describes the problem, how to reproduce it, and announces a possible solution.


## The Problem

A developer recently reported laggy typing in iOS 27 beta. We had a hard time pinning it down, but we can now reproduce the problem. It's obvious once you know what to look for, but it was hard to get there.

Turns out that keyboard gestures can randomly lag in iOS 27 beta. Press the same key multiple times, and the press action is sometimes delayed to when you release the key, or after a ~1s delay.

Since the press action still triggers, things still appear to work. Typing just feels "off", but the randomness makes things feel mostly fine until you know what to look for, at which the problem if painfully obvious.

## Reproducing the Problem

We have reproduced this problem in the [App Store app]({{site.urls.appstore}}), which uses KeyboardKit 10.9.3. It can be reproduced on an iPhone 16 Pro running iOS 27 beta, but not on an iPhone 14 running iOS 26.6.

## A Possible Solution

The [KeyboardKit 10.9.4]({{page.release}}) patch tries to fix this problem by rebuilding the gesture handling from scratch. The new gesture engine feels a lot snappier, with the same public API as before, which means no change on your end.

Since iOS 27 will be announced today, and we realized too late how much this affects the typing, we must take a leap of faith and release the new gesture engine before getting your feedback.  

However, we DO need your feedback! We'd love to hear what you think about it, whether you think it's as good as we do or utterly dislike it, or if you run into any problems. Please [send us an email](mailto:info@keyboardkit.com) and tell us. 
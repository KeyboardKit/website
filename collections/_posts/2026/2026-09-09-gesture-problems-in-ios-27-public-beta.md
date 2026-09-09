---
title:  Gesture problems in iOS 27 beta
date:   2026-09-09 06:00:00 +0100
tags:   apple-bugs

assets: /assets/blog/26/0909/
image: /assets/blog/26/0909/image.jpg
image-show: 0
---

There are some subtle gesture problems with the keyboard buttons in iOS 27 beta, where typing feels a bit off. This post describes the problem and how to reproduce it.


## The Problem

A developer recently reported laggy typing in iOS 27 beta. We had a hard time pinning it down, but we can now reproduce the problem. It's obvious once you know what to look for, but it was hard to get there.

Turns out that keyboard gestures can randomly lag in iOS 27 beta. Press the same key multiple times, and the press action is sometimes delayed to when you release the key, or after a ~1s delay.

Since the press action still triggers, things still appear to work. Typing just feels "off", but the randomness makes things feel mostly fine until you know what to look for, at which the problem if painfully obvious.

## Reproducing the Problem

We have reproduced this problem in the [App Store app]({{site.urls.appstore}}), which uses KeyboardKit 10.9.3. It can be reproduced on an iPhone 16 Pro running iOS 27 beta, but not on an iPhone 14 running iOS 26.6.

## The Way Forward

We are actively working on the problem to see if we can pin down what's causing it. If we do, we will release it a KeyboardKit 10.9 patch. We will also upgrade to iOS 27 later tonight, to see if it fixes the problem.

---
title:  iOS 26.4 Host Application Bug
date:   2026-03-02 06:00:00 +0100
tags:   ios-bugs

image-show: 0

toot:
bsky:

issue: https://github.com/KeyboardKit/KeyboardKit/issues/1014
---

A bug has been discovered in the iOS 26.4 betas, that causes the host application bundle ID value to become empty.

## The Issue

In iOS 26.4 beta, the `hostApplicationBundleId` becomes empty. This affects the keyboard's ability to identify which app is currently using the keyboard, which impacts features that depend on knowing the host application context.

When the host application bundle ID becomes empty, keyboards may not be able to:

- Provide app-specific customizations or behaviors.
- Implement context-aware features that depend on knowing the host app.
- Navigate back to the keyboard from the main application, for instance when starting dictation.

Multiple keyboard developers, including those not using KeyboardKit, have reported encountering this same behavior, which means that something has changed at the iOS system level.

## What We Know

The issue has been documented and is being tracked in the KeyboardKit GitHub repository. For detailed information, technical discussion, and updates on this issue, please visit 
[this bug report]({{page.issue}}).

## Workarounds and Next Steps

While we look at alternatives, or until Apple issues a fix, developers experiencing this issue should:

- Implement graceful fallbacks when the bundle ID is empty.
- Avoid relying solely on the host application bundle ID for critical functionality.
- Monitor the GitHub issue for community-discovered workarounds and updates.

We'll continue monitoring the situation and will update you as more information becomes available or when Apple releases a fix. 

If you're experiencing this issue in your app, please share your findings in the [GitHub issue]({{page.issue}}) to help the community better understand and work around this problem.

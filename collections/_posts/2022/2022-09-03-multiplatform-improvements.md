---
title:  Multi-platform improvements
date:   2022-09-02 08:00:00 +0100
tags:   multi-platform
---

KeyboardKit 6.4 will unlock a bunch of types, extensions, mocks and tests for all platforms, which will give you more tools if you develop for macOS, tvOS and watchOS.

![Icon badge]({{page.image}})

One big focus for KeyboardKit 7 is to be fully platform-agnostic. This means that with KeyboardKit 7, you will be able to build most parts of the library for all available platforms (iOS, macOS, tvOS and watchOS).

The way we will reach this goal, is by removing not needed couplings to UIKit and replace them with platform-agnostic protocols. This means that we will for instance not work towards UITextDocumentProxy anymore, but rather a TextDocumentProxy protocol, which will be implemented by UITextDocumentProxy but can be implemented by any custom type as well.

KeyboardKit 6.4 already implements a lot of these changes, but there are many more to implement before we can start removing most of the OS checks.
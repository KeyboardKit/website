---
id: about-terminology
title: Terminology
layout: page
permalink: /about/terminology

page-class: glass-panel bg-1

hero-icon: /assets/heros/icon.png
hero-title: Custom Keyboard iOS Terminology
hero-description: Important Custom Keyboard Concepts 

description: This page describes custom iOS keyboard terminology

sponsor: https://github.com/sponsors/danielsaidi

stockholm: https://www.google.com/maps/place/Stockholm,+Sweden/@59.3262131,17.8172499,11z/data=!3m1!4b1!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808!16zL20vMDZteHM
---

{% include kankoda/buttons/back.html url="/about" title="About" %}



# Custom iOS Keyboard Extension Terminology Guide

Understanding the key concepts and limitations when developing custom keyboards for iOS.

## Keyboard Extension

A custom iOS keyboard extension is an app extension that can replace the system keyboard in iOS applications. Unlike regular apps, a keyboard extension runs within the context of another app and provide text input functionality.

Custom keyboards can offer specialized input methods, enhanced autocorrection, emoji keyboards and suggestions, or entirely different input paradigms like swipe typing or voice-to-text conversion.

## Text Document Proxy

A custom keyboard extension communicates with the host application through the Text Document Proxy, which serves as the primary interface for text manipulation. 

The proxy provides methods to insert text, delete characters, and read limited context around the cursor position. The proxy acts as a secure intermediary that prevents keyboards from accessing the full content of text fields, maintaining user privacy while still allowing essential functionality like autocorrection and context-aware suggestions.

## Full Access

A custom keyboard extension is very limited from start, but can request Full Access to unlock more capabilities beyond basic text input. 

With Full Access enabled, a keyboard can access network resources, use location services, access the device's dictionary, and perform more sophisticated text processing. However, requesting Full Access requires explicit user consent and triggers additional privacy warnings, as it allows the keyboard to potentially transmit typed content over the network.

Many users decline Full Access due to privacy concerns, so developers must design keyboards that function effectively in both modes.

## Memory Cap

A custom keyboard extension is memory capped at approximately 60-70 MB based on the device and OS version. This means that keyboard extensions must be extremely efficient with memory usage, as exceeding this limit results in immediate termination by the system. 

Developers need to carefully manage resources, avoid memory leaks, and implement lazy loading for assets like dictionaries or machine learning models. The memory constraint is particularly challenging for keyboards that include large language models, extensive dictionaries, or rich media.

## Main/Container Application

The container app is the main app that houses the keyboard extension, while the extension itself is the component that actually provides keyboard functionality. The container app typically handles extension management, settings configuration, user onboarding, and App Store distribution. 

Communication between the container app and extension is limited and must use specific inter-process communication mechanisms. This separation ensures that keyboard extensions remain lightweight while allowing the main app to provide richer functionality and user interfaces.

The keyboard extension can open the main application to perform certain operations, like providing a full screen UI for keyboard settings, accessing the device microphone to perform dictation, etc.

## Host Application Context

The host application context refers to the environment in which the keyboard extension operates. Different apps may have varying text input requirements, secure text fields, or custom input traits that affect keyboard behavior. 

A keyboard must adapt to context clues like keyboard type (email, numeric, URL), autocorrection preferences, and secure input modes. Understanding and responding appropriately to the host context is crucial for providing a seamless user experience across different applications.

## Sandboxing and Security

iOS keyboard extensions operate within a heavily sandboxed environment that restricts access to system resources and user data. This sandboxing ensures that malicious keyboards cannot access sensitive information from other apps or the system. 

Keyboards cannot directly access the file system, contact lists, or other app data without explicit permissions. The sandbox also prevents keyboards from launching other apps or accessing certain system APIs, maintaining the overall security posture of the iOS ecosystem.

## Input View Controller Lifecycle

The Input View Controller lifecycle governs how keyboard extensions are loaded, displayed, and terminated. Unlike regular view controllers, keyboard extensions have a unique lifecycle that includes events like viewWillAppear when switching between apps, memory warnings that require immediate response, and background/foreground transitions. 

Understanding this lifecycle is essential for proper resource management, state persistence, and ensuring the keyboard remains responsive across different usage scenarios.

## Auto Layout and Dynamic Sizing

Keyboard extensions must support dynamic sizing across different device orientations, screen sizes, and accessibility settings. Auto Layout becomes critical for ensuring keyboards display correctly on various iPhone and iPad models, from compact phones to large tablets. 

Keyboards must also respond appropriately to Dynamic Type settings and accommodate users with accessibility needs, including larger text sizes and alternative input methods.

## KeyboardKit

[KeyboardKit](/) is a 3rd party SDK by [Kankoda Sweden AB](https://kankoda.com) that makes it easy to create a custom iOS keyboard extension. It has many [features](/features) that addresses the various challenges mentioned above.
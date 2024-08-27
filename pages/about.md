---
id: about
title: About
layout: page
permalink: /about

image:  /assets/headers/icon.png

hero: /assets/heros/icon.png
hero-title: About KeyboardKit

description: KeyboardKit helps you build custom keyboards for iOS, macOS, tvOS and watchOS, using native technologies like Swift and SwiftUI.

sponsor: https://github.com/sponsors/danielsaidi

stockholm: https://www.google.com/maps/place/Stockholm,+Sweden/@59.3262131,17.8172499,11z/data=!3m1!4b1!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808!16zL20vMDZteHM
---

KeyboardKit is an [open-source](/open-source) software library (SDK) that lets you build custom keyboards for iOS, macOS, tvOS, watchOS & visionOS, using native technologies like [Swift]({{site.urls.swift}}) & [SwiftUI]({{site.urls.swiftui}}).


## What is a custom keyboard?

A custom iOS keyboard extension is an app that you ship together with your main app. It can then replace the system keyboard in any other app, by using the 🌐 key while typing.

Keyboard extensions are the *only* apps that can be used directly within other apps in iOS, so it is a unique way to let people use your app and its features within other apps.


## What can a custom keyboard do?

Keyboard extensions can render any user interface that you want, and can resize to fit the content it needs to display. This means that it can be taller than the native keyboard.

Keyboard extensions receive a *document proxy*, which is used to communicate with the main app. The proxy can be used to read and modify text, move the text input cursor, etc.

Keyboard extensions can be used to provide features like custom autocomplete and spell-checking,  custom layouts and design, text and typing analysis, AI-based typing support and prompting, etc.


## What can a custom keyboard *not* do?

Keyboard extensions are pretty limited, and while KeyboardKit extends them with many additional capabilities (read more further down) some things are just not possible.

For instance, unlike native keyboards, keyboard extensions can't draw outside their bounds. This means that views like input and action callouts must render within the keyboard frame.

Also, keyboard extensions are memory capped at ~70 MB (depending on hardware and OS version), which means that you can't load memory expensive AI models into them.

Keyboard extensions must also open their main app to perform certain actions, such as accessing the microphone to perform dictation. KeyboardKit has tools that make this easier.

Finally, keyboard extensions can only send text to the currently active app! The text document proxy does not support images, which means that a user must manually copy and paste.

Regardless of these limitations, there are ways for the main app and its keyboard to communicate, which means that you can probably find innovative ways to use your apps features in a keyboard. 


## Why use KeyboardKit?

Apple's native keyboard APIs are *very* limited, and basically only lets you define a custom view and interact with the currently selected text field in very limited ways.

KeyboardKit extends these APIs with a lot more [features](/features) and lets you create a fully customizable keyboard with just a few lines of code, using Swift & SwiftUI for a modern development experience.

KeyboardKit provides you with a full-fledged `KeyboardView` that mimics a native keyboard. It can be customized and styled to great extent, and customize how each key is handled.

With KeyboardKit, you can have a native-looking keyboard up and running in minutes, and easily customize it to fit your needs.

KeyboardKit is [open-source]({{site.urls.github}}) and completely free to use. You can also upgrade to [KeyboardKit Pro](/pro) to unlock powerful [pro features](/pro#features) like [{{site.locale_count}} languages](/locales), autocomplete, AI-enabling features, etc.


## Who uses KeyboardKit?

KeyboardKit is open-source, with over 1,5k stars on [GitHub](/open-source). This makes it one of the most popular open-source SDKs for creating custom iOS keyboards.

KeyboardKit is used by enterprises, smaller companies, startups, universities and indie developers, who use it to improve the typing experience in some languages, AI-powered keyboards that bring powerful prompting into any app, langtech enabled keyboards, etc.

Please see some of the [case studies](/blog/#case-studies) on the KeyboardKit blog for inspiration. Feel free to [reach out](mailto:{{site.email}}) if you want us to share your keyboard story and feature your company and product on the blog.


## Who have created KeyboardKit?

KeyboardKit is developed by [Kankoda](https://kankoda.com) in lovely [Stockholm, Sweden]({{page.stockholm}}). We are experts in Swift & SwiftUI and software development for iOS, macOS, watchOS, tvOS & visionOS. 

Don't hesitate to [reach out](mailto:{{site.email}}) if you need help with anything or want to build something amazing.
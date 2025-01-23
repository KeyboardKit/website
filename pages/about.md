---
id: about
title: About
layout: page
permalink: /about

hero-image: /assets/heros/icon.png
hero-title: About KeyboardKit

description: KeyboardKit lets you build amazing keyboard extensions with Swift & SwiftUI

sponsor: https://github.com/sponsors/danielsaidi

stockholm: https://www.google.com/maps/place/Stockholm,+Sweden/@59.3262131,17.8172499,11z/data=!3m1!4b1!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808!16zL20vMDZteHM
---

KeyboardKit is an [open-source](/open-source) software library (SDK) that lets you build custom keyboards for iOS, macOS, tvOS, watchOS & visionOS, using native technologies like [Swift]({{site.urls.swift}}) & [SwiftUI]({{site.urls.swiftui}}).


## What is a custom keyboard?

A custom iOS keyboard extension is an app extension that you ship together with your main app. It can then replace the system keyboard in any other app, by using the 🌐 key while typing.

Keyboard extensions are the *only* apps that can be used directly with other apps in iOS, and are as such unique ways to let people use your app and its features within other apps.


## What can a custom keyboard do?

Keyboard extension can render any user interface you want, and can resize to fit their content. This means that they can be taller or shorter than the native keyboard.

Keyboard extensions receive a *document proxy*, which is used to communicate with the active app. The proxy can be used to read and modify text, move the text input cursor, etc.

Keyboard extensions can provide custom autocomplete & spell-checking, custom layouts & design, sophisticated text analysis, AI-based prompting, etc.

Keyboard extension can also request Full Access to access the pasteboard, perform network calls, etc. This open up even more capabilities to your keyboard.


## What can a custom keyboard *not* do?

Keyboard extensions are pretty limited, and while KeyboardKit extends them with many additional capabilities (read more down) some things are just not possible.

For instance, keyboard extensions can't draw outside their bounds. This means that views like input and action callouts must render within the keyboard frame.

Keyboard extensions are memory capped at ~70 MB (depending on hardware & OS), which means that you can't load memory large AI models into them.

Keyboard extensions must also open their main app to perform certain actions, such as accessing the microphone to perform dictation. KeyboardKit has tools that make this easier.

Finally, keyboard extensions can only send text to the currently ctive app! The text document proxy doesn't support images, which means that a user must manually copy and paste images.

Regardless of these limitations, there are ways for the main app and its keyboard to communicate, which means that you can probably find innovative ways to use your apps features in a keyboard. 


## Why use KeyboardKit?

Apple's keyboard APIs are *very* limited, and basically only lets you define a custom view and interact with the currently selected text field in very limited ways.

KeyboardKit extends these APIs with many more [features](/features) to let you create customizable keyboards with just a few lines of code, using modern technologies lilke Swift & SwiftUI.

KeyboardKit provides you with a `KeyboardView` that mimics a native keyboard. It can be customized and styled to great extent, and lets you get a native-looking keyboard up and running in minutes.

KeyboardKit is [open-source]({{site.urls.github}}) and completely free to use. You can also upgrade to [KeyboardKit Pro](/pro) to unlock powerful [pro features](/pro#features) like [{{site.locales.count}} languages](/locales), autocomplete, AI-enabling features, etc.


## Who uses KeyboardKit?

KeyboardKit is open-source, with over 1,5k stars on [GitHub](/open-source). This makes it one of the most popular open-source SDKs for creating custom iOS keyboards.

KeyboardKit is used by enterprises, smaller companies, startups, universities and indie developers, who use it to improve the typing experience, bring AI-powered prompting to any app, etc.

Please see some of the [case studies](/case-studies) on the KeyboardKit blog for inspiration. Feel free to [reach out](mailto:{{site.email}}) if you want us to share your story and feature your company and product.


## Who have created KeyboardKit?

KeyboardKit is developed by [Kankoda](https://kankoda.com) in [Stockholm, Sweden]({{page.stockholm}}). We are experts in Swift & SwiftUI and software development for iOS, macOS, watchOS, tvOS & visionOS. 

Don't hesitate to [reach out](mailto:{{site.email}}) if you need help with anything or want to build something amazing.
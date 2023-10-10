---
title: Navigation
---

Keyboards sometimes have to open urls, trigger deeplinks or navigate from the keyboard to the main app. This is however hard, since keyboard extensions can't use `UIApplication.main`.

KeyboardKit therefore has a ``KeyboardUrlOpener`` that can open any URLs from a keyboard extension, without having to use `UIApplication.main`.

[KeyboardKit Pro][Pro] unlocks a `PreviousAppNavigator` that can be used to navigate back to the previously opened app, e.g. after dictation. You can read more about it further down.



## How to open URLs from the keyboard extension

The ``KeyboardUrlOpener`` class can be used to open any URL from a keyboard without `UIApplication`.

The class has a ``KeyboardUrlOpener/shared`` instance that can be used from anywhere:

```swift
let url = URL(string: "https://keyboardkit.com")
try? KeyboardUrlOpener.shared.open(url)
```

This is for instance used by KeyboardKit Pro dictation to navigate from the keyboard to the main app.



## 👑 Pro features

[KeyboardKit Pro][Pro] unlocks a `PreviousAppNavigator` that can be used to navigate back to the previous app, e.g. after performing dictation in the main app and having to navigate back to the keyboard.

This is a protocol, so any type can implement it:

```swift
struct ContentView: View, PreviousAppNavigator {

    var body: some View {
        Button("Go back") {
            do {
                try navigateBackToPreviousApp()
            } catch {
                print(error)
            }
        }
    }
}
```

As of iOS 17, the `PreviousAppNavigator` doesn't work anymore. Make sure to adjust your UI accordingly, until it's replaced by a working solution.


[Pro]: /pro   

---
title: Status
---

KeyboardKit has ways to check the keyboard status, e.g. if a keyboard is enabled in System Settings, if Full Access is enabled, if a keyboard is actively being used, etc.

This information can be used to make the main app help users to set up their keyboard properly. 

[KeyboardKit Pro][Pro] unlocks [status-related views & utilities](#pro) that can be used to quickly add this support to your keyboard app.


## Namespace

KeyboardKit has a ``KeyboardStatus`` namespace that contains status-related types and views, like the ``Label`` that can be used to visualize a certain status value, as well as a complete status ``Section``.



## Context

The observable ``KeyboardStatusContext`` can be used to observe the state of any keyboard:

```swift
struct MyView: View {

    @StateObject
    var status = KeyboardStatusContext(bundleId: "com.myapp.keyboard")

    var body: some View {
        VStack {
            Text("Enabled: \(status.isKeyboardEnabled.description)")
            Text("Active: \(status.isKeyboardActive.description)")
            Text("Full Access: \(status.isFullAccessEnabled.description)")
        }
    }
} 
```

The context is observable, so any changes immediately causes the view to refresh. It also supports bundle ID wildcards, which let you can inspect multiple keyboards with a single instance:

```
@StateObject
var status = KeyboardStatusContext(bundleId: "com.myapp.*")
```


## Status Inspector

The ``KeyboardStatusInspector`` protocol that powers the context can be implemented by any type, to make it able to inspect the status of any keyboard at any time.


## Views

A ``KeyboardStatus.Label`` can display if a keyboard has been enabled, if Full Access is enabled, etc.

<img width="450" alt="A keyboard status label" src="{{page.assets}}keyboardstatuslabel.jpg" />
        
The view can be wrapped in a SwiftUI `Link` to System Settings. It supports custom texts, icons, etc.


<a name="pro">
## 👑 KeyboardKit Pro

KeyboardKit Pro unlocks additional status views & utilities, like a complete ``KeyboardStatus.Section``:

<img width="450" alt="A keyboard status section" src="{{page.assets}}keyboardstatussection.jpg" />

The view is used by the ``KeyboardApp.HomeScreen`` component, and can be used as a standalone view.



[Pro]: /pro
---
title: External Keyboards
---

It's important for a keyboard extension to be able to detect if an external keyboard is connected, since this will causes it to stop working as expected 

For instance, the text document proxy will not update while you type on an external keyboard, which makes it impossible to provide features like autocomplete.

[KeyboardKit Pro][Pro] therefore unlocks tools to help you detect if an external keyboard is connected.


## 👑 Pro features

KeyboardKit has an `ExternalKeyboardContext` that detects whether or not an external keyboard is connected to the device. To use it, just set it up as an observed object.

```swift
struct CustomKeyboardView: View {

   @StateObject
   var context = ExternalKeyboardContext()

   var body: some View {
       VStack {
           Text("Is an external keyboard connected?")
           Text(stateDescription)
       }.environmentObject(context)
   }

   var stateDescription: String {
       context.isExternalKeyboardConnected.description
   }
}
```

> Warning: When using a Apple Smart Keyboard Folio, this context will consider the keyboard to be connected even when it's just snapped on to the device, even when it's not actively being used. This should be fixed.



[Pro]: /pro

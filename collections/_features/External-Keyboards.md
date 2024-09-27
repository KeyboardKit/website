---
title: External Keyboards
---

A keyboard extension should be able to detect if an external keyboard is connected, since it causes it to stop working as expected.  For instance, the text document proxy will not update properly.

Keyboard extensions have little native support for this. It's pretty tricky to detect external keyboards and involves other frameworks.

[KeyboardKit Pro][Pro] therefore unlocks [tools](#pro) to help you detect if an external keyboard is connected.


## More Information

Keyboard extensions behave strangely when you type on an external keyboard. For instance, the extension will stop receiving information about when the text changes.

Using a scheduled timer to continuously check the text doesn't help, since the text document proxy will not update until you interact with the keyboard extension or move the text input cursor.

One way to force the proxy to update is to move the text cursor with a fixed interval, to make the keyboard read the current text. This may interfere however with the typing, so it's not encouraged.

Due to this limitation, it may be better to collapse the keyboard to a compact toolbar when an external keyboard is connected. You can always add a button that expands the keyboard again.


<a name="pro">
## 👑 KeyboardKit Pro

KeyboardKit has an ``ExternalKeyboardContext`` that can detect if an external keyboard is connected, such as the Smart Keyboard Folio, Magic Keyboard, Bluetooth keyboards, etc.

Unlike other contexts, this context is not automatically setup when the keyboard launches. To use it, just set it up as an observed object:

```swift
struct CustomKeyboardView: View {

   @StateObject
   var context = ExternalKeyboardContext()

   var body: some View {
       VStack {
           Text("Is an external keyboard connected?")
           Text(context.isExternalKeyboardConnected.description)
       }
       .environmentObject(context)
   }
}
```

In the code above, we also inject the context into the view hierarchy as an environment object, to make its state available to other views.


[Pro]: /pro

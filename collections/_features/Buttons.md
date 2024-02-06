---
title: Buttons
---

KeyboardKit has some buttons that can be used to mimic native keyboard buttons. You don't have to use these buttons, but it can help speed up development.



## Keyboard Button

The ``KeyboardButton`` namespace has style-based views that help you mimic native keyboard buttons:

- ``Button`` renders actions and custom view as a keyboard button.
- ``Content`` renders the keyboard button content for an action.
- ``Key`` renders a keyboard button key shape.
- ``Shadow`` renders a keyboard button bottom shadow.
- ``SpaceContent`` renders space-specific keyboard button content.
- ``Title`` renders a keyboard button title.

You can also use the `.keyboardButton` view modifier to convert any view to a keyboard button.



## Next Keyboard Button

The ``NextKeyboardButton`` can be used to trigger the system's keyboard switcher function, which selects the next keyboard when tapped and shows a keyboard menu when long pressed.

![NextKeyboardButton]({{page.assets}}nextkeyboardbutton-250.jpg)

---
title: Feedback
---

Feedback is an important part of the typing experience, where the keyboard can trigger audio and haptic feedback when a user taps on a key or performs an action.

KeyboardKit makes it easy to trigger feedback when the user interacts with the keyboard, as part of other events, etc.


## Namespace

KeyboardKit has a ``Feedback`` namespace that contains feedback types, like ``Audio`` & ``Haptic`` enums that define available feedback types, ``AudioEngine`` & ``HapticEngine``, that trigger feedback, etc. 


## Context

KeyboardKit has an observable ``FeedbackContext`` that can be used to configure feedback for various actions, such as which configuration to use for audio and haptic feedback.


## Services

In KeyboardKit, a ``FeedbackService`` can be used to trigger audio & haptic feedback as users interact with the keyboard. The ``KeyboardActionHandler`` protocol also implements this protocol.


## Feedback Types

The ``Audio`` enum defines audio feedback types, like ``input``, ``system``, ``delete``, etc. while the ``Haptic`` enum defines haptic feedback types, like ``success``, ``warning``, etc. 


[Pro]: /pro

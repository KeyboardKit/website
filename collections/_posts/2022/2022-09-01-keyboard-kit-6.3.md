---
title:  KeyboardKit 6.3
date:   2022-08-26 08:00:00 +0100
tags:   releases autocomplete
---

KeyboardKit 6.3 is out, with two new locales, a bunch of locale-specific input sets, new input sets for QWERTY, QWERTZ and AZERTY, standard numeric and symbolic input sets, new locale and keyboard layout utilities and more standard KeyboardKit Pro autocomplete provider improvements.


## New locales

KeyboardKit 6.3 adds Hawaiian 🇺🇸 and Swahili 🇸🇿 keyboard locales. This brings the total number of keyboard locales to 53.


## Input sets

There are new KeyboardKit extensions to the create QWERTY alphabetic input sets as well as standard numeric and symbolic ones. KeyboardKit Pro then adds input sets for QWERTZ and AZERTY, as well as input set builders for all keyboard locales.


## KeyboardKit Pro adjustments

The standard autocomplete provider has been adjusted to handle lexicon suggestions in a better way. It also adjusts the layout of the Kurdish Sorani (Arabic) keyboard.


## More utilities

KeyboardKit 6.3 adds more functionality to the keyboard context and the layout provider base classes, which makes it easier to define layouts in a uniform way.


## Conclusion

KeyboardKit 6.3 is another pretty huge release, that adds more locales and convenience functions and improves a bunch of small things. The input sets will make it easier to use the input information in more ways than before, and being able to inherit other sets will make the various implementations cleaner and more maintainable in the future.
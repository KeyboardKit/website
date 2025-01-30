---
title: Themes
hero-emoji: 🍭

redirect_from: 
  - /themes
  - /pro/themes
---

KeyboardKit is fully [customizable](/customization) and lets you style & customize your keyboard in any way you like.

KeyboardKit has a ``KeyboardTheme`` type that is also a namespace for theme-related types and views, an observable ``KeyboardThemeContext``, and a `KeyboardTheme.Settings`  with persisted settings.

A `KeyboardTheme` can define some or all styles that are used within a keyboard, such as background colors and gradients, button colors, borders, shadows, etc.


## 👑 Pro Features

KeyboardKit Pro comes with many predefined themes, as well as theme-specific styles that can be used to vary parts of a theme. You can use a `KeyboardTheme.Shelf` to list and pick available themes.

Here is a list of all the themes that come with the theme engine, including all the pre-defined styles:

<section class="themes">
{% for theme in site.data.themes %}
    <h3>{{theme.name}}</h3>
    {% include kankoda/grid/grid.html items=theme.styles type="themes" image-class="keyboard-theme" image-folder="/assets/themes/" image-extension="jpg" %}
{% endfor %}
</section>

You can use any of the themes that come with the engine, and even create your own. A theme can also provide a theme-specific style to make it easier to customize just that specific theme.


[Pro]: /pro
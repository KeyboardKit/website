---
title: Themes

redirect_from: 
  - /themes
  - /pro/themes
---

Although KeyboardKit is fully [customizable](/customization) and lets you style and adjust your keyboard in any way, [KeyboardKit Pro][pro] unlocks a [theme engine](#pro) that makes it even easier to style your keyboards.


## Keyboard Theme Namespace

KeyboardKit has a ``KeyboardTheme`` type that is also a namespace for theme-related types and views, like ``Shelf`` and ``ShelfItem``, which are unlocked by KeyboardKit Pro.


## Keyboard Theme Context

KeyboardKit has an observable ``KeyboardThemeContext`` that persistent, observable settings, such as the current ``theme``.


## 👑 Pro Features

A `KeyboardTheme` can define some or all styles that are used within a keyboard, such as background colors and gradients, button colors, borders, shadows, etc.

KeyboardKit Pro comes with many predefined themes and style variations, which can be used to vary parts of each theme. You can use a `KeyboardTheme.Shelf` to list and pick available themes.

Here is a list of all the themes that come with the theme engine, including all the pre-defined styles:

<section class="themes">
{% for theme in site.data.themes %}
    <h3>{{theme.name}}</h3>
    {% include kankoda/grid/grid.html items=theme.styles type="themes" image-class="keyboard-theme" image-folder="/assets/themes/" %}
{% endfor %}
</section>

You can use any of the themes that come with the engine, and even create your own. A theme can also provide a theme-specific style to make it easier to customize just that specific theme.


[Pro]: /pro
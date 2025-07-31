---
title: Themes
description: Flexible keyboard themes
hero-emoji: 🍭

redirect_from: 
  - /themes
  - /pro/themes
---

KeyboardKit Pro unlocks a theme engine, with many themes, an observable context and auto-persisted settings. A theme can define many styles, such as colors, borders, shadows, corner radii, etc.


## 👑 KeyboardKit Pro

KeyboardKit Pro comes with many predefined themes, as well as style variations for each theme. You can create custom themes and use a `KeyboardTheme.Shelf` to list and pick available themes.

<section class="themes">
{% for theme in site.data.themes %}
    <h3>{{theme.name}}</h3>
    {% include kankoda/grid/grid.html items=theme.styles type="themes" image-class="keyboard-theme" image-folder="/assets/themes/" image-extension="jpg" %}
{% endfor %}
</section>


## Custom Themes

You can use any of the themes that come with the engine, and even create your own. A theme can also provide a theme-specific style to make it easier to customize just that specific theme.


[Pro]: /pro
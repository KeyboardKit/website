---
title: Themes

redirect_from: 
  - /themes
  - /pro/themes
---

Although KeyboardKit is fully [customizable](/customization) and lets you style and adjust your keyboard in any way you like, [KeyboardKit Pro](/pro) unlocks a theme engine that makes this even easier.

You can use any of the themes that come with the engine, and even create your own. A theme can also provide a theme-specific style to make it easier to customize just that specific theme.

Here is a list of all the themes that come with the theme engine, including all the pre-defined styles:

<section class="themes">
{% for theme in site.data.themes %}
    <h3>{{theme.name}}</h3>
    {% include kankoda/grids/grid.html items=theme.styles type="themes" image-class="keyboard-theme" image-folder="/assets/themes/" %}
{% endfor %}
</section>
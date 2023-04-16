---
layout: page
title: Themes
permalink: /themes
hero: themes

description: KeyboardKit Pro unlocks a theme engine with many pre-defined themes.
---

Although KeyboardKit is fully customizable and lets you change the appearance of your keyboard in any way you like, [KeyboardKit Pro](/pro) unlocks a theme engine that makes this even easier.

You can create your own themes or use the ones that come with the engine. A theme can also have style variations to let you adjust parts of the theme.

Here is a list of all the themes that come with the theme engine, including all the pre-defined styles:

<section class="themes">
{% for theme in site.data.themes %}
    <h3>{{theme.name}}</h3>
    {% include kankoda/grids/grid.html items=theme.styles type="themes" image-class="keyboard-theme" %}
{% endfor %}
</section>
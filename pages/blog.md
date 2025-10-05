---
layout: blog
title: Blog
permalink: /blog/

page-class: glass-background bg4
---

<div class="searchbar-header">
  <h1>Blog</h1>

  {% include kankoda/search/searchbar %}
</div>

<div class="blog list">
    {%- include kankoda/tags/tag-list.html tags=site.tags firstmost="releases,pro" -%}

    {% for post in site.posts %}
    {% include kankoda/blog/list-item.html post=post %}
    {% endfor %}
    {%- include kankoda/tags/tag-scripts.html -%}
</div>
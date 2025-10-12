---
layout: blog
title: Blog
permalink: /blog/

page-class: glass-background bg4 paper
---

<div class="searchbar-header">
  <h1>Blog</h1>
  {% include kankoda/search/searchbar class="glass-panel prominent" %}
</div>

<div class="blog list">
  {%- include kankoda/tags/list tags=site.tags firstmost="releases,pro" class="collapsed" -%}
  {% include kankoda/tags/list-toggle %}
  
  <a name="tag-item-list"></a>
    {% for post in site.posts %}
      {% include kankoda/blog/list-item post=post %}
    {% endfor %}
    {%- include kankoda/tags/scripts -%}
</div>
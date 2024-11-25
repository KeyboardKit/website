---
layout: blog
title: Blog
permalink: /blog/
---

<h1>Blog</h1>

<div class="blog list">
    {%- include kankoda/tags/list.html tags=site.tags firstmost="releases,pro,promos" -%}
    {% for post in site.posts %}
    {% include kankoda/blog/list-item.html post=post %}
    {% endfor %}
    {%- include kankoda/tags/scripts.html -%}
</div>
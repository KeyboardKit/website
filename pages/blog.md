---
layout: default
title: Blog
permalink: /blog/
---

<h1>Blog</h1>

<div class="blog">
    {%- include kankoda/tags/list.html tags=site.tags -%}
    {%- include kankoda/blog/post-list.html posts=site.posts -%}
    {%- include kankoda/tags/scripts.html -%}
</div>
<div class="paper">
  <hr />
</div>

{% assign title = include.title | default: "Our SDKs" %}
{% include products/grid-section.md title=title products=site.data.sdks all-url="/sdks" %}
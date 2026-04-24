---
layout: default
title: Posts
permalink: /posts/
---

## All Posts

{% if site.posts.size > 0 %}
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a> — {{ post.date | date_to_string }}
    </li>
  {% endfor %}
</ul>
{% else %}
No blog posts published yet.
{% endif %}

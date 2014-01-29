---
layout: page
title: pp-blog
---
{% include JB/setup %}

{% for post in site.posts limit:5 %}
<article>
	<h2><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h2>
	<span class="post-date">{{ post.date | date_to_string }}</span>

	<div class="article_body">
	{% if post.content contains '<!--more-->' %}
	    {{ post.content | split:'<!--more-->' | first }}
	    <a href="{{ BASE_PATH }}{{ post.url }}">Read more</a>
	{% else %}
		{{ post.content }}
	{% endif %}
	</div>
</article>
{% endfor %}

<i>Found a typo? Something is wrong in this documentation? Just <a href="https://github.com/peterpeerdeman/peterpeerdeman.github.io">fork and edit</a> it! </i>

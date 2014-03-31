---
layout: post
title: "Symfony2 ManyToOne as required field with join column"
description: ""
category: 
tags: []
---
If you want a ManyToOne relation to be required, you have to include a join column. This is because not having this column will not create any reference to the other object in the database, and without a foreign key to this other object the doctrine constraints on this object cannot be created.

{% highlight php *}
/**
 * @ORM\ManyToOne(targetEntity="Package", inversedBy="users")
 * @ORM\JoinColumn(name="package_id", referencedColumnName="id", nullable=false)
 */
private $package;
{% endhighlight *}


{% include JB/setup %}

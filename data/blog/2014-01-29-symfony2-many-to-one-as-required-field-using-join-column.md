---
layout: post
title: 'Symfony2 Doctrine ManyToOne as required field using join column'
category: symfony2
tags: [symfony2, doctrine]
---

If you want a ManyToOne relation to be required, you have to include a join column. Without this column there will not be any reference to the other object in the database, and without a foreign key to this other object the doctrine constraints on this object cannot be created.

{% highlight php %}
/\*\*

-   @ORM\ManyToOne(targetEntity="Package", inversedBy="users")
-   @ORM\JoinColumn(name="package_id", referencedColumnName="id", nullable=false)
    \*/
    private $package;
    {% endhighlight %}

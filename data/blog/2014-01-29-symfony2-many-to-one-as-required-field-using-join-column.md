---
date: '2014-01-29'
title: 'Symfony2 Doctrine ManyToOne as required field using join column'
category: symfony2
tags: ['php']
draft: false
---

If you want a ManyToOne relation to be required, you have to include a join column. Without this column there will not be any reference to the other object in the database, and without a foreign key to this other object the doctrine constraints on this object cannot be created.

```php
/\*\*

-   @ORM\ManyToOne(targetEntity="Package", inversedBy="users")
-   @ORM\JoinColumn(name="package_id", referencedColumnName="id", nullable=false)
    \*/
    private $package;
```

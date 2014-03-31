---
layout: post
title: "Using doctrine lifecycle callbacks to update timestamps"
description: ""
category: symfony2 
tags: [symfony2, doctrine]
---

Lifecycle callbacks are an awesome feature in doctrine that help you to automatically update objects whenever you interact with them. For instance, an entity could automatically set its "created" timestamp whenever it is first persisted to the database or automatically update its "last updated" timestamp when you persist the entity.

<!--more-->

If you handle all of this functionality inside the entity, you are absolutely sure you never have to update these flags in service or controller code, which helps you achieving "seperations of concern" and cleaner object oriented code.

As shown in the following example, the lifecycle callbacks are triggered by including the HasLifecycleCallbacks() annotation at the top of the class. Whenever the annotation "PrePersist" or "PreUpdate" is found above a method, this method will be called automatically when these events occur.

{% highlight php %}
/** 
 * MyPretendEntity 
 * 
 * @ORM\Table(name="my_table_name") 
 * @ORM\Entity(repositoryClass="\MCM\MyExampleBundle\Repository\MyPretendRepository") 
 * @ORM\HasLifecycleCallbacks() 
 */  
class MyPretendEntity  
{  
    /** 
     * Set created
     * 
     * @ORM\PrePersist 
     * @return Product
     */  
    public function setCreated()  
    {  
        $this->created = new \DateTime();  
        $this->updated = new \DateTime();  

        return $this;
    }  

    /** 
     * Set updated
     * 
     * @ORM\PreUpdate 
     * @return Product
     */  
    public function setUpdated()  
    {  
        $this->updated = new \DateTime();  
        return $this;
    }  
{% endhighlight %}

{% include JB/setup %}


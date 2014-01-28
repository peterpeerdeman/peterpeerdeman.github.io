---
layout: post
title: "Using lifecycle callbacks to set created and updated fields"
description: ""
category: 
tags: []
---

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

{% include JB/setup %}

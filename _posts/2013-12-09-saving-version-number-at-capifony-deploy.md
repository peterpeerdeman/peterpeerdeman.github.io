---
layout: post
title:  "Saving version number at capifony deploy"
categories: devops
tags: [capifony]
---
Having a git version number and deploydate is very convenient to keep tabs on the deployed software on your different environments. To save the version number to a json file during deployment, use the following capifony task.

<!--more-->

{% highlight rb %}
namespace :deploy do
  desc "write version number to app-readable file"
  task :write_versionfile, :roles => :app do
    versionobject = { 
      :version => "#{capture("cd #{release_path} && git describe")}",
      :deploydate => Time.now
    }
    versionobjectjson = versionobject.to_json.gsub(/\\n/,"")
    run "echo '#{versionobjectjson}' > #{release_path}/web/VERSION"
  end
end

after 'deploy:update_code', 'deploy:write_versionfile'
{% endhighlight %}

{% include JB/setup %}
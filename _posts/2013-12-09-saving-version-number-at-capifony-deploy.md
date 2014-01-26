---
layout: post
title:  "Saving version number at capifony deploy"
date:   2013-12-10 16:46:42
categories: devops
tags: [capifony]
---
To save the version number to a json file during deployment, use the following capifony task

{% highlight ruby %}
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
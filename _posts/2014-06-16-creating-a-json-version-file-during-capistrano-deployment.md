---
layout: post
title: "Creating a json version file during capistrano deployment"
category: devops
tags: [symfony2, devops, capistrano]
---

To get some more insight into the different code applications deployed to different servers (e.g. staging, acceptance production) I wanted to be able to see the version hash and deploy date in a small file that gets deployed with the application.

I found out about the [version](https://github.com/westarete/capistrano-helpers/blob/master/lib/capistrano-helpers/version.rb) routine in the [capistrano-helpers](https://github.com/westarete/capistrano-helpers) repository by @westarete, which prints the currently deployed git hash to a VERSION file. I've adjusted the code slightly to create a nice json formatted file which includes both the git hash and the deploydate. 

{% highlight ruby %}
# insert this code snippet in your deploy.rb capistrano config
namespace :deploy do
  desc "write version number to app-readable file"
  task :write_versionfile, :roles => :app do
    versionobject = {
      :version => "#{capture("cd #{release_path} && git describe --always")}",
      :deploydate => Time.now
    }
    versionobjectjson = versionobject.to_json.gsub(/\\n/,"")
    run "echo '#{versionobjectjson}' > #{release_path}/web/VERSION"
  end

  desc "setup the cache folder to create folders and directories"
  task :setup_group do
    run "chown -R :#{group} #{deploy_to} && chmod -R g+s #{deploy_to}"
  end
end
{% endhighlight %}

I use the resulting version file to remotely retrieve the servers version for our status dashboard, which is pretty neat and gives you a quick overview of your servers statuses.

{% include JB/setup %}

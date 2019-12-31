# pp-blog

The repository for my blog. Please submit a pull request if you have found an error!

## Generating blog
- ensure bundle is installed
- `bundle exec jekyll serve`

## Generating blog docker
updating
```
export JEKYLL_VERSION=3.8
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  -it jekyll/minimal:$JEKYLL_VERSION \
  jekyll build
```

serving
```
docker run --rm \
  --volume="$PWD:/srv/jekyll" -p 127.0.0.1:4000:4000 \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  jekyll serve
```

building
```
export JEKYLL_VERSION=3.8
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  jekyll build
```

## Credits

This blog is based on jekyll bootstrap - 3 by @dbtek. For all usage and documentation please see: <http://jekyllbootstrap3.tk>

### License
- [MIT](http://opensource.org/licenses/MIT)

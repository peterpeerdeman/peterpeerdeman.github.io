---
layout: post
title: "Full document text search in nodejs using elasticsearch and elasticsearch mapper attachments plugin"
description: "Full document text search in nodejs using elasticsearch and elasticsearch mapper attachments plugin"
category: node
tags: [node, elasticsearch, docker]
---
{% include JB/setup %}

In one of our recent meteor applications we included a full document search feature using elasticsearch. Elasticsearch creates an index of documents based on metadata and their plain text content. For this feature we needed to support PDF and office filetypes (doc, docx, pptx etc.) as well. To accomodate this, elasticsearch has a plugin called [elasticsearch-mapper-attachments](https://github.com/elastic/elasticsearch-mapper-attachments).

Because we wanted to use a docker image to run elasticsearch, we decided to extend the `elasticsearch:2.3.3` image and add the plugin on top of it. The plugin takes care of transforming the documents into a plaintext format using apache tika. The plaintext of the document is then used to create a document in elasticsearch.

{% highlight docker %}
FROM elasticsearch:2.3.3

RUN bin/plugin install mapper-attachments

EXPOSE 9200 9300
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["elasticsearch"]
{% endhighlight%} 

My colleague Bryan pushed it to dockerhub for anyone to use under the tag `bryantebeek/elasticsearch-mapper-attachments:2.3.3`. We can now provision our server with this docker image using ansible, and configure the volumes to ensure the indexes created by elasticsearch are persisted on the docker host disk.

{% highlight yaml %}
---
- name: elasticsearch | docker | start/update elastiscsearch
  docker_container:
    name: elasticsearch
    image: bryantebeek/elasticsearch-mapper-attachments:2.3.3
    state: started
    restart_policy: always
    volumes:
      - /var/data/elasticsearch:/usr/share/elastiscsearch/data
    ports:
      - "9200:9200"
      - "9300:9300"
  tags: elasticsearch
{% endhighlight %} 

The elasticsearch service is now running and ready to accept connections from node application code. Before we can index any documents, we have to create the index itself. We use the [elasticsearch npm module](https://www.npmjs.com/package/elasticsearch) to setup the connection to elasticsearch:

{% highlight javascript %}
import elasticsearch from 'elasticsearch';

let client = new elasticsearch.Client({
    host: "localhost:9200",
    log: ["error", "warning"]
});
{% endhighlight %}

Now we can create an index, we call it "files" and set the file property to be of type "attachment" to trigger the use of the mapper plugin:

{% highlight javascript %}
client.indices.create({index: 'files'})
.then(() => {
    // create a mapping for the attachment
    return elastic.client.indices.putMapping({
        index: 'files',
        type: 'document',
        body: {
            document: {
                properties: {
                    file: {
                        type: 'attachment',
                        fields: {
                            content: {
                                type: 'string',
                                term_vector: 'with_positions_offsets',
                                store: true
                            }
                        }
                    }
                }
            }
        }
    });
});
{% endhighlight %}

Whenever we now upload a document in the application, we read it into memory, transform it into base64 and use the same elasticsearch client to create a new entry in the "files" index:

{% highlight javascript %}
const fileContents = fse.readFileSync('some/uploaded/filepath');
const fileBase64 = new Buffer(fileContents).toString('base64');

client.create({
    index: 'files',
    type: 'document',
    id: 'somefileid',
    body: {
        file_id: 'somefileid',
        file: {
            _content: fileBase64
        }
    }
})
.catch((err) => {
    console.error('Error while creating elasticsearch record', err);
});
{% endhighlight %}

The document is now added to elasticsearch, and ready to be retrieved in the result of a search query. When the user uses the search functionality, a query is sent to the elasticsearch client and the results returned to the front-end:

{% highlight javascript %}
client.search({
    q: query,
    index: 'files'
}, (error, result) => {
    if (error) return done(error);
    console.log(result.hits);
});
{% endhighlight %}

The hits object in the result contains an array of hits sorted by search score, which can then be rendered as pleased!

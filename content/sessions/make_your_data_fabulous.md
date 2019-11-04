---
key: make_your_data_fabulous
title: Make Your Data FABulous
id: 3bpYxNtnZ9IgdjDAV9Bn
language: English
talkType: conference
tags:
  - _bigdata___ai
complexity: Intermediate
speakers:
  - philipp_krenn
videoId: G0XGv8GrhMk
presentation: https://xeraa.net/talks/make-your-data-fabulous/
draft: false
---
The CAP theorem is widely known for distributed systems, but it's not the only tradeoff you should be aware of. For datastores there is also the FAB theory and just like with the CAP theorem you can only pick two:

* Fast: Results are real-time or near real-time instead of batch oriented.
* Accurate: Answers are exact and don't have a margin of error.
* Big: You require horizontal scaling and need to distribute your data.

While Fast and Big are relatively easy to understand, Accurate is a bit harder to picture. This talk shows some concrete examples of accuracy tradeoffs Elasticsearch can take for terms aggregations, cardinality aggregations with HyperLogLog++, and the IDF part of full-text search. Or how to trade some speed or the distribution for more accuracy.
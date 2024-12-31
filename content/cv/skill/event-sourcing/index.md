+++
title = 'Event Sourcing'
type = 'cv/skill'

[params]
  image = "images/event-sourcing.svg"
  imageAlt = "diagram of event topics populating multiple databases"
  imageType = "svg"

experience = ["skyspecs"]
+++
Event-sourcing changed how I think about software architecture, particularly in scenarios where you have multiple clients consuming the same data for different purposes, or consuming data from multiple services and sewing it together.  In traditional CRUD-style apps, the database is your source of truth, and everything that wants that data, needs to talk to that one database.  This can present several challenges as your suite of services grow.

1. In a single database 
    1. Two or more client applications or services using the same database will, over time, compound the complexity of the database as it tries to meet more, and often diverging needs from the same data;
        1. a common example of this is one app manages the storage and retrieval of very user-specific data, whereas another app consumes and aggregates the data _across_ users for analytics purposes
        1. another situation might be that each application prefers to index off of different attributes, multiplying the number of indices needed
    1. In addition to the database itself becoming more complex, the database now has to scale to meet the needs of the most demanding consumer, and can't just scale to the needs of one workload or the other
    1. You can set up read-replicas which can be scaled independently of each other, but those replicas will still inherit and carry with it the complexity of the jack-of-all-trades database
1. If you break the data up into multiple service domains,
    1. you may find yourself with expensive serialized, composite queries where you have to get the results of the first query, before you have sufficient values to inform the second
        1. in these situations, the network becomes the bottleneck, and that bottleneck compounds for every domain/microservice which needs to be included in the query
    1. Changes to the schema can wreck havoc across clients and services

These scenarios all stem from the database being the source of truth.  But what if there were a better source of truth than your traditional transactional database?

This is where events come in.

Using tools like Redpanda (a modernized, wire-compatible re-do of Kafka), one can store a log of timeseries events, usually your mutation payloads, into a topic.  This allows you to maintain a shape that is needed to store the complete event, but then every service that wants to use that data, subscribes to the topic, and can reformat it, shape, alter, or organize that data in whatever way makes sense for the consuming application.  While this leads to some duplication of data, it is less of a concern because the source of truth is the original event, and each copy of the data in each downstream service is just using that copy as a kind of hot-loaded cache, tuned to the explicit needs of its consuming application.  If there is ever a discrepancy between the source of truth and the copy, the copy can be rebuilt from the topic, as the event log / topic owns, not only the current state, but the entire history of the data.

This opens up all kinds of interesting possibilities.  The service that creates a slice of that data, may perform best as a transactional database, but one consuming application may be better structured as a knowledge graph, or you may want to store vector embeddings of that data for AI workloads.  Because the source of truth is just a list of events that your system has received, in the order that they happened, any service can subscribe to that topic and use that data in an entirely new way.  With the rise of sqlite being used in production workloads with services like Turso, there is far less pressure to have a large scalable database to handle all your needs, as small, ephemeral, task-specific, or highly-focused databases are now far easier and cheaper to implement.

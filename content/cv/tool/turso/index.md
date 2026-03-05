+++
title = 'Turso'
type = 'cv/tool'
yearsExp = 1

[params]
  url = "https://turso.tech/"
  image = "images/turso-logomark-illustrated.svg"
  imageAlt = "Turso logo"
  imageType = "logo"

experience = ['simpl']
skills = ['application-design', 'event-sourcing']
+++

For most, PostgreSQL is the "boring is good" database the most people reach for first, but Turso is quickly becoming my go-to.

Turso is pretty new to my repertoire, but it didn't take too much time with the service to see the immediate power of it. As a managed SQLite vendor, and maintainer of the libSQL fork of SQLite, they are innovating SQLite beyond its roots as a single file, local database. It can, of course, still be that, but it is now seeing a number of extensions, refactors, and features which intend to make it a pretty powerful but lightweight database.

I have always used databases of one kind or another in building websites or applications, but I've never found them _super_ exciting, or found a database that matched the way I think about data relationships. I personally am a fan of native-store graph databases like Neo4j or Memgraph, and am vector curious. But, I have learned that libSQL can store and query data in traditional transactional/relational patterns, as well as graph, or vector embedding patterns.

Because it is a single file, it is lightning fast. This single-file limit does pose some constraints when dealing with multi-terrabyte sized datasets, or when writing more than a few thousand records per second, but realistically, the bulk of the internet--to the extent that its inhabiting websites truly need any database at all, libSQL/SQLite is probably optimally suited for most use-cases, and when it fits the bill is far less complex than the incumbents, and most of those limitations are slowly being eroded as they progress in their full Rust rewrite.

While it is sometimes viewed as a limitation, its inherent "smallness" has opened up all kinds of use-cases that are far more painful and expensive to point PostgreSQL at. For instance, Turso's database sync tooling makes it easy and fast to create incremental, and partial replicas of the data from the cloud copy to a local machine, mobile client, or web application, and send changes made on those client copies back to the cloud. It additionally has a "branching" feature for making point-in-time cloned copies of databases. This has proven invaluable for quickly refreshing dev/stg/qa copies of prod databases; something which has often been a tedious and disruptive project at most places I've worked at. It also makes it trivial to create throw-away copies of a database for running destructive testing scenarios against. And because their billing is based on overall reads and writes, I can also make dozens of copies of databases, and the ceiling of my costs sits at around the cost of 1-2 moderately resourced RDS PostgreSQL databases, but with plenty of headroom to grow.

It's not perfect for everything, but I haven't found myself in many scenarios where it doesn't meet my 80/20 needs with very little effort getting set up.

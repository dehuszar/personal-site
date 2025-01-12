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

Turso is pretty new to my repertoire, but it didn't take too much time with the service to see the immediate power of it. As a managed SQLite vendor, and maintainer of the libSQL fork of SQLite, they are innovating SQLite beyond its roots as a single file, local database. It can, of course, still be that, but it is now seeing a number of extensions and refactors which intend to make it a pretty lightweight and powerful database.

I have always used databases of one kind or another in building websites or applications, but I have never been particularly good at them, perhaps because I've never found them super exciting, or found a database that matched my desired use-cases. I personally am a fan of native-store graph databases like Neo4j or Memgraph, and am vector curious. I have learned that libSQL can store and query data in traditional transactional/relational patterns, as well as graph, or vector embedding patterns.

Because it is a single file, it is lightning fast. This single-file limit does pose some constraints when dealing with multi-terrabyte sized datasets, but realistically, the bulk of the internet--to the extent that its inhabiting websites truly need any database at all, libSQL/SQLite is probably optimally suited for most use-cases, and when it fits the bill is lightning fast, and far less complex than the incumbents.

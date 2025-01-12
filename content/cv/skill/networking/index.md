+++
title = 'Networking'
type = 'cv/skill'
yearsExp = 20

[params]
  image = "images/networking.svg"
  imageAlt = "vector illustration of a ring of nodes connected to a central node"
  imageType = "vector"

experience = ['essential-forms', 'no1-cooperative', 'personal', 'skyspecs', 'simpl']
+++

When all you have is a few computers, with ip addresses that don't often change, networking is not so bad. When you have microservices with multipe instances spinning up and down as services scale, new versions are being deployed, and everything has to know how to talk to each other--securely at that--it gets a bit more complicated. VPCs, subnets, security groups, load balancers, routing tables, CIDR blocks... It is a lot to learn, and not super intuitive at first.

Some of it is downright boring, but I've had a ton of fun learning how the zero-trust service catalogs and meshes like Consul, reverse proxies like Traefik and Nginx, and service orchestrators like Nomad, ECS, and Kubernetes all work together. The ability for these tools to communicate when new versions or additional instances of a service have joined the mesh, know how to route to them, and to create an encrypted tunnel between them is fascinating and beguilingly simple.

At my previous job, I had the opportunity to stand up an HCP Consul cluster and integrate it into our ECS services. In order to study up on how Consul worked, prior to the start of the project, I set up my HashiStack cluster backed by Raspberry Pi's.

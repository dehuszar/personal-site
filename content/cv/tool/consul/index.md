+++
title = 'Consul'
type = 'cv/tool'

skills = ['network', 'platform-engineering', 'zero-trust', 'service-discovery', 'service-mesh']
tags = ['HashiCorp']
+++
Having had the pleasure of manually configuring services to only talk to each other and wire up the connection securely Consul's service mesh, especially when integrated with Nomad and Vault, makes quick work of it.  Similarly, the service discovery and health checking features are a pretty massive improvement over docker-compose and the like.

Where Consul gets really neat is when using Consul Template and ConsulEnv to print out secrets and configuration into the environment or configuration files inside the container of your running services.  While it fits like a glove with Nomad, it's also integrates well with Kubernetes and ECS; both of which I had working in concert with each other in our AWS environment at my last job.  Having ECS services and Kubernetes pods register themselves with Consul and route to each other as sibling tasks on the mesh feels like magic.

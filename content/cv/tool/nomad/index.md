+++
title = 'Nomad'
type = 'cv/tool'

experience = ['personal']
skills = ['containers', 'service-orchestration', 'infrastructure']
+++
While Kubernetes appears to have won the orchestrator wars, such as they were, I think it is far and away the worst of the orchestrators.

Its unnecessary complexity and variance makes it difficult to learn and maintain.  What you use to develop with, or might deploy to a homelab cluster, is usually quite different from what you would use in production.  In fact, it is commonly recommended that mere mortals do not try to run their own Kubernetes cluster in production, and instead rely on a managed offering like those provided by Google Cloud and AWS.

By comparison, HashiCorp's Nomad is startlingly simple to set up and maintain.  Whether spinning up a dev process, server instance, or client node, Nomad utilizes a single runtime whose intended purpose is determined by the configuration provided at the time of execution.

Just this single design choice makes developing, deploying, and maintaining a cluster far easier.  Beyond that, Nomad is able to scale to a higher number of simultaneous processes, can 

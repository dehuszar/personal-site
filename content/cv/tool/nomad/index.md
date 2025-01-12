+++
title = 'Nomad'
type = 'cv/tool'
yearsExp = 5

[params]
  url = 'https://www.nomadproject.io/'
  image = 'images/Nomad-LogoMark_onDark.svg'
  imageAlt = 'Nomad logo'
  imageType = 'logo'

experience = ['personal']
skills = ['containers', 'service-orchestration', 'infrastructure']
+++

While Kubernetes appears to have won the orchestrator wars, such as they were, I think it is far and away the worst of the orchestrators.

Its unnecessary complexity and variance makes it difficult to learn and maintain. What you use to develop with, or might deploy to a homelab cluster, is usually quite different from what you would use in production. In fact, it is commonly recommended that mere mortals do not try to run their own Kubernetes cluster in production, and instead rely on a managed offering like those provided by Google Cloud and AWS.

By comparison, HashiCorp's Nomad is startlingly simple to set up and maintain. Whether spinning up a dev process, server instance, or client node, Nomad utilizes a single runtime whose intended purpose is determined by the configuration provided at the time of execution. Just this single design choice makes developing, deploying, and maintaining a cluster far easier.

Beyond that, Nomad is able to scale to a higher number of simultaneous processes, can run a wider variety of workloads beyond docker containers such as wasm and bash binaries, Java JVMs, QEMU images, and more. Those runtimes are managed via an extension system, so there's no limit on what runtimes can be supported.

My best guess is that the lack of a managed offering, and its recent transition from the MPL to the BSL license are what's holding Nomad back from more popular support. For the former of the two concerns, it's easy enough to spin up a cluster using VM instances in any cloud. If you were only on AWS, the ECS Fargate is probably good enough for most scenarios, but if you need to run on-prem or in a multi-cloud environment, or want to streamline your development and deployment processes, Nomad is king. For the latter concern, my understanding is that unless you are building a competitive service orchestration offering, there is very little chance of getting on the wrong side of this license. If you were weighing deployments to ECS, this license should not weigh heavily on your mind.

My homelab cluster is powered in part by Nomad and I interact with it almost daily, though I have not had the opportunity to use it in a production / work environment. If given the opportunity though, I would jump on it.

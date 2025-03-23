+++
title = "Service Orchestration"
type = "cv/skill"
yearsExp = 6

[params]
  image = "images/orchestrator.svg"
  imageAlt = "icon of conductor"
  imageType = "vector"

experience = ["skyspecs"]
tools = ["ansible", "aws", "nomad", "consul", "vault", "fermyon-spin"]
+++

So, I heard you like microservices. Who doesn't like a well scoped, fit-for-purpose, domain-driven bit of functionality?

Of course, writing the service code is the easy part, but no one wants 50 services burning up compute hours on a quiet day, so it's important to be able to spin them down when they aren't in use, or at least spin down from multiple instances to a single one. Though when it gets busy, you need to spin them back up again. You don't want a bajillion users pumping up your instance count beyond what you can afford either, so you want to be able to set an upper bound--except on certain days when you really _need_ to scale into the stratoshpere because on those days it makes you way more money.

Of course, no microservice architecture is complete without a reverse proxy, so your traffic can come in through a secure, identity-validated front-door. Additionally, no microservice architecture is complete without a service catalog or mesh so you can discover and route to your services. And once they can discover each other, you'll want to make sure services can only talk to the other services that are necessary for them to function.

Whew! That turned out to be quite a lot of stuff just to run and access a couple of docker containers. And as powerful as a microservice architecture can be, it is not hard to over-do it. Making too many bits of functionality into their own discrete services can create sprawl and maintenance churn. Even so, if right sized, they can be magical little systems.

I have managed several service clusters in AWS, at my last few jobs--primarily with ECS Fargate. I have also set up a HashiStack cluster (Nomad, Consul, Vault) running on a pile of Raspberry Pis in my basement. What I find endlessly fascinating, is not just how large you can scale these clusters, but how small as well. There is a lot of innovation yet to be done to make these tools easier to use, but that it is possible for anyone to run their own private cloud on a couple of sub-$100 computers is just bananas.

Speaking of innovation, I have been excited to see the innovation happening in the WebAssembly space (wasm). I have been playing with Fermyon's Spin; finding a nice balance between the light-weight, fast-scaling fanout patterns of serverless, and stateful, responsive, long-lived services. Who knows what will actually happen--in tech, the whole industry could turn on its head tomorrow. But I suspect these "compiled from any language", event-handlers and utilities will prove to play a part in the future of service orchestration.

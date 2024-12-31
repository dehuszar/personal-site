+++
title = 'AWS'
type = "cv/tool"

skills = []
+++
AWS is the cloud equivalent of a giant box of legos.  Where-as Google Cloud gives you more high-level abstractions, AWS gives you lots of--sometimes quite tiny--little pieces of functionality and leaves it to you to put them together.  I generally prefer this approach, as if all you have access to is a high-level abstraction and it doesn't meet your needs, there's really not a whole lot you can do other than to try to swap out or integrate a different tool to take its place.  It's not without its drawbacks though.  While AWS services are designed to be composable with each other, their composability is not usually as flexible as you might like.  As a result, many of the reference AWS applications end up being on the bloated and expensive side.

Where AWS _does_ provide higher-level abstractions, they are of curiously lower-quality design than their core services; I'm thinking primarily of tools like Amplify.  My happiest-path is to stick to the o.g. services like VPCs, Route53, Certificate Manager, S3, EFS/EBC, CloudFront, API Gateway, Lambdas, and ECS, and then bring in external cloud services via VPC peering, or running 3rd-party replacement services as containers in a Fargate cluster to do the last mile.

I have managed many large-scale AWS implementations at my current and previous gigs, and with the help of Terraform, it's all very civilized.

For my own purposes, however, I tend to lean towards either hosting workloads on my home cluster or using a mix of managed cloud services like Cloudflare, Grafana Cloud, Fermyon Spin, and Turso.

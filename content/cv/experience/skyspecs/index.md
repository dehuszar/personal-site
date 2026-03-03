+++
title = "SkySpecs"
type = "cv/experience"

[params]
  endYear = "2023"
  image = "images/skyspecs-logo-horizontal-black.svg"
  imageAlt = "SkySpecs logo"
  imageType = "logo"
  startYear = "2016"

tags = []
skills = ['application-development', 'css', 'front-end', 'html', 'javascript', 'linux', 'network', 'platform-engineering', 'security', 'service-orchestration', 'zero-trust']
tools = ['aws', 'cloudflare', 'ember', 'hashicorp', 'confluent', 'redpanda', 'grafana', 'gitlab']
+++

SkySpecs delivers fleet management tools for owners and operators of wind farms. I had the distinct pleasure of being their first web application developer on staff and got to build out the initial product offering; a data portal for delivering automated drone inspections of wind turbines to customers.

As the company grew beyond the size where we could all fit around a single conference table, ownership of the core web application was handled by a very capable group of engineers, and I moved into the realm of cloud engineering, internal developer platforms, and infrastructure design.

I had the opportunity to learn all about AWS and its myriad products, eventually growing beyond the box of LEGOs they provide and into multi-cloud architectures, composing services and workflows using resources from AWS, Cloudflare, HashiCorp's HCP platform, Confluent and Redpanda Data, Grafana Cloud, and Gitlab.

## Accomplishments By Role

### Staff Software Engineer

- Established security and monitoring best practices, earning our product ISO 27001 certification
- Researched, designed, and implemented cross-microservice event messaging with Kafka/Redpanda; implementation reached >100k messages/day under my tenure
  - Developed tools for writing and testing event-driven workflows in local development environments
  - Ran “event storming” sessions with members of the product and engineering teams to help design new, and enhance existing, event-driven and GraphQL services
- Maintained APIs with >99.95% success rate across >2M queries/day
- Mentored and trained developers; wrote extensive internal documentation around design goals and best practices
- Created and led weekly developer-focused touchpoint meetings where engineers shared ideas, demos, coordinated tasks and built cohesion across teams

### Senior Software Engineer / Growth Leader

Identified, prototyped, and integrated HashiCorp Cloud’s Consul Service Mesh SaaS product to enable Zero-Trust, dynamic routing to entire service catalog of ECS Fargate and EKS (Kubernetes) containers

- Identified, prototyped, and integrated dynamic database credentials for Zero-Trust developer workflows with HashiCorp Cloud’s Vault SaaS offering

### Senior Web Application Developer

- Migrated entirety of existing cloud infrastructure (100s of AWS resources) to Terraform
- Implemented AWS multi/cross-account role-assumption capabilities to remove all IAM users from service accounts and VPC private subnets for secure networking

### Web Application Developer

- As the first on-staff web developer, developed “greenfield” data portal for reviewing turbine inspection data which supported delivery of nearly 30,000 inspection reports to our customers during its 2+ year lifespan

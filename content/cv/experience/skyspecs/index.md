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
- Led migration of all Kafka-enabled services, with zero production downtime or data loss, to Redpanda managed cloud offering
- Researched and identified replacement product / vendor
- Managed vendor selection and relationship

### Senior Software Engineer / Growth Leader

- Led Platforms team of three engineers which:
- Designed and delivered a user-management application, a new authentication and authorization layer used by web application, ~5 backend services, and ~12 Lambda functions
- Transitioned between old and new auth service within a 2 hr maintenance window
- Implemented Grafana for observability of all services, databases, and applications
- Identified, prototyped, and implemented Consul Service Mesh to enable Zero-Trust, dynamic routing to entire service catalog of ECS Fargate containers
- Identified, prototyped, and implemented dynamic database credentials for Zero-Trust developer workflows with Vault
- Identified, prototyped, and implemented Cloudflare for DNS, firewall, and threat detection
- Designed and implemented Kafka-based event-driven architecture, using Confluent Cloud

### Senior Web Application Developer

- Spearheaded expansion of AWS cloud services to enhance security and scaling capabilities
- Migrated entirety of existing cloud infrastructure (100s of AWS resources) to Terraform
- Implemented VPC private subnets for secure networking
- Implemented AWS multi/cross-account role-assumption capabilities to remove all IAM users from service accounts
- Identified and selected vendor for 3rd-party architectural review and managed the review process with vendor

### Web Application Developer

- As the first on-staff web developer, developed 1st-gen data portal for reviewing turbine inspection data which supported delivery of nearly 30,000 inspection reports to our customers during it’s 2+ year lifespan

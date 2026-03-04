+++
title = 'Terraform'
type = 'cv/tool'
yearsExp = 7

[params]
  url = "https://www.terraform.io/"
  image = "images/Terraform-LogoMark_onLight.svg"
  imageAlt = "Terraform Logo"
  imageType = "logo"

experience = ['skyspecs', 'simpl', 'personal']
skills = ['application-design', 'infrastructure', 'networking', 'security', 'service-orchestration']
+++

Terraform is another one of my "daily driver" tools. Their clean, consistent templating language makes deploying and configuring infrastructure and cloud services a breeze.

One of the most difficult things about managing infrastructure is knowing what the _intended_ state of it should be. Many deployment tools rely on cli commands and scripts which may end up creating a spray of updated resources. While the resulting updates may still be trackable in version control, for systems like CloudFormation, the sheer volumes of json files generated which have to be reviewed can make it very difficult to track what has happened, and how resources inter-relate; let alone whether it's what you actually wanted. Terraform's declarative templates being decoupled from the actual state of the deployed resources, allows you to navigate very civilized deltas between what is currently deployed, and what you are trying (or perhaps inadvertently going) to change.

Because it offers providers for dozens of official cloud-services, and hundreds of additional community-built providers, the ability to compose multi-cloud applications is quite impressive.

I have helped two of my employers migrate their various cloud services, including extensive AWS applications and production workloads over to Terraform to great success and satisfaction. I also use it for pretty much every one of my personal side-projects. Even for managing my homelab.

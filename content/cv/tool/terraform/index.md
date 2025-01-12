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

Terraform is another one of my "daily driver" tools. Their clean, and consistent templating language makes deploying and configuring infrastructure and services a breeze.

One of the most difficult things about managing infrastructure is knowing what the _intended_ state of it should be. Many deployment tools rely on cli commands and scripts which may end up creating a spray of updated files. While these updates may still be trackable in version control, for systems like CloudFormation, the sheer volumes of items to review can make it very difficult to track what has happened, let alone what you actually want. Terraform's declarative templates being decoupled from the actual state of the deployed resources allows you to navigate very civilized deltas between what is, and what you are trying (or perhaps inadvertently going) to change.

I have helped two of my employers migrate their various cloud services, including extensive AWS applications and production workloads over to Terraform to great success and satisfaction. I also use it for pretty much every one of my personal side-projects, and even managing my homelab.

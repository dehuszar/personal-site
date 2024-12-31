+++
title = 'Shell Scripting'
type = 'cv/skill'

experience = ['skyspecs']
tags = ['linux', 'scripting']
+++
Being a fan of Linux, and having had the opportunity to learn how to manage headless servers, shell-scripting with Bash is indispensable.  While many programming languages have tooling for CLI work I regularly reach for Bash when writing little helper scripts, often for work that needs to be portable, with minimal dependency setup.

Some of the more fun workflows I've automated with Bash include:
 - Dynamically retrieving secrets and env values from secure KV stores like AWS Secrets Manager / Parameter Store, Consul, or Vault all from inside of a script's scoped process so the parent session doesn't have access to them
 - Automating the setup of new servers and workstations in concert with tools like Terraform, Ansible, and Consul Template
 - Instrumenting CI/CD pipelines with custom scripts to manage deployments, testing, and monitoring
 - Instrumenting and bootstrapping certificate-based authentication and cert-renewal workflows for services like Consul, Vault, and Kubernetes
 - Setting up automated backup routines

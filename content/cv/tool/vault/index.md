+++
title = 'Vault'
type = "cv/tool"
yearsExp = 4

[params]
  url = "https://www.vaultproject.io/"
  image = "images/Vault-LogoMark_onDark.svg"
  imageAlt = "Vault logo"
  imageType = "logo"

experience = ['personal', 'skyspecs']
skills = ['security', 'infrastructure']
+++

Security is, like most topics in tech, a simple word that conveys an endless tree of layers, intentions, and considerations. At its root though, it simmers down to a few simple concerns:

- are you who you say you are?
- are you doing or accessing something (or are you _able to_ do or access something) you shouldn't?

Vault concerns itself with managing identity, and leveraging that identity to access or generate secrets. In addition to being able to create a username and password in Vault, you can have Vault act as an intermediary or proxy to [other identity providers](https://developer.hashicorp.com/vault/docs/auth). So if you use Google Workspace, Okta, or some similar directory service, if you are a developer who is already logged into one of the major cloud services (Google, AWS, Azure), or a version control provider (GitHub, Gitlab), you can leverage integrations from those services to access Vault resources. Any form of identity you use to access Vault can then be mapped to a role or set of roles allowing you access to any number of secrets engines.

The secrets engines range from simple encrypted key-value stores whose secrets are longer lived and need to be explicitly rotated, to incredibly sophisticated dynamic credential services which create on-demand logins for [a wide variety of databases](https://developer.hashicorp.com/vault/docs/secrets/databases), one-time passwords and certificates for accessing instances via [SSH](https://developer.hashicorp.com/vault/docs/secrets/ssh), and [PKI certificates](https://developer.hashicorp.com/vault/docs/secrets/pki) for creating encrypted connections.

These integrations and workflows can be a bit of planning and work to put in place, but with some thoughtful crafting Vault can minimize the volume of passwords that need to be stored in external password managers, and in concert with tools like [Consul Template](https://github.com/hashicorp/consul-template), eliminate the need to leave sensitive values on local machines as is often the case with configuration files.

I have set up a managed Vault Cluster to generate short-lived PostgreSQL credentials on demand and use Vault in my homelab cluster to secure my network and containerized services.

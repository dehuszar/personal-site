+++
title = 'Cloudflare'
type = 'cv/tool'
yearsExp = 4

[params]
  url = 'https://www.cloudflare.com/'
  image = 'images/cloudflare.svg'
  imageAlt = 'Cloudflare logo'
  imageType = 'logo'

experience = ['personal-projects', 'skyspecs']
skills = ['network', 'security', 'platform-engineering']
+++

While AWS has many great tools which overlap, I'm a big fan of Cloudflare's network and security features and find it all a little easier to wire up than competing services. I've used it for my personal projects and spearheaded the implementation of a robust WAF in an enterprise environment as well.

It is particularly helpful for multi-cloud architectures to have a DNS and routing layer that lives outside of any one of the cloud offerings being routed to. Should AWS us-east-1 go down, and the service is mirrored on GCP--or vice-versa, it's safer to not try to negotiate that on either AWS or GCP's internal systems.

+++
title = 'Security'
type = 'cv/skill'

[params]
  image = "images/disaster-girl-meme.jpg"
  imageAlt = "meme of girl smiling in front of burning house with joke about rotating passwords that are also kept in plain text on local machines"
  imageType = "photo"
  imageClass = "round-tl-br"

experience = ['discovery-education', 'essential-forms', 'isobar', 'no1-cooperative', 'skyspecs']
+++
I wouldn't put myself out there as some kind of pro hacker, but I have had the opportunity to set up user management and admin portals, navigate the configuration, lifecycles, and validation of JWT tokens, as well as set up dynamic credentials systems, and Zero Trust security models.

To me, dynamic credentials systems like HashiCorp's Vault are the coolest and most robust way to securely access resources.  To the uninitiated, the gist is that, rather than update (or worse, leave static) and distribute credentials that are used by many different people and systems, you have a dynamic secrets engine which knows how to create and expire credentials for a given resource on the fly, based on an identity, and whatever roles or policies apply to that identity.  Said differently, I present my identity (say a token issued by my organization's Google Workspaces account), and my user account belongs to a group which allows write-access to a PostgreSQL database, a the secrets manager would create a new user for me in the target database, and issue to me a login and password which are only valid for a short time.  I log in and do my business in the time allotted, and when it expires, the dynamic secrets manager will then go remove my temporary user from the database.  It can be a bit of work to put all the pieces in place, but it is incredibly powerful and secure.

Zero Trust systems like Consul take the same concept but apply it to network access.  In this case the identity is another machine, and their credentials usually take the form of an mTLS certificate and encrypted tunnel.  When the brokering service is able to auto-renew and deploy the certificates, you have a very nice system where each piece of the network is only able to talk to the other pieces that it is supposed to, and nothing else.  It's certainly not a perfect framework, but it is a pretty vast improvement over the "castle and moat" model of VPNs, and bastion hosts providing blanket access to all the resources attached to a private subnet.

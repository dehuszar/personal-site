+++
title = 'Redpanda'
type = 'cv/tool'

[params]
  url = "https://www.redpanda.com/"
  image = "images/skate-panda-hero.svg"
  imageAlt = "Redpanda mascot ollieing on a skateboard"
  imageType = "vector"

experience = ['skyspecs']
skills = ['event-sourcing']
+++
Redpanda is a spectacular, lightweight, well-documented little tool for managing events.  I had the pleasure of working with the managed cloud version of the product working at SkySpecs, and I've many a brewing side-project using the open-source version.  As someone who spent their entire career building CRUD applications, the idea of eventually consistent event-sourcing blew my mind.  We started our eventing journey using the official Kafka server and client libraries which are gigantic and bloated, and will allow a modest computer to cook an egg.  After playing around with Redpanda as a way to run tests of our Kafka system in CI, we decided rather quickly to just ditch Kafka all together, and as quickly as we could.  Redpanda will run on a Raspberry Pi, can scale to the moon, and is comparatively easier to work with in almost every respect.

I have to also make mention of the fantastic team at Redpanda.  I have worked with very few companies as committed to making sure customers not only knew how to use their product and understand the underlying principles of how it worked, but also to feeling like a badass using it.  Their acquisition of Benthos, now Redpanda Connect, was an inspired choice.  They now have stateless transforms built into the runtime, so you can alter events before they are stored in the topic, as well as a variety of stateful tools for handling stream joins, or complex lookups for event decoration, as well as the myriad input and output options for piping all the things to all the places.

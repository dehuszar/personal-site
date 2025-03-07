+++
title = "Discovery Education"
type = "cv/experience"

[params]
  endYear = "2014"
  imageAlt = "Discovery Education logo"
  image = "images/discovery-logo.svg"
  imageType = "logo"
  startYear = "2014"

tags = []
+++

Like Shark Week, but for schools.

I worked here as a front-end developer for Discovery Education, upgrading older sub-sites and workflows to use more modern tooling, which at the time was Backbone.

One of the more fun challenges I got to tackle here was around figuring out how to introduce new site components using (again, at the time) the latest version of the Bootstrap CSS library alongside a global header which lived on each page of the entire site which used an older version which was used across dozens of web properties and couldn't be touched by developers of any one team.

We came up with a clever way to use the [LESS CSS pre-processor](/cv/tool/less) to dynamically inject only the classes we needed to support the new components. This meant that if all we were using were buttons and headers, then those were applied to our css definitions which referenced them, and the rest of the bootstrap library got shaken out at compile time, leading to a very lean manifest.

I went on to write [an article](https://medium.com/@dehuszar/semantic-remapping-with-css-pre-processors-906ba1a9910c) about the strategy, which we referred to as _Semantic Remapping_; as we were remapping css classes named for their visual characteristics to leaner, cleaner semantic markup which sometimes used no classes at all.

A fun aside: I did a demo of this concept at a meetup in Chicago co-hosted by Chris Coyier of the legendary site CSS Tricks. He did a very kind [writeup](https://css-tricks.com/reference-imports-in-less-are-kinda-cool/) of it.

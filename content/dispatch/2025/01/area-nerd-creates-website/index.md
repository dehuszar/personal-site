+++
title = 'Area Nerd Creates Website'
date = 2025-01-11T22:54:37-04:00
summary = "A quick stroll through the why and how of this website"

categories = [ "essay" ]
tags = ["web-dev", "javascript", "industry"]

[params]
  image = "images/painting-with-code.svg"
[[resources]]
  title = "Area Nerd"
  [resources.params]
    class = "vector"
    alt = "self-portrait sketch of the author painting a website"
    # max_height = "140%"
    # max_width = "120%"
    # margin_top = "-10px"
    # margin_left = "-39px"
+++

![Area Nerd](images/painting-with-code.svg)

I have been developing websites in some form or another since 2005. This being 2025 means I've been at this for 20 years. On the one hand it reminds me of my age, but on the other I still am filled with exuberant excitement when I think about the internet. This is not as common of a sentiment as it was 20 years ago, and there are various aspects of that shifting of enthusiasm that I will probably write about in the months and years ahead. For today though I want to talk--not about the internet at large--but a single website.

You happen to be looking at it right now.

It's not much. Not yet. ...the perfect being the enemy of the good, and all that. What I am most pleased with though is it's relative simplicity. I've tried to keep the interface fairly minimal, sure, but the actual nuts and bolts of the website couldn't be simpler; in some ways even simpler than those first websites that I built. In the old days, hand-rolling artisanal html and css files for every page which needed to exist was a fairly arduous task; one made more difficult by Internet Explorer and its insistence on not cooperating with any efforts to standardize, or even align on how the browser rendered a page. This led to a seemingly endless amount of tweaking and testing, getting it just right, uploading it to an FTP server and calling it done, only to discover that it was now broken in some other important context, or a different set of pages.

Over the years of browser standards coalescing, semantic markup improvements, and new CSS superpowers made the craft progressively easier... enhanced you might even say.

But there was also the JavaScript. So. Much. JavaScript. Don't get me wrong, I very much enjoy making a website interactive, delighting users with animations and effects--both practical and fun. I also enjoy using JavaScript as a programming language, and as my daily driver, am not bent out of shape about its oddities or shortcomings. Like the Onceler from The Lorax, however, we kept biggering and _biggering_ and **BIGGERING** our JavaScript. Because more JavaScript is what everyone needs.

...and I say this as someone who did his fair share of biggering the JavaScript. In all the excitement around the freedom that JavaScript imparted from toil and constraint of the old ways, I fear we've lost the plot. The internet was intended to take us away from a more client/server architecture. That was the kind of bloated enterprise software pattern that the likes of an IBM would make and sell to other companies for a gazillion dollars. The internet was light and lean. A teenager or their grandparent could, with a little poking around, whip up... something.

And they did! It didn't have to be great, but something. You'd upload it to a folder on a box somewhere and it could be seen by the world. It was magical!

But somewhere along the way namely with the rise of mobile apps, JavaScript has been used to create heavy client applications. Which--you know--isn't a bad thing to be able to do. There are lots of situations where it does not make sense to use the traditional document model; where data needs to be manipulated in more complicated ways than traditional markup and forms allow for. But if we're being honest, the majority of websites do not need this kind of thick-client architecture which locally manages state or traffics in data packets. In addition to simply being overkill for the bulk of the needs of most web content, it has cultivated a perception that basic websites, even those with rich interactions, or data interactions need to utilize this level of complexity in order to be "successful." The most importantly consequence of this is that the ability to create and share content has become the domain of skilled practitioners. It has become _much_ harder to put together a website without having to navigate a fairly massive amount of interconnected tooling, run gauntlets of high-stakes design choices, and mire in endless maintenance--upgrading or switching library dependencies or hosting providers with constant shifts of terms of service, costs, and even solvancy.

To fill the gap, large platforms evolved to make it easier for people to sign up and quickly get something out in front of others. From site builders to social media, large centralized platforms became the way we all interacted with the web. People's expressive impulses became "content creation" where the content either belonged, at least in part, to the platform where it posted, or could only be posted within the constraints of what the platform was interested in supporting. That could mean that you couldn't control what kinds of custom fields you could enter data into, or you had limitations around how much you could template or structure the layout, and so on.

Rather than investing in lowering the bar for participation, we leaned into more complexity, which in turn pushed the freedom to publish and express to large businesses and resourced organizations who can afford to shoulder that complexity. But that complexity does not define what the internet is, only what has been built with it most recently. Like a tub of Legos, one does not _have_ to build the Star Destroyer. But it can be hard to see how to build your own spaceship if you don't already have a lot of parts at your disposal, and you're not sure which ones you actually need. And if I, as a seasoned developer get bogged down and discouraged building things with current practices, what chance would our hypothetical kid or grandparent have?

This website was originally built with [ Lit ](https://lit.dev/). I spent several months worth of evenings and weekends cobbling together pretty much what you see here, but I could never quite get it to work the way I wanted to. Fetching the JSON and passing it off through the router to a tree of components and sub-components. It was all so fiddly and complicated. And just when I thought I had it all working enough to focus on the content, I would find myself fussing around with one intractable problem or another. So I just kinda stopped working on it. I could have finished it, and I got close, but each step closer the site got to completion, the more that needed to be done which had nothing to do with the site's contents or usability. It was all just tedious plumbing chores that were necessary for the site to even build, let alone function well. So I just put it down and focused on other things, and that made me sad. Another side project gathering dust.

But here it is. It _did_ get built. That it is not presently built with Lit is no dig on the Lit crew at all, and few of the struggles I had were due to anything specific to Lit. I will definitely be diving more into W3C web components, and Lit's abstractions are very well done, so this is not any sort of weigh-in on any one library or about web-components, which I think will play a big role in the future. It was more the way of approaching the design of my site that was the source of my problems. I too had drifted into the habit of building websites that were client-side applications--and really for no reason that I could tell you now other than the fact that it felt impressive in the early days. But over its full arc, the React-ification of the web kinda took the fun out of building websites for me, and over the years I found myself professionally moving into the backend. ...and then into infrastructure. But I kinda missed drawing the boxes on the screens. It used to be so much fun and bring me joy.

It turns out, I was not alone in this trudging, reluctant acceptance that the web had become less fun. There is a lot to say about the many communities which have been bubbling up to rekindle the spirit of the "old web," and I intend to say more on the topic, but this post has already gone on a bit. For now, I'll just skip to the part where I found my way to [ htmx ](/cv/tool/htmx) for dynamically loading and rendering the markup, and [ Hugo ](/cv/tool/hugo) for taking my markdown content and compiling it into flat HTML files as a way to replace needing a proper back-end service. There's still a lot to learn, and you'll probably see some rough edges on this site while I do, but with these tools I have found myself being able to frictionlessly build, design, and write in a way that feels fun like in the before times.

And I did it _really_ fast. Like, days fast. Writing the content and observing how the site held together once it was in place became the actual work; which is more along the lines of what I expected and remembered, and which was far more satisfying to think about and complete. I won't get too deep into the tools here, and if you look at the links in this article, you'll see I dive into them in some detail elsewhere on the site.

The part I feel is important to share here is that the ability to create for the web should be easy and accessible enough for everyone. And there are real efforts afoot to not only make the tooling easier and more accessible, but to expand and further empower the atomic elements of the web to reduce the need for so many layers of tooling in the first place. But even more that we do not need to wait for those efforts to mature to be able to bring the web back to life. That regardless of which centralized, monetized, and monopolized platform comes riding high off of a fresh IPO into our world tomorrow, and whatever disappointing, [ enshittified ](https://www.dictionary.com/browse/enshittification) offering we find ourselves with after they've rolled up the market, the internet we wanted is--and really has always been right here patiently waiting for us to imagine and create. It's not the centralized platforms, the social media sites, or the subscription services. It's the thing that you built and shared with your friends. As the Onceler says as his final plea at the end of The Lorax, after a lifetime of biggering:

> UNLESS someone like you cares a whole awful lot, nothing is going to get better. It's not.

More soon.

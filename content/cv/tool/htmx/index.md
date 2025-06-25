+++
title = 'Htmx'
type = 'cv/tool'
yearsExp = 1

[params]
  url = "https://htmx.org/"
  image = "images/Htmx--Streamline-Simple-Icons.svg"
  imageAlt = "htmx logo"
  imageType = "logo"

experience = ['personal']
skills = ['web-dev']
+++

Having been dashed against the rocks many a time by the rough and choppy waters of JavaScript frameworks, I have found htmx to be the relative equivalent of an outdoor hot tub on a cool night. I have built and maintained applications and side projects with Backbone, Ember, React, and Lit elements. While SPA's like Ember hold a place near and dear to my heart, I am more than happy to return to the old-but-not-forgotten ways of web development; semantic HTML for layout, CSS for styling, and JavaScript for interaction served from a backend.

Htmx adds reactivity to these traditional, backend-driven applications by enhancing any html element to be able to send or request updates to the application state. Even at this late date, only links and forms have been allowed to do this in the HTML spec. Native W3C web components can do this, but they can bring a lot of ceremony and contraints which may not be necessary (though htmx also works well with web components). There's [a whole book](https://hypermedia.systems/) that has been written about the goals and philosophy of htmx and the hypermedia concept. It's well worth a read, but the gist of it is that, rather than retrieving JSON, deserializing it, and then passing it all over the UI, you return html from your backend; either retrieving an HTML snippet, or the whole page and the client logic can make decisions about how much of the response payload to use in updating the page. This change in approach affords some interesting possibilities:

1. You could use a web server process to handle requests, rendering precise and right-sized response payloads on demand
1. You could also just have a pile of pre-rendered static site files which get served from a cloud services bucket, reducing costs and complexity

This site you are reading now uses the latter approach, grabbing static files and pulling out only the desired DOM elements and placing them in the target elements using--effectively AJAX. The benefits of this approach are many, but for me the most valuable are:

1. The state remains on the backend, dramatically simplifying the front-end implementation
1. The web site / application can dramatically reduce the number of dependencies and logic (even to the point of not requiring a build step), while still enjoying a rich UI

This aggressive reduction of complexity makes the act of building a site faster and--in my view--more joyful.

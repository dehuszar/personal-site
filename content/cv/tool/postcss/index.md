+++
title = 'PostCSS'
type = 'cv/tool'
yearsExp = 10

[params]
  url = 'https://postcss.org/'
  image = 'images/PostCSS_Logo.svg'
  imageAlt = ''
  imageType = 'logo'

homepage = 'https://postcss.org/'
experience = ['personal', 'skyspecs', 'isobar']
skills = ['css', 'post-processing', 'application-development', 'front-end']
+++

PostCSS is a fantastic little post-processing CSS tool which allows a developer to decorate, optimize, expand, clean, shake out, and otherwise alter their stylesheet rules. There are a bajillion little plugins to do this and that. I have even written [one of my own](https://github.com/dehuszar/postcss-reference) which brings the [@import/reference](https://lesscss.org/features/#import-atrules-feature-reference) syntax from the LESS CSS pre-processor to PostCSS. Tailwind offers a similar [@apply method](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply), but carries with a pretty gigantic library built around utility classes, which is [not my cup of tea](https://medium.com/@dehuszar/semantic-remapping-with-css-pre-processors-906ba1a9910c).

That aside, the nicest part of PostCSS is that it does almost nothing by default. The whole conceit of it is that it is just a parser which you feed your source styles into, that then gets passed into a middleware chain, and comes out the other end. That middleware chain is 100% what you decide it should be. I'm a big fan of this approach, and I'm sure it's at the center of its success. Having worked with LESS, SASS, and Stylus at previous jobs, they were all great tools, but tended to be specifically great at some things, but poor, or just made no attempt to address others. For my part, the fact that neither SASS or Stylus offered LESS's @import/reference method, and PostCSS gave me a path to create it for myself was the clincher.

PostCSS appears to be settling down into maintenance mode, but there does not appear to be much of an heir-apparent, and its popularity not yet waning. I'm more than happy to hand-roll artisanal stylesheets, but when life would be easier with a little help, PostCSS is my go-to.

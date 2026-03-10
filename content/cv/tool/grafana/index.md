+++
title = 'Grafana'
type = "cv/tool"
yearsExp = 7

[params]
  image = "images/Grafana_icon.svg"
  imageAlt = "Grafana logo"
  imageType = "logo"

experience = ['personal', 'skyspecs', 'simpl']
skills = ['application-design', 'infrastructure', 'service-orchestration', 'web-dev']
+++

Almost as important as being able to design and build elegent applications is the ability to see what it's actually doing. Thought that new refactor was super clever and efficient? Turns out it is 400ms slower than the code it replaced. Each major cloud offering has their own internal logging and metrics system, but if your code is not running in a major cloud, you don't like the stock options of your cloud provider, or it's running across many clouds, having a good external observability platform is critical.

There are a bunch out there, and I've spent a little bit of time with a few of them, but I tend to keep going back to Grafana. It fits neatly in my rubrick of open source/source available, simple, portable, scalable, and cheap. It be run on a device as light as a raspberry pi, but their managed cloud offering has an incredibly generous free tier, and can scale into the stratosphere. It's also purdy.

I have instrumented several large application ecosystems, am very comfortable setting up dashboards for debugging, and have instrumented OpenTelemetry manually in code, and via Grafana and AWS's auto-instrumentation tools for logging and tracing.

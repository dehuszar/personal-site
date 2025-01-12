+++
title = 'Grafana'
type = "cv/tool"
yearsExp = 7

[params]
  image = "images/Grafana_icon.svg"
  imageAlt = "Grafana logo"
  imageType = "logo"

experience = ['personal', 'skyspecs', 'simpl']
skills = ['observability', 'infrastructure']
+++

Almost as important as being able to design and build elegent applications is the ability to see what it's actually doing. Thought that new refactor was super clever and efficient? Turns out it takes 400ms slower than the code it replaced. Each major cloud offering has their own internal logging and metrics system (I have worked a fair amount with AWS's CloudWatch), but if your code is not running in a major cloud, or it's running across many clouds, or you want _to be able_ to move your application with minimal refactors, having a good external observability platform is critical.

There are a bunch out there, and I've spent a little bit of time with a few of them, but I tend to keep going back to Grafana. It fits neatly in my rubrick of open source/source available, simple, portable, scalable, and cheap. It be run on a device as light as a raspberry pi, but their managed cloud offering has an incredibly generous free tier, and can scale into the stratosphere. It's also purdy.

I would not put myself out there as an observability analyst, but I have instrumented several large application ecosystems, am very comfortable setting up dashboards for debugging, and have it as a 2025 goal to immerse myself in the OpenTelemetry ecosystem.

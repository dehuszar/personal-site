+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = true
summary = "Is this thing on?"

tags = []

[params]
  image = ""
[[resources]]
  title = ""
  [resources.params]
    alt = ""
    class = ""
+++

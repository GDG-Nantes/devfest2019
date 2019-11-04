---
key: performance_tuning_of_go_applications_in_cloud
title: Performance tuning of Go applications in Cloud
id: omD4YZC4aeDe3WlHQ6IA
language: English
talkType: conference
tags:
  - _cloud___devops
complexity: Intermediate
speakers:
  - valentin_deleplace
videoId: ye20OxNWkjI
presentation: null
draft: false
---
I want to optimize the performance of my cloud components, to save money, but most importantly to improve responsiveness. Nobody enjoys slow software...

My key advice is to consider the whole picture, to measure, and to focus on the bottlenecks.
I will tell the story of a cool app written in Go using App Engine and GKE, which has latency problems. Let's explore how to diagnose it with the tooling: Benchmarks, Pprof, CPU Trace, Flame graphs, OpenTelemetry, and StackDriver's waterfalls.

Once I am able to visualize the latencies, it becomes much easier to incrementally make my app faster!
---
key: dr_gopher__anatomie_du_scheduler_golang
title: 'Dr Gopher, Anatomie du Scheduler Golang'
id: gfMKNuH75Ksioc9rdRCB
language: French
talkType: quickie
tags:
  - _languages
complexity: Intermediate
speakers:
  - nicolas_lepage
videoId: null
presentation: null
draft: false
---
Dr Gopher a décidé de comprendre comment fait le runtime Golang pour multiplexer des goroutines sur des threads système.


Il va trifouiller dans les entrailles du scheduler, pour y découvrir ses éléments de base G M et P, ainsi que ses différents mécanismes : création de thread, thread parking, local queues, ou encore work stealing...


La programmation concurrentielle en Go permet au développeur de s'abstraire de la gestion des ressources systèmes ; penchons-nous avec Dr Gopher sur l'anatomie du scheduler et voyons comment il optimise naturellement l'utilisation de ces ressources.
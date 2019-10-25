---
key: infrastructure_as_code__il_n_y_a_pas_que_terraform_dans_la_vie
title: 'Infrastructure As Code, il n''y a pas que Terraform dans la vie'
id: KZTtPMRanQO97kymurGQ
language: French
talkType: quickie
tags:
  - _cloud___devops
complexity: Beginner
speakers:
  - emmanuel_lebeaupin
videoId: CwqFpSByEI0
presentation: null
draft: false
---
Quand on parle d'Infrastructure As Code, on pense souvent à Terraform. Cependant, il existe d'autres outils qui émergent et qui mériteraient d’être autant connu.

Tout comme Terraform, Pulumi prend en charge les principaux fournisseurs d'infrastructure (GCP, AWS, Azure, vSphere,..) et permet aussi de manipuler des ressources Kubernetes. Cependant, avec Pulumi, il n'est pas nécessaire d'apprendre encore un nouveau DSL. Avec Terraform, on décrit son infrastructure à travers un langage appelé Hashicorp Configuration Language. Au contraire, Pulumi permet d'utiliser le langage de son choix (Javascript, Typescript, Python ou Go) ce qui facilite l'organisation de son code et permet de profiter de tout l'écosystème qu'offre ces langages.

Durant ce talk, nous découvrir les bases de cette solution le tout illustré par des cas concrets.
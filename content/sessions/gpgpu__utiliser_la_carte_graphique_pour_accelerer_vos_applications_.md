---
key: gpgpu__utiliser_la_carte_graphique_pour_accelerer_vos_applications_
title: 'GPGPU: Utiliser la carte graphique pour accélérer vos applications!'
id: gLlR2d54uGV94NChK47Z
language: French
talkType: conference
tags:
  - _languages
complexity: Intermediate
speakers:
  - mael_naccache
videoId: null
presentation: null
draft: false
---
En 2004, au SIGGRAPH (la plus importante conférence pour tout ce qui se rapporte au "computer graphics") des chercheurs de l'université de Stanford théorise le GPGPU : Ne plus se restreindre à de la 3D et pouvoir  faire du calcul "générique" sur GPU. Inspiré par ce papier, NVidia sortira CUDA en Juin 2007 permettant enfin au monde entier d'exploiter les GPU NVidia pour tout type de calcul. Suivra ensuite OpenCL, par Khronos Group (notamment responsable d'OpenGL), généralisant le GPGPU à tous les GPUs, et enfin, l'intégration du GPGPU dans toute les APIs graphiques majeurs (OpenGL, Metal, DirectX et Vulkan).

Il est donc aujourd'hui plus simple que jamais de programmer sur GPU, mais pourquoi ? Comment ? Et comment le faire bien ?

Ce talk répondra à toutes ces questions et les mettra en oeuvre sous forme de live coding !

# Plan du talk
Ce talk à 3 buts:
1. Expliquer pourquoi il est temps d'exploiter le GPU dans vos application
2. Montrer comment programmer sur GPU
3. Parler plus en détail des spécificité du GPU et des optimisations qui lui sont propres

## Expliquer pourquoi il est temps d'exploiter le GPU dans vos applications
Quand bien même le GPGPU est désormais disponible sur toutes les plateformes depuis plusieurs années, le GPGPU reste largement sous exploité. Cette partie du talk consistera donc à expliquer pourquoi votre application peut bénéficier du GPGPU, qu'elle soit une application mobile, un backend web ou un moteur d'IA. Elle se basera sur des exemples théoriques et, autant que possible, concrets.

## Montrer comment programmer sur GPU
Cette partie, qui sera réalisé en live-programming, montrera comment il est possible de réaliser un simple programme qui fait du GPGPU. Le live-programming sera réalisé avec Rust et OpenGL (mais le choix des technologies est peu important et facilement interchangeable).

## Parler plus en détail des spécificité du GPU et des optimisations qui lui sont propre
Le GPU fonctionne de façons très différente d'un CPU. Si les différences majeurs seront introduites en première partie, cette partie en parlera plus en détails. De plus, elle expliquera comment optimiser un programme sur GPU en ce basant sur l'exemple live-codé dans la partie précédente.

# Prérequis
Ce talk est destiné à un public technique. Il est recommandé d'avoir quelques connaissances sur:
l'architecture basique d'un PC moderne
Quelques concepts de programmation parallèle
Des bases de C, notamment sur les structures de données (flottant, entier, ...)
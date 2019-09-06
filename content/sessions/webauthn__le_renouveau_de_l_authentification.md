---
key: webauthn__le_renouveau_de_l_authentification
title: 'WebAuthn: Le renouveau de l''authentification'
id: nDBENy1j3DZpCzgas4yX
language: French
talkType: quickie
tags:
  - _web
complexity: Beginner
speakers:
  - thomas_blaisot
videoId: null
presentation: null
draft: false
---
En 2018 on trouve encore des mots de passe sur des postits collés à l'écran et qu'on retrouve sur twitter, etc...

L'authentification 2 factor ne résolvant pas ce problème, une nouvelle solution à été trouvée par l'alliance FIDO (Fast IDentity Online):

Au travers nottament du W3C ils ont proposé une solution qui permettra enfin à chacun de ne plus retenir ou saisir de mot de passe. Et même mieux encore, de ne plus avoir à choisir de mot de passe pour s'inscrire sur des sites : le PASSWORDLESS devient réalité (plus communément appelé UAF ou encore WebAuthn).

Basé sur le principe "ancien" de la cryptographie asymétrique, ces standards veulent révolutionner la façon dont tout le monde s'authentifie, pour peut être, un jour enfin, ne plus rencontrer de login "admin:password" sur les serveurs de prod !

Ce quikie est une présentation rapide du pourquoi et du comment l'implémenter, pour que chacun repense là façon dont il s'authentifie, mais aussi, en tant qu'acteur du web, comment il demande aux utilisateurs de s'authentifier.
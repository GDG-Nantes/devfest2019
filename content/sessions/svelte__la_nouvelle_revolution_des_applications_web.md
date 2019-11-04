---
key: svelte__la_nouvelle_revolution_des_applications_web
title: 'Svelte, la nouvelle révolution des applications web'
id: upyuHsqO0MNP8cz8ttwQ
language: French
talkType: conference
tags:
  - _web
complexity: Intermediate
speakers:
  - alexis_jacomy
videoId: FY0VkYFZb3k
presentation: https://slides.com/jacomyal/svelte#/
draft: false
---
J'ai récemment vu la conférence [Rethinking Reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao) de Rich Harris, sur son outil [Svelte](https://svelte.dev/). Je suis sûr que cette conférence fera date, et va influencer tout l'écosystème des outils JavaScript dans les années à venir.

Pourquoi&nbsp;? Parce que le constat de son auteur est assez convaincant&nbsp;: Nous venons de passer de _"les ordinateurs et les navigateurs web sont de plus en plus puissants"_ à _"les applications web sont déployées sur des machines de moins en moins puissantes (objets connectés...)"_ sans nous en rendre compte. Et les outils à notre disposition aujourd'hui (React, Angular...) ont grandement amélioré la qualité et l'efficacité du développement de nos applications, mais pas forcément autant leur performance ou la taille des fichiers finaux.

Ainsi, pour adresser ce nouveau problème, Svelte **compile** le code d'entrée, en un code JavaScript "vanilla", qui comprend les instructions JavaScript les plus simples et directes pour créer et mettre à jour le DOM, plutôt que de passer par une approche type *Virtual DOM* pendant l'exécution du code. Ce qui rend Svelte incroyablement **performant** (quasi optimal théoriquement, pour les vues), et **léger** (en particulier avec très peu de code issu de Svelte lui-même dans les fichiers finaux). 

Mais alors&nbsp;:
  - Comment ça fonctionne, Svelte&nbsp;? Et en pratique, développer avec, ça donne quoi&nbsp;?
  - Comment ça intéragit avec les autres outils que nous maitrisons déjà&nbsp;?
  - Enfin, maintenant que de nouvelles portes sont ouvertes, **n'y aurait-il pas encore mieux à faire**&nbsp;?
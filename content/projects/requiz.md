---
name: Requiz
slug: requiz
description: Requiz est un site permettant de jouer à des quiz en simultané avec d'autres personnes, et de créer et partager son propre quiz.
image: requiz-thumbnail.webp
order: 3
---

::project-header{image="requiz-thumbnail.webp"}
#hero
# Requiz

#links
- [Repo GitHub](https://github.com/ColinLienard/requiz)
::

::project-paragraph
> ⚠️ Projet non terminé
::

::project-paragraph
## Technologies utilisées

- React
- Nextjs
- Next Auth
- Typescript
- Socket.io
- MongoDB
::

::project-paragraph
## Présentation

**Requiz** est un site permettant de jouer à des quiz en simultané avec d'autres personnes, et de créer et partager son propre quiz.

L'utilisateur peut se connecter ou se créer un compte en utilisant une adresse mail, ou alors en se connectant avec Discord ou Google.
::

::project-image{source="requiz-0.webp"}
L'interface de connexion.
::

::project-paragraph
Un **éditeur de quiz** complet est présent et permet de créer des questions, chacune contenant des réponses possibles dont une seule qui est juste. Un thème peut aussi être choisi, ainsi qu'un nom et qu'une description. L'utilisateur peut ensuite sauvegarder son quiz pour l'éditer plus tard, ou alors le publier pour qu'il soit visible pour les autres utilisateurs.
::

::project-image{source="requiz-1.webp"}
L'éditeur de quiz.
::

::project-paragraph
Lorsqu'un quiz est rejoint par au moins une personne, une **salle d'attente** est créé dans laquelle un chat est disponible.
::

::project-image{source="requiz-2.webp"}
La salle d'attente.
::

::project-paragraph
Quand le quiz est lancé, les questions s'enchaînent et les joueurs doivent cliquer sur ce qu'il pense être la bonne réponse. À chaque mauvaise réponse, les joueurs perdent une vie. Le gagnant du quiz est celui à qui il reste le plus de vies.
::

::project-image{source="requiz-3.webp"}
L'interface de quiz.
::

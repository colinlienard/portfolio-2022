---
name: Requiz
description: (Webdesign, development) Application to play quizzes simultaneously with other people, and to create and share your own quiz.
image: requiz-thumbnail.webp
color: 3C38FC
order: 5
---

::project-header{image="requiz-0.webp"}
#hero
# Requiz

#links
- [GitHub repo](https://github.com/ColinLienard/requiz){:target="_blank"}
::

::project-paragraph
> ⚠️ Project not completed
::

::project-paragraph
## Tech stack

- React
- Next.js
- Next Auth
- Typescript
- Socket.io
- MongoDB
::

::project-paragraph
## Presentation

**Requiz** is a site where you can play quizzes simultaneously with other people, and create and share your own quiz.

The user can log in or create an account using an email address, or by connecting with Discord or Google.
::

::project-image{source="requiz-1.webp"}
The login interface.
::

::project-paragraph
A full-featured **quiz editor** is present and allows you to create questions, each containing possible answers, only one of which is correct. A theme can also be chosen, as well as a name and a description. The user can then save his quiz to edit it later, or publish it so that it is visible to other users.
::

::project-image{source="requiz-2.webp"}
The quiz editor.
::

::project-paragraph
When a quiz is joined by at least one person, a **waiting room** is created in which a chat is available.
::

::project-image{source="requiz-3.webp"}
The waiting room.
::

::project-paragraph
When the quiz is launched, the questions follow one another and players must click on what they think is the right answer. For each wrong answer, players lose a life. The winner of the quiz is the player with the most lives left.
::

::project-image{source="requiz-4.webp"}
The quiz interface.
::

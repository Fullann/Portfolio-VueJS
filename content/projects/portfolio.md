---
id: 5
title: Portfolio
description: Mon portfolio
tech: Vue NodeJS Firebase Nuxt Tailwind 
logo: /images/project/portfolio.png
github: https://github.com/Fullann/Portfolio
website: fullann.ch
---

# Portfolio

## Introduction
Ce projet a été réaliser dans le cadre de la fin de l'ETML et de la recherche d'emplois.Ce portfolio est complétement customisable. Tous les adones (i18n,blog,project,review,cv,connexion, etc) peuvent etre actionner ou non

## Instalation
Il vous suffit de cloner le répertoire
```
git clone https://github.com/Fullann/Portfolio.git
 ```
Installer les dépendances (Ce projet n'a pas été maintenue à jour donc possibilité de crash avec les nouvelle version de NodeJS. la mienne 14.1.0) 
```
yarn install 
```
Configurer votre base de donnée firebase
```
// Copier le .env.example
cp .env.example .env
```
- Introduire les donnée de connexion mise sur [firebase](https://firebase.google.com/)(N'oublier pas d'activer l'autentification et les types de connexion que vous souhaiter. Sur le projet seulment en anonyme et google son mis) dans le .env.
- Configurer comme vous le souhaiter le config.js
<br>

Puis start le projet
```
yarn start
```
Et enjoy ;)

### Ajouter une langue
Dans le fichier /nuxt.config.js sous la partie i18n ajouter ceci sous locales:
```
 { code: 'fr', name: 'Français', file: 'fr_Fr.js' },
```
Créé dans le dossier lang un fichier qui se nomme avec le nom de la langue.js et mettre ceci a l'intérieur:
```
// /lang/fr_FR.js
import config from '../config'

export default config.strings.fr_FR
```
et dans le fichier /config.js  ajouter pour chaque champs la traduction
```
 fr_FR: {
      download: 'Télécharger',
      nav: {
        home: 'Acceuil',
        blog: 'Blog',
        projects: 'Projets',
        uses: 'Setup',
        resume: 'CV',
        buyMeACoffee: 'Buy me a ☕',
        signIn: 'Connexion',
        signOut: 'Déconnexion'
      },
      hero: {
        iBlogTech: 'je fais des expérience',
        haveALook: 'Jetez y un coup d\u0027œil',
        friendlyNeighborhood: 'Je suis un',
        description: 'Je suis un jeune developper frontend. Je suis étudiant à l\u0027ETML et dans mon temps libre, je code des projets personnels.',
        words: ['développeur', 'designer', 'programmeur'],
        work: "A travaillé chez"
      },
      githubCalendar: {
        header: 'Contributions',
        subtext: 'Calendrier Github'
      },
      blog: {
        header: 'Blog',
        subtext: 'Je fais des essais en informatique et je vous les racontes.'
      },
      recentBlog: {
        header: 'Dernières publications',
        subtext: 'Mes nouvelles expériences'
      },
      uses: {
        header: 'Setup',
        subtext: 'un résumé rapide de ce que j\u0027utilise quotidiennement pour coder'
      },
      projects: {
        header: 'Projets',
        subtext: 'Cette page énumère certains de mes projets personnels et professionnels. chaque projet a une description, cliquez sur le titre pour le lire'
      },
      recommendations: {
        header: 'Recommandations',
        subtext: 'Ce qu\u0027on a dit de moi'
      },
      error:{
        text:'Oh oh ! On dirait que tu t\u0027es perdu.Retournez à la page d\u0027accueil si vous l\u0027osez !',
        button:'J\u0027ose!'
      }
    }
```

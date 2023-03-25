---
id: 5
title: NVM
createdAt: "2022-03-25 5:00:00"
tags:
  - français
  - ubutnu
  - nodejs
  - NVM
category: nodejs
author:
  name: Fullann
  image: /images/me/logo.png
---

Bonjour a vous ! Voila pour mes projet j'utilise différente technologie et version de nodeJS donc je voulais vous faire un petit récapitulatif de comment faire pour avoir plusieur verion de node js. Ayant un vps sous linux il a bien fallut que je trouve une alternative a nvm  .

<!--more-->

# NVM

## NVM qu'es ce que sait ?
Node Version Manager (NVM) vous permet d'installer et de passer d'une version à l'autre de Node.JS en utilisant la ligne de commande. Cet article explique comment installer Node Version Manager et Node.JS sur Ubuntu 20.04.

## Installer NVM (automatique)
Se connecter en SSH au serveur et faire cette commande
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
Puis restrt le terminal.
<br>
Vous pouvez tester l'installation avec cette commande:
```
nvm -v
```
<br>
Pour mettre a jour il suffit de faire ceci:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

## Exemple d'utilisation
```
//Pour une version spécifique
nvm install 14.1.0

//Pour la dernière version
nvm install node

//Et Pour tester
node -v
```

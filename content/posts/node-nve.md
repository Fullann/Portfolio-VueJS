---
id: 4
title: NVE
createdAt: "2022-03-25 5:00:00"
tags:
  - français
  - windows
  - nodejs
  - NVE
category: nodejs
author:
  name: Fullann
  image: /images/me/logo.png
---

Bonjour a vous ! Voila pour mes projet j'utilise différente technologie et version de nodeJS donc je voulais vous faire un petit récapitulatif de comment faire pour avoir plusieur verion de node js et comment utiliser yarn.Ce tuto est la première partie sur NVE

<!--more-->
# NVE
## Pourquoi utiliser NVE
Pour installer NVE qui nous permettera de changer de version de nodeJS a tout moment Contrairement à nvm exec, il

- peut exécuter plusieurs versions de Node.js à la fois
- peut être exécuté de manière programmatique
- est beaucoup plus rapide
- ne nécessite pas d'étape d'installation séparée pour chaque version de Node
- peut exécuter automatiquement la dernière version mineure/patch de la version majeure
- fonctionne sous Windows. Il n'est pas nécessaire de l'exécuter en tant qu'administrateur.
- ne nécessite pas Bash
-est installé en tant que module Node (par opposition à un script d'installation de Bash téléchargé avec curl)

nve exécute un seul fichier ou une seule commande. Il ne modifie pas les binaires globaux de node ou de npm. Pour exécuter une version spécifique de Node.js pour un projet entier ou une session shell, veuillez utiliser nvm, nvm-windows, n ou nvs à la place.
## Installer et utiliser NVE
Il suffit de faire cette commande:
```
npm install -g nve
```
Et pour l'utilisation rien de plus simple que
```
nve [OPTIONS...] VERSION,... [COMMAND] [ARGS...]
```
## Exemple d'utilisation
```
# Same as `node` but with Node 12
$ nve 12 node
Welcome to Node.js v12.22.1.
Type ".help" for more information.
> .exit

# Same as `node file.js` but with Node 8
$ nve 8 node file.js

# Any command can be used
$ nve 12 npm test

# Execute a local binary
$ nve 8 ava

# Run a specific version
$ nve 8.10.0 npm test

# Use a version range
$ nve "<8" npm test

# Run the latest Node.js version
$ nve latest npm test

# Run the latest LTS version
$ nve lts npm test

# Run the Node version from `~/.nvmrc` or the current process version
$ nve global npm test

# Run the current directory's Node.js version using its `.nvmrc` or `package.json` (`engines.node` field)
$ nve local npm test

# Use a different mirror for the Node binaries
$ nve --mirror=https://npm.taobao.org/mirrors/node 8 npm test

# Do not use the cached list of available Node.js versions
$ nve --fetch 8 npm test

# Always use the cached list of available Node.js versions even if it's more
# than one hour old
$ nve --no-fetch 8 npm test

# Use a different CPU architecture for the Node binaries
$ nve --arch=x32 8 npm test

# Chaining commands
$ nve 8 npm run build && nve 8 npm test

# Cache Node 8 download
$ nve 8 node --version
```
Pour l'utliser sur plusieur version en meme temps:
```
# Run multiple versions
$ nve 12,10,8 npm test

 ⬢  Node 12

  105 tests passed
  Finished 'test' after 3.8 s

 ⬢  Node 10

  105 tests passed
  Finished 'test' after 4.2 s

 ⬢  Node 8

  105 tests passed
  Finished 'test' after 4.5 s

# Do not abort on the first version that fails
$ nve --continue 12,10,8 npm test

# Run all versions in parallel
$ nve --parallel 12,10,8 npm test

# Cache multiple Node downloads
$ nve 12,10,8 node --version
```
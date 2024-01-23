## Concept

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying a pedagogical tool.

## Setup & 

### Windows users

Be sure to run these commands in a git terminal to avoid [issues with newline formats](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats):

```
git config --global core.eol lf
git config --global core.autocrlf false
```

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm install`
- Create environment files (`.env`) in both `backend` and `frontend`: you can copy `.env.sample` files as starters (**don't** delete them)

### Available Commands

- `db:migrate` : Run the database migration script
- `db:seed` : Run the database seed script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools (will be executed on every _commit_, and refuse unclean code)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS

## Deployment with Traefik

> ⚠️ Prerequisites : You must have installed and configured Traefik on your VPS beforehand.
> https://github.com/WildCodeSchool/vps-traefik-starter-kit/

For deployment, you have to go to `secrets` → app `actions` on the github repo to insert via `New repository secret` :

- SSH_HOST : IP address of your VPS
- SSH_USER : SSH login to your VPS
- SSH_PASSWORD : SSH connection password to your VPS

And a public variable from the tab `/settings/variables/actions` :

- PROJECT_NAME : the name of the project used to create the subdomain.

> ⚠️ Warning : underscores are not allowed. They can cause trouble with the let's encrypt certificate

Use this same tab to add the other environment variables required for the project if any.

Only the backend will be accessible. The root path `"/"` will redirect to the dist folder on your frontend. In order to allow that, please uncomment the line as explain on `backend/src/app.js` (Line 102).
Because the backend will serve the front, the global variable VITE_BACKEND_URL will be set with an empty string.

Your url will be ` https://${PROJECT-NAME}.${subdomain}.wilders.dev/`.

### About the database

The database is automaticaly deployed with the name of your repo. During the build of the projet (`docker-entry.sh`), the `node migrate.js` command is executed in the backend. If you want to seed automaticaly your database using the `seed.js` script, replace the command _build_ on you `backend/package.json` by `node migrate.js && node seed.js`.

### About public assets (pictures, fonts...)

Don't use any public folder on your frontend. This folder won't be accessible online. You may move your public assets in the `backend/public` folder. Prefer [static assets](https://vitejs.dev/guide/assets) when possible.

### About Logs

If you want to access the logs of your online projet (to follow the deployement or to watch any bug error), connect to your VPS (`ssh user@host`).
Then, go on your specific project and run  `docker compose logs -t -f`.

<!-- traduction en francais -->
## Concept

Ce modèle est destiné à servir de base pour chaque P2/P3 suivant la pile React-Express-MySQL, comme appris à la Wild Code School.
Il est préconfiguré avec un ensemble d'outils qui aideront les étudiants à produire du code de qualité industrielle et plus facile à maintenir, tout en restant un outil pédagogique.

## Configuration et utilisation

### Utilisateurs Windows

Assurez-vous d'exécuter ces commandes dans un terminal git pour éviter les [problèmes avec les formats de nouvelle ligne](https://en.wikipedia.org/wiki/Newline#Issues_with_différent_newline_formats) :

```
git config --global core.eol lf
git config --global core.autocrlf faux
```

### Initialisation du projet

- Dans VSCode, installez les plugins **Prettier - Code formateur** et **ESLint** et configurez-les
- Clonez ce dépôt, entrez-le
- Exécutez la commande `npm install`
- Créez des fichiers d'environnement (`.env`) à la fois dans `backend` et `frontend` : vous pouvez copier les fichiers `.env.sample` en guise de démarreur (**ne** ne les supprimez pas)

### Commandes disponibles

- `db:migrate` : Exécutez le script de migration de la base de données
- `db:seed` : Exécutez le script de départ de la base de données
- `dev` : démarre les deux serveurs (frontend + backend) dans un seul terminal
- `dev-front` : Démarre le serveur frontend React
- `dev-back` : Démarre le serveur backend Express
- `lint` : exécute les outils de validation (sera exécuté à chaque _commit_ et refusera le code impur)

## FAQ

### Outils

- _Concurrently_ : permet à plusieurs commandes de s'exécuter simultanément dans la même CLI
- _Husky_ : Permet d'exécuter des commandes spécifiques qui se déclenchent sur des événements _git_
- _Vite_ : Alternative à _Create-React-App_, packaging moins d'outils pour une expérience plus fluide
- _ESLint_ : outil "Qualité du code", garantit que les règles choisies seront appliquées
- _Prettier_ : outil "Qualité du code" également, focus sur le guide de style
- _Airbnb Standard_ : Un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS

## Déploiement avec Traefik

> ⚠️ Prérequis : Vous devez au préalable avoir installé et configuré Traefik sur votre VPS.
> https://github.com/WildCodeSchool/vps-traefik-starter-kit/

Pour le déploiement, vous devez vous rendre dans `secrets` → app `actions` sur le repo github pour l'insérer via `Nouveau secret du référentiel` :

- SSH_HOST : adresse IP de votre VPS
- SSH_USER : Connexion SSH à votre VPS
- SSH_PASSWORD : Mot de passe de connexion SSH à votre VPS

Et une variable publique de l'onglet `/settings/variables/actions` :

- PROJECT_NAME : le nom du projet utilisé pour créer le sous-domaine.

> ⚠️ Attention : les traits de soulignement ne sont pas autorisés. Ils peuvent causer des problèmes avec le certificat let's encrypt

Utilisez ce même onglet pour ajouter les autres variables d'environnement requises pour le projet, le cas échéant.

Seul le backend sera accessible. Le chemin racine `"/"` sera redirigé vers le dossier dist sur votre frontend. Afin de permettre cela, veuillez décommenter la ligne comme expliqué sur `backend/src/app.js` (ligne 102).
Étant donné que le backend servira le front, la variable globale VITE_BACKEND_URL sera définie avec une chaîne vide.

Votre URL sera ` https://${PROJECT-NAME}.${subdomain}.wilders.dev/`.

### À propos de la base de données

La base de données est automatiquement déployée avec le nom de votre dépôt. Lors de la construction du projet (`docker-entry.sh`), la commande `node migrate.js` est exécutée dans le backend. Si vous souhaitez amorcer automatiquement votre base de données à l'aide du script `seed.js`, remplacez la commande _build_ sur votre `backend/package.json` par `node migrate.js && node seed.js`.

### À propos des biens publics (images, polices...)

N'utilisez aucun dossier public sur votre frontend. Ce dossier ne sera pas accessible en ligne. Vous pouvez déplacer vos actifs publics dans le dossier « backend/public ». Préférez les [actifs statiques](https://vitejs.dev/guide/assets) lorsque cela est possible.

### À propos des journaux

Si vous souhaitez accéder aux logs de votre projet en ligne (pour suivre le déploiement ou surveiller toute erreur de bug), connectez-vous à votre VPS (`ssh user@host`).
Ensuite, allez sur votre projet spécifique et exécutez  `docker compose logs -t -f`.

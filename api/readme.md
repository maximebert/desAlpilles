# O'pet (ou autre)

## Description

Un site pour stocker les données de ses animaux et pouvoir organiser des évenements comme les rendez vous au véterinaire, soins, entretiens
ou tout autres rendez vous de nos chers amis à fourrure (ou pas).

## Installation

- installer les dépendances npm.

- créer une bdd.

- utiliser sqitch ou fichier sql dans le dossier ./data pour deployer  les tables et du seeding (optionnel) sur votre bdd.

- créer et configurer le .env à la racine du projet (voir .env.example).

- npm run resetdb = réinitialiser "rapidement" la bdd avec le seeding.

## Lancer le serveur

- npm run dev = lancer l'api en dev.

- npm run start = lancer l'api en prod.

## Documentation de l'api

http://localhost:3000/api-docs/

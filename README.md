# Kanban IA Assistant

Une application web interactive combinant un tableau Kanban avec une interface IA pour la gestion de projet Agile.

## Fonctionnalités

- Tableau Kanban interactif avec colonnes "À faire", "En cours" et "Terminé"
- Interface de chat IA pour poser des questions sur la méthodologie Kanban
- Visualisation dynamique des réponses de l'IA dans le tableau Kanban
- Interface utilisateur moderne et responsive avec Vue.js et Tailwind CSS

## Prérequis

- Node.js (v14 ou supérieur)
- NPM (v6 ou supérieur)
- Ollama installé localement avec le modèle Mistral

## Installation

1. Cloner le repository :
\`\`\`bash
git clone [url-du-repo]
cd kanban-ia-assistant
\`\`\`

2. Installer les dépendances :
\`\`\`bash
npm install
\`\`\`

3. Démarrer le serveur de développement :
\`\`\`bash
# Dans un premier terminal
npm run dev

# Dans un second terminal
node server/index.js
\`\`\`

4. Ouvrir l'application dans votre navigateur à l'adresse : http://localhost:5173

## Utilisation

1. Accédez à l'interface web
2. Utilisez le champ de texte en haut de la page pour poser vos questions sur la méthodologie Kanban
3. L'IA analysera votre question et mettra à jour le tableau Kanban avec une visualisation appropriée
4. Vous pouvez faire glisser et déposer les tâches entre les colonnes pour organiser votre travail

## Technologies utilisées

- Frontend : Vue.js 3, Tailwind CSS
- Backend : Node.js, Express
- IA : Ollama avec le modèle Mistral
- Autres : Vite, PostCSS

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

MIT

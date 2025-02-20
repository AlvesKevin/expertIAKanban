import express from 'express';
import cors from 'cors';
import { Ollama } from 'ollama';

const app = express();
const port = process.env.PORT || 3000;

// Configuration CORS plus détaillée
app.use(cors({
  origin: 'http://localhost:5173', // Autoriser spécifiquement notre frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Log pour les requêtes entrantes
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Simplification de la configuration Ollama
const ollama = new Ollama({
  host: 'http://localhost:11434'
});

app.post('/api/query', async (req, res) => {
  try {
    console.log('Requête reçue:', req.body);
    const { query } = req.body;
    
    const context = `Tu es un expert en méthodologie Kanban et gestion de projet Agile.
    En réponse à la question, fournis :

    1. Une explication détaillée mais accessible qui doit inclure :
       - Le contexte spécifique de la situation
       - Les avantages concrets de l'approche Kanban dans ce cas
       - Des exemples pratiques et concrets
       - Des conseils d'implémentation

    2. Une liste organisée de tâches réparties dans les trois colonnes suivantes (utilise EXACTEMENT ces titres) :

    À faire:
    - [titre court de la tâche]: [description détaillée avec contexte et objectif]

    En cours:
    - [titre court de la tâche]: [description détaillée avec contexte et objectif]

    Terminé:
    - [titre court de la tâche]: [description détaillée avec contexte et objectif]

    IMPORTANT: 
    - Chaque tâche doit avoir un titre clair et une description détaillée mais concise
    - Utilise uniquement le format "- titre: description"
    - Ne mets pas de tableaux ou de formatage markdown
    - Pas de numérotation des tâches
    - Maximum 5 tâches par colonne
    - Les descriptions doivent être concrètes et actionnables

    Question : ${query}`;

    console.log('Envoi de la requête à Ollama...');
    const response = await ollama.chat({
      model: 'mistral:latest',
      messages: [{ role: 'user', content: context }]
    });
    console.log('Réponse reçue de Ollama');

    // Séparer la réponse textuelle des tâches
    const { explanation, tasks } = processAIResponse(response.message.content);
    console.log('Réponse traitée:', { explanation, tasks });

    res.json({ explanation, tasks });
  } catch (error) {
    console.error('Erreur lors du traitement de la requête:', error);
    res.status(500).json({ 
      error: 'Erreur lors du traitement de la requête',
      details: error.message 
    });
  }
});

function processAIResponse(content) {
  let tasks = {
    todo: [],
    inProgress: [],
    done: []
  };
  
  let explanation = content;
  
  // Recherche des sections de tâches avec différents formats possibles
  const todoSection = content.match(/(?:À faire|À faire:|todo):([\s\S]*?)(?=En cours|En cours:|Terminé|Terminé:|$)/i);
  const inProgressSection = content.match(/(?:En cours|En cours:):([\s\S]*?)(?=Terminé|Terminé:|$)/i);
  const doneSection = content.match(/(?:Terminé|Terminé:):([\s\S]*?)(?=$)/i);

  // Supprimer la partie des tâches de l'explication
  if (todoSection || inProgressSection || doneSection) {
    explanation = content.split(/(?:À faire|À faire:|En cours|En cours:|Terminé|Terminé:)/i)[0].trim();
  }

  // Parser les tâches pour chaque section
  if (todoSection) {
    tasks.todo = parseTasks(todoSection[1]);
  }
  if (inProgressSection) {
    tasks.inProgress = parseTasks(inProgressSection[1]);
  }
  if (doneSection) {
    tasks.done = parseTasks(doneSection[1]);
  }

  return { explanation, tasks };
}

function parseTasks(section) {
  if (!section) return [];
  
  // Liste de noms pour l'assignation aléatoire
  const teamMembers = [
    'Sophie Martin',
    'Thomas Bernard',
    'Emma Dubois',
    'Lucas Petit',
    'Julie Moreau',
    'Alexandre Simon'
  ];
  
  return section
    .split('\n')
    .filter(line => line.trim().startsWith('-') || line.trim().startsWith('•'))
    .map((line, index) => {
      const taskText = line.replace(/^[-•]/, '').trim();
      const [title, ...descriptionParts] = taskText.split(':');
      const description = descriptionParts.join(':').trim() || '';
      
      // Assigner aléatoirement un membre de l'équipe
      const assignee = teamMembers[Math.floor(Math.random() * teamMembers.length)];
      
      return {
        id: `task-${Date.now()}-${index}`,
        title: title.trim(),
        description,
        assignee
      };
    })
    .filter(task => task.title);
}

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
  console.log('Appuyez sur Ctrl+C pour arrêter le serveur');
}); 
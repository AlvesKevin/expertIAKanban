<template>
  <div class="min-h-screen bg-gradient-to-br from-[#F3F0FF] via-[#FFF0F7] to-[#F0F7FF]">
    <div class="flex">
      <!-- Section explicative à gauche -->
      <div class="w-1/4 min-w-[300px] p-8 bg-white/80 backdrop-blur-sm border-r border-gray-100">
        <div class="sticky top-8">
          <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Qu'est-ce que Kanban ?</h2>
          <div class="space-y-6 text-gray-600">
            <p class="leading-relaxed">
              Kanban est une méthode simple pour organiser votre travail. Elle vient de Toyota et aide à visualiser et gérer les tâches de manière efficace.
            </p>

            <!-- Sections dépliables -->
            <div class="space-y-4">
              <!-- Comment ça marche -->
              <div class="border border-gray-100 rounded-3xl overflow-hidden bg-white/50">
                <button 
                  @click="sections.howItWorks = !sections.howItWorks" 
                  class="w-full px-4 py-3 flex justify-between items-center hover:bg-white/50 transition-colors duration-200"
                >
                  <span class="font-medium text-gray-800">Comment ça marche ?</span>
                  <svg 
                    :class="{'rotate-180': sections.howItWorks}" 
                    class="w-5 h-5 text-gray-400 transform transition-transform duration-200" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-show="sections.howItWorks" class="px-4 pb-4 space-y-2">
                  <p><span class="font-medium">Tableau visuel :</span> Imaginez un tableau divisé en colonnes. Chaque colonne représente une étape du travail (par exemple : « À faire », « En cours », « Terminé »).</p>
                  <p><span class="font-medium">Déplacement des tâches :</span> Chaque tâche est représentée par une carte que vous déplacez de gauche à droite au fur et à mesure qu'elle progresse.</p>
                  <p><span class="font-medium">Limitation des tâches :</span> On fixe un nombre maximum de tâches par colonne pour éviter d'être surchargé.</p>
                  <p><span class="font-medium">Amélioration continue :</span> On mesure le temps nécessaire pour réaliser chaque tâche afin de trouver des moyens de faire mieux.</p>
                </div>
              </div>

              <!-- Les principes clés -->
              <div class="border border-gray-100 rounded-3xl overflow-hidden bg-white/50">
                <button 
                  @click="sections.principles = !sections.principles" 
                  class="w-full px-4 py-3 flex justify-between items-center hover:bg-white/50 transition-colors duration-200"
                >
                  <span class="font-medium text-gray-800">Les principes clés</span>
                  <svg 
                    :class="{'rotate-180': sections.principles}" 
                    class="w-5 h-5 text-gray-400 transform transition-transform duration-200" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-show="sections.principles" class="px-4 pb-4">
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2">
                      <span class="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2"></span>
                      <span>Visualiser le travail : Tout le monde peut voir ce qui se passe.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2"></span>
                      <span>Limiter le travail en cours : Ne pas faire trop de tâches en même temps.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2"></span>
                      <span>Gérer le flux : Faire avancer les tâches de manière régulière.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2"></span>
                      <span>Rendre les règles explicites : Tout le monde sait comment travailler.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Les avantages -->
              <div class="border border-gray-100 rounded-3xl overflow-hidden bg-white/50">
                <button 
                  @click="sections.benefits = !sections.benefits" 
                  class="w-full px-4 py-3 flex justify-between items-center hover:bg-white/50 transition-colors duration-200"
                >
                  <span class="font-medium text-gray-800">Les avantages</span>
                  <svg 
                    :class="{'rotate-180': sections.benefits}" 
                    class="w-5 h-5 text-gray-400 transform transition-transform duration-200" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-show="sections.benefits" class="px-4 pb-4">
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2">
                      <span class="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2"></span>
                      <span>Productivité améliorée : Le travail est mieux organisé et plus efficace.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2"></span>
                      <span>Moins de blocages : Les problèmes sont identifiés rapidement.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2"></span>
                      <span>Meilleure visibilité : Chacun sait où en est le travail.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2"></span>
                      <span>Flexibilité : Facile d'ajuster les priorités en fonction des besoins.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section principale à droite -->
      <div class="flex-1 p-8">
        <!-- En-tête de l'application -->
        

        <!-- Message de bienvenue -->
        <div class="text-center mb-16">
          <h1 class="text-4xl font-semibold text-gray-800 mb-4">Comment puis-je vous aider ?</h1>
          <p class="text-gray-500 text-lg max-w-2xl mx-auto">
            Je suis là pour vous aider à organiser votre travail avec la méthode Kanban. Posez-moi vos questions !
          </p>
        </div>

        <!-- Zone de recherche -->
        <div class="max-w-3xl mx-auto mb-12">
          <div class="flex gap-4">
            <div class="flex-1 relative">
              <input
                v-model="userQuery"
                type="text"
                placeholder="Posez votre question sur le Kanban..."
                class="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-0 rounded-full focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-200 shadow-sm"
                @keyup.enter="handleQuery"
                :disabled="isLoading"
              />
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              @click="handleQuery"
              class="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all duration-200 min-w-[120px] justify-center shadow-sm"
              :disabled="!userQuery.trim() || isLoading"
            >
              <span v-if="!isLoading">Envoyer</span>
              <span v-else class="flex items-center gap-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="whitespace-nowrap">Traitement...</span>
              </span>
            </button>
          </div>

          <!-- Questions prédéfinies -->
          <div class="mt-6">
            <h3 class="text-sm font-medium text-gray-700 mb-3">Questions suggérées :</h3>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="(question, index) in predefinedQuestions"
                :key="index"
                @click="askPredefinedQuestion(question)"
                class="px-4 py-2 text-sm bg-white/80 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                :disabled="isLoading"
              >
                {{ question.label }}
              </button>
            </div>
          </div>
        </div>

        <!-- Animation de chargement -->
        <div v-if="isLoading" class="flex justify-center items-center py-12">
          <div class="animate-pulse flex flex-col items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30"></div>
            <div class="text-gray-600">L'IA réfléchit à votre question...</div>
          </div>
        </div>

        <!-- Contenu dynamique (réponse et Kanban) -->
        <div v-if="explanation || hasKanbanTasks" class="mt-12 space-y-8">
          <!-- Section de la réponse textuelle -->
          <div v-if="explanation && !isLoading" class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm p-6 max-w-3xl mx-auto">
            <div class="prose prose-sm max-w-none text-gray-600">
              {{ explanation }}
            </div>
          </div>

          <!-- Section du tableau Kanban -->
          <div v-if="hasKanbanTasks && !isLoading">
            <div class="flex space-x-4 overflow-x-auto pb-4">
              <div
                v-for="column in columns"
                :key="column.id"
                class="flex-shrink-0 w-80"
              >
                <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm p-6">
                  <h2 class="text-lg font-semibold mb-4 text-gray-800">{{ column.title }}</h2>
                  <div class="space-y-3 min-h-[200px]">
                    <div
                      v-for="task in column.tasks"
                      :key="task.id"
                      class="group bg-white p-4 rounded-2xl shadow-sm hover:shadow transition-all duration-200 cursor-move"
                      draggable="true"
                      @dragstart="startDrag($event, task, column)"
                      @dragover.prevent
                      @drop="onDrop($event, column)"
                    >
                      <div class="flex justify-between items-start mb-2">
                        <h3 class="font-medium text-gray-800 group-hover:text-purple-600 transition-colors duration-200">{{ task.title }}</h3>
                        <div class="flex items-center gap-2">
                          <div class="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-medium shadow-sm">
                            {{ task.assignee ? task.assignee.split(' ')[0][0] + task.assignee.split(' ')[1][0] : '?' }}
                          </div>
                        </div>
                      </div>
                      <p class="text-sm text-gray-600 mb-2">{{ task.description }}</p>
                      <div class="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100">
                        <span class="text-xs text-gray-500">Assigné à:</span>
                        <span class="text-xs font-medium text-gray-700">{{ task.assignee || 'Non assigné' }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const userQuery = ref('')
const explanation = ref('')
const isLoading = ref(false)

// État des sections dépliables
const sections = ref({
  howItWorks: false,
  principles: false,
  benefits: false
})

const columns = ref([
  {
    id: 1,
    title: 'À faire',
    tasks: []
  },
  {
    id: 2,
    title: 'En cours',
    tasks: []
  },
  {
    id: 3,
    title: 'Terminé',
    tasks: []
  }
])

const predefinedQuestions = [
  { 
    label: "Projet de développement web",
    query: "Comment organiser un projet de développement web avec la méthode Kanban ?"
  },
  {
    label: "Sprint Agile",
    query: "Comment structurer un sprint agile dans un tableau Kanban ?"
  },
  {
    label: "Gestion de bugs",
    query: "Comment gérer efficacement les bugs avec un tableau Kanban ?"
  },
  {
    label: "Workflow marketing",
    query: "Montre-moi un exemple de workflow Kanban pour une équipe marketing."
  },
  {
    label: "Projet de refactoring",
    query: "Comment organiser un projet de refactoring de code avec Kanban ?"
  }
]

const hasKanbanTasks = computed(() => {
  return columns.value.some(column => column.tasks.length > 0)
})

const askPredefinedQuestion = (question) => {
  userQuery.value = question.query
  handleQuery()
}

const startDrag = (evt, task, sourceColumn) => {
  evt.dataTransfer.effectAllowed = 'move'
  evt.dataTransfer.setData('taskId', task.id)
  evt.dataTransfer.setData('sourceColumnId', sourceColumn.id)
}

const onDrop = (evt, targetColumn) => {
  const taskId = evt.dataTransfer.getData('taskId')
  const sourceColumnId = parseInt(evt.dataTransfer.getData('sourceColumnId'))
  
  const sourceColumn = columns.value.find(col => col.id === sourceColumnId)
  const taskIndex = sourceColumn.tasks.findIndex(task => task.id === taskId)
  
  if (taskIndex !== -1) {
    const [task] = sourceColumn.tasks.splice(taskIndex, 1)
    targetColumn.tasks.push(task)
  }
}

const handleQuery = async () => {
  if (!userQuery.value.trim() || isLoading.value) return

  try {
    isLoading.value = true
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: userQuery.value })
    })
    
    const data = await response.json()
    
    // Mettre à jour l'explication et le tableau
    explanation.value = data.explanation
    updateKanbanBoard(data.tasks)
    
    userQuery.value = '' // Réinitialiser le champ après l'envoi
  } catch (error) {
    console.error('Erreur lors de la requête:', error)
  } finally {
    isLoading.value = false
  }
}

const updateKanbanBoard = (tasks) => {
  if (tasks) {
    if (tasks.todo) {
      columns.value[0].tasks = tasks.todo.map(task => ({
        ...task,
        id: Math.random().toString(36).substr(2, 9)
      }))
    }
    if (tasks.inProgress) {
      columns.value[1].tasks = tasks.inProgress.map(task => ({
        ...task,
        id: Math.random().toString(36).substr(2, 9)
      }))
    }
    if (tasks.done) {
      columns.value[2].tasks = tasks.done.map(task => ({
        ...task,
        id: Math.random().toString(36).substr(2, 9)
      }))
    }
  }
}
</script>

<style scoped>
.overflow-x-auto {
  -webkit-overflow-scrolling: touch;
}

.prose {
  white-space: pre-line;
}

/* Animation de transition pour les éléments */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Style pour le drag and drop */
.cursor-move {
  cursor: move;
}

/* Personnalisation du scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #E2E8F0;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #CBD5E1;
}

/* Ajout d'un style pour le fond dégradé plus subtil */
.bg-gradient-to-br {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style> 
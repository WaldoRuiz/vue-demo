<script setup>
import { ref } from 'vue'

const showExtra = ref(false)
const items = ref(['Vite como build tool', 'Componentes SFC', 'Directivas en templates', 'Reactividad'])
const newItem = ref('')
const name = ref('')
const selected = ref('')
const options = ['Opción A', 'Opción B', 'Opción C']

function addItem() {
  if (newItem.value.trim()) {
    items.value.push(newItem.value.trim())
    newItem.value = ''
  }
}
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-800"> Introducción a Vue.js</h1>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-3"> Template Syntax</h2>
      <p class="text-gray-500 mb-2">Interpolación con <code class="bg-gray-100 px-1 rounded">&#123;&#123; &#125;&#125;</code></p>
      <p class="text-lg">Hola, <strong>{{ name || 'invitado' }}</strong></p>
      <div class="mt-2">
        <input v-model="name" placeholder="Escribí tu nombre" class="border border-gray-300 rounded px-3 py-1.5 w-64" />
      </div>
    </section>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-3"> Directivas</h2>

      <div class="space-y-4">
        <div>
          <p class="font-medium text-gray-600 mb-1"><code>v-if / v-else</code></p>
          <Button @click="showExtra = !showExtra" severity="secondary" size="small">
            {{ showExtra ? 'Ocultar' : 'Mostrar' }} contenido extra
          </Button>
          <p v-if="showExtra" class="mt-2 text-green-600"> Este contenido aparece condicionalmente</p>
          <p v-else class="mt-2 text-gray-400 italic"> Hacé clic en el botón</p>
        </div>

        <div>
          <p class="font-medium text-gray-600 mb-1"><code>v-for</code></p>
          <ul class="list-disc list-inside text-gray-700 mb-2">
            <li v-for="(item, i) in items" :key="i">{{ item }}</li>
          </ul>
          <div class="flex gap-2">
            <input v-model="newItem" @keyup.enter="addItem"
              placeholder="Agregar item" class="border border-gray-300 rounded px-3 py-1.5 w-64" />
            <Button @click="addItem" severity="primary" size="small">+</Button>
          </div>
        </div>

        <div>
          <p class="font-medium text-gray-600 mb-1"><code>v-model</code> en select</p>
          <select v-model="selected" class="border border-gray-300 rounded px-3 py-1.5">
            <option value="" disabled>Seleccioná una opción</option>
            <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
          </select>
          <p v-if="selected" class="mt-1 text-gray-500">Elegiste: <strong>{{ selected }}</strong></p>
        </div>
      </div>
    </section>

    <section class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
      <p class="text-amber-800 text-sm">
        <strong> Para la expo:</strong> Mostrá cómo Vue extiende el HTML con directivas.
        El template es escribible por cualquiera que sepa HTML.
      </p>
    </section>
  </div>
</template>

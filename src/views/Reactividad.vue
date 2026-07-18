<script setup>
import { ref, reactive, computed } from 'vue'

const countRef = ref(0)
const stateReactive = reactive({ count: 0, label: 'reactivo' })

const userRef = ref({ name: 'Juan', age: 25 })
const userReactive = reactive({ name: 'María', age: 30 })

const refInfo = computed(() => ({
  type: typeof countRef.value,
  isRef: true,
  access: 'countRef.value',
}))
const reactiveInfo = computed(() => ({
  type: typeof stateReactive.count,
  isReactive: true,
  access: 'stateReactive.count',
}))
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-800"> Reactividad: ref vs reactive</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <section class="bg-white rounded-xl shadow-sm p-6 border border-blue-100 border-t-4 border-t-blue-500">
        <h2 class="text-xl font-semibold text-blue-700 mb-2"> ref()</h2>
        <p class="text-sm text-gray-500 mb-4">
          Envuelve en un objeto .value — ideal para primitivos
        </p>

        <div class="space-y-3">
          <p class="text-3xl font-bold text-blue-600">{{ countRef }}</p>
          <div class="flex gap-2">
            <Button @click="countRef++" severity="primary" size="small">+1</Button>
            <Button @click="countRef--" severity="secondary" size="small">-1</Button>
          </div>

          <div class="mt-4 p-3 bg-blue-50 rounded text-sm">
            <p><strong>countRef:</strong> {{ countRef }}</p>
            <p><strong>Tipo:</strong> Ref({{ typeof countRef }})</p>
            <p><strong>Acceso:</strong> countRef.value</p>
          </div>
        </div>
      </section>

      <section class="bg-white rounded-xl shadow-sm p-6 border border-green-100 border-t-4 border-t-green-500">
        <h2 class="text-xl font-semibold text-green-700 mb-2"> reactive()</h2>
        <p class="text-sm text-gray-500 mb-4">
          Objeto proxy — ideal para objetos/arrays completos
        </p>

        <div class="space-y-3">
          <p class="text-3xl font-bold text-green-600">{{ stateReactive.count }}</p>
          <div class="flex gap-2">
            <Button @click="stateReactive.count++" severity="success" size="small">+1</Button>
            <Button @click="stateReactive.count--" severity="warn" size="small">-1</Button>
          </div>

          <div class="mt-4 p-3 bg-green-50 rounded text-sm">
            <p><strong>stateReactive.count:</strong> {{ stateReactive.count }}</p>
            <p><strong>Tipo:</strong> {{ typeof stateReactive }}</p>
            <p><strong>Acceso:</strong> stateReactive.count</p>
          </div>
        </div>
      </section>
    </div>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-3"> Objetos: ref vs reactive</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-blue-50 rounded-lg">
          <p class="font-medium text-blue-700 mb-2">ref con objeto</p>
          <p>Nombre: <strong>{{ userRef.name }}</strong></p>
          <p>Edad: <strong>{{ userRef.age }}</strong></p>
          <p class="text-xs text-gray-400 mt-1">Template accede sin .value</p>
          <div class="flex gap-2 mt-2">
            <Button @click="userRef.name = 'Carlos'" size="small">Cambiar nombre</Button>
          </div>
        </div>

        <div class="p-4 bg-green-50 rounded-lg">
          <p class="font-medium text-green-700 mb-2">reactive</p>
          <p>Nombre: <strong>{{ userReactive.name }}</strong></p>
          <p>Edad: <strong>{{ userReactive.age }}</strong></p>
          <p class="text-xs text-gray-400 mt-1">Acceso directo a propiedades</p>
          <div class="flex gap-2 mt-2">
            <Button @click="userReactive.name = 'Ana'" size="small">Cambiar nombre</Button>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
      <p class="text-amber-800 text-sm">
        <strong> Regla práctica:</strong> Usá <code>ref</code> por defecto (más simple,
        consistente). Usá <code>reactive</code> cuando tengas objetos anidados y no quieras
        escribir <code>.value</code> en el script.
      </p>
    </section>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
import Button from 'primevue/button'

const counter = useCounterStore()
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-800"> Pinia — Estado Global</h1>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-4"> Contador global</h2>
      <p class="text-gray-500 text-sm mb-4">
        Este estado es accesible desde cualquier componente. Si volvés a esta ruta,
        el contador mantiene su valor.
      </p>

      <div class="flex items-center gap-4 mb-6">
        <Button @click="counter.decrement()" severity="secondary" icon="pi pi-minus" />
        <span class="text-5xl font-bold text-gray-800 tabular-nums min-w-[4rem] text-center">
          {{ counter.count }}
        </span>
        <Button @click="counter.increment()" severity="primary" icon="pi pi-plus" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div class="p-4 bg-blue-50 rounded-lg text-center">
          <p class="text-sm text-blue-600 font-medium">Valor</p>
          <p class="text-2xl font-bold text-blue-700">{{ counter.count }}</p>
        </div>
        <div class="p-4 bg-green-50 rounded-lg text-center">
          <p class="text-sm text-green-600 font-medium">Doble (getter)</p>
          <p class="text-2xl font-bold text-green-700">{{ counter.doubleCount }}</p>
        </div>
        <div class="p-4 bg-purple-50 rounded-lg text-center">
          <p class="text-sm text-purple-600 font-medium">Historial</p>
          <p class="text-2xl font-bold text-purple-700">{{ counter.history.length }}</p>
        </div>
      </div>

      <Button @click="counter.reset()" severity="danger" variant="outlined" size="small">
        Resetear
      </Button>
    </section>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-3"> Historial de cambios</h2>
      <div v-if="counter.history.length" class="space-y-1">
        <p v-for="(entry, i) in counter.history" :key="i"
          class="bg-gray-50 px-3 py-1 rounded text-sm font-mono">
          {{ entry }}
        </p>
      </div>
      <p v-else class="text-gray-400 italic">Todavía no hiciste ningún cambio</p>
    </section>

    <section class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
      <p class="text-amber-800 text-sm">
        <strong> Concepto clave:</strong> Pinia <strong>no necesita mutations</strong>
        como Vuex. Los stores son objetos reactivos: mutás el state directamente
        desde las actions. DevTools trackea todo automáticamente.
      </p>
    </section>
  </div>
</template>

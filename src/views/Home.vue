<script setup>
import Card from 'primevue/card'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="text-center py-12">
    <h1 class="text-4xl font-bold text-gray-800 mb-3"> Vue.js — Demo Expositiva</h1>
    <p class="text-lg text-gray-500 mb-10">
      Navegá por cada tema para ver ejemplos prácticos
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
      <RouterLink v-for="item in [
        { to: '/intro', title: 'Introducción', desc: 'Template syntax, directivas, v-model', icon: '🟢' },
        { to: '/componentes', title: 'Componentes', desc: 'Props, emits, slots — comunicación padre-hijo', icon: '🧩' },
        { to: '/reactividad', title: 'Reactividad', desc: 'ref vs reactive, comparativa en vivo', icon: '⚡' },
        { to: '/router-demo', title: 'Vue Router', desc: 'Rutas, parámetros, navegación programática', icon: '🧭' },
        { to: '/pinia', title: 'Pinia', desc: 'Estado global con stores, actions, getters', icon: '📦' },
        { to: '/ui-libraries', title: 'UI Libraries', desc: 'Tailwind CSS + PrimeVue, componentes y utilidades', icon: '🎨' },
      ]" :key="item.to" :to="item.to" class="no-underline">
        <Card class="h-full hover:shadow-md transition-shadow cursor-pointer">
          <template #title>
            <span class="text-xl">{{ item.icon }} {{ item.title }}</span>
          </template>
          <template #content>
            <p class="text-gray-500 m-0">{{ item.desc }}</p>
          </template>
        </Card>
      </RouterLink>
    </div>
  </div>
</template>

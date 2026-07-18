<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Button from 'primevue/button'
import { computed } from 'vue'

const route = useRoute()
const links = [
  { to: '/', label: 'Inicio', icon: 'pi pi-home' },
  { to: '/intro', label: 'Intro', icon: 'pi pi-code' },
  { to: '/componentes', label: 'Componentes', icon: 'pi pi-objects-column' },
  { to: '/reactividad', label: 'Reactividad', icon: 'pi pi-sync' },
  { to: '/router-demo', label: 'Router', icon: 'pi pi-route' },
  { to: '/pinia', label: 'Pinia', icon: 'pi pi-database' },
  { to: '/ui-libraries', label: 'UI Libs', icon: 'pi pi-palette' },
]
const isActive = (path) => route.path === path
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b border-gray-200 shadow-sm px-4 py-3 flex items-center gap-2 overflow-x-auto">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        v-slot="{ href, navigate }"
        custom
      >
        <Button
          as="a"
          :href="href"
          @click="navigate"
          :severity="isActive(link.to) ? 'primary' : 'secondary'"
          variant="text"
          class="whitespace-nowrap"
        >
          <i :class="link.icon" class="mr-1"></i>
          {{ link.label }}
        </Button>
      </RouterLink>
    </header>

    <main class="p-6 max-w-5xl mx-auto">
      <RouterView />
    </main>
  </div>
</template>

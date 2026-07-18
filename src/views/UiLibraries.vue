<script setup>
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-800"> UI Libraries</h1>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-3"> CSS Framework: Tailwind</h2>
      <p class="text-gray-500 text-sm mb-4">
        Clases utilitarias en el template — sin CSS custom.
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div class="bg-blue-500 text-white p-4 rounded-lg text-center text-sm font-medium shadow-sm">
          bg-blue-500
        </div>
        <div class="bg-green-500 text-white p-4 rounded-lg text-center text-sm font-medium shadow-sm">
          bg-green-500
        </div>
        <div class="bg-purple-500 text-white p-4 rounded-lg text-center text-sm font-medium shadow-sm">
          bg-purple-500
        </div>
        <div class="bg-rose-500 text-white p-4 rounded-lg text-center text-sm font-medium shadow-sm">
          bg-rose-500
        </div>

        <div class="border-2 border-blue-300 p-4 rounded-lg text-center text-sm text-blue-700">
          border-2
        </div>
        <div class="shadow-lg p-4 rounded-lg text-center text-sm text-gray-600">
          shadow-lg
        </div>
        <div class="flex items-center gap-2 justify-center p-4 rounded-lg bg-gray-100 text-sm">
          <span class="i-mdi-check-circle text-green-500"></span>
          flex + gap
        </div>
        <div class="p-4 rounded-lg text-center text-sm text-gray-500 italic">
          italic
        </div>
      </div>

      <div class="mt-4 p-4 bg-gray-50 rounded-lg text-sm">
        <p class="font-mono text-gray-600">
          &lt;div class="<span class="text-blue-600">bg-blue-500 text-white p-4 rounded-lg shadow-sm</span>"&gt;
        </p>
      </div>
    </section>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-3">
        Component Library: PrimeVue
      </h2>
      <p class="text-gray-500 text-sm mb-4">
        Componentes pre-fabricados con funcionalidad + diseño incluidos.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <template #title>Card</template>
          <template #content>
            <p class="m-0 text-gray-500 text-sm">
              Componente con header, content y footer.
            </p>
          </template>
        </Card>

        <Card>
          <template #title>InputText</template>
          <template #content>
            <div class="flex flex-col gap-2">
              <InputText v-model="email" placeholder="tu@email.com" />
              <span v-if="email" class="text-xs text-green-600">
                Escribiste: {{ email }}
              </span>
            </div>
          </template>
        </Card>

        <Card>
          <template #title>Buttons</template>
          <template #content>
            <div class="flex flex-wrap gap-2">
              <Button label="Primary" severity="primary" size="small" />
              <Button label="Secondary" severity="secondary" size="small" />
              <Button label="Success" severity="success" size="small" />
              <Button label="Danger" severity="danger" size="small" />
            </div>
          </template>
        </Card>
      </div>
    </section>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-3"> ¿Cuándo usar qué?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 border border-blue-200 rounded-lg">
          <h3 class="font-medium text-blue-700 mb-2"> CSS Frameworks</h3>
          <ul class="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>Control total del diseño</li>
            <li>Sin dependencia de JS</li>
            <li>Bundle más chico</li>
            <li>Ej: Tailwind, Bootstrap, UnoCSS</li>
          </ul>
        </div>
        <div class="p-4 border border-green-200 rounded-lg">
          <h3 class="font-medium text-green-700 mb-2"> Component Libraries</h3>
          <ul class="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>Componentes listos (modals, tables, datepickers)</li>
            <li>Accesibilidad incluida</li>
            <li>Desarrollo más rápido</li>
            <li>Ej: PrimeVue, Vuetify, Naive UI</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

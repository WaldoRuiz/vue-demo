<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const productId = ref('')

function goToProduct() {
  if (productId.value) {
    router.push({ name: 'product', params: { id: productId.value } })
  }
}

function goBack() {
  router.back()
}
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-800"> Vue Router</h1>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-3"> Navegación con parámetros</h2>

      <div class="flex gap-2 items-end">
        <div class="flex-1">
          <label class="block text-sm text-gray-500 mb-1">ID del producto</label>
          <input v-model="productId" placeholder="Ej: 42"
            class="border border-gray-300 rounded px-3 py-1.5 w-full" />
        </div>
        <Button @click="goToProduct" severity="primary">Ir al producto</Button>
      </div>

      <Button @click="goBack" severity="secondary" variant="text" class="mt-3">
        ← Volver
      </Button>
    </section>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-3"> Vista actual</h2>
      <div class="p-4 bg-gray-50 rounded-lg text-sm font-mono">
        <p><strong>Path:</strong> {{ route.path }}</p>
        <p><strong>Name:</strong> {{ route.name || '—' }}</p>
        <p><strong>Params:</strong> {{ JSON.stringify(route.params) }}</p>
        <p><strong>Query:</strong> {{ JSON.stringify(route.query) }}</p>
      </div>
    </section>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-3"> Enlaces de navegación</h2>
      <p class="text-gray-500 text-sm mb-3">Estos links también usan el Router</p>
      <div class="flex flex-wrap gap-2">
        <RouterLink to="/" class="no-underline">
          <Button severity="secondary" size="small">Inicio</Button>
        </RouterLink>
        <RouterLink to="/intro" class="no-underline">
          <Button severity="secondary" size="small">Intro</Button>
        </RouterLink>
        <RouterLink to="/componentes" class="no-underline">
          <Button severity="secondary" size="small">Componentes</Button>
        </RouterLink>
        <RouterLink to="/reactividad" class="no-underline">
          <Button severity="secondary" size="small">Reactividad</Button>
        </RouterLink>
      </div>
    </section>

    <section class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
      <p class="text-amber-800 text-sm">
        <strong> Para la expo:</strong> El Router permite SPA sin recargar la página.
        Usá <code>router.push()</code> para navegación programática y
        <code>&lt;RouterLink&gt;</code> para links declarativos.
      </p>
    </section>
  </div>
</template>

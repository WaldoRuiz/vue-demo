<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div class="max-w-lg mx-auto mt-8">
    <div class="bg-white rounded-xl shadow-sm p-8 border border-gray-100 text-center">
      <p class="text-6xl mb-4">📦</p>
      <h1 class="text-2xl font-bold text-gray-800 mb-2">Producto #{{ route.params.id }}</h1>
      <p class="text-gray-500 mb-6">
        Vista de detalle con parámetro dinámico desde la ruta.
      </p>

      <div class="p-4 bg-gray-50 rounded-lg text-left text-sm font-mono mb-6">
        <p><strong>Ruta:</strong> /product/:id</p>
        <p><strong>Params:</strong> {{ JSON.stringify(route.params) }}</p>
      </div>

      <Button @click="router.push('/router-demo')" severity="primary">
        ← Volver al demo de Router
      </Button>
    </div>
  </div>
</template>

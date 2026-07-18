<script setup>
import { ref } from 'vue'
import HelloChild from '../components/HelloChild.vue'
import SlotWrapper from '../components/SlotWrapper.vue'

const message = ref('Hola desde el padre')
const childResponse = ref('')

function onChildSay(msg) {
  childResponse.value = msg
}

const bgColor = ref('#e0f2fe')
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-800"> Componentes</h1>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-3"> Props (padre → hijo)</h2>
      <p class="text-gray-500 text-sm mb-3">El padre pasa datos con atributos personalizados</p>

      <div class="flex gap-2 mb-4">
        <input v-model="message" class="border border-gray-300 rounded px-3 py-1.5 flex-1" />
      </div>

      <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
        <HelloChild :message="message" @say="onChildSay" />
      </div>

      <p v-if="childResponse" class="mt-3 text-green-700">
        El hijo dijo: "{{ childResponse }}"
      </p>
    </section>

    <section class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 class="text-xl font-semibold text-gray-700 mb-3"> Slots</h2>
      <p class="text-gray-500 text-sm mb-3">El padre inyecta HTML/componentes dentro del hijo</p>

      <SlotWrapper>
        <template #header>
          <h3 class="font-bold text-lg text-indigo-700"> Título desde el padre</h3>
        </template>

        <p>Este contenido se inyecta en el slot por defecto del componente.</p>

        <template #footer>
          <div class="flex gap-2 justify-end">
            <input v-model="bgColor" type="color" class="w-8 h-8 rounded cursor-pointer" />
            <span class="text-xs text-gray-400 self-center">cambiá el fondo</span>
          </div>
        </template>
      </SlotWrapper>
    </section>

    <section class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
      <p class="text-amber-800 text-sm">
        <strong> Concepto clave:</strong> Props fluyen <strong>hacia abajo</strong>, eventos
        fluyen <strong>hacia arriba</strong>. Los slots permiten composición flexible.
      </p>
    </section>
  </div>
</template>

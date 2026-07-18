<script setup>
import { ref } from 'vue'

const props = defineProps({
  message: String,
})

const emit = defineEmits(['say'])

const childMsg = ref('')

function reply() {
  const text = childMsg.value.trim() || '...'
  emit('say', text)
}
</script>

<template>
  <div>
    <p class="text-sm text-gray-500 mb-1">Componente hijo:</p>
    <p class="text-gray-700 mb-2">
      El padre dijo: <strong class="text-blue-600">{{ message }}</strong>
    </p>
    <div class="flex gap-2">
      <input v-model="childMsg" placeholder="Respondé al padre..."
        class="border border-gray-300 rounded px-3 py-1.5 flex-1 text-sm" />
      <Button @click="reply" severity="info" size="small">Enviar</Button>
    </div>
  </div>
</template>

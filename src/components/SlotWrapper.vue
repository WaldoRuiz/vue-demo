<script setup>
import { ref } from 'vue'

const bgColor = ref('#ffffff')
</script>

<template>
  <div class="border border-gray-200 rounded-xl overflow-hidden transition-colors" :style="{ backgroundColor: bgColor }">
    <div class="bg-gradient-to-r from-indigo-50 to-purple-50 px-5 py-3 border-b border-gray-200">
      <slot name="header" />
    </div>

    <div class="px-5 py-4 text-gray-700">
      <slot />
    </div>

    <div class="bg-gray-50 px-5 py-3 border-t border-gray-200 flex items-center">
      <slot name="footer" />
    </div>
  </div>
</template>

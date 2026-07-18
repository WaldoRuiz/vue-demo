import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import router from './router'
import App from './App.vue'
import './style.css'

import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: { preset: Aura },
})

app.component('Button', Button)
app.component('Card', Card)
app.component('InputText', InputText)

app.mount('#app')

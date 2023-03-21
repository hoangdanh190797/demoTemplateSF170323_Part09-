import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './assets/main.css'

library.add(faBars)

const app = createApp(App)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

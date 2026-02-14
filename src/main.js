import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'
import 'flowbite'
import 'sweetalert2/dist/sweetalert2.min.css';
// import 'tailwindcss/tailwind.css';

axios.defaults.baseURL = process.env.NODE_ENV == "development"
    ? "http://localhost:8000/api/"
    : "";

// Vuetify

// import  Multiselect from 'vue-multiselect'
const app = createApp(App)
app.use(router)

app.mount('#app')

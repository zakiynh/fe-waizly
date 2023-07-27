import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './routes'
// import ToastService from "primevue/toastservice";
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createPinia } from 'pinia'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
const pinia = createPinia()
// app.use(BootstrapVue);
app.use(pinia);
app.use(router)

app.mount('#app')

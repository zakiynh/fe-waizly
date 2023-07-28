import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
const pinia = createPinia()
// app.use(BootstrapVue);
app.use(pinia);
app.use(router)
app.use(VueSweetalert2);

app.mount('#app')

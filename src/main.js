import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
import trangchu from './layout/wrapper/layout_rong.vue'
import './assets/css/main.css'

const app = createApp(App)

app.use(router)
app.component("default-layout", Default)
app.component("trangchu-layout", trangchu)

app.mount("#app")

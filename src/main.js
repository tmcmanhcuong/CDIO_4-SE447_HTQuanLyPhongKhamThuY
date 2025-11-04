import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
import trangchu from './layout/wrapper/layout_rong.vue'
import headeronly from './layout/wrapper/layout_headeronly.vue'

import './assets/css/main.css'

const app = createApp(App)

app.use(router)
app.component("default-layout", Default)
app.component("trangchu-layout", trangchu)
app.component("headeronly-layout", headeronly)  // ✅ Sửa lại đúng

app.mount("#app")

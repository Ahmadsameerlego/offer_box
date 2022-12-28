import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts();

// import bootstrap 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css'

// import fontawesome 
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();

// import axios 
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000'

// // import i18n 
// import VueI18n from 'vue-i18n'
// import i18n from './i18n'



createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
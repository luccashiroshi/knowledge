import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1Y2NhcyIsImVtYWlsIjoibHVjY2FzaGlyb3NoaUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjU3NzI5ODIxLCJleHAiOjE2NTc5ODkwMjF9.A14NHbWVw8X5kHOd7lEjn8R0hxwydWat-IdRjdVKbUo'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
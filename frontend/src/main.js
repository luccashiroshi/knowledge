import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1Y2NhcyBIaXJvc2hpIiwiZW1haWwiOiJsdWNjYXNoaXJvc2hpQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTgxNjc2NjMsImV4cCI6MTY1ODQyNjg2M30.HeClArMz0HRItcb6k1LiWOSSp5EU1WGDskb0zt6yMyo'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
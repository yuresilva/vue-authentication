import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
let app = ''
// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: 'AIzaSyCGcqjvIozJGLeJVKVu3-mHmmGPsiTu0dA',
  authDomain: 'vue-firebase-tutorial-74371.firebaseapp.com',
  databaseURL: 'https://vue-firebase-tutorial-74371.firebaseio.com',
  projectId: 'vue-firebase-tutorial-74371',
  storageBucket: '',
  messagingSenderId: '403538437286',
  appId: '1:403538437286:web:5c9cf9e1c2f3e99d'
})
// Initialize Firebase

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

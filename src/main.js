import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
//import fb from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

Vue.use(Router)
Vue.config.productionTip = false
new Vue({
  vuetify,
  render: h => h(App),
  router:router,
 
  store,
  created(){
    const firebaseConfig = {
      apiKey: "AIzaSyAcxrOTc9aFs5da2GXqd3OJSk_b2n1O_BM",
      authDomain: "ad-pro-125.firebaseapp.com",
      projectId: "ad-pro-125",
      storageBucket: "ad-pro-125.appspot.com",
      messagingSenderId: "795655115472",
      appId: "1:795655115472:web:5e887031ef42303ca784d5",
      measurementId: "G-XYZ17TH5JB"

    };

  // Initialize Firebase
  //fb.initializeApp(firebaseConfig);
  //fb.analytics();
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}
}).$mount('#app') 
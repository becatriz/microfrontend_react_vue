import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/detail', name: 'details' }]
});

const app = new Vue({
  router,
  render: (h) => h(App)
});

Vue.config.productionTip = false;

function mountList(selector) {
  app.$mount(selector);
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#app');
  if (devRoot) {
    app.$mount(devRoot);
  }
}

export { mountList };

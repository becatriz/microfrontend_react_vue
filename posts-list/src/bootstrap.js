import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

const app = new Vue(App);

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

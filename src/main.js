import Vue from 'vue';
import Master from './components/layouts/Master';
import { store } from './store/store';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        path: '/login'
      });
    } else if (
      to.matched.some(record => record.meta.requiresAdmin) &&
      !store.getters.isAdmin
    ) {
      next({
        path: '/todo'
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        path: '/todo'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  render: h => h(Master),
  router: router,
  store: store,
  component: { Master }
}).$mount('#app');

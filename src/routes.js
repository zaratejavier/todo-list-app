import Login from './components/auth/Login';
import App from './App.vue';
import Logout from './components/auth/Logout';
import UserList from './components/User/UserList';

const routes = [
  {
    path: '/login',
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  { path: '/logout', component: Logout },
  {
    path: '/todo',
    component: App,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users',
    component: UserList,
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    }
  }
];

export default routes;

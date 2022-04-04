import { createRouter, createWebHistory } from "vue-router";
import CustomersView from "../views/CustomersView.vue";
import AddCustomerView from "../views/AddCustomerView.vue";
import Login from "../views/Login.vue";
import PageNotFound from "../views/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    {
      path: "/",
      name: "customers",
      component: CustomersView,
    },
    {
      path: "/add",
      name: "addCustomer",
      component: AddCustomerView,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        loginPage: true,
        public: true,
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: PageNotFound,
      meta: {
        public: true,
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  const loginPage = to.meta["loginPage"] || false;
  const publicPage = to.meta["public"] || false;
  const loggedIn = localStorage.getItem("loggedIn");
  if (!publicPage && !loggedIn) {
    next("/login");
  } else {
    if (loginPage && loggedIn) {
      next("/");
    } else {
      next();
    }
  }
});

export default router;

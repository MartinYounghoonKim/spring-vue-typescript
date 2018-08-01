import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/tabSample",
            name: "TabSample",
            component: () => import("../components/tab/Tab.vue")
        },
        {
            path: "/todo",
            name: "Todo",
            component: () => import("../components/todo/todo.vue")
        }
    ]
});

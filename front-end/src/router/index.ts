import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/hello-world/HelloWorld.vue";
import TabSample from "../components/tab/Tab.vue";
import Todo from "../components/todo/todo.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Hello",
            component: HelloWorld
        },
        {
            path: "/tabSample",
            name: "TabSample",
            component: TabSample
        },
        {
            path: "/todo",
            name: "Todo",
            component: Todo
        }
    ]
});

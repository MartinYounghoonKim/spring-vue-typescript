<script src="../../../../src/main/resources/static/dist/dist/bundle.0.js"></script>
<template>
    <div class="todoapp">
        <!-- Header -->
        <div class="header">
            <h1>Vue Typescript</h1>
            <input class="new-todo"
                   autofocus="autofocus"
                   autocomplete="off"
                   placeholder="What needs to be done?"/>
        </div>
        <!--// Header -->

        <!-- TodoList -->
        <todo-list :todos="todos"/>
        <!--// TodoList -->

        <!-- Footer -->
        <div>
            <footer class="footer">
                <span class="todo-count">
                    <strong>10</strong> 1 left
                </span>
                <ul class="filters">
                    <li>
                        <router-link to="#none">All</router-link>
                        <router-link to="#none">Active</router-link>
                        <router-link to="#none">Completed</router-link>
                    </li>
                </ul>
                <button class="clear-completed" style="display: none;">Clear completed</button>
            </footer>
        </div>
        <!--// Footer -->
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    import { Todos } from '../../types/Todo';
    import { Action, Getter, State } from 'vuex-class';
    import Component from "vue-class-component";
    import TodoList from './TodoList.vue';

    @Component<TodoApp>({
        components: {
            TodoList
        }
    })
    export default class TodoApp extends Vue{
        // mapState 로 변경
        @Action('fetchTodos') fetchTodos: any;
        // @Getter('getTodos') todos: Todos;
        @State('todos') todos: Todos;

        created(): void{
            this.fetchTodos();
        }

    }
</script>
<style lang="scss">
    body {
        margin: 0;
        padding: 0;
    }
    button {
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        font-size: 100%;
        vertical-align: baseline;
        font-family: inherit;
        font-weight: inherit;
        color: inherit;
        -webkit-appearance: none;
        appearance: none;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }
    body {
        font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        line-height: 1.4em;
        background: #f5f5f5;
        color: #4d4d4d;
        min-width: 230px;
        max-width: 550px;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        font-smoothing: antialiased;
        font-weight: 300;
    }
    button,
    input[type="checkbox"] {
        outline: none;
    }
    .hidden {
        display: none;
    }
    .todoapp {
        background: #fff;
        margin: 130px 0 40px 0;
        position: relative;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
        0 25px 50px 0 rgba(0, 0, 0, 0.1);
    }
    label {
        margin: 0;
        padding: 0;
    }
    /* 헤더 영역 */
    .todoapp h1 {
        position: absolute;
        top: -155px;
        width: 100%;
        font-size: 100px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.15);
        -webkit-text-rendering: optimizeLegibility;
        -moz-text-rendering: optimizeLegibility;
        text-rendering: optimizeLegibility;
    }
    .new-todo,
    .edit {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }
    .new-todo {
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
    /* List */
    .main {
        position: relative;
        z-index: 2;
        border-top: 1px solid #e6e6e6;
    label[for='toggle-all'] {
        display: none;
    }
    .toggle-all {
        position: absolute;
        top: -55px;
        left: -12px;
        width: 60px;
        height: 34px;
        text-align: center;
        border: none; /* Mobile Safari */
    &:before {
         content: '❯';
         font-size: 22px;
         color: #e6e6e6;
         padding: 10px 27px 10px 27px;
     }
    &:checked:before {
         color: #737373;
     }
    }
    .todo-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    }
    @media screen and (-webkit-min-device-pixel-ratio: 0) {
        .toggle-all,
        .todo-list li .toggle {
            background: none;
        }
        .todo-list li .toggle {
            height: 40px;
        }
        .toggle-all {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            -webkit-appearance: none;
            appearance: none;
        }
    }
    /* List item*/
    .todo-list {
        li {
            position: relative;
            font-size: 24px;
            border-bottom: 1px solid #ededed;
            &:last-child {
                border-bottom: none;
            }
            &.editing {
                border-bottom: none;
                padding: 0;
                .edit {
                    display: block;
                }
                .view {
                    display: none;
                }
                &:last-child {
                    margin-bottom: -1px;
                }
            }
            &.completed label {
                color: #d9d9d9;
                text-decoration: line-through;
            }
            label {
                white-space: pre-line;
                word-break: break-all;
                padding: 15px 60px 15px 15px;
                margin-left: 45px;
                display: block;
                line-height: 1.2;
                transition: color 0.4s;
            }
            .destroy {
                display: none;
                position: absolute;
                top: 0;
                right: 10px;
                bottom: 0;
                width: 40px;
                height: 40px;
                margin: auto 0;
                font-size: 30px;
                color: #cc9a9a;
                margin-bottom: 11px;
                transition: color 0.2s ease-out;
                &:hover {
                    color: #af5b5e;
                }
                &:after {
                    content: '×';
                }
            }
            &:hover .destroy {
                display: block;
            }
            .edit {
                display: none;
                position: relative;
                margin: 0;
                width: 506px;
                padding: 13px 17px 12px 17px;
                margin: 0 0 0 43px;
                font-size: 24px;
                font-family: inherit;
                font-weight: inherit;
                line-height: 1.4em;
                border: 0;
                outline: none;
                color: inherit;
                padding: 6px;
                border: 1px solid #999;
                box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
                box-sizing: border-box;
                -webkit-font-smoothing: antialiased;
                -moz-font-smoothing: antialiased;
                font-smoothing: antialiased;
            }
            .toggle {
                text-align: center;
                width: 40px;
                /* auto, since non-WebKit browsers doesn't support input styling */
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto 0;
                border: none; /* Mobile Safari */
                -webkit-appearance: none;
                appearance: none;
                &:after {
                    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
                }
                &:checked:after {
                    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
                }
            }
        }
    }
    /* Footer */
    .footer {
        color: #777;
        padding: 10px 15px;
        height: 20px;
        text-align: center;
        border-top: 1px solid #e6e6e6;
    }
    .footer .todo-count {
        float: left;
        text-align: left;
    }
    .footer .todo-count strong {
        font-weight: 300;
    }
    .footer .filters {
        margin: 0;
        padding: 0;
        list-style: none;
        position: absolute;
        right: 0;
        left: 0;
    }
    .footer .filters li {
        display: inline;
    }
    .footer .filters li a {
        color: inherit;
        margin: 3px;
        padding: 3px 7px;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: 3px;
    }
    .footer .filters li a.selected {
        border-color: rgba(175, 47, 47, 0.2);
    }
    .footer .filters li a:hover {
        border-color: rgba(175, 47, 47, 0.1);
    }
    .footer .clear-completed {
        float: right;
        position: relative;
        line-height: 20px;
        text-decoration: none;
        cursor: pointer;
        position: relative;
    }
    .footer .clear-completed:hover {
        text-decoration: underline;
    }
    .footer .clear-completed:before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
        0 8px 0 -3px #f6f6f6,
        0 9px 1px -3px rgba(0, 0, 0, 0.2),
        0 16px 0 -6px #f6f6f6,
        0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
    @media screen and (-webkit-min-device-pixel-ratio: 0) {
        .toggle-all,
        .todo-list li .toggle {
            background: none;
        }
        .todo-list li .toggle {
            height: 40px;
        }
        .toggle-all {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            -webkit-appearance: none;
            appearance: none;
        }
    }
    @media (max-width: 430px) {
        .footer {
            height: 50px;
        }
        .filters {
            bottom: 10px;
        }
    }
</style>
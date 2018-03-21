<template>
    <!-- List-->
    <section class="main">
        <input type="checkbox" class="toggle-all"/>
        <ul class="todo-list">
            <li>
                <div class="view">
                    <input type="checkbox" class="toggle">
                    <label>테스트</label>
                    <button class="destroy"></button>
                </div>
                <input ref="editInput" type="text" class="edit"/>
            </li>
        </ul>
    </section>
    <!--// List-->
</template>
<script lang="ts">
    import Vue from 'vue';
    import { Todos } from '../../Interfaces/Todo.Interface';
    import Component from "vue-class-component";

    @Component<TodoList>({
        props: {
            todos: {
                type: Todos
            }
        }
    })
    export default class TodoList extends Vue {

    }
</script>
<style lang="scss" scoped>

</style>
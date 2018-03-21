<template>
    <!-- List-->
    <section class="main">
        <input type="checkbox" class="toggle-all"/>
        <ul class="todo-list">
            {{ todos }}
            <todo-item v-for="todo in todos"
                       :key="todo.id"
                       :todo="todo"></todo-item>
        </ul>
    </section>
    <!--// List-->
</template>
<script lang="ts">
    import Vue from 'vue';
    import { Todos } from '../../Interfaces/Todo.Interface';
    import { Component, Prop } from 'vue-property-decorator';

    import TodoItem from './TodoItem.vue';

    @Component<TodoList>({
        components: {
            TodoItem
        }
    })
    export default class TodoList extends Vue {
        @Prop() todos: Todos

    }
</script>
<style lang="scss" scoped>

</style>
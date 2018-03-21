<template>
    <li>
        <div class="view">
            <input class="toggle"
                   type="checkbox" :checked="todo.isDone">
            <label>{{ todo.todo }}</label>
            <button class="destroy"></button>
        </div>
        <input ref="editInput" type="text" class="edit"/>
    </li>
</template>
<script lang="ts">
    import Vue from 'vue';
    import { Todo } from '../../Interfaces/Todo.Interface';
    import { Component, Prop } from 'vue-property-decorator';
    @Component<TodoItem>({})
    export default class TodoItem extends Vue {
        @Prop() todo: Todo
    }
</script>
<style lang="scss" scoped>

</style>
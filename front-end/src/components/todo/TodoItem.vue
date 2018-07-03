<template>
    <li>
        <div class="view">
            <input class="toggle"
                   type="checkbox" :checked="todo.completed">
            <label>{{ todo.text }}</label>
            <button class="destroy" @click="remove"></button>
        </div>
        <input ref="editInput" type="text" class="edit"/>
    </li>
</template>
<script lang="ts">
    import Vue from 'vue';
    import { Action } from 'vuex-class';
    import { Todo } from '../../types/Todo';
    import { Component, Prop } from 'vue-property-decorator';

    @Component<TodoItem>({})
    export default class TodoItem extends Vue {
        @Prop() todo: Todo;
        @Action('deleteTodo') deleteTodo: Function;

        remove (): void {
            const id = this.todo.id;
            this.deleteTodo(id)
                .then((res:any) => {
                })
        }
    }
</script>
<style lang="scss" scoped>

</style>
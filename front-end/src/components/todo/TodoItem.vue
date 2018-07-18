<template>
    <li>
        <div class="view">
            <input class="toggle"
                   type="checkbox" :checked="todo.completed">
            <label>{{ todo.text }}</label>
        </div>
        <input type="text" class="edit"/>
    </li>
</template>
<script lang="ts">
    import Vue from 'vue';
    import { Todo } from '../../types/Todo';
    import { Component, Prop } from 'vue-property-decorator';

    @Component<TodoItem>({})
    export default class TodoItem extends Vue {
        @Prop() todo: Todo;
    }
</script>
<style lang="scss" scoped>

</style>
<template>
    <div class="hello">{{ msg }}{{myProp}}</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    created() {
        console.log('Fuck!!!')
    },
    props: ["myProp"]
})

class HelloWorld123 extends Vue{

    msg: string = "Hello!!";

}

export default HelloWorld123;
</script>

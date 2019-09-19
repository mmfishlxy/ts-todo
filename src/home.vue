<template>
    <div class="main">
        <todoHead></todoHead>
        <addTodo></addTodo>
        <!-- <todo></todo> -->
        <todoComp></todoComp>

    </div>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'

import todoHead from './components/header.vue'
import addTodo from './components/addTodo.vue'
import todo from './components/todo.vue'
import todoComp from './components/todoComp.vue'

@Component({
    components: {
        todoHead,
        addTodo,
        todo,
        todoComp
    }
})

export default class Home extends Vue{
    
}
</script>

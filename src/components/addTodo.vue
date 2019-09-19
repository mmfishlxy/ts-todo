<template>
    <div class="add-todo">
        <input
            type="text"
            placeholder="今天想做点什么呢~" 
            :value="input_content" 
            @change="change" 
            @keyup.enter="editItems" 
            class="input-text" />
        <button @click="editItems" class="add">创建任务</button>
    </div>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

@Component
export default class AddTodo extends Vue {
    @Action public editItems: any
    @Action public setInputContent: any
    @State public input_content: any

    public change(e: any): void {
        this.setInputContent( e.target.value )
    }
}
</script>

<style scoped>
.add-todo{
    width: 800px;
    margin: 0 auto;
    position: relative;
    padding-top: 50px;
}
.input-text{
    width:625px;
    height:50px;
    margin-bottom:30px;
    border: none;
    border-bottom: 1px solid cadetblue;
    padding-left:12px;
    outline: none;
    font-size: 21px;
    color: cadetblue;
}
.input-text::-webkit-input-placeholder{
    color: cadetblue;
}
button{
    width: 92px;
    height: 39px;
    background-color: cadetblue;
    color: #fff;
    border-radius: 26px;
    position: absolute;
    left: 688px;
    top: 59px;
    outline: none;
    border: none;
}
button:hover{
    border: 1px solid cadetblue;
    background-color: #fff;
    color: #000;
}
</style>

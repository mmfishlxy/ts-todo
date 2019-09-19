<template>
    <div class="todo">
        <p class="item_title">未完成任务</p>
        <ul>
            <li v-for="item1 in this.$store.state.items" :key="item1.id">
                <label class="custom-checkbox">
                    <input type="checkbox" v-model="item1.checked" @change="changedFinished(item1)">
                </label>
                <span :class="{hasFinished: item1.ishasFinished}">
                    {{ item1.content }}
                </span>
                <todoButton @click.native="cancelTask(item1)" btnContent="取消"></todoButton>
            </li>
        </ul>

        <p class="item_title">已完成任务</p>
        <ul>
            <li v-for="(item2, index2) in this.$store.state.finishedItems" :key="item2.id">
                <label class="custom-checkbox2">
                    <input type="checkbox" v-model="item2.checked" @change="changedUnfinished(item2)">
                </label>
                <span :class="{hasFinished: item2.ishasFinished}">
                    {{ item2.content }}
                </span>
                <todoButton @click.native="deleteTodo(index2)" btnContent="删除"></todoButton>
            </li>
        </ul>
        
        <p class="item_title">已取消任务</p>
        <ul>
            <li v-for="item3 in this.$store.state.cancelItems" :key="item3.id">
                <span :class="{hasFinished: item3.ishasFinished}">
                    {{ item3.content }}
                </span>
                <todoButton @click.native="restoreTask(item3)" btnContent="恢复"></todoButton>
            </li>
        </ul>
        <!-- v-on 的 .native 修饰符：在一个组件的根元素上直接监听一个原生事件 -->
    </div>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'

import todoButton from './buttton.vue'
import { Action } from 'vuex-class'

@Component({
    components: {   
        todoButton
    }
})
export default class Todo extends Vue{
    @Action public changedFinished: any
    @Action public changedUnfinished: any
    @Action public cancelTask: any
    @Action public restoreTask: any
    @Action public deleteTodo: any
}
</script>

<style scoped>
.todo{
    width: 800px;
    margin: 0 auto;
}
.item_title{
    color:#37838d;
    font-size: 21px;
    font-weight:500;
    border-bottom: 1px solid #000;
    padding:5px;
}
ul{
    margin-bottom:30px;
}
li{
    list-style: none;
    height: 32px;
    line-height: 32px;
    padding: 10px 0px 10px 0px;
    font-size: 17px;
    border-bottom: 1px solid #eee;
    position: relative;
}
.delete{
    width:70px;
    height:32px;
    border: 1px solid cadetblue;
    background-color: white;
    border-radius: 4px;
    outline: none;
    position: absolute;
    left: 700px;
}
.delete:hover{
    background-color: cadetblue;
    color: #fff;
}
.hasFinished{
    color: gray;
    text-decoration:line-through;
}
.custom-checkbox input[type="checkbox"]{
    display: none;
}
.custom-checkbox{
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid cadetblue;
    margin-right: 16px;
}
.custom-checkbox2 input[type="checkbox"]{
    display: none;
}
.custom-checkbox2{
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: cadetblue;
    margin-right: 16px;
}
</style>

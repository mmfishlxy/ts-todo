<template>
    <div class="todo">
        <p class="item_title">未完成任务</p>
        <ul>
            <tasks 
                v-for="item1 in items" 
                :key="item1.id" 
                :item='item1'
                @change-state2="cancelTask(item1)" 
                @changed-isFinished2="changedFinished(item1)" 
                btnContent2="取消">
            </tasks>
        </ul>
        <p class="item_title">已完成任务</p>
        <ul>
            <tasks 
                v-for="(item2, index2) in finishedItems" 
                :key="item2.id" 
                :item='item2'
                @change-state2="deleteTodo(index2)" 
                @changed-isFinished2="changedUnfinished(item2)" 
                btnContent2="删除">
            </tasks>
        </ul>
        <p class="item_title">已取消任务</p>
        <ul>
            <tasks 
                v-for="item3 in cancelItems" 
                :key="item3.id" 
                :item='item3' 
                @change-state2="restoreTask(item3)" 
                btnContent2="恢复">
            </tasks>
        </ul>
    </div>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'

import tasks from './tasks.vue'
import { Action, State } from 'vuex-class'

@Component({
    components: {
        tasks
    }
})
export default class TodoCom extends Vue{
    @Action public changedFinished: any
    @Action public changedUnfinished: any
    @Action public cancelTask: any
    @Action public restoreTask: any
    @Action public deleteTodo: any

    @State public items: any
    @State public finishedItems: any
    @State public cancelItems: any
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
</style>
 
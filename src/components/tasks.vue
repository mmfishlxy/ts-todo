<template>
    <div>
        <li>
            <check @changed-isFinished="changedIsFinished2" :item='item'></check>
            <span :class="{hasFinished: item.ishasFinished}" class="content_span">
                {{ item.content }}
            </span>
            <!-- 使用v-bind 说明传的参数不是字符串 而是一个js表达式 -->
            <todoButton @change-state="changeState2" :btnContent= 'btnContent2'></todoButton>
        </li>
    </div>
    <!-- v-on 的 .native 修饰符：在一个组件的根元素上直接监听一个原生事件 -->
</template>

<script lang="ts">
import {
    Vue,
    Component,
    Prop,
    Emit
} from 'vue-property-decorator'

import check from './checkbox.vue'
import todoButton from './buttton.vue'
import { Action, State } from 'vuex-class'

@Component({
    components: {
        todoButton,
        check
    },
})

export default class ClassTasks extends Vue {
    // 显式赋值断言
    @Prop() item!: object
    @Prop() btnContent2!: object

    @Emit()
    changeState2() {
        
    }
    @Emit('changed-isFinished2')
    changedIsFinished2(){
        
    }
}
</script>

<style scoped>
li{
    list-style: none;
    height: 32px;
    line-height: 32px;
    padding: 10px 0px 10px 0px;
    font-size: 17px;
    border-bottom: 1px solid #eee;
    position: relative;
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
.content_span{
    margin-left: 20px;
}
.hasFinished{
    color: gray;
    text-decoration:line-through;
}
</style>

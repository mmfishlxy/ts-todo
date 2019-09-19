<template>
    <div class="btnMain">
        <!-- btnContent即为父组件传进来的按钮要展示的内容 -->
        <button class="delete" @click="changeState">{{ btnContent }}</button>
    </div>
</template>

<script lang="ts">
import {
    Vue,
    Component,
    Prop,
    Emit
} from 'vue-property-decorator'

@Component
export default class Button extends Vue {
    @Prop() btnContent!: string
    
    @Emit()
    changeState() {

    }
}
</script>

<style>
.btnMain{
    display: inline-block;
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
    top: 10px;
}
.delete:hover{
    background-color: cadetblue;
    color: #fff;
}
</style>

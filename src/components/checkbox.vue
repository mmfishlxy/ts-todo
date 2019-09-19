<template>
    <div>
        <input type="checkbox" v-model="item.checked" @change="changedIsFinished">
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
export default class Checkbox extends Vue {
    @Prop() item!: any

    @Emit('changed-isFinished')
    changedIsFinished() {
    }
}
</script>

<style scoped>
input[type=checkbox] {
    float:left;
    width: 10px;
    height: 1px;
}
input[type=checkbox]::before{
    content:'';
    position: absolute;
    top: 18px;
    left: 0;
    width: 14px;
    height: 14px;
    border: 1px solid cadetblue;
}
input[type=checkbox]:checked::before {
    background-color: cadetblue;
}
</style>

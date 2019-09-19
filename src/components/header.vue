<template>
    <div>
        <header>
            <h1>任务小记</h1>
        </header>
    </div>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator'

@Component
export default class Header extends Vue {

}
</script>

<style scoped>
    header{
        width: 100%;
        height: 8vh;
        background-color: cadetblue;
    }
    h1{
        text-align: center;
        color: #fff;
        line-height: 8vh;
    }
</style>

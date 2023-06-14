<template>
    <!-- <div>123
        <div class="aa"> <button @click="getSchool">按钮</button></div>
        <button @click="getNames">点击触发emit事件传递数据</button>
        <button @click="off">点我销毁触发事件</button>
        <button @click="bus">获取数据</button>
    </div> -->
    <div>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import asides from './asides.vue'
import headers from './headers.vue'
export default {
    name: 'Home',
    props: ['getName'],
    components: { asides, headers },
    data() {
        return {
            school: '科技学院'
        };
    },
    methods: {
        // getSchool() {
        //     this.getName(this.school)
        // },
        // getNames() {
        //     this.$emit('hello', this.school, 8888, 6666, 555)
        // },
        // off() {
        //     this.$off('hello')
        // },
        // bus() {
        //     this.$bus.$emit('execute', this.school)
        // }
    },
    mounted() {
        // console.log(this.$store.state.car.num);
    },
}

</script>
<style lang='less' scoped>
.aa {
    width: 7.5rem;
    height: 200px;
    background: pink;
}
</style>
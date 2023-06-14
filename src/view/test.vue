<!--  -->
<template>
    <div>
        <ul>
            <li v-for="(item, index) in list" :key="index" ref="count">{{ item }}</li>
        </ul>
        <div style="margin-left: 30px;">当前li总长度为:{{ allNumber }}</div>
        <button @click="setTime">点击事件</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: ["java", 'js', 'c'],
            currentNumber: 0
        };
    },
    computed: {
        allNumber() {
            return this.list.length
        }
    },
    methods: {
        setTime() {
            this.list.unshift(parseInt((Math.random() * 10)))
            // this.$nextTick(() => {
            let currentList = this.$refs.count.length
            console.log(currentList);
            currentList = this.currentNumber
            // })
        }
    },
}

</script>
<style lang='less' scoped></style>
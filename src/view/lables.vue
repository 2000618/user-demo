<!--  -->
<template>
    <div>
        <label v-for="item in originalHobbies">
            <input type="checkbox" @change="f1($event)" :value="item" v-model="arr" />
            <input type="">
            {{ item }}
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: [],
            originalHobbies: ['台球', '排球', '网球', '篮球'],
        };
    },
    methods: {
        f1: function (params) {
            console.log(this.arr)
        },
    },
}

</script>
<style lang='less' scoped></style>
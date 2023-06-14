<!--  -->
<template>
    <div>
        <h2>{{ this.sum }}</h2> <button @click="add()">n++</button>
        <h2>偶数不加奇数加：{{ $store.state.car.num }}</h2> <button @click="oddNumber()">奇数加</button>
        <h2>{{ ride }}</h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    data() {
        return {
            n: 1
        };
    },
    computed: {
        sum() {
            return this.$store.state.car.num
        },
        ...mapGetters(['ride'])
    },
    methods: {
        add() {
            this.$store.commit('JIA', this.n)
        },
        oddNumber() {
            this.$store.dispatch('jia', this.n)
        }
    },
    mounted() {
        // console.log(this.$store.getters.ride);
    },
}

</script>
<style lang='less' scoped></style>
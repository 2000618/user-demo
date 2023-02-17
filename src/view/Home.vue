<!--  -->
<template>
    <div>123
        <div class="aa"></div>
</div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
        };
    },
    mounted() {
        console.log(this.$store.state.car.num);
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
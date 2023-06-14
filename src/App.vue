<template>
  <div>
    <router-view></router-view>

    <!-- <Home :getName="getName" @hello="getshool"></Home>
    <labels></labels>
    <count></count> -->
  </div>
</template>

<script>
import labels from '@/view/lables.vue'
import Home from '@/view/Home.vue'
import count from '@/view/count.vue'
export default {
  name: 'App',
  components: {
    Home, labels, count
  },
  methods: {
    getName(name) {
      console.log('App组件接受' + name);
    },
    getshool(shool, ...ars) {
      console.log(shool, ars);
    }
  },
  mounted() {
    this.$bus.$on('execute', (data) => {
      console.log("我拿到了我想要的数据", data);
    })
  },
}
</script>

<style></style>

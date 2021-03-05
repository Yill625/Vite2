<template>
<div class="count">
  {{ count }}
</div>
  <van-button type="primary" size="large" @click="increment"
    >大号按钮</van-button
  >
  <van-tabbar v-model="active" safe-area-inset-bottom>
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const active = ref(0);
    return {
      active,
      count: computed(() => store.state.userInfo.count),
      increment: () => store.commit("increment"),
    };
  },
};
</script>

<style lang="scss" scoped>
.count{
  color: red;
}
</style>
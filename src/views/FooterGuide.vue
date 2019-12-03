<template>
  <van-tabbar v-model="active">
    <van-tabbar-item>
      <span>曲库</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? warehouse.active : warehouse.inactive"
      />
    </van-tabbar-item>
    <van-tabbar-item>
      <span>正在播放</span>
      <img slot="icon" slot-scope="props" :src="props.active ? player.active : player.inactive" />
    </van-tabbar-item>
    <van-tabbar-item>
      <span>我的</span>
      <img slot="icon" slot-scope="props" :src="props.active ? mine.active : mine.inactive" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
import { Icon } from "vant";

Vue.use(Icon);
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
      warehouse: {
        active: "/img/footer_guide/warehouse_active.png",
        inactive: "/img/footer_guide/warehouse_inactive.png"
      },
      player: {
        active: "/img/footer_guide/player_active.png",
        inactive: "/img/footer_guide/player_inactive.png"
      },
      mine: {
        active: "/img/footer_guide/mine_active.png",
        inactive: "/img/footer_guide/mine_inactive.png"
      }
    };
  }
};
</script>
 
<style>
</style>
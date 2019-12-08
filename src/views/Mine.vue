<template>
  <div id="all_border">
    <div class="my_logo"></div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      <van-count-down millisecond format="HH:mm:ss:SS" />
    </van-divider>
    <div class="circles">
      <van-circle v-model="currentRate" :color="gradientColor" text="渐变色" />
      <van-circle v-model="currentRate" :color="gradientColor" text="渐变色" />
      <van-circle v-model="currentRate" :color="gradientColor" text="渐变色" />
    </div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">文字</van-divider>
    <div class="tags">
      <van-tag plain>标签</van-tag>
      <van-tag plain type="primary">标签</van-tag>
      <van-tag plain type="success">标签</van-tag>
      <van-tag plain type="danger">标签</van-tag>
      <van-tag plain type="warning">标签</van-tag>
    </div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">文字</van-divider>
    <div class="song_sheet">
      <van-skeleton title avatar :row="3" />
      <van-skeleton title avatar :row="3" />
      <van-skeleton title avatar :row="3" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Skeleton } from "vant";
import { Circle } from "vant";
import { Divider } from "vant";
import { CountDown } from "vant";
import { Tag } from "vant";

Vue.use(Tag);
Vue.use(CountDown);
Vue.use(Divider);
Vue.use(Circle);
Vue.use(Skeleton);
export default {
  data() {
    return {
      currentRate: 0,
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6"
      }
    };
  }
};
</script>

<style lang="scss">
#all_border {
  box-sizing: content-box;
  padding: 20px;
  .circles {
    display: flex;
    justify-content: space-around;
  }
  .tags {
    span {
      display: inline-block;
    }
    display: flex;
    justify-content: space-around;
  }
}
</style>
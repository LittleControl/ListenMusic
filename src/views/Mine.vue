<template>
  <div id="all_border">
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      你已已经呆在这里
      <van-count-down millisecond format="HH:mm:ss:SS" />时间啦
    </van-divider>
    <div class="my_logo">
      <div class="logo_img">
        <img src="/img/mine/Emiya.jpg" />
      </div>
    </div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">我的标签</van-divider>
    <div class="tags">
      <van-tag plain>李荣浩</van-tag>
      <van-tag plain type="primary">民谣</van-tag>
      <van-tag plain type="success">轻音乐</van-tag>
      <van-tag plain type="danger">节奏控</van-tag>
      <van-tag plain type="warning">钢琴</van-tag>
    </div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">我的歌单</van-divider>
    <div class="song_sheet">
      <div class="sheet">
        <div class="cover">
          <img src="/img/mine/sheet1.jpg" />
        </div>
        <div class="description">
          <div class="title">Trouble I'm In</div>
          <div class="commit">你眼中的世界</div>
          <div class="time">创建于2019-11-23</div>
        </div>
        <div class="nav_arrow">
          <img src="/img/mine/arrow.png" />
        </div>
      </div>
      <div class="sheet">
        <div class="cover">
          <img src="/img/mine/sheet1.jpg" />
        </div>
        <div class="description">
          <div class="title">Trouble I'm In</div>
          <div class="commit">你眼中的世界</div>
          <div class="time">创建于2019-11-23</div>
        </div>
        <div class="nav_arrow">
          <img src="/img/mine/arrow.png" />
        </div>
      </div>
      <div class="sheet">
        <div class="cover">
          <img src="/img/mine/sheet1.jpg" />
        </div>
        <div class="description">
          <div class="title">Trouble I'm In</div>
          <div class="commit">你眼中的世界</div>
          <div class="time">创建于2019-11-23</div>
        </div>
        <div class="nav_arrow">
          <img src="/img/mine/arrow.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Skeleton } from "vant";
import { Divider } from "vant";
import { CountDown } from "vant";
import { Tag } from "vant";

Vue.use(Tag);
Vue.use(CountDown);
Vue.use(Divider);
Vue.use(Skeleton);
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#all_border {
  box-sizing: content-box;
  padding: 20px;
  .my_logo {
    text-align: center;
    .logo_img {
      width: 50px;
      height: 50px;
      margin: auto;
      border-radius: 50% 50%;
      overflow: hidden;
      img {
        width: 50px;
      }
    }
  }
  .tags {
    span {
      display: inline-block;
    }
    display: flex;
    justify-content: space-around;
  }
  .song_sheet {
    .sheet {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .cover {
        width: 100px;
        height: 100px;
        border-radius: 50% 50%;
        overflow: hidden;
        img {
          width: 100px;
        }
      }
      .description {
        flex-basis: 50%;
        display: flex;
        align-content: space-around;
        flex-wrap: wrap;
        div {
          width: 100%;
        }
      }
      .nav_arrow {
        img {
          width: 20px;
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      margin-bottom: 10px;
    }
  }
}
</style>
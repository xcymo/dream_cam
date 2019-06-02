<template>
  <div>
    <div class="flex" v-show="!imgSrc">
      <div class="icon-box">
        <uploadImg :imgArr="imgArr1" @changeImgArr="imgChange" imgtype="1" />
        <div class="cam-name">巴洛克风格</div>
      </div>
      <div class="icon-box">
        <uploadImg :imgArr="imgArr2" @changeImgArr="imgChange" imgtype="2" />
        <div class="cam-name">洛可可风格</div>
      </div>
      <div class="icon-box">
        <uploadImg :imgArr="imgArr3" @changeImgArr="imgChange" imgtype="3" />
        <div class="cam-name">漫画风格</div>
      </div>
      <div class="icon-box">
        <uploadImg :imgArr="imgArr4" @changeImgArr="imgChange" imgtype="4" />
        <div class="cam-name">动态图片</div>
      </div>
      <router-link to="more">
        <div class="icon-box">
          <img src="../assets/tbd.png" class="sig-pic" />
          <div class="cam-name">更多功能</div>
        </div>
      </router-link>
      <router-link to="support">
        <div class="icon-box">
          <img src="../assets/spt.png" class="sig-pic" />
          <div class="cam-name">支持我们</div>
        </div>
      </router-link>
    </div>
    <div class="submit" v-show="imgSrc">
      <div class="sub-type">{{ cur_type }}</div>
      <div class="img-show">
        <img :src="imgSrc" />
      </div>
      <div class="bottom-btn">
        <button @click="submitImg">提交图片</button>
      </div>
    </div>
  </div>
</template>

<script>
import UploadImg from '../components/uploadImg'
export default {
  components: {
    UploadImg
  },
  data() {
    return {
      imgArr1: {},
      imgArr2: {},
      imgArr3: {},
      imgArr4: {},
      imgSrc: '',
      cur_type: ''
    }
  },
  methods: {
    imgChange(file, type) {
      this.clearImgArr()
      this.imgSrc = file.content;
      if (type == 1) {
        this.cur_type = "巴洛克风格"
        this.imgArr1 = file
      }
      if (type == 2) {
        this.cur_type = "洛可可风格"
        this.imgArr2 = file
      }
      if (type == 3) {
        this.cur_type = "漫画风格"
        this.imgArr3 = file
      }
      if (type == 4) {
        this.cur_type = "动态图片"
        this.imgArr4 = file
      }
    },
    clearImgArr() {
      this.imgArr1 = {};
      this.imgArr2 = {};
      this.imgArr3 = {};
      this.imgArr4 = {};
    },
    submitImg() {
      this.imgSrc = '';
    }
  }
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.icon-box {
  width: calc(50vw - 2px);
  border: 1px solid #c3c3c3;
  height: 50vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  .cam-name {
    width: 100%;
    // margin-top: -100px;
    position: absolute;
    bottom: 30px;
    color: #2c3e50;
  }
  .sig-pic {
    width: 19.2vw;
    height: 19.2vw;
    margin: 0 2.4vw;
  }
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.submit {
  .sub-type {
    text-align: center;
    font-size: 14px;
    margin-top: 5vw;
  }
  .img-show {
    margin-top: 5vw;
    text-align: center;
    img {
      width: 80vw;
    }
  }
  .bottom-btn {
    margin-top: 10vw;
    text-align: center;
    button {
      border: none;
      outline: none;
      background: #ec6464;
      border-radius: 5px;
      width: 50vw;
      line-height: 44px;
      font-size: 18px;
      color: #fff;
    }
  }
}
</style>

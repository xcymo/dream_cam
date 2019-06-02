<template>
  <div id="app">
    <div class="title">
      有梦相机
      <span
        class="arrow-back"
        v-show="$route.meta.hasBack"
        @click="goBack()"
      ></span>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.title {
  text-align: center;
  position: relative;
  font-size: 18px;
  font-weight: bold;
  line-height: 44px;
  padding-top: 22px;
  border-bottom: 1px solid #c3c3c3;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
  min-height: 100vh;
}
.arrow-back {
  display: inline-block;
  position: absolute;
  left: 5vw;
  bottom: 4vw;
  width: 10px;
  height: 10px;
  border-left: 4px solid #2c3e50;
  border-top: 4px solid #2c3e50;
  transform: rotate(-45deg);
}
</style>

<template>
  <div id="app">
    <h1>黄小仙</h1>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <li v-for="v in news">
      {{v.title}}
    </li>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
    news(){
      console.log(this.$store.getters.getAllNews);
      return this.$store.getters.getAllNews
    }
  }
}
</script>

<style lang="less" scoped="">
  /*scoped表示作用域，只对该组件使用*/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  img{
    width:100px;
    height: 100px;
  }
  h1{
    text-decoration: underline;
  }
}
</style>

<template>
  <div id="app">
    <p>aaaa</p>
    <p>
      <router-link to="/Home">主页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/News">新闻</router-link> 
      </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      content: ""
    };
  },
  mounted() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

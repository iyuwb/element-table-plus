<template>
  <div id="app">
    <elementTablePlus :option="option"></elementTablePlus>
  </div>
</template>

<script>

import elementTablePlus from "./package/element-table-plus.vue";
export default {
  name: "App",
  components: {

    elementTablePlus,
  },
  data() {
    return {
      option: {},
    };
  },
  created() {
    this.option = require("./package/data.json");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 100px;
  background-color: pink;
  border: 1px solid #eee;
}
</style>
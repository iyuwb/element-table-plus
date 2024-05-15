<template>
  <div id="app">
    <!-- <elementTablePlus :option="option" /> -->
    <el-table
      :header-cell-style="{ background: '#ccc', color: '#333' }"
      :row-style="{ background: '#ccc', color: '#666' }"
      :border="true"
      :data="option.tableData"
      style="width: 100%"
    >
      <elTableColumnPlus :option="option.headerData"></elTableColumnPlus>
    </el-table>
  </div>
</template>

<script>
// import elementTablePlus from "./package/element-table-plus.vue";
// elTableColumnPlus
import elTableColumnPlus from "./elTableColumnPlus.vue";
export default {
  name: "App",
  components: {
    // elementTablePlus,
    elTableColumnPlus,
  },
  data() {
    return {
      option: {},
    };
  },
  created() {
    this.option = require("./demo.json");
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
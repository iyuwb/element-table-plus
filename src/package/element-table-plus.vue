<template>
  <div id="elementTablePlus">
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
import elTableColumnPlus from "./el-table-column-plus";
export default {
  name: "elementTablePlus",
  components: {
    elTableColumnPlus,
  },
  props: ["option"],
  data() {
    return {};
  },
};
</script>
  
<style>
#elementTablePlus {
}
</style>
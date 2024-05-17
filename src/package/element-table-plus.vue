<template>
  <div id="elementTablePlus">
    <el-table
      :border="true"
      :data="option.tableData"
      style="width: 100%"
      :header-cell-style="{ background: '#ccc', color: '#333' }"
      :row-style="{ background: '#ccc', color: '#666' }"
    >
      <elTableColumnPlus
        v-for="item in option.headerData"
        :key="item.value"
        :item="item"
      ></elTableColumnPlus>
    </el-table>
  </div>
</template>

<script>
import elTableColumnPlus from "./el-table-column-plus.vue";
export default {
  props: ["option"],
  name: "elementTablePlus",
  components: {
    elTableColumnPlus,
  },
};
</script>

<style>
#elementTablePlus {
}
</style>
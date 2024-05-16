<template>
  <div id="elementTablePlus">
    <el-table :border="true" :data="option.tableData" style="width: 100%">
      <elTableColumnPlus v-for="item in option.headerData" :key="item.value" :item="item"></elTableColumnPlus>
    </el-table>
  </div>
</template>

<script>
import elTableColumnPlus from "./el-table-column-plus.vue";
export default {
  props: ['option'],
  name: "elementTablePlus",
  components: {
    elTableColumnPlus,
  },
};
</script>

<style>
#elementTablePlus {}
</style>
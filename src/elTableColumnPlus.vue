<template>
  <div>
    <div v-for="item in option" :key="item.value">
      <!-- 多级表头 -->
      <el-table-column
        v-if="!item.children || !item.children.length"
        :prop="item.prop"
        :label="item.label"
      >
      </el-table-column>
      <el-table-column v-else :prop="item.prop" :label="item.label">
        <elTableColumnPlus :option="item.children"> </elTableColumnPlus>
      </el-table-column>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "elTableColumnPlus",
  props: ["option"],
  components: {},
};
</script>
  
  <style>
</style>
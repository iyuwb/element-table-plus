<template>
  <el-table-column :prop="item.prop" :label="item.label">
    <template v-if="item.children && item.children.length">
      <elTableColumnPlus v-for="it in item.children" :key="it.value" :item="it"></elTableColumnPlus>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "elTableColumnPlus",
  props: ["item"],
  components: {},
};
</script>
<style></style>
<template>
  <el-table-column
    :prop="item.prop"
    :label="item.label"
    :align="item.align || 'center'"
    :show-overflow-tooltip = "item.showOverflowTooltip"
  >
    <!-- 自定义表头 -->
    <div slot="header">
      {{ item.label }}
    </div>
    <!-- 自定义内容 -->
    <template slot-scope="scope">
      {{ scope.row[item.prop]}}
    </template>
    <!-- 嵌套 多级表头 -->
    <template v-if="item.children && item.children.length">
      <elTableColumnPlus
        v-for="it in item.children"
        :key="it.value"
        :item="it"
      ></elTableColumnPlus>
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
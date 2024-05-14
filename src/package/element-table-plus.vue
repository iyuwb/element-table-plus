<template>
  <div id="elementTablePlus">
    <el-table :border="true" :data="option.tableData" style="width: 100%">
      <el-table-column
        v-for="(item,index) in option.headerData"
        :key="item.value"
        :align="'center'"
        prop="date"
        label="日期"
        width="180"
      >
        <div slot="header">
          <span> {{ item.name }} {{ index }} {{ option.tableData[index].name }}</span>
          <el-tooltip
            class="item"
            effect="dark"
            content="Top Center 提示文字"
            placement="top"
          >
            <el-button> {{ item.name }}</el-button>
          </el-tooltip>
        </div>
        <template slot-scope="scope">
          <span>{{ scope.row[item.value] }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
  
  <script>
export default {
  name: "elementTablePlus",
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
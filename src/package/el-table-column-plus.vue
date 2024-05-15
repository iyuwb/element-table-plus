<template>
  <div>
    <div v-for="(item, index) in option" :key="item.value">
      <!-- 多级表头 -->
      <el-table-column
        v-if="item.children && item.children.length"
        :align="'center'"
        prop="date"
        label="日期"
        width="180"
      >
        <div slot="header">
          <span> {{ item.name }} {{ index }}</span>
          <el-tooltip
            class="item"
            effect="dark"
            content="Top Center 提示文字"
            placement="top"
          >
            <el-button> {{ item.name }}</el-button>
          </el-tooltip>
        </div>
        <elTableColumnPlus :option="item.children"> </elTableColumnPlus>
      </el-table-column>
      <el-table-column
        v-else
        :align="'center'"
        prop="date"
        label="日期"
        width="180"
      >
        <div slot="header">
          <span> {{ item.name }} {{ index }}</span>
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
    </div>
  </div>
</template>

<script>
// import elTableColumnPlus from "./el-table-column-plus";
export default {
  name: "elTableColumnPlus",
  props: ["option"],
  components: {
    // elTableColumnPlus,
  },
};
</script>

<style>
</style>
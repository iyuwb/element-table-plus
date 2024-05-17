# element-table-plus-demo

## 下载
```shell
npm i element-table-plus-demo
```

## 使用

`main.js`

```js
import elementTablePlus from 'element-table-plus-demo';
import 'element-table-plus-demo/elementTablePlusDemo.css';
Vue.use(elementTablePlus)
```

`App.vue`

```vue
<template>
  <div id="app">
    <elementTablePlus :option="option"></elementTablePlus>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {},
    };
  },
  created() {
    this.option = require("./package/data.json");
  },
</script>

```
`data.json`

```json
{
    "headerData": [
        {
            "label": "日期", 
            "prop": "date",
            "showOverflowTooltip":true
        },
        {
            "label": "名字",
            "prop": "name"
        },
        {
            "label": "成绩",
            "children": [
                {
                    "label": "语文",
                    "prop": "score1"
                },
                {
                    "label": "数学",
                    "prop": "score2"
                },
                {
                    "label": "英语",
                    "prop": "score3"
                },
                {
                    "label": "理综",
                    "children": [
                        {
                            "label": "物理",
                            "prop": "score4"
                        },
                        {
                            "label": "化学",
                            "prop": "score5"
                        },
                        {
                            "label": "生物",
                            "prop": "score6"
                        }
                    ]
                }
            ]
        }
    ],
    "tableData": [
        {
            "date": "2016-05-02",
            "name": "王小虎",
            "score1": 150,
            "score2": 150,
            "score3": 150,
            "score4": 110,
            "score5": 100,
            "score6": 90
        },
        {
            "date": "2016-05-04",
            "name": "王小明",
            "score1": 150,
            "score2": 150,
            "score3": 150,
            "score4": 110,
            "score5": 100,
            "score6": 90
        },
        {
            "date": "2016-05-01",
            "name": "王小丽",
            "score1": 150,
            "score2": 150,
            "score3": 150,
            "score4": 110,
            "score5": 100,
            "score6": 90
        },
        {
            "date": "2016-05-03",
            "name": "王小飞",
            "score1": 150,
            "score2": 150,
            "score3": 150,
            "score4": 110,
            "score5": 100,
            "score6": 90
        }
    ]
}
```
![alt text](image.png)
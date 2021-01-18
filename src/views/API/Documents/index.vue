<template>
  <el-tabs
    v-model="activeName"
    type="card"
    @tab-click="show_upsPage"
    class="sub"
  >
    <el-tab-pane
      :key="item.id"
      v-for="item in list"
      :label="item.name"
      :showUrl="item.showUrl"
      :name="item.name"
    >
      <mavon-editor
        style="height: 100%; width: 100%"
        :value="msg"
        :subfield="false"
        :defaultOpen="'preview'"
        :toolbarsFlag="false"
        :editable="false"
        :scrollStyle="true"
        :ishljs="true"
      ></mavon-editor>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import axios from "axios";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import marked from "marked";
var markdowncontent = "数据获取失败！";
let content = marked(markdowncontent);
export default {
  components: {
    mavonEditor,
  },
  data() {
    return {
      msg: marked(markdowncontent),
      list: [],
      obj: {
        imit: 10,
        page: 1,
      },
      activeName: "first",
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    getlist() {
      axios({
        url: "https://saas.jecinfo.com/gateway/api-file/module/list",
        method: "post",
        data: this.obj,
      }).then((res) => {
        this.list = res.data.data;
        if (res.data.data.length > 0) {
          axios
            .get(
              "https://saas.jecinfo.com/gateway/api-file" +
                res.data.data[0].showUrl
            )
            .then((res) => {
              console.log(res);
              this.msg = res.data;
            });
        }
      });
    },
    show_upsPage(e) {
      // console.log(this.list, e.$attrs.icon, "e");
      this.Goods_goodsList(e.$attrs.showUrl);
    },
    Goods_goodsList(url) {
      console.log(url);
      axios
        .get("https://saas.jecinfo.com/gateway/api-file" + url)
        .then((res) => {
          console.log(res);
          this.msg = res.data;
        });
    },
  },
};
</script>

<style>
.el-tabs__content {
  height: 100%;
}
.el-tab-pane {
  height: 100%;
}
</style>
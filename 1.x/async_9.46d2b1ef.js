(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(c,e,t){"use strict";var o=t(51);t.n(o).a},102:function(c,e,t){(c.exports=t(12)(!1)).push([c.i,".demo-checkbox .van-checkbox {\n  margin: 10px 0 0 20px;\n}\n.demo-checkbox .van-cell .van-checkbox {\n  margin: 0;\n}\n.demo-checkbox img {\n  height: 20px;\n}\n",""])},217:function(c,e,t){"use strict";t.r(e);var o={i18n:{"zh-CN":{checkbox:"复选框",customIcon:"自定义图标",customColor:"自定义颜色",title3:"复选框组",title4:"设置最大可选数",title5:"搭配单元格组件使用"},"en-US":{checkbox:"Checkbox",customIcon:"Custom Icon",customColor:"Custom Color",title3:"Checkbox Group",title4:"Maximum amount of checked options",title5:"Inside a Cell"}},data:function(){return{checkbox1:!0,checkbox2:!0,checkbox3:!0,list:["a","b","c"],result:["a","b"],result2:[],result3:[],icon:{normal:"https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png",active:"https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png"}}},methods:{toggle:function(c){this.$refs.checkboxes[c].toggle()}}},n=(t(101),t(7)),l=Object(n.a)(o,function(){var c=this,e=c.$createElement,t=c._self._c||e;return t("demo-section",[t("demo-block",{attrs:{title:c.$t("basicUsage")}},[t("van-checkbox",{model:{value:c.checkbox1,callback:function(e){c.checkbox1=e},expression:"checkbox1"}},[c._v(c._s(c.$t("checkbox")))])],1),t("demo-block",{attrs:{title:c.$t("disabled")}},[t("van-checkbox",{attrs:{value:!1,disabled:""}},[c._v("\n      "+c._s(c.$t("checkbox"))+"\n    ")]),t("van-checkbox",{attrs:{value:!0,disabled:""}},[c._v("\n      "+c._s(c.$t("checkbox"))+"\n    ")])],1),t("demo-block",{attrs:{title:c.$t("customColor")}},[t("van-checkbox",{attrs:{"checked-color":"#07c160"},model:{value:c.checkbox2,callback:function(e){c.checkbox2=e},expression:"checkbox2"}},[c._v("\n      "+c._s(c.$t("customColor"))+"\n    ")])],1),t("demo-block",{attrs:{title:c.$t("customIcon")}},[t("van-checkbox",{scopedSlots:c._u([{key:"icon",fn:function(e){return t("img",{attrs:{src:e.checked?c.icon.active:c.icon.normal}})}}]),model:{value:c.checkbox3,callback:function(e){c.checkbox3=e},expression:"checkbox3"}},[c._v("\n      "+c._s(c.$t("customIcon"))+"\n      ")])],1),t("demo-block",{attrs:{title:c.$t("title3")}},[t("van-checkbox-group",{model:{value:c.result,callback:function(e){c.result=e},expression:"result"}},c._l(c.list,function(e,o){return t("van-checkbox",{key:o,attrs:{name:e}},[c._v("\n        "+c._s(c.$t("checkbox"))+" "+c._s(e)+"\n      ")])}),1)],1),t("demo-block",{attrs:{title:c.$t("title4")}},[t("van-checkbox-group",{attrs:{max:2},model:{value:c.result2,callback:function(e){c.result2=e},expression:"result2"}},c._l(c.list,function(e,o){return t("van-checkbox",{key:o,attrs:{name:e}},[c._v("\n        "+c._s(c.$t("checkbox"))+" "+c._s(e)+"\n      ")])}),1)],1),t("demo-block",{attrs:{title:c.$t("title5")}},[t("van-checkbox-group",{model:{value:c.result3,callback:function(e){c.result3=e},expression:"result3"}},[t("van-cell-group",c._l(c.list,function(e,o){return t("van-cell",{key:o,attrs:{clickable:"",title:c.$t("checkbox")+e},on:{click:function(e){return c.toggle(o)}}},[t("van-checkbox",{ref:"checkboxes",refInFor:!0,attrs:{name:e}})],1)}),1)],1)],1)],1)},[],!1,null,null,null);e.default=l.exports},51:function(c,e,t){var o=t(102);"string"==typeof o&&(o=[[c.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(13)(o,n);o.locals&&(c.exports=o.locals)}}]);
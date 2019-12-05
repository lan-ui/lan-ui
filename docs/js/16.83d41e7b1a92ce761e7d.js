webpackJsonp([16],{"+gXa":function(t,e,s){t.exports=s("dd41")},"RZy/":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h2",{attrs:{id:"单例模式"}},[s("a",{staticClass:"anchor",attrs:{href:"#cube-单例模式-anchor","aria-hidden":"true"}},[s("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),t._v(" 单例模式")]),t._v(" "),s("p",[t._v("通过 API 调用组件的时候，需要涉及到组件的单例、多例模式。")]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("在 cube-ui 中涉及到 API 调用的组件都是弹层类，经常使用的如下：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("在一般情况下，默认行为即可满足需求，除非特殊场景。")]),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("1.11 版本之后")]),t._v(" "),s("p",[t._v("单例是相对于某一个组件上下文的，如果说组件是单例的，在同一个组件内多次实例化的时候，只有一个实例，对应的视图层也只存在一份；如果说组件是多例的，那么每次实例化的时候都会产生一个新的实例，且对应的视图也是有多份的，它们之间互不影响。")])]),t._v(" "),s("li",[s("p",[t._v("1.11 版本之前")]),t._v(" "),s("p",[t._v("如果说组件是单例的，在多次实例化的时候，只有一个实例，对应的视图层也只存在一份；如果说组件是多例的，那么每次实例化的时候都会产生一个新的实例，且对应的视图也是有多份的，它们之间互不影响。")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"#/zh-CN/docs/toast"}},[t._v("Toast 提醒")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#/zh-CN/docs/picker"}},[t._v("Picker 选择器")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#/zh-CN/docs/time-picker"}},[t._v("TimePicker 时间选择器")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#/zh-CN/docs/dialog"}},[t._v("Dialog 弹框")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#/zh-CN/docs/action-sheet"}},[t._v("ActionSheet 操作菜单")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("所有的 API 调用都是使用 "),s("a",{attrs:{href:"#/zh-CN/docs/create-api"}},[t._v("create-api")]),t._v(" 模块暴露出的 "),s("code",{pre:!0},[t._v("createAPI")]),t._v(" 函数实现，在定义的时候就决定了该组件是否是单例的，详见 "),s("a",{attrs:{href:"#/zh-CN/docs/create-api"}},[t._v("create-api")]),t._v(" 文档。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("默认情况下，Toast、Dialog 以及 ActionSheet 是单例的，而 Picker 和 TimePicker 是多例的，因为其场景往往比较复杂，有很多额外的数据处理操作，所以是多例的。如果你想在实例化的时候改变默认行为，可以通过设定 "),s("code",{pre:!0},[t._v("$createX")]),t._v(" 的参数中去修改，例如把 Dialog 改为多例的：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-js"}},[s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" dialog = "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$createDialog({\n  "),s("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("'confirm'")]),t._v(",\n  "),s("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("'title'")]),t._v(",\n  "),s("span",{attrs:{class:"hljs-attr"}},[t._v("content")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("'content'")]),t._v("\n}, "),s("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(")\ndialog.show()\n")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("注：")]),t._v(" 限于 Picker 和 TimePicker 的场景，不支持单例模式。")])}]}},dd41:function(t,e,s){var a=s("VU/8")(null,s("RZy/"),null,null,null);t.exports=a.exports}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-5g_set_meal-index"],{"1b98":function(t,e,a){"use strict";var i=a("5c2f"),n=a.n(i);n.a},"32d5":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("ea00")),o=i(a("c554")),b=i(a("81b1")),s={name:"search",components:{navTop:o.default,myNavgetter:n.default,myLayout:b.default},data:function(){return{data:{}}},onLoad:function(t){if("{}"!=JSON.stringify(t)){var e=JSON.parse(t.data);console.log(e),this.data=e}}};e.default=s},"5a0d":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("my-navgetter"),a("nav-top",{attrs:{title:"5G套餐"}}),a("my-layout",[[a("v-uni-view",{staticClass:"banner-top"},[a("v-uni-view",{staticClass:"top-item1"},[t._v("畅想冰激凌")]),a("v-uni-view",{staticClass:"top-item2"},[t._v("5G套餐")]),a("v-uni-view",{staticClass:"top-item3"},[a("v-uni-image",{staticClass:"img",attrs:{src:"/static/img/5g_set_meal/wl.png","lazy-load":!0}}),a("v-uni-text",{staticClass:"item3-item"},[t._v("畅享5G网速")])],1),a("v-uni-view",{staticClass:"top-item3"},[a("v-uni-image",{staticClass:"img",attrs:{src:"/static/img/5g_set_meal/yh.png","lazy-load":!0}}),a("v-uni-text",{staticClass:"item3-item"},[t._v("尊享5G用户身份")])],1)],1),a("v-uni-view",{staticClass:"title"},[a("v-uni-image",{staticClass:"title-img1",attrs:{src:"/static/img/5g_set_meal/zuo.png","lazy-load":!0}}),a("v-uni-text",{staticClass:"title-text"},[t._v("套餐资费")]),a("v-uni-image",{staticClass:"title-img1",attrs:{src:"/static/img/5g_set_meal/you.png","lazy-load":!0}})],1),a("v-uni-view",{staticClass:"table-body"},[a("v-uni-view",{staticClass:"table"},[a("v-uni-view",{staticClass:"table-item"},[a("v-uni-view",{staticClass:"left"},[t._v("套餐费用")]),a("v-uni-view",{staticClass:"right"},[t._v(t._s(t.data.goods_spec[0].goods_price)+"元/月")])],1),t._l(t.data.goods_spec[0].guige,(function(e,i){return a("v-uni-view",{key:i,staticClass:"table-item"},[a("v-uni-view",{staticClass:"left",class:{border0:i==Object.keys(t.data.goods_spec[0].guige)[Object.keys(t.data.goods_spec[0].guige).length-1]}},[t._v(t._s(i))]),a("v-uni-view",{staticClass:"right",class:{border0:i==Object.keys(t.data.goods_spec[0].guige)[Object.keys(t.data.goods_spec[0].guige).length-1]}},[t._v(t._s(e.spec_value))])],1)}))],2)],1),a("v-uni-view",{staticClass:"p-24"},[a("v-uni-view",{staticClass:"bottom-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("/pages/shopping_details/index?data="+JSON.stringify(t.data)+" ")}}},[t._v("立即办理")])],1)]],2)],1)},o=[]},"5c2f":function(t,e,a){var i=a("a737");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("4d9c9528",i,!0,{sourceMap:!1,shadowMode:!1})},"8a1d":function(t,e,a){"use strict";a.r(e);var i=a("32d5"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},a737:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".p-24[data-v-2757bb82]{padding-left:3.2vw;padding-right:3.2vw}.flex-colum[data-v-2757bb82]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-wrap[data-v-2757bb82],\n.flex-center[data-v-2757bb82],\n.flex-space-around[data-v-2757bb82],\n.flex-space-between[data-v-2757bb82],\n.flex-space-right[data-v-2757bb82],\n.table-item[data-v-2757bb82]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.flex-center[data-v-2757bb82],\n.table-item[data-v-2757bb82]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-around[data-v-2757bb82]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-between[data-v-2757bb82]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-right[data-v-2757bb82]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-top[data-v-2757bb82]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.position-bottom[data-v-2757bb82]{position:fixed;bottom:0;left:0}.font-list[data-v-2757bb82],\nuni-view[data-v-2757bb82],\nuni-text[data-v-2757bb82]{font-family:Source Han Sans CN;font-weight:400}.font-style-bold[data-v-2757bb82]{font-family:SourceHanSansCN-Bold;font-weight:700}.font-style-Regular[data-v-2757bb82]{font-family:DIN-Regular;font-weight:Regular}.font-style-std[data-v-2757bb82]{font-family:Adobe Heiti Std;font-weight:400}.font-style-yahe[data-v-2757bb82],\n.bottom-btn[data-v-2757bb82],\n.left[data-v-2757bb82],\n.right[data-v-2757bb82],\n.title-text[data-v-2757bb82],\n.item3-item[data-v-2757bb82]{font-family:Microsoft YaHei;font-weight:400}.d-box[data-v-2757bb82]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.scroll[data-v-2757bb82]{overflow-x:hidden;overflow-y:scroll}.bg-issues[data-v-2757bb82],\n.banner-top[data-v-2757bb82]{background-size:100% 100%;background-repeat:no-repeat}[data-v-2757bb82] .u-loading-flower{position:absolute!important;top:6.666666666666667vw!important;left:0!important;right:0!important;margin:auto!important}[data-v-2757bb82] .uni-picker-container .uni-picker-content{height:400px!important}[data-v-2757bb82] .uni-scroll-view::-webkit-scrollbar{display:none}uni-view[data-v-2757bb82]::-webkit-scrollbar{display:none}.bottom-btn[data-v-2757bb82]{background:-webkit-linear-gradient(51deg,#4c5afe,#1b70ff);background:linear-gradient(39deg,#4c5afe,#1b70ff);-webkit-box-shadow:0 2px 8px 0 rgba(9,48,88,.2);box-shadow:0 2px 8px 0 rgba(9,48,88,.2);-webkit-border-radius:10px;border-radius:10px;color:#fff;font-size:4.266666666666667vw;text-align:center;padding:3.333333333333333vw 0;margin-bottom:4vw}.table[data-v-2757bb82]{width:100%;border-collapse:collapse;-webkit-border-radius:10px!important;border-radius:10px!important;border:1px solid #1b70ff;border-radius:10px}.right[data-v-2757bb82]{color:#333!important;border-left:1px solid #1b70ff;border-bottom:1px solid #1b70ff;width:60%}.left[data-v-2757bb82]{color:#1b70ff!important;border-bottom:1px solid #1b70ff;width:40%}.left[data-v-2757bb82],\n.right[data-v-2757bb82]{font-size:3.733333333333333vw!important;text-align:center;padding:4.666666666666667vw 0}.border0[data-v-2757bb82]{border-bottom:0}.u-th[data-v-2757bb82]{background:#fff}.table-body[data-v-2757bb82]{padding:4vw 3.2vw}.title-text[data-v-2757bb82]{color:#333;font-size:4.266666666666667vw}.title-img1[data-v-2757bb82]{width:7.866666666666666vw;height:1.866666666666667vw;vertical-align:middle;margin:0 3.866666666666667vw}.title[data-v-2757bb82]{text-align:center;margin-top:4vw}.top-item3[data-v-2757bb82]{margin-top:3.733333333333333vw}.banner-top[data-v-2757bb82]{background-image:url(/static/img/5g_set_meal/banner.png);height:69.46666666666667vw;width:100%;padding:11.333333333333334vw 0 0 3.733333333333333vw}.item3-item[data-v-2757bb82]{color:#fff;font-size:3.733333333333333vw;vertical-align:middle}.top-item1[data-v-2757bb82],\n.top-item2[data-v-2757bb82]{font-size:8vw;color:#fff;font-family:FZHanZhenGuangBiaoS-GB;font-weight:700;font-style:italic}.img[data-v-2757bb82]{width:4vw;height:4vw;vertical-align:middle;margin-right:1.466666666666667vw}",""]),t.exports=e},f0b5:function(t,e,a){"use strict";a.r(e);var i=a("5a0d"),n=a("8a1d");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("1b98");var b,s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"2757bb82",null,!1,i["a"],b);e["default"]=l.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set_meal-dai_ban_dian_list"],{"104b":function(t,a,e){"use strict";var i=e("afc7"),n=e.n(i);n.a},"1de5":function(t,a,e){"use strict";t.exports=function(t,a){return a||(a={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),a.hash&&(t+=a.hash),/["'() \t\n]/.test(t)||a.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"2f0d":function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var n=i(e("1da1")),o=i(e("ea00")),s=i(e("c554")),r=e("df8e"),d=i(e("81b1")),l={name:"search",components:{navTop:s.default,myNavgetter:o.default,myLayout:d.default},data:function(){return{data:[],xit_data:{}}},onLoad:function(){this.get_daili(),this.get_xit()},methods:{get_xit:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,r.xtcs)({});case 2:e=a.sent,t.then(e,(function(a){a&&(console.log(e),t.xit_data=e.data)}),!1);case 4:case"end":return a.stop()}}),a)})))()},get_daili:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,r.dengjijs)({});case 2:e=a.sent,t.then(e,(function(a){a&&(t.data=[],t.data.push(e.data[8]),t.data.push(e.data[9]),t.data.push(e.data[10]))}),!1);case 4:case"end":return a.stop()}}),a)})))()},push_daili:function(t){console.log(t);var a={8:0,9:1,10:2};this.gvx("user").user.daili<t.jibie?this.jump("/pages/my/item/get_daili?obj=".concat(JSON.stringify({name:t.jbname,index:a[t.jibie]}))):uni.showToast({title:"不能选同级别或低级别",icon:"none"})}}};a.default=l},"32f0":function(t,a,e){var i=e("24fb"),n=e("1de5"),o=e("c2e6"),s=e("a452");a=i(!1);var r=n(o),d=n(s);a.push([t.i,".p-24[data-v-5134a86b]{padding-left:3.2vw;padding-right:3.2vw}.flex-colum[data-v-5134a86b]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-wrap[data-v-5134a86b],\n.flex-center[data-v-5134a86b],\n.flex-space-around[data-v-5134a86b],\n.flex-space-between[data-v-5134a86b],\n.flex-space-right[data-v-5134a86b],\n.bth-kait[data-v-5134a86b],\n.item1-top2[data-v-5134a86b]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.flex-center[data-v-5134a86b],\n.bth-kait[data-v-5134a86b],\n.item1-top2[data-v-5134a86b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-around[data-v-5134a86b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-between[data-v-5134a86b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-right[data-v-5134a86b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-top[data-v-5134a86b]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.position-bottom[data-v-5134a86b]{position:fixed;bottom:0;left:0}.font-list[data-v-5134a86b],\nuni-view[data-v-5134a86b],\nuni-text[data-v-5134a86b],\n.bth-kait[data-v-5134a86b],\n.kaika[data-v-5134a86b],\n.wath-xw-item1[data-v-5134a86b],\n.dailijies1-item[data-v-5134a86b]{font-family:Source Han Sans CN;font-weight:400}.font-style-bold[data-v-5134a86b],\n.kaika-list[data-v-5134a86b],\n.item1-top[data-v-5134a86b]{font-family:SourceHanSansCN-Bold;font-weight:700}.font-style-Regular[data-v-5134a86b]{font-family:DIN-Regular;font-weight:Regular}.font-style-std[data-v-5134a86b]{font-family:Adobe Heiti Std;font-weight:400}.font-style-yahe[data-v-5134a86b]{font-family:Microsoft YaHei;font-weight:400}.d-box[data-v-5134a86b]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.scroll[data-v-5134a86b]{overflow-x:hidden;overflow-y:scroll}.bg-issues[data-v-5134a86b],\n.wath-xw[data-v-5134a86b],\n.daibandian[data-v-5134a86b]{background-size:100% 100%;background-repeat:no-repeat}[data-v-5134a86b] .u-loading-flower{position:absolute!important;top:6.666666666666667vw!important;left:0!important;right:0!important;margin:auto!important}[data-v-5134a86b] .uni-picker-container .uni-picker-content{height:400px!important}[data-v-5134a86b] .uni-scroll-view::-webkit-scrollbar{display:none}uni-view[data-v-5134a86b]::-webkit-scrollbar{display:none}.bth-kait[data-v-5134a86b]{background:-webkit-linear-gradient(4deg,#1b70ff,#4c72fe);background:linear-gradient(86deg,#1b70ff,#4c72fe);-webkit-box-shadow:0 10px 10px 0 rgba(27,112,255,.3);box-shadow:0 10px 10px 0 rgba(27,112,255,.3);-webkit-border-radius:6px;border-radius:6px;color:#fff;font-size:3.733333333333333vw;width:40vw;height:10.666666666666666vw;margin:4vw auto 0}.kaika-list[data-v-5134a86b]{color:#1b70ff;font-size:4.8vw}.kaika[data-v-5134a86b]{color:#1b70ff;font-size:3.733333333333333vw;margin-top:2vw}.item1-top2[data-v-5134a86b]{background:#1b70ff;-webkit-border-radius:10px;border-radius:10px;color:#fff;font-size:5.333333333333333vw;font-weight:700;height:14vw;margin:3.866666666666667vw auto 0}.item1-top[data-v-5134a86b]{color:#1b70ff;font-size:4.266666666666667vw}.swiper[data-v-5134a86b]{margin-top:8vw;height:106.66666666666667vw}.item1[data-v-5134a86b]{background:#fff;border:2px solid #25d6ff;-webkit-box-shadow:0 20px 60px 0 rgba(27,112,255,.3);box-shadow:0 20px 60px 0 rgba(27,112,255,.3);-webkit-border-radius:10px;border-radius:10px;width:61.333333333333336vw;margin:auto;padding:5.333333333333333vw 4vw}.swiper[data-v-5134a86b]{width:100%}.jies[data-v-5134a86b]{position:absolute;width:80vw;bottom:3.333333333333333vw;top:10.666666666666666vw;overflow:hidden;overflow-y:auto}.wath-xw-item1[data-v-5134a86b]{text-align:center;color:#fff;font-size:4.266666666666667vw}.wath-xw[data-v-5134a86b]{position:relative;background-image:url("+r+");width:86.53333333333333vw;margin:6.8vw auto 0;padding:1.2vw 3.333333333333333vw 3.333333333333333vw;height:55.86666666666667vw}.dailijies1-item[data-v-5134a86b]{background:#1b70ff;-webkit-border-radius:6px;border-radius:6px;padding:3.6vw;color:hsla(0,0%,100%,.9);letter-spacing:.266666666666667vw;font-size:3.733333333333333vw}.dailijies1[data-v-5134a86b]{width:90.93333333333334vw;border:4px solid #25d6ff;-webkit-border-radius:6px;border-radius:6px;margin:4.8vw auto 0;padding:2.666666666666667vw 2.133333333333333vw}.top-img1[data-v-5134a86b]{width:97.33333333333333vw;height:90.13333333333334vw;margin-left:1.333333333333333vw}.bg-img[data-v-5134a86b]{position:absolute;width:100%;height:100%}.daibandian[data-v-5134a86b]{position:relative;background-image:url("+d+");padding-top:9.333333333333334vw}",""]),t.exports=a},"4c66":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("my-navgetter"),e("nav-top",{attrs:{title:"代办点"}}),e("my-layout",[[e("v-uni-view",{staticClass:"daibandian"},[e("v-uni-image",{staticClass:"top-img1",attrs:{src:"/static/img/set_meal/daiband.png"}}),e("v-uni-view",{staticClass:"dailijies1"},[e("v-uni-view",{staticClass:"dailijies1-item"},[t._v("根据2020年10月22日，中国电信公布2020年三季度业绩，至此三大运营商前三季度财务报告全部出炉，2020年前三季度，三大运营商共计净利润1050.9亿元，平均日赚约3.84亿元。\n\t\t\t\t\t\t我们来了解一下三大运营商的用户数，截至9月底，中国移动用户总数9.46亿，中国联通达到3.09亿，中国电信达到3.49亿。")])],1),e("v-uni-view",{staticClass:"wath-xw"},[e("v-uni-view",{staticClass:"wath-xw-item1"},[t._v("象网是什么平台？")]),e("v-uni-view",{staticClass:"jies"},[e("v-uni-view",{staticClass:"jies-item"},[t._v("象网是以消费者红利分享以平台补贴为目的的综合性平台，平台作为中国联通全产品运营商，通过对消费者消费红利进行管理以降低消费者消费以及生活成本。实现平台、合作机构、消费者的多方获利。平台逐渐实现包括医美、通讯、教育培训、大健康行业、饮食餐饮、电影娱乐、游戏等多行业多平台合作，象网联合，联合生活")])],1)],1),e("v-uni-swiper",{staticClass:"swiper",attrs:{"previous-margin":"100rpx","next-margin":"100rpx"}},t._l(t.data,(function(a,i){return e("v-uni-swiper-item",{key:i,staticClass:"swiper-item"},[e("v-uni-view",{staticClass:"item1"},[e("v-uni-view",{staticClass:"item1-top"},[t._v(t._s(a.jbname))]),e("v-uni-view",{staticClass:"item1-top2"},[t._v(t._s(a.baodanjg)+"/终身")]),e("v-uni-view",{staticClass:"kaika"},[t._v("开卡补贴：")]),e("v-uni-view",{staticClass:"kaika-list"},[t._v(t._s(a.jifendikou)+"%")]),e("v-uni-view",{staticClass:"kaika"},[t._v("月补贴：")]),e("v-uni-view",{staticClass:"kaika-list"},[t._v(t._s(a.zhituijg)+"-"+t._s(a.xfjljf)+"%")]),e("v-uni-view",{staticClass:"kaika"},[t._v("开卡器：")]),e("v-uni-view",{staticClass:"kaika-list"},[t._v(t._s(a.xfjtjljf)+"台")]),e("v-uni-view",{staticClass:"bth-kait",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.push_daili(a)}}},[t._v("立即开通")])],1)],1)})),1)],1)]],2)],1)},o=[]},"928e":function(t,a,e){"use strict";e.r(a);var i=e("2f0d"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},a296:function(t,a,e){"use strict";e.r(a);var i=e("4c66"),n=e("928e");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("104b");var s,r=e("f0c5"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"5134a86b",null,!1,i["a"],s);a["default"]=d.exports},a452:function(t,a,e){t.exports=e.p+"static/img/dbd_bj.95e19a1c.png"},afc7:function(t,a,e){var i=e("32f0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("739bfd30",i,!0,{sourceMap:!1,shadowMode:!1})},c2e6:function(t,a,e){t.exports=e.p+"static/img/bg3.f6acfddc.png"}}]);
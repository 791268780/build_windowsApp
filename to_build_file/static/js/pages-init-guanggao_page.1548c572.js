(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-init-guanggao_page"],{"0cf9":function(t,e,i){t.exports=i.p+"static/img/qid1.0abbd347.png"},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},2089:function(t,e,i){"use strict";i.r(e);var a=i("5e3a"),n=i("f963c");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("e2de");var o,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"568de564",null,!1,a["a"],o);e["default"]=d.exports},"22ce":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-circle-progress",style:{width:t.widthPx+"px",height:t.widthPx+"px",backgroundColor:t.bgColor}},[i("v-uni-canvas",{staticClass:"u-canvas-bg",style:{width:t.widthPx+"px",height:t.widthPx+"px"},attrs:{"canvas-id":t.elBgId,id:t.elBgId}}),i("v-uni-canvas",{staticClass:"u-canvas",style:{width:t.widthPx+"px",height:t.widthPx+"px"},attrs:{"canvas-id":t.elId,id:t.elId}}),t._t("default")],2)},r=[]},"254f":function(t,e,i){"use strict";i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-circle-progress",props:{percent:{type:Number,default:0,validator:function(t){return t>=0&&t<=100}},inactiveColor:{type:String,default:"#ececec"},activeColor:{type:String,default:"#19be6b"},borderWidth:{type:[Number,String],default:14},width:{type:[Number,String],default:200},duration:{type:[Number,String],default:1500},type:{type:String,default:""},bgColor:{type:String,default:"#ffffff"}},data:function(){return{elBgId:this.$u.guid(),elId:this.$u.guid(),widthPx:uni.upx2px(this.width),borderWidthPx:uni.upx2px(this.borderWidth),startAngle:-Math.PI/2,progressContext:null,newPercent:0,oldPercent:0}},watch:{percent:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t>100&&(t=100),t<0&&(i=0),this.newPercent=t,this.oldPercent=i,setTimeout((function(){e.drawCircleByProgress(i)}),50)}},created:function(){this.newPercent=this.percent,this.oldPercent=0},computed:{circleColor:function(){return["success","error","info","primary","warning"].indexOf(this.type)>=0?this.$u.color[this.type]:this.activeColor}},mounted:function(){var t=this;setTimeout((function(){t.drawProgressBg(),t.drawCircleByProgress(t.oldPercent)}),50)},methods:{drawProgressBg:function(){var t=uni.createCanvasContext(this.elBgId,this);t.setLineWidth(this.borderWidthPx),t.setStrokeStyle(this.inactiveColor),t.beginPath();var e=this.widthPx/2;t.arc(e,e,e-this.borderWidthPx,0,2*Math.PI,!1),t.stroke(),t.draw()},drawCircleByProgress:function(t){var e=this,i=this.progressContext;i||(i=uni.createCanvasContext(this.elId,this),this.progressContext=i),i.setLineCap("round"),i.setLineWidth(this.borderWidthPx),i.setStrokeStyle(this.circleColor);var a=Math.floor(this.duration/100),n=2*Math.PI/100*t+this.startAngle;i.beginPath();var r=this.widthPx/2;if(i.arc(r,r,r-this.borderWidthPx,this.startAngle,n,!1),i.stroke(),i.draw(),this.newPercent>this.oldPercent){if(t++,t>this.newPercent)return}else if(t--,t<this.newPercent)return;setTimeout((function(){e.drawCircleByProgress(t)}),a)}}};e.default=a},3617:function(t,e,i){var a=i("b16f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("52f87e8e",a,!0,{sourceMap:!1,shadowMode:!1})},"5e3a":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uCircleProgress:i("a6ad").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"tiaoguo"},[i("u-circle-progress",{attrs:{"active-color":"#2979ff",percent:100,duration:1e4,"inactive-color":"#D8F0FF","active-color":"#3897FF",width:110,"border-width":5}},[i("v-uni-view",{staticClass:"tiaoguo-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tiaoguo.apply(void 0,arguments)}}},[t._v("跳过")])],1)],1),i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,"indicator-color":"#ffffff","indicator-active-color":"#ffffff"}},[i("v-uni-swiper-item",{staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"swiper-item1"},[i("v-uni-image",{staticClass:"swiper-item2",attrs:{src:"/static/img/index/qid2.png","lazy-load":!0}}),i("v-uni-view",[i("v-uni-view",{staticClass:"swiper-item3"},[t._v("5G时代")]),i("v-uni-view",{staticClass:"swiper-item4"},[t._v("方便快捷\t畅享未来\t体验5G")])],1)],1)],1),i("v-uni-swiper-item",{staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"swiper-item1"},[i("v-uni-image",{staticClass:"swiper-item2",attrs:{src:"/static/img/index/qid3.png","lazy-load":!0}}),i("v-uni-view",[i("v-uni-view",{staticClass:"swiper-item3"},[t._v("代理赚钱")]),i("v-uni-view",{staticClass:"swiper-item4"},[t._v("市区镇代理\t诚邀加盟\t 共赢未来")])],1)],1)],1),i("v-uni-swiper-item",{staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"swiper-item1"},[i("v-uni-image",{staticClass:"swiper-item2",attrs:{src:"/static/img/index/qid4.png","lazy-load":!0}}),i("v-uni-view",[i("v-uni-view",{staticClass:"swiper-item3"},[t._v("话费精灵")]),i("v-uni-view",{staticClass:"swiper-item4"},[t._v("全自动化运行\t收益享不停")])],1)],1)],1)],1)],1)},r=[]},6569:function(t,e,i){"use strict";i.r(e);var a=i("254f"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"7cee":function(t,e,i){var a=i("24fb"),n=i("1de5"),r=i("0cf9");e=a(!1);var o=n(r);e.push([t.i,".p-24[data-v-568de564]{padding-left:3.2vw;padding-right:3.2vw}.flex-colum[data-v-568de564],\n.swiper-item1[data-v-568de564]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-wrap[data-v-568de564],\n.flex-center[data-v-568de564],\n.flex-space-around[data-v-568de564],\n.flex-space-between[data-v-568de564],\n.flex-space-right[data-v-568de564],[data-v-568de564] .uni-swiper-dots,\n.swiper-item1[data-v-568de564]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.flex-center[data-v-568de564]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-around[data-v-568de564]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-between[data-v-568de564],[data-v-568de564] .uni-swiper-dots,\n.swiper-item1[data-v-568de564]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-right[data-v-568de564]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-top[data-v-568de564]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.position-bottom[data-v-568de564]{position:fixed;bottom:0;left:0}.font-list[data-v-568de564],\nuni-view[data-v-568de564],\nuni-text[data-v-568de564],\n.tiaoguo-item[data-v-568de564]{font-family:Source Han Sans CN;font-weight:400}.font-style-bold[data-v-568de564],\n.swiper-item3[data-v-568de564]{font-family:SourceHanSansCN-Bold;font-weight:700}.font-style-Regular[data-v-568de564]{font-family:DIN-Regular;font-weight:Regular}.font-style-std[data-v-568de564]{font-family:Adobe Heiti Std;font-weight:400}.font-style-yahe[data-v-568de564]{font-family:Microsoft YaHei;font-weight:400}.d-box[data-v-568de564]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.scroll[data-v-568de564]{overflow-x:hidden;overflow-y:scroll}.bg-issues[data-v-568de564],\n.swiper[data-v-568de564]{background-size:100% 100%;background-repeat:no-repeat}[data-v-568de564] .u-loading-flower{position:absolute!important;top:6.666666666666667vw!important;left:0!important;right:0!important;margin:auto!important}[data-v-568de564] .uni-picker-container .uni-picker-content{height:400px!important}[data-v-568de564] .uni-scroll-view::-webkit-scrollbar{display:none}uni-view[data-v-568de564]::-webkit-scrollbar{display:none}[data-v-568de564] .uni-swiper-dots{position:fixed!important;width:26.666666666666668vw}[data-v-568de564] .uni-swiper-dots-horizontal{bottom:6.666666666666667vw}[data-v-568de564] .uni-swiper-dot{-webkit-transition:all .5s;transition:all .5s;height:1.333333333333333vw;-webkit-border-radius:50%!important;border-radius:50%!important;width:1.333333333333333vw}[data-v-568de564] .uni-swiper-dot-active{-webkit-border-radius:15px!important;border-radius:15px!important;height:1.333333333333333vw;width:5.333333333333333vw}.swiper-item1[data-v-568de564]{width:100%;height:100%;padding:26.666666666666668vw 0 33.333333333333336vw}.swiper-item4[data-v-568de564]{text-align:center;font-size:5.466666666666667vw;font-family:Source Han Sans CN;font-weight:400;color:#fff;text-shadow:0 2px 3px rgba(129,205,255,.65);background:-webkit-gradient(linear,left bottom,left top,from(#c8e2ff),to(#fff));background:-webkit-linear-gradient(bottom,#c8e2ff,#fff);background:linear-gradient(0deg,#c8e2ff,#fff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-top:4vw}.swiper-item3[data-v-568de564]{text-align:center;color:#fff;font-size:15.066666666666666vw;text-shadow:0 2px 3px rgba(129,205,255,.65);background:-webkit-gradient(linear,left bottom,left top,from(#c8e2ff),to(#fff));background:-webkit-linear-gradient(bottom,#c8e2ff,#fff);background:linear-gradient(0deg,#c8e2ff,#fff);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.swiper-item2[data-v-568de564]{width:92.66666666666667vw;height:61.86666666666667vw}.tiaoguo[data-v-568de564]{width:%?110?%;height:%?110?%;-webkit-border-radius:50%;border-radius:50%;position:absolute;top:5.6vw;left:80vw;overflow:hidden}[data-v-568de564] .u-canvas{-webkit-border-radius:50%!important;border-radius:50%!important;background:#d8f0ff!important}.tiaoguo-item[data-v-568de564]{color:#3897ff;font-size:3.733333333333333vw;position:relative;z-index:3000}.swiper-item[data-v-568de564]{width:100vw;height:100vh;background:transparent}.swiper[data-v-568de564]{width:100vw;height:100vh;background-image:url("+o+")}",""]),t.exports=e},a6ad:function(t,e,i){"use strict";i.r(e);var a=i("22ce"),n=i("6569");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("d0d8");var o,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5e3ea806",null,!1,a["a"],o);e["default"]=d.exports},b16f:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-circle-progress[data-v-5e3ea806]{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-canvas-bg[data-v-5e3ea806]{position:absolute}.u-canvas[data-v-5e3ea806]{position:absolute}',""]),t.exports=e},cebe:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{time:null}},onInit:function(){},onLoad:function(){var t=this;this.gvx("log")?this.toggle_jump("/pages/index/index",!0):(this.time=setTimeout((function(){t.toggle_jump("/pages/index/index",!0)}),1e4),this.svx("log_action",!0))},methods:{tiaoguo:function(){clearTimeout(this.time),this.toggle_jump("/pages/index/index",!0)}}};e.default=a},d0d8:function(t,e,i){"use strict";var a=i("3617"),n=i.n(a);n.a},d154:function(t,e,i){var a=i("7cee");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2f09d3b7",a,!0,{sourceMap:!1,shadowMode:!1})},e2de:function(t,e,i){"use strict";var a=i("d154"),n=i.n(a);n.a},f963c:function(t,e,i){"use strict";i.r(e);var a=i("cebe"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a}}]);
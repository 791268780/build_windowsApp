(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-item-setting"],{"0a44":function(t,e,a){var i=a("9ef0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("9b01af68",i,!0,{sourceMap:!1,shadowMode:!1})},"164c":function(t,e,a){"use strict";a.r(e);var i=a("579e"),n=a("8193");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("b291");var r,s=a("f0c5"),f=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"72d1baf4",null,!1,i["a"],r);e["default"]=f.exports},"1fea":function(t,e,a){"use strict";var i=a("0a44"),n=a.n(i);n.a},"487c":function(t,e,a){var i=a("7ad8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1afc9ee0",i,!0,{sourceMap:!1,shadowMode:!1})},"579e":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uToast:a("9ead").default,uModal:a("c4c7").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("my-navgetter"),a("my-title",{attrs:{title:"常用设置"}}),a("my-layout",{attrs:{bg:"#F4F8FA"}},[[a("v-uni-view",{staticClass:"father"},[a("v-uni-view",{staticClass:"grzx-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.get_xit.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"item-item"},[a("v-uni-view",{staticClass:"img-father"},[a("v-uni-image",{staticClass:"grzx-img grzx-img0",attrs:{src:"/static/img/my/zxbb.png","lazy-load":!0}})],1),a("v-uni-view",{staticClass:"grzx-text"},[t._v("版本升级")])],1),a("v-uni-view",[t._t("default",[a("v-uni-image",{staticClass:"grzx-imgs",attrs:{src:"/static/img/my/xia.png","lazy-load":!0}})])],2)],1)],1)]],2),a("u-toast",{ref:"uToast"}),a("u-modal",{attrs:{content:t.content,"show-cancel-button":!0},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.banbben_genxin.apply(void 0,arguments)}},model:{value:t.banb_show,callback:function(e){t.banb_show=e},expression:"banb_show"}})],1)},o=[]},"67fd":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),o=i(a("c554")),r=i(a("ea00")),s=i(a("81b1")),f=a("2674"),d=a("df8e"),l={components:{myTitle:o.default,myNavgetter:r.default,myLayout:s.default},mixins:[f.banben],data:function(){return{daload_url:"",new_banb:null,banb_show:!1,content:"有新版本！是否立即更新"}},onLoad:function(t){"{}"!=JSON.stringify(t)&&(this.daload_url=t.daload,this.danload())},methods:{get_xit:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,d.xtcs)({});case 2:a=e.sent,t.then(a,(function(e){e&&(t.new_banb=a.data[41].value,t.daload_url=a.data[40].value,t.banbens(),console.log(t.new_banb))}),!1);case 4:case"end":return e.stop()}}),e)})))()},banbens:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get_banb();case 2:a=e.sent,console.log(a,t.new_banb),t.new_banb>a?t.banb_show=!0:uni.showToast({title:"已是最新版本",icon:"none"});case 5:case"end":return e.stop()}}),e)})))()},danload:function(){plus.runtime.openURL(this.daload_url,(function(){uni.showToast({title:"下载失败",icon:"none"})}))},banbben_genxin:function(){this.danload()}}};e.default=l},"6f64":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uIcon:a("d553").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[a("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?a("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),a("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},o=[]},"7ad8":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".p-24[data-v-72d1baf4]{padding-left:3.2vw;padding-right:3.2vw}.flex-colum[data-v-72d1baf4]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-wrap[data-v-72d1baf4],\n.flex-center[data-v-72d1baf4],\n.flex-space-around[data-v-72d1baf4],\n.flex-space-between[data-v-72d1baf4],\n.flex-space-right[data-v-72d1baf4],\n.img-father[data-v-72d1baf4],\n.grzx-text[data-v-72d1baf4],\n.grzx-item[data-v-72d1baf4]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.flex-center[data-v-72d1baf4],\n.img-father[data-v-72d1baf4],\n.grzx-text[data-v-72d1baf4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-around[data-v-72d1baf4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-between[data-v-72d1baf4],\n.grzx-item[data-v-72d1baf4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-right[data-v-72d1baf4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-top[data-v-72d1baf4]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.position-bottom[data-v-72d1baf4]{position:fixed;bottom:0;left:0}.font-list[data-v-72d1baf4],\nuni-view[data-v-72d1baf4],\nuni-text[data-v-72d1baf4]{font-family:Source Han Sans CN;font-weight:400}.font-style-bold[data-v-72d1baf4]{font-family:SourceHanSansCN-Bold;font-weight:700}.font-style-Regular[data-v-72d1baf4]{font-family:DIN-Regular;font-weight:Regular}.font-style-std[data-v-72d1baf4]{font-family:Adobe Heiti Std;font-weight:400}.font-style-yahe[data-v-72d1baf4],\n.grzx-text[data-v-72d1baf4]{font-family:Microsoft YaHei;font-weight:400}.d-box[data-v-72d1baf4]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.scroll[data-v-72d1baf4]{overflow-x:hidden;overflow-y:scroll}.bg-issues[data-v-72d1baf4]{background-size:100% 100%;background-repeat:no-repeat}[data-v-72d1baf4] .u-loading-flower{position:absolute!important;top:6.666666666666667vw!important;left:0!important;right:0!important;margin:auto!important}[data-v-72d1baf4] .uni-picker-container .uni-picker-content{height:400px!important}[data-v-72d1baf4] .uni-scroll-view::-webkit-scrollbar{display:none}uni-view[data-v-72d1baf4]::-webkit-scrollbar{display:none}.xiazaititle[data-v-72d1baf4]{font-size:4.266666666666667vw;color:#fff;margin-bottom:2.666666666666667vw}.xiazaijindu[data-v-72d1baf4]{position:fixed;padding:2.666666666666667vw;background:rgba(3,3,3,.4);top:0;width:80%;height:20vw;bottom:0;left:0;right:0;margin:auto;-webkit-border-radius:6px;border-radius:6px}.img-father[data-v-72d1baf4]{width:6.666666666666667vw;margin-right:2vw}.grzx-img[data-v-72d1baf4]{vertical-align:middle}.item-item[data-v-72d1baf4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.grzx-text[data-v-72d1baf4]{color:#333;font-size:3.733333333333333vw;vertical-align:middle}.grzx-imgs[data-v-72d1baf4]{width:1.333333333333333vw;height:2.666666666666667vw}.grzx-item[data-v-72d1baf4]{padding:3.333333333333333vw 0}.father[data-v-72d1baf4]{padding:0 3.2vw;background:#fff;margin-top:2.666666666666667vw}.grzx-img0[data-v-72d1baf4]{width:4.533333333333333vw;height:4vw}.flex-view-item[data-v-72d1baf4]{min-height:100vh}",""]),t.exports=e},8193:function(t,e,a){"use strict";a.r(e);var i=a("67fd"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"98de":function(t,e,a){"use strict";a("c975"),a("a9e3"),a("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=i},"9ead":function(t,e,a){"use strict";a.r(e);var i=a("6f64"),n=a("f434");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("1fea");var r,s=a("f0c5"),f=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"070c62ba",null,!1,i["a"],r);e["default"]=f.exports},"9ef0":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-toast[data-v-070c62ba]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;-webkit-border-radius:%?8?%;border-radius:%?8?%;background:#585858;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-070c62ba]{opacity:1}.u-icon[data-v-070c62ba]{margin-right:%?10?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-070c62ba]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-070c62ba]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-070c62ba]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-070c62ba]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-070c62ba]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-070c62ba]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-070c62ba]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-070c62ba]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-070c62ba]{color:#fff;background-color:#585858}',""]),t.exports=e},b291:function(t,e,a){"use strict";var i=a("487c"),n=a.n(i);n.a},f434:function(t,e,a){"use strict";a.r(e);var i=a("98de"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shopping_details-order_ok-index"],{"031c":function(e,t,i){"use strict";var n=i("4ea4");i("d81d"),i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("72a0")),o={name:"u-checkbox-group",mixins:[a.default],props:{max:{type:[Number,String],default:999},disabled:{type:Boolean,default:!1},name:{type:[Boolean,String],default:""},labelDisabled:{type:Boolean,default:!1},shape:{type:String,default:"square"},activeColor:{type:String,default:"#2979ff"},size:{type:[String,Number],default:34},width:{type:String,default:"auto"},wrap:{type:Boolean,default:!1},iconSize:{type:[String,Number],default:20}},data:function(){return{}},created:function(){this.children=[]},methods:{emitEvent:function(){var e=this,t=[];this.children.map((function(e){e.value&&t.push(e.name)})),this.$emit("change",t),setTimeout((function(){e.dispatch("u-form-item","on-form-change",t)}),60)}}};t.default=o},"0456":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAGSBAMAAAALBh5YAAAAHlBMVEX7dnj///93pPv///92o/vb6P6cvP3+29v9nJ6Hr/wGVKxgAAAAA3RSTlP+7u7CY4sZAAAEIElEQVR42u3YsUrDQADH4Ru7Ft+g+AISSvdSCh1FkiewAUfpkI7d2lmk4Nu6ueS2yxmu93271n/8kdMLS6hGeGqgEi/BM6Ae3u7U9HaXO3IHuYPcQe4gd5A7yB3kDnIHuYPckTvIHeQOcge5g9xB7iB3kDvIHeSO3EHuIHeQO8gd5A5yB7mD3EHuIHfkDnIHuYPcQe4gd5A7yB3kDnIHuSN3kDvIHeQOcge5g9xB7iB3kDvIHeSO3EHuIHeQO8gd5A5yB7mD3EHuIHfkDnIHuYPcQe4gd5A7yB3kDnIHuSN3kDvIHeQOcge5g9xB7iB3kDvIHbmD3EHuIHeQO8gd5A5yB7mD3EHuyN1DQO4gd5A7yB3kDnIHuYPcQe4gd5A7cge5g9xB7iB3kDvIHeQOcge5g9yRO8gd5A5yB7mD3EHuIHeQO8gd5I7cQe4gd5A7yB3kDnIHuYPcQe4gd+QOcge5g9xB7iB3kDvIHeQOcge5I3e5I3eQO8gd5A5yB7mD3EHuIHeQO8gduYPcQe4gd5A7yB3kDnIHuYPcQe7IHeQOcge5g9xB7iB3kDvIHeQOckfuIHeQO8gd5A5yB7mD3EHuIHeQO3IHuYPcQe4gd5A7yB3kDnIHuYPcQe7IHeQOcge5g9xB7iB3kDvIHeQOckfuIHeQO8gd5A5yB7mD3EHuIHeQO3IHuYPcQe4gd5A7yB3kDnIHuYPckTvIHeQOcge5g9xB7iB3kDvIHeSO3OWO3EHuIHeQO8gd5A5yB7mD3EHuIHfkDnIHuYPcQe4gd5A7yB3kDnIHuSN3kDvIHeQOcge5g9xB7iB3kDvIHbmD3EHuIHeQO8gd5A5yB7mD3EHuyB3kDnIHuYPcQe4gd5A7yB3kDnIHuSN3kDvIHeQOcge5g9xB7iB3kDvIHbmD3EHuIHeQO8gd5A5yB7mD3EHuyB3kDnIHuYPcQe4gd5A7yB3kDnJH7iB3kDvIHeQOcge5g9xB7iB3kDty9xCQO8gd5A5yB7mD3EHuIHeQO8gd5I7cQe4gd5A7yB3kDnIHuYPcQe7wl3s7hbfIt94M+Z0in7tu87O30L2hn8C9jfxY51t+Q+Rzuz47e0vdG5536WKPY7iF7BaRx9F+7LKzt9C920lyP44Pu805/9MI1/Fht+6+8//67S107yS595E/7YZL/qdxO83zsrO31L1T5L6PHHWbmY66dZ//t29vsXsnyP0QPeouD3u021vu3glyv1d2tNtb7t703PfHZpb/YxbXZpaXnb0F703PPXLUNTMddU33Pssthb2l7E3O3RW0veXsTc39UNnRbm/Re1NzdwVtb0F7E3O/V3YFbW/Ze7ch5at/ZrqSXcx0BW1v6XvDAx5135Ud7ZXtPaTkvkrQvy5H/uWS6nP8ud3XKjt7S9/7C9iAHZ13GCWCAAAAAElFTkSuQmCC"},"0765":function(e,t,i){"use strict";i("a15b"),i("d81d"),i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var e={};return this.elActiveColor&&this.value&&!this.isDisabled&&(e.borderColor=this.elActiveColor,e.backgroundColor=this.elActiveColor),e.width=this.$u.addUnit(this.checkboxSize),e.height=this.$u.addUnit(this.checkboxSize),e},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&e.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e.join(" ")},checkboxStyle:function(){var e={};return this.parent&&this.parent.width&&(e.width=this.parent.width,e.flex="0 0 ".concat(this.parent.width)),this.parent&&this.parent.wrap&&(e.width="100%",e.flex="0 0 100%"),e}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var e=this;this.$emit("change",{value:!this.value,name:this.name}),setTimeout((function(){e.parent&&e.parent.emitEvent&&e.parent.emitEvent()}),80)},setValue:function(){var e=0;if(this.parent&&this.parent.children&&this.parent.children.map((function(t){t.value&&e++})),1==this.value)this.emitEvent(),this.$emit("input",!this.value);else{if(this.parent&&e>=this.parent.max)return this.$u.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent(),this.$emit("input",!this.value)}}}};t.default=n},"19fc":function(e,t,i){"use strict";i.r(t);var n=i("33ee"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"1de5":function(e,t,i){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"33ee":function(e,t,i){"use strict";var n=i("4ea4");i("4160"),i("c975"),i("fb6a"),i("a434"),i("a9e3"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var a=n(i("1da1")),o=n(i("ea00")),s=n(i("c554")),r=i("df8e"),c=n(i("81b1")),d=i("2674"),u={name:"search",components:{navTop:s.default,myNavgetter:o.default,myLayout:c.default},mixins:[d.zhifu],data:function(){return{zi_order_type:[],order_id:null,yunfei:0,shouhuo_diz:{},select:!0,orders:[],shopping_zj:0}},onLoad:function(e){if(this.get_diz(),"{}"!=JSON.stringify(e)){var t=JSON.parse(e.order);this.orders.splice(0),this.orders=t}},watch:{select:function(){this.get_yunf()}},onShow:function(){var e=this;this.zi_order_type.splice(0),this.order_id=null,this.yunfei=0,this.select=!0,this.shopping_zj=0,this.get_yunf(),this.get_zonjia(),uni.$on("push_order_item",(function(t){e.shouhuo_diz=t}))},onHide:function(){uni.$off("push_order_item",(function(){}))},methods:{get_zonjia:function(){var e=0;this.orders.forEach((function(t,i){e+=Number(t.spzj)})),this.shopping_zj=e},get_diz:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.cxaddress)({});case 2:if(i=t.sent,!(i.data.length<1)){t.next=5;break}return t.abrupt("return");case 5:e.shouhuo_diz=i.data[0],i.data.forEach((function(t,i){1==t.sfmr&&(e.shouhuo_diz=t)}));case 7:case"end":return t.stop()}}),t)})))()},get_yunf:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var i,n,a,o,s,c,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i="",n="",a="",o="",s=e.select?1:2,e.orders.forEach((function(e,t){n+=e.goods_spec.goods_spec_id+",",i+=e.goods_spec.goods_spec_id+","+e.gwc.total_num+":"+s+".",a+=e.delivery_id+",",o+=e.gwc.total_num+","})),n=n.slice(0,n.length-1),a=a.slice(0,a.length-1),i=i.slice(0,i.length-1),o=o.slice(0,o.length-1),c={goods_spec_id:n,delivery_id:a,num:o,goods_id:i},console.log(c),t.next=14,(0,r.jsyf1)(c);case 14:d=t.sent,console.log(d),e.yunfei=d;case 17:case"end":return t.stop()}}),t)})))()},shengc_dingdang:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var i,n,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={dianpuid:e.orders[0].dianpuid,total_price:e.shopping_zj,moneyxz:e.select?e.yunfei.dikou:0,yuer:0,express_price:e.yunfei.data},console.log(i),t.next=4,(0,r.scwddd)(i);case 4:if(n=t.sent,console.log(n),200!=n.stare){t.next=15;break}if(o=n.order1_id,s=n.order_no,e.order_id=o,"{}"!=JSON.stringify(e.shouhuo_diz)){t.next=13;break}return uni.showToast({title:"请添加收货地址！",icon:"none"}),t.abrupt("return");case 13:e.bangding_diz(),e.orders.forEach(function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(i,n){var a,c,d,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(c in a="",i.guige)a+=i.guige[c].value+",";return a=a.slice(0,a.length-1),d={goods_id:i.goods_spec.goods_id,goods_name:i.goods_name,goods_spec_id:i.goods_spec.goods_spec_id,goods_attr:a,total_num:i.gwc.total_num,goods_price:i.goods_spec.goods_price,order1_id:o,imaget:i.gwc.tupian},console.log(d),t.next=7,(0,r.ddshopxx)(d);case 7:u=t.sent,console.log(u),200==u.stare?e.zi_order_type.push("true"):(e.zi_order_type.push("false"),e.then(u,(function(e){}))),e.zi_order_type.length==e.orders.length&&-1==e.zi_order_type.indexOf("false")&&(uni.showToast({title:"生成订单成功"}),e.zhifu({order_id:s,leixing:5,mima_zf:"",type:2,callback1:function(){setTimeout((function(){e.jump("/pages/shopping_details/success_order/index?order1_id=".concat(o))}),1e3)},callback2:function(){setTimeout((function(){e.jump("/pages/shopping_details/err_order/index")}),1e3)}}));case 11:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}());case 15:case"end":return t.stop()}}),t)})))()},bangding_diz:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={name:e.shouhuo_diz.name,phone:e.shouhuo_diz.mobile,province_id:e.shouhuo_diz.province,city_id:e.shouhuo_diz.city,region_id:e.shouhuo_diz.district,detail:e.shouhuo_diz.xxdz,order1_id:e.order_id},t.next=3,(0,r.ddaddr)(i);case 3:if(n=t.sent,console.log(i),200!=n.stare){t.next=7;break}return t.abrupt("return");case 7:n&&n.stare&&200!=n.stare?uni.showToast({title:n.msg}):uni.showToast({title:"地址绑定出错!"});case 8:case"end":return t.stop()}}),t)})))()},checkboxChange:function(e){this.select=!this.select,this.get_yunf()},checkboxGroupChange:function(e){}}};t.default=u},"4cc0":function(e,t,i){var n=i("24fb"),a=i("1de5"),o=i("0456");t=n(!1);var s=a(o);t.push([e.i,".p-24[data-v-1b48de79]{padding-left:3.2vw;padding-right:3.2vw}.flex-colum[data-v-1b48de79]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-wrap[data-v-1b48de79],\n.flex-center[data-v-1b48de79],\n.flex-space-around[data-v-1b48de79],\n.flex-space-between[data-v-1b48de79],\n.flex-space-right[data-v-1b48de79],\n.btn-right[data-v-1b48de79],\n.sp-items[data-v-1b48de79],\n.lianxidiz-left-father[data-v-1b48de79],\n.lianxidiz[data-v-1b48de79]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.flex-center[data-v-1b48de79],\n.btn-right[data-v-1b48de79]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-around[data-v-1b48de79]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-between[data-v-1b48de79],\n.sp-items[data-v-1b48de79],\n.lianxidiz-left-father[data-v-1b48de79],\n.lianxidiz[data-v-1b48de79]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-right[data-v-1b48de79]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-top[data-v-1b48de79]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.position-bottom[data-v-1b48de79]{position:fixed;bottom:0;left:0}.font-list[data-v-1b48de79],\nuni-view[data-v-1b48de79],\nuni-text[data-v-1b48de79]{font-family:Source Han Sans CN;font-weight:400}.font-style-bold[data-v-1b48de79]{font-family:SourceHanSansCN-Bold;font-weight:700}.font-style-Regular[data-v-1b48de79]{font-family:DIN-Regular;font-weight:Regular}.font-style-std[data-v-1b48de79]{font-family:Adobe Heiti Std;font-weight:400}.font-style-yahe[data-v-1b48de79],\n.btn-right[data-v-1b48de79],\n.left-item2[data-v-1b48de79],\n.left-item1[data-v-1b48de79]{font-family:Microsoft YaHei;font-weight:400}.d-box[data-v-1b48de79],\n.sp-item2-view1[data-v-1b48de79],\n.center-center[data-v-1b48de79]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.scroll[data-v-1b48de79]{overflow-x:hidden;overflow-y:scroll}.bg-issues[data-v-1b48de79],\n.lianxidiz[data-v-1b48de79]{background-size:100% 100%;background-repeat:no-repeat}[data-v-1b48de79] .u-loading-flower{position:absolute!important;top:6.666666666666667vw!important;left:0!important;right:0!important;margin:auto!important}[data-v-1b48de79] .uni-picker-container .uni-picker-content{height:400px!important}[data-v-1b48de79] .uni-scroll-view::-webkit-scrollbar{display:none}uni-view[data-v-1b48de79]::-webkit-scrollbar{display:none}.btn-right[data-v-1b48de79]{width:32vw;height:10.666666666666666vw;color:#fff;font-size:4.266666666666667vw;background:-webkit-linear-gradient(51deg,#4c5afe,#1b70ff);background:linear-gradient(39deg,#4c5afe,#1b70ff);-webkit-box-shadow:0 2px 8px 0 rgba(9,48,88,.2);box-shadow:0 2px 8px 0 rgba(9,48,88,.2);-webkit-border-radius:10px;border-radius:10px}.left-item2[data-v-1b48de79]{color:#ff6d3a;font-size:4.266666666666667vw}.left-item1[data-v-1b48de79]{color:#999;font-size:3.2vw}.bottom-btn[data-v-1b48de79]{position:fixed;bottom:0;left:0;width:100%;padding:1.333333333333333vw 3.2vw;background:#fff;height:16vw}.order[data-v-1b48de79]{padding-bottom:16vw}.fukuang-center2[data-v-1b48de79]{padding:5.333333333333333vw 0}.center1-item1[data-v-1b48de79]{margin-bottom:1.333333333333333vw}.fukuang-center1[data-v-1b48de79]{padding:2.666666666666667vw 0;border-bottom:1px solid #e5e5e5;margin-bottom:6.666666666666667vw}.fukuang-item2[data-v-1b48de79]{color:#333;font-size:3.733333333333333vw}.fukuang-item1[data-v-1b48de79]{color:#666;font-size:3.733333333333333vw}.fukuang-top[data-v-1b48de79]{padding:4vw 0;border-bottom:1px solid #e5e5e5}.fukuang-item3[data-v-1b48de79]{color:#ff6d3a;font-size:4.266666666666667vw}.fukuang-item4[data-v-1b48de79]{color:#333;font-size:4.266666666666667vw}.fukuang-item2-img[data-v-1b48de79]{width:1.733333333333333vw;height:3.333333333333333vw;margin-left:2vw}.fukuang[data-v-1b48de79]{padding:0 3.2vw 8vw;background:#fff;margin-top:2.666666666666667vw}.sp-item3[data-v-1b48de79]{color:#333;font-size:4.266666666666667vw}.sp-item2-view3[data-v-1b48de79]{color:#ff6d3a;font-size:3.733333333333333vw}.sp-item2-view2[data-v-1b48de79]{color:#999;font-size:3.2vw;margin-bottom:4.666666666666667vw}.sp-item2-view1[data-v-1b48de79]{width:54.666666666666664vw;color:#333;font-size:3.733333333333333vw;margin-bottom:2vw;-webkit-line-clamp:2}.sp-item1[data-v-1b48de79]{width:26.666666666666668vw;height:26.666666666666668vw;border-left:2px solid #f0f0f0}.sp-item1 .sp-item1-img[data-v-1b48de79]{width:100%;height:100%}.sp-items[data-v-1b48de79]{-webkit-box-align:start!important;-webkit-align-items:flex-start!important;align-items:flex-start!important;padding:2vw 0}.sp-items ~ .sp-items[data-v-1b48de79]{border-top:1px solid #e5e5e5}.sp-body[data-v-1b48de79]{padding:3.2vw}.shangp[data-v-1b48de79]{background:#fff;margin-top:2.666666666666667vw}.sp-title[data-v-1b48de79]{color:#333;font-size:4.266666666666667vw;padding:4vw 3.2vw;border-bottom:1px solid #e5e5e5}.center-top[data-v-1b48de79]{display:-webkit-box;display:-webkit-flex;display:flex}.center-center[data-v-1b48de79]{color:#333;font-size:3.733333333333333vw;width:66.66666666666667vw;margin-top:2.666666666666667vw;-webkit-line-clamp:2}.top-item1[data-v-1b48de79]{color:#333;font-size:4.266666666666667vw;margin-right:6.666666666666667vw}.right-img[data-v-1b48de79]{width:2.133333333333333vw;height:4vw}.lianxidiz-left[data-v-1b48de79]{margin-right:2.666666666666667vw}.left-img[data-v-1b48de79],\n.lianxidiz-left[data-v-1b48de79]{width:4.266666666666667vw;height:4.933333333333334vw}.lianxidiz[data-v-1b48de79]{margin-top:2.666666666666667vw;padding:5.333333333333333vw 3.2vw;background-image:url("+s+")}[data-v-1b48de79] .flex-view-item{min-height:100vh}",""]),e.exports=t},5687:function(e,t,i){var n=i("4cc0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("946c51c4",n,!0,{sourceMap:!1,shadowMode:!1})},"72a0":function(e,t,i){"use strict";function n(e,t,i){this.$children.map((function(a){e===a.$options.name?a.$emit.apply(a,[t].concat(i)):n.apply(a,[e,t].concat(i))}))}i("99af"),i("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={methods:{dispatch:function(e,t,i){var n=this.$parent||this.$root,a=n.$options.name;while(n&&(!a||a!==e))n=n.$parent,n&&(a=n.$options.name);n&&n.$emit.apply(n,[t].concat(i))},broadcast:function(e,t,i){n.call(this,e,t,i)}}};t.default=a},"737c":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-checkbox-group u-clearfix"},[e._t("default")],2)},o=[]},"76c1":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-checkbox[data-v-e356a272]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-checkbox__icon-wrap[data-v-e356a272]{color:#606266;-webkit-box-flex:0;-webkit-flex:none;flex:none;display:-webkit-flex;\r\ndisplay:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s}.u-checkbox__icon-wrap--circle[data-v-e356a272]{-webkit-border-radius:100%;border-radius:100%}.u-checkbox__icon-wrap--square[data-v-e356a272]{-webkit-border-radius:%?6?%;border-radius:%?6?%}.u-checkbox__icon-wrap--checked[data-v-e356a272]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-e356a272]{background-color:#ebedf0;border-color:#c8c9cc}.u-checkbox__icon-wrap--disabled--checked[data-v-e356a272]{color:#c8c9cc!important}.u-checkbox__label[data-v-e356a272]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-checkbox__label--disabled[data-v-e356a272]{color:#c8c9cc}',""]),e.exports=t},8037:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uCheckboxGroup:i("b056").default,uCheckbox:i("aa09").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("my-navgetter"),n("nav-top",{attrs:{title:"确认订单"}}),n("my-layout",{attrs:{bg:"#f4f8fa"}},[[n("v-uni-view",{staticClass:"order"},[n("v-uni-view",{staticClass:"lianxidiz",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.jump("/pages/shopping_details/new_shouhuo_address/index?order_ok=ok&url=/pages/shopping_details/order_ok/index")}}},[n("v-uni-view",{staticClass:"lianxidiz-left-father"},[n("v-uni-view",{staticClass:"lianxidiz-left"},[n("v-uni-image",{staticClass:"left-img",attrs:{src:"/static/img/shopping_mall/dw.png","lazy-load":!0}})],1),n("v-uni-view",{staticClass:"lianxidiz-center"},[n("v-uni-view",{staticClass:"center-top"},[n("v-uni-view",{staticClass:"top-item1"},[e._v(e._s("{}"!=JSON.stringify(e.shouhuo_diz)?e.shouhuo_diz.name:"请添加收货地址"))]),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"{}"!=JSON.stringify(e.shouhuo_diz),expression:" JSON.stringify(shouhuo_diz) != '{}' "}],staticClass:"top-item1"},[e._v(e._s(e.shouhuo_diz.mobile))])],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"{}"!=JSON.stringify(e.shouhuo_diz),expression:" JSON.stringify(shouhuo_diz) != '{}' "}],staticClass:"center-center"},[e._v(e._s(e.shouhuo_diz.province+e.shouhuo_diz.city+e.shouhuo_diz.district+e.shouhuo_diz.xxdz))])],1)],1),n("v-uni-view",{staticClass:"lianxidiz-right"},[n("v-uni-image",{staticClass:"right-img",attrs:{src:i("e6a9"),"lazy-load":!0}})],1)],1),n("v-uni-view",{staticClass:"shangp"},[n("v-uni-view",{staticClass:"sp-title"},[e._v("全部商品")]),n("v-uni-view",{staticClass:"sp-body"},e._l(e.orders,(function(t,i){return n("v-uni-view",{key:i,staticClass:"sp-items"},[n("v-uni-view",{staticClass:"sp-item1"},[n("v-uni-image",{staticClass:"sp-item1-img",attrs:{src:t.gwc.tupian,"lazy-load":!0}})],1),n("v-uni-view",{staticClass:"sp-item2"},[n("v-uni-view",{staticClass:"sp-item2-view1"},[e._v(e._s(t.goods_name))]),n("v-uni-view",{staticClass:"sp-item2-view2"},[e._v("规格："+e._s(t.gwc.goods_attr))]),n("v-uni-view",{staticClass:"sp-item2-view3"},[e._v("￥"+e._s(t.goods_spec.goods_price*t.gwc.total_num))])],1),n("v-uni-view",{staticClass:"sp-item3"},[e._v("×"+e._s(t.gwc.total_num))])],1)})),1)],1),n("v-uni-view",{staticClass:"fukuang"},[n("v-uni-view",{staticClass:"flex-space-between fukuang-top"},[n("v-uni-view",{staticClass:"fukuang-item4"},[e._v("应付金额")]),n("v-uni-view",{staticClass:"fukuang-item3"},[e._v("￥"+e._s(Number(e.yunfei.money)+Number(e.yunfei.data)))])],1),n("v-uni-view",{staticClass:"fukuang-center1"},[n("v-uni-view",{staticClass:"flex-space-between center1-item1"},[n("v-uni-view",{staticClass:"fukuang-item1"},[e._v("商品总额")]),n("v-uni-view",{staticClass:"fukuang-item2"},[e._v("￥"+e._s(e.shopping_zj))])],1),n("v-uni-view",{staticClass:"flex-space-between"},[n("v-uni-view",{staticClass:"fukuang-item1"},[e._v("运费")]),n("v-uni-view",{staticClass:"fukuang-item2"},[e._v("+￥"+e._s(e.yunfei.data))])],1)],1),n("v-uni-view",{staticClass:"flex-space-between"},[n("v-uni-view",{staticClass:"flex-space-between"},[n("u-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxGroupChange.apply(void 0,arguments)}}},[n("u-checkbox",{attrs:{shape:"circle",value:e.select,name:"ok"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"fukuang-item1"},[e._v("积分抵扣（"+e._s(e.gvx("user").user.wsc)+"）")])],1),n("v-uni-view",{staticClass:"fukuang-item2"},[e._v("-￥"+e._s(e.yunfei.dikou))])],1)],1)],1)]],2),n("v-uni-view",{staticClass:"bottom-btn flex-space-between"},[n("v-uni-view",{staticClass:"btn-left flex-center"},[n("v-uni-view",{staticClass:"left-item1"},[e._v("合计：")]),n("v-uni-view",{staticClass:"left-item2"},[e._v("￥"+e._s(Number(e.yunfei.data)+Number(e.yunfei.money)))])],1),n("v-uni-view",{staticClass:"btn-right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shengc_dingdang.apply(void 0,arguments)}}},[e._v("立即购买")])],1)],1)},o=[]},"8ff2":function(e,t,i){"use strict";var n=i("c557"),a=i.n(n);a.a},9293:function(e,t,i){"use strict";i.r(t);var n=i("031c"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},9763:function(e,t,i){"use strict";var n=i("c1f3"),a=i.n(n);a.a},"9eef":function(e,t,i){"use strict";var n=i("5687"),a=i.n(n);a.a},aa09:function(e,t,i){"use strict";i.r(t);var n=i("e407"),a=i("c168");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("9763");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"e356a272",null,!1,n["a"],s);t["default"]=c.exports},b056:function(e,t,i){"use strict";i.r(t);var n=i("737c"),a=i("9293");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("8ff2");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"57136b01",null,!1,n["a"],s);t["default"]=c.exports},beff:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-checkbox-group[data-v-57136b01]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}',""]),e.exports=t},c168:function(e,t,i){"use strict";i.r(t);var n=i("0765"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},c1f3:function(e,t,i){var n=i("76c1");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("e49cc640",n,!0,{sourceMap:!1,shadowMode:!1})},c557:function(e,t,i){var n=i("beff");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("19668ff8",n,!0,{sourceMap:!1,shadowMode:!1})},e407:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uIcon:i("d553").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-checkbox",style:[e.checkboxStyle]},[i("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:[e.iconClass],style:[e.iconStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggle.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:e.checkboxIconSize,color:e.iconColor}})],1),i("v-uni-view",{staticClass:"u-checkbox__label",style:{fontSize:e.$u.addUnit(e.labelSize)},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickLabel.apply(void 0,arguments)}}},[e._t("default")],2)],1)},o=[]},e6a9:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoBAMAAAAI6hfVAAAAGFBMVEVHcEy/v7++vr6/v7+/v7/AwMDAwMC/v7+rSYVQAAAAB3RSTlMAUjdHa+BtKB+NfgAAAEpJREFUGNNjUA1mgIPwcgEkdiGcbV6OkGAuH7oSquXlcDYrgs1UXl4CY6uXlztgF05ACJcRVu2AXXUCNa0ExhFcNQOSMINoCJwJAFsXMltWm32bAAAAAElFTkSuQmCC"},f30d:function(e,t,i){"use strict";i.r(t);var n=i("8037"),a=i("19fc");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("9eef");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"1b48de79",null,!1,n["a"],s);t["default"]=c.exports}}]);
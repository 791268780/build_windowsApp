(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-item-zhanghao_guangli_item-add_money_password"],{4577:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".p-24[data-v-235bdd46]{padding-left:3.2vw;padding-right:3.2vw}.flex-colum[data-v-235bdd46]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-wrap[data-v-235bdd46],\n.flex-center[data-v-235bdd46],\n.flex-space-around[data-v-235bdd46],\n.flex-space-between[data-v-235bdd46],\n.flex-space-right[data-v-235bdd46],\n.zjgl-item[data-v-235bdd46]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.flex-center[data-v-235bdd46]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-around[data-v-235bdd46]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-between[data-v-235bdd46],\n.zjgl-item[data-v-235bdd46]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-right[data-v-235bdd46]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-top[data-v-235bdd46]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.position-bottom[data-v-235bdd46]{position:fixed;bottom:0;left:0}.font-list[data-v-235bdd46],\nuni-view[data-v-235bdd46],\nuni-text[data-v-235bdd46]{font-family:Source Han Sans CN;font-weight:400}.font-style-bold[data-v-235bdd46]{font-family:SourceHanSansCN-Bold;font-weight:700}.font-style-Regular[data-v-235bdd46]{font-family:DIN-Regular;font-weight:Regular}.font-style-std[data-v-235bdd46]{font-family:Adobe Heiti Std;font-weight:400}.font-style-yahe[data-v-235bdd46]{font-family:Microsoft YaHei;font-weight:400}.d-box[data-v-235bdd46]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.scroll[data-v-235bdd46]{overflow-x:hidden;overflow-y:scroll}.bg-issues[data-v-235bdd46]{background-size:100% 100%;background-repeat:no-repeat}[data-v-235bdd46] .u-loading-flower{position:absolute!important;top:6.666666666666667vw!important;left:0!important;right:0!important;margin:auto!important}[data-v-235bdd46] .uni-picker-container .uni-picker-content{height:400px!important}[data-v-235bdd46] .uni-scroll-view::-webkit-scrollbar{display:none}uni-view[data-v-235bdd46]::-webkit-scrollbar{display:none}.huoquyz[data-v-235bdd46]{color:#1d6ff9;border:2px solid #1d6ff9;-webkit-border-radius:5px;border-radius:5px;padding:.533333333333333vw 1.333333333333333vw}.item-text[data-v-235bdd46],\n.item-input[data-v-235bdd46],\n.item-input2[data-v-235bdd46]{color:#666;font-size:3.733333333333333vw}.item-input[data-v-235bdd46]{color:#333;text-align:right;width:53.333333333333336vw}.item-input2[data-v-235bdd46]{color:#999}.zjgl-item[data-v-235bdd46]{padding:4vw 0}.zjgl[data-v-235bdd46]{background:#fff;margin-top:2.666666666666667vw;padding:0 3.2vw}[data-v-235bdd46] .gongao-title{margin-left:7.2vw}.baoc[data-v-235bdd46]{color:#333;font-size:4.266666666666667vw}[data-v-235bdd46] .flex-view-item{min-height:100vh}",""]),e.exports=t},6168:function(e,t,a){"use strict";var i=a("926c"),n=a.n(i);n.a},"71e9":function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var n=i(a("1da1")),o=i(a("ea00")),s=i(a("c554")),r=i(a("81b1")),d=a("df8e"),l=a("2674"),c={name:"search",components:{navTop:s.default,myNavgetter:o.default,myLayout:r.default},mixins:[l.regexp],data:function(){return{title:"",xing_password:"",type:"",iphone:"",password:"",ok_password:"",yzm:""}},onLoad:function(e){"{}"!=JSON.stringify(e)&&(console.log(e),this.type=e.leix,2==e.leix?(this.xing_password="新支付密码",this.title="修改支付密码"):1==e.leix&&(this.xing_password="新登录密码",this.title="修改登录密码"))},methods:{change_password:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a,i,o,s,r,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.yz(),a){t.next=3;break}return t.abrupt("return");case 3:if(i={newmima:e.password,cfmima:e.ok_password,mobile:e.iphone,yzm:e.yzm,type:e.type},o=e.check_iphone(e.iphone),o.bool){t.next=8;break}return uni.showToast({title:o.str,icon:"none"}),t.abrupt("return");case 8:if(1!=e.type){t.next=15;break}if(s=e.Check_ID(e.password),s.bool){t.next=13;break}return uni.showToast({title:s.str,icon:"none"}),t.abrupt("return");case 13:t.next=19;break;case 15:if(r=e.Check_zhifu_password(e.password),r.bool){t.next=19;break}return uni.showToast({title:r.str,icon:"none"}),t.abrupt("return");case 19:if(e.password==e.ok_password){t.next=22;break}return uni.showToast({title:"密码输入不一致！",icon:"none"}),t.abrupt("return");case 22:return t.next=24,(0,d.zhaohuimimaup)(i);case 24:l=t.sent,e.then(l,function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(a){var i,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(a,e.type),!a){t.next=12;break}if(1==e.type&&(e.clear_all_local(),setTimeout((function(){e.jump("/pages/login_user/login?next_path=/pages/my/item/zhanghu_guangli")}),1500)),2!=e.type){t.next=12;break}return t.next=6,(0,d.userini)({});case 6:i=t.sent,n={token:e.gvx("user").token,user:i.data},e.svx("user_action",n),o=e.gvx("user"),console.log(o),setTimeout((function(){e.next_jump()}),1500);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 26:case"end":return t.stop()}}),t)})))()},get_yzm:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.yz(),a){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,(0,d.fsyzm)({mobile:e.iphone});case 5:i=t.sent,e.then(i,(function(e){}));case 7:case"end":return t.stop()}}),t)})))()},yz:function(){return!!(this.iphone&&this.password&&this.ok_password)||(uni.showToast({title:"输入不能为空！",icon:"none"}),!1)}}};t.default=c},"8ca6":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("my-navgetter"),a("nav-top",{attrs:{title:e.title}},[[a("v-uni-view",{staticClass:"baoc",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.change_password.apply(void 0,arguments)}}},[e._v("保存")])]],2),a("my-layout",{attrs:{bg:"#F4F8FA"}},[[a("v-uni-view",[a("v-uni-view",{staticClass:"zjgl"},[a("v-uni-view",{staticClass:"zjgl-item"},[a("v-uni-view",{staticClass:"item-text"},[e._v("手机号")]),a("v-uni-input",{staticClass:"item-input",attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号","placeholder-class":"item-input2"},model:{value:e.iphone,callback:function(t){e.iphone=t},expression:"iphone"}})],1),a("v-uni-view",{staticClass:"zjgl-item"},[a("v-uni-view",{staticClass:"item-text"},[e._v(e._s(e.xing_password))]),a("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:2==e.type,expression:"type == 2 "}],staticClass:"item-input",attrs:{type:"number",maxlength:"6",placeholder:"请输入新支付密码","placeholder-class":"item-input2"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:1==e.type,expression:"type == 1 "}],staticClass:"item-input",attrs:{type:"text",placeholder:"请输入新登录密码","placeholder-class":"item-input2"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("v-uni-view",{staticClass:"zjgl-item"},[a("v-uni-view",{staticClass:"item-text"},[e._v("确认密码")]),a("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:2==e.type,expression:"type == 2 "}],staticClass:"item-input",attrs:{type:"number",maxlength:"6",placeholder:"请确认您的支付密码","placeholder-class":"item-input2"},model:{value:e.ok_password,callback:function(t){e.ok_password=t},expression:"ok_password"}}),a("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:1==e.type,expression:"type == 1 "}],staticClass:"item-input",attrs:{type:"text",placeholder:"请确认您的登录密码","placeholder-class":"item-input2"},model:{value:e.ok_password,callback:function(t){e.ok_password=t},expression:"ok_password"}})],1),a("v-uni-view",{staticClass:"zjgl-item"},[a("v-uni-view",{staticClass:"item-text"},[e._v("验证码")]),a("v-uni-input",{staticClass:"item-input",attrs:{type:"number",placeholder:"请输入验证码","placeholder-class":"item-input2"},model:{value:e.yzm,callback:function(t){e.yzm=t},expression:"yzm"}}),a("v-uni-view",{staticClass:"huoquyz",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.get_yzm.apply(void 0,arguments)}}},[e._v("获取验证码")])],1)],1)],1)]],2)],1)},o=[]},"926c":function(e,t,a){var i=a("4577");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("266037ea",i,!0,{sourceMap:!1,shadowMode:!1})},cb27:function(e,t,a){"use strict";a.r(t);var i=a("71e9"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},e33a:function(e,t,a){"use strict";a.r(t);var i=a("8ca6"),n=a("cb27");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("6168");var s,r=a("f0c5"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"235bdd46",null,!1,i["a"],s);t["default"]=d.exports}}]);
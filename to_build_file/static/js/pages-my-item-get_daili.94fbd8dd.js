(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-item-get_daili"],{"2a09":function(t,i,e){var a=e("f1e5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("6392dcf2",a,!0,{sourceMap:!1,shadowMode:!1})},"45ec":function(t,i,e){"use strict";e.r(i);var a=e("5297"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},5297:function(t,i,e){"use strict";var a=e("4ea4");e("a9e3"),e("b680"),e("d3b7"),e("ac1f"),e("25f0"),e("466d"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var n=a(e("1da1")),s=a(e("c554")),o=a(e("ea00")),r=a(e("81b1")),c=e("2674"),l=e("df8e"),u={components:{myTitle:s.default,myNavgetter:o.default,myLayout:r.default},mixins:[c.upload_img,c.map,c.regexp],data:function(){return{star_time:"",end_time:"",name:"",iphone:"",sfz:"",mendian_name:"",jindu:"",weidu:"",addressList:[],kefu_phone:"",yyzz_upload_img:"",mendian_upload_img:"",zfz_z_upload_img:"",szf_f_upload_img:"",show3:!1,show1:!1,show2:!1,params:{year:!1,month:!1,day:!1,hour:!0,minute:!0,second:!1},yyzz_bg:"/static/img/my/ye.png",mendian_bg:"/static/img/my/mend.png",sfz_z_bg:"/static/img/my/daili/sfzz.png",sfz_f_bg:"/static/img/my/daili/sfzf.png",yyzz_img:[],mendian_img:[],togglemap:!1,mengdian:"---- 请选择 ----",daili_zhuangtai:{},zhuangtai:!1,dengji:[],dengji_list_data:[],select_daili:{name:"请选择",index:null}}},onLoad:function(t){if("{}"!=JSON.stringify(t)){var i=JSON.parse(t.obj);this.$set(this.select_daili,"name",i.name),this.$set(this.select_daili,"index",i.index),console.log(this.select_daili)}},onReady:function(){this.dl_dengji_list(),this.get_daili_zhuangtai()},onShow:function(){},onHide:function(){},methods:{dl_dengji_list:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,(0,l.dengjijs)({});case 2:e=i.sent,t.then(e,(function(i){i&&(t.dengji=[],t.dengji_list_data=[],t.dengji.push(e.data[8].jbname),t.dengji_list_data.push(e.data[8]),t.dengji.push(e.data[9].jbname),t.dengji_list_data.push(e.data[9]),t.dengji.push(e.data[10].jbname),t.dengji_list_data.push(e.data[10]))}),!1);case 4:case"end":return i.stop()}}),i)})))()},get_daili_zhuangtai:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.daili_zhuangtai={},i.next=3,(0,l.shimingrzsf)({});case 3:e=i.sent,console.log(e),a={},a.msg=e.msg,200==e.stare?(t.zhuangtai=!0,setTimeout((function(){t.zhuangtai=!1,t.get_yonhu(),t.next_jump()}),4e3)):300==e.stare?t.zhuangtai=!0:400==e.stare&&(t.zhuangtai=!0,setTimeout((function(){t.zhuangtai=!1}),4e3)),Object.assign(t.daili_zhuangtai,a),console.log(t.daili_zhuangtai);case 10:case"end":return i.stop()}}),i)})))()},get_yonhu:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,(0,l.userini)({});case 2:e=i.sent,200==e.stare&&(a={token:t.gvx("user").token,user:e.data},t.svx("user_action",a),t.next_jump());case 4:case"end":return i.stop()}}),i)})))()},get_daili:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e,a,n,s,o,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:for(s in e=[8,9,10],a={idup:t.zfz_z_upload_img,iddown:t.szf_f_upload_img,licence:t.yyzz_upload_img,realname:t.name,cid:t.sfz,tel:t.kefu_phone,name:t.mendian_name,lng:t.jindu,lat:t.weidu,url:t.mendian_upload_img,yingye:t.star_time.hour+":"+t.star_time.minute+"-"+t.end_time.hour+":"+t.end_time.minute,province:t.addressList[0],city:t.addressList[1],district:t.addressList[2],jibie:e[t.select_daili.index],add:t.mengdian},n=!0,a)a[s]||(n=!1);if(n){i.next=7;break}return uni.showToast({title:"输入有误",icon:"none"}),i.abrupt("return");case 7:if(o=t.check_iphone(t.kefu_phone),o.bool){i.next=11;break}return uni.showToast({title:"客服电话输入有误！",icon:"none"}),i.abrupt("return");case 11:return i.next=13,(0,l.yonghushangjiarz)(a);case 13:r=i.sent,t.then(r,(function(i){i&&setTimeout((function(){t.get_daili_zhuangtai()}),1500)})),console.log(a);case 16:case"end":return i.stop()}}),i)})))()},get_diz:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.get_position();case 2:e=i.sent,console.log(e),uni.chooseLocation({latitude:e.latitude,longitude:e.longitude,keyword:"",success:function(){var i=(0,n.default)(regeneratorRuntime.mark((function i(e){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:t.mengdian=e.name+""+e.address,t.jindu=(Number(e.longitude)+.0065).toFixed(8),t.weidu=(Number(e.latitude)+.006).toFixed(8),console.log(t.mengdian),a=new plus.maps.Point(e.longitude,e.latitude),plus.maps.Map.reverseGeocode(a,{},(function(i){var e=i.address;i.coord,i.coordType;console.log(e,"address");var a=/.+?(省|市|自治区|自治州|县|区|镇|城)/g;t.addressList=e.match(a).toString().split(","),console.log(t.addressList[0]),console.log(t.addressList[1]),console.log(t.addressList[2])}),(function(t){}));case 6:case"end":return i.stop()}}),i)})));function e(t){return i.apply(this,arguments)}return e}()});case 5:case"end":return i.stop()}}),i)})))()},sfz_fanmian:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.get_img();case 2:e=i.sent,console.log(e),t.sfz_f_bg=e.img,t.szf_f_upload_img=e.data.data;case 6:case"end":return i.stop()}}),i)})))()},sfz_zhengmian:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.get_img();case 2:e=i.sent,console.log(e),t.sfz_z_bg=e.img,t.zfz_z_upload_img=e.data.data;case 6:case"end":return i.stop()}}),i)})))()},yyzz_img_submit:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.get_img();case 2:e=i.sent,console.log(e),t.yyzz_bg=e.img,t.yyzz_upload_img=e.data.data;case 6:case"end":return i.stop()}}),i)})))()},mendian_img_submit:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.get_img();case 2:e=i.sent,console.log(e),t.mendian_bg=e.img,t.mendian_upload_img=e.data.data;case 6:case"end":return i.stop()}}),i)})))()},star_quxiao:function(t){console.log(t)},star_quer:function(t){console.log(t),this.star_time=t,this.show1=!1,this.show2=!0,this.end_time=""},end_quxiao:function(t){console.log(t)},end_quer:function(t){if(t.hour<this.star_time.hour||t.hour==this.star_time.hour&&(t.minute<this.star_time.minute||t.minute==this.star_time.minute))return uni.showToast({title:"时间输入有误",icon:"none",duration:2e3}),this.star_time="",void(this.end_time="");this.end_time=t},yingye_time:function(){this.show1=!this.show1},daili_dengji:function(t){var i=[8,9,10];this.gvx("user").user.daili>=i[t[0]]?uni.showToast({title:"不能选同级别或低级别",icon:"none"}):(this.$set(this.select_daili,"name",this.dengji[t[0]]),this.$set(this.select_daili,"index",t[0]))}}};i.default=u},9777:function(t,i,e){"use strict";e.r(i);var a=e("a767"),n=e("45ec");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("eea0");var o,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"5c466af2",null,!1,a["a"],o);i["default"]=c.exports},a767:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={uPicker:e("adbc").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("my-navgetter"),e("my-title",{attrs:{title:"申请代理"}}),e("my-layout",{attrs:{bg:"#fafafa"}},[[e("v-uni-view",[e("v-uni-image",{staticClass:"daili-top-img",attrs:{src:"/static/img/my/daili.png","lazy-load":!0}}),e("v-uni-view",{staticClass:"dailixingxi"},[e("v-uni-view",{staticClass:"dailixingxi-item"},[e("v-uni-view",{staticClass:"biaoti"},[e("v-uni-image",{staticClass:"biaoti-img",attrs:{src:"/static/img/my/jx1.png","lazy-load":!0}}),e("v-uni-text",{staticClass:"biaoti-text"},[t._v("代理信息")]),e("v-uni-image",{staticClass:"biaoti-img",attrs:{src:"/static/img/my/jx2.png","lazy-load":!0}})],1),e("v-uni-view",[e("v-uni-view",{staticClass:"input-view flex-space-between"},[e("v-uni-text",{staticClass:"input-text"},[t._v("您的姓名")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",maxlength:"10",placeholder:"请输入您的姓名","placeholder-class":"input"},model:{value:t.name,callback:function(i){t.name=i},expression:"name"}})],1),e("v-uni-view",{staticClass:"input-view flex-space-between"},[e("v-uni-text",{staticClass:"input-text"},[t._v("您的电话")]),e("v-uni-input",{staticClass:"input",attrs:{type:"number",maxlength:"11",placeholder:"请输入您的电话","placeholder-class":"input"},model:{value:t.iphone,callback:function(i){t.iphone=i},expression:"iphone"}})],1),e("v-uni-view",{staticClass:"input-view flex-space-between"},[e("v-uni-text",{staticClass:"input-text"},[t._v("客服电话")]),e("v-uni-input",{staticClass:"input",attrs:{type:"number",maxlength:"11",placeholder:"请输入客服电话","placeholder-class":"input"},model:{value:t.kefu_phone,callback:function(i){t.kefu_phone=i},expression:"kefu_phone"}})],1),e("v-uni-view",{staticClass:"input-view flex-space-between"},[e("v-uni-text",{staticClass:"input-text"},[t._v("您的身份证")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入您的身份证","placeholder-class":"input"},model:{value:t.sfz,callback:function(i){t.sfz=i},expression:"sfz"}})],1),e("v-uni-view",{staticClass:"input-view flex-space-between",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.show3=!t.show3}}},[e("v-uni-text",{staticClass:"input-text"},[t._v("代理等级")]),e("v-uni-view",{staticClass:"input"},[t._v(t._s(t.select_daili.name))])],1)],1),e("v-uni-view",{staticClass:"dianpu"},[e("v-uni-view",{staticClass:"biaoti"},[e("v-uni-image",{staticClass:"biaoti-img",attrs:{src:"/static/img/my/jx1.png","lazy-load":!0}}),e("v-uni-text",{staticClass:"biaoti-text"},[t._v("店铺信息")]),e("v-uni-image",{staticClass:"biaoti-img",attrs:{src:"/static/img/my/jx2.png","lazy-load":!0}})],1),e("v-uni-view",[e("v-uni-view",{staticClass:"input-view flex-space-between"},[e("v-uni-text",{staticClass:"input-text"},[t._v("门店名称")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入门店名称","placeholder-class":"input"},model:{value:t.mendian_name,callback:function(i){t.mendian_name=i},expression:"mendian_name"}})],1),e("v-uni-view",{staticClass:"input-view flex-space-between",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.yingye_time.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"input-text"},[t._v("营业时间")]),e("v-uni-view",{staticClass:"input-view2"},[t._v(t._s(t.star_time.hour&&t.star_time.minute?t.star_time.hour+":"+t.star_time.minute:"----")+" \n\t\t\t\t\t\t\t\t\t\t"+t._s(t.star_time.hour&&t.star_time.minute?"-":"请选择")+" \n\t\t\t\t\t\t\t\t\t\t"+t._s(t.end_time.hour&&t.end_time.minute?t.end_time.hour+":"+t.end_time.minute:"----"))]),e("v-uni-image",{staticClass:"input-img2",attrs:{src:"/static/img/my/xiala.png","lazy-load":!0}})],1),e("v-uni-view",{staticClass:"input-view flex-space-between",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.get_diz.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"input-text"},[t._v("店址")]),e("v-uni-view",{staticClass:"input-view2"},[t._v(t._s(t.mengdian))]),e("v-uni-image",{staticClass:"input-img2",attrs:{src:"/static/img/my/xiala.png","lazy-load":!0}})],1)],1)],1),e("v-uni-view",{staticClass:"dianpu"},[e("v-uni-view",{staticClass:"biaoti"},[e("v-uni-image",{staticClass:"biaoti-img",attrs:{src:"/static/img/my/jx1.png","lazy-load":!0}}),e("v-uni-text",{staticClass:"biaoti-text"},[t._v("图片信息")]),e("v-uni-image",{staticClass:"biaoti-img",attrs:{src:"/static/img/my/jx2.png","lazy-load":!0}})],1),e("v-uni-view",{staticClass:"img2 flex-space-between"},[e("v-uni-view",{staticClass:"img-fa"},[e("v-uni-image",{staticClass:"img2-img1",attrs:{src:t.yyzz_bg,"lazy-load":!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.yyzz_img_submit.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"img2-text2"},[t._v("请上传营业执照")])],1),e("v-uni-view",{staticClass:"img-fa"},[e("v-uni-image",{staticClass:"img2-img1",attrs:{src:t.mendian_bg,"lazy-load":!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.mendian_img_submit.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"img2-text2"},[t._v("请上传门店图")])],1),e("v-uni-view",{staticClass:"img-fa"},[e("v-uni-image",{staticClass:"img2-img1",attrs:{src:t.sfz_z_bg,"lazy-load":!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sfz_zhengmian.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"img2-text2"},[t._v("身份证正面图")])],1),e("v-uni-view",{staticClass:"img-fa"},[e("v-uni-image",{staticClass:"img2-img1",attrs:{src:t.sfz_f_bg,"lazy-load":!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sfz_fanmian.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"img2-text2"},[t._v("身份证反面图")])],1)],1)],1),e("v-uni-view",{staticClass:"btn-bottom",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.get_daili.apply(void 0,arguments)}}},[t._v("确认提交")])],1)],1)],1)]],2),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.zhuangtai,expression:"zhuangtai"}],staticClass:"daili_zhaungtai-body"},[e("v-uni-view",{staticClass:"daili_zhaungtai"},[e("v-uni-image",{staticClass:"daili_zhaungtai-item1",attrs:{src:"/static/img/my/daili/get_daili.png"}}),e("v-uni-view",{staticClass:"daili_zhaungtai-item2"},[t._v(t._s("查询成功"==t.daili_zhuangtai.msg?"申请成功":t.daili_zhuangtai.msg))]),e("v-uni-view",{staticClass:"daili_zhaungtai-item5",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.next_jump()}}},[t._v("确定")])],1)],1),e("u-picker",{attrs:{mode:"time",name:"p1",params:t.params,"safe-area-inset-bottom":!0,title:"选择开店时间","confirm-text":"下一步","cancel-text":" "},on:{cancel:function(i){arguments[0]=i=t.$handleEvent(i),t.star_quxiao.apply(void 0,arguments)},confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.star_quer.apply(void 0,arguments)}},model:{value:t.show1,callback:function(i){t.show1=i},expression:"show1"}}),e("u-picker",{attrs:{mode:"time",name:"p2",params:t.params,"safe-area-inset-bottom":!0,title:"选择关店时间","confirm-text":"确定","cancel-text":" "},on:{cancel:function(i){arguments[0]=i=t.$handleEvent(i),t.end_quxiao.apply(void 0,arguments)},confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.end_quer.apply(void 0,arguments)}},model:{value:t.show2,callback:function(i){t.show2=i},expression:"show2"}}),e("u-picker",{attrs:{mode:"selector",name:"p3","default-selector":[0],range:t.dengji,"safe-area-inset-bottom":!0,title:"选择代理等级","confirm-text":"确定","cancel-text":" "},on:{cancel:function(i){arguments[0]=i=t.$handleEvent(i)},confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.daili_dengji.apply(void 0,arguments)}},model:{value:t.show3,callback:function(i){t.show3=i},expression:"show3"}})],1)},s=[]},eea0:function(t,i,e){"use strict";var a=e("2a09"),n=e.n(a);n.a},f1e5:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".p-24[data-v-5c466af2]{padding-left:3.2vw;padding-right:3.2vw}.flex-colum[data-v-5c466af2]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-wrap[data-v-5c466af2],\n.flex-center[data-v-5c466af2],\n.flex-space-around[data-v-5c466af2],\n.flex-space-between[data-v-5c466af2],\n.flex-space-right[data-v-5c466af2],\n.btn-bottom[data-v-5c466af2]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.flex-center[data-v-5c466af2],\n.btn-bottom[data-v-5c466af2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-around[data-v-5c466af2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-between[data-v-5c466af2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-space-right[data-v-5c466af2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-top[data-v-5c466af2]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.position-bottom[data-v-5c466af2]{position:fixed;bottom:0;left:0}.font-list[data-v-5c466af2],\nuni-view[data-v-5c466af2],\nuni-text[data-v-5c466af2],\n.daili_zhaungtai-item2[data-v-5c466af2]{font-family:Source Han Sans CN;font-weight:400}.font-style-bold[data-v-5c466af2]{font-family:SourceHanSansCN-Bold;font-weight:700}.font-style-Regular[data-v-5c466af2]{font-family:DIN-Regular;font-weight:Regular}.font-style-std[data-v-5c466af2]{font-family:Adobe Heiti Std;font-weight:400}.font-style-yahe[data-v-5c466af2],\n.input-text[data-v-5c466af2],\n.input[data-v-5c466af2],\n.input-view2[data-v-5c466af2]{font-family:Microsoft YaHei;font-weight:400}.d-box[data-v-5c466af2]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.scroll[data-v-5c466af2]{overflow-x:hidden;overflow-y:scroll}.bg-issues[data-v-5c466af2],[data-v-5c466af2] .u-btn-picker--tips{background-size:100% 100%;background-repeat:no-repeat}[data-v-5c466af2] .u-loading-flower{position:absolute!important;top:6.666666666666667vw!important;left:0!important;right:0!important;margin:auto!important}[data-v-5c466af2] .uni-picker-container .uni-picker-content{height:400px!important}[data-v-5c466af2] .uni-scroll-view::-webkit-scrollbar{display:none}uni-view[data-v-5c466af2]::-webkit-scrollbar{display:none}.daili_zhaungtai-item1[data-v-5c466af2]{width:100%;height:54.266666666666666vw;margin-bottom:6.666666666666667vw}.daili_zhaungtai-item2[data-v-5c466af2]{color:#333;font-size:4.266666666666667vw;text-align:center}.daili_zhaungtai-body[data-v-5c466af2]{position:fixed;width:100vw;height:100vh;top:0;left:0;background:rgba(3,3,3,.5);z-index:3000}.daili_zhaungtai-item5[data-v-5c466af2]{text-align:center;width:70%;padding:3.333333333333333vw 0;margin:auto;background:-webkit-linear-gradient(352deg,#4c5afe,#1b70ff);background:linear-gradient(98deg,#4c5afe,#1b70ff);-webkit-box-shadow:0 4px 9px 0 rgba(0,60,255,.1);box-shadow:0 4px 9px 0 rgba(0,60,255,.1);-webkit-border-radius:6px;border-radius:6px;color:#fff;font-size:4vw;margin-top:5.333333333333333vw}.daili_zhaungtai[data-v-5c466af2]{background:#fff!important;width:78.8vw;height:93.33333333333333vw;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;-webkit-border-radius:6px;border-radius:6px}.img-fa[data-v-5c466af2]{position:relative;margin-bottom:5.333333333333333vw}[data-v-5c466af2] .u-btn-picker--primary{position:absolute!important;width:93.6vw!important;height:10.666666666666666vw!important;top:84vw;left:3.2vw;color:#fff!important;font-size:4.266666666666667vw!important;z-index:3000;background:-webkit-linear-gradient(352deg,#4c5afe,#1b70ff);background:linear-gradient(98deg,#4c5afe,#1b70ff);-webkit-box-shadow:0 4px 9px 0 rgba(0,60,255,.1);box-shadow:0 4px 9px 0 rgba(0,60,255,.1);-webkit-border-radius:10px;border-radius:10px}[data-v-5c466af2] .u-drawer-content-visible{height:370px!important;-webkit-border-radius:15px 15px 0 0!important;border-radius:15px 15px 0 0!important;overflow:hidden!important}[data-v-5c466af2] .u-btn-picker--tips{position:absolute;left:90.66666666666667vw;width:5.333333333333333vw!important;height:5.333333333333333vw!important;background-image:url(/static/img/my/cuo.png)}[data-v-5c466af2] .u-picker__title{color:#000!important;font-size:4.266666666666667vw!important}.btn-bottom[data-v-5c466af2]{color:#fff;font-size:4.266666666666667vw;background:-webkit-linear-gradient(352deg,#4c5afe,#1b70ff);background:linear-gradient(98deg,#4c5afe,#1b70ff);-webkit-box-shadow:0 4px 9px 0 rgba(0,60,255,.1);box-shadow:0 4px 9px 0 rgba(0,60,255,.1);-webkit-border-radius:10px;border-radius:10px;height:13.066666666666666vw;margin-top:8vw}.img2-text2[data-v-5c466af2]{color:#040404;font-size:3.466666666666667vw;text-align:center;margin-top:1.333333333333333vw}.img2-img1[data-v-5c466af2]{width:41.06666666666667vw;height:24.666666666666668vw}.input-img2[data-v-5c466af2]{width:2.266666666666667vw;height:1.6vw}.dianpu[data-v-5c466af2]{margin-top:8vw}.input-text[data-v-5c466af2],\n.input[data-v-5c466af2],\n.input-view2[data-v-5c466af2]{color:#333;font-size:3.733333333333333vw;min-width:20%}.input[data-v-5c466af2],\n.input-view2[data-v-5c466af2]{color:#999;text-align:left!important;text-indent:0!important;border:0;width:75%}.input-view2[data-v-5c466af2]{width:65%}.input-view[data-v-5c466af2]{background:#fff;-webkit-box-shadow:0 4px 9px 0 rgba(0,60,255,.1);box-shadow:0 4px 9px 0 rgba(0,60,255,.1);-webkit-border-radius:10px;border-radius:10px;padding:4.4vw 3.2vw;margin-bottom:2.666666666666667vw}.biaoti[data-v-5c466af2]{text-align:center;margin-bottom:5.333333333333333vw}.biaoti-text[data-v-5c466af2]{color:#333;font-size:4.266666666666667vw;font-weight:700;vertical-align:middle}.biaoti-img[data-v-5c466af2]{width:5.066666666666666vw;height:2.666666666666667vw;margin:.4vw 3.733333333333333vw 0;vertical-align:middle}.dailixingxi-item[data-v-5c466af2]{background:#fff;-webkit-border-radius:10px;border-radius:10px;padding:4.8vw 2vw}.dailixingxi[data-v-5c466af2]{padding:0 3.2vw;position:relative;top:-12vw}.daili-top-img[data-v-5c466af2]{width:100%;height:96.53333333333333vw}",""]),t.exports=i}}]);
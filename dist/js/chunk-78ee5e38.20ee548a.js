(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78ee5e38"],{"1dde":function(t,e,c){var o=c("d039"),n=c("b622"),a=c("2d00"),s=n("species");t.exports=function(t){return a>=51||!o((function(){var e=[],c=e.constructor={};return c[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"76db":function(t,e,c){"use strict";c.r(e);c("b0c0");var o=c("7a23"),n={class:"container"},a={class:"row mt-4"},s={class:"col-md-7"},l={class:"table align-middle"},i=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",null,"圖片"),Object(o["h"])("th",null,"商品名稱"),Object(o["h"])("th",null,"價格"),Object(o["h"])("th")])],-1),r={style:{width:"200px"}},u=["onClick"],d={key:0,class:"h5"},b={key:1,class:"h6"},h={key:2,class:"h5"},j={class:"btn-group btn-group-sm"},O=["onClick"],p=["onClick","disabled"],m={key:0,class:"spinner-grow spinner-grow-sm",role:"status"},f=Object(o["h"])("span",{class:"visually-hidden"},"Loading...",-1),g=[f],v=Object(o["j"])(" 加到購物車 "),y={class:"col-md-5"},k={class:"sticky-top"},x={class:"table align-middle"},C=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th"),Object(o["h"])("th",null,"品明"),Object(o["h"])("th",{style:{width:"110px"}},"數量"),Object(o["h"])("th",null,"單價")])],-1),V=["onClick","disabled"],w=Object(o["h"])("i",{class:"bi bi-x"},null,-1),I=[w],L={key:0,class:"text-success"},z={class:"input-group input-group-sm"},$=["onUpdate:modelValue","onChange","disabled"],_={class:"input-group-text"},M={class:"text-end"},U={key:0,class:"text-success"},q=Object(o["h"])("td",{colspan:"3",class:"text-end"},"總計",-1),S={class:"text-end"},J={key:0},E=Object(o["h"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),P={class:"text-end text-success"},F={class:"input-group mb-3 input-group-sm"},Q={class:"input-group-append"},T={class:"my-5 row justify-content-center"},H={class:"mb-3"},A=Object(o["h"])("label",{for:"email",class:"form-label"},"Email",-1),B={class:"mb-3"},W=Object(o["h"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),X={class:"mb-3"},D=Object(o["h"])("label",{for:"tel",class:"form-label"},"電話",-1),G={class:"mb-3"},K=Object(o["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),N={class:"mb-3"},R=Object(o["h"])("label",{for:"message",class:"form-label"},"留言",-1),Y=Object(o["h"])("div",{class:"text-end"},[Object(o["h"])("button",{class:"btn btn-danger"},"送出訂單")],-1);function Z(t,e,c,f,w,Z){var tt=Object(o["J"])("Loading"),et=Object(o["J"])("Field"),ct=Object(o["J"])("ErrorMessage"),ot=Object(o["J"])("Form");return Object(o["z"])(),Object(o["g"])(o["a"],null,[Object(o["k"])(tt,{active:t.isLoading},null,8,["active"]),Object(o["h"])("div",n,[Object(o["h"])("div",a,[Object(o["h"])("div",s,[Object(o["h"])("table",l,[i,Object(o["h"])("tbody",null,[(Object(o["z"])(!0),Object(o["g"])(o["a"],null,Object(o["H"])(w.products,(function(t){return Object(o["z"])(),Object(o["g"])("tr",{key:t.id},[Object(o["h"])("td",r,[Object(o["h"])("div",{style:Object(o["t"])([{backgroundImage:"url(".concat(t.imageUrl,")")},{height:"100px","background-size":"cover","background-position":"center"}])},null,4)]),Object(o["h"])("td",null,[Object(o["h"])("a",{onClick:Object(o["W"])((function(e){return Z.getProduct(t.id)}),["prevent"]),href:"#",class:"text-dark"},Object(o["M"])(t.title),9,u)]),Object(o["h"])("td",null,[t.price?Object(o["f"])("",!0):(Object(o["z"])(),Object(o["g"])("div",d,Object(o["M"])(t.origin_price)+" 元 ",1)),t.price?(Object(o["z"])(),Object(o["g"])("del",b,"原價 "+Object(o["M"])(t.origin_price)+" 元",1)):Object(o["f"])("",!0),t.price?(Object(o["z"])(),Object(o["g"])("div",h," 現在只要"+Object(o["M"])(t.price)+" 元 ",1)):Object(o["f"])("",!0)]),Object(o["h"])("td",null,[Object(o["h"])("div",j,[Object(o["h"])("button",{onClick:function(e){return Z.getProduct(t.id)},type:"button",class:"btn btn-outline-secondary"}," 查看更多 ",8,O),Object(o["h"])("button",{onClick:function(e){return Z.addCart(t.id)},disabled:w.status.loadingItem===t.id,type:"button",class:"btn btn-outline-danger"},[w.status.loadingItem===t.id?(Object(o["z"])(),Object(o["g"])("div",m,g)):Object(o["f"])("",!0),v],8,p)])])])})),128))])])]),Object(o["h"])("div",y,[Object(o["h"])("div",k,[Object(o["h"])("table",x,[C,Object(o["h"])("tbody",null,[w.cart.carts?(Object(o["z"])(!0),Object(o["g"])(o["a"],{key:0},Object(o["H"])(w.cart.carts,(function(e){return Object(o["z"])(),Object(o["g"])("tr",{key:e.id},[Object(o["h"])("td",null,[Object(o["h"])("button",{onClick:function(t){return Z.removeCartItem(e.id)},disabled:w.status.loadingItem===e.id,type:"button",class:"btn btn-outline-danger btn-sm"},I,8,V)]),Object(o["h"])("td",null,[Object(o["j"])(Object(o["M"])(e.product.title)+" ",1),e.coupon?(Object(o["z"])(),Object(o["g"])("div",L," 已套用優惠券 ")):Object(o["f"])("",!0)]),Object(o["h"])("td",null,[Object(o["h"])("div",z,[Object(o["V"])(Object(o["h"])("input",{"onUpdate:modelValue":function(t){return e.qty=t},onChange:function(t){return Z.updateCart(e)},disabled:w.status.loadingItem===e.id,type:"number",min:"1",class:"form-control"},null,40,$),[[o["Q"],e.qty,void 0,{number:!0}]]),Object(o["h"])("div",_," / "+Object(o["M"])(e.product.unit),1)])]),Object(o["h"])("td",M,[w.cart.final_total!==w.cart.total?(Object(o["z"])(),Object(o["g"])("small",U,"折扣價：")):Object(o["f"])("",!0),Object(o["j"])(" "+Object(o["M"])(t.$filters.currency(e.final_total)),1)])])})),128)):Object(o["f"])("",!0)]),Object(o["h"])("tfoot",null,[Object(o["h"])("tr",null,[q,Object(o["h"])("td",S,Object(o["M"])(t.$filters.currency(w.cart.total)),1)]),w.cart.final_total!==w.cart.total?(Object(o["z"])(),Object(o["g"])("tr",J,[E,Object(o["h"])("td",P,Object(o["M"])(t.$filters.currency(w.cart.final_total)),1)])):Object(o["f"])("",!0)])]),Object(o["h"])("div",F,[Object(o["V"])(Object(o["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return w.coupon_code=t}),placeholder:"請輸入優惠碼 例:good168"},null,512),[[o["Q"],w.coupon_code]]),Object(o["h"])("div",Q,[Object(o["h"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[1]||(e[1]=function(){return Z.addCouponCode&&Z.addCouponCode.apply(Z,arguments)})}," 套用優惠碼 ")])])])])]),Object(o["h"])("div",T,[Object(o["k"])(ot,{onSubmit:Z.createOrder,class:"col-md-6"},{default:Object(o["U"])((function(t){var c=t.errors;return[Object(o["h"])("div",H,[A,Object(o["k"])(et,{modelValue:w.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=function(t){return w.form.user.email=t}),rules:"email|required",name:"email",class:Object(o["s"])([{"is-invalid":c["email"]},"form-control"]),type:"email",id:"email"},null,8,["modelValue","class"]),Object(o["k"])(ct,{name:"email",class:"invalid-feedback"})]),Object(o["h"])("div",B,[W,Object(o["k"])(et,{modelValue:w.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=function(t){return w.form.user.name=t}),rules:"required",name:"姓名",class:Object(o["s"])([{"is-invalid":c["姓名"]},"form-control"]),type:"text",id:"name"},null,8,["modelValue","class"]),Object(o["k"])(ct,{name:"姓名",class:"invalid-feedback"})]),Object(o["h"])("div",X,[D,Object(o["k"])(et,{modelValue:w.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=function(t){return w.form.user.tel=t}),rules:"required",name:"電話",class:Object(o["s"])([{"is-invalid":c["電話"]},"form-control"]),type:"text",id:"tel"},null,8,["modelValue","class"]),Object(o["k"])(ct,{name:"電話",class:"invalid-feedback"})]),Object(o["h"])("div",G,[K,Object(o["k"])(et,{modelValue:w.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=function(t){return w.form.user.address=t}),rules:"required",name:"地址",class:Object(o["s"])([{"is-invalid":c["地址"]},"form-control"]),type:"text",id:"address"},null,8,["modelValue","class"]),Object(o["k"])(ct,{name:"地址",class:"invalid-feedback"})]),Object(o["h"])("div",N,[R,Object(o["V"])(Object(o["h"])("textarea",{"onUpdate:modelValue":e[6]||(e[6]=function(t){return w.form.message=t}),class:"form-control",name:"message",id:"message",cols:"30",rows:"10"},null,512),[[o["Q"],w.form.message]])]),Y]})),_:1},8,["onSubmit"])])])],64)}c("99af");var tt={data:function(){return{products:[],product:{},status:{loadingItem:""},cart:{},coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("dimcjo6u4","/products/all");this.isLoading=!0,this.$http.get(e).then((function(e){t.products=e.data.products,console.log("products: ",e),t.isLoading=!1}))},getProduct:function(t){this.$router.push("/user/product/".concat(t))},addCart:function(t){var e=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("dimcjo6u4","/cart");this.status.loadingItem=t;var n={product_id:t,qty:c};this.$http.post(o,{data:n}).then((function(t){e.status.loadingItem="",console.log(t),e.getCart()}))},getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("dimcjo6u4","/cart");this.isLoading=!0,this.$http.get(e).then((function(e){console.log(e),t.cart=e.data.data,t.isLoading=!1}))},updateCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("dimcjo6u4","/cart/").concat(t.id);this.isLoading=!0,this.status.loadingItem=t.id;var o={product_id:t.id,qty:t.qty};this.$http.put(c,{data:o}).then((function(t){console.log(t),e.status.loadingItem="",e.getCart()}))},addCouponCode:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("dimcjo6u4","/coupon"),c={code:this.coupon_code};this.isLoading=!0,this.$http.post(e,{data:c}).then((function(e){console.log(e),t.getCart(),t.isLoading=!1}))},removeCartItem:function(t){var e=this;this.status.loadingItem=t;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("dimcjo6u4","/cart/").concat(t);this.isLoading=!0,this.$http.delete(c).then((function(t){e.$httpMessageState(t,"移除購物車品項"),e.status.loadingItem="",e.getCart(),e.isLoading=!1}))},createOrder:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("dimcjo6u4","/order"),c=this.form;this.$http.post(e,{data:c}).then((function(e){console.log(e),t.isLoading=!1,t.$router.push("/user/checkout/".concat(e.data.orderId))}))}},created:function(){this.getProducts(),this.getCart()}},et=c("6b0d"),ct=c.n(et);const ot=ct()(tt,[["render",Z]]);e["default"]=ot},8418:function(t,e,c){"use strict";var o=c("a04b"),n=c("9bf2"),a=c("5c6c");t.exports=function(t,e,c){var s=o(e);s in t?n.f(t,s,a(0,c)):t[s]=c}},"99af":function(t,e,c){"use strict";var o=c("23e7"),n=c("d039"),a=c("e8b5"),s=c("861d"),l=c("7b0b"),i=c("07fa"),r=c("8418"),u=c("65f0"),d=c("1dde"),b=c("b622"),h=c("2d00"),j=b("isConcatSpreadable"),O=9007199254740991,p="Maximum allowed index exceeded",m=h>=51||!n((function(){var t=[];return t[j]=!1,t.concat()[0]!==t})),f=d("concat"),g=function(t){if(!s(t))return!1;var e=t[j];return void 0!==e?!!e:a(t)},v=!m||!f;o({target:"Array",proto:!0,forced:v},{concat:function(t){var e,c,o,n,a,s=l(this),d=u(s,0),b=0;for(e=-1,o=arguments.length;e<o;e++)if(a=-1===e?s:arguments[e],g(a)){if(n=i(a),b+n>O)throw TypeError(p);for(c=0;c<n;c++,b++)c in a&&r(d,b,a[c])}else{if(b>=O)throw TypeError(p);r(d,b++,a)}return d.length=b,d}})},b0c0:function(t,e,c){var o=c("83ab"),n=c("5e77").EXISTS,a=c("9bf2").f,s=Function.prototype,l=s.toString,i=/^\s*function ([^ (]*)/,r="name";o&&!n&&a(s,r,{configurable:!0,get:function(){try{return l.call(this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-78ee5e38.20ee548a.js.map
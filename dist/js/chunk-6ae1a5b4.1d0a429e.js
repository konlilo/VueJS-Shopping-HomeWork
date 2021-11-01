(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ae1a5b4"],{6407:function(t,e,c){"use strict";var o=c("7a23"),a={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},l={class:"page-item"},i=Object(o["h"])("span",{"aria-hidden":"true"},"«",-1),r=[i],s=["onClick"],d={class:"page-item"},u=Object(o["h"])("span",{"aria-hidden":"true"},"»",-1),b=[u];function p(t,e,c,i,u,p){return Object(o["z"])(),Object(o["g"])("nav",a,[Object(o["h"])("ul",n,[Object(o["h"])("li",l,[Object(o["h"])("a",{onClick:e[0]||(e[0]=Object(o["W"])((function(){return p.preBtn&&p.preBtn.apply(p,arguments)}),["prevent"])),class:"page-link",href:"#","aria-label":"Previous"},r)]),(Object(o["z"])(!0),Object(o["g"])(o["a"],null,Object(o["H"])(c.pages.total_pages,(function(t){return Object(o["z"])(),Object(o["g"])("li",{key:t,class:Object(o["s"])([{active:t===c.pages.current_page},"page-item"])},[Object(o["h"])("a",{onClick:Object(o["W"])((function(e){return p.updatePage(t)}),["prevent"]),class:"page-link",href:"#"},Object(o["M"])(t),9,s)],2)})),128)),Object(o["h"])("li",d,[Object(o["h"])("a",{onClick:e[1]||(e[1]=Object(o["W"])((function(){return p.nextBtn&&p.nextBtn.apply(p,arguments)}),["prevent"])),class:"page-link",href:"#","aria-label":"Next"},b)])])])}var h={props:["pages"],methods:{updatePage:function(t){this.$emit("emit-pages",t),console.log(t)},nextBtn:function(){this.pages.has_next&&this.$emit("emit-pages",this.pages.current_page+1)},preBtn:function(){this.pages.has_pre&&this.$emit("emit-pages",this.pages.current_page-1)}}},m=c("6b0d"),j=c.n(m);const O=j()(h,[["render",p]]);e["a"]=O},e01a:function(t,e,c){"use strict";var o=c("23e7"),a=c("83ab"),n=c("da84"),l=c("1a2d"),i=c("1626"),r=c("861d"),s=c("9bf2").f,d=c("e893"),u=n.Symbol;if(a&&i(u)&&(!("description"in u.prototype)||void 0!==u().description)){var b={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(b[e]=!0),e};d(p,u);var h=p.prototype=u.prototype;h.constructor=p;var m=h.toString,j="Symbol(test)"==String(u("test")),O=/^Symbol\((.*)\)[^)]+$/;s(h,"description",{configurable:!0,get:function(){var t=r(this)?this.valueOf():this,e=m.call(t);if(l(b,t))return"";var c=j?e.slice(7,-1):e.replace(O,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:p})}},e6dc:function(t,e,c){"use strict";c.r(e);var o=c("7a23"),a={class:"text-end"},n={class:"table mt-4"},l=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",{width:"120"},"分類"),Object(o["h"])("th",null,"產品名稱"),Object(o["h"])("th",{width:"120"},"原價"),Object(o["h"])("th",{width:"120"},"售價"),Object(o["h"])("th",{width:"100"},"是否啟用"),Object(o["h"])("th",{width:"200"},"編輯")])],-1),i={class:"text-right"},r={class:"text-right"},s={key:0,class:"text-success"},d={key:1,class:"text-muted"},u={class:"btn-group"},b=["onClick"],p=["onClick"];function h(t,e,c,h,m,j){var O=Object(o["J"])("Loading"),f=Object(o["J"])("pagination"),g=Object(o["J"])("product-modal"),v=Object(o["J"])("del-modal");return Object(o["z"])(),Object(o["g"])(o["a"],null,[Object(o["k"])(O,{active:m.isLoading},null,8,["active"]),Object(o["h"])("div",a,[Object(o["h"])("button",{onClick:e[0]||(e[0]=function(t){return j.openModal(!0)}),type:"button",class:"btn btn-primary"}," 新增商品 ")]),Object(o["h"])("table",n,[l,Object(o["h"])("tbody",null,[(Object(o["z"])(!0),Object(o["g"])(o["a"],null,Object(o["H"])(m.products,(function(e){return Object(o["z"])(),Object(o["g"])("tr",{key:e.id},[Object(o["h"])("td",null,Object(o["M"])(e.category),1),Object(o["h"])("td",null,Object(o["M"])(e.title),1),Object(o["h"])("td",i,Object(o["M"])(t.$filters.currency(e.origin_price)),1),Object(o["h"])("td",r,Object(o["M"])(t.$filters.currency(e.price)),1),Object(o["h"])("td",null,[e.is_enabled?(Object(o["z"])(),Object(o["g"])("span",s,"啟用")):(Object(o["z"])(),Object(o["g"])("span",d,"未啟用"))]),Object(o["h"])("td",null,[Object(o["h"])("div",u,[Object(o["h"])("button",{onClick:function(t){return j.openModal(!1,e)},class:"btn btn-outline-primary btn-sm"}," 編輯 ",8,b),Object(o["h"])("button",{onClick:function(t){return j.openDelProductModal(e)},class:"btn btn-outline-danger btn-sm"}," 刪除 ",8,p)])])])})),128))])]),Object(o["k"])(f,{pages:m.pagination,onEmitPages:j.getProducts},null,8,["pages","onEmitPages"]),Object(o["k"])(g,{ref:"productModal",product:m.tempProduct,onUpdateProduct:j.updateProdcut},null,8,["product","onUpdateProduct"]),Object(o["k"])(v,{ref:"delModal",delItem:m.tempProduct,onDelItem:j.delProduct},null,8,["delItem","onDelItem"])],64)}var m=c("5530"),j=(c("99af"),c("a15b"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),O={class:"modal-dialog modal-xl",role:"document"},f={class:"modal-content border-0"},g=Object(o["h"])("div",{class:"modal-header bg-dark text-white"},[Object(o["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(o["h"])("span",null,"新增產品")]),Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},P={class:"row"},y={class:"col-sm-4"},x={class:"mb-3"},k=Object(o["h"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),M={class:"mb-3"},w=Object(o["h"])("label",{for:"customFile",class:"form-label"},[Object(o["j"])("或 上傳圖片 "),Object(o["h"])("i",{class:"fas fa-spinner fa-spin"})],-1),V=Object(o["i"])('<img class="img-fluid" alt=""><div class="mt-5"><div class="mb-3 input-group"><input type="url" class="form-control form-control" placeholder="請輸入連結"><button type="button" class="btn btn-outline-danger"> 移除 </button></div><div><button class="btn btn-outline-primary btn-sm d-block w-100"> 新增圖片 </button></div></div>',2),$={class:"col-sm-8"},_={class:"mb-3"},U=Object(o["h"])("label",{for:"title",class:"form-label"},"標題",-1),C={class:"row gx-2"},L={class:"mb-3 col-md-6"},z=Object(o["h"])("label",{for:"category",class:"form-label"},"分類",-1),Q={class:"mb-3 col-md-6"},S=Object(o["h"])("label",{for:"unit",class:"form-label"},"單位",-1),B={class:"row gx-2"},D={class:"mb-3 col-md-6"},F=Object(o["h"])("label",{for:"origin_price",class:"form-label"},"原價",-1),I={class:"mb-3 col-md-6"},J=Object(o["h"])("label",{for:"price",class:"form-label"},"售價",-1),N=Object(o["h"])("hr",null,null,-1),W={class:"mb-3"},E=Object(o["h"])("label",{for:"description",class:"form-label"},"產品描述",-1),H={class:"mb-3"},q=Object(o["h"])("label",{for:"content",class:"form-label"},"說明內容",-1),A={class:"mb-3"},G={class:"form-check"},K=Object(o["h"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),R={class:"modal-footer"},T=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function X(t,e,c,a,n,l){return Object(o["z"])(),Object(o["g"])("div",j,[Object(o["h"])("div",O,[Object(o["h"])("div",f,[g,Object(o["h"])("div",v,[Object(o["h"])("div",P,[Object(o["h"])("div",y,[Object(o["h"])("div",x,[k,Object(o["V"])(Object(o["h"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return n.tempProduct.imageUrl=t}),type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結"},null,512),[[o["Q"],n.tempProduct.imageUrl]])]),Object(o["h"])("div",M,[w,Object(o["h"])("input",{onChange:e[1]||(e[1]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)}),ref:"fileInput",type:"file",id:"customFile",class:"form-control"},null,544)]),V]),Object(o["h"])("div",$,[Object(o["h"])("div",_,[U,Object(o["V"])(Object(o["h"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return n.tempProduct.title=t}),type:"text",class:"form-control",id:"title",placeholder:"請輸入標題"},null,512),[[o["Q"],n.tempProduct.title]])]),Object(o["h"])("div",C,[Object(o["h"])("div",L,[z,Object(o["V"])(Object(o["h"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return n.tempProduct.category=t}),type:"text",class:"form-control",id:"category",placeholder:"請輸入分類"},null,512),[[o["Q"],n.tempProduct.category]])]),Object(o["h"])("div",Q,[S,Object(o["V"])(Object(o["h"])("input",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return n.tempProduct.unit=t}),type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位"},null,512),[[o["Q"],n.tempProduct.unit]])])]),Object(o["h"])("div",B,[Object(o["h"])("div",D,[F,Object(o["V"])(Object(o["h"])("input",{"onUpdate:modelValue":e[5]||(e[5]=function(t){return n.tempProduct.origin_price=t}),type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價"},null,512),[[o["Q"],n.tempProduct.origin_price]])]),Object(o["h"])("div",I,[J,Object(o["V"])(Object(o["h"])("input",{"onUpdate:modelValue":e[6]||(e[6]=function(t){return n.tempProduct.price=t}),type:"number",class:"form-control",id:"price",placeholder:"請輸入售價"},null,512),[[o["Q"],n.tempProduct.price]])])]),N,Object(o["h"])("div",W,[E,Object(o["V"])(Object(o["h"])("textarea",{"onUpdate:modelValue":e[7]||(e[7]=function(t){return n.tempProduct.description=t}),type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述"},null,512),[[o["Q"],n.tempProduct.description]])]),Object(o["h"])("div",H,[q,Object(o["V"])(Object(o["h"])("textarea",{"onUpdate:modelValue":e[8]||(e[8]=function(t){return n.tempProduct.content=t}),type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容"},null,512),[[o["Q"],n.tempProduct.content]])]),Object(o["h"])("div",A,[Object(o["h"])("div",G,[Object(o["V"])(Object(o["h"])("input",{"onUpdate:modelValue":e[9]||(e[9]=function(t){return n.tempProduct.is_enabled=t}),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o["P"],n.tempProduct.is_enabled]]),K])])])])]),Object(o["h"])("div",R,[T,Object(o["h"])("button",{onClick:e[10]||(e[10]=function(e){return t.$emit("update-product",n.tempProduct)}),type:"button",class:"btn btn-primary"}," 確認 ")])])])],512)}var Y=c("e0ae"),Z={props:{product:{type:Object,default:function(){return{}}}},data:function(){return{modal:{},tempProduct:{}}},watch:{product:function(){this.tempProduct=this.product}},methods:{uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",e);var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("dimcjo6u4","/admin/upload");this.$http.post(o,c).then((function(e){e.data.success&&(t.tempProduct.imageUrl=e.data.imageUrl)}))}},mixins:[Y["a"]]},tt=c("6b0d"),et=c.n(tt);const ct=et()(Z,[["render",X]]);var ot=ct,at=c("6ff1"),nt=c("6407"),lt={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:ot,DelModal:at["a"],Pagination:nt["a"]},inject:["emitter"],methods:{openModal:function(t,e){this.tempProduct=t?{}:Object(m["a"])({},e),this.isNew=t;var c=this.$refs.productModal;c.showModal()},openDelProductModal:function(t){this.tempProduct=Object(m["a"])({},t);var e=this.$refs.delModal;e.showModal()},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("dimcjo6u4","/admin/products?page=").concat(e);this.isLoading=!0,this.$http.get(c).then((function(e){t.isLoading=!1,t.products=e.data.products,t.pagination=e.data.pagination}))},updateProdcut:function(t){var e=this;this.isLoading=!0,this.tempProduct=t;var c="",o="";this.isNew?(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("dimcjo6u4","/admin/product"),o="post"):(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("dimcjo6u4","/admin/product/").concat(t.id),o="put");var a=this.$refs.productModal;this.$http[o](c,{data:this.tempProduct}).then((function(t){console.log(t),e.isLoading=!1,a.hideModal(),t.data.success?(e.getProducts(),e.emitter.emit("push-message",{style:"success",title:"更新成功"})):e.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("，")})}))},delProduct:function(){var t=this;this.isLoading=!0;var e=this.$refs.delModal,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("dimcjo6u4","/admin/product/").concat(this.tempProduct.id);this.$http.delete(c).then((function(c){console.log(c.data),t.isLoading=!1,e.hideModal(),t.getProducts()}))}},created:function(){this.getProducts()}};const it=et()(lt,[["render",h]]);e["default"]=it}}]);
//# sourceMappingURL=chunk-6ae1a5b4.1d0a429e.js.map
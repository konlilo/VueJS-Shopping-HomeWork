(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bec8d34"],{"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),s=n("2d00"),a=o("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,n){"use strict";var r=n("a04b"),o=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,s(0,n)):t[a]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),s=n("e8b5"),a=n("861d"),c=n("7b0b"),i=n("07fa"),u=n("8418"),d=n("65f0"),l=n("1dde"),b=n("b622"),f=n("2d00"),p=b("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",j=f>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),v=l("concat"),O=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:s(t)},w=!j||!v;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,r,o,s,a=c(this),l=d(a,0),b=0;for(e=-1,r=arguments.length;e<r;e++)if(s=-1===e?a:arguments[e],O(s)){if(o=i(s),b+o>h)throw TypeError(m);for(n=0;n<o;n++,b++)n in s&&u(l,b,s[n])}else{if(b>=h)throw TypeError(m);u(l,b++,s)}return l.length=b,l}})},a55b:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),o={class:"container mt-5"},s={class:"col-md-6"},a=Object(r["h"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),c={class:"mb-2"},i=Object(r["h"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),u=Object(r["h"])("span",{style:{color:"blue"}},"可輸入:dimcjo6u4@gmail.com 進行測試",-1),d={class:"mb-2"},l=Object(r["h"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),b=Object(r["h"])("span",{style:{color:"blue"}},"可輸入:a0958762789 進行測試",-1),f=Object(r["h"])("div",{class:"text-end mt-4"},[Object(r["h"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1);function p(t,e,n,p,h,m){var j=Object(r["J"])("Loading");return Object(r["z"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(j,{active:t.isLoading},null,8,["active"]),Object(r["h"])("div",o,[Object(r["h"])("form",{onSubmit:e[2]||(e[2]=Object(r["W"])((function(){return m.signIn&&m.signIn.apply(m,arguments)}),["prevent"])),class:"row justify-content-center"},[Object(r["h"])("div",s,[a,Object(r["h"])("div",c,[i,Object(r["V"])(Object(r["h"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return h.user.username=t}),type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:""},null,512),[[r["Q"],h.user.username]])]),u,Object(r["h"])("div",d,[l,Object(r["V"])(Object(r["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return h.user.password=t}),type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:""},null,512),[[r["Q"],h.user.password]])]),b,f])],32)])],64)}n("99af");var h={data:function(){return{user:{username:"",password:"",isLoading:!1}}},methods:{signIn:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.isLoading=!0,this.$http.post(e,this.user).then((function(e){if(t.isLoading=!1,e.data.success){var n=e.data,r=n.token,o=n.expired;document.cookie="hexToken=".concat(r,";expires=").concat(new Date(o)),t.$router.push("/dashboard/products")}}))}}},m=n("6b0d"),j=n.n(m);const v=j()(h,[["render",p]]);e["default"]=v}}]);
//# sourceMappingURL=chunk-4bec8d34.3c45cbb3.js.map
(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4daf02da":"d5a4c753","chunk-d4ba2326":"55705df2"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-4daf02da":1,"chunk-d4ba2326":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-4daf02da":"5b7979a8","chunk-d4ba2326":"f9cfa073"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],l.parentNode.removeChild(l),n(c)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),o=(n("b0c0"),{token:function(e){return e.user.token},avatar:function(e){return e.user.avatar},name:function(e){return e.user.name}}),c=o,u=(n("d3b7"),n("498a"),n("b775"));function i(e){return Object(u["a"])({url:"/user/login",method:"post",data:e})}function s(e){return Object(u["a"])({url:"/user/info",method:"get",params:{token:e}})}var f=n("5f87"),d=n("a18c"),l=function(){return{token:Object(f["a"])(),name:"",avatar:""}},p=l(),h={RESET_STATE:function(e){Object.assign(e,l())},SET_TOKEN:function(e,t){e.token=t},SET_NAME:function(e,t){e.name=t},SET_AVATAR:function(e,t){e.avatar=t}},m={login:function(e,t){var n=e.commit,r=t.username,a=t.password;return new Promise((function(e,t){i({username:r.trim(),password:a}).then((function(t){var r=t.data;n("SET_TOKEN",r.token),Object(f["c"])(r.token),e()})).catch((function(e){t(e)}))}))},getInfo:function(e){var t=e.commit,n=e.state;return new Promise((function(e,r){s(n.token).then((function(n){var a=n.data;if(!a)return r("Verification failed, please Login again.");var o=a.name,c=a.avatar;t("SET_NAME",o),t("SET_AVATAR",c),e(a)})).catch((function(e){r(e)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e,n){try{Object(f["b"])(),Object(d["b"])(),t("RESET_STATE"),e()}catch(r){n(r)}}))},resetToken:function(e){var t=e.commit;return new Promise((function(e){Object(f["b"])(),t("RESET_STATE"),e()}))}},b={namespaced:!0,state:p,mutations:h,actions:m};r["default"].use(a["a"]);var v=new a["a"].Store({modules:{user:b},getters:c});t["a"]=v},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={name:"App"},u=c,i=(n("034f"),n("2877")),s=Object(i["a"])(u,a,o,!1,null,null,null),f=s.exports,d=n("4360"),l=n("a18c"),p=n("5c96"),h=n.n(p),m=(n("0fae"),n("c975"),n("b0c0"),n("96cf"),n("1da1")),b=n("323e"),v=n.n(b),g=(n("a5d8"),n("5f87"));v.a.configure({showSpinner:!1});var k=["/login"];l["a"].beforeEach(function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(v.a.start(),a=Object(g["a"])(),!a){e.next=26;break}if("/login"!==t.path){e.next=8;break}r({path:"/"}),v.a.done(),e.next=24;break;case 8:if(o=d["a"].getters.name,!o){e.next=13;break}r(),e.next=24;break;case 13:e.prev=13,r(),e.next=24;break;case 17:return e.prev=17,e.t0=e["catch"](13),e.next=21,d["a"].dispatch("user/resetToken");case 21:p["Message"].error(e.t0||"Has Error"),r("/login?redirect=".concat(t.path)),v.a.done();case 24:e.next=27;break;case 26:-1!==k.indexOf(t.path)?r():(r("/login?redirect=".concat(t.path)),v.a.done());case 27:case"end":return e.stop()}}),e,null,[[13,17]])})));return function(t,n,r){return e.apply(this,arguments)}}()),l["a"].afterEach((function(){v.a.done()})),r["default"].config.productionTip=!1,r["default"].use(h.a),new r["default"]({router:l["a"],store:d["a"],render:function(e){return e(f)}}).$mount("#app")},"5f87":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i}));var r=n("a78e"),a=n.n(r),o="token";function c(){return a.a.get(o)}function u(e){return a.a.set(o,e)}function i(){return a.a.remove(o)}},"85ec":function(e,t,n){},a18c:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));n("d3b7");var r=n("2b0e"),a=n("8c4f");r["default"].use(a["a"]);var o=[{path:"/login",component:function(){return n.e("chunk-d4ba2326").then(n.bind(null,"9ed6"))},hidden:!0},{path:"/",component:function(){return n.e("chunk-4daf02da").then(n.bind(null,"9406"))},meta:{title:"主页",icon:"dashboard"},name:"主页"}],c=function(){return new a["a"]({routes:o})},u=c();function i(){var e=c();u.matcher=e.matcher}t["a"]=u},b775:function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("5c96"),c=n("4360"),u=n("5f87"),i=a.a.create({baseURL:"http://123.57.111.195:18082",timeout:5e3});i.interceptors.request.use((function(e){return c["a"].getters.token&&(e.headers["Authorization"]="Bearer ".concat(Object(u["a"])())),e}),(function(e){return console.log(e),Promise.reject(e)})),i.interceptors.response.use((function(e){var t=e.data;return 0!==t.code?Promise.reject(new Error(t.message||"Error")):t}),(function(e){var t=e.response.data;return console.log(t),-2==t.code&&o["MessageBox"].confirm("当前登录状态已经重置，请重新登录","请重新登录",{confirmButtonText:"确认登出",showCancelButton:!1,type:"warning"}).then((function(){c["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(t.msg)})),t["a"]=i}});
//# sourceMappingURL=app.6a8948b9.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4ba2326"],{"0ab9":function(e,t,n){},"9ed6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg"},[n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("登录")])]),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{ref:"username",attrs:{placeholder:"用户名",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px","background-color":"#6991c7",outline:"none"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")]),n("div",{staticClass:"tips"},[n("span",{staticStyle:{"margin-right":"20px"}},[e._v("用户名: editor")]),n("span",[e._v(" 密码: 111111")])])],1)],1)])},o=[];n("c975"),n("498a");function i(e){var t=["admin","editor"];return t.indexOf(e.trim())>=0}var a={name:"Login",data:function(){var e=function(e,t,n){i(t)?n():n(new Error("请输入正确的用户名"))},t=function(e,t,n){t.length<6?n(new Error("密码不可少于6个字符")):n()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))}}},s=a,l=(n("a429"),n("2877")),u=Object(l["a"])(s,r,o,!1,null,"61492f57",null);t["default"]=u.exports},a429:function(e,t,n){"use strict";n("0ab9")}}]);
//# sourceMappingURL=chunk-d4ba2326.55705df2.js.map
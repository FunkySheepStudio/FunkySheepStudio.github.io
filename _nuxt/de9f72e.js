(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{759:function(t,e,o){"use strict";o.r(e);o(11),o(9),o(14),o(16),o(10),o(17);var n=o(2),r=(o(26),o(84),o(120));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{showForm:!1,_id:"",password:"",login:"",showPassword:!1,mode:"Save"}},computed:l({},Object(r.c)("/api/system/users",{users:"find",get:"get"})),mounted:function(){var t=this;localStorage.getItem("_id")||(localStorage.setItem("_id",Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),localStorage.setItem("login",Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),localStorage.setItem("password",Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))),this._id=localStorage.getItem("_id"),this.login=localStorage.getItem("login"),this.password=localStorage.getItem("password"),this._idExist(localStorage.getItem("_id")).then((function(e){e?t.auth():t.create({_id:localStorage.getItem("_id"),login:t.login,password:t.password}).then((function(){t.auth()}))}))},methods:l(l({},Object(r.b)("/api/system/users",{findUsers:"find",create:"create",patch:"patch"})),{},{auth:function(){var t=this;this.$store.getters["auth/isAuthenticated"]||(localStorage.getItem("feathers-jwt")?this.$store.dispatch("auth/authenticate",{accessToken:localStorage.getItem("feathers-jwt"),strategy:"jwt"}).then((function(e){t.showForm=!1})).catch((function(){console.log("Cannot Auth jwt"),console.log(err)})):this.$store.dispatch("auth/authenticate",{login:this.login,password:this.password,strategy:"local"}).then((function(e){localStorage.setItem("_id",e.user._id),t._id=e.user._id,t.showForm=!1})).catch((function(t){console.log("Cannot Auth local"),console.log(t)})))},_idExist:function(t){return this.findUsers({query:{_id:t}}).then((function(t){return 1===t.total}))},loginExist:function(t){return this.findUsers({query:{login:t}}).then((function(t){return 1===t.total}))},setMode:function(t){var e=this;this.loginExist(t).then((function(t){e.mode=t?"Login":"Save"}))},process:function(){var t=this;this.$store.dispatch("auth/logout").then((function(){"Save"===t.mode?t.patch([t._id,{login:t.login,password:t.password}]).then((function(){localStorage.setItem("login",t.login),localStorage.setItem("password",t.password),location.reload()})):(localStorage.setItem("login",t.login),localStorage.setItem("password",t.password),localStorage.removeItem("feathers-jwt"),location.reload())}))}})},h=o(43),f=o(49),w=o.n(f),m=o(614),v=o(634),_=o(633),S=o(745),O=o(234),j=o(740),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("v-btn",{attrs:{fab:"",color:t.$store.getters["auth/isAuthenticated"]?"red":"white",small:"",target:"_blank"},on:{click:function(e){t.showForm=!t.showForm}}},[o("v-icon",{attrs:{large:""}},[t._v("\n      mdi-account\n    ")])],1),t._v(" "),o("v-dialog",{attrs:{value:t.showForm}},[o("v-card",[o("v-card-title",[t._v("\n        User\n      ")]),t._v(" "),o("v-card-text",[t._v("\n        "+t._s(t.$data._id)+"\n        "),o("v-text-field",{attrs:{label:"Login"},on:{input:function(e){return t.setMode(e)}},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}}),t._v(" "),o("v-text-field",{attrs:{label:"Password","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),o("v-btn",{on:{click:function(e){return t.process()}}},[t._v("\n          "+t._s(t.mode)+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VBtn:m.a,VCard:v.a,VCardText:_.b,VCardTitle:_.c,VDialog:S.a,VIcon:O.a,VTextField:j.a})}}]);
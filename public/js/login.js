"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[535],{3744:(e,r)=>{r.Z=(e,r)=>{const t=e.__vccOpts||e;for(const[e,n]of r)t[e]=n;return t}},7824:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var n=t(821),o={class:"vue-template"},c={class:"container"},l={class:"row justify-content-center"},s={class:"col-xs-12 col-sm-12 col-md-8"},i={class:"form-group"},u={class:"form-group"};function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const f={setup:function(){return{formObj:{email:"testuser@yopmail.com",pass:1e3}}},methods:function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},(0,t(3907).nv)(["login"]))};const b=(0,t(3744).Z)(f,[["render",function(e,r,t,a,p,f){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",c,[(0,n._)("div",l,[(0,n._)("div",s,[(0,n._)("form",null,[(0,n._)("div",i,[(0,n.wy)((0,n._)("input",{type:"email","onUpdate:modelValue":r[0]||(r[0]=function(e){return a.formObj.email=e}),placeholder:"Email Address",class:"form-control form-control-lg email-input"},null,512),[[n.nr,a.formObj.email]])]),(0,n._)("div",u,[(0,n.wy)((0,n._)("input",{type:"password","onUpdate:modelValue":r[1]||(r[1]=function(e){return a.formObj.pass=e}),placeholder:"Password",class:"form-control form-control-lg password-input"},null,512),[[n.nr,a.formObj.pass]])]),(0,n._)("button",{type:"button",onClick:r[2]||(r[2]=function(r){return e.login(a.formObj)}),class:"btn btn-dark btn-lg btn-block login-btn"},"Enter")])])])])])}]])}}]);
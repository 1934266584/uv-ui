"use strict";const e=require("vue");require("./iconfont.js");require("./icon.vue_vue_type_style_index_0_lang.js");const s={class:"uv-icon"},i=["xlink:href"],l={name:"UvIcon"},u=Object.assign(l,{props:{name:{type:String},color:{type:String},size:{type:[String,Number],default:"14"},dot:{type:Boolean,default:!1},badge:{type:[String,Number]}},setup(o){const t=o,n=e.computed(()=>`#uv-${t.name}`),c=e.computed(()=>({color:t.color,fontSize:t.size+"px"})),r=e.computed(()=>({"uv-icon-dot":t.dot&&!t.badge}));return(a,d)=>(e.openBlock(),e.createElementBlock("div",s,[(e.openBlock(),e.createElementBlock("svg",{class:"uv-icon-svg",style:e.normalizeStyle(e.unref(c)),"aria-hidden":"true"},[e.createElementVNode("use",{"xlink:href":e.unref(n)},null,8,i)],4)),o.dot?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["uv-icon-info",e.unref(r)])},e.toDisplayString(o.badge),3)):e.createCommentVNode("",!0)]))}});module.exports=u;

"use strict";const e=require("vue"),u=require("../icon/index.js");require("./rate.vue_vue_type_style_index_0_lang.js");const a={name:"UvRate"},i=Object.assign(a,{props:{modelValue:{type:Number},count:{type:Number,default:5},gutter:{type:Number,default:2},readonly:{type:Boolean,default:!1},icon:{type:String,default:"star-fill"},size:{type:[String,Number],default:22},color:{type:String,default:"#ffd21e"},voidColor:{type:String,default:"#c8c9cc"}},emits:["update:modelValue","change"],setup(t,{emit:o}){const r=t,c=l=>{r.readonly||(o("update:modelValue",l),o("change",l))};return(l,d)=>(e.openBlock(),e.createElementBlock("div",{class:"uv-rate",style:e.normalizeStyle({gap:t.gutter+"px"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.count,n=>(e.openBlock(),e.createBlock(e.unref(u),{key:n,onClick:s=>c(n),size:t.size,name:t.icon,color:n<=t.modelValue?t.color:t.voidColor},null,8,["onClick","size","name","color"]))),128))],4))}});module.exports=i;

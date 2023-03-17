"use strict";const e=require("vue"),d=require("../icon/index.js"),r=require("../overlay/index.js");require("./popup.vue_vue_type_style_index_0_lang.js");const p={class:"uv-popup"},f={class:"uv-popup-content"},v={key:0,class:"uv-popup-content-close"},m={class:"uv-popup-content-item"},y={key:1,class:"uv-popup-content-button"},h=["onClick"],g=["onClick"],k={name:"UvPopup"},V=Object.assign(k,{props:{modelValue:{type:Boolean,default:!1},position:{type:String,default:"bottom"},bgColor:{type:String,default:"#fff"},round:{type:Boolean,default:!1},padding:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},clickOverlayClose:{type:Boolean,default:!0},height:{type:String,default:"auto"},action:{type:Boolean,default:!1},close:{type:Boolean,default:!1},leftName:{type:String,default:"\u53D6\u6D88"},rightName:{type:String,default:"\u786E\u5B9A"}},emits:["update:modelValue","cancle","confim","close"],setup(t,{emit:o}){const n=t,l=e.computed(()=>["uv-popup-wrap",n.position?`uv-popup-${n.position}`:"",n.round?`uv-popup-${n.position}-round`:""]),a=()=>{n.clickOverlayClose&&o("update:modelValue",!1)},c=()=>{o("cancle"),o("update:modelValue",!1)},s=()=>{o("confim")},i=()=>{o("close"),o("update:modelValue",!1)};return(u,C)=>(e.openBlock(),e.createElementBlock("div",p,[e.createVNode(e.unref(r),{overlay:t.overlay,show:t.modelValue,onClick:a},null,8,["overlay","show"]),e.createVNode(e.Transition,{name:"uv-popup-slide-"+t.position},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(e.unref(l)),style:e.normalizeStyle({height:t.height,backgroundColor:t.bgColor,padding:t.padding?"10px":"none"})},[e.createElementVNode("div",f,[t.close?(e.openBlock(),e.createElementBlock("div",v,[e.createVNode(e.unref(d),{onClick:i,name:"close",size:"24",color:"#c8c9cc"})])):e.createCommentVNode("",!0),e.createElementVNode("div",m,[e.renderSlot(u.$slots,"default")]),t.action?(e.openBlock(),e.createElementBlock("div",y,[e.createElementVNode("div",{class:"uv-popup-content-button-cancle",onClick:e.withModifiers(c,["stop"])},e.toDisplayString(t.leftName),9,h),e.createElementVNode("div",{class:"uv-popup-content-button-confim",onClick:e.withModifiers(s,["stop"])},e.toDisplayString(t.rightName),9,g)])):e.createCommentVNode("",!0)])],6),[[e.vShow,t.modelValue]])]),_:3},8,["name"])]))}});module.exports=V;

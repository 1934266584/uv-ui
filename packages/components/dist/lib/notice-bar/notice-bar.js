"use strict";const e=require("vue"),l=require("../icon/index.js");require("./notice-bar.vue_vue_type_style_index_0_lang.js");const y={key:0,class:"uv-notice-bar-icon"},h={key:1,class:"uv-notice-bar-content-right"},k={name:"UvNoticeBar"},g=Object.assign(k,{props:{speed:{type:[String,Number],default:60},delay:{type:[String,Number],default:1},scrollable:{type:Boolean,default:!0},text:{type:String},color:{type:String,default:"#ed6a0c"},bgColor:{type:String,default:"#fffbe8"},showLeftIcon:{type:Boolean,default:!0},iconProps:{type:Object},mode:{type:String},rightIconProps:{type:Object}},emits:["click","close","replay"],setup(o,{expose:d,emit:r}){const n=o,a=e.ref(null),i=e.ref(null),t=e.reactive({contentWidth:0,contentTextWidth:0,translateX:0,duration:0,autoScrollTimer:null,firstIn:!0,ms:n.delay?n.delay*1e3:0});e.onMounted(()=>{t.contentWidth=a.value.offsetWidth,t.contentTextWidth=i.value.offsetWidth,c()});const u=()=>{r("replay"),t.translateX=t.contentWidth,t.duration=0,clearTimeout(t.autoScrollTimer),c()},c=()=>{!n.scrollable||t.contentTextWidth<t.contentWidth||(t.autoScrollTimer=setTimeout(()=>{t.duration=t.firstIn?t.contentTextWidth/+n.speed:(t.contentWidth+t.contentTextWidth)/+n.speed,t.translateX=-t.contentTextWidth,t.firstIn=!1},t.ms))},m=()=>{r("click")},f=()=>{r("close")};return e.onBeforeUnmount(()=>{clearTimeout(t.autoScrollTimer)}),d({reset:c}),(s,b)=>(e.openBlock(),e.createElementBlock("div",{class:"uv-notice-bar",style:e.normalizeStyle({backgroundColor:o.bgColor}),onClick:m},[o.showLeftIcon?(e.openBlock(),e.createElementBlock("div",y,[e.renderSlot(s.$slots,"icon",{},()=>[e.createVNode(e.unref(l),e.mergeProps({size:"20",color:"#ed6a0c",name:"notice"},o.iconProps),null,16)])])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:"uv-notice-bar-content",ref_key:"contentRef",ref:a},[e.createElementVNode("div",{class:e.normalizeClass(["uv-notice-bar-content-text",o.scrollable?"":"ellipsis"]),style:e.normalizeStyle({color:o.color,transform:`translateX(${t.translateX}px)`,transitionDuration:t.duration+"s"}),ref_key:"contentTextRef",ref:i,onTransitionend:u},[e.renderSlot(s.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(o.text),1)])],38)],512),o.mode?(e.openBlock(),e.createElementBlock("div",h,[o.mode==="close"?(e.openBlock(),e.createBlock(e.unref(l),e.mergeProps({key:0,size:"18",name:"close",color:"#ed6a0c"},o.rightIconProps,{onClick:f}),null,16)):e.createCommentVNode("",!0),o.mode==="link"?(e.openBlock(),e.createBlock(e.unref(l),e.mergeProps({key:1,size:"18",name:"arrow-right",color:"#ed6a0c"},o.rightIconProps),null,16)):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0)],4))}});module.exports=g;

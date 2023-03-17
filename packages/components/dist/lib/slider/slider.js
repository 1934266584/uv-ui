"use strict";const e=require("vue"),y=require("../packages/hooks/useTouch.js");require("./slider.vue_vue_type_style_index_0_lang.js");const p=["onTouchmove"],S={name:"UvSlider"},V=Object.assign(S,{props:{modelValue:{type:Number,default:0},inactiveColor:{type:String,default:"#ebedf0"},activeColor:{type:String,default:"#1989fa"},barHeight:{type:[String,Number],default:3},buttonSize:{type:[String,Number],default:24},disabled:{type:Boolean,default:!1},min:{type:Number,default:0},max:{type:Number,default:100}},emits:["update:modelValue","change","drag-start"],setup(t,{emit:r}){const l=t,u=y.useTouch(),{props:d,validateBlurOrChange:c}=e.inject("form-item",{}),n=e.ref(null),f=e.ref(null),i=e.ref("");e.onMounted(()=>{i.value=n.value.offsetWidth});function h(a){u.start(a),r("drag-start",a)}function m(a){if(l.disabled)return;u.move(a);const{deltaX:s,startX:b}=u,g=Number(b.value+s.value);let o=parseInt(g/i.value*100);o<l.min?o=l.min:o>l.max&&(o=l.max),r("update:modelValue",o)}function v(){r("change",l.modelValue),d&&c("change")}return(a,s)=>(e.openBlock(),e.createElementBlock("div",{class:"uv-slider",style:e.normalizeStyle({backgroundColor:t.inactiveColor,height:t.barHeight+"px"}),ref_key:"sliderRef",ref:n},[e.createElementVNode("div",{style:e.normalizeStyle({width:`${t.modelValue}%`,backgroundColor:t.activeColor,height:t.barHeight+"px"}),class:e.normalizeClass(["uv-slider-value",t.disabled?"uv-slider-value-disabled":""])},[e.createElementVNode("div",{class:"uv-slider-circle",ref_key:"sliderValueRef",ref:f,onTouchstart:h,onTouchmove:e.withModifiers(m,["stop"]),onTouchend:v},[e.renderSlot(a.$slots,"button",{},()=>[e.createElementVNode("div",{class:"uv-slider-circle-content",style:e.normalizeStyle({width:t.buttonSize+"px",height:t.buttonSize+"px"})},null,4)])],40,p)],6)],4))}});module.exports=V;

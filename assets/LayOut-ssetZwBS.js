import{c as w,n as T,t as k,H as y,B as L,I,g as D,w as A,m as z,a as H,e as M,b as F,i as j}from"./index-DuD66SyP.js";import{r as C,o as K,n as S,w as U,c as n,d as R,g as W,a as Y,m as Z,b as q,e as g,f as G,F as J,h as Q,i as B,j as X}from"./index-LPLmbtVP.js";import{u as ee,a as te,b as ae}from"./index.esm-pdHL_lvx.js";import{o as ne,w as oe,a as re,c as ie}from"./on-popup-reopen-DXYnLKja.js";import{r as le,u as ce}from"./use-route-CEPoqpID.js";const se=(e,l)=>{const a=C(),t=()=>{a.value=ee(e).height};return K(()=>{S(t);for(let c=1;c<=3;c++)setTimeout(t,100*c)}),ne(()=>S(t)),U([oe,re],t),a};function O(e,l){const a=se(e);return t=>n("div",{class:l("placeholder"),style:{height:a.value?`${a.value}px`:void 0}},[t()])}const[de,u]=w("nav-bar"),ue={title:String,fixed:Boolean,zIndex:T,border:k,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:k};var fe=R({name:de,props:ue,emits:["clickLeft","clickRight"],setup(e,{emit:l,slots:a}){const t=C(),c=O(t,u),s=o=>{e.leftDisabled||l("clickLeft",o)},f=o=>{e.rightDisabled||l("clickRight",o)},r=()=>a.left?a.left():[e.leftArrow&&n(I,{class:u("arrow"),name:"arrow-left"},null),e.leftText&&n("span",{class:u("text")},[e.leftText])],h=()=>a.right?a.right():n("span",{class:u("text")},[e.rightText]),i=()=>{const{title:o,fixed:d,border:v,zIndex:x}=e,b=D(x),m=e.leftArrow||e.leftText||a.left,_=e.rightText||a.right;return n("div",{ref:t,style:b,class:[u({fixed:d}),{[L]:v,"van-safe-area-top":e.safeAreaInsetTop}]},[n("div",{class:u("content")},[m&&n("div",{class:[u("left",{disabled:e.leftDisabled}),e.clickable&&!e.leftDisabled?y:""],onClick:s},[r()]),n("div",{class:[u("title"),"van-ellipsis"]},[a.title?a.title():o]),_&&n("div",{class:[u("right",{disabled:e.rightDisabled}),e.clickable&&!e.rightDisabled?y:""],onClick:f},[h()])])])};return()=>e.fixed&&e.placeholder?c(i):i()}});const me=A(fe),[$,V]=w("tabbar"),ve={route:Boolean,fixed:k,border:k,zIndex:T,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:z(0),safeAreaInsetBottom:{type:Boolean,default:null}},p=Symbol($);var be=R({name:$,props:ve,emits:["change","update:modelValue"],setup(e,{emit:l,slots:a}){const t=C(),{linkChildren:c}=te(p),s=O(t,V),f=()=>{var i;return(i=e.safeAreaInsetBottom)!=null?i:e.fixed},r=()=>{var i;const{fixed:o,zIndex:d,border:v}=e;return n("div",{ref:t,role:"tablist",style:D(d),class:[V({fixed:o}),{[H]:v,"van-safe-area-bottom":f()}]},[(i=a.default)==null?void 0:i.call(a)])};return c({props:e,setActive:(i,o)=>{ie(e.beforeChange,{args:[i],done(){l("update:modelValue",i),l("change",i),o()}})}}),()=>e.fixed&&e.placeholder?s(r):r()}});const he=A(be),[ge,P]=w("tabbar-item"),xe=M({},le,{dot:Boolean,icon:String,name:T,badge:T,badgeProps:Object,iconPrefix:String});var _e=R({name:ge,props:xe,emits:["click"],setup(e,{emit:l,slots:a}){const t=ce(),c=W().proxy,{parent:s,index:f}=ae(p);if(!s)return;const r=Y(()=>{var o;const{route:d,modelValue:v}=s.props;if(d&&"$route"in c){const{$route:x}=c,{to:b}=e,m=j(b)?b:{path:b};return!!x.matched.find(_=>{const N="path"in m&&m.path===_.path,E="name"in m&&m.name===_.name;return N||E})}return((o=e.name)!=null?o:f.value)===v}),h=o=>{var d;r.value||s.setActive((d=e.name)!=null?d:f.value,t),l("click",o)},i=()=>{if(a.icon)return a.icon({active:r.value});if(e.icon)return n(I,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var o;const{dot:d,badge:v}=e,{activeColor:x,inactiveColor:b}=s.props,m=r.value?x:b;return n("div",{role:"tab",class:P({active:r.value}),style:{color:m},tabindex:0,"aria-selected":r.value,onClick:h},[n(F,Z({dot:d,class:P("icon"),content:v},e.badgeProps),{default:i}),n("div",{class:P("text")},[(o=a.default)==null?void 0:o.call(a,{active:r.value})])])}}});const Be=A(_e),Te={style:{height:"3rem"}},Ae={__name:"LayOut",setup(e){const l=C();return(a,t)=>{const c=I,s=me,f=X("RouterView"),r=Be,h=he;return Q(),q(J,null,[n(s,{title:"厂家名"},{right:g(()=>[n(c,{name:"search",size:"18"})]),_:1}),n(f),G("div",Te,[n(h,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=i=>l.value=i),"active-color":"#ee0a24"},{default:g(()=>[n(r,{icon:"home-o",to:"index"},{default:g(()=>t[1]||(t[1]=[B("首页")])),_:1}),n(r,{icon:"search",to:"category"},{default:g(()=>t[2]||(t[2]=[B("分类")])),_:1}),n(r,{icon:"friends-o"},{default:g(()=>t[3]||(t[3]=[B("标签")])),_:1}),n(r,{icon:"setting-o"},{default:g(()=>t[4]||(t[4]=[B("标签")])),_:1})]),_:1},8,["modelValue"])])],64)}}};export{Ae as default};

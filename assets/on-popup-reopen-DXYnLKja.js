import{f}from"./index.esm-pdHL_lvx.js";import{s as l,v as p,x as r}from"./index-DuD66SyP.js";import{q as u,E as c,w}from"./index-LPLmbtVP.js";l();const d=o=>o.stopPropagation();function y(o,t){(typeof o.cancelable!="boolean"||o.cancelable)&&o.preventDefault(),t&&d(o)}function S(o){const t=u(o);if(!t)return!1;const i=window.getComputedStyle(t),s=i.display==="none",n=t.offsetParent===null&&i.position!=="fixed";return s||n}const{width:b,height:x}=f();function E(o,{args:t=[],done:i,canceled:s,error:n}){if(o){const e=o.apply(null,t);p(e)?e.then(a=>{a?i():s&&s()}).catch(n||r):e?i():s&&s()}else i()}const h=Symbol();function H(o){const t=c(h,null);t&&w(t,i=>{i&&o()})}export{h as P,x as a,E as c,S as i,H as o,y as p,b as w};

import{e as ue,c as V,l as Fe,n as H,d as G,h as Ke,w as J,t as _,u as re,T as Se,g as Ve,f as ke,H as ze,I as _e,m as K,o as L,p as ie,L as Ue,q as pe,r as Ge}from"./index-DuD66SyP.js";import{I as $e}from"./index-CmnJBZW_.js";import{o as qe,g as Je,c as ve,a as Qe,d as et,e as se,b as tt,r as at,u as Re}from"./index.esm-pdHL_lvx.js";import{g as De,c as m,d as U,a as z,r as T,t as ye,x as Ye,w as D,T as Ee,p as Be,v as Ae,n as de,o as fe,y as Xe,z as ot,A as nt,F as Me,m as we,B as me,b as lt,f as it,e as st,h as ct,i as rt,D as ut}from"./index-LPLmbtVP.js";import{p as q,P as vt,c as Ze,w as Le,a as He,o as dt,i as Ce}from"./on-popup-reopen-DXYnLKja.js";function ne(e){const o=De();o&&ue(o.proxy,e)}let ft=2e3;const mt=()=>++ft,[gt,oe]=V("loading"),ht=Array(12).fill(null).map((e,o)=>m("i",{class:oe("line",String(o+1))},null)),wt=m("svg",{class:oe("circular"),viewBox:"25 25 50 50"},[m("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),yt={size:H,type:G("circular"),color:String,vertical:Boolean,textSize:H,textColor:String};var It=U({name:gt,props:yt,setup(e,{slots:o}){const c=z(()=>ue({color:e.color},Fe(e.size))),t=()=>{const a=e.type==="spinner"?ht:wt;return m("span",{class:oe("spinner",e.type),style:c.value},[o.icon?o.icon():a])},s=()=>{var a;if(o.default)return m("span",{class:oe("text"),style:{fontSize:Ke(e.textSize),color:(a=e.textColor)!=null?a:e.color}},[o.default()])};return()=>{const{type:a,vertical:r}=e;return m("div",{class:oe([a,{vertical:r}]),"aria-live":"polite","aria-busy":!0},[t(),s()])}}});const St=J(It),Ct={show:Boolean,zIndex:H,overlay:_,duration:H,teleport:[String,Object],lockScroll:_,lazyRender:_,beforeClose:Function,overlayStyle:Object,overlayClass:re,transitionAppear:Boolean,closeOnClickOverlay:_};function xt(e,o){return e>o?"horizontal":o>e?"vertical":""}function Ie(){const e=T(0),o=T(0),c=T(0),t=T(0),s=T(0),a=T(0),r=T(""),u=T(!0),I=()=>r.value==="vertical",g=()=>r.value==="horizontal",n=()=>{c.value=0,t.value=0,s.value=0,a.value=0,r.value="",u.value=!0};return{move:S=>{const O=S.touches[0];c.value=(O.clientX<0?0:O.clientX)-e.value,t.value=O.clientY-o.value,s.value=Math.abs(c.value),a.value=Math.abs(t.value);const $=10;(!r.value||s.value<$&&a.value<$)&&(r.value=xt(s.value,a.value)),u.value&&(s.value>Se||a.value>Se)&&(u.value=!1)},start:S=>{n(),e.value=S.touches[0].clientX,o.value=S.touches[0].clientY},reset:n,startX:e,startY:o,deltaX:c,deltaY:t,offsetX:s,offsetY:a,direction:r,isVertical:I,isHorizontal:g,isTap:u}}let ae=0;const xe="van-overflow-hidden";function bt(e,o){const c=Ie(),t="01",s="10",a=n=>{c.move(n);const d=c.deltaY.value>0?s:t,y=Je(n.target,e.value),{scrollHeight:S,offsetHeight:O,scrollTop:$}=y;let x="11";$===0?x=O>=S?"00":"01":$+O>=S&&(x="10"),x!=="11"&&c.isVertical()&&!(parseInt(x,2)&parseInt(d,2))&&q(n,!0)},r=()=>{document.addEventListener("touchstart",c.start),document.addEventListener("touchmove",a,{passive:!1}),ae||document.body.classList.add(xe),ae++},u=()=>{ae&&(document.removeEventListener("touchstart",c.start),document.removeEventListener("touchmove",a),ae--,ae||document.body.classList.remove(xe))},I=()=>o()&&r(),g=()=>o()&&u();qe(I),ye(g),Ye(g),D(o,n=>{n?r():u()})}function Ne(e){const o=T(!1);return D(e,c=>{c&&(o.value=c)},{immediate:!0}),c=>()=>o.value?c():null}const be=()=>{var e;const{scopeId:o}=((e=De())==null?void 0:e.vnode)||{};return o?{[o]:""}:null},[Pt,Tt]=V("overlay"),Ot={show:Boolean,zIndex:H,duration:H,className:re,lockScroll:_,lazyRender:_,customStyle:Object};var kt=U({name:Pt,props:Ot,setup(e,{slots:o}){const c=T(),t=Ne(()=>e.show||!e.lazyRender),s=r=>{e.lockScroll&&q(r,!0)},a=t(()=>{var r;const u=ue(Ve(e.zIndex),e.customStyle);return ke(e.duration)&&(u.animationDuration=`${e.duration}s`),Be(m("div",{ref:c,style:u,class:[Tt(),e.className]},[(r=o.default)==null?void 0:r.call(o)]),[[Ae,e.show]])});return ve("touchmove",s,{target:c}),()=>m(Ee,{name:"van-fade",appear:!0},{default:a})}});const zt=J(kt),_t=ue({},Ct,{round:Boolean,position:G("center"),closeIcon:G("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:G("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[$t,Pe]=V("popup");var Rt=U({name:$t,inheritAttrs:!1,props:_t,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:o,attrs:c,slots:t}){let s,a;const r=T(),u=T(),I=Ne(()=>e.show||!e.lazyRender),g=z(()=>{const w={zIndex:r.value};if(ke(e.duration)){const Y=e.position==="center"?"animationDuration":"transitionDuration";w[Y]=`${e.duration}s`}return w}),n=()=>{s||(s=!0,r.value=e.zIndex!==void 0?+e.zIndex:mt(),o("open"))},d=()=>{s&&Ze(e.beforeClose,{done(){s=!1,o("close"),o("update:show",!1)}})},y=w=>{o("clickOverlay",w),e.closeOnClickOverlay&&d()},S=()=>{if(e.overlay)return m(zt,we({show:e.show,class:e.overlayClass,zIndex:r.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},be(),{onClick:y}),{default:t["overlay-content"]})},O=w=>{o("clickCloseIcon",w),d()},$=()=>{if(e.closeable)return m(_e,{role:"button",tabindex:0,name:e.closeIcon,class:[Pe("close-icon",e.closeIconPosition),ze],classPrefix:e.iconPrefix,onClick:O},null)};let x;const X=()=>{x&&clearTimeout(x),x=setTimeout(()=>{o("opened")})},M=()=>o("closed"),h=w=>o("keydown",w),R=I(()=>{var w;const{round:Y,position:Z,safeAreaInsetTop:W,safeAreaInsetBottom:N}=e;return Be(m("div",we({ref:u,style:g.value,role:"dialog",tabindex:0,class:[Pe({round:Y,[Z]:Z}),{"van-safe-area-top":W,"van-safe-area-bottom":N}],onKeydown:h},c,be()),[(w=t.default)==null?void 0:w.call(t),$()]),[[Ae,e.show]])}),b=()=>{const{position:w,transition:Y,transitionAppear:Z}=e,W=w==="center"?"van-fade":`van-popup-slide-${w}`;return m(Ee,{name:Y||W,appear:Z,onAfterEnter:X,onAfterLeave:M},{default:R})};return D(()=>e.show,w=>{w&&!s&&(n(),c.tabindex===0&&de(()=>{var Y;(Y=u.value)==null||Y.focus()})),!w&&s&&(s=!1,o("close"))}),ne({popupRef:u}),bt(u,()=>e.show&&e.lockScroll),ve("popstate",()=>{e.closeOnPopstate&&(d(),a=!1)}),fe(()=>{e.show&&n()}),Xe(()=>{a&&(o("update:show",!0),a=!1)}),ye(()=>{e.show&&e.teleport&&(d(),a=!0)}),ot(vt,()=>e.show),()=>e.teleport?m(nt,{to:e.teleport},{default:()=>[S(),b()]}):m(Me,null,[S(),b()])}});const Dt=J(Rt),[We,ce]=V("swipe"),Yt={loop:_,width:H,height:H,vertical:Boolean,autoplay:K(0),duration:K(500),touchable:_,lazyRender:Boolean,initialSwipe:K(0),indicatorColor:String,showIndicators:_,stopPropagation:_},je=Symbol(We);var Et=U({name:We,props:Yt,emits:["change","dragStart","dragEnd"],setup(e,{emit:o,slots:c}){const t=T(),s=T(),a=me({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let r=!1;const u=Ie(),{children:I,linkChildren:g}=Qe(je),n=z(()=>I.length),d=z(()=>a[e.vertical?"height":"width"]),y=z(()=>e.vertical?u.deltaY.value:u.deltaX.value),S=z(()=>a.rect?(e.vertical?a.rect.height:a.rect.width)-d.value*n.value:0),O=z(()=>d.value?Math.ceil(Math.abs(S.value)/d.value):n.value),$=z(()=>n.value*d.value),x=z(()=>(a.active+n.value)%n.value),X=z(()=>{const l=e.vertical?"vertical":"horizontal";return u.direction.value===l}),M=z(()=>{const l={transitionDuration:`${a.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${+a.offset.toFixed(2)}px)`};if(d.value){const C=e.vertical?"height":"width",P=e.vertical?"width":"height";l[C]=`${$.value}px`,l[P]=e[P]?`${e[P]}px`:""}return l}),h=l=>{const{active:C}=a;return l?e.loop?L(C+l,-1,n.value):L(C+l,0,O.value):C},R=(l,C=0)=>{let P=l*d.value;e.loop||(P=Math.min(P,-S.value));let A=C-P;return e.loop||(A=L(A,S.value,0)),A},b=({pace:l=0,offset:C=0,emitChange:P})=>{if(n.value<=1)return;const{active:A}=a,B=h(l),te=R(B,C);if(e.loop){if(I[0]&&te!==S.value){const ge=te<S.value;I[0].setOffset(ge?$.value:0)}if(I[n.value-1]&&te!==0){const ge=te>0;I[n.value-1].setOffset(ge?-$.value:0)}}a.active=B,a.offset=te,P&&B!==A&&o("change",x.value)},w=()=>{a.swiping=!0,a.active<=-1?b({pace:n.value}):a.active>=n.value&&b({pace:-n.value})},Y=()=>{w(),u.reset(),se(()=>{a.swiping=!1,b({pace:-1,emitChange:!0})})},Z=()=>{w(),u.reset(),se(()=>{a.swiping=!1,b({pace:1,emitChange:!0})})};let W;const N=()=>clearTimeout(W),j=()=>{N(),+e.autoplay>0&&n.value>1&&(W=setTimeout(()=>{Z(),j()},+e.autoplay))},F=(l=+e.initialSwipe)=>{if(!t.value)return;const C=()=>{var P,A;if(!Ce(t)){const B={width:t.value.offsetWidth,height:t.value.offsetHeight};a.rect=B,a.width=+((P=e.width)!=null?P:B.width),a.height=+((A=e.height)!=null?A:B.height)}n.value&&(l=Math.min(n.value-1,l),l===-1&&(l=n.value-1)),a.active=l,a.swiping=!0,a.offset=R(l),I.forEach(B=>{B.setOffset(0)}),j()};Ce(t)?de().then(C):C()},Q=()=>F(a.active);let ee;const le=l=>{!e.touchable||l.touches.length>1||(u.start(l),r=!1,ee=Date.now(),N(),w())},i=l=>{e.touchable&&a.swiping&&(u.move(l),X.value&&(!e.loop&&(a.active===0&&y.value>0||a.active===n.value-1&&y.value<0)||(q(l,e.stopPropagation),b({offset:y.value}),r||(o("dragStart",{index:x.value}),r=!0))))},v=()=>{if(!e.touchable||!a.swiping)return;const l=Date.now()-ee,C=y.value/l;if((Math.abs(C)>.25||Math.abs(y.value)>d.value/2)&&X.value){const A=e.vertical?u.offsetY.value:u.offsetX.value;let B=0;e.loop?B=A>0?y.value>0?-1:1:0:B=-Math[y.value>0?"ceil":"floor"](y.value/d.value),b({pace:B,emitChange:!0})}else y.value&&b({pace:0});r=!1,a.swiping=!1,o("dragEnd",{index:x.value}),j()},f=(l,C={})=>{w(),u.reset(),se(()=>{let P;e.loop&&l===n.value?P=a.active===0?0:l:P=l%n.value,C.immediate?se(()=>{a.swiping=!1}):a.swiping=!1,b({pace:P-a.active,emitChange:!0})})},k=(l,C)=>{const P=C===x.value,A=P?{backgroundColor:e.indicatorColor}:void 0;return m("i",{style:A,class:ce("indicator",{active:P})},null)},E=()=>{if(c.indicator)return c.indicator({active:x.value,total:n.value});if(e.showIndicators&&n.value>1)return m("div",{class:ce("indicators",{vertical:e.vertical})},[Array(n.value).fill("").map(k)])};return ne({prev:Y,next:Z,state:a,resize:Q,swipeTo:f}),g({size:d,props:e,count:n,activeIndicator:x}),D(()=>e.initialSwipe,l=>F(+l)),D(n,()=>F(a.active)),D(()=>e.autoplay,j),D([Le,He,()=>e.width,()=>e.height],Q),D(et(),l=>{l==="visible"?j():N()}),fe(F),Xe(()=>F(a.active)),dt(()=>F(a.active)),ye(N),Ye(N),ve("touchmove",i,{target:s}),()=>{var l;return m("div",{ref:t,class:ce()},[m("div",{ref:s,style:M.value,class:ce("track",{vertical:e.vertical}),onTouchstartPassive:le,onTouchend:v,onTouchcancel:v},[(l=c.default)==null?void 0:l.call(c)]),E()])}}});const Bt=J(Et),[At,Xt]=V("swipe-item");var Mt=U({name:At,setup(e,{slots:o}){let c;const t=me({offset:0,inited:!1,mounted:!1}),{parent:s,index:a}=tt(je);if(!s)return;const r=z(()=>{const g={},{vertical:n}=s.props;return s.size.value&&(g[n?"height":"width"]=`${s.size.value}px`),t.offset&&(g.transform=`translate${n?"Y":"X"}(${t.offset}px)`),g}),u=z(()=>{const{loop:g,lazyRender:n}=s.props;if(!n||c)return!0;if(!t.mounted)return!1;const d=s.activeIndicator.value,y=s.count.value-1,S=d===0&&g?y:d-1,O=d===y&&g?0:d+1;return c=a.value===d||a.value===S||a.value===O,c}),I=g=>{t.offset=g};return fe(()=>{de(()=>{t.mounted=!0})}),ne({setOffset:I}),()=>{var g;return m("div",{class:Xt(),style:r.value},[u.value?(g=o.default)==null?void 0:g.call(o):null])}}});const Zt=J(Mt),Te=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),Lt=e=>({x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}),he=V("image-preview")[1],Oe=2.6,Ht={src:String,show:Boolean,active:Number,minZoom:ie(H),maxZoom:ie(H),rootWidth:ie(Number),rootHeight:ie(Number),disableZoom:Boolean,doubleScale:Boolean,closeOnClickImage:Boolean,closeOnClickOverlay:Boolean,vertical:Boolean};var Nt=U({props:Ht,emits:["scale","close","longPress"],setup(e,{emit:o,slots:c}){const t=me({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,initializing:!1,imageRatio:0}),s=Ie(),a=T(),r=T(),u=T(!1),I=T(!1);let g=0;const n=z(()=>{const{scale:i,moveX:v,moveY:f,moving:k,zooming:E,initializing:l}=t,C={transitionDuration:E||k||l?"0s":".3s"};return(i!==1||I.value)&&(C.transform=`matrix(${i}, 0, 0, ${i}, ${v}, ${f})`),C}),d=z(()=>{if(t.imageRatio){const{rootWidth:i,rootHeight:v}=e,f=u.value?v/t.imageRatio:i;return Math.max(0,(t.scale*f-i)/2)}return 0}),y=z(()=>{if(t.imageRatio){const{rootWidth:i,rootHeight:v}=e,f=u.value?v:i*t.imageRatio;return Math.max(0,(t.scale*f-v)/2)}return 0}),S=(i,v)=>{var f;if(i=L(i,+e.minZoom,+e.maxZoom+1),i!==t.scale){const k=i/t.scale;if(t.scale=i,v){const E=Re((f=a.value)==null?void 0:f.$el),l={x:E.width*.5,y:E.height*.5},C=t.moveX-(v.x-E.left-l.x)*(k-1),P=t.moveY-(v.y-E.top-l.y)*(k-1);t.moveX=L(C,-d.value,d.value),t.moveY=L(P,-y.value,y.value)}else t.moveX=0,t.moveY=I.value?g:0;o("scale",{scale:i,index:e.active})}},O=()=>{S(1)},$=()=>{const i=t.scale>1?1:2;S(i,i===2||I.value?{x:s.startX.value,y:s.startY.value}:void 0)};let x,X,M,h,R,b,w,Y,Z=!1;const W=i=>{const{touches:v}=i;if(x=v.length,x===2&&e.disableZoom)return;const{offsetX:f}=s;s.start(i),X=t.moveX,M=t.moveY,Y=Date.now(),Z=!1,t.moving=x===1&&(t.scale!==1||I.value),t.zooming=x===2&&!f.value,t.zooming&&(h=t.scale,R=Te(v))},N=i=>{const{touches:v}=i;if(s.move(i),t.moving){const{deltaX:f,deltaY:k}=s,E=f.value+X,l=k.value+M;if((e.vertical?s.isVertical()&&Math.abs(l)>y.value:s.isHorizontal()&&Math.abs(E)>d.value)&&!Z){t.moving=!1;return}Z=!0,q(i,!0),t.moveX=L(E,-d.value,d.value),t.moveY=L(l,-y.value,y.value)}if(t.zooming&&(q(i,!0),v.length===2)){const f=Te(v),k=h*f/R;b=Lt(v),S(k,b)}},j=i=>{var v;const f=(v=r.value)==null?void 0:v.$el;if(!f)return;const k=f.firstElementChild,E=i.target===f,l=k==null?void 0:k.contains(i.target);!e.closeOnClickImage&&l||!e.closeOnClickOverlay&&E||o("close")},F=i=>{if(x>1)return;const v=Date.now()-Y,f=250;s.isTap.value&&(v<f?e.doubleScale?w?(clearTimeout(w),w=null,$()):w=setTimeout(()=>{j(i),w=null},f):j(i):v>Ue&&o("longPress"))},Q=i=>{let v=!1;if((t.moving||t.zooming)&&(v=!0,t.moving&&X===t.moveX&&M===t.moveY&&(v=!1),!i.touches.length)){t.zooming&&(t.moveX=L(t.moveX,-d.value,d.value),t.moveY=L(t.moveY,-y.value,y.value),t.zooming=!1),t.moving=!1,X=0,M=0,h=1,t.scale<1&&O();const f=+e.maxZoom;t.scale>f&&S(f,b)}q(i,v),F(i),s.reset()},ee=()=>{const{rootWidth:i,rootHeight:v}=e,f=v/i,{imageRatio:k}=t;u.value=t.imageRatio>f&&k<Oe,I.value=t.imageRatio>f&&k>=Oe,I.value&&(g=(k*i-v)/2,t.moveY=g,t.initializing=!0,at(()=>{t.initializing=!1})),O()},le=i=>{const{naturalWidth:v,naturalHeight:f}=i.target;t.imageRatio=f/v,ee()};return D(()=>e.active,O),D(()=>e.show,i=>{i||O()}),D(()=>[e.rootWidth,e.rootHeight],ee),ve("touchmove",N,{target:z(()=>{var i;return(i=r.value)==null?void 0:i.$el})}),ne({resetScale:O}),()=>{const i={loading:()=>m(St,{type:"spinner"},null)};return m(Zt,{ref:r,class:he("swipe-item"),onTouchstartPassive:W,onTouchend:Q,onTouchcancel:Q},{default:()=>[c.image?m("div",{class:he("image-wrap")},[c.image({src:e.src,onLoad:le,style:n.value})]):m($e,{ref:a,src:e.src,fit:"contain",class:he("image",{vertical:u.value}),style:n.value,onLoad:le},i)]})}}});const[Wt,p]=V("image-preview"),jt=["show","teleport","transition","overlayStyle","closeOnPopstate"],Ft={show:Boolean,loop:_,images:Ge(),minZoom:K(1/3),maxZoom:K(3),overlay:_,vertical:Boolean,closeable:Boolean,showIndex:_,className:re,closeIcon:G("clear"),transition:String,beforeClose:Function,doubleScale:_,overlayClass:re,overlayStyle:Object,swipeDuration:K(300),startPosition:K(0),showIndicators:Boolean,closeOnPopstate:_,closeOnClickImage:_,closeOnClickOverlay:_,closeIconPosition:G("top-right"),teleport:[String,Object]};var Kt=U({name:Wt,props:Ft,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:o,slots:c}){const t=T(),s=T(),a=me({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),r=()=>{if(t.value){const h=Re(t.value.$el);a.rootWidth=h.width,a.rootHeight=h.height,t.value.resize()}},u=h=>o("scale",h),I=h=>o("update:show",h),g=()=>{Ze(e.beforeClose,{args:[a.active],done:()=>I(!1)})},n=h=>{h!==a.active&&(a.active=h,o("change",h))},d=()=>{if(e.showIndex)return m("div",{class:p("index")},[c.index?c.index({index:a.active}):`${a.active+1} / ${e.images.length}`])},y=()=>{if(c.cover)return m("div",{class:p("cover")},[c.cover()])},S=()=>{a.disableZoom=!0},O=()=>{a.disableZoom=!1},$=()=>m(Bt,{ref:t,lazyRender:!0,loop:e.loop,class:p("swipe"),vertical:e.vertical,duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:n,onDragEnd:O,onDragStart:S},{default:()=>[e.images.map((h,R)=>m(Nt,{ref:b=>{R===a.active&&(s.value=b)},src:h,show:e.show,active:a.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:a.rootWidth,rootHeight:a.rootHeight,disableZoom:a.disableZoom,doubleScale:e.doubleScale,closeOnClickImage:e.closeOnClickImage,closeOnClickOverlay:e.closeOnClickOverlay,vertical:e.vertical,onScale:u,onClose:g,onLongPress:()=>o("longPress",{index:R})},{image:c.image}))]}),x=()=>{if(e.closeable)return m(_e,{role:"button",name:e.closeIcon,class:[p("close-icon",e.closeIconPosition),ze],onClick:g},null)},X=()=>o("closed"),M=(h,R)=>{var b;return(b=t.value)==null?void 0:b.swipeTo(h,R)};return ne({resetScale:()=>{var h;(h=s.value)==null||h.resetScale()},swipeTo:M}),fe(r),D([Le,He],r),D(()=>e.startPosition,h=>n(+h)),D(()=>e.show,h=>{const{images:R,startPosition:b}=e;h?(n(+b),de(()=>{r(),M(+b,{immediate:!0})})):o("close",{index:a.active,url:R[a.active]})}),()=>m(Dt,we({class:[p(),e.className],overlayClass:[p("overlay"),e.overlayClass],onClosed:X,"onUpdate:show":I},pe(e,jt)),{default:()=>[x(),$(),d(),y()]})}});const Vt=J(Kt),Qt={__name:"ItemDetail",setup(e){const o=T(!1),c=T(0),t=["https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"],s=r=>{c.value=r},a=()=>{o.value=!o.value};return(r,u)=>{const I=$e,g=Vt;return ct(),lt(Me,null,[it("div",{onClick:u[0]||(u[0]=(...n)=>r.showimage&&r.showimage(...n))},"商品图片预览(点击可以放大)"),m(I,{fit:"contain",src:"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",onClick:a}),m(g,{show:o.value,"onUpdate:show":u[1]||(u[1]=n=>o.value=n),images:t,onChange:s},{index:st(()=>[rt("第"+ut(c.value+1)+"页",1)]),_:1},8,["show"])],64)}}};export{Qt as default};

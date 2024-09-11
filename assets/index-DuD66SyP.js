import{r as w,B as I,d as O,a as _,c as p,E as j,m as N}from"./index-LPLmbtVP.js";function at(){}const ot=Object.assign,k=typeof window<"u",h=t=>t!==null&&typeof t=="object",l=t=>t!=null,B=t=>typeof t=="function",rt=t=>h(t)&&B(t.then)&&B(t.catch),x=t=>typeof t=="number"||/^\d+(\.\d+)?$/.test(t),ct=()=>k?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function A(t,e){const n=e.split(".");let u=t;return n.forEach(o=>{var c;u=h(u)&&(c=u[o])!=null?c:""}),u}function it(t,e,n){return e.reduce((u,o)=>(u[o]=t[o],u),{})}const dt=null,E=[Number,String],M={type:Boolean,default:!0},ft=t=>({type:t,required:!0}),lt=()=>({type:Array,default:()=>[]}),Et=t=>({type:E,default:t}),y=t=>({type:String,default:t});function i(t){if(l(t))return x(t)?`${t}px`:String(t)}function gt(t){if(l(t)){if(Array.isArray(t))return{width:i(t[0]),height:i(t[1])};const e=i(t);return{width:e,height:e}}}function mt(t){const e={};return t!==void 0&&(e.zIndex=+t),e}const L=/-(\w)/g,S=t=>t.replace(L,(e,n)=>n.toUpperCase()),pt=(t,e,n)=>Math.min(Math.max(t,e),n),{hasOwnProperty:z}=Object.prototype;function q(t,e,n){const u=e[n];l(u)&&(!z.call(t,n)||!h(u)?t[n]=u:t[n]=T(Object(t[n]),u))}function T(t,e){return Object.keys(e).forEach(n=>{q(t,e,n)}),t}var K={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(t,e)=>`${t}年${e}月`,rangePrompt:t=>`最多选择 ${t} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:t=>`${t}折`,condition:t=>`满${t}元可用`},vanCouponCell:{title:"优惠券",count:t=>`${t}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const F=w("zh-CN"),$=I({"zh-CN":K}),U={messages(){return $[F.value]},use(t,e){F.value=t,this.add({[t]:e})},add(t={}){T($,t)}};var Z=U;function G(t){const e=S(t)+".";return(n,...u)=>{const o=Z.messages(),c=A(o,e+n)||A(o,n);return B(c)?c(...u):c}}function b(t,e){return e?typeof e=="string"?` ${t}--${e}`:Array.isArray(e)?e.reduce((n,u)=>n+b(t,u),""):Object.keys(e).reduce((n,u)=>n+(e[u]?b(t,u):""),""):""}function H(t){return(e,n)=>(e&&typeof e!="string"&&(n=e,e=""),e=e?`${t}__${e}`:t,`${e}${b(e,n)}`)}function D(t){const e=`van-${t}`;return[e,H(e),G(e)]}const v="van-hairline",Bt=`${v}--top`,yt=`${v}--bottom`,bt=`${v}--top-bottom`,ht="van-haptics-feedback",Dt=500,vt=5;function R(t){return t.install=e=>{const{name:n}=t;n&&(e.component(n,t),e.component(S(`-${n}`),t))},t}const[V,P]=D("badge"),W={dot:Boolean,max:E,tag:y("div"),color:String,offset:Array,content:E,showZero:M,position:y("top-right")};var Y=O({name:V,props:W,setup(t,{slots:e}){const n=()=>{if(e.content)return!0;const{content:s,showZero:a}=t;return l(s)&&s!==""&&(a||s!==0&&s!=="0")},u=()=>{const{dot:s,max:a,content:r}=t;if(!s&&n())return e.content?e.content():l(a)&&x(r)&&+r>+a?`${a}+`:r},o=s=>s.startsWith("-")?s.replace("-",""):`-${s}`,c=_(()=>{const s={background:t.color};if(t.offset){const[a,r]=t.offset,{position:g}=t,[d,m]=g.split("-");e.default?(typeof r=="number"?s[d]=i(d==="top"?r:-r):s[d]=d==="top"?i(r):o(r),typeof a=="number"?s[m]=i(m==="left"?a:-a):s[m]=m==="left"?i(a):o(a)):(s.marginTop=i(r),s.marginLeft=i(a))}return s}),f=()=>{if(n()||t.dot)return p("div",{class:P([t.position,{dot:t.dot,fixed:!!e.default}]),style:c.value},[u()])};return()=>{if(e.default){const{tag:s}=t;return p(s,{class:P("wrapper")},{default:()=>[e.default(),f()]})}return f()}}});const X=R(Y),[J,At]=D("config-provider"),Q=Symbol(J),[tt,C]=D("icon"),et=t=>t==null?void 0:t.includes("/"),nt={dot:Boolean,tag:y("i"),name:String,size:E,badge:E,color:String,badgeProps:Object,classPrefix:String};var ut=O({name:tt,props:nt,setup(t,{slots:e}){const n=j(Q,null),u=_(()=>t.classPrefix||(n==null?void 0:n.iconPrefix)||C());return()=>{const{tag:o,dot:c,name:f,size:s,badge:a,color:r}=t,g=et(f);return p(X,N({dot:c,tag:o,class:[u.value,g?"":`${u.value}-${f}`],style:{color:r,fontSize:i(s)},content:a},t.badgeProps),{default:()=>{var d;return[(d=e.default)==null?void 0:d.call(e),g&&p("img",{class:C("image"),src:f},null)]}})}}});const Ft=R(ut);export{yt as B,ht as H,Ft as I,Dt as L,vt as T,bt as a,X as b,D as c,y as d,ot as e,l as f,mt as g,i as h,h as i,Bt as j,v as k,gt as l,Et as m,E as n,pt as o,ft as p,it as q,lt as r,ct as s,M as t,dt as u,rt as v,R as w,at as x,k as y};

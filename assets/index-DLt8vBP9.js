(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function bl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const at={},nr=[],pn=()=>{},qu=()=>!1,ao=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Al=n=>n.startsWith("onUpdate:"),wt=Object.assign,wl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Jh=Object.prototype.hasOwnProperty,Qe=(n,e)=>Jh.call(n,e),Ge=Array.isArray,ir=n=>lo(n)==="[object Map]",Yu=n=>lo(n)==="[object Set]",Xe=n=>typeof n=="function",xt=n=>typeof n=="string",li=n=>typeof n=="symbol",ft=n=>n!==null&&typeof n=="object",$u=n=>(ft(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),Ku=Object.prototype.toString,lo=n=>Ku.call(n),jh=n=>lo(n).slice(8,-1),Zu=n=>lo(n)==="[object Object]",co=n=>xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Pr=bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Qh=/-\w/g,ri=uo(n=>n.replace(Qh,e=>e.slice(1).toUpperCase())),ed=/\B([A-Z])/g,Ui=uo(n=>n.replace(ed,"-$1").toLowerCase()),Ju=uo(n=>n.charAt(0).toUpperCase()+n.slice(1)),wo=uo(n=>n?`on${Ju(n)}`:""),ti=(n,e)=>!Object.is(n,e),Ro=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ju=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},td=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let hc;const fo=()=>hc||(hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rl(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=xt(i)?sd(i):Rl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(xt(n)||ft(n))return n}const nd=/;(?![^(]*\))/g,id=/:([^]+)/,rd=/\/\*[^]*?\*\//g;function sd(n){const e={};return n.replace(rd,"").split(nd).forEach(t=>{if(t){const i=t.split(id);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Cl(n){let e="";if(xt(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const i=Cl(n[t]);i&&(e+=i+" ")}else if(ft(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const od="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ad=bl(od);function Qu(n){return!!n||n===""}const ef=n=>!!(n&&n.__v_isRef===!0),tf=n=>xt(n)?n:n==null?"":Ge(n)||ft(n)&&(n.toString===Ku||!Xe(n.toString))?ef(n)?tf(n.value):JSON.stringify(n,nf,2):String(n),nf=(n,e)=>ef(e)?nf(n,e.value):ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Co(i,s)+" =>"]=r,t),{})}:Yu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Co(t))}:li(e)?Co(e):ft(e)&&!Ge(e)&&!Zu(e)?String(e):e,Co=(n,e="")=>{var t;return li(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let bt;class rf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=bt;try{return bt=this,e()}finally{bt=t}}}on(){++this._on===1&&(this.prevScope=bt,bt=this)}off(){this._on>0&&--this._on===0&&(bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function sf(n){return new rf(n)}function of(){return bt}function ld(n,e=!1){bt&&bt.cleanups.push(n)}let ot;const Po=new WeakSet;class af{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&bt.active&&bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Po.has(this)&&(Po.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dc(this),uf(this);const e=ot,t=on;ot=this,on=!0;try{return this.fn()}finally{ff(this),ot=e,on=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Dl(e);this.deps=this.depsTail=void 0,dc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Po.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ma(this)&&this.run()}get dirty(){return Ma(this)}}let lf=0,Lr,Dr;function cf(n,e=!1){if(n.flags|=8,e){n.next=Dr,Dr=n;return}n.next=Lr,Lr=n}function Pl(){lf++}function Ll(){if(--lf>0)return;if(Dr){let e=Dr;for(Dr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Lr;){let e=Lr;for(Lr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function uf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ff(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Dl(i),cd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ma(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(hf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function hf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gr)||(n.globalVersion=Gr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ma(n))))return;n.flags|=2;const e=n.dep,t=ot,i=on;ot=n,on=!0;try{uf(n);const r=n.fn(n._value);(e.version===0||ti(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ot=t,on=i,ff(n),n.flags&=-3}}function Dl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Dl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function cd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let on=!0;const df=[];function Fn(){df.push(on),on=!1}function On(){const n=df.pop();on=n===void 0?!0:n}function dc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ot;ot=void 0;try{e()}finally{ot=t}}}let Gr=0;class ud{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ot||!on||ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ot)t=this.activeLink=new ud(ot,this),ot.deps?(t.prevDep=ot.depsTail,ot.depsTail.nextDep=t,ot.depsTail=t):ot.deps=ot.depsTail=t,pf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ot.depsTail,t.nextDep=void 0,ot.depsTail.nextDep=t,ot.depsTail=t,ot.deps===t&&(ot.deps=i)}return t}trigger(e){this.version++,Gr++,this.notify(e)}notify(e){Pl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ll()}}}function pf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)pf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Js=new WeakMap,Ri=Symbol(""),ya=Symbol(""),kr=Symbol("");function At(n,e,t){if(on&&ot){let i=Js.get(n);i||Js.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ul),r.map=i,r.key=t),r.track()}}function Rn(n,e,t,i,r,s){const o=Js.get(n);if(!o){Gr++;return}const a=l=>{l&&l.trigger()};if(Pl(),e==="clear")o.forEach(a);else{const l=Ge(n),c=l&&co(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===kr||!li(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(kr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ri)),ir(n)&&a(o.get(ya)));break;case"delete":l||(a(o.get(Ri)),ir(n)&&a(o.get(ya)));break;case"set":ir(n)&&a(o.get(Ri));break}}Ll()}function fd(n,e){const t=Js.get(n);return t&&t.get(e)}function Oi(n){const e=Je(n);return e===n?e:(At(e,"iterate",kr),kt(n)?e:e.map(ln))}function ho(n){return At(n=Je(n),"iterate",kr),n}function Zn(n,e){return Bn(n)?Dn(n)?lr(ln(e)):lr(e):ln(e)}const hd={__proto__:null,[Symbol.iterator](){return Lo(this,Symbol.iterator,n=>Zn(this,n))},concat(...n){return Oi(this).concat(...n.map(e=>Ge(e)?Oi(e):e))},entries(){return Lo(this,"entries",n=>(n[1]=Zn(this,n[1]),n))},every(n,e){return xn(this,"every",n,e,void 0,arguments)},filter(n,e){return xn(this,"filter",n,e,t=>t.map(i=>Zn(this,i)),arguments)},find(n,e){return xn(this,"find",n,e,t=>Zn(this,t),arguments)},findIndex(n,e){return xn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return xn(this,"findLast",n,e,t=>Zn(this,t),arguments)},findLastIndex(n,e){return xn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return xn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Do(this,"includes",n)},indexOf(...n){return Do(this,"indexOf",n)},join(n){return Oi(this).join(n)},lastIndexOf(...n){return Do(this,"lastIndexOf",n)},map(n,e){return xn(this,"map",n,e,void 0,arguments)},pop(){return xr(this,"pop")},push(...n){return xr(this,"push",n)},reduce(n,...e){return pc(this,"reduce",n,e)},reduceRight(n,...e){return pc(this,"reduceRight",n,e)},shift(){return xr(this,"shift")},some(n,e){return xn(this,"some",n,e,void 0,arguments)},splice(...n){return xr(this,"splice",n)},toReversed(){return Oi(this).toReversed()},toSorted(n){return Oi(this).toSorted(n)},toSpliced(...n){return Oi(this).toSpliced(...n)},unshift(...n){return xr(this,"unshift",n)},values(){return Lo(this,"values",n=>Zn(this,n))}};function Lo(n,e,t){const i=ho(n),r=i[e]();return i!==n&&!kt(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const dd=Array.prototype;function xn(n,e,t,i,r,s){const o=ho(n),a=o!==n&&!kt(n),l=o[e];if(l!==dd[e]){const f=l.apply(n,s);return a?ln(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Zn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function pc(n,e,t,i){const r=ho(n);let s=t;return r!==n&&(kt(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Zn(n,a),l,n)}),r[e](s,...i)}function Do(n,e,t){const i=Je(n);At(i,"iterate",kr);const r=i[e](...t);return(r===-1||r===!1)&&po(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function xr(n,e,t=[]){Fn(),Pl();const i=Je(n)[e].apply(n,t);return Ll(),On(),i}const pd=bl("__proto__,__v_isRef,__isVue"),mf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(li));function md(n){li(n)||(n=String(n));const e=Je(this);return At(e,"has",n),e.hasOwnProperty(n)}class gf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?bd:Sf:s?xf:vf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!r){let l;if(o&&(l=hd[t]))return l;if(t==="hasOwnProperty")return md}const a=Reflect.get(e,t,mt(e)?e:i);if((li(t)?mf.has(t):pd(t))||(r||At(e,"get",t),s))return a;if(mt(a)){const l=o&&co(t)?a:a.value;return r&&ft(l)?Ta(l):l}return ft(a)?r?Ta(a):ts(a):a}}class _f extends gf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ge(e)&&co(t);if(!this._isShallow){const c=Bn(s);if(!kt(i)&&!Bn(i)&&(s=Je(s),i=Je(i)),!o&&mt(s)&&!mt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Qe(e,t),l=Reflect.set(e,t,i,mt(e)?e:r);return e===Je(r)&&(a?ti(i,s)&&Rn(e,"set",t,i):Rn(e,"add",t,i)),l}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Rn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!li(t)||!mf.has(t))&&At(e,"has",t),i}ownKeys(e){return At(e,"iterate",Ge(e)?"length":Ri),Reflect.ownKeys(e)}}class gd extends gf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const _d=new _f,vd=new gd,xd=new _f(!0);const Ea=n=>n,fs=n=>Reflect.getPrototypeOf(n);function Sd(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),o=ir(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ea:e?lr:ln;return!e&&At(s,"iterate",l?ya:Ri),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function hs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Md(n,e){const t={get(r){const s=this.__v_raw,o=Je(s),a=Je(r);n||(ti(r,a)&&At(o,"get",r),At(o,"get",a));const{has:l}=fs(o),c=e?Ea:n?lr:ln;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&At(Je(r),"iterate",Ri),r.size},has(r){const s=this.__v_raw,o=Je(s),a=Je(r);return n||(ti(r,a)&&At(o,"has",r),At(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Je(a),c=e?Ea:n?lr:ln;return!n&&At(l,"iterate",Ri),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return wt(t,n?{add:hs("add"),set:hs("set"),delete:hs("delete"),clear:hs("clear")}:{add(r){!e&&!kt(r)&&!Bn(r)&&(r=Je(r));const s=Je(this);return fs(s).has.call(s,r)||(s.add(r),Rn(s,"add",r,r)),this},set(r,s){!e&&!kt(s)&&!Bn(s)&&(s=Je(s));const o=Je(this),{has:a,get:l}=fs(o);let c=a.call(o,r);c||(r=Je(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ti(s,u)&&Rn(o,"set",r,s):Rn(o,"add",r,s),this},delete(r){const s=Je(this),{has:o,get:a}=fs(s);let l=o.call(s,r);l||(r=Je(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Rn(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,o=r.clear();return s&&Rn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Sd(r,n,e)}),t}function Il(n,e){const t=Md(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const yd={get:Il(!1,!1)},Ed={get:Il(!1,!0)},Td={get:Il(!0,!1)};const vf=new WeakMap,xf=new WeakMap,Sf=new WeakMap,bd=new WeakMap;function Ad(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wd(n){return n.__v_skip||!Object.isExtensible(n)?0:Ad(jh(n))}function ts(n){return Bn(n)?n:Nl(n,!1,_d,yd,vf)}function Rd(n){return Nl(n,!1,xd,Ed,xf)}function Ta(n){return Nl(n,!0,vd,Td,Sf)}function Nl(n,e,t,i,r){if(!ft(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=wd(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Dn(n){return Bn(n)?Dn(n.__v_raw):!!(n&&n.__v_isReactive)}function Bn(n){return!!(n&&n.__v_isReadonly)}function kt(n){return!!(n&&n.__v_isShallow)}function po(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function Fl(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&ju(n,"__v_skip",!0),n}const ln=n=>ft(n)?ts(n):n,lr=n=>ft(n)?Ta(n):n;function mt(n){return n?n.__v_isRef===!0:!1}function mo(n){return Cd(n,!1)}function Cd(n,e){return mt(n)?n:new Pd(n,e)}class Pd{constructor(e,t){this.dep=new Ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:ln(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||kt(e)||Bn(e);e=i?e:Je(e),ti(e,t)&&(this._rawValue=e,this._value=i?e:ln(e),this.dep.trigger())}}function Ol(n){return mt(n)?n.value:n}const Ld={get:(n,e,t)=>e==="__v_raw"?n:Ol(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return mt(r)&&!mt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Mf(n){return Dn(n)?n:new Proxy(n,Ld)}function Dd(n){const e=Ge(n)?new Array(n.length):{};for(const t in n)e[t]=Id(n,t);return e}class Ud{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=Je(e);let r=!0,s=e;if(!Ge(e)||!co(String(t)))do r=!po(s)||kt(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Ol(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&mt(this._raw[this._key])){const t=this._object[this._key];if(mt(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return fd(this._raw,this._key)}}function Id(n,e,t){return new Ud(n,e,t)}class Nd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ot!==this)return cf(this,!0),!0}get value(){const e=this.dep.track();return hf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fd(n,e,t=!1){let i,r;return Xe(n)?i=n:(i=n.get,r=n.set),new Nd(i,r,t)}const ds={},js=new WeakMap;let Si;function Od(n,e=!1,t=Si){if(t){let i=js.get(t);i||js.set(t,i=[]),i.push(n)}}function Bd(n,e,t=at){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:kt(S)||r===!1||r===0?Qn(S,1):Qn(S);let u,f,h,p,_=!1,x=!1;if(mt(n)?(f=()=>n.value,_=kt(n)):Dn(n)?(f=()=>c(n),_=!0):Ge(n)?(x=!0,_=n.some(S=>Dn(S)||kt(S)),f=()=>n.map(S=>{if(mt(S))return S.value;if(Dn(S))return c(S);if(Xe(S))return l?l(S,2):S()})):Xe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Fn();try{h()}finally{On()}}const S=Si;Si=u;try{return l?l(n,3,[p]):n(p)}finally{Si=S}}:f=pn,e&&r){const S=f,I=r===!0?1/0:r;f=()=>Qn(S(),I)}const m=of(),d=()=>{u.stop(),m&&m.active&&wl(m.effects,u)};if(s&&e){const S=e;e=(...I)=>{S(...I),d()}}let w=x?new Array(n.length).fill(ds):ds;const b=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const I=u.run();if(r||_||(x?I.some((P,R)=>ti(P,w[R])):ti(I,w))){h&&h();const P=Si;Si=u;try{const R=[I,w===ds?void 0:x&&w[0]===ds?[]:w,p];w=I,l?l(e,3,R):e(...R)}finally{Si=P}}}else u.run()};return a&&a(b),u=new af(f),u.scheduler=o?()=>o(b,!1):b,p=S=>Od(S,!1,u),h=u.onStop=()=>{const S=js.get(u);if(S){if(l)l(S,4);else for(const I of S)I();js.delete(u)}},e?i?b(!0):w=u.run():o?o(b.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Qn(n,e=1/0,t){if(e<=0||!ft(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,mt(n))Qn(n.value,e,t);else if(Ge(n))for(let i=0;i<n.length;i++)Qn(n[i],e,t);else if(Yu(n)||ir(n))n.forEach(i=>{Qn(i,e,t)});else if(Zu(n)){for(const i in n)Qn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Qn(n[i],e,t)}return n}function ns(n,e,t,i){try{return i?n(...i):n()}catch(r){go(r,e,t)}}function gn(n,e,t,i){if(Xe(n)){const r=ns(n,e,t,i);return r&&$u(r)&&r.catch(s=>{go(s,e,t)}),r}if(Ge(n)){const r=[];for(let s=0;s<n.length;s++)r.push(gn(n[s],e,t,i));return r}}function go(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||at;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Fn(),ns(s,null,10,[n,l,c]),On();return}}zd(n,t,r,i,o)}function zd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Lt=[];let un=-1;const rr=[];let Jn=null,er=0;const yf=Promise.resolve();let Qs=null;function Ef(n){const e=Qs||yf;return n?e.then(this?n.bind(this):n):e}function Hd(n){let e=un+1,t=Lt.length;for(;e<t;){const i=e+t>>>1,r=Lt[i],s=Wr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Bl(n){if(!(n.flags&1)){const e=Wr(n),t=Lt[Lt.length-1];!t||!(n.flags&2)&&e>=Wr(t)?Lt.push(n):Lt.splice(Hd(e),0,n),n.flags|=1,Tf()}}function Tf(){Qs||(Qs=yf.then(Af))}function Vd(n){Ge(n)?rr.push(...n):Jn&&n.id===-1?Jn.splice(er+1,0,n):n.flags&1||(rr.push(n),n.flags|=1),Tf()}function mc(n,e,t=un+1){for(;t<Lt.length;t++){const i=Lt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Lt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function bf(n){if(rr.length){const e=[...new Set(rr)].sort((t,i)=>Wr(t)-Wr(i));if(rr.length=0,Jn){Jn.push(...e);return}for(Jn=e,er=0;er<Jn.length;er++){const t=Jn[er];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Jn=null,er=0}}const Wr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Af(n){try{for(un=0;un<Lt.length;un++){const e=Lt[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ns(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<Lt.length;un++){const e=Lt[un];e&&(e.flags&=-2)}un=-1,Lt.length=0,bf(),Qs=null,(Lt.length||rr.length)&&Af()}}let dn=null,wf=null;function eo(n){const e=dn;return dn=n,wf=n&&n.type.__scopeId||null,e}function Gd(n,e=dn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&bc(-1);const s=eo(e);let o;try{o=n(...r)}finally{eo(s),i._d&&bc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function hi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Fn(),gn(l,t,8,[n.el,a,n,e]),On())}}const kd=Symbol("_vte"),Wd=n=>n.__isTeleport,Xd=Symbol("_leaveCb");function zl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,zl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function qd(n,e){return Xe(n)?wt({name:n.name},e,{setup:n}):n}function Rf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const to=new WeakMap;function Ur(n,e,t,i,r=!1){if(Ge(n)){n.forEach((_,x)=>Ur(_,e&&(Ge(e)?e[x]:e),t,i,r));return}if(Ir(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ur(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?kl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,f=a.setupState,h=Je(f),p=f===at?qu:_=>Qe(h,_);if(c!=null&&c!==l){if(gc(e),xt(c))u[c]=null,p(c)&&(f[c]=null);else if(mt(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(Xe(l))ns(l,a,12,[o,u]);else{const _=xt(l),x=mt(l);if(_||x){const m=()=>{if(n.f){const d=_?p(l)?f[l]:u[l]:l.value;if(r)Ge(d)&&wl(d,s);else if(Ge(d))d.includes(s)||d.push(s);else if(_)u[l]=[s],p(l)&&(f[l]=u[l]);else{const w=[s];l.value=w,n.k&&(u[n.k]=w)}}else _?(u[l]=o,p(l)&&(f[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{m(),to.delete(n)};d.id=-1,to.set(n,d),Vt(d,t)}else gc(n),m()}}}function gc(n){const e=to.get(n);e&&(e.flags|=8,to.delete(n))}fo().requestIdleCallback;fo().cancelIdleCallback;const Ir=n=>!!n.type.__asyncLoader,Cf=n=>n.type.__isKeepAlive;function Yd(n,e){Pf(n,"a",e)}function $d(n,e){Pf(n,"da",e)}function Pf(n,e,t=Dt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(_o(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Cf(r.parent.vnode)&&Kd(i,e,t,r),r=r.parent}}function Kd(n,e,t,i){const r=_o(e,n,i,!0);Df(()=>{wl(i[e],r)},t)}function _o(n,e,t=Dt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Fn();const a=is(t),l=gn(e,t,n,o);return a(),On(),l});return i?r.unshift(s):r.push(s),s}}const Vn=n=>(e,t=Dt)=>{(!qr||n==="sp")&&_o(n,(...i)=>e(...i),t)},Zd=Vn("bm"),Lf=Vn("m"),Jd=Vn("bu"),jd=Vn("u"),Qd=Vn("bum"),Df=Vn("um"),ep=Vn("sp"),tp=Vn("rtg"),np=Vn("rtc");function ip(n,e=Dt){_o("ec",n,e)}const rp=Symbol.for("v-ndc");function sp(n,e,t,i){let r;const s=t,o=Ge(n);if(o||xt(n)){const a=o&&Dn(n);let l=!1,c=!1;a&&(l=!kt(n),c=Bn(n),n=ho(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?lr(ln(n[u])):ln(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ft(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const ba=n=>n?eh(n)?kl(n):ba(n.parent):null,Nr=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ba(n.parent),$root:n=>ba(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>If(n),$forceUpdate:n=>n.f||(n.f=()=>{Bl(n.update)}),$nextTick:n=>n.n||(n.n=Ef.bind(n.proxy)),$watch:n=>vp.bind(n)}),Uo=(n,e)=>n!==at&&!n.__isScriptSetup&&Qe(n,e),op={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Uo(i,e))return o[e]=1,i[e];if(r!==at&&Qe(r,e))return o[e]=2,r[e];if(Qe(s,e))return o[e]=3,s[e];if(t!==at&&Qe(t,e))return o[e]=4,t[e];Aa&&(o[e]=0)}}const c=Nr[e];let u,f;if(c)return e==="$attrs"&&At(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==at&&Qe(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Qe(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Uo(r,e)?(r[e]=t,!0):i!==at&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==at&&a[0]!=="$"&&Qe(n,a)||Uo(e,a)||Qe(s,a)||Qe(i,a)||Qe(Nr,a)||Qe(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _c(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Aa=!0;function ap(n){const e=If(n),t=n.proxy,i=n.ctx;Aa=!1,e.beforeCreate&&vc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:w,destroyed:b,unmounted:S,render:I,renderTracked:P,renderTriggered:R,errorCaptured:D,serverPrefetch:T,expose:M,inheritAttrs:L,components:te,directives:Z,filters:ne}=e;if(c&&lp(c,i,null),o)for(const ee in o){const q=o[ee];Xe(q)&&(i[ee]=q.bind(t))}if(r){const ee=r.call(t,t);ft(ee)&&(n.data=ts(ee))}if(Aa=!0,s)for(const ee in s){const q=s[ee],he=Xe(q)?q.bind(t,t):Xe(q.get)?q.get.bind(t,t):pn,ve=!Xe(q)&&Xe(q.set)?q.set.bind(t):pn,ye=nh({get:he,set:ve});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ne=>ye.value=Ne})}if(a)for(const ee in a)Uf(a[ee],i,t,ee);if(l){const ee=Xe(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(q=>{pp(q,ee[q])})}u&&vc(u,n,"c");function K(ee,q){Ge(q)?q.forEach(he=>ee(he.bind(t))):q&&ee(q.bind(t))}if(K(Zd,f),K(Lf,h),K(Jd,p),K(jd,_),K(Yd,x),K($d,m),K(ip,D),K(np,P),K(tp,R),K(Qd,w),K(Df,S),K(ep,T),Ge(M))if(M.length){const ee=n.exposed||(n.exposed={});M.forEach(q=>{Object.defineProperty(ee,q,{get:()=>t[q],set:he=>t[q]=he,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===pn&&(n.render=I),L!=null&&(n.inheritAttrs=L),te&&(n.components=te),Z&&(n.directives=Z),T&&Rf(n)}function lp(n,e,t=pn){Ge(n)&&(n=wa(n));for(const i in n){const r=n[i];let s;ft(r)?"default"in r?s=Fr(r.from||i,r.default,!0):s=Fr(r.from||i):s=Fr(r),mt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function vc(n,e,t){gn(Ge(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Uf(n,e,t,i){let r=i.includes(".")?Of(t,i):()=>t[i];if(xt(n)){const s=e[n];Xe(s)&&Vs(r,s)}else if(Xe(n))Vs(r,n.bind(t));else if(ft(n))if(Ge(n))n.forEach(s=>Uf(s,e,t,i));else{const s=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(s)&&Vs(r,s,n)}}function If(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>no(l,c,o,!0)),no(l,e,o)),ft(e)&&s.set(e,l),l}function no(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&no(n,s,t,!0),r&&r.forEach(o=>no(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=cp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const cp={data:xc,props:Sc,emits:Sc,methods:Ar,computed:Ar,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Ar,directives:Ar,watch:fp,provide:xc,inject:up};function xc(n,e){return e?n?function(){return wt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function up(n,e){return Ar(wa(n),wa(e))}function wa(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ct(n,e){return n?[...new Set([].concat(n,e))]:e}function Ar(n,e){return n?wt(Object.create(null),n,e):e}function Sc(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:wt(Object.create(null),_c(n),_c(e??{})):e}function fp(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=Ct(n[i],e[i]);return t}function Nf(){return{app:null,config:{isNativeTag:qu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hp=0;function dp(n,e){return function(i,r=null){Xe(i)||(i=wt({},i)),r!=null&&!ft(r)&&(r=null);const s=Nf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:hp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:jp,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(c,...f)):Xe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Un(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,kl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(gn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Ci;Ci=c;try{return u()}finally{Ci=f}}};return c}}let Ci=null;function pp(n,e){if(Dt){let t=Dt.provides;const i=Dt.parent&&Dt.parent.provides;i===t&&(t=Dt.provides=Object.create(i)),t[n]=e}}function Fr(n,e,t=!1){const i=Qf();if(i||Ci){let r=Ci?Ci._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}function mp(){return!!(Qf()||Ci)}const gp=Symbol.for("v-scx"),_p=()=>Fr(gp);function Vs(n,e,t){return Ff(n,e,t)}function Ff(n,e,t=at){const{immediate:i,deep:r,flush:s,once:o}=t,a=wt({},t),l=e&&i||!e&&s!=="post";let c;if(qr){if(s==="sync"){const p=_p();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=pn,p.resume=pn,p.pause=pn,p}}const u=Dt;a.call=(p,_,x)=>gn(p,u,_,x);let f=!1;s==="post"?a.scheduler=p=>{Vt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():Bl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Bd(n,e,a);return qr&&(c?c.push(h):l&&h()),h}function vp(n,e,t){const i=this.proxy,r=xt(n)?n.includes(".")?Of(i,n):()=>i[n]:n.bind(i,i);let s;Xe(e)?s=e:(s=e.handler,t=e);const o=is(this),a=Ff(r,s.bind(i),t);return o(),a}function Of(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const xp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ri(e)}Modifiers`]||n[`${Ui(e)}Modifiers`];function Sp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let r=t;const s=e.startsWith("update:"),o=s&&xp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>xt(u)?u.trim():u)),o.number&&(r=t.map(td)));let a,l=i[a=wo(e)]||i[a=wo(ri(e))];!l&&s&&(l=i[a=wo(Ui(e))]),l&&gn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,gn(c,n,6,r)}}const Mp=new WeakMap;function Bf(n,e,t=!1){const i=t?Mp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=Bf(c,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ft(n)&&i.set(n,null),null):(Ge(s)?s.forEach(l=>o[l]=null):wt(o,s),ft(n)&&i.set(n,o),o)}function vo(n,e){return!n||!ao(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Ui(e))||Qe(n,e))}function Mc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:_,inheritAttrs:x}=n,m=eo(n);let d,w;try{if(t.shapeFlag&4){const S=r||i,I=S;d=fn(c.call(I,S,u,f,p,h,_)),w=a}else{const S=e;d=fn(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),w=e.props?a:yp(a)}}catch(S){Or.length=0,go(S,n,1),d=Un(si)}let b=d;if(w&&x!==!1){const S=Object.keys(w),{shapeFlag:I}=b;S.length&&I&7&&(s&&S.some(Al)&&(w=Ep(w,s)),b=cr(b,w,!1,!0))}return t.dirs&&(b=cr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&zl(b,t.transition),d=b,eo(m),d}const yp=n=>{let e;for(const t in n)(t==="class"||t==="style"||ao(t))&&((e||(e={}))[t]=n[t]);return e},Ep=(n,e)=>{const t={};for(const i in n)(!Al(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Tp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?yc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!vo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?yc(i,o,c):!0:!!o;return!1}function yc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!vo(t,s))return!0}return!1}function bp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const zf={},Hf=()=>Object.create(zf),Vf=n=>Object.getPrototypeOf(n)===zf;function Ap(n,e,t,i=!1){const r={},s=Hf();n.propsDefaults=Object.create(null),Gf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Rd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function wp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Je(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(vo(n.emitsOptions,h))continue;const p=e[h];if(l)if(Qe(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=ri(h);r[_]=Ra(l,a,_,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Gf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Qe(e,f)&&((u=Ui(f))===f||!Qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ra(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],c=!0)}c&&Rn(n.attrs,"set","")}function Gf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Pr(l))continue;const c=e[l];let u;r&&Qe(r,u=ri(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:vo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Je(t),c=a||at;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ra(r,l,f,c[f],n,!Qe(c,f))}}return o}function Ra(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Qe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=is(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ui(t))&&(i=!0))}return i}const Rp=new WeakMap;function kf(n,e,t=!1){const i=t?Rp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=f=>{l=!0;const[h,p]=kf(f,e,!0);wt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ft(n)&&i.set(n,nr),nr;if(Ge(s))for(let u=0;u<s.length;u++){const f=ri(s[u]);Ec(f)&&(o[f]=at)}else if(s)for(const u in s){const f=ri(u);if(Ec(f)){const h=s[u],p=o[f]=Ge(h)||Xe(h)?{type:h}:wt({},h),_=p.type;let x=!1,m=!0;if(Ge(_))for(let d=0;d<_.length;++d){const w=_[d],b=Xe(w)&&w.name;if(b==="Boolean"){x=!0;break}else b==="String"&&(m=!1)}else x=Xe(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||Qe(p,"default"))&&a.push(f)}}const c=[o,a];return ft(n)&&i.set(n,c),c}function Ec(n){return n[0]!=="$"&&!Pr(n)}const Hl=n=>n==="_"||n==="_ctx"||n==="$stable",Vl=n=>Ge(n)?n.map(fn):[fn(n)],Cp=(n,e,t)=>{if(e._n)return e;const i=Gd((...r)=>Vl(e(...r)),t);return i._c=!1,i},Wf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Hl(r))continue;const s=n[r];if(Xe(s))e[r]=Cp(r,s,i);else if(s!=null){const o=Vl(s);e[r]=()=>o}}},Xf=(n,e)=>{const t=Vl(e);n.slots.default=()=>t},qf=(n,e,t)=>{for(const i in e)(t||!Hl(i))&&(n[i]=e[i])},Pp=(n,e,t)=>{const i=n.slots=Hf();if(n.vnode.shapeFlag&32){const r=e._;r?(qf(i,e,t),t&&ju(i,"_",r,!0)):Wf(e,i)}else e&&Xf(n,e)},Lp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=at;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:qf(r,e,t):(s=!e.$stable,Wf(e,r)),o=e}else e&&(Xf(n,e),o={default:1});if(s)for(const a in r)!Hl(a)&&o[a]==null&&delete r[a]},Vt=Fp;function Dp(n){return Up(n)}function Up(n,e){const t=fo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=pn,insertStaticContent:_}=n,x=(A,C,v,z=null,N=null,B=null,O=void 0,$=null,V=!!C.dynamicChildren)=>{if(A===C)return;A&&!Sr(A,C)&&(z=me(A),Ne(A,N,B,!0),A=null),C.patchFlag===-2&&(V=!1,C.dynamicChildren=null);const{type:W,ref:le,shapeFlag:y}=C;switch(W){case xo:m(A,C,v,z);break;case si:d(A,C,v,z);break;case No:A==null&&w(C,v,z,O);break;case Kt:te(A,C,v,z,N,B,O,$,V);break;default:y&1?I(A,C,v,z,N,B,O,$,V):y&6?Z(A,C,v,z,N,B,O,$,V):(y&64||y&128)&&W.process(A,C,v,z,N,B,O,$,V,Ie)}le!=null&&N?Ur(le,A&&A.ref,B,C||A,!C):le==null&&A&&A.ref!=null&&Ur(A.ref,null,B,A,!0)},m=(A,C,v,z)=>{if(A==null)i(C.el=a(C.children),v,z);else{const N=C.el=A.el;C.children!==A.children&&c(N,C.children)}},d=(A,C,v,z)=>{A==null?i(C.el=l(C.children||""),v,z):C.el=A.el},w=(A,C,v,z)=>{[A.el,A.anchor]=_(A.children,C,v,z,A.el,A.anchor)},b=({el:A,anchor:C},v,z)=>{let N;for(;A&&A!==C;)N=h(A),i(A,v,z),A=N;i(C,v,z)},S=({el:A,anchor:C})=>{let v;for(;A&&A!==C;)v=h(A),r(A),A=v;r(C)},I=(A,C,v,z,N,B,O,$,V)=>{if(C.type==="svg"?O="svg":C.type==="math"&&(O="mathml"),A==null)P(C,v,z,N,B,O,$,V);else{const W=A.el&&A.el._isVueCE?A.el:null;try{W&&W._beginPatch(),T(A,C,N,B,O,$,V)}finally{W&&W._endPatch()}}},P=(A,C,v,z,N,B,O,$)=>{let V,W;const{props:le,shapeFlag:y,transition:g,dirs:U}=A;if(V=A.el=o(A.type,B,le&&le.is,le),y&8?u(V,A.children):y&16&&D(A.children,V,null,z,N,Io(A,B),O,$),U&&hi(A,null,z,"created"),R(V,A,A.scopeId,O,z),le){for(const Q in le)Q!=="value"&&!Pr(Q)&&s(V,Q,null,le[Q],B,z);"value"in le&&s(V,"value",null,le.value,B),(W=le.onVnodeBeforeMount)&&cn(W,z,A)}U&&hi(A,null,z,"beforeMount");const X=Ip(N,g);X&&g.beforeEnter(V),i(V,C,v),((W=le&&le.onVnodeMounted)||X||U)&&Vt(()=>{W&&cn(W,z,A),X&&g.enter(V),U&&hi(A,null,z,"mounted")},N)},R=(A,C,v,z,N)=>{if(v&&p(A,v),z)for(let B=0;B<z.length;B++)p(A,z[B]);if(N){let B=N.subTree;if(C===B||Kf(B.type)&&(B.ssContent===C||B.ssFallback===C)){const O=N.vnode;R(A,O,O.scopeId,O.slotScopeIds,N.parent)}}},D=(A,C,v,z,N,B,O,$,V=0)=>{for(let W=V;W<A.length;W++){const le=A[W]=$?jn(A[W]):fn(A[W]);x(null,le,C,v,z,N,B,O,$)}},T=(A,C,v,z,N,B,O)=>{const $=C.el=A.el;let{patchFlag:V,dynamicChildren:W,dirs:le}=C;V|=A.patchFlag&16;const y=A.props||at,g=C.props||at;let U;if(v&&di(v,!1),(U=g.onVnodeBeforeUpdate)&&cn(U,v,C,A),le&&hi(C,A,v,"beforeUpdate"),v&&di(v,!0),(y.innerHTML&&g.innerHTML==null||y.textContent&&g.textContent==null)&&u($,""),W?M(A.dynamicChildren,W,$,v,z,Io(C,N),B):O||q(A,C,$,null,v,z,Io(C,N),B,!1),V>0){if(V&16)L($,y,g,v,N);else if(V&2&&y.class!==g.class&&s($,"class",null,g.class,N),V&4&&s($,"style",y.style,g.style,N),V&8){const X=C.dynamicProps;for(let Q=0;Q<X.length;Q++){const Y=X[Q],_e=y[Y],ce=g[Y];(ce!==_e||Y==="value")&&s($,Y,_e,ce,N,v)}}V&1&&A.children!==C.children&&u($,C.children)}else!O&&W==null&&L($,y,g,v,N);((U=g.onVnodeUpdated)||le)&&Vt(()=>{U&&cn(U,v,C,A),le&&hi(C,A,v,"updated")},z)},M=(A,C,v,z,N,B,O)=>{for(let $=0;$<C.length;$++){const V=A[$],W=C[$],le=V.el&&(V.type===Kt||!Sr(V,W)||V.shapeFlag&198)?f(V.el):v;x(V,W,le,null,z,N,B,O,!0)}},L=(A,C,v,z,N)=>{if(C!==v){if(C!==at)for(const B in C)!Pr(B)&&!(B in v)&&s(A,B,C[B],null,N,z);for(const B in v){if(Pr(B))continue;const O=v[B],$=C[B];O!==$&&B!=="value"&&s(A,B,$,O,N,z)}"value"in v&&s(A,"value",C.value,v.value,N)}},te=(A,C,v,z,N,B,O,$,V)=>{const W=C.el=A?A.el:a(""),le=C.anchor=A?A.anchor:a("");let{patchFlag:y,dynamicChildren:g,slotScopeIds:U}=C;U&&($=$?$.concat(U):U),A==null?(i(W,v,z),i(le,v,z),D(C.children||[],v,le,N,B,O,$,V)):y>0&&y&64&&g&&A.dynamicChildren?(M(A.dynamicChildren,g,v,N,B,O,$),(C.key!=null||N&&C===N.subTree)&&Yf(A,C,!0)):q(A,C,v,le,N,B,O,$,V)},Z=(A,C,v,z,N,B,O,$,V)=>{C.slotScopeIds=$,A==null?C.shapeFlag&512?N.ctx.activate(C,v,z,O,V):ne(C,v,z,N,B,O,V):re(A,C,V)},ne=(A,C,v,z,N,B,O)=>{const $=A.component=qp(A,z,N);if(Cf(A)&&($.ctx.renderer=Ie),Yp($,!1,O),$.asyncDep){if(N&&N.registerDep($,K,O),!A.el){const V=$.subTree=Un(si);d(null,V,C,v),A.placeholder=V.el}}else K($,A,C,v,N,B,O)},re=(A,C,v)=>{const z=C.component=A.component;if(Tp(A,C,v))if(z.asyncDep&&!z.asyncResolved){ee(z,C,v);return}else z.next=C,z.update();else C.el=A.el,z.vnode=C},K=(A,C,v,z,N,B,O)=>{const $=()=>{if(A.isMounted){let{next:y,bu:g,u:U,parent:X,vnode:Q}=A;{const Ee=$f(A);if(Ee){y&&(y.el=Q.el,ee(A,y,O)),Ee.asyncDep.then(()=>{A.isUnmounted||$()});return}}let Y=y,_e;di(A,!1),y?(y.el=Q.el,ee(A,y,O)):y=Q,g&&Ro(g),(_e=y.props&&y.props.onVnodeBeforeUpdate)&&cn(_e,X,y,Q),di(A,!0);const ce=Mc(A),xe=A.subTree;A.subTree=ce,x(xe,ce,f(xe.el),me(xe),A,N,B),y.el=ce.el,Y===null&&bp(A,ce.el),U&&Vt(U,N),(_e=y.props&&y.props.onVnodeUpdated)&&Vt(()=>cn(_e,X,y,Q),N)}else{let y;const{el:g,props:U}=C,{bm:X,m:Q,parent:Y,root:_e,type:ce}=A,xe=Ir(C);di(A,!1),X&&Ro(X),!xe&&(y=U&&U.onVnodeBeforeMount)&&cn(y,Y,C),di(A,!0);{_e.ce&&_e.ce._def.shadowRoot!==!1&&_e.ce._injectChildStyle(ce);const Ee=A.subTree=Mc(A);x(null,Ee,v,z,A,N,B),C.el=Ee.el}if(Q&&Vt(Q,N),!xe&&(y=U&&U.onVnodeMounted)){const Ee=C;Vt(()=>cn(y,Y,Ee),N)}(C.shapeFlag&256||Y&&Ir(Y.vnode)&&Y.vnode.shapeFlag&256)&&A.a&&Vt(A.a,N),A.isMounted=!0,C=v=z=null}};A.scope.on();const V=A.effect=new af($);A.scope.off();const W=A.update=V.run.bind(V),le=A.job=V.runIfDirty.bind(V);le.i=A,le.id=A.uid,V.scheduler=()=>Bl(le),di(A,!0),W()},ee=(A,C,v)=>{C.component=A;const z=A.vnode.props;A.vnode=C,A.next=null,wp(A,C.props,z,v),Lp(A,C.children,v),Fn(),mc(A),On()},q=(A,C,v,z,N,B,O,$,V=!1)=>{const W=A&&A.children,le=A?A.shapeFlag:0,y=C.children,{patchFlag:g,shapeFlag:U}=C;if(g>0){if(g&128){ve(W,y,v,z,N,B,O,$,V);return}else if(g&256){he(W,y,v,z,N,B,O,$,V);return}}U&8?(le&16&&we(W,N,B),y!==W&&u(v,y)):le&16?U&16?ve(W,y,v,z,N,B,O,$,V):we(W,N,B,!0):(le&8&&u(v,""),U&16&&D(y,v,z,N,B,O,$,V))},he=(A,C,v,z,N,B,O,$,V)=>{A=A||nr,C=C||nr;const W=A.length,le=C.length,y=Math.min(W,le);let g;for(g=0;g<y;g++){const U=C[g]=V?jn(C[g]):fn(C[g]);x(A[g],U,v,null,N,B,O,$,V)}W>le?we(A,N,B,!0,!1,y):D(C,v,z,N,B,O,$,V,y)},ve=(A,C,v,z,N,B,O,$,V)=>{let W=0;const le=C.length;let y=A.length-1,g=le-1;for(;W<=y&&W<=g;){const U=A[W],X=C[W]=V?jn(C[W]):fn(C[W]);if(Sr(U,X))x(U,X,v,null,N,B,O,$,V);else break;W++}for(;W<=y&&W<=g;){const U=A[y],X=C[g]=V?jn(C[g]):fn(C[g]);if(Sr(U,X))x(U,X,v,null,N,B,O,$,V);else break;y--,g--}if(W>y){if(W<=g){const U=g+1,X=U<le?C[U].el:z;for(;W<=g;)x(null,C[W]=V?jn(C[W]):fn(C[W]),v,X,N,B,O,$,V),W++}}else if(W>g)for(;W<=y;)Ne(A[W],N,B,!0),W++;else{const U=W,X=W,Q=new Map;for(W=X;W<=g;W++){const Ce=C[W]=V?jn(C[W]):fn(C[W]);Ce.key!=null&&Q.set(Ce.key,W)}let Y,_e=0;const ce=g-X+1;let xe=!1,Ee=0;const oe=new Array(ce);for(W=0;W<ce;W++)oe[W]=0;for(W=U;W<=y;W++){const Ce=A[W];if(_e>=ce){Ne(Ce,N,B,!0);continue}let Le;if(Ce.key!=null)Le=Q.get(Ce.key);else for(Y=X;Y<=g;Y++)if(oe[Y-X]===0&&Sr(Ce,C[Y])){Le=Y;break}Le===void 0?Ne(Ce,N,B,!0):(oe[Le-X]=W+1,Le>=Ee?Ee=Le:xe=!0,x(Ce,C[Le],v,null,N,B,O,$,V),_e++)}const be=xe?Np(oe):nr;for(Y=be.length-1,W=ce-1;W>=0;W--){const Ce=X+W,Le=C[Ce],pe=C[Ce+1],Be=Ce+1<le?pe.el||pe.placeholder:z;oe[W]===0?x(null,Le,v,Be,N,B,O,$,V):xe&&(Y<0||W!==be[Y]?ye(Le,v,Be,2):Y--)}}},ye=(A,C,v,z,N=null)=>{const{el:B,type:O,transition:$,children:V,shapeFlag:W}=A;if(W&6){ye(A.component.subTree,C,v,z);return}if(W&128){A.suspense.move(C,v,z);return}if(W&64){O.move(A,C,v,Ie);return}if(O===Kt){i(B,C,v);for(let y=0;y<V.length;y++)ye(V[y],C,v,z);i(A.anchor,C,v);return}if(O===No){b(A,C,v);return}if(z!==2&&W&1&&$)if(z===0)$.beforeEnter(B),i(B,C,v),Vt(()=>$.enter(B),N);else{const{leave:y,delayLeave:g,afterLeave:U}=$,X=()=>{A.ctx.isUnmounted?r(B):i(B,C,v)},Q=()=>{B._isLeaving&&B[Xd](!0),y(B,()=>{X(),U&&U()})};g?g(B,X,Q):Q()}else i(B,C,v)},Ne=(A,C,v,z=!1,N=!1)=>{const{type:B,props:O,ref:$,children:V,dynamicChildren:W,shapeFlag:le,patchFlag:y,dirs:g,cacheIndex:U}=A;if(y===-2&&(N=!1),$!=null&&(Fn(),Ur($,null,v,A,!0),On()),U!=null&&(C.renderCache[U]=void 0),le&256){C.ctx.deactivate(A);return}const X=le&1&&g,Q=!Ir(A);let Y;if(Q&&(Y=O&&O.onVnodeBeforeUnmount)&&cn(Y,C,A),le&6)de(A.component,v,z);else{if(le&128){A.suspense.unmount(v,z);return}X&&hi(A,null,C,"beforeUnmount"),le&64?A.type.remove(A,C,v,Ie,z):W&&!W.hasOnce&&(B!==Kt||y>0&&y&64)?we(W,C,v,!1,!0):(B===Kt&&y&384||!N&&le&16)&&we(V,C,v),z&&Ye(A)}(Q&&(Y=O&&O.onVnodeUnmounted)||X)&&Vt(()=>{Y&&cn(Y,C,A),X&&hi(A,null,C,"unmounted")},v)},Ye=A=>{const{type:C,el:v,anchor:z,transition:N}=A;if(C===Kt){ie(v,z);return}if(C===No){S(A);return}const B=()=>{r(v),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(A.shapeFlag&1&&N&&!N.persisted){const{leave:O,delayLeave:$}=N,V=()=>O(v,B);$?$(A.el,B,V):V()}else B()},ie=(A,C)=>{let v;for(;A!==C;)v=h(A),r(A),A=v;r(C)},de=(A,C,v)=>{const{bum:z,scope:N,job:B,subTree:O,um:$,m:V,a:W}=A;Tc(V),Tc(W),z&&Ro(z),N.stop(),B&&(B.flags|=8,Ne(O,A,C,v)),$&&Vt($,C),Vt(()=>{A.isUnmounted=!0},C)},we=(A,C,v,z=!1,N=!1,B=0)=>{for(let O=B;O<A.length;O++)Ne(A[O],C,v,z,N)},me=A=>{if(A.shapeFlag&6)return me(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=h(A.anchor||A.el),v=C&&C[kd];return v?h(v):C};let Pe=!1;const Ve=(A,C,v)=>{A==null?C._vnode&&Ne(C._vnode,null,null,!0):x(C._vnode||null,A,C,null,null,null,v),C._vnode=A,Pe||(Pe=!0,mc(),bf(),Pe=!1)},Ie={p:x,um:Ne,m:ye,r:Ye,mt:ne,mc:D,pc:q,pbc:M,n:me,o:n};return{render:Ve,hydrate:void 0,createApp:dp(Ve)}}function Io({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function di({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ip(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Yf(n,e,t=!1){const i=n.children,r=e.children;if(Ge(i)&&Ge(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=jn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Yf(o,a)),a.type===xo&&a.patchFlag!==-1&&(a.el=o.el),a.type===si&&!a.el&&(a.el=o.el)}}function Np(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function $f(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$f(e)}function Tc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Kf=n=>n.__isSuspense;function Fp(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):Vd(n)}const Kt=Symbol.for("v-fgt"),xo=Symbol.for("v-txt"),si=Symbol.for("v-cmt"),No=Symbol.for("v-stc"),Or=[];let Gt=null;function wr(n=!1){Or.push(Gt=n?null:[])}function Op(){Or.pop(),Gt=Or[Or.length-1]||null}let Xr=1;function bc(n,e=!1){Xr+=n,n<0&&Gt&&e&&(Gt.hasOnce=!0)}function Zf(n){return n.dynamicChildren=Xr>0?Gt||nr:null,Op(),Xr>0&&Gt&&Gt.push(n),n}function ps(n,e,t,i,r,s){return Zf(io(n,e,t,i,r,s,!0))}function Bp(n,e,t,i,r){return Zf(Un(n,e,t,i,r,!0))}function Jf(n){return n?n.__v_isVNode===!0:!1}function Sr(n,e){return n.type===e.type&&n.key===e.key}const jf=({key:n})=>n??null,Gs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?xt(n)||mt(n)||Xe(n)?{i:dn,r:n,k:e,f:!!t}:n:null);function io(n,e=null,t=null,i=0,r=null,s=n===Kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&jf(e),ref:e&&Gs(e),scopeId:wf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dn};return a?(Gl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=xt(t)?8:16),Xr>0&&!o&&Gt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Gt.push(l),l}const Un=zp;function zp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===rp)&&(n=si),Jf(n)){const a=cr(n,e,!0);return t&&Gl(a,t),Xr>0&&!s&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(n)]=a:Gt.push(a)),a.patchFlag=-2,a}if(Jp(n)&&(n=n.__vccOpts),e){e=Hp(e);let{class:a,style:l}=e;a&&!xt(a)&&(e.class=Cl(a)),ft(l)&&(po(l)&&!Ge(l)&&(l=wt({},l)),e.style=Rl(l))}const o=xt(n)?1:Kf(n)?128:Wd(n)?64:ft(n)?4:Xe(n)?2:0;return io(n,e,t,i,r,o,s,!0)}function Hp(n){return n?po(n)||Vf(n)?wt({},n):n:null}function cr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?kp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&jf(c),ref:e&&e.ref?t&&s?Ge(s)?s.concat(Gs(e)):[s,Gs(e)]:Gs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Kt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&cr(n.ssContent),ssFallback:n.ssFallback&&cr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&zl(u,l.clone(u)),u}function Vp(n=" ",e=0){return Un(xo,null,n,e)}function Gp(n="",e=!1){return e?(wr(),Bp(si,null,n)):Un(si,null,n)}function fn(n){return n==null||typeof n=="boolean"?Un(si):Ge(n)?Un(Kt,null,n.slice()):Jf(n)?jn(n):Un(xo,null,String(n))}function jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:cr(n)}function Gl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Gl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Vf(e)?e._ctx=dn:r===3&&dn&&(dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:dn},t=32):(e=String(e),i&64?(t=16,e=[Vp(e)]):t=8);n.children=e,n.shapeFlag|=t}function kp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Cl([e.class,i.class]));else if(r==="style")e.style=Rl([e.style,i.style]);else if(ao(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ge(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function cn(n,e,t,i=null){gn(n,e,7,[t,i])}const Wp=Nf();let Xp=0;function qp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Wp,s={uid:Xp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kf(i,r),emitsOptions:Bf(i,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Sp.bind(null,s),n.ce&&n.ce(s),s}let Dt=null;const Qf=()=>Dt||dn;let ro,Ca;{const n=fo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ro=e("__VUE_INSTANCE_SETTERS__",t=>Dt=t),Ca=e("__VUE_SSR_SETTERS__",t=>qr=t)}const is=n=>{const e=Dt;return ro(n),n.scope.on(),()=>{n.scope.off(),ro(e)}},Ac=()=>{Dt&&Dt.scope.off(),ro(null)};function eh(n){return n.vnode.shapeFlag&4}let qr=!1;function Yp(n,e=!1,t=!1){e&&Ca(e);const{props:i,children:r}=n.vnode,s=eh(n);Ap(n,i,s,e),Pp(n,r,t||e);const o=s?$p(n,e):void 0;return e&&Ca(!1),o}function $p(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,op);const{setup:i}=t;if(i){Fn();const r=n.setupContext=i.length>1?Zp(n):null,s=is(n),o=ns(i,n,0,[n.props,r]),a=$u(o);if(On(),s(),(a||n.sp)&&!Ir(n)&&Rf(n),a){if(o.then(Ac,Ac),e)return o.then(l=>{wc(n,l)}).catch(l=>{go(l,n,0)});n.asyncDep=o}else wc(n,o)}else th(n)}function wc(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ft(e)&&(n.setupState=Mf(e)),th(n)}function th(n,e,t){const i=n.type;n.render||(n.render=i.render||pn);{const r=is(n);Fn();try{ap(n)}finally{On(),r()}}}const Kp={get(n,e){return At(n,"get",""),n[e]}};function Zp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Kp),slots:n.slots,emit:n.emit,expose:e}}function kl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Mf(Fl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Nr)return Nr[t](n)},has(e,t){return t in e||t in Nr}})):n.proxy}function Jp(n){return Xe(n)&&"__vccOpts"in n}const nh=(n,e)=>Fd(n,e,qr),jp="3.5.25";let Pa;const Rc=typeof window<"u"&&window.trustedTypes;if(Rc)try{Pa=Rc.createPolicy("vue",{createHTML:n=>n})}catch{}const ih=Pa?n=>Pa.createHTML(n):n=>n,Qp="http://www.w3.org/2000/svg",em="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,Cc=wn&&wn.createElement("template"),tm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?wn.createElementNS(Qp,n):e==="mathml"?wn.createElementNS(em,n):t?wn.createElement(n,{is:t}):wn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>wn.createTextNode(n),createComment:n=>wn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>wn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Cc.innerHTML=ih(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Cc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},nm=Symbol("_vtc");function im(n,e,t){const i=n[nm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Pc=Symbol("_vod"),rm=Symbol("_vsh"),sm=Symbol(""),om=/(?:^|;)\s*display\s*:/;function am(n,e,t){const i=n.style,r=xt(t);let s=!1;if(t&&!r){if(e)if(xt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ks(i,a,"")}else for(const o in e)t[o]==null&&ks(i,o,"");for(const o in t)o==="display"&&(s=!0),ks(i,o,t[o])}else if(r){if(e!==t){const o=i[sm];o&&(t+=";"+o),i.cssText=t,s=om.test(t)}}else e&&n.removeAttribute("style");Pc in n&&(n[Pc]=s?i.display:"",n[rm]&&(i.display="none"))}const Lc=/\s*!important$/;function ks(n,e,t){if(Ge(t))t.forEach(i=>ks(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=lm(n,e);Lc.test(t)?n.setProperty(Ui(i),t.replace(Lc,""),"important"):n[i]=t}}const Dc=["Webkit","Moz","ms"],Fo={};function lm(n,e){const t=Fo[e];if(t)return t;let i=ri(e);if(i!=="filter"&&i in n)return Fo[e]=i;i=Ju(i);for(let r=0;r<Dc.length;r++){const s=Dc[r]+i;if(s in n)return Fo[e]=s}return e}const Uc="http://www.w3.org/1999/xlink";function Ic(n,e,t,i,r,s=ad(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Uc,e.slice(6,e.length)):n.setAttributeNS(Uc,e,t):t==null||s&&!Qu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":li(t)?String(t):t)}function Nc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ih(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Qu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function cm(n,e,t,i){n.addEventListener(e,t,i)}function um(n,e,t,i){n.removeEventListener(e,t,i)}const Fc=Symbol("_vei");function fm(n,e,t,i,r=null){const s=n[Fc]||(n[Fc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=hm(e);if(i){const c=s[e]=mm(i,r);cm(n,a,c,l)}else o&&(um(n,a,o,l),s[e]=void 0)}}const Oc=/(?:Once|Passive|Capture)$/;function hm(n){let e;if(Oc.test(n)){e={};let i;for(;i=n.match(Oc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ui(n.slice(2)),e]}let Oo=0;const dm=Promise.resolve(),pm=()=>Oo||(dm.then(()=>Oo=0),Oo=Date.now());function mm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;gn(gm(i,t.value),e,5,[i])};return t.value=n,t.attached=pm(),t}function gm(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Bc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,_m=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?im(n,i,o):e==="style"?am(n,t,i):ao(e)?Al(e)||fm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vm(n,e,i,o))?(Nc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ic(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!xt(i))?Nc(n,ri(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ic(n,e,i,o))};function vm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Bc(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Bc(e)&&xt(t)?!1:e in n}const xm=wt({patchProp:_m},tm);let zc;function Sm(){return zc||(zc=Dp(xm))}const Mm=((...n)=>{const e=Sm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Em(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,ym(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function ym(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Em(n){return xt(n)?document.querySelector(n):n}const Wl="178",Tm=0,Hc=1,bm=2,rh=1,Am=2,An=3,oi=0,Ft=1,Cn=2,ni=0,sr=1,Vc=2,Gc=3,kc=4,wm=5,Ei=100,Rm=101,Cm=102,Pm=103,Lm=104,Dm=200,Um=201,Im=202,Nm=203,La=204,Da=205,Fm=206,Om=207,Bm=208,zm=209,Hm=210,Vm=211,Gm=212,km=213,Wm=214,Ua=0,Ia=1,Na=2,ur=3,Fa=4,Oa=5,Ba=6,za=7,sh=0,Xm=1,qm=2,ii=0,Ym=1,$m=2,Km=3,Zm=4,Jm=5,jm=6,Qm=7,oh=300,fr=301,hr=302,Ha=303,Va=304,So=306,Ga=1e3,bi=1001,ka=1002,an=1003,eg=1004,ms=1005,rn=1006,Bo=1007,Ai=1008,tg=1008,zn=1009,ah=1010,lh=1011,Yr=1012,Xl=1013,Pi=1014,Pn=1015,rs=1016,ql=1017,Yl=1018,$r=1020,ch=35902,uh=1021,fh=1022,sn=1023,Kr=1026,Zr=1027,hh=1028,$l=1029,dh=1030,Kl=1031,Zl=1033,Ws=33776,Xs=33777,qs=33778,Ys=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,$a=36196,Ka=37492,Za=37496,Ja=37808,ja=37809,Qa=37810,el=37811,tl=37812,nl=37813,il=37814,rl=37815,sl=37816,ol=37817,al=37818,ll=37819,cl=37820,ul=37821,$s=36492,fl=36494,hl=36495,ph=36283,dl=36284,pl=36285,ml=36286,ng=3200,ig=3201,rg=0,sg=1,ei="",$t="srgb",dr="srgb-linear",so="linear",it="srgb",Bi=7680,Wc=519,og=512,ag=513,lg=514,mh=515,cg=516,ug=517,fg=518,hg=519,Xc=35044,qc="300 es",Ln=2e3,oo=2001;class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zo=Math.PI/180,gl=180/Math.PI;function gr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function dg(n,e){return(n%e+e)%e}function Ho(n,e,t){return(1-t)*n+t*e}function Mr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ss{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*x,w=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const I=Math.sqrt(b),P=Math.atan2(I,d*w);m=Math.sin(m*P)/I,a=Math.sin(a*P)/I}const S=a*w;if(l=l*m+h*S,c=c*m+p*S,u=u*m+_*S,f=f*m+x*S,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new k,Yc=new ss;class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],x=r[0],m=r[3],d=r[6],w=r[1],b=r[4],S=r[7],I=r[2],P=r[5],R=r[8];return s[0]=o*x+a*w+l*I,s[3]=o*m+a*b+l*P,s[6]=o*d+a*S+l*R,s[1]=c*x+u*w+f*I,s[4]=c*m+u*b+f*P,s[7]=c*d+u*S+f*R,s[2]=h*x+p*w+_*I,s[5]=h*m+p*b+_*P,s[8]=h*d+p*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new We;function gh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pg(){const n=Jr("canvas");return n.style.display="block",n}const $c={};function or(n){n in $c||($c[n]=!0,console.warn(n))}function mg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function gg(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _g(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vg(){const n={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=In(r.r),r.g=In(r.g),r.b=In(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?so:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return or("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return or("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[dr]:{primaries:e,whitePoint:i,transfer:so,toXYZ:Kc,fromXYZ:Zc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Kc,fromXYZ:Zc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}const je=vg();function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zi;class xg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zi===void 0&&(zi=Jr("canvas")),zi.width=e.width,zi.height=e.height;const r=zi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=In(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(In(t[i]/255)*255):t[i]=In(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sg=0;class Jl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ko(r[o].image)):s.push(ko(r[o]))}else s=ko(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ko(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mg=0;const Wo=new k;class Ut extends Ii{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=bi,r=bi,s=rn,o=Ai,a=sn,l=zn,c=Ut.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=gr(),this.name="",this.source=new Jl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ga:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ga:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=oh;Ut.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(p+1)/2,I=(d+1)/2,P=(u+h)/4,R=(f+x)/4,D=(_+m)/4;return b>S&&b>I?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=P/i,s=R/i):S>I?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=D/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=R/s,r=D/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-x)/w,this.z=(h-u)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yg extends Ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ut(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends yg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _h extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eg extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qt):Qt.fromBufferAttribute(s,o),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),_s.subVectors(this.max,yr),Hi.subVectors(e.a,yr),Vi.subVectors(e.b,yr),Gi.subVectors(e.c,yr),Gn.subVectors(Vi,Hi),kn.subVectors(Gi,Vi),pi.subVectors(Hi,Gi);let t=[0,-Gn.z,Gn.y,0,-kn.z,kn.y,0,-pi.z,pi.y,Gn.z,0,-Gn.x,kn.z,0,-kn.x,pi.z,0,-pi.x,-Gn.y,Gn.x,0,-kn.y,kn.x,0,-pi.y,pi.x,0];return!Xo(t,Hi,Vi,Gi,_s)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Hi,Vi,Gi,_s))?!1:(vs.crossVectors(Gn,kn),t=[vs.x,vs.y,vs.z],Xo(t,Hi,Vi,Gi,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sn=[new k,new k,new k,new k,new k,new k,new k,new k],Qt=new k,gs=new os,Hi=new k,Vi=new k,Gi=new k,Gn=new k,kn=new k,pi=new k,yr=new k,_s=new k,vs=new k,mi=new k;function Xo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){mi.fromArray(n,s);const a=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Tg=new os,Er=new k,qo=new k;class jl{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Tg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Er,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(qo)),this.expandByPoint(Er.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mn=new k,Yo=new k,xs=new k,Wn=new k,$o=new k,Ss=new k,Ko=new k;class vh{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Yo.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Yo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xs),a=Wn.dot(this.direction),l=-Wn.dot(xs),c=Wn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Yo).addScaledVector(xs,h),p}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,r,s){$o.subVectors(t,e),Ss.subVectors(i,e),Ko.crossVectors($o,Ss);let o=this.direction.dot(Ko),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);const l=a*this.direction.dot(Ss.crossVectors(Wn,Ss));if(l<0)return null;const c=a*this.direction.dot($o.cross(Wn));if(c<0||l+c>o)return null;const u=-a*Wn.dot(Ko);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,_,x,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,x=c*f;t[0]=h+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bg,e,Ag)}lookAt(e,t,i){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Xn.crossVectors(i,zt),Xn.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Xn.crossVectors(i,zt)),Xn.normalize(),Ms.crossVectors(zt,Xn),r[0]=Xn.x,r[4]=Ms.x,r[8]=zt.x,r[1]=Xn.y,r[5]=Ms.y,r[9]=zt.y,r[2]=Xn.z,r[6]=Ms.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],w=i[3],b=i[7],S=i[11],I=i[15],P=r[0],R=r[4],D=r[8],T=r[12],M=r[1],L=r[5],te=r[9],Z=r[13],ne=r[2],re=r[6],K=r[10],ee=r[14],q=r[3],he=r[7],ve=r[11],ye=r[15];return s[0]=o*P+a*M+l*ne+c*q,s[4]=o*R+a*L+l*re+c*he,s[8]=o*D+a*te+l*K+c*ve,s[12]=o*T+a*Z+l*ee+c*ye,s[1]=u*P+f*M+h*ne+p*q,s[5]=u*R+f*L+h*re+p*he,s[9]=u*D+f*te+h*K+p*ve,s[13]=u*T+f*Z+h*ee+p*ye,s[2]=_*P+x*M+m*ne+d*q,s[6]=_*R+x*L+m*re+d*he,s[10]=_*D+x*te+m*K+d*ve,s[14]=_*T+x*Z+m*ee+d*ye,s[3]=w*P+b*M+S*ne+I*q,s[7]=w*R+b*L+S*re+I*he,s[11]=w*D+b*te+S*K+I*ve,s[15]=w*T+b*Z+S*ee+I*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],w=f*m*c-x*h*c+x*l*p-a*m*p-f*l*d+a*h*d,b=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,S=u*x*c-_*f*c+_*a*p-o*x*p-u*a*d+o*f*d,I=_*f*l-u*x*l-_*a*h+o*x*h+u*a*m-o*f*m,P=t*w+i*b+r*S+s*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=w*R,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*R,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=b*R,e[5]=(u*m*s-_*h*s+_*r*p-t*m*p-u*r*d+t*h*d)*R,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*d-t*l*d)*R,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*R,e[8]=S*R,e[9]=(_*f*s-u*x*s-_*i*p+t*x*p+u*i*d-t*f*d)*R,e[10]=(o*x*s-_*a*s+_*i*c-t*x*c-o*i*d+t*a*d)*R,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*R,e[12]=I*R,e[13]=(u*x*r-_*f*r+_*i*h-t*x*h-u*i*m+t*f*m)*R,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*R,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,x=o*u,m=o*f,d=a*f,w=l*c,b=l*u,S=l*f,I=i.x,P=i.y,R=i.z;return r[0]=(1-(x+d))*I,r[1]=(p+S)*I,r[2]=(_-b)*I,r[3]=0,r[4]=(p-S)*P,r[5]=(1-(h+d))*P,r[6]=(m+w)*P,r[7]=0,r[8]=(_+b)*R,r[9]=(m-w)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ki.set(r[0],r[1],r[2]).length();const o=ki.set(r[4],r[5],r[6]).length(),a=ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],en.copy(this);const c=1/s,u=1/o,f=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,t.setFromRotationMatrix(en),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ln){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===Ln)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===oo)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ln){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let _,x;if(a===Ln)_=(o+s)*f,x=-2*f;else if(a===oo)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new k,en=new gt,bg=new k(0,0,0),Ag=new k(1,1,1),Xn=new k,Ms=new k,zt=new k,Jc=new gt,jc=new ss;class Hn{constructor(e=0,t=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wg=0;const Qc=new k,Wi=new ss,yn=new gt,ys=new k,Tr=new k,Rg=new k,Cg=new ss,eu=new k(1,0,0),tu=new k(0,1,0),nu=new k(0,0,1),iu={type:"added"},Pg={type:"removed"},Xi={type:"childadded",child:null},Zo={type:"childremoved",child:null};class Wt extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new k,t=new Hn,i=new ss,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new We}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(eu,e)}rotateY(e){return this.rotateOnAxis(tu,e)}rotateZ(e){return this.rotateOnAxis(nu,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eu,e)}translateY(e){return this.translateOnAxis(tu,e)}translateZ(e){return this.translateOnAxis(nu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ys.copy(e):ys.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Tr,ys,this.up):yn.lookAt(ys,Tr,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(yn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iu),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pg),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iu),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,Rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new k(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new k,En=new k,Jo=new k,Tn=new k,qi=new k,Yi=new k,ru=new k,jo=new k,Qo=new k,ea=new k,ta=new _t,na=new _t,ia=new _t;class nn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tn.subVectors(e,t),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){tn.subVectors(r,t),En.subVectors(i,t),Jo.subVectors(e,t);const o=tn.dot(tn),a=tn.dot(En),l=tn.dot(Jo),c=En.dot(En),u=En.dot(Jo),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,i),ia.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ta,s.x),o.addScaledVector(na,s.y),o.addScaledVector(ia,s.z),o}static isFrontFacing(e,t,i,r){return tn.subVectors(i,t),En.subVectors(e,t),tn.cross(En).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),tn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;qi.subVectors(r,i),Yi.subVectors(s,i),jo.subVectors(e,i);const l=qi.dot(jo),c=Yi.dot(jo);if(l<=0&&c<=0)return t.copy(i);Qo.subVectors(e,r);const u=qi.dot(Qo),f=Yi.dot(Qo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(qi,o);ea.subVectors(e,s);const p=qi.dot(ea),_=Yi.dot(ea);if(_>=0&&p<=_)return t.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Yi,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return ru.subVectors(s,r),a=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(ru,a);const d=1/(m+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function ra(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=dg(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ra(o,s,e+1/3),this.g=ra(o,s,e),this.b=ra(o,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=$t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=xh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return je.workingToColorSpace(Tt.copy(this),e),Math.round($e(Tt.r*255,0,255))*65536+Math.round($e(Tt.g*255,0,255))*256+Math.round($e(Tt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Tt.copy(this),t);const i=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=$t){je.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,r=Tt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Es);const i=Ho(qn.h,Es.h,t),r=Ho(qn.s,Es.s,t),s=Ho(qn.l,Es.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new tt;tt.NAMES=xh;let Lg=0;class Mo extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=sr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Da,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==La&&(i.blendSrc=this.blendSrc),this.blendDst!==Da&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class as extends Mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new k,Ts=new Te;let Dg=0;class mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xc&&(e.usage=this.usage),e}}class Sh extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mh extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ug=0;const Yt=new gt,sa=new Wt,$i=new k,Ht=new os,br=new os,yt=new k;class ci extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gh(e)?Mh:Sh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];br.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Ht.min,br.min),Ht.expandByPoint(yt),yt.addVectors(Ht.max,br.max),Ht.expandByPoint(yt)):(Ht.expandByPoint(br.min),Ht.expandByPoint(br.max))}Ht.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(e,c),yt.add($i)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new k,l[D]=new k;const c=new k,u=new k,f=new k,h=new Te,p=new Te,_=new Te,x=new k,m=new k;function d(D,T,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),a[D].add(x),a[T].add(x),a[M].add(x),l[D].add(m),l[T].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,T=w.length;D<T;++D){const M=w[D],L=M.start,te=M.count;for(let Z=L,ne=L+te;Z<ne;Z+=3)d(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const b=new k,S=new k,I=new k,P=new k;function R(D){I.fromBufferAttribute(r,D),P.copy(I);const T=a[D];b.copy(T),b.sub(I.multiplyScalar(I.dot(T))).normalize(),S.crossVectors(P,T);const L=S.dot(l[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,L)}for(let D=0,T=w.length;D<T;++D){const M=w[D],L=M.start,te=M.count;for(let Z=L,ne=L+te;Z<ne;Z+=3)R(e.getX(Z+0)),R(e.getX(Z+1)),R(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new mn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const su=new gt,gi=new vh,bs=new jl,ou=new k,As=new k,ws=new k,Rs=new k,oa=new k,Cs=new k,au=new k,Ps=new k;class Jt extends Wt{constructor(e=new ci,t=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Cs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(oa.fromBufferAttribute(f,e),o?Cs.addScaledVector(oa,u):Cs.addScaledVector(oa.sub(t),u))}t.add(Cs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(s),gi.copy(e.ray).recast(e.near),!(bs.containsPoint(gi.origin)===!1&&(gi.intersectSphere(bs,ou)===null||gi.origin.distanceToSquared(ou)>(e.far-e.near)**2))&&(su.copy(s).invert(),gi.copy(e.ray).applyMatrix4(su),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,I=b;S<I;S+=3){const P=a.getX(S),R=a.getX(S+1),D=a.getX(S+2);r=Ls(this,d,e,i,c,u,f,P,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const w=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);r=Ls(this,o,e,i,c,u,f,w,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,I=b;S<I;S+=3){const P=S,R=S+1,D=S+2;r=Ls(this,d,e,i,c,u,f,P,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const w=m,b=m+1,S=m+2;r=Ls(this,o,e,i,c,u,f,w,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ig(n,e,t,i,r,s,o,a){let l;if(e.side===Ft?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===oi,a),l===null)return null;Ps.copy(a),Ps.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ps);return c<t.near||c>t.far?null:{distance:c,point:Ps.clone(),object:n}}function Ls(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,As),n.getVertexPosition(l,ws),n.getVertexPosition(c,Rs);const u=Ig(n,e,t,i,As,ws,Rs,au);if(u){const f=new k;nn.getBarycoord(au,As,ws,Rs,f),r&&(u.uv=nn.getInterpolatedAttribute(r,a,l,c,f,new Te)),s&&(u.uv1=nn.getInterpolatedAttribute(s,a,l,c,f,new Te)),o&&(u.normal=nn.getInterpolatedAttribute(o,a,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};nn.getNormal(As,ws,Rs,h.normal),u.face=h,u.barycoord=f}return u}class Ni extends ci{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(f,2));function _(x,m,d,w,b,S,I,P,R,D,T){const M=S/R,L=I/D,te=S/2,Z=I/2,ne=P/2,re=R+1,K=D+1;let ee=0,q=0;const he=new k;for(let ve=0;ve<K;ve++){const ye=ve*L-Z;for(let Ne=0;Ne<re;Ne++){const Ye=Ne*M-te;he[x]=Ye*w,he[m]=ye*b,he[d]=ne,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[d]=P>0?1:-1,u.push(he.x,he.y,he.z),f.push(Ne/R),f.push(1-ve/D),ee+=1}}for(let ve=0;ve<D;ve++)for(let ye=0;ye<R;ye++){const Ne=h+ye+re*ve,Ye=h+ye+re*(ve+1),ie=h+(ye+1)+re*(ve+1),de=h+(ye+1)+re*ve;l.push(Ne,Ye,de),l.push(Ye,ie,de),q+=6}a.addGroup(p,q,T),p+=q,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=pr(n[t]);for(const r in i)e[r]=i[r]}return e}function Ng(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Fg={clone:pr,merge:Pt};var Og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Og,this.fragmentShader=Bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=Ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Eh extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new k,lu=new Te,cu=new Te;class Zt extends Eh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,lu,cu),t.subVectors(cu,lu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Zi=1;class zg extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(Ki,Zi,e,t);r.layers=this.layers,this.add(r);const s=new Zt(Ki,Zi,e,t);s.layers=this.layers,this.add(s);const o=new Zt(Ki,Zi,e,t);o.layers=this.layers,this.add(o);const a=new Zt(Ki,Zi,e,t);a.layers=this.layers,this.add(a);const l=new Zt(Ki,Zi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Ki,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Th extends Ut{constructor(e=[],t=fr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hg extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Th(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ni(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:ni});s.uniforms.tEquirect.value=t;const o=new Jt(r,s),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=rn),new zg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Ds extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vg={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Gg extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const la=new k,kg=new k,Wg=new We;class Mi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=la.subVectors(i,t).cross(kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(la),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wg.getNormalMatrix(e),r=this.coplanarPoint(la).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new jl,Xg=new Te(.5,.5),Us=new k;class bh{constructor(e=new Mi,t=new Mi,i=new Mi,r=new Mi,s=new Mi,o=new Mi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],_=r[9],x=r[10],m=r[11],d=r[12],w=r[13],b=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-d).normalize(),i[1].setComponents(l+s,h+c,m+p,S+d).normalize(),i[2].setComponents(l+o,h+u,m+_,S+w).normalize(),i[3].setComponents(l-o,h-u,m-_,S-w).normalize(),i[4].setComponents(l-a,h-f,m-x,S-b).normalize(),t===Ln)i[5].setComponents(l+a,h+f,m+x,S+b).normalize();else if(t===oo)i[5].setComponents(a,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=Xg.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Us.x=r.normal.x>0?e.max.x:e.min.x,Us.y=r.normal.y>0?e.max.y:e.min.y,Us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ah extends Ut{constructor(e,t,i=Pi,r,s,o,a=an,l=an,c,u=Kr,f=1){if(u!==Kr&&u!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Te:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new k,r=[],s=[],o=[],a=new k,l=new gt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos($e(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos($e(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ec extends _n{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Te){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qg extends ec{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function tc(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Is=new k,ca=new tc,ua=new tc,fa=new tc;class Yg extends _n{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new k){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Is.subVectors(r[0],r[1]).add(r[0]),c=Is);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Is.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Is),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),ca.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,x,m),ua.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,x,m),fa.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),ua.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),fa.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(ca.calc(l),ua.calc(l),fa.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uu(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function $g(n,e){const t=1-n;return t*t*e}function Kg(n,e){return 2*(1-n)*n*e}function Zg(n,e){return n*n*e}function Br(n,e,t,i){return $g(n,e)+Kg(n,t)+Zg(n,i)}function Jg(n,e){const t=1-n;return t*t*t*e}function jg(n,e){const t=1-n;return 3*t*t*n*e}function Qg(n,e){return 3*(1-n)*n*n*e}function e_(n,e){return n*n*n*e}function zr(n,e,t,i,r){return Jg(n,e)+jg(n,t)+Qg(n,i)+e_(n,r)}class wh extends _n{constructor(e=new Te,t=new Te,i=new Te,r=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Te){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zr(e,r.x,s.x,o.x,a.x),zr(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class t_ extends _n{constructor(e=new k,t=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new k){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zr(e,r.x,s.x,o.x,a.x),zr(e,r.y,s.y,o.y,a.y),zr(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rh extends _n{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class n_ extends _n{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ch extends _n{constructor(e=new Te,t=new Te,i=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Te){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Br(e,r.x,s.x,o.x),Br(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i_ extends _n{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Br(e,r.x,s.x,o.x),Br(e,r.y,s.y,o.y),Br(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ph extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(uu(a,l.x,c.x,u.x,f.x),uu(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Te().fromArray(r))}return this}}var _l=Object.freeze({__proto__:null,ArcCurve:qg,CatmullRomCurve3:Yg,CubicBezierCurve:wh,CubicBezierCurve3:t_,EllipseCurve:ec,LineCurve:Rh,LineCurve3:n_,QuadraticBezierCurve:Ch,QuadraticBezierCurve3:i_,SplineCurve:Ph});class r_ extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _l[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new _l[r.type]().fromJSON(r))}return this}}class vl extends r_{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Rh(this.currentPoint.clone(),new Te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Ch(this.currentPoint.clone(),new Te(e,t),new Te(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new wh(this.currentPoint.clone(),new Te(e,t),new Te(i,r),new Te(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ph(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new ec(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ks extends vl{constructor(e){super(e),this.uuid=gr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new vl().fromJSON(r))}return this}}function s_(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Lh(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=u_(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,f=-1/0;for(let h=t;h<r;h+=t){const p=n[h],_=n[h+1];p<a&&(a=p),_<l&&(l=_),p>u&&(u=p),_>f&&(f=_)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return jr(s,o,t,a,l,c,0),o}function Lh(n,e,t,i,r){let s;if(r===M_(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=fu(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=fu(o/i|0,n[o],n[o+1],s);return s&&mr(s,s.next)&&(es(s),s=s.next),s}function Di(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(mr(t,t.next)||dt(t.prev,t,t.next)===0)){if(es(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function jr(n,e,t,i,r,s,o){if(!n)return;!o&&s&&m_(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?a_(n,i,r,s):o_(n)){e.push(l.i,n.i,c.i),es(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=l_(Di(n),e),jr(n,e,t,i,r,s,2)):o===2&&c_(n,e,t,i,r,s):jr(Di(n),e,t,i,r,s,1);break}}}function o_(n){const e=n.prev,t=n,i=n.next;if(dt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),p=Math.max(a,l,c);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=p&&Rr(r,a,s,l,o,c,_.x,_.y)&&dt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function a_(n,e,t,i){const r=n.prev,s=n,o=n.next;if(dt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=Math.min(a,l,c),_=Math.min(u,f,h),x=Math.max(a,l,c),m=Math.max(u,f,h),d=xl(p,_,e,t,i),w=xl(x,m,e,t,i);let b=n.prevZ,S=n.nextZ;for(;b&&b.z>=d&&S&&S.z<=w;){if(b.x>=p&&b.x<=x&&b.y>=_&&b.y<=m&&b!==r&&b!==o&&Rr(a,u,l,f,c,h,b.x,b.y)&&dt(b.prev,b,b.next)>=0||(b=b.prevZ,S.x>=p&&S.x<=x&&S.y>=_&&S.y<=m&&S!==r&&S!==o&&Rr(a,u,l,f,c,h,S.x,S.y)&&dt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=x&&b.y>=_&&b.y<=m&&b!==r&&b!==o&&Rr(a,u,l,f,c,h,b.x,b.y)&&dt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;S&&S.z<=w;){if(S.x>=p&&S.x<=x&&S.y>=_&&S.y<=m&&S!==r&&S!==o&&Rr(a,u,l,f,c,h,S.x,S.y)&&dt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function l_(n,e){let t=n;do{const i=t.prev,r=t.next.next;!mr(i,r)&&Uh(i,t,t.next,r)&&Qr(i,r)&&Qr(r,i)&&(e.push(i.i,t.i,r.i),es(t),es(t.next),t=n=r),t=t.next}while(t!==n);return Di(t)}function c_(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&v_(o,a)){let l=Ih(o,a);o=Di(o,o.next),l=Di(l,l.next),jr(o,e,t,i,r,s,0),jr(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function u_(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Lh(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(__(c))}r.sort(f_);for(let s=0;s<r.length;s++)t=h_(r[s],t);return t}function f_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function h_(n,e){const t=d_(n,e);if(!t)return e;const i=Ih(t,n);return Di(i,i.next),Di(t,t.next)}function d_(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(mr(n,t))return t;do{if(mr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Dh(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);Qr(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&p_(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function p_(n,e){return dt(n.prev,n,e.prev)<0&&dt(e.next,n,n.next)<0}function m_(n,e,t,i){let r=n;do r.z===0&&(r.z=xl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,g_(r)}function g_(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function xl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function __(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Dh(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Rr(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Dh(n,e,t,i,r,s,o,a)}function v_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!x_(n,e)&&(Qr(n,e)&&Qr(e,n)&&S_(n,e)&&(dt(n.prev,n,e.prev)||dt(n,e.prev,e))||mr(n,e)&&dt(n.prev,n,n.next)>0&&dt(e.prev,e,e.next)>0)}function dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function mr(n,e){return n.x===e.x&&n.y===e.y}function Uh(n,e,t,i){const r=Fs(dt(n,e,t)),s=Fs(dt(n,e,i)),o=Fs(dt(t,i,n)),a=Fs(dt(t,i,e));return!!(r!==s&&o!==a||r===0&&Ns(n,t,e)||s===0&&Ns(n,i,e)||o===0&&Ns(t,n,i)||a===0&&Ns(t,e,i))}function Ns(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fs(n){return n>0?1:n<0?-1:0}function x_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Uh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Qr(n,e){return dt(n.prev,n,n.next)<0?dt(n,e,n.next)>=0&&dt(n,n.prev,e)>=0:dt(n,e,n.prev)<0||dt(n,n.next,e)<0}function S_(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ih(n,e){const t=Sl(n.i,n.x,n.y),i=Sl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function fu(n,e,t,i){const r=Sl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function es(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Sl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function M_(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class y_{static triangulate(e,t,i=2){return s_(e,t,i)}}class wi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return wi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];hu(e),du(i,e);let o=e.length;t.forEach(hu);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,du(i,t[l]);const a=y_.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function hu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function du(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class nc extends ci{constructor(e=new Ks([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Nn(r,3)),this.setAttribute("uv",new Nn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:E_;let b,S=!1,I,P,R,D;d&&(b=d.getSpacedPoints(u),S=!0,h=!1,I=d.computeFrenetFrames(u,!1),P=new k,R=new k,D=new k),h||(m=0,p=0,_=0,x=0);const T=a.extractPoints(c);let M=T.shape;const L=T.holes;if(!wi.isClockWise(M)){M=M.reverse();for(let v=0,z=L.length;v<z;v++){const N=L[v];wi.isClockWise(N)&&(L[v]=N.reverse())}}function Z(v){const N=10000000000000001e-36;let B=v[0];for(let O=1;O<=v.length;O++){const $=O%v.length,V=v[$],W=V.x-B.x,le=V.y-B.y,y=W*W+le*le,g=Math.max(Math.abs(V.x),Math.abs(V.y),Math.abs(B.x),Math.abs(B.y)),U=N*g*g;if(y<=U){v.splice($,1),O--;continue}B=V}}Z(M),L.forEach(Z);const ne=L.length,re=M;for(let v=0;v<ne;v++){const z=L[v];M=M.concat(z)}function K(v,z,N){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),v.clone().addScaledVector(z,N)}const ee=M.length;function q(v,z,N){let B,O,$;const V=v.x-z.x,W=v.y-z.y,le=N.x-v.x,y=N.y-v.y,g=V*V+W*W,U=V*y-W*le;if(Math.abs(U)>Number.EPSILON){const X=Math.sqrt(g),Q=Math.sqrt(le*le+y*y),Y=z.x-W/X,_e=z.y+V/X,ce=N.x-y/Q,xe=N.y+le/Q,Ee=((ce-Y)*y-(xe-_e)*le)/(V*y-W*le);B=Y+V*Ee-v.x,O=_e+W*Ee-v.y;const oe=B*B+O*O;if(oe<=2)return new Te(B,O);$=Math.sqrt(oe/2)}else{let X=!1;V>Number.EPSILON?le>Number.EPSILON&&(X=!0):V<-Number.EPSILON?le<-Number.EPSILON&&(X=!0):Math.sign(W)===Math.sign(y)&&(X=!0),X?(B=-W,O=V,$=Math.sqrt(g)):(B=V,O=W,$=Math.sqrt(g/2))}return new Te(B/$,O/$)}const he=[];for(let v=0,z=re.length,N=z-1,B=v+1;v<z;v++,N++,B++)N===z&&(N=0),B===z&&(B=0),he[v]=q(re[v],re[N],re[B]);const ve=[];let ye,Ne=he.concat();for(let v=0,z=ne;v<z;v++){const N=L[v];ye=[];for(let B=0,O=N.length,$=O-1,V=B+1;B<O;B++,$++,V++)$===O&&($=0),V===O&&(V=0),ye[B]=q(N[B],N[$],N[V]);ve.push(ye),Ne=Ne.concat(ye)}let Ye;if(m===0)Ye=wi.triangulateShape(re,L);else{const v=[],z=[];for(let N=0;N<m;N++){const B=N/m,O=p*Math.cos(B*Math.PI/2),$=_*Math.sin(B*Math.PI/2)+x;for(let V=0,W=re.length;V<W;V++){const le=K(re[V],he[V],$);Ve(le.x,le.y,-O),B===0&&v.push(le)}for(let V=0,W=ne;V<W;V++){const le=L[V];ye=ve[V];const y=[];for(let g=0,U=le.length;g<U;g++){const X=K(le[g],ye[g],$);Ve(X.x,X.y,-O),B===0&&y.push(X)}B===0&&z.push(y)}}Ye=wi.triangulateShape(v,z)}const ie=Ye.length,de=_+x;for(let v=0;v<ee;v++){const z=h?K(M[v],Ne[v],de):M[v];S?(R.copy(I.normals[0]).multiplyScalar(z.x),P.copy(I.binormals[0]).multiplyScalar(z.y),D.copy(b[0]).add(R).add(P),Ve(D.x,D.y,D.z)):Ve(z.x,z.y,0)}for(let v=1;v<=u;v++)for(let z=0;z<ee;z++){const N=h?K(M[z],Ne[z],de):M[z];S?(R.copy(I.normals[v]).multiplyScalar(N.x),P.copy(I.binormals[v]).multiplyScalar(N.y),D.copy(b[v]).add(R).add(P),Ve(D.x,D.y,D.z)):Ve(N.x,N.y,f/u*v)}for(let v=m-1;v>=0;v--){const z=v/m,N=p*Math.cos(z*Math.PI/2),B=_*Math.sin(z*Math.PI/2)+x;for(let O=0,$=re.length;O<$;O++){const V=K(re[O],he[O],B);Ve(V.x,V.y,f+N)}for(let O=0,$=L.length;O<$;O++){const V=L[O];ye=ve[O];for(let W=0,le=V.length;W<le;W++){const y=K(V[W],ye[W],B);S?Ve(y.x,y.y+b[u-1].y,b[u-1].x+N):Ve(y.x,y.y,f+N)}}}we(),me();function we(){const v=r.length/3;if(h){let z=0,N=ee*z;for(let B=0;B<ie;B++){const O=Ye[B];Ie(O[2]+N,O[1]+N,O[0]+N)}z=u+m*2,N=ee*z;for(let B=0;B<ie;B++){const O=Ye[B];Ie(O[0]+N,O[1]+N,O[2]+N)}}else{for(let z=0;z<ie;z++){const N=Ye[z];Ie(N[2],N[1],N[0])}for(let z=0;z<ie;z++){const N=Ye[z];Ie(N[0]+ee*u,N[1]+ee*u,N[2]+ee*u)}}i.addGroup(v,r.length/3-v,0)}function me(){const v=r.length/3;let z=0;Pe(re,z),z+=re.length;for(let N=0,B=L.length;N<B;N++){const O=L[N];Pe(O,z),z+=O.length}i.addGroup(v,r.length/3-v,1)}function Pe(v,z){let N=v.length;for(;--N>=0;){const B=N;let O=N-1;O<0&&(O=v.length-1);for(let $=0,V=u+m*2;$<V;$++){const W=ee*$,le=ee*($+1),y=z+B+W,g=z+O+W,U=z+O+le,X=z+B+le;st(y,g,U,X)}}}function Ve(v,z,N){l.push(v),l.push(z),l.push(N)}function Ie(v,z,N){A(v),A(z),A(N);const B=r.length/3,O=w.generateTopUV(i,r,B-3,B-2,B-1);C(O[0]),C(O[1]),C(O[2])}function st(v,z,N,B){A(v),A(z),A(B),A(z),A(N),A(B);const O=r.length/3,$=w.generateSideWallUV(i,r,O-6,O-3,O-2,O-1);C($[0]),C($[1]),C($[3]),C($[1]),C($[2]),C($[3])}function A(v){r.push(l[v*3+0]),r.push(l[v*3+1]),r.push(l[v*3+2])}function C(v){s.push(v.x),s.push(v.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return T_(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new _l[r.type]().fromJSON(r)),new nc(i,e.options)}}const E_={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Te(s,o),new Te(a,l),new Te(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],_=e[r*3+2],x=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Te(o,1-l),new Te(c,1-f),new Te(h,1-_),new Te(x,1-d)]:[new Te(a,1-l),new Te(u,1-f),new Te(p,1-_),new Te(m,1-d)]}};function T_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class yo extends ci{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const w=d*h-o;for(let b=0;b<c;b++){const S=b*f-s;_.push(S,-w,0),x.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const b=w+c*d,S=w+c*(d+1),I=w+1+c*(d+1),P=w+1+c*d;p.push(b,S,P),p.push(S,I,P)}this.setIndex(p),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(x,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class b_ extends Mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ng,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class A_ extends Mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class w_{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const R_=new w_;class ls{constructor(e){this.manager=e!==void 0?e:R_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ls.DEFAULT_MATERIAL_NAME="__DEFAULT";const bn={};class C_ extends Error{constructor(e,t){super(e),this.response=t}}class P_ extends ls{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Hr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(bn[e]!==void 0){bn[e].push({onLoad:t,onProgress:i,onError:r});return}bn[e]=[],bn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bn[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,_=p!==0;let x=0;const m=new ReadableStream({start(d){w();function w(){f.read().then(({done:b,value:S})=>{if(b)d.close();else{x+=S.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let P=0,R=u.length;P<R;P++){const D=u[P];D.onProgress&&D.onProgress(I)}d.enqueue(S),w()}},b=>{d.error(b)})}}});return new Response(m)}else throw new C_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Hr.add(`file:${e}`,c);const u=bn[e];delete bn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete bn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const Ji=new WeakMap;class L_ extends ls{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Hr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=Ji.get(o);f===void 0&&(f=[],Ji.set(o,f)),f.push({onLoad:t,onError:r})}return o}const a=Jr("img");function l(){u(),t&&t(this);const f=Ji.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}Ji.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Hr.remove(`image:${e}`);const h=Ji.get(this)||[];for(let p=0;p<h.length;p++){const _=h[p];_.onError&&_.onError(f)}Ji.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class D_ extends ls{constructor(e){super(e)}load(e,t,i,r){const s=new Ut,o=new L_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class U_ extends Eh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class I_ extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const pu=new gt;class N_{constructor(e,t,i=0,r=1/0){this.ray=new vh(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pu),this}intersectObject(e,t=!0,i=[]){return Ml(e,this,i,t),i.sort(mu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ml(e[r],this,i,t);return i.sort(mu),i}}function mu(n,e){return n.distance-e.distance}function Ml(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Ml(s[o],e,t,!0)}}class F_{constructor(){this.type="ShapePath",this.color=new tt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new vl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const w=[];for(let b=0,S=d.length;b<S;b++){const I=d[b],P=new Ks;P.curves=I.curves,w.push(P)}return w}function i(d,w){const b=w.length;let S=!1;for(let I=b-1,P=0;P<b;I=P++){let R=w[I],D=w[P],T=D.x-R.x,M=D.y-R.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(R=w[P],T=-T,D=w[I],M=-M),d.y<R.y||d.y>D.y)continue;if(d.y===R.y){if(d.x===R.x)return!0}else{const L=M*(d.x-R.x)-T*(d.y-R.y);if(L===0)return!0;if(L<0)continue;S=!S}}else{if(d.y!==R.y)continue;if(D.x<=d.x&&d.x<=R.x||R.x<=d.x&&d.x<=D.x)return!0}}return S}const r=wi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Ks,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const f=[],h=[];let p=[],_=0,x;h[_]=void 0,p[_]=[];for(let d=0,w=s.length;d<w;d++)a=s[d],x=a.getPoints(),o=r(x),o=e?!o:o,o?(!u&&h[_]&&_++,h[_]={s:new Ks,p:x},h[_].s.curves=a.curves,u&&_++,p[_]=[]):p[_].push({h:a,p:x[0]});if(!h[0])return t(s);if(h.length>1){let d=!1,w=0;for(let b=0,S=h.length;b<S;b++)f[b]=[];for(let b=0,S=h.length;b<S;b++){const I=p[b];for(let P=0;P<I.length;P++){const R=I[P];let D=!0;for(let T=0;T<h.length;T++)i(R.p,h[T].p)&&(b!==T&&w++,D?(D=!1,f[T].push(R)):d=!0);D&&f[b].push(R)}}w>0&&d===!1&&(p=f)}let m;for(let d=0,w=h.length;d<w;d++){l=h[d].s,c.push(l),m=p[d];for(let b=0,S=m.length;b<S;b++)l.holes.push(m[b].h)}return c}}function gu(n,e,t,i){const r=O_(i);switch(t){case uh:return n*e;case hh:return n*e/r.components*r.byteLength;case $l:return n*e/r.components*r.byteLength;case dh:return n*e*2/r.components*r.byteLength;case Kl:return n*e*2/r.components*r.byteLength;case fh:return n*e*3/r.components*r.byteLength;case sn:return n*e*4/r.components*r.byteLength;case Zl:return n*e*4/r.components*r.byteLength;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qs:case Ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ya:return Math.max(n,16)*Math.max(e,8)/4;case Wa:case qa:return Math.max(n,8)*Math.max(e,8)/2;case $a:case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $s:case fl:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ph:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pl:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function O_(n){switch(n){case zn:case ah:return{byteLength:1,components:1};case Yr:case lh:case rs:return{byteLength:2,components:1};case ql:case Yl:return{byteLength:2,components:4};case Pi:case Xl:case Pn:return{byteLength:4,components:1};case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);function Nh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function B_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,j_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Q_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Av=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ov=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$v=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ax=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:z_,alphahash_pars_fragment:H_,alphamap_fragment:V_,alphamap_pars_fragment:G_,alphatest_fragment:k_,alphatest_pars_fragment:W_,aomap_fragment:X_,aomap_pars_fragment:q_,batching_pars_vertex:Y_,batching_vertex:$_,begin_vertex:K_,beginnormal_vertex:Z_,bsdfs:J_,iridescence_fragment:j_,bumpmap_pars_fragment:Q_,clipping_planes_fragment:ev,clipping_planes_pars_fragment:tv,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:rv,color_pars_fragment:sv,color_pars_vertex:ov,color_vertex:av,common:lv,cube_uv_reflection_fragment:cv,defaultnormal_vertex:uv,displacementmap_pars_vertex:fv,displacementmap_vertex:hv,emissivemap_fragment:dv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:gv,envmap_fragment:_v,envmap_common_pars_fragment:vv,envmap_pars_fragment:xv,envmap_pars_vertex:Sv,envmap_physical_pars_fragment:Lv,envmap_vertex:Mv,fog_vertex:yv,fog_pars_vertex:Ev,fog_fragment:Tv,fog_pars_fragment:bv,gradientmap_pars_fragment:Av,lightmap_pars_fragment:wv,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Cv,lights_pars_begin:Pv,lights_toon_fragment:Dv,lights_toon_pars_fragment:Uv,lights_phong_fragment:Iv,lights_phong_pars_fragment:Nv,lights_physical_fragment:Fv,lights_physical_pars_fragment:Ov,lights_fragment_begin:Bv,lights_fragment_maps:zv,lights_fragment_end:Hv,logdepthbuf_fragment:Vv,logdepthbuf_pars_fragment:Gv,logdepthbuf_pars_vertex:kv,logdepthbuf_vertex:Wv,map_fragment:Xv,map_pars_fragment:qv,map_particle_fragment:Yv,map_particle_pars_fragment:$v,metalnessmap_fragment:Kv,metalnessmap_pars_fragment:Zv,morphinstance_vertex:Jv,morphcolor_vertex:jv,morphnormal_vertex:Qv,morphtarget_pars_vertex:ex,morphtarget_vertex:tx,normal_fragment_begin:nx,normal_fragment_maps:ix,normal_pars_fragment:rx,normal_pars_vertex:sx,normal_vertex:ox,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:lx,clearcoat_normal_fragment_maps:cx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:fx,opaque_fragment:hx,packing:dx,premultiplied_alpha_fragment:px,project_vertex:mx,dithering_fragment:gx,dithering_pars_fragment:_x,roughnessmap_fragment:vx,roughnessmap_pars_fragment:xx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:Mx,shadowmap_vertex:yx,shadowmask_pars_fragment:Ex,skinbase_vertex:Tx,skinning_pars_vertex:bx,skinning_vertex:Ax,skinnormal_vertex:wx,specularmap_fragment:Rx,specularmap_pars_fragment:Cx,tonemapping_fragment:Px,tonemapping_pars_fragment:Lx,transmission_fragment:Dx,transmission_pars_fragment:Ux,uv_pars_fragment:Ix,uv_pars_vertex:Nx,uv_vertex:Fx,worldpos_vertex:Ox,background_vert:Bx,background_frag:zx,backgroundCube_vert:Hx,backgroundCube_frag:Vx,cube_vert:Gx,cube_frag:kx,depth_vert:Wx,depth_frag:Xx,distanceRGBA_vert:qx,distanceRGBA_frag:Yx,equirect_vert:$x,equirect_frag:Kx,linedashed_vert:Zx,linedashed_frag:Jx,meshbasic_vert:jx,meshbasic_frag:Qx,meshlambert_vert:e0,meshlambert_frag:t0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:r0,meshnormal_frag:s0,meshphong_vert:o0,meshphong_frag:a0,meshphysical_vert:l0,meshphysical_frag:c0,meshtoon_vert:u0,meshtoon_frag:f0,points_vert:h0,points_frag:d0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:_0},ge={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},hn={basic:{uniforms:Pt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Pt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Pt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Pt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Pt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Pt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Pt([ge.points,ge.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Pt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Pt([ge.common,ge.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Pt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Pt([ge.sprite,ge.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Pt([ge.common,ge.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Pt([ge.lights,ge.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};hn.physical={uniforms:Pt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Os={r:0,b:0,g:0},vi=new Hn,v0=new gt;function x0(n,e,t,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function x(b){let S=!1;const I=_(b);I===null?d(a,l):I&&I.isColor&&(d(I,1),S=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,S){const I=_(S);I&&(I.isCubeTexture||I.mapping===So)?(u===void 0&&(u=new Jt(new Ni(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:pr(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vi.copy(S.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(vi)),u.material.toneMapped=je.getTransfer(I.colorSpace)!==it,(f!==I||h!==I.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Jt(new yo(2,2),new ai({name:"BackgroundMaterial",uniforms:pr(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=je.getTransfer(I.colorSpace)!==it,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,h=I.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,S){b.getRGB(Os,yh(n)),i.buffers.color.setClear(Os.r,Os.g,Os.b,S,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:x,addToRenderList:m,dispose:w}}function S0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,L,te,Z,ne){let re=!1;const K=f(Z,te,L);s!==K&&(s=K,c(s.object)),re=p(M,Z,te,ne),re&&_(M,Z,te,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,S(M,L,te,Z),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,L,te){const Z=te.wireframe===!0;let ne=i[M.id];ne===void 0&&(ne={},i[M.id]=ne);let re=ne[L.id];re===void 0&&(re={},ne[L.id]=re);let K=re[Z];return K===void 0&&(K=h(l()),re[Z]=K),K}function h(M){const L=[],te=[],Z=[];for(let ne=0;ne<t;ne++)L[ne]=0,te[ne]=0,Z[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:te,attributeDivisors:Z,object:M,attributes:{},index:null}}function p(M,L,te,Z){const ne=s.attributes,re=L.attributes;let K=0;const ee=te.getAttributes();for(const q in ee)if(ee[q].location>=0){const ve=ne[q];let ye=re[q];if(ye===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ve===void 0||ve.attribute!==ye||ye&&ve.data!==ye.data)return!0;K++}return s.attributesNum!==K||s.index!==Z}function _(M,L,te,Z){const ne={},re=L.attributes;let K=0;const ee=te.getAttributes();for(const q in ee)if(ee[q].location>=0){let ve=re[q];ve===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor));const ye={};ye.attribute=ve,ve&&ve.data&&(ye.data=ve.data),ne[q]=ye,K++}s.attributes=ne,s.attributesNum=K,s.index=Z}function x(){const M=s.newAttributes;for(let L=0,te=M.length;L<te;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){const te=s.newAttributes,Z=s.enabledAttributes,ne=s.attributeDivisors;te[M]=1,Z[M]===0&&(n.enableVertexAttribArray(M),Z[M]=1),ne[M]!==L&&(n.vertexAttribDivisor(M,L),ne[M]=L)}function w(){const M=s.newAttributes,L=s.enabledAttributes;for(let te=0,Z=L.length;te<Z;te++)L[te]!==M[te]&&(n.disableVertexAttribArray(te),L[te]=0)}function b(M,L,te,Z,ne,re,K){K===!0?n.vertexAttribIPointer(M,L,te,ne,re):n.vertexAttribPointer(M,L,te,Z,ne,re)}function S(M,L,te,Z){x();const ne=Z.attributes,re=te.getAttributes(),K=L.defaultAttributeValues;for(const ee in re){const q=re[ee];if(q.location>=0){let he=ne[ee];if(he===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const ve=he.normalized,ye=he.itemSize,Ne=e.get(he);if(Ne===void 0)continue;const Ye=Ne.buffer,ie=Ne.type,de=Ne.bytesPerElement,we=ie===n.INT||ie===n.UNSIGNED_INT||he.gpuType===Xl;if(he.isInterleavedBufferAttribute){const me=he.data,Pe=me.stride,Ve=he.offset;if(me.isInstancedInterleavedBuffer){for(let Ie=0;Ie<q.locationSize;Ie++)d(q.location+Ie,me.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ie=0;Ie<q.locationSize;Ie++)m(q.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Ie=0;Ie<q.locationSize;Ie++)b(q.location+Ie,ye/q.locationSize,ie,ve,Pe*de,(Ve+ye/q.locationSize*Ie)*de,we)}else{if(he.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)d(q.location+me,he.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<q.locationSize;me++)m(q.location+me);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let me=0;me<q.locationSize;me++)b(q.location+me,ye/q.locationSize,ie,ve,ye*de,ye/q.locationSize*me*de,we)}}else if(K!==void 0){const ve=K[ee];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(q.location,ve);break;case 3:n.vertexAttrib3fv(q.location,ve);break;case 4:n.vertexAttrib4fv(q.location,ve);break;default:n.vertexAttrib1fv(q.location,ve)}}}}w()}function I(){D();for(const M in i){const L=i[M];for(const te in L){const Z=L[te];for(const ne in Z)u(Z[ne].object),delete Z[ne];delete L[te]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const te in L){const Z=L[te];for(const ne in Z)u(Z[ne].object),delete Z[ne];delete L[te]}delete i[M.id]}function R(M){for(const L in i){const te=i[L];if(te[M.id]===void 0)continue;const Z=te[M.id];for(const ne in Z)u(Z[ne].object),delete Z[ne];delete te[M.id]}}function D(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function M0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==zn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pn&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:I,maxSamples:P}}function E0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Mi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,b=w*4;let S=d.clippingState||null;l.value=S,S=u(_,h,b,p);for(let I=0;I!==b;++I)S[I]=t[I];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,S=p;b!==x;++b,S+=4)o.copy(f[b]).applyMatrix4(w,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function T0(n){let e=new WeakMap;function t(o,a){return a===Ha?o.mapping=fr:a===Va&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ha||a===Va)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hg(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const tr=4,_u=[.125,.215,.35,.446,.526,.582],Ti=20,ha=new U_,vu=new tt;let da=null,pa=0,ma=0,ga=!1;const yi=(1+Math.sqrt(5))/2,ji=1/yi,xu=[new k(-yi,ji,0),new k(yi,ji,0),new k(-ji,0,yi),new k(ji,0,yi),new k(0,yi,-ji),new k(0,yi,ji),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],b0=new k;class Su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=b0}=s;da=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(da,pa,ma),this._renderer.xr.enabled=ga,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),da=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:rs,format:sn,colorSpace:dr,depthBuffer:!1},r=Mu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A0(s)),this._blurMaterial=w0(s,e,t)}return r}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,i,r,s){const l=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(vu),f.toneMapping=ii,f.autoClear=!1;const _=new as({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),x=new Jt(new Ni,_);let m=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,m=!0):(_.color.copy(vu),m=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const S=this._cubeSize;Bs(r,b*S,w>2?S:0,S,S),f.setRenderTarget(r),m&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===fr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xu[(r-s-1)%xu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Jt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ti-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Ti;m>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const d=[];let w=0;for(let R=0;R<Ti;++R){const D=R/x,T=Math.exp(-D*D/2);d.push(T),R===0?w+=T:R<m&&(w+=2*T)}for(let R=0;R<d.length;R++)d[R]=d[R]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-i;const S=this._sizeLods[r],I=3*S*(r>b-tr?r-b+tr:0),P=4*(this._cubeSize-S);Bs(t,I,P,3*S,2*S),l.setRenderTarget(t),l.render(f,ha)}}function A0(n){const e=[],t=[],i=[];let r=n;const s=n-tr+1+_u.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-tr?l=_u[o-n+tr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,d=1,w=new Float32Array(x*_*p),b=new Float32Array(m*_*p),S=new Float32Array(d*_*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,D=P>2?0:-1,T=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];w.set(T,x*_*P),b.set(h,m*_*P);const M=[P,P,P,P,P,P];S.set(M,d*_*P)}const I=new ci;I.setAttribute("position",new mn(w,x)),I.setAttribute("uv",new mn(b,m)),I.setAttribute("faceIndex",new mn(S,d)),e.push(I),r>tr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mu(n,e,t){const i=new Li(n,e,t);return i.texture.mapping=So,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function w0(n,e,t){const i=new Float32Array(Ti),r=new k(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function yu(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Eu(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ha||l===Va,u=l===fr||l===hr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Su(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Su(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function C0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&or("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function P0(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let b=0,S=w.length;b<S;b+=3){const I=w[b+0],P=w[b+1],R=w[b+2];h.push(I,P,P,R,R,I)}}else if(_!==void 0){const w=_.array;x=_.version;for(let b=0,S=w.length/3-1;b<S;b+=3){const I=b+0,P=b+1,R=b+2;h.push(I,P,P,R,R,I)}}else return;const m=new(gh(h)?Mh:Sh)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function L0(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*o,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function f(h,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,_);let d=0;for(let w=0;w<_;w++)d+=p[w]*x[w];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function D0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function U0(n,e,t){const i=new WeakMap,r=new _t;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),x===!0&&(b=3);let S=a.attributes.position.count*b,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*I*4*f),R=new _h(P,S,I,f);R.type=Pn,R.needsUpdate=!0;const D=b*4;for(let M=0;M<f;M++){const L=m[M],te=d[M],Z=w[M],ne=S*I*4*M;for(let re=0;re<L.count;re++){const K=re*D;p===!0&&(r.fromBufferAttribute(L,re),P[ne+K+0]=r.x,P[ne+K+1]=r.y,P[ne+K+2]=r.z,P[ne+K+3]=0),_===!0&&(r.fromBufferAttribute(te,re),P[ne+K+4]=r.x,P[ne+K+5]=r.y,P[ne+K+6]=r.z,P[ne+K+7]=0),x===!0&&(r.fromBufferAttribute(Z,re),P[ne+K+8]=r.x,P[ne+K+9]=r.y,P[ne+K+10]=r.z,P[ne+K+11]=Z.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new Te(S,I)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function I0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Fh=new Ut,Tu=new Ah(1,1),Oh=new _h,Bh=new Eg,zh=new Th,bu=[],Au=[],wu=new Float32Array(16),Ru=new Float32Array(9),Cu=new Float32Array(4);function _r(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bu[r];if(s===void 0&&(s=new Float32Array(r),bu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Eo(n,e){let t=Au[e];t===void 0&&(t=new Int32Array(e),Au[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function N0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function F0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function O0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function B0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function z0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Cu.set(i),n.uniformMatrix2fv(this.addr,!1,Cu),Mt(t,i)}}function H0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Ru.set(i),n.uniformMatrix3fv(this.addr,!1,Ru),Mt(t,i)}}function V0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;wu.set(i),n.uniformMatrix4fv(this.addr,!1,wu),Mt(t,i)}}function G0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function k0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function W0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function X0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function q0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function $0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function K0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Z0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tu.compareFunction=mh,s=Tu):s=Fh,t.setTexture2D(e||s,r)}function J0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bh,r)}function j0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zh,r)}function Q0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Oh,r)}function eS(n){switch(n){case 5126:return N0;case 35664:return F0;case 35665:return O0;case 35666:return B0;case 35674:return z0;case 35675:return H0;case 35676:return V0;case 5124:case 35670:return G0;case 35667:case 35671:return k0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return q0;case 36294:return Y0;case 36295:return $0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return Q0}}function tS(n,e){n.uniform1fv(this.addr,e)}function nS(n,e){const t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function iS(n,e){const t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function rS(n,e){const t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function sS(n,e){const t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function oS(n,e){const t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function aS(n,e){const t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lS(n,e){n.uniform1iv(this.addr,e)}function cS(n,e){n.uniform2iv(this.addr,e)}function uS(n,e){n.uniform3iv(this.addr,e)}function fS(n,e){n.uniform4iv(this.addr,e)}function hS(n,e){n.uniform1uiv(this.addr,e)}function dS(n,e){n.uniform2uiv(this.addr,e)}function pS(n,e){n.uniform3uiv(this.addr,e)}function mS(n,e){n.uniform4uiv(this.addr,e)}function gS(n,e,t){const i=this.cache,r=e.length,s=Eo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fh,s[o])}function _S(n,e,t){const i=this.cache,r=e.length,s=Eo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bh,s[o])}function vS(n,e,t){const i=this.cache,r=e.length,s=Eo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||zh,s[o])}function xS(n,e,t){const i=this.cache,r=e.length,s=Eo(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Oh,s[o])}function SS(n){switch(n){case 5126:return tS;case 35664:return nS;case 35665:return iS;case 35666:return rS;case 35674:return sS;case 35675:return oS;case 35676:return aS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return uS;case 35669:case 35673:return fS;case 5125:return hS;case 36294:return dS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return _S;case 35680:case 36300:case 36308:case 36293:return vS;case 36289:case 36303:case 36311:case 36292:return xS}}class MS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=eS(t.type)}}class yS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SS(t.type)}}class ES{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Pu(n,e){n.seq.push(e),n.map[e.id]=e}function TS(n,e,t){const i=n.name,r=i.length;for(_a.lastIndex=0;;){const s=_a.exec(i),o=_a.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pu(t,c===void 0?new MS(a,n,e):new yS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ES(a),Pu(t,f)),t=f}}}class Zs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);TS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Lu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const bS=37297;let AS=0;function wS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Du=new We;function RS(n){je._getMatrix(Du,je.workingColorSpace,n);const e=`mat3( ${Du.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case so:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wS(n.getShaderSource(e),o)}else return r}function CS(n,e){const t=RS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function PS(n,e){let t;switch(e){case Ym:t="Linear";break;case $m:t="Reinhard";break;case Km:t="Cineon";break;case Zm:t="ACESFilmic";break;case jm:t="AgX";break;case Qm:t="Neutral";break;case Jm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zs=new k;function LS(){je.getLuminanceCoefficients(zs);const n=zs.x.toFixed(4),e=zs.y.toFixed(4),t=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function US(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function IS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Cr(n){return n!==""}function Iu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(n){return n.replace(NS,OS)}const FS=new Map;function OS(n,e){let t=qe[e];if(t===void 0){const i=FS.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}const BS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(n){return n.replace(BS,zS)}function zS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ou(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function VS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case hr:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function kS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sh:e="ENVMAP_BLENDING_MULTIPLY";break;case Xm:e="ENVMAP_BLENDING_MIX";break;case qm:e="ENVMAP_BLENDING_ADD";break}return e}function WS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function XS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=HS(t),c=VS(t),u=GS(t),f=kS(t),h=WS(t),p=DS(t),_=US(s),x=r.createProgram();let m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Cr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Cr).join(`
`),d.length>0&&(d+=`
`)):(m=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),d=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?qe.tonemapping_pars_fragment:"",t.toneMapping!==ii?PS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,CS("linearToOutputTexel",t.outputColorSpace),LS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),o=yl(o),o=Iu(o,t),o=Nu(o,t),a=yl(a),a=Iu(a,t),a=Nu(a,t),o=Fu(o),a=Fu(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=w+m+o,S=w+d+a,I=Lu(r,r.VERTEX_SHADER,b),P=Lu(r,r.FRAGMENT_SHADER,S);r.attachShader(x,I),r.attachShader(x,P),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(L){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(x).trim(),Z=r.getShaderInfoLog(I).trim(),ne=r.getShaderInfoLog(P).trim();let re=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,P);else{const ee=Uu(r,I,"vertex"),q=Uu(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+te+`
`+ee+`
`+q)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(Z===""||ne==="")&&(K=!1);K&&(L.diagnostics={runnable:re,programLog:te,vertexShader:{log:Z,prefix:m},fragmentShader:{log:ne,prefix:d}})}r.deleteShader(I),r.deleteShader(P),D=new Zs(r,x),T=IS(r,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,bS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=P,this}let qS=0;class YS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $S(e),t.set(e,i)),i}}class $S{constructor(e){this.id=qS++,this.code=e,this.usedTimes=0}}function KS(n,e,t,i,r,s,o){const a=new Ql,l=new YS,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,L,te,Z){const ne=te.fog,re=Z.geometry,K=T.isMeshStandardMaterial?te.environment:null,ee=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),q=ee&&ee.mapping===So?ee.image.height:null,he=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ve=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ye=ve!==void 0?ve.length:0;let Ne=0;re.morphAttributes.position!==void 0&&(Ne=1),re.morphAttributes.normal!==void 0&&(Ne=2),re.morphAttributes.color!==void 0&&(Ne=3);let Ye,ie,de,we;if(he){const et=hn[he];Ye=et.vertexShader,ie=et.fragmentShader}else Ye=T.vertexShader,ie=T.fragmentShader,l.update(T),de=l.getVertexShaderID(T),we=l.getFragmentShaderID(T);const me=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Ve=Z.isInstancedMesh===!0,Ie=Z.isBatchedMesh===!0,st=!!T.map,A=!!T.matcap,C=!!ee,v=!!T.aoMap,z=!!T.lightMap,N=!!T.bumpMap,B=!!T.normalMap,O=!!T.displacementMap,$=!!T.emissiveMap,V=!!T.metalnessMap,W=!!T.roughnessMap,le=T.anisotropy>0,y=T.clearcoat>0,g=T.dispersion>0,U=T.iridescence>0,X=T.sheen>0,Q=T.transmission>0,Y=le&&!!T.anisotropyMap,_e=y&&!!T.clearcoatMap,ce=y&&!!T.clearcoatNormalMap,xe=y&&!!T.clearcoatRoughnessMap,Ee=U&&!!T.iridescenceMap,oe=U&&!!T.iridescenceThicknessMap,be=X&&!!T.sheenColorMap,Ce=X&&!!T.sheenRoughnessMap,Le=!!T.specularMap,pe=!!T.specularColorMap,Be=!!T.specularIntensityMap,F=Q&&!!T.transmissionMap,Se=Q&&!!T.thicknessMap,ae=!!T.gradientMap,Re=!!T.alphaMap,ue=T.alphaTest>0,se=!!T.alphaHash,De=!!T.extensions;let ke=ii;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ke=n.toneMapping);const lt={shaderID:he,shaderType:T.type,shaderName:T.name,vertexShader:Ye,fragmentShader:ie,defines:T.defines,customVertexShaderID:de,customFragmentShaderID:we,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&Z._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&Z.instanceColor!==null,instancingMorph:Ve&&Z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:dr,alphaToCoverage:!!T.alphaToCoverage,map:st,matcap:A,envMap:C,envMapMode:C&&ee.mapping,envMapCubeUVHeight:q,aoMap:v,lightMap:z,bumpMap:N,normalMap:B,displacementMap:h&&O,emissiveMap:$,normalMapObjectSpace:B&&T.normalMapType===sg,normalMapTangentSpace:B&&T.normalMapType===rg,metalnessMap:V,roughnessMap:W,anisotropy:le,anisotropyMap:Y,clearcoat:y,clearcoatMap:_e,clearcoatNormalMap:ce,clearcoatRoughnessMap:xe,dispersion:g,iridescence:U,iridescenceMap:Ee,iridescenceThicknessMap:oe,sheen:X,sheenColorMap:be,sheenRoughnessMap:Ce,specularMap:Le,specularColorMap:pe,specularIntensityMap:Be,transmission:Q,transmissionMap:F,thicknessMap:Se,gradientMap:ae,opaque:T.transparent===!1&&T.blending===sr&&T.alphaToCoverage===!1,alphaMap:Re,alphaTest:ue,alphaHash:se,combine:T.combine,mapUv:st&&x(T.map.channel),aoMapUv:v&&x(T.aoMap.channel),lightMapUv:z&&x(T.lightMap.channel),bumpMapUv:N&&x(T.bumpMap.channel),normalMapUv:B&&x(T.normalMap.channel),displacementMapUv:O&&x(T.displacementMap.channel),emissiveMapUv:$&&x(T.emissiveMap.channel),metalnessMapUv:V&&x(T.metalnessMap.channel),roughnessMapUv:W&&x(T.roughnessMap.channel),anisotropyMapUv:Y&&x(T.anisotropyMap.channel),clearcoatMapUv:_e&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(T.sheenRoughnessMap.channel),specularMapUv:Le&&x(T.specularMap.channel),specularColorMapUv:pe&&x(T.specularColorMap.channel),specularIntensityMapUv:Be&&x(T.specularIntensityMap.channel),transmissionMapUv:F&&x(T.transmissionMap.channel),thicknessMapUv:Se&&x(T.thicknessMap.channel),alphaMapUv:Re&&x(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(B||le),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!re.attributes.uv&&(st||Re),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pe,skinning:Z.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:st&&T.map.isVideoTexture===!0&&je.getTransfer(T.map.colorSpace)===it,decodeVideoTextureEmissive:$&&T.emissiveMap.isVideoTexture===!0&&je.getTransfer(T.emissiveMap.colorSpace)===it,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Cn,flipSided:T.side===Ft,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function d(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)M.push(L),M.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(w(M,T),b(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function w(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function b(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const M=_[T.type];let L;if(M){const te=hn[M];L=Fg.clone(te.uniforms)}else L=T.uniforms;return L}function I(T,M){let L;for(let te=0,Z=u.length;te<Z;te++){const ne=u[te];if(ne.cacheKey===M){L=ne,++L.usedTimes;break}}return L===void 0&&(L=new XS(n,M,T,s),u.push(L)),L}function P(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:I,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:D}}function ZS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function JS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||JS),i.length>1&&i.sort(h||Bu),r.length>1&&r.sort(h||Bu)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function jS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new zu,n.set(i,[o])):r>=s.length?(o=new zu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function QS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new tt};break;case"SpotLight":t={position:new k,direction:new k,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function eM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tM=0;function nM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iM(n){const e=new QS,t=eM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new gt,o=new gt;function a(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,w=0,b=0,S=0,I=0,P=0,R=0;c.sort(nM);for(let T=0,M=c.length;T<M;T++){const L=c[T],te=L.color,Z=L.intensity,ne=L.distance,re=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=te.r*Z,f+=te.g*Z,h+=te.b*Z;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],Z);R++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,q=t.get(L);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=L.shadow.matrix,w++}i.directional[p]=K,p++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(te).multiplyScalar(Z),K.distance=ne,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[x]=K;const ee=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,ee.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[x]=ee.matrix,L.castShadow){const q=t.get(L);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=re,S++}x++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(te).multiplyScalar(Z),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const ee=L.shadow,q=t.get(L);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,q.shadowCameraNear=ee.camera.near,q.shadowCameraFar=ee.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=L.shadow.matrix,b++}i.point[_]=K,_++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(Z),K.groundColor.copy(L.groundColor).multiplyScalar(Z),i.hemi[d]=K,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==w||D.numPointShadows!==b||D.numSpotShadows!==S||D.numSpotMaps!==I||D.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+I-P,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,D.directionalLength=p,D.pointLength=_,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=w,D.numPointShadows=b,D.numSpotShadows=S,D.numSpotMaps=I,D.numLightProbes=R,i.version=tM++)}function l(c,u){let f=0,h=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const b=c[d];if(b.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(b.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Hu(n){const e=new iM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hu(n),e.set(r,[a])):s>=o.length?(a=new Hu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const sM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aM(n,e,t){let i=new bh;const r=new Te,s=new Te,o=new _t,a=new b_({depthPacking:ig}),l=new A_,c={},u=t.maxTextureSize,f={[oi]:Ft,[Ft]:oi,[Cn]:Cn},h=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:sM,fragmentShader:oM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new ci;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Jt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let d=this.type;this.render=function(P,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const T=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),te=n.state;te.setBlending(ni),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Z=d!==An&&this.type===An,ne=d===An&&this.type!==An;for(let re=0,K=P.length;re<K;re++){const ee=P[re],q=ee.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const he=q.getFrameExtents();if(r.multiply(he),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,q.mapSize.y=s.y)),q.map===null||Z===!0||ne===!0){const ye=this.type!==An?{minFilter:an,magFilter:an}:{};q.map!==null&&q.map.dispose(),q.map=new Li(r.x,r.y,ye),q.map.texture.name=ee.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const ve=q.getViewportCount();for(let ye=0;ye<ve;ye++){const Ne=q.getViewport(ye);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),te.viewport(o),q.updateMatrices(ee,ye),i=q.getFrustum(),S(R,D,q.camera,ee,this.type)}q.isPointLightShadow!==!0&&this.type===An&&w(q,D),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,L)};function w(P,R){const D=e.update(x);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Li(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,D,h,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,D,p,x,null)}function b(P,R,D,T){let M=null;const L=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const te=M.uuid,Z=R.uuid;let ne=c[te];ne===void 0&&(ne={},c[te]=ne);let re=ne[Z];re===void 0&&(re=M.clone(),ne[Z]=re,R.addEventListener("dispose",I)),M=re}if(M.visible=R.visible,M.wireframe=R.wireframe,T===An?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const te=n.properties.get(M);te.light=D}return M}function S(P,R,D,T,M){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===An)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const Z=e.update(P),ne=P.material;if(Array.isArray(ne)){const re=Z.groups;for(let K=0,ee=re.length;K<ee;K++){const q=re[K],he=ne[q.materialIndex];if(he&&he.visible){const ve=b(P,he,T,M);P.onBeforeShadow(n,P,R,D,Z,ve,q),n.renderBufferDirect(D,null,Z,ve,P,q),P.onAfterShadow(n,P,R,D,Z,ve,q)}}}else if(ne.visible){const re=b(P,ne,T,M);P.onBeforeShadow(n,P,R,D,Z,re,null),n.renderBufferDirect(D,null,Z,re,P,null),P.onAfterShadow(n,P,R,D,Z,re,null)}}const te=P.children;for(let Z=0,ne=te.length;Z<ne;Z++)S(te[Z],R,D,T,M)}function I(P){P.target.removeEventListener("dispose",I);for(const D in c){const T=c[D],M=P.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const lM={[Ua]:Ia,[Na]:Ba,[Fa]:za,[ur]:Oa,[Ia]:Ua,[Ba]:Na,[za]:Fa,[Oa]:ur};function cM(n,e){function t(){let F=!1;const Se=new _t;let ae=null;const Re=new _t(0,0,0,0);return{setMask:function(ue){ae!==ue&&!F&&(n.colorMask(ue,ue,ue,ue),ae=ue)},setLocked:function(ue){F=ue},setClear:function(ue,se,De,ke,lt){lt===!0&&(ue*=ke,se*=ke,De*=ke),Se.set(ue,se,De,ke),Re.equals(Se)===!1&&(n.clearColor(ue,se,De,ke),Re.copy(Se))},reset:function(){F=!1,ae=null,Re.set(-1,0,0,0)}}}function i(){let F=!1,Se=!1,ae=null,Re=null,ue=null;return{setReversed:function(se){if(Se!==se){const De=e.get("EXT_clip_control");se?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Se=se;const ke=ue;ue=null,this.setClear(ke)}},getReversed:function(){return Se},setTest:function(se){se?me(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(se){ae!==se&&!F&&(n.depthMask(se),ae=se)},setFunc:function(se){if(Se&&(se=lM[se]),Re!==se){switch(se){case Ua:n.depthFunc(n.NEVER);break;case Ia:n.depthFunc(n.ALWAYS);break;case Na:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case Fa:n.depthFunc(n.EQUAL);break;case Oa:n.depthFunc(n.GEQUAL);break;case Ba:n.depthFunc(n.GREATER);break;case za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=se}},setLocked:function(se){F=se},setClear:function(se){ue!==se&&(Se&&(se=1-se),n.clearDepth(se),ue=se)},reset:function(){F=!1,ae=null,Re=null,ue=null,Se=!1}}}function r(){let F=!1,Se=null,ae=null,Re=null,ue=null,se=null,De=null,ke=null,lt=null;return{setTest:function(et){F||(et?me(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(et){Se!==et&&!F&&(n.stencilMask(et),Se=et)},setFunc:function(et,jt,vn){(ae!==et||Re!==jt||ue!==vn)&&(n.stencilFunc(et,jt,vn),ae=et,Re=jt,ue=vn)},setOp:function(et,jt,vn){(se!==et||De!==jt||ke!==vn)&&(n.stencilOp(et,jt,vn),se=et,De=jt,ke=vn)},setLocked:function(et){F=et},setClear:function(et){lt!==et&&(n.clearStencil(et),lt=et)},reset:function(){F=!1,Se=null,ae=null,Re=null,ue=null,se=null,De=null,ke=null,lt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,w=null,b=null,S=null,I=null,P=null,R=new tt(0,0,0),D=0,T=!1,M=null,L=null,te=null,Z=null,ne=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ee=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),K=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),K=ee>=2);let he=null,ve={};const ye=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Ye=new _t().fromArray(ye),ie=new _t().fromArray(Ne);function de(F,Se,ae,Re){const ue=new Uint8Array(4),se=n.createTexture();n.bindTexture(F,se),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<ae;De++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(Se+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return se}const we={};we[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(ur),N(!1),B(Hc),me(n.CULL_FACE),v(ni);function me(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Pe(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ve(F,Se){return f[F]!==Se?(n.bindFramebuffer(F,Se),f[F]=Se,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Se),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ie(F,Se){let ae=p,Re=!1;if(F){ae=h.get(Se),ae===void 0&&(ae=[],h.set(Se,ae));const ue=F.textures;if(ae.length!==ue.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let se=0,De=ue.length;se<De;se++)ae[se]=n.COLOR_ATTACHMENT0+se;ae.length=ue.length,Re=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,Re=!0);Re&&n.drawBuffers(ae)}function st(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const A={[Ei]:n.FUNC_ADD,[Rm]:n.FUNC_SUBTRACT,[Cm]:n.FUNC_REVERSE_SUBTRACT};A[Pm]=n.MIN,A[Lm]=n.MAX;const C={[Dm]:n.ZERO,[Um]:n.ONE,[Im]:n.SRC_COLOR,[La]:n.SRC_ALPHA,[Hm]:n.SRC_ALPHA_SATURATE,[Bm]:n.DST_COLOR,[Fm]:n.DST_ALPHA,[Nm]:n.ONE_MINUS_SRC_COLOR,[Da]:n.ONE_MINUS_SRC_ALPHA,[zm]:n.ONE_MINUS_DST_COLOR,[Om]:n.ONE_MINUS_DST_ALPHA,[Vm]:n.CONSTANT_COLOR,[Gm]:n.ONE_MINUS_CONSTANT_COLOR,[km]:n.CONSTANT_ALPHA,[Wm]:n.ONE_MINUS_CONSTANT_ALPHA};function v(F,Se,ae,Re,ue,se,De,ke,lt,et){if(F===ni){x===!0&&(Pe(n.BLEND),x=!1);return}if(x===!1&&(me(n.BLEND),x=!0),F!==wm){if(F!==m||et!==T){if((d!==Ei||S!==Ei)&&(n.blendEquation(n.FUNC_ADD),d=Ei,S=Ei),et)switch(F){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vc:n.blendFunc(n.ONE,n.ONE);break;case Gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,b=null,I=null,P=null,R.set(0,0,0),D=0,m=F,T=et}return}ue=ue||Se,se=se||ae,De=De||Re,(Se!==d||ue!==S)&&(n.blendEquationSeparate(A[Se],A[ue]),d=Se,S=ue),(ae!==w||Re!==b||se!==I||De!==P)&&(n.blendFuncSeparate(C[ae],C[Re],C[se],C[De]),w=ae,b=Re,I=se,P=De),(ke.equals(R)===!1||lt!==D)&&(n.blendColor(ke.r,ke.g,ke.b,lt),R.copy(ke),D=lt),m=F,T=!1}function z(F,Se){F.side===Cn?Pe(n.CULL_FACE):me(n.CULL_FACE);let ae=F.side===Ft;Se&&(ae=!ae),N(ae),F.blending===sr&&F.transparent===!1?v(ni):v(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Re=F.stencilWrite;a.setTest(Re),Re&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),$(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function N(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function B(F){F!==Tm?(me(n.CULL_FACE),F!==L&&(F===Hc?n.cullFace(n.BACK):F===bm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),L=F}function O(F){F!==te&&(K&&n.lineWidth(F),te=F)}function $(F,Se,ae){F?(me(n.POLYGON_OFFSET_FILL),(Z!==Se||ne!==ae)&&(n.polygonOffset(Se,ae),Z=Se,ne=ae)):Pe(n.POLYGON_OFFSET_FILL)}function V(F){F?me(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function W(F){F===void 0&&(F=n.TEXTURE0+re-1),he!==F&&(n.activeTexture(F),he=F)}function le(F,Se,ae){ae===void 0&&(he===null?ae=n.TEXTURE0+re-1:ae=he);let Re=ve[ae];Re===void 0&&(Re={type:void 0,texture:void 0},ve[ae]=Re),(Re.type!==F||Re.texture!==Se)&&(he!==ae&&(n.activeTexture(ae),he=ae),n.bindTexture(F,Se||we[F]),Re.type=F,Re.texture=Se)}function y(){const F=ve[he];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(F){Ye.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ye.copy(F))}function Ce(F){ie.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ie.copy(F))}function Le(F,Se){let ae=c.get(Se);ae===void 0&&(ae=new WeakMap,c.set(Se,ae));let Re=ae.get(F);Re===void 0&&(Re=n.getUniformBlockIndex(Se,F.name),ae.set(F,Re))}function pe(F,Se){const Re=c.get(Se).get(F);l.get(Se)!==Re&&(n.uniformBlockBinding(Se,Re,F.__bindingPointIndex),l.set(Se,Re))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,ve={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,w=null,b=null,S=null,I=null,P=null,R=new tt(0,0,0),D=0,T=!1,M=null,L=null,te=null,Z=null,ne=null,Ye.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:me,disable:Pe,bindFramebuffer:Ve,drawBuffers:Ie,useProgram:st,setBlending:v,setMaterial:z,setFlipSided:N,setCullFace:B,setLineWidth:O,setPolygonOffset:$,setScissorTest:V,activeTexture:W,bindTexture:le,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:Ee,texImage3D:oe,updateUBOMapping:Le,uniformBlockBinding:pe,texStorage2D:ce,texStorage3D:xe,texSubImage2D:X,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:_e,scissor:be,viewport:Ce,reset:Be}}function uM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return p?new OffscreenCanvas(y,g):Jr("canvas")}function x(y,g,U){let X=1;const Q=le(y);if((Q.width>U||Q.height>U)&&(X=U/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Y=Math.floor(X*Q.width),_e=Math.floor(X*Q.height);f===void 0&&(f=_(Y,_e));const ce=g?_(Y,_e):f;return ce.width=Y,ce.height=_e,ce.getContext("2d").drawImage(y,0,0,Y,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+_e+")."),ce}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){n.generateMipmap(y)}function w(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(y,g,U,X,Q=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Y=g;if(g===n.RED&&(U===n.FLOAT&&(Y=n.R32F),U===n.HALF_FLOAT&&(Y=n.R16F),U===n.UNSIGNED_BYTE&&(Y=n.R8)),g===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.R8UI),U===n.UNSIGNED_SHORT&&(Y=n.R16UI),U===n.UNSIGNED_INT&&(Y=n.R32UI),U===n.BYTE&&(Y=n.R8I),U===n.SHORT&&(Y=n.R16I),U===n.INT&&(Y=n.R32I)),g===n.RG&&(U===n.FLOAT&&(Y=n.RG32F),U===n.HALF_FLOAT&&(Y=n.RG16F),U===n.UNSIGNED_BYTE&&(Y=n.RG8)),g===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RG8UI),U===n.UNSIGNED_SHORT&&(Y=n.RG16UI),U===n.UNSIGNED_INT&&(Y=n.RG32UI),U===n.BYTE&&(Y=n.RG8I),U===n.SHORT&&(Y=n.RG16I),U===n.INT&&(Y=n.RG32I)),g===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),U===n.UNSIGNED_INT&&(Y=n.RGB32UI),U===n.BYTE&&(Y=n.RGB8I),U===n.SHORT&&(Y=n.RGB16I),U===n.INT&&(Y=n.RGB32I)),g===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),U===n.UNSIGNED_INT&&(Y=n.RGBA32UI),U===n.BYTE&&(Y=n.RGBA8I),U===n.SHORT&&(Y=n.RGBA16I),U===n.INT&&(Y=n.RGBA32I)),g===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),g===n.RGBA){const _e=Q?so:je.getTransfer(X);U===n.FLOAT&&(Y=n.RGBA32F),U===n.HALF_FLOAT&&(Y=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Y=_e===it?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(y,g){let U;return y?g===null||g===Pi||g===$r?U=n.DEPTH24_STENCIL8:g===Pn?U=n.DEPTH32F_STENCIL8:g===Yr&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Pi||g===$r?U=n.DEPTH_COMPONENT24:g===Pn?U=n.DEPTH_COMPONENT32F:g===Yr&&(U=n.DEPTH_COMPONENT16),U}function I(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==an&&y.minFilter!==rn?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function P(y){const g=y.target;g.removeEventListener("dispose",P),D(g),g.isVideoTexture&&u.delete(g)}function R(y){const g=y.target;g.removeEventListener("dispose",R),M(g)}function D(y){const g=i.get(y);if(g.__webglInit===void 0)return;const U=y.source,X=h.get(U);if(X){const Q=X[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(y),Object.keys(X).length===0&&h.delete(U)}i.remove(y)}function T(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const U=y.source,X=h.get(U);delete X[g.__cacheKey],o.memory.textures--}function M(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let Q=0;Q<g.__webglFramebuffer[X].length;Q++)n.deleteFramebuffer(g.__webglFramebuffer[X][Q]);else n.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)n.deleteFramebuffer(g.__webglFramebuffer[X]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=y.textures;for(let X=0,Q=U.length;X<Q;X++){const Y=i.get(U[X]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(U[X])}i.remove(y)}let L=0;function te(){L=0}function Z(){const y=L;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),L+=1,y}function ne(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function re(y,g){const U=i.get(y);if(y.isVideoTexture&&V(y),y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){const X=y.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(U,y,g);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+g)}function K(y,g){const U=i.get(y);if(y.version>0&&U.__version!==y.version){we(U,y,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+g)}function ee(y,g){const U=i.get(y);if(y.version>0&&U.__version!==y.version){we(U,y,g);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+g)}function q(y,g){const U=i.get(y);if(y.version>0&&U.__version!==y.version){me(U,y,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+g)}const he={[Ga]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[ka]:n.MIRRORED_REPEAT},ve={[an]:n.NEAREST,[eg]:n.NEAREST_MIPMAP_NEAREST,[ms]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},ye={[og]:n.NEVER,[hg]:n.ALWAYS,[ag]:n.LESS,[mh]:n.LEQUAL,[lg]:n.EQUAL,[fg]:n.GEQUAL,[cg]:n.GREATER,[ug]:n.NOTEQUAL};function Ne(y,g){if(g.type===Pn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===rn||g.magFilter===Bo||g.magFilter===ms||g.magFilter===Ai||g.minFilter===rn||g.minFilter===Bo||g.minFilter===ms||g.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,he[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,he[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,he[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ve[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ve[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ye[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===an||g.minFilter!==ms&&g.minFilter!==Ai||g.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(y,g){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",P));const X=g.source;let Q=h.get(X);Q===void 0&&(Q={},h.set(X,Q));const Y=ne(g);if(Y!==y.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Q[Y].usedTimes++;const _e=Q[y.__cacheKey];_e!==void 0&&(Q[y.__cacheKey].usedTimes--,_e.usedTimes===0&&T(g)),y.__cacheKey=Y,y.__webglTexture=Q[Y].texture}return U}function ie(y,g,U){return Math.floor(Math.floor(y/U)/g)}function de(y,g,U,X){const Y=y.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,U,X,g.data);else{Y.sort((oe,be)=>oe.start-be.start);let _e=0;for(let oe=1;oe<Y.length;oe++){const be=Y[_e],Ce=Y[oe],Le=be.start+be.count,pe=ie(Ce.start,g.width,4),Be=ie(be.start,g.width,4);Ce.start<=Le+1&&pe===Be&&ie(Ce.start+Ce.count-1,g.width,4)===pe?be.count=Math.max(be.count,Ce.start+Ce.count-be.start):(++_e,Y[_e]=Ce)}Y.length=_e+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let oe=0,be=Y.length;oe<be;oe++){const Ce=Y[oe],Le=Math.floor(Ce.start/4),pe=Math.ceil(Ce.count/4),Be=Le%g.width,F=Math.floor(Le/g.width),Se=pe,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Be,F,Se,ae,U,X,g.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function we(y,g,U){let X=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=n.TEXTURE_3D);const Q=Ye(y,g),Y=g.source;t.bindTexture(X,y.__webglTexture,n.TEXTURE0+U);const _e=i.get(Y);if(Y.version!==_e.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);const ce=je.getPrimaries(je.workingColorSpace),xe=g.colorSpace===ei?null:je.getPrimaries(g.colorSpace),Ee=g.colorSpace===ei||ce===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let oe=x(g.image,!1,r.maxTextureSize);oe=W(g,oe);const be=s.convert(g.format,g.colorSpace),Ce=s.convert(g.type);let Le=b(g.internalFormat,be,Ce,g.colorSpace,g.isVideoTexture);Ne(X,g);let pe;const Be=g.mipmaps,F=g.isVideoTexture!==!0,Se=_e.__version===void 0||Q===!0,ae=Y.dataReady,Re=I(g,oe);if(g.isDepthTexture)Le=S(g.format===Zr,g.type),Se&&(F?t.texStorage2D(n.TEXTURE_2D,1,Le,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Le,oe.width,oe.height,0,be,Ce,null));else if(g.isDataTexture)if(Be.length>0){F&&Se&&t.texStorage2D(n.TEXTURE_2D,Re,Le,Be[0].width,Be[0].height);for(let ue=0,se=Be.length;ue<se;ue++)pe=Be[ue],F?ae&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,pe.width,pe.height,be,Ce,pe.data):t.texImage2D(n.TEXTURE_2D,ue,Le,pe.width,pe.height,0,be,Ce,pe.data);g.generateMipmaps=!1}else F?(Se&&t.texStorage2D(n.TEXTURE_2D,Re,Le,oe.width,oe.height),ae&&de(g,oe,be,Ce)):t.texImage2D(n.TEXTURE_2D,0,Le,oe.width,oe.height,0,be,Ce,oe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){F&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Le,Be[0].width,Be[0].height,oe.depth);for(let ue=0,se=Be.length;ue<se;ue++)if(pe=Be[ue],g.format!==sn)if(be!==null)if(F){if(ae)if(g.layerUpdates.size>0){const De=gu(pe.width,pe.height,g.format,g.type);for(const ke of g.layerUpdates){const lt=pe.data.subarray(ke*De/pe.data.BYTES_PER_ELEMENT,(ke+1)*De/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,ke,pe.width,pe.height,1,be,lt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,pe.width,pe.height,oe.depth,be,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Le,pe.width,pe.height,oe.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,pe.width,pe.height,oe.depth,be,Ce,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Le,pe.width,pe.height,oe.depth,0,be,Ce,pe.data)}else{F&&Se&&t.texStorage2D(n.TEXTURE_2D,Re,Le,Be[0].width,Be[0].height);for(let ue=0,se=Be.length;ue<se;ue++)pe=Be[ue],g.format!==sn?be!==null?F?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,pe.width,pe.height,be,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Le,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ae&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,pe.width,pe.height,be,Ce,pe.data):t.texImage2D(n.TEXTURE_2D,ue,Le,pe.width,pe.height,0,be,Ce,pe.data)}else if(g.isDataArrayTexture)if(F){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Le,oe.width,oe.height,oe.depth),ae)if(g.layerUpdates.size>0){const ue=gu(oe.width,oe.height,g.format,g.type);for(const se of g.layerUpdates){const De=oe.data.subarray(se*ue/oe.data.BYTES_PER_ELEMENT,(se+1)*ue/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,oe.width,oe.height,1,be,Ce,De)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,be,Ce,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,oe.width,oe.height,oe.depth,0,be,Ce,oe.data);else if(g.isData3DTexture)F?(Se&&t.texStorage3D(n.TEXTURE_3D,Re,Le,oe.width,oe.height,oe.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,be,Ce,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Le,oe.width,oe.height,oe.depth,0,be,Ce,oe.data);else if(g.isFramebufferTexture){if(Se)if(F)t.texStorage2D(n.TEXTURE_2D,Re,Le,oe.width,oe.height);else{let ue=oe.width,se=oe.height;for(let De=0;De<Re;De++)t.texImage2D(n.TEXTURE_2D,De,Le,ue,se,0,be,Ce,null),ue>>=1,se>>=1}}else if(Be.length>0){if(F&&Se){const ue=le(Be[0]);t.texStorage2D(n.TEXTURE_2D,Re,Le,ue.width,ue.height)}for(let ue=0,se=Be.length;ue<se;ue++)pe=Be[ue],F?ae&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,be,Ce,pe):t.texImage2D(n.TEXTURE_2D,ue,Le,be,Ce,pe);g.generateMipmaps=!1}else if(F){if(Se){const ue=le(oe);t.texStorage2D(n.TEXTURE_2D,Re,Le,ue.width,ue.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ce,oe)}else t.texImage2D(n.TEXTURE_2D,0,Le,be,Ce,oe);m(g)&&d(X),_e.__version=Y.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function me(y,g,U){if(g.image.length!==6)return;const X=Ye(y,g),Q=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+U);const Y=i.get(Q);if(Q.version!==Y.__version||X===!0){t.activeTexture(n.TEXTURE0+U);const _e=je.getPrimaries(je.workingColorSpace),ce=g.colorSpace===ei?null:je.getPrimaries(g.colorSpace),xe=g.colorSpace===ei||_e===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ee=g.isCompressedTexture||g.image[0].isCompressedTexture,oe=g.image[0]&&g.image[0].isDataTexture,be=[];for(let se=0;se<6;se++)!Ee&&!oe?be[se]=x(g.image[se],!0,r.maxCubemapSize):be[se]=oe?g.image[se].image:g.image[se],be[se]=W(g,be[se]);const Ce=be[0],Le=s.convert(g.format,g.colorSpace),pe=s.convert(g.type),Be=b(g.internalFormat,Le,pe,g.colorSpace),F=g.isVideoTexture!==!0,Se=Y.__version===void 0||X===!0,ae=Q.dataReady;let Re=I(g,Ce);Ne(n.TEXTURE_CUBE_MAP,g);let ue;if(Ee){F&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Be,Ce.width,Ce.height);for(let se=0;se<6;se++){ue=be[se].mipmaps;for(let De=0;De<ue.length;De++){const ke=ue[De];g.format!==sn?Le!==null?F?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,0,0,ke.width,ke.height,Le,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,Be,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,0,0,ke.width,ke.height,Le,pe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,Be,ke.width,ke.height,0,Le,pe,ke.data)}}}else{if(ue=g.mipmaps,F&&Se){ue.length>0&&Re++;const se=le(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Be,se.width,se.height)}for(let se=0;se<6;se++)if(oe){F?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be[se].width,be[se].height,Le,pe,be[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,be[se].width,be[se].height,0,Le,pe,be[se].data);for(let De=0;De<ue.length;De++){const lt=ue[De].image[se].image;F?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,0,0,lt.width,lt.height,Le,pe,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,Be,lt.width,lt.height,0,Le,pe,lt.data)}}else{F?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,pe,be[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,Le,pe,be[se]);for(let De=0;De<ue.length;De++){const ke=ue[De];F?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,0,0,Le,pe,ke.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,Be,Le,pe,ke.image[se])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Pe(y,g,U,X,Q,Y){const _e=s.convert(U.format,U.colorSpace),ce=s.convert(U.type),xe=b(U.internalFormat,_e,ce,U.colorSpace),Ee=i.get(g),oe=i.get(U);if(oe.__renderTarget=g,!Ee.__hasExternalTextures){const be=Math.max(1,g.width>>Y),Ce=Math.max(1,g.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,xe,be,Ce,g.depth,0,_e,ce,null):t.texImage2D(Q,Y,xe,be,Ce,0,_e,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),$(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Q,oe.__webglTexture,0,O(g)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Q,oe.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(y,g,U){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const X=g.depthTexture,Q=X&&X.isDepthTexture?X.type:null,Y=S(g.stencilBuffer,Q),_e=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=O(g);$(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Y,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Y,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Y,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,y)}else{const X=g.textures;for(let Q=0;Q<X.length;Q++){const Y=X[Q],_e=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),xe=b(Y.internalFormat,_e,ce,Y.colorSpace),Ee=O(g);U&&$(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,xe,g.width,g.height):$(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,xe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,xe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(g.depthTexture);X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),re(g.depthTexture,0);const Q=X.__webglTexture,Y=O(g);if(g.depthTexture.format===Kr)$(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(g.depthTexture.format===Zr)$(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function st(y){const g=i.get(y),U=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const X=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=X}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const X=y.texture.mipmaps;X&&X.length>0?Ie(g.__webglFramebuffer[0],y):Ie(g.__webglFramebuffer,y)}else if(U){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=n.createRenderbuffer(),Ve(g.__webglDepthbuffer[X],y,!1);else{const Q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else{const X=y.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ve(g.__webglDepthbuffer,y,!1);else{const Q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function A(y,g,U){const X=i.get(y);g!==void 0&&Pe(X.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&st(y)}function C(y){const g=y.texture,U=i.get(y),X=i.get(g);y.addEventListener("dispose",R);const Q=y.textures,Y=y.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=g.version,o.memory.textures++),Y){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let xe=0;xe<g.mipmaps.length;xe++)U.__webglFramebuffer[ce][xe]=n.createFramebuffer()}else U.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)U.__webglFramebuffer[ce]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ce=0,xe=Q.length;ce<xe;ce++){const Ee=i.get(Q[ce]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&$(y)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const xe=Q[ce];U.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const Ee=s.convert(xe.format,xe.colorSpace),oe=s.convert(xe.type),be=b(xe.internalFormat,Ee,oe,xe.colorSpace,y.isXRRenderTarget===!0),Ce=O(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,be,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(U.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,g);for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)Pe(U.__webglFramebuffer[ce][xe],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe);else Pe(U.__webglFramebuffer[ce],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ce=0,xe=Q.length;ce<xe;ce++){const Ee=Q[ce],oe=i.get(Ee);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),Ne(n.TEXTURE_2D,Ee),Pe(U.__webglFramebuffer,y,Ee,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Ee)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ce=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,X.__webglTexture),Ne(ce,g),g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)Pe(U.__webglFramebuffer[xe],y,g,n.COLOR_ATTACHMENT0,ce,xe);else Pe(U.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,ce,0);m(g)&&d(ce),t.unbindTexture()}y.depthBuffer&&st(y)}function v(y){const g=y.textures;for(let U=0,X=g.length;U<X;U++){const Q=g[U];if(m(Q)){const Y=w(y),_e=i.get(Q).__webglTexture;t.bindTexture(Y,_e),d(Y),t.unbindTexture()}}}const z=[],N=[];function B(y){if(y.samples>0){if($(y)===!1){const g=y.textures,U=y.width,X=y.height;let Q=n.COLOR_BUFFER_BIT;const Y=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(y),ce=g.length>1;if(ce)for(let Ee=0;Ee<g.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const xe=y.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ee=0;Ee<g.length;Ee++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ee]);const oe=i.get(g[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,U,X,0,0,U,X,Q,n.NEAREST),l===!0&&(z.length=0,N.length=0,z.push(n.COLOR_ATTACHMENT0+Ee),y.depthBuffer&&y.resolveDepthBuffer===!1&&(z.push(Y),N.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,z))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Ee=0;Ee<g.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ee]);const oe=i.get(g[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function O(y){return Math.min(r.maxSamples,y.samples)}function $(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function V(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function W(y,g){const U=y.colorSpace,X=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||U!==dr&&U!==ei&&(je.getTransfer(U)===it?(X!==sn||Q!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}function le(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=te,this.setTexture2D=re,this.setTexture2DArray=K,this.setTexture3D=ee,this.setTextureCube=q,this.rebindTextures=A,this.setupRenderTarget=C,this.updateRenderTargetMipmap=v,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=$}function fM(n,e){function t(i,r=ei){let s;const o=je.getTransfer(r);if(i===zn)return n.UNSIGNED_BYTE;if(i===ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ch)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ah)return n.BYTE;if(i===lh)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===Xl)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===rs)return n.HALF_FLOAT;if(i===uh)return n.ALPHA;if(i===fh)return n.RGB;if(i===sn)return n.RGBA;if(i===Kr)return n.DEPTH_COMPONENT;if(i===Zr)return n.DEPTH_STENCIL;if(i===hh)return n.RED;if(i===$l)return n.RED_INTEGER;if(i===dh)return n.RG;if(i===Kl)return n.RG_INTEGER;if(i===Zl)return n.RGBA_INTEGER;if(i===Ws||i===Xs||i===qs||i===Ys)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ws)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ws)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ys)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===qa||i===Ya)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ya)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$a||i===Ka||i===Za)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$a||i===Ka)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Za)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ja||i===ja||i===Qa||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===ll||i===cl||i===ul)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ja)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ja)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===el)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===il)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ol)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$s||i===fl||i===hl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$s)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ph||i===dl||i===pl||i===ml)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$s)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const hM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ut,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ai({vertexShader:hM,fragmentShader:dM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jt(new yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mM extends Ii{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const x=new pM,m=t.getContextAttributes();let d=null,w=null;const b=[],S=[],I=new Te;let P=null;const R=new Zt;R.viewport=new _t;const D=new Zt;D.viewport=new _t;const T=[R,D],M=new I_;let L=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let de=b[ie];return de===void 0&&(de=new aa,b[ie]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ie){let de=b[ie];return de===void 0&&(de=new aa,b[ie]=de),de.getGripSpace()},this.getHand=function(ie){let de=b[ie];return de===void 0&&(de=new aa,b[ie]=de),de.getHandSpace()};function Z(ie){const de=S.indexOf(ie.inputSource);if(de===-1)return;const we=b[de];we!==void 0&&(we.update(ie.inputSource,ie.frame,c||o),we.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ne(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",re);for(let ie=0;ie<b.length;ie++){const de=S[ie];de!==null&&(S[ie]=null,b[ie].disconnect(de))}L=null,te=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,w=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,me=null,Pe=null;m.depth&&(Pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=m.stencil?Zr:Kr,me=m.stencil?$r:Pi);const Ve={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Li(h.textureWidth,h.textureHeight,{format:sn,type:zn,depthTexture:new Ah(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const we={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Li(p.framebufferWidth,p.framebufferHeight,{format:sn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function re(ie){for(let de=0;de<ie.removed.length;de++){const we=ie.removed[de],me=S.indexOf(we);me>=0&&(S[me]=null,b[me].disconnect(we))}for(let de=0;de<ie.added.length;de++){const we=ie.added[de];let me=S.indexOf(we);if(me===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=S.length){S.push(we),me=Ve;break}else if(S[Ve]===null){S[Ve]=we,me=Ve;break}if(me===-1)break}const Pe=b[me];Pe&&Pe.connect(we)}}const K=new k,ee=new k;function q(ie,de,we){K.setFromMatrixPosition(de.matrixWorld),ee.setFromMatrixPosition(we.matrixWorld);const me=K.distanceTo(ee),Pe=de.projectionMatrix.elements,Ve=we.projectionMatrix.elements,Ie=Pe[14]/(Pe[10]-1),st=Pe[14]/(Pe[10]+1),A=(Pe[9]+1)/Pe[5],C=(Pe[9]-1)/Pe[5],v=(Pe[8]-1)/Pe[0],z=(Ve[8]+1)/Ve[0],N=Ie*v,B=Ie*z,O=me/(-v+z),$=O*-v;if(de.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX($),ie.translateZ(O),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Pe[10]===-1)ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const V=Ie+O,W=st+O,le=N-$,y=B+(me-$),g=A*st/W*V,U=C*st/W*V;ie.projectionMatrix.makePerspective(le,y,g,U,V,W),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function he(ie,de){de===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(de.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let de=ie.near,we=ie.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(we=x.depthFar)),M.near=D.near=R.near=de,M.far=D.far=R.far=we,(L!==M.near||te!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,te=M.far),R.layers.mask=ie.layers.mask|2,D.layers.mask=ie.layers.mask|4,M.layers.mask=R.layers.mask|D.layers.mask;const me=ie.parent,Pe=M.cameras;he(M,me);for(let Ve=0;Ve<Pe.length;Ve++)he(Pe[Ve],me);Pe.length===2?q(M,R,D):M.projectionMatrix.copy(R.projectionMatrix),ve(ie,M,me)};function ve(ie,de,we){we===null?ie.matrix.copy(de.matrixWorld):(ie.matrix.copy(we.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(de.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=gl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ye=null;function Ne(ie,de){if(u=de.getViewerPose(c||o),_=de,u!==null){const we=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let me=!1;we.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let Ie=0;Ie<we.length;Ie++){const st=we[Ie];let A=null;if(p!==null)A=p.getViewport(st);else{const v=f.getViewSubImage(h,st);A=v.viewport,Ie===0&&(e.setRenderTargetTextures(w,v.colorTexture,v.depthStencilTexture),e.setRenderTarget(w))}let C=T[Ie];C===void 0&&(C=new Zt,C.layers.enable(Ie),C.viewport=new _t,T[Ie]=C),C.matrix.fromArray(st.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(st.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(A.x,A.y,A.width,A.height),Ie===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(C)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Ie=f.getDepthInformation(we[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,r.renderState)}}for(let we=0;we<b.length;we++){const me=S[we],Pe=b[we];me!==null&&Pe!==void 0&&Pe.update(me,de,c||o)}ye&&ye(ie,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Ye=new Nh;Ye.setAnimationLoop(Ne),this.setAnimationLoop=function(ie){ye=ie},this.dispose=function(){}}}const xi=new Hn,gM=new gt;function _M(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,yh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,b,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,w,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ft&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ft&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d),b=w.envMap,S=w.envMapRotation;b&&(m.envMap.value=b,xi.copy(S),xi.x*=-1,xi.y*=-1,xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(gM.makeRotationFromEuler(xi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ft&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const S=b.program;i.uniformBlockBinding(w,S)}function c(w,b){let S=r[w.id];S===void 0&&(_(w),S=u(w),r[w.id]=S,w.addEventListener("dispose",m));const I=b.program;i.updateUBOMapping(w,I);const P=e.render.frame;s[w.id]!==P&&(h(w),s[w.id]=P)}function u(w){const b=f();w.__bindingPointIndex=b;const S=n.createBuffer(),I=w.__size,P=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const b=r[w.id],S=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let P=0,R=S.length;P<R;P++){const D=Array.isArray(S[P])?S[P]:[S[P]];for(let T=0,M=D.length;T<M;T++){const L=D[T];if(p(L,P,T,I)===!0){const te=L.__offset,Z=Array.isArray(L.value)?L.value:[L.value];let ne=0;for(let re=0;re<Z.length;re++){const K=Z[re],ee=x(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,te+ne,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,ne),ne+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,te,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,b,S,I){const P=w.value,R=b+"_"+S;if(I[R]===void 0)return typeof P=="number"||typeof P=="boolean"?I[R]=P:I[R]=P.clone(),!0;{const D=I[R];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return I[R]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function _(w){const b=w.uniforms;let S=0;const I=16;for(let R=0,D=b.length;R<D;R++){const T=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,L=T.length;M<L;M++){const te=T[M],Z=Array.isArray(te.value)?te.value:[te.value];for(let ne=0,re=Z.length;ne<re;ne++){const K=Z[ne],ee=x(K),q=S%I,he=q%ee.boundary,ve=q+he;S+=he,ve!==0&&I-ve<ee.storage&&(S+=I-ve),te.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=S,S+=ee.storage}}}const P=S%I;return P>0&&(S+=I-P),w.__size=S,w.__cache={},this}function x(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class xM{constructor(e={}){const{canvas:t=pg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1;this._outputColorSpace=$t;let P=0,R=0,D=null,T=-1,M=null;const L=new _t,te=new _t;let Z=null;const ne=new tt(0);let re=0,K=t.width,ee=t.height,q=1,he=null,ve=null;const ye=new _t(0,0,K,ee),Ne=new _t(0,0,K,ee);let Ye=!1;const ie=new bh;let de=!1,we=!1;const me=new gt,Pe=new gt,Ve=new k,Ie=new _t,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function C(){return D===null?q:1}let v=i;function z(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wl}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",se,!1),v===null){const H="webgl2";if(v=z(H,E),v===null)throw z(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let N,B,O,$,V,W,le,y,g,U,X,Q,Y,_e,ce,xe,Ee,oe,be,Ce,Le,pe,Be,F;function Se(){N=new C0(v),N.init(),pe=new fM(v,N),B=new y0(v,N,e,pe),O=new cM(v,N),B.reverseDepthBuffer&&h&&O.buffers.depth.setReversed(!0),$=new D0(v),V=new ZS,W=new uM(v,N,O,V,B,pe,$),le=new T0(S),y=new R0(S),g=new B_(v),Be=new S0(v,g),U=new P0(v,g,$,Be),X=new I0(v,U,g,$),be=new U0(v,B,W),xe=new E0(V),Q=new KS(S,le,y,N,B,Be,xe),Y=new _M(S,V),_e=new jS,ce=new rM(N),oe=new x0(S,le,y,O,X,p,l),Ee=new aM(S,X,B),F=new vM(v,$,B,O),Ce=new M0(v,N,$),Le=new L0(v,N,$),$.programs=Q.programs,S.capabilities=B,S.extensions=N,S.properties=V,S.renderLists=_e,S.shadowMap=Ee,S.state=O,S.info=$}Se();const ae=new mM(S,v);this.xr=ae,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const E=N.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=N.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(K,ee,!1))},this.getSize=function(E){return E.set(K,ee)},this.setSize=function(E,H,J=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,ee=H,t.width=Math.floor(E*q),t.height=Math.floor(H*q),J===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(K*q,ee*q).floor()},this.setDrawingBufferSize=function(E,H,J){K=E,ee=H,q=J,t.width=Math.floor(E*J),t.height=Math.floor(H*J),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,H,J,j){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,H,J,j),O.viewport(L.copy(ye).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,H,J,j){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,H,J,j),O.scissor(te.copy(Ne).multiplyScalar(q).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(E){O.setScissorTest(Ye=E)},this.setOpaqueSort=function(E){he=E},this.setTransparentSort=function(E){ve=E},this.getClearColor=function(E){return E.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,J=!0){let j=0;if(E){let G=!1;if(D!==null){const fe=D.texture.format;G=fe===Zl||fe===Kl||fe===$l}if(G){const fe=D.texture.type,Me=fe===zn||fe===Pi||fe===Yr||fe===$r||fe===ql||fe===Yl,Ue=oe.getClearColor(),Ae=oe.getClearAlpha(),ze=Ue.r,He=Ue.g,Fe=Ue.b;Me?(_[0]=ze,_[1]=He,_[2]=Fe,_[3]=Ae,v.clearBufferuiv(v.COLOR,0,_)):(x[0]=ze,x[1]=He,x[2]=Fe,x[3]=Ae,v.clearBufferiv(v.COLOR,0,x))}else j|=v.COLOR_BUFFER_BIT}H&&(j|=v.DEPTH_BUFFER_BIT),J&&(j|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",se,!1),oe.dispose(),_e.dispose(),ce.dispose(),V.dispose(),le.dispose(),y.dispose(),X.dispose(),Be.dispose(),F.dispose(),Q.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",sc),ae.removeEventListener("sessionend",oc),ui.stop()};function Re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=$.autoReset,H=Ee.enabled,J=Ee.autoUpdate,j=Ee.needsUpdate,G=Ee.type;Se(),$.autoReset=E,Ee.enabled=H,Ee.autoUpdate=J,Ee.needsUpdate=j,Ee.type=G}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){const H=E.target;H.removeEventListener("dispose",De),ke(H)}function ke(E){lt(E),V.remove(E)}function lt(E){const H=V.get(E).programs;H!==void 0&&(H.forEach(function(J){Q.releaseProgram(J)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,J,j,G,fe){H===null&&(H=st);const Me=G.isMesh&&G.matrixWorld.determinant()<0,Ue=Xh(E,H,J,j,G);O.setMaterial(j,Me);let Ae=J.index,ze=1;if(j.wireframe===!0){if(Ae=U.getWireframeAttribute(J),Ae===void 0)return;ze=2}const He=J.drawRange,Fe=J.attributes.position;let Ke=He.start*ze,nt=(He.start+He.count)*ze;fe!==null&&(Ke=Math.max(Ke,fe.start*ze),nt=Math.min(nt,(fe.start+fe.count)*ze)),Ae!==null?(Ke=Math.max(Ke,0),nt=Math.min(nt,Ae.count)):Fe!=null&&(Ke=Math.max(Ke,0),nt=Math.min(nt,Fe.count));const pt=nt-Ke;if(pt<0||pt===1/0)return;Be.setup(G,j,Ue,J,Ae);let ct,rt=Ce;if(Ae!==null&&(ct=g.get(Ae),rt=Le,rt.setIndex(ct)),G.isMesh)j.wireframe===!0?(O.setLineWidth(j.wireframeLinewidth*C()),rt.setMode(v.LINES)):rt.setMode(v.TRIANGLES);else if(G.isLine){let Oe=j.linewidth;Oe===void 0&&(Oe=1),O.setLineWidth(Oe*C()),G.isLineSegments?rt.setMode(v.LINES):G.isLineLoop?rt.setMode(v.LINE_LOOP):rt.setMode(v.LINE_STRIP)}else G.isPoints?rt.setMode(v.POINTS):G.isSprite&&rt.setMode(v.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(N.get("WEBGL_multi_draw"))rt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Oe=G._multiDrawStarts,ht=G._multiDrawCounts,Ze=G._multiDrawCount,Ot=Ae?g.get(Ae).bytesPerElement:1,Fi=V.get(j).currentProgram.getUniforms();for(let Bt=0;Bt<Ze;Bt++)Fi.setValue(v,"_gl_DrawID",Bt),rt.render(Oe[Bt]/Ot,ht[Bt])}else if(G.isInstancedMesh)rt.renderInstances(Ke,pt,G.count);else if(J.isInstancedBufferGeometry){const Oe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ht=Math.min(J.instanceCount,Oe);rt.renderInstances(Ke,pt,ht)}else rt.render(Ke,pt)};function et(E,H,J){E.transparent===!0&&E.side===Cn&&E.forceSinglePass===!1?(E.side=Ft,E.needsUpdate=!0,us(E,H,J),E.side=oi,E.needsUpdate=!0,us(E,H,J),E.side=Cn):us(E,H,J)}this.compile=function(E,H,J=null){J===null&&(J=E),d=ce.get(J),d.init(H),b.push(d),J.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),E!==J&&E.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();const j=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const fe=G.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const Ue=fe[Me];et(Ue,J,G),j.add(Ue)}else et(fe,J,G),j.add(fe)}),d=b.pop(),j},this.compileAsync=function(E,H,J=null){const j=this.compile(E,H,J);return new Promise(G=>{function fe(){if(j.forEach(function(Me){V.get(Me).currentProgram.isReady()&&j.delete(Me)}),j.size===0){G(E);return}setTimeout(fe,10)}N.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let jt=null;function vn(E){jt&&jt(E)}function sc(){ui.stop()}function oc(){ui.start()}const ui=new Nh;ui.setAnimationLoop(vn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(E){jt=E,ae.setAnimationLoop(E),E===null?ui.stop():ui.start()},ae.addEventListener("sessionstart",sc),ae.addEventListener("sessionend",oc),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(H),H=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,H,D),d=ce.get(E,b.length),d.init(H),b.push(d),Pe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ie.setFromProjectionMatrix(Pe),we=this.localClippingEnabled,de=xe.init(this.clippingPlanes,we),m=_e.get(E,w.length),m.init(),w.push(m),ae.enabled===!0&&ae.isPresenting===!0){const fe=S.xr.getDepthSensingMesh();fe!==null&&bo(fe,H,-1/0,S.sortObjects)}bo(E,H,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(he,ve),A=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,A&&oe.addToRenderList(m,E),this.info.render.frame++,de===!0&&xe.beginShadows();const J=d.state.shadowsArray;Ee.render(J,E,H),de===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,G=m.transmissive;if(d.setupLights(),H.isArrayCamera){const fe=H.cameras;if(G.length>0)for(let Me=0,Ue=fe.length;Me<Ue;Me++){const Ae=fe[Me];lc(j,G,E,Ae)}A&&oe.render(E);for(let Me=0,Ue=fe.length;Me<Ue;Me++){const Ae=fe[Me];ac(m,E,Ae,Ae.viewport)}}else G.length>0&&lc(j,G,E,H),A&&oe.render(E),ac(m,E,H);D!==null&&R===0&&(W.updateMultisampleRenderTarget(D),W.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(S,E,H),Be.resetDefaultState(),T=-1,M=null,b.pop(),b.length>0?(d=b[b.length-1],de===!0&&xe.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function bo(E,H,J,j){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ie.intersectsSprite(E)){j&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);const Me=X.update(E),Ue=E.material;Ue.visible&&m.push(E,Me,Ue,J,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ie.intersectsObject(E))){const Me=X.update(E),Ue=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ie.copy(Me.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ue)){const Ae=Me.groups;for(let ze=0,He=Ae.length;ze<He;ze++){const Fe=Ae[ze],Ke=Ue[Fe.materialIndex];Ke&&Ke.visible&&m.push(E,Me,Ke,J,Ie.z,Fe)}}else Ue.visible&&m.push(E,Me,Ue,J,Ie.z,null)}}const fe=E.children;for(let Me=0,Ue=fe.length;Me<Ue;Me++)bo(fe[Me],H,J,j)}function ac(E,H,J,j){const G=E.opaque,fe=E.transmissive,Me=E.transparent;d.setupLightsView(J),de===!0&&xe.setGlobalState(S.clippingPlanes,J),j&&O.viewport(L.copy(j)),G.length>0&&cs(G,H,J),fe.length>0&&cs(fe,H,J),Me.length>0&&cs(Me,H,J),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function lc(E,H,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[j.id]===void 0&&(d.state.transmissionRenderTarget[j.id]=new Li(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float")?rs:zn,minFilter:Ai,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const fe=d.state.transmissionRenderTarget[j.id],Me=j.viewport||L;fe.setSize(Me.z*S.transmissionResolutionScale,Me.w*S.transmissionResolutionScale);const Ue=S.getRenderTarget(),Ae=S.getActiveCubeFace(),ze=S.getActiveMipmapLevel();S.setRenderTarget(fe),S.getClearColor(ne),re=S.getClearAlpha(),re<1&&S.setClearColor(16777215,.5),S.clear(),A&&oe.render(J);const He=S.toneMapping;S.toneMapping=ii;const Fe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),d.setupLightsView(j),de===!0&&xe.setGlobalState(S.clippingPlanes,j),cs(E,J,j),W.updateMultisampleRenderTarget(fe),W.updateRenderTargetMipmap(fe),N.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let nt=0,pt=H.length;nt<pt;nt++){const ct=H[nt],rt=ct.object,Oe=ct.geometry,ht=ct.material,Ze=ct.group;if(ht.side===Cn&&rt.layers.test(j.layers)){const Ot=ht.side;ht.side=Ft,ht.needsUpdate=!0,cc(rt,J,j,Oe,ht,Ze),ht.side=Ot,ht.needsUpdate=!0,Ke=!0}}Ke===!0&&(W.updateMultisampleRenderTarget(fe),W.updateRenderTargetMipmap(fe))}S.setRenderTarget(Ue,Ae,ze),S.setClearColor(ne,re),Fe!==void 0&&(j.viewport=Fe),S.toneMapping=He}function cs(E,H,J){const j=H.isScene===!0?H.overrideMaterial:null;for(let G=0,fe=E.length;G<fe;G++){const Me=E[G],Ue=Me.object,Ae=Me.geometry,ze=Me.group;let He=Me.material;He.allowOverride===!0&&j!==null&&(He=j),Ue.layers.test(J.layers)&&cc(Ue,H,J,Ae,He,ze)}}function cc(E,H,J,j,G,fe){E.onBeforeRender(S,H,J,j,G,fe),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(S,H,J,j,E,fe),G.transparent===!0&&G.side===Cn&&G.forceSinglePass===!1?(G.side=Ft,G.needsUpdate=!0,S.renderBufferDirect(J,H,j,G,E,fe),G.side=oi,G.needsUpdate=!0,S.renderBufferDirect(J,H,j,G,E,fe),G.side=Cn):S.renderBufferDirect(J,H,j,G,E,fe),E.onAfterRender(S,H,J,j,G,fe)}function us(E,H,J){H.isScene!==!0&&(H=st);const j=V.get(E),G=d.state.lights,fe=d.state.shadowsArray,Me=G.state.version,Ue=Q.getParameters(E,G.state,fe,H,J),Ae=Q.getProgramCacheKey(Ue);let ze=j.programs;j.environment=E.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(E.isMeshStandardMaterial?y:le).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",De),ze=new Map,j.programs=ze);let He=ze.get(Ae);if(He!==void 0){if(j.currentProgram===He&&j.lightsStateVersion===Me)return fc(E,Ue),He}else Ue.uniforms=Q.getUniforms(E),E.onBeforeCompile(Ue,S),He=Q.acquireProgram(Ue,Ae),ze.set(Ae,He),j.uniforms=Ue.uniforms;const Fe=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=xe.uniform),fc(E,Ue),j.needsLights=Yh(E),j.lightsStateVersion=Me,j.needsLights&&(Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.directionalShadowMap.value=G.state.directionalShadowMap,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotShadowMap.value=G.state.spotShadowMap,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMap.value=G.state.pointShadowMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=He,j.uniformsList=null,He}function uc(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Zs.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function fc(E,H){const J=V.get(E);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Xh(E,H,J,j,G){H.isScene!==!0&&(H=st),W.resetTextureUnits();const fe=H.fog,Me=j.isMeshStandardMaterial?H.environment:null,Ue=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:dr,Ae=(j.isMeshStandardMaterial?y:le).get(j.envMap||Me),ze=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,He=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Fe=!!J.morphAttributes.position,Ke=!!J.morphAttributes.normal,nt=!!J.morphAttributes.color;let pt=ii;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(pt=S.toneMapping);const ct=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,rt=ct!==void 0?ct.length:0,Oe=V.get(j),ht=d.state.lights;if(de===!0&&(we===!0||E!==M)){const Rt=E===M&&j.id===T;xe.setState(j,E,Rt)}let Ze=!1;j.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ht.state.version||Oe.outputColorSpace!==Ue||G.isBatchedMesh&&Oe.batching===!1||!G.isBatchedMesh&&Oe.batching===!0||G.isBatchedMesh&&Oe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Oe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Oe.instancing===!1||!G.isInstancedMesh&&Oe.instancing===!0||G.isSkinnedMesh&&Oe.skinning===!1||!G.isSkinnedMesh&&Oe.skinning===!0||G.isInstancedMesh&&Oe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Oe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Oe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Oe.instancingMorph===!1&&G.morphTexture!==null||Oe.envMap!==Ae||j.fog===!0&&Oe.fog!==fe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==xe.numPlanes||Oe.numIntersection!==xe.numIntersection)||Oe.vertexAlphas!==ze||Oe.vertexTangents!==He||Oe.morphTargets!==Fe||Oe.morphNormals!==Ke||Oe.morphColors!==nt||Oe.toneMapping!==pt||Oe.morphTargetsCount!==rt)&&(Ze=!0):(Ze=!0,Oe.__version=j.version);let Ot=Oe.currentProgram;Ze===!0&&(Ot=us(j,H,G));let Fi=!1,Bt=!1,vr=!1;const ut=Ot.getUniforms(),Xt=Oe.uniforms;if(O.useProgram(Ot.program)&&(Fi=!0,Bt=!0,vr=!0),j.id!==T&&(T=j.id,Bt=!0),Fi||M!==E){O.buffers.depth.getReversed()?(me.copy(E.projectionMatrix),gg(me),_g(me),ut.setValue(v,"projectionMatrix",me)):ut.setValue(v,"projectionMatrix",E.projectionMatrix),ut.setValue(v,"viewMatrix",E.matrixWorldInverse);const It=ut.map.cameraPosition;It!==void 0&&It.setValue(v,Ve.setFromMatrixPosition(E.matrixWorld)),B.logarithmicDepthBuffer&&ut.setValue(v,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ut.setValue(v,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Bt=!0,vr=!0)}if(G.isSkinnedMesh){ut.setOptional(v,G,"bindMatrix"),ut.setOptional(v,G,"bindMatrixInverse");const Rt=G.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ut.setValue(v,"boneTexture",Rt.boneTexture,W))}G.isBatchedMesh&&(ut.setOptional(v,G,"batchingTexture"),ut.setValue(v,"batchingTexture",G._matricesTexture,W),ut.setOptional(v,G,"batchingIdTexture"),ut.setValue(v,"batchingIdTexture",G._indirectTexture,W),ut.setOptional(v,G,"batchingColorTexture"),G._colorsTexture!==null&&ut.setValue(v,"batchingColorTexture",G._colorsTexture,W));const qt=J.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&be.update(G,J,Ot),(Bt||Oe.receiveShadow!==G.receiveShadow)&&(Oe.receiveShadow=G.receiveShadow,ut.setValue(v,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Xt.envMap.value=Ae,Xt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&H.environment!==null&&(Xt.envMapIntensity.value=H.environmentIntensity),Bt&&(ut.setValue(v,"toneMappingExposure",S.toneMappingExposure),Oe.needsLights&&qh(Xt,vr),fe&&j.fog===!0&&Y.refreshFogUniforms(Xt,fe),Y.refreshMaterialUniforms(Xt,j,q,ee,d.state.transmissionRenderTarget[E.id]),Zs.upload(v,uc(Oe),Xt,W)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Zs.upload(v,uc(Oe),Xt,W),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ut.setValue(v,"center",G.center),ut.setValue(v,"modelViewMatrix",G.modelViewMatrix),ut.setValue(v,"normalMatrix",G.normalMatrix),ut.setValue(v,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Rt=j.uniformsGroups;for(let It=0,Ao=Rt.length;It<Ao;It++){const fi=Rt[It];F.update(fi,Ot),F.bind(fi,Ot)}}return Ot}function qh(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Yh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,H,J){const j=V.get(E);j.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),V.get(E.texture).__webglTexture=H,V.get(E.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const J=V.get(E);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0};const $h=v.createFramebuffer();this.setRenderTarget=function(E,H=0,J=0){D=E,P=H,R=J;let j=!0,G=null,fe=!1,Me=!1;if(E){const Ae=V.get(E);if(Ae.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(v.FRAMEBUFFER,null),j=!1;else if(Ae.__webglFramebuffer===void 0)W.setupRenderTarget(E);else if(Ae.__hasExternalTextures)W.rebindTextures(E,V.get(E.texture).__webglTexture,V.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(Ae.__boundDepthTexture!==Fe){if(Fe!==null&&V.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(E)}}const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Me=!0);const He=V.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[H])?G=He[H][J]:G=He[H],fe=!0):E.samples>0&&W.useMultisampledRTT(E)===!1?G=V.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?G=He[J]:G=He,L.copy(E.viewport),te.copy(E.scissor),Z=E.scissorTest}else L.copy(ye).multiplyScalar(q).floor(),te.copy(Ne).multiplyScalar(q).floor(),Z=Ye;if(J!==0&&(G=$h),O.bindFramebuffer(v.FRAMEBUFFER,G)&&j&&O.drawBuffers(E,G),O.viewport(L),O.scissor(te),O.setScissorTest(Z),fe){const Ae=V.get(E.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,J)}else if(Me){const Ae=V.get(E.texture),ze=H;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ae.__webglTexture,J,ze)}else if(E!==null&&J!==0){const Ae=V.get(E.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ae.__webglTexture,J)}T=-1},this.readRenderTargetPixels=function(E,H,J,j,G,fe,Me,Ue=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){O.bindFramebuffer(v.FRAMEBUFFER,Ae);try{const ze=E.textures[Ue],He=ze.format,Fe=ze.type;if(!B.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-j&&J>=0&&J<=E.height-G&&(E.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ue),v.readPixels(H,J,j,G,pe.convert(He),pe.convert(Fe),fe))}finally{const ze=D!==null?V.get(D).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,H,J,j,G,fe,Me,Ue=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae)if(H>=0&&H<=E.width-j&&J>=0&&J<=E.height-G){O.bindFramebuffer(v.FRAMEBUFFER,Ae);const ze=E.textures[Ue],He=ze.format,Fe=ze.type;if(!B.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Ke),v.bufferData(v.PIXEL_PACK_BUFFER,fe.byteLength,v.STREAM_READ),E.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ue),v.readPixels(H,J,j,G,pe.convert(He),pe.convert(Fe),0);const nt=D!==null?V.get(D).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,nt);const pt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await mg(v,pt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Ke),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,fe),v.deleteBuffer(Ke),v.deleteSync(pt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,J=0){const j=Math.pow(2,-J),G=Math.floor(E.image.width*j),fe=Math.floor(E.image.height*j),Me=H!==null?H.x:0,Ue=H!==null?H.y:0;W.setTexture2D(E,0),v.copyTexSubImage2D(v.TEXTURE_2D,J,0,0,Me,Ue,G,fe),O.unbindTexture()};const Kh=v.createFramebuffer(),Zh=v.createFramebuffer();this.copyTextureToTexture=function(E,H,J=null,j=null,G=0,fe=null){fe===null&&(G!==0?(or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=G,G=0):fe=0);let Me,Ue,Ae,ze,He,Fe,Ke,nt,pt;const ct=E.isCompressedTexture?E.mipmaps[fe]:E.image;if(J!==null)Me=J.max.x-J.min.x,Ue=J.max.y-J.min.y,Ae=J.isBox3?J.max.z-J.min.z:1,ze=J.min.x,He=J.min.y,Fe=J.isBox3?J.min.z:0;else{const qt=Math.pow(2,-G);Me=Math.floor(ct.width*qt),Ue=Math.floor(ct.height*qt),E.isDataArrayTexture?Ae=ct.depth:E.isData3DTexture?Ae=Math.floor(ct.depth*qt):Ae=1,ze=0,He=0,Fe=0}j!==null?(Ke=j.x,nt=j.y,pt=j.z):(Ke=0,nt=0,pt=0);const rt=pe.convert(H.format),Oe=pe.convert(H.type);let ht;H.isData3DTexture?(W.setTexture3D(H,0),ht=v.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(W.setTexture2DArray(H,0),ht=v.TEXTURE_2D_ARRAY):(W.setTexture2D(H,0),ht=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,H.unpackAlignment);const Ze=v.getParameter(v.UNPACK_ROW_LENGTH),Ot=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Fi=v.getParameter(v.UNPACK_SKIP_PIXELS),Bt=v.getParameter(v.UNPACK_SKIP_ROWS),vr=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,ct.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ct.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,ze),v.pixelStorei(v.UNPACK_SKIP_ROWS,He),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Fe);const ut=E.isDataArrayTexture||E.isData3DTexture,Xt=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const qt=V.get(E),Rt=V.get(H),It=V.get(qt.__renderTarget),Ao=V.get(Rt.__renderTarget);O.bindFramebuffer(v.READ_FRAMEBUFFER,It.__webglFramebuffer),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,Ao.__webglFramebuffer);for(let fi=0;fi<Ae;fi++)ut&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,V.get(E).__webglTexture,G,Fe+fi),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,V.get(H).__webglTexture,fe,pt+fi)),v.blitFramebuffer(ze,He,Me,Ue,Ke,nt,Me,Ue,v.DEPTH_BUFFER_BIT,v.NEAREST);O.bindFramebuffer(v.READ_FRAMEBUFFER,null),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||V.has(E)){const qt=V.get(E),Rt=V.get(H);O.bindFramebuffer(v.READ_FRAMEBUFFER,Kh),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,Zh);for(let It=0;It<Ae;It++)ut?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,qt.__webglTexture,G,Fe+It):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,qt.__webglTexture,G),Xt?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Rt.__webglTexture,fe,pt+It):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Rt.__webglTexture,fe),G!==0?v.blitFramebuffer(ze,He,Me,Ue,Ke,nt,Me,Ue,v.COLOR_BUFFER_BIT,v.NEAREST):Xt?v.copyTexSubImage3D(ht,fe,Ke,nt,pt+It,ze,He,Me,Ue):v.copyTexSubImage2D(ht,fe,Ke,nt,ze,He,Me,Ue);O.bindFramebuffer(v.READ_FRAMEBUFFER,null),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else Xt?E.isDataTexture||E.isData3DTexture?v.texSubImage3D(ht,fe,Ke,nt,pt,Me,Ue,Ae,rt,Oe,ct.data):H.isCompressedArrayTexture?v.compressedTexSubImage3D(ht,fe,Ke,nt,pt,Me,Ue,Ae,rt,ct.data):v.texSubImage3D(ht,fe,Ke,nt,pt,Me,Ue,Ae,rt,Oe,ct):E.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,fe,Ke,nt,Me,Ue,rt,Oe,ct.data):E.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,fe,Ke,nt,ct.width,ct.height,rt,ct.data):v.texSubImage2D(v.TEXTURE_2D,fe,Ke,nt,Me,Ue,rt,Oe,ct);v.pixelStorei(v.UNPACK_ROW_LENGTH,Ze),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Ot),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Fi),v.pixelStorei(v.UNPACK_SKIP_ROWS,Bt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,vr),fe===0&&H.generateMipmaps&&v.generateMipmap(ht),O.unbindTexture()},this.copyTextureToTexture3D=function(E,H,J=null,j=null,G=0){return or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,J,j,G)},this.initRenderTarget=function(E){V.get(E).__webglFramebuffer===void 0&&W.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?W.setTextureCube(E,0):E.isData3DTexture?W.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?W.setTexture2DArray(E,0):W.setTexture2D(E,0),O.unbindTexture()},this.resetState=function(){P=0,R=0,D=null,O.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}function SM(n,e,t){const i=new N_,r=new Te,s={};let o=[];window.addEventListener("pointermove",a=>{const l=window.innerWidth,c=window.innerHeight;r.set(a.clientX/l*2-1,-(a.clientY/c)*2+1),i.setFromCamera(r,n),o=i.intersectObjects(t.children,!0),Object.keys(s).forEach(u=>{o.find(h=>h.object.uuid===u)===void 0&&(s[u].object.dispatchEvent({type:"pointerout"}),delete s[u])}),o.forEach(u=>{s[u.object.uuid]||(s[u.object.uuid]=u,u.object.dispatchEvent({type:"pointerover"})),u.object.dispatchEvent({type:"pointermove"})})}),e.domElement.addEventListener("click",a=>{a.preventDefault(),o.forEach(l=>{l.object.dispatchEvent({type:"click"})})})}function MM(){const n=new Zt(70,window.innerWidth/window.innerHeight,.1,100);return n.position.z=4,n}function yM(n){const e=MM(),t=[],i=new Gg,r=new xM({antialias:!0,canvas:n});r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)});const s={value:null},o=EM(e,i,r,t,s);return r.setAnimationLoop(o),SM(e,r,i),{renderer:r,scene:i,camera:e,animations:t,setController(a){s.value=a}}}function EM(n,e,t,i,r){let s=e.position,o=n.position.clone();return function(){const a=r.value?.currentState?.scenePosition??e.position,l=a.clone().setZ(n.position.z);o=o.clone().lerp(l,.125),n.position.x=o.x+Math.sin(Date.now()*.001)*.5,n.position.y=o.y+Math.cos(Date.now()*.001)*1,s=s.clone().lerp(a,.125),n.lookAt(s);const c=[];for(const u of i){if(u.done){c.push(u);continue}const{done:f}=u.run();f&&c.push(u)}c.forEach(u=>i.splice(i.indexOf(u),1)),t.render(e,n)}}const TM=""+new URL("1-ZGmQxtB_.svg",import.meta.url).href,bM=""+new URL("2-Cal4CwY9.svg",import.meta.url).href,AM=""+new URL("3-vXrWa-O9.svg",import.meta.url).href,wM=""+new URL("4-jgBQ7qlN.svg",import.meta.url).href,RM=""+new URL("5-YXIFrZtt.svg",import.meta.url).href,CM=""+new URL("6-CqqXsr0E.svg",import.meta.url).href,$n=Math.PI/2,PM=[[$n,0,0],[0,0,0],[$n,$n,$n],[0,$n,0],[$n*2,0,0],[0,$n*3,$n*1]];function LM(){const n=[AM,wM,TM,CM,bM,RM],e=new D_,t=new Ni(.5,.5,.5),i=n.map(u=>{const f=e.load(u,h=>{h.anisotropy=32,h.minFilter=tg,h.magFilter=rn,h.generateMipmaps=!0,h.needsUpdate=!0});return new as({map:f})}),r=new Jt(t,i);let s=null,o=null,a=null;const l={init(u,f){s=u,a=f},mesh:r,hold:!1,setValue(u){this.value=u;const f=PM[u-1],h=s?r.clone():r;if(h.rotation.x=f[0],h.rotation.y=f[1],h.rotation.z=f[2],s){const p={run(){const x=h.rotation.x-r.rotation.x,m=h.rotation.y-r.rotation.y,d=h.rotation.z-r.rotation.z;return Math.abs(x)<.001&&Math.abs(m)<.001&&Math.abs(d)<.001?(r.rotation.x=h.rotation.x,r.rotation.y=h.rotation.y,r.rotation.z=h.rotation.z,this.done=!0,{done:!0}):(r.rotation.x+=x*.1,r.rotation.y+=m*.1,r.rotation.z+=d*.1,{done:!1})},done:!1};o!=null&&(o.done=!0),o=p,s.push(p)}},value:1},c=DM();return r.addEventListener("click",()=>{l.hold=!l.hold,c(r,l.hold,!1,s)}),r.addEventListener("pointerover",()=>{c(r,l.hold,!0,s),a&&(a.domElement.style.cursor="pointer")}),r.addEventListener("pointerout",()=>{c(r,l.hold,!1,s),a&&(a.domElement.style.cursor="")}),l}function DM(){let n=null;return function(e,t,i,r){const s=t?1.2:i?1.1:1,o=r?e.scale.clone():e.scale;if(o.x=s,o.y=s,o.z=s,r){const a={run(){const c=o.x-e.scale.x,u=o.y-e.scale.y,f=o.z-e.scale.z;return Math.abs(c)<.001&&Math.abs(u)<.001&&Math.abs(f)<.001?(e.scale.x=o.x,e.scale.y=o.y,e.scale.z=o.z,this.done=!0,{done:!0}):(e.scale.x+=c*.2,e.scale.y+=u*.2,e.scale.z+=f*.2,{done:!1})},done:!1};n!=null&&(n.done=!0),n=a,r.push(a)}}}let Hh;const To=n=>Hh=n,Vh=Symbol();function El(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Vr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Vr||(Vr={}));function UM(){const n=sf(!0),e=n.run(()=>mo({}));let t=[],i=[];const r=Fl({install(s){To(r),r._a=s,s.provide(Vh,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Gh=()=>{};function Vu(n,e,t,i=Gh){n.add(e);const r=()=>{n.delete(e)&&i()};return!t&&of()&&ld(r),r}function Qi(n,...e){n.forEach(t=>{t(...e)})}const IM=n=>n(),Gu=Symbol(),va=Symbol();function Tl(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];El(r)&&El(i)&&n.hasOwnProperty(t)&&!mt(i)&&!Dn(i)?n[t]=Tl(r,i):n[t]=i}return n}const NM=Symbol();function FM(n){return!El(n)||!Object.prototype.hasOwnProperty.call(n,NM)}const{assign:Kn}=Object;function OM(n){return!!(mt(n)&&n.effect)}function BM(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=Dd(t.state.value[n]);return Kn(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Fl(nh(()=>{To(t);const p=t._s.get(n);return o[h].call(p,p)})),f),{}))}return l=kh(n,c,e,t,i,!0),l}function kh(n,e,t={},i,r,s){let o;const a=Kn({actions:{}},t),l={deep:!0};let c,u,f=new Set,h=new Set,p;const _=i.state.value[n];!s&&!_&&(i.state.value[n]={}),mo({});let x;function m(D){let T;c=u=!1,typeof D=="function"?(D(i.state.value[n]),T={type:Vr.patchFunction,storeId:n,events:p}):(Tl(i.state.value[n],D),T={type:Vr.patchObject,payload:D,storeId:n,events:p});const M=x=Symbol();Ef().then(()=>{x===M&&(c=!0)}),u=!0,Qi(f,T,i.state.value[n])}const d=s?function(){const{state:T}=t,M=T?T():{};this.$patch(L=>{Kn(L,M)})}:Gh;function w(){o.stop(),f.clear(),h.clear(),i._s.delete(n)}const b=(D,T="")=>{if(Gu in D)return D[va]=T,D;const M=function(){To(i);const L=Array.from(arguments),te=new Set,Z=new Set;function ne(ee){te.add(ee)}function re(ee){Z.add(ee)}Qi(h,{args:L,name:M[va],store:I,after:ne,onError:re});let K;try{K=D.apply(this&&this.$id===n?this:I,L)}catch(ee){throw Qi(Z,ee),ee}return K instanceof Promise?K.then(ee=>(Qi(te,ee),ee)).catch(ee=>(Qi(Z,ee),Promise.reject(ee))):(Qi(te,K),K)};return M[Gu]=!0,M[va]=T,M},S={_p:i,$id:n,$onAction:Vu.bind(null,h),$patch:m,$reset:d,$subscribe(D,T={}){const M=Vu(f,D,T.detached,()=>L()),L=o.run(()=>Vs(()=>i.state.value[n],te=>{(T.flush==="sync"?u:c)&&D({storeId:n,type:Vr.direct,events:p},te)},Kn({},l,T)));return M},$dispose:w},I=ts(S);i._s.set(n,I);const R=(i._a&&i._a.runWithContext||IM)(()=>i._e.run(()=>(o=sf()).run(()=>e({action:b}))));for(const D in R){const T=R[D];if(mt(T)&&!OM(T)||Dn(T))s||(_&&FM(T)&&(mt(T)?T.value=_[D]:Tl(T,_[D])),i.state.value[n][D]=T);else if(typeof T=="function"){const M=b(T,D);R[D]=M,a.actions[D]=T}}return Kn(I,R),Kn(Je(I),R),Object.defineProperty(I,"$state",{get:()=>i.state.value[n],set:D=>{m(T=>{Kn(T,D)})}}),i._p.forEach(D=>{Kn(I,o.run(()=>D({store:I,app:i._a,pinia:i,options:a})))}),_&&s&&t.hydrate&&t.hydrate(I.$state,_),c=!0,u=!0,I}function zM(n,e,t){let i;const r=typeof e=="function";i=r?t:e;function s(o,a){const l=mp();return o=o||(l?Fr(Vh,null):null),o&&To(o),o=Hh,o._s.has(n)||(r?kh(n,e,i,o):BM(n,i,o)),o._s.get(n)}return s.$id=n,s}class HM extends Ii{key;label;visible;disabled;constructor(e,t,i,r){super(),this.key=e,this.label=t,this.visible=i,this.disabled=r}}let VM=0;const rc=zM("actions",()=>{const n=mo([]);return{createAction(e){const t=ts(new HM((VM++).toString(),e.label,!1,e.disabled));return n.value.push(t),t},actions:n}}),ku=6,Hs=.5;function GM(n,e){const t=rc(),i=[];for(let o=0;o<ku;o++)i.push(LM());const r=t.createAction({label:"Look at board",disabled:!1});r.addEventListener("click",()=>{e()});const s=t.createAction({label:"Roll dice",disabled:!1});return s.addEventListener("click",()=>{i.filter(o=>o.hold===!1).forEach(o=>{o.setValue(1+Math.round(Math.random()*(ku-1)))})}),{init(o){i.forEach((a,l)=>{a.init(o,n),a.setValue(l+1)}),i.forEach((a,l)=>{a.mesh.position.x=l%2===1?Hs:-Hs,a.mesh.position.y=0-Hs*2+Math.floor(l/2)*Hs*2})},enter(){s.visible=!0,r.visible=!0},leave(){s.visible=!1,r.visible=!1},holdDice(o){i[o].hold=!i[o].hold},attach(o,a){i.forEach(l=>{l.mesh.position.x+=a.x,l.mesh.position.y+=a.y,l.mesh.position.z+=a.z,o.add(l.mesh)})}}}function kM(n,e){const t=[];return{addState(i,r){return t.push(i),i.init(n),i.attach(e,r),i.scenePosition=r,i},currentState:null,states:t,enter(i){this.currentState&&this.currentState.leave(),this.currentState=i,this.currentState.enter()}}}class WM extends nc{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class XM extends ls{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new P_(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new qM(e)}}class qM{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=YM(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function YM(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const f=$M(u,r,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function $M(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new F_;let a,l,c,u,f,h,p,_;if(s.o){const x=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=x.length;m<d;)switch(x[m++]){case"m":a=x[m++]*e+t,l=x[m++]*e+i,o.moveTo(a,l);break;case"l":a=x[m++]*e+t,l=x[m++]*e+i,o.lineTo(a,l);break;case"q":c=x[m++]*e+t,u=x[m++]*e+i,f=x[m++]*e+t,h=x[m++]*e+i,o.quadraticCurveTo(f,h,c,u);break;case"b":c=x[m++]*e+t,u=x[m++]*e+i,f=x[m++]*e+t,h=x[m++]*e+i,p=x[m++]*e+t,_=x[m++]*e+i,o.bezierCurveTo(f,h,p,_,c,u);break}}return{offsetX:s.ha*e,path:o}}const KM=""+new URL("helvetiker_bold.typeface-D95TWh04.json",import.meta.url).href;function xa(n,e){const t=new XM,i={key:e.key,label:e.label,mesh:new Jt};if(i.mesh.material=new as({color:255}),t.load(KM,r=>{i.mesh.geometry=new WM(e.label,{size:.1,depth:.01,font:r})}),n==="field")return{...i,type:n,includeInScore:!0};if(n==="calculated"){if(!("calculation"in e))throw new Error("invalid setup");return{...i,type:n,calculation:e.calculation,includeInScore:!0}}else if(n==="summary"){if(!("filter"in e))throw new Error("invalid setup");return{...i,type:n,includeInScore:!1,filter:e.filter}}throw new Error("Unknown type")}function ZM({boardWidth:n,boardHeight:e,boardDepth:t}){const i=new Ni(n,e,t),r=new as({color:16777215}),s=new Jt(i,r);return s.castShadow=!0,s.receiveShadow=!0,{items:[],mesh:s,addCalculatedField(o,a,l){this.items.push(xa("calculated",{key:o,label:a,calculation:l}))},addSummaryField(o,a,l){this.items.push(xa("summary",{key:o,label:a,filter:l}))},addField(o,a){this.items.push(xa("field",{key:o,label:a}))}}}const JM={"1s":"1'ere","2s":"2'ere","3s":"3'ere","4s":"4'ere","5s":"5'ere","6s":"6'ere",summary:"Sum",bonus:"Bonus","1pair":"Et par","2pairs":"To par","3ofakind":"Tre ens","4ofakind":"Fire ens",low:"Lav",high:"Høj",house:"Fuldt Hus",chance:"Chance",yatzy:"Yatzy",total:"I alt"},jM=Object.freeze(Object.defineProperty({__proto__:null,default:JM},Symbol.toStringTag,{value:"Module"})),QM={"1s":"Ones","2s":"Twos","3s":"Threes","4s":"Fours","5s":"Fives","6s":"Sixes",summary:"Summary",bonus:"Bonus","1pair":"One pair","2pairs":"Two pairs","3ofakind":"Three of a kind","4ofakind":"Four of a kind",low:"Small straight",high:"Large straight",house:"Full house",chance:"Chance",yatzy:"Yatzy",total:"Total"},ey=Object.freeze(Object.defineProperty({__proto__:null,default:QM},Symbol.toStringTag,{value:"Module"})),ty=Object.freeze(Object.defineProperty({__proto__:null,dk:jM,en:ey},Symbol.toStringTag,{value:"Module"})),Wu=4,Sa=4,ny=.1;function iy(n){const e=ZM({boardWidth:Wu,boardHeight:Sa,boardDepth:ny}),t=rc(),r=ty["en"].default,s=[1,2,3,4,5,6].map(a=>a+"s");e.addField("1s",r["1s"]),e.addField("2s",r["2s"]),e.addField("3s",r["3s"]),e.addField("4s",r["4s"]),e.addField("5s",r["5s"]),e.addField("6s",r["6s"]),e.addSummaryField("sum",r.summary,a=>s.includes(a.key)),e.addCalculatedField("bonus",r.bonus,(a,l)=>l.getValue("sum")>84?50:0),e.addField("1pair",r["1pair"]),e.addField("2pairs",r["2pairs"]),e.addField("3ofakind",r["3ofakind"]),e.addField("4ofakind",r["4ofakind"]),e.addField("low",r.low),e.addField("high",r.high),e.addField("house",r.house),e.addField("chance",r.chance),e.addField("yatzy",r.yatzy),e.addSummaryField("total",r.total,a=>a.includeInScore);const o=t.createAction({label:"Back to dices",disabled:!1});return o.addEventListener("click",()=>{n()}),{init(){},enter(){o.visible=!0},leave(){o.visible=!1},attach(a,l){e.mesh.position.x+=l.x,e.mesh.position.y+=l.y,e.mesh.position.z+=l.z,a.add(e.mesh);const c=e.items.length,u=Sa/(c+1),f=e.mesh.position.x-Wu/2,h=e.mesh.position.y-Sa/2;e.items.forEach((p,_)=>{const x=p.mesh;x.position.x=f+u/2,x.position.y=h+(c-_)*u,x.position.z=e.mesh.position.z+.1,a.add(x)})}}}function Xu(n){return new k(n*5,0,0)}function ry(n,e,t){const i=kM(e,t),r=i.addState(GM(n,()=>i.enter(s)),Xu(0)),s=i.addState(iy(()=>i.enter(r)),Xu(1));return i.enter(r),{ctrl:i}}function sy(n){const{renderer:e,scene:t,animations:i,setController:r}=yM(n),{ctrl:s}=ry(e,i,t);r(s)}const oy={class:"controls"},ay=["onClick"],ly=qd({__name:"App",setup(n){const e=mo(),t=rc();return Lf(()=>{sy(e.value)}),(i,r)=>(wr(),ps(Kt,null,[io("div",oy,[(wr(!0),ps(Kt,null,sp(Ol(t).actions,s=>(wr(),ps(Kt,null,[s.visible?(wr(),ps("button",{class:"action-btn",type:"button",key:s.key,onClick:o=>s.dispatchEvent({type:"click"})},tf(s.label),9,ay)):Gp("",!0)],64))),256))]),io("canvas",{ref_key:"cnvs",ref:e,class:"graphics-canvas"},null,512)],64))}}),cy=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},uy=cy(ly,[["__scopeId","data-v-df19f772"]]),fy=UM(),Wh=Mm(uy);Wh.use(fy);Wh.mount("#app");

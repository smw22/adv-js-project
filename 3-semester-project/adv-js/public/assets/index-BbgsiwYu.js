(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function bl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ae={},kr=[],Lt=()=>{},um=()=>!1,Io=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Rl=n=>n.startsWith("onUpdate:"),$e=Object.assign,Sl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},hm=Object.prototype.hasOwnProperty,Ee=(n,e)=>hm.call(n,e),ie=Array.isArray,Vr=n=>wo(n)==="[object Map]",vd=n=>wo(n)==="[object Set]",ae=n=>typeof n=="function",Ne=n=>typeof n=="string",Ln=n=>typeof n=="symbol",Ce=n=>n!==null&&typeof n=="object",Ed=n=>(Ce(n)||ae(n))&&ae(n.then)&&ae(n.catch),Td=Object.prototype.toString,wo=n=>Td.call(n),dm=n=>wo(n).slice(8,-1),Id=n=>wo(n)==="[object Object]",Cl=n=>Ne(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Cs=bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ao=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},fm=/-(\w)/g,kn=Ao(n=>n.replace(fm,(e,t)=>t?t.toUpperCase():"")),pm=/\B([A-Z])/g,dr=Ao(n=>n.replace(pm,"-$1").toLowerCase()),wd=Ao(n=>n.charAt(0).toUpperCase()+n.slice(1)),ga=Ao(n=>n?`on${wd(n)}`:""),wn=(n,e)=>!Object.is(n,e),Ni=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ad=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},ja=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let bu;const bo=()=>bu||(bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pl(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ne(r)?ym(r):Pl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ne(n)||Ce(n))return n}const gm=/;(?![^(]*\))/g,mm=/:([^]+)/,_m=/\/\*[^]*?\*\//g;function ym(n){const e={};return n.replace(_m,"").split(gm).forEach(t=>{if(t){const r=t.split(mm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Dl(n){let e="";if(Ne(n))e=n;else if(ie(n))for(let t=0;t<n.length;t++){const r=Dl(n[t]);r&&(e+=r+" ")}else if(Ce(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const vm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Em=bl(vm);function bd(n){return!!n||n===""}const Rd=n=>!!(n&&n.__v_isRef===!0),nr=n=>Ne(n)?n:n==null?"":ie(n)||Ce(n)&&(n.toString===Td||!ae(n.toString))?Rd(n)?nr(n.value):JSON.stringify(n,Sd,2):String(n),Sd=(n,e)=>Rd(e)?Sd(n,e.value):Vr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[ma(r,i)+" =>"]=s,t),{})}:vd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ma(t))}:Ln(e)?ma(e):Ce(e)&&!ie(e)&&!Id(e)?String(e):e,ma=(n,e="")=>{var t;return Ln(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Tm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=yt;try{return yt=this,e()}finally{yt=t}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Im(){return yt}let be;const _a=new WeakSet;class Cd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_a.has(this)&&(_a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ru(this),kd(this);const e=be,t=Dt;be=this,Dt=!0;try{return this.fn()}finally{Vd(this),be=e,Dt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ol(e);this.deps=this.depsTail=void 0,Ru(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$a(this)&&this.run()}get dirty(){return $a(this)}}let Pd=0,Ps,Ds;function Dd(n,e=!1){if(n.flags|=8,e){n.next=Ds,Ds=n;return}n.next=Ps,Ps=n}function kl(){Pd++}function Vl(){if(--Pd>0)return;if(Ds){let e=Ds;for(Ds=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ps;){let e=Ps;for(Ps=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function kd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Ol(r),wm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function $a(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Od(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Od(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Us))return;n.globalVersion=Us;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!$a(n)){n.flags&=-3;return}const t=be,r=Dt;be=n,Dt=!0;try{kd(n);const s=n.fn(n._value);(e.version===0||wn(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{be=t,Dt=r,Vd(n),n.flags&=-3}}function Ol(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Ol(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function wm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Dt=!0;const Nd=[];function Fn(){Nd.push(Dt),Dt=!1}function Un(){const n=Nd.pop();Dt=n===void 0?!0:n}function Ru(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=be;be=void 0;try{e()}finally{be=t}}}let Us=0;class Am{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!be||!Dt||be===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==be)t=this.activeLink=new Am(be,this),be.deps?(t.prevDep=be.depsTail,be.depsTail.nextDep=t,be.depsTail=t):be.deps=be.depsTail=t,xd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=be.depsTail,t.nextDep=void 0,be.depsTail.nextDep=t,be.depsTail=t,be.deps===t&&(be.deps=r)}return t}trigger(e){this.version++,Us++,this.notify(e)}notify(e){kl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Vl()}}}function xd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)xd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const qa=new WeakMap,rr=Symbol(""),Ha=Symbol(""),Bs=Symbol("");function nt(n,e,t){if(Dt&&be){let r=qa.get(n);r||qa.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Nl),s.map=r,s.key=t),s.track()}}function Yt(n,e,t,r,s,i){const a=qa.get(n);if(!a){Us++;return}const l=c=>{c&&c.trigger()};if(kl(),e==="clear")a.forEach(l);else{const c=ie(n),h=c&&Cl(t);if(c&&t==="length"){const f=Number(r);a.forEach((p,v)=>{(v==="length"||v===Bs||!Ln(v)&&v>=f)&&l(p)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(Bs)),e){case"add":c?h&&l(a.get("length")):(l(a.get(rr)),Vr(n)&&l(a.get(Ha)));break;case"delete":c||(l(a.get(rr)),Vr(n)&&l(a.get(Ha)));break;case"set":Vr(n)&&l(a.get(rr));break}}Vl()}function wr(n){const e=ve(n);return e===n?e:(nt(e,"iterate",Bs),Rt(n)?e:e.map(rt))}function Ro(n){return nt(n=ve(n),"iterate",Bs),n}const bm={__proto__:null,[Symbol.iterator](){return ya(this,Symbol.iterator,rt)},concat(...n){return wr(this).concat(...n.map(e=>ie(e)?wr(e):e))},entries(){return ya(this,"entries",n=>(n[1]=rt(n[1]),n))},every(n,e){return Qt(this,"every",n,e,void 0,arguments)},filter(n,e){return Qt(this,"filter",n,e,t=>t.map(rt),arguments)},find(n,e){return Qt(this,"find",n,e,rt,arguments)},findIndex(n,e){return Qt(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Qt(this,"findLast",n,e,rt,arguments)},findLastIndex(n,e){return Qt(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Qt(this,"forEach",n,e,void 0,arguments)},includes(...n){return va(this,"includes",n)},indexOf(...n){return va(this,"indexOf",n)},join(n){return wr(this).join(n)},lastIndexOf(...n){return va(this,"lastIndexOf",n)},map(n,e){return Qt(this,"map",n,e,void 0,arguments)},pop(){return ys(this,"pop")},push(...n){return ys(this,"push",n)},reduce(n,...e){return Su(this,"reduce",n,e)},reduceRight(n,...e){return Su(this,"reduceRight",n,e)},shift(){return ys(this,"shift")},some(n,e){return Qt(this,"some",n,e,void 0,arguments)},splice(...n){return ys(this,"splice",n)},toReversed(){return wr(this).toReversed()},toSorted(n){return wr(this).toSorted(n)},toSpliced(...n){return wr(this).toSpliced(...n)},unshift(...n){return ys(this,"unshift",n)},values(){return ya(this,"values",rt)}};function ya(n,e,t){const r=Ro(n),s=r[e]();return r!==n&&!Rt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const Rm=Array.prototype;function Qt(n,e,t,r,s,i){const a=Ro(n),l=a!==n&&!Rt(n),c=a[e];if(c!==Rm[e]){const p=c.apply(n,i);return l?rt(p):p}let h=t;a!==n&&(l?h=function(p,v){return t.call(this,rt(p),v,n)}:t.length>2&&(h=function(p,v){return t.call(this,p,v,n)}));const f=c.call(a,h,r);return l&&s?s(f):f}function Su(n,e,t,r){const s=Ro(n);let i=t;return s!==n&&(Rt(n)?t.length>3&&(i=function(a,l,c){return t.call(this,a,l,c,n)}):i=function(a,l,c){return t.call(this,a,rt(l),c,n)}),s[e](i,...r)}function va(n,e,t){const r=ve(n);nt(r,"iterate",Bs);const s=r[e](...t);return(s===-1||s===!1)&&Fl(t[0])?(t[0]=ve(t[0]),r[e](...t)):s}function ys(n,e,t=[]){Fn(),kl();const r=ve(n)[e].apply(n,t);return Vl(),Un(),r}const Sm=bl("__proto__,__v_isRef,__isVue"),Md=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ln));function Cm(n){Ln(n)||(n=String(n));const e=ve(this);return nt(e,"has",n),e.hasOwnProperty(n)}class Ld{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?Fm:jd:i?Bd:Ud).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ie(e);if(!s){let c;if(a&&(c=bm[t]))return c;if(t==="hasOwnProperty")return Cm}const l=Reflect.get(e,t,Oe(e)?e:r);return(Ln(t)?Md.has(t):Sm(t))||(s||nt(e,"get",t),i)?l:Oe(l)?a&&Cl(t)?l:l.value:Ce(l)?s?$d(l):Ml(l):l}}class Fd extends Ld{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=ar(i);if(!Rt(r)&&!ar(r)&&(i=ve(i),r=ve(r)),!ie(e)&&Oe(i)&&!Oe(r))return c?!1:(i.value=r,!0)}const a=ie(e)&&Cl(t)?Number(t)<e.length:Ee(e,t),l=Reflect.set(e,t,r,Oe(e)?e:s);return e===ve(s)&&(a?wn(r,i)&&Yt(e,"set",t,r):Yt(e,"add",t,r)),l}deleteProperty(e,t){const r=Ee(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Yt(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Ln(t)||!Md.has(t))&&nt(e,"has",t),r}ownKeys(e){return nt(e,"iterate",ie(e)?"length":rr),Reflect.ownKeys(e)}}class Pm extends Ld{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Dm=new Fd,km=new Pm,Vm=new Fd(!0);const za=n=>n,Ri=n=>Reflect.getPrototypeOf(n);function Om(n,e,t){return function(...r){const s=this.__v_raw,i=ve(s),a=Vr(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),f=t?za:e?Wa:rt;return!e&&nt(i,"iterate",c?Ha:rr),{next(){const{value:p,done:v}=h.next();return v?{value:p,done:v}:{value:l?[f(p[0]),f(p[1])]:f(p),done:v}},[Symbol.iterator](){return this}}}}function Si(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Nm(n,e){const t={get(s){const i=this.__v_raw,a=ve(i),l=ve(s);n||(wn(s,l)&&nt(a,"get",s),nt(a,"get",l));const{has:c}=Ri(a),h=e?za:n?Wa:rt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&nt(ve(s),"iterate",rr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=ve(i),l=ve(s);return n||(wn(s,l)&&nt(a,"has",s),nt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=ve(l),h=e?za:n?Wa:rt;return!n&&nt(c,"iterate",rr),l.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return $e(t,n?{add:Si("add"),set:Si("set"),delete:Si("delete"),clear:Si("clear")}:{add(s){!e&&!Rt(s)&&!ar(s)&&(s=ve(s));const i=ve(this);return Ri(i).has.call(i,s)||(i.add(s),Yt(i,"add",s,s)),this},set(s,i){!e&&!Rt(i)&&!ar(i)&&(i=ve(i));const a=ve(this),{has:l,get:c}=Ri(a);let h=l.call(a,s);h||(s=ve(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?wn(i,f)&&Yt(a,"set",s,i):Yt(a,"add",s,i),this},delete(s){const i=ve(this),{has:a,get:l}=Ri(i);let c=a.call(i,s);c||(s=ve(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Yt(i,"delete",s,void 0),h},clear(){const s=ve(this),i=s.size!==0,a=s.clear();return i&&Yt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Om(s,n,e)}),t}function xl(n,e){const t=Nm(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ee(t,s)&&s in r?t:r,s,i)}const xm={get:xl(!1,!1)},Mm={get:xl(!1,!0)},Lm={get:xl(!0,!1)};const Ud=new WeakMap,Bd=new WeakMap,jd=new WeakMap,Fm=new WeakMap;function Um(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bm(n){return n.__v_skip||!Object.isExtensible(n)?0:Um(dm(n))}function Ml(n){return ar(n)?n:Ll(n,!1,Dm,xm,Ud)}function jm(n){return Ll(n,!1,Vm,Mm,Bd)}function $d(n){return Ll(n,!0,km,Lm,jd)}function Ll(n,e,t,r,s){if(!Ce(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const a=Bm(n);if(a===0)return n;const l=new Proxy(n,a===2?r:t);return s.set(n,l),l}function Or(n){return ar(n)?Or(n.__v_raw):!!(n&&n.__v_isReactive)}function ar(n){return!!(n&&n.__v_isReadonly)}function Rt(n){return!!(n&&n.__v_isShallow)}function Fl(n){return n?!!n.__v_raw:!1}function ve(n){const e=n&&n.__v_raw;return e?ve(e):n}function $m(n){return!Ee(n,"__v_skip")&&Object.isExtensible(n)&&Ad(n,"__v_skip",!0),n}const rt=n=>Ce(n)?Ml(n):n,Wa=n=>Ce(n)?$d(n):n;function Oe(n){return n?n.__v_isRef===!0:!1}function Pt(n){return qm(n,!1)}function qm(n,e){return Oe(n)?n:new Hm(n,e)}class Hm{constructor(e,t){this.dep=new Nl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ve(e),this._value=t?e:rt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Rt(e)||ar(e);e=r?e:ve(e),wn(e,t)&&(this._rawValue=e,this._value=r?e:rt(e),this.dep.trigger())}}function ue(n){return Oe(n)?n.value:n}const zm={get:(n,e,t)=>e==="__v_raw"?n:ue(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Oe(s)&&!Oe(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function qd(n){return Or(n)?n:new Proxy(n,zm)}class Wm{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Nl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Us-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Dd(this,!0),!0}get value(){const e=this.dep.track();return Od(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Km(n,e,t=!1){let r,s;return ae(n)?r=n:(r=n.get,s=n.set),new Wm(r,s,t)}const Ci={},Qi=new WeakMap;let Zn;function Gm(n,e=!1,t=Zn){if(t){let r=Qi.get(t);r||Qi.set(t,r=[]),r.push(n)}}function Qm(n,e,t=Ae){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=W=>s?W:Rt(W)||s===!1||s===0?Xt(W,1):Xt(W);let f,p,v,b,D=!1,N=!1;if(Oe(n)?(p=()=>n.value,D=Rt(n)):Or(n)?(p=()=>h(n),D=!0):ie(n)?(N=!0,D=n.some(W=>Or(W)||Rt(W)),p=()=>n.map(W=>{if(Oe(W))return W.value;if(Or(W))return h(W);if(ae(W))return c?c(W,2):W()})):ae(n)?e?p=c?()=>c(n,2):n:p=()=>{if(v){Fn();try{v()}finally{Un()}}const W=Zn;Zn=f;try{return c?c(n,3,[b]):n(b)}finally{Zn=W}}:p=Lt,e&&s){const W=p,fe=s===!0?1/0:s;p=()=>Xt(W(),fe)}const V=Im(),H=()=>{f.stop(),V&&Sl(V.effects,f)};if(i&&e){const W=e;e=(...fe)=>{W(...fe),H()}}let Q=N?new Array(n.length).fill(Ci):Ci;const Y=W=>{if(!(!(f.flags&1)||!f.dirty&&!W))if(e){const fe=f.run();if(s||D||(N?fe.some((ye,w)=>wn(ye,Q[w])):wn(fe,Q))){v&&v();const ye=Zn;Zn=f;try{const w=[fe,Q===Ci?void 0:N&&Q[0]===Ci?[]:Q,b];c?c(e,3,w):e(...w),Q=fe}finally{Zn=ye}}}else f.run()};return l&&l(Y),f=new Cd(p),f.scheduler=a?()=>a(Y,!1):Y,b=W=>Gm(W,!1,f),v=f.onStop=()=>{const W=Qi.get(f);if(W){if(c)c(W,4);else for(const fe of W)fe();Qi.delete(f)}},e?r?Y(!0):Q=f.run():a?a(Y.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function Xt(n,e=1/0,t){if(e<=0||!Ce(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Oe(n))Xt(n.value,e,t);else if(ie(n))for(let r=0;r<n.length;r++)Xt(n[r],e,t);else if(vd(n)||Vr(n))n.forEach(r=>{Xt(r,e,t)});else if(Id(n)){for(const r in n)Xt(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Xt(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zs(n,e,t,r){try{return r?n(...r):n()}catch(s){So(s,e,t)}}function $t(n,e,t,r){if(ae(n)){const s=Zs(n,e,t,r);return s&&Ed(s)&&s.catch(i=>{So(i,e,t)}),s}if(ie(n)){const s=[];for(let i=0;i<n.length;i++)s.push($t(n[i],e,t,r));return s}}function So(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](n,c,h)===!1)return}l=l.parent}if(i){Fn(),Zs(i,null,10,[n,c,h]),Un();return}}Jm(n,t,s,r,a)}function Jm(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const ut=[];let xt=-1;const Nr=[];let mn=null,Ar=0;const Hd=Promise.resolve();let Ji=null;function Ym(n){const e=Ji||Hd;return n?e.then(this?n.bind(this):n):e}function Xm(n){let e=xt+1,t=ut.length;for(;e<t;){const r=e+t>>>1,s=ut[r],i=js(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Ul(n){if(!(n.flags&1)){const e=js(n),t=ut[ut.length-1];!t||!(n.flags&2)&&e>=js(t)?ut.push(n):ut.splice(Xm(e),0,n),n.flags|=1,zd()}}function zd(){Ji||(Ji=Hd.then(Kd))}function Zm(n){ie(n)?Nr.push(...n):mn&&n.id===-1?mn.splice(Ar+1,0,n):n.flags&1||(Nr.push(n),n.flags|=1),zd()}function Cu(n,e,t=xt+1){for(;t<ut.length;t++){const r=ut[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;ut.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Wd(n){if(Nr.length){const e=[...new Set(Nr)].sort((t,r)=>js(t)-js(r));if(Nr.length=0,mn){mn.push(...e);return}for(mn=e,Ar=0;Ar<mn.length;Ar++){const t=mn[Ar];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}mn=null,Ar=0}}const js=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Kd(n){try{for(xt=0;xt<ut.length;xt++){const e=ut[xt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xt<ut.length;xt++){const e=ut[xt];e&&(e.flags&=-2)}xt=-1,ut.length=0,Wd(),Ji=null,(ut.length||Nr.length)&&Kd()}}let bt=null,Gd=null;function Yi(n){const e=bt;return bt=n,Gd=n&&n.type.__scopeId||null,e}function e_(n,e=bt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Lu(-1);const i=Yi(e);let a;try{a=n(...s)}finally{Yi(i),r._d&&Lu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function An(n,e){if(bt===null)return n;const t=ko(bt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ae]=e[s];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&Xt(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Yn(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Fn(),$t(c,t,8,[n.el,l,n,e]),Un())}}const t_=Symbol("_vte"),n_=n=>n.__isTeleport;function Bl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Bl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function r_(n,e){return ae(n)?$e({name:n.name},e,{setup:n}):n}function Qd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ka(n,e,t,r,s=!1){if(ie(n)){n.forEach((D,N)=>Ka(D,e&&(ie(e)?e[N]:e),t,r,s));return}if(ks(r)&&!s)return;const i=r.shapeFlag&4?ko(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,f=l.refs===Ae?l.refs={}:l.refs,p=l.setupState,v=ve(p),b=p===Ae?()=>!1:D=>Ee(v,D);if(h!=null&&h!==c&&(Ne(h)?(f[h]=null,b(h)&&(p[h]=null)):Oe(h)&&(h.value=null)),ae(c))Zs(c,l,12,[a,f]);else{const D=Ne(c),N=Oe(c);if(D||N){const V=()=>{if(n.f){const H=D?b(c)?p[c]:f[c]:c.value;s?ie(H)&&Sl(H,i):ie(H)?H.includes(i)||H.push(i):D?(f[c]=[i],b(c)&&(p[c]=f[c])):(c.value=[i],n.k&&(f[n.k]=c.value))}else D?(f[c]=a,b(c)&&(p[c]=a)):N&&(c.value=a,n.k&&(f[n.k]=a))};a?(V.id=-1,_t(V,t)):V()}}}bo().requestIdleCallback;bo().cancelIdleCallback;const ks=n=>!!n.type.__asyncLoader,Jd=n=>n.type.__isKeepAlive;function s_(n,e){Yd(n,"a",e)}function i_(n,e){Yd(n,"da",e)}function Yd(n,e,t=ht){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Co(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Jd(s.parent.vnode)&&o_(r,e,t,s),s=s.parent}}function o_(n,e,t,r){const s=Co(e,n,r,!0);Zd(()=>{Sl(r[e],s)},t)}function Co(n,e,t=ht,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{Fn();const l=ei(t),c=$t(e,t,n,a);return l(),Un(),c});return r?s.unshift(i):s.push(i),i}}const ln=n=>(e,t=ht)=>{(!qs||n==="sp")&&Co(n,(...r)=>e(...r),t)},a_=ln("bm"),Xd=ln("m"),l_=ln("bu"),c_=ln("u"),u_=ln("bum"),Zd=ln("um"),h_=ln("sp"),d_=ln("rtg"),f_=ln("rtc");function p_(n,e=ht){Co("ec",n,e)}const g_=Symbol.for("v-ndc");function Pu(n,e,t,r){let s;const i=t,a=ie(n);if(a||Ne(n)){const l=a&&Or(n);let c=!1;l&&(c=!Rt(n),n=Ro(n)),s=new Array(n.length);for(let h=0,f=n.length;h<f;h++)s[h]=e(c?rt(n[h]):n[h],h,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Ce(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(n[f],f,c,i)}}else s=[];return s}const Ga=n=>n?If(n)?ko(n):Ga(n.parent):null,Vs=$e(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ga(n.parent),$root:n=>Ga(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>jl(n),$forceUpdate:n=>n.f||(n.f=()=>{Ul(n.update)}),$nextTick:n=>n.n||(n.n=Ym.bind(n.proxy)),$watch:n=>L_.bind(n)}),Ea=(n,e)=>n!==Ae&&!n.__isScriptSetup&&Ee(n,e),m_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;let h;if(e[0]!=="$"){const b=a[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Ea(r,e))return a[e]=1,r[e];if(s!==Ae&&Ee(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&Ee(h,e))return a[e]=3,i[e];if(t!==Ae&&Ee(t,e))return a[e]=4,t[e];Qa&&(a[e]=0)}}const f=Vs[e];let p,v;if(f)return e==="$attrs"&&nt(n.attrs,"get",""),f(n);if((p=l.__cssModules)&&(p=p[e]))return p;if(t!==Ae&&Ee(t,e))return a[e]=4,t[e];if(v=c.config.globalProperties,Ee(v,e))return v[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Ea(s,e)?(s[e]=t,!0):r!==Ae&&Ee(r,e)?(r[e]=t,!0):Ee(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!t[a]||n!==Ae&&Ee(n,a)||Ea(e,a)||(l=i[0])&&Ee(l,a)||Ee(r,a)||Ee(Vs,a)||Ee(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ee(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Du(n){return ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Qa=!0;function __(n){const e=jl(n),t=n.proxy,r=n.ctx;Qa=!1,e.beforeCreate&&ku(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:v,beforeUpdate:b,updated:D,activated:N,deactivated:V,beforeDestroy:H,beforeUnmount:Q,destroyed:Y,unmounted:W,render:fe,renderTracked:ye,renderTriggered:w,errorCaptured:m,serverPrefetch:E,expose:I,inheritAttrs:A,components:S,directives:y,filters:gt}=e;if(h&&y_(h,r,null),a)for(const Ie in a){const pe=a[Ie];ae(pe)&&(r[Ie]=pe.bind(t))}if(s){const Ie=s.call(t,t);Ce(Ie)&&(n.data=Ml(Ie))}if(Qa=!0,i)for(const Ie in i){const pe=i[Ie],St=ae(pe)?pe.bind(t,t):ae(pe.get)?pe.get.bind(t,t):Lt,qn=!ae(pe)&&ae(pe.set)?pe.set.bind(t):Lt,zt=iy({get:St,set:qn});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>zt.value,set:xe=>zt.value=xe})}if(l)for(const Ie in l)ef(l[Ie],r,t,Ie);if(c){const Ie=ae(c)?c.call(t):c;Reflect.ownKeys(Ie).forEach(pe=>{A_(pe,Ie[pe])})}f&&ku(f,n,"c");function He(Ie,pe){ie(pe)?pe.forEach(St=>Ie(St.bind(t))):pe&&Ie(pe.bind(t))}if(He(a_,p),He(Xd,v),He(l_,b),He(c_,D),He(s_,N),He(i_,V),He(p_,m),He(f_,ye),He(d_,w),He(u_,Q),He(Zd,W),He(h_,E),ie(I))if(I.length){const Ie=n.exposed||(n.exposed={});I.forEach(pe=>{Object.defineProperty(Ie,pe,{get:()=>t[pe],set:St=>t[pe]=St})})}else n.exposed||(n.exposed={});fe&&n.render===Lt&&(n.render=fe),A!=null&&(n.inheritAttrs=A),S&&(n.components=S),y&&(n.directives=y),E&&Qd(n)}function y_(n,e,t=Lt){ie(n)&&(n=Ja(n));for(const r in n){const s=n[r];let i;Ce(s)?"default"in s?i=xi(s.from||r,s.default,!0):i=xi(s.from||r):i=xi(s),Oe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ku(n,e,t){$t(ie(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function ef(n,e,t,r){let s=r.includes(".")?gf(t,r):()=>t[r];if(Ne(n)){const i=e[n];ae(i)&&Ia(s,i)}else if(ae(n))Ia(s,n.bind(t));else if(Ce(n))if(ie(n))n.forEach(i=>ef(i,e,t,r));else{const i=ae(n.handler)?n.handler.bind(t):e[n.handler];ae(i)&&Ia(s,i,n)}}function jl(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>Xi(c,h,a,!0)),Xi(c,e,a)),Ce(e)&&i.set(e,c),c}function Xi(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Xi(n,i,t,!0),s&&s.forEach(a=>Xi(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=v_[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const v_={data:Vu,props:Ou,emits:Ou,methods:Ts,computed:Ts,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:Ts,directives:Ts,watch:T_,provide:Vu,inject:E_};function Vu(n,e){return e?n?function(){return $e(ae(n)?n.call(this,this):n,ae(e)?e.call(this,this):e)}:e:n}function E_(n,e){return Ts(Ja(n),Ja(e))}function Ja(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function lt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ts(n,e){return n?$e(Object.create(null),n,e):e}function Ou(n,e){return n?ie(n)&&ie(e)?[...new Set([...n,...e])]:$e(Object.create(null),Du(n),Du(e??{})):e}function T_(n,e){if(!n)return e;if(!e)return n;const t=$e(Object.create(null),n);for(const r in e)t[r]=lt(n[r],e[r]);return t}function tf(){return{app:null,config:{isNativeTag:um,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let I_=0;function w_(n,e){return function(r,s=null){ae(r)||(r=$e({},r)),s!=null&&!Ce(s)&&(s=null);const i=tf(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:I_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:oy,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&ae(f.install)?(a.add(f),f.install(h,...p)):ae(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,v){if(!c){const b=h._ceVNode||Tt(r,s);return b.appContext=i,v===!0?v="svg":v===!1&&(v=void 0),p&&e?e(b,f):n(b,f,v),c=!0,h._container=f,f.__vue_app__=h,ko(b.component)}},onUnmount(f){l.push(f)},unmount(){c&&($t(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=xr;xr=h;try{return f()}finally{xr=p}}};return h}}let xr=null;function A_(n,e){if(ht){let t=ht.provides;const r=ht.parent&&ht.parent.provides;r===t&&(t=ht.provides=Object.create(r)),t[n]=e}}function xi(n,e,t=!1){const r=ht||bt;if(r||xr){const s=xr?xr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ae(e)?e.call(r&&r.proxy):e}}const nf={},rf=()=>Object.create(nf),sf=n=>Object.getPrototypeOf(n)===nf;function b_(n,e,t,r=!1){const s={},i=rf();n.propsDefaults=Object.create(null),of(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:jm(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function R_(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=ve(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let v=f[p];if(Po(n.emitsOptions,v))continue;const b=e[v];if(c)if(Ee(i,v))b!==i[v]&&(i[v]=b,h=!0);else{const D=kn(v);s[D]=Ya(c,l,D,b,n,!1)}else b!==i[v]&&(i[v]=b,h=!0)}}}else{of(n,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Ee(e,p)&&((f=dr(p))===p||!Ee(e,f)))&&(c?t&&(t[p]!==void 0||t[f]!==void 0)&&(s[p]=Ya(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ee(e,p))&&(delete i[p],h=!0)}h&&Yt(n.attrs,"set","")}function of(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(Cs(c))continue;const h=e[c];let f;s&&Ee(s,f=kn(c))?!i||!i.includes(f)?t[f]=h:(l||(l={}))[f]=h:Po(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=ve(t),h=l||Ae;for(let f=0;f<i.length;f++){const p=i[f];t[p]=Ya(s,c,p,h[p],n,!Ee(h,p))}}return a}function Ya(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=Ee(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ae(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=ei(s);r=h[t]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===dr(t))&&(r=!0))}return r}const S_=new WeakMap;function af(n,e,t=!1){const r=t?S_:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!ae(n)){const f=p=>{c=!0;const[v,b]=af(p,e,!0);$e(a,v),b&&l.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!c)return Ce(n)&&r.set(n,kr),kr;if(ie(i))for(let f=0;f<i.length;f++){const p=kn(i[f]);Nu(p)&&(a[p]=Ae)}else if(i)for(const f in i){const p=kn(f);if(Nu(p)){const v=i[f],b=a[p]=ie(v)||ae(v)?{type:v}:$e({},v),D=b.type;let N=!1,V=!0;if(ie(D))for(let H=0;H<D.length;++H){const Q=D[H],Y=ae(Q)&&Q.name;if(Y==="Boolean"){N=!0;break}else Y==="String"&&(V=!1)}else N=ae(D)&&D.name==="Boolean";b[0]=N,b[1]=V,(N||Ee(b,"default"))&&l.push(p)}}const h=[a,l];return Ce(n)&&r.set(n,h),h}function Nu(n){return n[0]!=="$"&&!Cs(n)}const lf=n=>n[0]==="_"||n==="$stable",$l=n=>ie(n)?n.map(Mt):[Mt(n)],C_=(n,e,t)=>{if(e._n)return e;const r=e_((...s)=>$l(e(...s)),t);return r._c=!1,r},cf=(n,e,t)=>{const r=n._ctx;for(const s in n){if(lf(s))continue;const i=n[s];if(ae(i))e[s]=C_(s,i,r);else if(i!=null){const a=$l(i);e[s]=()=>a}}},uf=(n,e)=>{const t=$l(e);n.slots.default=()=>t},hf=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},P_=(n,e,t)=>{const r=n.slots=rf();if(n.vnode.shapeFlag&32){const s=e._;s?(hf(r,e,t),t&&Ad(r,"_",s,!0)):cf(e,r)}else e&&uf(n,e)},D_=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ae;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:hf(s,e,t):(i=!e.$stable,cf(e,s)),a=e}else e&&(uf(n,e),a={default:1});if(i)for(const l in s)!lf(l)&&a[l]==null&&delete s[l]},_t=H_;function k_(n){return V_(n)}function V_(n,e){const t=bo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:v,setScopeId:b=Lt,insertStaticContent:D}=n,N=(_,T,P,L=null,O=null,M=null,$=void 0,B=null,U=!!T.dynamicChildren)=>{if(_===T)return;_&&!vs(_,T)&&(L=Wt(_),xe(_,O,M,!0),_=null),T.patchFlag===-2&&(U=!1,T.dynamicChildren=null);const{type:F,ref:X,shapeFlag:q}=T;switch(F){case Do:V(_,T,P,L);break;case lr:H(_,T,P,L);break;case Mi:_==null&&Q(T,P,L,$);break;case At:S(_,T,P,L,O,M,$,B,U);break;default:q&1?fe(_,T,P,L,O,M,$,B,U):q&6?y(_,T,P,L,O,M,$,B,U):(q&64||q&128)&&F.process(_,T,P,L,O,M,$,B,U,Ot)}X!=null&&O&&Ka(X,_&&_.ref,M,T||_,!T)},V=(_,T,P,L)=>{if(_==null)r(T.el=l(T.children),P,L);else{const O=T.el=_.el;T.children!==_.children&&h(O,T.children)}},H=(_,T,P,L)=>{_==null?r(T.el=c(T.children||""),P,L):T.el=_.el},Q=(_,T,P,L)=>{[_.el,_.anchor]=D(_.children,T,P,L,_.el,_.anchor)},Y=({el:_,anchor:T},P,L)=>{let O;for(;_&&_!==T;)O=v(_),r(_,P,L),_=O;r(T,P,L)},W=({el:_,anchor:T})=>{let P;for(;_&&_!==T;)P=v(_),s(_),_=P;s(T)},fe=(_,T,P,L,O,M,$,B,U)=>{T.type==="svg"?$="svg":T.type==="math"&&($="mathml"),_==null?ye(T,P,L,O,M,$,B,U):E(_,T,O,M,$,B,U)},ye=(_,T,P,L,O,M,$,B)=>{let U,F;const{props:X,shapeFlag:q,transition:G,dirs:K}=_;if(U=_.el=a(_.type,M,X&&X.is,X),q&8?f(U,_.children):q&16&&m(_.children,U,null,L,O,Ta(_,M),$,B),K&&Yn(_,null,L,"created"),w(U,_,_.scopeId,$,L),X){for(const _e in X)_e!=="value"&&!Cs(_e)&&i(U,_e,null,X[_e],M,L);"value"in X&&i(U,"value",null,X.value,M),(F=X.onVnodeBeforeMount)&&Nt(F,L,_)}K&&Yn(_,null,L,"beforeMount");const ee=O_(O,G);ee&&G.beforeEnter(U),r(U,T,P),((F=X&&X.onVnodeMounted)||ee||K)&&_t(()=>{F&&Nt(F,L,_),ee&&G.enter(U),K&&Yn(_,null,L,"mounted")},O)},w=(_,T,P,L,O)=>{if(P&&b(_,P),L)for(let M=0;M<L.length;M++)b(_,L[M]);if(O){let M=O.subTree;if(T===M||_f(M.type)&&(M.ssContent===T||M.ssFallback===T)){const $=O.vnode;w(_,$,$.scopeId,$.slotScopeIds,O.parent)}}},m=(_,T,P,L,O,M,$,B,U=0)=>{for(let F=U;F<_.length;F++){const X=_[F]=B?_n(_[F]):Mt(_[F]);N(null,X,T,P,L,O,M,$,B)}},E=(_,T,P,L,O,M,$)=>{const B=T.el=_.el;let{patchFlag:U,dynamicChildren:F,dirs:X}=T;U|=_.patchFlag&16;const q=_.props||Ae,G=T.props||Ae;let K;if(P&&Xn(P,!1),(K=G.onVnodeBeforeUpdate)&&Nt(K,P,T,_),X&&Yn(T,_,P,"beforeUpdate"),P&&Xn(P,!0),(q.innerHTML&&G.innerHTML==null||q.textContent&&G.textContent==null)&&f(B,""),F?I(_.dynamicChildren,F,B,P,L,Ta(T,O),M):$||pe(_,T,B,null,P,L,Ta(T,O),M,!1),U>0){if(U&16)A(B,q,G,P,O);else if(U&2&&q.class!==G.class&&i(B,"class",null,G.class,O),U&4&&i(B,"style",q.style,G.style,O),U&8){const ee=T.dynamicProps;for(let _e=0;_e<ee.length;_e++){const ge=ee[_e],Je=q[ge],Ue=G[ge];(Ue!==Je||ge==="value")&&i(B,ge,Je,Ue,O,P)}}U&1&&_.children!==T.children&&f(B,T.children)}else!$&&F==null&&A(B,q,G,P,O);((K=G.onVnodeUpdated)||X)&&_t(()=>{K&&Nt(K,P,T,_),X&&Yn(T,_,P,"updated")},L)},I=(_,T,P,L,O,M,$)=>{for(let B=0;B<T.length;B++){const U=_[B],F=T[B],X=U.el&&(U.type===At||!vs(U,F)||U.shapeFlag&70)?p(U.el):P;N(U,F,X,null,L,O,M,$,!0)}},A=(_,T,P,L,O)=>{if(T!==P){if(T!==Ae)for(const M in T)!Cs(M)&&!(M in P)&&i(_,M,T[M],null,O,L);for(const M in P){if(Cs(M))continue;const $=P[M],B=T[M];$!==B&&M!=="value"&&i(_,M,B,$,O,L)}"value"in P&&i(_,"value",T.value,P.value,O)}},S=(_,T,P,L,O,M,$,B,U)=>{const F=T.el=_?_.el:l(""),X=T.anchor=_?_.anchor:l("");let{patchFlag:q,dynamicChildren:G,slotScopeIds:K}=T;K&&(B=B?B.concat(K):K),_==null?(r(F,P,L),r(X,P,L),m(T.children||[],P,X,O,M,$,B,U)):q>0&&q&64&&G&&_.dynamicChildren?(I(_.dynamicChildren,G,P,O,M,$,B),(T.key!=null||O&&T===O.subTree)&&df(_,T,!0)):pe(_,T,P,X,O,M,$,B,U)},y=(_,T,P,L,O,M,$,B,U)=>{T.slotScopeIds=B,_==null?T.shapeFlag&512?O.ctx.activate(T,P,L,$,U):gt(T,P,L,O,M,$,U):un(_,T,U)},gt=(_,T,P,L,O,M,$)=>{const B=_.component=Z_(_,L,O);if(Jd(_)&&(B.ctx.renderer=Ot),ey(B,!1,$),B.asyncDep){if(O&&O.registerDep(B,He,$),!_.el){const U=B.subTree=Tt(lr);H(null,U,T,P)}}else He(B,_,T,P,O,M,$)},un=(_,T,P)=>{const L=T.component=_.component;if($_(_,T,P))if(L.asyncDep&&!L.asyncResolved){Ie(L,T,P);return}else L.next=T,L.update();else T.el=_.el,L.vnode=T},He=(_,T,P,L,O,M,$)=>{const B=()=>{if(_.isMounted){let{next:q,bu:G,u:K,parent:ee,vnode:_e}=_;{const Ye=ff(_);if(Ye){q&&(q.el=_e.el,Ie(_,q,$)),Ye.asyncDep.then(()=>{_.isUnmounted||B()});return}}let ge=q,Je;Xn(_,!1),q?(q.el=_e.el,Ie(_,q,$)):q=_e,G&&Ni(G),(Je=q.props&&q.props.onVnodeBeforeUpdate)&&Nt(Je,ee,q,_e),Xn(_,!0);const Ue=wa(_),ze=_.subTree;_.subTree=Ue,N(ze,Ue,p(ze.el),Wt(ze),_,O,M),q.el=Ue.el,ge===null&&q_(_,Ue.el),K&&_t(K,O),(Je=q.props&&q.props.onVnodeUpdated)&&_t(()=>Nt(Je,ee,q,_e),O)}else{let q;const{el:G,props:K}=T,{bm:ee,m:_e,parent:ge,root:Je,type:Ue}=_,ze=ks(T);if(Xn(_,!1),ee&&Ni(ee),!ze&&(q=K&&K.onVnodeBeforeMount)&&Nt(q,ge,T),Xn(_,!0),G&&mr){const Ye=()=>{_.subTree=wa(_),mr(G,_.subTree,_,O,null)};ze&&Ue.__asyncHydrate?Ue.__asyncHydrate(G,_,Ye):Ye()}else{Je.ce&&Je.ce._injectChildStyle(Ue);const Ye=_.subTree=wa(_);N(null,Ye,P,L,_,O,M),T.el=Ye.el}if(_e&&_t(_e,O),!ze&&(q=K&&K.onVnodeMounted)){const Ye=T;_t(()=>Nt(q,ge,Ye),O)}(T.shapeFlag&256||ge&&ks(ge.vnode)&&ge.vnode.shapeFlag&256)&&_.a&&_t(_.a,O),_.isMounted=!0,T=P=L=null}};_.scope.on();const U=_.effect=new Cd(B);_.scope.off();const F=_.update=U.run.bind(U),X=_.job=U.runIfDirty.bind(U);X.i=_,X.id=_.uid,U.scheduler=()=>Ul(X),Xn(_,!0),F()},Ie=(_,T,P)=>{T.component=_;const L=_.vnode.props;_.vnode=T,_.next=null,R_(_,T.props,L,P),D_(_,T.children,P),Fn(),Cu(_),Un()},pe=(_,T,P,L,O,M,$,B,U=!1)=>{const F=_&&_.children,X=_?_.shapeFlag:0,q=T.children,{patchFlag:G,shapeFlag:K}=T;if(G>0){if(G&128){qn(F,q,P,L,O,M,$,B,U);return}else if(G&256){St(F,q,P,L,O,M,$,B,U);return}}K&8?(X&16&&zn(F,O,M),q!==F&&f(P,q)):X&16?K&16?qn(F,q,P,L,O,M,$,B,U):zn(F,O,M,!0):(X&8&&f(P,""),K&16&&m(q,P,L,O,M,$,B,U))},St=(_,T,P,L,O,M,$,B,U)=>{_=_||kr,T=T||kr;const F=_.length,X=T.length,q=Math.min(F,X);let G;for(G=0;G<q;G++){const K=T[G]=U?_n(T[G]):Mt(T[G]);N(_[G],K,P,null,O,M,$,B,U)}F>X?zn(_,O,M,!0,!1,q):m(T,P,L,O,M,$,B,U,q)},qn=(_,T,P,L,O,M,$,B,U)=>{let F=0;const X=T.length;let q=_.length-1,G=X-1;for(;F<=q&&F<=G;){const K=_[F],ee=T[F]=U?_n(T[F]):Mt(T[F]);if(vs(K,ee))N(K,ee,P,null,O,M,$,B,U);else break;F++}for(;F<=q&&F<=G;){const K=_[q],ee=T[G]=U?_n(T[G]):Mt(T[G]);if(vs(K,ee))N(K,ee,P,null,O,M,$,B,U);else break;q--,G--}if(F>q){if(F<=G){const K=G+1,ee=K<X?T[K].el:L;for(;F<=G;)N(null,T[F]=U?_n(T[F]):Mt(T[F]),P,ee,O,M,$,B,U),F++}}else if(F>G)for(;F<=q;)xe(_[F],O,M,!0),F++;else{const K=F,ee=F,_e=new Map;for(F=ee;F<=G;F++){const ot=T[F]=U?_n(T[F]):Mt(T[F]);ot.key!=null&&_e.set(ot.key,F)}let ge,Je=0;const Ue=G-ee+1;let ze=!1,Ye=0;const hn=new Array(Ue);for(F=0;F<Ue;F++)hn[F]=0;for(F=K;F<=q;F++){const ot=_[F];if(Je>=Ue){xe(ot,O,M,!0);continue}let wt;if(ot.key!=null)wt=_e.get(ot.key);else for(ge=ee;ge<=G;ge++)if(hn[ge-ee]===0&&vs(ot,T[ge])){wt=ge;break}wt===void 0?xe(ot,O,M,!0):(hn[wt-ee]=F+1,wt>=Ye?Ye=wt:ze=!0,N(ot,T[wt],P,null,O,M,$,B,U),Je++)}const _r=ze?N_(hn):kr;for(ge=_r.length-1,F=Ue-1;F>=0;F--){const ot=ee+F,wt=T[ot],yr=ot+1<X?T[ot+1].el:L;hn[F]===0?N(null,wt,P,yr,O,M,$,B,U):ze&&(ge<0||F!==_r[ge]?zt(wt,P,yr,2):ge--)}}},zt=(_,T,P,L,O=null)=>{const{el:M,type:$,transition:B,children:U,shapeFlag:F}=_;if(F&6){zt(_.component.subTree,T,P,L);return}if(F&128){_.suspense.move(T,P,L);return}if(F&64){$.move(_,T,P,Ot);return}if($===At){r(M,T,P);for(let q=0;q<U.length;q++)zt(U[q],T,P,L);r(_.anchor,T,P);return}if($===Mi){Y(_,T,P);return}if(L!==2&&F&1&&B)if(L===0)B.beforeEnter(M),r(M,T,P),_t(()=>B.enter(M),O);else{const{leave:q,delayLeave:G,afterLeave:K}=B,ee=()=>r(M,T,P),_e=()=>{q(M,()=>{ee(),K&&K()})};G?G(M,ee,_e):_e()}else r(M,T,P)},xe=(_,T,P,L=!1,O=!1)=>{const{type:M,props:$,ref:B,children:U,dynamicChildren:F,shapeFlag:X,patchFlag:q,dirs:G,cacheIndex:K}=_;if(q===-2&&(O=!1),B!=null&&Ka(B,null,P,_,!0),K!=null&&(T.renderCache[K]=void 0),X&256){T.ctx.deactivate(_);return}const ee=X&1&&G,_e=!ks(_);let ge;if(_e&&(ge=$&&$.onVnodeBeforeUnmount)&&Nt(ge,T,_),X&6)Hn(_.component,P,L);else{if(X&128){_.suspense.unmount(P,L);return}ee&&Yn(_,null,T,"beforeUnmount"),X&64?_.type.remove(_,T,P,Ot,L):F&&!F.hasOnce&&(M!==At||q>0&&q&64)?zn(F,T,P,!1,!0):(M===At&&q&384||!O&&X&16)&&zn(U,T,P),L&&Me(_)}(_e&&(ge=$&&$.onVnodeUnmounted)||ee)&&_t(()=>{ge&&Nt(ge,T,_),ee&&Yn(_,null,T,"unmounted")},P)},Me=_=>{const{type:T,el:P,anchor:L,transition:O}=_;if(T===At){ea(P,L);return}if(T===Mi){W(_);return}const M=()=>{s(P),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(_.shapeFlag&1&&O&&!O.persisted){const{leave:$,delayLeave:B}=O,U=()=>$(P,M);B?B(_.el,M,U):U()}else M()},ea=(_,T)=>{let P;for(;_!==T;)P=v(_),s(_),_=P;s(T)},Hn=(_,T,P)=>{const{bum:L,scope:O,job:M,subTree:$,um:B,m:U,a:F}=_;xu(U),xu(F),L&&Ni(L),O.stop(),M&&(M.flags|=8,xe($,_,T,P)),B&&_t(B,T),_t(()=>{_.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},zn=(_,T,P,L=!1,O=!1,M=0)=>{for(let $=M;$<_.length;$++)xe(_[$],T,P,L,O)},Wt=_=>{if(_.shapeFlag&6)return Wt(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const T=v(_.anchor||_.el),P=T&&T[t_];return P?v(P):T};let is=!1;const ui=(_,T,P)=>{_==null?T._vnode&&xe(T._vnode,null,null,!0):N(T._vnode||null,_,T,null,null,null,P),T._vnode=_,is||(is=!0,Cu(),Wd(),is=!1)},Ot={p:N,um:xe,m:zt,r:Me,mt:gt,mc:m,pc:pe,pbc:I,n:Wt,o:n};let Wn,mr;return{render:ui,hydrate:Wn,createApp:w_(ui,Wn)}}function Ta({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Xn({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function O_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function df(n,e,t=!1){const r=n.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=_n(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&df(a,l)),l.type===Do&&(l.el=a.el)}}function N_(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function ff(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ff(e)}function xu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const x_=Symbol.for("v-scx"),M_=()=>xi(x_);function Ia(n,e,t){return pf(n,e,t)}function pf(n,e,t=Ae){const{immediate:r,deep:s,flush:i,once:a}=t,l=$e({},t),c=e&&r||!e&&i!=="post";let h;if(qs){if(i==="sync"){const b=M_();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=Lt,b.resume=Lt,b.pause=Lt,b}}const f=ht;l.call=(b,D,N)=>$t(b,f,D,N);let p=!1;i==="post"?l.scheduler=b=>{_t(b,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(b,D)=>{D?b():Ul(b)}),l.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,f&&(b.id=f.uid,b.i=f))};const v=Qm(n,e,l);return qs&&(h?h.push(v):c&&v()),v}function L_(n,e,t){const r=this.proxy,s=Ne(n)?n.includes(".")?gf(r,n):()=>r[n]:n.bind(r,r);let i;ae(e)?i=e:(i=e.handler,t=e);const a=ei(this),l=pf(s,i.bind(r),t);return a(),l}function gf(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const F_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${kn(e)}Modifiers`]||n[`${dr(e)}Modifiers`];function U_(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ae;let s=t;const i=e.startsWith("update:"),a=i&&F_(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>Ne(f)?f.trim():f)),a.number&&(s=t.map(ja)));let l,c=r[l=ga(e)]||r[l=ga(kn(e))];!c&&i&&(c=r[l=ga(dr(e))]),c&&$t(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,$t(h,n,6,s)}}function mf(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!ae(n)){const c=h=>{const f=mf(h,e,!0);f&&(l=!0,$e(a,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Ce(n)&&r.set(n,null),null):(ie(i)?i.forEach(c=>a[c]=null):$e(a,i),Ce(n)&&r.set(n,a),a)}function Po(n,e){return!n||!Io(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(n,e[0].toLowerCase()+e.slice(1))||Ee(n,dr(e))||Ee(n,e))}function wa(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:p,data:v,setupState:b,ctx:D,inheritAttrs:N}=n,V=Yi(n);let H,Q;try{if(t.shapeFlag&4){const W=s||r,fe=W;H=Mt(h.call(fe,W,f,p,b,v,D)),Q=l}else{const W=e;H=Mt(W.length>1?W(p,{attrs:l,slots:a,emit:c}):W(p,null)),Q=e.props?l:B_(l)}}catch(W){Os.length=0,So(W,n,1),H=Tt(lr)}let Y=H;if(Q&&N!==!1){const W=Object.keys(Q),{shapeFlag:fe}=Y;W.length&&fe&7&&(i&&W.some(Rl)&&(Q=j_(Q,i)),Y=Br(Y,Q,!1,!0))}return t.dirs&&(Y=Br(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(t.dirs):t.dirs),t.transition&&Bl(Y,t.transition),H=Y,Yi(V),H}const B_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Io(t))&&((e||(e={}))[t]=n[t]);return e},j_=(n,e)=>{const t={};for(const r in n)(!Rl(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function $_(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Mu(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const v=f[p];if(a[v]!==r[v]&&!Po(h,v))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Mu(r,a,h):!0:!!a;return!1}function Mu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Po(t,i))return!0}return!1}function q_({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const _f=n=>n.__isSuspense;function H_(n,e){e&&e.pendingBranch?ie(n)?e.effects.push(...n):e.effects.push(n):Zm(n)}const At=Symbol.for("v-fgt"),Do=Symbol.for("v-txt"),lr=Symbol.for("v-cmt"),Mi=Symbol.for("v-stc"),Os=[];let vt=null;function ct(n=!1){Os.push(vt=n?null:[])}function z_(){Os.pop(),vt=Os[Os.length-1]||null}let $s=1;function Lu(n){$s+=n,n<0&&vt&&(vt.hasOnce=!0)}function yf(n){return n.dynamicChildren=$s>0?vt||kr:null,z_(),$s>0&&vt&&vt.push(n),n}function dt(n,e,t,r,s,i){return yf(te(n,e,t,r,s,i,!0))}function W_(n,e,t,r,s){return yf(Tt(n,e,t,r,s,!0))}function vf(n){return n?n.__v_isVNode===!0:!1}function vs(n,e){return n.type===e.type&&n.key===e.key}const Ef=({key:n})=>n??null,Li=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ne(n)||Oe(n)||ae(n)?{i:bt,r:n,k:e,f:!!t}:n:null);function te(n,e=null,t=null,r=0,s=null,i=n===At?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ef(e),ref:e&&Li(e),scopeId:Gd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return l?(ql(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Ne(t)?8:16),$s>0&&!a&&vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&vt.push(c),c}const Tt=K_;function K_(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===g_)&&(n=lr),vf(n)){const l=Br(n,e,!0);return t&&ql(l,t),$s>0&&!i&&vt&&(l.shapeFlag&6?vt[vt.indexOf(n)]=l:vt.push(l)),l.patchFlag=-2,l}if(sy(n)&&(n=n.__vccOpts),e){e=G_(e);let{class:l,style:c}=e;l&&!Ne(l)&&(e.class=Dl(l)),Ce(c)&&(Fl(c)&&!ie(c)&&(c=$e({},c)),e.style=Pl(c))}const a=Ne(n)?1:_f(n)?128:n_(n)?64:Ce(n)?4:ae(n)?2:0;return te(n,e,t,r,s,a,i,!0)}function G_(n){return n?Fl(n)||sf(n)?$e({},n):n:null}function Br(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?J_(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Ef(h),ref:e&&e.ref?t&&i?ie(i)?i.concat(Li(e)):[i,Li(e)]:Li(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==At?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Br(n.ssContent),ssFallback:n.ssFallback&&Br(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&Bl(f,c.clone(f)),f}function Tf(n=" ",e=0){return Tt(Do,null,n,e)}function Q_(n,e){const t=Tt(Mi,null,n);return t.staticCount=e,t}function Zi(n="",e=!1){return e?(ct(),W_(lr,null,n)):Tt(lr,null,n)}function Mt(n){return n==null||typeof n=="boolean"?Tt(lr):ie(n)?Tt(At,null,n.slice()):vf(n)?_n(n):Tt(Do,null,String(n))}function _n(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Br(n)}function ql(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ie(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ql(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!sf(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:bt},t=32):(e=String(e),r&64?(t=16,e=[Tf(e)]):t=8);n.children=e,n.shapeFlag|=t}function J_(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Dl([e.class,r.class]));else if(s==="style")e.style=Pl([e.style,r.style]);else if(Io(s)){const i=e[s],a=r[s];a&&i!==a&&!(ie(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Nt(n,e,t,r=null){$t(n,e,7,[t,r])}const Y_=tf();let X_=0;function Z_(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Y_,i={uid:X_++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:af(r,s),emitsOptions:mf(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=U_.bind(null,i),n.ce&&n.ce(i),i}let ht=null,eo,Xa;{const n=bo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};eo=e("__VUE_INSTANCE_SETTERS__",t=>ht=t),Xa=e("__VUE_SSR_SETTERS__",t=>qs=t)}const ei=n=>{const e=ht;return eo(n),n.scope.on(),()=>{n.scope.off(),eo(e)}},Fu=()=>{ht&&ht.scope.off(),eo(null)};function If(n){return n.vnode.shapeFlag&4}let qs=!1;function ey(n,e=!1,t=!1){e&&Xa(e);const{props:r,children:s}=n.vnode,i=If(n);b_(n,r,i,e),P_(n,s,t);const a=i?ty(n,e):void 0;return e&&Xa(!1),a}function ty(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,m_);const{setup:r}=t;if(r){Fn();const s=n.setupContext=r.length>1?ry(n):null,i=ei(n),a=Zs(r,n,0,[n.props,s]),l=Ed(a);if(Un(),i(),(l||n.sp)&&!ks(n)&&Qd(n),l){if(a.then(Fu,Fu),e)return a.then(c=>{Uu(n,c,e)}).catch(c=>{So(c,n,0)});n.asyncDep=a}else Uu(n,a,e)}else wf(n,e)}function Uu(n,e,t){ae(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ce(e)&&(n.setupState=qd(e)),wf(n,t)}let Bu;function wf(n,e,t){const r=n.type;if(!n.render){if(!e&&Bu&&!r.render){const s=r.template||jl(n).template;if(s){const{isCustomElement:i,compilerOptions:a}=n.appContext.config,{delimiters:l,compilerOptions:c}=r,h=$e($e({isCustomElement:i,delimiters:l},a),c);r.render=Bu(s,h)}}n.render=r.render||Lt}{const s=ei(n);Fn();try{__(n)}finally{Un(),s()}}}const ny={get(n,e){return nt(n,"get",""),n[e]}};function ry(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,ny),slots:n.slots,emit:n.emit,expose:e}}function ko(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(qd($m(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Vs)return Vs[t](n)},has(e,t){return t in e||t in Vs}})):n.proxy}function sy(n){return ae(n)&&"__vccOpts"in n}const iy=(n,e)=>Km(n,e,qs),oy="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Za;const ju=typeof window<"u"&&window.trustedTypes;if(ju)try{Za=ju.createPolicy("vue",{createHTML:n=>n})}catch{}const Af=Za?n=>Za.createHTML(n):n=>n,ay="http://www.w3.org/2000/svg",ly="http://www.w3.org/1998/Math/MathML",Jt=typeof document<"u"?document:null,$u=Jt&&Jt.createElement("template"),cy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Jt.createElementNS(ay,n):e==="mathml"?Jt.createElementNS(ly,n):t?Jt.createElement(n,{is:t}):Jt.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Jt.createTextNode(n),createComment:n=>Jt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Jt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{$u.innerHTML=Af(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=$u.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},uy=Symbol("_vtc");function hy(n,e,t){const r=n[uy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const to=Symbol("_vod"),bf=Symbol("_vsh"),Rf={beforeMount(n,{value:e},{transition:t}){n[to]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Es(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),Es(n,!0),r.enter(n)):r.leave(n,()=>{Es(n,!1)}):Es(n,e))},beforeUnmount(n,{value:e}){Es(n,e)}};function Es(n,e){n.style.display=e?n[to]:"none",n[bf]=!e}const dy=Symbol(""),fy=/(^|;)\s*display\s*:/;function py(n,e,t){const r=n.style,s=Ne(t);let i=!1;if(t&&!s){if(e)if(Ne(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Fi(r,l,"")}else for(const a in e)t[a]==null&&Fi(r,a,"");for(const a in t)a==="display"&&(i=!0),Fi(r,a,t[a])}else if(s){if(e!==t){const a=r[dy];a&&(t+=";"+a),r.cssText=t,i=fy.test(t)}}else e&&n.removeAttribute("style");to in n&&(n[to]=i?r.display:"",n[bf]&&(r.display="none"))}const qu=/\s*!important$/;function Fi(n,e,t){if(ie(t))t.forEach(r=>Fi(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=gy(n,e);qu.test(t)?n.setProperty(dr(r),t.replace(qu,""),"important"):n[r]=t}}const Hu=["Webkit","Moz","ms"],Aa={};function gy(n,e){const t=Aa[e];if(t)return t;let r=kn(e);if(r!=="filter"&&r in n)return Aa[e]=r;r=wd(r);for(let s=0;s<Hu.length;s++){const i=Hu[s]+r;if(i in n)return Aa[e]=i}return e}const zu="http://www.w3.org/1999/xlink";function Wu(n,e,t,r,s,i=Em(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(zu,e.slice(6,e.length)):n.setAttributeNS(zu,e,t):t==null||i&&!bd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Ln(t)?String(t):t)}function Ku(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Af(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=bd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function br(n,e,t,r){n.addEventListener(e,t,r)}function my(n,e,t,r){n.removeEventListener(e,t,r)}const Gu=Symbol("_vei");function _y(n,e,t,r,s=null){const i=n[Gu]||(n[Gu]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=yy(e);if(r){const h=i[e]=Ty(r,s);br(n,l,h,c)}else a&&(my(n,l,a,c),i[e]=void 0)}}const Qu=/(?:Once|Passive|Capture)$/;function yy(n){let e;if(Qu.test(n)){e={};let r;for(;r=n.match(Qu);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):dr(n.slice(2)),e]}let ba=0;const vy=Promise.resolve(),Ey=()=>ba||(vy.then(()=>ba=0),ba=Date.now());function Ty(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;$t(Iy(r,t.value),e,5,[r])};return t.value=n,t.attached=Ey(),t}function Iy(n,e){if(ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ju=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,wy=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?hy(n,r,a):e==="style"?py(n,t,r):Io(e)?Rl(e)||_y(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ay(n,e,r,a))?(Ku(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wu(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ne(r))?Ku(n,kn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Wu(n,e,r,a))};function Ay(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ju(e)&&ae(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ju(e)&&Ne(t)?!1:e in n}const Yu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ie(e)?t=>Ni(e,t):e};function by(n){n.target.composing=!0}function Xu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ra=Symbol("_assign"),jr={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Ra]=Yu(s);const i=r||s.props&&s.props.type==="number";br(n,e?"change":"input",a=>{if(a.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=ja(l)),n[Ra](l)}),t&&br(n,"change",()=>{n.value=n.value.trim()}),e||(br(n,"compositionstart",by),br(n,"compositionend",Xu),br(n,"change",Xu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Ra]=Yu(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?ja(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},Ry=["ctrl","shift","alt","meta"],Sy={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Ry.some(t=>n[`${t}Key`]&&!e.includes(t))},Cy=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=Sy[e[a]];if(l&&l(s,e))return}return n(s,...i)})},Py=$e({patchProp:wy},cy);let Zu;function Dy(){return Zu||(Zu=k_(Py))}const ky=(...n)=>{const e=Dy().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Oy(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Vy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Vy(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Oy(n){return Ne(n)?document.querySelector(n):n}const sr=Pt(""),Sa=Pt(!1),Ca=Pt(!1);function Hl(){return{eventFormVisible:Sa,loginFormVisible:Ca,showEventForm:s=>{console.log("Date received in showEventForm:",s),sr.value=s,Sa.value=!0},hideEventForm:()=>{Sa.value=!1},showLoginForm:()=>{Ca.value=!0},hideLoginForm:()=>{Ca.value=!1}}}var eh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ny=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Cf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|h>>6,b=h&63;c||(b=64,a||(v=64)),r.push(t[f],t[p],t[v],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Sf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ny(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new xy;const v=i<<2|l>>4;if(r.push(v),h!==64){const b=l<<4&240|h>>2;if(r.push(b),p!==64){const D=h<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const My=function(n){const e=Sf(n);return Cf.encodeByteArray(e,!0)},no=function(n){return My(n).replace(/\./g,"")},Pf=function(n){try{return Cf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=()=>Ly().__FIREBASE_DEFAULTS__,Uy=()=>{if(typeof process>"u"||typeof eh>"u")return;const n=eh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},By=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Pf(n[1]);return e&&JSON.parse(e)},Vo=()=>{try{return Fy()||Uy()||By()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Df=n=>{var e,t;return(t=(e=Vo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},jy=n=>{const e=Df(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},kf=()=>{var n;return(n=Vo())===null||n===void 0?void 0:n.config},Vf=n=>{var e;return(e=Vo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[no(JSON.stringify(t)),no(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function zy(){var n;const e=(n=Vo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ky(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qy(){const n=it();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Jy(){return!zy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yy(){try{return typeof indexedDB=="object"}catch{return!1}}function Xy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="FirebaseError";class cn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Zy,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?ev(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new cn(s,l,r)}}function ev(n,e){return n.replace(tv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tv=/\{\$([^}]+)}/g;function nv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ro(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(th(i)&&th(a)){if(!ro(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function th(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Is(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ws(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function rv(n,e){const t=new sv(n,e);return t.subscribe.bind(t)}class sv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");iv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Pa),s.error===void 0&&(s.error=Pa),s.complete===void 0&&(s.complete=Pa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Pa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n){return n&&n._delegate?n._delegate:n}class cr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new $y;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lv(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:av(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function av(n){return n===er?void 0:n}function lv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ov(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(le||(le={}));const uv={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},hv=le.INFO,dv={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},fv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=dv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zl{constructor(e){this.name=e,this._logLevel=hv,this._logHandler=fv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const pv=(n,e)=>e.some(t=>n instanceof t);let nh,rh;function gv(){return nh||(nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mv(){return rh||(rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Of=new WeakMap,el=new WeakMap,Nf=new WeakMap,Da=new WeakMap,Wl=new WeakMap;function _v(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(bn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Of.set(t,n)}).catch(()=>{}),Wl.set(e,n),e}function yv(n){if(el.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});el.set(n,e)}let tl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return el.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Nf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vv(n){tl=n(tl)}function Ev(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ka(this),e,...t);return Nf.set(r,e.sort?e.sort():[e]),bn(r)}:mv().includes(n)?function(...e){return n.apply(ka(this),e),bn(Of.get(this))}:function(...e){return bn(n.apply(ka(this),e))}}function Tv(n){return typeof n=="function"?Ev(n):(n instanceof IDBTransaction&&yv(n),pv(n,gv())?new Proxy(n,tl):n)}function bn(n){if(n instanceof IDBRequest)return _v(n);if(Da.has(n))return Da.get(n);const e=Tv(n);return e!==n&&(Da.set(n,e),Wl.set(e,n)),e}const ka=n=>Wl.get(n);function Iv(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=bn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(bn(a.result),c.oldVersion,c.newVersion,bn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const wv=["get","getKey","getAll","getAllKeys","count"],Av=["put","add","delete","clear"],Va=new Map;function sh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Va.get(e))return Va.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Av.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wv.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return Va.set(e,i),i}vv(n=>({...n,get:(e,t,r)=>sh(e,t)||n.get(e,t,r),has:(e,t)=>!!sh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Rv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nl="@firebase/app",ih="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new zl("@firebase/app"),Sv="@firebase/app-compat",Cv="@firebase/analytics-compat",Pv="@firebase/analytics",Dv="@firebase/app-check-compat",kv="@firebase/app-check",Vv="@firebase/auth",Ov="@firebase/auth-compat",Nv="@firebase/database",xv="@firebase/data-connect",Mv="@firebase/database-compat",Lv="@firebase/functions",Fv="@firebase/functions-compat",Uv="@firebase/installations",Bv="@firebase/installations-compat",jv="@firebase/messaging",$v="@firebase/messaging-compat",qv="@firebase/performance",Hv="@firebase/performance-compat",zv="@firebase/remote-config",Wv="@firebase/remote-config-compat",Kv="@firebase/storage",Gv="@firebase/storage-compat",Qv="@firebase/firestore",Jv="@firebase/vertexai",Yv="@firebase/firestore-compat",Xv="firebase",Zv="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="[DEFAULT]",eE={[nl]:"fire-core",[Sv]:"fire-core-compat",[Pv]:"fire-analytics",[Cv]:"fire-analytics-compat",[kv]:"fire-app-check",[Dv]:"fire-app-check-compat",[Vv]:"fire-auth",[Ov]:"fire-auth-compat",[Nv]:"fire-rtdb",[xv]:"fire-data-connect",[Mv]:"fire-rtdb-compat",[Lv]:"fire-fn",[Fv]:"fire-fn-compat",[Uv]:"fire-iid",[Bv]:"fire-iid-compat",[jv]:"fire-fcm",[$v]:"fire-fcm-compat",[qv]:"fire-perf",[Hv]:"fire-perf-compat",[zv]:"fire-rc",[Wv]:"fire-rc-compat",[Kv]:"fire-gcs",[Gv]:"fire-gcs-compat",[Qv]:"fire-fst",[Yv]:"fire-fst-compat",[Jv]:"fire-vertex","fire-js":"fire-js",[Xv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map,tE=new Map,sl=new Map;function oh(n,e){try{n.container.addComponent(e)}catch(t){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $r(n){const e=n.name;if(sl.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;sl.set(e,n);for(const t of so.values())oh(t,n);for(const t of tE.values())oh(t,n);return!0}function Kl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Zt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rn=new ti("app","Firebase",nE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=Zv;function xf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Rn.create("bad-app-name",{appName:String(s)});if(t||(t=kf()),!t)throw Rn.create("no-options");const i=so.get(s);if(i){if(ro(t,i.options)&&ro(r,i.config))return i;throw Rn.create("duplicate-app",{appName:s})}const a=new cv(s);for(const c of sl.values())a.addComponent(c);const l=new rE(t,r,a);return so.set(s,l),l}function Mf(n=rl){const e=so.get(n);if(!e&&n===rl&&kf())return xf();if(!e)throw Rn.create("no-app",{appName:n});return e}function Sn(n,e,t){var r;let s=(r=eE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(l.join(" "));return}$r(new cr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="firebase-heartbeat-database",iE=1,Hs="firebase-heartbeat-store";let Oa=null;function Lf(){return Oa||(Oa=Iv(sE,iE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Hs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rn.create("idb-open",{originalErrorMessage:n.message})})),Oa}async function oE(n){try{const t=(await Lf()).transaction(Hs),r=await t.objectStore(Hs).get(Ff(n));return await t.done,r}catch(e){if(e instanceof cn)rn.warn(e.message);else{const t=Rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(t.message)}}}async function ah(n,e){try{const r=(await Lf()).transaction(Hs,"readwrite");await r.objectStore(Hs).put(e,Ff(n)),await r.done}catch(t){if(t instanceof cn)rn.warn(t.message);else{const r=Rn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rn.warn(r.message)}}}function Ff(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=1024,lE=30*24*60*60*1e3;class cE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=lE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lh(),{heartbeatsToSend:r,unsentEntries:s}=uE(this._heartbeatsCache.heartbeats),i=no(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return rn.warn(t),""}}}function lh(){return new Date().toISOString().substring(0,10)}function uE(n,e=aE){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ch(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ch(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class hE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yy()?Xy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ah(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ah(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ch(n){return no(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n){$r(new cr("platform-logger",e=>new bv(e),"PRIVATE")),$r(new cr("heartbeat",e=>new cE(e),"PRIVATE")),Sn(nl,ih,n),Sn(nl,ih,"esm2017"),Sn("fire-js","")}dE("");var uh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ir,Uf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function E(){}E.prototype=m.prototype,w.D=m.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(I,A,S){for(var y=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)y[gt-2]=arguments[gt];return m.prototype[A].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,E){E||(E=0);var I=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)I[A]=m.charCodeAt(E++)|m.charCodeAt(E++)<<8|m.charCodeAt(E++)<<16|m.charCodeAt(E++)<<24;else for(A=0;16>A;++A)I[A]=m[E++]|m[E++]<<8|m[E++]<<16|m[E++]<<24;m=w.g[0],E=w.g[1],A=w.g[2];var S=w.g[3],y=m+(S^E&(A^S))+I[0]+3614090360&4294967295;m=E+(y<<7&4294967295|y>>>25),y=S+(A^m&(E^A))+I[1]+3905402710&4294967295,S=m+(y<<12&4294967295|y>>>20),y=A+(E^S&(m^E))+I[2]+606105819&4294967295,A=S+(y<<17&4294967295|y>>>15),y=E+(m^A&(S^m))+I[3]+3250441966&4294967295,E=A+(y<<22&4294967295|y>>>10),y=m+(S^E&(A^S))+I[4]+4118548399&4294967295,m=E+(y<<7&4294967295|y>>>25),y=S+(A^m&(E^A))+I[5]+1200080426&4294967295,S=m+(y<<12&4294967295|y>>>20),y=A+(E^S&(m^E))+I[6]+2821735955&4294967295,A=S+(y<<17&4294967295|y>>>15),y=E+(m^A&(S^m))+I[7]+4249261313&4294967295,E=A+(y<<22&4294967295|y>>>10),y=m+(S^E&(A^S))+I[8]+1770035416&4294967295,m=E+(y<<7&4294967295|y>>>25),y=S+(A^m&(E^A))+I[9]+2336552879&4294967295,S=m+(y<<12&4294967295|y>>>20),y=A+(E^S&(m^E))+I[10]+4294925233&4294967295,A=S+(y<<17&4294967295|y>>>15),y=E+(m^A&(S^m))+I[11]+2304563134&4294967295,E=A+(y<<22&4294967295|y>>>10),y=m+(S^E&(A^S))+I[12]+1804603682&4294967295,m=E+(y<<7&4294967295|y>>>25),y=S+(A^m&(E^A))+I[13]+4254626195&4294967295,S=m+(y<<12&4294967295|y>>>20),y=A+(E^S&(m^E))+I[14]+2792965006&4294967295,A=S+(y<<17&4294967295|y>>>15),y=E+(m^A&(S^m))+I[15]+1236535329&4294967295,E=A+(y<<22&4294967295|y>>>10),y=m+(A^S&(E^A))+I[1]+4129170786&4294967295,m=E+(y<<5&4294967295|y>>>27),y=S+(E^A&(m^E))+I[6]+3225465664&4294967295,S=m+(y<<9&4294967295|y>>>23),y=A+(m^E&(S^m))+I[11]+643717713&4294967295,A=S+(y<<14&4294967295|y>>>18),y=E+(S^m&(A^S))+I[0]+3921069994&4294967295,E=A+(y<<20&4294967295|y>>>12),y=m+(A^S&(E^A))+I[5]+3593408605&4294967295,m=E+(y<<5&4294967295|y>>>27),y=S+(E^A&(m^E))+I[10]+38016083&4294967295,S=m+(y<<9&4294967295|y>>>23),y=A+(m^E&(S^m))+I[15]+3634488961&4294967295,A=S+(y<<14&4294967295|y>>>18),y=E+(S^m&(A^S))+I[4]+3889429448&4294967295,E=A+(y<<20&4294967295|y>>>12),y=m+(A^S&(E^A))+I[9]+568446438&4294967295,m=E+(y<<5&4294967295|y>>>27),y=S+(E^A&(m^E))+I[14]+3275163606&4294967295,S=m+(y<<9&4294967295|y>>>23),y=A+(m^E&(S^m))+I[3]+4107603335&4294967295,A=S+(y<<14&4294967295|y>>>18),y=E+(S^m&(A^S))+I[8]+1163531501&4294967295,E=A+(y<<20&4294967295|y>>>12),y=m+(A^S&(E^A))+I[13]+2850285829&4294967295,m=E+(y<<5&4294967295|y>>>27),y=S+(E^A&(m^E))+I[2]+4243563512&4294967295,S=m+(y<<9&4294967295|y>>>23),y=A+(m^E&(S^m))+I[7]+1735328473&4294967295,A=S+(y<<14&4294967295|y>>>18),y=E+(S^m&(A^S))+I[12]+2368359562&4294967295,E=A+(y<<20&4294967295|y>>>12),y=m+(E^A^S)+I[5]+4294588738&4294967295,m=E+(y<<4&4294967295|y>>>28),y=S+(m^E^A)+I[8]+2272392833&4294967295,S=m+(y<<11&4294967295|y>>>21),y=A+(S^m^E)+I[11]+1839030562&4294967295,A=S+(y<<16&4294967295|y>>>16),y=E+(A^S^m)+I[14]+4259657740&4294967295,E=A+(y<<23&4294967295|y>>>9),y=m+(E^A^S)+I[1]+2763975236&4294967295,m=E+(y<<4&4294967295|y>>>28),y=S+(m^E^A)+I[4]+1272893353&4294967295,S=m+(y<<11&4294967295|y>>>21),y=A+(S^m^E)+I[7]+4139469664&4294967295,A=S+(y<<16&4294967295|y>>>16),y=E+(A^S^m)+I[10]+3200236656&4294967295,E=A+(y<<23&4294967295|y>>>9),y=m+(E^A^S)+I[13]+681279174&4294967295,m=E+(y<<4&4294967295|y>>>28),y=S+(m^E^A)+I[0]+3936430074&4294967295,S=m+(y<<11&4294967295|y>>>21),y=A+(S^m^E)+I[3]+3572445317&4294967295,A=S+(y<<16&4294967295|y>>>16),y=E+(A^S^m)+I[6]+76029189&4294967295,E=A+(y<<23&4294967295|y>>>9),y=m+(E^A^S)+I[9]+3654602809&4294967295,m=E+(y<<4&4294967295|y>>>28),y=S+(m^E^A)+I[12]+3873151461&4294967295,S=m+(y<<11&4294967295|y>>>21),y=A+(S^m^E)+I[15]+530742520&4294967295,A=S+(y<<16&4294967295|y>>>16),y=E+(A^S^m)+I[2]+3299628645&4294967295,E=A+(y<<23&4294967295|y>>>9),y=m+(A^(E|~S))+I[0]+4096336452&4294967295,m=E+(y<<6&4294967295|y>>>26),y=S+(E^(m|~A))+I[7]+1126891415&4294967295,S=m+(y<<10&4294967295|y>>>22),y=A+(m^(S|~E))+I[14]+2878612391&4294967295,A=S+(y<<15&4294967295|y>>>17),y=E+(S^(A|~m))+I[5]+4237533241&4294967295,E=A+(y<<21&4294967295|y>>>11),y=m+(A^(E|~S))+I[12]+1700485571&4294967295,m=E+(y<<6&4294967295|y>>>26),y=S+(E^(m|~A))+I[3]+2399980690&4294967295,S=m+(y<<10&4294967295|y>>>22),y=A+(m^(S|~E))+I[10]+4293915773&4294967295,A=S+(y<<15&4294967295|y>>>17),y=E+(S^(A|~m))+I[1]+2240044497&4294967295,E=A+(y<<21&4294967295|y>>>11),y=m+(A^(E|~S))+I[8]+1873313359&4294967295,m=E+(y<<6&4294967295|y>>>26),y=S+(E^(m|~A))+I[15]+4264355552&4294967295,S=m+(y<<10&4294967295|y>>>22),y=A+(m^(S|~E))+I[6]+2734768916&4294967295,A=S+(y<<15&4294967295|y>>>17),y=E+(S^(A|~m))+I[13]+1309151649&4294967295,E=A+(y<<21&4294967295|y>>>11),y=m+(A^(E|~S))+I[4]+4149444226&4294967295,m=E+(y<<6&4294967295|y>>>26),y=S+(E^(m|~A))+I[11]+3174756917&4294967295,S=m+(y<<10&4294967295|y>>>22),y=A+(m^(S|~E))+I[2]+718787259&4294967295,A=S+(y<<15&4294967295|y>>>17),y=E+(S^(A|~m))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var E=m-this.blockSize,I=this.B,A=this.h,S=0;S<m;){if(A==0)for(;S<=E;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<m;)if(I[A++]=w.charCodeAt(S++),A==this.blockSize){s(this,I),A=0;break}}else for(;S<m;)if(I[A++]=w[S++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var E=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=E&255,E/=256;for(this.u(w),w=Array(16),m=E=0;4>m;++m)for(var I=0;32>I;I+=8)w[E++]=this.g[m]>>>I&255;return w};function i(w,m){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=m(w)}function a(w,m){this.h=m;for(var E=[],I=!0,A=w.length-1;0<=A;A--){var S=w[A]|0;I&&S==m||(E[A]=S,I=!1)}this.g=E}var l={};function c(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return V(h(-w));for(var m=[],E=1,I=0;w>=E;I++)m[I]=w/E|0,E*=4294967296;return new a(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return V(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(m,8)),I=p,A=0;A<w.length;A+=8){var S=Math.min(8,w.length-A),y=parseInt(w.substring(A,A+S),m);8>S?(S=h(Math.pow(m,S)),I=I.j(S).add(h(y))):(I=I.j(E),I=I.add(h(y)))}return I}var p=c(0),v=c(1),b=c(16777216);n=a.prototype,n.m=function(){if(N(this))return-V(this).m();for(var w=0,m=1,E=0;E<this.g.length;E++){var I=this.i(E);w+=(0<=I?I:4294967296+I)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(D(this))return"0";if(N(this))return"-"+V(this).toString(w);for(var m=h(Math.pow(w,6)),E=this,I="";;){var A=W(E,m).g;E=H(E,A.j(m));var S=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=A,D(E))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function D(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function N(w){return w.h==-1}n.l=function(w){return w=H(this,w),N(w)?-1:D(w)?0:1};function V(w){for(var m=w.g.length,E=[],I=0;I<m;I++)E[I]=~w.g[I];return new a(E,~w.h).add(v)}n.abs=function(){return N(this)?V(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),E=[],I=0,A=0;A<=m;A++){var S=I+(this.i(A)&65535)+(w.i(A)&65535),y=(S>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);I=y>>>16,S&=65535,y&=65535,E[A]=y<<16|S}return new a(E,E[E.length-1]&-2147483648?-1:0)};function H(w,m){return w.add(V(m))}n.j=function(w){if(D(this)||D(w))return p;if(N(this))return N(w)?V(this).j(V(w)):V(V(this).j(w));if(N(w))return V(this.j(V(w)));if(0>this.l(b)&&0>w.l(b))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,E=[],I=0;I<2*m;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<w.g.length;A++){var S=this.i(I)>>>16,y=this.i(I)&65535,gt=w.i(A)>>>16,un=w.i(A)&65535;E[2*I+2*A]+=y*un,Q(E,2*I+2*A),E[2*I+2*A+1]+=S*un,Q(E,2*I+2*A+1),E[2*I+2*A+1]+=y*gt,Q(E,2*I+2*A+1),E[2*I+2*A+2]+=S*gt,Q(E,2*I+2*A+2)}for(I=0;I<m;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=m;I<2*m;I++)E[I]=0;return new a(E,0)};function Q(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function Y(w,m){this.g=w,this.h=m}function W(w,m){if(D(m))throw Error("division by zero");if(D(w))return new Y(p,p);if(N(w))return m=W(V(w),m),new Y(V(m.g),V(m.h));if(N(m))return m=W(w,V(m)),new Y(V(m.g),m.h);if(30<w.g.length){if(N(w)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var E=v,I=m;0>=I.l(w);)E=fe(E),I=fe(I);var A=ye(E,1),S=ye(I,1);for(I=ye(I,2),E=ye(E,2);!D(I);){var y=S.add(I);0>=y.l(w)&&(A=A.add(E),S=y),I=ye(I,1),E=ye(E,1)}return m=H(w,A.j(m)),new Y(A,m)}for(A=p;0<=w.l(m);){for(E=Math.max(1,Math.floor(w.m()/m.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=h(E),y=S.j(m);N(y)||0<y.l(w);)E-=I,S=h(E),y=S.j(m);D(S)&&(S=v),A=A.add(S),w=H(w,y)}return new Y(A,w)}n.A=function(w){return W(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),E=[],I=0;I<m;I++)E[I]=this.i(I)&w.i(I);return new a(E,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),E=[],I=0;I<m;I++)E[I]=this.i(I)|w.i(I);return new a(E,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),E=[],I=0;I<m;I++)E[I]=this.i(I)^w.i(I);return new a(E,this.h^w.h)};function fe(w){for(var m=w.g.length+1,E=[],I=0;I<m;I++)E[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(E,w.h)}function ye(w,m){var E=m>>5;m%=32;for(var I=w.g.length-E,A=[],S=0;S<I;S++)A[S]=0<m?w.i(S+E)>>>m|w.i(S+E+1)<<32-m:w.i(S+E);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Uf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,ir=a}).apply(typeof uh<"u"?uh:typeof self<"u"?self:typeof window<"u"?window:{});var Pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bf,As,jf,Ui,il,$f,qf,Hf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pi=="object"&&Pi];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in d))break e;d=d[R]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,g=!1,R={next:function(){if(!g&&d<o.length){var C=d++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function v(o,u,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,v.apply(null,arguments)}function b(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function D(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,R,C){for(var j=Array(arguments.length-2),we=2;we<arguments.length;we++)j[we-2]=arguments[we];return u.prototype[R].apply(g,j)}}function N(o){const u=o.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function V(o,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const R=o.length||0,C=g.length||0;o.length=R+C;for(let j=0;j<C;j++)o[R+j]=g[j]}else o.push(g)}}class H{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Q(o){return/^[\s\xa0]*$/.test(o)}function Y(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function W(o){return W[" "](o),o}W[" "]=function(){};var fe=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ye(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function w(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function m(o){const u={};for(const d in o)u[d]=o[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(d in g)o[d]=g[d];for(let C=0;C<E.length;C++)d=E[C],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function A(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function S(o){l.setTimeout(()=>{throw o},0)}function y(){var o=St;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class gt{constructor(){this.h=this.g=null}add(u,d){const g=un.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var un=new H(()=>new He,o=>o.reset());class He{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,pe=!1,St=new gt,qn=()=>{const o=l.Promise.resolve(void 0);Ie=()=>{o.then(zt)}};var zt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){S(d)}var u=un;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var ea=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Hn(o,u){if(Me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(fe){e:{try{W(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:zn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Hn.aa.h.call(this)}}D(Hn,Me);var zn={2:"touch",3:"pen",4:"mouse"};Hn.prototype.h=function(){Hn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Wt="closure_listenable_"+(1e6*Math.random()|0),is=0;function ui(o,u,d,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=R,this.key=++is,this.da=this.fa=!1}function Ot(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Wn(o){this.src=o,this.g={},this.h=0}Wn.prototype.add=function(o,u,d,g,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var j=_(o,u,g,R);return-1<j?(u=o[j],d||(u.fa=!1)):(u=new ui(u,this.src,C,!!g,R),u.fa=d,o.push(u)),u};function mr(o,u){var d=u.type;if(d in o.g){var g=o.g[d],R=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(g,R,1),C&&(Ot(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function _(o,u,d,g){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==g)return R}return-1}var T="closure_lm_"+(1e6*Math.random()|0),P={};function L(o,u,d,g,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)L(o,u[C],d,g,R);return null}return d=G(d),o&&o[Wt]?o.K(u,d,h(g)?!!g.capture:!!g,R):O(o,u,d,!1,g,R)}function O(o,u,d,g,R,C){if(!u)throw Error("Invalid event type");var j=h(R)?!!R.capture:!!R,we=X(o);if(we||(o[T]=we=new Wn(o)),d=we.add(u,d,g,j,C),d.proxy)return d;if(g=M(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)ea||(R=j),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(U(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function M(){function o(d){return u.call(o.src,o.listener,d)}const u=F;return o}function $(o,u,d,g,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)$(o,u[C],d,g,R);else g=h(g)?!!g.capture:!!g,d=G(d),o&&o[Wt]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],d=_(C,d,g,R),-1<d&&(Ot(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=X(o))&&(u=o.g[u.toString()],o=-1,u&&(o=_(u,d,g,R)),(d=-1<o?u[o]:null)&&B(d))}function B(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Wt])mr(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(U(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=X(u))?(mr(d,o),d.h==0&&(d.src=null,u[T]=null)):Ot(o)}}}function U(o){return o in P?P[o]:P[o]="on"+o}function F(o,u){if(o.da)o=!0;else{u=new Hn(u,this);var d=o.listener,g=o.ha||o.src;o.fa&&B(o),o=d.call(g,u)}return o}function X(o){return o=o[T],o instanceof Wn?o:null}var q="__closure_events_fn_"+(1e9*Math.random()>>>0);function G(o){return typeof o=="function"?o:(o[q]||(o[q]=function(u){return o.handleEvent(u)}),o[q])}function K(){xe.call(this),this.i=new Wn(this),this.M=this,this.F=null}D(K,xe),K.prototype[Wt]=!0,K.prototype.removeEventListener=function(o,u,d,g){$(this,o,u,d,g)};function ee(o,u){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Me(u,o);else if(u instanceof Me)u.target=u.target||o;else{var R=u;u=new Me(g,o),I(u,R)}if(R=!0,d)for(var C=d.length-1;0<=C;C--){var j=u.g=d[C];R=_e(j,g,!0,u)&&R}if(j=u.g=o,R=_e(j,g,!0,u)&&R,R=_e(j,g,!1,u)&&R,d)for(C=0;C<d.length;C++)j=u.g=d[C],R=_e(j,g,!1,u)&&R}K.prototype.N=function(){if(K.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],g=0;g<d.length;g++)Ot(d[g]);delete o.g[u],o.h--}}this.F=null},K.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},K.prototype.L=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function _e(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var j=u[C];if(j&&!j.da&&j.capture==d){var we=j.listener,We=j.ha||j.src;j.fa&&mr(o.i,j),R=we.call(We,g)!==!1&&R}}return R&&!g.defaultPrevented}function ge(o,u,d){if(typeof o=="function")d&&(o=v(o,d));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Je(o){o.g=ge(()=>{o.g=null,o.i&&(o.i=!1,Je(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ue extends xe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Je(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(o){xe.call(this),this.h=o,this.g={}}D(ze,xe);var Ye=[];function hn(o){ye(o.g,function(u,d){this.g.hasOwnProperty(d)&&B(u)},o),o.g={}}ze.prototype.N=function(){ze.aa.N.call(this),hn(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _r=l.JSON.stringify,ot=l.JSON.parse,wt=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function yr(){}yr.prototype.h=null;function Nc(o){return o.h||(o.h=o.i())}function xc(){}var os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ta(){Me.call(this,"d")}D(ta,Me);function na(){Me.call(this,"c")}D(na,Me);var Kn={},Mc=null;function hi(){return Mc=Mc||new K}Kn.La="serverreachability";function Lc(o){Me.call(this,Kn.La,o)}D(Lc,Me);function as(o){const u=hi();ee(u,new Lc(u))}Kn.STAT_EVENT="statevent";function Fc(o,u){Me.call(this,Kn.STAT_EVENT,o),this.stat=u}D(Fc,Me);function at(o){const u=hi();ee(u,new Fc(u,o))}Kn.Ma="timingevent";function Uc(o,u){Me.call(this,Kn.Ma,o),this.size=u}D(Uc,Me);function ls(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function cs(){this.g=!0}cs.prototype.xa=function(){this.g=!1};function jg(o,u,d,g,R,C){o.info(function(){if(o.g)if(C)for(var j="",we=C.split("&"),We=0;We<we.length;We++){var me=we[We].split("=");if(1<me.length){var Xe=me[0];me=me[1];var Ze=Xe.split("_");j=2<=Ze.length&&Ze[1]=="type"?j+(Xe+"="+me+"&"):j+(Xe+"=redacted&")}}else j=null;else j=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+d+`
`+j})}function $g(o,u,d,g,R,C,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+d+`
`+C+" "+j})}function vr(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Hg(o,d)+(g?" "+g:"")})}function qg(o,u){o.info(function(){return"TIMEOUT: "+u})}cs.prototype.info=function(){};function Hg(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return _r(d)}catch{return u}}var di={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ra;function fi(){}D(fi,yr),fi.prototype.g=function(){return new XMLHttpRequest},fi.prototype.i=function(){return{}},ra=new fi;function dn(o,u,d,g){this.j=o,this.i=u,this.l=d,this.R=g||1,this.U=new ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jc}function jc(){this.i=null,this.g="",this.h=!1}var $c={},sa={};function ia(o,u,d){o.L=1,o.v=_i(Kt(u)),o.m=d,o.P=!0,qc(o,null)}function qc(o,u){o.F=Date.now(),pi(o),o.A=Kt(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),ru(d.i,"t",g),o.C=0,d=o.j.J,o.h=new jc,o.g=Tu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Ue(v(o.Y,o,o.g),o.O)),u=o.U,d=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Ye[0]=R.toString()),R=Ye);for(var C=0;C<R.length;C++){var j=L(d,R[C],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),as(),jg(o.i,o.u,o.A,o.l,o.R,o.m)}dn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Gt(o)==3?u.j():this.Y(o)},dn.prototype.Y=function(o){try{if(o==this.g)e:{const Ze=Gt(this.g);var u=this.g.Ba();const Ir=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||uu(this.g)))){this.J||Ze!=4||u==7||(u==8||0>=Ir?as(3):as(2)),oa(this);var d=this.g.Z();this.X=d;t:if(Hc(this)){var g=uu(this.g);o="";var R=g.length,C=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),us(this);var j="";break t}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,$g(this.i,this.u,this.A,this.l,this.R,Ze,d),this.o){if(this.T&&!this.K){t:{if(this.g){var we,We=this.g;if((we=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(we)){var me=we;break t}}me=null}if(d=me)vr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,aa(this,d);else{this.o=!1,this.s=3,at(12),Gn(this),us(this);break e}}if(this.P){d=!0;let Ct;for(;!this.J&&this.C<j.length;)if(Ct=zg(this,j),Ct==sa){Ze==4&&(this.s=4,at(14),d=!1),vr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==$c){this.s=4,at(15),vr(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else vr(this.i,this.l,Ct,null),aa(this,Ct);if(Hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||j.length!=0||this.h.h||(this.s=1,at(16),d=!1),this.o=this.o&&d,!d)vr(this.i,this.l,j,"[Invalid Chunked Response]"),Gn(this),us(this);else if(0<j.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),fa(Xe),Xe.M=!0,at(11))}}else vr(this.i,this.l,j,null),aa(this,j);Ze==4&&Gn(this),this.o&&!this.J&&(Ze==4?_u(this.j,this):(this.o=!1,pi(this)))}else lm(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Gn(this),us(this)}}}catch{}finally{}};function Hc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function zg(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?sa:(d=Number(u.substring(d,g)),isNaN(d)?$c:(g+=1,g+d>u.length?sa:(u=u.slice(g,g+d),o.C=g+d,u)))}dn.prototype.cancel=function(){this.J=!0,Gn(this)};function pi(o){o.S=Date.now()+o.I,zc(o,o.I)}function zc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ls(v(o.ba,o),u)}function oa(o){o.B&&(l.clearTimeout(o.B),o.B=null)}dn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(qg(this.i,this.A),this.L!=2&&(as(),at(17)),Gn(this),this.s=2,us(this)):zc(this,this.S-o)};function us(o){o.j.G==0||o.J||_u(o.j,o)}function Gn(o){oa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,hn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function aa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||la(d.h,o))){if(!o.K&&la(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)wi(d),Ti(d);else break e;da(d),at(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=ls(v(d.Za,d),6e3));if(1>=Gc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Jn(d,11)}else if((o.K||d.g==o)&&wi(d),!Q(u))for(R=d.Da.g.parse(u),u=0;u<R.length;u++){let me=R[u];if(d.T=me[0],me=me[1],d.G==2)if(me[0]=="c"){d.K=me[1],d.ia=me[2];const Xe=me[3];Xe!=null&&(d.la=Xe,d.j.info("VER="+d.la));const Ze=me[4];Ze!=null&&(d.Aa=Ze,d.j.info("SVER="+d.Aa));const Ir=me[5];Ir!=null&&typeof Ir=="number"&&0<Ir&&(g=1.5*Ir,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ct=o.g;if(Ct){const bi=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bi){var C=g.h;C.g||bi.indexOf("spdy")==-1&&bi.indexOf("quic")==-1&&bi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ca(C,C.h),C.h=null))}if(g.D){const pa=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;pa&&(g.ya=pa,Re(g.I,g.D,pa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var j=o;if(g.qa=Eu(g,g.J?g.ia:null,g.W),j.K){Qc(g.h,j);var we=j,We=g.L;We&&(we.I=We),we.B&&(oa(we),pi(we)),g.g=j}else gu(g);0<d.i.length&&Ii(d)}else me[0]!="stop"&&me[0]!="close"||Jn(d,7);else d.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Jn(d,7):ha(d):me[0]!="noop"&&d.l&&d.l.ta(me),d.v=0)}}as(4)}catch{}}var Wg=class{constructor(o,u){this.g=o,this.map=u}};function Wc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Gc(o){return o.h?1:o.g?o.g.size:0}function la(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ca(o,u){o.g?o.g.add(u):o.h=u}function Qc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Wc.prototype.cancel=function(){if(this.i=Jc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Jc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return N(o.i)}function Kg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,g=0;g<d;g++)u.push(o[g]);return u}u=[],d=0;for(g in o)u[d++]=o[g];return u}function Gg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const g in o)u[d++]=g;return u}}}function Yc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Gg(o),g=Kg(o),R=g.length,C=0;C<R;C++)u.call(void 0,g[C],d&&d[C],o)}var Xc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qg(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),R=null;if(0<=g){var C=o[d].substring(0,g);R=o[d].substring(g+1)}else C=o[d];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Qn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Qn){this.h=o.h,gi(this,o.j),this.o=o.o,this.g=o.g,mi(this,o.s),this.l=o.l;var u=o.i,d=new fs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Zc(this,d),this.m=o.m}else o&&(u=String(o).match(Xc))?(this.h=!1,gi(this,u[1]||"",!0),this.o=hs(u[2]||""),this.g=hs(u[3]||"",!0),mi(this,u[4]),this.l=hs(u[5]||"",!0),Zc(this,u[6]||"",!0),this.m=hs(u[7]||"")):(this.h=!1,this.i=new fs(null,this.h))}Qn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ds(u,eu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ds(u,eu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ds(d,d.charAt(0)=="/"?Xg:Yg,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ds(d,em)),o.join("")};function Kt(o){return new Qn(o)}function gi(o,u,d){o.j=d?hs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function mi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Zc(o,u,d){u instanceof fs?(o.i=u,tm(o.i,o.h)):(d||(u=ds(u,Zg)),o.i=new fs(u,o.h))}function Re(o,u,d){o.i.set(u,d)}function _i(o){return Re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function hs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ds(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Jg),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Jg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var eu=/[#\/\?@]/g,Yg=/[#\?:]/g,Xg=/[#\?]/g,Zg=/[#\?@]/g,em=/#/g;function fs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function fn(o){o.g||(o.g=new Map,o.h=0,o.i&&Qg(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=fs.prototype,n.add=function(o,u){fn(this),this.i=null,o=Er(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function tu(o,u){fn(o),u=Er(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function nu(o,u){return fn(o),u=Er(o,u),o.g.has(u)}n.forEach=function(o,u){fn(this),this.g.forEach(function(d,g){d.forEach(function(R){o.call(u,R,g,this)},this)},this)},n.na=function(){fn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const R=o[g];for(let C=0;C<R.length;C++)d.push(u[g])}return d},n.V=function(o){fn(this);let u=[];if(typeof o=="string")nu(this,o)&&(u=u.concat(this.g.get(Er(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return fn(this),this.i=null,o=Er(this,o),nu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function ru(o,u,d){tu(o,u),0<d.length&&(o.i=null,o.g.set(Er(o,u),N(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const C=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var R=C;j[g]!==""&&(R+="="+encodeURIComponent(String(j[g]))),o.push(R)}}return this.i=o.join("&")};function Er(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function tm(o,u){u&&!o.j&&(fn(o),o.i=null,o.g.forEach(function(d,g){var R=g.toLowerCase();g!=R&&(tu(this,g),ru(this,R,d))},o)),o.j=u}function nm(o,u){const d=new cs;if(l.Image){const g=new Image;g.onload=b(pn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=b(pn,d,"TestLoadImage: error",!1,u,g),g.onabort=b(pn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(pn,d,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function rm(o,u){const d=new cs,g=new AbortController,R=setTimeout(()=>{g.abort(),pn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?pn(d,"TestPingServer: ok",!0,u):pn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),pn(d,"TestPingServer: error",!1,u)})}function pn(o,u,d,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(d)}catch{}}function sm(){this.g=new wt}function im(o,u,d){const g=d||"";try{Yc(o,function(R,C){let j=R;h(R)&&(j=_r(R)),u.push(g+C+"="+encodeURIComponent(j))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function yi(o){this.l=o.Ub||null,this.j=o.eb||!1}D(yi,yr),yi.prototype.g=function(){return new vi(this.l,this.j)},yi.prototype.i=function(o){return function(){return o}}({});function vi(o,u){K.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(vi,K),n=vi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,gs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;su(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function su(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ps(this):gs(this),this.readyState==3&&su(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ps(this))},n.Qa=function(o){this.g&&(this.response=o,ps(this))},n.ga=function(){this.g&&ps(this)};function ps(o){o.readyState=4,o.l=null,o.j=null,o.v=null,gs(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function gs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function iu(o){let u="";return ye(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function ua(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=iu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Re(o,u,d))}function De(o){K.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(De,K);var om=/^https?$/i,am=["POST","PUT"];n=De.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ra.g(),this.v=this.o?Nc(this.o):Nc(ra),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){ou(this,C);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)d.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())d.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(am,u,void 0))||g||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of d)this.g.setRequestHeader(C,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){ou(this,C)}};function ou(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,au(o),Ei(o)}function au(o){o.A||(o.A=!0,ee(o,"complete"),ee(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ee(this,"complete"),ee(this,"abort"),Ei(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ei(this,!0)),De.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?lu(this):this.bb())},n.bb=function(){lu(this)};function lu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Gt(o)!=4||o.Z()!=2)){if(o.u&&Gt(o)==4)ge(o.Ea,0,o);else if(ee(o,"readystatechange"),Gt(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=j===0){var R=String(o.D).match(Xc)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),g=!om.test(R?R.toLowerCase():"")}d=g}if(d)ee(o,"complete"),ee(o,"success");else{o.m=6;try{var C=2<Gt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",au(o)}}finally{Ei(o)}}}}function Ei(o,u){if(o.g){cu(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ee(o,"ready");try{d.onreadystatechange=g}catch{}}}function cu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Gt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ot(u)}};function uu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function lm(o){const u={};o=(o.g&&2<=Gt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(Q(o[g]))continue;var d=A(o[g]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[R]||[];u[R]=C,C.push(d)}w(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function hu(o){this.Aa=0,this.i=[],this.j=new cs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ms("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ms("baseRetryDelayMs",5e3,o),this.cb=ms("retryDelaySeedMs",1e4,o),this.Wa=ms("forwardChannelMaxRetries",2,o),this.wa=ms("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Wc(o&&o.concurrentRequestLimit),this.Da=new sm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hu.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,g){at(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Eu(this,null,this.W),Ii(this)};function ha(o){if(du(o),o.G==3){var u=o.U++,d=Kt(o.I);if(Re(d,"SID",o.K),Re(d,"RID",u),Re(d,"TYPE","terminate"),_s(o,d),u=new dn(o,o.j,u),u.L=2,u.v=_i(Kt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Tu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),pi(u)}vu(o)}function Ti(o){o.g&&(fa(o),o.g.cancel(),o.g=null)}function du(o){Ti(o),o.u&&(l.clearTimeout(o.u),o.u=null),wi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ii(o){if(!Kc(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ie||qn(),pe||(Ie(),pe=!0),St.add(u,o),o.B=0}}function cm(o,u){return Gc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ls(v(o.Ga,o,u),yu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new dn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),I(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=pu(this,R,u),d=Kt(this.I),Re(d,"RID",o),Re(d,"CVER",22),this.D&&Re(d,"X-HTTP-Session-Id",this.D),_s(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(iu(C)))+"&"+u:this.m&&ua(d,this.m,C)),ca(this.h,R),this.Ua&&Re(d,"TYPE","init"),this.P?(Re(d,"$req",u),Re(d,"SID","null"),R.T=!0,ia(R,d,null)):ia(R,d,u),this.G=2}}else this.G==3&&(o?fu(this,o):this.i.length==0||Kc(this.h)||fu(this))};function fu(o,u){var d;u?d=u.l:d=o.U++;const g=Kt(o.I);Re(g,"SID",o.K),Re(g,"RID",d),Re(g,"AID",o.T),_s(o,g),o.m&&o.o&&ua(g,o.m,o.o),d=new dn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=pu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ca(o.h,d),ia(d,g,u)}function _s(o,u){o.H&&ye(o.H,function(d,g){Re(u,g,d)}),o.l&&Yc({},function(d,g){Re(u,g,d)})}function pu(o,u,d){d=Math.min(o.i.length,d);var g=o.l?v(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const j=["count="+d];C==-1?0<d?(C=R[0].g,j.push("ofs="+C)):C=0:j.push("ofs="+C);let we=!0;for(let We=0;We<d;We++){let me=R[We].g;const Xe=R[We].map;if(me-=C,0>me)C=Math.max(0,R[We].g-100),we=!1;else try{im(Xe,j,"req"+me+"_")}catch{g&&g(Xe)}}if(we){g=j.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,g}function gu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ie||qn(),pe||(Ie(),pe=!0),St.add(u,o),o.v=0}}function da(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ls(v(o.Fa,o),yu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,mu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ls(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Ti(this),mu(this))};function fa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function mu(o){o.g=new dn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Kt(o.qa);Re(u,"RID","rpc"),Re(u,"SID",o.K),Re(u,"AID",o.T),Re(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Re(u,"TO",o.ja),Re(u,"TYPE","xmlhttp"),_s(o,u),o.m&&o.o&&ua(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=_i(Kt(u)),d.m=null,d.P=!0,qc(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Ti(this),da(this),at(19))};function wi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function _u(o,u){var d=null;if(o.g==u){wi(o),fa(o),o.g=null;var g=2}else if(la(o.h,u))d=u.D,Qc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=hi(),ee(g,new Uc(g,d)),Ii(o)}else gu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&cm(o,u)||g==2&&da(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),R){case 1:Jn(o,5);break;case 4:Jn(o,10);break;case 3:Jn(o,6);break;default:Jn(o,2)}}}function yu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function Jn(o,u){if(o.j.info("Error code "+u),u==2){var d=v(o.fb,o),g=o.Xa;const R=!g;g=new Qn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||gi(g,"https"),_i(g),R?nm(g.toString(),d):rm(g.toString(),d)}else at(2);o.G=0,o.l&&o.l.sa(u),vu(o),du(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function vu(o){if(o.G=0,o.ka=[],o.l){const u=Jc(o.h);(u.length!=0||o.i.length!=0)&&(V(o.ka,u),V(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Eu(o,u,d){var g=d instanceof Qn?Kt(d):new Qn(d);if(g.g!="")u&&(g.g=u+"."+g.g),mi(g,g.s);else{var R=l.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new Qn(null);g&&gi(C,g),u&&(C.g=u),R&&mi(C,R),d&&(C.l=d),g=C}return d=o.D,u=o.ya,d&&u&&Re(g,d,u),Re(g,"VER",o.la),_s(o,g),g}function Tu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new De(new yi({eb:d})):new De(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iu(){}n=Iu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ai(){}Ai.prototype.g=function(o,u){return new mt(o,u)};function mt(o,u){K.call(this),this.g=new hu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!Q(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Q(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Tr(this)}D(mt,K),mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){ha(this.g)},mt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=_r(o),o=d);u.i.push(new Wg(u.Ya++,o)),u.G==3&&Ii(u)},mt.prototype.N=function(){this.g.l=null,delete this.j,ha(this.g),delete this.g,mt.aa.N.call(this)};function wu(o){ta.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}D(wu,ta);function Au(){na.call(this),this.status=1}D(Au,na);function Tr(o){this.g=o}D(Tr,Iu),Tr.prototype.ua=function(){ee(this.g,"a")},Tr.prototype.ta=function(o){ee(this.g,new wu(o))},Tr.prototype.sa=function(o){ee(this.g,new Au)},Tr.prototype.ra=function(){ee(this.g,"b")},Ai.prototype.createWebChannel=Ai.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,Hf=function(){return new Ai},qf=function(){return hi()},$f=Kn,il={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},di.NO_ERROR=0,di.TIMEOUT=8,di.HTTP_ERROR=6,Ui=di,Bc.COMPLETE="complete",jf=Bc,xc.EventType=os,os.OPEN="a",os.CLOSE="b",os.ERROR="c",os.MESSAGE="d",K.prototype.listen=K.prototype.K,As=xc,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,Bf=De}).apply(typeof Pi<"u"?Pi:typeof self<"u"?self:typeof window<"u"?window:{});const hh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new zl("@firebase/firestore");function Rr(){return ur.logLevel}function z(n,...e){if(ur.logLevel<=le.DEBUG){const t=e.map(Gl);ur.debug(`Firestore (${Zr}): ${n}`,...t)}}function sn(n,...e){if(ur.logLevel<=le.ERROR){const t=e.map(Gl);ur.error(`Firestore (${Zr}): ${n}`,...t)}}function qr(n,...e){if(ur.logLevel<=le.WARN){const t=e.map(Gl);ur.warn(`Firestore (${Zr}): ${n}`,...t)}}function Gl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n="Unexpected state"){const e=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: `+n;throw sn(e),new Error(e)}function Te(n,e){n||re()}function oe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends cn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tt.UNAUTHENTICATED))}shutdown(){}}class pE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gE{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Te(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new or;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new or,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new or)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new zf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new tt(e)}}class mE{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _E{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new mE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Te(this.o===void 0);const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Te(typeof t.token=="string"),this.R=t.token,new yE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=EE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function de(n,e){return n<e?-1:n>e?1:0}function Hr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new J(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Fe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new Fe(0,0))}static max(){return new se(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,r){t===void 0?t=0:t>e.length&&re(),r===void 0?r=e.length-t:r>e.length-t&&re(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return zs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof zs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Se extends zs{construct(e,t,r){return new Se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Se(t)}static emptyPath(){return new Se([])}}const TE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends zs{construct(e,t,r){return new Ge(e,t,r)}static isValidIdentifier(e){return TE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new J(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(t)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Se.fromString(e))}static fromName(e){return new Z(Se.fromString(e).popFirst(5))}static empty(){return new Z(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Se(e.slice()))}}function IE(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Fe(t+1,0):new Fe(t,r));return new Vn(s,Z.empty(),e)}function wE(n){return new Vn(n.readTime,n.key,-1)}class Vn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Vn(se.min(),Z.empty(),-1)}static max(){return new Vn(se.max(),Z.empty(),-1)}}function AE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:de(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==bE)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function SE(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ts(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Oo.oe=-1;function No(n){return n==null}function io(n){return n===0&&1/n==-1/0}function CE(n){return typeof n=="number"&&Number.isInteger(n)&&!io(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=dh(e)),e=DE(n.get(t),e);return dh(e)}function DE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function dh(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Kf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||Ke.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Di(this.root,e,this.comparator,!1)}getReverseIterator(){return new Di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Di(this.root,e,this.comparator,!0)}}class Di{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ke.RED,this.left=s??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ke(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ph(this.data.getIterator())}getIteratorFrom(e){return new ph(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new je(this.comparator);return t.data=e,t}}class ph{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Et([])}unionWith(e){let t=new je(Ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gf("Invalid base64 string: "+i):i}}(e);return new Qe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const kE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(n){if(Te(!!n),typeof n=="string"){let e=0;const t=kE.exec(n);if(Te(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(n.seconds),nanos:ke(n.nanos)}}function ke(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Nn(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function xo(n){const e=n.mapValue.fields.__previous_value__;return Ql(e)?xo(e):e}function Ws(n){const e=On(n.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t,r,s,i,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Ks{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ks("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ks&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ql(n)?4:NE(n)?9007199254740991:OE(n)?10:11:re()}function qt(n,e){if(n===e)return!0;const t=xn(n);if(t!==xn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ws(n).isEqual(Ws(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=On(s.timestampValue),l=On(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Nn(s.bytesValue).isEqual(Nn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ke(s.doubleValue),l=ke(i.doubleValue);return a===l?io(a)===io(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Hr(n.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fh(a)!==fh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!qt(a[c],l[c])))return!1;return!0}(n,e);default:return re()}}function Gs(n,e){return(n.values||[]).find(t=>qt(t,e))!==void 0}function zr(n,e){if(n===e)return 0;const t=xn(n),r=xn(e);if(t!==r)return de(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return de(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ke(i.integerValue||i.doubleValue),c=ke(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return gh(n.timestampValue,e.timestampValue);case 4:return gh(Ws(n),Ws(e));case 5:return de(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Nn(i),c=Nn(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=de(l[h],c[h]);if(f!==0)return f}return de(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=de(ke(i.latitude),ke(a.latitude));return l!==0?l:de(ke(i.longitude),ke(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return mh(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const p=i.fields||{},v=a.fields||{},b=(l=p.value)===null||l===void 0?void 0:l.arrayValue,D=(c=v.value)===null||c===void 0?void 0:c.arrayValue,N=de(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((f=D==null?void 0:D.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:mh(b,D)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ki.mapValue&&a===ki.mapValue)return 0;if(i===ki.mapValue)return 1;if(a===ki.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const v=de(c[p],f[p]);if(v!==0)return v;const b=zr(l[c[p]],h[f[p]]);if(b!==0)return b}return de(c.length,f.length)}(n.mapValue,e.mapValue);default:throw re()}}function gh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return de(n,e);const t=On(n),r=On(e),s=de(t.seconds,r.seconds);return s!==0?s:de(t.nanos,r.nanos)}function mh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=zr(t[s],r[s]);if(i)return i}return de(t.length,r.length)}function Wr(n){return ol(n)}function ol(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=On(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Nn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ol(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ol(t.fields[a])}`;return s+"}"}(n.mapValue):re()}function Bi(n){switch(xn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xo(n);return e?16+Bi(e):16;case 5:return 2*n.stringValue.length;case 6:return Nn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Bi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Bn(r.fields,(i,a)=>{s+=i.length+Bi(a)}),s}(n.mapValue);default:throw re()}}function al(n){return!!n&&"integerValue"in n}function Jl(n){return!!n&&"arrayValue"in n}function _h(n){return!!n&&"nullValue"in n}function yh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ji(n){return!!n&&"mapValue"in n}function OE(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ns(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ns(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ns(n.arrayValue.values[t]);return e}return Object.assign({},n)}function NE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ji(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ns(t)}setAll(e){let t=Ge.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Ns(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ji(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ji(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Bn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(Ns(this.value))}}function Qf(n){const e=[];return Bn(n.fields,(t,r)=>{const s=new Ge([t]);if(ji(r)){const i=Qf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new st(e,0,se.min(),se.min(),se.min(),pt.empty(),0)}static newFoundDocument(e,t,r,s){return new st(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new st(e,2,t,se.min(),se.min(),pt.empty(),0)}static newUnknownDocument(e,t){return new st(e,3,t,se.min(),se.min(),pt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t){this.position=e,this.inclusive=t}}function vh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=zr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Eh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t="asc"){this.field=e,this.dir=t}}function xE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{}class Le extends Jf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new LE(e,t,r):t==="array-contains"?new BE(e,r):t==="in"?new jE(e,r):t==="not-in"?new $E(e,r):t==="array-contains-any"?new qE(e,r):new Le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new FE(e,r):new UE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(zr(t,this.value)):t!==null&&xn(this.value)===xn(t)&&this.matchesComparison(zr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends Jf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ht(e,t)}matches(e){return Yf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yf(n){return n.op==="and"}function Xf(n){return ME(n)&&Yf(n)}function ME(n){for(const e of n.filters)if(e instanceof Ht)return!1;return!0}function ll(n){if(n instanceof Le)return n.field.canonicalString()+n.op.toString()+Wr(n.value);if(Xf(n))return n.filters.map(e=>ll(e)).join(",");{const e=n.filters.map(t=>ll(t)).join(",");return`${n.op}(${e})`}}function Zf(n,e){return n instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&qt(r.value,s.value)}(n,e):n instanceof Ht?function(r,s){return s instanceof Ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Zf(a,s.filters[l]),!0):!1}(n,e):void re()}function ep(n){return n instanceof Le?function(t){return`${t.field.canonicalString()} ${t.op} ${Wr(t.value)}`}(n):n instanceof Ht?function(t){return t.op.toString()+" {"+t.getFilters().map(ep).join(" ,")+"}"}(n):"Filter"}class LE extends Le{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class FE extends Le{constructor(e,t){super(e,"in",t),this.keys=tp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class UE extends Le{constructor(e,t){super(e,"not-in",t),this.keys=tp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Z.fromName(r.referenceValue))}class BE extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jl(t)&&Gs(t.arrayValue,this.value)}}class jE extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gs(this.value.arrayValue,t)}}class $E extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Gs(this.value.arrayValue,t)}}class qE extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Gs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Th(n,e=null,t=[],r=[],s=null,i=null,a=null){return new HE(n,e,t,r,s,i,a)}function Yl(n){const e=oe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ll(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),No(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Wr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Wr(r)).join(",")),e.ue=t}return e.ue}function Xl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!xE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Zf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Eh(n.startAt,e.startAt)&&Eh(n.endAt,e.endAt)}function cl(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zE(n,e,t,r,s,i,a,l){return new Mo(n,e,t,r,s,i,a,l)}function Zl(n){return new Mo(n)}function Ih(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function WE(n){return n.collectionGroup!==null}function xs(n){const e=oe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new je(Ge.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ao(i,r))}),t.has(Ge.keyField().canonicalString())||e.ce.push(new ao(Ge.keyField(),r))}return e.ce}function Ft(n){const e=oe(n);return e.le||(e.le=KE(e,xs(n))),e.le}function KE(n,e){if(n.limitType==="F")return Th(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ao(s.field,i)});const t=n.endAt?new oo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new oo(n.startAt.position,n.startAt.inclusive):null;return Th(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ul(n,e,t){return new Mo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Lo(n,e){return Xl(Ft(n),Ft(e))&&n.limitType===e.limitType}function np(n){return`${Yl(Ft(n))}|lt:${n.limitType}`}function Sr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>ep(s)).join(", ")}]`),No(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Wr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Wr(s)).join(",")),`Target(${r})`}(Ft(n))}; limitType=${n.limitType})`}function Fo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=vh(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,xs(r),s)||r.endAt&&!function(a,l,c){const h=vh(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,xs(r),s))}(n,e)}function GE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rp(n){return(e,t)=>{let r=!1;for(const s of xs(n)){const i=QE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function QE(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?zr(c,h):re()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Kf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=new Pe(Z.comparator);function on(){return JE}const sp=new Pe(Z.comparator);function bs(...n){let e=sp;for(const t of n)e=e.insert(t.key,t);return e}function ip(n){let e=sp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function tr(){return Ms()}function op(){return Ms()}function Ms(){return new fr(n=>n.toString(),(n,e)=>n.isEqual(e))}const YE=new Pe(Z.comparator),XE=new je(Z.comparator);function ce(...n){let e=XE;for(const t of n)e=e.add(t);return e}const ZE=new je(de);function eT(){return ZE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:io(e)?"-0":e}}function ap(n){return{integerValue:""+n}}function tT(n,e){return CE(e)?ap(e):ec(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this._=void 0}}function nT(n,e,t){return n instanceof lo?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ql(i)&&(i=xo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Qs?cp(n,e):n instanceof Js?up(n,e):function(s,i){const a=lp(s,i),l=wh(a)+wh(s.Pe);return al(a)&&al(s.Pe)?ap(l):ec(s.serializer,l)}(n,e)}function rT(n,e,t){return n instanceof Qs?cp(n,e):n instanceof Js?up(n,e):t}function lp(n,e){return n instanceof co?function(r){return al(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class lo extends Uo{}class Qs extends Uo{constructor(e){super(),this.elements=e}}function cp(n,e){const t=hp(e);for(const r of n.elements)t.some(s=>qt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Js extends Uo{constructor(e){super(),this.elements=e}}function up(n,e){let t=hp(e);for(const r of n.elements)t=t.filter(s=>!qt(s,r));return{arrayValue:{values:t}}}class co extends Uo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function wh(n){return ke(n.integerValue||n.doubleValue)}function hp(n){return Jl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function sT(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Qs&&s instanceof Qs||r instanceof Js&&s instanceof Js?Hr(r.elements,s.elements,qt):r instanceof co&&s instanceof co?qt(r.Pe,s.Pe):r instanceof lo&&s instanceof lo}(n.transform,e.transform)}class iT{constructor(e,t){this.version=e,this.transformResults=t}}class kt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $i(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bo{}function dp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new tc(n.key,kt.none()):new ri(n.key,n.data,kt.none());{const t=n.data,r=pt.empty();let s=new je(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new jn(n.key,r,new Et(s.toArray()),kt.none())}}function oT(n,e,t){n instanceof ri?function(s,i,a){const l=s.value.clone(),c=bh(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof jn?function(s,i,a){if(!$i(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=bh(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(fp(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ls(n,e,t,r){return n instanceof ri?function(i,a,l,c){if(!$i(i.precondition,a))return l;const h=i.value.clone(),f=Rh(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof jn?function(i,a,l,c){if(!$i(i.precondition,a))return l;const h=Rh(i.fieldTransforms,c,a),f=a.data;return f.setAll(fp(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return $i(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function aT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=lp(r.transform,s||null);i!=null&&(t===null&&(t=pt.empty()),t.set(r.field,i))}return t||null}function Ah(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hr(r,s,(i,a)=>sT(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ri extends Bo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jn extends Bo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function bh(n,e,t){const r=new Map;Te(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,rT(a,l,t[s]))}return r}function Rh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,nT(i,a,e))}return r}class tc extends Bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lT extends Bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&oT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ls(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ls(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=op();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=dp(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,(t,r)=>Ah(t,r))&&Hr(this.baseMutations,e.baseMutations,(t,r)=>Ah(t,r))}}class nc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Te(e.mutations.length===r.length);let s=function(){return YE}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new nc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,he;function dT(n){switch(n){default:return re();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function pp(n){if(n===void 0)return sn("GRPC error has no .code"),x.UNKNOWN;switch(n){case Ve.OK:return x.OK;case Ve.CANCELLED:return x.CANCELLED;case Ve.UNKNOWN:return x.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return x.INTERNAL;case Ve.UNAVAILABLE:return x.UNAVAILABLE;case Ve.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ve.NOT_FOUND:return x.NOT_FOUND;case Ve.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ve.ABORTED:return x.ABORTED;case Ve.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ve.DATA_LOSS:return x.DATA_LOSS;default:return re()}}(he=Ve||(Ve={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=new ir([4294967295,4294967295],0);function Sh(n){const e=fT().encode(n),t=new Uf;return t.update(e),new Uint8Array(t.digest())}function Ch(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ir([t,r],0),new ir([s,i],0)]}class rc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Rs(`Invalid padding: ${t}`);if(r<0)throw new Rs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Rs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ir.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(ir.fromNumber(r)));return s.compare(pT)===1&&(s=new ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Sh(e),[r,s]=Ch(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new rc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Sh(e),[r,s]=Ch(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Rs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,si.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new jo(se.min(),s,new Pe(de),on(),ce())}}class si{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new si(r,t,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class gp{constructor(e,t){this.targetId=e,this.me=t}}class mp{constructor(e,t,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ph{constructor(){this.fe=0,this.ge=kh(),this.pe=Qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ce(),t=ce(),r=ce();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:re()}}),new si(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=kh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gT{constructor(e){this.Le=e,this.Be=new Map,this.ke=on(),this.qe=Dh(),this.Qe=new Pe(de)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(cl(i))if(r===0){const a=new Z(i.path);this.Ue(t,a,st.newNoDocument(a,se.min()))}else Te(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Nn(r).toUint8Array()}catch(c){if(c instanceof Gf)return qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new rc(a,s,i)}catch(c){return qr(c instanceof Rs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&cl(l.target)){const c=new Z(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,st.newNoDocument(c,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=ce();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new jo(e,t,this.Qe,this.ke,r);return this.ke=on(),this.qe=Dh(),this.Qe=new Pe(de),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Ph,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new je(de),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ph),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Dh(){return new Pe(Z.comparator)}function kh(){return new Pe(Z.comparator)}const mT={asc:"ASCENDING",desc:"DESCENDING"},_T={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yT={and:"AND",or:"OR"};class vT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hl(n,e){return n.useProto3Json||No(e)?e:{value:e}}function uo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _p(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ET(n,e){return uo(n,e.toTimestamp())}function Ut(n){return Te(!!n),se.fromTimestamp(function(t){const r=On(t);return new Fe(r.seconds,r.nanos)}(n))}function sc(n,e){return dl(n,e).canonicalString()}function dl(n,e){const t=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function yp(n){const e=Se.fromString(n);return Te(wp(e)),e}function fl(n,e){return sc(n.databaseId,e.path)}function Na(n,e){const t=yp(e);if(t.get(1)!==n.databaseId.projectId)throw new J(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(Ep(t))}function vp(n,e){return sc(n.databaseId,e)}function TT(n){const e=yp(n);return e.length===4?Se.emptyPath():Ep(e)}function pl(n){return new Se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ep(n){return Te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Vh(n,e,t){return{name:fl(n,e),fields:t.value.mapValue.fields}}function IT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Te(f===void 0||typeof f=="string"),Qe.fromBase64String(f||"")):(Te(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Qe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?x.UNKNOWN:pp(h.code);return new J(f,h.message||"")}(a);t=new mp(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Na(n,r.document.name),i=Ut(r.document.updateTime),a=r.document.createTime?Ut(r.document.createTime):se.min(),l=new pt({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new qi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Na(n,r.document),i=r.readTime?Ut(r.readTime):se.min(),a=st.newNoDocument(s,i),l=r.removedTargetIds||[];t=new qi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Na(n,r.document),i=r.removedTargetIds||[];t=new qi([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new hT(s,i),l=r.targetId;t=new gp(l,a)}}return t}function wT(n,e){let t;if(e instanceof ri)t={update:Vh(n,e.key,e.value)};else if(e instanceof tc)t={delete:fl(n,e.key)};else if(e instanceof jn)t={update:Vh(n,e.key,e.data),updateMask:VT(e.fieldMask)};else{if(!(e instanceof lT))return re();t={verify:fl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof lo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Js)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof co)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw re()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ET(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(n,e.precondition)),t}function AT(n,e){return n&&n.length>0?(Te(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Ut(s.updateTime):Ut(i);return a.isEqual(se.min())&&(a=Ut(i)),new iT(a,s.transformResults||[])}(t,e))):[]}function bT(n,e){return{documents:[vp(n,e.path)]}}function RT(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vp(n,s);const i=function(h){if(h.length!==0)return Ip(Ht.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:Cr(v.field),direction:PT(v.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=hl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function ST(n){let e=TT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Te(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const v=Tp(p);return v instanceof Ht&&Xf(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(v=>function(D){return new ao(Pr(D.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,No(v)?null:v}(t.limit));let c=null;t.startAt&&(c=function(p){const v=!!p.before,b=p.values||[];return new oo(b,v)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const v=!p.before,b=p.values||[];return new oo(b,v)}(t.endAt)),zE(e,s,a,i,l,"F",c,h)}function CT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Tp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Pr(t.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Pr(t.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Pr(t.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Pr(t.unaryFilter.field);return Le.create(a,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(n):n.fieldFilter!==void 0?function(t){return Le.create(Pr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ht.create(t.compositeFilter.filters.map(r=>Tp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re()}}(t.compositeFilter.op))}(n):re()}function PT(n){return mT[n]}function DT(n){return _T[n]}function kT(n){return yT[n]}function Cr(n){return{fieldPath:n.canonicalString()}}function Pr(n){return Ge.fromServerFormat(n.fieldPath)}function Ip(n){return n instanceof Le?function(t){if(t.op==="=="){if(yh(t.value))return{unaryFilter:{field:Cr(t.field),op:"IS_NAN"}};if(_h(t.value))return{unaryFilter:{field:Cr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(yh(t.value))return{unaryFilter:{field:Cr(t.field),op:"IS_NOT_NAN"}};if(_h(t.value))return{unaryFilter:{field:Cr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cr(t.field),op:DT(t.op),value:t.value}}}(n):n instanceof Ht?function(t){const r=t.getFilters().map(s=>Ip(s));return r.length===1?r[0]:{compositeFilter:{op:kT(t.op),filters:r}}}(n):re()}function VT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function wp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t,r,s,i=se.min(),a=se.min(),l=Qe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new In(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.ct=e}}function NT(n){const e=ST({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ul(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(){this.un=new MT}addToCollectionParentIndex(e,t){return this.un.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Vn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Vn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class MT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new je(Se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new je(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ft{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ft(e,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.DEFAULT_COLLECTION_PERCENTILE=10,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ft.DEFAULT=new ft(41943040,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ft.DISABLED=new ft(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Kr(0)}static kn(){return new Kr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh([n,e],[t,r]){const s=de(n,t);return s===0?de(e,r):s}class LT{constructor(e){this.Un=e,this.buffer=new je(Nh),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Nh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class FT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ts(t)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await es(t)}await this.Hn(3e5)})}}class UT{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Oo.oe);const r=new LT(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Oh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Oh):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Rr()<=le.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function BT(n,e){return new UT(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.changes=new fr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ls(r.mutation,s,Et.empty(),Fe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ce()){const s=tr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=bs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=tr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ce()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=on();const a=Ms(),l=function(){return Ms()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof jn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ls(f.mutation,h,f.mutation.getFieldMask(),Fe.now())):a.set(h.key,Et.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new $T(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Ms();let s=new Pe((a,l)=>a-l),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Et.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||ce()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=op();f.forEach(v=>{if(!i.has(v)){const b=dp(t.get(v),r.get(v));b!==null&&p.set(v,b),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):WE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(tr());let l=-1,c=i;return a.next(h=>k.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{c=c.insert(f,v)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ce())).next(f=>({batchId:l,changes:ip(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let s=bs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=bs();return this.indexManager.getCollectionParents(e,i).next(l=>k.forEach(l,c=>{const h=function(p,v){return new Mo(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,v)=>{a=a.insert(p,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,st.newInvalidDocument(f)))});let l=bs();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Ls(f.mutation,h,Et.empty(),Fe.now()),Fo(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return k.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ut(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:NT(s.bundledQuery),readTime:Ut(s.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.overlays=new Pe(Z.comparator),this.Ir=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=tr();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=tr(),i=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Pe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=tr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=tr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return k.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new uT(t,r));let i=this.Ir.get(t);i===void 0&&(i=ce(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.Tr=new je(Be.Er),this.dr=new je(Be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Be(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Be(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new Z(new Se([])),r=new Be(t,e),s=new Be(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Z(new Se([])),r=new Be(t,e),s=new Be(t,e+1);let i=ce();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Be(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Z.comparator(e.key,t.key)||de(e.wr,t.wr)}static Ar(e,t){return de(e.wr,t.wr)||Z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new je(Be.Er)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new cT(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new Be(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Be(t,0),s=new Be(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new je(de);return t.forEach(s=>{const i=new Be(s,0),a=new Be(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new Be(new Z(i),0);let l=new je(de);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),k.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Te(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return k.forEach(t.mutations,s=>{const i=new Be(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Be(t,0),s=this.br.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.Mr=e,this.docs=function(){return new Pe(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():st.newInvalidDocument(t))}getEntries(e,t){let r=on();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=on();const a=t.path,l=new Z(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||AE(wE(f),r)<=0||(s.has(f.key)||Fo(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){re()}Or(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new QT(this)}getSize(e){return k.resolve(this.size)}}class QT extends jT{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.persistence=e,this.Nr=new fr(t=>Yl(t),Xl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ic,this.targetCount=0,this.kr=Kr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),k.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Kr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Kn(t),k.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Oo(0),this.Kr=!1,this.Kr=!0,this.$r=new WT,this.referenceDelegate=e(this),this.Ur=new JT(this),this.indexManager=new xT,this.remoteDocumentCache=function(s){return new GT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new OT(t),this.Gr=new HT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new KT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);const s=new YT(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return k.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class YT extends RE{constructor(e){super(),this.currentSequenceNumber=e}}class oc{constructor(e){this.persistence=e,this.Jr=new ic,this.Yr=null}static Zr(e){return new oc(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),k.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,r=>{const s=Z.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return k.or([()=>k.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}class ho{constructor(e,t){this.persistence=e,this.ti=new fr(r=>PE(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=BT(this,t)}static Zr(e,t){return new ho(e,t)}zr(){}jr(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Yn(e){const t=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}Zn(e,t){return k.forEach(this.ti,(r,s)=>this.nr(e,r,s).next(i=>i?k.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Or(e,a=>this.nr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ti.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ti.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.ti.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.ti.set(t,e.currentSequenceNumber),k.resolve()}Wr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Bi(e.data.value)),t}nr(e,t,r){return k.or([()=>this.persistence.Hr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ti.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ce(),s=ce();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ac(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Jy()?8:SE(it())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new XT;return this.Xi(e,t,a).next(l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Rr()<=le.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Sr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(Rr()<=le.DEBUG&&z("QueryEngine","Query:",Sr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Rr()<=le.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Sr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ft(t))):k.resolve())}Yi(e,t){if(Ih(t))return k.resolve(null);let r=Ft(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ul(t,null,"F"),r=Ft(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ce(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(t,l);return this.ns(t,h,a,c.readTime)?this.Yi(e,ul(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,r,s){return Ih(t)||s.isEqual(se.min())?k.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?k.resolve(null):(Rr()<=le.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Sr(t)),this.rs(e,a,t,IE(s,-1)).next(l=>l))})}ts(e,t){let r=new je(rp(e));return t.forEach((s,i)=>{Fo(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Rr()<=le.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Sr(t)),this.Ji.getDocumentsMatchingQuery(e,t,Vn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Pe(de),this._s=new fr(i=>Yl(i),Xl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function tI(n,e,t,r){return new eI(n,e,t,r)}async function bp(n,e){const t=oe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=ce();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function nI(n,e){const t=oe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,v=p.keys();let b=k.resolve();return v.forEach(D=>{b=b.next(()=>f.getEntry(c,D)).next(N=>{const V=h.docVersions.get(D);Te(V!==null),N.version.compareTo(V)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ce();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Rp(n){const e=oe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function rI(n,e){const t=oe(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((f,p)=>{const v=s.get(p);if(!v)return;l.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let b=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(Qe.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(p,b),function(N,V,H){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(v,b,f)&&l.push(t.Ur.updateTargetData(i,b))});let c=on(),h=ce();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(sI(i,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(se.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return k.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.os=s,i))}function sI(n,e,t){let r=ce(),s=ce();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=on();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function iI(n,e){const t=oe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oI(n,e){const t=oe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new In(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function gl(n,e,t){const r=oe(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ts(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function xh(n,e,t){const r=oe(n);let s=se.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=oe(c),v=p._s.get(f);return v!==void 0?k.resolve(p.os.get(v)):p.Ur.getTargetData(h,f)}(r,a,Ft(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:ce())).next(l=>(aI(r,GE(e),l),{documents:l,Ts:i})))}function aI(n,e,t){let r=n.us.get(e)||se.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Mh{constructor(){this.activeTargetIds=eT()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lI{constructor(){this.so=new Mh,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Mh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi=null;function xa(){return Vi===null?Vi=function(){return 268435456+Math.round(2147483648*Math.random())}():Vi++,"0x"+Vi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class dI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=xa(),c=this.xo(t,r.toUriEncodedString());z("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,c,h,s).then(f=>(z("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw qr("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=uI[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=xa();return new Promise((a,l)=>{const c=new Bf;c.setWithCredentials(!0),c.listenOnce(jf.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ui.NO_ERROR:const f=c.getResponseJson();z(et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Ui.TIMEOUT:z(et,`RPC '${e}' ${i} timed out`),l(new J(x.DEADLINE_EXCEEDED,"Request time out"));break;case Ui.HTTP_ERROR:const p=c.getStatus();if(z(et,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let v=c.getResponseJson();Array.isArray(v)&&(v=v[0]);const b=v==null?void 0:v.error;if(b&&b.status&&b.message){const D=function(V){const H=V.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(H)>=0?H:x.UNKNOWN}(b.status);l(new J(D,b.message))}else l(new J(x.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new J(x.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{z(et,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);z(et,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=xa(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Hf(),l=qf(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");z(et,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);let v=!1,b=!1;const D=new hI({Io:V=>{b?z(et,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(v||(z(et,`Opening RPC '${e}' stream ${s} transport.`),p.open(),v=!0),z(et,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},To:()=>p.close()}),N=(V,H,Q)=>{V.listen(H,Y=>{try{Q(Y)}catch(W){setTimeout(()=>{throw W},0)}})};return N(p,As.EventType.OPEN,()=>{b||(z(et,`RPC '${e}' stream ${s} transport opened.`),D.yo())}),N(p,As.EventType.CLOSE,()=>{b||(b=!0,z(et,`RPC '${e}' stream ${s} transport closed`),D.So())}),N(p,As.EventType.ERROR,V=>{b||(b=!0,qr(et,`RPC '${e}' stream ${s} transport errored:`,V),D.So(new J(x.UNAVAILABLE,"The operation could not be completed")))}),N(p,As.EventType.MESSAGE,V=>{var H;if(!b){const Q=V.data[0];Te(!!Q);const Y=Q,W=Y.error||((H=Y[0])===null||H===void 0?void 0:H.error);if(W){z(et,`RPC '${e}' stream ${s} received error:`,W);const fe=W.status;let ye=function(E){const I=Ve[E];if(I!==void 0)return pp(I)}(fe),w=W.message;ye===void 0&&(ye=x.INTERNAL,w="Unknown error status: "+fe+" with message "+W.message),b=!0,D.So(new J(ye,w)),p.close()}else z(et,`RPC '${e}' stream ${s} received:`,Q),D.bo(Q)}}),N(l,$f.STAT_EVENT,V=>{V.stat===il.PROXY?z(et,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===il.NOPROXY&&z(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}function Ma(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(n){return new vT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Sp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(sn(t.toString()),sn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new J(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fI extends Cp{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=IT(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Ut(a.readTime):se.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=pl(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=cl(c)?{documents:bT(i,c)}:{query:RT(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=_p(i,a.resumeToken);const h=hl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){l.readTime=uo(i,a.snapshotVersion.toTimestamp());const h=hl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=CT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=pl(this.serializer),t.removeTarget=e,this.a_(t)}}class pI extends Cp{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Te(!!e.streamToken),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=AT(e.writeResults,e.commitTime),r=Ut(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=pl(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>wT(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new J(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,dl(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(x.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,dl(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J(x.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(sn(t),this.D_=!1):z("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{pr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=oe(c);h.L_.add(4),await ii(h),h.q_.set("Unknown"),h.L_.delete(4),await qo(h)}(this))})}),this.q_=new mI(r,s)}}async function qo(n){if(pr(n))for(const e of n.B_)await e(!0)}async function ii(n){for(const e of n.B_)await e(!1)}function Pp(n,e){const t=oe(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),hc(t)?uc(t):ns(t).r_()&&cc(t,e))}function lc(n,e){const t=oe(n),r=ns(t);t.N_.delete(e),r.r_()&&Dp(t,e),t.N_.size===0&&(r.r_()?r.o_():pr(t)&&t.q_.set("Unknown"))}function cc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ns(n).A_(e)}function Dp(n,e){n.Q_.xe(e),ns(n).R_(e)}function uc(n){n.Q_=new gT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ns(n).start(),n.q_.v_()}function hc(n){return pr(n)&&!ns(n).n_()&&n.N_.size>0}function pr(n){return oe(n).L_.size===0}function kp(n){n.Q_=void 0}async function yI(n){n.q_.set("Online")}async function vI(n){n.N_.forEach((e,t)=>{cc(n,e)})}async function EI(n,e){kp(n),hc(n)?(n.q_.M_(e),uc(n)):n.q_.set("Unknown")}async function TI(n,e,t){if(n.q_.set("Online"),e instanceof mp&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fo(n,r)}else if(e instanceof qi?n.Q_.Ke(e):e instanceof gp?n.Q_.He(e):n.Q_.We(e),!t.isEqual(se.min()))try{const r=await Rp(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(Qe.EMPTY_BYTE_STRING,f.snapshotVersion)),Dp(i,c);const p=new In(f.target,c,h,f.sequenceNumber);cc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await fo(n,r)}}async function fo(n,e,t){if(!ts(e))throw e;n.L_.add(1),await ii(n),n.q_.set("Offline"),t||(t=()=>Rp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await qo(n)})}function Vp(n,e){return e().catch(t=>fo(n,t,e))}async function Ho(n){const e=oe(n),t=Mn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;II(e);)try{const s=await iI(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,wI(e,s)}catch(s){await fo(e,s)}Op(e)&&Np(e)}function II(n){return pr(n)&&n.O_.length<10}function wI(n,e){n.O_.push(e);const t=Mn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Op(n){return pr(n)&&!Mn(n).n_()&&n.O_.length>0}function Np(n){Mn(n).start()}async function AI(n){Mn(n).p_()}async function bI(n){const e=Mn(n);for(const t of n.O_)e.m_(t.mutations)}async function RI(n,e,t){const r=n.O_.shift(),s=nc.from(r,e,t);await Vp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ho(n)}async function SI(n,e){e&&Mn(n).V_&&await async function(r,s){if(function(a){return dT(a)&&a!==x.ABORTED}(s.code)){const i=r.O_.shift();Mn(r).s_(),await Vp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ho(r)}}(n,e),Op(n)&&Np(n)}async function Fh(n,e){const t=oe(n);t.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=pr(t);t.L_.add(3),await ii(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await qo(t)}async function CI(n,e){const t=oe(n);e?(t.L_.delete(2),await qo(t)):e||(t.L_.add(2),await ii(t),t.q_.set("Unknown"))}function ns(n){return n.K_||(n.K_=function(t,r,s){const i=oe(t);return i.w_(),new fI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:yI.bind(null,n),Ro:vI.bind(null,n),mo:EI.bind(null,n),d_:TI.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),hc(n)?uc(n):n.q_.set("Unknown")):(await n.K_.stop(),kp(n))})),n.K_}function Mn(n){return n.U_||(n.U_=function(t,r,s){const i=oe(t);return i.w_(),new pI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:AI.bind(null,n),mo:SI.bind(null,n),f_:bI.bind(null,n),g_:RI.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ho(n)):(await n.U_.stop(),n.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new dc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fc(n,e){if(sn("AsyncQueue",`${e}: ${n}`),ts(n))return new J(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=bs(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Mr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Mr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.W_=new Pe(Z.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Gr{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Gr(e,t,Mr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class DI{constructor(){this.queries=Bh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=oe(t),i=s.queries;s.queries=Bh(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new J(x.ABORTED,"Firestore shutting down"))}}function Bh(){return new fr(n=>np(n),Lo)}async function kI(n,e){const t=oe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new PI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=fc(a,`Initialization of query '${Sr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&pc(t)}async function VI(n,e){const t=oe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function OI(n,e){const t=oe(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&pc(t)}function NI(n,e,t){const r=oe(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function pc(n){n.Y_.forEach(e=>{e.next()})}var ml,jh;(jh=ml||(ml={})).ea="default",jh.Cache="cache";class xI{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ml.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this.key=e}}class Mp{constructor(e){this.key=e}}class MI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ce(),this.mutatedKeys=ce(),this.Aa=rp(e),this.Ra=new Mr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Uh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const v=s.get(f),b=Fo(this.query,p)?p:null,D=!!v&&this.mutatedKeys.has(v.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let V=!1;v&&b?v.data.isEqual(b.data)?D!==N&&(r.track({type:3,doc:b}),V=!0):this.ga(v,b)||(r.track({type:2,doc:b}),V=!0,(c&&this.Aa(b,c)>0||h&&this.Aa(b,h)<0)&&(l=!0)):!v&&b?(r.track({type:0,doc:b}),V=!0):v&&!b&&(r.track({type:1,doc:v}),V=!0,(c||h)&&(l=!0)),V&&(b?(a=a.add(b),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,p)=>function(b,D){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return N(b)-N(D)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new Gr(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Uh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Mp(r))}),this.da.forEach(r=>{e.has(r)||t.push(new xp(r))}),t}ba(e){this.Ta=e.Ts,this.da=ce();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Gr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class LI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class FI{constructor(e){this.key=e,this.va=!1}}class UI{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new fr(l=>np(l),Lo),this.Ma=new Map,this.xa=new Set,this.Oa=new Pe(Z.comparator),this.Na=new Map,this.La=new ic,this.Ba={},this.ka=new Map,this.qa=Kr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function BI(n,e,t=!0){const r=$p(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Lp(r,e,t,!0),s}async function jI(n,e){const t=$p(n);await Lp(t,e,!0,!1)}async function Lp(n,e,t,r){const s=await oI(n.localStore,Ft(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await $I(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Pp(n.remoteStore,s),l}async function $I(n,e,t,r,s){n.Ka=(p,v,b)=>async function(N,V,H,Q){let Y=V.view.ma(H);Y.ns&&(Y=await xh(N.localStore,V.query,!1).then(({documents:w})=>V.view.ma(w,Y)));const W=Q&&Q.targetChanges.get(V.targetId),fe=Q&&Q.targetMismatches.get(V.targetId)!=null,ye=V.view.applyChanges(Y,N.isPrimaryClient,W,fe);return qh(N,V.targetId,ye.wa),ye.snapshot}(n,p,v,b);const i=await xh(n.localStore,e,!0),a=new MI(e,i.Ts),l=a.ma(i.documents),c=si.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);qh(n,t,h.wa);const f=new LI(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function qI(n,e,t){const r=oe(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Lo(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await gl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&lc(r.remoteStore,s.targetId),_l(r,s.targetId)}).catch(es)):(_l(r,s.targetId),await gl(r.localStore,s.targetId,!0))}async function HI(n,e){const t=oe(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),lc(t.remoteStore,r.targetId))}async function zI(n,e,t){const r=XI(n);try{const s=await function(a,l){const c=oe(a),h=Fe.now(),f=l.reduce((b,D)=>b.add(D.key),ce());let p,v;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let D=on(),N=ce();return c.cs.getEntries(b,f).next(V=>{D=V,D.forEach((H,Q)=>{Q.isValidDocument()||(N=N.add(H))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,D)).next(V=>{p=V;const H=[];for(const Q of l){const Y=aT(Q,p.get(Q.key).overlayedDocument);Y!=null&&H.push(new jn(Q.key,Y,Qf(Y.value.mapValue),kt.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,H,l)}).next(V=>{v=V;const H=V.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(b,V.batchId,H)})}).then(()=>({batchId:v.batchId,changes:ip(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new Pe(de)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await oi(r,s.changes),await Ho(r.remoteStore)}catch(s){const i=fc(s,"Failed to persist write");t.reject(i)}}async function Fp(n,e){const t=oe(n);try{const r=await rI(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Te(a.va):s.removedDocuments.size>0&&(Te(a.va),a.va=!1))}),await oi(t,r,e)}catch(r){await es(r)}}function $h(n,e,t){const r=oe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=oe(a);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const v of p.j_)v.Z_(l)&&(h=!0)}),h&&pc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WI(n,e,t){const r=oe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Pe(Z.comparator);a=a.insert(i,st.newNoDocument(i,se.min()));const l=ce().add(i),c=new jo(se.min(),new Map,new Pe(de),a,l);await Fp(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),gc(r)}else await gl(r.localStore,e,!1).then(()=>_l(r,e,t)).catch(es)}async function KI(n,e){const t=oe(n),r=e.batch.batchId;try{const s=await nI(t.localStore,e);Bp(t,r,null),Up(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await oi(t,s)}catch(s){await es(s)}}async function GI(n,e,t){const r=oe(n);try{const s=await function(a,l){const c=oe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Te(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Bp(r,e,t),Up(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await oi(r,s)}catch(s){await es(s)}}function Up(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Bp(n,e,t){const r=oe(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function _l(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||jp(n,r)})}function jp(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(lc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),gc(n))}function qh(n,e,t){for(const r of t)r instanceof xp?(n.La.addReference(r.key,e),QI(n,r)):r instanceof Mp?(z("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||jp(n,r.key)):re()}function QI(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(z("SyncEngine","New document in limbo: "+t),n.xa.add(r),gc(n))}function gc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new Z(Se.fromString(e)),r=n.qa.next();n.Na.set(r,new FI(t)),n.Oa=n.Oa.insert(t,r),Pp(n.remoteStore,new In(Ft(Zl(t.path)),r,"TargetPurposeLimboResolution",Oo.oe))}}async function oi(n,e,t){const r=oe(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=ac.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const f=oe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>k.forEach(h,v=>k.forEach(v.$i,b=>f.persistence.referenceDelegate.addReference(p,v.targetId,b)).next(()=>k.forEach(v.Ui,b=>f.persistence.referenceDelegate.removeReference(p,v.targetId,b)))))}catch(p){if(!ts(p))throw p;z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const v=p.targetId;if(!p.fromCache){const b=f.os.get(v),D=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(D);f.os=f.os.insert(v,N)}}}(r.localStore,i))}async function JI(n,e){const t=oe(n);if(!t.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await bp(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new J(x.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oi(t,r.hs)}}function YI(n,e){const t=oe(n),r=t.Na.get(e);if(r&&r.va)return ce().add(r.key);{let s=ce();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function $p(n){const e=oe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WI.bind(null,e),e.Ca.d_=OI.bind(null,e.eventManager),e.Ca.$a=NI.bind(null,e.eventManager),e}function XI(n){const e=oe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GI.bind(null,e),e}class po{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$o(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return tI(this.persistence,new ZT,e.initialUser,this.serializer)}Ga(e){return new Ap(oc.Zr,this.serializer)}Wa(e){return new lI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}po.provider={build:()=>new po};class ZI extends po{constructor(e){super(),this.cacheSizeBytes=e}ja(e,t){Te(this.persistence.referenceDelegate instanceof ho);const r=this.persistence.referenceDelegate.garbageCollector;return new FT(r,e.asyncQueue,t)}Ga(e){const t=this.cacheSizeBytes!==void 0?ft.withCacheSize(this.cacheSizeBytes):ft.DEFAULT;return new Ap(r=>ho.Zr(r,t),this.serializer)}}class yl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$h(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JI.bind(null,this.syncEngine),await CI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DI}()}createDatastore(e){const t=$o(e.databaseInfo.databaseId),r=function(i){return new dI(i)}(e.databaseInfo);return function(i,a,l,c){return new gI(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new _I(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>$h(this.syncEngine,t,0),function(){return Lh.D()?new Lh:new cI}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,f){const p=new UI(s,i,a,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=oe(s);z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ii(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}yl.provider={build:()=>new yl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):sn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=Wf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{z("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(z("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=fc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function La(n,e){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await bp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Hh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nw(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Fh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Fh(e.remoteStore,s)),n._onlineComponents=e}async function nw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await La(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;qr("Error using user provided cache. Falling back to memory cache: "+t),await La(n,new po)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await La(n,new ZI(void 0));return n._offlineComponents}async function qp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Hh(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Hh(n,new yl))),n._onlineComponents}function rw(n){return qp(n).then(e=>e.syncEngine)}async function zh(n){const e=await qp(n),t=e.eventManager;return t.onListen=BI.bind(null,e.syncEngine),t.onUnlisten=qI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=HI.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(n,e,t){if(!t)throw new J(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function sw(n,e,t,r){if(e===!0&&r===!0)throw new J(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Kh(n){if(!Z.isDocumentKey(n))throw new J(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gh(n){if(Z.isDocumentKey(n))throw new J(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function mc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":re()}function Cn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mc(n);throw new J(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fE;switch(r.type){case"firstParty":return new _E(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Wh.get(t);r&&(z("ComponentProvider","Removing Datastore"),Wh.delete(t),r.terminate())}(this),Promise.resolve()}}function iw(n,e,t,r={}){var s;const i=(n=Cn(n,zo))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=tt.MOCK_USER;else{l=qy(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new J(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new tt(h)}n._authCredentials=new pE(new zf(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wo(this.firestore,e,this._query)}}class It{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class Pn extends Wo{constructor(e,t,r){super(e,t,Zl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new Z(e))}withConverter(e){return new Pn(this.firestore,e,this._path)}}function Wp(n,e,...t){if(n=qe(n),zp("collection","path",e),n instanceof zo){const r=Se.fromString(e,...t);return Gh(r),new Pn(n,null,r)}{if(!(n instanceof It||n instanceof Pn))throw new J(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return Gh(r),new Pn(n.firestore,null,r)}}function vl(n,e,...t){if(n=qe(n),arguments.length===1&&(e=Wf.newId()),zp("doc","path",e),n instanceof zo){const r=Se.fromString(e,...t);return Kh(r),new It(n,null,new Z(r))}{if(!(n instanceof It||n instanceof Pn))throw new J(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return Kh(r),new It(n.firestore,n instanceof Pn?n.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Sp(this,"async_queue_retry"),this.Vu=()=>{const r=Ma();r&&z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ma();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ma();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new or;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ts(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw sn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=dc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Yh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Qr extends zo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Jh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jh(e),this._firestoreClient=void 0,await e}}}function ow(n,e){const t=typeof n=="object"?n:Mf(),r=typeof n=="string"?n:"(default)",s=Kl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jy("firestore");i&&iw(s,...i)}return s}function Kp(n){if(n._terminated)throw new J(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||aw(n),n._firestoreClient}function aw(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,f){return new VE(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Hp(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new tw(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jr(Qe.fromBase64String(e))}catch(t){throw new J(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Jr(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=/^__.*__$/;class cw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new jn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ri(e,this.data,t,this.fieldTransforms)}}class Gp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new jn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Qp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Ec{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ec(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return go(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Qp(this.Cu)&&lw.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class uw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$o(e)}Qu(e,t,r,s=!1){return new Ec({Cu:e,methodName:t,qu:r,path:Ge.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jp(n){const e=n._freezeSettings(),t=$o(n._databaseId);return new uw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function hw(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Tc("Data must be an object, but it was:",a,r);const l=Yp(r,a);let c,h;if(i.merge)c=new Et(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const v=El(e,p,t);if(!a.contains(v))throw new J(x.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Zp(f,v)||f.push(v)}c=new Et(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new cw(new pt(l),c,h)}class Go extends _c{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Go}}function dw(n,e,t,r){const s=n.Qu(1,e,t);Tc("Data must be an object, but it was:",s,r);const i=[],a=pt.empty();Bn(r,(c,h)=>{const f=Ic(e,c,t);h=qe(h);const p=s.Nu(f);if(h instanceof Go)i.push(f);else{const v=Qo(h,p);v!=null&&(i.push(f),a.set(f,v))}});const l=new Et(i);return new Gp(a,l,s.fieldTransforms)}function fw(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[El(e,r,t)],c=[s];if(i.length%2!=0)throw new J(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push(El(e,i[v])),c.push(i[v+1]);const h=[],f=pt.empty();for(let v=l.length-1;v>=0;--v)if(!Zp(h,l[v])){const b=l[v];let D=c[v];D=qe(D);const N=a.Nu(b);if(D instanceof Go)h.push(b);else{const V=Qo(D,N);V!=null&&(h.push(b),f.set(b,V))}}const p=new Et(h);return new Gp(f,p,a.fieldTransforms)}function Qo(n,e){if(Xp(n=qe(n)))return Tc("Unsupported field value:",e,n),Yp(n,e);if(n instanceof _c)return function(r,s){if(!Qp(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Qo(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:uo(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uo(s.serializer,i)}}if(r instanceof yc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jr)return{bytesValue:_p(s.serializer,r._byteString)};if(r instanceof It){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof vc)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return ec(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${mc(r)}`)}(n,e)}function Yp(n,e){const t={};return Kf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(n,(r,s)=>{const i=Qo(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Xp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Fe||n instanceof yc||n instanceof Jr||n instanceof It||n instanceof _c||n instanceof vc)}function Tc(n,e,t){if(!Xp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=mc(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function El(n,e,t){if((e=qe(e))instanceof Ko)return e._internalPath;if(typeof e=="string")return Ic(n,e);throw go("Field path arguments must be of type string or ",n,!1,void 0,t)}const pw=new RegExp("[~\\*/\\[\\]]");function Ic(n,e,t){if(e.search(pw)>=0)throw go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ko(...e.split("."))._internalPath}catch{throw go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function go(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new J(x.INVALID_ARGUMENT,l+n+c)}function Zp(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gw extends eg{data(){return super.data()}}function tg(n,e){return typeof e=="string"?Ic(n,e):e instanceof Ko?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _w{convertValue(e,t="none"){switch(xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Nn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Bn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ke(a.doubleValue));return new vc(i)}convertGeoPoint(e){return new yc(ke(e.latitude),ke(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ws(e));default:return null}}convertTimestamp(e){const t=On(e);return new Fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Se.fromString(e);Te(wp(r));const s=new Ks(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||sn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ng extends eg{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(tg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Hi extends ng{data(e={}){return super.data(e)}}class vw{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ss(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Hi(this._firestore,this._userDataWriter,r.key,r,new Ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Hi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ss(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Hi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ss(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:Ew(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ew(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}class rg extends _w{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,t)}}function Tw(n,e,t,...r){n=Cn(n,It);const s=Cn(n.firestore,Qr),i=Jp(s);let a;return a=typeof(e=qe(e))=="string"||e instanceof Ko?fw(i,"updateDoc",n._key,e,t,r):dw(i,"updateDoc",n._key,e),wc(s,[a.toMutation(n._key,kt.exists(!0))])}function Iw(n){return wc(Cn(n.firestore,Qr),[new tc(n._key,kt.none())])}function ww(n,e){const t=Cn(n.firestore,Qr),r=vl(n),s=yw(n.converter,e);return wc(t,[hw(Jp(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,kt.exists(!1))]).then(()=>r)}function Aw(n,...e){var t,r,s;n=qe(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Yh(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Yh(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,f;if(n instanceof It)h=Cn(n.firestore,Qr),f=Zl(n._key.path),c={next:p=>{e[a]&&e[a](bw(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=Cn(n,Wo);h=Cn(p.firestore,Qr),f=p._query;const v=new rg(h);c={next:b=>{e[a]&&e[a](new vw(h,v,p,b))},error:e[a+1],complete:e[a+2]},mw(n._query)}return function(v,b,D,N){const V=new ew(N),H=new xI(b,V,D);return v.asyncQueue.enqueueAndForget(async()=>kI(await zh(v),H)),()=>{V.Za(),v.asyncQueue.enqueueAndForget(async()=>VI(await zh(v),H))}}(Kp(h),f,l,c)}function wc(n,e){return function(r,s){const i=new or;return r.asyncQueue.enqueueAndForget(async()=>zI(await rw(r),s,i)),i.promise}(Kp(n),e)}function bw(n,e,t){const r=t.docs.get(e._key),s=new rg(n);return new ng(n,s,e._key,r,new Ss(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Zr=s})(Xr),$r(new cr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Qr(new gE(r.getProvider("auth-internal")),new vE(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ks(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Sn(hh,"4.7.4",e),Sn(hh,"4.7.4","esm2017")})();function Ac(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function sg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rw=sg,ig=new ti("auth","Firebase",sg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new zl("@firebase/auth");function Sw(n,...e){mo.logLevel<=le.WARN&&mo.warn(`Auth (${Xr}): ${n}`,...e)}function zi(n,...e){mo.logLevel<=le.ERROR&&mo.error(`Auth (${Xr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,...e){throw bc(n,...e)}function Bt(n,...e){return bc(n,...e)}function og(n,e,t){const r=Object.assign(Object.assign({},Rw()),{[e]:t});return new ti("auth","Firebase",r).create(e,{appName:n.name})}function Dn(n){return og(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ig.create(n,...e)}function ne(n,e,...t){if(!n)throw bc(e,...t)}function en(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zi(e),new Error(e)}function an(n,e){n||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Cw(){return Xh()==="http:"||Xh()==="https:"}function Xh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cw()||Ky()||"connection"in navigator)?navigator.onLine:!0}function Dw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t){this.shortDelay=e,this.longDelay=t,an(t>e,"Short delay should be less than long delay!"),this.isMobile=Hy()||Gy()}get(){return Pw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n,e){an(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=new ai(3e4,6e4);function gr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function $n(n,e,t,r,s={}){return lg(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=ni(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return Wy()||(h.referrerPolicy="no-referrer"),ag.fetch()(cg(n,n.config.apiHost,t,l),h)})}async function lg(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},kw),e);try{const s=new Nw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Oi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Oi(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Oi(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw og(n,f,h);Vt(n,f)}}catch(s){if(s instanceof cn)throw s;Vt(n,"network-request-failed",{message:String(s)})}}async function Jo(n,e,t,r,s={}){const i=await $n(n,e,t,r,s);return"mfaPendingCredential"in i&&Vt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function cg(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Rc(n.config,s):`${n.config.apiScheme}://${s}`}function Ow(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),Vw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Bt(n,e,r);return s.customData._tokenResponse=t,s}function Zh(n){return n!==void 0&&n.enterprise!==void 0}class xw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ow(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Mw(n,e){return $n(n,"GET","/v2/recaptchaConfig",gr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(n,e){return $n(n,"POST","/v1/accounts:delete",e)}async function ug(n,e){return $n(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fw(n,e=!1){const t=qe(n),r=await t.getIdToken(e),s=Sc(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fs(Fa(s.auth_time)),issuedAtTime:Fs(Fa(s.iat)),expirationTime:Fs(Fa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fa(n){return Number(n)*1e3}function Sc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return zi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pf(t);return s?JSON.parse(s):(zi("Failed to decode base64 JWT payload"),null)}catch(s){return zi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ed(n){const e=Sc(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof cn&&Uw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Uw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Ys(n,ug(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hg(i.providerUserInfo):[],l=$w(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Il(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function jw(n){const e=qe(n);await _o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $w(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hg(n){return n.map(e=>{var{providerId:t}=e,r=Ac(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(n,e){const t=await lg(n,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=cg(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ag.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Hw(n,e){return $n(n,"POST","/v2/accounts:revokeToken",gr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ed(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=ed(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await qw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Lr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Ac(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Il(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fw(this,e)}reload(){return jw(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _o(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await Ys(this,Lw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,D=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(l=t.tenantId)!==null&&l!==void 0?l:void 0,V=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,H=(h=t.createdAt)!==null&&h!==void 0?h:void 0,Q=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Y,emailVerified:W,isAnonymous:fe,providerData:ye,stsTokenManager:w}=t;ne(Y&&w,e,"internal-error");const m=Lr.fromJSON(this.name,w);ne(typeof Y=="string",e,"internal-error"),gn(p,e.name),gn(v,e.name),ne(typeof W=="boolean",e,"internal-error"),ne(typeof fe=="boolean",e,"internal-error"),gn(b,e.name),gn(D,e.name),gn(N,e.name),gn(V,e.name),gn(H,e.name),gn(Q,e.name);const E=new tn({uid:Y,auth:e,email:v,emailVerified:W,displayName:p,isAnonymous:fe,photoURL:D,phoneNumber:b,tenantId:N,stsTokenManager:m,createdAt:H,lastLoginAt:Q});return ye&&Array.isArray(ye)&&(E.providerData=ye.map(I=>Object.assign({},I))),V&&(E._redirectEventId=V),E}static async _fromIdTokenResponse(e,t,r=!1){const s=new Lr;s.updateFromServerResponse(t);const i=new tn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _o(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?hg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Lr;l.updateFromIdToken(r);const c=new tn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Il(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Map;function nn(n){an(n instanceof Function,"Expected a class definition");let e=td.get(n);return e?(an(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,td.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dg.type="NONE";const nd=dg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n,e,t){return`firebase:${n}:${e}:${t}`}class Fr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Wi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Wi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Fr(nn(nd),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||nn(nd);const a=Wi(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const p=tn._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Fr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yg(e))return"Blackberry";if(vg(e))return"Webos";if(pg(e))return"Safari";if((e.includes("chrome/")||gg(e))&&!e.includes("edge/"))return"Chrome";if(_g(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fg(n=it()){return/firefox\//i.test(n)}function pg(n=it()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gg(n=it()){return/crios\//i.test(n)}function mg(n=it()){return/iemobile/i.test(n)}function _g(n=it()){return/android/i.test(n)}function yg(n=it()){return/blackberry/i.test(n)}function vg(n=it()){return/webos/i.test(n)}function Cc(n=it()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zw(n=it()){var e;return Cc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ww(){return Qy()&&document.documentMode===10}function Eg(n=it()){return Cc(n)||_g(n)||vg(n)||yg(n)||/windows phone/i.test(n)||mg(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(n,e=[]){let t;switch(n){case"Browser":t=rd(it());break;case"Worker":t=`${rd(it())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(n,e={}){return $n(n,"GET","/v2/passwordPolicy",gr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=6;class Jw{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Qw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sd(this),this.idTokenSubscription=new sd(this),this.beforeStateQueue=new Kw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ig,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ug(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Zt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _o(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(Dn(this));const t=e?qe(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gw(this),t=new Jw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[nn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Sw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function rs(n){return qe(n)}class sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=rv(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Xw(n){Yo=n}function Ig(n){return Yo.loadJS(n)}function Zw(){return Yo.recaptchaEnterpriseScript}function e0(){return Yo.gapiScript}function t0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class n0{constructor(){this.enterprise=new r0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class r0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const s0="recaptcha-enterprise",wg="NO_RECAPTCHA";class i0{constructor(e){this.type=s0,this.auth=rs(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{Mw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new xw(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;Zh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(wg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new n0().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Zh(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Zw();c.length!==0&&(c+=l),Ig(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function id(n,e,t,r=!1,s=!1){const i=new i0(n);let a;if(s)a=wg;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function od(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await id(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await id(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(n,e){const t=Kl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ro(i,e??{}))return s;Vt(s,"already-initialized")}return t.initialize({options:e})}function a0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(nn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function l0(n,e,t){const r=rs(n);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ag(e),{host:a,port:l}=c0(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),u0()}function Ag(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function c0(n){const e=Ag(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ad(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:ad(a)}}}function ad(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function u0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,t){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}async function h0(n,e){return $n(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(n,e){return Jo(n,"POST","/v1/accounts:signInWithPassword",gr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(n,e){return Jo(n,"POST","/v1/accounts:signInWithEmailLink",gr(n,e))}async function p0(n,e){return Jo(n,"POST","/v1/accounts:signInWithEmailLink",gr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends Pc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Xs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Xs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return od(e,t,"signInWithPassword",d0);case"emailLink":return f0(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return od(e,r,"signUpPassword",h0);case"emailLink":return p0(e,{idToken:t,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(n,e){return Jo(n,"POST","/v1/accounts:signInWithIdp",gr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="http://localhost";class hr extends Pc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Ac(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new hr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ur(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ur(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ur(e,t)}buildRequest(){const e={requestUri:g0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ni(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _0(n){const e=Is(ws(n)).link,t=e?Is(ws(e)).deep_link_id:null,r=Is(ws(n)).deep_link_id;return(r?Is(ws(r)).link:null)||r||t||e||n}class Dc{constructor(e){var t,r,s,i,a,l;const c=Is(ws(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=m0((s=c.mode)!==null&&s!==void 0?s:null);ne(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=_0(e);try{return new Dc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,t){return Xs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Dc.parseLink(t);return ne(r,"argument-error"),Xs._fromEmailAndCode(e,r.code,r.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends bg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends li{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return vn.credential(t,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends li{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends li{constructor(){super("twitter.com")}static credential(e,t){return hr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Tn.credential(t,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await tn._fromIdTokenResponse(e,r,s),a=ld(r);return new Yr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ld(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ld(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends cn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new yo(e,t,r,s)}}function Rg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yo._fromErrorAndOperation(n,i,e,r):i})}async function y0(n,e,t=!1){const r=await Ys(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(n,e,t=!1){const{auth:r}=n;if(Zt(r.app))return Promise.reject(Dn(r));const s="reauthenticate";try{const i=await Ys(n,Rg(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=Sc(i.idToken);ne(a,r,"internal-error");const{sub:l}=a;return ne(n.uid===l,r,"user-mismatch"),Yr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(n,e,t=!1){if(Zt(n.app))return Promise.reject(Dn(n));const r="signIn",s=await Rg(n,r,e),i=await Yr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function E0(n,e){return Sg(rs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(n){const e=rs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function I0(n,e,t){return Zt(n.app)?Promise.reject(Dn(n)):E0(qe(n),ss.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&T0(n),r})}function w0(n,e,t,r){return qe(n).onIdTokenChanged(e,t,r)}function A0(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}function b0(n,e,t,r){return qe(n).onAuthStateChanged(e,t,r)}function R0(n){return qe(n).signOut()}const vo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vo,"1"),this.storage.removeItem(vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=1e3,C0=10;class Pg extends Cg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ww()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,C0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},S0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pg.type="LOCAL";const P0=Pg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg extends Cg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dg.type="SESSION";const kg=Dg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await D0(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=kc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function V0(n){jt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function O0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function x0(){return Vg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="firebaseLocalStorageDb",M0=1,Eo="firebaseLocalStorage",Ng="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zo(n,e){return n.transaction([Eo],e?"readwrite":"readonly").objectStore(Eo)}function L0(){const n=indexedDB.deleteDatabase(Og);return new ci(n).toPromise()}function wl(){const n=indexedDB.open(Og,M0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Eo,{keyPath:Ng})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Eo)?e(r):(r.close(),await L0(),e(await wl()))})})}async function cd(n,e,t){const r=Zo(n,!0).put({[Ng]:e,value:t});return new ci(r).toPromise()}async function F0(n,e){const t=Zo(n,!1).get(e),r=await new ci(t).toPromise();return r===void 0?null:r.value}function ud(n,e){const t=Zo(n,!0).delete(e);return new ci(t).toPromise()}const U0=800,B0=3;class xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>B0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance(x0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await O0(),!this.activeServiceWorker)return;this.sender=new k0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wl();return await cd(e,vo,"1"),await ud(e,vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>F0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ud(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Zo(s,!1).getAll();return new ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),U0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xg.type="LOCAL";const j0=xg;new ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(n,e){return e?nn(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends Pc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ur(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ur(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function q0(n){return Sg(n.auth,new Vc(n),n.bypassAuthState)}function H0(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),v0(t,new Vc(n),n.bypassAuthState)}async function z0(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),y0(t,new Vc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return q0;case"linkViaPopup":case"linkViaRedirect":return z0;case"reauthViaPopup":case"reauthViaRedirect":return H0;default:Vt(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=new ai(2e3,1e4);class Dr extends Mg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,W0.get())};e()}}Dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="pendingRedirect",Ki=new Map;class G0 extends Mg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ki.get(this.auth._key());if(!e){try{const r=await Q0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ki.set(this.auth._key(),e)}return this.bypassAuthState||Ki.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q0(n,e){const t=X0(e),r=Y0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function J0(n,e){Ki.set(n._key(),e)}function Y0(n){return nn(n._redirectPersistence)}function X0(n){return Wi(K0,n.config.apiKey,n.name)}async function Z0(n,e,t=!1){if(Zt(n.app))return Promise.reject(Dn(n));const r=rs(n),s=$0(r,e),a=await new G0(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=10*60*1e3;class tA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Lg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Bt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eA&&this.cachedEventUids.clear(),this.cachedEventUids.has(hd(e))}saveEventToCache(e){this.cachedEventUids.add(hd(e)),this.lastProcessedEventTime=Date.now()}}function hd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lg(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(n,e={}){return $n(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iA=/^https?/;async function oA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await rA(n);for(const t of e)try{if(aA(t))return}catch{}Vt(n,"unauthorized-domain")}function aA(n){const e=Tl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!iA.test(t))return!1;if(sA.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=new ai(3e4,6e4);function dd(){const n=jt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function cA(n){return new Promise((e,t)=>{var r,s,i;function a(){dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dd(),t(Bt(n,"network-request-failed"))},timeout:lA.get()})}if(!((s=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=jt().gapi)===null||i===void 0)&&i.load)a();else{const l=t0("iframefcb");return jt()[l]=()=>{gapi.load?a():t(Bt(n,"network-request-failed"))},Ig(`${e0()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function uA(n){return Gi=Gi||cA(n),Gi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new ai(5e3,15e3),dA="__/auth/iframe",fA="emulator/auth/iframe",pA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mA(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rc(e,fA):`https://${n.config.authDomain}/${dA}`,r={apiKey:e.apiKey,appName:n.name,v:Xr},s=gA.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ni(r).slice(1)}`}async function _A(n){const e=await uA(n),t=jt().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:mA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Bt(n,"network-request-failed"),l=jt().setTimeout(()=>{i(a)},hA.get());function c(){jt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vA=500,EA=600,TA="_blank",IA="http://localhost";class fd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wA(n,e,t,r=vA,s=EA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},yA),{width:r.toString(),height:s.toString(),top:i,left:a}),h=it().toLowerCase();t&&(l=gg(h)?TA:t),fg(h)&&(e=e||IA,c.scrollbars="yes");const f=Object.entries(c).reduce((v,[b,D])=>`${v}${b}=${D},`,"");if(zw(h)&&l!=="_self")return AA(e||"",l),new fd(null);const p=window.open(e||"",l,f);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new fd(p)}function AA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="__/auth/handler",RA="emulator/auth/handler",SA=encodeURIComponent("fac");async function pd(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Xr,eventId:s};if(e instanceof bg){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",nv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof li){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${SA}=${encodeURIComponent(c)}`:"";return`${CA(n)}?${ni(l).slice(1)}${h}`}function CA({config:n}){return n.emulator?Rc(n,RA):`https://${n.authDomain}/${bA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="webStorageSupport";class PA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kg,this._completeRedirectFn=Z0,this._overrideRedirectResult=J0}async _openPopup(e,t,r,s){var i;an((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await pd(e,t,r,Tl(),s);return wA(e,a,kc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await pd(e,t,r,Tl(),s);return V0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(an(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await _A(e),r=new tA(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ua,{type:Ua},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ua];a!==void 0&&t(!!a),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=oA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Eg()||pg()||Cc()}}const DA=PA;var gd="@firebase/auth",md="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OA(n){$r(new cr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tg(n)},h=new Yw(r,s,i,c);return a0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),$r(new cr("auth-internal",e=>{const t=rs(e.getProvider("auth").getImmediate());return(r=>new kA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(gd,md,VA(n)),Sn(gd,md,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=5*60,xA=Vf("authIdTokenMaxAge")||NA;let _d=null;const MA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>xA)return;const s=t==null?void 0:t.token;_d!==s&&(_d=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function LA(n=Mf()){const e=Kl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=o0(n,{popupRedirectResolver:DA,persistence:[j0,P0,kg]}),r=Vf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=MA(i.toString());A0(t,a,()=>a(t.currentUser)),w0(t,l=>a(l))}}const s=Df("auth");return s&&l0(t,`http://${s}`),t}function FA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Xw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Bt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",FA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OA("Browser");var UA="firebase",BA="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(UA,BA,"app");const jA={apiKey:"AIzaSyAaD4Dx0Vwzu6mCzl-cWc0C_zvVC1kxncQ",authDomain:"calendar-app-311c8.firebaseapp.com",projectId:"calendar-app-311c8",storageBucket:"calendar-app-311c8.appspot.com",messagingSenderId:"502752255733",appId:"1:502752255733:web:e14a1d6dc9ee91ce5befbc"},Fg=xf(jA),To=ow(Fg),Ba=LA(Fg),Al="events",yd=Wp(To,Al),$A="calendar-days";Wp(To,$A);const Ug=()=>{const n=Pt(""),e=Pt(""),t=Pt(""),r=Pt(null),s=Pt([]);return Xd(()=>{Aw(yd,f=>{s.value=f.docs.map(p=>({...p.data(),id:p.id})).sort((p,v)=>p.time.localeCompare(v.time))})}),{events:s,newEventTitle:n,newEventTime:e,newEventDate:t,clickedDate:sr,setClickedDate:f=>{sr.value=f},editingId:r,enterEditMode:f=>{r.value=f.id,n.value=f.title,e.value=f.time},addEvent:async f=>{if(!(n.value.trim()===""||e.value.trim()===""))try{console.log(`Adding event with title: ${n.value}, time: ${e.value}, date: ${f}`),await ww(yd,{title:n.value,time:e.value,date:f}),n.value="",e.value="",sr.value="",console.log(`Event added successfully on ${f}`)}catch(p){console.error("Error adding event:",p)}},deleteEvent:async f=>{console.log("deleting event with id",f),await Iw(vl(To,Al,f))},updateEvent:async(f,p,v)=>{console.log("editing an event");const b=vl(To,Al,f);if(p.trim()!==""||v.trim()!=="")await Tw(b,{title:p,time:v}),console.log(`Updated event with id: ${f} to new title: ${p}`);else return;r.value=null}}},Bg=()=>{const n=Pt(null),e=async(r,s)=>{try{const i=await I0(Ba,r,s);console.log(i.user)}catch(i){console.log(i.message)}},t=async()=>{try{await R0(Ba)}catch(r){console.log(r.message)}};return b0(Ba,r=>{n.value=r}),{user:n,login:e,logout:t}},qA=()=>{const n=[];for(let r=1;r<=31;r++){const s=new Date(Date.UTC(2024,11,r));n.push(s.toISOString().slice(0,10))}return{dates:n}},Oc=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},HA={class:"container"},zA={class:"calendar"},WA={class:"days"},KA={class:"days-list"},GA={id:"day"},QA=["onClick"],JA={key:1,class:"event-list"},YA={key:0},XA=["onClick"],ZA={key:1,id:"event-container"},eb={class:"event-buttons"},tb=["onClick"],nb=["onClick"],rb={__name:"calendar",setup(n){const{showEventForm:e}=Hl(),{events:t,newEventTitle:r,newEventTime:s,newEventDate:i,setClickedDate:a,editingId:l,enterEditMode:c,deleteEvent:h,updateEvent:f}=Ug(),{user:p}=Bg(),{dates:v}=qA();return(b,D)=>(ct(),dt("div",HA,[D[6]||(D[6]=te("h1",null,"December 2024",-1)),te("div",zA,[D[5]||(D[5]=Q_('<div class="day-names" data-v-d73df523><div class="sunday" data-v-d73df523>SUN</div><div class="monday" data-v-d73df523>MON</div><div class="tuesday" data-v-d73df523>TUS</div><div class="wednesday" data-v-d73df523>WED</div><div class="thursday" data-v-d73df523>THU</div><div class="friday" data-v-d73df523>FRI</div><div class="saturday" data-v-d73df523>SAT</div></div>',1)),te("div",WA,[te("ul",KA,[(ct(!0),dt(At,null,Pu(ue(v),N=>(ct(),dt("li",{key:N},[te("div",GA,[te("span",null,nr(N),1),ue(p)?(ct(),dt("span",{key:0,class:"add-event-button",onClick:V=>ue(e)(N)},"+",8,QA)):Zi("",!0),ue(p)?(ct(),dt("ul",JA,[(ct(!0),dt(At,null,Pu(ue(t).filter(V=>V.date===N),V=>(ct(),dt("li",{key:V.id,class:"event-element"},[ue(l)===V.id?(ct(),dt("div",YA,[An(te("input",{"onUpdate:modelValue":D[0]||(D[0]=H=>Oe(r)?r.value=H:null),placeholder:"New title"},null,512),[[jr,ue(r)]]),An(te("input",{type:"time","onUpdate:modelValue":D[1]||(D[1]=H=>Oe(s)?s.value=H:null),placeholder:"New time"},null,512),[[jr,ue(s)]]),te("button",{onClick:H=>ue(f)(V.id,ue(r),ue(s))},"Save",8,XA),te("button",{onClick:D[2]||(D[2]=H=>l.value=null)},"Cancel")])):(ct(),dt("div",ZA,[te("div",null,nr(V.title)+" at "+nr(V.time),1),te("div",eb,[te("button",{onClick:H=>ue(c)(V)},D[3]||(D[3]=[te("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[te("path",{fill:"currentColor",d:"M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"})],-1)]),8,tb),te("button",{onClick:H=>ue(h)(V.id)},D[4]||(D[4]=[te("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32"},[te("path",{fill:"#f92f60",d:"M24.879 2.879A3 3 0 1 1 29.12 7.12l-8.79 8.79a.125.125 0 0 0 0 .177l8.79 8.79a3 3 0 1 1-4.242 4.243l-8.79-8.79a.125.125 0 0 0-.177 0l-8.79 8.79a3 3 0 1 1-4.243-4.242l8.79-8.79a.125.125 0 0 0 0-.177l-8.79-8.79A3 3 0 0 1 7.12 2.878l8.79 8.79a.125.125 0 0 0 .177 0z"})],-1)]),8,nb)])]))]))),128))])):Zi("",!0)])]))),128))])])])]))}},sb=Oc(rb,[["__scopeId","data-v-d73df523"]]),ib={class:"formContainer"},ob={action:""},ab=["value"],lb={__name:"eventForm",setup(n){const{eventFormVisible:e,hideEventForm:t}=Hl(),{newEventTitle:r,newEventTime:s,addEvent:i,setClickedDate:a}=Ug();return(l,c)=>An((ct(),dt("div",ib,[te("div",{class:"cross",onClick:c[0]||(c[0]=(...h)=>ue(t)&&ue(t)(...h))},c[4]||(c[4]=[te("span",null,null,-1),te("span",null,null,-1)])),te("form",ob,[c[5]||(c[5]=te("label",{for:"event-title"},"Title",-1)),An(te("input",{id:"event-title",type:"text",placeholder:"Add title","onUpdate:modelValue":c[1]||(c[1]=h=>Oe(r)?r.value=h:null)},null,512),[[jr,ue(r)]]),c[6]||(c[6]=te("label",{for:"event-time"},"Time",-1)),An(te("input",{type:"time",name:"",id:"event-time",placeholder:"Add time","onUpdate:modelValue":c[2]||(c[2]=h=>Oe(s)?s.value=h:null)},null,512),[[jr,ue(s)]]),c[7]||(c[7]=te("label",{for:"event-date"},"Date",-1)),te("input",{type:"text",name:"",id:"event-date",value:ue(sr)},null,8,ab),Tf(" "+nr(ue(r))+" at "+nr(ue(s))+" date: "+nr(ue(sr))+" ",1),te("button",{type:"submit",onClick:c[3]||(c[3]=Cy(h=>{ue(i)(ue(sr)),ue(t)()},["prevent"]))},"Add Event")])],512)),[[Rf,ue(e)]])}},cb=Oc(lb,[["__scopeId","data-v-6428506a"]]),ub={key:1,class:"logged-in-button"},hb={class:"formContainer"},db={__name:"loginForm",setup(n){const{loginFormVisible:e,hideLoginForm:t,showLoginForm:r}=Hl(),s=Pt(""),i=Pt(""),{user:a,login:l,logout:c}=Bg(),h=f=>{f.preventDefault(),l(s.value,i.value)};return(f,p)=>(ct(),dt(At,null,[ue(a)?Zi("",!0):(ct(),dt("div",{key:0,onClick:p[0]||(p[0]=(...v)=>ue(r)&&ue(r)(...v)),class:"login-button"},p[6]||(p[6]=[te("svg",{xmlns:"http://www.w3.org/2000/svg",width:"4em",height:"4em",viewBox:"0 0 24 24"},[te("path",{fill:"currentColor",d:"M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.23 7.23 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"})],-1)]))),ue(a)?(ct(),dt("div",ub,[p[7]||(p[7]=te("svg",{xmlns:"http://www.w3.org/2000/svg",width:"4em",height:"4em",viewBox:"0 0 24 24"},[te("g",{fill:"none","fill-rule":"evenodd"},[te("path",{d:"m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"}),te("path",{fill:"green",d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"})])],-1)),p[8]||(p[8]=te("p",null,"Admin",-1)),te("button",{class:"logout-button",onClick:p[1]||(p[1]=v=>ue(c)())},"Logout")])):Zi("",!0),An(te("div",hb,[te("div",{class:"cross",onClick:p[2]||(p[2]=(...v)=>ue(t)&&ue(t)(...v))},p[9]||(p[9]=[te("span",null,null,-1),te("span",null,null,-1)])),te("form",{onSubmit:h},[p[10]||(p[10]=te("label",{for:"event-title"},"Email",-1)),An(te("input",{id:"txtEmail",type:"text","onUpdate:modelValue":p[3]||(p[3]=v=>s.value=v),placeholder:"Email"},null,512),[[jr,s.value]]),p[11]||(p[11]=te("label",{for:"event-time"},"Password",-1)),An(te("input",{type:"password",name:"",id:"txtPassword","onUpdate:modelValue":p[4]||(p[4]=v=>i.value=v),placeholder:"Password"},null,512),[[jr,i.value]]),te("button",{type:"submit",onClick:p[5]||(p[5]=v=>ue(t)())},"Login")],32)],512),[[Rf,ue(e)]])],64))}},fb=Oc(db,[["__scopeId","data-v-429da0f7"]]),pb=r_({__name:"App",setup(n){return(e,t)=>(ct(),dt("div",null,[Tt(sb),Tt(cb),Tt(fb)]))}});ky(pb).mount("#app");

function v0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function y0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nu={exports:{}},Do={},Pu={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cr=Symbol.for("react.element"),g0=Symbol.for("react.portal"),w0=Symbol.for("react.fragment"),S0=Symbol.for("react.strict_mode"),x0=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),C0=Symbol.for("react.context"),E0=Symbol.for("react.forward_ref"),_0=Symbol.for("react.suspense"),z0=Symbol.for("react.memo"),N0=Symbol.for("react.lazy"),as=Symbol.iterator;function P0(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var ju={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lu=Object.assign,Tu={};function Pn(e,t,n){this.props=e,this.context=t,this.refs=Tu,this.updater=n||ju}Pn.prototype.isReactComponent={};Pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mu(){}Mu.prototype=Pn.prototype;function ql(e,t,n){this.props=e,this.context=t,this.refs=Tu,this.updater=n||ju}var bl=ql.prototype=new Mu;bl.constructor=ql;Lu(bl,Pn.prototype);bl.isPureReactComponent=!0;var ss=Array.isArray,Ou=Object.prototype.hasOwnProperty,ea={current:null},Ru={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ou.call(t,r)&&!Ru.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Cr,type:e,key:i,ref:l,props:o,_owner:ea.current}}function j0(e,t){return{$$typeof:Cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ta(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cr}function L0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var us=/\/+/g;function zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?L0(""+e.key):t.toString(36)}function Jr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Cr:case g0:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+zi(l,0):r,ss(o)?(n="",e!=null&&(n=e.replace(us,"$&/")+"/"),Jr(o,t,n,"",function(c){return c})):o!=null&&(ta(o)&&(o=j0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(us,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ss(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+zi(i,a);l+=Jr(i,t,n,s,o)}else if(s=P0(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+zi(i,a++),l+=Jr(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Tr(e,t,n){if(e==null)return e;var r=[],o=0;return Jr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function T0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},qr={transition:null},M0={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:qr,ReactCurrentOwner:ea};M.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!ta(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Pn;M.Fragment=w0;M.Profiler=x0;M.PureComponent=ql;M.StrictMode=S0;M.Suspense=_0;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ea.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Ou.call(t,s)&&!Ru.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Cr,type:e.type,key:o,ref:i,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:C0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:k0,_context:e},e.Consumer=e};M.createElement=$u;M.createFactory=function(e){var t=$u.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:E0,render:e}};M.isValidElement=ta;M.lazy=function(e){return{$$typeof:N0,_payload:{_status:-1,_result:e},_init:T0}};M.memo=function(e,t){return{$$typeof:z0,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=qr.transition;qr.transition={};try{e()}finally{qr.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return we.current.useCallback(e,t)};M.useContext=function(e){return we.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return we.current.useDeferredValue(e)};M.useEffect=function(e,t){return we.current.useEffect(e,t)};M.useId=function(){return we.current.useId()};M.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return we.current.useMemo(e,t)};M.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};M.useRef=function(e){return we.current.useRef(e)};M.useState=function(e){return we.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return we.current.useTransition()};M.version="18.2.0";Pu.exports=M;var F=Pu.exports;const st=y0(F),cs=v0({__proto__:null,default:st},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=F,R0=Symbol.for("react.element"),$0=Symbol.for("react.fragment"),I0=Object.prototype.hasOwnProperty,F0=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D0={key:!0,ref:!0,__self:!0,__source:!0};function Iu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)I0.call(t,r)&&!D0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:R0,type:e,key:i,ref:l,props:o,_owner:F0.current}}Do.Fragment=$0;Do.jsx=Iu;Do.jsxs=Iu;Nu.exports=Do;var y=Nu.exports,el={},Fu={exports:{}},Me={},Du={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,L){var T=N.length;N.push(L);e:for(;0<T;){var Z=T-1>>>1,ne=N[Z];if(0<o(ne,L))N[Z]=L,N[T]=ne,T=Z;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var L=N[0],T=N.pop();if(T!==L){N[0]=T;e:for(var Z=0,ne=N.length,jr=ne>>>1;Z<jr;){var It=2*(Z+1)-1,_i=N[It],Ft=It+1,Lr=N[Ft];if(0>o(_i,T))Ft<ne&&0>o(Lr,_i)?(N[Z]=Lr,N[Ft]=T,Z=Ft):(N[Z]=_i,N[It]=T,Z=It);else if(Ft<ne&&0>o(Lr,T))N[Z]=Lr,N[Ft]=T,Z=Ft;else break e}}return L}function o(N,L){var T=N.sortIndex-L.sortIndex;return T!==0?T:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],h=1,p=null,m=3,S=!1,w=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(N){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=N)r(c),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(c)}}function g(N){if(v=!1,d(N),!w)if(n(s)!==null)w=!0,Ci(E);else{var L=n(c);L!==null&&Ei(g,L.startTime-N)}}function E(N,L){w=!1,v&&(v=!1,f(P),P=-1),S=!0;var T=m;try{for(d(L),p=n(s);p!==null&&(!(p.expirationTime>L)||N&&!Be());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,m=p.priorityLevel;var ne=Z(p.expirationTime<=L);L=e.unstable_now(),typeof ne=="function"?p.callback=ne:p===n(s)&&r(s),d(L)}else r(s);p=n(s)}if(p!==null)var jr=!0;else{var It=n(c);It!==null&&Ei(g,It.startTime-L),jr=!1}return jr}finally{p=null,m=T,S=!1}}var _=!1,C=null,P=-1,G=5,O=-1;function Be(){return!(e.unstable_now()-O<G)}function Mn(){if(C!==null){var N=e.unstable_now();O=N;var L=!0;try{L=C(!0,N)}finally{L?On():(_=!1,C=null)}}else _=!1}var On;if(typeof u=="function")On=function(){u(Mn)};else if(typeof MessageChannel<"u"){var ls=new MessageChannel,h0=ls.port2;ls.port1.onmessage=Mn,On=function(){h0.postMessage(null)}}else On=function(){j(Mn,0)};function Ci(N){C=N,_||(_=!0,On())}function Ei(N,L){P=j(function(){N(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,Ci(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var T=m;m=L;try{return N()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var T=m;m=N;try{return L()}finally{m=T}},e.unstable_scheduleCallback=function(N,L,T){var Z=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Z+T:Z):T=Z,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=T+ne,N={id:h++,callback:L,priorityLevel:N,startTime:T,expirationTime:ne,sortIndex:-1},T>Z?(N.sortIndex=T,t(c,N),n(s)===null&&N===n(c)&&(v?(f(P),P=-1):v=!0,Ei(g,T-Z))):(N.sortIndex=ne,t(s,N),w||S||(w=!0,Ci(E))),N},e.unstable_shouldYield=Be,e.unstable_wrapCallback=function(N){var L=m;return function(){var T=m;m=L;try{return N.apply(this,arguments)}finally{m=T}}}})(Au);Du.exports=Au;var A0=Du.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=F,Te=A0;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uu=new Set,nr={};function Jt(e,t){Sn(e,t),Sn(e+"Capture",t)}function Sn(e,t){for(nr[e]=t,e=0;e<t.length;e++)Uu.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,V0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fs={},ds={};function U0(e){return tl.call(ds,e)?!0:tl.call(fs,e)?!1:V0.test(e)?ds[e]=!0:(fs[e]=!0,!1)}function B0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H0(e,t,n,r){if(t===null||typeof t>"u"||B0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var na=/[\-:]([a-z])/g;function ra(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(na,ra);ce[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(na,ra);ce[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(na,ra);ce[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function oa(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H0(t,n,o,r)&&(n=null),r||o===null?U0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=Vu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mr=Symbol.for("react.element"),en=Symbol.for("react.portal"),tn=Symbol.for("react.fragment"),ia=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),Bu=Symbol.for("react.provider"),Hu=Symbol.for("react.context"),la=Symbol.for("react.forward_ref"),rl=Symbol.for("react.suspense"),ol=Symbol.for("react.suspense_list"),aa=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Wu=Symbol.for("react.offscreen"),ps=Symbol.iterator;function Rn(e){return e===null||typeof e!="object"?null:(e=ps&&e[ps]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Ni;function Hn(e){if(Ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ni=t&&t[1]||""}return`
`+Ni+e}var Pi=!1;function ji(e,t){if(!e||Pi)return"";Pi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Pi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hn(e):""}function W0(e){switch(e.tag){case 5:return Hn(e.type);case 16:return Hn("Lazy");case 13:return Hn("Suspense");case 19:return Hn("SuspenseList");case 0:case 2:case 15:return e=ji(e.type,!1),e;case 11:return e=ji(e.type.render,!1),e;case 1:return e=ji(e.type,!0),e;default:return""}}function il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tn:return"Fragment";case en:return"Portal";case nl:return"Profiler";case ia:return"StrictMode";case rl:return"Suspense";case ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hu:return(e.displayName||"Context")+".Consumer";case Bu:return(e._context.displayName||"Context")+".Provider";case la:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case aa:return t=e.displayName||null,t!==null?t:il(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return il(e(t))}catch{}}return null}function Q0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return il(t);case 8:return t===ia?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y0(e){var t=Qu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Or(e){e._valueTracker||(e._valueTracker=Y0(e))}function Yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ms(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xu(e,t){t=t.checked,t!=null&&oa(e,"checked",t,!1)}function al(e,t){Xu(e,t);var n=Tt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&sl(e,t.type,Tt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sl(e,t,n){(t!=="number"||po(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wn=Array.isArray;function pn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Wn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tt(n)}}function Ku(e,t){var n=Tt(t.value),r=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ys(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,Zu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X0=["Webkit","ms","Moz","O"];Object.keys(Xn).forEach(function(e){X0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xn[t]=Xn[e]})});function Ju(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xn.hasOwnProperty(e)&&Xn[e]?(""+t).trim():t+"px"}function qu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ju(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var K0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fl(e,t){if(t){if(K0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function dl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pl=null;function sa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,mn=null,hn=null;function gs(e){if(e=zr(e)){if(typeof ml!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Ho(t),ml(e.stateNode,e.type,t))}}function bu(e){mn?hn?hn.push(e):hn=[e]:mn=e}function ec(){if(mn){var e=mn,t=hn;if(hn=mn=null,gs(e),t)for(e=0;e<t.length;e++)gs(t[e])}}function tc(e,t){return e(t)}function nc(){}var Li=!1;function rc(e,t,n){if(Li)return e(t,n);Li=!0;try{return tc(e,t,n)}finally{Li=!1,(mn!==null||hn!==null)&&(nc(),ec())}}function or(e,t){var n=e.stateNode;if(n===null)return null;var r=Ho(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var hl=!1;if(ct)try{var $n={};Object.defineProperty($n,"passive",{get:function(){hl=!0}}),window.addEventListener("test",$n,$n),window.removeEventListener("test",$n,$n)}catch{hl=!1}function G0(e,t,n,r,o,i,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Kn=!1,mo=null,ho=!1,vl=null,Z0={onError:function(e){Kn=!0,mo=e}};function J0(e,t,n,r,o,i,l,a,s){Kn=!1,mo=null,G0.apply(Z0,arguments)}function q0(e,t,n,r,o,i,l,a,s){if(J0.apply(this,arguments),Kn){if(Kn){var c=mo;Kn=!1,mo=null}else throw Error(x(198));ho||(ho=!0,vl=c)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function oc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ws(e){if(qt(e)!==e)throw Error(x(188))}function b0(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ws(o),e;if(i===r)return ws(o),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function ic(e){return e=b0(e),e!==null?lc(e):null}function lc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lc(e);if(t!==null)return t;e=e.sibling}return null}var ac=Te.unstable_scheduleCallback,Ss=Te.unstable_cancelCallback,ed=Te.unstable_shouldYield,td=Te.unstable_requestPaint,J=Te.unstable_now,nd=Te.unstable_getCurrentPriorityLevel,ua=Te.unstable_ImmediatePriority,sc=Te.unstable_UserBlockingPriority,vo=Te.unstable_NormalPriority,rd=Te.unstable_LowPriority,uc=Te.unstable_IdlePriority,Ao=null,tt=null;function od(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Ao,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:ad,id=Math.log,ld=Math.LN2;function ad(e){return e>>>=0,e===0?32:31-(id(e)/ld|0)|0}var $r=64,Ir=4194304;function Qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Qn(a):(i&=l,i!==0&&(r=Qn(i)))}else l=n&~o,l!==0?r=Qn(l):i!==0&&(r=Qn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),o=1<<n,r|=e[n],t&=~o;return r}function sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Xe(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=sd(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cc(){var e=$r;return $r<<=1,!($r&4194240)&&($r=64),e}function Ti(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Er(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ca(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function fc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dc,fa,pc,mc,hc,gl=!1,Fr=[],kt=null,Ct=null,Et=null,ir=new Map,lr=new Map,gt=[],fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xs(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function In(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=zr(t),t!==null&&fa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function dd(e,t,n,r,o){switch(t){case"focusin":return kt=In(kt,e,t,n,r,o),!0;case"dragenter":return Ct=In(Ct,e,t,n,r,o),!0;case"mouseover":return Et=In(Et,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ir.set(i,In(ir.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,lr.set(i,In(lr.get(i)||null,e,t,n,r,o)),!0}return!1}function vc(e){var t=Vt(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=oc(n),t!==null){e.blockedOn=t,hc(e.priority,function(){pc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pl=r,n.target.dispatchEvent(r),pl=null}else return t=zr(n),t!==null&&fa(t),e.blockedOn=n,!1;t.shift()}return!0}function ks(e,t,n){br(e)&&n.delete(t)}function pd(){gl=!1,kt!==null&&br(kt)&&(kt=null),Ct!==null&&br(Ct)&&(Ct=null),Et!==null&&br(Et)&&(Et=null),ir.forEach(ks),lr.forEach(ks)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,gl||(gl=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,pd)))}function ar(e){function t(o){return Fn(o,e)}if(0<Fr.length){Fn(Fr[0],e);for(var n=1;n<Fr.length;n++){var r=Fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&Fn(kt,e),Ct!==null&&Fn(Ct,e),Et!==null&&Fn(Et,e),ir.forEach(t),lr.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)vc(n),n.blockedOn===null&&gt.shift()}var vn=mt.ReactCurrentBatchConfig,go=!0;function md(e,t,n,r){var o=D,i=vn.transition;vn.transition=null;try{D=1,da(e,t,n,r)}finally{D=o,vn.transition=i}}function hd(e,t,n,r){var o=D,i=vn.transition;vn.transition=null;try{D=4,da(e,t,n,r)}finally{D=o,vn.transition=i}}function da(e,t,n,r){if(go){var o=wl(e,t,n,r);if(o===null)Ui(e,t,r,wo,n),xs(e,r);else if(dd(o,e,t,n,r))r.stopPropagation();else if(xs(e,r),t&4&&-1<fd.indexOf(e)){for(;o!==null;){var i=zr(o);if(i!==null&&dc(i),i=wl(e,t,n,r),i===null&&Ui(e,t,r,wo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ui(e,t,r,null,n)}}var wo=null;function wl(e,t,n,r){if(wo=null,e=sa(r),e=Vt(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=oc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function yc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nd()){case ua:return 1;case sc:return 4;case vo:case rd:return 16;case uc:return 536870912;default:return 16}default:return 16}}var St=null,pa=null,eo=null;function gc(){if(eo)return eo;var e,t=pa,n=t.length,r,o="value"in St?St.value:St.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return eo=o.slice(e,1<r?1-r:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function Cs(){return!1}function Oe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Dr:Cs,this.isPropagationStopped=Cs,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ma=Oe(jn),_r=X({},jn,{view:0,detail:0}),vd=Oe(_r),Mi,Oi,Dn,Vo=X({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ha,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dn&&(Dn&&e.type==="mousemove"?(Mi=e.screenX-Dn.screenX,Oi=e.screenY-Dn.screenY):Oi=Mi=0,Dn=e),Mi)},movementY:function(e){return"movementY"in e?e.movementY:Oi}}),Es=Oe(Vo),yd=X({},Vo,{dataTransfer:0}),gd=Oe(yd),wd=X({},_r,{relatedTarget:0}),Ri=Oe(wd),Sd=X({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),xd=Oe(Sd),kd=X({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cd=Oe(kd),Ed=X({},jn,{data:0}),_s=Oe(Ed),_d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nd[e])?!!t[e]:!1}function ha(){return Pd}var jd=X({},_r,{key:function(e){if(e.key){var t=_d[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ha,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ld=Oe(jd),Td=X({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zs=Oe(Td),Md=X({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ha}),Od=Oe(Md),Rd=X({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$d=Oe(Rd),Id=X({},Vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fd=Oe(Id),Dd=[9,13,27,32],va=ct&&"CompositionEvent"in window,Gn=null;ct&&"documentMode"in document&&(Gn=document.documentMode);var Ad=ct&&"TextEvent"in window&&!Gn,wc=ct&&(!va||Gn&&8<Gn&&11>=Gn),Ns=" ",Ps=!1;function Sc(e,t){switch(e){case"keyup":return Dd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function Vd(e,t){switch(e){case"compositionend":return xc(t);case"keypress":return t.which!==32?null:(Ps=!0,Ns);case"textInput":return e=t.data,e===Ns&&Ps?null:e;default:return null}}function Ud(e,t){if(nn)return e==="compositionend"||!va&&Sc(e,t)?(e=gc(),eo=pa=St=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wc&&t.locale!=="ko"?null:t.data;default:return null}}var Bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bd[e.type]:t==="textarea"}function kc(e,t,n,r){bu(r),t=So(t,"onChange"),0<t.length&&(n=new ma("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,sr=null;function Hd(e){Oc(e,0)}function Uo(e){var t=ln(e);if(Yu(t))return e}function Wd(e,t){if(e==="change")return t}var Cc=!1;if(ct){var $i;if(ct){var Ii="oninput"in document;if(!Ii){var Ls=document.createElement("div");Ls.setAttribute("oninput","return;"),Ii=typeof Ls.oninput=="function"}$i=Ii}else $i=!1;Cc=$i&&(!document.documentMode||9<document.documentMode)}function Ts(){Zn&&(Zn.detachEvent("onpropertychange",Ec),sr=Zn=null)}function Ec(e){if(e.propertyName==="value"&&Uo(sr)){var t=[];kc(t,sr,e,sa(e)),rc(Hd,t)}}function Qd(e,t,n){e==="focusin"?(Ts(),Zn=t,sr=n,Zn.attachEvent("onpropertychange",Ec)):e==="focusout"&&Ts()}function Yd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Uo(sr)}function Xd(e,t){if(e==="click")return Uo(t)}function Kd(e,t){if(e==="input"||e==="change")return Uo(t)}function Gd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:Gd;function ur(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!tl.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function Ms(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Os(e,t){var n=Ms(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ms(n)}}function _c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zc(){for(var e=window,t=po();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=po(e.document)}return t}function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zd(e){var t=zc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_c(n.ownerDocument.documentElement,n)){if(r!==null&&ya(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Os(n,i);var l=Os(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jd=ct&&"documentMode"in document&&11>=document.documentMode,rn=null,Sl=null,Jn=null,xl=!1;function Rs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xl||rn==null||rn!==po(r)||(r=rn,"selectionStart"in r&&ya(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jn&&ur(Jn,r)||(Jn=r,r=So(Sl,"onSelect"),0<r.length&&(t=new ma("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rn)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var on={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},Fi={},Nc={};ct&&(Nc=document.createElement("div").style,"AnimationEvent"in window||(delete on.animationend.animation,delete on.animationiteration.animation,delete on.animationstart.animation),"TransitionEvent"in window||delete on.transitionend.transition);function Bo(e){if(Fi[e])return Fi[e];if(!on[e])return e;var t=on[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nc)return Fi[e]=t[n];return e}var Pc=Bo("animationend"),jc=Bo("animationiteration"),Lc=Bo("animationstart"),Tc=Bo("transitionend"),Mc=new Map,$s="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){Mc.set(e,t),Jt(t,[e])}for(var Di=0;Di<$s.length;Di++){var Ai=$s[Di],qd=Ai.toLowerCase(),bd=Ai[0].toUpperCase()+Ai.slice(1);Ot(qd,"on"+bd)}Ot(Pc,"onAnimationEnd");Ot(jc,"onAnimationIteration");Ot(Lc,"onAnimationStart");Ot("dblclick","onDoubleClick");Ot("focusin","onFocus");Ot("focusout","onBlur");Ot(Tc,"onTransitionEnd");Sn("onMouseEnter",["mouseout","mouseover"]);Sn("onMouseLeave",["mouseout","mouseover"]);Sn("onPointerEnter",["pointerout","pointerover"]);Sn("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function Is(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,q0(r,t,void 0,e),e.currentTarget=null}function Oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Is(o,a,c),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Is(o,a,c),i=s}}}if(ho)throw e=vl,ho=!1,vl=null,e}function B(e,t){var n=t[zl];n===void 0&&(n=t[zl]=new Set);var r=e+"__bubble";n.has(r)||(Rc(t,e,2,!1),n.add(r))}function Vi(e,t,n){var r=0;t&&(r|=4),Rc(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[Vr]){e[Vr]=!0,Uu.forEach(function(n){n!=="selectionchange"&&(e1.has(n)||Vi(n,!1,e),Vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,Vi("selectionchange",!1,t))}}function Rc(e,t,n,r){switch(yc(t)){case 1:var o=md;break;case 4:o=hd;break;default:o=da}n=o.bind(null,t,n,e),o=void 0,!hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ui(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Vt(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}rc(function(){var c=i,h=sa(n),p=[];e:{var m=Mc.get(e);if(m!==void 0){var S=ma,w=e;switch(e){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":S=Ld;break;case"focusin":w="focus",S=Ri;break;case"focusout":w="blur",S=Ri;break;case"beforeblur":case"afterblur":S=Ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Od;break;case Pc:case jc:case Lc:S=xd;break;case Tc:S=$d;break;case"scroll":S=vd;break;case"wheel":S=Fd;break;case"copy":case"cut":case"paste":S=Cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=zs}var v=(t&4)!==0,j=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var u=c,d;u!==null;){d=u;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=or(u,f),g!=null&&v.push(fr(u,g,d)))),j)break;u=u.return}0<v.length&&(m=new S(m,w,null,n,h),p.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&n!==pl&&(w=n.relatedTarget||n.fromElement)&&(Vt(w)||w[ft]))break e;if((S||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=c,w=w?Vt(w):null,w!==null&&(j=qt(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(v=Es,g="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=zs,g="onPointerLeave",f="onPointerEnter",u="pointer"),j=S==null?m:ln(S),d=w==null?m:ln(w),m=new v(g,u+"leave",S,n,h),m.target=j,m.relatedTarget=d,g=null,Vt(h)===c&&(v=new v(f,u+"enter",w,n,h),v.target=d,v.relatedTarget=j,g=v),j=g,S&&w)t:{for(v=S,f=w,u=0,d=v;d;d=bt(d))u++;for(d=0,g=f;g;g=bt(g))d++;for(;0<u-d;)v=bt(v),u--;for(;0<d-u;)f=bt(f),d--;for(;u--;){if(v===f||f!==null&&v===f.alternate)break t;v=bt(v),f=bt(f)}v=null}else v=null;S!==null&&Fs(p,m,S,v,!1),w!==null&&j!==null&&Fs(p,j,w,v,!0)}}e:{if(m=c?ln(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var E=Wd;else if(js(m))if(Cc)E=Kd;else{E=Yd;var _=Qd}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Xd);if(E&&(E=E(e,c))){kc(p,E,n,h);break e}_&&_(e,m,c),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&sl(m,"number",m.value)}switch(_=c?ln(c):window,e){case"focusin":(js(_)||_.contentEditable==="true")&&(rn=_,Sl=c,Jn=null);break;case"focusout":Jn=Sl=rn=null;break;case"mousedown":xl=!0;break;case"contextmenu":case"mouseup":case"dragend":xl=!1,Rs(p,n,h);break;case"selectionchange":if(Jd)break;case"keydown":case"keyup":Rs(p,n,h)}var C;if(va)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else nn?Sc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(wc&&n.locale!=="ko"&&(nn||P!=="onCompositionStart"?P==="onCompositionEnd"&&nn&&(C=gc()):(St=h,pa="value"in St?St.value:St.textContent,nn=!0)),_=So(c,P),0<_.length&&(P=new _s(P,e,null,n,h),p.push({event:P,listeners:_}),C?P.data=C:(C=xc(n),C!==null&&(P.data=C)))),(C=Ad?Vd(e,n):Ud(e,n))&&(c=So(c,"onBeforeInput"),0<c.length&&(h=new _s("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=C))}Oc(p,t)})}function fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function So(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=or(e,n),i!=null&&r.unshift(fr(e,i,o)),i=or(e,t),i!=null&&r.push(fr(e,i,o))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=or(n,i),s!=null&&l.unshift(fr(n,s,a))):o||(s=or(n,i),s!=null&&l.push(fr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var t1=/\r\n?/g,n1=/\u0000|\uFFFD/g;function Ds(e){return(typeof e=="string"?e:""+e).replace(t1,`
`).replace(n1,"")}function Ur(e,t,n){if(t=Ds(t),Ds(e)!==t&&n)throw Error(x(425))}function xo(){}var kl=null,Cl=null;function El(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _l=typeof setTimeout=="function"?setTimeout:void 0,r1=typeof clearTimeout=="function"?clearTimeout:void 0,As=typeof Promise=="function"?Promise:void 0,o1=typeof queueMicrotask=="function"?queueMicrotask:typeof As<"u"?function(e){return As.resolve(null).then(e).catch(i1)}:_l;function i1(e){setTimeout(function(){throw e})}function Bi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ar(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),et="__reactFiber$"+Ln,dr="__reactProps$"+Ln,ft="__reactContainer$"+Ln,zl="__reactEvents$"+Ln,l1="__reactListeners$"+Ln,a1="__reactHandles$"+Ln;function Vt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vs(e);e!==null;){if(n=e[et])return n;e=Vs(e)}return t}e=n,n=e.parentNode}return null}function zr(e){return e=e[et]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Ho(e){return e[dr]||null}var Nl=[],an=-1;function Rt(e){return{current:e}}function H(e){0>an||(e.current=Nl[an],Nl[an]=null,an--)}function U(e,t){an++,Nl[an]=e.current,e.current=t}var Mt={},he=Rt(Mt),Ce=Rt(!1),Yt=Mt;function xn(e,t){var n=e.type.contextTypes;if(!n)return Mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function ko(){H(Ce),H(he)}function Us(e,t,n){if(he.current!==Mt)throw Error(x(168));U(he,t),U(Ce,n)}function $c(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,Q0(e)||"Unknown",o));return X({},n,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,Yt=he.current,U(he,e),U(Ce,Ce.current),!0}function Bs(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=$c(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,H(Ce),H(he),U(he,e)):H(Ce),U(Ce,n)}var it=null,Wo=!1,Hi=!1;function Ic(e){it===null?it=[e]:it.push(e)}function s1(e){Wo=!0,Ic(e)}function $t(){if(!Hi&&it!==null){Hi=!0;var e=0,t=D;try{var n=it;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,Wo=!1}catch(o){throw it!==null&&(it=it.slice(e+1)),ac(ua,$t),o}finally{D=t,Hi=!1}}return null}var sn=[],un=0,Eo=null,_o=0,$e=[],Ie=0,Xt=null,lt=1,at="";function Dt(e,t){sn[un++]=_o,sn[un++]=Eo,Eo=e,_o=t}function Fc(e,t,n){$e[Ie++]=lt,$e[Ie++]=at,$e[Ie++]=Xt,Xt=e;var r=lt;e=at;var o=32-Xe(r)-1;r&=~(1<<o),n+=1;var i=32-Xe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,lt=1<<32-Xe(t)+o|n<<o|r,at=i+e}else lt=1<<i|n<<o|r,at=e}function ga(e){e.return!==null&&(Dt(e,1),Fc(e,1,0))}function wa(e){for(;e===Eo;)Eo=sn[--un],sn[un]=null,_o=sn[--un],sn[un]=null;for(;e===Xt;)Xt=$e[--Ie],$e[Ie]=null,at=$e[--Ie],$e[Ie]=null,lt=$e[--Ie],$e[Ie]=null}var je=null,Pe=null,W=!1,Ye=null;function Dc(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Pe=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:lt,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Pe=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(W){var t=Pe;if(t){var n=t;if(!Hs(e,t)){if(Pl(e))throw Error(x(418));t=_t(n.nextSibling);var r=je;t&&Hs(e,t)?Dc(r,n):(e.flags=e.flags&-4097|2,W=!1,je=e)}}else{if(Pl(e))throw Error(x(418));e.flags=e.flags&-4097|2,W=!1,je=e}}}function Ws(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Br(e){if(e!==je)return!1;if(!W)return Ws(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!El(e.type,e.memoizedProps)),t&&(t=Pe)){if(Pl(e))throw Ac(),Error(x(418));for(;t;)Dc(e,t),t=_t(t.nextSibling)}if(Ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=je?_t(e.stateNode.nextSibling):null;return!0}function Ac(){for(var e=Pe;e;)e=_t(e.nextSibling)}function kn(){Pe=je=null,W=!1}function Sa(e){Ye===null?Ye=[e]:Ye.push(e)}var u1=mt.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var zo=Rt(null),No=null,cn=null,xa=null;function ka(){xa=cn=No=null}function Ca(e){var t=zo.current;H(zo),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yn(e,t){No=e,xa=cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(xa!==e)if(e={context:e,memoizedValue:t,next:null},cn===null){if(No===null)throw Error(x(308));cn=e,No.dependencies={lanes:0,firstContext:e}}else cn=cn.next=e;return t}var Ut=null;function Ea(e){Ut===null?Ut=[e]:Ut.push(e)}function Vc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ea(t)):(n.next=o.next,o.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function _a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,dt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ea(r)):(t.next=o.next,o.next=t),r.interleaved=t,dt(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ca(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Po(e,t,n,r){var o=e.updateQueue;yt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,h=c=s=null,a=i;do{var m=a.lane,S=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(m=t,S=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){p=w.call(S,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,m=typeof w=="function"?w.call(S,p,m):w,m==null)break e;p=X({},p,m);break e;case 2:yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else S={eventTime:S,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=S,s=p):h=h.next=S,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(s=p),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Gt|=l,e.lanes=l,e.memoizedState=p}}function Ys(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var Bc=new Vu.Component().refs;function Tl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qo={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Pt(e),i=ut(r,o);i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,o),t!==null&&(Ke(t,e,o,r),no(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Pt(e),i=ut(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,o),t!==null&&(Ke(t,e,o,r),no(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Pt(e),o=ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=zt(e,o,r),t!==null&&(Ke(t,e,r,n),no(t,e,r))}};function Xs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!ur(n,r)||!ur(o,i):!0}function Hc(e,t,n){var r=!1,o=Mt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=Ee(t)?Yt:he.current,r=t.contextTypes,i=(r=r!=null)?xn(e,o):Mt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qo.enqueueReplaceState(t,t.state,null)}function Ml(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Bc,_a(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=Ee(t)?Yt:he.current,o.context=xn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Tl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Qo.enqueueReplaceState(o,o.state,null),Po(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Bc&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Hr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gs(e){var t=e._init;return t(e._payload)}function Wc(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=jt(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,d,g){return u===null||u.tag!==6?(u=Zi(d,f.mode,g),u.return=f,u):(u=o(u,d),u.return=f,u)}function s(f,u,d,g){var E=d.type;return E===tn?h(f,u,d.props.children,g,d.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vt&&Gs(E)===u.type)?(g=o(u,d.props),g.ref=An(f,u,d),g.return=f,g):(g=so(d.type,d.key,d.props,null,f.mode,g),g.ref=An(f,u,d),g.return=f,g)}function c(f,u,d,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Ji(d,f.mode,g),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function h(f,u,d,g,E){return u===null||u.tag!==7?(u=Wt(d,f.mode,g,E),u.return=f,u):(u=o(u,d),u.return=f,u)}function p(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Zi(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Mr:return d=so(u.type,u.key,u.props,null,f.mode,d),d.ref=An(f,null,u),d.return=f,d;case en:return u=Ji(u,f.mode,d),u.return=f,u;case vt:var g=u._init;return p(f,g(u._payload),d)}if(Wn(u)||Rn(u))return u=Wt(u,f.mode,d,null),u.return=f,u;Hr(f,u)}return null}function m(f,u,d,g){var E=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:a(f,u,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Mr:return d.key===E?s(f,u,d,g):null;case en:return d.key===E?c(f,u,d,g):null;case vt:return E=d._init,m(f,u,E(d._payload),g)}if(Wn(d)||Rn(d))return E!==null?null:h(f,u,d,g,null);Hr(f,d)}return null}function S(f,u,d,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,a(u,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mr:return f=f.get(g.key===null?d:g.key)||null,s(u,f,g,E);case en:return f=f.get(g.key===null?d:g.key)||null,c(u,f,g,E);case vt:var _=g._init;return S(f,u,d,_(g._payload),E)}if(Wn(g)||Rn(g))return f=f.get(d)||null,h(u,f,g,E,null);Hr(u,g)}return null}function w(f,u,d,g){for(var E=null,_=null,C=u,P=u=0,G=null;C!==null&&P<d.length;P++){C.index>P?(G=C,C=null):G=C.sibling;var O=m(f,C,d[P],g);if(O===null){C===null&&(C=G);break}e&&C&&O.alternate===null&&t(f,C),u=i(O,u,P),_===null?E=O:_.sibling=O,_=O,C=G}if(P===d.length)return n(f,C),W&&Dt(f,P),E;if(C===null){for(;P<d.length;P++)C=p(f,d[P],g),C!==null&&(u=i(C,u,P),_===null?E=C:_.sibling=C,_=C);return W&&Dt(f,P),E}for(C=r(f,C);P<d.length;P++)G=S(C,f,P,d[P],g),G!==null&&(e&&G.alternate!==null&&C.delete(G.key===null?P:G.key),u=i(G,u,P),_===null?E=G:_.sibling=G,_=G);return e&&C.forEach(function(Be){return t(f,Be)}),W&&Dt(f,P),E}function v(f,u,d,g){var E=Rn(d);if(typeof E!="function")throw Error(x(150));if(d=E.call(d),d==null)throw Error(x(151));for(var _=E=null,C=u,P=u=0,G=null,O=d.next();C!==null&&!O.done;P++,O=d.next()){C.index>P?(G=C,C=null):G=C.sibling;var Be=m(f,C,O.value,g);if(Be===null){C===null&&(C=G);break}e&&C&&Be.alternate===null&&t(f,C),u=i(Be,u,P),_===null?E=Be:_.sibling=Be,_=Be,C=G}if(O.done)return n(f,C),W&&Dt(f,P),E;if(C===null){for(;!O.done;P++,O=d.next())O=p(f,O.value,g),O!==null&&(u=i(O,u,P),_===null?E=O:_.sibling=O,_=O);return W&&Dt(f,P),E}for(C=r(f,C);!O.done;P++,O=d.next())O=S(C,f,P,O.value,g),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?P:O.key),u=i(O,u,P),_===null?E=O:_.sibling=O,_=O);return e&&C.forEach(function(Mn){return t(f,Mn)}),W&&Dt(f,P),E}function j(f,u,d,g){if(typeof d=="object"&&d!==null&&d.type===tn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Mr:e:{for(var E=d.key,_=u;_!==null;){if(_.key===E){if(E=d.type,E===tn){if(_.tag===7){n(f,_.sibling),u=o(_,d.props.children),u.return=f,f=u;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vt&&Gs(E)===_.type){n(f,_.sibling),u=o(_,d.props),u.ref=An(f,_,d),u.return=f,f=u;break e}n(f,_);break}else t(f,_);_=_.sibling}d.type===tn?(u=Wt(d.props.children,f.mode,g,d.key),u.return=f,f=u):(g=so(d.type,d.key,d.props,null,f.mode,g),g.ref=An(f,u,d),g.return=f,f=g)}return l(f);case en:e:{for(_=d.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Ji(d,f.mode,g),u.return=f,f=u}return l(f);case vt:return _=d._init,j(f,u,_(d._payload),g)}if(Wn(d))return w(f,u,d,g);if(Rn(d))return v(f,u,d,g);Hr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=Zi(d,f.mode,g),u.return=f,f=u),l(f)):n(f,u)}return j}var Cn=Wc(!0),Qc=Wc(!1),Nr={},nt=Rt(Nr),pr=Rt(Nr),mr=Rt(Nr);function Bt(e){if(e===Nr)throw Error(x(174));return e}function za(e,t){switch(U(mr,t),U(pr,e),U(nt,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cl(t,e)}H(nt),U(nt,t)}function En(){H(nt),H(pr),H(mr)}function Yc(e){Bt(mr.current);var t=Bt(nt.current),n=cl(t,e.type);t!==n&&(U(pr,e),U(nt,n))}function Na(e){pr.current===e&&(H(nt),H(pr))}var Q=Rt(0);function jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wi=[];function Pa(){for(var e=0;e<Wi.length;e++)Wi[e]._workInProgressVersionPrimary=null;Wi.length=0}var ro=mt.ReactCurrentDispatcher,Qi=mt.ReactCurrentBatchConfig,Kt=0,Y=null,ee=null,oe=null,Lo=!1,qn=!1,hr=0,c1=0;function fe(){throw Error(x(321))}function ja(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function La(e,t,n,r,o,i){if(Kt=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?m1:h1,e=n(r,o),qn){i=0;do{if(qn=!1,hr=0,25<=i)throw Error(x(301));i+=1,oe=ee=null,t.updateQueue=null,ro.current=v1,e=n(r,o)}while(qn)}if(ro.current=To,t=ee!==null&&ee.next!==null,Kt=0,oe=ee=Y=null,Lo=!1,t)throw Error(x(300));return e}function Ta(){var e=hr!==0;return hr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Y.memoizedState=oe=e:oe=oe.next=e,oe}function Ve(){if(ee===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=oe===null?Y.memoizedState:oe.next;if(t!==null)oe=t,ee=e;else{if(e===null)throw Error(x(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},oe===null?Y.memoizedState=oe=e:oe=oe.next=e}return oe}function vr(e,t){return typeof t=="function"?t(e):t}function Yi(e){var t=Ve(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,c=i;do{var h=c.lane;if((Kt&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,Y.lanes|=h,Gt|=h}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=a,Ge(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,Gt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xi(e){var t=Ve(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ge(i,t.memoizedState)||(ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Xc(){}function Kc(e,t){var n=Y,r=Ve(),o=t(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,ke=!0),r=r.queue,Ma(Jc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,yr(9,Zc.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(x(349));Kt&30||Gc(n,t,o)}return o}function Gc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zc(e,t,n,r){t.value=n,t.getSnapshot=r,qc(t)&&bc(e)}function Jc(e,t,n){return n(function(){qc(t)&&bc(e)})}function qc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function bc(e){var t=dt(e,1);t!==null&&Ke(t,e,1,-1)}function Zs(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},t.queue=e,e=e.dispatch=p1.bind(null,Y,e),[t.memoizedState,e]}function yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ef(){return Ve().memoizedState}function oo(e,t,n,r){var o=Je();Y.flags|=e,o.memoizedState=yr(1|t,n,void 0,r===void 0?null:r)}function Yo(e,t,n,r){var o=Ve();r=r===void 0?null:r;var i=void 0;if(ee!==null){var l=ee.memoizedState;if(i=l.destroy,r!==null&&ja(r,l.deps)){o.memoizedState=yr(t,n,i,r);return}}Y.flags|=e,o.memoizedState=yr(1|t,n,i,r)}function Js(e,t){return oo(8390656,8,e,t)}function Ma(e,t){return Yo(2048,8,e,t)}function tf(e,t){return Yo(4,2,e,t)}function nf(e,t){return Yo(4,4,e,t)}function rf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function of(e,t,n){return n=n!=null?n.concat([e]):null,Yo(4,4,rf.bind(null,t,e),n)}function Oa(){}function lf(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ja(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function af(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ja(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sf(e,t,n){return Kt&21?(Ge(n,t)||(n=cc(),Y.lanes|=n,Gt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function f1(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Qi.transition;Qi.transition={};try{e(!1),t()}finally{D=n,Qi.transition=r}}function uf(){return Ve().memoizedState}function d1(e,t,n){var r=Pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cf(e))ff(t,n);else if(n=Vc(e,t,n,r),n!==null){var o=ge();Ke(n,e,r,o),df(n,t,r)}}function p1(e,t,n){var r=Pt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cf(e))ff(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Ge(a,l)){var s=t.interleaved;s===null?(o.next=o,Ea(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Vc(e,t,o,r),n!==null&&(o=ge(),Ke(n,e,r,o),df(n,t,r))}}function cf(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function ff(e,t){qn=Lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function df(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ca(e,n)}}var To={readContext:Ae,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},m1={readContext:Ae,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Js,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oo(4194308,4,rf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return oo(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=d1.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Zs,useDebugValue:Oa,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Zs(!1),t=e[0];return e=f1.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=Je();if(W){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ie===null)throw Error(x(349));Kt&30||Gc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Js(Jc.bind(null,r,i,e),[e]),r.flags|=2048,yr(9,Zc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=ie.identifierPrefix;if(W){var n=at,r=lt;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=c1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},h1={readContext:Ae,useCallback:lf,useContext:Ae,useEffect:Ma,useImperativeHandle:of,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:af,useReducer:Yi,useRef:ef,useState:function(){return Yi(vr)},useDebugValue:Oa,useDeferredValue:function(e){var t=Ve();return sf(t,ee.memoizedState,e)},useTransition:function(){var e=Yi(vr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Xc,useSyncExternalStore:Kc,useId:uf,unstable_isNewReconciler:!1},v1={readContext:Ae,useCallback:lf,useContext:Ae,useEffect:Ma,useImperativeHandle:of,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:af,useReducer:Xi,useRef:ef,useState:function(){return Xi(vr)},useDebugValue:Oa,useDeferredValue:function(e){var t=Ve();return ee===null?t.memoizedState=e:sf(t,ee.memoizedState,e)},useTransition:function(){var e=Xi(vr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Xc,useSyncExternalStore:Kc,useId:uf,unstable_isNewReconciler:!1};function _n(e,t){try{var n="",r=t;do n+=W0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var y1=typeof WeakMap=="function"?WeakMap:Map;function pf(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oo||(Oo=!0,Hl=r),Ol(e,t)},n}function mf(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ol(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function qs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new y1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=T1.bind(null,e,t,n),t.then(e,e))}function bs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var g1=mt.ReactCurrentOwner,ke=!1;function ye(e,t,n,r){t.child=e===null?Qc(t,null,n,r):Cn(t,e.child,n,r)}function tu(e,t,n,r,o){n=n.render;var i=t.ref;return yn(t,o),r=La(e,t,n,r,i,o),n=Ta(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pt(e,t,o)):(W&&n&&ga(t),t.flags|=1,ye(e,t,r,o),t.child)}function nu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ua(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hf(e,t,i,r,o)):(e=so(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:ur,n(l,r)&&e.ref===t.ref)return pt(e,t,o)}return t.flags|=1,e=jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function hf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ur(i,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,pt(e,t,o)}return Rl(e,t,n,r,o)}function vf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(dn,Ne),Ne|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(dn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(dn,Ne),Ne|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(dn,Ne),Ne|=r;return ye(e,t,o,n),t.child}function yf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rl(e,t,n,r,o){var i=Ee(n)?Yt:he.current;return i=xn(t,i),yn(t,o),n=La(e,t,n,r,i,o),r=Ta(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,pt(e,t,o)):(W&&r&&ga(t),t.flags|=1,ye(e,t,n,o),t.child)}function ru(e,t,n,r,o){if(Ee(n)){var i=!0;Co(t)}else i=!1;if(yn(t,o),t.stateNode===null)io(e,t),Hc(t,n,r),Ml(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=Ee(n)?Yt:he.current,c=xn(t,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Ks(t,l,r,c),yt=!1;var m=t.memoizedState;l.state=m,Po(t,r,l,o),s=t.memoizedState,a!==r||m!==s||Ce.current||yt?(typeof h=="function"&&(Tl(t,n,h,r),s=t.memoizedState),(a=yt||Xs(t,n,a,r,m,s,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Uc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:We(t.type,a),l.props=c,p=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ae(s):(s=Ee(n)?Yt:he.current,s=xn(t,s));var S=n.getDerivedStateFromProps;(h=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||m!==s)&&Ks(t,l,r,s),yt=!1,m=t.memoizedState,l.state=m,Po(t,r,l,o);var w=t.memoizedState;a!==p||m!==w||Ce.current||yt?(typeof S=="function"&&(Tl(t,n,S,r),w=t.memoizedState),(c=yt||Xs(t,n,c,r,m,w,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $l(e,t,n,r,i,o)}function $l(e,t,n,r,o,i){yf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Bs(t,n,!1),pt(e,t,i);r=t.stateNode,g1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Cn(t,e.child,null,i),t.child=Cn(t,null,a,i)):ye(e,t,a,i),t.memoizedState=r.state,o&&Bs(t,n,!0),t.child}function gf(e){var t=e.stateNode;t.pendingContext?Us(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Us(e,t.context,!1),za(e,t.containerInfo)}function ou(e,t,n,r,o){return kn(),Sa(o),t.flags|=256,ye(e,t,n,r),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function wf(e,t,n){var r=t.pendingProps,o=Q.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(Q,o&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Go(l,r,0,null),e=Wt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fl(n),t.memoizedState=Il,e):Ra(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return w1(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=jt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=jt(a,i):(i=Wt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Fl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Il,r}return i=e.child,e=i.sibling,r=jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ra(e,t){return t=Go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wr(e,t,n,r){return r!==null&&Sa(r),Cn(t,e.child,null,n),e=Ra(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function w1(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ki(Error(x(422))),Wr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Go({mode:"visible",children:r.children},o,0,null),i=Wt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Cn(t,e.child,null,l),t.child.memoizedState=Fl(l),t.memoizedState=Il,i);if(!(t.mode&1))return Wr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=Ki(i,r,void 0),Wr(e,t,l,r)}if(a=(l&e.childLanes)!==0,ke||a){if(r=ie,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,dt(e,o),Ke(r,e,o,-1))}return Va(),r=Ki(Error(x(421))),Wr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=M1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Pe=_t(o.nextSibling),je=t,W=!0,Ye=null,e!==null&&($e[Ie++]=lt,$e[Ie++]=at,$e[Ie++]=Xt,lt=e.id,at=e.overflow,Xt=t),t=Ra(t,r.children),t.flags|=4096,t)}function iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function Gi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Sf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ye(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iu(e,n,t);else if(e.tag===19)iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&jo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Gi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&jo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Gi(t,!0,n,null,i);break;case"together":Gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function S1(e,t,n){switch(t.tag){case 3:gf(t),kn();break;case 5:Yc(t);break;case 1:Ee(t.type)&&Co(t);break;case 4:za(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(zo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?wf(e,t,n):(U(Q,Q.current&1),e=pt(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,vf(e,t,n)}return pt(e,t,n)}var xf,Dl,kf,Cf;xf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dl=function(){};kf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Bt(nt.current);var i=null;switch(n){case"input":o=ll(e,o),r=ll(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=ul(e,o),r=ul(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xo)}fl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(nr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(nr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&B("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function x1(e,t,n){var r=t.pendingProps;switch(wa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ee(t.type)&&ko(),de(t),null;case 3:return r=t.stateNode,En(),H(Ce),H(he),Pa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Yl(Ye),Ye=null))),Dl(e,t),de(t),null;case 5:Na(t);var o=Bt(mr.current);if(n=t.type,e!==null&&t.stateNode!=null)kf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return de(t),null}if(e=Bt(nt.current),Br(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[et]=t,r[dr]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Yn.length;o++)B(Yn[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ms(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":vs(r,i),B("invalid",r)}fl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ur(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ur(r.textContent,a,e),o=["children",""+a]):nr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":Or(r),hs(r,i,!0);break;case"textarea":Or(r),ys(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[et]=t,e[dr]=r,xf(e,t,!1,!1),t.stateNode=e;e:{switch(l=dl(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Yn.length;o++)B(Yn[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":ms(e,r),o=ll(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),B("invalid",e);break;case"textarea":vs(e,r),o=ul(e,r),B("invalid",e);break;default:o=r}fl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?qu(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Zu(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&rr(e,s):typeof s=="number"&&rr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(nr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&B("scroll",e):s!=null&&oa(e,i,s,l))}switch(n){case"input":Or(e),hs(e,r,!1);break;case"textarea":Or(e),ys(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?pn(e,!!r.multiple,i,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Bt(mr.current),Bt(nt.current),Br(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Ur(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ur(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return de(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Pe!==null&&t.mode&1&&!(t.flags&128))Ac(),kn(),t.flags|=98560,i=!1;else if(i=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[et]=t}else kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Ye!==null&&(Yl(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):Va())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return En(),Dl(e,t),e===null&&cr(t.stateNode.containerInfo),de(t),null;case 10:return Ca(t.type._context),de(t),null;case 17:return Ee(t.type)&&ko(),de(t),null;case 19:if(H(Q),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Vn(i,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=jo(e),l!==null){for(t.flags|=128,Vn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>zn&&(t.flags|=128,r=!0,Vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=jo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!W)return de(t),null}else 2*J()-i.renderingStartTime>zn&&n!==1073741824&&(t.flags|=128,r=!0,Vn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Aa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function k1(e,t){switch(wa(t),t.tag){case 1:return Ee(t.type)&&ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(),H(Ce),H(he),Pa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Na(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return En(),null;case 10:return Ca(t.type._context),null;case 22:case 23:return Aa(),null;case 24:return null;default:return null}}var Qr=!1,me=!1,C1=typeof WeakSet=="function"?WeakSet:Set,z=null;function fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Al(e,t,n){try{n()}catch(r){K(e,t,r)}}var lu=!1;function E1(e,t){if(kl=go,e=zc(),ya(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,h=0,p=e,m=null;t:for(;;){for(var S;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===e)break t;if(m===n&&++c===o&&(a=l),m===i&&++h===r&&(s=l),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},go=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,j=w.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:We(t.type,v),j);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(g){K(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return w=lu,lu=!1,w}function bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Al(t,n,i)}o=o.next}while(o!==r)}}function Xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ef(e){var t=e.alternate;t!==null&&(e.alternate=null,Ef(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[dr],delete t[zl],delete t[l1],delete t[a1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xo));else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function Bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bl(e,t,n),e=e.sibling;e!==null;)Bl(e,t,n),e=e.sibling}var ae=null,Qe=!1;function ht(e,t,n){for(n=n.child;n!==null;)zf(e,t,n),n=n.sibling}function zf(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Ao,n)}catch{}switch(n.tag){case 5:me||fn(n,t);case 6:var r=ae,o=Qe;ae=null,ht(e,t,n),ae=r,Qe=o,ae!==null&&(Qe?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Qe?(e=ae,n=n.stateNode,e.nodeType===8?Bi(e.parentNode,n):e.nodeType===1&&Bi(e,n),ar(e)):Bi(ae,n.stateNode));break;case 4:r=ae,o=Qe,ae=n.stateNode.containerInfo,Qe=!0,ht(e,t,n),ae=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Al(n,t,l),o=o.next}while(o!==r)}ht(e,t,n);break;case 1:if(!me&&(fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,ht(e,t,n),me=r):ht(e,t,n);break;default:ht(e,t,n)}}function su(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new C1),t.forEach(function(r){var o=O1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ae=a.stateNode,Qe=!1;break e;case 3:ae=a.stateNode.containerInfo,Qe=!0;break e;case 4:ae=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(ae===null)throw Error(x(160));zf(i,l,o),ae=null,Qe=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){K(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nf(t,e),t=t.sibling}function Nf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Ze(e),r&4){try{bn(3,e,e.return),Xo(3,e)}catch(v){K(e,e.return,v)}try{bn(5,e,e.return)}catch(v){K(e,e.return,v)}}break;case 1:He(t,e),Ze(e),r&512&&n!==null&&fn(n,n.return);break;case 5:if(He(t,e),Ze(e),r&512&&n!==null&&fn(n,n.return),e.flags&32){var o=e.stateNode;try{rr(o,"")}catch(v){K(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Xu(o,i),dl(a,l);var c=dl(a,i);for(l=0;l<s.length;l+=2){var h=s[l],p=s[l+1];h==="style"?qu(o,p):h==="dangerouslySetInnerHTML"?Zu(o,p):h==="children"?rr(o,p):oa(o,h,p,c)}switch(a){case"input":al(o,i);break;case"textarea":Ku(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?pn(o,!!i.multiple,S,!1):m!==!!i.multiple&&(i.defaultValue!=null?pn(o,!!i.multiple,i.defaultValue,!0):pn(o,!!i.multiple,i.multiple?[]:"",!1))}o[dr]=i}catch(v){K(e,e.return,v)}}break;case 6:if(He(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){K(e,e.return,v)}}break;case 3:if(He(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ar(t.containerInfo)}catch(v){K(e,e.return,v)}break;case 4:He(t,e),Ze(e);break;case 13:He(t,e),Ze(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Fa=J())),r&4&&su(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||h,He(t,e),me=c):He(t,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(z=e,h=e.child;h!==null;){for(p=z=h;z!==null;){switch(m=z,S=m.child,m.tag){case 0:case 11:case 14:case 15:bn(4,m,m.return);break;case 1:fn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){K(r,n,v)}}break;case 5:fn(m,m.return);break;case 22:if(m.memoizedState!==null){cu(p);continue}}S!==null?(S.return=m,z=S):cu(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ju("display",l))}catch(v){K(e,e.return,v)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(v){K(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:He(t,e),Ze(e),r&4&&su(e);break;case 21:break;default:He(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_f(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(rr(o,""),r.flags&=-33);var i=au(e);Bl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=au(e);Ul(e,a,l);break;default:throw Error(x(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _1(e,t,n){z=e,Pf(e)}function Pf(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Qr;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||me;a=Qr;var c=me;if(Qr=l,(me=s)&&!c)for(z=o;z!==null;)l=z,s=l.child,l.tag===22&&l.memoizedState!==null?fu(o):s!==null?(s.return=l,z=s):fu(o);for(;i!==null;)z=i,Pf(i),i=i.sibling;z=o,Qr=a,me=c}uu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):uu(e)}}function uu(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Xo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ys(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ys(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ar(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}me||t.flags&512&&Vl(t)}catch(m){K(t,t.return,m)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function cu(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function fu(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xo(4,t)}catch(s){K(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){K(t,o,s)}}var i=t.return;try{Vl(t)}catch(s){K(t,i,s)}break;case 5:var l=t.return;try{Vl(t)}catch(s){K(t,l,s)}}}catch(s){K(t,t.return,s)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var z1=Math.ceil,Mo=mt.ReactCurrentDispatcher,$a=mt.ReactCurrentOwner,De=mt.ReactCurrentBatchConfig,R=0,ie=null,b=null,ue=0,Ne=0,dn=Rt(0),te=0,gr=null,Gt=0,Ko=0,Ia=0,er=null,xe=null,Fa=0,zn=1/0,ot=null,Oo=!1,Hl=null,Nt=null,Yr=!1,xt=null,Ro=0,tr=0,Wl=null,lo=-1,ao=0;function ge(){return R&6?J():lo!==-1?lo:lo=J()}function Pt(e){return e.mode&1?R&2&&ue!==0?ue&-ue:u1.transition!==null?(ao===0&&(ao=cc()),ao):(e=D,e!==0||(e=window.event,e=e===void 0?16:yc(e.type)),e):1}function Ke(e,t,n,r){if(50<tr)throw tr=0,Wl=null,Error(x(185));Er(e,n,r),(!(R&2)||e!==ie)&&(e===ie&&(!(R&2)&&(Ko|=n),te===4&&wt(e,ue)),_e(e,r),n===1&&R===0&&!(t.mode&1)&&(zn=J()+500,Wo&&$t()))}function _e(e,t){var n=e.callbackNode;ud(e,t);var r=yo(e,e===ie?ue:0);if(r===0)n!==null&&Ss(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ss(n),t===1)e.tag===0?s1(du.bind(null,e)):Ic(du.bind(null,e)),o1(function(){!(R&6)&&$t()}),n=null;else{switch(fc(r)){case 1:n=ua;break;case 4:n=sc;break;case 16:n=vo;break;case 536870912:n=uc;break;default:n=vo}n=If(n,jf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jf(e,t){if(lo=-1,ao=0,R&6)throw Error(x(327));var n=e.callbackNode;if(gn()&&e.callbackNode!==n)return null;var r=yo(e,e===ie?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$o(e,r);else{t=r;var o=R;R|=2;var i=Tf();(ie!==e||ue!==t)&&(ot=null,zn=J()+500,Ht(e,t));do try{j1();break}catch(a){Lf(e,a)}while(!0);ka(),Mo.current=i,R=o,b!==null?t=0:(ie=null,ue=0,t=te)}if(t!==0){if(t===2&&(o=yl(e),o!==0&&(r=o,t=Ql(e,o))),t===1)throw n=gr,Ht(e,0),wt(e,r),_e(e,J()),n;if(t===6)wt(e,r);else{if(o=e.current.alternate,!(r&30)&&!N1(o)&&(t=$o(e,r),t===2&&(i=yl(e),i!==0&&(r=i,t=Ql(e,i))),t===1))throw n=gr,Ht(e,0),wt(e,r),_e(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:At(e,xe,ot);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=Fa+500-J(),10<t)){if(yo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_l(At.bind(null,e,xe,ot),t);break}At(e,xe,ot);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Xe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*z1(r/1960))-r,10<r){e.timeoutHandle=_l(At.bind(null,e,xe,ot),r);break}At(e,xe,ot);break;case 5:At(e,xe,ot);break;default:throw Error(x(329))}}}return _e(e,J()),e.callbackNode===n?jf.bind(null,e):null}function Ql(e,t){var n=er;return e.current.memoizedState.isDehydrated&&(Ht(e,t).flags|=256),e=$o(e,t),e!==2&&(t=xe,xe=n,t!==null&&Yl(t)),e}function Yl(e){xe===null?xe=e:xe.push.apply(xe,e)}function N1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~Ia,t&=~Ko,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if(R&6)throw Error(x(327));gn();var t=yo(e,0);if(!(t&1))return _e(e,J()),null;var n=$o(e,t);if(e.tag!==0&&n===2){var r=yl(e);r!==0&&(t=r,n=Ql(e,r))}if(n===1)throw n=gr,Ht(e,0),wt(e,t),_e(e,J()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,At(e,xe,ot),_e(e,J()),null}function Da(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(zn=J()+500,Wo&&$t())}}function Zt(e){xt!==null&&xt.tag===0&&!(R&6)&&gn();var t=R;R|=1;var n=De.transition,r=D;try{if(De.transition=null,D=1,e)return e()}finally{D=r,De.transition=n,R=t,!(R&6)&&$t()}}function Aa(){Ne=dn.current,H(dn)}function Ht(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,r1(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:En(),H(Ce),H(he),Pa();break;case 5:Na(r);break;case 4:En();break;case 13:H(Q);break;case 19:H(Q);break;case 10:Ca(r.type._context);break;case 22:case 23:Aa()}n=n.return}if(ie=e,b=e=jt(e.current,null),ue=Ne=t,te=0,gr=null,Ia=Ko=Gt=0,xe=er=null,Ut!==null){for(t=0;t<Ut.length;t++)if(n=Ut[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Ut=null}return e}function Lf(e,t){do{var n=b;try{if(ka(),ro.current=To,Lo){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Lo=!1}if(Kt=0,oe=ee=Y=null,qn=!1,hr=0,$a.current=null,n===null||n.return===null){te=1,gr=t,b=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=bs(l);if(S!==null){S.flags&=-257,eu(S,l,a,i,t),S.mode&1&&qs(i,c,t),t=S,s=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(s),t.updateQueue=v}else w.add(s);break e}else{if(!(t&1)){qs(i,c,t),Va();break e}s=Error(x(426))}}else if(W&&a.mode&1){var j=bs(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),eu(j,l,a,i,t),Sa(_n(s,a));break e}}i=s=_n(s,a),te!==4&&(te=2),er===null?er=[i]:er.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=pf(i,s,t);Qs(i,f);break e;case 1:a=s;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Nt===null||!Nt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=mf(i,a,t);Qs(i,g);break e}}i=i.return}while(i!==null)}Of(n)}catch(E){t=E,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function Tf(){var e=Mo.current;return Mo.current=To,e===null?To:e}function Va(){(te===0||te===3||te===2)&&(te=4),ie===null||!(Gt&268435455)&&!(Ko&268435455)||wt(ie,ue)}function $o(e,t){var n=R;R|=2;var r=Tf();(ie!==e||ue!==t)&&(ot=null,Ht(e,t));do try{P1();break}catch(o){Lf(e,o)}while(!0);if(ka(),R=n,Mo.current=r,b!==null)throw Error(x(261));return ie=null,ue=0,te}function P1(){for(;b!==null;)Mf(b)}function j1(){for(;b!==null&&!ed();)Mf(b)}function Mf(e){var t=$f(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Of(e):b=t,$a.current=null}function Of(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=k1(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,b=null;return}}else if(n=x1(n,t,Ne),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);te===0&&(te=5)}function At(e,t,n){var r=D,o=De.transition;try{De.transition=null,D=1,L1(e,t,n,r)}finally{De.transition=o,D=r}return null}function L1(e,t,n,r){do gn();while(xt!==null);if(R&6)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(cd(e,i),e===ie&&(b=ie=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yr||(Yr=!0,If(vo,function(){return gn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=De.transition,De.transition=null;var l=D;D=1;var a=R;R|=4,$a.current=null,E1(e,n),Nf(n,e),Zd(Cl),go=!!kl,Cl=kl=null,e.current=n,_1(n),td(),R=a,D=l,De.transition=i}else e.current=n;if(Yr&&(Yr=!1,xt=e,Ro=o),i=e.pendingLanes,i===0&&(Nt=null),od(n.stateNode),_e(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Oo)throw Oo=!1,e=Hl,Hl=null,e;return Ro&1&&e.tag!==0&&gn(),i=e.pendingLanes,i&1?e===Wl?tr++:(tr=0,Wl=e):tr=0,$t(),null}function gn(){if(xt!==null){var e=fc(Ro),t=De.transition,n=D;try{if(De.transition=null,D=16>e?16:e,xt===null)var r=!1;else{if(e=xt,xt=null,Ro=0,R&6)throw Error(x(331));var o=R;for(R|=4,z=e.current;z!==null;){var i=z,l=i.child;if(z.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(z=c;z!==null;){var h=z;switch(h.tag){case 0:case 11:case 15:bn(8,h,i)}var p=h.child;if(p!==null)p.return=h,z=p;else for(;z!==null;){h=z;var m=h.sibling,S=h.return;if(Ef(h),h===c){z=null;break}if(m!==null){m.return=S,z=m;break}z=S}}}var w=i.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}z=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,z=l;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:bn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,z=f;break e}z=i.return}}var u=e.current;for(z=u;z!==null;){l=z;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,z=d;else e:for(l=u;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xo(9,a)}}catch(E){K(a,a.return,E)}if(a===l){z=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,z=g;break e}z=a.return}}if(R=o,$t(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Ao,e)}catch{}r=!0}return r}finally{D=n,De.transition=t}}return!1}function pu(e,t,n){t=_n(n,t),t=pf(e,t,1),e=zt(e,t,1),t=ge(),e!==null&&(Er(e,1,t),_e(e,t))}function K(e,t,n){if(e.tag===3)pu(e,e,n);else for(;t!==null;){if(t.tag===3){pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=_n(n,e),e=mf(t,e,1),t=zt(t,e,1),e=ge(),t!==null&&(Er(t,1,e),_e(t,e));break}}t=t.return}}function T1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ue&n)===n&&(te===4||te===3&&(ue&130023424)===ue&&500>J()-Fa?Ht(e,0):Ia|=n),_e(e,t)}function Rf(e,t){t===0&&(e.mode&1?(t=Ir,Ir<<=1,!(Ir&130023424)&&(Ir=4194304)):t=1);var n=ge();e=dt(e,t),e!==null&&(Er(e,t,n),_e(e,n))}function M1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rf(e,n)}function O1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Rf(e,n)}var $f;$f=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,S1(e,t,n);ke=!!(e.flags&131072)}else ke=!1,W&&t.flags&1048576&&Fc(t,_o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;io(e,t),e=t.pendingProps;var o=xn(t,he.current);yn(t,n),o=La(null,t,r,e,o,n);var i=Ta();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(i=!0,Co(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,_a(t),o.updater=Qo,t.stateNode=o,o._reactInternals=t,Ml(t,r,e,n),t=$l(null,t,r,!0,i,n)):(t.tag=0,W&&i&&ga(t),ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(io(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=$1(r),e=We(r,e),o){case 0:t=Rl(null,t,r,e,n);break e;case 1:t=ru(null,t,r,e,n);break e;case 11:t=tu(null,t,r,e,n);break e;case 14:t=nu(null,t,r,We(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Rl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),ru(e,t,r,o,n);case 3:e:{if(gf(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Uc(e,t),Po(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=_n(Error(x(423)),t),t=ou(e,t,r,n,o);break e}else if(r!==o){o=_n(Error(x(424)),t),t=ou(e,t,r,n,o);break e}else for(Pe=_t(t.stateNode.containerInfo.firstChild),je=t,W=!0,Ye=null,n=Qc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kn(),r===o){t=pt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return Yc(t),e===null&&jl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,El(r,o)?l=null:i!==null&&El(r,i)&&(t.flags|=32),yf(e,t),ye(e,t,l,n),t.child;case 6:return e===null&&jl(t),null;case 13:return wf(e,t,n);case 4:return za(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),tu(e,t,r,o,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,U(zo,r._currentValue),r._currentValue=l,i!==null)if(Ge(i.value,l)){if(i.children===o.children&&!Ce.current){t=pt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=ut(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ll(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(x(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ll(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,yn(t,n),o=Ae(o),r=r(o),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,o=We(r,t.pendingProps),o=We(r.type,o),nu(e,t,r,o,n);case 15:return hf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),io(e,t),t.tag=1,Ee(r)?(e=!0,Co(t)):e=!1,yn(t,n),Hc(t,r,o),Ml(t,r,o,n),$l(null,t,r,!0,e,n);case 19:return Sf(e,t,n);case 22:return vf(e,t,n)}throw Error(x(156,t.tag))};function If(e,t){return ac(e,t)}function R1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new R1(e,t,n,r)}function Ua(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $1(e){if(typeof e=="function")return Ua(e)?1:0;if(e!=null){if(e=e.$$typeof,e===la)return 11;if(e===aa)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function so(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ua(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case tn:return Wt(n.children,o,i,t);case ia:l=8,o|=8;break;case nl:return e=Fe(12,n,t,o|2),e.elementType=nl,e.lanes=i,e;case rl:return e=Fe(13,n,t,o),e.elementType=rl,e.lanes=i,e;case ol:return e=Fe(19,n,t,o),e.elementType=ol,e.lanes=i,e;case Wu:return Go(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bu:l=10;break e;case Hu:l=9;break e;case la:l=11;break e;case aa:l=14;break e;case vt:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Wt(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Go(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Wu,e.lanes=n,e.stateNode={isHidden:!1},e}function Zi(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function Ji(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function I1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ti(0),this.expirationTimes=Ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ba(e,t,n,r,o,i,l,a,s){return e=new I1(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_a(i),e}function F1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:en,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ff(e){if(!e)return Mt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(Ee(n))return $c(e,n,t)}return t}function Df(e,t,n,r,o,i,l,a,s){return e=Ba(n,r,!0,e,o,i,l,a,s),e.context=Ff(null),n=e.current,r=ge(),o=Pt(n),i=ut(r,o),i.callback=t??null,zt(n,i,o),e.current.lanes=o,Er(e,o,r),_e(e,r),e}function Zo(e,t,n,r){var o=t.current,i=ge(),l=Pt(o);return n=Ff(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(o,t,l),e!==null&&(Ke(e,o,l,i),no(e,o,l)),l}function Io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ha(e,t){mu(e,t),(e=e.alternate)&&mu(e,t)}function D1(){return null}var Af=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wa(e){this._internalRoot=e}Jo.prototype.render=Wa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Zo(e,t,null,null)};Jo.prototype.unmount=Wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){Zo(null,e,null,null)}),t[ft]=null}};function Jo(e){this._internalRoot=e}Jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=mc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&vc(e)}};function Qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hu(){}function A1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Io(l);i.call(c)}}var l=Df(t,r,e,0,null,!1,!1,"",hu);return e._reactRootContainer=l,e[ft]=l.current,cr(e.nodeType===8?e.parentNode:e),Zt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Io(s);a.call(c)}}var s=Ba(e,0,!1,null,null,!1,!1,"",hu);return e._reactRootContainer=s,e[ft]=s.current,cr(e.nodeType===8?e.parentNode:e),Zt(function(){Zo(t,s,n,r)}),s}function bo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Io(l);a.call(s)}}Zo(t,l,e,o)}else l=A1(n,t,e,o,r);return Io(l)}dc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qn(t.pendingLanes);n!==0&&(ca(t,n|1),_e(t,J()),!(R&6)&&(zn=J()+500,$t()))}break;case 13:Zt(function(){var r=dt(e,1);if(r!==null){var o=ge();Ke(r,e,1,o)}}),Ha(e,1)}};fa=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ge();Ke(t,e,134217728,n)}Ha(e,134217728)}};pc=function(e){if(e.tag===13){var t=Pt(e),n=dt(e,t);if(n!==null){var r=ge();Ke(n,e,t,r)}Ha(e,t)}};mc=function(){return D};hc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};ml=function(e,t,n){switch(t){case"input":if(al(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ho(r);if(!o)throw Error(x(90));Yu(r),al(r,o)}}}break;case"textarea":Ku(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}};tc=Da;nc=Zt;var V1={usingClientEntryPoint:!1,Events:[zr,ln,Ho,bu,ec,Da]},Un={findFiberByHostInstance:Vt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},U1={bundleType:Un.bundleType,version:Un.version,rendererPackageName:Un.rendererPackageName,rendererConfig:Un.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ic(e),e===null?null:e.stateNode},findFiberByHostInstance:Un.findFiberByHostInstance||D1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{Ao=Xr.inject(U1),tt=Xr}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V1;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qa(t))throw Error(x(200));return F1(e,t,null,n)};Me.createRoot=function(e,t){if(!Qa(e))throw Error(x(299));var n=!1,r="",o=Af;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ba(e,1,!1,null,null,n,!1,r,o),e[ft]=t.current,cr(e.nodeType===8?e.parentNode:e),new Wa(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=ic(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return Zt(e)};Me.hydrate=function(e,t,n){if(!qo(t))throw Error(x(200));return bo(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!Qa(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Af;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Df(t,null,e,1,n??null,o,!1,i,l),e[ft]=t.current,cr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Jo(t)};Me.render=function(e,t,n){if(!qo(t))throw Error(x(200));return bo(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!qo(e))throw Error(x(40));return e._reactRootContainer?(Zt(function(){bo(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Me.unstable_batchedUpdates=Da;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qo(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return bo(e,t,n,!1,r)};Me.version="18.2.0-next-9e3b772b8-20220608";function Vf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vf)}catch(e){console.error(e)}}Vf(),Fu.exports=Me;var B1=Fu.exports,vu=B1;el.createRoot=vu.createRoot,el.hydrateRoot=vu.hydrateRoot;var Uf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yu=st.createContext&&st.createContext(Uf),Lt=function(){return Lt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Lt.apply(this,arguments)},H1=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Bf(e){return e&&e.map(function(t,n){return st.createElement(t.tag,Lt({key:n},t.attr),Bf(t.child))})}function ve(e){return function(t){return st.createElement(W1,Lt({attr:Lt({},e.attr)},t),Bf(e.child))}}function W1(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=H1(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),st.createElement("svg",Lt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Lt(Lt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&st.createElement("title",null,i),e.children)};return yu!==void 0?st.createElement(yu.Consumer,null,function(n){return t(n)}):t(Uf)}function Q1(e){return ve({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"}}]})(e)}function Y1(e){return ve({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.59 334.24c48.57 3.31 58.95 2.11 58.95 11.94 0 20-65.55 20.06-65.55 1.52.01-5.09 3.29-9.4 6.6-13.46zm27.95-116.64c-32.29 0-33.75 44.47-.75 44.47 32.51 0 31.71-44.47.75-44.47zM448 80v352a48 48 0 0 1-48 48H48a48 48 0 0 1-48-48V80a48 48 0 0 1 48-48h352a48 48 0 0 1 48 48zm-227 69.31c0 14.49 8.38 22.88 22.86 22.88 14.74 0 23.13-8.39 23.13-22.88S258.62 127 243.88 127c-14.48 0-22.88 7.84-22.88 22.31zM199.18 195h-49.55c-25-6.55-81.56-4.85-81.56 46.75 0 18.8 9.4 32 21.85 38.11C74.23 294.23 66.8 301 66.8 310.6c0 6.87 2.79 13.22 11.18 16.76-8.9 8.4-14 14.48-14 25.92C64 373.35 81.53 385 127.52 385c44.22 0 69.87-16.51 69.87-45.73 0-36.67-28.23-35.32-94.77-39.38l8.38-13.43c17 4.74 74.19 6.23 74.19-42.43 0-11.69-4.83-19.82-9.4-25.67l23.38-1.78zm84.34 109.84l-13-1.78c-3.82-.51-4.07-1-4.07-5.09V192.52h-52.6l-2.79 20.57c15.75 5.55 17 4.86 17 10.17V298c0 5.62-.31 4.58-17 6.87v20.06h72.42zM384 315l-6.87-22.37c-40.93 15.37-37.85-12.41-37.85-16.73v-60.72h37.85v-25.41h-35.82c-2.87 0-2 2.52-2-38.63h-24.18c-2.79 27.7-11.68 38.88-34 41.42v22.62c20.47 0 19.82-.85 19.82 2.54v66.57c0 28.72 11.43 40.91 41.67 40.91 14.45 0 30.45-4.83 41.38-10.2z"}}]})(e)}function X1(e){return ve({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function K1(e){return ve({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"}}]})(e)}function G1(e){return ve({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}}]})(e)}function Z1(e){return ve({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function J1(e){return ve({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}}]})(e)}function q1(e){return ve({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"}}]})(e)}function b1(e){return ve({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"}}]})(e)}function ep(e){return ve({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"}}]})(e)}function Hf(e){return ve({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z"}},{tag:"path",attr:{d:"M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"}}]})(e)}function tp(e){return ve({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"}}]})(e)}function np(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function rp(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var op=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(rp(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=np(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),pe="-ms-",Fo="-moz-",$="-webkit-",Wf="comm",Ya="rule",Xa="decl",ip="@import",Qf="@keyframes",lp="@layer",ap=Math.abs,ei=String.fromCharCode,sp=Object.assign;function up(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function Yf(e){return e.trim()}function cp(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Xl(e,t){return e.indexOf(t)}function se(e,t){return e.charCodeAt(t)|0}function wr(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Ka(e){return e.length}function Kr(e,t){return t.push(e),e}function fp(e,t){return e.map(t).join("")}var ti=1,Nn=1,Xf=0,ze=0,q=0,Tn="";function ni(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ti,column:Nn,length:l,return:""}}function Bn(e,t){return sp(ni("",null,null,"",null,null,0),e,{length:-e.length},t)}function dp(){return q}function pp(){return q=ze>0?se(Tn,--ze):0,Nn--,q===10&&(Nn=1,ti--),q}function Le(){return q=ze<Xf?se(Tn,ze++):0,Nn++,q===10&&(Nn=1,ti++),q}function rt(){return se(Tn,ze)}function uo(){return ze}function Pr(e,t){return wr(Tn,e,t)}function Sr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kf(e){return ti=Nn=1,Xf=qe(Tn=e),ze=0,[]}function Gf(e){return Tn="",e}function co(e){return Yf(Pr(ze-1,Kl(e===91?e+2:e===40?e+1:e)))}function mp(e){for(;(q=rt())&&q<33;)Le();return Sr(e)>2||Sr(q)>3?"":" "}function hp(e,t){for(;--t&&Le()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Pr(e,uo()+(t<6&&rt()==32&&Le()==32))}function Kl(e){for(;Le();)switch(q){case e:return ze;case 34:case 39:e!==34&&e!==39&&Kl(q);break;case 40:e===41&&Kl(e);break;case 92:Le();break}return ze}function vp(e,t){for(;Le()&&e+q!==57;)if(e+q===84&&rt()===47)break;return"/*"+Pr(t,ze-1)+"*"+ei(e===47?e:Le())}function yp(e){for(;!Sr(rt());)Le();return Pr(e,ze)}function gp(e){return Gf(fo("",null,null,null,[""],e=Kf(e),0,[0],e))}function fo(e,t,n,r,o,i,l,a,s){for(var c=0,h=0,p=l,m=0,S=0,w=0,v=1,j=1,f=1,u=0,d="",g=o,E=i,_=r,C=d;j;)switch(w=u,u=Le()){case 40:if(w!=108&&se(C,p-1)==58){Xl(C+=I(co(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:C+=co(u);break;case 9:case 10:case 13:case 32:C+=mp(w);break;case 92:C+=hp(uo()-1,7);continue;case 47:switch(rt()){case 42:case 47:Kr(wp(vp(Le(),uo()),t,n),s);break;default:C+="/"}break;case 123*v:a[c++]=qe(C)*f;case 125*v:case 59:case 0:switch(u){case 0:case 125:j=0;case 59+h:f==-1&&(C=I(C,/\f/g,"")),S>0&&qe(C)-p&&Kr(S>32?wu(C+";",r,n,p-1):wu(I(C," ","")+";",r,n,p-2),s);break;case 59:C+=";";default:if(Kr(_=gu(C,t,n,c,h,o,a,d,g=[],E=[],p),i),u===123)if(h===0)fo(C,t,_,_,g,i,p,a,E);else switch(m===99&&se(C,3)===110?100:m){case 100:case 108:case 109:case 115:fo(e,_,_,r&&Kr(gu(e,_,_,0,0,o,a,d,o,g=[],p),E),o,E,p,a,r?g:E);break;default:fo(C,_,_,_,[""],E,0,a,E)}}c=h=S=0,v=f=1,d=C="",p=l;break;case 58:p=1+qe(C),S=w;default:if(v<1){if(u==123)--v;else if(u==125&&v++==0&&pp()==125)continue}switch(C+=ei(u),u*v){case 38:f=h>0?1:(C+="\f",-1);break;case 44:a[c++]=(qe(C)-1)*f,f=1;break;case 64:rt()===45&&(C+=co(Le())),m=rt(),h=p=qe(d=C+=yp(uo())),u++;break;case 45:w===45&&qe(C)==2&&(v=0)}}return i}function gu(e,t,n,r,o,i,l,a,s,c,h){for(var p=o-1,m=o===0?i:[""],S=Ka(m),w=0,v=0,j=0;w<r;++w)for(var f=0,u=wr(e,p+1,p=ap(v=l[w])),d=e;f<S;++f)(d=Yf(v>0?m[f]+" "+u:I(u,/&\f/g,m[f])))&&(s[j++]=d);return ni(e,t,n,o===0?Ya:a,s,c,h)}function wp(e,t,n){return ni(e,t,n,Wf,ei(dp()),wr(e,2,-2),0)}function wu(e,t,n,r){return ni(e,t,n,Xa,wr(e,0,r),wr(e,r+1,-1),r)}function wn(e,t){for(var n="",r=Ka(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Sp(e,t,n,r){switch(e.type){case lp:if(e.children.length)break;case ip:case Xa:return e.return=e.return||e.value;case Wf:return"";case Qf:return e.return=e.value+"{"+wn(e.children,r)+"}";case Ya:e.value=e.props.join(",")}return qe(n=wn(e.children,r))?e.return=e.value+"{"+n+"}":""}function xp(e){var t=Ka(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function kp(e){return function(t){t.root||(t=t.return)&&e(t)}}var Cp=function(t,n,r){for(var o=0,i=0;o=i,i=rt(),o===38&&i===12&&(n[r]=1),!Sr(i);)Le();return Pr(t,ze)},Ep=function(t,n){var r=-1,o=44;do switch(Sr(o)){case 0:o===38&&rt()===12&&(n[r]=1),t[r]+=Cp(ze-1,n,r);break;case 2:t[r]+=co(o);break;case 4:if(o===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ei(o)}while(o=Le());return t},_p=function(t,n){return Gf(Ep(Kf(t),n))},Su=new WeakMap,zp=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Su.get(r))&&!o){Su.set(t,!0);for(var i=[],l=_p(n,i),a=r.props,s=0,c=0;s<l.length;s++)for(var h=0;h<a.length;h++,c++)t.props[c]=i[s]?l[s].replace(/&\f/g,a[h]):a[h]+" "+l[s]}}},Np=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Zf(e,t){switch(up(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Fo+e+pe+e+e;case 6828:case 4268:return $+e+pe+e+e;case 6165:return $+e+pe+"flex-"+e+e;case 5187:return $+e+I(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return $+e+pe+"flex-item-"+I(e,/flex-|-self/,"")+e;case 4675:return $+e+pe+"flex-line-pack"+I(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+pe+I(e,"shrink","negative")+e;case 5292:return $+e+pe+I(e,"basis","preferred-size")+e;case 6060:return $+"box-"+I(e,"-grow","")+$+e+pe+I(e,"grow","positive")+e;case 4554:return $+I(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Fo+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xl(e,"stretch")?Zf(I(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(se(e,t+1)!==115)break;case 6444:switch(se(e,qe(e)-3-(~Xl(e,"!important")&&10))){case 107:return I(e,":",":"+$)+e;case 101:return I(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(se(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+pe+"$2box$3")+e}break;case 5936:switch(se(e,t+11)){case 114:return $+e+pe+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+pe+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+pe+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+pe+e+e}return e}var Pp=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Xa:t.return=Zf(t.value,t.length);break;case Qf:return wn([Bn(t,{value:I(t.value,"@","@"+$)})],o);case Ya:if(t.length)return fp(t.props,function(i){switch(cp(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return wn([Bn(t,{props:[I(i,/:(read-\w+)/,":"+Fo+"$1")]})],o);case"::placeholder":return wn([Bn(t,{props:[I(i,/:(plac\w+)/,":"+$+"input-$1")]}),Bn(t,{props:[I(i,/:(plac\w+)/,":"+Fo+"$1")]}),Bn(t,{props:[I(i,/:(plac\w+)/,pe+"input-$1")]})],o)}return""})}},jp=[Pp],Lp=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var j=v.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||jp,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var j=v.getAttribute("data-emotion").split(" "),f=1;f<j.length;f++)i[j[f]]=!0;a.push(v)});var s,c=[zp,Np];{var h,p=[Sp,kp(function(v){h.insert(v)})],m=xp(c.concat(o,p)),S=function(j){return wn(gp(j),m)};s=function(j,f,u,d){h=u,S(j?j+"{"+f.styles+"}":f.styles),d&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new op({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return w.sheet.hydrate(a),w},Jf={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le=typeof Symbol=="function"&&Symbol.for,Ga=le?Symbol.for("react.element"):60103,Za=le?Symbol.for("react.portal"):60106,ri=le?Symbol.for("react.fragment"):60107,oi=le?Symbol.for("react.strict_mode"):60108,ii=le?Symbol.for("react.profiler"):60114,li=le?Symbol.for("react.provider"):60109,ai=le?Symbol.for("react.context"):60110,Ja=le?Symbol.for("react.async_mode"):60111,si=le?Symbol.for("react.concurrent_mode"):60111,ui=le?Symbol.for("react.forward_ref"):60112,ci=le?Symbol.for("react.suspense"):60113,Tp=le?Symbol.for("react.suspense_list"):60120,fi=le?Symbol.for("react.memo"):60115,di=le?Symbol.for("react.lazy"):60116,Mp=le?Symbol.for("react.block"):60121,Op=le?Symbol.for("react.fundamental"):60117,Rp=le?Symbol.for("react.responder"):60118,$p=le?Symbol.for("react.scope"):60119;function Re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ga:switch(e=e.type,e){case Ja:case si:case ri:case ii:case oi:case ci:return e;default:switch(e=e&&e.$$typeof,e){case ai:case ui:case di:case fi:case li:return e;default:return t}}case Za:return t}}}function qf(e){return Re(e)===si}A.AsyncMode=Ja;A.ConcurrentMode=si;A.ContextConsumer=ai;A.ContextProvider=li;A.Element=Ga;A.ForwardRef=ui;A.Fragment=ri;A.Lazy=di;A.Memo=fi;A.Portal=Za;A.Profiler=ii;A.StrictMode=oi;A.Suspense=ci;A.isAsyncMode=function(e){return qf(e)||Re(e)===Ja};A.isConcurrentMode=qf;A.isContextConsumer=function(e){return Re(e)===ai};A.isContextProvider=function(e){return Re(e)===li};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ga};A.isForwardRef=function(e){return Re(e)===ui};A.isFragment=function(e){return Re(e)===ri};A.isLazy=function(e){return Re(e)===di};A.isMemo=function(e){return Re(e)===fi};A.isPortal=function(e){return Re(e)===Za};A.isProfiler=function(e){return Re(e)===ii};A.isStrictMode=function(e){return Re(e)===oi};A.isSuspense=function(e){return Re(e)===ci};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ri||e===si||e===ii||e===oi||e===ci||e===Tp||typeof e=="object"&&e!==null&&(e.$$typeof===di||e.$$typeof===fi||e.$$typeof===li||e.$$typeof===ai||e.$$typeof===ui||e.$$typeof===Op||e.$$typeof===Rp||e.$$typeof===$p||e.$$typeof===Mp)};A.typeOf=Re;Jf.exports=A;var Ip=Jf.exports,bf=Ip,Fp={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},e0={};e0[bf.ForwardRef]=Fp;e0[bf.Memo]=Dp;var Ap=!0;function t0(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var qa=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Ap===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},n0=function(t,n,r){qa(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Vp(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Up={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Bp(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Hp=/[A-Z]|^ms/g,Wp=/_EMO_([^_]+?)_([^]*?)_EMO_/g,r0=function(t){return t.charCodeAt(1)===45},xu=function(t){return t!=null&&typeof t!="boolean"},qi=Bp(function(e){return r0(e)?e:e.replace(Hp,"-$&").toLowerCase()}),ku=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Wp,function(r,o,i){return be={name:o,styles:i,next:be},o})}return Up[t]!==1&&!r0(t)&&typeof n=="number"&&n!==0?n+"px":n};function xr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return be={name:n.name,styles:n.styles,next:be},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)be={name:r.name,styles:r.styles,next:be},r=r.next;var o=n.styles+";";return o}return Qp(e,t,n)}case"function":{if(e!==void 0){var i=be,l=n(e);return be=i,xr(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Qp(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=xr(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":xu(l)&&(r+=qi(i)+":"+ku(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)xu(l[a])&&(r+=qi(i)+":"+ku(i,l[a])+";");else{var s=xr(e,t,l);switch(i){case"animation":case"animationName":{r+=qi(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var Cu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,be,ba=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";be=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=xr(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=xr(r,n,t[a]),o&&(i+=l[a]);Cu.lastIndex=0;for(var s="",c;(c=Cu.exec(i))!==null;)s+="-"+c[1];var h=Vp(i)+s;return{name:h,styles:i,next:be}},Yp=function(t){return t()},Xp=cs.useInsertionEffect?cs.useInsertionEffect:!1,o0=Xp||Yp,es={}.hasOwnProperty,i0=F.createContext(typeof HTMLElement<"u"?Lp({key:"css"}):null);i0.Provider;var l0=function(t){return F.forwardRef(function(n,r){var o=F.useContext(i0);return t(n,o,r)})},a0=F.createContext({}),Gl="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Kp=function(t,n){var r={};for(var o in n)es.call(n,o)&&(r[o]=n[o]);return r[Gl]=t,r},Gp=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return qa(n,r,o),o0(function(){return n0(n,r,o)}),null},Zp=l0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Gl],i=[r],l="";typeof e.className=="string"?l=t0(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=ba(i,void 0,F.useContext(a0));l+=t.key+"-"+a.name;var s={};for(var c in e)es.call(e,c)&&c!=="css"&&c!==Gl&&(s[c]=e[c]);return s.ref=n,s.className=l,F.createElement(F.Fragment,null,F.createElement(Gp,{cache:t,serialized:a,isStringTag:typeof o=="string"}),F.createElement(o,s))}),Jp=Zp,qp=y.Fragment;function re(e,t,n){return es.call(t,"css")?y.jsx(Jp,Kp(e,t),n):y.jsx(e,t,n)}function s0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ba(t)}var k=function(){var t=s0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},bp=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function em(e,t,n){var r=[],o=t0(e,r,n);return r.length<2?n:o+t(r)}var tm=function(t){var n=t.cache,r=t.serializedArr;return o0(function(){for(var o=0;o<r.length;o++)n0(n,r[o],!1)}),null},bi=l0(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,h=new Array(c),p=0;p<c;p++)h[p]=arguments[p];var m=ba(h,t.registered);return r.push(m),qa(t,m,!1),t.key+"-"+m.name},i=function(){for(var c=arguments.length,h=new Array(c),p=0;p<c;p++)h[p]=arguments[p];return em(t.registered,o,bp(h))},l={css:o,cx:i,theme:F.useContext(a0)},a=e.children(l);return n=!0,F.createElement(F.Fragment,null,F.createElement(tm,{cache:t,serializedArr:r}),a)}),nm=Object.defineProperty,rm=(e,t,n)=>t in e?nm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gr=(e,t,n)=>(rm(e,typeof t!="symbol"?t+"":t,n),n),Zl=new Map,Zr=new WeakMap,Eu=0,om=void 0;function im(e){return e?(Zr.has(e)||(Eu+=1,Zr.set(e,Eu.toString())),Zr.get(e)):"0"}function lm(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?im(e.root):e[t]}`).toString()}function am(e){let t=lm(e),n=Zl.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(a=>{var s;const c=a.isIntersecting&&o.some(h=>a.intersectionRatio>=h);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(s=r.get(a.target))==null||s.forEach(h=>{h(c,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Zl.set(t,n)}return n}function u0(e,t,n={},r=om){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:i,elements:l}=am(n);let a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),Zl.delete(o))}}function sm(e){return typeof e.children!="function"}var _u=class extends F.Component{constructor(e){super(e),Gr(this,"node",null),Gr(this,"_unobserveCb",null),Gr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Gr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),sm(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=u0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:S,entry:w}=this.state;return e({inView:S,entry:w,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:a,trackVisibility:s,delay:c,initialInView:h,fallbackInView:p,...m}=this.props;return F.createElement(t||"div",{ref:this.handleNode,...m},e)}};function c0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:a,fallbackInView:s,onChange:c}={}){var h;const[p,m]=F.useState(null),S=F.useRef(),[w,v]=F.useState({inView:!!a,entry:void 0});S.current=c,F.useEffect(()=>{if(l||!p)return;let d;return d=u0(p,(g,E)=>{v({inView:g,entry:E}),S.current&&S.current(g,E),E.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,p,o,r,i,l,n,s,t]);const j=(h=w.entry)==null?void 0:h.target,f=F.useRef();!p&&j&&!i&&!l&&f.current!==j&&(f.current=j,v({inView:!!a,entry:void 0}));const u=[m,w.inView,w.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var f0={exports:{}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ts=Symbol.for("react.element"),ns=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),mi=Symbol.for("react.strict_mode"),hi=Symbol.for("react.profiler"),vi=Symbol.for("react.provider"),yi=Symbol.for("react.context"),um=Symbol.for("react.server_context"),gi=Symbol.for("react.forward_ref"),wi=Symbol.for("react.suspense"),Si=Symbol.for("react.suspense_list"),xi=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),cm=Symbol.for("react.offscreen"),d0;d0=Symbol.for("react.module.reference");function Ue(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ts:switch(e=e.type,e){case pi:case hi:case mi:case wi:case Si:return e;default:switch(e=e&&e.$$typeof,e){case um:case yi:case gi:case ki:case xi:case vi:return e;default:return t}}case ns:return t}}}V.ContextConsumer=yi;V.ContextProvider=vi;V.Element=ts;V.ForwardRef=gi;V.Fragment=pi;V.Lazy=ki;V.Memo=xi;V.Portal=ns;V.Profiler=hi;V.StrictMode=mi;V.Suspense=wi;V.SuspenseList=Si;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return Ue(e)===yi};V.isContextProvider=function(e){return Ue(e)===vi};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ts};V.isForwardRef=function(e){return Ue(e)===gi};V.isFragment=function(e){return Ue(e)===pi};V.isLazy=function(e){return Ue(e)===ki};V.isMemo=function(e){return Ue(e)===xi};V.isPortal=function(e){return Ue(e)===ns};V.isProfiler=function(e){return Ue(e)===hi};V.isStrictMode=function(e){return Ue(e)===mi};V.isSuspense=function(e){return Ue(e)===wi};V.isSuspenseList=function(e){return Ue(e)===Si};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===pi||e===hi||e===mi||e===wi||e===Si||e===cm||typeof e=="object"&&e!==null&&(e.$$typeof===ki||e.$$typeof===xi||e.$$typeof===vi||e.$$typeof===yi||e.$$typeof===gi||e.$$typeof===d0||e.getModuleId!==void 0)};V.typeOf=Ue;f0.exports=V;var fm=f0.exports;k`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;k`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;k`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;k`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;k`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;k`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const dm=k`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,pm=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mm=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hm=k`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vm=k`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rs=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ym=k`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gm=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wm=k`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sm=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xm=k`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,km=k`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Cm=k`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Em({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=rs,iterationCount:o=1}){return s0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function _m(e){return e==null}function zm(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function p0(e,t){return n=>n?e():t()}function kr(e){return p0(e,()=>null)}function Jl(e){return kr(()=>({opacity:0}))(e)}const os=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=rs,triggerOnce:a=!1,className:s,style:c,childClassName:h,childStyle:p,children:m,onVisibilityChange:S}=e,w=F.useMemo(()=>Em({keyframes:l,duration:o}),[o,l]);return _m(m)?null:zm(m)?re(Pm,{...e,animationStyles:w,children:String(m)}):fm.isFragment(m)?re(m0,{...e,animationStyles:w}):re(qp,{children:F.Children.map(m,(v,j)=>{if(!F.isValidElement(v))return null;const f=r+(t?j*o*n:0);switch(v.type){case"ol":case"ul":return re(bi,{children:({cx:u})=>re(v.type,{...v.props,className:u(s,v.props.className),style:Object.assign({},c,v.props.style),children:re(os,{...e,children:v.props.children})})});case"li":return re(_u,{threshold:i,triggerOnce:a,onChange:S,children:({inView:u,ref:d})=>re(bi,{children:({cx:g})=>re(v.type,{...v.props,ref:d,className:g(h,v.props.className),css:kr(()=>w)(u),style:Object.assign({},p,v.props.style,Jl(!u),{animationDelay:f+"ms"})})})});default:return re(_u,{threshold:i,triggerOnce:a,onChange:S,children:({inView:u,ref:d})=>re("div",{ref:d,className:s,css:kr(()=>w)(u),style:Object.assign({},c,Jl(!u),{animationDelay:f+"ms"}),children:re(bi,{children:({cx:g})=>re(v.type,{...v.props,className:g(h,v.props.className),style:Object.assign({},p,v.props.style)})})})})}})})},Nm={display:"inline-block",whiteSpace:"pre"},Pm=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:c,children:h,onVisibilityChange:p}=e,{ref:m,inView:S}=c0({triggerOnce:a,threshold:l,onChange:p});return p0(()=>re("div",{ref:m,className:s,style:Object.assign({},c,Nm),children:h.split("").map((w,v)=>re("span",{css:kr(()=>t)(S),style:{animationDelay:o+v*i*r+"ms"},children:w},v))}),()=>re(m0,{...e,children:h}))(n)},m0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:a}=e,{ref:s,inView:c}=c0({triggerOnce:r,threshold:n,onChange:a});return re("div",{ref:s,className:o,css:kr(()=>t)(c),style:Object.assign({},i,Jl(!c)),children:l})};k`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;k`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;k`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;k`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;k`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const jm=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Lm=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Tm=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Mm=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Om=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Rm=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,$m=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Im=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Fm=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Dm=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Am=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Vm=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Um=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Bm(e,t,n){switch(n){case"bottom-left":return t?Lm:pm;case"bottom-right":return t?Tm:mm;case"down":return e?t?Om:vm:t?Mm:hm;case"left":return e?t?$m:ym:t?Rm:rs;case"right":return e?t?Fm:wm:t?Im:gm;case"top-left":return t?Dm:Sm;case"top-right":return t?Am:xm;case"up":return e?t?Um:Cm:t?Vm:km;default:return t?jm:dm}}const Qt=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=F.useMemo(()=>Bm(t,r,n),[t,n,r]);return re(os,{keyframes:i,...o})};k`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;k`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;k`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;k`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;k`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;k`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;k`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;k`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Hm=()=>y.jsxs("section",{className:"portfolio_header",children:[y.jsx(Qt,{duration:2e3,children:y.jsxs("div",{className:"portfolio_header-title",children:[y.jsx("p",{children:"Oi, eu sou o Simon"}),y.jsxs("h1",{className:"portfolio_header-title_first",children:["React",y.jsxs("span",{className:"title-icons",children:[y.jsx("a",{href:"https://github.com/simonfranklin1",target:"_blank",children:y.jsx(X1,{})}),y.jsx("a",{href:"https://docs.google.com/document/d/10jVe3tEInT2ziCtU4MPdN6SJX4GrTaQr/edit?usp=drive_link&ouid=113300837558869934481&rtpof=true&sd=true",target:"_blank",children:y.jsx(Hf,{})}),y.jsx("a",{href:"https://www.linkedin.com/in/simon-franklin-1a8976274/",target:"_blank",children:y.jsx(Z1,{})})]})," ",y.jsx("br",{}),"Developer"]})]})}),y.jsx(Qt,{direction:"up",duration:2e3,delay:500,children:y.jsx("a",{href:"#about_me",className:"portfolio_header-link",children:y.jsx("button",{className:"portfolio_header-btn",children:"Sobre mim"})})})]}),is=({title:e})=>y.jsxs("div",{className:"portfolio_section-title",children:[y.jsx("div",{}),y.jsx("h3",{className:"section-title",children:e})]}),Wm=({project:e})=>y.jsxs("div",{className:"project-card",children:[y.jsx("a",{href:e.deploy,target:"_blank",style:{cursor:"pointer"},children:y.jsx("img",{src:e.image,style:{width:"100%"},className:"project-card_image"})}),y.jsxs("div",{className:"project-card_info",children:[y.jsx("p",{className:"project-card_info-title",style:{textAlign:"center",fontSize:"20px"},children:e.title}),y.jsx("p",{className:"project-card_info-text",style:{textAlign:"justify"},children:e.text})]}),y.jsxs("div",{className:"project-card_links",children:[y.jsx("a",{href:e.repo,target:"_blank",children:y.jsx("button",{style:{textTransform:"uppercase"},children:"Repositório"})}),y.jsx("a",{href:e.deploy,target:"_blank",children:y.jsx("button",{style:{textTransform:"uppercase"},children:"Projeto"})})]})]}),Qm="/portfolio/assets/IMG_1466-xt-az8Bq.png",Ym="/portfolio/assets/Imagem Portfólio definitiva 1-QTzEKFkI.png",Xm="/portfolio/assets/Imagem Portfólio definitiva 2-8gfIyuKP.png",Km="/portfolio/assets/Imagem Portfólio definitiva 3-P7b6jXrk.png",Gm="/portfolio/assets/Imagem Portfólio definitiva 4-EfkQk1AE.png";function Zm(e){return ve({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"}}]})(e)}const Jm=[{year:"2021",event:"Primeiro contato com programação através de um curso de algoritmos com VisuAlg."},{year:"2022",event:"Início da graduação em Análise e Desenvolvimento de Sistemas e começo dos estudos em HTML, CSS e JavaScript."},{year:"2023",event:"Estudando React, integração com APIs e desenvolvendo projetos pessoais para fixar o aprendizado."},{year:"Atualmente",event:"Em busca da primeira vaga como Desenvolvedor Front end."}],qm=[{image:Ym,title:"Landing Page Restaurante",text:"Landing Page Moderno e responsivo de um restaurante feito em React JS com menu e barra de navegação.",repo:"https://github.com/simonfranklin1/Landing-page-Restaurante",deploy:"https://simonfranklin1.github.io/Landing-page-Restaurante/"},{image:Xm,title:"E-commerce Franklin Store",text:"Um E-commerce com catálogo, carrinho de compras, página individual de cada produto, checkout e histórico de compras.",repo:"https://github.com/simonfranklin1/E-commerce_react",deploy:"https://franklin-store.vercel.app/"},{image:Km,title:"Clone do Youtube",text:"O usuário poderá buscar vídeos, assistí-los e ver informações como número de visualizações, curtidas e o canal que postou o vídeo.",repo:"https://github.com/simonfranklin1/youtube_clone",deploy:"https://simonfranklin1.github.io/youtube_clone"},{image:Gm,title:"Carrinho de compras",text:"O usuário pode adicionar produtos ao carrinho, controlar sua quantidade, removê-los e buscar um produto específico na barra de busca.",repo:"https://github.com/simonfranklin1/carrinho-de-compras",deploy:"https://simonfranklin1.github.io/carrinho-de-compras/"}],zu=[{title:"HTML",icon:y.jsx(K1,{}),description:"É uma linguagem de marcação utilizada para o desenvolvimento de páginas web."},{title:"CSS",icon:y.jsx(Q1,{}),description:"Tecnologia utilizada para estilizar páginas web e tornar a experiência do usuário mais amigável."},{title:"JavaScript",icon:y.jsx(tp,{}),description:"Linguagem de programação que permite implementar itens complexos na página."},{title:"React Js",icon:y.jsx(J1,{}),description:"Biblioteca JavaScript criada pelo facebook, utilizada para desenvolver interfaces."},{title:"Git",icon:y.jsx(Y1,{}),description:"Sistema de controle de versão baseado em repositórios que contém todas as versões do código e as cópias de cada desenvolvedor."},{title:"Tailwind CSS",icon:y.jsx(Zm,{}),description:"Framework CSS que simplifica a criação de interfaces modernas e responsivas."}];function bm(e){return ve({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"}}]})(e)}const e2=({timeLineData:e})=>y.jsxs("div",{className:"portfolio_about-timeline",children:[e.map(t=>y.jsxs("div",{className:"portfolio_about-timeline_event",children:[y.jsx("div",{className:"point"}),y.jsx("h3",{children:t.year}),y.jsx("div",{className:"portfolio_about-timeline_event_text-box",children:y.jsx("p",{children:t.event})})]},t.year)),y.jsx("div",{className:"triangle"})]}),t2=()=>y.jsxs("section",{id:"about_me",className:"portfolio_about-container",style:{overflow:"hidden"},children:[y.jsx(is,{title:"sobre mim"}),y.jsxs("div",{className:"portfolio_about-me",children:[y.jsx(Qt,{direction:"left",duration:1500,children:y.jsx("div",{className:"about_me_image",children:y.jsx("img",{src:Qm,alt:"Simon Franklin"})})}),y.jsx(Qt,{direction:"right",duration:1500,delay:500,children:y.jsxs("div",{className:"about_me_info",children:[y.jsx("h3",{children:"Simon Franklin"}),y.jsxs("ul",{children:[y.jsxs("li",{children:[y.jsx(q1,{})," Desenvolvendo interfaces e projetos pessoais desde 2022"]}),y.jsxs("li",{children:[y.jsx(bm,{})," Cursando Análise e Desenvolvimento de Sistemas"]}),y.jsxs("li",{children:[y.jsx(ep,{})," Interesse em Desenvolvimento Front End"]}),y.jsxs("li",{children:[y.jsx(b1,{})," Buscando oportunidade para atuar na área"]})]})]})})]}),y.jsx(Qt,{duration:1500,delay:750,children:y.jsx(e2,{timeLineData:Jm})})]});k`
    from {
        opacity: 0;
        transform: translateY(90px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
`;const n2=k`
    from {
        opacity: 0;
        transform: translateY(50px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
`;function r2({children:e}){return y.jsx(os,{cascade:!0,damping:.3,keyframes:n2,children:e})}const o2=()=>y.jsxs("section",{className:"portfolio_projects-section",style:{overflow:"hidden"},children:[y.jsx(is,{title:"Meus Projetos"}),y.jsx("div",{className:"portfolio_projects-container",children:y.jsx(r2,{children:qm.map(e=>y.jsx(Wm,{project:e},e.title))})})]}),i2=()=>{const e=n=>{const r=document.querySelectorAll(".portfolio_skills-description_text");document.querySelector(".instruction").classList.add("hidden"),r[n].classList.remove("hidden")},t=n=>{const r=document.querySelectorAll(".portfolio_skills-description_text");document.querySelector(".instruction").classList.remove("hidden"),r[n].classList.add("hidden")};return y.jsxs("section",{className:"portfolio_skills-section",style:{overflow:"hidden"},children:[y.jsx(is,{title:"minhas habilidades"}),y.jsxs("div",{className:"portfolio_skills-container",children:[y.jsx("div",{className:"portfolio_skills-icons",children:y.jsx(Qt,{direction:"left",duration:1e3,children:zu.map((n,r)=>y.jsx("div",{className:"skill_box",onMouseEnter:()=>e(r),onMouseLeave:()=>t(r),children:n.icon},r))})}),y.jsx("div",{className:"portfolio_skills-descriptions",children:y.jsxs(Qt,{direction:"right",duration:1e3,children:[y.jsx("h3",{className:"instruction",children:"/* Passe o cursor do mouse no card para ler */"}),zu.map(n=>y.jsxs("div",{className:"portfolio_skills-description_text hidden",children:[y.jsx("h3",{children:n.title}),y.jsx("p",{children:n.description})]},n.title))]})})]})]})};function l2(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8h1.5ZM5 7c0 .334-.164.264-.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0Z"}},{tag:"path",attr:{d:"M4 3h4v1H6.646A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4Zm0 1a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3Z"}}]})(e)}function a2(e){return ve({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"}}]})(e)}const s2=()=>{const[e,t]=F.useState(!1),n=F.useRef(null),r=()=>{const o=n.current.textContent;navigator.clipboard.writeText(o),console.log(n.current),t(!0),setTimeout(()=>{t(!1)},2e3)};return y.jsxs("footer",{className:"porfolio_contact-container",children:[y.jsxs("div",{className:"porfolio_contact-container_top",children:[y.jsxs("div",{className:"portfolio_contact-container_title",children:[y.jsx(l2,{className:"mailBox-icon"}),y.jsx("p",{children:"Me envie um email"})]}),y.jsx("p",{className:`porfolio_contact-container_email ${e?"copied":""}`,ref:n,children:"simonfranklin.54@gmail.com"}),y.jsx("button",{className:"copy_email_btn",onClick:r,children:e?"Email copiado!":"Copiar"})]}),y.jsxs("div",{className:"porfolio_contact-container_bottom",children:[y.jsx("p",{className:"portfolio_contact-container_title",children:"Links para contato"}),y.jsxs("div",{className:"portfolio_contact-container_links",children:[y.jsx("a",{href:"https://github.com/simonfranklin1",target:"_blank",children:y.jsx(a2,{})}),y.jsx("a",{href:"https://docs.google.com/document/d/10jVe3tEInT2ziCtU4MPdN6SJX4GrTaQr/edit?usp=drive_link&ouid=113300837558869934481&rtpof=true&sd=true",target:"_blank",children:y.jsx(Hf,{})}),y.jsx("a",{href:"https://www.linkedin.com/in/simon-franklin-1a8976274/",target:"_blank",children:y.jsx(G1,{})})]})]})]})};function u2(){return y.jsxs("div",{className:"App",children:[y.jsx(Hm,{}),y.jsx(t2,{}),y.jsx(o2,{}),y.jsx(i2,{}),y.jsx(s2,{})]})}el.createRoot(document.getElementById("root")).render(y.jsx(st.StrictMode,{children:y.jsx(u2,{})}));

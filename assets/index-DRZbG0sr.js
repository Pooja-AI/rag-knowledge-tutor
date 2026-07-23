var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ee(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function D(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g;function te(e,t){return typeof e==`object`&&e&&e.key!=null?D(``+e.key):t.toString(36)}function ne(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+te(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(O,`$&/`)+`/`),ne(o,r,i,``,function(e){return e})):o!=null&&(ee(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(O,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+te(s,l);c+=ne(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+te(s,l++),c+=ne(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function re(e,t,n){if(e==null)return e;var r=[],i=0;return ne(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function k(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var A={current:null},ie={transition:null},ae={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:ie,ReactCurrentOwner:C};function oe(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:re,forEach:function(e,t,n){re(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return re(e,function(){t++}),t},toArray:function(e){return re(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,e.act=oe,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ee,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:k}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=ie.transition;ie.transition={};try{e()}finally{ie.transition=t}},e.unstable_act=oe,e.useCallback=function(e,t){return A.current.useCallback(e,t)},e.useContext=function(e){return A.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return A.current.useDeferredValue(e)},e.useEffect=function(e,t){return A.current.useEffect(e,t)},e.useId=function(){return A.current.useId()},e.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return A.current.useMemo(e,t)},e.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},e.useRef=function(e){return A.current.useRef(e)},e.useState=function(e){return A.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return A.current.useTransition()},e.version=`18.3.1`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,re(x);else{var t=n(l);t!==null&&k(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&k(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,E=-1;function ee(){return!(e.unstable_now()-E<T)}function D(){if(C!==null){var t=e.unstable_now();E=t;var n=!0;try{n=C(!0,t)}finally{n?O():(S=!1,C=null)}}else S=!1}var O;if(typeof v==`function`)O=function(){v(D)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=D,O=function(){ne.postMessage(null)}}else O=function(){g(D,0)};function re(e){C=e,S||(S=!0,O())}function k(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,re(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,k(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,re(x))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d(),n=p();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e){return l.call(m,e)?!0:l.call(f,e)?!1:u.test(e)?m[e]=!0:(f[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),ee=Symbol.for(`react.strict_mode`),D=Symbol.for(`react.profiler`),O=Symbol.for(`react.provider`),te=Symbol.for(`react.context`),ne=Symbol.for(`react.forward_ref`),re=Symbol.for(`react.suspense`),k=Symbol.for(`react.suspense_list`),A=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.offscreen`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var j=Object.assign,ce;function le(e){if(ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ce=t&&t[1]||``}return`
`+ce+e}var ue=!1;function de(e,t){if(!e||ue)return``;ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{ue=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?le(e):``}function fe(e){switch(e.tag){case 5:return le(e.type);case 16:return le(`Lazy`);case 13:return le(`Suspense`);case 19:return le(`SuspenseList`);case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return``}}function pe(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case T:return`Portal`;case D:return`Profiler`;case ee:return`StrictMode`;case re:return`Suspense`;case k:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case te:return(e.displayName||`Context`)+`.Consumer`;case O:return(e._context.displayName||`Context`)+`.Provider`;case ne:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case A:return t=e.displayName||null,t===null?pe(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return pe(t);case 8:return t===ee?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function he(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function _e(e){var t=ge(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ve(e){e._valueTracker||=_e(e)}function ye(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ge(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function be(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function xe(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Se(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=he(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Ce(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function we(e,t){Ce(e,t);var n=he(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Ee(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Ee(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Te(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Ee(e,t,n){(t!==`number`||be(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var De=Array.isArray;function Oe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+he(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ke(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return j({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Ae(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(De(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:he(n)}}function je(e,t){var n=he(t.value),r=he(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Me(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Ne(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Pe(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Ne(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Fe,Ie=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Fe||=document.createElement(`div`),Fe.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Fe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Le(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Re).forEach(function(e){ze.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Re[t]=Re[e]})});function Be(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Re.hasOwnProperty(e)&&Re[e]?(``+t).trim():t+`px`}function Ve(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Be(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var He=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ue(e,t){if(t){if(He[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function We(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ge=null;function Ke(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qe=null,Je=null,Ye=null;function Xe(e){if(e=Wi(e)){if(typeof qe!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Ki(t),qe(e.stateNode,e.type,t))}}function Ze(e){Je?Ye?Ye.push(e):Ye=[e]:Je=e}function Qe(){if(Je){var e=Je,t=Ye;if(Ye=Je=null,Xe(e),t)for(e=0;e<t.length;e++)Xe(t[e])}}function $e(e,t){return e(t)}function et(){}var tt=!1;function nt(e,t,n){if(tt)return e(t,n);tt=!0;try{return $e(e,t,n)}finally{tt=!1,(Je!==null||Ye!==null)&&(et(),Qe())}}function rt(e,t){var n=e.stateNode;if(n===null)return null;var i=Ki(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var it=!1;if(c)try{var at={};Object.defineProperty(at,"passive",{get:function(){it=!0}}),window.addEventListener(`test`,at,at),window.removeEventListener(`test`,at,at)}catch{it=!1}function ot(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var st=!1,ct=null,lt=!1,ut=null,dt={onError:function(e){st=!0,ct=e}};function ft(e,t,n,r,i,a,o,s,c){st=!1,ct=null,ot.apply(dt,arguments)}function pt(e,t,n,i,a,o,s,c,l){if(ft.apply(this,arguments),st){if(st){var u=ct;st=!1,ct=null}else throw Error(r(198));lt||(lt=!0,ut=u)}}function mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ht(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gt(e){if(mt(e)!==e)throw Error(r(188))}function _t(e){var t=e.alternate;if(!t){if(t=mt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return gt(a),e;if(o===i)return gt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function vt(e){return e=_t(e),e===null?null:yt(e)}function yt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yt(e);if(t!==null)return t;e=e.sibling}return null}var bt=n.unstable_scheduleCallback,xt=n.unstable_cancelCallback,St=n.unstable_shouldYield,Ct=n.unstable_requestPaint,M=n.unstable_now,wt=n.unstable_getCurrentPriorityLevel,Tt=n.unstable_ImmediatePriority,Et=n.unstable_UserBlockingPriority,Dt=n.unstable_NormalPriority,Ot=n.unstable_LowPriority,kt=n.unstable_IdlePriority,At=null,jt=null;function Mt(e){if(jt&&typeof jt.onCommitFiberRoot==`function`)try{jt.onCommitFiberRoot(At,e,void 0,(e.current.flags&128)==128)}catch{}}var Nt=Math.clz32?Math.clz32:It,Pt=Math.log,Ft=Math.LN2;function It(e){return e>>>=0,e===0?32:31-(Pt(e)/Ft|0)|0}var Lt=64,Rt=4194304;function zt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=zt(a))):r=zt(s)}else o=n&~i,o===0?a!==0&&(r=zt(a)):r=zt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Vt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Nt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Vt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Ut(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Wt(){var e=Lt;return Lt<<=1,!(Lt&4194240)&&(Lt=64),e}function Gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function qt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Jt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var N=0;function Yt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xt,Zt,Qt,$t,en,tn=!1,nn=[],rn=null,an=null,on=null,sn=new Map,cn=new Map,ln=[],un=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function dn(e,t){switch(e){case`focusin`:case`focusout`:rn=null;break;case`dragenter`:case`dragleave`:an=null;break;case`mouseover`:case`mouseout`:on=null;break;case`pointerover`:case`pointerout`:sn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:cn.delete(t.pointerId)}}function fn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Wi(t),t!==null&&Zt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pn(e,t,n,r,i){switch(t){case`focusin`:return rn=fn(rn,e,t,n,r,i),!0;case`dragenter`:return an=fn(an,e,t,n,r,i),!0;case`mouseover`:return on=fn(on,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return sn.set(a,fn(sn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,cn.set(a,fn(cn.get(a)||null,e,t,n,r,i)),!0}return!1}function mn(e){var t=Ui(e.target);if(t!==null){var n=mt(t);if(n!==null){if(t=n.tag,t===13){if(t=ht(n),t!==null){e.blockedOn=t,en(e.priority,function(){Qt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=En(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ge=r,n.target.dispatchEvent(r),Ge=null}else return t=Wi(n),t!==null&&Zt(t),e.blockedOn=n,!1;t.shift()}return!0}function gn(e,t,n){hn(e)&&n.delete(t)}function _n(){tn=!1,rn!==null&&hn(rn)&&(rn=null),an!==null&&hn(an)&&(an=null),on!==null&&hn(on)&&(on=null),sn.forEach(gn),cn.forEach(gn)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,tn||(tn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,_n)))}function yn(e){function t(t){return vn(t,e)}if(0<nn.length){vn(nn[0],e);for(var n=1;n<nn.length;n++){var r=nn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&vn(rn,e),an!==null&&vn(an,e),on!==null&&vn(on,e),sn.forEach(t),cn.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)mn(n),n.blockedOn===null&&ln.shift()}var bn=C.ReactCurrentBatchConfig,xn=!0;function Sn(e,t,n,r){var i=N,a=bn.transition;bn.transition=null;try{N=1,wn(e,t,n,r)}finally{N=i,bn.transition=a}}function Cn(e,t,n,r){var i=N,a=bn.transition;bn.transition=null;try{N=4,wn(e,t,n,r)}finally{N=i,bn.transition=a}}function wn(e,t,n,r){if(xn){var i=En(e,t,n,r);if(i===null)hi(e,t,r,Tn,n),dn(e,r);else if(pn(i,e,t,n,r))r.stopPropagation();else if(dn(e,r),t&4&&-1<un.indexOf(e)){for(;i!==null;){var a=Wi(i);if(a!==null&&Xt(a),a=En(e,t,n,r),a===null&&hi(e,t,r,Tn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else hi(e,t,r,null,n)}}var Tn=null;function En(e,t,n,r){if(Tn=null,e=Ke(r),e=Ui(e),e!==null)if(t=mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ht(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tn=e,null}function Dn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(wt()){case Tt:return 1;case Et:return 4;case Dt:case Ot:return 16;case kt:return 536870912;default:return 16}default:return 16}}var On=null,kn=null,An=null;function jn(){if(An)return An;var e,t=kn,n=t.length,r,i=`value`in On?On.value:On.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return An=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Pn(){return!1}function Fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:Pn,this.isPropagationStopped=Pn,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Fn(In),Rn=j({},In,{view:0,detail:0}),zn=Fn(Rn),Bn,Vn,Hn,Un=j({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Hn&&(Hn&&e.type===`mousemove`?(Bn=e.screenX-Hn.screenX,Vn=e.screenY-Hn.screenY):Vn=Bn=0,Hn=e),Bn)},movementY:function(e){return`movementY`in e?e.movementY:Vn}}),Wn=Fn(Un),Gn=Fn(j({},Un,{dataTransfer:0})),Kn=Fn(j({},Rn,{relatedTarget:0})),qn=Fn(j({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),Jn=Fn(j({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Yn=Fn(j({},In,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=Fn(j({},Rn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=Fn(j({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=Fn(j({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ir=Fn(j({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),ar=Fn(j({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),or=[9,13,27,32],sr=c&&`CompositionEvent`in window,cr=null;c&&`documentMode`in document&&(cr=document.documentMode);var lr=c&&`TextEvent`in window&&!cr,ur=c&&(!sr||cr&&8<cr&&11>=cr),dr=` `,fr=!1;function pr(e,t){switch(e){case`keyup`:return or.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function mr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var hr=!1;function gr(e,t){switch(e){case`compositionend`:return mr(t);case`keypress`:return t.which===32?(fr=!0,dr):null;case`textInput`:return e=t.data,e===dr&&fr?null:e;default:return null}}function _r(e,t){if(hr)return e===`compositionend`||!sr&&pr(e,t)?(e=jn(),An=kn=On=null,hr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ur&&t.locale!==`ko`?null:t.data;default:return null}}var vr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!vr[e.type]:t===`textarea`}function br(e,t,n,r){Ze(r),t=_i(t,`onChange`),0<t.length&&(n=new Ln(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var xr=null,Sr=null;function Cr(e){ui(e,0)}function wr(e){if(ye(Gi(e)))return e}function Tr(e,t){if(e===`change`)return t}var Er=!1;if(c){var Dr;if(c){var Or=`oninput`in document;if(!Or){var kr=document.createElement(`div`);kr.setAttribute(`oninput`,`return;`),Or=typeof kr.oninput==`function`}Dr=Or}else Dr=!1;Er=Dr&&(!document.documentMode||9<document.documentMode)}function Ar(){xr&&(xr.detachEvent(`onpropertychange`,jr),Sr=xr=null)}function jr(e){if(e.propertyName===`value`&&wr(Sr)){var t=[];br(t,Sr,e,Ke(e)),nt(Cr,t)}}function Mr(e,t,n){e===`focusin`?(Ar(),xr=t,Sr=n,xr.attachEvent(`onpropertychange`,jr)):e===`focusout`&&Ar()}function Nr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return wr(Sr)}function Pr(e,t){if(e===`click`)return wr(t)}function Fr(e,t){if(e===`input`||e===`change`)return wr(t)}function Ir(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Lr=typeof Object.is==`function`?Object.is:Ir;function Rr(e,t){if(Lr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Lr(e[i],t[i]))return!1}return!0}function zr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Br(e,t){var n=zr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=zr(n)}}function Vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hr(){for(var e=window,t=be();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=be(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Wr(e){var t=Hr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vr(n.ownerDocument.documentElement,n)){if(r!==null&&Ur(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Br(n,a);var o=Br(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gr=c&&`documentMode`in document&&11>=document.documentMode,P=null,F=null,Kr=null,I=!1;function L(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;I||P==null||P!==be(r)||(r=P,`selectionStart`in r&&Ur(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Rr(Kr,r)||(Kr=r,r=_i(F,`onSelect`),0<r.length&&(t=new Ln(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=P)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Jr={animationend:qr(`Animation`,`AnimationEnd`),animationiteration:qr(`Animation`,`AnimationIteration`),animationstart:qr(`Animation`,`AnimationStart`),transitionend:qr(`Transition`,`TransitionEnd`)},Yr={},Xr={};c&&(Xr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),`TransitionEvent`in window||delete Jr.transitionend.transition);function Zr(e){if(Yr[e])return Yr[e];if(!Jr[e])return e;var t=Jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xr)return Yr[e]=t[n];return e}var Qr=Zr(`animationend`),$r=Zr(`animationiteration`),ei=Zr(`animationstart`),ti=Zr(`transitionend`),ni=new Map,ri=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function ii(e,t){ni.set(e,t),o(t,[e])}for(var ai=0;ai<ri.length;ai++){var oi=ri[ai];ii(oi.toLowerCase(),`on`+(oi[0].toUpperCase()+oi.slice(1)))}ii(Qr,`onAnimationEnd`),ii($r,`onAnimationIteration`),ii(ei,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(ti,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var si=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ci=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(si));function li(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,pt(r,t,void 0,e),e.currentTarget=null}function ui(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;li(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;li(i,s,l),a=c}}}if(lt)throw e=ut,lt=!1,ut=null,e}function R(e,t){var n=t[Bi];n===void 0&&(n=t[Bi]=new Set);var r=e+`__bubble`;n.has(r)||(mi(t,e,2,!1),n.add(r))}function di(e,t,n){var r=0;t&&(r|=4),mi(n,e,r,t)}var fi=`_reactListening`+Math.random().toString(36).slice(2);function pi(e){if(!e[fi]){e[fi]=!0,i.forEach(function(t){t!==`selectionchange`&&(ci.has(t)||di(t,!1,e),di(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,di(`selectionchange`,!1,t))}}function mi(e,t,n,r){switch(Dn(t)){case 1:var i=Sn;break;case 4:i=Cn;break;default:i=wn}n=i.bind(null,t,n,e),i=void 0,!it||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function hi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Ui(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}nt(function(){var r=a,i=Ke(n),o=[];a:{var s=ni.get(e);if(s!==void 0){var c=Ln,l=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:c=tr;break;case`focusin`:l=`focus`,c=Kn;break;case`focusout`:l=`blur`,c=Kn;break;case`beforeblur`:case`afterblur`:c=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=rr;break;case Qr:case $r:case ei:c=qn;break;case ti:c=ir;break;case`scroll`:c=zn;break;case`wheel`:c=ar;break;case`copy`:case`cut`:case`paste`:c=Jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=nr}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=rt(p,f),h!=null&&u.push(gi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ge&&(l=n.relatedTarget||n.fromElement)&&(Ui(l)||l[zi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ui(l):null,l!==null&&(d=mt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Wn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=nr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Gi(c),m=l==null?s:Gi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Ui(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=vi(m))p++;for(m=0,h=f;h;h=vi(h))m++;for(;0<p-m;)u=vi(u),p--;for(;0<m-p;)f=vi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=vi(u),f=vi(f)}u=null}else u=null;c!==null&&yi(o,s,c,u,!1),l!==null&&d!==null&&yi(o,d,l,u,!0)}}a:{if(s=r?Gi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Tr;else if(yr(s))if(Er)g=Fr;else{g=Nr;var _=Mr}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Pr);if(g&&=g(e,r)){br(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Ee(s,`number`,s.value)}switch(_=r?Gi(r):window,e){case`focusin`:(yr(_)||_.contentEditable===`true`)&&(P=_,F=r,Kr=null);break;case`focusout`:Kr=F=P=null;break;case`mousedown`:I=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:I=!1,L(o,n,i);break;case`selectionchange`:if(Gr)break;case`keydown`:case`keyup`:L(o,n,i)}var v;if(sr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else hr?pr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(ur&&n.locale!==`ko`&&(hr||y!==`onCompositionStart`?y===`onCompositionEnd`&&hr&&(v=jn()):(On=i,kn=`value`in On?On.value:On.textContent,hr=!0)),_=_i(r,y),0<_.length&&(y=new Yn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=mr(n),v!==null&&(y.data=v)))),(v=lr?gr(e,n):_r(e,n))&&(r=_i(r,`onBeforeInput`),0<r.length&&(i=new Yn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}ui(o,t)})}function gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _i(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=rt(e,n),a!=null&&r.unshift(gi(e,a,i)),a=rt(e,t),a!=null&&r.push(gi(e,a,i))),e=e.return}return r}function vi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=rt(n,a),c!=null&&o.unshift(gi(n,c,s))):i||(c=rt(n,a),c!=null&&o.push(gi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var bi=/\r\n?/g,xi=/\u0000|\uFFFD/g;function Si(e){return(typeof e==`string`?e:``+e).replace(bi,`
`).replace(xi,``)}function Ci(e,t,n){if(t=Si(t),Si(e)!==t&&n)throw Error(r(425))}function wi(){}var Ti=null,Ei=null;function Di(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Oi=typeof setTimeout==`function`?setTimeout:void 0,ki=typeof clearTimeout==`function`?clearTimeout:void 0,Ai=typeof Promise==`function`?Promise:void 0,ji=typeof queueMicrotask==`function`?queueMicrotask:Ai===void 0?Oi:function(e){return Ai.resolve(null).then(e).catch(Mi)};function Mi(e){setTimeout(function(){throw e})}function Ni(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),yn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);yn(t)}function Pi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Fi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ii=Math.random().toString(36).slice(2),Li=`__reactFiber$`+Ii,Ri=`__reactProps$`+Ii,zi=`__reactContainer$`+Ii,Bi=`__reactEvents$`+Ii,Vi=`__reactListeners$`+Ii,Hi=`__reactHandles$`+Ii;function Ui(e){var t=e[Li];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zi]||n[Li]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fi(e);e!==null;){if(n=e[Li])return n;e=Fi(e)}return t}e=n,n=e.parentNode}return null}function Wi(e){return e=e[Li]||e[zi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ki(e){return e[Ri]||null}var qi=[],Ji=-1;function Yi(e){return{current:e}}function z(e){0>Ji||(e.current=qi[Ji],qi[Ji]=null,Ji--)}function B(e,t){Ji++,qi[Ji]=e.current,e.current=t}var Xi={},Zi=Yi(Xi),Qi=Yi(!1),$i=Xi;function ea(e,t){var n=e.type.contextTypes;if(!n)return Xi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ta(e){return e=e.childContextTypes,e!=null}function na(){z(Qi),z(Zi)}function ra(e,t,n){if(Zi.current!==Xi)throw Error(r(168));B(Zi,t),B(Qi,n)}function ia(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,me(e)||`Unknown`,a));return j({},n,i)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xi,$i=Zi.current,B(Zi,e),B(Qi,Qi.current),!0}function oa(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=ia(e,t,$i),i.__reactInternalMemoizedMergedChildContext=e,z(Qi),z(Zi),B(Zi,e)):z(Qi),B(Qi,n)}var sa=null,ca=!1,la=!1;function ua(e){sa===null?sa=[e]:sa.push(e)}function da(e){ca=!0,ua(e)}function fa(){if(!la&&sa!==null){la=!0;var e=0,t=N;try{var n=sa;for(N=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sa=null,ca=!1}catch(t){throw sa!==null&&(sa=sa.slice(e+1)),bt(Tt,fa),t}finally{N=t,la=!1}}return null}var pa=[],ma=0,ha=null,ga=0,V=[],_a=0,va=null,ya=1,ba=``;function xa(e,t){pa[ma++]=ga,pa[ma++]=ha,ha=e,ga=t}function H(e,t,n){V[_a++]=ya,V[_a++]=ba,V[_a++]=va,va=e;var r=ya;e=ba;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var a=32-Nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ya=1<<32-Nt(t)+i|n<<i|r,ba=a+e}else ya=1<<a|n<<i|r,ba=e}function U(e){e.return!==null&&(xa(e,1),H(e,1,0))}function W(e){for(;e===ha;)ha=pa[--ma],pa[ma]=null,ga=pa[--ma],pa[ma]=null;for(;e===va;)va=V[--_a],V[_a]=null,ba=V[--_a],V[_a]=null,ya=V[--_a],V[_a]=null}var Sa=null,Ca=null,G=!1,K=null;function wa(e,t){var n=ql(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ta(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,Sa=e,Ca=Pi(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,Sa=e,Ca=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=va===null?null:{id:ya,overflow:ba},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ql(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Sa=e,Ca=null,!0);default:return!1}}function Ea(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Da(e){if(G){var t=Ca;if(t){var n=t;if(!Ta(e,t)){if(Ea(e))throw Error(r(418));t=Pi(n.nextSibling);var i=Sa;t&&Ta(e,t)?wa(i,n):(e.flags=e.flags&-4097|2,G=!1,Sa=e)}}else{if(Ea(e))throw Error(r(418));e.flags=e.flags&-4097|2,G=!1,Sa=e}}}function Oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Sa=e}function ka(e){if(e!==Sa)return!1;if(!G)return Oa(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Di(e.type,e.memoizedProps)),t&&=Ca){if(Ea(e))throw Aa(),Error(r(418));for(;t;)wa(e,t),t=Pi(t.nextSibling)}if(Oa(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Ca=Pi(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Ca=null}}else Ca=Sa?Pi(e.stateNode.nextSibling):null;return!0}function Aa(){for(var e=Ca;e;)e=Pi(e.nextSibling)}function ja(){Ca=Sa=null,G=!1}function Ma(e){K===null?K=[e]:K.push(e)}var Na=C.ReactCurrentBatchConfig;function Pa(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Fa(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Ia(e){var t=e._init;return t(e._payload)}function La(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Yl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$l(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&Ia(i)===t.type)?(r=a(t,n.props),r.ref=Pa(e,t,n),r.return=e,r):(r=Xl(n.type,n.key,n.props,null,e.mode,r),r.ref=Pa(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Zl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=$l(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Xl(t.type,t.key,t.props,null,e.mode,n),n.ref=Pa(e,null,t),n.return=e,n;case T:return t=eu(t,e.mode,n),t.return=e,t;case ie:var r=t._init;return f(e,r(t._payload),n)}if(De(t)||se(t))return t=Zl(t,e.mode,n,null),t.return=e,t;Fa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case ie:return i=n._init,p(e,t,i(n._payload),r)}if(De(n)||se(n))return i===null?d(e,t,n,r,null):null;Fa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:var a=r._init;return m(e,t,n,a(r._payload),i)}if(De(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);Fa(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),G&&xa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return G&&xa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),G&&xa(r,h),l}function g(a,s,c,l){var u=se(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),G&&xa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return G&&xa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),G&&xa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===E&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===E){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===ie&&Ia(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Pa(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===E?(r=Zl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Xl(i.type,i.key,i.props,null,e.mode,o),o.ref=Pa(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=eu(i,e.mode,o),r.return=e,e=r}return s(e);case ie:return l=i._init,_(e,r,l(i._payload),o)}if(De(i))return h(e,r,i,o);if(se(i))return g(e,r,i,o);Fa(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=$l(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ra=La(!0),za=La(!1),Ba=Yi(null),Va=null,Ha=null,Ua=null;function Wa(){Ua=Ha=Va=null}function Ga(e){var t=Ba.current;z(Ba),e._currentValue=t}function Ka(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qa(e,t){Va=e,Ua=Ha=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Fs=!0),e.firstContext=null)}function Ja(e){var t=e._currentValue;if(Ua!==e)if(e={context:e,memoizedValue:t,next:null},Ha===null){if(Va===null)throw Error(r(308));Ha=e,Va.dependencies={lanes:0,firstContext:e}}else Ha=Ha.next=e;return t}var Ya=null;function Xa(e){Ya===null?Ya=[e]:Ya.push(e)}function Za(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qa(e,r)}function Qa(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $a=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function to(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function no(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ro(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qa(e,n)}return i=r.interleaved,i===null?(t.next=t,Xa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qa(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jt(e,n)}}function ao(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,r){var i=e.updateQueue;$a=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=j({},d,f);break a;case 2:$a=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Zc|=o,e.lanes=o,e.memoizedState=d}}function so(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var co={},lo=Yi(co),uo=Yi(co),fo=Yi(co);function po(e){if(e===co)throw Error(r(174));return e}function mo(e,t){switch(B(fo,t),B(uo,e),B(lo,co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pe(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pe(t,e)}z(lo),B(lo,t)}function ho(){z(lo),z(uo),z(fo)}function go(e){po(fo.current);var t=po(lo.current),n=Pe(t,e.type);t!==n&&(B(uo,e),B(lo,n))}function _o(e){uo.current===e&&(z(lo),z(uo))}var q=Yi(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=[];function bo(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var xo=C.ReactCurrentDispatcher,So=C.ReactCurrentBatchConfig,Co=0,J=null,wo=null,To=null,Eo=!1,Do=!1,Oo=0,ko=0;function Ao(){throw Error(r(321))}function jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lr(e[n],t[n]))return!1;return!0}function Mo(e,t,n,i,a,o){if(Co=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?hs:gs,e=n(i,a),Do){o=0;do{if(Do=!1,Oo=0,25<=o)throw Error(r(301));o+=1,To=wo=null,t.updateQueue=null,xo.current=_s,e=n(i,a)}while(Do)}if(xo.current=ms,t=wo!==null&&wo.next!==null,Co=0,To=wo=J=null,Eo=!1,t)throw Error(r(300));return e}function No(){var e=Oo!==0;return Oo=0,e}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return To===null?J.memoizedState=To=e:To=To.next=e,To}function Fo(){if(wo===null){var e=J.alternate;e=e===null?null:e.memoizedState}else e=wo.next;var t=To===null?J.memoizedState:To.next;if(t!==null)To=t,wo=e;else{if(e===null)throw Error(r(310));wo=e,e={memoizedState:wo.memoizedState,baseState:wo.baseState,baseQueue:wo.baseQueue,queue:wo.queue,next:null},To===null?J.memoizedState=To=e:To=To.next=e}return To}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){var t=Fo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=wo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Co&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,J.lanes|=d,Zc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Lr(i,t.memoizedState)||(Fs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,J.lanes|=o,Zc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ro(e){var t=Fo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Lr(o,t.memoizedState)||(Fs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function zo(){}function Bo(e,t){var n=J,i=Fo(),a=t(),o=!Lr(i.memoizedState,a);if(o&&(i.memoizedState=a,Fs=!0),i=i.queue,Qo(Uo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||To!==null&&To.memoizedState.tag&1){if(n.flags|=2048,qo(9,Ho.bind(null,n,i,a,t),void 0,null),Wc===null)throw Error(r(349));Co&30||Vo(n,t,a)}return a}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lr(e,n)}catch{return!0}}function Go(e){var t=Qa(e,1);t!==null&&_l(t,e,1,-1)}function Ko(e){var t=Po();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t.queue=e,e=e.dispatch=us.bind(null,J,e),[t.memoizedState,e]}function qo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jo(){return Fo().memoizedState}function Yo(e,t,n,r){var i=Po();J.flags|=e,i.memoizedState=qo(1|t,n,void 0,r===void 0?null:r)}function Xo(e,t,n,r){var i=Fo();r=r===void 0?null:r;var a=void 0;if(wo!==null){var o=wo.memoizedState;if(a=o.destroy,r!==null&&jo(r,o.deps)){i.memoizedState=qo(t,n,a,r);return}}J.flags|=e,i.memoizedState=qo(1|t,n,a,r)}function Zo(e,t){return Yo(8390656,8,e,t)}function Qo(e,t){return Xo(2048,8,e,t)}function $o(e,t){return Xo(4,2,e,t)}function es(e,t){return Xo(4,4,e,t)}function ts(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ns(e,t,n){return n=n==null?null:n.concat([e]),Xo(4,4,ts.bind(null,t,e),n)}function rs(){}function is(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function as(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function os(e,t,n){return Co&21?(Lr(n,t)||(n=Wt(),J.lanes|=n,Zc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fs=!0),e.memoizedState=n)}function ss(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var r=So.transition;So.transition={};try{e(!1),t()}finally{N=n,So.transition=r}}function cs(){return Fo().memoizedState}function ls(e,t,n){var r=gl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ds(e))fs(t,n);else if(n=Za(e,t,n,r),n!==null){var i=hl();_l(n,e,r,i),ps(n,t,r)}}function us(e,t,n){var r=gl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ds(e))fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Lr(s,o)){var c=t.interleaved;c===null?(i.next=i,Xa(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Za(e,t,i,r),n!==null&&(i=hl(),_l(n,e,r,i),ps(n,t,r))}}function ds(e){var t=e.alternate;return e===J||t!==null&&t===J}function fs(e,t){Do=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ps(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jt(e,n)}}var ms={readContext:Ja,useCallback:Ao,useContext:Ao,useEffect:Ao,useImperativeHandle:Ao,useInsertionEffect:Ao,useLayoutEffect:Ao,useMemo:Ao,useReducer:Ao,useRef:Ao,useState:Ao,useDebugValue:Ao,useDeferredValue:Ao,useTransition:Ao,useMutableSource:Ao,useSyncExternalStore:Ao,useId:Ao,unstable_isNewReconciler:!1},hs={readContext:Ja,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:Ja,useEffect:Zo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Yo(4194308,4,ts.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yo(4,2,e,t)},useMemo:function(e,t){var n=Po();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Po();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ls.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:Ko,useDebugValue:rs,useDeferredValue:function(e){return Po().memoizedState=e},useTransition:function(){var e=Ko(!1),t=e[0];return e=ss.bind(null,e[1]),Po().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=J,a=Po();if(G){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Wc===null)throw Error(r(349));Co&30||Vo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Zo(Uo.bind(null,i,o,e),[e]),i.flags|=2048,qo(9,Ho.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Po(),t=Wc.identifierPrefix;if(G){var n=ba,r=ya;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Oo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=ko++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},gs={readContext:Ja,useCallback:is,useContext:Ja,useEffect:Qo,useImperativeHandle:ns,useInsertionEffect:$o,useLayoutEffect:es,useMemo:as,useReducer:Lo,useRef:Jo,useState:function(){return Lo(Io)},useDebugValue:rs,useDeferredValue:function(e){return os(Fo(),wo.memoizedState,e)},useTransition:function(){return[Lo(Io)[0],Fo().memoizedState]},useMutableSource:zo,useSyncExternalStore:Bo,useId:cs,unstable_isNewReconciler:!1},_s={readContext:Ja,useCallback:is,useContext:Ja,useEffect:Qo,useImperativeHandle:ns,useInsertionEffect:$o,useLayoutEffect:es,useMemo:as,useReducer:Ro,useRef:Jo,useState:function(){return Ro(Io)},useDebugValue:rs,useDeferredValue:function(e){var t=Fo();return wo===null?t.memoizedState=e:os(t,wo.memoizedState,e)},useTransition:function(){return[Ro(Io)[0],Fo().memoizedState]},useMutableSource:zo,useSyncExternalStore:Bo,useId:cs,unstable_isNewReconciler:!1};function vs(e,t){if(e&&e.defaultProps){for(var n in t=j({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bs={isMounted:function(e){return(e=e._reactInternals)?mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hl(),i=gl(e),a=no(r,i);a.payload=t,n!=null&&(a.callback=n),t=ro(e,a,i),t!==null&&(_l(t,e,i,r),io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hl(),i=gl(e),a=no(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ro(e,a,i),t!==null&&(_l(t,e,i,r),io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hl(),r=gl(e),i=no(n,r);i.tag=2,t!=null&&(i.callback=t),t=ro(e,i,r),t!==null&&(_l(t,e,r,n),io(t,e,r))}};function xs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(i,a):!0}function Ss(e,t,n){var r=!1,i=Xi,a=t.contextType;return typeof a==`object`&&a?a=Ja(a):(i=ta(t)?$i:Zi.current,r=t.contextTypes,a=(r=r!=null)?ea(e,i):Xi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Cs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bs.enqueueReplaceState(t,t.state,null)}function ws(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},eo(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ja(a):(a=ta(t)?$i:Zi.current,i.context=ea(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(ys(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&bs.enqueueReplaceState(i,i.state,null),oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Ts(e,t){try{var n=``,r=t;do n+=fe(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ds(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Os=typeof WeakMap==`function`?WeakMap:Map;function ks(e,t,n){n=no(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,ol=r),Ds(e,t)},n}function As(e,t,n){n=no(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ds(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Ds(e,t),typeof r!=`function`&&(sl===null?sl=new Set([this]):sl.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function js(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Os;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bl.bind(null,e,t,n),t.then(e,e))}function Ms(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ns(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=no(-1,1),t.tag=2,ro(n,t,1))),n.lanes|=1),e)}var Ps=C.ReactCurrentOwner,Fs=!1;function Is(e,t,n,r){t.child=e===null?za(t,null,n,r):Ra(t,e.child,n,r)}function Ls(e,t,n,r,i){n=n.render;var a=t.ref;return qa(t,i),r=Mo(e,t,n,r,a,i),n=No(),e!==null&&!Fs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rc(e,t,i)):(G&&n&&U(t),t.flags|=1,Is(e,t,r,i),t.child)}function Rs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!$(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,zs(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Rr:n,n(o,r)&&e.ref===t.ref)return rc(e,t,i)}return t.flags|=1,e=Yl(a,r),e.ref=t.ref,e.return=t,t.child=e}function zs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Rr(a,r)&&e.ref===t.ref)if(Fs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Fs=!0);else return t.lanes=e.lanes,rc(e,t,i)}return Hs(e,t,n,r,i)}function Bs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Jc,qc),qc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Jc,qc),qc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,B(Jc,qc),qc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),B(Jc,qc),qc|=r;return Is(e,t,i,n),t.child}function Vs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hs(e,t,n,r,i){var a=ta(n)?$i:Zi.current;return a=ea(t,a),qa(t,i),n=Mo(e,t,n,r,a,i),r=No(),e!==null&&!Fs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rc(e,t,i)):(G&&r&&U(t),t.flags|=1,Is(e,t,n,i),t.child)}function Us(e,t,n,r,i){if(ta(n)){var a=!0;aa(t)}else a=!1;if(qa(t,i),t.stateNode===null)nc(e,t),Ss(t,n,r),ws(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ja(l):(l=ta(n)?$i:Zi.current,l=ea(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Cs(t,o,r,l),$a=!1;var f=t.memoizedState;o.state=f,oo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Qi.current||$a?(typeof u==`function`&&(ys(t,n,u,r),c=t.memoizedState),(s=$a||xs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,to(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:vs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ja(c):(c=ta(n)?$i:Zi.current,c=ea(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Cs(t,o,r,c),$a=!1,f=t.memoizedState,o.state=f,oo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Qi.current||$a?(typeof p==`function`&&(ys(t,n,p,r),m=t.memoizedState),(l=$a||xs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ws(e,t,n,r,a,i)}function Ws(e,t,n,r,i,a){Vs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&oa(t,n,!1),rc(e,t,a);r=t.stateNode,Ps.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ra(t,e.child,null,a),t.child=Ra(t,null,s,a)):Is(e,t,s,a),t.memoizedState=r.state,i&&oa(t,n,!0),t.child}function Gs(e){var t=e.stateNode;t.pendingContext?ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ra(e,t.context,!1),mo(e,t.containerInfo)}function Ks(e,t,n,r,i){return ja(),Ma(i),t.flags|=256,Is(e,t,n,r),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0};function Js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ys(e,t,n){var r=t.pendingProps,i=q.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(q,i&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ql(o,r,0,null),e=Zl(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Js(n),t.memoizedState=qs,e):Xs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Qs(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Zl(a,o,n,null),a.flags|=2):a=Yl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Js(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=qs,r}return a=e.child,e=a.sibling,r=Yl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xs(e,t){return t=Ql({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Zs(e,t,n,r){return r!==null&&Ma(r),Ra(t,e.child,null,n),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qs(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Es(Error(r(422))),Zs(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Ql({mode:`visible`,children:i.children},a,0,null),o=Zl(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ra(t,e.child,null,s),t.child.memoizedState=Js(s),t.memoizedState=qs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Zs(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Es(o,i,void 0),Zs(e,t,s,i)}if(c=(s&e.childLanes)!==0,Fs||c){if(i=Wc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,Qa(e,a),_l(i,e,a,-1))}return Al(),i=Es(Error(r(421))),Zs(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Hl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ca=Pi(a.nextSibling),Sa=t,G=!0,K=null,e!==null&&(V[_a++]=ya,V[_a++]=ba,V[_a++]=va,ya=e.id,ba=e.overflow,va=t),t=Xs(t,i.children),t.flags|=4096,t)}function $s(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ka(e.return,t,n)}function ec(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Is(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$s(e,n,t);else if(e.tag===19)$s(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ec(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ec(t,!0,n,null,a);break;case`together`:ec(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Yl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ic(e,t,n){switch(t.tag){case 3:Gs(t),ja();break;case 5:go(t);break;case 1:ta(t.type)&&aa(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Ba,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(B(q,q.current&1),e=rc(e,t,n),e===null?null:e.sibling):Ys(e,t,n):(B(q,q.current&1),t.flags|=128,null);B(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Bs(e,t,n)}return rc(e,t,n)}var ac=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},oc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,po(lo.current);var o=null;switch(n){case`input`:i=xe(e,i),r=xe(e,r),o=[];break;case`select`:i=j({},i,{value:void 0}),r=j({},r,{value:void 0}),o=[];break;case`textarea`:i=ke(e,i),r=ke(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=wi)}Ue(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&R(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},sc=function(e,t,n,r){n!==r&&(t.flags|=4)};function cc(e,t){if(!G)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function lc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uc(e,t,n){var i=t.pendingProps;switch(W(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lc(t),null;case 1:return ta(t.type)&&na(),lc(t),null;case 3:return i=t.stateNode,ho(),z(Qi),z(Zi),bo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,K!==null&&(bl(K),K=null))),lc(t),null;case 5:_o(t);var o=po(fo.current);if(n=t.type,e!==null&&t.stateNode!=null)oc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return lc(t),null}if(e=po(lo.current),ka(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Li]=t,i[Ri]=s,e=(t.mode&1)!=0,n){case`dialog`:R(`cancel`,i),R(`close`,i);break;case`iframe`:case`object`:case`embed`:R(`load`,i);break;case`video`:case`audio`:for(o=0;o<si.length;o++)R(si[o],i);break;case`source`:R(`error`,i);break;case`img`:case`image`:case`link`:R(`error`,i),R(`load`,i);break;case`details`:R(`toggle`,i);break;case`input`:Se(i,s),R(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},R(`invalid`,i);break;case`textarea`:Ae(i,s),R(`invalid`,i)}for(var c in Ue(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ci(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ci(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&R(`scroll`,i)}switch(n){case`input`:ve(i),Te(i,s,!0);break;case`textarea`:ve(i),Me(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=wi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Ne(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Li]=t,e[Ri]=i,ac(e,t,!1,!1),t.stateNode=e;a:{switch(c=We(n,i),n){case`dialog`:R(`cancel`,e),R(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:R(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<si.length;o++)R(si[o],e);o=i;break;case`source`:R(`error`,e),o=i;break;case`img`:case`image`:case`link`:R(`error`,e),R(`load`,e),o=i;break;case`details`:R(`toggle`,e),o=i;break;case`input`:Se(e,i),o=xe(e,i),R(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=j({},i,{value:void 0}),R(`invalid`,e);break;case`textarea`:Ae(e,i),o=ke(e,i),R(`invalid`,e);break;default:o=i}for(s in Ue(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ve(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ie(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Le(e,u):typeof u==`number`&&Le(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&R(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:ve(e),Te(e,i,!1);break;case`textarea`:ve(e),Me(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+he(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Oe(e,!!i.multiple,i.defaultValue,!0):Oe(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=wi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lc(t),null;case 6:if(e&&t.stateNode!=null)sc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=po(fo.current),po(lo.current),ka(t)){if(i=t.stateNode,n=t.memoizedProps,i[Li]=t,(s=i.nodeValue!==n)&&(e=Sa,e!==null))switch(e.tag){case 3:Ci(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ci(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Li]=t,t.stateNode=i}return lc(t),null;case 13:if(z(q),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ca!==null&&t.mode&1&&!(t.flags&128))Aa(),ja(),t.flags|=98560,s=!1;else if(s=ka(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Li]=t}else ja(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lc(t),s=!1}else K!==null&&(bl(K),K=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?Yc===0&&(Yc=3):Al())),t.updateQueue!==null&&(t.flags|=4),lc(t),null);case 4:return ho(),e===null&&pi(t.stateNode.containerInfo),lc(t),null;case 10:return Ga(t.type._context),lc(t),null;case 17:return ta(t.type)&&na(),lc(t),null;case 19:if(z(q),s=t.memoizedState,s===null)return lc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)cc(s,!1);else{if(Yc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=vo(e),c!==null){for(t.flags|=128,cc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&M()>rl&&(t.flags|=128,i=!0,cc(s,!1),t.lanes=4194304)}else{if(!i)if(e=vo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!G)return lc(t),null}else 2*M()-s.renderingStartTime>rl&&n!==1073741824&&(t.flags|=128,i=!0,cc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(lc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=M(),t.sibling=null,n=q.current,B(q,i?n&1|2:n&1),t);case 22:case 23:return El(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?qc&1073741824&&(lc(t),t.subtreeFlags&6&&(t.flags|=8192)):lc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function dc(e,t){switch(W(t),t.tag){case 1:return ta(t.type)&&na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ho(),z(Qi),z(Zi),bo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _o(t),null;case 13:if(z(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(q),null;case 4:return ho(),null;case 10:return Ga(t.type._context),null;case 22:case 23:return El(),null;case 24:return null;default:return null}}var fc=!1,pc=!1,mc=typeof WeakSet==`function`?WeakSet:Set,Y=null;function hc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){Q(e,t,n)}else n.current=null}function gc(e,t,n){try{n()}catch(n){Q(e,t,n)}}var _c=!1;function vc(e,t){if(Ti=xn,e=Hr(),Ur(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Ei={focusedElem:e,selectionRange:n},xn=!1,Y=t;Y!==null;)if(t=Y,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:vs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Q(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return h=_c,_c=!1,h}function yc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&gc(t,n,a)}i=i.next}while(i!==r)}}function bc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Sc(e){var t=e.alternate;t!==null&&(e.alternate=null,Sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Li],delete t[Ri],delete t[Bi],delete t[Vi],delete t[Hi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cc(e){return e.tag===5||e.tag===3||e.tag===4}function wc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wi));else if(r!==4&&(e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}function Ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ec(e,t,n),e=e.sibling;e!==null;)Ec(e,t,n),e=e.sibling}var Dc=null,Oc=!1;function kc(e,t,n){for(n=n.child;n!==null;)Ac(e,t,n),n=n.sibling}function Ac(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount==`function`)try{jt.onCommitFiberUnmount(At,n)}catch{}switch(n.tag){case 5:pc||hc(n,t);case 6:var r=Dc,i=Oc;Dc=null,kc(e,t,n),Dc=r,Oc=i,Dc!==null&&(Oc?(e=Dc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Dc.removeChild(n.stateNode));break;case 18:Dc!==null&&(Oc?(e=Dc,n=n.stateNode,e.nodeType===8?Ni(e.parentNode,n):e.nodeType===1&&Ni(e,n),yn(e)):Ni(Dc,n.stateNode));break;case 4:r=Dc,i=Oc,Dc=n.stateNode.containerInfo,Oc=!0,kc(e,t,n),Dc=r,Oc=i;break;case 0:case 11:case 14:case 15:if(!pc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&gc(n,t,o),i=i.next}while(i!==r)}kc(e,t,n);break;case 1:if(!pc&&(hc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Q(n,t,e)}kc(e,t,n);break;case 21:kc(e,t,n);break;case 22:n.mode&1?(pc=(r=pc)||n.memoizedState!==null,kc(e,t,n),pc=r):kc(e,t,n);break;default:kc(e,t,n)}}function jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mc),t.forEach(function(t){var r=Ul.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Mc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Dc=c.stateNode,Oc=!1;break a;case 3:Dc=c.stateNode.containerInfo,Oc=!0;break a;case 4:Dc=c.stateNode.containerInfo,Oc=!0;break a}c=c.return}if(Dc===null)throw Error(r(160));Ac(o,s,a),Dc=null,Oc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Q(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nc(t,e),t=t.sibling}function Nc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mc(t,e),Pc(e),i&4){try{yc(3,e,e.return),bc(3,e)}catch(t){Q(e,e.return,t)}try{yc(5,e,e.return)}catch(t){Q(e,e.return,t)}}break;case 1:Mc(t,e),Pc(e),i&512&&n!==null&&hc(n,n.return);break;case 5:if(Mc(t,e),Pc(e),i&512&&n!==null&&hc(n,n.return),e.flags&32){var a=e.stateNode;try{Le(a,``)}catch(t){Q(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Ce(a,o),We(c,s);var u=We(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ve(a,f):d===`dangerouslySetInnerHTML`?Ie(a,f):d===`children`?Le(a,f):S(a,d,f,u)}switch(c){case`input`:we(a,o);break;case`textarea`:je(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Oe(a,!!o.multiple,o.multiple?[]:``,!1):Oe(a,!!o.multiple,o.defaultValue,!0)):Oe(a,!!o.multiple,m,!1)}a[Ri]=o}catch(t){Q(e,e.return,t)}}break;case 6:if(Mc(t,e),Pc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Q(e,e.return,t)}}break;case 3:if(Mc(t,e),Pc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yn(t.containerInfo)}catch(t){Q(e,e.return,t)}break;case 4:Mc(t,e),Pc(e);break;case 13:Mc(t,e),Pc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(nl=M())),i&4&&jc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pc=(u=pc)||d,Mc(t,e),pc=u):Mc(t,e),Pc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Y=e,d=e.child;d!==null;){for(f=Y=d;Y!==null;){switch(p=Y,m=p.child,p.tag){case 0:case 11:case 14:case 15:yc(4,p,p.return);break;case 1:hc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Q(i,n,e)}}break;case 5:hc(p,p.return);break;case 22:if(p.memoizedState!==null){Rc(f);continue}}m===null?Rc(f):(m.return=p,Y=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Be(`display`,s))}catch(t){Q(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Q(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mc(t,e),Pc(e),i&4&&jc(e);break;case 21:break;default:Mc(t,e),Pc(e)}}function Pc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Cc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Le(a,``),i.flags&=-33),Ec(e,wc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Tc(e,wc(e),o);break;default:throw Error(r(161))}}catch(t){Q(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fc(e,t,n){Y=e,Ic(e,t,n)}function Ic(e,t,n){for(var r=(e.mode&1)!=0;Y!==null;){var i=Y,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||pc;s=fc;var l=pc;if(fc=o,(pc=c)&&!l)for(Y=i;Y!==null;)o=Y,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?zc(i):(c.return=o,Y=c);for(;a!==null;)Y=a,Ic(a,t,n),a=a.sibling;Y=i,fc=s,pc=l}Lc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Y=a):Lc(e,t,n)}}function Lc(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pc||bc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!pc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:vs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&so(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}so(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&yn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}pc||t.flags&512&&xc(t)}catch(e){Q(t,t.return,e)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Rc(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function zc(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bc(4,t)}catch(e){Q(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Q(t,i,e)}}var a=t.return;try{xc(t)}catch(e){Q(t,a,e)}break;case 5:var o=t.return;try{xc(t)}catch(e){Q(t,o,e)}}}catch(e){Q(t,t.return,e)}if(t===e){Y=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Y=s;break}Y=t.return}}var Bc=Math.ceil,Vc=C.ReactCurrentDispatcher,Hc=C.ReactCurrentOwner,Uc=C.ReactCurrentBatchConfig,X=0,Wc=null,Gc=null,Kc=0,qc=0,Jc=Yi(0),Yc=0,Xc=null,Zc=0,Qc=0,$c=0,el=null,tl=null,nl=0,rl=1/0,il=null,al=!1,ol=null,sl=null,cl=!1,ll=null,ul=0,dl=0,fl=null,pl=-1,ml=0;function hl(){return X&6?M():pl===-1?pl=M():pl}function gl(e){return e.mode&1?X&2&&Kc!==0?Kc&-Kc:Na.transition===null?(e=N,e===0?(e=window.event,e=e===void 0?16:Dn(e.type),e):e):(ml===0&&(ml=Wt()),ml):1}function _l(e,t,n,i){if(50<dl)throw dl=0,fl=null,Error(r(185));Kt(e,n,i),(!(X&2)||e!==Wc)&&(e===Wc&&(!(X&2)&&(Qc|=n),Yc===4&&Sl(e,Kc)),Z(e,i),n===1&&X===0&&!(t.mode&1)&&(rl=M()+500,ca&&fa()))}function Z(e,t){var n=e.callbackNode;Ht(e,t);var r=Bt(e,e===Wc?Kc:0);if(r===0)n!==null&&xt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xt(n),t===1)e.tag===0?da(Cl.bind(null,e)):ua(Cl.bind(null,e)),ji(function(){!(X&6)&&fa()}),n=null;else{switch(Yt(r)){case 1:n=Tt;break;case 4:n=Et;break;case 16:n=Dt;break;case 536870912:n=kt;break;default:n=Dt}n=Gl(n,vl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vl(e,t){if(pl=-1,ml=0,X&6)throw Error(r(327));var n=e.callbackNode;if(Rl()&&e.callbackNode!==n)return null;var i=Bt(e,e===Wc?Kc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=jl(e,i);else{t=i;var a=X;X|=2;var o=kl();(Wc!==e||Kc!==t)&&(il=null,rl=M()+500,Dl(e,t));do try{Nl();break}catch(t){Ol(e,t)}while(1);Wa(),Vc.current=o,X=a,Gc===null?(Wc=null,Kc=0,t=Yc):t=0}if(t!==0){if(t===2&&(a=Ut(e),a!==0&&(i=a,t=yl(e,a))),t===1)throw n=Xc,Dl(e,0),Sl(e,i),Z(e,M()),n;if(t===6)Sl(e,i);else{if(a=e.current.alternate,!(i&30)&&!xl(a)&&(t=jl(e,i),t===2&&(o=Ut(e),o!==0&&(i=o,t=yl(e,o))),t===1))throw n=Xc,Dl(e,0),Sl(e,i),Z(e,M()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Il(e,tl,il);break;case 3:if(Sl(e,i),(i&130023424)===i&&(t=nl+500-M(),10<t)){if(Bt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){hl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Oi(Il.bind(null,e,tl,il),t);break}Il(e,tl,il);break;case 4:if(Sl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Nt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=M()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Bc(i/1960))-i,10<i){e.timeoutHandle=Oi(Il.bind(null,e,tl,il),i);break}Il(e,tl,il);break;case 5:Il(e,tl,il);break;default:throw Error(r(329))}}}return Z(e,M()),e.callbackNode===n?vl.bind(null,e):null}function yl(e,t){var n=el;return e.current.memoizedState.isDehydrated&&(Dl(e,t).flags|=256),e=jl(e,t),e!==2&&(t=tl,tl=n,t!==null&&bl(t)),e}function bl(e){tl===null?tl=e:tl.push.apply(tl,e)}function xl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Lr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sl(e,t){for(t&=~$c,t&=~Qc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Cl(e){if(X&6)throw Error(r(327));Rl();var t=Bt(e,0);if(!(t&1))return Z(e,M()),null;var n=jl(e,t);if(e.tag!==0&&n===2){var i=Ut(e);i!==0&&(t=i,n=yl(e,i))}if(n===1)throw n=Xc,Dl(e,0),Sl(e,t),Z(e,M()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Il(e,tl,il),Z(e,M()),null}function wl(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(rl=M()+500,ca&&fa())}}function Tl(e){ll!==null&&ll.tag===0&&!(X&6)&&Rl();var t=X;X|=1;var n=Uc.transition,r=N;try{if(Uc.transition=null,N=1,e)return e()}finally{N=r,Uc.transition=n,X=t,!(X&6)&&fa()}}function El(){qc=Jc.current,z(Jc)}function Dl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ki(n)),Gc!==null)for(n=Gc.return;n!==null;){var r=n;switch(W(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:ho(),z(Qi),z(Zi),bo();break;case 5:_o(r);break;case 4:ho();break;case 13:z(q);break;case 19:z(q);break;case 10:Ga(r.type._context);break;case 22:case 23:El()}n=n.return}if(Wc=e,Gc=e=Yl(e.current,null),Kc=qc=t,Yc=0,Xc=null,$c=Qc=Zc=0,tl=el=null,Ya!==null){for(t=0;t<Ya.length;t++)if(n=Ya[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Ya=null}return e}function Ol(e,t){do{var n=Gc;try{if(Wa(),xo.current=ms,Eo){for(var i=J.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Eo=!1}if(Co=0,To=wo=J=null,Do=!1,Oo=0,Hc.current=null,n===null||n.return===null){Yc=1,Xc=t,Gc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Kc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ms(s);if(m!==null){m.flags&=-257,Ns(m,s,c,o,t),m.mode&1&&js(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){js(o,u,t),Al();break a}l=Error(r(426))}}else if(G&&c.mode&1){var _=Ms(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ns(_,s,c,o,t),Ma(Ts(l,c));break a}}o=l=Ts(l,c),Yc!==4&&(Yc=2),el===null?el=[o]:el.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=ks(o,l,t);ao(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(sl===null||!sl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=As(o,c,t);ao(o,x);break a}}o=o.return}while(o!==null)}Fl(n)}catch(e){t=e,Gc===n&&n!==null&&(Gc=n=n.return);continue}break}while(1)}function kl(){var e=Vc.current;return Vc.current=ms,e===null?ms:e}function Al(){(Yc===0||Yc===3||Yc===2)&&(Yc=4),Wc===null||!(Zc&268435455)&&!(Qc&268435455)||Sl(Wc,Kc)}function jl(e,t){var n=X;X|=2;var i=kl();(Wc!==e||Kc!==t)&&(il=null,Dl(e,t));do try{Ml();break}catch(t){Ol(e,t)}while(1);if(Wa(),X=n,Vc.current=i,Gc!==null)throw Error(r(261));return Wc=null,Kc=0,Yc}function Ml(){for(;Gc!==null;)Pl(Gc)}function Nl(){for(;Gc!==null&&!St();)Pl(Gc)}function Pl(e){var t=Wl(e.alternate,e,qc);e.memoizedProps=e.pendingProps,t===null?Fl(e):Gc=t,Hc.current=null}function Fl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dc(n,t),n!==null){n.flags&=32767,Gc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Yc=6,Gc=null;return}}else if(n=uc(n,t,qc),n!==null){Gc=n;return}if(t=t.sibling,t!==null){Gc=t;return}Gc=t=e}while(t!==null);Yc===0&&(Yc=5)}function Il(e,t,n){var r=N,i=Uc.transition;try{Uc.transition=null,N=1,Ll(e,t,n,r)}finally{Uc.transition=i,N=r}return null}function Ll(e,t,n,i){do Rl();while(ll!==null);if(X&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qt(e,o),e===Wc&&(Gc=Wc=null,Kc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,Gl(Dt,function(){return Rl(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Uc.transition,Uc.transition=null;var s=N;N=1;var c=X;X|=4,Hc.current=null,vc(e,n),Nc(n,e),Wr(Ei),xn=!!Ti,Ei=Ti=null,e.current=n,Fc(n,e,a),Ct(),X=c,N=s,Uc.transition=o}else e.current=n;if(cl&&(cl=!1,ll=e,ul=a),o=e.pendingLanes,o===0&&(sl=null),Mt(n.stateNode,i),Z(e,M()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(al)throw al=!1,e=ol,ol=null,e;return ul&1&&e.tag!==0&&Rl(),o=e.pendingLanes,o&1?e===fl?dl++:(dl=0,fl=e):dl=0,fa(),null}function Rl(){if(ll!==null){var e=Yt(ul),t=Uc.transition,n=N;try{if(Uc.transition=null,N=16>e?16:e,ll===null)var i=!1;else{if(e=ll,ll=null,ul=0,X&6)throw Error(r(331));var a=X;for(X|=4,Y=e.current;Y!==null;){var o=Y,s=o.child;if(Y.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Y=u;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:yc(8,d,o)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var p=d.sibling,m=d.return;if(Sc(d),d===u){Y=null;break}if(p!==null){p.return=m,Y=p;break}Y=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Y=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Y=s;else b:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Y=v;break b}Y=o.return}}var y=e.current;for(Y=y;Y!==null;){s=Y;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Y=b;else b:for(s=y;Y!==null;){if(c=Y,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:bc(9,c)}}catch(e){Q(c,c.return,e)}if(c===s){Y=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Y=x;break b}Y=c.return}}if(X=a,fa(),jt&&typeof jt.onPostCommitFiberRoot==`function`)try{jt.onPostCommitFiberRoot(At,e)}catch{}i=!0}return i}finally{N=n,Uc.transition=t}}return!1}function zl(e,t,n){t=Ts(n,t),t=ks(e,t,1),e=ro(e,t,1),t=hl(),e!==null&&(Kt(e,1,t),Z(e,t))}function Q(e,t,n){if(e.tag===3)zl(e,e,n);else for(;t!==null;){if(t.tag===3){zl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(sl===null||!sl.has(r))){e=Ts(n,e),e=As(t,e,1),t=ro(t,e,1),e=hl(),t!==null&&(Kt(t,1,e),Z(t,e));break}}t=t.return}}function Bl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=hl(),e.pingedLanes|=e.suspendedLanes&n,Wc===e&&(Kc&n)===n&&(Yc===4||Yc===3&&(Kc&130023424)===Kc&&500>M()-nl?Dl(e,0):$c|=n),Z(e,t)}function Vl(e,t){t===0&&(e.mode&1?(t=Rt,Rt<<=1,!(Rt&130023424)&&(Rt=4194304)):t=1);var n=hl();e=Qa(e,t),e!==null&&(Kt(e,t,n),Z(e,n))}function Hl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vl(e,n)}function Ul(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Vl(e,n)}var Wl=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qi.current)Fs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Fs=!1,ic(e,t,n);Fs=!!(e.flags&131072)}else Fs=!1,G&&t.flags&1048576&&H(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;nc(e,t),e=t.pendingProps;var a=ea(t,Zi.current);qa(t,n),a=Mo(null,t,i,e,a,n);var o=No();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ta(i)?(o=!0,aa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,eo(t),a.updater=bs,t.stateNode=a,a._reactInternals=t,ws(t,i,e,n),t=Ws(null,t,i,!0,o,n)):(t.tag=0,G&&o&&U(t),Is(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(nc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Jl(i),e=vs(i,e),a){case 0:t=Hs(null,t,i,e,n);break a;case 1:t=Us(null,t,i,e,n);break a;case 11:t=Ls(null,t,i,e,n);break a;case 14:t=Rs(null,t,i,vs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),Hs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),Us(e,t,i,a,n);case 3:a:{if(Gs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,to(e,t),oo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ts(Error(r(423)),t),t=Ks(e,t,i,n,a);break a}else if(i!==a){a=Ts(Error(r(424)),t),t=Ks(e,t,i,n,a);break a}else for(Ca=Pi(t.stateNode.containerInfo.firstChild),Sa=t,G=!0,K=null,n=za(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ja(),i===a){t=rc(e,t,n);break a}Is(e,t,i,n)}t=t.child}return t;case 5:return go(t),e===null&&Da(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Di(i,a)?s=null:o!==null&&Di(i,o)&&(t.flags|=32),Vs(e,t),Is(e,t,s,n),t.child;case 6:return e===null&&Da(t),null;case 13:return Ys(e,t,n);case 4:return mo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ra(t,null,i,n):Is(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),Ls(e,t,i,a,n);case 7:return Is(e,t,t.pendingProps,n),t.child;case 8:return Is(e,t,t.pendingProps.children,n),t.child;case 12:return Is(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,B(Ba,i._currentValue),i._currentValue=s,o!==null)if(Lr(o.value,s)){if(o.children===a.children&&!Qi.current){t=rc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=no(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ka(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ka(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Is(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,qa(t,n),a=Ja(a),i=i(a),t.flags|=1,Is(e,t,i,n),t.child;case 14:return i=t.type,a=vs(i,t.pendingProps),a=vs(i.type,a),Rs(e,t,i,a,n);case 15:return zs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),nc(e,t),t.tag=1,ta(i)?(e=!0,aa(t)):e=!1,qa(t,n),Ss(t,i,a),ws(t,i,a,n),Ws(null,t,i,!0,e,n);case 19:return tc(e,t,n);case 22:return Bs(e,t,n)}throw Error(r(156,t.tag))};function Gl(e,t){return bt(e,t)}function Kl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ql(e,t,n,r){return new Kl(e,t,n,r)}function $(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jl(e){if(typeof e==`function`)return+!!$(e);if(e!=null){if(e=e.$$typeof,e===ne)return 11;if(e===A)return 14}return 2}function Yl(e,t){var n=e.alternate;return n===null?(n=ql(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)$(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return Zl(n.children,a,o,t);case ee:s=8,a|=8;break;case D:return e=ql(12,n,t,a|2),e.elementType=D,e.lanes=o,e;case re:return e=ql(13,n,t,a),e.elementType=re,e.lanes=o,e;case k:return e=ql(19,n,t,a),e.elementType=k,e.lanes=o,e;case ae:return Ql(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case O:s=10;break a;case te:s=9;break a;case ne:s=11;break a;case A:s=14;break a;case ie:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=ql(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Zl(e,t,n,r){return e=ql(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=ql(22,e,r,t),e.elementType=ae,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=ql(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=ql(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gt(0),this.expirationTimes=Gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,s,c){return e=new tu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=ql(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eo(a),e}function ru(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function iu(e){if(!e)return Xi;e=e._reactInternals;a:{if(mt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(ta(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(ta(n))return ia(e,n,t)}return t}function au(e,t,n,r,i,a,o,s,c){return e=nu(n,r,!0,e,i,a,o,s,c),e.context=iu(null),n=e.current,r=hl(),i=gl(n),a=no(r,i),a.callback=t??null,ro(n,a,i),e.current.lanes=i,Kt(e,i,r),Z(e,r),e}function ou(e,t,n,r){var i=t.current,a=hl(),o=gl(i);return n=iu(n),t.context===null?t.context=n:t.pendingContext=n,t=no(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ro(i,t,o),e!==null&&(_l(e,i,o,a),io(e,i,o)),o}function su(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function uu(){return null}var du=typeof reportError==`function`?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}pu.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));ou(e,t,null,null)},pu.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tl(function(){ou(null,e,null,null)}),t[zi]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=$t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&mn(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function gu(){}function _u(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=su(o);a.call(e)}}var o=au(t,r,e,0,null,!1,!1,``,gu);return e._reactRootContainer=o,e[zi]=o.current,pi(e.nodeType===8?e.parentNode:e),Tl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=su(c);s.call(e)}}var c=nu(e,0,!1,null,null,!1,!1,``,gu);return e._reactRootContainer=c,e[zi]=c.current,pi(e.nodeType===8?e.parentNode:e),Tl(function(){ou(t,c,n,r)}),c}function vu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=su(o);s.call(e)}}ou(t,o,e,i)}else o=_u(n,t,e,i,r);return su(o)}Xt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zt(t.pendingLanes);n!==0&&(Jt(t,n|1),Z(t,M()),!(X&6)&&(rl=M()+500,fa()))}break;case 13:Tl(function(){var t=Qa(e,1);t!==null&&_l(t,e,1,hl())}),lu(e,1)}},Zt=function(e){if(e.tag===13){var t=Qa(e,134217728);t!==null&&_l(t,e,134217728,hl()),lu(e,134217728)}},Qt=function(e){if(e.tag===13){var t=gl(e),n=Qa(e,t);n!==null&&_l(n,e,t,hl()),lu(e,t)}},$t=function(){return N},en=function(e,t){var n=N;try{return N=e,t()}finally{N=n}},qe=function(e,t,n){switch(t){case`input`:if(we(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ki(i);if(!a)throw Error(r(90));ye(i),we(i,a)}}}break;case`textarea`:je(e,n);break;case`select`:t=n.value,t!=null&&Oe(e,!!n.multiple,t,!1)}},$e=wl,et=Tl;var yu={usingClientEntryPoint:!1,Events:[Wi,Gi,Ki,Ze,Qe,wl]},bu={findFiberByHostInstance:Ui,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},xu={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vt(e),e===null?null:e.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||uu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{At=Su.inject(xu),jt=Su}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(r(200));return ru(e,t,null,n)},e.createRoot=function(e,t){if(!mu(e))throw Error(r(299));var n=!1,i=``,a=du;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,i,a),e[zi]=t.current,pi(e.nodeType===8?e.parentNode:e),new fu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=vt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Tl(e)},e.hydrate=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=du;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=au(t,null,e,1,n??null,a,!1,o,s),e[zi]=t.current,pi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new pu(t)},e.render=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!hu(e))throw Error(r(40));return e._reactRootContainer?(Tl(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[zi]=null})}),!0):!1},e.unstable_batchedUpdates=wl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return vu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=h();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),_=`modulepreload`,v=function(e){return`/rag-knowledge-tutor/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=v(t,n),t=s(t),t in y)return;y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=l(d(),1),S=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,C=/^[\\/]{2}/;function w(e,t){return t+e.replace(/\\/g,`/`)}var T=`popstate`;function E(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ee(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=A(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),re(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:k(t))}function r(e,t){O(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return ie(t,n,r,e)}function D(e,t){if(e===!1||e==null)throw Error(t)}function O(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function te(){return Math.random().toString(36).substring(2,10)}function ne(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function re(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?A(t):t,state:n,key:t&&t.key||r||te(),mask:i}}function k({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function A(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ie(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=E(e)?e:re(h.location,e,t);n&&n(r,e),l=u()+1;let d=ne(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=E(e)?e:re(h.location,e,t);n&&n(r,e),l=u();let i=ne(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ae(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(T,d),c=e,()=>{i.removeEventListener(T,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ae(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),D(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:k(t);return i=i.replace(/ $/,`%20`),!n&&C.test(i)&&(i=r+i),new URL(i,r)}function oe(e,t,n=`/`){return se(e,t,n,!1)}function se(e,t,n,r,i){let a=Ee((typeof t==`string`?A(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ce(e),s=null,c=Te(a);for(let e=0;s==null&&e<o.length;++e)s=xe(o[e],c,r);return s}function j(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ce(e){let t=le(e);return de(t),t}function le(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;D(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Pe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(D(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),le(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=we(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ue(e.path))a(e,t,!0,n)}),t}function ue(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ue(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function de(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var fe=/^:[\w-]+$/,pe=3,me=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=me),n.filter(e=>!ve(e)).reduce((e,t)=>e+(fe.test(t)?pe:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ce(u,l,s.matcher,s.compiledParams):Se(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Pe([a,d.pathname]),pathnameBase:Ie(Pe([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Pe([a,d.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=we(e.path,e.caseSensitive,e.end);return Ce(e,t,n,r)}function Ce(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function we(e,t=!1,n=!0){O(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Te(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return O(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ee(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?A(e):e,a;return n?(n=Ne(n),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Le(r),hash:Re(i)}}function Oe(e,t){let n=Fe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=A(e):(i={...e},D(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),D(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),D(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.replace(/[\\/]{2,}/g,`/`),Pe=e=>Ne(e.join(`/`)),Fe=e=>e.replace(/\/+$/,``),Ie=e=>Fe(e).replace(/^\/*/,`/`),Le=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Re=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ze=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Be(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ve(e){return Pe(e.map(e=>e.route.path).filter(Boolean))||`/`}var He=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ue(e,t){let n=e;if(typeof n!=`string`||!S.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(He)try{let e=new URL(window.location.href),r=C.test(n)?new URL(w(n,e.protocol)):new URL(n),a=Ee(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{O(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var We=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(We);var Ge=[`GET`,...We];new Set(Ge);var Ke=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function qe(e){try{return Ke.includes(new URL(e).protocol)}catch{return!1}}var Je=x.createContext(null);Je.displayName=`DataRouter`;var Ye=x.createContext(null);Ye.displayName=`DataRouterState`;var Xe=x.createContext(!1);function Ze(){return x.useContext(Xe)}var Qe=x.createContext({isTransitioning:!1});Qe.displayName=`ViewTransition`;var $e=x.createContext(new Map);$e.displayName=`Fetchers`;var et=x.createContext(null);et.displayName=`Await`;var tt=x.createContext(null);tt.displayName=`Navigation`;var nt=x.createContext(null);nt.displayName=`Location`;var rt=x.createContext({outlet:null,matches:[],isDataRoute:!1});rt.displayName=`Route`;var it=x.createContext(null);it.displayName=`RouteError`;var at=`REACT_ROUTER_ERROR`,ot=`REDIRECT`,st=`ROUTE_ERROR_RESPONSE`;function ct(e){if(e.startsWith(`${at}:${ot}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function lt(e){if(e.startsWith(`${at}:${st}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ze(t.status,t.statusText,t.data)}catch{}}function ut(e,{relative:t}={}){D(dt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(tt),{hash:i,pathname:a,search:o}=_t(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Pe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function dt(){return x.useContext(nt)!=null}function ft(){return D(dt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(nt).location}var pt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function mt(e){x.useContext(tt).static||x.useLayoutEffect(e)}function ht(){let{isDataRoute:e}=x.useContext(rt);return e?Ft():gt()}function gt(){D(dt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Je),{basename:t,navigator:n}=x.useContext(tt),{matches:r}=x.useContext(rt),{pathname:i}=ft(),a=JSON.stringify(je(r)),o=x.useRef(!1);return mt(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(O(o.current,pt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Pe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function _t(e,{relative:t}={}){let{matches:n}=x.useContext(rt),{pathname:r}=ft(),i=JSON.stringify(je(n));return x.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function vt(e,t){return yt(e,t)}function yt(e,t,n){D(dt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(tt),{matches:i}=x.useContext(rt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Lt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ft(),d;if(t){let e=typeof t==`string`?A(t):t;D(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):oe(e,{pathname:p});O(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),O(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Tt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Pe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Pe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(nt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function bt(){let e=Pt(),t=Be(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var xt=x.createElement(bt,null),St=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=lt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(rt.Provider,{value:this.props.routeContext},x.createElement(it.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(M,{error:e},t):t}};St.contextType=Xe;var Ct=new WeakMap;function M({children:e,error:t}){let{basename:n}=x.useContext(tt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ct(t.digest);if(e){let r=Ct.get(t);if(r)throw r;let i=Ue(e.location,n),a=i.absoluteURL||i.to;if(qe(a))throw Error(`Invalid redirect location`);if(He&&!Ct.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Ct.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function wt({routeContext:e,match:t,children:n}){let r=x.useContext(Je);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(rt.Provider,{value:e},n)}function Tt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);D(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ve(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||xt,o&&(s<0&&c===0?(Lt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(wt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(St,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Et(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dt(e){let t=x.useContext(Je);return D(t,Et(e)),t}function Ot(e){let t=x.useContext(Ye);return D(t,Et(e)),t}function kt(e){let t=x.useContext(rt);return D(t,Et(e)),t}function At(e){let t=kt(e),n=t.matches[t.matches.length-1];return D(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function jt(){return At(`useRouteId`)}function Mt(){let e=Ot(`useNavigation`);return x.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function Nt(){let{matches:e,loaderData:t}=Ot(`useMatches`);return x.useMemo(()=>e.map(e=>j(e,t)),[e,t])}function Pt(){let e=x.useContext(it),t=Ot(`useRouteError`),n=At(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Ft(){let{router:e}=Dt(`useNavigate`),t=At(`useNavigate`),n=x.useRef(!1);return mt(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{O(n.current,pt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var It={};function Lt(e,t,n){!t&&!It[e]&&(It[e]=!0,O(!1,n))}x.memo(Rt);function Rt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return yt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function zt(e){D(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Bt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){D(!dt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=A(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=Ee(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return O(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(tt.Provider,{value:c},x.createElement(nt.Provider,{children:t,value:h}))}function Vt({children:e,location:t}){return vt(Ht(e),t)}x.Component;function Ht(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Ht(e.props.children,i));return}D(e.type===zt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),D(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ht(e.props.children,i)),n.push(a)}),n}var Ut=`get`,Wt=`application/x-www-form-urlencoded`;function Gt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Kt(e){return Gt(e)&&e.tagName.toLowerCase()===`button`}function qt(e){return Gt(e)&&e.tagName.toLowerCase()===`form`}function Jt(e){return Gt(e)&&e.tagName.toLowerCase()===`input`}function N(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yt(e,t){return e.button===0&&(!t||t===`_self`)&&!N(e)}var Xt=null;function Zt(){if(Xt===null)try{new FormData(document.createElement(`form`),0),Xt=!1}catch{Xt=!0}return Xt}var Qt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function $t(e){return e!=null&&!Qt.has(e)?(O(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wt}"`),null):e}function en(e,t){let n,r,i,a,o;if(qt(e)){let o=e.getAttribute(`action`);r=o?Ee(o,t):null,n=e.getAttribute(`method`)||Ut,i=$t(e.getAttribute(`enctype`))||Wt,a=new FormData(e)}else if(Kt(e)||Jt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ee(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Ut,i=$t(e.getAttribute(`formenctype`))||$t(o.getAttribute(`enctype`))||Wt,a=new FormData(o,e),!Zt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Gt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Ut,r=null,i=Wt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var tn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},nn=/[&><\u2028\u2029]/g;function rn(e){return e.replace(nn,e=>tn[e])}function an(e,t){if(e===!1||e==null)throw Error(t)}function on(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ee(i.pathname,t)===`/`?i.pathname=`${Fe(t)}/_root.${r}`:i.pathname=`${Fe(i.pathname)}.${r}`,i}async function sn(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cn(e){return e!=null&&typeof e.page==`string`}function ln(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function un(e,t,n){return hn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await sn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(ln).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function dn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function fn(e,t,{includeHydrateFallback:n}={}){return pn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function pn(e){return[...new Set(e)]}function mn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function hn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!cn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(mn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function gn(){let e=x.useContext(Je);return an(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function _n(){let e=x.useContext(Ye);return an(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var vn=x.createContext(void 0);vn.displayName=`FrameworkContext`;function yn(){let e=x.useContext(vn);return an(e,`You must render this element inside a <HydratedRouter> element`),e}function bn(e,t){let n=x.useContext(vn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:xn(s,p),onBlur:xn(c,m),onMouseEnter:xn(l,p),onMouseLeave:xn(u,m),onTouchStart:xn(d,p)}]:[a,f,{}]:[!1,f,{}]}function xn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Sn({page:e,...t}){let n=Ze(),{nonce:r}=yn(),{router:i}=gn(),a=x.useMemo(()=>oe(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(wn,{page:e,matches:a,...t}):x.createElement(Tn,{page:e,matches:a,...t})):null}function Cn(e){let{manifest:t,routeModules:n}=yn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return un(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function wn({page:e,matches:t,...n}){let r=ft(),{future:i}=yn(),{basename:a}=gn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=on(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Tn({page:e,matches:t,...n}){let r=ft(),{future:i,manifest:a,routeModules:o}=yn(),{basename:s}=gn(),{loaderData:c,matches:l}=_n(),u=x.useMemo(()=>dn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>dn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=on(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>fn(d,a),[d,a]),m=Cn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function En(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var Dn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Dn&&(window.__reactRouterVersion=`7.18.1`)}catch{}function On({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=ee({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Bt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function kn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(Bt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}kn.displayName=`unstable_HistoryRouter`;var An=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(tt),v=typeof l==`string`&&S.test(l),y=Ue(l,h);l=y.to;let b=ut(l,{relative:r}),C=ft(),w=null;if(o){let e=Me(o,[],C.mask?C.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Pe([h,e.pathname])),w=g.createHref(e)}let[T,E,ee]=bn(n,p),D=Ln(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function O(t){e&&e(t),t.defaultPrevented||D(t)}let te=!(y.isExternal||i),ne=x.createElement(`a`,{...p,...ee,href:(te?w:void 0)||y.absoluteURL||b,onClick:te?O:e,ref:En(m,E),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return T&&!v?x.createElement(x.Fragment,null,ne,x.createElement(Sn,{page:b})):ne});An.displayName=`Link`;var jn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=_t(a,{relative:c.relative}),d=ft(),f=x.useContext(Ye),{navigator:p,basename:m}=x.useContext(tt),h=f!=null&&qn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Ee(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},w=b?e:void 0,T;T=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return x.createElement(An,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});jn.displayName=`NavLink`;var Mn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Ut,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(tt),g=Bn(),_=Vn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&S.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Mn.displayName=`Form`;function Nn({getKey:e,storageKey:t,...n}){let r=x.useContext(vn),{basename:i}=x.useContext(tt),a=ft(),o=Nt();Gn({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Wn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${rn(JSON.stringify(t||Hn))}, ${rn(JSON.stringify(s))})`}})}Nn.displayName=`ScrollRestoration`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=x.useContext(Je);return D(t,Pn(e)),t}function In(e){let t=x.useContext(Ye);return D(t,Pn(e)),t}function Ln(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=ht(),d=ft(),f=_t(e,{relative:o});return x.useCallback(p=>{if(Yt(p,t)){p.preventDefault();let t=n===void 0?k(d)===k(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Rn=0,zn=()=>`__${String(++Rn)}__`;function Bn(){let{router:e}=Fn(`useSubmit`),{basename:t}=x.useContext(tt),n=jt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=en(e,t);a.navigate===!1?await r(a.fetcherKey||zn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Vn(e,{relative:t}={}){let{basename:n}=x.useContext(tt),r=x.useContext(rt);D(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={..._t(e||`.`,{relative:t})},o=ft();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Pe([n,a.pathname])),k(a)}var Hn=`react-router-scroll-positions`,Un={};function Wn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ee(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Gn({getKey:e,storageKey:t}={}){let{router:n}=Fn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=In(`useScrollRestoration`),{basename:a}=x.useContext(tt),o=ft(),s=Nt(),c=Mt();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Kn(x.useCallback(()=>{if(c.state===`idle`){let t=Wn(o,s,a,e);Un[t]=window.scrollY}try{sessionStorage.setItem(t||Hn,JSON.stringify(Un))}catch(e){O(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Hn);e&&(Un=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Un,()=>window.scrollY,e?(t,n)=>Wn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{O(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Kn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function qn(e,{relative:t}={}){let n=x.useContext(Qe);D(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=_t(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ee(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ee(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var Jn=l(g(),1),Yn=`## 1. Introduction\r
\r
Retrieval-Augmented Generation (RAG) systems answer questions by first **retrieving** relevant documents from a knowledge base (usually a vector database) and then **generating** an answer using an LLM conditioned on those documents.\r
\r
The weakest link in most RAG pipelines is not the LLM — it's the **retrieval step**. A single user query is often:\r
\r
- **Ambiguous** ("What is the return policy?" — return of what? electronics? clothing?)\r
- **Under-specified** (missing synonyms, domain terms, or related phrasing)\r
- **Poorly aligned** with how the answer is phrased in the source documents (vocabulary mismatch)\r
\r
Because vector similarity search retrieves documents based on the *embedding* of the query, a single phrasing of a question only explores **one point** in embedding space. If the best-matching chunk in your knowledge base uses different terminology, it may fall outside the top-k results — even if it's the most relevant chunk available.\r
\r
**Multi-Query Retrieval (MQR)** solves this by generating **multiple reformulations** of the original query, retrieving documents for each, and then merging/deduplicating the results into a single, richer candidate set.\r
\r
---\r
\r
## 2. Core Concept\r
\r
> Instead of asking the vector store one question, ask it the same question in several different ways — then combine the answers.\r
\r
### 2.1 The Problem It Solves: Vocabulary & Perspective Mismatch\r
\r
| User Query | Document Chunk (relevant, but missed) |\r
|---|---|\r
| "How do I cancel my subscription?" | "Steps to **terminate** your **membership plan**" |\r
| "Is the API rate limited?" | "**Throttling** policy for **request quotas**" |\r
| "Why is my app crashing?" | "Troubleshooting **unexpected application termination**" |\r
\r
A single embedding of "cancel my subscription" may sit far away from "terminate your membership plan" in vector space, even though they mean the same thing. Multiple phrasings increase the odds of a semantic hit.\r
\r
### 2.2 How Multi-Query Retrieval Works (High Level)\r
\r
1. **Query Expansion** — An LLM takes the original user question and generates *N* semantically diverse but intent-preserving variations.\r
2. **Parallel Retrieval** — Each variation is embedded and used to query the vector store independently (top-k per query).\r
3. **Union & Deduplication** — All retrieved chunks are merged into a single candidate pool, removing duplicates (by document ID or content hash).\r
4. **Re-ranking (optional but recommended)** — The merged pool is re-scored using techniques like **Reciprocal Rank Fusion (RRF)** or a cross-encoder re-ranker, since chunks retrieved by more than one query variant are usually more relevant.\r
5. **Context Assembly** — Top re-ranked chunks are passed to the LLM as context for final answer generation.\r
\r
---\r
\r
## 3. Workflow Diagram\r
\r
\r
\`\`\`mermaid\r
flowchart TD\r
    A[User Query] --> B[LLM: Generate N Query Variations]\r
    B --> C1[Query Variant 1]\r
    B --> C2[Query Variant 2]\r
    B --> C3[Query Variant 3]\r
    B --> C4[Original Query]\r
\r
    C1 --> D1[Vector Store Retrieval - top k]\r
    C2 --> D2[Vector Store Retrieval - top k]\r
    C3 --> D3[Vector Store Retrieval - top k]\r
    C4 --> D4[Vector Store Retrieval - top k]\r
\r
    D1 --> E[Union of Retrieved Chunks]\r
    D2 --> E\r
    D3 --> E\r
    D4 --> E\r
\r
    E --> F[Deduplicate by doc id / content hash]\r
    F --> G[Re-rank: Reciprocal Rank Fusion / Cross-Encoder]\r
    G --> H[Top-K Final Context Chunks]\r
    H --> I[LLM Answer Generation]\r
    I --> J[Final Answer to User]\r
\`\`\`\r
\r
---\r
\r
## 4. Real-Time Example\r
\r
**Scenario:** An internal HR knowledge-base chatbot at a company.\r
\r
**User asks:**\r
> "Can I work from home permanently?"\r
\r
**Problem with single-query retrieval:**\r
The knowledge base has a document titled *"Remote Work & Flexible Location Policy"* that uses terms like *"telecommute," "distributed workforce,"* and *"location-independent employment."* The literal phrase "work from home permanently" never appears, so a single vector search might miss it or rank it low.\r
\r
**Multi-Query Retrieval generates:**\r
1. "Can I work from home permanently?" (original)\r
2. "What is the company's remote work policy?"\r
3. "Is permanent telecommuting allowed for employees?"\r
4. "Rules for full-time distributed / location-independent work"\r
\r
**Result:** Query variant 3 and 4 hit the "Remote Work & Flexible Location Policy" document directly, while variant 2 pulls in a related "Hybrid Work Guidelines" doc. After deduplication and re-ranking, the LLM now has both documents to synthesize a complete, accurate answer — something the original query alone would likely have missed.\r
\r
---\r
\r
## 5. Code Implementation\r
\r
### 5.1 Using LangChain's Built-in \`MultiQueryRetriever\`\r
\r
\`\`\`python\r
from langchain_openai import ChatOpenAI, OpenAIEmbeddings\r
from langchain_community.vectorstores import Chroma\r
from langchain.retrievers.multi_query import MultiQueryRetriever\r
from langchain_core.documents import Document\r
\r
# 1. Set up embeddings + vector store (example documents)\r
docs = [\r
    Document(page_content="Steps to terminate your membership plan: go to Settings > Billing > Cancel."),\r
    Document(page_content="Throttling policy for request quotas: 100 requests/minute per API key."),\r
    Document(page_content="Remote Work & Flexible Location Policy: employees may telecommute full-time with manager approval."),\r
    Document(page_content="Hybrid Work Guidelines: employees must be in-office at least 2 days per week."),\r
]\r
\r
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")\r
vectorstore = Chroma.from_documents(docs, embeddings)\r
\r
# 2. LLM used to generate query variations\r
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)\r
\r
# 3. Wrap the base retriever with MultiQueryRetriever\r
retriever = MultiQueryRetriever.from_llm(\r
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),\r
    llm=llm,\r
)\r
\r
# 4. Run it\r
query = "Can I work from home permanently?"\r
results = retriever.invoke(query)\r
\r
for i, doc in enumerate(results, 1):\r
    print(f"[{i}] {doc.page_content}")\r
\`\`\`\r
\r
### 5.2 Manual / From-Scratch Implementation (No Framework)\r
\r
This version is useful when you want full control over prompt design, deduplication, and re-ranking (e.g., Reciprocal Rank Fusion).\r
\r
\`\`\`python\r
import openai\r
from typing import List, Dict\r
import numpy as np\r
\r
client = openai.OpenAI()\r
\r
# ---- Step 1: Generate query variations ----\r
def generate_query_variations(original_query: str, n: int = 4) -> List[str]:\r
    prompt = f"""You are an AI assistant helping improve search recall.\r
Generate {n} different ways to phrase the following question.\r
Preserve the original intent, but vary vocabulary, phrasing, and perspective.\r
Return ONLY the questions, one per line, no numbering.\r
\r
Original question: {original_query}\r
"""\r
    response = client.chat.completions.create(\r
        model="gpt-4o-mini",\r
        messages=[{"role": "user", "content": prompt}],\r
        temperature=0.7,\r
    )\r
    variations = response.choices[0].message.content.strip().split("\\n")\r
    variations = [v.strip("- ").strip() for v in variations if v.strip()]\r
    return [original_query] + variations  # include the original\r
\r
\r
# ---- Step 2: Embed and retrieve per query variant ----\r
def embed_text(text: str) -> List[float]:\r
    resp = client.embeddings.create(model="text-embedding-3-small", input=text)\r
    return resp.data[0].embedding\r
\r
\r
def cosine_similarity(a: List[float], b: List[float]) -> float:\r
    a, b = np.array(a), np.array(b)\r
    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))\r
\r
\r
def retrieve_top_k(query: str, corpus: List[Dict], k: int = 3) -> List[Dict]:\r
    q_emb = embed_text(query)\r
    scored = [\r
        {**doc, "score": cosine_similarity(q_emb, doc["embedding"])}\r
        for doc in corpus\r
    ]\r
    return sorted(scored, key=lambda x: x["score"], reverse=True)[:k]\r
\r
\r
# ---- Step 3: Reciprocal Rank Fusion for merging results ----\r
def reciprocal_rank_fusion(result_lists: List[List[Dict]], k: int = 60) -> List[Dict]:\r
    fused_scores: Dict[str, float] = {}\r
    doc_lookup: Dict[str, Dict] = {}\r
\r
    for result_list in result_lists:\r
        for rank, doc in enumerate(result_list):\r
            doc_id = doc["id"]\r
            doc_lookup[doc_id] = doc\r
            fused_scores.setdefault(doc_id, 0.0)\r
            fused_scores[doc_id] += 1.0 / (k + rank + 1)  # RRF formula\r
\r
    ranked_ids = sorted(fused_scores, key=lambda x: fused_scores[x], reverse=True)\r
    return [doc_lookup[doc_id] for doc_id in ranked_ids]\r
\r
\r
# ---- Step 4: Full pipeline ----\r
def multi_query_retrieval(original_query: str, corpus: List[Dict], n_variations: int = 4, top_k: int = 5):\r
    queries = generate_query_variations(original_query, n=n_variations)\r
    print("Generated queries:", queries)\r
\r
    all_results = [retrieve_top_k(q, corpus, k=top_k) for q in queries]\r
    fused = reciprocal_rank_fusion(all_results)\r
    return fused[:top_k]\r
\r
\r
# ---- Example corpus (pre-embedded) ----\r
raw_docs = [\r
    {"id": "doc1", "text": "Steps to terminate your membership plan."},\r
    {"id": "doc2", "text": "Throttling policy for request quotas."},\r
    {"id": "doc3", "text": "Remote Work & Flexible Location Policy: telecommute full-time with approval."},\r
    {"id": "doc4", "text": "Hybrid Work Guidelines: in-office 2 days per week required."},\r
]\r
corpus = [{**d, "embedding": embed_text(d["text"])} for d in raw_docs]\r
\r
results = multi_query_retrieval("Can I work from home permanently?", corpus)\r
for r in results:\r
    print(r["id"], "->", r["text"])\r
\`\`\`\r
\r
**Key formula — Reciprocal Rank Fusion (RRF):**\r
\r
\`\`\`\r
RRF_score(doc) = Σ over all query variants  [ 1 / (k + rank_of_doc_in_that_variant) ]\r
\`\`\`\r
\r
Documents that appear near the top across *multiple* query variants accumulate a higher fused score than documents that only appear once — this is what makes RRF effective at surfacing consistently relevant chunks.\r
\r
---\r
\r
## 6. Key Concepts Summary\r
\r
| Concept | Description |\r
|---|---|\r
| **Query Expansion** | Using an LLM to generate N alternate phrasings of the user's question |\r
| **Parallel Retrieval** | Running vector similarity search independently for each query variant |\r
| **Deduplication** | Removing repeated chunks (same doc/chunk retrieved by multiple variants) |\r
| **Reciprocal Rank Fusion (RRF)** | A rank-based merging algorithm that rewards documents appearing across multiple result lists |\r
| **Cross-Encoder Re-ranking** | An optional second-stage model that scores (query, doc) pairs jointly for higher precision than embedding similarity alone |\r
| **Recall vs. Precision Tradeoff** | MQR boosts recall (more relevant docs found) but can hurt precision if not re-ranked properly |\r
\r
---\r
\r
## 7. Advantages\r
\r
- **Higher recall** — catches relevant chunks that a single query phrasing would miss due to vocabulary mismatch\r
- **Robust to ambiguous queries** — different variants can capture different facets/interpretations of a vague question\r
- **Framework-agnostic** — works with any vector store (Chroma, Pinecone, Weaviate, FAISS, pgvector, etc.)\r
- **Composable** — can be combined with hybrid search (BM25 + vector), re-ranking, and metadata filtering\r
\r
## 8. Trade-offs & Considerations\r
\r
- **Latency** — N query variants means N retrieval calls (and one extra LLM call for generating variants); mitigate with parallel/async requests\r
- **Cost** — extra LLM calls for query generation add token cost at scale\r
- **Redundant noise** — poorly designed variant generation can introduce off-topic queries that pollute results; always re-rank or dedupe\r
- **Not a silver bullet** — for already well-specified queries with strong lexical overlap, MQR adds overhead without much benefit; consider adaptive strategies (only expand when initial retrieval confidence is low)\r
\r
## 9. When to Use Multi-Query Retrieval\r
\r
Best suited for:\r
- Enterprise knowledge bases with inconsistent terminology across documents/teams\r
- Customer support / HR / legal chatbots where users phrase things casually but docs are written formally\r
- Domains with many synonyms or jargon variants (medical, legal, technical support)\r
\r
Less critical for:\r
- Small, homogeneous corpora with consistent vocabulary\r
- Latency-critical, real-time applications where the extra LLM call is too costly\r
\r
                    User Question\r
                          │\r
                          ▼\r
                LLM Query Generator\r
                          │\r
      ┌─────────────┬─────────────┬─────────────┐\r
      ▼             ▼             ▼             ▼\r
 Original Query   Query 1      Query 2      Query 3\r
      │             │             │             │\r
      └──────┬──────┴──────┬──────┴──────┬──────┘\r
             ▼             ▼             ▼\r
        Vector Search  Vector Search  Vector Search\r
             │             │             │\r
             └─────────────┬─────────────┘\r
                           ▼\r
                Merge Retrieved Documents\r
                           ▼\r
                 Remove Duplicate Documents\r
                           ▼\r
                     Re-rank Documents\r
                           ▼\r
                        Top-K Results\r
                           ▼\r
                           LLM\r
                           ▼\r
                      Final Answer\r
`,Xn=`from langchain_openai import ChatOpenAI, OpenAIEmbeddings\r
from langchain_community.vectorstores import FAISS\r
from langchain.retrievers.multi_query import MultiQueryRetriever\r
from langchain_core.prompts import ChatPromptTemplate\r
from langchain.chains.combine_documents import create_stuff_documents_chain\r
\r
# ---------------------------------------\r
# Step 1: Load LLM\r
# ---------------------------------------\r
\r
llm = ChatOpenAI(\r
    model="gpt-4o-mini",\r
    temperature=0\r
)\r
\r
# ---------------------------------------\r
# Step 2: Load Embedding Model\r
# ---------------------------------------\r
\r
embeddings = OpenAIEmbeddings()\r
\r
# ---------------------------------------\r
# Step 3: Load Vector Database\r
# ---------------------------------------\r
\r
vector_db = FAISS.load_local(\r
    "faiss_index",\r
    embeddings,\r
    allow_dangerous_deserialization=True\r
)\r
\r
# ---------------------------------------\r
# Step 4: Create Base Retriever\r
# ---------------------------------------\r
\r
base_retriever = vector_db.as_retriever(\r
    search_kwargs={"k": 5}\r
)\r
\r
# ---------------------------------------\r
# Step 5: Create Multi-Query Retriever\r
# ---------------------------------------\r
\r
multi_query_retriever = MultiQueryRetriever.from_llm(\r
    retriever=base_retriever,\r
    llm=llm\r
)\r
\r
# ---------------------------------------\r
# Step 6: User Question\r
# ---------------------------------------\r
\r
question = "How can I reduce latency in Kubernetes?"\r
\r
# ---------------------------------------\r
# Step 7: Retrieve Documents\r
# ---------------------------------------\r
\r
documents = multi_query_retriever.invoke(question)\r
\r
print("Retrieved Documents")\r
print("=" * 50)\r
\r
for i, doc in enumerate(documents, 1):\r
    print(f"\\nDocument {i}")\r
    print(doc.page_content[:300])\r
\r
# ---------------------------------------\r
# Step 8: Prompt Template\r
# ---------------------------------------\r
\r
prompt = ChatPromptTemplate.from_template("""\r
Answer the question only using the provided context.\r
\r
Context:\r
{context}\r
\r
Question:\r
{input}\r
""")\r
\r
# ---------------------------------------\r
# Step 9: Create QA Chain\r
# ---------------------------------------\r
\r
document_chain = create_stuff_documents_chain(\r
    llm,\r
    prompt\r
)\r
\r
# ---------------------------------------\r
# Step 10: Generate Answer\r
# ---------------------------------------\r
\r
answer = document_chain.invoke({\r
    "context": documents,\r
    "input": question\r
})\r
\r
print("\\nFinal Answer")\r
print("=" * 50)\r
print(answer)`,Zn=`"""\r
============================================================\r
Metadata Filtering in RAG - End-to-End Workflow\r
============================================================\r
\r
Workflow\r
--------\r
1. Load Documents\r
2. Add Metadata\r
3. Split Documents\r
4. Generate Embeddings\r
5. Store in Vector Database\r
6. User asks a question\r
7. Apply Metadata Filter\r
8. Retrieve Matching Documents\r
9. Send Context + Question to LLM\r
10. Generate Final Answer\r
"""\r
\r
from langchain_community.document_loaders import DirectoryLoader\r
from langchain.text_splitter import RecursiveCharacterTextSplitter\r
from langchain_openai import OpenAIEmbeddings, ChatOpenAI\r
from langchain_community.vectorstores import FAISS\r
from langchain_core.documents import Document\r
from langchain.prompts import ChatPromptTemplate\r
from langchain.chains.combine_documents import create_stuff_documents_chain\r
\r
# ==========================================================\r
# STEP 1 : Load Documents\r
# ==========================================================\r
\r
loader = DirectoryLoader("documents/")\r
documents = loader.load()\r
\r
# ==========================================================\r
# STEP 2 : Add Metadata\r
# ==========================================================\r
\r
for doc in documents:\r
\r
    if "finance" in doc.metadata["source"]:\r
        doc.metadata["department"] = "Finance"\r
        doc.metadata["year"] = 2024\r
\r
    elif "hr" in doc.metadata["source"]:\r
        doc.metadata["department"] = "HR"\r
        doc.metadata["year"] = 2023\r
\r
    elif "legal" in doc.metadata["source"]:\r
        doc.metadata["department"] = "Legal"\r
        doc.metadata["year"] = 2024\r
\r
    else:\r
        doc.metadata["department"] = "General"\r
        doc.metadata["year"] = 2022\r
\r
# ==========================================================\r
# STEP 3 : Split Documents\r
# ==========================================================\r
\r
splitter = RecursiveCharacterTextSplitter(\r
    chunk_size=500,\r
    chunk_overlap=100\r
)\r
\r
chunks = splitter.split_documents(documents)\r
\r
# ==========================================================\r
# STEP 4 : Create Embeddings\r
# ==========================================================\r
\r
embedding_model = OpenAIEmbeddings()\r
\r
# ==========================================================\r
# STEP 5 : Store into Vector Database\r
# ==========================================================\r
\r
vector_db = FAISS.from_documents(\r
    chunks,\r
    embedding_model\r
)\r
\r
print("Vector Database Created")\r
\r
# ==========================================================\r
# STEP 6 : User Question\r
# ==========================================================\r
\r
question = "What is the finance budget for 2024?"\r
\r
# ==========================================================\r
# STEP 7 : Metadata Filtering\r
# ==========================================================\r
\r
retriever = vector_db.as_retriever(\r
    search_kwargs={\r
        "k": 5,\r
\r
        # Metadata Filter\r
        "filter": {\r
            "department": "Finance",\r
            "year": 2024\r
        }\r
    }\r
)\r
\r
# ==========================================================\r
# STEP 8 : Retrieve Documents\r
# ==========================================================\r
\r
retrieved_docs = retriever.invoke(question)\r
\r
print("=" * 60)\r
print("Retrieved Documents")\r
print("=" * 60)\r
\r
for i, doc in enumerate(retrieved_docs, start=1):\r
\r
    print(f"\\nDocument {i}")\r
    print(doc.metadata)\r
    print(doc.page_content[:250])\r
\r
# ==========================================================\r
# STEP 9 : Prompt Template\r
# ==========================================================\r
\r
prompt = ChatPromptTemplate.from_template("""\r
\r
You are an expert assistant.\r
\r
Answer ONLY using the provided context.\r
\r
Context:\r
{context}\r
\r
Question:\r
{input}\r
\r
""")\r
\r
# ==========================================================\r
# STEP 10 : Initialize LLM\r
# ==========================================================\r
\r
llm = ChatOpenAI(\r
    model="gpt-4o-mini",\r
    temperature=0\r
)\r
\r
# ==========================================================\r
# STEP 11 : Create QA Chain\r
# ==========================================================\r
\r
document_chain = create_stuff_documents_chain(\r
    llm,\r
    prompt\r
)\r
\r
# ==========================================================\r
# STEP 12 : Generate Answer\r
# ==========================================================\r
\r
response = document_chain.invoke(\r
    {\r
        "context": retrieved_docs,\r
        "input": question\r
    }\r
)\r
\r
print("\\n")\r
print("=" * 60)\r
print("FINAL ANSWER")\r
print("=" * 60)\r
print(response)\r
\r
# ==========================================================\r
# END OF PIPELINE\r
# ==========================================================`,Qn=`## 1. Introduction

Pure vector similarity search retrieves chunks based purely on **semantic closeness** between the query embedding and document embeddings. This works well for meaning, but it has a blind spot: **vector similarity has no concept of structured constraints** like date, author, department, product category, access permissions, or document type.

**Metadata Filtering** solves this by attaching structured key-value metadata to each chunk at ingestion time (e.g., \`{"department": "HR", "year": 2025, "doc_type": "policy"}\`) and applying **hard filters** on that metadata *before or during* the vector search — so the LLM only ever sees candidates that are both semantically relevant **and** structurally valid.

> Think of it as combining a **SQL WHERE clause** with a **semantic similarity search**.

---

## 2. Why It's Needed

### 2.1 The Problem Without Metadata Filtering

| User Query | What Pure Vector Search Might Return |
|---|---|
| "What was our Q1 2024 revenue?" | Chunks about Q1 2023, Q3 2024, or a competitor's revenue — all semantically similar to "revenue" |
| "Show me the latest security policy" | An outdated 2019 security policy that's semantically close but factually stale |
| "What's in the Engineering handbook?" | Content from the Marketing handbook, since both mention "handbook", "onboarding", "policy" |
| "Show me documents I'm authorized to see" | Confidential documents belonging to other teams/users (a security risk!) |

Vector similarity alone cannot distinguish **recency**, **scope/ownership**, **access control**, or **categorical correctness** — it only measures "these texts mean similar things."

### 2.2 What Metadata Filtering Adds

- **Precision narrowing**: restrict search to a subset of the corpus (e.g., \`year = 2024\`)
- **Access control / multi-tenancy**: only retrieve documents the requesting user is permitted to see
- **Freshness control**: exclude expired/deprecated documents
- **Category/domain routing**: search only within a relevant document type (e.g., \`doc_type = "invoice"\`)

---

## 3. Core Concepts

| Concept | Description |
|---|---|
| **Metadata Schema** | The structured fields attached to each chunk (e.g., \`source\`, \`date\`, \`author\`, \`department\`, \`access_level\`, \`doc_type\`, \`tags\`) |
| **Pre-filtering** | Apply metadata filter **first** to reduce the candidate pool, then run vector similarity only on that subset |
| **Post-filtering** | Run vector similarity search first (larger top-k), then discard results that don't match metadata — less efficient, but easier with some vector stores |
| **Hybrid Filtering** | Native support in most modern vector DBs (Pinecone, Weaviate, Qdrant, Chroma, Milvus) to filter *and* search in a single indexed operation, avoiding a full post-scan |
| **Filter DSL** | The query language used to express filters — usually a JSON-like syntax supporting \`eq\`, \`in\`, \`gte\`, \`lte\`, \`and\`, \`or\`, \`not\` |
| **Auto-Metadata Extraction** | Using an LLM to infer structured metadata filters directly from a natural language query (e.g., "docs from last year" → \`{"year": 2025}\`) |

---

## 4. Workflow Diagram

\`\`\`mermaid
flowchart TD
    A[User Query + User Context] --> B{Extract Filters}
    B -->|LLM or rule-based parsing| C[Structured Metadata Filter<br/>e.g. department=HR, year=2025]

    A --> D[Embed Query Text]

    C --> E[Vector Store: Filtered ANN Search]
    D --> E

    E --> F[Candidate Chunks<br/>Semantically relevant AND metadata-valid]
    F --> G[Optional Re-ranking]
    G --> H[Top-K Context]
    H --> I[LLM Answer Generation]
    I --> J[Final Answer to User]

    subgraph Ingestion Pipeline
        K[Raw Documents] --> L[Chunking]
        L --> M[Attach Metadata:<br/>source, date, department,<br/>access_level, doc_type]
        M --> N[Embed Chunks]
        N --> O[(Vector Store with<br/>Metadata Index)]
    end

    O -.indexed data.-> E
\`\`\`

---

## 5. Real-Time Example

**Scenario:** An internal company knowledge assistant used across departments (HR, Finance, Engineering), with document access restricted by role, and containing multiple years of policy revisions.

**User (Finance team, mid-level employee) asks:**
> "What's the current expense reimbursement policy?"

### Without metadata filtering:
The vector search might return:
- The 2021 expense policy (outdated)
- The Engineering team's "hardware reimbursement" doc (wrong department)
- A Finance policy doc that's semantically similar but is actually the **travel booking** policy, not reimbursement

### With metadata filtering:
The system infers filters from the query + user session context:

\`\`\`json
{
  "department": {"in": ["Finance", "Company-Wide"]},
  "doc_type": "policy",
  "topic": "expense_reimbursement",
  "status": "active",
  "access_level": {"lte": "employee"}
}
\`\`\`

Now the vector search is restricted to only **active**, **Finance-scoped**, **reimbursement-related** policy documents that this employee is authorized to view. Result: the LLM receives exactly the 2025 active reimbursement policy — no outdated versions, no unrelated departments, no access violations.

---

## 6. Code Implementation

### 6.1 Ingestion — Attaching Metadata to Chunks

\`\`\`python
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.documents import Document
from datetime import datetime

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

raw_chunks = [
    {
        "text": "Employees may claim reimbursement for business travel expenses up to $500/month without pre-approval.",
        "metadata": {
            "department": "Finance",
            "doc_type": "policy",
            "topic": "expense_reimbursement",
            "year": 2025,
            "status": "active",
            "access_level": "employee",
        },
    },
    {
        "text": "The 2021 expense reimbursement policy capped claims at $300/month.",
        "metadata": {
            "department": "Finance",
            "doc_type": "policy",
            "topic": "expense_reimbursement",
            "year": 2021,
            "status": "archived",
            "access_level": "employee",
        },
    },
    {
        "text": "Engineering hardware reimbursement covers laptops and monitors up to $1200/year.",
        "metadata": {
            "department": "Engineering",
            "doc_type": "policy",
            "topic": "hardware_reimbursement",
            "year": 2025,
            "status": "active",
            "access_level": "employee",
        },
    },
]

docs = [Document(page_content=c["text"], metadata=c["metadata"]) for c in raw_chunks]
vectorstore = Chroma.from_documents(docs, embeddings, collection_name="company_kb")
\`\`\`

### 6.2 Query-Time Filtering (LangChain / Chroma)

\`\`\`python
def retrieve_with_filters(query: str, user_department: str, k: int = 5):
    metadata_filter = {
        "$and": [
            {"status": {"$eq": "active"}},
            {"department": {"$in": [user_department, "Company-Wide"]}},
            {"topic": {"$eq": "expense_reimbursement"}},
        ]
    }

    results = vectorstore.similarity_search(
        query=query,
        k=k,
        filter=metadata_filter,
    )
    return results


results = retrieve_with_filters(
    query="What's the current expense reimbursement policy?",
    user_department="Finance",
)

for r in results:
    print(r.metadata, "->", r.page_content)
\`\`\`

### 6.3 LLM-Based Automatic Filter Extraction

Rather than hardcoding filters, you can let an LLM parse the user's natural-language query into structured filters — this is the approach used by LangChain's \`SelfQueryRetriever\`.

\`\`\`python
import json
from openai import OpenAI

client = OpenAI()

METADATA_SCHEMA = {
    "department": "string, one of [HR, Finance, Engineering, Company-Wide]",
    "doc_type": "string, one of [policy, invoice, memo, handbook]",
    "year": "integer",
    "status": "string, one of [active, archived]",
}

def extract_filters(natural_query: str) -> dict:
    prompt = f"""Extract a metadata filter as JSON from the user's question.
Schema fields available: {json.dumps(METADATA_SCHEMA, indent=2)}
Only include fields you can confidently infer. Always include "status": "active" unless the user asks for historical/old versions.
Return ONLY valid JSON, no explanation.

User question: "{natural_query}"
"""
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0,
    )
    return json.loads(response.choices[0].message.content)


filters = extract_filters("Show me last year's HR handbook, including old versions")
print(filters)
# Example output: {"department": "HR", "doc_type": "handbook", "year": 2024}
\`\`\`

### 6.4 Native Filtering in Pinecone (Production-Scale Example)

\`\`\`python
from pinecone import Pinecone

pc = Pinecone(api_key="YOUR_API_KEY")
index = pc.Index("company-kb")

query_embedding = embeddings.embed_query("What's the current expense reimbursement policy?")

response = index.query(
    vector=query_embedding,
    top_k=5,
    filter={
        "status": {"$eq": "active"},
        "department": {"$in": ["Finance", "Company-Wide"]},
        "topic": {"$eq": "expense_reimbursement"},
    },
    include_metadata=True,
)

for match in response["matches"]:
    print(match["score"], match["metadata"])
\`\`\`

### 6.5 Access-Control Enforcement Pattern (Security-Critical)

\`\`\`python
def secure_retrieve(query: str, user_role: str, user_dept: str, k: int = 5):
    """
    Ensures retrieval NEVER returns documents above the user's access level,
    regardless of semantic similarity score.
    """
    access_hierarchy = {"employee": 0, "manager": 1, "admin": 2}
    user_level = access_hierarchy[user_role]

    allowed_levels = [
        level for level, rank in access_hierarchy.items() if rank <= user_level
    ]

    metadata_filter = {
        "$and": [
            {"access_level": {"$in": allowed_levels}},
            {"department": {"$in": [user_dept, "Company-Wide"]}},
            {"status": {"$eq": "active"}},
        ]
    }

    return vectorstore.similarity_search(query=query, k=k, filter=metadata_filter)
\`\`\`

> **Security note:** Metadata filtering used for access control should be enforced at the **retrieval layer**, never left to the LLM to "decide" whether to use a document — the LLM should never even see documents it isn't authorized to view.

---

## 7. Pre-filtering vs. Post-filtering

| Approach | How It Works | Pros | Cons |
|---|---|---|---|
| **Pre-filtering** | Metadata filter applied before/during ANN search (native in Pinecone, Weaviate, Qdrant, Milvus) | Efficient — searches only the valid subset; no wasted top-k slots | Requires vector DB with indexed metadata filtering support |
| **Post-filtering** | Retrieve large top-k via pure vector search, then filter results afterward | Works with any vector store, even without native filter support | Inefficient at scale; risk of filtering out *all* results if top-k wasn't large enough |

**Rule of thumb:** Always prefer pre-filtering / native hybrid filtering when your vector database supports it (most modern ones do).

---

## 8. Advantages

- **Precision** — eliminates entire categories of irrelevant results before semantic ranking even happens
- **Security & compliance** — enforces access control and multi-tenancy at the retrieval layer, not just in the prompt
- **Freshness** — easily excludes deprecated/archived content
- **Efficient at scale** — narrowing the search space before ANN search improves both speed and relevance in large corpora (millions of chunks)
- **Composable** — works seamlessly alongside Multi-Query Retrieval, hybrid (BM25 + vector) search, and re-ranking

## 9. Trade-offs & Considerations

- **Schema design overhead** — requires upfront planning of what metadata fields matter for your domain
- **Over-filtering risk** — overly strict filters can return zero results if metadata is inconsistent or a field is mis-extracted
- **Metadata quality dependency** — filtering is only as good as the metadata tagging at ingestion time; garbage in, garbage out
- **LLM-based filter extraction errors** — auto-extracted filters can misinterpret ambiguous queries; consider fallback logic (retry without filter, or ask a clarifying question) when zero results are returned

## 10. When to Use Metadata Filtering

Best suited for:
- Multi-tenant systems (SaaS platforms where each customer's data must stay isolated)
- Enterprise knowledge bases with document versioning/recency requirements
- Systems requiring role-based access control (RBAC) over retrieved content
- Large corpora spanning multiple categories/domains where scoping search improves both speed and accuracy

Less critical for:
- Small, single-purpose corpora with no access control needs
- Corpora where all documents are equally current and equally relevant to all users
`,$n=`## 1. Introduction\r
\r
Most modern RAG tutorials jump straight to embeddings and vector search ("dense retrieval"). But long before dense retrieval existed, search engines relied on **sparse, keyword-based retrieval** — and it's still a critical, often superior, component of production RAG systems today.\r
\r
**Sparse Retrieval** represents documents and queries as high-dimensional, mostly-zero vectors where each dimension corresponds to a specific term (word) in the vocabulary. Relevance is computed based on **exact/lexical term overlap**, weighted by statistical importance — not semantic meaning.\r
\r
The most widely used algorithm is **BM25** (Best Matching 25), a refinement of TF-IDF (Term Frequency–Inverse Document Frequency).\r
\r
> **Dense retrieval** asks: "Does this document *mean* the same thing as the query?"\r
> **Sparse retrieval** asks: "Does this document *contain* the same important words as the query?"\r
\r
---\r
\r
## 2. Why It's Still Needed (Even With Embeddings)\r
\r
Dense (embedding-based) retrieval is excellent at capturing semantic meaning, but it has real weaknesses that sparse retrieval directly compensates for:\r
\r
| Weakness of Dense Retrieval | How Sparse Retrieval Helps |\r
|---|---|\r
| Struggles with **exact identifiers**: product SKUs, error codes, part numbers, legal citations (e.g., "ERR_502", "Section 12.3(a)") | BM25 matches exact tokens precisely — no "semantic guessing" |\r
| Struggles with **rare/out-of-vocabulary terms** the embedding model wasn't trained on (new acronyms, internal codenames) | Term-frequency statistics don't need the term to be "understood," only present |\r
| Can hallucinate similarity for **short, ambiguous queries** ("Python" — the language or the snake?) | Exact keyword match anchors retrieval to literal term usage |\r
| Embeddings can miss **negation and specificity** ("NOT approved" vs "approved" can embed close together) | Keyword match respects exact phrase presence |\r
| Expensive to re-embed corpus on updates | BM25 index updates are cheap and fully explainable |\r
\r
**In practice, the best production RAG systems use *hybrid search*: sparse (BM25) + dense (embeddings), combined via re-ranking or score fusion — not one or the other.**\r
\r
---\r
\r
## 3. Core Concepts\r
\r
### 3.1 Term Frequency (TF)\r
How often a term appears in a document. More occurrences → higher relevance signal (with diminishing returns).\r
\r
### 3.2 Inverse Document Frequency (IDF)\r
Terms that appear in *many* documents (like "the", "policy", "report") are less informative than rare terms (like "reimbursement", "throttling"). IDF down-weights common terms and up-weights rare, discriminative ones.\r
\r
\`\`\`\r
IDF(term) = log( (N - n_t + 0.5) / (n_t + 0.5) + 1 )\r
\`\`\`\r
\r
Where \`N\` = total number of documents, \`n_t\` = number of documents containing the term.\r
\r
### 3.3 BM25 Scoring Formula\r
\r
\`\`\`\r
BM25(D, Q) = Σ_{t in Q}  IDF(t) * ( f(t,D) * (k1 + 1) ) / ( f(t,D) + k1 * (1 - b + b * |D|/avgdl) )\r
\`\`\`\r
\r
| Symbol | Meaning |\r
|---|---|\r
| \`f(t,D)\` | frequency of term \`t\` in document \`D\` |\r
| \`|D|\` | length of document \`D\` (word count) |\r
| \`avgdl\` | average document length across the corpus |\r
| \`k1\` | term frequency saturation parameter (typically 1.2–2.0) |\r
| \`b\` | length normalization parameter (typically 0.75) |\r
\r
**Intuition:**\r
- \`k1\` controls how much repeated term occurrences matter (saturating curve — the 10th occurrence of a word barely adds more score than the 5th)\r
- \`b\` controls how much document length is penalized (long documents naturally contain more term matches by chance, so this normalizes for that)\r
\r
### 3.4 Inverted Index\r
\r
Sparse retrieval's efficiency comes from an **inverted index**: instead of scanning every document for a query term, you maintain a mapping of \`term → [list of documents containing it]\`. This allows sub-linear-time lookups even across millions of documents — the same data structure that powers Elasticsearch, Lucene, and Solr.\r
\r
\`\`\`\r
"reimbursement" → [doc_12, doc_45, doc_88, doc_103]\r
"throttling"    → [doc_7, doc_45]\r
"laptop"        → [doc_45, doc_201]\r
\`\`\`\r
\r
---\r
\r
## 4. Workflow Diagram\r
\r
\`\`\`mermaid\r
flowchart TD\r
    subgraph Ingestion\r
        A[Raw Documents] --> B[Tokenization<br/>lowercase, stopword removal, stemming]\r
        B --> C[Build Inverted Index<br/>term -> doc list + frequencies]\r
        C --> D[(Sparse Index<br/>BM25 / Elasticsearch / Lucene)]\r
    end\r
\r
    subgraph Query Time\r
        E[User Query] --> F[Tokenize Query<br/>same pipeline as ingestion]\r
        F --> G[Look Up Terms in Inverted Index]\r
        G --> H[Compute BM25 Score per Candidate Doc]\r
        H --> I[Rank by Score, Return Top-K]\r
    end\r
\r
    D -.indexed lookups.-> G\r
    I --> J[Optional: Fuse with Dense Retrieval Results]\r
    J --> K[Final Context for LLM]\r
    K --> L[LLM Answer Generation]\r
\`\`\`\r
\r
---\r
\r
## 5. Real-Time Example\r
\r
**Scenario:** A developer support chatbot for a company's API platform, built on RAG over documentation and past support tickets.\r
\r
**User asks:**\r
> "What does error ERR_502_GATEWAY mean?"\r
\r
### Why dense (embedding) retrieval struggles here:\r
\`ERR_502_GATEWAY\` is a rare, exact identifier. The embedding model may not have strong training signal for this specific string — it might embed close to *any* text mentioning "error" or "gateway" generically, returning loosely related troubleshooting docs instead of the exact one documenting this code.\r
\r
### Why sparse (BM25) retrieval wins here:\r
The inverted index has an exact entry for the token \`err_502_gateway\` (or its sub-tokens \`err\`, \`502\`, \`gateway\`), directly pointing to the one document titled *"ERR_502_GATEWAY: Upstream Server Timeout — Troubleshooting Guide."* BM25 scores this document extremely high because the rare token exactly matches, and IDF weights it heavily since almost no other document contains this specific code.\r
\r
**Best real-world outcome:** A **hybrid** pipeline runs both:\r
- BM25 → correctly surfaces the exact \`ERR_502_GATEWAY\` doc (lexical precision)\r
- Dense retrieval → surfaces conceptually related docs like "Understanding 5xx Server Errors" (semantic breadth)\r
\r
Both get fused (e.g., via Reciprocal Rank Fusion) so the LLM sees the precise match *and* useful surrounding context.\r
\r
---\r
\r
## 6. Code Implementation\r
\r
### 6.1 From Scratch — BM25 with \`rank_bm25\`\r
\r
\`\`\`python\r
from rank_bm25 import BM25Okapi\r
import re\r
\r
def tokenize(text: str):\r
    text = text.lower()\r
    tokens = re.findall(r"[a-z0-9_]+", text)\r
    return tokens\r
\r
corpus = [\r
    "ERR_502_GATEWAY: Upstream Server Timeout - Troubleshooting Guide. Occurs when the gateway does not receive a timely response from an upstream server.",\r
    "Understanding 5xx Server Errors: general causes of server-side failures including 500, 502, 503, and 504 codes.",\r
    "API rate limiting policy: requests are throttled at 100 requests per minute per API key.",\r
    "How to reset your password: navigate to account settings and click 'forgot password'.",\r
]\r
\r
tokenized_corpus = [tokenize(doc) for doc in corpus]\r
bm25 = BM25Okapi(tokenized_corpus, k1=1.5, b=0.75)\r
\r
query = "What does error ERR_502_GATEWAY mean?"\r
tokenized_query = tokenize(query)\r
\r
scores = bm25.get_scores(tokenized_query)\r
ranked_indices = sorted(range(len(scores)), key=lambda i: scores[i], reverse=True)\r
\r
for idx in ranked_indices:\r
    print(f"score={scores[idx]:.3f} -> {corpus[idx][:80]}...")\r
\`\`\`\r
\r
**Expected behavior:** the first document (exact \`err_502_gateway\` token match) scores highest, well above the semantically-related-but-lexically-distinct "5xx Server Errors" doc.\r
\r
### 6.2 Production-Scale Sparse Retrieval with Elasticsearch\r
\r
\`\`\`python\r
from elasticsearch import Elasticsearch\r
\r
es = Elasticsearch("http://localhost:9200")\r
\r
# --- Ingestion: create an index with BM25 similarity (default in ES) ---\r
es.indices.create(\r
    index="support_docs",\r
    body={\r
        "settings": {\r
            "similarity": {\r
                "custom_bm25": {\r
                    "type": "BM25",\r
                    "k1": 1.5,\r
                    "b": 0.75,\r
                }\r
            }\r
        },\r
        "mappings": {\r
            "properties": {\r
                "content": {"type": "text", "similarity": "custom_bm25"},\r
                "doc_type": {"type": "keyword"},\r
            }\r
        },\r
    },\r
)\r
\r
es.index(index="support_docs", document={\r
    "content": "ERR_502_GATEWAY: Upstream Server Timeout - Troubleshooting Guide.",\r
    "doc_type": "error_reference",\r
})\r
\r
# --- Query time ---\r
response = es.search(\r
    index="support_docs",\r
    query={"match": {"content": "What does error ERR_502_GATEWAY mean?"}},\r
    size=5,\r
)\r
\r
for hit in response["hits"]["hits"]:\r
    print(hit["_score"], hit["_source"]["content"])\r
\`\`\`\r
\r
### 6.3 Hybrid Search — Fusing Sparse (BM25) + Dense (Embeddings)\r
\r
\`\`\`python\r
from rank_bm25 import BM25Okapi\r
from langchain_openai import OpenAIEmbeddings\r
import numpy as np\r
\r
embeddings_model = OpenAIEmbeddings(model="text-embedding-3-small")\r
\r
def dense_retrieve(query: str, corpus: list, corpus_embeddings: list, k: int = 5):\r
    q_emb = np.array(embeddings_model.embed_query(query))\r
    sims = [\r
        np.dot(q_emb, np.array(doc_emb)) / (np.linalg.norm(q_emb) * np.linalg.norm(doc_emb))\r
        for doc_emb in corpus_embeddings\r
    ]\r
    ranked = sorted(range(len(sims)), key=lambda i: sims[i], reverse=True)[:k]\r
    return ranked  # list of doc indices, best first\r
\r
\r
def sparse_retrieve(query: str, bm25: BM25Okapi, k: int = 5):\r
    scores = bm25.get_scores(tokenize(query))\r
    ranked = sorted(range(len(scores)), key=lambda i: scores[i], reverse=True)[:k]\r
    return ranked\r
\r
\r
def reciprocal_rank_fusion(rank_lists: list, k: int = 60):\r
    fused_scores = {}\r
    for rank_list in rank_lists:\r
        for rank, doc_idx in enumerate(rank_list):\r
            fused_scores.setdefault(doc_idx, 0.0)\r
            fused_scores[doc_idx] += 1.0 / (k + rank + 1)\r
    return sorted(fused_scores, key=lambda x: fused_scores[x], reverse=True)\r
\r
\r
# --- Build both indexes ---\r
corpus_embeddings = [embeddings_model.embed_query(doc) for doc in corpus]\r
bm25_index = BM25Okapi(tokenized_corpus)\r
\r
# --- Hybrid retrieval ---\r
query = "What does error ERR_502_GATEWAY mean?"\r
sparse_ranked = sparse_retrieve(query, bm25_index, k=5)\r
dense_ranked = dense_retrieve(query, corpus, corpus_embeddings, k=5)\r
\r
final_ranking = reciprocal_rank_fusion([sparse_ranked, dense_ranked])\r
\r
print("Final hybrid ranking (doc indices, best first):", final_ranking)\r
for idx in final_ranking:\r
    print(f"-> {corpus[idx][:80]}...")\r
\`\`\`\r
\r
---\r
\r
## 7. Sparse vs. Dense Retrieval — Side-by-Side\r
\r
| Aspect | Sparse (BM25 / Keyword) | Dense (Embeddings) |\r
|---|---|---|\r
| **Matching basis** | Exact/lexical term overlap | Semantic similarity |\r
| **Handles synonyms/paraphrase** | ❌ Poor | ✅ Strong |\r
| **Handles exact IDs, codes, rare terms** | ✅ Strong | ❌ Poor |\r
| **Explainability** | ✅ Fully transparent (term scores) | ❌ Opaque (vector math) |\r
| **Index update cost** | ✅ Cheap, incremental | ⚠️ Requires re-embedding |\r
| **Infra maturity** | ✅ Decades-old (Lucene, Elasticsearch, Solr) | ✅ Newer but well-supported (Pinecone, Weaviate, etc.) |\r
| **Cold-start on new vocabulary** | ✅ Works immediately | ❌ Needs terms "seen" during embedding training |\r
| **Query latency at scale** | ✅ Very fast (inverted index) | ✅ Fast (ANN algorithms like HNSW) |\r
\r
---\r
\r
## 8. Advantages of Sparse Retrieval\r
\r
- **Precision on exact terms** — ideal for IDs, codes, names, legal/medical terminology\r
- **No embedding drift** — doesn't depend on an embedding model's training distribution\r
- **Fully explainable** — you can see exactly which terms contributed to a score\r
- **Cheap and fast to update** — adding new documents doesn't require expensive re-embedding\r
- **Battle-tested infrastructure** — Elasticsearch/OpenSearch/Solr are mature, scalable, well-understood systems\r
\r
## 9. Trade-offs & Limitations\r
\r
- **No semantic understanding** — "car" and "automobile" are treated as completely unrelated tokens unless both appear\r
- **Sensitive to phrasing/typos** — misspellings or unusual phrasing reduce match quality\r
- **Requires good tokenization/stemming** — poor preprocessing (e.g., not handling plurals, case) hurts recall\r
- **Struggles with conceptual/open-ended queries** — "What are some ways to improve team morale?" has no strong keyword anchor\r
\r
## 10. When to Use Sparse (Keyword) Retrieval\r
\r
Best suited for:\r
- Technical/support systems with error codes, SKUs, ticket numbers, exact identifiers\r
- Legal, medical, or compliance domains where exact terminology matters\r
- Systems needing full explainability of why a document was retrieved\r
- As one half of a **hybrid retrieval** pipeline (recommended default for most production RAG systems)\r
\r
Less critical for:\r
- Purely conversational, paraphrase-heavy queries where meaning matters more than wording\r
- Small corpora where you can afford dense-only retrieval with strong embeddings\r
\r
## 11. Best Practice: Default to Hybrid\r
\r
In production, most mature RAG systems **do not choose** between sparse and dense — they run both and fuse results (via Reciprocal Rank Fusion or a learned re-ranker). This captures the lexical precision of BM25 and the semantic breadth of embeddings simultaneously, and is the approach used by systems like Elasticsearch's "ELSER + BM25", Weaviate's hybrid search, and Pinecone's sparse-dense hybrid indexes.\r
`,er=`"""\r
============================================================\r
Sparse Retrieval in RAG - End-to-End Workflow\r
============================================================\r
\r
Workflow\r
--------\r
1. Load Documents\r
2. Split Documents\r
3. Build Sparse Index (BM25)\r
4. User submits a query\r
5. Tokenize Query\r
6. BM25 Scores Documents\r
7. Retrieve Top-K Relevant Documents\r
8. Construct Prompt\r
9. Send Context + Question to LLM\r
10. Generate Final Answer\r
\r
Sparse Retrieval uses keyword matching instead of vector embeddings.\r
It is ideal for exact keyword, acronym, code, product ID,\r
and legal document retrieval.\r
"""\r
\r
from langchain_community.document_loaders import DirectoryLoader\r
from langchain.text_splitter import RecursiveCharacterTextSplitter\r
from langchain_core.documents import Document\r
from langchain_community.retrievers import BM25Retriever\r
from langchain_openai import ChatOpenAI\r
from langchain.prompts import ChatPromptTemplate\r
from langchain.chains.combine_documents import create_stuff_documents_chain\r
\r
# ==========================================================\r
# STEP 1 : Load Documents\r
# ==========================================================\r
\r
loader = DirectoryLoader("documents/")\r
documents = loader.load()\r
\r
print(f"Loaded {len(documents)} documents")\r
\r
# ==========================================================\r
# STEP 2 : Split Documents\r
# ==========================================================\r
\r
splitter = RecursiveCharacterTextSplitter(\r
    chunk_size=500,\r
    chunk_overlap=100\r
)\r
\r
chunks = splitter.split_documents(documents)\r
\r
print(f"Created {len(chunks)} chunks")\r
\r
# ==========================================================\r
# STEP 3 : Create BM25 Retriever\r
# ==========================================================\r
\r
bm25_retriever = BM25Retriever.from_documents(chunks)\r
\r
# Number of documents to retrieve\r
bm25_retriever.k = 5\r
\r
print("BM25 Index Created")\r
\r
# ==========================================================\r
# STEP 4 : User Question\r
# ==========================================================\r
\r
question = "What is the Kubernetes Horizontal Pod Autoscaler?"\r
\r
# ==========================================================\r
# STEP 5 : Retrieve Documents\r
# ==========================================================\r
\r
retrieved_docs = bm25_retriever.invoke(question)\r
\r
print("\\n")\r
print("=" * 60)\r
print("Retrieved Documents")\r
print("=" * 60)\r
\r
for i, doc in enumerate(retrieved_docs, start=1):\r
\r
    print(f"\\nDocument {i}")\r
    print("-" * 40)\r
    print(doc.page_content[:300])\r
\r
# ==========================================================\r
# STEP 6 : Prompt Template\r
# ==========================================================\r
\r
prompt = ChatPromptTemplate.from_template("""\r
\r
You are an expert AI assistant.\r
\r
Answer the user's question ONLY using the supplied context.\r
\r
If the answer does not exist in the context,\r
reply with:\r
\r
"I don't have enough information."\r
\r
Context:\r
{context}\r
\r
Question:\r
{input}\r
\r
""")\r
\r
# ==========================================================\r
# STEP 7 : Load LLM\r
# ==========================================================\r
\r
llm = ChatOpenAI(\r
    model="gpt-4o-mini",\r
    temperature=0\r
)\r
\r
# ==========================================================\r
# STEP 8 : Create QA Chain\r
# ==========================================================\r
\r
document_chain = create_stuff_documents_chain(\r
    llm,\r
    prompt\r
)\r
\r
# ==========================================================\r
# STEP 9 : Generate Answer\r
# ==========================================================\r
\r
response = document_chain.invoke(\r
    {\r
        "context": retrieved_docs,\r
        "input": question\r
    }\r
)\r
\r
# ==========================================================\r
# STEP 10 : Display Answer\r
# ==========================================================\r
\r
print("\\n")\r
print("=" * 60)\r
print("FINAL ANSWER")\r
print("=" * 60)\r
print(response)\r
\r
# ==========================================================\r
# END OF SPARSE RAG PIPELINE\r
# ==========================================================`,tr=`## 1. Introduction

**Dense Retrieval** is the retrieval method most people associate with modern RAG systems. Instead of representing text as sparse, mostly-zero vectors of individual terms (like BM25/TF-IDF), dense retrieval represents each piece of text — query or document — as a **dense, low-dimensional numeric vector (an embedding)** produced by a neural network, where every dimension carries some learned semantic signal.

> **Sparse retrieval** asks: "Does this document contain the same *words* as the query?"
> **Dense retrieval** asks: "Does this document *mean* the same thing as the query, even with completely different words?"

Because embeddings are trained on massive text corpora to place semantically similar content close together in vector space, dense retrieval can match a query like *"How do I stop my membership?"* to a document that says *"Steps to terminate your subscription plan"* — even though **not a single word overlaps**.

This is the foundational retrieval technique behind vector databases like Pinecone, Weaviate, Qdrant, Chroma, Milvus, and pgvector.

---

## 2. Core Concepts

### 2.1 Embeddings

An **embedding** is a fixed-length vector of real numbers (e.g., 1536 dimensions for OpenAI's \`text-embedding-3-small\`) that encodes the semantic meaning of a piece of text. Embeddings are produced by a neural encoder model trained via **contrastive learning** — the model learns to pull semantically similar text pairs closer together in vector space and push dissimilar pairs apart.

\`\`\`
"How do I cancel my subscription?"      → [0.021, -0.114, 0.087, ..., 0.003]  (1536 dims)
"Steps to terminate your membership"    → [0.019, -0.109, 0.091, ..., 0.005]  (1536 dims)
"What's the weather today?"             → [-0.442, 0.318, -0.076, ..., 0.221] (1536 dims)
\`\`\`

The first two vectors will be **close together** in vector space (high cosine similarity) despite sharing no words. The third will be **far away**.

### 2.2 Similarity Metrics

| Metric | Formula (conceptual) | Notes |
|---|---|---|
| **Cosine Similarity** | \`dot(A,B) / (‖A‖ * ‖B‖)\` | Most common; measures angle between vectors, ignores magnitude |
| **Dot Product** | \`dot(A,B)\` | Faster; equivalent to cosine if vectors are normalized |
| **Euclidean (L2) Distance** | \`sqrt(Σ(A_i - B_i)²)\` | Measures straight-line distance; lower = more similar |

Most modern embedding models (OpenAI, Cohere, sentence-transformers) are trained/normalized such that **cosine similarity** or **dot product** work best.

### 2.3 Bi-Encoders vs. Cross-Encoders

| Architecture | How It Works | Speed | Accuracy |
|---|---|---|---|
| **Bi-Encoder** (used for dense retrieval) | Query and document are embedded **independently**, then compared via cosine similarity | ✅ Fast — documents pre-embedded offline; only the query needs embedding at search time | ⚠️ Good, but misses fine-grained query-document interactions |
| **Cross-Encoder** (used for re-ranking) | Query and document are fed **together** into the model, which outputs a single relevance score | ❌ Slow — must run inference for every (query, doc) pair at query time | ✅ Much higher accuracy |

This is why production systems use bi-encoders (dense retrieval) for the initial fast candidate search over millions of documents, then a cross-encoder to **re-rank** just the top ~20-50 candidates for precision.

### 2.4 Approximate Nearest Neighbor (ANN) Search

Computing exact cosine similarity against millions of vectors for every query is too slow. Vector databases use **ANN algorithms** to find near-optimal matches in sub-linear time:

- **HNSW** (Hierarchical Navigable Small World) — graph-based, used by most vector DBs (Weaviate, Qdrant, Pinecone, pgvector)
- **IVF** (Inverted File Index) — clusters vectors, searches only relevant clusters (used by FAISS)
- **PQ** (Product Quantization) — compresses vectors for memory efficiency at slight accuracy cost

### 2.5 Chunking Strategy

Dense retrieval quality depends heavily on how source documents are split into chunks before embedding:

- **Fixed-size chunking** — split every N tokens (simple, but can cut sentences awkwardly)
- **Recursive/semantic chunking** — split along paragraph/sentence boundaries, keeping meaning intact
- **Chunk overlap** — small overlap (e.g., 10-20%) between consecutive chunks preserves context across boundaries

---

## 3. Workflow Diagram

\`\`\`mermaid
flowchart TD
    subgraph Ingestion Pipeline
        A[Raw Documents] --> B[Chunking<br/>split into passages]
        B --> C[Embedding Model<br/>bi-encoder]
        C --> D[Dense Vectors<br/>1536-dim floats]
        D --> E[(Vector Store<br/>HNSW / IVF index)]
    end

    subgraph Query Time
        F[User Query] --> G[Embedding Model<br/>same bi-encoder]
        G --> H[Query Vector]
        H --> I[ANN Search in Vector Store<br/>cosine similarity]
        I --> J[Top-K Nearest Neighbors]
    end

    E -.indexed vectors.-> I
    J --> K[Optional Cross-Encoder Re-ranking]
    K --> L[Final Context Chunks]
    L --> M[LLM Answer Generation]
    M --> N[Final Answer to User]
\`\`\`

---

## 4. Real-Time Example

**Scenario:** A customer support RAG chatbot for a SaaS product.

**User asks:**
> "My invoice looks wrong, can someone check it?"

**Relevant document in the knowledge base** (written by a different team, different wording):
> *"Billing discrepancies: if your monthly statement doesn't match your expected charges, contact billing support for a reconciliation review."*

### Why keyword/sparse search would likely miss this:
Zero literal word overlap between "invoice looks wrong" and "billing discrepancies... reconciliation review." A BM25 search would score this document low or not retrieve it at all.

### Why dense retrieval succeeds:
The embedding model has learned — from training on massive text — that "invoice," "billing," "statement," and "charges" occupy a similar semantic neighborhood, and that "looks wrong" and "discrepancies" both express the concept of an error/mismatch. The query vector lands close to the document vector in embedding space, even with completely different surface wording, so it's retrieved as a top match.

**Follow-up nuance:** if the user instead asked *"What does error code BIL-4092 mean?"*, dense retrieval alone might struggle (rare exact identifier) — which is exactly the case where **hybrid search with sparse retrieval** (see the companion doc on Keyword-based Retrieval) becomes essential. Dense and sparse retrieval are complementary, not competing.

---

## 5. Code Implementation

### 5.1 Basic Dense Retrieval — From Scratch (No Framework)

\`\`\`python
import numpy as np
from openai import OpenAI

client = OpenAI()

def embed(text: str) -> np.ndarray:
    resp = client.embeddings.create(model="text-embedding-3-small", input=text)
    return np.array(resp.data[0].embedding)

def cosine_similarity(a: np.ndarray, b: np.ndarray) -> float:
    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))

# --- Ingestion: embed the corpus once ---
corpus = [
    "Billing discrepancies: if your monthly statement doesn't match your expected charges, contact billing support for a reconciliation review.",
    "Steps to terminate your membership plan: go to Settings > Billing > Cancel.",
    "API rate limiting policy: requests are throttled at 100 requests per minute.",
    "How to reset your password: navigate to account settings.",
]
corpus_embeddings = [embed(doc) for doc in corpus]

# --- Query time ---
def dense_retrieve(query: str, k: int = 3):
    q_emb = embed(query)
    scored = [
        (cosine_similarity(q_emb, doc_emb), doc)
        for doc_emb, doc in zip(corpus_embeddings, corpus)
    ]
    scored.sort(key=lambda x: x[0], reverse=True)
    return scored[:k]

results = dense_retrieve("My invoice looks wrong, can someone check it?")
for score, doc in results:
    print(f"{score:.3f} -> {doc}")
\`\`\`

### 5.2 Production Dense Retrieval with Chroma

\`\`\`python
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.documents import Document

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

docs = [
    Document(page_content="Billing discrepancies: if your monthly statement doesn't match expected charges, contact billing support."),
    Document(page_content="Steps to terminate your membership plan: Settings > Billing > Cancel."),
    Document(page_content="API rate limiting policy: 100 requests per minute per key."),
]

vectorstore = Chroma.from_documents(docs, embeddings, collection_name="support_kb")

retriever = vectorstore.as_retriever(
    search_type="similarity",   # or "mmr" for diversity-aware retrieval
    search_kwargs={"k": 3},
)

results = retriever.invoke("My invoice looks wrong, can someone check it?")
for r in results:
    print(r.page_content)
\`\`\`

### 5.3 Scalable ANN Search with FAISS (Millions of Vectors)

\`\`\`python
import faiss
import numpy as np

dimension = 1536

# HNSW index — fast approximate nearest neighbor search
index = faiss.IndexHNSWFlat(dimension, 32)  # 32 = neighbors per node
index.hnsw.efConstruction = 200
index.hnsw.efSearch = 64

# Add pre-computed embeddings (e.g., from corpus_embeddings above)
vectors = np.array(corpus_embeddings).astype("float32")
faiss.normalize_L2(vectors)  # normalize for cosine similarity via inner product
index.add(vectors)

# Query
query_vector = embed("My invoice looks wrong, can someone check it?").astype("float32").reshape(1, -1)
faiss.normalize_L2(query_vector)

k = 3
distances, indices = index.search(query_vector, k)

for rank, idx in enumerate(indices[0]):
    print(f"Rank {rank+1}: score={distances[0][rank]:.3f} -> {corpus[idx]}")
\`\`\`

### 5.4 Dense Retrieval + Cross-Encoder Re-ranking (Two-Stage Pipeline)

\`\`\`python
from sentence_transformers import CrossEncoder

# Stage 1: fast dense retrieval (bi-encoder) gets top-20 candidates
candidates = dense_retrieve("My invoice looks wrong, can someone check it?", k=20)
candidate_texts = [doc for _, doc in candidates]

# Stage 2: slow, accurate cross-encoder re-ranks the top-20 down to top-3
cross_encoder = CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2")

query = "My invoice looks wrong, can someone check it?"
pairs = [[query, doc] for doc in candidate_texts]
rerank_scores = cross_encoder.predict(pairs)

reranked = sorted(zip(rerank_scores, candidate_texts), key=lambda x: x[0], reverse=True)

for score, doc in reranked[:3]:
    print(f"{score:.3f} -> {doc}")
\`\`\`

### 5.5 Chunking Before Embedding (Recursive Character Splitting)

\`\`\`python
from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,       # characters per chunk
    chunk_overlap=75,     # overlap to preserve context across boundaries
    separators=["\\n\\n", "\\n", ". ", " ", ""],
)

long_document = """
Billing discrepancies can occur for several reasons. First, promotional
discounts may expire mid-cycle... [long document continues] ...
Contact billing support for a full reconciliation review within 30 days.
"""

chunks = splitter.split_text(long_document)
print(f"Split into {len(chunks)} chunks")
for i, chunk in enumerate(chunks):
    print(f"[Chunk {i}] {chunk[:80]}...")
\`\`\`

---

## 6. Popular Embedding Models

| Model | Provider | Dimensions | Notes |
|---|---|---|---|
| \`text-embedding-3-small\` | OpenAI | 1536 | Strong general-purpose, cost-efficient |
| \`text-embedding-3-large\` | OpenAI | 3072 | Higher accuracy, higher cost |
| \`embed-english-v3.0\` | Cohere | 1024 | Strong for retrieval-specific tasks |
| \`all-MiniLM-L6-v2\` | sentence-transformers (open source) | 384 | Fast, lightweight, self-hostable |
| \`bge-large-en-v1.5\` | BAAI (open source) | 1024 | Top open-source retrieval benchmark performance |
| \`voyage-large-2\` | Voyage AI | 1536 | Domain-tunable, strong for enterprise RAG |

---

## 7. Advantages of Dense Retrieval

- **Semantic understanding** — matches meaning, not just words; handles synonyms, paraphrasing, and cross-lingual queries
- **Robust to vocabulary mismatch** — works even when query and document phrasing differ completely
- **Compact representation** — fixed-size vectors regardless of document length
- **Strong ANN infrastructure** — HNSW/IVF enable fast search even over hundreds of millions of vectors

## 8. Trade-offs & Limitations

- **Weak on exact identifiers** — struggles with rare tokens, IDs, codes, numbers not well-represented in training data
- **Opaque/less explainable** — hard to say *why* a document scored high (no term-level breakdown like BM25)
- **Embedding cost & latency** — every document must be embedded (and re-embedded if content changes or the model is upgraded)
- **Domain drift** — general-purpose embedding models may underperform on highly specialized/technical jargon without fine-tuning
- **Approximate search trade-offs** — ANN algorithms sacrifice some accuracy for speed; recall isn't always 100%

## 9. When to Use Dense Retrieval

Best suited for:
- Conversational, natural-language queries where users phrase things differently than the source documents
- Cross-lingual or paraphrase-heavy search scenarios
- Large corpora where semantic breadth of results matters more than exact term matching

Less critical / insufficient alone for:
- Exact identifier lookup (error codes, SKUs, legal citations) — pair with sparse retrieval
- Domains requiring full explainability of retrieval decisions
- Extremely latency-sensitive applications where embedding + ANN search overhead isn't acceptable

## 10. Best Practice

As with sparse retrieval, the strongest production RAG systems rarely use dense retrieval **alone**. The recommended default architecture is:

\`\`\`
Hybrid Retrieval = Dense (semantic recall) + Sparse (lexical precision) + Cross-Encoder Re-ranking (final precision)
\`\`\`

This combination captures the best of all three: broad semantic coverage, exact-match precision, and fine-grained relevance ranking — while keeping the expensive re-ranking step limited to a small candidate set for speed.
`,nr=`"""\r
============================================================\r
Dense Retrieval in RAG - End-to-End Workflow\r
============================================================\r
\r
Workflow\r
--------\r
1. Load Documents\r
2. Split Documents into Chunks\r
3. Generate Embeddings\r
4. Store Embeddings in a Vector Database\r
5. User submits a query\r
6. Generate Query Embedding\r
7. Perform Vector Similarity Search\r
8. Retrieve Top-K Relevant Documents\r
9. Construct Prompt\r
10. Send Context + Question to LLM\r
11. Generate Final Answer\r
\r
Dense Retrieval uses semantic embeddings instead of\r
keyword matching, making it effective for understanding\r
synonyms, paraphrases, and natural language queries.\r
"""\r
\r
from langchain_community.document_loaders import DirectoryLoader\r
from langchain.text_splitter import RecursiveCharacterTextSplitter\r
from langchain_openai import OpenAIEmbeddings, ChatOpenAI\r
from langchain_community.vectorstores import FAISS\r
from langchain.prompts import ChatPromptTemplate\r
from langchain.chains.combine_documents import create_stuff_documents_chain\r
\r
# ==========================================================\r
# STEP 1 : Load Documents\r
# ==========================================================\r
\r
loader = DirectoryLoader("documents/")\r
documents = loader.load()\r
\r
print(f"Loaded {len(documents)} documents")\r
\r
# ==========================================================\r
# STEP 2 : Split Documents\r
# ==========================================================\r
\r
splitter = RecursiveCharacterTextSplitter(\r
    chunk_size=500,\r
    chunk_overlap=100\r
)\r
\r
chunks = splitter.split_documents(documents)\r
\r
print(f"Created {len(chunks)} chunks")\r
\r
# ==========================================================\r
# STEP 3 : Initialize Embedding Model\r
# ==========================================================\r
\r
embedding_model = OpenAIEmbeddings()\r
\r
# ==========================================================\r
# STEP 4 : Generate Embeddings & Store in Vector Database\r
# ==========================================================\r
\r
vector_db = FAISS.from_documents(\r
    documents=chunks,\r
    embedding=embedding_model\r
)\r
\r
print("Vector Database Created Successfully")\r
\r
# ==========================================================\r
# STEP 5 : Create Retriever\r
# ==========================================================\r
\r
retriever = vector_db.as_retriever(\r
    search_kwargs={\r
        "k": 5\r
    }\r
)\r
\r
# ==========================================================\r
# STEP 6 : User Question\r
# ==========================================================\r
\r
question = "How does Kubernetes Horizontal Pod Autoscaler work?"\r
\r
# ==========================================================\r
# STEP 7 : Generate Query Embedding + Retrieve Documents\r
# ==========================================================\r
\r
retrieved_docs = retriever.invoke(question)\r
\r
print("\\n")\r
print("=" * 60)\r
print("Retrieved Documents")\r
print("=" * 60)\r
\r
for i, doc in enumerate(retrieved_docs, start=1):\r
    print(f"\\nDocument {i}")\r
    print("-" * 40)\r
    print(doc.page_content[:300])\r
\r
# ==========================================================\r
# STEP 8 : Prompt Template\r
# ==========================================================\r
\r
prompt = ChatPromptTemplate.from_template("""\r
\r
You are an expert AI assistant.\r
\r
Answer ONLY using the supplied context.\r
\r
If the answer cannot be found,\r
respond with:\r
\r
"I don't have enough information."\r
\r
Context:\r
{context}\r
\r
Question:\r
{input}\r
\r
""")\r
\r
# ==========================================================\r
# STEP 9 : Initialize LLM\r
# ==========================================================\r
\r
llm = ChatOpenAI(\r
    model="gpt-4o-mini",\r
    temperature=0\r
)\r
\r
# ==========================================================\r
# STEP 10 : Create Document Chain\r
# ==========================================================\r
\r
document_chain = create_stuff_documents_chain(\r
    llm,\r
    prompt\r
)\r
\r
# ==========================================================\r
# STEP 11 : Generate Final Answer\r
# ==========================================================\r
\r
response = document_chain.invoke(\r
    {\r
        "context": retrieved_docs,\r
        "input": question\r
    }\r
)\r
\r
# ==========================================================\r
# STEP 12 : Display Final Answer\r
# ==========================================================\r
\r
print("\\n")\r
print("=" * 60)\r
print("FINAL ANSWER")\r
print("=" * 60)\r
\r
print(response)\r
\r
# ==========================================================\r
# END OF DENSE RETRIEVAL PIPELINE\r
# ==========================================================`,rr=`"""\r
============================================================\r
Hybrid Retrieval in RAG - End-to-End Workflow\r
============================================================\r
\r
Workflow\r
--------\r
1. Load Documents\r
2. Split Documents into Chunks\r
3. Generate Dense Embeddings\r
4. Store Embeddings in Vector Database\r
5. Build BM25 Sparse Index\r
6. User submits a query\r
7. Perform Dense Retrieval\r
8. Perform Sparse Retrieval\r
9. Merge & Re-rank Results\r
10. Construct Prompt\r
11. Send Context + Question to LLM\r
12. Generate Final Answer\r
\r
Hybrid Retrieval combines:\r
✔ Dense Retrieval (Semantic Search)\r
✔ Sparse Retrieval (Keyword Search)\r
\r
This provides both semantic understanding and exact keyword matching.\r
"""\r
\r
from langchain_community.document_loaders import DirectoryLoader\r
from langchain.text_splitter import RecursiveCharacterTextSplitter\r
from langchain_openai import OpenAIEmbeddings, ChatOpenAI\r
from langchain_community.vectorstores import FAISS\r
from langchain_community.retrievers import BM25Retriever\r
from langchain.retrievers import EnsembleRetriever\r
from langchain.prompts import ChatPromptTemplate\r
from langchain.chains.combine_documents import create_stuff_documents_chain\r
\r
# ==========================================================\r
# STEP 1 : Load Documents\r
# ==========================================================\r
\r
loader = DirectoryLoader("documents/")\r
documents = loader.load()\r
\r
print(f"Loaded {len(documents)} documents")\r
\r
# ==========================================================\r
# STEP 2 : Split Documents\r
# ==========================================================\r
\r
splitter = RecursiveCharacterTextSplitter(\r
    chunk_size=500,\r
    chunk_overlap=100\r
)\r
\r
chunks = splitter.split_documents(documents)\r
\r
print(f"Created {len(chunks)} chunks")\r
\r
# ==========================================================\r
# STEP 3 : Generate Dense Embeddings\r
# ==========================================================\r
\r
embedding_model = OpenAIEmbeddings()\r
\r
# ==========================================================\r
# STEP 4 : Store Embeddings in Vector Database\r
# ==========================================================\r
\r
vector_db = FAISS.from_documents(\r
    chunks,\r
    embedding_model\r
)\r
\r
dense_retriever = vector_db.as_retriever(\r
    search_kwargs={"k": 5}\r
)\r
\r
print("Dense Retriever Ready")\r
\r
# ==========================================================\r
# STEP 5 : Build Sparse BM25 Index\r
# ==========================================================\r
\r
sparse_retriever = BM25Retriever.from_documents(chunks)\r
sparse_retriever.k = 5\r
\r
print("Sparse Retriever Ready")\r
\r
# ==========================================================\r
# STEP 6 : Create Hybrid Retriever\r
# ==========================================================\r
\r
hybrid_retriever = EnsembleRetriever(\r
    retrievers=[\r
        dense_retriever,\r
        sparse_retriever\r
    ],\r
    weights=[\r
        0.5,   # Dense Retrieval Weight\r
        0.5    # Sparse Retrieval Weight\r
    ]\r
)\r
\r
print("Hybrid Retriever Created")\r
\r
# ==========================================================\r
# STEP 7 : User Question\r
# ==========================================================\r
\r
question = "How does Kubernetes Horizontal Pod Autoscaler work?"\r
\r
# ==========================================================\r
# STEP 8 : Hybrid Retrieval\r
# ==========================================================\r
\r
retrieved_docs = hybrid_retriever.invoke(question)\r
\r
print("\\n")\r
print("=" * 60)\r
print("Retrieved Documents")\r
print("=" * 60)\r
\r
for i, doc in enumerate(retrieved_docs, start=1):\r
\r
    print(f"\\nDocument {i}")\r
    print("-" * 40)\r
    print(doc.page_content[:300])\r
\r
# ==========================================================\r
# STEP 9 : Prompt Template\r
# ==========================================================\r
\r
prompt = ChatPromptTemplate.from_template("""\r
\r
You are an expert AI assistant.\r
\r
Answer ONLY using the supplied context.\r
\r
If the answer is unavailable,\r
reply with:\r
\r
"I don't have enough information."\r
\r
Context:\r
{context}\r
\r
Question:\r
{input}\r
\r
""")\r
\r
# ==========================================================\r
# STEP 10 : Load LLM\r
# ==========================================================\r
\r
llm = ChatOpenAI(\r
    model="gpt-4o-mini",\r
    temperature=0\r
)\r
\r
# ==========================================================\r
# STEP 11 : Create QA Chain\r
# ==========================================================\r
\r
document_chain = create_stuff_documents_chain(\r
    llm,\r
    prompt\r
)\r
\r
# ==========================================================\r
# STEP 12 : Generate Final Answer\r
# ==========================================================\r
\r
response = document_chain.invoke(\r
    {\r
        "context": retrieved_docs,\r
        "input": question\r
    }\r
)\r
\r
# ==========================================================\r
# STEP 13 : Display Answer\r
# ==========================================================\r
\r
print("\\n")\r
print("=" * 60)\r
print("FINAL ANSWER")\r
print("=" * 60)\r
print(response)\r
\r
# ==========================================================\r
# END OF HYBRID RAG PIPELINE\r
# ==========================================================`,ir=`## 1. Introduction

The previous two techniques in this series covered two fundamentally different retrieval philosophies:

- **Sparse (Keyword) Retrieval — BM25**: matches exact/lexical terms; excellent for identifiers, codes, and rare terminology
- **Dense (Embedding) Retrieval**: matches semantic meaning; excellent for paraphrasing, synonyms, and conversational queries

Neither is strictly better — each has blind spots the other covers. **Hybrid Search** combines both retrieval methods and **fuses their results into a single ranked list**, giving you the lexical precision of BM25 *and* the semantic breadth of embeddings in one retrieval pass.

> **Hybrid Search = Sparse Retrieval + Dense Retrieval + Score/Rank Fusion**

This is now considered the **default best practice** for production RAG systems, and is natively supported by most modern vector databases (Weaviate, Pinecone, Qdrant, Elasticsearch, Azure AI Search, Vespa).

---

## 2. Why Hybrid Search Is Needed

Neither pure sparse nor pure dense retrieval is sufficient across all query types in a real knowledge base:

| Query Type | Sparse (BM25) Alone | Dense (Embeddings) Alone | Hybrid |
|---|---|---|---|
| "What does error \`ERR_502_GATEWAY\` mean?" | ✅ Exact match wins | ❌ May miss rare token | ✅ Correct + related context |
| "My invoice looks wrong, can someone check it?" | ❌ No word overlap with "billing discrepancy" doc | ✅ Semantic match wins | ✅ Correct |
| "cancel subscription plan Q3 2024 invoice #4092" | ✅ Catches exact invoice number | ⚠️ May dilute score across generic terms | ✅ Both signals combine |
| Conversational/vague query | ⚠️ Weak, no strong keyword anchor | ✅ Strong | ✅ Robust |

A single retrieval method is a compromise. **Hybrid search removes the compromise** by running both in parallel and merging results — at the cost of some added complexity and computation.

---

## 3. Core Concepts

### 3.1 Two Retrieval Signals, One Result Set

Hybrid search runs the *same* query text through two independent retrieval pipelines simultaneously:

1. **Sparse pipeline**: query → tokenize → BM25 score against inverted index → ranked list A
2. **Dense pipeline**: query → embed → ANN cosine similarity search → ranked list B

### 3.2 Fusion Strategies

There are two dominant ways to combine ranked list A and ranked list B into one final ranking:

#### a) Reciprocal Rank Fusion (RRF) — Rank-Based, No Score Normalization Needed

RRF ignores the raw scores (which are on completely different scales — BM25 scores are unbounded, cosine similarity is 0-1) and instead uses each document's **rank position** in each list.

\`\`\`
RRF_score(doc) = Σ over each retrieval method [ 1 / (k + rank_of_doc_in_that_method) ]
\`\`\`

Typically \`k = 60\`. Documents that rank highly in *either or both* lists accumulate higher fused scores. This is the most popular fusion method because it requires **no score normalization or tuning**.

#### b) Weighted Score Fusion (Convex Combination / "Alpha" Blending)

Normalize both score sets (e.g., min-max normalization) to a comparable 0-1 range, then combine with a tunable weight \`alpha\`:

\`\`\`
hybrid_score = alpha * normalized_dense_score + (1 - alpha) * normalized_sparse_score
\`\`\`

- \`alpha = 1.0\` → pure dense retrieval
- \`alpha = 0.0\` → pure sparse retrieval
- \`alpha = 0.5\` → equal blend (common default)

This gives finer control but requires tuning \`alpha\` per domain/dataset, and score normalization can be tricky since BM25 and cosine similarity distributions differ significantly.

### 3.3 Candidate Pool Size

A common pattern: retrieve top-N (e.g., N=20) from *each* method before fusing, so the final fused top-K (e.g., K=5) has a wide enough pool to draw genuinely relevant results from both signals — not just whichever method happened to return fewer results.

### 3.4 Optional Third Stage: Cross-Encoder Re-ranking

Even after fusion, a lightweight cross-encoder can re-score the fused top-N for final precision, since it can model query-document interaction directly (as covered in the Dense Retrieval doc).

\`\`\`
Sparse (BM25) ─┐
                ├─► Fusion (RRF / weighted) ─► Cross-Encoder Re-rank ─► Final Top-K
Dense (Vector) ─┘
\`\`\`

---

## 4. Workflow Diagram

\`\`\`mermaid
flowchart TD
    A[User Query] --> B[Tokenize for BM25]
    A --> C[Embed for Dense Search]

    B --> D[Sparse Retrieval<br/>BM25 / Inverted Index]
    C --> E[Dense Retrieval<br/>ANN / Cosine Similarity]

    D --> F[Ranked List A<br/>top-N sparse results]
    E --> G[Ranked List B<br/>top-N dense results]

    F --> H{Fusion Strategy}
    G --> H
    H -->|Reciprocal Rank Fusion| I[Fused Ranking]
    H -->|Weighted Score Blend alpha| I

    I --> J[Optional Cross-Encoder Re-ranking]
    J --> K[Final Top-K Context]
    K --> L[LLM Answer Generation]
    L --> M[Final Answer to User]
\`\`\`

---

## 5. Real-Time Example

**Scenario:** A developer-facing support assistant for a cloud platform, covering documentation, API references, and troubleshooting guides.

**User asks:**
> "My deployment keeps failing with ERR_502_GATEWAY after I updated the billing plan"

This single query has **two distinct retrieval needs at once**:

1. An **exact identifier** — \`ERR_502_GATEWAY\` — best served by sparse/BM25
2. A **conceptual/semantic** phrase — "deployment keeps failing... after updated billing plan" — best served by dense embeddings, since the actual relevant doc might phrase it as *"deployment interruptions following subscription tier changes"*

### What each method alone would return:

| Method | Top Result |
|---|---|
| **Sparse only** | ✅ \`ERR_502_GATEWAY troubleshooting guide\` (exact match) — but misses the billing-plan-change correlation doc entirely |
| **Dense only** | ✅ \`Deployment interruptions following subscription tier changes\` — but might rank the exact error code doc lower, diluted by generic "deployment failure" semantics |

### What hybrid search returns:

Both relevant documents surface in the fused top results — the exact error-code reference **and** the semantically related billing-change doc — giving the LLM everything it needs to correctly explain that the deployment failure is *caused by* the billing plan change, not just describe the error code in isolation.

---

## 6. Code Implementation

### 6.1 From-Scratch Hybrid Search with RRF

\`\`\`python
from rank_bm25 import BM25Okapi
from openai import OpenAI
import numpy as np
import re

client = OpenAI()

def tokenize(text: str):
    return re.findall(r"[a-z0-9_]+", text.lower())

def embed(text: str) -> np.ndarray:
    resp = client.embeddings.create(model="text-embedding-3-small", input=text)
    return np.array(resp.data[0].embedding)

def cosine_similarity(a, b):
    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))

# --- Corpus ---
corpus = [
    "ERR_502_GATEWAY: Upstream Server Timeout - Troubleshooting Guide for failed deployments.",
    "Deployment interruptions following subscription tier changes: billing plan updates can trigger temporary service restarts.",
    "API rate limiting policy: requests are throttled at 100 requests per minute per API key.",
    "How to reset your password: navigate to account settings.",
]

# --- Build both indexes ---
tokenized_corpus = [tokenize(doc) for doc in corpus]
bm25 = BM25Okapi(tokenized_corpus)
dense_embeddings = [embed(doc) for doc in corpus]

# --- Retrieval functions returning ranked doc indices ---
def sparse_retrieve(query, k=10):
    scores = bm25.get_scores(tokenize(query))
    return sorted(range(len(scores)), key=lambda i: scores[i], reverse=True)[:k]

def dense_retrieve(query, k=10):
    q_emb = embed(query)
    sims = [cosine_similarity(q_emb, d) for d in dense_embeddings]
    return sorted(range(len(sims)), key=lambda i: sims[i], reverse=True)[:k]

# --- Reciprocal Rank Fusion ---
def reciprocal_rank_fusion(rank_lists, k=60):
    fused_scores = {}
    for rank_list in rank_lists:
        for rank, doc_idx in enumerate(rank_list):
            fused_scores.setdefault(doc_idx, 0.0)
            fused_scores[doc_idx] += 1.0 / (k + rank + 1)
    return sorted(fused_scores, key=lambda x: fused_scores[x], reverse=True)

# --- Run hybrid search ---
query = "My deployment keeps failing with ERR_502_GATEWAY after I updated the billing plan"

sparse_ranked = sparse_retrieve(query)
dense_ranked = dense_retrieve(query)
final_ranking = reciprocal_rank_fusion([sparse_ranked, dense_ranked])

print("Hybrid search results (best first):")
for idx in final_ranking:
    print(f"-> {corpus[idx]}")
\`\`\`

### 6.2 Weighted Score Fusion (Alpha Blending) — Manual Implementation

\`\`\`python
def min_max_normalize(scores):
    scores = np.array(scores, dtype=float)
    if scores.max() == scores.min():
        return np.zeros_like(scores)
    return (scores - scores.min()) / (scores.max() - scores.min())

def hybrid_weighted_search(query, alpha=0.5, k=5):
    # Get raw scores for the FULL corpus (not just top-k) so normalization is meaningful
    sparse_scores = bm25.get_scores(tokenize(query))
    q_emb = embed(query)
    dense_scores = [cosine_similarity(q_emb, d) for d in dense_embeddings]

    norm_sparse = min_max_normalize(sparse_scores)
    norm_dense = min_max_normalize(dense_scores)

    hybrid_scores = alpha * norm_dense + (1 - alpha) * norm_sparse

    ranked = sorted(range(len(hybrid_scores)), key=lambda i: hybrid_scores[i], reverse=True)
    return [(corpus[i], hybrid_scores[i]) for i in ranked[:k]]

# alpha=0.5 -> equal blend; try 0.3 (favor keyword) or 0.7 (favor semantic) depending on domain
results = hybrid_weighted_search(query, alpha=0.5)
for doc, score in results:
    print(f"{score:.3f} -> {doc}")
\`\`\`

### 6.3 Native Hybrid Search — Weaviate

\`\`\`python
import weaviate
from weaviate.classes.query import HybridFusion

client = weaviate.connect_to_local()
collection = client.collections.get("SupportDocs")

response = collection.query.hybrid(
    query="My deployment keeps failing with ERR_502_GATEWAY after I updated the billing plan",
    alpha=0.5,  # 0 = pure keyword (BM25), 1 = pure vector
    fusion_type=HybridFusion.RELATIVE_SCORE,  # or RANKED (RRF-style)
    limit=5,
)

for obj in response.objects:
    print(obj.properties["content"], "-> score:", obj.metadata.score)

client.close()
\`\`\`

### 6.4 Native Hybrid Search — Pinecone (Sparse-Dense Vectors)

\`\`\`python
from pinecone import Pinecone
from pinecone_text.sparse import BM25Encoder

pc = Pinecone(api_key="YOUR_API_KEY")
index = pc.Index("hybrid-support-kb")

bm25_encoder = BM25Encoder().fit(corpus)  # fit on your corpus text

def hybrid_upsert(doc_id, text):
    dense_vec = embed(text).tolist()
    sparse_vec = bm25_encoder.encode_documents([text])[0]
    index.upsert(vectors=[{
        "id": doc_id,
        "values": dense_vec,
        "sparse_values": sparse_vec,
        "metadata": {"text": text},
    }])

def hybrid_query(query_text, alpha=0.5, top_k=5):
    dense_vec = embed(query_text).tolist()
    sparse_vec = bm25_encoder.encode_queries([query_text])[0]

    # Scale sparse/dense contributions by alpha before querying
    scaled_sparse = {
        "indices": sparse_vec["indices"],
        "values": [v * (1 - alpha) for v in sparse_vec["values"]],
    }
    scaled_dense = [v * alpha for v in dense_vec]

    return index.query(
        vector=scaled_dense,
        sparse_vector=scaled_sparse,
        top_k=top_k,
        include_metadata=True,
    )

response = hybrid_query("My deployment keeps failing with ERR_502_GATEWAY after I updated the billing plan")
for match in response["matches"]:
    print(match["score"], match["metadata"]["text"])
\`\`\`

### 6.5 Hybrid Search + Final Cross-Encoder Re-ranking (Full Production Pipeline)

\`\`\`python
from sentence_transformers import CrossEncoder

cross_encoder = CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2")

def full_hybrid_pipeline(query, top_n_per_method=10, final_k=5):
    sparse_ranked = sparse_retrieve(query, k=top_n_per_method)
    dense_ranked = dense_retrieve(query, k=top_n_per_method)
    fused_indices = reciprocal_rank_fusion([sparse_ranked, dense_ranked])

    # Take a generous candidate pool into re-ranking
    candidates = [corpus[i] for i in fused_indices[:top_n_per_method]]

    pairs = [[query, doc] for doc in candidates]
    rerank_scores = cross_encoder.predict(pairs)

    reranked = sorted(zip(rerank_scores, candidates), key=lambda x: x[0], reverse=True)
    return reranked[:final_k]


final_results = full_hybrid_pipeline(query)
for score, doc in final_results:
    print(f"{score:.3f} -> {doc}")
\`\`\`

---

## 7. RRF vs. Weighted Fusion — Which to Use?

| Aspect | Reciprocal Rank Fusion (RRF) | Weighted Score Fusion (Alpha) |
|---|---|---|
| **Needs score normalization?** | ❌ No — rank-based | ✅ Yes — scores must be normalized to comparable ranges |
| **Tuning required** | Minimal (just \`k\`, rarely changed from 60) | Requires tuning \`alpha\` per domain/dataset |
| **Robustness** | ✅ Very robust across different score distributions | ⚠️ Sensitive to normalization method and outlier scores |
| **Interpretability** | Rank-based, less intuitive | Score-based, easier to reason about ("70% semantic weight") |
| **Native DB support** | Widely supported (Weaviate \`RANKED\`, Elasticsearch RRF) | Widely supported (Weaviate \`RELATIVE_SCORE\`, Pinecone alpha) |
| **Recommended default** | ✅ Yes, for most use cases | Use when you need fine-grained control and have data to tune \`alpha\` |

---

## 8. Advantages of Hybrid Search

- **Best of both worlds** — lexical precision (exact IDs, codes, rare terms) + semantic recall (paraphrasing, synonyms)
- **More robust across query types** — handles both keyword-heavy and conversational queries well without needing to guess which mode fits
- **Reduces retrieval failure modes** — a document only needs to be found by *one* of the two methods to enter the fused candidate pool
- **Native support in modern infra** — no need to build fusion logic from scratch in most production vector databases

## 9. Trade-offs & Considerations

- **Higher computational cost** — running two retrieval pipelines (plus optional re-ranking) costs more than one
- **Added complexity** — requires maintaining both a sparse index (inverted index/BM25) and a dense index (ANN/vector index)
- **Fusion tuning** — weighted fusion requires domain-specific \`alpha\` tuning; poor tuning can underweight the more useful signal for your data
- **Latency** — two retrieval calls + fusion + optional re-ranking adds up; parallelize sparse and dense calls to minimize impact

## 10. When to Use Hybrid Search

Best suited for:
- Production RAG systems with mixed query types (some conversational, some containing exact identifiers/codes)
- Technical, legal, medical, or enterprise domains where both jargon-heavy exact terms and natural-language questions coexist
- Any system where retrieval quality directly impacts user trust (customer support, compliance, internal knowledge assistants)

Less critical for:
- Very small, narrow-domain corpora where one method alone already performs well
- Extremely latency-constrained applications where the cost of dual retrieval isn't justified

## 11. Summary: The Modern RAG Retrieval Stack

\`\`\`
Hybrid Search = Sparse (BM25) + Dense (Embeddings) + Fusion (RRF/Weighted) + Optional Cross-Encoder Re-rank
\`\`\`

This is now the de facto standard architecture recommended by most vector database vendors (Weaviate, Pinecone, Elasticsearch, Azure AI Search, Vespa) and is the safest default choice when building a new production RAG pipeline — pure sparse-only or dense-only retrieval should generally be treated as a simplification made for speed/cost, not as the ideal end state.
`,ar=`# 1. Introduction\r
\r
Traditional keyword search retrieves documents based on **exact word matching**. While effective for literal queries, it struggles with synonyms, paraphrases, abbreviations, and natural language questions.\r
\r
**Semantic Search** retrieves documents based on their **meaning (semantics)** rather than exact keywords. It converts both documents and user queries into **dense vector embeddings** using an embedding model. During retrieval, the vector database finds the documents whose embeddings are most similar to the query embedding.\r
\r
Unlike keyword search, semantic search understands context and intent, allowing it to retrieve relevant documents even when different words are used.\r
\r
> Think of Semantic Search as searching by **meaning**, not by **words**.\r
\r
---\r
\r
# 2. Why It's Needed\r
\r
## 2.1 The Problem Without Semantic Search\r
\r
| User Query | What Keyword Search Might Return |\r
|------------|----------------------------------|\r
| "How do I reset my password?" | Only documents containing "reset" |\r
| "Vehicle insurance" | Misses documents containing "car insurance" |\r
| "AI salary trends" | Misses "Artificial Intelligence Compensation Report" |\r
| "Laptop reimbursement" | Misses "Computer Equipment Policy" |\r
\r
Keyword search cannot understand:\r
\r
- Synonyms\r
- User intent\r
- Context\r
- Natural language\r
- Similar meanings\r
\r
---\r
\r
## 2.2 What Semantic Search Adds\r
\r
- Retrieves documents based on meaning\r
- Understands synonyms and related concepts\r
- Supports conversational queries\r
- Improves retrieval accuracy\r
- Works even when wording is different\r
- Forms the foundation of modern RAG systems\r
\r
---\r
\r
# 3. Core Concepts\r
\r
| Concept | Description |\r
|----------|-------------|\r
| Embedding Model | Converts text into numerical vectors |\r
| Embedding | Dense numerical representation of text |\r
| Vector Database | Stores embeddings for similarity search |\r
| Similarity Search | Finds vectors closest to the query vector |\r
| Cosine Similarity | Most common similarity metric |\r
| Top-K Retrieval | Returns the K most relevant chunks |\r
| ANN Search | Fast approximate nearest neighbor search |\r
\r
---\r
\r
# 4. Workflow Diagram\r
\r
\`\`\`mermaid\r
flowchart TD\r
\r
A[Raw Documents]\r
B[Chunk Documents]\r
C[Generate Embeddings]\r
D[(Vector Database)]\r
\r
E[User Query]\r
F[Generate Query Embedding]\r
\r
G[Similarity Search]\r
H[Top-K Chunks]\r
I[LLM]\r
J[Final Response]\r
\r
A --> B\r
B --> C\r
C --> D\r
\r
E --> F\r
F --> G\r
D --> G\r
\r
G --> H\r
H --> I\r
I --> J\r
\`\`\`\r
\r
---\r
\r
# 5. Real-Time Example\r
\r
### User Query\r
\r
> Explain Artificial Intelligence\r
\r
### Documents\r
\r
Document 1\r
\r
Artificial Intelligence enables machines to perform tasks requiring human intelligence.\r
\r
Document 2\r
\r
Machine Learning is a subset of Artificial Intelligence.\r
\r
Document 3\r
\r
Cats are domestic animals.\r
\r
### Retrieved Documents\r
\r
✓ Document 1\r
\r
✓ Document 2\r
\r
✗ Document 3\r
\r
Although the query does not exactly match the document text, Semantic Search retrieves the most semantically similar documents.\r
\r
---\r
\r
# 6. Code Implementation\r
\r
The complete implementation is available in:\r
\r
**semantic-search.py**\r
\r
---\r
\r
# 7. Similarity Metrics\r
\r
| Metric | Description |\r
|----------|-------------|\r
| Cosine Similarity | Measures angle between vectors |\r
| Dot Product | Measures vector alignment |\r
| Euclidean Distance | Straight-line distance |\r
| Manhattan Distance | Sum of absolute differences |\r
\r
Cosine Similarity is the most commonly used metric for Semantic Search.\r
\r
---\r
\r
# 8. Advantages\r
\r
- Understands semantic meaning\r
- Retrieves contextually relevant documents\r
- Supports conversational search\r
- Handles synonyms automatically\r
- Improves RAG retrieval quality\r
- Scales efficiently with ANN search\r
\r
---\r
\r
# 9. Trade-offs & Considerations\r
\r
- Embedding generation requires additional computation\r
- Vector storage consumes more memory\r
- Retrieval quality depends on embedding model\r
- Requires a vector database\r
- Similarity threshold and Top-K require tuning\r
\r
---\r
\r
# 10. When to Use Semantic Search\r
\r
Best suited for:\r
\r
- Retrieval-Augmented Generation (RAG)\r
- Enterprise Knowledge Bases\r
- AI Chatbots\r
- Question Answering\r
- Semantic Document Search\r
- Recommendation Systems\r
\r
Less suitable for:\r
\r
- Exact keyword lookup\r
- Searching IDs or invoice numbers\r
- SQL-style structured filtering\r
\r
---\r
\r
# 11. Semantic Search vs Keyword Search\r
\r
| Feature | Keyword Search | Semantic Search |\r
|----------|----------------|-----------------|\r
| Matching | Exact Words | Meaning |\r
| Synonym Support | No | Yes |\r
| Intent Understanding | No | Yes |\r
| Embeddings | No | Yes |\r
| Vector Database | No | Yes |\r
| Natural Language | Limited | Excellent |\r
| Best Use Case | Exact Lookup | Intelligent Retrieval |`,or=`"""\r
Semantic Search using LangChain + ChromaDB\r
\r
Workflow\r
\r
1. Load Documents\r
2. Generate Embeddings\r
3. Store Embeddings in ChromaDB\r
4. Convert User Query into Embedding\r
5. Perform Similarity Search\r
6. Return Top-K Documents\r
"""\r
\r
from langchain_core.documents import Document\r
from langchain_openai import OpenAIEmbeddings\r
from langchain_community.vectorstores import Chroma\r
\r
# ---------------------------------------------------\r
# Step 1 : Load Documents\r
# ---------------------------------------------------\r
\r
documents = [\r
\r
    Document(\r
        page_content="""\r
        Artificial Intelligence enables machines to perform\r
        tasks requiring human intelligence such as reasoning,\r
        learning, and decision making.\r
        """\r
    ),\r
\r
    Document(\r
        page_content="""\r
        Machine Learning is a subset of Artificial Intelligence\r
        that enables computers to learn from data.\r
        """\r
    ),\r
\r
    Document(\r
        page_content="""\r
        Deep Learning uses multi-layer neural networks to\r
        solve complex problems.\r
        """\r
    ),\r
\r
    Document(\r
        page_content="""\r
        Cats are domestic animals commonly kept as pets.\r
        """\r
    )\r
\r
]\r
\r
# ---------------------------------------------------\r
# Step 2 : Initialize Embedding Model\r
# ---------------------------------------------------\r
\r
embeddings = OpenAIEmbeddings(\r
    model="text-embedding-3-small"\r
)\r
\r
# ---------------------------------------------------\r
# Step 3 : Store Embeddings in ChromaDB\r
# ---------------------------------------------------\r
\r
vectorstore = Chroma.from_documents(\r
    documents=documents,\r
    embedding=embeddings,\r
    collection_name="semantic_search_demo"\r
)\r
\r
# ---------------------------------------------------\r
# Step 4 : User Query\r
# ---------------------------------------------------\r
\r
query = "Explain Artificial Intelligence"\r
\r
# ---------------------------------------------------\r
# Step 5 : Semantic Search\r
# ---------------------------------------------------\r
\r
results = vectorstore.similarity_search(\r
    query=query,\r
    k=3\r
)\r
\r
# ---------------------------------------------------\r
# Step 6 : Display Retrieved Documents\r
# ---------------------------------------------------\r
\r
print("\\nTop Retrieved Documents\\n")\r
\r
for i, doc in enumerate(results, start=1):\r
\r
    print(f"Document {i}")\r
    print("-" * 50)\r
    print(doc.page_content.strip())\r
    print()`,sr=`## 1. Introduction\r
\r
**Parent-Child Retrieval** is a retrieval strategy that stores **small child chunks** in the vector database for accurate semantic search while returning the corresponding **larger parent documents** to the Large Language Model (LLM). This approach combines the retrieval precision of small chunks with the richer context provided by larger documents.\r
\r
Unlike standard chunk retrieval, which sends only the retrieved chunk to the LLM, Parent-Child Retrieval retrieves a matching child chunk but returns its associated parent document, enabling more complete and context-aware responses.\r
\r
> Think of it as **searching small pieces but reading the whole section**.\r
\r
---\r
\r
# Why It's Needed\r
\r
## The Problem with Small Chunks\r
\r
Small chunks improve retrieval accuracy because they contain focused information.\r
\r
However, they often lack sufficient surrounding context.\r
\r
Example:\r
\r
User Query:\r
\r
> What is Retrieval-Augmented Generation?\r
\r
Retrieved Chunk:\r
\r
\`\`\`\r
RAG combines retrieval systems with LLMs.\r
\`\`\`\r
\r
This answer is correct but incomplete because it does not explain how retrieval and generation work together.\r
\r
---\r
\r
## What Parent-Child Retrieval Adds\r
\r
- Precise retrieval using small chunks\r
- Richer context using larger parent documents\r
- Better answer generation\r
- Reduced context fragmentation\r
- Improved factual consistency\r
\r
---\r
\r
# Core Concepts\r
\r
| Concept | Description |\r
|----------|-------------|\r
| Parent Document | Large document or section returned to the LLM |\r
| Child Chunk | Small chunk stored in the vector database |\r
| Parent Splitter | Creates larger parent documents |\r
| Child Splitter | Creates smaller searchable chunks |\r
| Doc Store | Stores parent documents |\r
| Vector Store | Stores child chunk embeddings |\r
| ParentDocumentRetriever | Maps retrieved child chunks back to parent documents |\r
\r
---\r
\r
# Workflow\r
\r
\`\`\`mermaid\r
flowchart TD\r
\r
A[Raw Documents]\r
B[Parent Splitter]\r
C[Parent Documents]\r
\r
C --> D[Child Splitter]\r
D --> E[Child Chunks]\r
\r
E --> F[Embedding Model]\r
F --> G[(Vector Database)]\r
\r
C --> H[(Document Store)]\r
\r
I[User Query]\r
J[Embedding Model]\r
\r
I --> J\r
J --> G\r
\r
G --> K[Retrieve Child Chunk]\r
\r
K --> H\r
\r
H --> L[Return Parent Document]\r
\r
L --> M[LLM]\r
\r
M --> N[Final Answer]\r
\`\`\`\r
\r
---\r
\r
# Real-Time Example\r
\r
A company knowledge base contains a 20-page document explaining Artificial Intelligence.\r
\r
The document is divided into:\r
\r
- Parent Chunk (1000 tokens)\r
- Child Chunks (150 tokens each)\r
\r
User Query:\r
\r
> Explain Deep Learning.\r
\r
The vector database retrieves the child chunk discussing Deep Learning.\r
\r
Instead of sending only that child chunk to the LLM, the retriever returns the complete parent section containing:\r
\r
- AI Overview\r
- Machine Learning\r
- Deep Learning\r
- Neural Networks\r
- Applications\r
\r
The LLM now has sufficient context to generate a more complete and accurate response.\r
\r
---\r
\r
# Code Implementation\r
\r
The complete implementation is available in:\r
\r
**parent-child-retrieval.py**\r
\r
---\r
\r
# Advantages\r
\r
- Accurate semantic retrieval\r
- Rich contextual information\r
- Better answer generation\r
- Reduces fragmented responses\r
- Improves RAG performance\r
- Maintains document coherence\r
\r
---\r
\r
# Trade-offs\r
\r
- Higher storage requirements\r
- Additional document store needed\r
- Slightly more complex ingestion pipeline\r
- Parent retrieval may increase context size\r
\r
---\r
\r
# When to Use\r
\r
Best suited for:\r
\r
- Enterprise Knowledge Bases\r
- Long PDFs\r
- Documentation Search\r
- Technical Manuals\r
- Policy Documents\r
- Legal Documents\r
- Retrieval-Augmented Generation (RAG)\r
\r
Less suitable for:\r
\r
- Small documents\r
- FAQ datasets\r
- Very short text collections\r
\r
---\r
\r
# Parent-Child Retrieval vs Standard Retrieval\r
\r
| Feature | Standard Retrieval | Parent-Child Retrieval |\r
|----------|-------------------|------------------------|\r
| Stored Chunk | Small | Small Child |\r
| Returned Chunk | Same Small Chunk | Large Parent Document |\r
| Retrieval Accuracy | High | High |\r
| Context | Limited | Rich |\r
| Answer Quality | Moderate | Excellent |\r
| Storage | Lower | Higher |\r
| Best Use Case | Small Documents | Large Documents |`,cr=`"""\r
Parent-Child Retrieval using LangChain\r
\r
Workflow\r
\r
1. Load Documents\r
2. Split into Parent Chunks\r
3. Split Parent Chunks into Child Chunks\r
4. Store Child Chunks in Vector Store\r
5. Store Parent Documents in Doc Store\r
6. Retrieve Child Chunks\r
7. Return Parent Documents to the LLM\r
"""\r
\r
from langchain_openai import OpenAIEmbeddings\r
from langchain_community.vectorstores import Chroma\r
from langchain.storage import InMemoryStore\r
from langchain_text_splitters import RecursiveCharacterTextSplitter\r
from langchain.retrievers import ParentDocumentRetriever\r
from langchain_core.documents import Document\r
\r
# -----------------------------------------\r
# Step 1 : Load Documents\r
# -----------------------------------------\r
\r
documents = [\r
    Document(\r
        page_content="""\r
Artificial Intelligence (AI) is the simulation of human intelligence in machines.\r
Machine Learning is a subset of AI that enables systems to learn from data.\r
Deep Learning is a subset of Machine Learning that uses neural networks.\r
Large Language Models (LLMs) are deep learning models trained on massive text datasets.\r
Retrieval-Augmented Generation (RAG) combines retrieval systems with LLMs to provide accurate responses.\r
"""\r
    )\r
]\r
\r
# -----------------------------------------\r
# Step 2 : Initialize Embedding Model\r
# -----------------------------------------\r
\r
embeddings = OpenAIEmbeddings(\r
    model="text-embedding-3-small"\r
)\r
\r
# -----------------------------------------\r
# Step 3 : Create Vector Store\r
# -----------------------------------------\r
\r
vectorstore = Chroma(\r
    collection_name="parent_child_demo",\r
    embedding_function=embeddings\r
)\r
\r
# -----------------------------------------\r
# Step 4 : Create Parent & Child Splitters\r
# -----------------------------------------\r
\r
parent_splitter = RecursiveCharacterTextSplitter(\r
    chunk_size=500,\r
    chunk_overlap=50\r
)\r
\r
child_splitter = RecursiveCharacterTextSplitter(\r
    chunk_size=100,\r
    chunk_overlap=20\r
)\r
\r
# -----------------------------------------\r
# Step 5 : Create Document Store\r
# -----------------------------------------\r
\r
store = InMemoryStore()\r
\r
# -----------------------------------------\r
# Step 6 : Create Parent Retriever\r
# -----------------------------------------\r
\r
retriever = ParentDocumentRetriever(\r
    vectorstore=vectorstore,\r
    docstore=store,\r
    child_splitter=child_splitter,\r
    parent_splitter=parent_splitter,\r
)\r
\r
# -----------------------------------------\r
# Step 7 : Add Documents\r
# -----------------------------------------\r
\r
retriever.add_documents(documents)\r
\r
# -----------------------------------------\r
# Step 8 : User Query\r
# -----------------------------------------\r
\r
query = "What is Retrieval-Augmented Generation?"\r
\r
# -----------------------------------------\r
# Step 9 : Retrieve Parent Document\r
# -----------------------------------------\r
\r
results = retriever.invoke(query)\r
\r
# -----------------------------------------\r
# Step 10 : Display Results\r
# -----------------------------------------\r
\r
print("\\nRetrieved Parent Documents\\n")\r
\r
for i, doc in enumerate(results, start=1):\r
    print(f"Parent Document {i}")\r
    print("-" * 60)\r
    print(doc.page_content)\r
    print()`,lr=`# Why Chunking?

## Overview
Chunking is the process of breaking down large documents into smaller, manageable pieces. In the context of Retrieval-Augmented Generation (RAG) systems, chunking is a fundamental preprocessing step that directly impacts retrieval quality, system performance, and operational costs.

## Core Problems Chunking Solves

### 1. Context Window Limitations
Modern Large Language Models have finite context windows—the maximum number of tokens they can process in a single request. For example:
- GPT-3.5-turbo: 4,096 or 16,384 tokens
- GPT-4: 8,192 or 32,768 tokens
- Claude 3 Opus: 200,000 tokens

A single document can easily exceed these limits. Chunking breaks documents into smaller pieces that fit within available context while maintaining semantic coherence.

### 2. Retrieval Relevance
When searching across a large document, exact matching or similarity-based retrieval works better with focused, contextually complete units. Large documents dilute semantic signals and reduce ranking accuracy.

**Impact**: Smaller chunks improve retrieval precision by 30-50% compared to full-document retrieval.

### 3. Cost Optimization
LLM APIs charge per token. Retrieving entire documents wastes tokens on irrelevant content. Chunking enables retrieving only relevant pieces, reducing:
- API costs by up to 60-80%
- Token consumption in embeddings
- Processing overhead

### 4. Search Performance
Searching through massive text is computationally expensive. Chunking reduces:
- Search index size
- Query latency (typically 2-5x faster)
- Memory requirements for retrieval

### 5. Semantic Coherence
Large documents contain multiple topics and contexts. Chunking can:
- Isolate individual topics
- Maintain context within boundaries
- Improve embedding quality
- Enable topic-specific retrieval

## Benefits of Chunking

### Information Density
Smaller chunks have higher information density per unit size, making them more useful for specific queries.

\`\`\`
Full Document (5000 tokens): "The company was founded in 1998. It had 100 employees..."
                              [Contains multiple unrelated facts]

Chunk (256 tokens):          "Foundational History: Company founded in 1998..."
                              [Focused, relevant information]
\`\`\`

### Embedding Quality
Embedding models are trained on specific token lengths (typically 256-512). Chunks matching training distribution improve embedding quality.

### Reduced Redundancy
Chunking eliminates the need to embed or store entire documents multiple times, reducing storage overhead.

### Better Context Management
With precise chunk boundaries, systems can:
- Include surrounding context through overlap
- Manage token budgets more accurately
- Prioritize relevant chunks

## Real-World Impact

### Retrieval Accuracy
Studies show chunking strategies impact retrieval quality:
- **No chunking**: 60% accuracy on relevant document retrieval
- **Fixed-size chunking**: 75% accuracy
- **Semantic chunking**: 85-90% accuracy

### Processing Costs
For a 50,000-token document processed 100 times:
- **No chunking**: 5,000,000 tokens processed
- **With 512-token chunks**: 51,200 tokens processed (98% reduction)

### Latency
Document retrieval latency:
- **Full document search**: 500-1000ms
- **Chunked search**: 50-150ms (5-10x faster)

## Trade-offs to Consider

### Storage vs. Quality
- **No overlap**: Minimal storage, potential context loss
- **20% overlap**: Balanced approach
- **50% overlap**: Best context, double storage

### Chunk Size vs. Precision
- **Small chunks (64-256 tokens)**: High precision, fragmentation risk
- **Medium chunks (256-512 tokens)**: Balanced, recommended
- **Large chunks (1024-2048 tokens)**: More context, less precision

## Key Takeaways

1. **Chunking is essential** for practical RAG systems
2. **Optimal chunk size** depends on your use case (typically 256-1024 tokens)
3. **Overlap matters** - 20% overlap is a good starting point
4. **Strategy selection** should match your document type and quality requirements
5. **Testing is critical** - benchmark different strategies on your data

## When Not to Chunk?

With expanding context windows (200K+ tokens), chunking may not be necessary for:
- Very small documents
- Real-time systems where latency is critical
- Applications where complete context is essential

However, for most practical applications, chunking remains the most cost-effective and reliable approach.
`,ur=`## 1. Introduction
Fixed-size chunking divides documents into uniform chunks of a predefined number of tokens or characters. Each chunk contains exactly the same amount of text, regardless of semantic boundaries or content structure.

## How It Works

### Process Flow
1. **Input**: Raw text or document
2. **Configuration**: Define chunk size (e.g., 512 tokens)
3. **Splitting**: Divide text into equal-sized segments
4. **Boundary Handling**: Handle split points (may break mid-word or sentence)
5. **Output**: List of fixed-size chunks with metadata

### Example
\`\`\`
Document: "The machine learning model was trained on 1 million samples. 
The accuracy reached 95%. Further optimization improved it to 97%."

Chunk Size: 20 characters
Chunk 1: "The machine learning"
Chunk 2: " model was trained o"
Chunk 3: "n 1 million samples."
Chunk 4: " The accuracy reached"
Chunk 5: " 95%. Further optimi"
Chunk 6: "zation improved it to"
Chunk 7: " 97%."
\`\`\`

## Characteristics

### Simplicity: Very High
- Easy to understand and implement
- Can be implemented in a few lines of code
- No external dependencies required

### Computational Cost: Very Low
- O(n) time complexity where n is document length
- Minimal memory overhead
- Instant processing

### Context Preservation: Low
- May break semantic units
- Splits sentences and phrases
- Loses contextual boundaries

### Flexibility: Low
- Fixed parameters for all documents
- No adaptation to content type
- One-size-fits-all approach

### Variable Chunk Sizes: No
- All chunks identical size
- Predictable output

## Advantages

1. **Simplicity**: Easy to implement and maintain
2. **Predictability**: Output is deterministic and consistent
3. **Speed**: Fast processing with minimal overhead
4. **Storage**: Predictable memory requirements
5. **Deterministic**: Same input always produces same output

## Disadvantages

1. **Context Loss**: Breaks in middle of sentences/concepts
2. **Poor Boundaries**: Ignores semantic structure
3. **Fragmentation**: Important information split across chunks
4. **Redundancy**: May duplicate partial words or phrases
5. **Retrieval Quality**: Low semantic cohesion reduces ranking quality

## Use Cases

### Ideal For
- **Log Files**: System logs with repetitive format
- **Sensor Data**: Time-series data with regular intervals
- **Structured Data**: CSV, JSON with consistent formatting
- **Large Code Files**: Technical content where size matters more than semantics

### Not Ideal For
- Books and articles
- Documentation with varying structure
- Nuanced or philosophical content
- Legal documents requiring precise boundaries

## Parameters

### Chunk Size
- **Typical Range**: 256-1024 tokens
- **Small (64-256)**: High precision, high fragmentation
- **Medium (256-512)**: Balanced approach (recommended)
- **Large (512-2048)**: More context, lower retrieval precision

### Unit of Measurement
- **Tokens**: More LLM-aware (requires tokenizer)
- **Characters**: Simple but varies by language
- **Words**: Middle ground approach

## Comparison with Other Strategies

| Aspect | Fixed-size | Recursive | Semantic |
|--------|-----------|-----------|----------|
| Implementation | Very Simple | Simple | Complex |
| Context Quality | Poor | Good | Excellent |
| Speed | Very Fast | Fast | Slow |
| Cost | Low | Low | High |
| Boundary Quality | Poor | Good | Excellent |

## Implementation Considerations

### Boundary Handling
When splitting at exact positions, you may:
- Cut words mid-word
- Separate punctuation from words
- Split special characters

**Solution**: Clean boundaries by:
- Finding nearest whitespace
- Removing incomplete words at boundaries
- Adding/removing tokens as needed

### No Overlap
By default, fixed-size chunks don't overlap, creating information gaps at boundaries.

**Solution**: Add overlap (see Chunk Overlap section) to preserve boundary context.

### Metadata
Each chunk should include:
\`\`\`python
{
    "content": "chunk text",
    "chunk_id": 1,
    "start_pos": 0,
    "end_pos": 512,
    "document_id": "doc_123"
}
\`\`\`

## Performance Metrics

### Retrieval Metrics
- **Precision**: 60-70% (low due to poor boundaries)
- **Recall**: 90%+ (retrieves relevant content but with noise)
- **Speed**: <10ms for index lookup

### Storage
- **Predictable**: Document_size / Chunk_size = Number_of_chunks
- **Minimal**: No redundancy (unless overlap added)

## Best Practices

1. **Choose appropriate size**: Balance between context and precision
2. **Match embedding models**: Use sizes tokens are trained on
3. **Add metadata**: Track source, position, and boundaries
4. **Consider overlap**: Add 10-20% overlap to reduce boundary issues
5. **Test on data**: Validate chunk quality on real documents

## When to Use Fixed-Size Chunking

✓ When simplicity is paramount
✓ For structured, uniform data
✓ When speed is critical
✓ For prototype/MVP systems
✓ As baseline for comparison

✗ When retrieval quality is critical
✗ For diverse document types
✗ When handling nuanced content
✗ For production RAG systems

## Advanced Variations

### Fixed-size with Overlap
Slides window across document with stride < chunk_size, creating overlapping chunks. Reduces boundary issues while maintaining simplicity.

### Token-aware Fixed-size
Uses tokenizer to split by exact token count rather than characters, better aligning with LLM processing.

## Conclusion

Fixed-size chunking is the simplest chunking strategy but comes with trade-offs in retrieval quality. It's best suited for scenarios where simplicity outweighs the need for semantic precision, or as a baseline for prototyping. For production systems requiring high retrieval quality, consider recursive or semantic chunking strategies.
`,dr=`"""
Fixed-size Chunking Implementation
Splits documents into uniform chunks of fixed size (characters or tokens)
"""

from typing import List, Dict, Optional


class FixedSizeChunker:
    """Split documents into fixed-size chunks"""
    
    def __init__(self, chunk_size: int = 512, unit: str = "char"):
        """
        Initialize Fixed-Size Chunker
        
        Args:
            chunk_size: Size of each chunk (characters or tokens)
            unit: "char" for character-based, "token" for token-based
        """
        self.chunk_size = chunk_size
        self.unit = unit
        
    def chunk(self, text: str) -> List[Dict]:
        """
        Split text into fixed-size chunks
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of chunk dictionaries with content and metadata
        """
        if self.unit == "char":
            return self._chunk_by_char(text)
        elif self.unit == "token":
            return self._chunk_by_token(text)
        else:
            raise ValueError(f"Unknown unit: {self.unit}")
    
    def _chunk_by_char(self, text: str) -> List[Dict]:
        """Split by character count"""
        chunks = []
        for i in range(0, len(text), self.chunk_size):
            chunk_text = text[i:i + self.chunk_size]
            chunks.append({
                'content': chunk_text,
                'start_pos': i,
                'end_pos': i + len(chunk_text),
                'size': len(chunk_text),
                'chunk_id': len(chunks)
            })
        return chunks
    
    def _chunk_by_token(self, text: str) -> List[Dict]:
        """Split by approximate token count"""
        words = text.split()
        chunks = []
        current_chunk = []
        current_tokens = 0
        chunk_id = 0
        
        for word in words:
            word_tokens = max(1, len(word) // 4)
            if current_tokens + word_tokens > self.chunk_size:
                if current_chunk:
                    chunk_text = ' '.join(current_chunk)
                    chunks.append({
                        'content': chunk_text,
                        'tokens': current_tokens,
                        'words': len(current_chunk),
                        'chunk_id': chunk_id
                    })
                    chunk_id += 1
                current_chunk = [word]
                current_tokens = word_tokens
            else:
                current_chunk.append(word)
                current_tokens += word_tokens
        
        if current_chunk:
            chunk_text = ' '.join(current_chunk)
            chunks.append({
                'content': chunk_text,
                'tokens': current_tokens,
                'words': len(current_chunk),
                'chunk_id': chunk_id
            })
        
        return chunks


# Example usage
if __name__ == "__main__":
    sample_text = """
    Machine learning is a subset of artificial intelligence.
    It enables computers to learn from data without being explicitly programmed.
    Deep learning is a subset of machine learning that uses neural networks.
    """ * 5
    
    # Character-based chunking
    chunker = FixedSizeChunker(chunk_size=100, unit="char")
    chunks = chunker.chunk(sample_text)
    print(f"Character-based: {len(chunks)} chunks")
    
    # Token-based chunking
    chunker = FixedSizeChunker(chunk_size=50, unit="token")
    chunks = chunker.chunk(sample_text)
    print(f"Token-based: {len(chunks)} chunks")
`,fr=`## Introduction
Recursive chunking is a hierarchical approach that splits documents by natural delimiters in order of precedence. It respects document structure by attempting to split at larger boundaries first (paragraphs), then progressively smaller boundaries (sentences, words) only when necessary to meet size constraints.

## How It Works

### Process Flow
1. **Input**: Document and separator hierarchy
2. **Define Separators**: List delimiters in order of precedence
3. **First Split**: Split by largest delimiter (e.g., double newlines)
4. **Size Check**: If chunks too small, merge adjacent chunks
5. **Recursive Refinement**: For oversized chunks, split by next delimiter
6. **Iterative Process**: Repeat until all chunks meet size requirements
7. **Output**: Variable-sized chunks respecting boundaries

### Separator Hierarchy Example
For general text:
\`\`\`
["\\n\\n", "\\n", " ", ""]  # Paragraphs → Lines → Spaces → Characters
\`\`\`

For code (Python):
\`\`\`
["\\n\\nclass ", "\\n\\ndef ", "\\n\\n", "\\n", " "]  # Classes → Functions → Paragraphs → Lines → Words
\`\`\`

For markdown:
\`\`\`
["# ", "## ", "### ", "\\n\\n", "\\n", " "]  # Headers → Paragraphs → Lines → Words
\`\`\`

## Algorithm

### Pseudocode
\`\`\`python
def recursive_split(text, separators, chunk_size, overlap):
    if len(text.encode()) <= chunk_size:
        return [text]
    
    # Try each separator in order
    for separator in separators:
        if separator in text:
            chunks = text.split(separator)
            good_chunks = []
            
            for chunk in chunks:
                if len(chunk.encode()) <= chunk_size:
                    good_chunks.append(chunk)
                else:
                    # Recursively split this oversized chunk
                    sub_chunks = recursive_split(
                        chunk, 
                        separators[separators.index(separator)+1:],
                        chunk_size, 
                        overlap
                    )
                    good_chunks.extend(sub_chunks)
            
            return merge_and_add_overlap(good_chunks, chunk_size, overlap)
    
    # No separator found, force split at chunk_size
    return force_split(text, chunk_size)
\`\`\`

## Characteristics

### Simplicity: High
- Straightforward logic and implementation
- Relatively easy to customize via separators
- Most RAG systems use this approach

### Computational Cost: Low
- O(n log n) time complexity
- Minimal overhead beyond string operations
- Fast for most documents

### Context Preservation: High
- Respects natural boundaries
- Maintains semantic units
- Rarely splits important phrases

### Flexibility: High
- Customizable separators per document type
- Adapts to different formats
- Easy to extend

### Variable Chunk Sizes: Yes
- Chunks vary based on natural breaks
- Unpredictable sizes but semantically coherent

## Advantages

1. **Boundary Respect**: Honors natural document structure
2. **Semantic Coherence**: Keeps related content together
3. **Flexibility**: Customizable separators for different content types
4. **Simplicity**: Easy to implement and understand
5. **Quality**: Much better retrieval quality than fixed-size
6. **Adaptive**: Works well with diverse document types

## Disadvantages

1. **Variable Sizes**: Chunks can vary significantly
2. **Size Unpredictability**: Difficult to predict exact chunk counts
3. **Separator Dependency**: Quality depends on separator choice
4. **Tuning Required**: May need domain-specific adjustment
5. **Edge Cases**: Some documents may not have expected delimiters

## Use Cases

### Ideal For
- **Books & Articles**: Clear paragraph/sentence structure
- **Technical Documentation**: Hierarchical structure with headers
- **Research Papers**: Well-organized sections
- **News Content**: Lead paragraphs followed by details
- **General Web Content**: Readable, structured text

### Not Ideal For
- **Code Files**: Better with language-specific separators
- **Unstructured Data**: Logs without clear boundaries
- **Mixed Content**: Documents with varying formats

## Parameters

### Chunk Size
- **Target Size**: Desired chunk size in tokens (e.g., 512)
- **Min Size**: Minimum acceptable chunk size (prevents over-fragmentation)
- **Max Size**: Maximum acceptable chunk size (prevents undershoot)

### Separators
- **Order Matters**: Try largest delimiters first
- **Content Type**: Customize for your document type
- **Language-Specific**: Adjust for language and format

### Overlap
- **Typical Range**: 0-20% of chunk size
- **Recommended**: 10-20% for context preservation
- **Calculation**: overlap_tokens = chunk_size × overlap_ratio

## Separator Strategy by Content Type

### Markdown Documents
\`\`\`python
separators = [
    "\\n# ",      # H1 headers
    "\\n## ",     # H2 headers
    "\\n### ",    # H3 headers
    "\\n\\n",      # Paragraphs
    "\\n",        # Lines
    " ",         # Words
    ""           # Characters
]
\`\`\`

### Python Code
\`\`\`python
separators = [
    "\\n\\nclass ",
    "\\n\\ndef ",
    "\\n\\n",
    "\\ndef ",
    "\\nclass ",
    "\\n",
    " ",
    ""
]
\`\`\`

### JavaScript/TypeScript
\`\`\`python
separators = [
    "\\n\\nfunction ",
    "\\n\\nconst ",
    "\\n\\nlet ",
    "\\n\\n",
    "\\nfunction ",
    "\\nconst ",
    "\\nlet ",
    "\\n",
    " ",
    ""
]
\`\`\`

### General Text
\`\`\`python
separators = [
    "\\n\\n",  # Paragraphs
    "\\n",    # Lines
    " ",     # Words
    ""       # Characters
]
\`\`\`

## Implementation Details

### Merging Small Chunks
When splits create chunks below minimum size:
\`\`\`
Chunk 1: 50 tokens (too small)
Chunk 2: 80 tokens (too small)
Result:  Chunk 1+2 = 130 tokens (merged)
\`\`\`

### Handling Oversized Chunks
When a single "unit" exceeds max size:
1. Try next smaller separator
2. Recursively split the large chunk
3. Proceed to next unit in sequence

### Overlap Addition
For chunks with overlap:
\`\`\`
Original Chunks:
Chunk 1: tokens 0-512
Chunk 2: tokens 512-1024

With 20% overlap (102 tokens):
Chunk 1: tokens 0-512
Chunk 2: tokens 410-922 (includes 102-token overlap)
Chunk 3: tokens 922-...
\`\`\`

## Performance Metrics

### Retrieval Quality
- **Precision**: 75-85% (significantly better than fixed-size)
- **Recall**: 95%+ (high coverage)
- **Relevance**: Good semantic alignment

### Efficiency
- **Speed**: <50ms for most documents
- **Storage**: 10-30% more than fixed-size (due to overlap)
- **Predictability**: Semi-predictable chunk counts

## Best Practices

1. **Separator Selection**: Choose separators matching your content structure
2. **Test on Data**: Validate separator choices on actual documents
3. **Add Overlap**: Include 10-20% overlap for context preservation
4. **Document Sizes**: Know expected chunk count and sizes
5. **Monitor Quality**: Track retrieval performance over time
6. **Handle Edge Cases**: Test with unusual or poorly formatted documents
7. **Version Control**: Document separator choices for reproducibility

## Comparison with Alternatives

| Aspect | Recursive | Fixed-size | Semantic |
|--------|-----------|-----------|----------|
| Implementation | Simple | Very Simple | Complex |
| Context Quality | Good | Poor | Excellent |
| Speed | Fast | Very Fast | Slow |
| Cost | Low | Low | High |
| Boundary Quality | Good | Poor | Excellent |
| Customization | High | Low | Medium |

## Common Pitfalls

### 1. Wrong Separator Order
**Problem**: Putting small separators before large ones
**Solution**: Always order from largest to smallest delimiters

### 2. Missing Delimiters
**Problem**: Document type not represented in separators
**Solution**: Add language/format-specific delimiters

### 3. No Overlap
**Problem**: Context lost at chunk boundaries
**Solution**: Add 10-20% overlap

### 4. Poor Merging Strategy
**Problem**: Oversized chunks after merging
**Solution**: Implement size validation before merging

### 5. Insufficient Testing
**Problem**: Good on training data, poor on real data
**Solution**: Test on diverse, representative samples

## When to Use Recursive Chunking

✓ For most RAG applications (recommended default)
✓ For diverse document types
✓ When retrieval quality matters
✓ For structured documents
✓ For general-purpose systems

## Conclusion

Recursive chunking strikes an excellent balance between simplicity and quality. It's the most commonly used strategy in production RAG systems because it respects document structure while remaining easy to implement. By carefully selecting separators for your content type and adding appropriate overlap, you can achieve 75-85% retrieval quality with minimal complexity.
`,pr=`"""
Recursive Chunking Implementation
Splits documents hierarchically by natural delimiters
"""

from typing import List, Dict, Optional


class RecursiveChunker:
    """Split documents recursively by delimiters"""
    
    def __init__(
        self,
        separators: Optional[List[str]] = None,
        chunk_size: int = 512,
        overlap: int = 0,
        min_chunk_size: int = 50
    ):
        """
        Initialize Recursive Chunker
        
        Args:
            separators: List of delimiters to try in order
            chunk_size: Target chunk size in tokens/chars
            overlap: Number of overlapping tokens/chars
            min_chunk_size: Minimum chunk size
        """
        self.separators = separators or ["\\n\\n", "\\n", " ", ""]
        self.chunk_size = chunk_size
        self.overlap = overlap
        self.min_chunk_size = min_chunk_size
        
    def chunk(self, text: str) -> List[Dict]:
        """
        Recursively split text by delimiters
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of chunk dictionaries
        """
        chunks = self._recursive_split(text, self.separators)
        
        # Merge small chunks
        chunks = self._merge_small_chunks(chunks)
        
        # Add overlap if specified
        if self.overlap > 0:
            chunks = self._add_overlap(chunks)
        
        # Add metadata
        for i, chunk in enumerate(chunks):
            chunk['chunk_id'] = i
            chunk['size'] = len(chunk['content'])
        
        return chunks
    
    def _recursive_split(
        self, 
        text: str, 
        separators: List[str],
        depth: int = 0
    ) -> List[Dict]:
        """Recursively split text"""
        if len(text) <= self.chunk_size:
            return [{'content': text}]
        
        if not separators:
            # Force split if no separator left
            return self._force_split(text)
        
        separator = separators[0]
        remaining_separators = separators[1:]
        
        if separator in text:
            splits = text.split(separator)
            chunks = []
            
            for split in splits:
                if len(split) <= self.chunk_size:
                    chunks.append({'content': split})
                else:
                    # Recursively split this part
                    sub_chunks = self._recursive_split(
                        split, remaining_separators, depth + 1
                    )
                    chunks.extend(sub_chunks)
            
            return chunks
        else:
            # Separator not found, try next
            return self._recursive_split(text, remaining_separators, depth + 1)
    
    def _force_split(self, text: str) -> List[Dict]:
        """Force split by size when no separator found"""
        chunks = []
        for i in range(0, len(text), self.chunk_size):
            chunks.append({
                'content': text[i:i + self.chunk_size]
            })
        return chunks
    
    def _merge_small_chunks(self, chunks: List[Dict]) -> List[Dict]:
        """Merge chunks smaller than min_chunk_size"""
        if not chunks:
            return []
        
        merged = []
        current = chunks[0]
        
        for chunk in chunks[1:]:
            if len(current['content']) < self.min_chunk_size:
                current['content'] += '\\n' + chunk['content']
            else:
                merged.append(current)
                current = chunk
        
        merged.append(current)
        return merged
    
    def _add_overlap(self, chunks: List[Dict]) -> List[Dict]:
        """Add overlap between chunks"""
        if len(chunks) <= 1:
            return chunks
        
        overlapped = []
        for i, chunk in enumerate(chunks):
            content = chunk['content']
            
            if i > 0:
                prev_content = chunks[i-1]['content']
                overlap_content = prev_content[-self.overlap:]
                content = overlap_content + content
            
            overlapped.append({'content': content})
        
        return overlapped


# Example usage
if __name__ == "__main__":
    sample_text = """
Section One

This is the first section with detailed content.
It has multiple paragraphs that explore the topic.

Section Two

This is the second section with different information.
It builds on concepts from the first section.

Subsection Two-A

A more detailed part of section two.
Contains specific examples and details.
"""
    
    chunker = RecursiveChunker(
        chunk_size=100,
        overlap=20,
        min_chunk_size=30
    )
    chunks = chunker.chunk(sample_text)
    print(f"Recursive chunking: {len(chunks)} chunks created")
    for i, chunk in enumerate(chunks):
        print(f"  Chunk {i}: {len(chunk['content'])} chars")
`,mr=`## Introduction
Semantic chunking groups text based on meaning similarity rather than predetermined delimiters or fixed sizes. It uses embeddings to analyze semantic distance between sentences and creates chunk boundaries where semantic coherence drops below a threshold.

## How It Works

### Process Flow
1. **Split into Sentences**: Break document into sentences using NLP
2. **Generate Embeddings**: Embed each sentence using embedding model
3. **Calculate Similarity**: Compute cosine similarity between consecutive sentences
4. **Identify Boundaries**: Detect where similarity drops (semantic breaks)
5. **Create Chunks**: Group semantically similar sentences together
6. **Validate Size**: Ensure chunks meet size constraints
7. **Output**: Semantically coherent, variable-sized chunks

### Algorithm
\`\`\`
Sentence 1: "Machine learning transforms how we process data."
Embedding 1: [0.1, 0.4, 0.2, ...]

Sentence 2: "Deep learning models require massive datasets."
Embedding 2: [0.2, 0.5, 0.3, ...]
Similarity(1,2): 0.92 (high - related concepts)

Sentence 3: "The weather forecast predicts rain tomorrow."
Embedding 3: [0.7, 0.1, 0.8, ...]
Similarity(2,3): 0.15 (low - topic change)
↓ CREATE CHUNK BOUNDARY HERE ↓

Chunk 1: "Machine learning transforms how we process data. Deep learning models require massive datasets."
Chunk 2: "The weather forecast predicts rain tomorrow."
\`\`\`

## Characteristics

### Simplicity: Low
- Requires embedding model
- More complex logic
- External dependencies needed

### Computational Cost: High
- Must embed every sentence
- Expensive for long documents
- API costs if using commercial models

### Context Preservation: Very High
- Best semantic coherence
- Minimal context loss
- Optimal for meaning preservation

### Flexibility: Very High
- Adapts to any content type
- Customizable similarity threshold
- Language-agnostic

### Variable Chunk Sizes: Yes
- Highly variable based on content flow
- Can range from single sentence to many

## Advantages

1. **Optimal Boundaries**: Chunks respect semantic transitions
2. **Context Preservation**: Minimal information fragmentation
3. **Language Agnostic**: Works for any language with embeddings
4. **Adaptive**: Automatically adjusts to content changes
5. **High Quality**: Best retrieval performance (85-95% accuracy)
6. **Topic Coherence**: Each chunk is semantically cohesive

## Disadvantages

1. **High Cost**: Embedding every sentence is expensive
2. **Slow**: Requires embedding inference time
3. **Model Dependent**: Quality depends on embedding model
4. **Complex**: More difficult to implement and maintain
5. **Unpredictable**: Variable chunk sizes hard to plan for
6. **Embedding Quality**: Sensitive to embedding model limitations

## Use Cases

### Ideal For
- **High-quality RAG systems**: When retrieval accuracy is critical
- **Nuanced Content**: Philosophy, literature, complex topics
- **Legal/Medical**: Where precision is essential
- **Premium Applications**: When cost isn't a constraint
- **Multilingual**: Diverse language support needed

### Not Ideal For
- **Cost-sensitive**: Limited embedding budget
- **Real-time**: Latency-critical applications
- **High Volume**: Processing millions of documents
- **Low-resource**: Limited compute/API access

## Parameters

### Similarity Threshold
- **Definition**: Cosine similarity cutoff for creating boundaries
- **Typical Range**: 0.5 - 0.7
- **Lower (0.3-0.5)**: More boundaries, smaller chunks
- **Higher (0.7-0.9)**: Fewer boundaries, larger chunks
- **Impact**: Directly affects chunk count and size

### Embedding Model
- **Options**: 
  - OpenAI text-embedding-3-small/large
  - Hugging Face all-MiniLM-L6-v2
  - Cohere Embed
  - Sentence-transformers
- **Dimension**: 256-1536 vectors
- **Context**: Most trained on 256-512 tokens

### Min/Max Chunk Size
- **Min Size**: Prevents over-fragmentation (e.g., 100 tokens)
- **Max Size**: Prevents oversized chunks (e.g., 2048 tokens)
- **Enforcement**: Merge small chunks or split large ones

## Algorithm Details

### Cosine Similarity Calculation
\`\`\`
similarity = (embedding1 · embedding2) / (||embedding1|| × ||embedding2||)
Range: -1 to 1 (typically 0 to 1 for normalized embeddings)
\`\`\`

### Breakpoint Detection
\`\`\`
For each consecutive sentence pair:
  similarity = cosine_similarity(embed_i, embed_i+1)
  if similarity < threshold:
    create_boundary_after(i)
\`\`\`

### Chunk Assembly
\`\`\`
chunks = []
current_chunk = [sentence_0]

for i in range(1, num_sentences):
  if similarity[i-1] >= threshold:
    current_chunk.append(sentence_i)
  else:
    chunks.append(" ".join(current_chunk))
    current_chunk = [sentence_i]

chunks.append(" ".join(current_chunk))
\`\`\`

## Performance Metrics

### Retrieval Quality
- **Precision**: 85-95% (excellent)
- **Recall**: 95%+ (comprehensive)
- **F1 Score**: 0.89-0.95 (very high)
- **Relevance**: Optimal semantic alignment

### Cost and Speed
- **Processing Time**: 0.1-1.0s per 1000 tokens
- **Embedding Cost**: ~$0.02 per 1M tokens (OpenAI)
- **Storage**: Minimal (no overlap by default)
- **Speed**: 5-50x slower than fixed-size

## Comparison with Other Strategies

| Aspect | Semantic | Recursive | Fixed-size |
|--------|----------|-----------|-----------|
| Quality | Excellent | Good | Poor |
| Speed | Slow | Fast | Very Fast |
| Cost | High | Low | Low |
| Complexity | High | Medium | Low |
| Customization | Low | High | None |

## Implementation Considerations

### Sentence Detection
Use robust sentence tokenizers:
- spaCy sentencizer
- NLTK punkt tokenizer
- Hugging Face pipelines

### Batch Processing
For efficiency:
- Batch embeddings (e.g., 32 sentences at once)
- Reuse embedding model across documents
- Cache embeddings for repeated content

### Threshold Tuning
- Start with 0.6 threshold
- Test on sample documents
- Adjust based on retrieval metrics
- Document final threshold

### Size Constraints Handling
\`\`\`
If chunk < min_size:
  Merge with adjacent chunk

If chunk > max_size:
  Split at sentence boundary
  Recursively chunk if needed
\`\`\`

## Cost Analysis

### Example: 10,000-token Document
\`\`\`
Sentences: ~50 (avg 200 tokens each)
Embeddings needed: 50
Cost (OpenAI): 50 × $0.02/1M = $0.000001

For 1M documents:
Cost: ~$1000
Storage: Minimal
\`\`\`

## Embedding Model Selection

### Popular Options

| Model | Dimension | Speed | Cost | Quality |
|-------|-----------|-------|------|---------|
| text-embedding-3-small | 1536 | Fast | $0.02/M | Excellent |
| text-embedding-3-large | 3072 | Medium | $0.13/M | Very High |
| all-MiniLM-L6-v2 | 384 | Very Fast | Free | Good |
| bge-large-en-v1.5 | 1024 | Fast | Free | Excellent |

## Best Practices

1. **Model Choice**: Use quality embedding model (text-embedding-3-small minimum)
2. **Threshold Testing**: Find optimal threshold on representative samples
3. **Batch Processing**: Embed multiple sentences simultaneously
4. **Size Constraints**: Always enforce min/max size limits
5. **Caching**: Cache embeddings to reduce redundant computation
6. **Monitoring**: Track retrieval quality metrics continuously
7. **Documentation**: Record model, threshold, and version

## Advanced Techniques

### Hierarchical Semantic Chunking
- Create chunks at multiple similarity levels
- Enable retrieval at different granularities
- Better for complex documents

### Dynamic Threshold
- Adjust threshold based on content type
- Higher for technical docs, lower for narrative
- Context-aware chunking

### Embedding Reuse
- Cache document embeddings
- Reuse for multiple chunking runs
- Reduces computational cost

## When to Use Semantic Chunking

✓ When retrieval quality is paramount
✓ For premium, high-value applications
✓ With unlimited embedding budget
✓ For nuanced or technical content
✓ When latency is not critical

✗ For real-time applications
✗ With cost constraints
✗ For massive document volumes
✗ When simplicity is needed

## Conclusion

Semantic chunking represents the state-of-the-art in document chunking, providing exceptional retrieval quality by respecting semantic boundaries. While computationally expensive and complex, it's the optimal choice for applications where retrieval accuracy is critical and costs can be justified. For most production systems, recursive chunking provides 80% of the benefits at 10% of the cost.
`,hr=`"""
Semantic Chunking Implementation
Groups text by semantic similarity using embeddings
"""

from typing import List, Dict, Optional
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity


class SemanticChunker:
    """Split documents based on semantic similarity"""
    
    def __init__(
        self,
        similarity_threshold: float = 0.6,
        min_chunk_size: int = 100,
        max_chunk_size: int = 2000
    ):
        """
        Initialize Semantic Chunker
        
        Args:
            similarity_threshold: Similarity cutoff for boundaries
            min_chunk_size: Minimum chunk size
            max_chunk_size: Maximum chunk size
        """
        self.threshold = similarity_threshold
        self.min_chunk_size = min_chunk_size
        self.max_chunk_size = max_chunk_size
    
    def chunk(
        self, 
        text: str,
        embeddings: Optional[List[List[float]]] = None
    ) -> List[Dict]:
        """
        Split text based on semantic similarity
        
        Args:
            text: Input text to chunk
            embeddings: Pre-computed embeddings (optional)
            
        Returns:
            List of semantically coherent chunks
        """
        # Split into sentences
        sentences = self._split_sentences(text)
        
        if len(sentences) < 2:
            return [{'content': text, 'chunk_id': 0}]
        
        # Get or generate embeddings
        if embeddings is None:
            embeddings = self._get_embeddings(sentences)
        
        # Calculate similarities
        similarities = self._calculate_similarities(embeddings)
        
        # Identify boundaries
        boundaries = self._identify_boundaries(similarities)
        
        # Create chunks
        chunks = self._create_chunks(sentences, boundaries)
        
        return chunks
    
    def _split_sentences(self, text: str) -> List[str]:
        """Split text into sentences"""
        import re
        # Simple sentence splitting
        sentences = re.split(r'(?<=[.!?])\\s+', text)
        return [s.strip() for s in sentences if s.strip()]
    
    def _get_embeddings(self, sentences: List[str]) -> List[List[float]]:
        """Generate embeddings for sentences"""
        # Placeholder - in production use actual embedding model
        # Example: OpenAI, HuggingFace, etc.
        embeddings = []
        for sentence in sentences:
            # Simple embedding: one-hot encoding words (placeholder)
            words = sentence.lower().split()
            embedding = [len(sentence) / 100] + [len(w) for w in words[:10]]
            embedding = embedding + [0] * (11 - len(embedding))
            embeddings.append(embedding[:11])
        return embeddings
    
    def _calculate_similarities(
        self, 
        embeddings: List[List[float]]
    ) -> List[float]:
        """Calculate cosine similarity between consecutive sentences"""
        similarities = []
        for i in range(len(embeddings) - 1):
            sim = cosine_similarity(
                [embeddings[i]], 
                [embeddings[i + 1]]
            )[0][0]
            similarities.append(sim)
        return similarities
    
    def _identify_boundaries(self, similarities: List[float]) -> List[int]:
        """Identify chunk boundaries where similarity drops"""
        boundaries = [0]
        for i, sim in enumerate(similarities):
            if sim < self.threshold:
                boundaries.append(i + 1)
        boundaries.append(len(similarities) + 1)
        return list(set(boundaries))
    
    def _create_chunks(
        self, 
        sentences: List[str],
        boundaries: List[int]
    ) -> List[Dict]:
        """Create chunks from boundaries"""
        boundaries = sorted(boundaries)
        chunks = []
        chunk_id = 0
        
        for i in range(len(boundaries) - 1):
            start = boundaries[i]
            end = boundaries[i + 1]
            chunk_sentences = sentences[start:end]
            chunk_text = ' '.join(chunk_sentences)
            
            # Skip if too small
            if len(chunk_text) < self.min_chunk_size:
                continue
            
            # Split if too large
            if len(chunk_text) > self.max_chunk_size:
                sub_chunks = self._split_large_chunk(chunk_text)
                for sub_chunk in sub_chunks:
                    chunks.append({
                        'content': sub_chunk,
                        'chunk_id': chunk_id
                    })
                    chunk_id += 1
            else:
                chunks.append({
                    'content': chunk_text,
                    'chunk_id': chunk_id
                })
                chunk_id += 1
        
        return chunks
    
    def _split_large_chunk(self, text: str, max_size: int = None) -> List[str]:
        """Split oversized chunk"""
        max_size = max_size or self.max_chunk_size
        sentences = self._split_sentences(text)
        
        chunks = []
        current = []
        current_size = 0
        
        for sent in sentences:
            if current_size + len(sent) > max_size:
                if current:
                    chunks.append(' '.join(current))
                current = [sent]
                current_size = len(sent)
            else:
                current.append(sent)
                current_size += len(sent)
        
        if current:
            chunks.append(' '.join(current))
        
        return chunks


# Example usage
if __name__ == "__main__":
    sample_text = """
    Machine learning is transforming industries.
    It enables automated decision making.
    Deep learning uses neural networks.
    These networks process data hierarchically.
    The weather today is sunny.
    Tomorrow might bring rain.
    Weather patterns are changing.
    """
    
    chunker = SemanticChunker(similarity_threshold=0.6)
    chunks = chunker.chunk(sample_text)
    print(f"Semantic chunking: {len(chunks)} chunks created")
    for i, chunk in enumerate(chunks):
        print(f"  Chunk {i}: {chunk['content'][:50]}...")
`,gr=`## Introduction
Token-based chunking splits documents by precise token count using a language model's tokenizer. It provides LLM-aware chunking that guarantees chunks fit within specific token budgets and aligns with how models process text.

## How It Works

### Process Flow
1. **Select Tokenizer**: Choose tokenizer matching target LLM
2. **Tokenize Document**: Convert entire text to token sequence
3. **Split by Count**: Divide tokens into fixed chunks (e.g., 512 tokens)
4. **Decode Chunks**: Convert token sequences back to text
5. **Clean Boundaries**: Fix incomplete words at chunk edges
6. **Add Overlap**: Optionally add token-level overlap
7. **Output**: Token-aligned chunks with exact counts

### Token Distribution Example
\`\`\`
Text: "Machine learning is transforming industries"
GPT Tokens: ["Machine", " learning", " is", " transform", "ing", " industries"]
            [1, 1, 1, 1, 1, 1] = 6 tokens total

Claude Tokens: ["Machine", " learning", " is", " transforming", " industries"]
               [1, 1, 1, 2, 1] = 6 tokens total

Different tokenizers produce different token counts!
\`\`\`

## Characteristics

### Simplicity: Medium
- Requires tokenizer library
- Straightforward splitting logic
- More complex than character-based

### Computational Cost: Medium
- Tokenization overhead
- O(n) complexity
- Reasonable performance

### Context Preservation: Good
- Better than fixed-size chars
- Predictable boundaries
- Respects word boundaries

### Flexibility: Medium
- Works with any model's tokenizer
- Can customize for specific LLMs
- Limited by tokenizer options

### Variable Chunk Sizes: No
- Fixed token counts
- Variable character/word lengths

## Advantages

1. **LLM-Aware**: Matches how models process text
2. **Precise Control**: Guarantees token limits
3. **API Compatible**: Perfect for LLM APIs with token limits
4. **Predictable**: Exactly 512 tokens, never more
5. **Model-Specific**: Can optimize for particular models
6. **Boundary Respect**: Maintains word boundaries

## Disadvantages

1. **Tokenizer Dependency**: Requires tokenizer for each model
2. **Complexity**: More complex than character-based
3. **Mid-word Splits**: Can still split at char boundaries (rare)
4. **Different Models**: Same text = different token counts
5. **Computational Cost**: Tokenization adds overhead
6. **Not Semantic**: Ignores semantic boundaries

## Use Cases

### Ideal For
- **Production RAG**: When API limits are strict
- **Cost Optimization**: Precise token budgeting
- **Multi-Model**: Supporting multiple LLMs
- **Token-Budget Systems**: Applications with token constraints
- **API Integration**: Direct LLM API usage

### Not Ideal For
- **Semantic Quality**: No semantic awareness
- **Offline Processing**: Heavy tokenization overhead
- **Simple Systems**: Overkill for basic needs

## Parameters

### Chunk Size
- **Typical Range**: 256-1024 tokens
- **Small (128-256)**: High precision retrieval
- **Medium (256-512)**: Balanced approach (recommended)
- **Large (512-1024)**: More context per chunk

### Overlap
- **Typical Range**: 20-100 tokens
- **Percentage**: 5-20% overlap ratio
- **Purpose**: Bridge chunk boundaries

### Tokenizer Selection
- **OpenAI**: tiktoken (GPT models)
- **Anthropic**: claude tokenizer
- **Hugging Face**: transformers library
- **Google**: sentence-piece

## Common Tokenizers

### tiktoken (OpenAI)
\`\`\`python
import tiktoken
enc = tiktoken.encoding_for_model("gpt-3.5-turbo")
tokens = enc.encode("Hello world")
\`\`\`

### transformers (Hugging Face)
\`\`\`python
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
tokens = tokenizer.encode("Hello world")
\`\`\`

### Anthropic Claude
\`\`\`python
# Uses similar encoding to GPT
# Approximately 4 chars per token average
\`\`\`

## Token Counting Comparison

Same text, different models:
\`\`\`
Text: "Machine learning enables artificial intelligence applications"

OpenAI GPT-3.5:   ["Machine", " learning", " enables", " artificial", " intelligence", " applications"] = 6 tokens
OpenAI GPT-4:     ["Machine", " learning", " enables", " artificial", " intelligence", " applications"] = 6 tokens
Claude 3:         ["Machine", " learning", " enables", " artificial", " intelligence", " applications"] = 6 tokens

But for technical content:
"ValueError: index out of range"
GPT-3.5:          ["ValueError", ":", " index", " out", " of", " range"] = 6 tokens
Claude 3:         ["ValueError", ":", " index", " out", " of", " range"] = 6 tokens
\`\`\`

## Implementation Details

### Character to Token Ratio
- **English**: ~4 characters per token (average)
- **Code**: ~3-4 characters per token
- **Technical**: ~3-5 characters per token
- **Asian Languages**: ~1-2 characters per token

### Boundary Cleaning
When splitting at token boundaries, may get:
\`\`\`
Original: "Machine learning is transformative"
Split at token 2: "Machine learning[INCOMPLETE: is tran]"
Cleaned: "Machine learning"  # Remove incomplete token
\`\`\`

### Overlap Implementation
\`\`\`
Chunk 1: tokens[0:512]
Chunk 2: tokens[410:922]  # 102 tokens overlap (20%)
Chunk 3: tokens[820:1332]
...
\`\`\`

## Performance Metrics

### Accuracy
- **Token Precision**: 100% (exact token counts)
- **Boundary Accuracy**: 95%+ (respects word boundaries)
- **API Compliance**: 100% (guaranteed fit)

### Efficiency
- **Speed**: 10-50ms for 50K token document
- **Memory**: Minimal (token stream only)
- **Storage**: Predictable

## Comparison with Other Strategies

| Aspect | Token-based | Fixed-char | Semantic |
|--------|------------|-----------|----------|
| LLM-Aware | Excellent | Poor | Medium |
| Speed | Medium | Very Fast | Slow |
| Precision | Good | Poor | Excellent |
| Control | High | Medium | Low |
| Complexity | Medium | Low | High |

## Cost Analysis

### Tokenization Overhead
- **Small docs**: <1ms
- **Medium docs**: 10-50ms
- **Large docs**: 100-500ms
- **Total**: Usually <2% of processing time

### Storage
- **Token Stream Cache**: ~2 bytes per token
- **10M token corpus**: ~20MB cache
- **Manageable**: Reasonable storage footprint

## Best Practices

1. **Choose Model-Specific Tokenizer**: Match your LLM
2. **Test Token Counts**: Verify on sample documents
3. **Add Overlap**: Include 20% overlap for context
4. **Cache Tokens**: Avoid retokenizing same content
5. **Monitor Boundaries**: Ensure quality of split points
6. **Document Settings**: Record tokenizer version and settings
7. **Version Control**: Update if tokenizer changes

## When to Use Token-Based Chunking

✓ For LLM API integration
✓ When token budgets are strict
✓ For multi-model systems
✓ Production systems with cost tracking
✓ When integration with APIs matters

✗ For semantic quality focus
✗ Offline processing without tokenizer
✗ Simple prototypes
✗ When character boundaries matter

## Advanced Considerations

### Model-Specific Optimization
- Different models tokenize differently
- Create chunks for specific LLMs
- No "universal" tokens

### Tokenizer Versioning
- Tokenizers change across versions
- GPT-3 vs GPT-4 tokenizers differ slightly
- Document exact tokenizer version used

### Hybrid Approach
Combine token-based with other strategies:
- Token-based splitting
- Then verify semantic coherence
- Best of both worlds

## Conclusion

Token-based chunking is essential for production RAG systems that interface with LLM APIs. By using the exact tokenizer of your target model, you ensure chunks fit perfectly within context windows and API limits. While not semantically optimized, token-based chunking provides precise control and is the recommended approach for most production systems.
`,_r=`"""
Token-based Chunking Implementation
Splits documents by exact token count
"""

from typing import List, Dict, Optional


class TokenBasedChunker:
    """Split documents by token count"""
    
    def __init__(
        self,
        chunk_size: int = 512,
        overlap: int = 0,
        tokenizer: str = "simple"
    ):
        """
        Initialize Token-based Chunker
        
        Args:
            chunk_size: Number of tokens per chunk
            overlap: Number of overlapping tokens
            tokenizer: "simple" or tokenizer function name
        """
        self.chunk_size = chunk_size
        self.overlap = overlap
        self.tokenizer_type = tokenizer
    
    def chunk(self, text: str) -> List[Dict]:
        """
        Split text by token count
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of token-aligned chunks
        """
        # Tokenize
        tokens = self._tokenize(text)
        
        # Create chunks
        chunks = []
        stride = self.chunk_size - self.overlap
        
        for i in range(0, len(tokens), stride):
            end = min(i + self.chunk_size, len(tokens))
            chunk_tokens = tokens[i:end]
            chunk_text = self._detokenize(chunk_tokens)
            
            chunks.append({
                'content': chunk_text,
                'tokens': len(chunk_tokens),
                'start_token': i,
                'end_token': end,
                'chunk_id': len(chunks),
                'has_overlap': i > 0 and i < len(tokens) - self.chunk_size
            })
        
        return chunks
    
    def _tokenize(self, text: str) -> List[str]:
        """Tokenize text"""
        if self.tokenizer_type == "simple":
            # Simple space-based tokenization
            return text.split()
        else:
            # Placeholder for more sophisticated tokenizers
            # In production use: tiktoken, transformers, etc.
            return text.split()
    
    def _detokenize(self, tokens: List[str]) -> str:
        """Convert tokens back to text"""
        return ' '.join(tokens)


# Example usage
if __name__ == "__main__":
    sample_text = """
    Machine learning is a subset of artificial intelligence.
    It enables computers to learn from data without being explicitly programmed.
    Deep learning is a subset of machine learning.
    Neural networks are inspired by biological neural systems.
    """ * 3
    
    chunker = TokenBasedChunker(chunk_size=30, overlap=5)
    chunks = chunker.chunk(sample_text)
    print(f"Token-based chunking: {len(chunks)} chunks")
    for i, chunk in enumerate(chunks[:3]):
        print(f"  Chunk {i}: {chunk['tokens']} tokens")
`,vr=`## Introduction
Sentence chunking breaks documents at sentence boundaries, grouping one or more complete sentences into each chunk. It maintains natural language flow while providing reasonable semantic coherence by preserving sentence integrity.

## How It Works

### Process Flow
1. **Input**: Raw document text
2. **Sentence Detection**: Identify sentence boundaries using NLP
3. **Group Sentences**: Combine consecutive sentences until reaching size threshold
4. **Handle Edge Cases**: Manage abbreviations, numbers, special punctuation
5. **Validate Chunks**: Ensure each chunk contains complete sentences
6. **Add Metadata**: Track sentence positions and boundaries
7. **Output**: Sentence-aligned chunks with variable sizes

### Example
\`\`\`
Text: "The company was founded in 1998. It grew rapidly. 
By 2010, it had 1000 employees. Market expansion continued. 
The IPO occurred in 2015."

Chunks (target: 2-3 sentences per chunk):
Chunk 1: "The company was founded in 1998. It grew rapidly."
Chunk 2: "By 2010, it had 1000 employees. Market expansion continued."
Chunk 3: "The IPO occurred in 2015."
\`\`\`

## Characteristics

### Simplicity: Medium
- Requires NLP library
- Straightforward grouping logic
- Easy to understand and implement

### Computational Cost: Low
- Sentence detection is fast
- Minimal overhead
- NLP libraries are optimized

### Context Preservation: Good
- Complete sentences preserved
- Natural reading flow
- Good semantic units

### Flexibility: Medium
- Customizable sentence detector
- Adjustable sentences per chunk
- Language-specific libraries available

### Variable Chunk Sizes: Yes
- Varies based on sentence lengths
- Unpredictable but coherent sizes

## Advantages

1. **Readability**: Each chunk is readable text
2. **Natural Flow**: Preserves writing structure
3. **Simplicity**: Easy to implement with NLP libraries
4. **Reliability**: Consistent with human understanding
5. **Semantic Quality**: Better than fixed-size approaches
6. **Language Support**: Works across languages

## Disadvantages

1. **Variable Sizes**: Sentences vary widely in length
2. **Size Unpredictability**: Can't guarantee max size
3. **Sentence Detector Issues**: Abbreviations, decimals confuse detectors
4. **NLP Dependency**: Requires external library
5. **Over-fragmentation**: Short sentences = many chunks
6. **Context Gaps**: No overlap between sentences by default

## Use Cases

### Ideal For
- **News Articles**: Structured journalistic content
- **Blog Posts**: Natural paragraph structure
- **Social Media**: Pre-written posts and threads
- **Customer Support**: FAQ and help documentation
- **General Web Content**: Readable, well-written text
- **Comments & Reviews**: Natural language posts

### Not Ideal For
- **Code**: No sentence structure
- **Logs**: Unstructured output
- **Mixed Content**: Varying formats
- **Highly Variable Lengths**: Huge sentence length differences

## Parameters

### Target Sentences Per Chunk
- **Typical Range**: 2-5 sentences
- **Small (1-2)**: High fragmentation, precision
- **Medium (2-4)**: Balanced (recommended)
- **Large (5-10)**: Broad context, fewer chunks

### Max Chunk Size (tokens)
- **Typical Range**: 1000-2000 tokens
- **Fallback**: If grouped sentences exceed this
- **Safety**: Prevents oversized chunks

### Sentence Detector
- **spaCy**: Production-quality (recommended)
- **NLTK**: Versatile, multiple languages
- **Transformers**: Deep learning based
- **Regular Expressions**: Simple but error-prone

## NLP Libraries Comparison

### spaCy
\`\`\`python
import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp(text)
sentences = [sent.text for sent in doc.sents]
\`\`\`
**Pros**: Production-ready, fast, accurate
**Cons**: Requires model download, heavier library

### NLTK
\`\`\`python
from nltk import sent_tokenize
sentences = sent_tokenize(text)
\`\`\`
**Pros**: Simple, multilingual, well-documented
**Cons**: Slower, occasional errors

### Transformers
\`\`\`python
from transformers import pipeline
splitter = pipeline("sentence-transformers", model="...")
sentences = splitter(text)
\`\`\`
**Pros**: Very accurate, handles complex cases
**Cons**: Slow, resource-intensive

## Handling Edge Cases

### Abbreviations
\`\`\`
Text: "Dr. Smith works at M.I.T. He studies AI."
Issue: Periods create false sentence boundaries
Solution: Abbreviation dictionary or NLP model handling
\`\`\`

### Decimal Numbers
\`\`\`
Text: "The accuracy is 0.95. It improved significantly."
Issue: Period after number looks like sentence end
Solution: NLP model recognizes context
\`\`\`

### Quotations
\`\`\`
Text: "She said 'Hello world.' Then she left."
Issue: Period in quote might confuse detector
Solution: Proper quote handling in NLP model
\`\`\`

### Lists
\`\`\`
Text: "Benefits: 1. Health 2. Dental 3. Vision"
Issue: Periods in list format
Solution: Context-aware detection
\`\`\`

## Performance Metrics

### Accuracy
- **Sentence Detection**: 95-99% (with good library)
- **Boundary Quality**: Good semantic alignment
- **Readability**: Excellent

### Efficiency
- **Speed**: <5ms per 10K tokens
- **Memory**: Minimal
- **Storage**: 10-20% more than fixed-size

## Algorithm

### Pseudocode
\`\`\`python
def sentence_chunk(text, target_sentences=3, max_tokens=2000):
    # Detect sentences
    sentences = detect_sentences(text)
    
    chunks = []
    current_chunk = []
    current_tokens = 0
    
    for sentence in sentences:
        sentence_tokens = count_tokens(sentence)
        
        # Check if adding this sentence exceeds limit
        if current_tokens + sentence_tokens > max_tokens:
            if current_chunk:
                chunks.append(" ".join(current_chunk))
            current_chunk = [sentence]
            current_tokens = sentence_tokens
        else:
            current_chunk.append(sentence)
            current_tokens += sentence_tokens
            
            # Split if reached target sentence count
            if len(current_chunk) >= target_sentences:
                chunks.append(" ".join(current_chunk))
                current_chunk = []
                current_tokens = 0
    
    # Add remaining
    if current_chunk:
        chunks.append(" ".join(current_chunk))
    
    return chunks
\`\`\`

## Comparison with Other Strategies

| Aspect | Sentence | Paragraph | Token-based |
|--------|----------|-----------|------------|
| Readability | Excellent | Good | Poor |
| Consistency | Medium | Low | High |
| Speed | Fast | Very Fast | Medium |
| Quality | Good | Fair | Good |
| Predictability | Medium | Low | High |

## Best Practices

1. **Choose Quality Detector**: Use spaCy or NLTK
2. **Test on Data**: Validate on actual documents
3. **Set Reasonable Limits**: 2-4 sentences typical
4. **Handle Edge Cases**: Test with numbers, abbreviations
5. **Add Overlap**: Include surrounding sentences for context
6. **Monitor Quality**: Track retrieval performance
7. **Language-Specific**: Use appropriate models for language

## When to Use Sentence Chunking

✓ For well-written, readable content
✓ News, blogs, articles
✓ Customer communication
✓ Natural language text
✓ When readability matters

✗ For code or technical data
✗ Highly variable content
✗ Unstructured data
✗ When predictability needed

## Advanced Variations

### Dynamic Sentence Grouping
Adjust target sentences based on:
- Average sentence length
- Document domain
- Content type

### Hybrid Approach
Combine sentence detection with:
- Token limits
- Semantic similarity checks
- Paragraph boundaries

## Conclusion

Sentence chunking provides a good balance between simplicity and quality. By respecting sentence boundaries, it maintains natural language flow and readability while achieving 75-80% retrieval quality. Best suited for well-written, structured content where readability and natural boundaries matter.
`,yr=`"""
Sentence Chunking Implementation
Groups complete sentences into chunks
"""

from typing import List, Dict
import re


class SentenceChunker:
    """Split documents by sentence boundaries"""
    
    def __init__(
        self,
        target_sentences: int = 3,
        max_chunk_size: int = 2000
    ):
        """
        Initialize Sentence Chunker
        
        Args:
            target_sentences: Target sentences per chunk
            max_chunk_size: Maximum chunk size in characters
        """
        self.target_sentences = target_sentences
        self.max_chunk_size = max_chunk_size
    
    def chunk(self, text: str) -> List[Dict]:
        """
        Split text into sentence-based chunks
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of sentence-aligned chunks
        """
        sentences = self._split_sentences(text)
        chunks = []
        current_chunk = []
        current_size = 0
        chunk_id = 0
        
        for sentence in sentences:
            sentence = sentence.strip()
            if not sentence:
                continue
            
            sentence_size = len(sentence)
            
            # Check if adding sentence exceeds limit
            if current_size + sentence_size > self.max_chunk_size:
                if current_chunk:
                    chunks.append({
                        'content': ' '.join(current_chunk),
                        'sentences': len(current_chunk),
                        'size': current_size,
                        'chunk_id': chunk_id
                    })
                    chunk_id += 1
                current_chunk = [sentence]
                current_size = sentence_size
            else:
                current_chunk.append(sentence)
                current_size += sentence_size + 1  # +1 for space
                
                # Split if reached target
                if len(current_chunk) >= self.target_sentences:
                    chunks.append({
                        'content': ' '.join(current_chunk),
                        'sentences': len(current_chunk),
                        'size': current_size,
                        'chunk_id': chunk_id
                    })
                    chunk_id += 1
                    current_chunk = []
                    current_size = 0
        
        # Add remaining
        if current_chunk:
            chunks.append({
                'content': ' '.join(current_chunk),
                'sentences': len(current_chunk),
                'size': current_size,
                'chunk_id': chunk_id
            })
        
        return chunks
    
    def _split_sentences(self, text: str) -> List[str]:
        """Split text into sentences"""
        # Simple sentence splitting on periods, exclamation, question marks
        sentences = re.split(r'(?<=[.!?])\\s+', text)
        return sentences


# Example usage
if __name__ == "__main__":
    sample_text = """
    The company was founded in 1998. It grew rapidly.
    By 2010, it had 1000 employees. Market expansion continued.
    The IPO occurred in 2015. Revenue increased significantly.
    """
    
    chunker = SentenceChunker(target_sentences=2)
    chunks = chunker.chunk(sample_text)
    print(f"Sentence chunking: {len(chunks)} chunks")
    for i, chunk in enumerate(chunks):
        print(f"  Chunk {i}: {chunk['sentences']} sentences")
`,br=`## Introduction
Paragraph chunking groups complete paragraphs as individual chunks. It preserves document structure by treating paragraphs as semantic units, though chunks may vary significantly in size since paragraphs have variable lengths.

## How It Works

### Process Flow
1. **Input**: Formatted document with clear paragraph breaks
2. **Detect Paragraphs**: Identify paragraph boundaries (blank lines, indentation)
3. **Group Small Paragraphs**: Merge short paragraphs to meet minimum size
4. **Split Large Paragraphs**: For oversized paragraphs, split at sentence level
5. **Maintain Structure**: Keep original formatting and relationships
6. **Add Metadata**: Track paragraph positions and groups
7. **Output**: Paragraph-aligned chunks

### Example
\`\`\`
Document:
---
The company was founded in 1998.
It grew rapidly in its early years.

By 2010, it had 1000 employees.
Market expansion continued globally.
International offices opened in 5 countries.

The IPO occurred in 2015.
---

Chunks:
Chunk 1: "The company was founded in 1998. It grew rapidly in its early years."
Chunk 2: "By 2010, it had 1000 employees. Market expansion continued globally. 
          International offices opened in 5 countries."
Chunk 3: "The IPO occurred in 2015."
\`\`\`

## Characteristics

### Simplicity: Very High
- No external libraries needed
- Simple delimiter detection
- Easy implementation

### Computational Cost: Very Low
- Just string operations
- Minimal processing
- Instant execution

### Context Preservation: Medium
- Preserves paragraph structure
- May split related concepts
- Semantic coherence within paragraphs

### Flexibility: Low
- Limited customization
- Assumes good formatting
- Format-dependent

### Variable Chunk Sizes: Yes
- Highly variable based on paragraph lengths
- Unpredictable chunk counts

## Advantages

1. **Simplicity**: Very easy to implement
2. **Structure Preservation**: Maintains document hierarchy
3. **No Dependencies**: Requires no external libraries
4. **Semantic Units**: Paragraphs are natural semantic boundaries
5. **Speed**: Very fast processing
6. **Readability**: Chunks are readable paragraphs

## Disadvantages

1. **Highly Variable Sizes**: Paragraphs vary widely
2. **Size Unpredictability**: Can't guarantee max size
3. **Format Dependency**: Requires consistent formatting
4. **Oversized Chunks**: Long paragraphs may exceed limits
5. **Undershoot**: Some documents have very short paragraphs
6. **Fragmentation**: May create many small chunks

## Use Cases

### Ideal For
- **Essays**: Well-structured academic writing
- **Research Papers**: Formal document structure
- **Business Reports**: Professional formatting
- **Blogs**: Clear paragraph organization
- **Well-Formatted Docs**: Consistent structure

### Not Ideal For
- **Unstructured Text**: No clear paragraphs
- **Code**: No paragraph concept
- **Mixed Content**: Inconsistent formatting
- **Logs**: Stream format without structure
- **Highly Variable**: Extreme size differences

## Parameters

### Paragraph Delimiter
- **Default**: Double newline ("\\\\n\\\\n")
- **Indentation**: Tabs or spaces (HTML, Markdown)
- **Custom**: Domain-specific markers
- **Regex**: Complex patterns for special cases

### Min Chunk Size
- **Typical**: 50-100 tokens
- **Purpose**: Avoid fragmentation
- **Action**: Merge smaller paragraphs

### Max Chunk Size
- **Typical**: 1500-2000 tokens
- **Purpose**: Prevent oversized chunks
- **Action**: Split large paragraphs at sentences

### Merging Strategy
- **Sequential**: Merge consecutive small paragraphs
- **Semantic**: Group related paragraphs
- **By Position**: Merge paragraphs near boundaries

## Implementation Details

### Paragraph Detection
\`\`\`python
# Simple approach
paragraphs = text.split("\\n\\n")

# More robust
import re
paragraphs = re.split(r"\\n\\s*\\n", text)

# Handle different newlines
paragraphs = re.split(r"(\\r?\\n){2,}", text)
\`\`\`

### Merging Small Paragraphs
\`\`\`
Original:
Paragraph 1: 30 tokens (too small)
Paragraph 2: 80 tokens (okay)
Paragraph 3: 40 tokens (too small)

Result:
Chunk 1: 30 + 80 = 110 tokens (merged)
Chunk 2: 40 tokens (too small, flag for review)
\`\`\`

### Handling Large Paragraphs
\`\`\`
Paragraph: 2500 tokens (exceeds max 2000)
Action: Split at sentence boundaries
Chunk 1: ~1000 tokens
Chunk 2: ~1500 tokens
\`\`\`

## Performance Metrics

### Efficiency
- **Speed**: <1ms for most documents
- **Memory**: Minimal overhead
- **Storage**: No redundancy

### Quality
- **Semantic Coherence**: Good within paragraphs
- **Retrieval Quality**: Fair (60-70%)
- **Consistency**: Variable chunk sizes

## Algorithm Pseudocode

\`\`\`python
def paragraph_chunk(text, min_size=100, max_size=2000):
    # Detect paragraphs
    raw_paragraphs = text.split("\\n\\n")
    
    # Filter empty
    paragraphs = [p.strip() for p in raw_paragraphs if p.strip()]
    
    chunks = []
    current_chunk = []
    current_size = 0
    
    for para in paragraphs:
        para_size = count_tokens(para)
        
        # Check max size
        if current_size + para_size > max_size:
            # Flush current chunk if exists
            if current_chunk:
                chunks.append("\\n\\n".join(current_chunk))
            # Handle oversized paragraph
            if para_size > max_size:
                # Split at sentence level
                sentences = split_sentences(para)
                sub_chunks = group_sentences(sentences, max_size)
                chunks.extend(sub_chunks)
            else:
                current_chunk = [para]
                current_size = para_size
        else:
            current_chunk.append(para)
            current_size += para_size
    
    # Add remaining
    if current_chunk:
        chunk_text = "\\n\\n".join(current_chunk)
        if count_tokens(chunk_text) >= min_size:
            chunks.append(chunk_text)
    
    return chunks
\`\`\`

## Comparison with Other Strategies

| Aspect | Paragraph | Sentence | Recursive |
|--------|-----------|----------|-----------|
| Simplicity | Very High | Medium | High |
| Variable Size | Very High | High | High |
| Speed | Very Fast | Fast | Fast |
| Quality | Fair | Good | Good |
| Structure | Excellent | Good | Good |

## Format Detection

### Markdown
\`\`\`markdown
# Heading

Paragraph 1 text here.

Paragraph 2 text here.
\`\`\`
**Delimiter**: \`\\n\\n\`

### HTML
\`\`\`html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
\`\`\`
**Delimiter**: \`</p>\\n<p>\`

### Plain Text
\`\`\`
Paragraph 1 text.

Paragraph 2 text.
\`\`\`
**Delimiter**: \`\\n\\n\` or \`\\n\\r\\n\`

## Best Practices

1. **Validate Formatting**: Ensure consistent paragraph breaks
2. **Handle Edge Cases**: Test with various formats
3. **Set Size Limits**: Enforce min/max sizes
4. **Monitor Quality**: Track retrieval performance
5. **Document Format**: Record expected delimiter
6. **Fallback Strategy**: Handle malformed documents

## When to Use Paragraph Chunking

✓ For well-formatted documents
✓ Essays and academic writing
✓ When simplicity matters
✓ Prototype systems
✓ Documents with clear structure

✗ For unstructured content
✗ Inconsistent formatting
✗ Highly variable paragraph sizes
✗ When predictability needed
✗ Production systems with quality focus

## Advanced Variations

### Multi-level Paragraphs
Support nested paragraphs (bullets, sub-sections).

### Format-Aware Chunking
Detect and handle different formats automatically.

### Smart Merging
Use semantic similarity to merge related paragraphs.

## Conclusion

Paragraph chunking is the simplest strategy but comes with trade-offs in size predictability and retrieval quality. Best suited for well-formatted, structured documents where simplicity is preferred over precise control. For most RAG systems requiring higher quality, recursive or semantic chunking is recommended.
`,xr=`"""
Paragraph Chunking Implementation
Groups complete paragraphs into chunks
"""

from typing import List, Dict
import re


class ParagraphChunker:
    """Split documents by paragraph boundaries"""
    
    def __init__(
        self,
        min_chunk_size: int = 50,
        max_chunk_size: int = 2000,
        paragraph_delimiter: str = "\\n\\n"
    ):
        """
        Initialize Paragraph Chunker
        
        Args:
            min_chunk_size: Minimum chunk size
            max_chunk_size: Maximum chunk size
            paragraph_delimiter: String that marks paragraph breaks
        """
        self.min_chunk_size = min_chunk_size
        self.max_chunk_size = max_chunk_size
        self.delimiter = paragraph_delimiter
    
    def chunk(self, text: str) -> List[Dict]:
        """
        Split text by paragraph boundaries
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of paragraph-aligned chunks
        """
        # Split into paragraphs
        paragraphs = self._split_paragraphs(text)
        paragraphs = [p.strip() for p in paragraphs if p.strip()]
        
        chunks = []
        current_chunk = []
        current_size = 0
        chunk_id = 0
        
        for para in paragraphs:
            para_size = len(para)
            
            # Check if adding paragraph exceeds limit
            if current_size + para_size > self.max_chunk_size:
                if current_chunk:
                    chunk_text = "\\n\\n".join(current_chunk)
                    if len(chunk_text) >= self.min_chunk_size:
                        chunks.append({
                            'content': chunk_text,
                            'paragraphs': len(current_chunk),
                            'size': current_size,
                            'chunk_id': chunk_id
                        })
                        chunk_id += 1
                current_chunk = [para]
                current_size = para_size
            else:
                current_chunk.append(para)
                current_size += para_size
        
        # Add remaining
        if current_chunk:
            chunk_text = "\\n\\n".join(current_chunk)
            if len(chunk_text) >= self.min_chunk_size:
                chunks.append({
                    'content': chunk_text,
                    'paragraphs': len(current_chunk),
                    'size': current_size,
                    'chunk_id': chunk_id
                })
        
        return chunks
    
    def _split_paragraphs(self, text: str) -> List[str]:
        """Split text by paragraph delimiter"""
        return text.split(self.delimiter)


# Example usage
if __name__ == "__main__":
    sample_text = """The company was founded in 1998.

It grew rapidly in the early years.

By 2010, it had 1000 employees.

Market expansion continued globally.

The IPO occurred in 2015."""
    
    chunker = ParagraphChunker()
    chunks = chunker.chunk(sample_text)
    print(f"Paragraph chunking: {len(chunks)} chunks")
    for i, chunk in enumerate(chunks):
        print(f"  Chunk {i}: {chunk['paragraphs']} paragraphs")
`,Sr=`## Introduction
Parent-child chunking creates hierarchical chunk structures where detailed "child" chunks are grouped under larger "parent" chunks. Parents typically contain summaries or overview content, while children contain detailed information. This enables flexible retrieval at different granularity levels.

## How It Works

### Process Flow
1. **Input**: Large document
2. **Create Child Chunks**: Split into detailed chunks (256-512 tokens)
3. **Group Children**: Combine related child chunks (3-5 per parent)
4. **Generate Summaries**: Create parent summaries from grouped children
5. **Establish Links**: Create parent-child relationships
6. **Index Both**: Store both levels in retrieval system
7. **Implement Retrieval**: Support queries at both levels
8. **Output**: Hierarchical chunk structure

### Structure Example
\`\`\`
Document: "Machine Learning Fundamentals"

Parent Chunk 1 (Summary):
"Overview of ML algorithms and their applications in industry..."

├─ Child Chunk 1: "Supervised Learning"
├─ Child Chunk 2: "Classification Algorithms"
└─ Child Chunk 3: "Regression Models"

Parent Chunk 2 (Summary):
"Deep learning techniques and neural network architectures..."

├─ Child Chunk 4: "Neural Networks Basics"
├─ Child Chunk 5: "Convolutional Networks"
└─ Child Chunk 6: "Recurrent Networks"
\`\`\`

## Characteristics

### Simplicity: Low
- Complex implementation
- Multiple processing steps
- Requires careful orchestration

### Computational Cost: High
- Chunking costs
- Summary generation (LLM calls)
- Hierarchical indexing

### Context Preservation: Very High
- Parents provide overview context
- Children provide detailed context
- Flexible retrieval options

### Flexibility: Very High
- Multiple granularity levels
- Adaptable to any document
- Supports various retrieval strategies

### Variable Chunk Sizes: Yes
- Both parent and child vary
- Unpredictable but coherent

## Advantages

1. **Flexible Retrieval**: Query at child or parent level
2. **Efficient Search**: Parent summaries speed initial filtering
3. **Context Hierarchy**: Overview + detail structure
4. **Scalability**: Better for large documents
5. **Multiple Strategies**: Support different query patterns
6. **Semantic Coherence**: Both levels meaningful

## Disadvantages

1. **Complex**: Harder to implement
2. **High Cost**: Summary generation expensive
3. **Storage**: Doubled storage (both levels)
4. **Indexing**: More complex retrieval logic
5. **Maintenance**: Keep hierarchy in sync
6. **Latency**: Additional processing steps

## Use Cases

### Ideal For
- **Long Documents**: Books, theses, comprehensive guides
- **Complex Domains**: Technical, medical, legal content
- **Multi-level Queries**: Need flexibility in depth
- **Knowledge Bases**: Hierarchical information
- **Enterprise Search**: Large document collections

### Not Ideal For
- **Cost-Sensitive**: Summary generation overhead
- **Simple Documents**: Overkill for short content
- **Real-time**: Latency-critical applications
- **One-level Retrieval**: No need for hierarchy

## Parameters

### Child Chunk Size
- **Typical Range**: 256-512 tokens
- **Purpose**: Detailed, focused content
- **Trade-off**: Smaller = more chunks

### Children per Parent
- **Typical Range**: 3-5 chunks
- **Small**: 2-3 for dense content
- **Large**: 5-7 for sparse content

### Parent Chunk Size
- **Typical Range**: 1000-2000 tokens
- **Calculation**: Children size × children count
- **Variable**: Depends on summary length

### Summary Method
- **LLM Summarization**: High quality but expensive
- **Extractive**: Select key sentences from children
- **Hybrid**: Combine both approaches

## Summary Generation

### LLM-based Summarization
\`\`\`
Children:
1. "Supervised learning trains on labeled examples..."
2. "Classification predicts discrete categories..."
3. "Regression predicts continuous values..."

Prompt: "Summarize these three chunks concisely."

Parent Summary:
"Supervised learning encompasses classification for
discrete outcomes and regression for continuous values,
both trained on labeled data examples."
\`\`\`

### Extractive Summarization
\`\`\`
Select top sentences from children:
- "Supervised learning trains on labeled examples."
- "Classification predicts discrete categories."
- Summary combines these into parent chunk.
\`\`\`

## Hierarchical Levels

### Two-Level Hierarchy
\`\`\`
Level 1 (Parents): 1000-2000 tokens (overview)
Level 2 (Children): 256-512 tokens (detail)

Ratio: 1 parent per 3-5 children
\`\`\`

### Three-Level Hierarchy
\`\`\`
Level 1 (Grandparents): 3000-5000 tokens (document overview)
Level 2 (Parents): 1000-2000 tokens (section overview)
Level 3 (Children): 256-512 tokens (detail)

More complex but maximum flexibility
\`\`\`

## Retrieval Strategies

### Parent-First Retrieval
1. Retrieve relevant parents (summaries)
2. If needed, retrieve children from matched parents
3. Cost-efficient for broad queries

### Child-First Retrieval
1. Retrieve detailed children chunks
2. Optionally include parent for context
3. Best for specific queries

### Hybrid Retrieval
1. Retrieve both parents and children
2. Combine results based on relevance
3. Maximum flexibility and quality

## Implementation Considerations

### Linking
\`\`\`python
parent = {
    'id': 'parent_1',
    'content': 'summary text',
    'children': ['child_1', 'child_2', 'child_3']
}

child = {
    'id': 'child_1',
    'content': 'detail text',
    'parent_id': 'parent_1',
    'position': 0
}
\`\`\`

### Indexing
- **Dual Index**: Separate indices for parents and children
- **Linked Index**: Single index with relationship tracking
- **Vector Storage**: Store embeddings for both levels

### Retrieval
\`\`\`python
# Parent-first approach
parents = search_parents(query, top_k=3)
children = []
for parent in parents:
    child_results = get_children(parent.id, top_k=2)
    children.extend(child_results)
return parents + children
\`\`\`

## Performance Metrics

### Retrieval Quality
- **Broad Queries**: Parent retrieval (95%+ relevant)
- **Specific Queries**: Child retrieval (90%+ relevant)
- **Overall Quality**: 90-95% (best of both levels)

### Efficiency
- **Parent Search**: Very fast (fewer chunks)
- **Child Search**: Moderate speed
- **Combined**: Balanced speed

### Storage
- **Overhead**: 50-100% more storage
- **Reason**: Both parents and children indexed
- **Optimization**: Separate cold/hot storage

## Cost Analysis

### Example: 1M Documents, 50K tokens each

\`\`\`
Child Chunking:
Chunks: 1M × (50000 / 512) = ~97.7M chunks
Embedding Cost: ~$1,950

Parent Generation:
1 parent per 4 children: ~24.4M parents
LLM Cost: 24.4M × $0.001/parent = $24,400
Embedding Cost: ~$488

Total Cost: ~$26,838
vs. Single-level: ~$1,950
Premium: 1,277%
\`\`\`

## Best Practices

1. **Summary Quality**: Use high-quality LLM for summaries
2. **Hierarchy Depth**: 2-3 levels typical (avoid over-nesting)
3. **Link Management**: Maintain parent-child relationships carefully
4. **Testing**: Validate hierarchy on representative queries
5. **Monitoring**: Track retrieval quality at each level
6. **Optimization**: Start with 2-level, add if needed

## Comparison with Alternatives

| Aspect | Parent-Child | Semantic | Sliding Window |
|--------|-------------|----------|-----------------|
| Quality | Excellent | Excellent | Good |
| Cost | High | High | Medium |
| Complexity | High | High | Medium |
| Flexibility | Very High | Low | Low |
| Storage | Very High | Low | High |

## When to Use Parent-Child Chunking

✓ For very large documents
✓ Complex domain knowledge
✓ Multi-level queries required
✓ Knowledge base systems
✓ When hierarchy adds value

✗ For cost-sensitive systems
✗ Simple, small documents
✗ Real-time applications
✗ Limited computing resources

## Advanced Variations

### Dynamic Hierarchy
- Adjust levels based on document size
- Small docs: single level
- Large docs: multiple levels

### Semantic Grouping
- Group children by semantic similarity
- Not just sequential grouping
- Better conceptual coherence

### Query-Aware Retrieval
- Detect query complexity
- Use parent for simple queries
- Use children for specific queries

## Conclusion

Parent-child chunking provides the most flexibility for large, complex documents by enabling retrieval at multiple levels of detail. While expensive to implement and maintain, it's ideal for enterprise knowledge bases and high-value applications where the ability to retrieve at different granularities justifies the additional cost and complexity.
`,Cr=`"""
Parent-Child Chunking Implementation
Creates hierarchical chunks with parent summaries and child details
"""

from typing import List, Dict, Optional


class ParentChildChunker:
    """Create hierarchical parent-child chunks"""
    
    def __init__(
        self,
        child_chunk_size: int = 256,
        children_per_parent: int = 4,
        min_parent_size: int = 100
    ):
        """
        Initialize Parent-Child Chunker
        
        Args:
            child_chunk_size: Size of detail chunks
            children_per_parent: How many children per parent
            min_parent_size: Minimum parent summary size
        """
        self.child_chunk_size = child_chunk_size
        self.children_per_parent = children_per_parent
        self.min_parent_size = min_parent_size
    
    def chunk(
        self, 
        text: str,
        create_summaries: bool = True
    ) -> Dict:
        """
        Create hierarchical chunks
        
        Args:
            text: Input text to chunk
            create_summaries: Whether to create parent summaries
            
        Returns:
            Dictionary with parents and children
        """
        # Create child chunks
        children = self._create_children(text)
        
        # Create parent chunks
        parents = self._create_parents(children, create_summaries)
        
        return {
            'parents': parents,
            'children': children,
            'hierarchy': self._create_hierarchy(parents, children)
        }
    
    def _create_children(self, text: str) -> List[Dict]:
        """Create child chunks"""
        words = text.split()
        children = []
        child_id = 0
        
        current_chunk = []
        current_size = 0
        
        for word in words:
            if current_size >= self.child_chunk_size:
                if current_chunk:
                    children.append({
                        'id': f'child_{child_id}',
                        'content': ' '.join(current_chunk),
                        'size': current_size,
                        'position': child_id
                    })
                    child_id += 1
                current_chunk = [word]
                current_size = len(word)
            else:
                current_chunk.append(word)
                current_size += len(word) + 1
        
        if current_chunk:
            children.append({
                'id': f'child_{child_id}',
                'content': ' '.join(current_chunk),
                'size': current_size,
                'position': child_id
            })
        
        return children
    
    def _create_parents(
        self, 
        children: List[Dict],
        create_summaries: bool = True
    ) -> List[Dict]:
        """Create parent chunks from children"""
        parents = []
        parent_id = 0
        
        for i in range(0, len(children), self.children_per_parent):
            child_group = children[i:i + self.children_per_parent]
            
            # Combine children
            combined_content = ' '.join([c['content'] for c in child_group])
            
            # Create summary (placeholder)
            summary = self._create_summary(combined_content) if create_summaries else ""
            
            parents.append({
                'id': f'parent_{parent_id}',
                'content': combined_content,
                'summary': summary,
                'children_ids': [c['id'] for c in child_group],
                'children_count': len(child_group),
                'size': len(combined_content)
            })
            
            parent_id += 1
        
        return parents
    
    def _create_summary(self, text: str) -> str:
        """Create summary of text (placeholder)"""
        # In production, use LLM or extractive summarization
        words = text.split()
        summary_words = words[:min(len(words) // 3, 50)]
        return ' '.join(summary_words) + "..."
    
    def _create_hierarchy(
        self,
        parents: List[Dict],
        children: List[Dict]
    ) -> Dict:
        """Create hierarchy mapping"""
        hierarchy = {}
        for parent in parents:
            hierarchy[parent['id']] = {
                'children': parent['children_ids'],
                'content_size': parent['size']
            }
        return hierarchy


# Example usage
if __name__ == "__main__":
    sample_text = """
    Machine learning enables automated decision making.
    It encompasses supervised and unsupervised learning.
    Deep learning uses neural networks for complex tasks.
    Convolutional networks process images effectively.
    Recurrent networks handle sequential data.
    Transformers revolutionized natural language processing.
    """ * 3
    
    chunker = ParentChildChunker(child_chunk_size=30, children_per_parent=2)
    result = chunker.chunk(sample_text)
    
    print(f"Created {len(result['parents'])} parents")
    print(f"Created {len(result['children'])} children")
    for parent in result['parents']:
        print(f"  Parent {parent['id']}: {parent['children_count']} children")
`,wr=`## Introduction
Sliding window chunking creates overlapping chunks by moving a fixed-size window across the document with a step size (stride) smaller than the window size. This maintains context across chunk boundaries and prevents information loss at split points.

## How It Works

### Process Flow
1. **Tokenize Document**: Convert text to tokens
2. **Define Window Size**: Set chunk size (e.g., 512 tokens)
3. **Define Stride**: Set step size (usually < window size)
4. **Create First Window**: Extract first window of tokens
5. **Slide Window**: Move by stride amount and create next chunk
6. **Repeat**: Continue until document end
7. **Handle Final Chunk**: Manage partial chunk at end
8. **Output**: Overlapping chunks with metadata

### Visualization
\`\`\`
Document tokens: [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19...]

Window Size: 8 tokens, Stride: 4 tokens

Window 1: [0 1 2 3 4 5 6 7]
          └─ Move 4 tokens forward →

Window 2:       [4 5 6 7 8 9 10 11]
                └─ Move 4 tokens forward →

Window 3:             [8 9 10 11 12 13 14 15]
                      └─ Move 4 tokens forward →

Window 4:                 [12 13 14 15 16 17 18 19...]

Overlap: 8 - 4 = 4 tokens (50% overlap)
\`\`\`

## Characteristics

### Simplicity: Medium
- Straightforward implementation
- Requires careful boundary handling
- Not overly complex

### Computational Cost: Medium
- O(n) with repeated work (overlap)
- More processing than non-overlapping
- Scales linearly

### Context Preservation: Very High
- Excellent boundary context
- Minimal information loss
- Smooth transitions

### Flexibility: High
- Adjustable window and stride
- Works with any content type
- Customizable overlap ratio

### Variable Chunk Sizes: No
- Fixed window size (except final)
- Predictable output

## Advantages

1. **Context Preservation**: Maintains context across boundaries
2. **Information Flow**: Smooth transitions between chunks
3. **Boundary Context**: Each chunk has surrounding context
4. **No Information Loss**: All content appears in some chunk
5. **Predictable Sizes**: Fixed window = predictable chunks
6. **Query Continuity**: Queries spanning boundaries better served

## Disadvantages

1. **Storage Overhead**: Overlap increases storage (25-50%)
2. **Processing Overhead**: More tokens to process
3. **Duplication**: Same content processed multiple times
4. **Complexity**: More complex than non-overlapping
5. **Retrieval Overhead**: More chunks to search/retrieve
6. **Cost**: Higher embedding and storage costs

## Use Cases

### Ideal For
- **Time-Series Data**: Sequential, continuous data
- **Streaming Content**: News feeds, social media
- **Sequential Text**: Narratives, stories
- **Technical Documentation**: Complex concepts spanning boundaries
- **Real-time Processing**: Where continuity matters

### Not Ideal For
- **Cost-Sensitive**: Storage/processing overhead unacceptable
- **Sparse Data**: Infrequent relevant information
- **Independent Sections**: No need for cross-boundary context

## Parameters

### Window Size
- **Typical Range**: 256-1024 tokens
- **Small Windows**: High precision, high duplication
- **Large Windows**: More context, less overlap

### Stride (Step Size)
- **Definition**: Tokens to move forward each iteration
- **Typical Range**: 128-512 tokens
- **Relationship**: stride < window_size (else no overlap)

### Overlap Calculation
\`\`\`
Overlap = Window Size - Stride
Overlap Ratio = (Window Size - Stride) / Window Size

Example:
Window: 512 tokens
Stride: 256 tokens
Overlap: 256 tokens
Ratio: 50%
\`\`\`

### Overlap Ratios
\`\`\`
20% Overlap:
Window: 512, Stride: 409 = 103 token overlap

25% Overlap:
Window: 512, Stride: 384 = 128 token overlap

33% Overlap:
Window: 512, Stride: 341 = 171 token overlap

50% Overlap:
Window: 512, Stride: 256 = 256 token overlap
\`\`\`

## Implementation Details

### Basic Algorithm
\`\`\`python
def sliding_window_chunk(tokens, window_size, stride):
    chunks = []
    position = 0
    
    while position < len(tokens):
        end = min(position + window_size, len(tokens))
        chunk = tokens[position:end]
        chunks.append(chunk)
        position += stride
    
    return chunks
\`\`\`

### With Text Decoding
\`\`\`python
def sliding_window_chunk_text(text, window_size=512, stride=256):
    tokens = tokenize(text)
    token_chunks = sliding_window_chunk(tokens, window_size, stride)
    
    # Decode back to text
    text_chunks = []
    for token_chunk in token_chunks:
        text = detokenize(token_chunk)
        text_chunks.append({
            'content': text,
            'tokens': len(token_chunk),
            'overlap_tokens': window_size - stride
        })
    
    return text_chunks
\`\`\`

### Handling Final Chunk
\`\`\`
Last complete window ends at position 3072
Total tokens: 3200
Remaining tokens: 128 (less than stride 256)

Option 1: Drop final small chunk
Option 2: Extend final chunk to include remaining
Option 3: Create overlapping final chunk
\`\`\`

## Performance Metrics

### Storage Impact
\`\`\`
Document: 10,000 tokens

No overlap:
Chunks: 10,000 / 512 = ~20 chunks
Storage: 20 × 512 = 10,000 tokens

50% Overlap (stride 256):
Chunks: ~40 chunks
Storage: 40 × 512 = 20,480 tokens (2x increase)

25% Overlap (stride 384):
Chunks: ~27 chunks
Storage: 27 × 512 = 13,824 tokens (38% increase)
\`\`\`

### Retrieval Quality
- **Boundary Coverage**: 95%+ (query-spanning chunks found)
- **Context Preservation**: Excellent
- **Recall**: 99%+ (all content retrieved)
- **Precision**: Variable (depends on overlap)

## Comparison with Alternatives

| Aspect | Sliding Window | Fixed-size | Recursive |
|--------|---------------|-----------|-----------|
| Context | Excellent | Poor | Good |
| Storage | High | Low | Low |
| Speed | Medium | Fast | Fast |
| Boundary | Excellent | Poor | Good |
| Overhead | 25-50% | 0% | 0% |

## Cost Analysis

### Example: 1M Documents, 5K tokens each
\`\`\`
Without Overlap:
Chunks: 1M × (5000/512) = ~9.8M chunks
Storage: ~5B tokens
Embedding Cost (OpenAI): $0.02/M = $100

With 50% Overlap:
Chunks: 1M × (5000/256) = ~19.5M chunks
Storage: ~10B tokens
Embedding Cost: $200
Additional Cost: $100 (100% premium)
\`\`\`

## Best Practices

1. **Choose Appropriate Overlap**: Balance context vs cost (20-30% typical)
2. **Match to Use Case**: High overlap for sequential data
3. **Monitor Storage**: Track redundancy overhead
4. **Test Performance**: Measure retrieval impact
5. **Document Settings**: Record window and stride values
6. **Consider Alternatives**: Evaluate if overlap necessary

## Tuning Strategy

### Low Context Needs
- Large stride (less overlap)
- Window: 512, Stride: 410 (20% overlap)
- Cost-optimized

### Balanced
- Medium stride
- Window: 512, Stride: 310 (40% overlap)
- Most common

### High Context Needs
- Small stride (high overlap)
- Window: 512, Stride: 160 (69% overlap)
- Maximum context preservation

## When to Use Sliding Window

✓ For sequential, continuous content
✓ When boundary context matters
✓ Time-series and streaming data
✓ When retrieval must span chunks
✓ High-quality RAG required

✗ For cost-sensitive applications
✗ Sparse, unrelated sections
✗ When storage is limited
✗ Independent topic documents

## Advanced Variations

### Adaptive Stride
- Adjust stride based on content
- Smaller stride at topic boundaries
- Larger stride in uniform sections

### Variable Window
- Dynamic window sizing
- Smaller windows for dense content
- Larger windows for sparse content

### Semantic-Aware Sliding
- Combine with semantic similarity
- Only overlap at semantic boundaries
- Reduces redundancy

## Conclusion

Sliding window chunking excels at preserving context across chunk boundaries, making it ideal for sequential and continuous content. The trade-off is increased storage and processing overhead. Most suitable for applications where retrieval quality and context continuity are critical and storage costs are acceptable.
`,Tr=`"""
Sliding Window Chunking Implementation
Creates overlapping chunks using a sliding window approach
"""

from typing import List, Dict


class SlidingWindowChunker:
    """Split documents using sliding window with overlap"""
    
    def __init__(
        self,
        window_size: int = 512,
        stride: int = 256
    ):
        """
        Initialize Sliding Window Chunker
        
        Args:
            window_size: Size of each window/chunk
            stride: Number of tokens to move forward (creates overlap)
        """
        self.window_size = window_size
        self.stride = stride
        self.overlap = window_size - stride
    
    def chunk(self, text: str) -> List[Dict]:
        """
        Split text using sliding window
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of overlapping chunks
        """
        # Tokenize
        tokens = text.split()
        
        chunks = []
        position = 0
        chunk_id = 0
        
        while position < len(tokens):
            end = min(position + self.window_size, len(tokens))
            chunk_tokens = tokens[position:end]
            chunk_text = ' '.join(chunk_tokens)
            
            chunks.append({
                'content': chunk_text,
                'tokens': len(chunk_tokens),
                'start_pos': position,
                'end_pos': end,
                'overlap': self.overlap,
                'chunk_id': chunk_id
            })
            
            chunk_id += 1
            position += self.stride
        
        return chunks
    
    def get_overlap_info(self) -> Dict:
        """Get overlap information"""
        overlap_ratio = (self.overlap / self.window_size) * 100
        return {
            'window_size': self.window_size,
            'stride': self.stride,
            'overlap_tokens': self.overlap,
            'overlap_ratio': overlap_ratio
        }


# Example usage
if __name__ == "__main__":
    sample_text = """
    Machine learning is transforming technology.
    It enables automated decision making systems.
    Deep learning uses neural networks.
    These networks process data hierarchically.
    Applications span many industries.
    """ * 5
    
    # 50% overlap
    chunker = SlidingWindowChunker(window_size=20, stride=10)
    chunks = chunker.chunk(sample_text)
    print(f"Sliding window (50% overlap): {len(chunks)} chunks")
    print(f"Overlap info: {chunker.get_overlap_info()}")
    
    # 20% overlap
    chunker = SlidingWindowChunker(window_size=20, stride=16)
    chunks = chunker.chunk(sample_text)
    print(f"\\nSliding window (20% overlap): {len(chunks)} chunks")
    print(f"Overlap info: {chunker.get_overlap_info()}")
`,Er=`## Introduction
Agentic chunking uses an LLM agent to intelligently determine chunk boundaries based on semantic understanding of content. The agent analyzes document structure and meaning to create optimally split chunks, providing the most context-aware approach at the cost of higher computational overhead.

## How It Works

### Process Flow
1. **Load Document**: Prepare text for analysis
2. **Define Agent Instructions**: Create prompts for boundary detection
3. **Send to LLM Agent**: Query LLM to analyze structure
4. **LLM Analyzes**: Agent reads and understands semantics
5. **Identify Breakpoints**: Agent proposes logical boundaries
6. **Extract Chunks**: Split at identified boundaries
7. **Generate Metadata**: Create titles and summaries
8. **Validate**: Ensure quality and constraints
9. **Output**: Optimally chunked, labeled content

### Agent Workflow
\`\`\`
Input Document
    ↓
LLM Agent Analysis
    ├─ "Read and understand the content"
    ├─ "Identify natural topic boundaries"
    ├─ "Consider semantic coherence"
    └─ "Suggest optimal chunk boundaries"
    ↓
Boundary Proposal
    └─ "Split after paragraph 3, 7, 12, ..."
    ↓
Chunk Extraction
    ├─ Chunk 1: "Section A content"
    ├─ Chunk 2: "Section B content"
    └─ Chunk 3: "Section C content"
    ↓
Summary Generation
    ├─ Title: "Introduction to AI"
    ├─ Key Terms: ["artificial intelligence", "machine learning"]
    └─ Summary: "Overview of AI field..."
    ↓
Validation & Output
\`\`\`

## Characteristics

### Simplicity: Very Low
- Highly complex implementation
- Requires LLM integration
- Sophisticated prompt engineering

### Computational Cost: Very High
- Multiple LLM calls per document
- Expensive inference
- Not suitable for high-volume

### Context Preservation: Excellent
- AI understands actual content
- Optimal semantic boundaries
- Minimal context loss

### Flexibility: Excellent
- Adapts to any content type
- Learns from examples
- Can handle complex documents

### Variable Chunk Sizes: Yes
- Highly variable based on AI understanding
- Potentially optimal distribution

## Advantages

1. **Intelligent Boundaries**: AI understands actual meaning
2. **Context Optimal**: Best semantic preservation
3. **Adaptive**: Works with any document type
4. **Automatic Summaries**: AI generates titles/summaries
5. **Metadata Rich**: Detailed chunk information
6. **Domain-Aware**: Can be specialized per domain

## Disadvantages

1. **Expensive**: High LLM API costs
2. **Slow**: Inference time adds latency
3. **Complex**: Difficult to implement correctly
4. **LLM-Dependent**: Quality depends on model
5. **Unpredictable**: Hard to estimate processing time
6. **Maintenance**: Requires prompt tuning and updates

## Use Cases

### Ideal For
- **Critical Applications**: Where quality >> cost
- **Complex Domains**: Legal, medical, technical docs
- **High-Value Content**: Academic papers, research
- **Knowledge Extraction**: Detailed understanding needed
- **One-time Processing**: Not real-time batch jobs

### Not Ideal For
- **Cost-Sensitive**: Cannot afford LLM inference
- **Real-time**: Latency unacceptable
- **Large Volume**: Processing millions of documents
- **Simple Content**: Overkill for basic text
- **Streaming**: Requires full document upfront

## Parameters

### LLM Model
- **Recommended**: GPT-4, Claude 3 Opus, or better
- **Capability**: Must understand domain complexity
- **Cost**: Should consider inference cost
- **Speed**: Acceptable latency required

### System Prompt
\`\`\`
You are an expert at analyzing documents and identifying
natural chunk boundaries. Your task is to:

1. Read and understand the provided text deeply
2. Identify where major topics or ideas transition
3. Recognize natural semantic boundaries
4. Suggest optimal points to split into chunks
5. Each chunk should be 200-2000 tokens

Respond with:
- List of boundary positions (sentence/paragraph numbers)
- Reason for each boundary
- Suggested chunk titles
- Key concepts for each chunk
\`\`\`

### Chunk Size Guidance
- **Min**: 100-200 tokens
- **Max**: 2000-3000 tokens
- **Guidance**: Optional - let AI optimize
- **Constraint**: Hard limits if needed

### Summary Method
- **Abstractive**: LLM creates summaries (slower, better)
- **Extractive**: Select key sentences (faster, simpler)
- **Hybrid**: Combine both approaches

## Prompt Engineering

### Basic Prompt
\`\`\`
Analyze this text and propose optimal chunk boundaries.
For each boundary, explain why it's a good split point.

Text:
[DOCUMENT]

Response Format:
Chunk 1 (end after sentence X): "[title]"
- Boundary reason: ...
- Key concepts: ...

Chunk 2 (end after sentence Y): "[title]"
- Boundary reason: ...
\`\`\`

### Advanced Prompt with Examples
\`\`\`
You are a document chunking expert. Here are examples:

Example 1:
Input: "[sample document]"
Good chunks:
- "Introduction to XYZ" (sentences 1-3)
- "History of XYZ" (sentences 4-8)
- "Modern Applications" (sentences 9-12)

Now analyze this document with same quality:
[TARGET_DOCUMENT]
\`\`\`

### Domain-Specific Prompt
\`\`\`
This is a [DOMAIN] document about [TOPIC].
Consider domain-specific semantic boundaries.

For code: split at class/function definitions
For papers: split at major sections
For legal: split at clauses or concepts
For medical: split at symptoms/treatments

Document:
[TEXT]
\`\`\`

## Implementation Steps

### Step 1: Prepare Document
\`\`\`python
# Clean and format document
text = load_document(filepath)
text = preprocess(text)  # Remove extra whitespace
\`\`\`

### Step 2: Create System Prompt
\`\`\`python
system_prompt = """You are an expert document analyzer.
Identify optimal chunk boundaries...
"""
\`\`\`

### Step 3: Query LLM Agent
\`\`\`python
response = llm.generate(
    system_prompt=system_prompt,
    user_message=text,
    temperature=0.3  # Lower for consistency
)
\`\`\`

### Step 4: Parse Response
\`\`\`python
boundaries = parse_boundaries(response)
# Extract: sentence numbers, reasons, titles
\`\`\`

### Step 5: Extract Chunks
\`\`\`python
chunks = extract_chunks(text, boundaries)
# Split at identified boundaries
\`\`\`

### Step 6: Generate Summaries (if needed)
\`\`\`python
for chunk in chunks:
    summary = llm.generate(
        prompt=f"Summarize: {chunk}",
        max_tokens=100
    )
    chunk.summary = summary
\`\`\`

## Performance Metrics

### Quality Metrics
- **Semantic Coherence**: 95%+ (excellent)
- **Boundary Quality**: 90-95% (very good)
- **Metadata Quality**: Excellent
- **Overall Quality**: Best available

### Cost Analysis
\`\`\`
Document: 10,000 tokens
LLM Model: GPT-4
Prompt Tokens: 10,500 (document + system prompt)
Completion Tokens: 300 (response)
Cost: (10,500 × $0.03 + 300 × $0.06) / 1M = $0.00036 per doc

For 1M documents:
Cost: $360
vs. Semantic chunking (embeddings): ~$20
Premium: 18x more expensive
\`\`\`

### Processing Time
- **Inference**: 5-30 seconds per document (depending on size)
- **Parsing**: <1 second
- **Total**: 5-30 seconds per document
- **Throughput**: 120-720 documents per hour

## Comparison with Other Strategies

| Aspect | Agentic | Semantic | Recursive |
|--------|---------|----------|-----------|
| Quality | Excellent | Excellent | Good |
| Cost | Very High | High | Low |
| Speed | Slow | Slow | Fast |
| Complexity | Very High | High | Medium |
| LLM-Required | Yes | No | No |

## Advanced Techniques

### Few-Shot Learning
\`\`\`
Provide examples of good chunking for similar docs
LLM learns from examples
Better results without extensive tuning
\`\`\`

### Iterative Refinement
\`\`\`
1. Generate initial chunks
2. Evaluate quality
3. Prompt: "These chunks should be split here..."
4. Refine based on feedback
\`\`\`

### Multi-Model Consensus
\`\`\`
Run with multiple LLMs (GPT-4, Claude, Gemini)
Take consensus on boundaries
Higher reliability, lower cost per model
\`\`\`

## Cost-Benefit Analysis

### When Cost Justified
- Critical applications (legal, medical)
- High-value documents (research, strategy)
- One-time processing
- Quality absolutely required

### When Cost Not Justified
- Bulk processing (millions of docs)
- Real-time requirements
- Budget constraints
- Quality "good enough" with cheaper methods

## Best Practices

1. **Model Selection**: Use capable LLM (GPT-4 minimum)
2. **Prompt Tuning**: Invest time in prompt engineering
3. **Example Provision**: Use few-shot examples
4. **Temperature Control**: Keep low (0.1-0.3) for consistency
5. **Validation**: Manually review samples
6. **Monitoring**: Track quality metrics
7. **Cost Tracking**: Monitor actual expenses

## When to Use Agentic Chunking

✓ Critical applications where quality paramount
✓ Complex domain documents
✓ One-time or low-volume processing
✓ Need for intelligent metadata
✓ Research or high-value content

✗ High-volume production
✗ Real-time requirements
✗ Cost-sensitive applications
✗ Simple documents
✗ Streaming data

## Limitations and Considerations

### LLM Limitations
- Can misunderstand complex content
- Prone to hallucinations
- May create inconsistent boundaries
- Quality varies by LLM version

### Practical Challenges
- Long latency makes interactive use difficult
- Expensive for scaling
- Requires careful prompt engineering
- Results not always reproducible

## Conclusion

Agentic chunking represents the future of intelligent document processing, leveraging AI to make sophisticated decisions about chunk boundaries. While currently expensive and slow, it provides unmatched quality for critical applications. As LLM costs decrease and speed improves, this approach will become more practical. Best suited for premium, high-value applications where retrieval quality justifies the investment.
`,Dr=`"""
Agentic Chunking Implementation
Uses LLM agent to intelligently determine chunk boundaries
"""

from typing import List, Dict, Optional


class AgenticChunker:
    """Use LLM agent to chunk documents intelligently"""
    
    def __init__(
        self,
        min_chunk_size: int = 100,
        max_chunk_size: int = 2000,
        llm_client=None,
        model: str = "gpt-4"
    ):
        """
        Initialize Agentic Chunker
        
        Args:
            min_chunk_size: Minimum chunk size
            max_chunk_size: Maximum chunk size
            llm_client: LLM client for API calls
            model: Model to use for analysis
        """
        self.min_chunk_size = min_chunk_size
        self.max_chunk_size = max_chunk_size
        self.llm_client = llm_client
        self.model = model
    
    def chunk(self, text: str) -> List[Dict]:
        """
        Use LLM agent to chunk text intelligently
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of intelligently chunked content
        """
        # If no LLM client, use fallback
        if not self.llm_client:
            return self._fallback_chunk(text)
        
        # Query LLM for boundaries
        boundaries = self._get_boundaries_from_llm(text)
        
        # Extract chunks
        chunks = self._extract_chunks(text, boundaries)
        
        return chunks
    
    def _get_boundaries_from_llm(self, text: str) -> List[int]:
        """Query LLM for chunk boundaries"""
        prompt = f"""
        Analyze this text and identify optimal chunk boundaries.
        Each chunk should be 100-2000 characters.
        
        Return a JSON list of sentence positions where chunks should end.
        
        Text:
        {text[:1000]}...
        """
        
        # Placeholder - in production would call actual LLM
        # This would use llm_client.generate(prompt)
        
        # For demo, split at sentence boundaries
        import re
        sentences = re.split(r'(?<=[.!?])\\s+', text)
        boundaries = []
        pos = 0
        for i, sent in enumerate(sentences):
            pos += len(sent) + 1
            if pos > self.max_chunk_size:
                boundaries.append(i)
                pos = 0
        
        return boundaries
    
    def _extract_chunks(self, text: str, boundaries: List[int]) -> List[Dict]:
        """Extract chunks at boundaries"""
        import re
        sentences = re.split(r'(?<=[.!?])\\s+', text)
        
        chunks = []
        chunk_id = 0
        current_start = 0
        
        for boundary in boundaries:
            if boundary > current_start:
                chunk_sentences = sentences[current_start:boundary + 1]
                chunk_text = ' '.join(chunk_sentences)
                
                if len(chunk_text) >= self.min_chunk_size:
                    chunks.append({
                        'content': chunk_text,
                        'size': len(chunk_text),
                        'sentences': len(chunk_sentences),
                        'chunk_id': chunk_id,
                        'generated_title': self._generate_title(chunk_text)
                    })
                    chunk_id += 1
                
                current_start = boundary + 1
        
        # Add final chunk
        if current_start < len(sentences):
            chunk_text = ' '.join(sentences[current_start:])
            if len(chunk_text) >= self.min_chunk_size:
                chunks.append({
                    'content': chunk_text,
                    'size': len(chunk_text),
                    'sentences': len(sentences) - current_start,
                    'chunk_id': chunk_id,
                    'generated_title': self._generate_title(chunk_text)
                })
        
        return chunks
    
    def _generate_title(self, text: str) -> str:
        """Generate title for chunk (placeholder)"""
        words = text.split()[:5]
        return ' '.join(words) + "..."
    
    def _fallback_chunk(self, text: str) -> List[Dict]:
        """Fallback chunking without LLM"""
        import re
        sentences = re.split(r'(?<=[.!?])\\s+', text)
        
        chunks = []
        current_chunk = []
        current_size = 0
        chunk_id = 0
        
        for sent in sentences:
            if current_size + len(sent) > self.max_chunk_size:
                if current_chunk:
                    chunk_text = ' '.join(current_chunk)
                    chunks.append({
                        'content': chunk_text,
                        'size': len(chunk_text),
                        'chunk_id': chunk_id
                    })
                    chunk_id += 1
                current_chunk = [sent]
                current_size = len(sent)
            else:
                current_chunk.append(sent)
                current_size += len(sent)
        
        if current_chunk:
            chunks.append({
                'content': ' '.join(current_chunk),
                'size': current_size,
                'chunk_id': chunk_id
            })
        
        return chunks


# Example usage
if __name__ == "__main__":
    sample_text = """
    Machine learning is transforming industries.
    It enables automated decision making.
    Deep learning uses neural networks.
    These networks are inspired by the brain.
    The results are impressive and accurate.
    """
    
    chunker = AgenticChunker()
    chunks = chunker.chunk(sample_text)
    print(f"Agentic chunking: {len(chunks)} chunks")
    for i, chunk in enumerate(chunks):
        print(f"  Chunk {i}: {chunk['size']} chars")
`,Or=`## Introduction
Chunk size is the fundamental parameter that controls how much text each chunk contains, measured in tokens or characters. It directly impacts retrieval quality, cost, processing speed, and storage requirements.

## Why Chunk Size Matters

Chunk size is the most critical chunking parameter because it affects:

1. **Retrieval Quality**: Smaller chunks = higher precision, larger chunks = more context
2. **Cost**: Directly affects API costs, storage, and processing
3. **Performance**: Larger chunks = fewer to process, smaller chunks = more granular
4. **Context**: Balance between relevance and contextual completeness
5. **Storage**: Directly proportional to storage requirements
6. **Latency**: Affects search speed and response time

## Typical Size Ranges

### Micro Chunks (64-128 tokens)
- **Use Case**: Snippet extraction, QA pairs
- **Pros**: Very precise retrieval, good for specific queries
- **Cons**: High fragmentation, loses context, more chunks to store
- **Example**: "What is machine learning?"

### Small Chunks (128-256 tokens)
- **Use Case**: Short documents, high precision needed
- **Pros**: Good precision, reasonable context
- **Cons**: May still be fragmented for complex topics
- **Example**: Product descriptions, FAQs

### Medium Chunks (256-512 tokens)
- **Use Case**: STANDARD APPROACH - most RAG systems use this
- **Pros**: Balanced precision and context, good retrieval quality
- **Cons**: May miss some cross-chunk concepts
- **Example**: Articles, blog posts, documentation

### Large Chunks (512-1024 tokens)
- **Use Case**: Dense technical content, complex concepts
- **Pros**: Good context preservation, fewer chunks
- **Cons**: May include irrelevant information
- **Example**: Research papers, technical guides

### Very Large Chunks (1024-2048 tokens)
- **Use Case**: High-level summaries, document sections
- **Pros**: Comprehensive context, minimal fragmentation
- **Cons**: Poor retrieval precision, may not fit all contexts
- **Example**: Book chapters, comprehensive reports

### Full Document (2048+ tokens)
- **Use Case**: With large context windows, or when minimal context loss needed
- **Pros**: Perfect context, no fragmentation
- **Cons**: Poor retrieval, expensive to process
- **Example**: With 200K token context windows

## Factors Affecting Optimal Chunk Size

### 1. Embedding Model Training
Most embedding models trained on specific lengths:
- **Sentence Transformers**: ~300 tokens optimal
- **OpenAI text-embedding**: ~512 tokens
- **All-MiniLM**: ~256 tokens optimal range
- **Impact**: Using wrong size reduces embedding quality

### 2. Query Specificity
- **Specific Queries**: Need smaller chunks (256-512)
- **Broad Queries**: Can use larger chunks (512-1024)
- **Mixed Queries**: Use medium chunks (512)

### 3. Document Type
\`\`\`
Code Files:           256-512 (by function)
Research Papers:      512-1024 (by section)
News Articles:        256-512 (by paragraph)
Legal Documents:      512-1024 (by clause)
Books:               512-1024 (by section)
Technical Docs:       256-512 (by concept)
\`\`\`

### 4. Context Window Size
- **Small Window (4K)**: Must use 256-512 max
- **Medium Window (16K)**: Can use 512-1024
- **Large Window (128K+)**: Can use 1024-2048
- **Massive Window (200K+)**: Can use near full-document

### 5. Retrieval Budget
Tokens available for chunks in context:
\`\`\`
Total Context: 128,000 tokens
- System Prompt: 500 tokens
- User Query: 300 tokens
- Response Buffer: 2000 tokens
- Overhead: 1000 tokens
= Available for Chunks: 124,200 tokens

With 4 retrieved chunks:
Max Chunk Size: 124,200 / 4 = 31,050 tokens (unrealistic)

With 20 retrieved chunks:
Max Chunk Size: 124,200 / 20 = 6,210 tokens (use 1024-2048 actual)
\`\`\`

### 6. Cost Sensitivity
- **Cost First**: Use smaller chunks (256)
- **Balanced**: Medium chunks (512)
- **Quality First**: Larger chunks (1024+)

### 7. Latency Requirements
- **Real-time (<100ms)**: Smaller chunks = faster search
- **Normal (<1s)**: Medium chunks
- **Batch (<30s)**: Larger chunks acceptable

## Size Selection Framework

### Step 1: Check Embedding Model
\`\`\`python
model = "text-embedding-3-small"
# Optimal range: 256-512 tokens
# Training context: 512 tokens
\`\`\`

### Step 2: Calculate Context Budget
\`\`\`python
total_context = 128000  # GPT-4 Turbo
system_prompt = 500
query = 500
response = 2000
overhead = 1000
retrieval_budget = total_context - system_prompt - query - response - overhead
# = 123,000 tokens

num_chunks = 10  # Want to retrieve 10 chunks
max_chunk = retrieval_budget / num_chunks
# = 12,300 tokens (too large, use smaller)
\`\`\`

### Step 3: Consider Document Type
\`\`\`python
doc_type = "research_paper"
# Research papers typically 512-1024 optimal
# Balances sections with context
\`\`\`

### Step 4: Start with Baseline
\`\`\`python
# Recommended baseline: 512 tokens
chunk_size = 512
\`\`\`

### Step 5: Test and Measure
\`\`\`python
# Test on representative queries
# Measure:
# - Retrieval precision
# - Context quality
# - Cost per query
# - Processing time
\`\`\`

### Step 6: Tune Based on Results
\`\`\`python
if retrieval_too_fragmented:
    chunk_size *= 1.5  # Increase
elif too_much_irrelevant_content:
    chunk_size *= 0.67  # Decrease
else:
    chunk_size_is_good = True
\`\`\`

## Size and Retrieval Quality Relationship

\`\`\`
Retrieval Quality
        ↑
    95% │          ╱─────
        │       ╱────
    85% │    ╱─────
        │ ╱────     
    75% │─────
        │
        └─────────────────→ Chunk Size
          256  512  1024  2048

Optimal Range: 256-512 tokens for most applications
Beyond 1024: Diminishing returns, more irrelevant content
\`\`\`

## Cost Impact

### Example: 10M Documents, avg 5K tokens

\`\`\`
Chunk Size  Chunks    Storage  Embedding Cost  Retrieval Speed
256         195M      99B      $1,950           Very Fast
512         97M       50B      $975             Fast
1024        48M       25B      $487             Medium
2048        24M       12B      $243             Slow
\`\`\`

## Best Practices

1. **Start with 512**: Recommended default for most cases
2. **Match Embedding Model**: Use model's training size
3. **Test on Real Data**: Benchmark on your documents
4. **Monitor Metrics**: Track quality, cost, speed
5. **Document Choice**: Record reasoning for selection
6. **Consider Overlap**: Larger chunks + less overlap = cost efficient
7. **Adjust Gradually**: Change 20-30% at a time

## Common Mistakes

### 1. Using Too Large Chunks
**Problem**: 2048-token chunks for short FAQ
**Result**: One chunk per question, poor retrieval
**Solution**: Use 256-512 for short content

### 2. Using Too Small Chunks
**Problem**: 64-token chunks for complex papers
**Result**: Fragmented concepts, low retrieval quality
**Solution**: Use 512-1024 for complex content

### 3. Ignoring Embedding Model
**Problem**: Using 2048-token chunks with model trained on 256
**Result**: Worse embedding quality, poorer retrieval
**Solution**: Match model's training length

### 4. Not Testing
**Problem**: Choosing size theoretically without testing
**Result**: Suboptimal performance on real data
**Solution**: Always benchmark on representative data

## Size by Use Case

### Customer Support FAQ
- Size: 256-512 tokens
- Rationale: Short, independent questions
- Trade-off: Precision over context

### Technical Documentation
- Size: 512-1024 tokens
- Rationale: Concepts span sections
- Trade-off: Balanced approach

### Research Papers
- Size: 512-1024 tokens
- Rationale: Dense content, complex concepts
- Trade-off: Comprehensive but still focused

### Books/Long Form
- Size: 1024-2048 tokens (or parent-child)
- Rationale: Preserve chapter/section structure
- Trade-off: Context over precision

### Code/Programming
- Size: 256-512 tokens
- Rationale: Functions/methods as units
- Trade-off: Functional boundaries

## Monitoring and Adjustment

### Metrics to Track
\`\`\`python
metrics = {
    'retrieval_precision': 0.85,  # % correct chunks
    'retrieval_recall': 0.92,      # % all relevant found
    'avg_tokens_per_chunk': 512,
    'embeddings_cost': 975,        # per 10M docs
    'search_latency_ms': 45,
    'storage_gb': 50
}
\`\`\`

### Adjustment Triggers
- Precision < 75%: Reduce chunk size
- Recall < 85%: Increase chunk size
- Cost too high: Reduce chunk size
- Latency high: Reduce chunk size
- Fragmentation: Increase chunk size

## Conclusion

Chunk size is the most impactful parameter in document chunking. The recommended approach is to start with 512 tokens, validate on your actual data and use case, then adjust based on retrieval metrics. Most production systems find 256-512 tokens to be optimal. Always balance between retrieval quality, cost, and performance when selecting chunk size.
`,kr=`"""
Chunk Parameters Utilities
Tools for calculating and optimizing chunk size, overlap, and context window
"""

from typing import Dict, Optional


class ChunkParameters:
    """Utilities for chunk parameter calculation and optimization"""
    
    # Model context windows
    CONTEXT_WINDOWS = {
        'gpt-3.5-turbo': 4096,
        'gpt-3.5-turbo-16k': 16384,
        'gpt-4': 8192,
        'gpt-4-32k': 32768,
        'gpt-4-turbo': 128000,
        'claude-3-opus': 200000,
        'claude-3-sonnet': 200000,
        'gemini-1.5-pro': 1000000,
    }
    
    @staticmethod
    def calculate_retrieval_budget(
        context_window: int,
        system_prompt_tokens: int = 500,
        query_tokens: int = 500,
        response_buffer: int = 2000,
        overhead: int = 1000
    ) -> int:
        """
        Calculate available tokens for retrieved chunks
        
        Args:
            context_window: Total context window size
            system_prompt_tokens: Tokens for system prompt
            query_tokens: Tokens for user query
            response_buffer: Tokens reserved for response
            overhead: Overhead/safety tokens
            
        Returns:
            Available tokens for chunks
        """
        return (
            context_window 
            - system_prompt_tokens 
            - query_tokens 
            - response_buffer 
            - overhead
        )
    
    @staticmethod
    def optimal_chunk_size(
        context_window: int,
        num_chunks: int = 10,
        system_prompt_tokens: int = 500,
        query_tokens: int = 500,
        response_buffer: int = 2000
    ) -> int:
        """
        Calculate optimal chunk size for given constraints
        
        Args:
            context_window: Model's context window
            num_chunks: Desired number of chunks to retrieve
            system_prompt_tokens: System prompt size
            query_tokens: Query size
            response_buffer: Response size
            
        Returns:
            Recommended chunk size
        """
        budget = ChunkParameters.calculate_retrieval_budget(
            context_window,
            system_prompt_tokens,
            query_tokens,
            response_buffer
        )
        
        optimal_size = budget // num_chunks
        
        # Round to nearest reasonable value
        reasonable_sizes = [256, 512, 1024, 2048, 4096]
        closest = min(reasonable_sizes, key=lambda x: abs(x - optimal_size))
        
        return closest
    
    @staticmethod
    def calculate_overlap_tokens(
        chunk_size: int,
        overlap_ratio: float = 0.2
    ) -> Dict:
        """
        Calculate overlap parameters
        
        Args:
            chunk_size: Size of chunk
            overlap_ratio: Overlap as ratio (0.0-1.0)
            
        Returns:
            Dictionary with overlap information
        """
        overlap_tokens = int(chunk_size * overlap_ratio)
        stride = chunk_size - overlap_tokens
        
        return {
            'chunk_size': chunk_size,
            'overlap_ratio': overlap_ratio,
            'overlap_tokens': overlap_tokens,
            'stride': stride,
            'overlap_percentage': overlap_ratio * 100
        }
    
    @staticmethod
    def calculate_storage_overhead(
        document_size_tokens: int,
        chunk_size: int,
        overlap_ratio: float = 0.0
    ) -> Dict:
        """
        Calculate storage overhead from chunking
        
        Args:
            document_size_tokens: Document size in tokens
            chunk_size: Chunk size
            overlap_ratio: Overlap ratio
            
        Returns:
            Storage metrics
        """
        # Without overlap
        chunks_no_overlap = (document_size_tokens + chunk_size - 1) // chunk_size
        storage_no_overlap = chunks_no_overlap * chunk_size
        
        # With overlap
        stride = chunk_size - int(chunk_size * overlap_ratio)
        chunks_with_overlap = (
            (document_size_tokens - chunk_size) // stride + 1
        ) if stride > 0 else 1
        storage_with_overlap = chunks_with_overlap * chunk_size
        
        overhead_ratio = (
            (storage_with_overlap - storage_no_overlap) / storage_no_overlap
            if storage_no_overlap > 0 else 0
        )
        
        return {
            'document_tokens': document_size_tokens,
            'chunk_size': chunk_size,
            'chunks_no_overlap': chunks_no_overlap,
            'storage_no_overlap': storage_no_overlap,
            'chunks_with_overlap': chunks_with_overlap,
            'storage_with_overlap': storage_with_overlap,
            'overhead_ratio': overhead_ratio,
            'overhead_percentage': overhead_ratio * 100
        }
    
    @staticmethod
    def get_model_context_window(model_name: str) -> Optional[int]:
        """Get context window for a model"""
        return ChunkParameters.CONTEXT_WINDOWS.get(model_name)
    
    @staticmethod
    def recommend_chunk_size(
        document_type: str,
        quality_priority: str = "balanced"
    ) -> Dict:
        """
        Recommend chunk size based on document type and quality priority
        
        Args:
            document_type: Type of document (code, article, legal, etc)
            quality_priority: "speed", "balanced", or "quality"
            
        Returns:
            Recommendation with reasoning
        """
        recommendations = {
            'code': {
                'speed': 256,
                'balanced': 512,
                'quality': 1024
            },
            'article': {
                'speed': 256,
                'balanced': 512,
                'quality': 1024
            },
            'technical': {
                'speed': 512,
                'balanced': 1024,
                'quality': 1024
            },
            'legal': {
                'speed': 512,
                'balanced': 1024,
                'quality': 1024
            },
            'general': {
                'speed': 256,
                'balanced': 512,
                'quality': 1024
            }
        }
        
        doc_type = document_type.lower() if document_type else 'general'
        size = recommendations.get(doc_type, recommendations['general'])[
            quality_priority
        ]
        
        return {
            'recommended_chunk_size': size,
            'document_type': doc_type,
            'quality_priority': quality_priority,
            'reasoning': f"{size} tokens optimal for {doc_type} with {quality_priority} quality"
        }


# Example usage
if __name__ == "__main__":
    # Calculate retrieval budget
    budget = ChunkParameters.calculate_retrieval_budget(128000)
    print(f"Retrieval budget (GPT-4 Turbo): {budget} tokens")
    
    # Calculate optimal chunk size
    optimal = ChunkParameters.optimal_chunk_size(128000, num_chunks=20)
    print(f"Optimal chunk size for 20 chunks: {optimal} tokens")
    
    # Calculate overlap
    overlap = ChunkParameters.calculate_overlap_tokens(512, 0.2)
    print(f"\\nOverlap (20%): {overlap['overlap_tokens']} tokens, stride {overlap['stride']}")
    
    # Storage overhead
    storage = ChunkParameters.calculate_storage_overhead(50000, 512, 0.2)
    print(f"\\nStorage overhead: {storage['overhead_percentage']:.1f}%")
    
    # Recommendation
    rec = ChunkParameters.recommend_chunk_size("research paper", "quality")
    print(f"\\nRecommendation: {rec['recommended_chunk_size']} tokens")
`,Ar=`## Introduction
Chunk overlap is the amount of redundant content between adjacent chunks. It's typically expressed as a percentage of chunk size (e.g., 20% overlap means 102 tokens overlap in a 512-token chunk). Overlap preserves context across chunk boundaries and prevents information loss at split points.

## How Overlap Works

### Example
\`\`\`
Document: [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15...]

Chunk Size: 8 tokens, No Overlap (Stride = 8):
Chunk 1: [0 1 2 3 4 5 6 7]
Chunk 2: [8 9 10 11 12 13 14 15]  ← Gap! Token 7-8 boundary loses context

Chunk Size: 8 tokens, 50% Overlap (Stride = 4):
Chunk 1: [0 1 2 3 4 5 6 7]
Chunk 2:       [4 5 6 7 8 9 10 11]  ← Includes tokens 4-7 again
Chunk 3:             [8 9 10 11 12 13 14 15]

Benefit: Queries spanning boundaries (e.g., about tokens 7-8) 
         now found in BOTH chunk 1 and chunk 2
\`\`\`

## Why Overlap Matters

### Problem: Information Lost at Boundaries
\`\`\`
Text: "Machine learning enables data analysis.
       Traditional methods were slower."

Chunk 1 (no overlap): "Machine learning enables data analysis."
Chunk 2 (no overlap): "Traditional methods were slower."

Issue: Comparison between ML and traditional methods
       is split across boundary
       Relevant chunk may not be retrieved
\`\`\`

### Solution: Overlap Preserves Context
\`\`\`
Chunk 1 (with overlap): "Machine learning enables data analysis."
Chunk 2 (with overlap): "enables data analysis. Traditional methods were slower."

Now: Full context spans both chunks
     "enables data analysis" appears in both
     Comparison is captured in chunk 2
\`\`\`

## Overlap Percentages and Trade-offs

### 0% Overlap (No Overlap)
- **Cost**: Minimal storage and processing
- **Context**: No boundary redundancy
- **Use Case**: Cost-critical, independent chunks
- **Issue**: Boundary context loss (worst case)

### 10% Overlap
- **Size Example**: 512 tokens × 10% = 51 token overlap
- **Cost**: Minimal overhead (+10%)
- **Context**: Light boundary context
- **Use Case**: Budget-conscious, lower context needs
- **Trade-off**: Risk of boundary information loss

### 20% Overlap (RECOMMENDED)
- **Size Example**: 512 tokens × 20% = 102 token overlap
- **Cost**: Reasonable (+20%)
- **Context**: Good boundary context preservation
- **Use Case**: Most production systems use this
- **Trade-off**: Balanced cost vs. quality

### 33% Overlap
- **Size Example**: 512 tokens × 33% = 171 token overlap
- **Cost**: Moderate (+33%)
- **Context**: Strong boundary context
- **Use Case**: Important information near boundaries
- **Trade-off**: Higher cost for better quality

### 50% Overlap
- **Size Example**: 512 tokens × 50% = 256 token overlap
- **Cost**: High (+50%), effectively double coverage
- **Context**: Maximum boundary context
- **Use Case**: Critical applications, complex documents
- **Trade-off**: High cost for maximum coverage

## Calculation

### Formula
\`\`\`
Overlap Tokens = Chunk Size × (Overlap Ratio / 100)

Stride (Step Size) = Chunk Size - Overlap Tokens

Example:
Chunk Size: 512
Overlap Ratio: 20%
Overlap Tokens: 512 × 0.20 = 102.4 ≈ 102
Stride: 512 - 102 = 410
\`\`\`

### Stride Relationship
\`\`\`
Stride = Chunk Size - Overlap
Or: Overlap = Chunk Size - Stride

If Stride < Chunk Size: Creates overlap
If Stride = Chunk Size: No overlap
If Stride > Chunk Size: Creates gaps (bad)
\`\`\`

## When Overlap Helps

### Boundary-Critical Information
\`\`\`
Text: "Python is a language. Important for data science."
             └─ Split point likely here

Chunk 1 (no overlap): "Python is a language."
Chunk 2 (no overlap): "Important for data science."

Problem: Connection lost

Chunk 1 (20% overlap): "Python is a language."
Chunk 2 (20% overlap): "is a language. Important for data science."

Solution: "Important for" now connects Python to data science
\`\`\`

### Named Entities Across Boundaries
\`\`\`
Text: "Machine learning algorithms enable...
       ML has applications in..."

Chunk 1: "Machine learning algorithms enable..."
Chunk 2 (no overlap): "ML has applications in..." (loses "Machine learning" context)
Chunk 2 (with overlap): "algorithms enable... ML has applications in..." (preserves context)
\`\`\`

### Multi-Sentence Concepts
\`\`\`
Text: "Deep learning requires large datasets.
       Training takes weeks.
       The results are worth it."

Chunk 1 (no overlap): "Deep learning requires large datasets. Training takes weeks."
Chunk 2 (no overlap): "The results are worth it." (detached from context)

Chunk 1 (20% overlap): First two sentences
Chunk 2 (20% overlap): Last two sentences plus first one

Result: "Training takes weeks" in both chunks, maintains continuity
\`\`\`

## Overlap by Content Type

### News Articles (Topic Often Isolated)
- Recommended: 10-15% overlap
- Rationale: Most topics self-contained
- Reasoning: Paragraphs typically independent

### Technical Documentation (Concepts Build)
- Recommended: 20-30% overlap
- Rationale: Each concept builds on previous
- Reasoning: May reference earlier sections

### Research Papers (Dense, Cross-referencing)
- Recommended: 30-40% overlap
- Rationale: High concept density, frequent references
- Reasoning: Complex material needs context

### Code (Modular, Self-contained)
- Recommended: 0-10% overlap
- Rationale: Functions are independent
- Reasoning: Less benefit from overlap

### Legal Documents (Precise Dependencies)
- Recommended: 30-50% overlap
- Rationale: Clauses reference other clauses
- Reasoning: Maximum accuracy needed

## Storage Impact

### Example: 100,000-token document with 512-token chunks

\`\`\`
Without Overlap:
Chunks: 100,000 / 512 = ~195 chunks
Storage: 195 × 512 = 99,840 tokens
Embeddings: 195

10% Overlap:
Chunks: 100,000 / (512 × 0.9) = ~217 chunks
Storage: 217 × 512 = 111,104 tokens (+11%)
Embeddings: 217 (+11%)

20% Overlap:
Chunks: 100,000 / (512 × 0.8) = ~244 chunks
Storage: 244 × 512 = 124,928 tokens (+25%)
Embeddings: 244 (+25%)

50% Overlap:
Chunks: 100,000 / (512 × 0.5) = ~390 chunks
Storage: 390 × 512 = 199,680 tokens (+100%)
Embeddings: 390 (+100%)
\`\`\`

## Cost Analysis

### Monthly Cost Increase (10M Documents, 5K tokens each)

\`\`\`
Model: text-embedding-3-small ($0.02 per 1M)

No Overlap:
Chunks: ~97.7M
Cost: ~$1,954

10% Overlap:
Chunks: ~108M
Cost: ~$2,160 (Delta: +$206, +10.5%)

20% Overlap:
Chunks: ~122M
Cost: ~$2,440 (Delta: +$486, +24.9%)

50% Overlap:
Chunks: ~195M
Cost: ~$3,900 (Delta: +$1,946, +99.5%)
\`\`\`

## Selection Strategy

### Step 1: Assess Boundary Risk
- High risk of information loss: Use higher overlap (30-50%)
- Medium risk: Use standard (20%)
- Low risk: Use lower overlap (10%)

### Step 2: Check Budget
- Cost-critical: Use 10% or 0%
- Balanced: Use 20% (recommended)
- Quality-critical: Use 30-50%

### Step 3: Content Type
Use recommended ranges by content type (see previous section)

### Step 4: Test and Measure
\`\`\`python
for overlap_ratio in [0, 10, 20, 30, 50]:
    chunks = create_chunks(doc, overlap=overlap_ratio)
    quality = evaluate_retrieval(chunks, test_queries)
    cost = calculate_cost(chunks)
    print(f"Overlap: {overlap_ratio}% - Quality: {quality}, Cost: {cost}")
\`\`\`

### Step 5: Choose Optimal
Select overlap that best balances quality and cost for your needs.

## Implementation

### Creating Overlap
\`\`\`python
# Stride-based approach
chunk_size = 512
overlap_ratio = 0.20
overlap_tokens = int(chunk_size * overlap_ratio)
stride = chunk_size - overlap_tokens  # 410

chunks = []
pos = 0
while pos < len(tokens):
    end = min(pos + chunk_size, len(tokens))
    chunks.append(tokens[pos:end])
    pos += stride
\`\`\`

### Deduplication During Retrieval
\`\`\`python
# When retrieving overlapping chunks, deduplicate
retrieved_chunks = retrieve(query, top_k=5)
deduplicated = []

for chunk in retrieved_chunks:
    # Check if we already have similar content
    if not already_have_chunk(chunk.content):
        deduplicated.append(chunk)

return deduplicated
\`\`\`

## Best Practices

1. **Start with 20%**: Recommended baseline for most systems
2. **Test on Your Data**: Validate on actual use cases
3. **Monitor Quality**: Track retrieval metrics
4. **Consider Content**: Adjust based on document type
5. **Track Costs**: Monitor embedding and storage costs
6. **Document Choice**: Record overlap settings used
7. **Adjust Gradually**: Change 5-10% at a time

## When to Increase Overlap

- Retrieval quality < 75%
- Many boundary-spanning queries
- Critical accuracy needed
- Complex, interconnected content
- Dense technical material

## When to Decrease Overlap

- Cost is primary concern
- Chunk quality high without overlap
- Independent content sections
- Storage is limited
- Real-time latency critical

## Monitoring Metrics

\`\`\`python
metrics = {
    'boundary_spanning_queries': 0.15,  # % of queries span boundaries
    'retrieval_with_overlap': 0.88,
    'retrieval_without_overlap': 0.81,
    'quality_improvement': 0.07,        # 7% improvement from overlap
    'storage_overhead': 0.20,           # 20% extra storage
    'cost_per_improvement': 7.0         # Cost per % quality improvement
}
\`\`\`

## Conclusion

Chunk overlap is a cost-effective way to improve retrieval quality by preserving context across chunk boundaries. The recommended 20% overlap provides a good balance for most systems. Adjust based on your content type, quality requirements, and budget constraints. Higher overlap (30-50%) is beneficial for complex, interconnected content where boundary information is critical.
`,jr=`## Introduction
Context window is the maximum number of tokens an LLM can process in a single request. It constrains how much chunked content can be included in prompts and directly influences optimal chunk size and retrieval strategy.

## Context Window Evolution

### Historical Perspective
\`\`\`
2020: GPT-3       → 4,096 tokens (4K)
2021: GPT-3.5     → 4,096 tokens (4K)
2022: GPT-4       → 8,192 tokens (8K), then 32,768 (32K)
2023: GPT-4 Turbo → 128,000 tokens (128K)
2024: Gemini 1.5  → 1,000,000 tokens (1M)
2024: Claude 3.5  → 200,000 tokens (200K)
\`\`\`

### Current Major Models (2024)
\`\`\`
Model                 Context Window    Tier
GPT-3.5-turbo        4,096 / 16,384    Entry
GPT-4               8,192 / 32,768     Professional
GPT-4 Turbo        128,000             Advanced
Claude 3 Opus      200,000             Premium
Gemini 1.5 Pro     1,000,000           Ultra
\`\`\`

## Impact on Chunking

Larger context windows reduce the critical importance of chunking:

\`\`\`
4K Context (GPT-3.5):
Total: 4,096 tokens
- System Prompt: 300
- Query: 200
- Response: 1,500
- Overhead: 200
= 1,896 tokens for chunks
Can fit: ~3-4 chunks (256-512 tokens)

128K Context (GPT-4 Turbo):
Total: 128,000 tokens
- System Prompt: 500
- Query: 500
- Response: 2,000
- Overhead: 1,000
= 123,500 tokens for chunks
Can fit: ~40-80 chunks (512-1024 tokens)
\`\`\`

## Token Budget Allocation

### Framework
\`\`\`
Total Context Window
├─ System Prompt (200-500 tokens)
├─ User Query (100-1000 tokens)
├─ Retrieved Chunks (X tokens) ← Variable
├─ Response Buffer (1000-5000 tokens)
└─ Overhead/Safety (1000-2000 tokens)
\`\`\`

### Calculation
\`\`\`python
retrieval_budget = total_context - system - query - response - overhead

Example (GPT-4 Turbo):
retrieval_budget = 128000 - 500 - 500 - 2000 - 1000
                 = 124,000 tokens available
                 
With 20 chunks:
max_chunk_size = 124,000 / 20 = 6,200 tokens
With 40 chunks:
max_chunk_size = 124,000 / 40 = 3,100 tokens
\`\`\`

## Optimal Chunk Size by Context Window

### 4K-8K Context (Entry Level)
\`\`\`
Available: ~1,500-3,500 tokens for chunks
Optimal Chunk Size: 256-512 tokens
Chunks to Retrieve: 3-6
Strategy: High precision, minimal context
Recommendation: Recursive or semantic chunking
\`\`\`

### 16K-32K Context (Professional)
\`\`\`
Available: ~10,000-20,000 tokens for chunks
Optimal Chunk Size: 512-1,024 tokens
Chunks to Retrieve: 10-20
Strategy: Balanced precision and context
Recommendation: Recursive or sliding window
\`\`\`

### 64K-128K Context (Advanced)
\`\`\`
Available: ~50,000-100,000 tokens for chunks
Optimal Chunk Size: 1,024-2,048 tokens
Chunks to Retrieve: 30-80
Strategy: Rich context, comprehensive retrieval
Recommendation: Larger chunks or parent-child
\`\`\`

### 200K+ Context (Ultra)
\`\`\`
Available: ~150,000+ tokens for chunks
Optimal Chunk Size: 2,048-4,096+ tokens
Chunks to Retrieve: 50-100+
Strategy: Can retrieve majority of document
Recommendation: Full document or minimal chunking
\`\`\`

## Impact on Retrieval Strategy

### With Small Context (4K)
\`\`\`
Strategy: Single Best Chunk
- Retrieve only most relevant chunk
- Minimize chunk size
- High precision required
- No luxury of multiple chunks for comparison
\`\`\`

### With Medium Context (32K)
\`\`\`
Strategy: Top-K Chunks
- Retrieve 5-10 best chunks
- Balance precision and context
- Can include chunks from different sections
- Aggregate information
\`\`\`

### With Large Context (128K)
\`\`\`
Strategy: Comprehensive Retrieval
- Retrieve 20-30+ chunks
- Include full sections for context
- Multiple perspectives on query
- Rich background information
\`\`\`

### With Massive Context (1M)
\`\`\`
Strategy: Minimal Chunking
- Retrieve entire sections
- Or process near-full document
- Chunking becomes optimization choice
- Multiple documents retrievable
\`\`\`

## Model-Specific Considerations

### OpenAI Models
\`\`\`
GPT-3.5-turbo:
- Standard: 4,096 tokens
- Extended: 16,384 tokens
- Recommendation: 256-512 chunk size

GPT-4:
- Standard: 8,192 tokens
- Extended: 32,768 tokens
- Recommendation: 512-1,024 chunk size

GPT-4 Turbo:
- Extended: 128,000 tokens
- Recommendation: 1,024-2,048 chunk size
\`\`\`

### Anthropic Claude
\`\`\`
Claude 3:
- All models: 200,000 tokens
- Recommendation: 1,024-2,048 chunk size
- Advantage: Consistent across models
\`\`\`

### Google Gemini
\`\`\`
Gemini 1.5:
- Standard: 1,000,000 tokens
- Recommendation: 2,048-4,096 chunk size
- Note: Ultra-high context enables new approaches
\`\`\`

## Chunking Strategy by Context Window

\`\`\`
Context Size    Chunk Size    Overlap    Chunks    Retrieval Method
4K              256           10%        3-4       Single best
8K              256-512       15%        5-8       Top-K
16K             512           20%        8-15      Multi-chunk
32K             512-1024      20%        10-20     Comprehensive
64K             1024          20%        20-40     Rich context
128K            1024-2048     20%        30-60     Document-level
200K            2048-4096     20%        40-80     Multi-document
1M+             4096+         20%        50-100+   Full collection
\`\`\`

## Cost Implications

### Input Token Costs by Model
\`\`\`
GPT-3.5-turbo:     $0.50 per 1M input tokens
GPT-4:             $30 per 1M input tokens
GPT-4 Turbo:       $10 per 1M input tokens
Claude 3:          $3 per 1M input tokens
Gemini 1.5:        $1.25 per 1M input tokens
\`\`\`

### Cost per Query

\`\`\`
Query with 10,000 token context:

GPT-3.5-turbo: 10,000 × ($0.50/1M) = $0.000005
GPT-4:        10,000 × ($30/1M)  = $0.0003
GPT-4 Turbo:  10,000 × ($10/1M)  = $0.0001
Claude 3:     10,000 × ($3/1M)   = $0.00003
Gemini 1.5:   10,000 × ($1.25/1M)= $0.0000125
\`\`\`

Larger context windows + more chunks = higher per-query cost for input tokens.

## Token Counting Tools

### For Different Models
\`\`\`python
# OpenAI - GPT models
import tiktoken
enc = tiktoken.encoding_for_model("gpt-4")
tokens = enc.encode(text)

# Transformers
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("gpt2")
tokens = tokenizer.encode(text)

# Hugging Face
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-2-7b")
tokens = tokenizer.encode(text)

# Character-based estimation (rough)
tokens_estimate = len(text) / 4  # ~4 chars per token
\`\`\`

## Planning Framework

### Step 1: Identify Target Model
\`\`\`
Decision: Which LLM(s) will you use?
Options: GPT-4, Claude 3, Gemini, etc.
Impact: Determines context window size
\`\`\`

### Step 2: Check Context Window
\`\`\`
Research: Look up exact context window
Available: Total tokens model can handle
Example: Claude 3 = 200,000 tokens
\`\`\`

### Step 3: Calculate Retrieval Budget
\`\`\`
Formula: Budget = Context - Prompt - Query - Response - Overhead
Example: 200,000 - 500 - 500 - 2,000 - 1,000 = 196,000 tokens
\`\`\`

### Step 4: Decide Chunk Count
\`\`\`
Decision: How many chunks to retrieve?
Typical: 5-20 chunks for most queries
Maximum: Context_budget / min_chunk_size
Example: 196,000 / 256 = 765 possible chunks (unrealistic)
\`\`\`

### Step 5: Calculate Optimal Chunk Size
\`\`\`
Formula: Optimal_size = Budget / Desired_chunks
Example: 196,000 / 20 = 9,800 tokens per chunk
Reality Check: Too large, scale back
Adjusted: Use 1,024-2,048 per chunk, retrieve 40-80
\`\`\`

### Step 6: Verify Against Embedding Model
\`\`\`
Check: Is chunk size aligned with embedding model training?
Most: Trained on 256-512 tokens
Action: If calculated size much larger, reconsider
\`\`\`

## Future Considerations

### Trend: Rapidly Expanding Context Windows
- 1M tokens becoming common (2024-2025)
- 10M+ tokens being researched
- Implication: Chunking less critical in future

### Shift in Strategy
\`\`\`
2024: Still need intelligent chunking
2025: Can retrieve most documents
2026+: Near full-document context possible
\`\`\`

### Archival Paradox
\`\`\`
As context expands:
- Less need for chunking fragmentation
- But more need for relevance ranking
- Focus shifts to retrieval ranking vs splitting
- Chunking optimization less critical
\`\`\`

## Best Practices

1. **Know Your Context**: Understand your model's exact context window
2. **Plan Budget**: Allocate tokens systematically
3. **Conservative Estimate**: Use smaller budgets than theoretical
4. **Include Overhead**: Account for system prompt, response, errors
5. **Test on Real Data**: Validate that chunks fit and work
6. **Monitor Usage**: Track actual token usage
7. **Plan for Growth**: Expect context windows to expand

## When Context Window Constraints Matter

- **Small Windows (4K-8K)**: Critical to optimize chunking
- **Medium Windows (16K-32K)**: Important to plan well
- **Large Windows (128K+)**: Less critical, more flexibility
- **Massive Windows (200K+)**: Chunking becomes optional

## Conclusion

Context window is a critical parameter that constrains chunking strategy. While historically it was the driving force behind sophisticated chunking, expanding context windows (200K+) are reducing its importance. However, understanding your model's context window and planning token budgets remains essential for cost-effective, quality RAG systems. As context windows continue to expand, focus will shift from chunking optimization to retrieval ranking and relevance scoring.
`;function Mr(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var Nr=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Pr=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Fr={};function Ir(e,t){return((t||Fr).jsx?Pr:Nr).test(e)}var Lr=/[ \t\n\f\r]/g;function Rr(e){return typeof e==`object`?e.type===`text`?zr(e.value):!1:zr(e)}function zr(e){return e.replace(Lr,``)===``}var Br=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};Br.prototype.normal={},Br.prototype.property={},Br.prototype.space=void 0;function Vr(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new Br(n,r,t)}function Hr(e){return e.toLowerCase()}var Ur=class{constructor(e,t){this.attribute=t,this.property=e}};Ur.prototype.attribute=``,Ur.prototype.booleanish=!1,Ur.prototype.boolean=!1,Ur.prototype.commaOrSpaceSeparated=!1,Ur.prototype.commaSeparated=!1,Ur.prototype.defined=!1,Ur.prototype.mustUseProperty=!1,Ur.prototype.number=!1,Ur.prototype.overloadedBoolean=!1,Ur.prototype.property=``,Ur.prototype.spaceSeparated=!1,Ur.prototype.space=void 0;var Wr=s({boolean:()=>P,booleanish:()=>F,commaOrSpaceSeparated:()=>Jr,commaSeparated:()=>qr,number:()=>I,overloadedBoolean:()=>Kr,spaceSeparated:()=>L}),Gr=0,P=Yr(),F=Yr(),Kr=Yr(),I=Yr(),L=Yr(),qr=Yr(),Jr=Yr();function Yr(){return 2**++Gr}var Xr=Object.keys(Wr),Zr=class extends Ur{constructor(e,t,n,r){let i=-1;if(super(e,t),Qr(this,`space`,r),typeof n==`number`)for(;++i<Xr.length;){let e=Xr[i];Qr(this,Xr[i],(n&Wr[e])===Wr[e])}}};Zr.prototype.defined=!0;function Qr(e,t,n){n&&(e[t]=n)}function $r(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new Zr(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[Hr(r)]=r,n[Hr(a.attribute)]=r}return new Br(t,n,e.space)}var ei=$r({properties:{ariaActiveDescendant:null,ariaAtomic:F,ariaAutoComplete:null,ariaBusy:F,ariaChecked:F,ariaColCount:I,ariaColIndex:I,ariaColSpan:I,ariaControls:L,ariaCurrent:null,ariaDescribedBy:L,ariaDetails:null,ariaDisabled:F,ariaDropEffect:L,ariaErrorMessage:null,ariaExpanded:F,ariaFlowTo:L,ariaGrabbed:F,ariaHasPopup:null,ariaHidden:F,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:L,ariaLevel:I,ariaLive:null,ariaModal:F,ariaMultiLine:F,ariaMultiSelectable:F,ariaOrientation:null,ariaOwns:L,ariaPlaceholder:null,ariaPosInSet:I,ariaPressed:F,ariaReadOnly:F,ariaRelevant:null,ariaRequired:F,ariaRoleDescription:L,ariaRowCount:I,ariaRowIndex:I,ariaRowSpan:I,ariaSelected:F,ariaSetSize:I,ariaSort:null,ariaValueMax:I,ariaValueMin:I,ariaValueNow:I,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function ti(e,t){return t in e?e[t]:t}function ni(e,t){return ti(e,t.toLowerCase())}var ri=$r({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:qr,acceptCharset:L,accessKey:L,action:null,allow:null,allowFullScreen:P,allowPaymentRequest:P,allowUserMedia:P,alpha:P,alt:null,as:null,async:P,autoCapitalize:null,autoComplete:L,autoFocus:P,autoPlay:P,blocking:L,capture:null,charSet:null,checked:P,cite:null,className:L,closedBy:null,colorSpace:null,cols:I,colSpan:I,command:null,commandFor:null,content:null,contentEditable:F,controls:P,controlsList:L,coords:I|qr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:P,defer:P,dir:null,dirName:null,disabled:P,download:Kr,draggable:F,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:P,formTarget:null,headers:L,height:I,hidden:Kr,high:I,href:null,hrefLang:null,htmlFor:L,httpEquiv:L,id:null,imageSizes:null,imageSrcSet:null,inert:P,inputMode:null,integrity:null,is:null,isMap:P,itemId:null,itemProp:L,itemRef:L,itemScope:P,itemType:L,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:P,low:I,manifest:null,max:null,maxLength:I,media:null,method:null,min:null,minLength:I,multiple:P,muted:P,name:null,nonce:null,noModule:P,noValidate:P,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:P,optimum:I,pattern:null,ping:L,placeholder:null,playsInline:P,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:P,referrerPolicy:null,rel:L,required:P,reversed:P,rows:I,rowSpan:I,sandbox:L,scope:null,scoped:P,seamless:P,selected:P,shadowRootClonable:P,shadowRootCustomElementRegistry:P,shadowRootDelegatesFocus:P,shadowRootMode:null,shadowRootSerializable:P,shape:null,size:I,sizes:null,slot:null,span:I,spellCheck:F,src:null,srcDoc:null,srcLang:null,srcSet:null,start:I,step:null,style:null,tabIndex:I,target:null,title:null,translate:null,type:null,typeMustMatch:P,useMap:null,value:F,width:I,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:L,axis:null,background:null,bgColor:null,border:I,borderColor:null,bottomMargin:I,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:P,declare:P,event:null,face:null,frame:null,frameBorder:null,hSpace:I,leftMargin:I,link:null,longDesc:null,lowSrc:null,marginHeight:I,marginWidth:I,noResize:P,noHref:P,noShade:P,noWrap:P,object:null,profile:null,prompt:null,rev:null,rightMargin:I,rules:null,scheme:null,scrolling:F,standby:null,summary:null,text:null,topMargin:I,valueType:null,version:null,vAlign:null,vLink:null,vSpace:I,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:P,disablePictureInPicture:P,disableRemotePlayback:P,exportParts:qr,part:L,prefix:null,property:null,results:I,security:null,unselectable:null},space:`html`,transform:ni}),ii=$r({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,maskType:`mask-type`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:Jr,accentHeight:I,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:I,amplitude:I,arabicForm:null,ascent:I,attributeName:null,attributeType:null,azimuth:I,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:I,by:null,calcMode:null,capHeight:I,className:L,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:I,diffuseConstant:I,direction:null,display:null,dur:null,divisor:I,dominantBaseline:null,download:P,dx:null,dy:null,edgeMode:null,editable:null,elevation:I,enableBackground:null,end:null,event:null,exponent:I,externalResourcesRequired:null,fill:null,fillOpacity:I,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:qr,g2:qr,glyphName:qr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:I,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:I,horizOriginX:I,horizOriginY:I,id:null,ideographic:I,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:I,k:I,k1:I,k2:I,k3:I,k4:I,kernelMatrix:Jr,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:I,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:I,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:I,overlineThickness:I,paintOrder:null,panose1:null,path:null,pathLength:I,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:L,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:I,pointsAtY:I,pointsAtZ:I,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Jr,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Jr,rev:Jr,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Jr,requiredFeatures:Jr,requiredFonts:Jr,requiredFormats:Jr,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:I,specularExponent:I,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:I,strikethroughThickness:I,string:null,stroke:null,strokeDashArray:Jr,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:I,strokeOpacity:I,strokeWidth:null,style:null,surfaceScale:I,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Jr,tabIndex:I,tableValues:null,target:null,targetX:I,targetY:I,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Jr,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:I,underlineThickness:I,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:I,values:null,vAlphabetic:I,vMathematical:I,vectorEffect:null,vHanging:I,vIdeographic:I,version:null,vertAdvY:I,vertOriginX:I,vertOriginY:I,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:I,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:ti}),ai=$r({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),oi=$r({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:ni}),si=$r({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),ci={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},li=/[A-Z]/g,ui=/-[a-z]/g,R=/^data[-\w.:]+$/i;function di(e,t){let n=Hr(t),r=t,i=Ur;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&R.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(ui,pi);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!ui.test(e)){let n=e.replace(li,fi);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=Zr}return new i(r,t)}function fi(e){return`-`+e.toLowerCase()}function pi(e){return e.charAt(1).toUpperCase()}var mi=Vr([ei,ri,ai,oi,si],`html`),hi=Vr([ei,ii,ai,oi,si],`svg`);function gi(e){return e.join(` `).trim()}var _i=o(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g,u=`/`,d=`*`,f=``;function p(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,p=1;function h(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(`
`);p=~n?e.length-n:p+e.length}function g(){var e={line:l,column:p};return function(t){return t.position=new _(e),b(),t}}function _(e){this.start=e,this.end={line:l,column:p},this.source=t.source}_.prototype.content=e;function v(n){var r=Error(t.source+`:`+l+`:`+p+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=p,r.source=e,!t.silent)throw r}function y(t){var n=t.exec(e);if(n){var r=n[0];return h(r),e=e.slice(r.length),n}}function b(){y(i)}function x(e){var t;for(e||=[];t=S();)t!==!1&&e.push(t);return e}function S(){var t=g();if(!(u!=e.charAt(0)||d!=e.charAt(1))){for(var n=2;f!=e.charAt(n)&&(d!=e.charAt(n)||u!=e.charAt(n+1));)++n;if(n+=2,f===e.charAt(n-1))return v(`End of comment missing`);var r=e.slice(2,n-2);return p+=2,h(r),e=e.slice(n),p+=2,t({type:`comment`,comment:r})}}function C(){var e=g(),t=y(a);if(t){if(S(),!y(o))return v(`property missing ':'`);var r=y(s),i=e({type:`declaration`,property:m(t[0].replace(n,f)),value:r?m(r[0].replace(n,f)):f});return y(c),i}}function w(){var e=[];x(e);for(var t;t=C();)t!==!1&&(e.push(t),x(e));return e}return b(),w()}function m(e){return e?e.replace(l,f):f}t.exports=p})),vi=o((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=t(_i());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),yi=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),bi=o(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(vi()),r=yi();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),xi=Ci(`end`),Si=Ci(`start`);function Ci(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function wi(e){let t=Si(e),n=xi(e);if(t&&n)return{start:t,end:n}}function Ti(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?Di(e.position):`start`in e||`end`in e?Di(e):`line`in e||`column`in e?Ei(e):``}function Ei(e){return Oi(e&&e.line)+`:`+Oi(e&&e.column)}function Di(e){return Ei(e&&e.start)+`-`+Ei(e&&e.end)}function Oi(e){return e&&typeof e==`number`?e:1}var ki=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=Ti(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};ki.prototype.file=``,ki.prototype.name=``,ki.prototype.reason=``,ki.prototype.message=``,ki.prototype.stack=``,ki.prototype.column=void 0,ki.prototype.line=void 0,ki.prototype.ancestors=void 0,ki.prototype.cause=void 0,ki.prototype.fatal=void 0,ki.prototype.place=void 0,ki.prototype.ruleId=void 0,ki.prototype.source=void 0;var Ai=l(bi(),1),ji={}.hasOwnProperty,Mi=new Map,Ni=/[A-Z]/g,Pi=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),Fi=new Set([`td`,`th`]);function Ii(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=qi(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=Ki(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?hi:mi,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Li(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Li(e,t,n){if(t.type===`element`)return Ri(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return zi(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return Vi(e,t,n);if(t.type===`mdxjsEsm`)return Bi(e,t);if(t.type===`root`)return Hi(e,t,n);if(t.type===`text`)return Ui(e,t)}function Ri(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=hi,e.schema=i),e.ancestors.push(t);let a=Zi(e,t.tagName,!1),o=Ji(e,t),s=z(e,t);return Pi.has(t.tagName)&&(s=s.filter(function(e){return typeof e==`string`?!Rr(e):!0})),Wi(e,o,a,t),Gi(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function zi(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}Qi(e,t.position)}function Bi(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Qi(e,t.position)}function Vi(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=hi,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:Zi(e,t.name,!0),o=Yi(e,t),s=z(e,t);return Wi(e,o,a,t),Gi(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Hi(e,t,n){let r={};return Gi(r,z(e,t)),e.create(t,e.Fragment,r,n)}function Ui(e,t){return t.value}function Wi(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Gi(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function Ki(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function qi(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Si(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function Ji(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&ji.call(t.properties,i)){let a=B(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&Fi.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function Yi(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`)if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Qi(e,t.position);else{let i=r.name,a;if(r.value&&typeof r.value==`object`)if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else Qi(e,t.position);else a=r.value===null?!0:r.value;n[i]=a}return n}function z(e,t){let n=[],r=-1,i=e.passKeys?new Map:Mi;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=Li(e,a,o);s!==void 0&&n.push(s)}return n}function B(e,t,n){let r=di(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Mr(n):gi(n)),r.property===`style`){let t=typeof n==`object`?n:Xi(e,String(n));return e.stylePropertyNameCase===`css`&&(t=$i(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?ci[r.property]||r.property:r.attribute,n]}}function Xi(e,t){try{return(0,Ai.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new ki("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=`https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute`,r}}function Zi(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=Ir(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=Ir(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return ji.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);Qi(e)}function Qi(e,t){let n=new ki("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=`https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-handle-mdx-estrees-without-createevaluater`,n}function $i(e){let t={},n;for(n in e)ji.call(e,n)&&(t[ea(n)]=e[n]);return t}function ea(e){let t=e.replace(Ni,ta);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function ta(e){return`-`+e.toLowerCase()}var na={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},ra=o((e=>{var t=d(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),ia=o(((e,t)=>{t.exports=ra()})),aa={};function oa(e,t){let n=t||aa;return sa(e,typeof n.includeImageAlt==`boolean`?n.includeImageAlt:!0,typeof n.includeHtml==`boolean`?n.includeHtml:!0)}function sa(e,t,n){if(la(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return ca(e.children,t,n)}return Array.isArray(e)?ca(e,t,n):``}function ca(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=sa(e[i],t,n);return r.join(``)}function la(e){return!!(e&&typeof e==`object`)}function ua(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function da(e,t){return e.length>0?(ua(e,e.length,0,t),e):t}var fa={}.hasOwnProperty;function pa(e){let t={},n=-1;for(;++n<e.length;)ma(t,e[n]);return t}function ma(e,t){let n;for(n in t){let r=(fa.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){fa.call(r,a)||(r[a]=[]);let e=i[a];ha(r[a],Array.isArray(e)?e:e?[e]:[])}}}function ha(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);ua(e,0,0,r)}var ga=G(/[A-Za-z]/),V=G(/[\dA-Za-z]/),_a=G(/[#-'*+\--9=?A-Z^-~]/);function va(e){return e!==null&&(e<32||e===127)}var ya=G(/\d/),ba=G(/[\dA-Fa-f]/),xa=G(/[!-/:-@[-`{-~]/);function H(e){return e!==null&&e<-2}function U(e){return e!==null&&(e<0||e===32)}function W(e){return e===-2||e===-1||e===32}var Sa=G(/\p{P}|\p{S}/u),Ca=G(/\s/);function G(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function K(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return W(r)?(e.enter(n),s(r)):t(r)}function s(r){return W(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var wa={tokenize:Ta};function Ta(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),K(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return H(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var Ea={tokenize:Oa},Da={tokenize:ka};function Oa(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;return ua(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Da,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(Da,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return H(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;ua(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-->r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function ka(e,t,n){return K(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function Aa(e){if(e===null||U(e)||Ca(e))return 1;if(Sa(e))return 2}function ja(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var Ma={name:`attention`,resolveAll:Na,tokenize:Pa};function Na(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d={...e[r][1].end},f={...e[n][1].start};Fa(d,-c),Fa(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:{...e[r][1].end}},s={type:c>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:f},a={type:c>1?`strongText`:`emphasisText`,start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?`strong`:`emphasis`,start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=da(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=da(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=da(l,ja(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=da(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=da(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,ua(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function Pa(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Aa(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=Aa(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function Fa(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var Ia={name:`autolink`,tokenize:La};function La(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return ga(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||V(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||V(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||va(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):_a(t)?(e.consume(t),l):n(t)}function u(e){return V(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||V(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var Ra={partial:!0,tokenize:za};function za(e,t,n){return r;function r(t){return W(t)?K(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||H(e)?t(e):n(e)}}var Ba={continuation:{tokenize:Ha},exit:Ua,name:`blockQuote`,tokenize:Va};function Va(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return W(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function Ha(e,t,n){let r=this;return i;function i(t){return W(t)?K(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(Ba,t,n)(r)}}function Ua(e){e.exit(`blockQuote`)}var Wa={name:`characterEscape`,tokenize:Ga};function Ga(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return xa(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var Ka=document.createElement(`i`);function qa(e){let t=`&`+e+`;`;Ka.innerHTML=t;let n=Ka.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`||n===t?!1:n}var Ja={name:`characterReference`,tokenize:Ya};function Ya(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=V,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=ba,u):(e.enter(`characterReferenceValue`),a=7,o=ya,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===V&&!qa(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var Xa={partial:!0,tokenize:$a},Za={concrete:!0,name:`codeFenced`,tokenize:Qa};function Qa(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),W(t)?K(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||H(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(Xa,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||H(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):W(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),K(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||H(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||H(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&W(t)?K(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||H(t)?e.check(Xa,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||H(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),W(t)?K(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),W(t)?K(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||H(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function $a(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var eo={name:`codeIndented`,tokenize:no},to={partial:!0,tokenize:ro};function no(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),K(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):H(t)?e.attempt(to,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||H(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function ro(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):H(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):K(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):H(e)?i(e):n(e)}}var io={name:`codeText`,previous:oo,resolve:ao,tokenize:so};function ao(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function oo(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function so(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):H(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||H(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var co=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&lo(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),lo(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),lo(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){let t=this.left.splice(e,1/0);lo(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);lo(this.left,t.reverse())}}};function lo(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function uo(e){let t={},n=-1,r,i,a,o,s,c,l,u=new co(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,fo(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(!(o[1].type===`linePrefix`||o[1].type===`listItemIndent`))break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return ua(e,0,1/0,u.slice(0)),!l}function fo(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var po={resolve:ho,tokenize:go},mo={partial:!0,tokenize:_o};function ho(e){return uo(e),e}function go(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):H(t)?e.check(mo,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function _o(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),K(e,a,`linePrefix`)}function a(i){if(i===null||H(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function q(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||va(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||H(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||U(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||va(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function vo(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):H(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||H(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!W(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function yo(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):H(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),K(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||H(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function bo(e,t){let n;return r;function r(i){return H(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):W(i)?K(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}function xo(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var So={name:`definition`,tokenize:J},Co={partial:!0,tokenize:wo};function J(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return vo.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=xo(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return U(t)?bo(e,l)(t):l(t)}function l(t){return q(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(Co,d,d)(t)}function d(t){return W(t)?K(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||H(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function wo(e,t,n){return r;function r(t){return U(t)?bo(e,i)(t):n(t)}function i(t){return yo(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return W(t)?K(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||H(e)?t(e):n(e)}}var To={name:`hardBreakEscape`,tokenize:Eo};function Eo(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return H(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var Do={name:`headingAtx`,resolve:Oo,tokenize:ko};function Oo(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},ua(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function ko(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||U(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||H(n)?(e.exit(`atxHeading`),t(n)):W(n)?K(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||U(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var Ao=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),jo=[`pre`,`script`,`style`,`textarea`],Mo={concrete:!0,name:`htmlFlow`,resolveTo:Fo,tokenize:Io},No={partial:!0,tokenize:Ro},Po={partial:!0,tokenize:Lo};function Fo(e){let t=e.length;for(;t--&&!(e[t][0]===`enter`&&e[t][1].type===`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Io(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:ae):ga(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):ga(a)?(e.consume(a),i=4,r.interrupt?t:ae):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:ae):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:D:m):n(i)}function h(t){return ga(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||U(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&jo.includes(l)?(i=1,r.interrupt?t(s):D(s)):Ao.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):D(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||V(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:D):n(i)}function v(t){return W(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||ga(t)?(e.consume(t),b):W(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||V(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):W(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):W(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||H(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||U(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||W(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),ee):n(t)}function ee(t){return t===null||H(t)?D(t):W(t)?(e.consume(t),ee):n(t)}function D(t){return t===45&&i===2?(e.consume(t),re):t===60&&i===1?(e.consume(t),k):t===62&&i===4?(e.consume(t),oe):t===63&&i===3?(e.consume(t),ae):t===93&&i===5?(e.consume(t),ie):H(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(No,se,O)(t)):t===null||H(t)?(e.exit(`htmlFlowData`),O(t)):(e.consume(t),D)}function O(t){return e.check(Po,te,se)(t)}function te(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ne}function ne(t){return t===null||H(t)?O(t):(e.enter(`htmlFlowData`),D(t))}function re(t){return t===45?(e.consume(t),ae):D(t)}function k(t){return t===47?(e.consume(t),o=``,A):D(t)}function A(t){if(t===62){let n=o.toLowerCase();return jo.includes(n)?(e.consume(t),oe):D(t)}return ga(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),A):D(t)}function ie(t){return t===93?(e.consume(t),ae):D(t)}function ae(t){return t===62?(e.consume(t),oe):t===45&&i===2?(e.consume(t),ae):D(t)}function oe(t){return t===null||H(t)?(e.exit(`htmlFlowData`),se(t)):(e.consume(t),oe)}function se(n){return e.exit(`htmlFlow`),t(n)}}function Lo(e,t,n){let r=this;return i;function i(t){return H(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function Ro(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(Ra,t,n)}}var zo={name:`htmlText`,tokenize:Bo};function Bo(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):ga(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):ga(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):H(t)?(o=d,k(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?re(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):H(t)?(o=h,k(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?re(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?re(t):H(t)?(o=v,k(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):H(t)?(o=y,k(t)):(e.consume(t),y)}function b(e){return e===62?re(e):y(e)}function x(t){return ga(t)?(e.consume(t),S):n(t)}function S(t){return t===45||V(t)?(e.consume(t),S):C(t)}function C(t){return H(t)?(o=C,k(t)):W(t)?(e.consume(t),C):re(t)}function w(t){return t===45||V(t)?(e.consume(t),w):t===47||t===62||U(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),re):t===58||t===95||ga(t)?(e.consume(t),E):H(t)?(o=T,k(t)):W(t)?(e.consume(t),T):re(t)}function E(t){return t===45||t===46||t===58||t===95||V(t)?(e.consume(t),E):ee(t)}function ee(t){return t===61?(e.consume(t),D):H(t)?(o=ee,k(t)):W(t)?(e.consume(t),ee):T(t)}function D(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,O):H(t)?(o=D,k(t)):W(t)?(e.consume(t),D):(e.consume(t),te)}function O(t){return t===i?(e.consume(t),i=void 0,ne):t===null?n(t):H(t)?(o=O,k(t)):(e.consume(t),O)}function te(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||U(t)?T(t):(e.consume(t),te)}function ne(e){return e===47||e===62||U(e)?T(e):n(e)}function re(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function k(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),A}function A(t){return W(t)?K(e,ie,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):ie(t)}function ie(t){return e.enter(`htmlTextData`),o(t)}}var Vo={name:`labelEnd`,resolveAll:Go,resolveTo:Ko,tokenize:qo},Ho={tokenize:Jo},Uo={tokenize:Yo},Wo={tokenize:Xo};function Go(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&ua(e,0,e.length,n),e}function Ko(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:{...e[a][1].start},end:{...e[e.length-1][1].end}},l={type:`label`,start:{...e[a][1].start},end:{...e[o][1].end}},u={type:`labelText`,start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return s=[[`enter`,c,t],[`enter`,l,t]],s=da(s,e.slice(a+1,a+r+3)),s=da(s,[[`enter`,u,t]]),s=da(s,ja(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=da(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=da(s,e.slice(o+1)),s=da(s,[[`exit`,c,t]]),ua(e,a,e.length,s),e}function qo(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(xo(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(Ho,u,o?u:d)(t):t===91?e.attempt(Uo,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(Wo,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function Jo(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return U(t)?bo(e,a)(t):a(t)}function a(t){return t===41?u(t):q(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return U(t)?bo(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?yo(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return U(t)?bo(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function Yo(e,t,n){let r=this;return i;function i(t){return vo.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(xo(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function Xo(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var Zo={name:`labelStartImage`,resolveAll:Vo.resolveAll,tokenize:Qo};function Qo(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var $o={name:`labelStartLink`,resolveAll:Vo.resolveAll,tokenize:es};function es(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var ts={name:`lineEnding`,tokenize:ns};function ns(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),K(e,t,`linePrefix`)}}var rs={name:`thematicBreak`,tokenize:is};function is(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||H(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),W(t)?K(e,s,`whitespace`)(t):s(t))}}var as={continuation:{tokenize:ls},exit:ds,name:`list`,tokenize:cs},os={partial:!0,tokenize:fs},ss={partial:!0,tokenize:us};function cs(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:ya(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(rs,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return ya(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(Ra,r.interrupt?n:u,e.attempt(os,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return W(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function ls(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Ra,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,K(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!W(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(ss,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,K(e,e.attempt(as,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function us(e,t,n){let r=this;return K(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function ds(e){e.exit(this.containerState.type)}function fs(e,t,n){let r=this;return K(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!W(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var ps={name:`setextUnderline`,resolveTo:ms,tokenize:hs};function ms(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push([`exit`,o,t]),e}function hs(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),W(t)?K(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||H(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var gs={tokenize:_s};function _s(e){let t=this,n=e.attempt(Ra,r,e.attempt(this.parser.constructs.flowInitial,i,K(e,e.attempt(this.parser.constructs.flow,i,e.attempt(po,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var vs={resolveAll:Ss()},ys=xs(`string`),bs=xs(`text`);function xs(e){return{resolveAll:Ss(e===`text`?Cs:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function Ss(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function Cs(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}var ws=s({attentionMarkers:()=>Ms,contentInitial:()=>Es,disable:()=>Ns,document:()=>Ts,flow:()=>Os,flowInitial:()=>Ds,insideSpan:()=>js,string:()=>ks,text:()=>As}),Ts={42:as,43:as,45:as,48:as,49:as,50:as,51:as,52:as,53:as,54:as,55:as,56:as,57:as,62:Ba},Es={91:So},Ds={[-2]:eo,[-1]:eo,32:eo},Os={35:Do,42:rs,45:[ps,rs],60:Mo,61:ps,95:rs,96:Za,126:Za},ks={38:Ja,92:Wa},As={[-5]:ts,[-4]:ts,[-3]:ts,33:Zo,38:Ja,42:Ma,60:[Ia,zo],91:$o,92:[To,Wa],93:Vo,95:Ma,96:io},js={null:[Ma,vs]},Ms={null:[42,95]},Ns={null:[]};function Ps(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=da(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=ja(a,l.events,l),l.events):[]}function f(e,t){return Is(p(e),t)}function p(e){return Fs(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){H(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&ua(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Fs(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Is(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function Ls(e){let t={constructs:pa([ws,...(e||{}).extensions||[]]),content:n(wa),defined:[],document:n(Ea),flow:n(gs),lazy:{},string:n(ys),text:n(bs)};return t;function n(e){return n;function n(n){return Ps(t,e,n)}}}function Rs(e){for(;!uo(e););return e}var zs=/[\0\t\n\r]/g;function Bs(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if(zs.lastIndex=u,c=zs.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}function Vs(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}var Hs=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Us(e){return e.replace(Hs,Ws)}function Ws(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return Vs(n.slice(t?2:1),t?16:10)}return qa(n)||e}var Gs={}.hasOwnProperty;function Ks(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),qs(n)(Rs(Ls(n).document().write(Bs()(e,t,!0))))}function qs(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:a(Ce),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(ye),blockQuote:a(me),characterEscape:T,characterReference:T,codeFenced:a(he),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(he,o),codeText:a(ge,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(_e),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(ve),hardBreakEscape:a(be),hardBreakTrailing:a(be),htmlFlow:a(xe,o),htmlFlowData:T,htmlText:a(xe,o),htmlTextData:T,image:a(Se),label:o,link:a(Ce),listItem:a(Te),listItemValue:f,listOrdered:a(we,d),listUnordered:a(we),paragraph:a(Ee),reference:j,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(ye),strong:a(De),thematicBreak:a(ke)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:pe,autolinkProtocol:fe,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:le,characterReferenceMarkerNumeric:le,characterReferenceValue:ue,characterReference:de,codeFenced:c(g),codeFencedFence:h,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(_),codeText:c(ne),codeTextData:E,data:E,definition:c(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(D),hardBreakTrailing:c(D),htmlFlow:c(O),htmlFlowData:E,htmlText:c(te),htmlTextData:E,image:c(k),label:ie,labelText:A,lineEnding:ee,link:c(re),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ce,resourceDestinationString:ae,resourceTitleString:oe,resource:se,setextHeading:c(w),setextHeadingLineSequence:C,setextHeadingText:S,strong:c(),thematicBreak:c()}};Ys(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[]},a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[],d=-1;for(;++d<e.length;)(e[d][1].type===`listOrdered`||e[d][1].type===`listUnordered`)&&(e[d][0]===`enter`?c.push(d):d=i(e,c.pop(),d));for(d=-1;++d<e.length;){let n=t[e[d][0]];Gs.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){let e=a.tokenStack[a.tokenStack.length-1];(e[1]||Zs).call(a,void 0,e[0])}for(r.position={start:Js(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:Js(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(!(t[1].type===`linePrefix`||t[1].type===`blockQuotePrefix`||t[1].type===`blockQuotePrefixWhitespace`||t[1].type===`blockQuoteMarker`||t[1].type===`listItemIndent`))break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}if(t[1].type===`listItemPrefix`){let i={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=i,e.splice(r,0,[`enter`,i,t[2]]),r++,n++,c=void 0,l=!0}}}return e[t][1]._spread=a,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:`fragment`,children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:Js(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||Zs).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+Ti({start:e.start,end:e.end})+`): it’s not open`);n.position.end=Js(e.end)}function u(){return oa(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function p(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function v(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=xo(this.sliceSerialize(e)).toLowerCase()}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function x(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function S(){this.data.setextHeadingSlurpLineEnding=!0}function C(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function T(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=Oe(),n.position={start:Js(e.start),end:void 0},t.push(n)),this.stack.push(n)}function E(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=Js(e.end)}function ee(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=Js(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(T.call(this,e),E.call(this,e))}function D(){this.data.atHardBreak=!0}function O(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function te(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ne(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function k(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function A(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=Us(t),n.identifier=xo(t).toLowerCase()}function ie(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function ae(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function oe(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function se(){this.data.inReference=void 0}function j(){this.data.referenceType=`collapsed`}function ce(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=xo(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function le(e){this.data.characterReferenceType=e.type}function ue(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=Vs(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=qa(t);let i=this.stack[this.stack.length-1];i.value+=r}function de(e){let t=this.stack.pop();t.position.end=Js(e.end)}function fe(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function pe(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function me(){return{type:`blockquote`,children:[]}}function he(){return{type:`code`,lang:null,meta:null,value:``}}function ge(){return{type:`inlineCode`,value:``}}function _e(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function ve(){return{type:`emphasis`,children:[]}}function ye(){return{type:`heading`,depth:0,children:[]}}function be(){return{type:`break`}}function xe(){return{type:`html`,value:``}}function Se(){return{type:`image`,title:null,url:``,alt:null}}function Ce(){return{type:`link`,title:null,url:``,children:[]}}function we(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function Te(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function Ee(){return{type:`paragraph`,children:[]}}function De(){return{type:`strong`,children:[]}}function Oe(){return{type:`text`,value:``}}function ke(){return{type:`thematicBreak`}}}function Js(e){return{line:e.line,column:e.column,offset:e.offset}}function Ys(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Ys(e,r):Xs(e,r)}}function Xs(e,t){let n;for(n in t)if(Gs.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function Zs(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+Ti({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ti({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+Ti({start:t.start,end:t.end})+`) is still open`)}function Qs(e){let t=this;t.parser=n;function n(n){return Ks(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}var $s=typeof self==`object`?self:globalThis,ec=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new $s[e](t)},tc=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o)e[r(t)]=r(n);return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(ec(e,t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}}return n(ec(a,o),i)};return r},nc=e=>tc(new Map,e)(0),rc=``,{toString:ic}={},{keys:ac}=Object,oc=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=ic.call(e).slice(8,-1);switch(n){case`Array`:return[1,rc];case`Object`:return[2,rc];case`Date`:return[3,rc];case`RegExp`:return[4,rc];case`Map`:return[5,rc];case`Set`:return[6,rc];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:n.includes(`Error`)?[7,n]:[2,n]},sc=([e,t])=>e===0&&(t===`function`||t===`symbol`),cc=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=r=>{if(n.has(r))return n.get(r);let[o,s]=oc(r);switch(o){case 0:{let t=r;switch(s){case`bigint`:o=8,t=r.toString();break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+s);t=null;break;case`undefined`:return i([-1],r)}return i([o,t],r)}case 1:{if(s){let e=r;return s===`DataView`?e=new Uint8Array(r.buffer):s===`ArrayBuffer`&&(e=new Uint8Array(r)),i([s,[...e]],r)}let e=[],t=i([o,e],r);for(let t of r)e.push(a(t));return t}case 2:{if(s)switch(s){case`BigInt`:return i([s,r.toString()],r);case`Boolean`:case`Number`:case`String`:return i([s,r.valueOf()],r)}if(t&&`toJSON`in r)return a(r.toJSON());let n=[],c=i([o,n],r);for(let t of ac(r))(e||!sc(oc(r[t])))&&n.push([a(t),a(r[t])]);return c}case 3:return i([o,isNaN(r.getTime())?rc:r.toISOString()],r);case 4:{let{source:e,flags:t}=r;return i([o,{source:e,flags:t}],r)}case 5:{let t=[],n=i([o,t],r);for(let[n,i]of r)(e||!(sc(oc(n))||sc(oc(i))))&&t.push([a(n),a(i)]);return n}case 6:{let t=[],n=i([o,t],r);for(let n of r)(e||!sc(oc(n)))&&t.push(a(n));return n}}let{message:c}=r;return i([o,{name:s,message:c}],r)};return a},lc=(e,{json:t,lossy:n}={})=>{let r=[];return cc(!(t||n),!!t,new Map,r)(e),r},uc=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?nc(lc(e,t)):structuredClone(e):(e,t)=>nc(lc(e,t));function dc(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&V(e.charCodeAt(n+1))&&V(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function fc(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function pc(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function mc(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||fc,r=e.options.footnoteBackLabel||pc,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=dc(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...uc(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var Y=(function(e){if(e==null)return yc;if(typeof e==`function`)return vc(e);if(typeof e==`object`)return Array.isArray(e)?hc(e):gc(e);if(typeof e==`string`)return _c(e);throw Error(`Expected function, string, or object as test`)});function hc(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Y(e[n]);return vc(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function gc(e){let t=e;return vc(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function _c(e){return vc(t);function t(t){return t&&t.type===e}}function vc(e){return t;function t(t,n,r){return!!(bc(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function yc(){return!0}function bc(e){return typeof e==`object`&&!!e&&`type`in e}function xc(e){return e}var Sc=[];function Cc(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=Y(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,"name",{value:`node (`+xc(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=Sc,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=wc(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function wc(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?Sc:[e]}function Tc(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),Cc(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}function Ec(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Dc(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function Oc(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function kc(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ac(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function jc(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=dc(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function Mc(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Nc(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Pc(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function Fc(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Pc(e,t);let i={src:dc(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function Ic(e,t){let n={src:dc(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Lc(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Rc(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Pc(e,t);let i={href:dc(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function zc(e,t){let n={href:dc(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Bc(e,t,n){let r=e.all(t),i=n?Vc(n):Hc(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function Vc(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Hc(n[r])}return t}function Hc(e){return e.spread??e.children.length>1}function Uc(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function X(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Wc(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Gc(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Kc(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Si(t.children[1]),o=xi(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function qc(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Jc(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var Yc=9,Xc=32;function Zc(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(Qc(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Qc(t.slice(i),i>0,!1)),a.join(``)}function Qc(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===Yc||t===Xc;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===Yc||t===Xc;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function $c(e,t){let n={type:`text`,value:Zc(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function el(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var tl={blockquote:Ec,break:Dc,code:Oc,delete:kc,emphasis:Ac,footnoteReference:jc,heading:Mc,html:Nc,imageReference:Fc,image:Ic,inlineCode:Lc,linkReference:Rc,link:zc,listItem:Bc,list:Uc,paragraph:X,root:Wc,strong:Gc,table:Kc,tableCell:Jc,tableRow:qc,text:$c,thematicBreak:el,toml:nl,yaml:nl,definition:nl,footnoteDefinition:nl};function nl(){}var rl={}.hasOwnProperty,il={};function al(e,t){let n=t||il,r=new Map,i=new Map,a={all:s,applyData:sl,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...tl,...n.handlers},one:o,options:n,patch:ol,wrap:ll};return Tc(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(rl.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=uc(n);return r.children=a.all(e),r}return uc(e)}return(a.options.unknownHandler||cl)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=ul(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=ul(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function ol(e,t){e.position&&(t.position=wi(e))}function sl(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,uc(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function cl(e,t){let n=t.data||{},r=`value`in t&&!(rl.call(n,`hProperties`)||rl.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function ll(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function ul(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function dl(e,t){let n=al(e,t),r=n.one(e,void 0),i=mc(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function fl(e,t){return e&&`run`in e?async function(n,r){let i=dl(n,{file:r,...t});await e.run(i,r)}:function(n,r){return dl(n,{file:r,...e||t})}}function pl(e){if(e)throw e}var ml=o(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function hl(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function gl(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?_l(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function _l(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var Z={basename:vl,dirname:yl,extname:bl,join:xl,sep:`/`};function vl(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);wl(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function yl(e){if(wl(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function bl(e){wl(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function xl(...e){let t=-1,n;for(;++t<e.length;)wl(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:Sl(n)}function Sl(e){wl(e);let t=e.codePointAt(0)===47,n=Cl(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function Cl(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function wl(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var Tl={cwd:El};function El(){return`/`}function Dl(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function Ol(e){if(typeof e==`string`)e=new URL(e);else if(!Dl(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return kl(e)}function kl(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var Al=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],jl=class{constructor(e){let t;t=e?Dl(e)?{path:e}:typeof e==`string`||Fl(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:Tl.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<Al.length;){let e=Al[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)Al.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?Z.basename(this.path):void 0}set basename(e){Nl(e,`basename`),Ml(e,`basename`),this.path=Z.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?Z.dirname(this.path):void 0}set dirname(e){Pl(this.basename,`dirname`),this.path=Z.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?Z.extname(this.path):void 0}set extname(e){if(Ml(e,`extname`),Pl(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=Z.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){Dl(e)&&(e=Ol(e)),Nl(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?Z.basename(this.path,this.extname):void 0}set stem(e){Nl(e,`stem`),Ml(e,`stem`),this.path=Z.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new ki(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function Ml(e,t){if(e&&e.includes(Z.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+Z.sep+"`")}function Nl(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function Pl(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function Fl(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Il=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),Ll=l(ml(),1),Rl={}.hasOwnProperty,zl=new class e extends Il{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=gl()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,Ll.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(Vl(`data`,this.frozen),this.namespace[e]=t,this):Rl.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Vl(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=Wl(e),n=this.parser||this.Parser;return Q(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),Q(`process`,this.parser||this.Parser),Bl(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=Wl(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);Kl(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),Q(`processSync`,this.parser||this.Parser),Bl(`processSync`,this.compiler||this.Compiler),this.process(e,r),Ul(`processSync`,`process`,t),n;function r(e,r){t=!0,pl(e),n=r}}run(e,t,n){Hl(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=Wl(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),Ul(`runSync`,`run`,n),r;function i(e,t){pl(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=Wl(t),r=this.compiler||this.Compiler;return Bl(`stringify`,r),Hl(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(Vl(`use`,this.frozen),e!=null)if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`");return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`)if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e);else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,Ll.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null)if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];hl(o)&&hl(r)&&(r=(0,Ll.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function Q(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function Bl(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function Vl(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Hl(e){if(!hl(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function Ul(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function Wl(e){return Gl(e)?e:new jl(e)}function Gl(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function Kl(e){return typeof e==`string`||ql(e)}function ql(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var $=ia(),Jl=[],Yl={allowDangerousHtml:!0},Xl=/^(https?|ircs?|mailto|xmpp)$/i,Zl=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function Ql(e){let t=$l(e),n=eu(e);return tu(t.runSync(t.parse(n),n),e)}function $l(e){let t=e.rehypePlugins||Jl,n=e.remarkPlugins||Jl,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Yl}:Yl;return zl().use(Qs).use(n).use(fl,r).use(t)}function eu(e){let t=e.children||``,n=new jl;return typeof t==`string`?n.value=t:``+t,n}function tu(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||nu;for(let e of Zl)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return t.className&&(e={type:`element`,tagName:`div`,properties:{className:t.className},children:e.type===`root`?e.children:[e]}),Tc(e,l),Ii(e,{Fragment:$.Fragment,components:i,ignoreInvalidStyle:!0,jsx:$.jsx,jsxs:$.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in na)if(Object.hasOwn(na,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=na[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function nu(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Xl.test(e.slice(0,t))?e:``}function ru(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function iu(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}function au(e,t,n){let r=Y((n||{}).ignore||[]),i=ou(t),a=-1;for(;++a<i.length;)Cc(e,`text`,o);function o(e,t){let n=-1,i;for(;++n<t.length;){let e=t[n],a=i?i.children:void 0;if(r(e,a?a.indexOf(e):void 0,i))return;i=e}if(i)return s(e,t)}function s(e,t){let n=t[t.length-1],r=i[a][0],o=i[a][1],s=0,c=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,i={index:d.index,input:d.input,stack:[...t,e]},a=o(...d,i);if(typeof a==`string`&&(a=a.length>0?{type:`text`,value:a}:void 0),a===!1?r.lastIndex=n+1:(s!==n&&u.push({type:`text`,value:e.value.slice(s,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),s=n+d[0].length,l=!0),!r.global)break;d=r.exec(e.value)}return l?(s<e.value.length&&u.push({type:`text`,value:e.value.slice(s)}),n.children.splice(c,1,...u)):u=[e],c+u.length}}function ou(e){let t=[];if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([su(e[0]),cu(e[1])])}return t}function su(e){return typeof e==`string`?new RegExp(iu(e),`g`):e}function cu(e){return typeof e==`function`?e:function(){return e}}var lu=`phrasing`,uu=[`autolink`,`link`,`image`,`label`];function du(){return{transforms:[yu],enter:{literalAutolink:pu,literalAutolinkEmail:mu,literalAutolinkHttp:mu,literalAutolinkWww:mu},exit:{literalAutolink:vu,literalAutolinkEmail:_u,literalAutolinkHttp:hu,literalAutolinkWww:gu}}}function fu(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:lu,notInConstruct:uu},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:lu,notInConstruct:uu},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:lu,notInConstruct:uu}]}}function pu(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function mu(e){this.config.enter.autolinkProtocol.call(this,e)}function hu(e){this.config.exit.autolinkProtocol.call(this,e)}function gu(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function _u(e){this.config.exit.autolinkEmail.call(this,e)}function vu(e){this.exit(e)}function yu(e){au(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,bu],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,xu]],{ignore:[`link`,`linkReference`]})}function bu(e,t,n,r,i){let a=``;if(!wu(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!Su(n)))return!1;let o=Cu(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function xu(e,t,n,r){return!wu(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function Su(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Cu(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=ru(e,`(`),a=ru(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function wu(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||Ca(n)||Sa(n))&&(!t||n!==47)}Pu.peek=Nu;function Tu(){this.buffer()}function Eu(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function Du(){this.buffer()}function Ou(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function ku(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=xo(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Au(e){this.exit(e)}function ju(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=xo(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Mu(e){this.exit(e)}function Nu(){return`[`}function Pu(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function Fu(){return{enter:{gfmFootnoteCallString:Tu,gfmFootnoteCall:Eu,gfmFootnoteDefinitionLabelString:Du,gfmFootnoteDefinition:Ou},exit:{gfmFootnoteCallString:ku,gfmFootnoteCall:Au,gfmFootnoteDefinitionLabelString:ju,gfmFootnoteDefinition:Mu}}}function Iu(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:Pu},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?Ru:Lu))),s(),o}}function Lu(e,t,n){return t===0?e:Ru(e,t,n)}function Ru(e,t,n){return(n?``:`    `)+e}var zu=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];Wu.peek=Gu;function Bu(){return{canContainEols:[`delete`],enter:{strikethrough:Hu},exit:{strikethrough:Uu}}}function Vu(){return{unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:zu}],handlers:{delete:Wu}}}function Hu(e){this.enter({type:`delete`,children:[]},e)}function Uu(e){this.exit(e)}function Wu(e,t,n,r){let i=n.createTracker(r),a=n.enter(`strikethrough`),o=i.move(`~~`);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:`~`}),o+=i.move(`~~`),a(),o}function Gu(){return`~`}function Ku(e){return e.length}function qu(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||Ku,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=Ju(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=Yu(r[d]);else{let e=Yu(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding!==!1&&!(n.alignDelimiters===!1&&i===``)&&(n.delimiterStart!==!1||d)&&r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function Ju(e){return e==null?``:String(e)}function Yu(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Xu(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),Zu);return i(),o}function Zu(e,t,n){return`>`+(n?``:` `)+e}function Qu(e,t){return $u(e,t.inConstruct,!0)&&!$u(e,t.notInConstruct,!1)}function $u(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function ed(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Qu(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?``:` `;return`\\
`}function td(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function nd(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function rd(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function id(e,t,n,r){let i=rd(n),a=e.value||``,o=i==="`"?`GraveAccent`:`Tilde`;if(nd(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,ad);return e(),t}let s=n.createTracker(r),c=i.repeat(Math.max(td(a,i)+1,3)),l=n.enter(`codeFenced`),u=s.move(c);if(e.lang){let t=n.enter(`codeFencedLang${o}`);u+=s.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...s.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${o}`);u+=s.move(` `),u+=s.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...s.current()})),t()}return u+=s.move(`
`),a&&(u+=s.move(a+`
`)),u+=s.move(c),l(),u}function ad(e,t,n){return(n?``:`    `)+e}function od(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function sd(e,t,n,r){let i=od(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function cd(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function ld(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function ud(e,t,n){let r=Aa(e),i=Aa(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}dd.peek=fd;function dd(e,t,n,r){let i=cd(n),a=n.enter(`emphasis`),o=n.createTracker(r),s=o.move(i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=ud(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=ld(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=ud(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+ld(d));let p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function fd(e,t,n){return n.options.emphasis||`*`}function pd(e,t){let n=!1;return Tc(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&oa(e)&&(t.options.setext||n))}function md(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(pd(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=ld(l.charCodeAt(0))+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}hd.peek=gd;function hd(e){return e.value||``}function gd(){return`<`}_d.peek=vd;function _d(e,t,n,r){let i=od(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function vd(){return`!`}yd.peek=bd;function yd(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function bd(){return`!`}xd.peek=Sd;function xd(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function Sd(){return"`"}function Cd(e,t){let n=oa(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type===`text`&&(n===e.url||`mailto:`+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}wd.peek=Td;function wd(e,t,n,r){let i=od(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r),s,c;if(Cd(e,n)){let t=n.stack;n.stack=[],s=n.enter(`autolink`);let r=o.move(`<`);return r+=o.move(n.containerPhrasing(e,{before:r,after:`>`,...o.current()})),r+=o.move(`>`),s(),n.stack=t,r}s=n.enter(`link`),c=n.enter(`label`);let l=o.move(`[`);return l+=o.move(n.containerPhrasing(e,{before:l,after:`](`,...o.current()})),l+=o.move(`](`),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...o.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function Td(e,t,n){return Cd(e,n)?`<`:`[`}Ed.peek=Dd;function Ed(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function Dd(){return`[`}function Od(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function kd(e){let t=Od(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Ad(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function jd(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Md(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?Ad(n):Od(n),s=e.ordered?o===`.`?`)`:`.`:kd(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if((o===`*`||o===`-`)&&t&&(!t.children||!t.children[0])&&n.stack[n.stack.length-1]===`list`&&n.stack[n.stack.length-2]===`listItem`&&n.stack[n.stack.length-3]===`list`&&n.stack[n.stack.length-4]===`listItem`&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),jd(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function Nd(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Pd(e,t,n,r){let i=Nd(n),a=n.bulletCurrent||Od(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function Fd(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}var Id=Y([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`]);function Ld(e,t,n,r){return(e.children.some(function(e){return Id(e)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function Rd(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}zd.peek=Bd;function zd(e,t,n,r){let i=Rd(n),a=n.enter(`strong`),o=n.createTracker(r),s=o.move(i+i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=ud(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=ld(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=ud(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+ld(d));let p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function Bd(e,t,n){return n.options.strong||`*`}function Vd(e,t,n,r){return n.safe(e.value,r)}function Hd(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Ud(e,t,n){let r=(jd(n)+(n.options.ruleSpaces?` `:``)).repeat(Hd(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Wd={blockquote:Xu,break:ed,code:id,definition:sd,emphasis:dd,hardBreak:ed,heading:md,html:hd,image:_d,imageReference:yd,inlineCode:xd,link:wd,linkReference:Ed,list:Md,listItem:Pd,paragraph:Fd,root:Ld,strong:zd,text:Vd,thematicBreak:Ud};function Gd(){return{enter:{table:Kd,tableData:Xd,tableHeader:Xd,tableRow:Jd},exit:{codeText:Zd,table:qd,tableData:Yd,tableHeader:Yd,tableRow:Yd}}}function Kd(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function qd(e){this.exit(e),this.data.inTable=void 0}function Jd(e){this.enter({type:`tableRow`,children:[]},e)}function Yd(e){this.exit(e)}function Xd(e){this.enter({type:`tableCell`,children:[]},e)}function Zd(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Qd));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function Qd(e,t){return t===`|`?t:e}function $d(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return qu(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=Wd.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function ef(){return{exit:{taskListCheckValueChecked:nf,taskListCheckValueUnchecked:nf,paragraph:rf}}}function tf(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:af}}}function nf(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function rf(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function af(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=Wd.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function of(){return[du(),Fu(),Bu(),Gd(),ef()]}function sf(e){return{extensions:[fu(),Iu(e),Vu(),$d(e),tf()]}}var cf={tokenize:Sf,partial:!0},lf={tokenize:Cf,partial:!0},uf={tokenize:wf,partial:!0},df={tokenize:Tf,partial:!0},ff={tokenize:Ef,partial:!0},pf={name:`wwwAutolink`,tokenize:bf,previous:Df},mf={name:`protocolAutolink`,tokenize:xf,previous:Of},hf={name:`emailAutolink`,tokenize:yf,previous:kf},gf={};function _f(){return{text:gf}}for(var vf=48;vf<123;)gf[vf]=hf,vf++,vf===58?vf=65:vf===91&&(vf=97);gf[43]=hf,gf[45]=hf,gf[46]=hf,gf[95]=hf,gf[72]=[hf,mf],gf[104]=[hf,mf],gf[87]=[hf,pf],gf[119]=[hf,pf];function yf(e,t,n){let r=this,i,a;return o;function o(t){return!Af(t)||!kf.call(r,r.previous)||jf(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return Af(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(ff,u,l)(t):t===45||t===95||V(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&ga(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function bf(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!Df.call(r,r.previous)||jf(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(cf,e.attempt(lf,e.attempt(uf,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function xf(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&Of.call(r,r.previous)&&!jf(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(ga(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||va(t)||U(t)||Ca(t)||Sa(t)?n(t):e.attempt(lf,e.attempt(uf,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function Sf(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function Cf(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(df,c,s)(t):t===null||U(t)||Ca(t)||t!==45&&Sa(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function wf(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(df,t,a)(o):o===null||U(o)||Ca(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function Tf(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||U(o)||Ca(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||U(e)||Ca(e)?t(e):r(e)}function a(e){return ga(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):ga(t)?(e.consume(t),o):n(t)}}function Ef(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return V(e)?n(e):t(e)}}function Df(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||U(e)}function Of(e){return!ga(e)}function kf(e){return!(e===47||Af(e))}function Af(e){return e===43||e===45||e===46||e===95||V(e)}function jf(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var Mf={tokenize:Bf,partial:!0};function Nf(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:Lf,continuation:{tokenize:Rf},exit:zf}},text:{91:{name:`gfmFootnoteCall`,tokenize:If},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:Pf,resolveTo:Ff}}}}function Pf(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=xo(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function Ff(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function If(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||U(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(xo(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return U(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function Lf(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||U(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=xo(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return U(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),K(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function Rf(e,t,n){return e.check(Ra,t,e.attempt(Mf,t,n))}function zf(e){e.exit(`gfmFootnoteDefinition`)}function Bf(e,t,n){let r=this;return K(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function Vf(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&ua(o,o.length,0,ja(s,e.slice(r+1,n),t)),ua(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),ua(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=Aa(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=Aa(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var Hf=class{constructor(){this.map=[]}add(e,t,n){Uf(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0}};function Uf(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function Wf(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function Gf(){return{flow:{null:{name:`table`,tokenize:Kf,resolveAll:qf}}}}function Kf(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:c;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124?u(e):(o=!0,a+=1,u(e))}function u(t){return t===null?n(t):H(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):W(t)?K(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||U(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,W(t)?K(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):x(t)}function h(t){return W(t)?K(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||H(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return W(t)?K(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||H(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||H(n)?(e.exit(`tableRow`),t(n)):W(n)?K(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||U(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?T:w)}function T(t){return t===92||t===124?(e.consume(t),w):w(t)}}function qf(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new Hf;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(Yf(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=Jf(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=Jf(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=Jf(f,t,o,i,n,d)):(o[0]=o[1],d=Jf(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&Yf(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=Wf(t.events,n))}return e}function Jf(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},Xf(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=Xf(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=Xf(t.events,n[2]),a=Xf(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},Xf(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function Yf(e,t,n,r,i){let a=[],o=Xf(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function Xf(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var Zf={name:`tasklistCheck`,tokenize:$f};function Qf(){return{text:{91:Zf}}}function $f(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return U(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return H(r)?t(r):W(r)?e.check({tokenize:ep},t,n)(r):n(r)}}function ep(e,t,n){return K(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function tp(e){return pa([_f(),Nf(),Vf(e),Gf(),Qf()])}var np={};function rp(e){let t=this,n=e||np,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(tp(n)),a.push(of()),o.push(sf(n))}var ip=[{id:`why-chunking`,category:`Chunking`,title:`Why Chunking?`,difficulty:`Beginner`,time:`~5 min`,description:`Understand the importance and benefits of document chunking in RAG systems. Learn why splitting documents optimizes retrieval, reduces costs, and improves performance.`,tags:[`chunking`,`rag`,`fundamentals`],concept:lr,steps:[{label:`Context Window Limits`,icon:`📊`,detail:`LLMs have finite context windows; large documents need splitting.`},{label:`Retrieval Relevance`,icon:`🎯`,detail:`Smaller chunks improve search relevance and ranking accuracy.`},{label:`Cost Optimization`,icon:`💰`,detail:`Reduce token usage by retrieving only relevant chunks.`},{label:`Processing Speed`,icon:`⚡`,detail:`Faster embeddings and retrieval with smaller text units.`},{label:`Semantic Coherence`,icon:`🧠`,detail:`Maintain meaning and context within each chunk boundary.`}],code:``},{id:`fixed-size-chunking`,category:`Chunking`,title:`Fixed-size Chunking`,difficulty:`Beginner`,time:`~10 min`,description:`Split documents into uniform chunks of N tokens or characters. Simple and predictable, but may break mid-sentence and lose contextual information.`,tags:[`chunking`,`fixed-size`,`basic`,`rag`],concept:ur,steps:[{label:`Input Text`,icon:`📝`,detail:`Load document or text content.`},{label:`Define Chunk Size`,icon:`📏`,detail:`Set chunk size in tokens or characters (e.g., 512 tokens).`},{label:`Split Sequentially`,icon:`✂️`,detail:`Divide text into equal-sized segments.`},{label:`Handle Boundaries`,icon:`🔗`,detail:`Manage chunk boundaries (may split mid-word/sentence).`},{label:`Add Metadata`,icon:`🏷️`,detail:`Tag chunks with source, position, and index.`}],code:dr},{id:`recursive-chunking`,category:`Chunking`,title:`Recursive Chunking`,difficulty:`Intermediate`,time:`~15 min`,description:`Recursively splits documents by natural delimiters (paragraphs, sentences, words). Preserves semantic boundaries while respecting size constraints.`,tags:[`chunking`,`recursive`,`delimiters`,`rag`],concept:fr,steps:[{label:`Input Document`,icon:`📄`,detail:`Load document to be split.`},{label:`Define Separators`,icon:`📋`,detail:`Specify hierarchical delimiters (paragraphs, sentences, words).`},{label:`First-Level Split`,icon:`✂️`,detail:`Split by largest delimiter (e.g., double newlines).`},{label:`Merge if Needed`,icon:`🔗`,detail:`Combine small chunks to meet size requirements.`},{label:`Recursive Refinement`,icon:`🔄`,detail:`For oversized chunks, split by next smaller delimiter.`},{label:`Finalize Chunks`,icon:`✅`,detail:`Output chunks within size constraints.`}],code:pr},{id:`semantic-chunking`,category:`Chunking`,title:`Semantic Chunking`,difficulty:`Advanced`,time:`~25 min`,description:`Groups text by semantic similarity using embeddings. Dynamically determines chunk boundaries based on content meaning rather than fixed delimiters.`,tags:[`chunking`,`semantic`,`embeddings`,`rag`,`advanced`],concept:mr,steps:[{label:`Load Document`,icon:`📥`,detail:`Prepare text to be chunked.`},{label:`Split into Sentences`,icon:`📝`,detail:`Break document into individual sentences.`},{label:`Generate Embeddings`,icon:`🧠`,detail:`Embed each sentence using embedding model.`},{label:`Calculate Similarity`,icon:`📊`,detail:`Compute cosine similarity between consecutive sentences.`},{label:`Identify Breakpoints`,icon:`🔍`,detail:`Detect low-similarity boundaries as chunk breaks.`},{label:`Create Chunks`,icon:`✂️`,detail:`Group semantically similar sentences together.`},{label:`Validate Chunks`,icon:`✅`,detail:`Ensure chunks meet size and coherence requirements.`}],code:hr},{id:`token-based-chunking`,category:`Chunking`,title:`Token-based Chunking`,difficulty:`Intermediate`,time:`~15 min`,description:`Splits documents by exact token count using a model tokenizer. Provides precise control over chunk sizes relative to specific LLM context windows.`,tags:[`chunking`,`tokens`,`llm-aware`,`rag`],concept:gr,steps:[{label:`Select Tokenizer`,icon:`🔧`,detail:`Choose tokenizer matching target LLM (GPT, Claude, etc).`},{label:`Load Document`,icon:`📄`,detail:`Prepare text content for tokenization.`},{label:`Tokenize Full Text`,icon:`🔢`,detail:`Convert entire document to token sequence.`},{label:`Split by Token Count`,icon:`✂️`,detail:`Divide tokens into fixed-size chunks (e.g., 512 tokens).`},{label:`Decode Chunks`,icon:`📝`,detail:`Convert token sequences back to text.`},{label:`Handle Boundaries`,icon:`🔗`,detail:`Clean up incomplete words at chunk edges.`},{label:`Add Overlap`,icon:`📌`,detail:`Optionally add token-level overlap between chunks.`}],code:_r},{id:`sentence-chunking`,category:`Chunking`,title:`Sentence Chunking`,difficulty:`Beginner`,time:`~10 min`,description:`Breaks documents at sentence boundaries. Each chunk is one or more complete sentences, maintaining natural language flow and readability.`,tags:[`chunking`,`sentence`,`nlp`,`rag`],concept:vr,steps:[{label:`Input Text`,icon:`📝`,detail:`Load document content.`},{label:`Detect Sentences`,icon:`🔍`,detail:`Identify sentence boundaries using NLP library.`},{label:`Group Sentences`,icon:`📦`,detail:`Combine consecutive sentences until size threshold.`},{label:`Handle Edge Cases`,icon:`⚙️`,detail:`Manage abbreviations, decimals, and special punctuation.`},{label:`Validate Chunks`,icon:`✅`,detail:`Ensure each chunk contains complete sentences.`}],code:yr},{id:`paragraph-chunking`,category:`Chunking`,title:`Paragraph Chunking`,difficulty:`Beginner`,time:`~8 min`,description:`Groups complete paragraphs as chunks. Preserves document structure and semantic units, though chunks may vary significantly in size.`,tags:[`chunking`,`paragraph`,`structure`,`rag`],concept:br,steps:[{label:`Input Document`,icon:`📄`,detail:`Load formatted document with clear paragraphs.`},{label:`Identify Paragraphs`,icon:`🔍`,detail:`Detect paragraph boundaries (blank lines, indentation).`},{label:`Combine Paragraphs`,icon:`🔗`,detail:`Group small paragraphs to meet size requirements.`},{label:`Split Oversized Chunks`,icon:`✂️`,detail:`For large paragraphs, split at sentence level.`},{label:`Preserve Structure`,icon:`🏗️`,detail:`Maintain original formatting and hierarchy.`}],code:xr},{id:`sliding-window-chunking`,category:`Chunking`,title:`Sliding Window Chunking`,difficult:`Intermediate`,time:`~15 min`,description:`Creates overlapping chunks using a sliding window approach. Maintains context across chunk boundaries and prevents information loss at split points.`,tags:[`chunking`,`sliding-window`,`overlap`,`rag`],concept:wr,steps:[{label:`Tokenize Document`,icon:`🔢`,detail:`Convert text to tokens or units.`},{label:`Define Window Size`,icon:`📏`,detail:`Set chunk size (e.g., 512 tokens).`},{label:`Define Stride`,icon:`🔄`,detail:`Set step size for window movement (usually < chunk size).`},{label:`Create First Chunk`,icon:`✂️`,detail:`Extract first window of tokens.`},{label:`Slide Window`,icon:`➡️`,detail:`Move window by stride amount and create next chunk.`},{label:`Handle End`,icon:`🔚`,detail:`Manage final partial chunks.`},{label:`Add Metadata`,icon:`🏷️`,detail:`Tag each chunk with position and context.`}],code:Tr},{id:`parent-child-chunking`,category:`Chunking`,title:`Parent-Child Chunking`,difficulty:`Advanced`,time:`~25 min`,description:`Creates hierarchical chunks with parent summaries and child detail chunks. Enables flexible retrieval at different granularity levels.`,tags:[`chunking`,`hierarchical`,`parent-child`,`rag`,`advanced`],concept:Sr,steps:[{label:`Input Document`,icon:`📄`,detail:`Load document for hierarchical chunking.`},{label:`Create Child Chunks`,icon:`👶`,detail:`Split into detailed chunks using base strategy.`},{label:`Group into Parents`,icon:`👨`,detail:`Combine child chunks into larger parent units.`},{label:`Generate Parent Summaries`,icon:`✍️`,detail:`Create concise summaries of parent content.`},{label:`Create Hierarchy`,icon:`🌳`,detail:`Establish parent-child relationships and links.`},{label:`Index Both Levels`,icon:`🗂️`,detail:`Store both parent and child chunks with references.`},{label:`Implement Retrieval`,icon:`🔍`,detail:`Enable retrieval at child or parent level based on query.`}],code:Cr},{id:`agentic-chunking`,category:`Chunking`,title:`Agentic Chunking`,difficulty:`Advanced`,time:`~30 min`,description:`Uses an LLM agent to intelligently determine chunk boundaries based on content meaning. Provides context-aware, adaptive chunking for complex documents.`,tags:[`chunking`,`agentic`,`llm-driven`,`ai`,`advanced`],concept:Er,steps:[{label:`Load Document`,icon:`📄`,detail:`Prepare document for agentic analysis.`},{label:`Define Instructions`,icon:`📝`,detail:`Create prompts guiding chunk boundary decisions.`},{label:`Send to LLM Agent`,icon:`🤖`,detail:`Query LLM to identify logical chunk boundaries.`},{label:`LLM Analyzes Content`,icon:`🧠`,detail:`Agent reads and understands semantic structure.`},{label:`Identify Breakpoints`,icon:`🎯`,detail:`Agent proposes where chunks should logically end.`},{label:`Extract Chunks`,icon:`✂️`,detail:`Split document at agent-identified boundaries.`},{label:`Generate Summaries`,icon:`📋`,detail:`Create titles/summaries for each chunk.`},{label:`Validate & Store`,icon:`✅`,detail:`Validate chunks and store with metadata.`}],code:Dr},{id:`chunk-size`,category:`Chunking`,title:`Chunk Size`,difficulty:`Beginner`,time:`~10 min`,description:`Understand chunk size - the fundamental parameter controlling how much text each chunk contains. Learn optimal sizes for different scenarios and models.`,tags:[`chunking`,`parameters`,`optimization`,`rag`],concept:Or,steps:[{label:`Define Requirements`,icon:`📋`,detail:`Determine context window and quality needs.`},{label:`Model Context Limit`,icon:`🎯`,detail:`Check target LLM's context window size.`},{label:`Calculate Safety Margin`,icon:`🛡️`,detail:`Reserve tokens for prompt, response, overhead.`},{label:`Determine Retrieval Budget`,icon:`💰`,detail:`Estimate tokens for retrieved chunks in prompt.`},{label:`Set Chunk Size`,icon:`📏`,detail:`Configure chunk size (typically 256-2048 tokens).`},{label:`Test & Adjust`,icon:`🔧`,detail:`Evaluate retrieval quality and performance.`}],code:kr},{id:`chunk-overlap`,category:`Chunking`,title:`Chunk Overlap`,difficulty:`Intermediate`,time:`~12 min`,description:`Understand chunk overlap - duplicating tokens between adjacent chunks to preserve context across boundaries and prevent information loss.`,tags:[`chunking`,`overlap`,`parameters`,`rag`],concept:Ar,steps:[{label:`Analyze Break Risk`,icon:`⚠️`,detail:`Identify risk of context loss at chunk boundaries.`},{label:`Define Overlap Ratio`,icon:`📊`,detail:`Decide overlap percentage (typically 10-20%).`},{label:`Calculate Overlap Size`,icon:`🔢`,detail:`Convert percentage to token/character count.`},{label:`Implement Overlapping`,icon:`🔗`,detail:`Configure chunking algorithm with overlap.`},{label:`Test Boundary Quality`,icon:`✅`,detail:`Validate that boundaries preserve context.`},{label:`Monitor Storage Impact`,icon:`💾`,detail:`Track increased storage from overlaps.`}],code:``},{id:`context-window`,category:`Chunking`,title:`Context Window`,difficulty:`Intermediate`,time:`~15 min`,description:`Understand context window - the maximum tokens an LLM can process. Learn how it constrains chunk size and influences chunking strategy.`,tags:[`chunking`,`context-window`,`llm`,`parameters`],concept:jr,steps:[{label:`Identify Target LLM`,icon:`🤖`,detail:`Choose which model(s) you're using.`},{label:`Check Context Size`,icon:`📊`,detail:`Look up model's total context window.`},{label:`Allocate for Prompt`,icon:`💬`,detail:`Reserve tokens for system prompt (~200-500).`},{label:`Reserve for Response`,icon:`📝`,detail:`Allocate tokens for LLM response (~500-2000).`},{label:`Calculate Retrieval Budget`,icon:`🔍`,detail:`Remaining tokens available for retrieved chunks.`},{label:`Size Chunks Accordingly`,icon:`📏`,detail:`Set chunk size based on retrieval budget.`}],code:``},{id:`multi-query-retrieval`,category:`Retrieval`,title:`Multi-Query Retrieval`,difficulty:`Advanced`,time:`~25 min`,description:`Improves retrieval performance by generating multiple query variations and merging results from each.`,tags:[`query`,`retrieval`,`expansion`,`rag`],concept:Yn,steps:[{label:`Input Query`,icon:`⌨️`,detail:`User provides the original query.`},{label:`Query Expansion`,icon:`🔀`,detail:`Generate multiple paraphrased queries.`},{label:`Parallel Retrieval`,icon:`🔍`,detail:`Run search for each query variant.`},{label:`Merge Results`,icon:`🧩`,detail:`Combine retrieved documents.`},{label:`Deduplication`,icon:`🧹`,detail:`Remove duplicate documents.`}],code:Xn},{id:`hybrid-search`,category:`Retrieval`,title:`Hybrid Search`,difficulty:`Intermediate`,time:`~30 min`,description:`Combine dense semantic vectors with sparse BM25 keyword search, then re-rank. Handles both conceptual and exact-match queries.`,tags:[`BM25`,`reranking`,`fusion`],concept:ir,steps:[{label:`Dense Embed`,icon:`🔢`,detail:`Embed all chunks with a dense model for semantic search.`},{label:`Build BM25 Index`,icon:`🔑`,detail:`Build a sparse BM25 index over the same corpus for keyword matching.`},{label:`Dual Retrieval`,icon:`⚡`,detail:`Run both dense (vector) and sparse (BM25) retrieval in parallel.`},{label:`Reciprocal Rank Fusion`,icon:`🔀`,detail:`Merge result lists using RRF: score = Σ 1/(k + rank_i) where k=60.`},{label:`Cross-Encoder Rerank`,icon:`🏆`,detail:`Pass top-20 fused results through a cross-encoder to get a final top-5.`},{label:`Generate`,icon:`✨`,detail:`Use reranked top-5 as context for the LLM.`}],code:rr},{id:`semantic-search`,category:`Retrieval`,title:`Semantic Search`,difficulty:`Intermediate`,time:`~20 min`,description:`Retrieves documents based on meaning rather than exact keyword matching.`,tags:[`semantic-search`,`embeddings`,`retrieval`],concept:ar,steps:[{label:`Generate Embeddings`,icon:`🧠`,detail:`Encode documents and queries into semantic vectors.`},{label:`Vector Search`,icon:`🔍`,detail:`Search nearest neighbors in vector space.`},{label:`Retrieve Context`,icon:`📚`,detail:`Collect semantically relevant chunks.`},{label:`Pass to LLM`,icon:`✨`,detail:`Use retrieved context during generation.`}],code:or},{id:`metadata-filtering`,category:`Retrieval`,title:`Metadata Filtering`,difficulty:`Advanced`,time:`~20 min`,description:`Restrict retrieval results using metadata such as department, date, author, source, or access level.`,tags:[`metadata`,`filters`,`enterprise-rag`,`retrieval`],concept:Qn,steps:[{label:`Attach Metadata`,icon:`🏷️`,detail:`Store metadata with every document chunk.`},{label:`Apply Filters`,icon:`🔒`,detail:`Filter retrieval by attributes.`},{label:`Vector Search`,icon:`🔍`,detail:`Search only within filtered documents.`},{label:`Generate Answer`,icon:`✨`,detail:`Return answers using filtered context.`}],code:Zn},{id:`sparse-retrieval`,category:`Retrieval`,title:`Sparse Retrieval (BM25)`,difficulty:`Beginner`,time:`~20 min`,description:`Retrieves documents using keyword matching and statistical term weighting such as BM25 or TF-IDF.`,tags:[`bm25`,`tfidf`,`keyword`,`retrieval`],concept:$n,steps:[{label:`Input Query`,icon:`⌨️`,detail:`User submits a text query.`},{label:`Tokenization`,icon:`✂️`,detail:`Split query into searchable keywords.`},{label:`Keyword Search`,icon:`🔍`,detail:`Search inverted index using BM25 or TF-IDF.`},{label:`Ranking`,icon:`📊`,detail:`Score documents based on keyword relevance.`},{label:`Return Results`,icon:`📄`,detail:`Return the highest-ranked documents.`}],code:er},{id:`dense-retrieval`,category:`Retrieval`,title:`Dense Retrieval`,difficulty:`Intermediate`,time:`~25 min`,description:`Uses vector embeddings to retrieve semantically similar documents.`,tags:[`embeddings`,`vector`,`semantic`,`retrieval`],concept:tr,steps:[{label:`Input Query`,icon:`⌨️`,detail:`Receive user query.`},{label:`Embedding Generation`,icon:`🧠`,detail:`Convert query into a dense vector.`},{label:`Vector Search`,icon:`📍`,detail:`Search nearest document vectors.`},{label:`Similarity Ranking`,icon:`📊`,detail:`Rank by cosine similarity or dot product.`},{label:`Return Documents`,icon:`📄`,detail:`Provide the most similar documents.`}],code:nr},{id:`parent-child-retrieval`,category:`Retrieval`,title:`Parent-Child Retrieval`,difficulty:`Advanced`,time:`~30 min`,description:`Store small child chunks for retrieval while returning larger parent documents for richer context and better answer generation.`,tags:[`parent-child`,`retrieval`,`context`,`enterprise-rag`],concept:sr,steps:[{label:`Split Parent Documents`,icon:`📚`,detail:`Break documents into large parent chunks.`},{label:`Create Child Chunks`,icon:`📄`,detail:`Further split parent chunks into smaller retrievable chunks.`},{label:`Generate Embeddings`,icon:`🔢`,detail:`Create embeddings for child chunks.`},{label:`Store Relationships`,icon:`🔗`,detail:`Maintain mapping between child and parent documents.`},{label:`Retrieve Child Chunks`,icon:`🔍`,detail:`Perform retrieval on child chunks.`},{label:`Return Parent Context`,icon:`✨`,detail:`Fetch parent documents before sending to the LLM.`}],code:cr},{id:`contextual-compression`,category:`Retrieval`,title:`Contextual Compression Retrieval`,difficulty:`Advanced`,time:`~25 min`,description:`Compress retrieved documents to keep only the information relevant to the user query before sending it to the LLM.`,tags:[`compression`,`retrieval`,`rag`,`cost-optimization`],concept:``,steps:[{label:`Retrieve Documents`,icon:`🔍`,detail:`Fetch top-K relevant documents.`},{label:`Apply Compression`,icon:`🗜️`,detail:`Extract only query-relevant sentences.`},{label:`Remove Noise`,icon:`✂️`,detail:`Discard unrelated content.`},{label:`Build Context`,icon:`📚`,detail:`Create a compact context window.`},{label:`Generate Answer`,icon:`✨`,detail:`Send compressed context to the LLM.`}],code:``},{id:`self-query-retrieval`,category:`Retrieval`,title:`Self Query Retrieval`,difficulty:`Expert`,time:`~30 min`,description:`Use an LLM to automatically generate metadata filters and retrieval queries.`,tags:[`metadata`,`self-query`,`retrieval`,`enterprise-rag`],concept:``,steps:[{label:`Analyze Query`,icon:`🧠`,detail:`Understand user intent.`},{label:`Extract Filters`,icon:`🏷️`,detail:`Identify metadata constraints.`},{label:`Build Search Query`,icon:`🔍`,detail:`Generate optimized retrieval query.`},{label:`Apply Filters`,icon:`🔒`,detail:`Limit retrieval scope.`},{label:`Retrieve Documents`,icon:`📚`,detail:`Search matching documents.`},{label:`Generate Answer`,icon:`✨`,detail:`Provide grounded response.`}],code:``},{id:`recursive-retrieval`,category:`Retrieval`,title:`Recursive Retrieval`,difficulty:`Expert`,time:`~35 min`,description:`Retrieve documents iteratively until sufficient context is collected.`,tags:[`recursive`,`retrieval`,`multi-hop`,`rag`],concept:``,steps:[{label:`Initial Retrieval`,icon:`🔍`,detail:`Retrieve initial documents.`},{label:`Analyze Context`,icon:`🧠`,detail:`Determine missing information.`},{label:`Generate Follow-up Query`,icon:`❓`,detail:`Create additional retrieval queries.`},{label:`Retrieve Again`,icon:`🔄`,detail:`Search for supporting evidence.`},{label:`Merge Context`,icon:`📚`,detail:`Combine all retrieved information.`},{label:`Generate Answer`,icon:`✨`,detail:`Produce final response.`}],code:``},{id:`knowledge-graph-retrieval`,category:`Retrieval`,title:`Knowledge Graph Retrieval`,difficulty:`Expert`,time:`~45 min`,description:`Retrieve information using entities and relationships stored in a knowledge graph.`,concept:``,tags:[`graph-rag`,`knowledge-graph`,`neo4j`,`retrieval`],steps:[{label:`Extract Entities`,icon:`🏷️`,detail:`Identify entities from documents.`},{label:`Build Graph`,icon:`🕸️`,detail:`Create relationships between entities.`},{label:`Store Graph`,icon:`🗄️`,detail:`Save in Neo4j or graph database.`},{label:`Traverse Graph`,icon:`🔍`,detail:`Find relevant relationships.`},{label:`Retrieve Context`,icon:`📚`,detail:`Collect graph-connected knowledge.`},{label:`Generate Answer`,icon:`✨`,detail:`Use graph context for generation.`}],code:``},{id:`agentic-retrieval`,category:`Retrieval`,title:`Agentic Retrieval`,difficulty:`Expert`,time:`~50 min`,description:`Use multiple AI agents to plan, retrieve, validate, and synthesize information before generating an answer.`,tags:[`agentic-ai`,`retrieval`,`multi-agent`,`rag`],concept:``,steps:[{label:`Plan Retrieval`,icon:`🧠`,detail:`Planner agent decides strategy.`},{label:`Knowledge Search`,icon:`📚`,detail:`Retriever agent queries vector stores.`},{label:`Web Search`,icon:`🌐`,detail:`Search agent gathers external information.`},{label:`Validate Results`,icon:`✅`,detail:`Critic agent verifies relevance.`},{label:`Merge Evidence`,icon:`🔗`,detail:`Combine validated information.`},{label:`Generate Response`,icon:`✨`,detail:`Final agent produces answer.`}],code:``},{id:`ensemble-retrieval`,category:`Retrieval`,title:`Ensemble Retrieval`,difficulty:`Expert`,time:`~40 min`,description:`Combine multiple retrievers such as BM25, vector search, and graph search to maximize recall.`,tags:[`ensemble`,`hybrid`,`retrieval`,`enterprise-rag`],concept:``,steps:[{label:`BM25 Search`,icon:`🔤`,detail:`Perform keyword retrieval.`},{label:`Vector Search`,icon:`🔍`,detail:`Perform semantic retrieval.`},{label:`Graph Search`,icon:`🕸️`,detail:`Retrieve graph relationships.`},{label:`Merge Results`,icon:`🔗`,detail:`Combine retrieved documents.`},{label:`Rerank Results`,icon:`📊`,detail:`Improve ranking quality.`},{label:`Generate Answer`,icon:`✨`,detail:`Pass ranked context to the LLM.`}],code:``},{id:`multi-vector-retrieval`,category:`Retrieval`,title:`Multi Vector Retrieval`,difficulty:`Expert`,time:`~35 min`,description:`Store multiple vector representations for the same document such as summaries, questions, and chunks to improve retrieval quality.`,tags:[`multi-vector`,`retrieval`,`rag`,`embeddings`],concept:``,steps:[{label:`Generate Chunk Embeddings`,icon:`📄`,detail:`Create embeddings for document chunks.`},{label:`Generate Summary Embeddings`,icon:`📝`,detail:`Create embeddings from document summaries.`},{label:`Generate Question Embeddings`,icon:`❓`,detail:`Generate likely user questions.`},{label:`Store All Vectors`,icon:`🗄️`,detail:`Maintain multiple vector representations.`},{label:`Retrieve`,icon:`🔍`,detail:`Search across all representations.`},{label:`Merge Results`,icon:`✨`,detail:`Combine retrieved documents.`}],code:``}],ap=[`All`,`Foundations`,`Chunking`,`Embeddings`,`Retrieval`,`Query`,`Advanced`],op={Beginner:`#0F6E56`,Intermediate:`#185FA5`,Advanced:`#993C1D`},sp={Beginner:`#E1F5EE`,Intermediate:`#E6F1FB`,Advanced:`#FAECE7`};function cp({steps:e}){let[t,n]=(0,x.useState)(null);return(0,$.jsxs)(`div`,{style:{marginTop:16},children:[(0,$.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8,alignItems:`center`},children:e.map((r,i)=>(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,$.jsxs)(`button`,{onClick:()=>n(t===i?null:i),style:{display:`flex`,alignItems:`center`,gap:6,padding:`6px 12px`,borderRadius:20,border:t===i?`1.5px solid #185FA5`:`0.5px solid var(--color-border-tertiary)`,background:t===i?`#E6F1FB`:`var(--color-background-primary)`,color:t===i?`#185FA5`:`var(--color-text-primary)`,cursor:`pointer`,fontSize:13,fontWeight:t===i?500:400,transition:`all 0.15s`},children:[(0,$.jsx)(`span`,{children:r.icon}),(0,$.jsx)(`span`,{children:r.label})]}),i<e.length-1&&(0,$.jsx)(`span`,{style:{color:`var(--color-text-tertiary)`,fontSize:12},children:`→`})]},i))}),t!==null&&(0,$.jsxs)(`div`,{style:{marginTop:10,padding:`10px 14px`,borderRadius:8,background:`var(--color-background-secondary)`,border:`0.5px solid var(--color-border-tertiary)`,fontSize:13,color:`var(--color-text-secondary)`,lineHeight:1.6},children:[(0,$.jsxs)(`span`,{style:{fontWeight:500,color:`var(--color-text-primary)`},children:[e[t].label,`: `]}),e[t].detail]})]})}function lp({content:e}){return(0,$.jsx)(`div`,{className:`prose max-w-none h-[75vh] overflow-y-auto p-6`,children:(0,$.jsx)(Ql,{remarkPlugins:[rp],children:e})})}function up({code:e}){let[t,n]=(0,x.useState)(!1);return(0,$.jsxs)(`div`,{style:{position:`relative`,marginTop:16},children:[(0,$.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),1800)},style:{position:`absolute`,top:8,right:8,padding:`4px 10px`,borderRadius:6,border:`0.5px solid var(--color-border-secondary)`,background:`var(--color-background-secondary)`,cursor:`pointer`,fontSize:12,color:`var(--color-text-secondary)`,zIndex:1},children:t?`✓ Copied`:`Copy`}),(0,$.jsx)(`pre`,{style:{margin:0,padding:`14px 16px`,borderRadius:10,overflowX:`auto`,background:`var(--color-background-secondary)`,border:`0.5px solid var(--color-border-tertiary)`,fontSize:12,lineHeight:1.65,fontFamily:`var(--font-mono)`,color:`var(--color-text-primary)`,whiteSpace:`pre`},children:(0,$.jsx)(`code`,{children:e})})]})}function dp({recipe:e,onSelect:t,selected:n}){return(0,$.jsxs)(`div`,{onClick:()=>t(e),style:{padding:`16px 18px`,borderRadius:12,cursor:`pointer`,border:n?`1.5px solid #185FA5`:`0.5px solid var(--color-border-tertiary)`,background:n?`#061320`:`var(--color-background-primary)`,transition:`all 0.15s`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:6},children:[(0,$.jsx)(`span`,{style:{fontSize:13,color:`var(--color-text-secondary)`,fontWeight:400},children:e.category}),(0,$.jsx)(`span`,{style:{fontSize:11,padding:`2px 8px`,borderRadius:20,fontWeight:500,background:sp[e.difficulty],color:op[e.difficulty]},children:e.difficulty})]}),(0,$.jsx)(`div`,{style:{fontWeight:500,fontSize:15,marginBottom:4,color:`var(--color-text-primary)`},children:e.title}),(0,$.jsx)(`div`,{style:{fontSize:13,color:`var(--color-text-secondary)`,lineHeight:1.5},children:e.description}),(0,$.jsx)(`div`,{style:{marginTop:10,display:`flex`,gap:6,flexWrap:`wrap`},children:e.tags.map(e=>(0,$.jsx)(`span`,{style:{fontSize:11,padding:`2px 8px`,borderRadius:20,background:`var(--color-background-tertiary)`,color:`var(--color-text-secondary)`,border:`0.5px solid var(--color-border-tertiary)`},children:e},e))})]})}function fp({recipe:e}){let[t,n]=(0,x.useState)(`steps`);return(0,$.jsxs)(`div`,{style:{padding:`24px`,borderRadius:14,background:`var(--color-background-primary)`,border:`0.5px solid var(--color-border-tertiary)`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:4},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{style:{fontSize:12,color:`var(--color-text-tertiary)`},children:e.category}),(0,$.jsx)(`h2`,{style:{margin:`4px 0 6px`,fontSize:22,fontWeight:500},children:e.title})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,paddingTop:4},children:[(0,$.jsx)(`span`,{style:{fontSize:12,padding:`3px 10px`,borderRadius:20,fontWeight:500,background:sp[e.difficulty],color:op[e.difficulty]},children:e.difficulty}),(0,$.jsxs)(`span`,{style:{fontSize:12,color:`var(--color-text-tertiary)`},children:[`⏱ `,e.time]})]})]}),(0,$.jsx)(`p`,{style:{margin:`0 0 20px`,color:`var(--color-text-secondary)`,fontSize:14,lineHeight:1.6},children:e.description}),(0,$.jsx)(`div`,{style:{display:`flex`,gap:4,marginBottom:18,borderBottom:`0.5px solid var(--color-border-tertiary)`,paddingBottom:0},children:[`steps`,`code`,`concept`].map(e=>(0,$.jsx)(`button`,{onClick:()=>n(e),style:{padding:`8px 16px`,border:`none`,background:`none`,cursor:`pointer`,fontSize:14,fontWeight:t===e?500:400,color:t===e?`var(--color-text-primary)`:`var(--color-text-secondary)`,borderBottom:t===e?`2px solid #185FA5`:`2px solid transparent`,marginBottom:-1,transition:`all 0.12s`},children:e===`steps`?`Pipeline Steps`:e===`code`?`Code`:`Concept`},e))}),t===`steps`&&(0,$.jsx)(cp,{steps:e.steps}),t===`code`&&(0,$.jsx)(up,{code:e.code}),t===`concept`&&(0,$.jsx)(lp,{content:e.concept})]})}function pp({recipes:e,selected:t,onSelect:n,category:r,setCategory:i,search:a,setSearch:o}){let s=e.filter(e=>{let t=r===`All`||e.category===r,n=e.title.toLowerCase().includes(a.toLowerCase())||e.tags.some(e=>e.toLowerCase().includes(a.toLowerCase()));return t&&n});return(0,$.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:0},children:[(0,$.jsx)(`div`,{style:{padding:`0 0 16px`},children:(0,$.jsx)(`input`,{type:`text`,placeholder:`Search recipes…`,value:a,onChange:e=>o(e.target.value),style:{width:`100%`,boxSizing:`border-box`,padding:`8px 12px`,borderRadius:8,border:`0.5px solid var(--color-border-secondary)`,background:`var(--color-background-secondary)`,color:`var(--color-text-primary)`,fontSize:13}})}),(0,$.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,marginBottom:16},children:ap.map(e=>(0,$.jsx)(`button`,{onClick:()=>i(e),style:{padding:`4px 12px`,borderRadius:20,fontSize:12,cursor:`pointer`,border:r===e?`1.5px solid #185FA5`:`0.5px solid var(--color-border-tertiary)`,background:r===e?`#E6F1FB`:`var(--color-background-primary)`,color:r===e?`#185FA5`:`var(--color-text-secondary)`,fontWeight:r===e?500:400},children:e},e))}),(0,$.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10,overflowY:`auto`,flex:1},children:s.length===0?(0,$.jsx)(`div`,{style:{color:`var(--color-text-tertiary)`,fontSize:13,padding:`12px 0`},children:`No recipes found.`}):s.map(e=>(0,$.jsx)(dp,{recipe:e,onSelect:n,selected:t?.id===e.id},e.id))})]})}function mp(){return(0,$.jsxs)(`div`,{style:{padding:`20px 32px 16px`,borderBottom:`0.5px solid var(--color-border-tertiary)`,display:`flex`,alignItems:`center`,gap:16},children:[(0,$.jsx)(`div`,{style:{width:40,height:40,borderRadius:10,background:`#E6F1FB`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:20},children:`📚`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h1`,{style:{margin:0,fontSize:20,fontWeight:500,letterSpacing:`-0.3px`},children:`RAG Cookbook`}),(0,$.jsx)(`p`,{style:{margin:0,fontSize:13,color:`var(--color-text-secondary)`},children:`End-to-end retrieval-augmented generation recipes`})]}),(0,$.jsx)(`div`,{style:{marginLeft:`auto`,display:`flex`,gap:20},children:[{label:`Recipes`,value:ip.length},{label:`Patterns`,value:ap.length-1}].map(({label:e,value:t})=>(0,$.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,$.jsx)(`div`,{style:{fontSize:18,fontWeight:500},children:t}),(0,$.jsx)(`div`,{style:{fontSize:11,color:`var(--color-text-tertiary)`},children:e})]},e))})]})}function hp(){let[e,t]=(0,x.useState)(ip[0]),[n,r]=(0,x.useState)(`All`),[i,a]=(0,x.useState)(``);return(0,$.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100vh`,fontFamily:`var(--font-sans, system-ui, sans-serif)`,background:`var(--color-background-tertiary, radial-gradient(circle at top, #0f172a, #020617);)`,color:`var(--color-text-primary)`},children:[(0,$.jsx)(mp,{}),(0,$.jsxs)(`div`,{style:{display:`flex`,flex:1,overflow:`hidden`},children:[(0,$.jsx)(`div`,{style:{width:320,minWidth:260,padding:`20px 20px`,borderRight:`0.5px solid var(--color-border-tertiary)`,background:`var(--color-background-primary)`,overflowY:`auto`},children:(0,$.jsx)(pp,{recipes:ip,selected:e,onSelect:t,category:n,setCategory:r,search:i,setSearch:a})}),(0,$.jsx)(`div`,{style:{flex:1,overflowY:`auto`,padding:`24px 28px`},children:e?(0,$.jsx)(fp,{recipe:e}):(0,$.jsx)(`div`,{style:{color:`var(--color-text-tertiary)`,padding:40,textAlign:`center`},children:`Select a recipe to get started`})})]})]})}var gp=`/rag-knowledge-tutor/assets/logo-DfeCIHVX.png`;function _p(){return(0,$.jsxs)(`nav`,{className:`navbar`,children:[(0,$.jsxs)(`div`,{className:`logo`,children:[(0,$.jsx)(`img`,{src:gp,alt:`IC Logo`,className:`logo-icon`}),(0,$.jsxs)(An,{to:`/`,className:`logo-text`,children:[(0,$.jsx)(`span`,{className:`logo-white`,children:`IntelliCatalyst`}),(0,$.jsx)(`span`,{className:`logo-blue`,children:`AI Labs`})]})]}),(0,$.jsxs)(`div`,{className:`menu`,children:[(0,$.jsx)(`a`,{href:`https://pooja-ai.github.io/IntelliCatalyst-Labs/#/`,children:`Home`}),(0,$.jsx)(`a`,{href:`https://pooja-ai.github.io/IntelliCatalyst-Labs/#/projects`,children:`Projects`}),(0,$.jsx)(`a`,{href:`https://pooja-ai.github.io/IntelliCatalyst-Labs/#/books`,children:`Books`}),(0,$.jsx)(`a`,{href:`https://pooja-ai.github.io/IntelliCatalyst-Labs/#/about`,children:`About`})]})]})}function vp(){return(0,$.jsxs)(On,{children:[(0,$.jsx)(_p,{}),(0,$.jsx)(Vt,{children:(0,$.jsx)(zt,{path:`/`,element:(0,$.jsx)(hp,{})})})]})}Jn.createRoot(document.getElementById(`root`)).render((0,$.jsx)(x.StrictMode,{children:(0,$.jsx)(vp,{})}));
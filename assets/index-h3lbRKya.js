var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ee(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function D(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g;function te(e,t){return typeof e==`object`&&e&&e.key!=null?D(``+e.key):t.toString(36)}function ne(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+te(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(O,`$&/`)+`/`),ne(o,r,i,``,function(e){return e})):o!=null&&(ee(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(O,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+te(s,l);c+=ne(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+te(s,l++),c+=ne(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function re(e,t,n){if(e==null)return e;var r=[],i=0;return ne(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function k(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var A={current:null},ie={transition:null},ae={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:ie,ReactCurrentOwner:C};function oe(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:re,forEach:function(e,t,n){re(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return re(e,function(){t++}),t},toArray:function(e){return re(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,e.act=oe,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ee,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:k}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=ie.transition;ie.transition={};try{e()}finally{ie.transition=t}},e.unstable_act=oe,e.useCallback=function(e,t){return A.current.useCallback(e,t)},e.useContext=function(e){return A.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return A.current.useDeferredValue(e)},e.useEffect=function(e,t){return A.current.useEffect(e,t)},e.useId=function(){return A.current.useId()},e.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return A.current.useMemo(e,t)},e.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},e.useRef=function(e){return A.current.useRef(e)},e.useState=function(e){return A.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return A.current.useTransition()},e.version=`18.3.1`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,re(x);else{var t=n(l);t!==null&&k(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&k(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,E=-1;function ee(){return!(e.unstable_now()-E<T)}function D(){if(C!==null){var t=e.unstable_now();E=t;var n=!0;try{n=C(!0,t)}finally{n?O():(S=!1,C=null)}}else S=!1}var O;if(typeof v==`function`)O=function(){v(D)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=D,O=function(){ne.postMessage(null)}}else O=function(){g(D,0)};function re(e){C=e,S||(S=!0,O())}function k(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,re(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,k(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,re(x))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d(),n=p();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e){return l.call(m,e)?!0:l.call(f,e)?!1:u.test(e)?m[e]=!0:(f[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),ee=Symbol.for(`react.strict_mode`),D=Symbol.for(`react.profiler`),O=Symbol.for(`react.provider`),te=Symbol.for(`react.context`),ne=Symbol.for(`react.forward_ref`),re=Symbol.for(`react.suspense`),k=Symbol.for(`react.suspense_list`),A=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.offscreen`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var j=Object.assign,ce;function le(e){if(ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ce=t&&t[1]||``}return`
`+ce+e}var ue=!1;function de(e,t){if(!e||ue)return``;ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{ue=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?le(e):``}function fe(e){switch(e.tag){case 5:return le(e.type);case 16:return le(`Lazy`);case 13:return le(`Suspense`);case 19:return le(`SuspenseList`);case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return``}}function pe(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case T:return`Portal`;case D:return`Profiler`;case ee:return`StrictMode`;case re:return`Suspense`;case k:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case te:return(e.displayName||`Context`)+`.Consumer`;case O:return(e._context.displayName||`Context`)+`.Provider`;case ne:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case A:return t=e.displayName||null,t===null?pe(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return pe(t);case 8:return t===ee?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function he(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function _e(e){var t=ge(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ve(e){e._valueTracker||=_e(e)}function ye(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ge(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function be(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function xe(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Se(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=he(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Ce(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function we(e,t){Ce(e,t);var n=he(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Ee(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Ee(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Te(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Ee(e,t,n){(t!==`number`||be(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var De=Array.isArray;function Oe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+he(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ke(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return j({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Ae(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(De(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:he(n)}}function je(e,t){var n=he(t.value),r=he(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Me(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Ne(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Pe(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Ne(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Fe,Ie=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Fe||=document.createElement(`div`),Fe.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Fe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Le(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Re).forEach(function(e){ze.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Re[t]=Re[e]})});function Be(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Re.hasOwnProperty(e)&&Re[e]?(``+t).trim():t+`px`}function Ve(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Be(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var He=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ue(e,t){if(t){if(He[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function We(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ge=null;function Ke(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qe=null,Je=null,Ye=null;function Xe(e){if(e=Ui(e)){if(typeof qe!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Gi(t),qe(e.stateNode,e.type,t))}}function Ze(e){Je?Ye?Ye.push(e):Ye=[e]:Je=e}function Qe(){if(Je){var e=Je,t=Ye;if(Ye=Je=null,Xe(e),t)for(e=0;e<t.length;e++)Xe(t[e])}}function $e(e,t){return e(t)}function et(){}var tt=!1;function nt(e,t,n){if(tt)return e(t,n);tt=!0;try{return $e(e,t,n)}finally{tt=!1,(Je!==null||Ye!==null)&&(et(),Qe())}}function rt(e,t){var n=e.stateNode;if(n===null)return null;var i=Gi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var it=!1;if(c)try{var at={};Object.defineProperty(at,"passive",{get:function(){it=!0}}),window.addEventListener(`test`,at,at),window.removeEventListener(`test`,at,at)}catch{it=!1}function ot(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var st=!1,ct=null,lt=!1,ut=null,dt={onError:function(e){st=!0,ct=e}};function ft(e,t,n,r,i,a,o,s,c){st=!1,ct=null,ot.apply(dt,arguments)}function pt(e,t,n,i,a,o,s,c,l){if(ft.apply(this,arguments),st){if(st){var u=ct;st=!1,ct=null}else throw Error(r(198));lt||(lt=!0,ut=u)}}function mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ht(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gt(e){if(mt(e)!==e)throw Error(r(188))}function _t(e){var t=e.alternate;if(!t){if(t=mt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return gt(a),e;if(o===i)return gt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function vt(e){return e=_t(e),e===null?null:yt(e)}function yt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yt(e);if(t!==null)return t;e=e.sibling}return null}var bt=n.unstable_scheduleCallback,xt=n.unstable_cancelCallback,St=n.unstable_shouldYield,Ct=n.unstable_requestPaint,M=n.unstable_now,wt=n.unstable_getCurrentPriorityLevel,Tt=n.unstable_ImmediatePriority,Et=n.unstable_UserBlockingPriority,Dt=n.unstable_NormalPriority,Ot=n.unstable_LowPriority,kt=n.unstable_IdlePriority,At=null,jt=null;function Mt(e){if(jt&&typeof jt.onCommitFiberRoot==`function`)try{jt.onCommitFiberRoot(At,e,void 0,(e.current.flags&128)==128)}catch{}}var Nt=Math.clz32?Math.clz32:It,Pt=Math.log,Ft=Math.LN2;function It(e){return e>>>=0,e===0?32:31-(Pt(e)/Ft|0)|0}var Lt=64,Rt=4194304;function zt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=zt(a))):r=zt(s)}else o=n&~i,o===0?a!==0&&(r=zt(a)):r=zt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Vt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Nt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Vt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Ut(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Wt(){var e=Lt;return Lt<<=1,!(Lt&4194240)&&(Lt=64),e}function Gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function qt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Jt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var N=0;function Yt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xt,Zt,Qt,$t,en,tn=!1,nn=[],rn=null,an=null,on=null,sn=new Map,cn=new Map,ln=[],un=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function dn(e,t){switch(e){case`focusin`:case`focusout`:rn=null;break;case`dragenter`:case`dragleave`:an=null;break;case`mouseover`:case`mouseout`:on=null;break;case`pointerover`:case`pointerout`:sn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:cn.delete(t.pointerId)}}function fn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ui(t),t!==null&&Zt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pn(e,t,n,r,i){switch(t){case`focusin`:return rn=fn(rn,e,t,n,r,i),!0;case`dragenter`:return an=fn(an,e,t,n,r,i),!0;case`mouseover`:return on=fn(on,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return sn.set(a,fn(sn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,cn.set(a,fn(cn.get(a)||null,e,t,n,r,i)),!0}return!1}function mn(e){var t=Hi(e.target);if(t!==null){var n=mt(t);if(n!==null){if(t=n.tag,t===13){if(t=ht(n),t!==null){e.blockedOn=t,en(e.priority,function(){Qt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=En(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ge=r,n.target.dispatchEvent(r),Ge=null}else return t=Ui(n),t!==null&&Zt(t),e.blockedOn=n,!1;t.shift()}return!0}function gn(e,t,n){hn(e)&&n.delete(t)}function _n(){tn=!1,rn!==null&&hn(rn)&&(rn=null),an!==null&&hn(an)&&(an=null),on!==null&&hn(on)&&(on=null),sn.forEach(gn),cn.forEach(gn)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,tn||(tn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,_n)))}function yn(e){function t(t){return vn(t,e)}if(0<nn.length){vn(nn[0],e);for(var n=1;n<nn.length;n++){var r=nn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&vn(rn,e),an!==null&&vn(an,e),on!==null&&vn(on,e),sn.forEach(t),cn.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)mn(n),n.blockedOn===null&&ln.shift()}var bn=C.ReactCurrentBatchConfig,xn=!0;function Sn(e,t,n,r){var i=N,a=bn.transition;bn.transition=null;try{N=1,wn(e,t,n,r)}finally{N=i,bn.transition=a}}function Cn(e,t,n,r){var i=N,a=bn.transition;bn.transition=null;try{N=4,wn(e,t,n,r)}finally{N=i,bn.transition=a}}function wn(e,t,n,r){if(xn){var i=En(e,t,n,r);if(i===null)mi(e,t,r,Tn,n),dn(e,r);else if(pn(i,e,t,n,r))r.stopPropagation();else if(dn(e,r),t&4&&-1<un.indexOf(e)){for(;i!==null;){var a=Ui(i);if(a!==null&&Xt(a),a=En(e,t,n,r),a===null&&mi(e,t,r,Tn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else mi(e,t,r,null,n)}}var Tn=null;function En(e,t,n,r){if(Tn=null,e=Ke(r),e=Hi(e),e!==null)if(t=mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ht(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tn=e,null}function Dn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(wt()){case Tt:return 1;case Et:return 4;case Dt:case Ot:return 16;case kt:return 536870912;default:return 16}default:return 16}}var On=null,kn=null,An=null;function jn(){if(An)return An;var e,t=kn,n=t.length,r,i=`value`in On?On.value:On.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return An=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Pn(){return!1}function Fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:Pn,this.isPropagationStopped=Pn,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Fn(In),Rn=j({},In,{view:0,detail:0}),zn=Fn(Rn),Bn,Vn,Hn,Un=j({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Hn&&(Hn&&e.type===`mousemove`?(Bn=e.screenX-Hn.screenX,Vn=e.screenY-Hn.screenY):Vn=Bn=0,Hn=e),Bn)},movementY:function(e){return`movementY`in e?e.movementY:Vn}}),Wn=Fn(Un),Gn=Fn(j({},Un,{dataTransfer:0})),Kn=Fn(j({},Rn,{relatedTarget:0})),qn=Fn(j({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),Jn=Fn(j({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Yn=Fn(j({},In,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=Fn(j({},Rn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=Fn(j({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=Fn(j({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ir=Fn(j({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),ar=Fn(j({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),or=[9,13,27,32],sr=c&&`CompositionEvent`in window,cr=null;c&&`documentMode`in document&&(cr=document.documentMode);var lr=c&&`TextEvent`in window&&!cr,ur=c&&(!sr||cr&&8<cr&&11>=cr),dr=` `,fr=!1;function pr(e,t){switch(e){case`keyup`:return or.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function mr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var hr=!1;function gr(e,t){switch(e){case`compositionend`:return mr(t);case`keypress`:return t.which===32?(fr=!0,dr):null;case`textInput`:return e=t.data,e===dr&&fr?null:e;default:return null}}function _r(e,t){if(hr)return e===`compositionend`||!sr&&pr(e,t)?(e=jn(),An=kn=On=null,hr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ur&&t.locale!==`ko`?null:t.data;default:return null}}var vr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!vr[e.type]:t===`textarea`}function P(e,t,n,r){Ze(r),t=gi(t,`onChange`),0<t.length&&(n=new Ln(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var F=null,br=null;function I(e){li(e,0)}function L(e){if(ye(Wi(e)))return e}function xr(e,t){if(e===`change`)return t}var Sr=!1;if(c){var Cr;if(c){var wr=`oninput`in document;if(!wr){var Tr=document.createElement(`div`);Tr.setAttribute(`oninput`,`return;`),wr=typeof Tr.oninput==`function`}Cr=wr}else Cr=!1;Sr=Cr&&(!document.documentMode||9<document.documentMode)}function Er(){F&&(F.detachEvent(`onpropertychange`,Dr),br=F=null)}function Dr(e){if(e.propertyName===`value`&&L(br)){var t=[];P(t,br,e,Ke(e)),nt(I,t)}}function Or(e,t,n){e===`focusin`?(Er(),F=t,br=n,F.attachEvent(`onpropertychange`,Dr)):e===`focusout`&&Er()}function kr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return L(br)}function Ar(e,t){if(e===`click`)return L(t)}function jr(e,t){if(e===`input`||e===`change`)return L(t)}function Mr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Nr=typeof Object.is==`function`?Object.is:Mr;function Pr(e,t){if(Nr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Nr(e[i],t[i]))return!1}return!0}function Fr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ir(e,t){var n=Fr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Fr(n)}}function Lr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rr(){for(var e=window,t=be();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=be(e.document)}return t}function zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Br(e){var t=Rr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lr(n.ownerDocument.documentElement,n)){if(r!==null&&zr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Ir(n,a);var o=Ir(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vr=c&&`documentMode`in document&&11>=document.documentMode,Hr=null,Ur=null,Wr=null,Gr=!1;function Kr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gr||Hr==null||Hr!==be(r)||(r=Hr,`selectionStart`in r&&zr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&Pr(Wr,r)||(Wr=r,r=gi(Ur,`onSelect`),0<r.length&&(t=new Ln(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Hr)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Jr={animationend:qr(`Animation`,`AnimationEnd`),animationiteration:qr(`Animation`,`AnimationIteration`),animationstart:qr(`Animation`,`AnimationStart`),transitionend:qr(`Transition`,`TransitionEnd`)},Yr={},Xr={};c&&(Xr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),`TransitionEvent`in window||delete Jr.transitionend.transition);function Zr(e){if(Yr[e])return Yr[e];if(!Jr[e])return e;var t=Jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xr)return Yr[e]=t[n];return e}var Qr=Zr(`animationend`),$r=Zr(`animationiteration`),ei=Zr(`animationstart`),ti=Zr(`transitionend`),ni=new Map,ri=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function R(e,t){ni.set(e,t),o(t,[e])}for(var ii=0;ii<ri.length;ii++){var ai=ri[ii];R(ai.toLowerCase(),`on`+(ai[0].toUpperCase()+ai.slice(1)))}R(Qr,`onAnimationEnd`),R($r,`onAnimationIteration`),R(ei,`onAnimationStart`),R(`dblclick`,`onDoubleClick`),R(`focusin`,`onFocus`),R(`focusout`,`onBlur`),R(ti,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var oi=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),si=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(oi));function ci(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,pt(r,t,void 0,e),e.currentTarget=null}function li(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;ci(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;ci(i,s,l),a=c}}}if(lt)throw e=ut,lt=!1,ut=null,e}function z(e,t){var n=t[zi];n===void 0&&(n=t[zi]=new Set);var r=e+`__bubble`;n.has(r)||(pi(t,e,2,!1),n.add(r))}function ui(e,t,n){var r=0;t&&(r|=4),pi(n,e,r,t)}var di=`_reactListening`+Math.random().toString(36).slice(2);function fi(e){if(!e[di]){e[di]=!0,i.forEach(function(t){t!==`selectionchange`&&(si.has(t)||ui(t,!1,e),ui(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[di]||(t[di]=!0,ui(`selectionchange`,!1,t))}}function pi(e,t,n,r){switch(Dn(t)){case 1:var i=Sn;break;case 4:i=Cn;break;default:i=wn}n=i.bind(null,t,n,e),i=void 0,!it||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function mi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Hi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}nt(function(){var r=a,i=Ke(n),o=[];a:{var s=ni.get(e);if(s!==void 0){var c=Ln,l=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:c=tr;break;case`focusin`:l=`focus`,c=Kn;break;case`focusout`:l=`blur`,c=Kn;break;case`beforeblur`:case`afterblur`:c=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=rr;break;case Qr:case $r:case ei:c=qn;break;case ti:c=ir;break;case`scroll`:c=zn;break;case`wheel`:c=ar;break;case`copy`:case`cut`:case`paste`:c=Jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=nr}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=rt(p,f),h!=null&&u.push(hi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ge&&(l=n.relatedTarget||n.fromElement)&&(Hi(l)||l[Ri]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Hi(l):null,l!==null&&(d=mt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Wn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=nr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Wi(c),m=l==null?s:Wi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Hi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=_i(m))p++;for(m=0,h=f;h;h=_i(h))m++;for(;0<p-m;)u=_i(u),p--;for(;0<m-p;)f=_i(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=_i(u),f=_i(f)}u=null}else u=null;c!==null&&vi(o,s,c,u,!1),l!==null&&d!==null&&vi(o,d,l,u,!0)}}a:{if(s=r?Wi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=xr;else if(yr(s))if(Sr)g=jr;else{g=kr;var _=Or}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Ar);if(g&&=g(e,r)){P(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Ee(s,`number`,s.value)}switch(_=r?Wi(r):window,e){case`focusin`:(yr(_)||_.contentEditable===`true`)&&(Hr=_,Ur=r,Wr=null);break;case`focusout`:Wr=Ur=Hr=null;break;case`mousedown`:Gr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Gr=!1,Kr(o,n,i);break;case`selectionchange`:if(Vr)break;case`keydown`:case`keyup`:Kr(o,n,i)}var v;if(sr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else hr?pr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(ur&&n.locale!==`ko`&&(hr||y!==`onCompositionStart`?y===`onCompositionEnd`&&hr&&(v=jn()):(On=i,kn=`value`in On?On.value:On.textContent,hr=!0)),_=gi(r,y),0<_.length&&(y=new Yn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=mr(n),v!==null&&(y.data=v)))),(v=lr?gr(e,n):_r(e,n))&&(r=gi(r,`onBeforeInput`),0<r.length&&(i=new Yn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}li(o,t)})}function hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=rt(e,n),a!=null&&r.unshift(hi(e,a,i)),a=rt(e,t),a!=null&&r.push(hi(e,a,i))),e=e.return}return r}function _i(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=rt(n,a),c!=null&&o.unshift(hi(n,c,s))):i||(c=rt(n,a),c!=null&&o.push(hi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var yi=/\r\n?/g,bi=/\u0000|\uFFFD/g;function xi(e){return(typeof e==`string`?e:``+e).replace(yi,`
`).replace(bi,``)}function Si(e,t,n){if(t=xi(t),xi(e)!==t&&n)throw Error(r(425))}function Ci(){}var wi=null,Ti=null;function Ei(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Di=typeof setTimeout==`function`?setTimeout:void 0,Oi=typeof clearTimeout==`function`?clearTimeout:void 0,ki=typeof Promise==`function`?Promise:void 0,Ai=typeof queueMicrotask==`function`?queueMicrotask:ki===void 0?Di:function(e){return ki.resolve(null).then(e).catch(ji)};function ji(e){setTimeout(function(){throw e})}function Mi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),yn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);yn(t)}function Ni(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Pi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Fi=Math.random().toString(36).slice(2),Ii=`__reactFiber$`+Fi,Li=`__reactProps$`+Fi,Ri=`__reactContainer$`+Fi,zi=`__reactEvents$`+Fi,Bi=`__reactListeners$`+Fi,Vi=`__reactHandles$`+Fi;function Hi(e){var t=e[Ii];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ri]||n[Ii]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pi(e);e!==null;){if(n=e[Ii])return n;e=Pi(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){return e=e[Ii]||e[Ri],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Gi(e){return e[Li]||null}var Ki=[],qi=-1;function Ji(e){return{current:e}}function B(e){0>qi||(e.current=Ki[qi],Ki[qi]=null,qi--)}function V(e,t){qi++,Ki[qi]=e.current,e.current=t}var Yi={},H=Ji(Yi),U=Ji(!1),W=Yi;function Xi(e,t){var n=e.type.contextTypes;if(!n)return Yi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Zi(e){return e=e.childContextTypes,e!=null}function Qi(){B(U),B(H)}function G(e,t,n){if(H.current!==Yi)throw Error(r(168));V(H,t),V(U,n)}function $i(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,me(e)||`Unknown`,a));return j({},n,i)}function ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yi,W=H.current,V(H,e),V(U,U.current),!0}function ta(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=$i(e,t,W),i.__reactInternalMemoizedMergedChildContext=e,B(U),B(H),V(H,e)):B(U),V(U,n)}var na=null,ra=!1,ia=!1;function aa(e){na===null?na=[e]:na.push(e)}function oa(e){ra=!0,aa(e)}function sa(){if(!ia&&na!==null){ia=!0;var e=0,t=N;try{var n=na;for(N=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}na=null,ra=!1}catch(t){throw na!==null&&(na=na.slice(e+1)),bt(Tt,sa),t}finally{N=t,ia=!1}}return null}var ca=[],la=0,ua=null,da=0,fa=[],pa=0,ma=null,ha=1,ga=``;function _a(e,t){ca[la++]=da,ca[la++]=ua,ua=e,da=t}function va(e,t,n){fa[pa++]=ha,fa[pa++]=ga,fa[pa++]=ma,ma=e;var r=ha;e=ga;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var a=32-Nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ha=1<<32-Nt(t)+i|n<<i|r,ga=a+e}else ha=1<<a|n<<i|r,ga=e}function ya(e){e.return!==null&&(_a(e,1),va(e,1,0))}function ba(e){for(;e===ua;)ua=ca[--la],ca[la]=null,da=ca[--la],ca[la]=null;for(;e===ma;)ma=fa[--pa],fa[pa]=null,ga=fa[--pa],fa[pa]=null,ha=fa[--pa],fa[pa]=null}var xa=null,Sa=null,K=!1,Ca=null;function wa(e,t){var n=Kl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ta(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,xa=e,Sa=Ni(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,xa=e,Sa=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=ma===null?null:{id:ha,overflow:ga},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xa=e,Sa=null,!0);default:return!1}}function Ea(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Da(e){if(K){var t=Sa;if(t){var n=t;if(!Ta(e,t)){if(Ea(e))throw Error(r(418));t=Ni(n.nextSibling);var i=xa;t&&Ta(e,t)?wa(i,n):(e.flags=e.flags&-4097|2,K=!1,xa=e)}}else{if(Ea(e))throw Error(r(418));e.flags=e.flags&-4097|2,K=!1,xa=e}}}function Oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xa=e}function ka(e){if(e!==xa)return!1;if(!K)return Oa(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Ei(e.type,e.memoizedProps)),t&&=Sa){if(Ea(e))throw Aa(),Error(r(418));for(;t;)wa(e,t),t=Ni(t.nextSibling)}if(Oa(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Sa=Ni(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Sa=null}}else Sa=xa?Ni(e.stateNode.nextSibling):null;return!0}function Aa(){for(var e=Sa;e;)e=Ni(e.nextSibling)}function ja(){Sa=xa=null,K=!1}function Ma(e){Ca===null?Ca=[e]:Ca.push(e)}var Na=C.ReactCurrentBatchConfig;function Pa(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Fa(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Ia(e){var t=e._init;return t(e._payload)}function La(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Yl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$l(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&Ia(i)===t.type)?(r=a(t,n.props),r.ref=Pa(e,t,n),r.return=e,r):(r=Xl(n.type,n.key,n.props,null,e.mode,r),r.ref=Pa(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Zl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=$l(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Xl(t.type,t.key,t.props,null,e.mode,n),n.ref=Pa(e,null,t),n.return=e,n;case T:return t=eu(t,e.mode,n),t.return=e,t;case ie:var r=t._init;return f(e,r(t._payload),n)}if(De(t)||se(t))return t=Zl(t,e.mode,n,null),t.return=e,t;Fa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case ie:return i=n._init,p(e,t,i(n._payload),r)}if(De(n)||se(n))return i===null?d(e,t,n,r,null):null;Fa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:var a=r._init;return m(e,t,n,a(r._payload),i)}if(De(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);Fa(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),K&&_a(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return K&&_a(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),K&&_a(r,h),l}function g(a,s,c,l){var u=se(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),K&&_a(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return K&&_a(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),K&&_a(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===E&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===E){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===ie&&Ia(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Pa(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===E?(r=Zl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Xl(i.type,i.key,i.props,null,e.mode,o),o.ref=Pa(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=eu(i,e.mode,o),r.return=e,e=r}return s(e);case ie:return l=i._init,_(e,r,l(i._payload),o)}if(De(i))return h(e,r,i,o);if(se(i))return g(e,r,i,o);Fa(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=$l(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ra=La(!0),za=La(!1),Ba=Ji(null),Va=null,Ha=null,Ua=null;function Wa(){Ua=Ha=Va=null}function Ga(e){var t=Ba.current;B(Ba),e._currentValue=t}function Ka(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qa(e,t){Va=e,Ua=Ha=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Fs=!0),e.firstContext=null)}function Ja(e){var t=e._currentValue;if(Ua!==e)if(e={context:e,memoizedValue:t,next:null},Ha===null){if(Va===null)throw Error(r(308));Ha=e,Va.dependencies={lanes:0,firstContext:e}}else Ha=Ha.next=e;return t}var Ya=null;function Xa(e){Ya===null?Ya=[e]:Ya.push(e)}function Za(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qa(e,r)}function Qa(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $a=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function to(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function no(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ro(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qa(e,n)}return i=r.interleaved,i===null?(t.next=t,Xa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qa(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jt(e,n)}}function ao(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,r){var i=e.updateQueue;$a=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=j({},d,f);break a;case 2:$a=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Xc|=o,e.lanes=o,e.memoizedState=d}}function so(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var co={},lo=Ji(co),uo=Ji(co),fo=Ji(co);function po(e){if(e===co)throw Error(r(174));return e}function mo(e,t){switch(V(fo,t),V(uo,e),V(lo,co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pe(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pe(t,e)}B(lo),V(lo,t)}function ho(){B(lo),B(uo),B(fo)}function go(e){po(fo.current);var t=po(lo.current),n=Pe(t,e.type);t!==n&&(V(uo,e),V(lo,n))}function _o(e){uo.current===e&&(B(lo),B(uo))}var q=Ji(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=[];function bo(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var xo=C.ReactCurrentDispatcher,So=C.ReactCurrentBatchConfig,Co=0,J=null,wo=null,To=null,Eo=!1,Do=!1,Oo=0,ko=0;function Ao(){throw Error(r(321))}function jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nr(e[n],t[n]))return!1;return!0}function Mo(e,t,n,i,a,o){if(Co=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?hs:gs,e=n(i,a),Do){o=0;do{if(Do=!1,Oo=0,25<=o)throw Error(r(301));o+=1,To=wo=null,t.updateQueue=null,xo.current=_s,e=n(i,a)}while(Do)}if(xo.current=ms,t=wo!==null&&wo.next!==null,Co=0,To=wo=J=null,Eo=!1,t)throw Error(r(300));return e}function No(){var e=Oo!==0;return Oo=0,e}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return To===null?J.memoizedState=To=e:To=To.next=e,To}function Fo(){if(wo===null){var e=J.alternate;e=e===null?null:e.memoizedState}else e=wo.next;var t=To===null?J.memoizedState:To.next;if(t!==null)To=t,wo=e;else{if(e===null)throw Error(r(310));wo=e,e={memoizedState:wo.memoizedState,baseState:wo.baseState,baseQueue:wo.baseQueue,queue:wo.queue,next:null},To===null?J.memoizedState=To=e:To=To.next=e}return To}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){var t=Fo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=wo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Co&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,J.lanes|=d,Xc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Nr(i,t.memoizedState)||(Fs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,J.lanes|=o,Xc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ro(e){var t=Fo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Nr(o,t.memoizedState)||(Fs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function zo(){}function Bo(e,t){var n=J,i=Fo(),a=t(),o=!Nr(i.memoizedState,a);if(o&&(i.memoizedState=a,Fs=!0),i=i.queue,Qo(Uo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||To!==null&&To.memoizedState.tag&1){if(n.flags|=2048,qo(9,Ho.bind(null,n,i,a,t),void 0,null),Wc===null)throw Error(r(349));Co&30||Vo(n,t,a)}return a}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nr(e,n)}catch{return!0}}function Go(e){var t=Qa(e,1);t!==null&&gl(t,e,1,-1)}function Ko(e){var t=Po();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t.queue=e,e=e.dispatch=us.bind(null,J,e),[t.memoizedState,e]}function qo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jo(){return Fo().memoizedState}function Yo(e,t,n,r){var i=Po();J.flags|=e,i.memoizedState=qo(1|t,n,void 0,r===void 0?null:r)}function Xo(e,t,n,r){var i=Fo();r=r===void 0?null:r;var a=void 0;if(wo!==null){var o=wo.memoizedState;if(a=o.destroy,r!==null&&jo(r,o.deps)){i.memoizedState=qo(t,n,a,r);return}}J.flags|=e,i.memoizedState=qo(1|t,n,a,r)}function Zo(e,t){return Yo(8390656,8,e,t)}function Qo(e,t){return Xo(2048,8,e,t)}function $o(e,t){return Xo(4,2,e,t)}function es(e,t){return Xo(4,4,e,t)}function ts(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ns(e,t,n){return n=n==null?null:n.concat([e]),Xo(4,4,ts.bind(null,t,e),n)}function rs(){}function is(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function as(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function os(e,t,n){return Co&21?(Nr(n,t)||(n=Wt(),J.lanes|=n,Xc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fs=!0),e.memoizedState=n)}function ss(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var r=So.transition;So.transition={};try{e(!1),t()}finally{N=n,So.transition=r}}function cs(){return Fo().memoizedState}function ls(e,t,n){var r=hl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ds(e))fs(t,n);else if(n=Za(e,t,n,r),n!==null){var i=ml();gl(n,e,r,i),ps(n,t,r)}}function us(e,t,n){var r=hl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ds(e))fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Nr(s,o)){var c=t.interleaved;c===null?(i.next=i,Xa(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Za(e,t,i,r),n!==null&&(i=ml(),gl(n,e,r,i),ps(n,t,r))}}function ds(e){var t=e.alternate;return e===J||t!==null&&t===J}function fs(e,t){Do=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ps(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jt(e,n)}}var ms={readContext:Ja,useCallback:Ao,useContext:Ao,useEffect:Ao,useImperativeHandle:Ao,useInsertionEffect:Ao,useLayoutEffect:Ao,useMemo:Ao,useReducer:Ao,useRef:Ao,useState:Ao,useDebugValue:Ao,useDeferredValue:Ao,useTransition:Ao,useMutableSource:Ao,useSyncExternalStore:Ao,useId:Ao,unstable_isNewReconciler:!1},hs={readContext:Ja,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:Ja,useEffect:Zo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Yo(4194308,4,ts.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yo(4,2,e,t)},useMemo:function(e,t){var n=Po();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Po();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ls.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:Ko,useDebugValue:rs,useDeferredValue:function(e){return Po().memoizedState=e},useTransition:function(){var e=Ko(!1),t=e[0];return e=ss.bind(null,e[1]),Po().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=J,a=Po();if(K){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Wc===null)throw Error(r(349));Co&30||Vo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Zo(Uo.bind(null,i,o,e),[e]),i.flags|=2048,qo(9,Ho.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Po(),t=Wc.identifierPrefix;if(K){var n=ga,r=ha;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Oo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=ko++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},gs={readContext:Ja,useCallback:is,useContext:Ja,useEffect:Qo,useImperativeHandle:ns,useInsertionEffect:$o,useLayoutEffect:es,useMemo:as,useReducer:Lo,useRef:Jo,useState:function(){return Lo(Io)},useDebugValue:rs,useDeferredValue:function(e){return os(Fo(),wo.memoizedState,e)},useTransition:function(){return[Lo(Io)[0],Fo().memoizedState]},useMutableSource:zo,useSyncExternalStore:Bo,useId:cs,unstable_isNewReconciler:!1},_s={readContext:Ja,useCallback:is,useContext:Ja,useEffect:Qo,useImperativeHandle:ns,useInsertionEffect:$o,useLayoutEffect:es,useMemo:as,useReducer:Ro,useRef:Jo,useState:function(){return Ro(Io)},useDebugValue:rs,useDeferredValue:function(e){var t=Fo();return wo===null?t.memoizedState=e:os(t,wo.memoizedState,e)},useTransition:function(){return[Ro(Io)[0],Fo().memoizedState]},useMutableSource:zo,useSyncExternalStore:Bo,useId:cs,unstable_isNewReconciler:!1};function vs(e,t){if(e&&e.defaultProps){for(var n in t=j({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bs={isMounted:function(e){return(e=e._reactInternals)?mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ml(),i=hl(e),a=no(r,i);a.payload=t,n!=null&&(a.callback=n),t=ro(e,a,i),t!==null&&(gl(t,e,i,r),io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ml(),i=hl(e),a=no(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ro(e,a,i),t!==null&&(gl(t,e,i,r),io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ml(),r=hl(e),i=no(n,r);i.tag=2,t!=null&&(i.callback=t),t=ro(e,i,r),t!==null&&(gl(t,e,r,n),io(t,e,r))}};function xs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,a):!0}function Ss(e,t,n){var r=!1,i=Yi,a=t.contextType;return typeof a==`object`&&a?a=Ja(a):(i=Zi(t)?W:H.current,r=t.contextTypes,a=(r=r!=null)?Xi(e,i):Yi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Cs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bs.enqueueReplaceState(t,t.state,null)}function ws(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},eo(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ja(a):(a=Zi(t)?W:H.current,i.context=Xi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(ys(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&bs.enqueueReplaceState(i,i.state,null),oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Ts(e,t){try{var n=``,r=t;do n+=fe(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ds(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Os=typeof WeakMap==`function`?WeakMap:Map;function ks(e,t,n){n=no(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,al=r),Ds(e,t)},n}function As(e,t,n){n=no(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ds(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Ds(e,t),typeof r!=`function`&&(ol===null?ol=new Set([this]):ol.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function js(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Os;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zl.bind(null,e,t,n),t.then(e,e))}function Ms(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ns(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=no(-1,1),t.tag=2,ro(n,t,1))),n.lanes|=1),e)}var Ps=C.ReactCurrentOwner,Fs=!1;function Is(e,t,n,r){t.child=e===null?za(t,null,n,r):Ra(t,e.child,n,r)}function Ls(e,t,n,r,i){n=n.render;var a=t.ref;return qa(t,i),r=Mo(e,t,n,r,a,i),n=No(),e!==null&&!Fs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rc(e,t,i)):(K&&n&&ya(t),t.flags|=1,Is(e,t,r,i),t.child)}function Rs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,zs(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Pr:n,n(o,r)&&e.ref===t.ref)return rc(e,t,i)}return t.flags|=1,e=Yl(a,r),e.ref=t.ref,e.return=t,t.child=e}function zs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Pr(a,r)&&e.ref===t.ref)if(Fs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Fs=!0);else return t.lanes=e.lanes,rc(e,t,i)}return Hs(e,t,n,r,i)}function Bs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(qc,Kc),Kc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(qc,Kc),Kc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,V(qc,Kc),Kc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),V(qc,Kc),Kc|=r;return Is(e,t,i,n),t.child}function Vs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hs(e,t,n,r,i){var a=Zi(n)?W:H.current;return a=Xi(t,a),qa(t,i),n=Mo(e,t,n,r,a,i),r=No(),e!==null&&!Fs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rc(e,t,i)):(K&&r&&ya(t),t.flags|=1,Is(e,t,n,i),t.child)}function Us(e,t,n,r,i){if(Zi(n)){var a=!0;ea(t)}else a=!1;if(qa(t,i),t.stateNode===null)nc(e,t),Ss(t,n,r),ws(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ja(l):(l=Zi(n)?W:H.current,l=Xi(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Cs(t,o,r,l),$a=!1;var f=t.memoizedState;o.state=f,oo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||U.current||$a?(typeof u==`function`&&(ys(t,n,u,r),c=t.memoizedState),(s=$a||xs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,to(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:vs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ja(c):(c=Zi(n)?W:H.current,c=Xi(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Cs(t,o,r,c),$a=!1,f=t.memoizedState,o.state=f,oo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||U.current||$a?(typeof p==`function`&&(ys(t,n,p,r),m=t.memoizedState),(l=$a||xs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ws(e,t,n,r,a,i)}function Ws(e,t,n,r,i,a){Vs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&ta(t,n,!1),rc(e,t,a);r=t.stateNode,Ps.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ra(t,e.child,null,a),t.child=Ra(t,null,s,a)):Is(e,t,s,a),t.memoizedState=r.state,i&&ta(t,n,!0),t.child}function Gs(e){var t=e.stateNode;t.pendingContext?G(e,t.pendingContext,t.pendingContext!==t.context):t.context&&G(e,t.context,!1),mo(e,t.containerInfo)}function Ks(e,t,n,r,i){return ja(),Ma(i),t.flags|=256,Is(e,t,n,r),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0};function Js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ys(e,t,n){var r=t.pendingProps,i=q.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(q,i&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ql(o,r,0,null),e=Zl(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Js(n),t.memoizedState=qs,e):Xs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Qs(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Zl(a,o,n,null),a.flags|=2):a=Yl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Js(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=qs,r}return a=e.child,e=a.sibling,r=Yl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xs(e,t){return t=Ql({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Zs(e,t,n,r){return r!==null&&Ma(r),Ra(t,e.child,null,n),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qs(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Es(Error(r(422))),Zs(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Ql({mode:`visible`,children:i.children},a,0,null),o=Zl(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ra(t,e.child,null,s),t.child.memoizedState=Js(s),t.memoizedState=qs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Zs(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Es(o,i,void 0),Zs(e,t,s,i)}if(c=(s&e.childLanes)!==0,Fs||c){if(i=Wc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,Qa(e,a),gl(i,e,a,-1))}return kl(),i=Es(Error(r(421))),Zs(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Vl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Sa=Ni(a.nextSibling),xa=t,K=!0,Ca=null,e!==null&&(fa[pa++]=ha,fa[pa++]=ga,fa[pa++]=ma,ha=e.id,ga=e.overflow,ma=t),t=Xs(t,i.children),t.flags|=4096,t)}function $s(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ka(e.return,t,n)}function ec(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Is(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$s(e,n,t);else if(e.tag===19)$s(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ec(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ec(t,!0,n,null,a);break;case`together`:ec(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Yl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ic(e,t,n){switch(t.tag){case 3:Gs(t),ja();break;case 5:go(t);break;case 1:Zi(t.type)&&ea(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Ba,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(V(q,q.current&1),e=rc(e,t,n),e===null?null:e.sibling):Ys(e,t,n):(V(q,q.current&1),t.flags|=128,null);V(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Bs(e,t,n)}return rc(e,t,n)}var ac=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},oc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,po(lo.current);var o=null;switch(n){case`input`:i=xe(e,i),r=xe(e,r),o=[];break;case`select`:i=j({},i,{value:void 0}),r=j({},r,{value:void 0}),o=[];break;case`textarea`:i=ke(e,i),r=ke(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Ci)}Ue(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&z(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},sc=function(e,t,n,r){n!==r&&(t.flags|=4)};function cc(e,t){if(!K)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function lc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uc(e,t,n){var i=t.pendingProps;switch(ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lc(t),null;case 1:return Zi(t.type)&&Qi(),lc(t),null;case 3:return i=t.stateNode,ho(),B(U),B(H),bo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ca!==null&&(bl(Ca),Ca=null))),lc(t),null;case 5:_o(t);var o=po(fo.current);if(n=t.type,e!==null&&t.stateNode!=null)oc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return lc(t),null}if(e=po(lo.current),ka(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Ii]=t,i[Li]=s,e=(t.mode&1)!=0,n){case`dialog`:z(`cancel`,i),z(`close`,i);break;case`iframe`:case`object`:case`embed`:z(`load`,i);break;case`video`:case`audio`:for(o=0;o<oi.length;o++)z(oi[o],i);break;case`source`:z(`error`,i);break;case`img`:case`image`:case`link`:z(`error`,i),z(`load`,i);break;case`details`:z(`toggle`,i);break;case`input`:Se(i,s),z(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},z(`invalid`,i);break;case`textarea`:Ae(i,s),z(`invalid`,i)}for(var c in Ue(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Si(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Si(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&z(`scroll`,i)}switch(n){case`input`:ve(i),Te(i,s,!0);break;case`textarea`:ve(i),Me(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Ci)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Ne(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Ii]=t,e[Li]=i,ac(e,t,!1,!1),t.stateNode=e;a:{switch(c=We(n,i),n){case`dialog`:z(`cancel`,e),z(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:z(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<oi.length;o++)z(oi[o],e);o=i;break;case`source`:z(`error`,e),o=i;break;case`img`:case`image`:case`link`:z(`error`,e),z(`load`,e),o=i;break;case`details`:z(`toggle`,e),o=i;break;case`input`:Se(e,i),o=xe(e,i),z(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=j({},i,{value:void 0}),z(`invalid`,e);break;case`textarea`:Ae(e,i),o=ke(e,i),z(`invalid`,e);break;default:o=i}for(s in Ue(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ve(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ie(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Le(e,u):typeof u==`number`&&Le(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&z(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:ve(e),Te(e,i,!1);break;case`textarea`:ve(e),Me(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+he(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Oe(e,!!i.multiple,i.defaultValue,!0):Oe(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Ci)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lc(t),null;case 6:if(e&&t.stateNode!=null)sc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=po(fo.current),po(lo.current),ka(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ii]=t,(s=i.nodeValue!==n)&&(e=xa,e!==null))switch(e.tag){case 3:Si(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Si(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ii]=t,t.stateNode=i}return lc(t),null;case 13:if(B(q),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Sa!==null&&t.mode&1&&!(t.flags&128))Aa(),ja(),t.flags|=98560,s=!1;else if(s=ka(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Ii]=t}else ja(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lc(t),s=!1}else Ca!==null&&(bl(Ca),Ca=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?Jc===0&&(Jc=3):kl())),t.updateQueue!==null&&(t.flags|=4),lc(t),null);case 4:return ho(),e===null&&fi(t.stateNode.containerInfo),lc(t),null;case 10:return Ga(t.type._context),lc(t),null;case 17:return Zi(t.type)&&Qi(),lc(t),null;case 19:if(B(q),s=t.memoizedState,s===null)return lc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)cc(s,!1);else{if(Jc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=vo(e),c!==null){for(t.flags|=128,cc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&M()>nl&&(t.flags|=128,i=!0,cc(s,!1),t.lanes=4194304)}else{if(!i)if(e=vo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!K)return lc(t),null}else 2*M()-s.renderingStartTime>nl&&n!==1073741824&&(t.flags|=128,i=!0,cc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(lc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=M(),t.sibling=null,n=q.current,V(q,i?n&1|2:n&1),t);case 22:case 23:return Tl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Kc&1073741824&&(lc(t),t.subtreeFlags&6&&(t.flags|=8192)):lc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function dc(e,t){switch(ba(t),t.tag){case 1:return Zi(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ho(),B(U),B(H),bo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _o(t),null;case 13:if(B(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(q),null;case 4:return ho(),null;case 10:return Ga(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var fc=!1,pc=!1,mc=typeof WeakSet==`function`?WeakSet:Set,Y=null;function hc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){$(e,t,n)}else n.current=null}function gc(e,t,n){try{n()}catch(n){$(e,t,n)}}var _c=!1;function vc(e,t){if(wi=xn,e=Rr(),zr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Ti={focusedElem:e,selectionRange:n},xn=!1,Y=t;Y!==null;)if(t=Y,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:vs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){$(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return h=_c,_c=!1,h}function yc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&gc(t,n,a)}i=i.next}while(i!==r)}}function bc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Sc(e){var t=e.alternate;t!==null&&(e.alternate=null,Sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ii],delete t[Li],delete t[zi],delete t[Bi],delete t[Vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cc(e){return e.tag===5||e.tag===3||e.tag===4}function wc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ci));else if(r!==4&&(e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}function Ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ec(e,t,n),e=e.sibling;e!==null;)Ec(e,t,n),e=e.sibling}var Dc=null,Oc=!1;function kc(e,t,n){for(n=n.child;n!==null;)Ac(e,t,n),n=n.sibling}function Ac(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount==`function`)try{jt.onCommitFiberUnmount(At,n)}catch{}switch(n.tag){case 5:pc||hc(n,t);case 6:var r=Dc,i=Oc;Dc=null,kc(e,t,n),Dc=r,Oc=i,Dc!==null&&(Oc?(e=Dc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Dc.removeChild(n.stateNode));break;case 18:Dc!==null&&(Oc?(e=Dc,n=n.stateNode,e.nodeType===8?Mi(e.parentNode,n):e.nodeType===1&&Mi(e,n),yn(e)):Mi(Dc,n.stateNode));break;case 4:r=Dc,i=Oc,Dc=n.stateNode.containerInfo,Oc=!0,kc(e,t,n),Dc=r,Oc=i;break;case 0:case 11:case 14:case 15:if(!pc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&gc(n,t,o),i=i.next}while(i!==r)}kc(e,t,n);break;case 1:if(!pc&&(hc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){$(n,t,e)}kc(e,t,n);break;case 21:kc(e,t,n);break;case 22:n.mode&1?(pc=(r=pc)||n.memoizedState!==null,kc(e,t,n),pc=r):kc(e,t,n);break;default:kc(e,t,n)}}function jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mc),t.forEach(function(t){var r=Hl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Mc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Dc=c.stateNode,Oc=!1;break a;case 3:Dc=c.stateNode.containerInfo,Oc=!0;break a;case 4:Dc=c.stateNode.containerInfo,Oc=!0;break a}c=c.return}if(Dc===null)throw Error(r(160));Ac(o,s,a),Dc=null,Oc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){$(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nc(t,e),t=t.sibling}function Nc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mc(t,e),Pc(e),i&4){try{yc(3,e,e.return),bc(3,e)}catch(t){$(e,e.return,t)}try{yc(5,e,e.return)}catch(t){$(e,e.return,t)}}break;case 1:Mc(t,e),Pc(e),i&512&&n!==null&&hc(n,n.return);break;case 5:if(Mc(t,e),Pc(e),i&512&&n!==null&&hc(n,n.return),e.flags&32){var a=e.stateNode;try{Le(a,``)}catch(t){$(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Ce(a,o),We(c,s);var u=We(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ve(a,f):d===`dangerouslySetInnerHTML`?Ie(a,f):d===`children`?Le(a,f):S(a,d,f,u)}switch(c){case`input`:we(a,o);break;case`textarea`:je(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Oe(a,!!o.multiple,o.multiple?[]:``,!1):Oe(a,!!o.multiple,o.defaultValue,!0)):Oe(a,!!o.multiple,m,!1)}a[Li]=o}catch(t){$(e,e.return,t)}}break;case 6:if(Mc(t,e),Pc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){$(e,e.return,t)}}break;case 3:if(Mc(t,e),Pc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yn(t.containerInfo)}catch(t){$(e,e.return,t)}break;case 4:Mc(t,e),Pc(e);break;case 13:Mc(t,e),Pc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(tl=M())),i&4&&jc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pc=(u=pc)||d,Mc(t,e),pc=u):Mc(t,e),Pc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Y=e,d=e.child;d!==null;){for(f=Y=d;Y!==null;){switch(p=Y,m=p.child,p.tag){case 0:case 11:case 14:case 15:yc(4,p,p.return);break;case 1:hc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){$(i,n,e)}}break;case 5:hc(p,p.return);break;case 22:if(p.memoizedState!==null){Rc(f);continue}}m===null?Rc(f):(m.return=p,Y=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Be(`display`,s))}catch(t){$(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){$(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mc(t,e),Pc(e),i&4&&jc(e);break;case 21:break;default:Mc(t,e),Pc(e)}}function Pc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Cc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Le(a,``),i.flags&=-33),Ec(e,wc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Tc(e,wc(e),o);break;default:throw Error(r(161))}}catch(t){$(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fc(e,t,n){Y=e,Ic(e,t,n)}function Ic(e,t,n){for(var r=(e.mode&1)!=0;Y!==null;){var i=Y,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||pc;s=fc;var l=pc;if(fc=o,(pc=c)&&!l)for(Y=i;Y!==null;)o=Y,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?zc(i):(c.return=o,Y=c);for(;a!==null;)Y=a,Ic(a,t,n),a=a.sibling;Y=i,fc=s,pc=l}Lc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Y=a):Lc(e,t,n)}}function Lc(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pc||bc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!pc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:vs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&so(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}so(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&yn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}pc||t.flags&512&&xc(t)}catch(e){$(t,t.return,e)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Rc(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function zc(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bc(4,t)}catch(e){$(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){$(t,i,e)}}var a=t.return;try{xc(t)}catch(e){$(t,a,e)}break;case 5:var o=t.return;try{xc(t)}catch(e){$(t,o,e)}}}catch(e){$(t,t.return,e)}if(t===e){Y=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Y=s;break}Y=t.return}}var Bc=Math.ceil,Vc=C.ReactCurrentDispatcher,Hc=C.ReactCurrentOwner,Uc=C.ReactCurrentBatchConfig,X=0,Wc=null,Gc=null,Z=0,Kc=0,qc=Ji(0),Jc=0,Yc=null,Xc=0,Zc=0,Qc=0,$c=null,el=null,tl=0,nl=1/0,rl=null,il=!1,al=null,ol=null,sl=!1,cl=null,ll=0,ul=0,dl=null,fl=-1,pl=0;function ml(){return X&6?M():fl===-1?fl=M():fl}function hl(e){return e.mode&1?X&2&&Z!==0?Z&-Z:Na.transition===null?(e=N,e===0?(e=window.event,e=e===void 0?16:Dn(e.type),e):e):(pl===0&&(pl=Wt()),pl):1}function gl(e,t,n,i){if(50<ul)throw ul=0,dl=null,Error(r(185));Kt(e,n,i),(!(X&2)||e!==Wc)&&(e===Wc&&(!(X&2)&&(Zc|=n),Jc===4&&Sl(e,Z)),_l(e,i),n===1&&X===0&&!(t.mode&1)&&(nl=M()+500,ra&&sa()))}function _l(e,t){var n=e.callbackNode;Ht(e,t);var r=Bt(e,e===Wc?Z:0);if(r===0)n!==null&&xt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xt(n),t===1)e.tag===0?oa(Q.bind(null,e)):aa(Q.bind(null,e)),Ai(function(){!(X&6)&&sa()}),n=null;else{switch(Yt(r)){case 1:n=Tt;break;case 4:n=Et;break;case 16:n=Dt;break;case 536870912:n=kt;break;default:n=Dt}n=Wl(n,vl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vl(e,t){if(fl=-1,pl=0,X&6)throw Error(r(327));var n=e.callbackNode;if(Ll()&&e.callbackNode!==n)return null;var i=Bt(e,e===Wc?Z:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Al(e,i);else{t=i;var a=X;X|=2;var o=Ol();(Wc!==e||Z!==t)&&(rl=null,nl=M()+500,El(e,t));do try{Ml();break}catch(t){Dl(e,t)}while(1);Wa(),Vc.current=o,X=a,Gc===null?(Wc=null,Z=0,t=Jc):t=0}if(t!==0){if(t===2&&(a=Ut(e),a!==0&&(i=a,t=yl(e,a))),t===1)throw n=Yc,El(e,0),Sl(e,i),_l(e,M()),n;if(t===6)Sl(e,i);else{if(a=e.current.alternate,!(i&30)&&!xl(a)&&(t=Al(e,i),t===2&&(o=Ut(e),o!==0&&(i=o,t=yl(e,o))),t===1))throw n=Yc,El(e,0),Sl(e,i),_l(e,M()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Fl(e,el,rl);break;case 3:if(Sl(e,i),(i&130023424)===i&&(t=tl+500-M(),10<t)){if(Bt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){ml(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Di(Fl.bind(null,e,el,rl),t);break}Fl(e,el,rl);break;case 4:if(Sl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Nt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=M()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Bc(i/1960))-i,10<i){e.timeoutHandle=Di(Fl.bind(null,e,el,rl),i);break}Fl(e,el,rl);break;case 5:Fl(e,el,rl);break;default:throw Error(r(329))}}}return _l(e,M()),e.callbackNode===n?vl.bind(null,e):null}function yl(e,t){var n=$c;return e.current.memoizedState.isDehydrated&&(El(e,t).flags|=256),e=Al(e,t),e!==2&&(t=el,el=n,t!==null&&bl(t)),e}function bl(e){el===null?el=e:el.push.apply(el,e)}function xl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Nr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sl(e,t){for(t&=~Qc,t&=~Zc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Q(e){if(X&6)throw Error(r(327));Ll();var t=Bt(e,0);if(!(t&1))return _l(e,M()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var i=Ut(e);i!==0&&(t=i,n=yl(e,i))}if(n===1)throw n=Yc,El(e,0),Sl(e,t),_l(e,M()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fl(e,el,rl),_l(e,M()),null}function Cl(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(nl=M()+500,ra&&sa())}}function wl(e){cl!==null&&cl.tag===0&&!(X&6)&&Ll();var t=X;X|=1;var n=Uc.transition,r=N;try{if(Uc.transition=null,N=1,e)return e()}finally{N=r,Uc.transition=n,X=t,!(X&6)&&sa()}}function Tl(){Kc=qc.current,B(qc)}function El(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Oi(n)),Gc!==null)for(n=Gc.return;n!==null;){var r=n;switch(ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:ho(),B(U),B(H),bo();break;case 5:_o(r);break;case 4:ho();break;case 13:B(q);break;case 19:B(q);break;case 10:Ga(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(Wc=e,Gc=e=Yl(e.current,null),Z=Kc=t,Jc=0,Yc=null,Qc=Zc=Xc=0,el=$c=null,Ya!==null){for(t=0;t<Ya.length;t++)if(n=Ya[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Ya=null}return e}function Dl(e,t){do{var n=Gc;try{if(Wa(),xo.current=ms,Eo){for(var i=J.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Eo=!1}if(Co=0,To=wo=J=null,Do=!1,Oo=0,Hc.current=null,n===null||n.return===null){Jc=1,Yc=t,Gc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Z,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ms(s);if(m!==null){m.flags&=-257,Ns(m,s,c,o,t),m.mode&1&&js(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){js(o,u,t),kl();break a}l=Error(r(426))}}else if(K&&c.mode&1){var _=Ms(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ns(_,s,c,o,t),Ma(Ts(l,c));break a}}o=l=Ts(l,c),Jc!==4&&(Jc=2),$c===null?$c=[o]:$c.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=ks(o,l,t);ao(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(ol===null||!ol.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=As(o,c,t);ao(o,x);break a}}o=o.return}while(o!==null)}Pl(n)}catch(e){t=e,Gc===n&&n!==null&&(Gc=n=n.return);continue}break}while(1)}function Ol(){var e=Vc.current;return Vc.current=ms,e===null?ms:e}function kl(){(Jc===0||Jc===3||Jc===2)&&(Jc=4),Wc===null||!(Xc&268435455)&&!(Zc&268435455)||Sl(Wc,Z)}function Al(e,t){var n=X;X|=2;var i=Ol();(Wc!==e||Z!==t)&&(rl=null,El(e,t));do try{jl();break}catch(t){Dl(e,t)}while(1);if(Wa(),X=n,Vc.current=i,Gc!==null)throw Error(r(261));return Wc=null,Z=0,Jc}function jl(){for(;Gc!==null;)Nl(Gc)}function Ml(){for(;Gc!==null&&!St();)Nl(Gc)}function Nl(e){var t=Ul(e.alternate,e,Kc);e.memoizedProps=e.pendingProps,t===null?Pl(e):Gc=t,Hc.current=null}function Pl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dc(n,t),n!==null){n.flags&=32767,Gc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Jc=6,Gc=null;return}}else if(n=uc(n,t,Kc),n!==null){Gc=n;return}if(t=t.sibling,t!==null){Gc=t;return}Gc=t=e}while(t!==null);Jc===0&&(Jc=5)}function Fl(e,t,n){var r=N,i=Uc.transition;try{Uc.transition=null,N=1,Il(e,t,n,r)}finally{Uc.transition=i,N=r}return null}function Il(e,t,n,i){do Ll();while(cl!==null);if(X&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qt(e,o),e===Wc&&(Gc=Wc=null,Z=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,Wl(Dt,function(){return Ll(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Uc.transition,Uc.transition=null;var s=N;N=1;var c=X;X|=4,Hc.current=null,vc(e,n),Nc(n,e),Br(Ti),xn=!!wi,Ti=wi=null,e.current=n,Fc(n,e,a),Ct(),X=c,N=s,Uc.transition=o}else e.current=n;if(sl&&(sl=!1,cl=e,ll=a),o=e.pendingLanes,o===0&&(ol=null),Mt(n.stateNode,i),_l(e,M()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(il)throw il=!1,e=al,al=null,e;return ll&1&&e.tag!==0&&Ll(),o=e.pendingLanes,o&1?e===dl?ul++:(ul=0,dl=e):ul=0,sa(),null}function Ll(){if(cl!==null){var e=Yt(ll),t=Uc.transition,n=N;try{if(Uc.transition=null,N=16>e?16:e,cl===null)var i=!1;else{if(e=cl,cl=null,ll=0,X&6)throw Error(r(331));var a=X;for(X|=4,Y=e.current;Y!==null;){var o=Y,s=o.child;if(Y.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Y=u;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:yc(8,d,o)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var p=d.sibling,m=d.return;if(Sc(d),d===u){Y=null;break}if(p!==null){p.return=m,Y=p;break}Y=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Y=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Y=s;else b:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Y=v;break b}Y=o.return}}var y=e.current;for(Y=y;Y!==null;){s=Y;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Y=b;else b:for(s=y;Y!==null;){if(c=Y,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:bc(9,c)}}catch(e){$(c,c.return,e)}if(c===s){Y=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Y=x;break b}Y=c.return}}if(X=a,sa(),jt&&typeof jt.onPostCommitFiberRoot==`function`)try{jt.onPostCommitFiberRoot(At,e)}catch{}i=!0}return i}finally{N=n,Uc.transition=t}}return!1}function Rl(e,t,n){t=Ts(n,t),t=ks(e,t,1),e=ro(e,t,1),t=ml(),e!==null&&(Kt(e,1,t),_l(e,t))}function $(e,t,n){if(e.tag===3)Rl(e,e,n);else for(;t!==null;){if(t.tag===3){Rl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ol===null||!ol.has(r))){e=Ts(n,e),e=As(t,e,1),t=ro(t,e,1),e=ml(),t!==null&&(Kt(t,1,e),_l(t,e));break}}t=t.return}}function zl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ml(),e.pingedLanes|=e.suspendedLanes&n,Wc===e&&(Z&n)===n&&(Jc===4||Jc===3&&(Z&130023424)===Z&&500>M()-tl?El(e,0):Qc|=n),_l(e,t)}function Bl(e,t){t===0&&(e.mode&1?(t=Rt,Rt<<=1,!(Rt&130023424)&&(Rt=4194304)):t=1);var n=ml();e=Qa(e,t),e!==null&&(Kt(e,t,n),_l(e,n))}function Vl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bl(e,n)}function Hl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Bl(e,n)}var Ul=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||U.current)Fs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Fs=!1,ic(e,t,n);Fs=!!(e.flags&131072)}else Fs=!1,K&&t.flags&1048576&&va(t,da,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;nc(e,t),e=t.pendingProps;var a=Xi(t,H.current);qa(t,n),a=Mo(null,t,i,e,a,n);var o=No();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Zi(i)?(o=!0,ea(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,eo(t),a.updater=bs,t.stateNode=a,a._reactInternals=t,ws(t,i,e,n),t=Ws(null,t,i,!0,o,n)):(t.tag=0,K&&o&&ya(t),Is(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(nc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Jl(i),e=vs(i,e),a){case 0:t=Hs(null,t,i,e,n);break a;case 1:t=Us(null,t,i,e,n);break a;case 11:t=Ls(null,t,i,e,n);break a;case 14:t=Rs(null,t,i,vs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),Hs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),Us(e,t,i,a,n);case 3:a:{if(Gs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,to(e,t),oo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ts(Error(r(423)),t),t=Ks(e,t,i,n,a);break a}else if(i!==a){a=Ts(Error(r(424)),t),t=Ks(e,t,i,n,a);break a}else for(Sa=Ni(t.stateNode.containerInfo.firstChild),xa=t,K=!0,Ca=null,n=za(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ja(),i===a){t=rc(e,t,n);break a}Is(e,t,i,n)}t=t.child}return t;case 5:return go(t),e===null&&Da(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Ei(i,a)?s=null:o!==null&&Ei(i,o)&&(t.flags|=32),Vs(e,t),Is(e,t,s,n),t.child;case 6:return e===null&&Da(t),null;case 13:return Ys(e,t,n);case 4:return mo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ra(t,null,i,n):Is(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),Ls(e,t,i,a,n);case 7:return Is(e,t,t.pendingProps,n),t.child;case 8:return Is(e,t,t.pendingProps.children,n),t.child;case 12:return Is(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,V(Ba,i._currentValue),i._currentValue=s,o!==null)if(Nr(o.value,s)){if(o.children===a.children&&!U.current){t=rc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=no(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ka(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ka(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Is(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,qa(t,n),a=Ja(a),i=i(a),t.flags|=1,Is(e,t,i,n),t.child;case 14:return i=t.type,a=vs(i,t.pendingProps),a=vs(i.type,a),Rs(e,t,i,a,n);case 15:return zs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),nc(e,t),t.tag=1,Zi(i)?(e=!0,ea(t)):e=!1,qa(t,n),Ss(t,i,a),ws(t,i,a,n),Ws(null,t,i,!0,e,n);case 19:return tc(e,t,n);case 22:return Bs(e,t,n)}throw Error(r(156,t.tag))};function Wl(e,t){return bt(e,t)}function Gl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kl(e,t,n,r){return new Gl(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jl(e){if(typeof e==`function`)return+!!ql(e);if(e!=null){if(e=e.$$typeof,e===ne)return 11;if(e===A)return 14}return 2}function Yl(e,t){var n=e.alternate;return n===null?(n=Kl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return Zl(n.children,a,o,t);case ee:s=8,a|=8;break;case D:return e=Kl(12,n,t,a|2),e.elementType=D,e.lanes=o,e;case re:return e=Kl(13,n,t,a),e.elementType=re,e.lanes=o,e;case k:return e=Kl(19,n,t,a),e.elementType=k,e.lanes=o,e;case ae:return Ql(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case O:s=10;break a;case te:s=9;break a;case ne:s=11;break a;case A:s=14;break a;case ie:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Kl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Zl(e,t,n,r){return e=Kl(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Kl(22,e,r,t),e.elementType=ae,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Kl(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=Kl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gt(0),this.expirationTimes=Gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,s,c){return e=new tu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Kl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eo(a),e}function ru(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function iu(e){if(!e)return Yi;e=e._reactInternals;a:{if(mt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(Zi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(Zi(n))return $i(e,n,t)}return t}function au(e,t,n,r,i,a,o,s,c){return e=nu(n,r,!0,e,i,a,o,s,c),e.context=iu(null),n=e.current,r=ml(),i=hl(n),a=no(r,i),a.callback=t??null,ro(n,a,i),e.current.lanes=i,Kt(e,i,r),_l(e,r),e}function ou(e,t,n,r){var i=t.current,a=ml(),o=hl(i);return n=iu(n),t.context===null?t.context=n:t.pendingContext=n,t=no(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ro(i,t,o),e!==null&&(gl(e,i,o,a),io(e,i,o)),o}function su(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function uu(){return null}var du=typeof reportError==`function`?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}pu.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));ou(e,t,null,null)},pu.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wl(function(){ou(null,e,null,null)}),t[Ri]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=$t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&mn(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function gu(){}function _u(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=su(o);a.call(e)}}var o=au(t,r,e,0,null,!1,!1,``,gu);return e._reactRootContainer=o,e[Ri]=o.current,fi(e.nodeType===8?e.parentNode:e),wl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=su(c);s.call(e)}}var c=nu(e,0,!1,null,null,!1,!1,``,gu);return e._reactRootContainer=c,e[Ri]=c.current,fi(e.nodeType===8?e.parentNode:e),wl(function(){ou(t,c,n,r)}),c}function vu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=su(o);s.call(e)}}ou(t,o,e,i)}else o=_u(n,t,e,i,r);return su(o)}Xt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zt(t.pendingLanes);n!==0&&(Jt(t,n|1),_l(t,M()),!(X&6)&&(nl=M()+500,sa()))}break;case 13:wl(function(){var t=Qa(e,1);t!==null&&gl(t,e,1,ml())}),lu(e,1)}},Zt=function(e){if(e.tag===13){var t=Qa(e,134217728);t!==null&&gl(t,e,134217728,ml()),lu(e,134217728)}},Qt=function(e){if(e.tag===13){var t=hl(e),n=Qa(e,t);n!==null&&gl(n,e,t,ml()),lu(e,t)}},$t=function(){return N},en=function(e,t){var n=N;try{return N=e,t()}finally{N=n}},qe=function(e,t,n){switch(t){case`input`:if(we(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Gi(i);if(!a)throw Error(r(90));ye(i),we(i,a)}}}break;case`textarea`:je(e,n);break;case`select`:t=n.value,t!=null&&Oe(e,!!n.multiple,t,!1)}},$e=Cl,et=wl;var yu={usingClientEntryPoint:!1,Events:[Ui,Wi,Gi,Ze,Qe,Cl]},bu={findFiberByHostInstance:Hi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},xu={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vt(e),e===null?null:e.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||uu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{At=Su.inject(xu),jt=Su}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(r(200));return ru(e,t,null,n)},e.createRoot=function(e,t){if(!mu(e))throw Error(r(299));var n=!1,i=``,a=du;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,i,a),e[Ri]=t.current,fi(e.nodeType===8?e.parentNode:e),new fu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=vt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return wl(e)},e.hydrate=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=du;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=au(t,null,e,1,n??null,a,!1,o,s),e[Ri]=t.current,fi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new pu(t)},e.render=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!hu(e))throw Error(r(40));return e._reactRootContainer?(wl(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Ri]=null})}),!0):!1},e.unstable_batchedUpdates=Cl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return vu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=h();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),_=`modulepreload`,v=function(e){return`/rag-knowledge-tutor/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=v(t,n),t=s(t),t in y)return;y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=l(d(),1),S=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,C=/^[\\/]{2}/;function w(e,t){return t+e.replace(/\\/g,`/`)}var T=`popstate`;function E(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ee(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=A(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),re(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:k(t))}function r(e,t){O(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return ie(t,n,r,e)}function D(e,t){if(e===!1||e==null)throw Error(t)}function O(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function te(){return Math.random().toString(36).substring(2,10)}function ne(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function re(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?A(t):t,state:n,key:t&&t.key||r||te(),mask:i}}function k({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function A(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ie(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=E(e)?e:re(h.location,e,t);n&&n(r,e),l=u()+1;let d=ne(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=E(e)?e:re(h.location,e,t);n&&n(r,e),l=u();let i=ne(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ae(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(T,d),c=e,()=>{i.removeEventListener(T,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ae(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),D(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:k(t);return i=i.replace(/ $/,`%20`),!n&&C.test(i)&&(i=r+i),new URL(i,r)}function oe(e,t,n=`/`){return se(e,t,n,!1)}function se(e,t,n,r,i){let a=Ee((typeof t==`string`?A(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ce(e),s=null,c=Te(a);for(let e=0;s==null&&e<o.length;++e)s=xe(o[e],c,r);return s}function j(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ce(e){let t=le(e);return de(t),t}function le(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;D(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Pe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(D(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),le(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=we(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ue(e.path))a(e,t,!0,n)}),t}function ue(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ue(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function de(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var fe=/^:[\w-]+$/,pe=3,me=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=me),n.filter(e=>!ve(e)).reduce((e,t)=>e+(fe.test(t)?pe:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ce(u,l,s.matcher,s.compiledParams):Se(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Pe([a,d.pathname]),pathnameBase:Ie(Pe([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Pe([a,d.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=we(e.path,e.caseSensitive,e.end);return Ce(e,t,n,r)}function Ce(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function we(e,t=!1,n=!0){O(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Te(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return O(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ee(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?A(e):e,a;return n?(n=Ne(n),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Le(r),hash:Re(i)}}function Oe(e,t){let n=Fe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=A(e):(i={...e},D(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),D(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),D(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.replace(/[\\/]{2,}/g,`/`),Pe=e=>Ne(e.join(`/`)),Fe=e=>e.replace(/\/+$/,``),Ie=e=>Fe(e).replace(/^\/*/,`/`),Le=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Re=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ze=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Be(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ve(e){return Pe(e.map(e=>e.route.path).filter(Boolean))||`/`}var He=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ue(e,t){let n=e;if(typeof n!=`string`||!S.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(He)try{let e=new URL(window.location.href),r=C.test(n)?new URL(w(n,e.protocol)):new URL(n),a=Ee(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{O(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var We=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(We);var Ge=[`GET`,...We];new Set(Ge);var Ke=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function qe(e){try{return Ke.includes(new URL(e).protocol)}catch{return!1}}var Je=x.createContext(null);Je.displayName=`DataRouter`;var Ye=x.createContext(null);Ye.displayName=`DataRouterState`;var Xe=x.createContext(!1);function Ze(){return x.useContext(Xe)}var Qe=x.createContext({isTransitioning:!1});Qe.displayName=`ViewTransition`;var $e=x.createContext(new Map);$e.displayName=`Fetchers`;var et=x.createContext(null);et.displayName=`Await`;var tt=x.createContext(null);tt.displayName=`Navigation`;var nt=x.createContext(null);nt.displayName=`Location`;var rt=x.createContext({outlet:null,matches:[],isDataRoute:!1});rt.displayName=`Route`;var it=x.createContext(null);it.displayName=`RouteError`;var at=`REACT_ROUTER_ERROR`,ot=`REDIRECT`,st=`ROUTE_ERROR_RESPONSE`;function ct(e){if(e.startsWith(`${at}:${ot}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function lt(e){if(e.startsWith(`${at}:${st}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ze(t.status,t.statusText,t.data)}catch{}}function ut(e,{relative:t}={}){D(dt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(tt),{hash:i,pathname:a,search:o}=_t(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Pe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function dt(){return x.useContext(nt)!=null}function ft(){return D(dt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(nt).location}var pt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function mt(e){x.useContext(tt).static||x.useLayoutEffect(e)}function ht(){let{isDataRoute:e}=x.useContext(rt);return e?Ft():gt()}function gt(){D(dt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Je),{basename:t,navigator:n}=x.useContext(tt),{matches:r}=x.useContext(rt),{pathname:i}=ft(),a=JSON.stringify(je(r)),o=x.useRef(!1);return mt(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(O(o.current,pt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Pe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function _t(e,{relative:t}={}){let{matches:n}=x.useContext(rt),{pathname:r}=ft(),i=JSON.stringify(je(n));return x.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function vt(e,t){return yt(e,t)}function yt(e,t,n){D(dt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(tt),{matches:i}=x.useContext(rt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Lt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ft(),d;if(t){let e=typeof t==`string`?A(t):t;D(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):oe(e,{pathname:p});O(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),O(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Tt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Pe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Pe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(nt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function bt(){let e=Pt(),t=Be(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var xt=x.createElement(bt,null),St=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=lt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(rt.Provider,{value:this.props.routeContext},x.createElement(it.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(M,{error:e},t):t}};St.contextType=Xe;var Ct=new WeakMap;function M({children:e,error:t}){let{basename:n}=x.useContext(tt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ct(t.digest);if(e){let r=Ct.get(t);if(r)throw r;let i=Ue(e.location,n),a=i.absoluteURL||i.to;if(qe(a))throw Error(`Invalid redirect location`);if(He&&!Ct.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Ct.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function wt({routeContext:e,match:t,children:n}){let r=x.useContext(Je);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(rt.Provider,{value:e},n)}function Tt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);D(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ve(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||xt,o&&(s<0&&c===0?(Lt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(wt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(St,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Et(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dt(e){let t=x.useContext(Je);return D(t,Et(e)),t}function Ot(e){let t=x.useContext(Ye);return D(t,Et(e)),t}function kt(e){let t=x.useContext(rt);return D(t,Et(e)),t}function At(e){let t=kt(e),n=t.matches[t.matches.length-1];return D(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function jt(){return At(`useRouteId`)}function Mt(){let e=Ot(`useNavigation`);return x.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function Nt(){let{matches:e,loaderData:t}=Ot(`useMatches`);return x.useMemo(()=>e.map(e=>j(e,t)),[e,t])}function Pt(){let e=x.useContext(it),t=Ot(`useRouteError`),n=At(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Ft(){let{router:e}=Dt(`useNavigate`),t=At(`useNavigate`),n=x.useRef(!1);return mt(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{O(n.current,pt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var It={};function Lt(e,t,n){!t&&!It[e]&&(It[e]=!0,O(!1,n))}x.memo(Rt);function Rt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return yt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function zt(e){D(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Bt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){D(!dt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=A(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=Ee(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return O(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(tt.Provider,{value:c},x.createElement(nt.Provider,{children:t,value:h}))}function Vt({children:e,location:t}){return vt(Ht(e),t)}x.Component;function Ht(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Ht(e.props.children,i));return}D(e.type===zt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),D(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ht(e.props.children,i)),n.push(a)}),n}var Ut=`get`,Wt=`application/x-www-form-urlencoded`;function Gt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Kt(e){return Gt(e)&&e.tagName.toLowerCase()===`button`}function qt(e){return Gt(e)&&e.tagName.toLowerCase()===`form`}function Jt(e){return Gt(e)&&e.tagName.toLowerCase()===`input`}function N(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yt(e,t){return e.button===0&&(!t||t===`_self`)&&!N(e)}var Xt=null;function Zt(){if(Xt===null)try{new FormData(document.createElement(`form`),0),Xt=!1}catch{Xt=!0}return Xt}var Qt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function $t(e){return e!=null&&!Qt.has(e)?(O(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wt}"`),null):e}function en(e,t){let n,r,i,a,o;if(qt(e)){let o=e.getAttribute(`action`);r=o?Ee(o,t):null,n=e.getAttribute(`method`)||Ut,i=$t(e.getAttribute(`enctype`))||Wt,a=new FormData(e)}else if(Kt(e)||Jt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ee(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Ut,i=$t(e.getAttribute(`formenctype`))||$t(o.getAttribute(`enctype`))||Wt,a=new FormData(o,e),!Zt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Gt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Ut,r=null,i=Wt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var tn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},nn=/[&><\u2028\u2029]/g;function rn(e){return e.replace(nn,e=>tn[e])}function an(e,t){if(e===!1||e==null)throw Error(t)}function on(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ee(i.pathname,t)===`/`?i.pathname=`${Fe(t)}/_root.${r}`:i.pathname=`${Fe(i.pathname)}.${r}`,i}async function sn(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cn(e){return e!=null&&typeof e.page==`string`}function ln(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function un(e,t,n){return hn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await sn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(ln).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function dn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function fn(e,t,{includeHydrateFallback:n}={}){return pn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function pn(e){return[...new Set(e)]}function mn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function hn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!cn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(mn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function gn(){let e=x.useContext(Je);return an(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function _n(){let e=x.useContext(Ye);return an(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var vn=x.createContext(void 0);vn.displayName=`FrameworkContext`;function yn(){let e=x.useContext(vn);return an(e,`You must render this element inside a <HydratedRouter> element`),e}function bn(e,t){let n=x.useContext(vn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:xn(s,p),onBlur:xn(c,m),onMouseEnter:xn(l,p),onMouseLeave:xn(u,m),onTouchStart:xn(d,p)}]:[a,f,{}]:[!1,f,{}]}function xn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Sn({page:e,...t}){let n=Ze(),{nonce:r}=yn(),{router:i}=gn(),a=x.useMemo(()=>oe(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?x.createElement(wn,{page:e,matches:a,...t}):x.createElement(Tn,{page:e,matches:a,...t})):null}function Cn(e){let{manifest:t,routeModules:n}=yn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return un(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function wn({page:e,matches:t,...n}){let r=ft(),{future:i}=yn(),{basename:a}=gn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=on(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Tn({page:e,matches:t,...n}){let r=ft(),{future:i,manifest:a,routeModules:o}=yn(),{basename:s}=gn(),{loaderData:c,matches:l}=_n(),u=x.useMemo(()=>dn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>dn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=on(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>fn(d,a),[d,a]),m=Cn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function En(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var Dn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Dn&&(window.__reactRouterVersion=`7.18.1`)}catch{}function On({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=ee({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Bt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function kn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(Bt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}kn.displayName=`unstable_HistoryRouter`;var An=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(tt),v=typeof l==`string`&&S.test(l),y=Ue(l,h);l=y.to;let b=ut(l,{relative:r}),C=ft(),w=null;if(o){let e=Me(o,[],C.mask?C.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Pe([h,e.pathname])),w=g.createHref(e)}let[T,E,ee]=bn(n,p),D=Ln(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function O(t){e&&e(t),t.defaultPrevented||D(t)}let te=!(y.isExternal||i),ne=x.createElement(`a`,{...p,...ee,href:(te?w:void 0)||y.absoluteURL||b,onClick:te?O:e,ref:En(m,E),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return T&&!v?x.createElement(x.Fragment,null,ne,x.createElement(Sn,{page:b})):ne});An.displayName=`Link`;var jn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=_t(a,{relative:c.relative}),d=ft(),f=x.useContext(Ye),{navigator:p,basename:m}=x.useContext(tt),h=f!=null&&qn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Ee(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},w=b?e:void 0,T;T=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return x.createElement(An,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});jn.displayName=`NavLink`;var Mn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Ut,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(tt),g=Bn(),_=Vn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&S.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Mn.displayName=`Form`;function Nn({getKey:e,storageKey:t,...n}){let r=x.useContext(vn),{basename:i}=x.useContext(tt),a=ft(),o=Nt();Gn({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Wn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${rn(JSON.stringify(t||Hn))}, ${rn(JSON.stringify(s))})`}})}Nn.displayName=`ScrollRestoration`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=x.useContext(Je);return D(t,Pn(e)),t}function In(e){let t=x.useContext(Ye);return D(t,Pn(e)),t}function Ln(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=ht(),d=ft(),f=_t(e,{relative:o});return x.useCallback(p=>{if(Yt(p,t)){p.preventDefault();let t=n===void 0?k(d)===k(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Rn=0,zn=()=>`__${String(++Rn)}__`;function Bn(){let{router:e}=Fn(`useSubmit`),{basename:t}=x.useContext(tt),n=jt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=en(e,t);a.navigate===!1?await r(a.fetcherKey||zn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Vn(e,{relative:t}={}){let{basename:n}=x.useContext(tt),r=x.useContext(rt);D(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={..._t(e||`.`,{relative:t})},o=ft();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Pe([n,a.pathname])),k(a)}var Hn=`react-router-scroll-positions`,Un={};function Wn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ee(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Gn({getKey:e,storageKey:t}={}){let{router:n}=Fn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=In(`useScrollRestoration`),{basename:a}=x.useContext(tt),o=ft(),s=Nt(),c=Mt();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Kn(x.useCallback(()=>{if(c.state===`idle`){let t=Wn(o,s,a,e);Un[t]=window.scrollY}try{sessionStorage.setItem(t||Hn,JSON.stringify(Un))}catch(e){O(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Hn);e&&(Un=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Un,()=>window.scrollY,e?(t,n)=>Wn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{O(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Kn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function qn(e,{relative:t}={}){let n=x.useContext(Qe);D(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=_t(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ee(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ee(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var Jn=l(g(),1),Yn=`# RAG Foundations

## What is RAG?

Retrieval-Augmented Generation (RAG) is an AI framework that combines information retrieval with large language model generation. Instead of relying solely on the model's parametric memory, RAG fetches relevant documents at query time and injects them as context.

## Core Components

### 1. Document Ingestion
- Load raw documents (PDFs, HTML, plain text)
- Split into manageable chunks
- Generate vector embeddings
- Store in a vector database

### 2. Retrieval
- Embed the user query
- Search for semantically similar chunks
- Return top-K results

### 3. Generation
- Inject retrieved chunks into the LLM prompt
- Generate a grounded, context-aware answer

## Why RAG?

| Problem | RAG Solution |
|---|---|
| Knowledge cutoff | Retrieve fresh data |
| Hallucinations | Ground answers in retrieved facts |
| Domain specificity | Index proprietary documents |
| Cost | Cheaper than full fine-tuning |

## Key Metrics

- **Precision** – Are retrieved chunks relevant?
- **Recall** – Are all relevant chunks retrieved?
- **Faithfulness** – Does the answer match the context?
- **Answer Relevance** – Does the answer address the question?

## Embedding Models

Popular choices:
- \`text-embedding-3-small\` (OpenAI) — fast, cheap
- \`text-embedding-3-large\` (OpenAI) — higher quality
- \`BAAI/bge-large-en\` — open-source
- \`nomic-embed-text\` — open-source, long context

## Vector Databases

| DB | Best For |
|---|---|
| Pinecone | Managed, production scale |
| Weaviate | Hybrid search built-in |
| ChromaDB | Local development |
| pgvector | Postgres-native |
| FAISS | In-memory, research |

## Chunking Strategies

1. **Fixed** — Simple, fast, ignores semantics
2. **Recursive** — Respects paragraph/sentence boundaries
3. **Semantic** — Groups by meaning
4. **Hierarchical** — Parent + child chunks

## Further Reading

- [LangChain RAG Docs](https://python.langchain.com/docs/use_cases/question_answering/)
- [LlamaIndex Guides](https://docs.llamaindex.ai/)
- [Pinecone Learn](https://www.pinecone.io/learn/)
`,Xn=`## 1. Introduction\r
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
`,Zn=`from langchain_openai import ChatOpenAI, OpenAIEmbeddings\r
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
print(answer)`,Qn=`"""\r
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
# ==========================================================`,$n=`## 1. Introduction

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
`,er=`## 1. Introduction\r
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
`,tr=`"""\r
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
# ==========================================================`,nr=`## 1. Introduction

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
`,rr=`"""\r
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
# ==========================================================`,ir=`"""\r
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
# ==========================================================`,ar=`# Hybrid Search in RAG (Retrieval-Augmented Generation)

## 1. Introduction

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
`;function or(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var sr=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,cr=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,lr={};function ur(e,t){return((t||lr).jsx?cr:sr).test(e)}var dr=/[ \t\n\f\r]/g;function fr(e){return typeof e==`object`?e.type===`text`?pr(e.value):!1:pr(e)}function pr(e){return e.replace(dr,``)===``}var mr=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};mr.prototype.normal={},mr.prototype.property={},mr.prototype.space=void 0;function hr(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new mr(n,r,t)}function gr(e){return e.toLowerCase()}var _r=class{constructor(e,t){this.attribute=t,this.property=e}};_r.prototype.attribute=``,_r.prototype.booleanish=!1,_r.prototype.boolean=!1,_r.prototype.commaOrSpaceSeparated=!1,_r.prototype.commaSeparated=!1,_r.prototype.defined=!1,_r.prototype.mustUseProperty=!1,_r.prototype.number=!1,_r.prototype.overloadedBoolean=!1,_r.prototype.property=``,_r.prototype.spaceSeparated=!1,_r.prototype.space=void 0;var vr=s({boolean:()=>P,booleanish:()=>F,commaOrSpaceSeparated:()=>Sr,commaSeparated:()=>xr,number:()=>I,overloadedBoolean:()=>br,spaceSeparated:()=>L}),yr=0,P=Cr(),F=Cr(),br=Cr(),I=Cr(),L=Cr(),xr=Cr(),Sr=Cr();function Cr(){return 2**++yr}var wr=Object.keys(vr),Tr=class extends _r{constructor(e,t,n,r){let i=-1;if(super(e,t),Er(this,`space`,r),typeof n==`number`)for(;++i<wr.length;){let e=wr[i];Er(this,wr[i],(n&vr[e])===vr[e])}}};Tr.prototype.defined=!0;function Er(e,t,n){n&&(e[t]=n)}function Dr(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new Tr(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[gr(r)]=r,n[gr(a.attribute)]=r}return new mr(t,n,e.space)}var Or=Dr({properties:{ariaActiveDescendant:null,ariaAtomic:F,ariaAutoComplete:null,ariaBusy:F,ariaChecked:F,ariaColCount:I,ariaColIndex:I,ariaColSpan:I,ariaControls:L,ariaCurrent:null,ariaDescribedBy:L,ariaDetails:null,ariaDisabled:F,ariaDropEffect:L,ariaErrorMessage:null,ariaExpanded:F,ariaFlowTo:L,ariaGrabbed:F,ariaHasPopup:null,ariaHidden:F,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:L,ariaLevel:I,ariaLive:null,ariaModal:F,ariaMultiLine:F,ariaMultiSelectable:F,ariaOrientation:null,ariaOwns:L,ariaPlaceholder:null,ariaPosInSet:I,ariaPressed:F,ariaReadOnly:F,ariaRelevant:null,ariaRequired:F,ariaRoleDescription:L,ariaRowCount:I,ariaRowIndex:I,ariaRowSpan:I,ariaSelected:F,ariaSetSize:I,ariaSort:null,ariaValueMax:I,ariaValueMin:I,ariaValueNow:I,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function kr(e,t){return t in e?e[t]:t}function Ar(e,t){return kr(e,t.toLowerCase())}var jr=Dr({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:xr,acceptCharset:L,accessKey:L,action:null,allow:null,allowFullScreen:P,allowPaymentRequest:P,allowUserMedia:P,alpha:P,alt:null,as:null,async:P,autoCapitalize:null,autoComplete:L,autoFocus:P,autoPlay:P,blocking:L,capture:null,charSet:null,checked:P,cite:null,className:L,closedBy:null,colorSpace:null,cols:I,colSpan:I,command:null,commandFor:null,content:null,contentEditable:F,controls:P,controlsList:L,coords:I|xr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:P,defer:P,dir:null,dirName:null,disabled:P,download:br,draggable:F,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:P,formTarget:null,headers:L,height:I,hidden:br,high:I,href:null,hrefLang:null,htmlFor:L,httpEquiv:L,id:null,imageSizes:null,imageSrcSet:null,inert:P,inputMode:null,integrity:null,is:null,isMap:P,itemId:null,itemProp:L,itemRef:L,itemScope:P,itemType:L,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:P,low:I,manifest:null,max:null,maxLength:I,media:null,method:null,min:null,minLength:I,multiple:P,muted:P,name:null,nonce:null,noModule:P,noValidate:P,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:P,optimum:I,pattern:null,ping:L,placeholder:null,playsInline:P,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:P,referrerPolicy:null,rel:L,required:P,reversed:P,rows:I,rowSpan:I,sandbox:L,scope:null,scoped:P,seamless:P,selected:P,shadowRootClonable:P,shadowRootCustomElementRegistry:P,shadowRootDelegatesFocus:P,shadowRootMode:null,shadowRootSerializable:P,shape:null,size:I,sizes:null,slot:null,span:I,spellCheck:F,src:null,srcDoc:null,srcLang:null,srcSet:null,start:I,step:null,style:null,tabIndex:I,target:null,title:null,translate:null,type:null,typeMustMatch:P,useMap:null,value:F,width:I,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:L,axis:null,background:null,bgColor:null,border:I,borderColor:null,bottomMargin:I,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:P,declare:P,event:null,face:null,frame:null,frameBorder:null,hSpace:I,leftMargin:I,link:null,longDesc:null,lowSrc:null,marginHeight:I,marginWidth:I,noResize:P,noHref:P,noShade:P,noWrap:P,object:null,profile:null,prompt:null,rev:null,rightMargin:I,rules:null,scheme:null,scrolling:F,standby:null,summary:null,text:null,topMargin:I,valueType:null,version:null,vAlign:null,vLink:null,vSpace:I,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:P,disablePictureInPicture:P,disableRemotePlayback:P,exportParts:xr,part:L,prefix:null,property:null,results:I,security:null,unselectable:null},space:`html`,transform:Ar}),Mr=Dr({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,maskType:`mask-type`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:Sr,accentHeight:I,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:I,amplitude:I,arabicForm:null,ascent:I,attributeName:null,attributeType:null,azimuth:I,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:I,by:null,calcMode:null,capHeight:I,className:L,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:I,diffuseConstant:I,direction:null,display:null,dur:null,divisor:I,dominantBaseline:null,download:P,dx:null,dy:null,edgeMode:null,editable:null,elevation:I,enableBackground:null,end:null,event:null,exponent:I,externalResourcesRequired:null,fill:null,fillOpacity:I,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:xr,g2:xr,glyphName:xr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:I,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:I,horizOriginX:I,horizOriginY:I,id:null,ideographic:I,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:I,k:I,k1:I,k2:I,k3:I,k4:I,kernelMatrix:Sr,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:I,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:I,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:I,overlineThickness:I,paintOrder:null,panose1:null,path:null,pathLength:I,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:L,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:I,pointsAtY:I,pointsAtZ:I,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Sr,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Sr,rev:Sr,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Sr,requiredFeatures:Sr,requiredFonts:Sr,requiredFormats:Sr,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:I,specularExponent:I,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:I,strikethroughThickness:I,string:null,stroke:null,strokeDashArray:Sr,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:I,strokeOpacity:I,strokeWidth:null,style:null,surfaceScale:I,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Sr,tabIndex:I,tableValues:null,target:null,targetX:I,targetY:I,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Sr,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:I,underlineThickness:I,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:I,values:null,vAlphabetic:I,vMathematical:I,vectorEffect:null,vHanging:I,vIdeographic:I,version:null,vertAdvY:I,vertOriginX:I,vertOriginY:I,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:I,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:kr}),Nr=Dr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),Pr=Dr({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:Ar}),Fr=Dr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),Ir={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},Lr=/[A-Z]/g,Rr=/-[a-z]/g,zr=/^data[-\w.:]+$/i;function Br(e,t){let n=gr(t),r=t,i=_r;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&zr.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(Rr,Hr);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!Rr.test(e)){let n=e.replace(Lr,Vr);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=Tr}return new i(r,t)}function Vr(e){return`-`+e.toLowerCase()}function Hr(e){return e.charAt(1).toUpperCase()}var Ur=hr([Or,jr,Nr,Pr,Fr],`html`),Wr=hr([Or,Mr,Nr,Pr,Fr],`svg`);function Gr(e){return e.join(` `).trim()}var Kr=o(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g,u=`/`,d=`*`,f=``;function p(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,p=1;function h(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(`
`);p=~n?e.length-n:p+e.length}function g(){var e={line:l,column:p};return function(t){return t.position=new _(e),b(),t}}function _(e){this.start=e,this.end={line:l,column:p},this.source=t.source}_.prototype.content=e;function v(n){var r=Error(t.source+`:`+l+`:`+p+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=p,r.source=e,!t.silent)throw r}function y(t){var n=t.exec(e);if(n){var r=n[0];return h(r),e=e.slice(r.length),n}}function b(){y(i)}function x(e){var t;for(e||=[];t=S();)t!==!1&&e.push(t);return e}function S(){var t=g();if(!(u!=e.charAt(0)||d!=e.charAt(1))){for(var n=2;f!=e.charAt(n)&&(d!=e.charAt(n)||u!=e.charAt(n+1));)++n;if(n+=2,f===e.charAt(n-1))return v(`End of comment missing`);var r=e.slice(2,n-2);return p+=2,h(r),e=e.slice(n),p+=2,t({type:`comment`,comment:r})}}function C(){var e=g(),t=y(a);if(t){if(S(),!y(o))return v(`property missing ':'`);var r=y(s),i=e({type:`declaration`,property:m(t[0].replace(n,f)),value:r?m(r[0].replace(n,f)):f});return y(c),i}}function w(){var e=[];x(e);for(var t;t=C();)t!==!1&&(e.push(t),x(e));return e}return b(),w()}function m(e){return e?e.replace(l,f):f}t.exports=p})),qr=o((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=t(Kr());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),Jr=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),Yr=o(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(qr()),r=Jr();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),Xr=Qr(`end`),Zr=Qr(`start`);function Qr(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function $r(e){let t=Zr(e),n=Xr(e);if(t&&n)return{start:t,end:n}}function ei(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?ni(e.position):`start`in e||`end`in e?ni(e):`line`in e||`column`in e?ti(e):``}function ti(e){return ri(e&&e.line)+`:`+ri(e&&e.column)}function ni(e){return ti(e&&e.start)+`-`+ti(e&&e.end)}function ri(e){return e&&typeof e==`number`?e:1}var R=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=ei(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};R.prototype.file=``,R.prototype.name=``,R.prototype.reason=``,R.prototype.message=``,R.prototype.stack=``,R.prototype.column=void 0,R.prototype.line=void 0,R.prototype.ancestors=void 0,R.prototype.cause=void 0,R.prototype.fatal=void 0,R.prototype.place=void 0,R.prototype.ruleId=void 0,R.prototype.source=void 0;var ii=l(Yr(),1),ai={}.hasOwnProperty,oi=new Map,si=/[A-Z]/g,ci=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),li=new Set([`td`,`th`]);function z(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=bi(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=yi(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?Wr:Ur,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=ui(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function ui(e,t,n){if(t.type===`element`)return di(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return fi(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return mi(e,t,n);if(t.type===`mdxjsEsm`)return pi(e,t);if(t.type===`root`)return hi(e,t,n);if(t.type===`text`)return gi(e,t)}function di(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=Wr,e.schema=i),e.ancestors.push(t);let a=Ei(e,t.tagName,!1),o=xi(e,t),s=Ci(e,t);return ci.has(t.tagName)&&(s=s.filter(function(e){return typeof e==`string`?!fr(e):!0})),_i(e,o,a,t),vi(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function fi(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}Di(e,t.position)}function pi(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Di(e,t.position)}function mi(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=Wr,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:Ei(e,t.name,!0),o=Si(e,t),s=Ci(e,t);return _i(e,o,a,t),vi(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function hi(e,t,n){let r={};return vi(r,Ci(e,t)),e.create(t,e.Fragment,r,n)}function gi(e,t){return t.value}function _i(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function vi(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function yi(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function bi(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Zr(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function xi(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&ai.call(t.properties,i)){let a=wi(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&li.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function Si(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`)if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Di(e,t.position);else{let i=r.name,a;if(r.value&&typeof r.value==`object`)if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else Di(e,t.position);else a=r.value===null?!0:r.value;n[i]=a}return n}function Ci(e,t){let n=[],r=-1,i=e.passKeys?new Map:oi;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=ui(e,a,o);s!==void 0&&n.push(s)}return n}function wi(e,t,n){let r=Br(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?or(n):Gr(n)),r.property===`style`){let t=typeof n==`object`?n:Ti(e,String(n));return e.stylePropertyNameCase===`css`&&(t=Oi(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?Ir[r.property]||r.property:r.attribute,n]}}function Ti(e,t){try{return(0,ii.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new R("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=`https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute`,r}}function Ei(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=ur(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=ur(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return ai.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);Di(e)}function Di(e,t){let n=new R("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=`https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-handle-mdx-estrees-without-createevaluater`,n}function Oi(e){let t={},n;for(n in e)ai.call(e,n)&&(t[ki(n)]=e[n]);return t}function ki(e){let t=e.replace(si,Ai);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function Ai(e){return`-`+e.toLowerCase()}var ji={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},Mi=o((e=>{var t=d(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),Ni=o(((e,t)=>{t.exports=Mi()})),Pi={};function Fi(e,t){let n=t||Pi;return Ii(e,typeof n.includeImageAlt==`boolean`?n.includeImageAlt:!0,typeof n.includeHtml==`boolean`?n.includeHtml:!0)}function Ii(e,t,n){if(Ri(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return Li(e.children,t,n)}return Array.isArray(e)?Li(e,t,n):``}function Li(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=Ii(e[i],t,n);return r.join(``)}function Ri(e){return!!(e&&typeof e==`object`)}function zi(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function Bi(e,t){return e.length>0?(zi(e,e.length,0,t),e):t}var Vi={}.hasOwnProperty;function Hi(e){let t={},n=-1;for(;++n<e.length;)Ui(t,e[n]);return t}function Ui(e,t){let n;for(n in t){let r=(Vi.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){Vi.call(r,a)||(r[a]=[]);let e=i[a];Wi(r[a],Array.isArray(e)?e:e?[e]:[])}}}function Wi(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);zi(e,0,0,r)}var Gi=Qi(/[A-Za-z]/),Ki=Qi(/[\dA-Za-z]/),qi=Qi(/[#-'*+\--9=?A-Z^-~]/);function Ji(e){return e!==null&&(e<32||e===127)}var B=Qi(/\d/),V=Qi(/[\dA-Fa-f]/),Yi=Qi(/[!-/:-@[-`{-~]/);function H(e){return e!==null&&e<-2}function U(e){return e!==null&&(e<0||e===32)}function W(e){return e===-2||e===-1||e===32}var Xi=Qi(/\p{P}|\p{S}/u),Zi=Qi(/\s/);function Qi(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function G(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return W(r)?(e.enter(n),s(r)):t(r)}function s(r){return W(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var $i={tokenize:ea};function ea(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),G(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return H(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var ta={tokenize:ra},na={tokenize:ia};function ra(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;return zi(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(na,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(na,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return H(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;zi(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-->r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function ia(e,t,n){return G(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function aa(e){if(e===null||U(e)||Zi(e))return 1;if(Xi(e))return 2}function oa(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var sa={name:`attention`,resolveAll:ca,tokenize:la};function ca(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d={...e[r][1].end},f={...e[n][1].start};ua(d,-c),ua(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:{...e[r][1].end}},s={type:c>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:f},a={type:c>1?`strongText`:`emphasisText`,start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?`strong`:`emphasis`,start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=Bi(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=Bi(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=Bi(l,oa(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=Bi(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=Bi(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,zi(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function la(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=aa(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=aa(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function ua(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var da={name:`autolink`,tokenize:fa};function fa(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return Gi(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||Ki(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||Ki(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||Ji(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):qi(t)?(e.consume(t),l):n(t)}function u(e){return Ki(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||Ki(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var pa={partial:!0,tokenize:ma};function ma(e,t,n){return r;function r(t){return W(t)?G(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||H(e)?t(e):n(e)}}var ha={continuation:{tokenize:_a},exit:va,name:`blockQuote`,tokenize:ga};function ga(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return W(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function _a(e,t,n){let r=this;return i;function i(t){return W(t)?G(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(ha,t,n)(r)}}function va(e){e.exit(`blockQuote`)}var ya={name:`characterEscape`,tokenize:ba};function ba(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return Yi(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var xa=document.createElement(`i`);function Sa(e){let t=`&`+e+`;`;xa.innerHTML=t;let n=xa.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`||n===t?!1:n}var K={name:`characterReference`,tokenize:Ca};function Ca(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=Ki,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=V,u):(e.enter(`characterReferenceValue`),a=7,o=B,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===Ki&&!Sa(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var wa={partial:!0,tokenize:Da},Ta={concrete:!0,name:`codeFenced`,tokenize:Ea};function Ea(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),W(t)?G(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||H(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(wa,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||H(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):W(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),G(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||H(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||H(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&W(t)?G(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||H(t)?e.check(wa,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||H(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),W(t)?G(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),W(t)?G(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||H(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function Da(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var Oa={name:`codeIndented`,tokenize:Aa},ka={partial:!0,tokenize:ja};function Aa(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),G(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):H(t)?e.attempt(ka,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||H(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function ja(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):H(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):G(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):H(e)?i(e):n(e)}}var Ma={name:`codeText`,previous:Pa,resolve:Na,tokenize:Fa};function Na(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Pa(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function Fa(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):H(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||H(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var Ia=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&La(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),La(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),La(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){let t=this.left.splice(e,1/0);La(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);La(this.left,t.reverse())}}};function La(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Ra(e){let t={},n=-1,r,i,a,o,s,c,l,u=new Ia(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,za(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(!(o[1].type===`linePrefix`||o[1].type===`listItemIndent`))break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return zi(e,0,1/0,u.slice(0)),!l}function za(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var Ba={resolve:Ha,tokenize:Ua},Va={partial:!0,tokenize:Wa};function Ha(e){return Ra(e),e}function Ua(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):H(t)?e.check(Va,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function Wa(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),G(e,a,`linePrefix`)}function a(i){if(i===null||H(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function Ga(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||Ji(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||H(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||U(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||Ji(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function Ka(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):H(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||H(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!W(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function qa(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):H(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),G(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||H(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function Ja(e,t){let n;return r;function r(i){return H(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):W(i)?G(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}function Ya(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var Xa={name:`definition`,tokenize:Qa},Za={partial:!0,tokenize:$a};function Qa(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return Ka.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=Ya(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return U(t)?Ja(e,l)(t):l(t)}function l(t){return Ga(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(Za,d,d)(t)}function d(t){return W(t)?G(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||H(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function $a(e,t,n){return r;function r(t){return U(t)?Ja(e,i)(t):n(t)}function i(t){return qa(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return W(t)?G(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||H(e)?t(e):n(e)}}var eo={name:`hardBreakEscape`,tokenize:to};function to(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return H(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var no={name:`headingAtx`,resolve:ro,tokenize:io};function ro(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},zi(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function io(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||U(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||H(n)?(e.exit(`atxHeading`),t(n)):W(n)?G(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||U(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var ao=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),oo=[`pre`,`script`,`style`,`textarea`],so={concrete:!0,name:`htmlFlow`,resolveTo:uo,tokenize:fo},co={partial:!0,tokenize:mo},lo={partial:!0,tokenize:po};function uo(e){let t=e.length;for(;t--&&!(e[t][0]===`enter`&&e[t][1].type===`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function fo(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:ae):Gi(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):Gi(a)?(e.consume(a),i=4,r.interrupt?t:ae):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:ae):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:D:m):n(i)}function h(t){return Gi(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||U(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&oo.includes(l)?(i=1,r.interrupt?t(s):D(s)):ao.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):D(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||Ki(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:D):n(i)}function v(t){return W(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||Gi(t)?(e.consume(t),b):W(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||Ki(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):W(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):W(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||H(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||U(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||W(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),ee):n(t)}function ee(t){return t===null||H(t)?D(t):W(t)?(e.consume(t),ee):n(t)}function D(t){return t===45&&i===2?(e.consume(t),re):t===60&&i===1?(e.consume(t),k):t===62&&i===4?(e.consume(t),oe):t===63&&i===3?(e.consume(t),ae):t===93&&i===5?(e.consume(t),ie):H(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(co,se,O)(t)):t===null||H(t)?(e.exit(`htmlFlowData`),O(t)):(e.consume(t),D)}function O(t){return e.check(lo,te,se)(t)}function te(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ne}function ne(t){return t===null||H(t)?O(t):(e.enter(`htmlFlowData`),D(t))}function re(t){return t===45?(e.consume(t),ae):D(t)}function k(t){return t===47?(e.consume(t),o=``,A):D(t)}function A(t){if(t===62){let n=o.toLowerCase();return oo.includes(n)?(e.consume(t),oe):D(t)}return Gi(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),A):D(t)}function ie(t){return t===93?(e.consume(t),ae):D(t)}function ae(t){return t===62?(e.consume(t),oe):t===45&&i===2?(e.consume(t),ae):D(t)}function oe(t){return t===null||H(t)?(e.exit(`htmlFlowData`),se(t)):(e.consume(t),oe)}function se(n){return e.exit(`htmlFlow`),t(n)}}function po(e,t,n){let r=this;return i;function i(t){return H(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function mo(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(pa,t,n)}}var ho={name:`htmlText`,tokenize:go};function go(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):Gi(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):Gi(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):H(t)?(o=d,k(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?re(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):H(t)?(o=h,k(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?re(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?re(t):H(t)?(o=v,k(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):H(t)?(o=y,k(t)):(e.consume(t),y)}function b(e){return e===62?re(e):y(e)}function x(t){return Gi(t)?(e.consume(t),S):n(t)}function S(t){return t===45||Ki(t)?(e.consume(t),S):C(t)}function C(t){return H(t)?(o=C,k(t)):W(t)?(e.consume(t),C):re(t)}function w(t){return t===45||Ki(t)?(e.consume(t),w):t===47||t===62||U(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),re):t===58||t===95||Gi(t)?(e.consume(t),E):H(t)?(o=T,k(t)):W(t)?(e.consume(t),T):re(t)}function E(t){return t===45||t===46||t===58||t===95||Ki(t)?(e.consume(t),E):ee(t)}function ee(t){return t===61?(e.consume(t),D):H(t)?(o=ee,k(t)):W(t)?(e.consume(t),ee):T(t)}function D(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,O):H(t)?(o=D,k(t)):W(t)?(e.consume(t),D):(e.consume(t),te)}function O(t){return t===i?(e.consume(t),i=void 0,ne):t===null?n(t):H(t)?(o=O,k(t)):(e.consume(t),O)}function te(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||U(t)?T(t):(e.consume(t),te)}function ne(e){return e===47||e===62||U(e)?T(e):n(e)}function re(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function k(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),A}function A(t){return W(t)?G(e,ie,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):ie(t)}function ie(t){return e.enter(`htmlTextData`),o(t)}}var _o={name:`labelEnd`,resolveAll:bo,resolveTo:xo,tokenize:So},q={tokenize:Co},vo={tokenize:J},yo={tokenize:wo};function bo(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&zi(e,0,e.length,n),e}function xo(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:{...e[a][1].start},end:{...e[e.length-1][1].end}},l={type:`label`,start:{...e[a][1].start},end:{...e[o][1].end}},u={type:`labelText`,start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return s=[[`enter`,c,t],[`enter`,l,t]],s=Bi(s,e.slice(a+1,a+r+3)),s=Bi(s,[[`enter`,u,t]]),s=Bi(s,oa(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=Bi(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=Bi(s,e.slice(o+1)),s=Bi(s,[[`exit`,c,t]]),zi(e,a,e.length,s),e}function So(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(Ya(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(q,u,o?u:d)(t):t===91?e.attempt(vo,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(yo,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function Co(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return U(t)?Ja(e,a)(t):a(t)}function a(t){return t===41?u(t):Ga(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return U(t)?Ja(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?qa(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return U(t)?Ja(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function J(e,t,n){let r=this;return i;function i(t){return Ka.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(Ya(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function wo(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var To={name:`labelStartImage`,resolveAll:_o.resolveAll,tokenize:Eo};function Eo(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var Do={name:`labelStartLink`,resolveAll:_o.resolveAll,tokenize:Oo};function Oo(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var ko={name:`lineEnding`,tokenize:Ao};function Ao(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),G(e,t,`linePrefix`)}}var jo={name:`thematicBreak`,tokenize:Mo};function Mo(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||H(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),W(t)?G(e,s,`whitespace`)(t):s(t))}}var No={continuation:{tokenize:Lo},exit:zo,name:`list`,tokenize:Io},Po={partial:!0,tokenize:Bo},Fo={partial:!0,tokenize:Ro};function Io(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:B(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(jo,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return B(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(pa,r.interrupt?n:u,e.attempt(Po,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return W(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function Lo(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(pa,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,G(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!W(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Fo,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,G(e,e.attempt(No,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function Ro(e,t,n){let r=this;return G(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function zo(e){e.exit(this.containerState.type)}function Bo(e,t,n){let r=this;return G(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!W(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var Vo={name:`setextUnderline`,resolveTo:Ho,tokenize:Uo};function Ho(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push([`exit`,o,t]),e}function Uo(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),W(t)?G(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||H(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var Wo={tokenize:Go};function Go(e){let t=this,n=e.attempt(pa,r,e.attempt(this.parser.constructs.flowInitial,i,G(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Ba,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var Ko={resolveAll:Xo()},qo=Yo(`string`),Jo=Yo(`text`);function Yo(e){return{resolveAll:Xo(e===`text`?Zo:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function Xo(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function Zo(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}var Qo=s({attentionMarkers:()=>os,contentInitial:()=>es,disable:()=>ss,document:()=>$o,flow:()=>ns,flowInitial:()=>ts,insideSpan:()=>as,string:()=>rs,text:()=>is}),$o={42:No,43:No,45:No,48:No,49:No,50:No,51:No,52:No,53:No,54:No,55:No,56:No,57:No,62:ha},es={91:Xa},ts={[-2]:Oa,[-1]:Oa,32:Oa},ns={35:no,42:jo,45:[Vo,jo],60:so,61:Vo,95:jo,96:Ta,126:Ta},rs={38:K,92:ya},is={[-5]:ko,[-4]:ko,[-3]:ko,33:To,38:K,42:sa,60:[da,ho],91:Do,92:[eo,ya],93:_o,95:sa,96:Ma},as={null:[sa,Ko]},os={null:[42,95]},ss={null:[]};function cs(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=Bi(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=oa(a,l.events,l),l.events):[]}function f(e,t){return us(p(e),t)}function p(e){return ls(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){H(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&zi(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function ls(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function us(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function ds(e){let t={constructs:Hi([Qo,...(e||{}).extensions||[]]),content:n($i),defined:[],document:n(ta),flow:n(Wo),lazy:{},string:n(qo),text:n(Jo)};return t;function n(e){return n;function n(n){return cs(t,e,n)}}}function fs(e){for(;!Ra(e););return e}var ps=/[\0\t\n\r]/g;function ms(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if(ps.lastIndex=u,c=ps.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}function hs(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}var gs=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function _s(e){return e.replace(gs,vs)}function vs(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return hs(n.slice(t?2:1),t?16:10)}return Sa(n)||e}var ys={}.hasOwnProperty;function bs(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),xs(n)(fs(ds(n).document().write(ms()(e,t,!0))))}function xs(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:a(Ce),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(ye),blockQuote:a(me),characterEscape:T,characterReference:T,codeFenced:a(he),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(he,o),codeText:a(ge,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(_e),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(ve),hardBreakEscape:a(be),hardBreakTrailing:a(be),htmlFlow:a(xe,o),htmlFlowData:T,htmlText:a(xe,o),htmlTextData:T,image:a(Se),label:o,link:a(Ce),listItem:a(Te),listItemValue:f,listOrdered:a(we,d),listUnordered:a(we),paragraph:a(Ee),reference:j,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(ye),strong:a(De),thematicBreak:a(ke)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:pe,autolinkProtocol:fe,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:le,characterReferenceMarkerNumeric:le,characterReferenceValue:ue,characterReference:de,codeFenced:c(g),codeFencedFence:h,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(_),codeText:c(ne),codeTextData:E,data:E,definition:c(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(D),hardBreakTrailing:c(D),htmlFlow:c(O),htmlFlowData:E,htmlText:c(te),htmlTextData:E,image:c(k),label:ie,labelText:A,lineEnding:ee,link:c(re),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ce,resourceDestinationString:ae,resourceTitleString:oe,resource:se,setextHeading:c(w),setextHeadingLineSequence:C,setextHeadingText:S,strong:c(),thematicBreak:c()}};Cs(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[]},a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[],d=-1;for(;++d<e.length;)(e[d][1].type===`listOrdered`||e[d][1].type===`listUnordered`)&&(e[d][0]===`enter`?c.push(d):d=i(e,c.pop(),d));for(d=-1;++d<e.length;){let n=t[e[d][0]];ys.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){let e=a.tokenStack[a.tokenStack.length-1];(e[1]||Ts).call(a,void 0,e[0])}for(r.position={start:Ss(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:Ss(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(!(t[1].type===`linePrefix`||t[1].type===`blockQuotePrefix`||t[1].type===`blockQuotePrefixWhitespace`||t[1].type===`blockQuoteMarker`||t[1].type===`listItemIndent`))break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}if(t[1].type===`listItemPrefix`){let i={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=i,e.splice(r,0,[`enter`,i,t[2]]),r++,n++,c=void 0,l=!0}}}return e[t][1]._spread=a,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:`fragment`,children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:Ss(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||Ts).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+ei({start:e.start,end:e.end})+`): it’s not open`);n.position.end=Ss(e.end)}function u(){return Fi(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function p(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function v(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=Ya(this.sliceSerialize(e)).toLowerCase()}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function x(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function S(){this.data.setextHeadingSlurpLineEnding=!0}function C(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function T(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=Oe(),n.position={start:Ss(e.start),end:void 0},t.push(n)),this.stack.push(n)}function E(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=Ss(e.end)}function ee(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=Ss(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(T.call(this,e),E.call(this,e))}function D(){this.data.atHardBreak=!0}function O(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function te(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ne(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function k(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function A(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=_s(t),n.identifier=Ya(t).toLowerCase()}function ie(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function ae(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function oe(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function se(){this.data.inReference=void 0}function j(){this.data.referenceType=`collapsed`}function ce(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=Ya(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function le(e){this.data.characterReferenceType=e.type}function ue(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=hs(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=Sa(t);let i=this.stack[this.stack.length-1];i.value+=r}function de(e){let t=this.stack.pop();t.position.end=Ss(e.end)}function fe(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function pe(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function me(){return{type:`blockquote`,children:[]}}function he(){return{type:`code`,lang:null,meta:null,value:``}}function ge(){return{type:`inlineCode`,value:``}}function _e(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function ve(){return{type:`emphasis`,children:[]}}function ye(){return{type:`heading`,depth:0,children:[]}}function be(){return{type:`break`}}function xe(){return{type:`html`,value:``}}function Se(){return{type:`image`,title:null,url:``,alt:null}}function Ce(){return{type:`link`,title:null,url:``,children:[]}}function we(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function Te(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function Ee(){return{type:`paragraph`,children:[]}}function De(){return{type:`strong`,children:[]}}function Oe(){return{type:`text`,value:``}}function ke(){return{type:`thematicBreak`}}}function Ss(e){return{line:e.line,column:e.column,offset:e.offset}}function Cs(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Cs(e,r):ws(e,r)}}function ws(e,t){let n;for(n in t)if(ys.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function Ts(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+ei({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ei({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+ei({start:t.start,end:t.end})+`) is still open`)}function Es(e){let t=this;t.parser=n;function n(n){return bs(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}var Ds=typeof self==`object`?self:globalThis,Os=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new Ds[e](t)},ks=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o)e[r(t)]=r(n);return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(Os(e,t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}}return n(Os(a,o),i)};return r},As=e=>ks(new Map,e)(0),js=``,{toString:Ms}={},{keys:Ns}=Object,Ps=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=Ms.call(e).slice(8,-1);switch(n){case`Array`:return[1,js];case`Object`:return[2,js];case`Date`:return[3,js];case`RegExp`:return[4,js];case`Map`:return[5,js];case`Set`:return[6,js];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:n.includes(`Error`)?[7,n]:[2,n]},Fs=([e,t])=>e===0&&(t===`function`||t===`symbol`),Is=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=r=>{if(n.has(r))return n.get(r);let[o,s]=Ps(r);switch(o){case 0:{let t=r;switch(s){case`bigint`:o=8,t=r.toString();break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+s);t=null;break;case`undefined`:return i([-1],r)}return i([o,t],r)}case 1:{if(s){let e=r;return s===`DataView`?e=new Uint8Array(r.buffer):s===`ArrayBuffer`&&(e=new Uint8Array(r)),i([s,[...e]],r)}let e=[],t=i([o,e],r);for(let t of r)e.push(a(t));return t}case 2:{if(s)switch(s){case`BigInt`:return i([s,r.toString()],r);case`Boolean`:case`Number`:case`String`:return i([s,r.valueOf()],r)}if(t&&`toJSON`in r)return a(r.toJSON());let n=[],c=i([o,n],r);for(let t of Ns(r))(e||!Fs(Ps(r[t])))&&n.push([a(t),a(r[t])]);return c}case 3:return i([o,isNaN(r.getTime())?js:r.toISOString()],r);case 4:{let{source:e,flags:t}=r;return i([o,{source:e,flags:t}],r)}case 5:{let t=[],n=i([o,t],r);for(let[n,i]of r)(e||!(Fs(Ps(n))||Fs(Ps(i))))&&t.push([a(n),a(i)]);return n}case 6:{let t=[],n=i([o,t],r);for(let n of r)(e||!Fs(Ps(n)))&&t.push(a(n));return n}}let{message:c}=r;return i([o,{name:s,message:c}],r)};return a},Ls=(e,{json:t,lossy:n}={})=>{let r=[];return Is(!(t||n),!!t,new Map,r)(e),r},Rs=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?As(Ls(e,t)):structuredClone(e):(e,t)=>As(Ls(e,t));function zs(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&Ki(e.charCodeAt(n+1))&&Ki(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function Bs(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function Vs(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function Hs(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||Bs,r=e.options.footnoteBackLabel||Vs,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=zs(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...Rs(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var Us=(function(e){if(e==null)return Js;if(typeof e==`function`)return qs(e);if(typeof e==`object`)return Array.isArray(e)?Ws(e):Gs(e);if(typeof e==`string`)return Ks(e);throw Error(`Expected function, string, or object as test`)});function Ws(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Us(e[n]);return qs(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function Gs(e){let t=e;return qs(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function Ks(e){return qs(t);function t(t){return t&&t.type===e}}function qs(e){return t;function t(t,n,r){return!!(Ys(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function Js(){return!0}function Ys(e){return typeof e==`object`&&!!e&&`type`in e}function Xs(e){return e}var Zs=[];function Qs(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=Us(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,"name",{value:`node (`+Xs(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=Zs,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=$s(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function $s(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?Zs:[e]}function ec(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),Qs(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}function tc(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function nc(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function rc(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function ic(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ac(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function oc(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=zs(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function sc(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function cc(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function lc(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function uc(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return lc(e,t);let i={src:zs(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function dc(e,t){let n={src:zs(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function fc(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function pc(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return lc(e,t);let i={href:zs(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function mc(e,t){let n={href:zs(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Y(e,t,n){let r=e.all(t),i=n?hc(n):gc(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function hc(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=gc(n[r])}return t}function gc(e){return e.spread??e.children.length>1}function _c(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function vc(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yc(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function bc(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function xc(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Zr(t.children[1]),o=Xr(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function Sc(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Cc(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var wc=9,Tc=32;function Ec(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(Dc(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Dc(t.slice(i),i>0,!1)),a.join(``)}function Dc(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===wc||t===Tc;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===wc||t===Tc;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function Oc(e,t){let n={type:`text`,value:Ec(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function kc(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var Ac={blockquote:tc,break:nc,code:rc,delete:ic,emphasis:ac,footnoteReference:oc,heading:sc,html:cc,imageReference:uc,image:dc,inlineCode:fc,linkReference:pc,link:mc,listItem:Y,list:_c,paragraph:vc,root:yc,strong:bc,table:xc,tableCell:Cc,tableRow:Sc,text:Oc,thematicBreak:kc,toml:jc,yaml:jc,definition:jc,footnoteDefinition:jc};function jc(){}var Mc={}.hasOwnProperty,Nc={};function Pc(e,t){let n=t||Nc,r=new Map,i=new Map,a={all:s,applyData:Ic,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...Ac,...n.handlers},one:o,options:n,patch:Fc,wrap:Rc};return ec(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(Mc.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=Rs(n);return r.children=a.all(e),r}return Rs(e)}return(a.options.unknownHandler||Lc)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=zc(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=zc(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function Fc(e,t){e.position&&(t.position=$r(e))}function Ic(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,Rs(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function Lc(e,t){let n=t.data||{},r=`value`in t&&!(Mc.call(n,`hProperties`)||Mc.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Rc(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function zc(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Bc(e,t){let n=Pc(e,t),r=n.one(e,void 0),i=Hs(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function Vc(e,t){return e&&`run`in e?async function(n,r){let i=Bc(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Bc(n,{file:r,...e||t})}}function Hc(e){if(e)throw e}var Uc=o(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function X(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Wc(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?Gc(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function Gc(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var Z={basename:Kc,dirname:qc,extname:Jc,join:Yc,sep:`/`};function Kc(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);Qc(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function qc(e){if(Qc(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function Jc(e){Qc(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function Yc(...e){let t=-1,n;for(;++t<e.length;)Qc(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:Xc(n)}function Xc(e){Qc(e);let t=e.codePointAt(0)===47,n=Zc(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function Zc(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function Qc(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var $c={cwd:el};function el(){return`/`}function tl(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function nl(e){if(typeof e==`string`)e=new URL(e);else if(!tl(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return rl(e)}function rl(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var il=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],al=class{constructor(e){let t;t=e?tl(e)?{path:e}:typeof e==`string`||ll(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:$c.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<il.length;){let e=il[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)il.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?Z.basename(this.path):void 0}set basename(e){sl(e,`basename`),ol(e,`basename`),this.path=Z.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?Z.dirname(this.path):void 0}set dirname(e){cl(this.basename,`dirname`),this.path=Z.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?Z.extname(this.path):void 0}set extname(e){if(ol(e,`extname`),cl(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=Z.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){tl(e)&&(e=nl(e)),sl(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?Z.basename(this.path,this.extname):void 0}set stem(e){sl(e,`stem`),ol(e,`stem`),this.path=Z.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new R(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function ol(e,t){if(e&&e.includes(Z.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+Z.sep+"`")}function sl(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function cl(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function ll(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var ul=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),dl=l(Uc(),1),fl={}.hasOwnProperty,pl=new class e extends ul{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Wc()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,dl.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(gl(`data`,this.frozen),this.namespace[e]=t,this):fl.call(this.namespace,e)&&this.namespace[e]||void 0:e?(gl(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=yl(e),n=this.parser||this.Parser;return ml(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),ml(`process`,this.parser||this.Parser),hl(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=yl(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);xl(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),ml(`processSync`,this.parser||this.Parser),hl(`processSync`,this.compiler||this.Compiler),this.process(e,r),vl(`processSync`,`process`,t),n;function r(e,r){t=!0,Hc(e),n=r}}run(e,t,n){_l(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=yl(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),vl(`runSync`,`run`,n),r;function i(e,t){Hc(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=yl(t),r=this.compiler||this.Compiler;return hl(`stringify`,r),_l(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(gl(`use`,this.frozen),e!=null)if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`");return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`)if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e);else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,dl.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null)if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];X(o)&&X(r)&&(r=(0,dl.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function ml(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function hl(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function gl(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function _l(e){if(!X(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function vl(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function yl(e){return bl(e)?e:new al(e)}function bl(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function xl(e){return typeof e==`string`||Sl(e)}function Sl(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Q=Ni(),Cl=[],wl={allowDangerousHtml:!0},Tl=/^(https?|ircs?|mailto|xmpp)$/i,El=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function Dl(e){let t=Ol(e),n=kl(e);return Al(t.runSync(t.parse(n),n),e)}function Ol(e){let t=e.rehypePlugins||Cl,n=e.remarkPlugins||Cl,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...wl}:wl;return pl().use(Es).use(n).use(Vc,r).use(t)}function kl(e){let t=e.children||``,n=new al;return typeof t==`string`?n.value=t:``+t,n}function Al(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||jl;for(let e of El)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return t.className&&(e={type:`element`,tagName:`div`,properties:{className:t.className},children:e.type===`root`?e.children:[e]}),ec(e,l),z(e,{Fragment:Q.Fragment,components:i,ignoreInvalidStyle:!0,jsx:Q.jsx,jsxs:Q.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in ji)if(Object.hasOwn(ji,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=ji[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function jl(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Tl.test(e.slice(0,t))?e:``}function Ml(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function Nl(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}function Pl(e,t,n){let r=Us((n||{}).ignore||[]),i=Fl(t),a=-1;for(;++a<i.length;)Qs(e,`text`,o);function o(e,t){let n=-1,i;for(;++n<t.length;){let e=t[n],a=i?i.children:void 0;if(r(e,a?a.indexOf(e):void 0,i))return;i=e}if(i)return s(e,t)}function s(e,t){let n=t[t.length-1],r=i[a][0],o=i[a][1],s=0,c=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,i={index:d.index,input:d.input,stack:[...t,e]},a=o(...d,i);if(typeof a==`string`&&(a=a.length>0?{type:`text`,value:a}:void 0),a===!1?r.lastIndex=n+1:(s!==n&&u.push({type:`text`,value:e.value.slice(s,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),s=n+d[0].length,l=!0),!r.global)break;d=r.exec(e.value)}return l?(s<e.value.length&&u.push({type:`text`,value:e.value.slice(s)}),n.children.splice(c,1,...u)):u=[e],c+u.length}}function Fl(e){let t=[];if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([Il(e[0]),Ll(e[1])])}return t}function Il(e){return typeof e==`string`?new RegExp(Nl(e),`g`):e}function Ll(e){return typeof e==`function`?e:function(){return e}}var Rl=`phrasing`,$=[`autolink`,`link`,`image`,`label`];function zl(){return{transforms:[ql],enter:{literalAutolink:Vl,literalAutolinkEmail:Hl,literalAutolinkHttp:Hl,literalAutolinkWww:Hl},exit:{literalAutolink:Kl,literalAutolinkEmail:Gl,literalAutolinkHttp:Ul,literalAutolinkWww:Wl}}}function Bl(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:Rl,notInConstruct:$},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:Rl,notInConstruct:$},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:Rl,notInConstruct:$}]}}function Vl(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function Hl(e){this.config.enter.autolinkProtocol.call(this,e)}function Ul(e){this.config.exit.autolinkProtocol.call(this,e)}function Wl(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function Gl(e){this.config.exit.autolinkEmail.call(this,e)}function Kl(e){this.exit(e)}function ql(e){Pl(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Jl],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Yl]],{ignore:[`link`,`linkReference`]})}function Jl(e,t,n,r,i){let a=``;if(!Ql(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!Xl(n)))return!1;let o=Zl(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function Yl(e,t,n,r){return!Ql(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function Xl(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Zl(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=Ml(e,`(`),a=Ml(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function Ql(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||Zi(n)||Xi(n))&&(!t||n!==47)}cu.peek=su;function $l(){this.buffer()}function eu(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function tu(){this.buffer()}function nu(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function ru(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Ya(this.sliceSerialize(e)).toLowerCase(),n.label=t}function iu(e){this.exit(e)}function au(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Ya(this.sliceSerialize(e)).toLowerCase(),n.label=t}function ou(e){this.exit(e)}function su(){return`[`}function cu(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function lu(){return{enter:{gfmFootnoteCallString:$l,gfmFootnoteCall:eu,gfmFootnoteDefinitionLabelString:tu,gfmFootnoteDefinition:nu},exit:{gfmFootnoteCallString:ru,gfmFootnoteCall:iu,gfmFootnoteDefinitionLabelString:au,gfmFootnoteDefinition:ou}}}function uu(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:cu},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?fu:du))),s(),o}}function du(e,t,n){return t===0?e:fu(e,t,n)}function fu(e,t,n){return(n?``:`    `)+e}var pu=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];vu.peek=yu;function mu(){return{canContainEols:[`delete`],enter:{strikethrough:gu},exit:{strikethrough:_u}}}function hu(){return{unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:pu}],handlers:{delete:vu}}}function gu(e){this.enter({type:`delete`,children:[]},e)}function _u(e){this.exit(e)}function vu(e,t,n,r){let i=n.createTracker(r),a=n.enter(`strikethrough`),o=i.move(`~~`);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:`~`}),o+=i.move(`~~`),a(),o}function yu(){return`~`}function bu(e){return e.length}function xu(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||bu,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=Su(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=Cu(r[d]);else{let e=Cu(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding!==!1&&!(n.alignDelimiters===!1&&i===``)&&(n.delimiterStart!==!1||d)&&r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function Su(e){return e==null?``:String(e)}function Cu(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function wu(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),Tu);return i(),o}function Tu(e,t,n){return`>`+(n?``:` `)+e}function Eu(e,t){return Du(e,t.inConstruct,!0)&&!Du(e,t.notInConstruct,!1)}function Du(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Ou(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&Eu(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?``:` `;return`\\
`}function ku(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function Au(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function ju(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Mu(e,t,n,r){let i=ju(n),a=e.value||``,o=i==="`"?`GraveAccent`:`Tilde`;if(Au(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,Nu);return e(),t}let s=n.createTracker(r),c=i.repeat(Math.max(ku(a,i)+1,3)),l=n.enter(`codeFenced`),u=s.move(c);if(e.lang){let t=n.enter(`codeFencedLang${o}`);u+=s.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...s.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${o}`);u+=s.move(` `),u+=s.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...s.current()})),t()}return u+=s.move(`
`),a&&(u+=s.move(a+`
`)),u+=s.move(c),l(),u}function Nu(e,t,n){return(n?``:`    `)+e}function Pu(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Fu(e,t,n,r){let i=Pu(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function Iu(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Lu(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function Ru(e,t,n){let r=aa(e),i=aa(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}zu.peek=Bu;function zu(e,t,n,r){let i=Iu(n),a=n.enter(`emphasis`),o=n.createTracker(r),s=o.move(i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=Ru(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=Lu(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=Ru(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+Lu(d));let p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function Bu(e,t,n){return n.options.emphasis||`*`}function Vu(e,t){let n=!1;return ec(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&Fi(e)&&(t.options.setext||n))}function Hu(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(Vu(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=Lu(l.charCodeAt(0))+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}Uu.peek=Wu;function Uu(e){return e.value||``}function Wu(){return`<`}Gu.peek=Ku;function Gu(e,t,n,r){let i=Pu(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function Ku(){return`!`}qu.peek=Ju;function qu(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function Ju(){return`!`}Yu.peek=Xu;function Yu(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function Xu(){return"`"}function Zu(e,t){let n=Fi(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type===`text`&&(n===e.url||`mailto:`+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Qu.peek=$u;function Qu(e,t,n,r){let i=Pu(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r),s,c;if(Zu(e,n)){let t=n.stack;n.stack=[],s=n.enter(`autolink`);let r=o.move(`<`);return r+=o.move(n.containerPhrasing(e,{before:r,after:`>`,...o.current()})),r+=o.move(`>`),s(),n.stack=t,r}s=n.enter(`link`),c=n.enter(`label`);let l=o.move(`[`);return l+=o.move(n.containerPhrasing(e,{before:l,after:`](`,...o.current()})),l+=o.move(`](`),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...o.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function $u(e,t,n){return Zu(e,n)?`<`:`[`}ed.peek=td;function ed(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function td(){return`[`}function nd(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function rd(e){let t=nd(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function id(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function ad(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function od(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?id(n):nd(n),s=e.ordered?o===`.`?`)`:`.`:rd(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if((o===`*`||o===`-`)&&t&&(!t.children||!t.children[0])&&n.stack[n.stack.length-1]===`list`&&n.stack[n.stack.length-2]===`listItem`&&n.stack[n.stack.length-3]===`list`&&n.stack[n.stack.length-4]===`listItem`&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),ad(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function sd(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function cd(e,t,n,r){let i=sd(n),a=n.bulletCurrent||nd(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function ld(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}var ud=Us([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`]);function dd(e,t,n,r){return(e.children.some(function(e){return ud(e)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function fd(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}pd.peek=md;function pd(e,t,n,r){let i=fd(n),a=n.enter(`strong`),o=n.createTracker(r),s=o.move(i+i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=Ru(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=Lu(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=Ru(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+Lu(d));let p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function md(e,t,n){return n.options.strong||`*`}function hd(e,t,n,r){return n.safe(e.value,r)}function gd(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function _d(e,t,n){let r=(ad(n)+(n.options.ruleSpaces?` `:``)).repeat(gd(n));return n.options.ruleSpaces?r.slice(0,-1):r}var vd={blockquote:wu,break:Ou,code:Mu,definition:Fu,emphasis:zu,hardBreak:Ou,heading:Hu,html:Uu,image:Gu,imageReference:qu,inlineCode:Yu,link:Qu,linkReference:ed,list:od,listItem:cd,paragraph:ld,root:dd,strong:pd,text:hd,thematicBreak:_d};function yd(){return{enter:{table:bd,tableData:wd,tableHeader:wd,tableRow:Sd},exit:{codeText:Td,table:xd,tableData:Cd,tableHeader:Cd,tableRow:Cd}}}function bd(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function xd(e){this.exit(e),this.data.inTable=void 0}function Sd(e){this.enter({type:`tableRow`,children:[]},e)}function Cd(e){this.exit(e)}function wd(e){this.enter({type:`tableCell`,children:[]},e)}function Td(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Ed));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function Ed(e,t){return t===`|`?t:e}function Dd(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return xu(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=vd.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function Od(){return{exit:{taskListCheckValueChecked:Ad,taskListCheckValueUnchecked:Ad,paragraph:jd}}}function kd(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:Md}}}function Ad(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function jd(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function Md(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=vd.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function Nd(){return[zl(),lu(),mu(),yd(),Od()]}function Pd(e){return{extensions:[Bl(),uu(e),hu(),Dd(e),kd()]}}var Fd={tokenize:Yd,partial:!0},Id={tokenize:Xd,partial:!0},Ld={tokenize:Zd,partial:!0},Rd={tokenize:Qd,partial:!0},zd={tokenize:$d,partial:!0},Bd={name:`wwwAutolink`,tokenize:qd,previous:ef},Vd={name:`protocolAutolink`,tokenize:Jd,previous:tf},Hd={name:`emailAutolink`,tokenize:Kd,previous:nf},Ud={};function Wd(){return{text:Ud}}for(var Gd=48;Gd<123;)Ud[Gd]=Hd,Gd++,Gd===58?Gd=65:Gd===91&&(Gd=97);Ud[43]=Hd,Ud[45]=Hd,Ud[46]=Hd,Ud[95]=Hd,Ud[72]=[Hd,Vd],Ud[104]=[Hd,Vd],Ud[87]=[Hd,Bd],Ud[119]=[Hd,Bd];function Kd(e,t,n){let r=this,i,a;return o;function o(t){return!rf(t)||!nf.call(r,r.previous)||af(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return rf(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(zd,u,l)(t):t===45||t===95||Ki(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&Gi(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function qd(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!ef.call(r,r.previous)||af(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(Fd,e.attempt(Id,e.attempt(Ld,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function Jd(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&tf.call(r,r.previous)&&!af(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(Gi(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||Ji(t)||U(t)||Zi(t)||Xi(t)?n(t):e.attempt(Id,e.attempt(Ld,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function Yd(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function Xd(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(Rd,c,s)(t):t===null||U(t)||Zi(t)||t!==45&&Xi(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function Zd(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(Rd,t,a)(o):o===null||U(o)||Zi(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function Qd(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||U(o)||Zi(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||U(e)||Zi(e)?t(e):r(e)}function a(e){return Gi(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):Gi(t)?(e.consume(t),o):n(t)}}function $d(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return Ki(e)?n(e):t(e)}}function ef(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||U(e)}function tf(e){return!Gi(e)}function nf(e){return!(e===47||rf(e))}function rf(e){return e===43||e===45||e===46||e===95||Ki(e)}function af(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var of={tokenize:mf,partial:!0};function sf(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:df,continuation:{tokenize:ff},exit:pf}},text:{91:{name:`gfmFootnoteCall`,tokenize:uf},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:cf,resolveTo:lf}}}}function cf(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=Ya(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function lf(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function uf(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||U(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(Ya(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return U(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function df(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||U(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=Ya(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return U(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),G(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function ff(e,t,n){return e.check(pa,t,e.attempt(of,t,n))}function pf(e){e.exit(`gfmFootnoteDefinition`)}function mf(e,t,n){let r=this;return G(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function hf(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&zi(o,o.length,0,oa(s,e.slice(r+1,n),t)),zi(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),zi(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=aa(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=aa(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var gf=class{constructor(){this.map=[]}add(e,t,n){_f(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0}};function _f(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function vf(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function yf(){return{flow:{null:{name:`table`,tokenize:bf,resolveAll:xf}}}}function bf(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:c;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124?u(e):(o=!0,a+=1,u(e))}function u(t){return t===null?n(t):H(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):W(t)?G(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||U(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,W(t)?G(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):x(t)}function h(t){return W(t)?G(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||H(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return W(t)?G(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||H(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||H(n)?(e.exit(`tableRow`),t(n)):W(n)?G(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||U(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?T:w)}function T(t){return t===92||t===124?(e.consume(t),w):w(t)}}function xf(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new gf;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(Cf(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=Sf(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=Sf(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=Sf(f,t,o,i,n,d)):(o[0]=o[1],d=Sf(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&Cf(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=vf(t.events,n))}return e}function Sf(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},wf(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=wf(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=wf(t.events,n[2]),a=wf(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},wf(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function Cf(e,t,n,r,i){let a=[],o=wf(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function wf(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var Tf={name:`tasklistCheck`,tokenize:Df};function Ef(){return{text:{91:Tf}}}function Df(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return U(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return H(r)?t(r):W(r)?e.check({tokenize:Of},t,n)(r):n(r)}}function Of(e,t,n){return G(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function kf(e){return Hi([Wd(),sf(),hf(e),yf(),Ef()])}var Af={};function jf(e){let t=this,n=e||Af,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(kf(n)),a.push(Nd()),o.push(Pd(n))}var Mf=[{id:`query-basic`,category:`Query`,title:`Query Processing Pipeline`,difficulty:`Beginner`,time:`~20 min`,description:`Core pipeline that transforms raw user queries into retrieval-ready structured queries.`,tags:[`query`,`pipeline`,`nlp`],concept:Yn,steps:[{label:`Input Query`,icon:`⌨️`,detail:`Raw user query is received.`},{label:`Normalization`,icon:`🧹`,detail:`Clean and standardize text.`},{label:`Intent Detection`,icon:`🧠`,detail:`Understand user intent.`},{label:`Transformation`,icon:`🔄`,detail:`Convert into structured form.`},{label:`Routing`,icon:`🚦`,detail:`Send to correct retriever.`},{label:`Output Query`,icon:`📤`,detail:`Final optimized query.`}],code:`
def process_query(query):
    query = normalize(query)
    intent = detect_intent(query)
    query = transform(query, intent)
    return route(query, intent)
`},{id:`multi-query-retrieval`,category:`Query`,title:`Multi-Query Retrieval`,difficulty:`Advanced`,time:`~25 min`,description:`Improves retrieval performance by generating multiple query variations and merging results from each.`,tags:[`query`,`retrieval`,`expansion`,`rag`],concept:Xn,steps:[{label:`Input Query`,icon:`⌨️`,detail:`User provides the original query.`},{label:`Query Expansion`,icon:`🔀`,detail:`Generate multiple paraphrased queries.`},{label:`Parallel Retrieval`,icon:`🔍`,detail:`Run search for each query variant.`},{label:`Merge Results`,icon:`🧩`,detail:`Combine retrieved documents.`},{label:`Deduplication`,icon:`🧹`,detail:`Remove duplicate documents.`}],code:Zn},{id:`self-query-retrieval`,category:`Query`,title:`Self-Query Retrieval`,difficulty:`Advanced`,time:`~30 min`,description:`Automatically converts natural language queries into structured queries with metadata filters for precise retrieval.`,tags:[`query`,`metadata`,`retrieval`,`llm`],steps:[{label:`Input Query`,icon:`⌨️`,detail:`User provides a natural language query.`},{label:`Intent + Metadata Extraction`,icon:`🏷️`,detail:`Extract filters like date, category, or attributes.`},{label:`Structured Query Generation`,icon:`🧾`,detail:`Convert query into structured format.`},{label:`Filtered Retrieval`,icon:`🔍`,detail:`Retrieve documents using filters + embeddings.`}],code:`
def self_query_retrieval(query):
    structured = llm_to_structured_query(query)

    results = vector_db.search(
        text=structured["text"],
        filter=structured["metadata"]
    )

    return results
`},{id:`step-back-prompting`,category:`Query`,title:`Step-Back Prompting`,difficulty:`Advanced`,time:`~25 min`,description:`Improves reasoning by converting a specific query into a more general abstraction before retrieval, then refining the answer back to the original context.`,tags:[`query`,`reasoning`,`abstraction`,`retrieval`],steps:[{label:`Input Query`,icon:`⌨️`,detail:`User provides a specific question.`},{label:`Step Back Transformation`,icon:`⬅️`,detail:`Convert query into a more general concept.`},{label:`General Retrieval`,icon:`📚`,detail:`Retrieve broad foundational knowledge.`},{label:`Context Mapping`,icon:`🔗`,detail:`Map general knowledge back to specific case.`},{label:`Final Answer`,icon:`✨`,detail:`Generate refined response.`}],code:`
def step_back_prompting(query):
    general_query = llm.step_back(query)

    docs = retrieve(general_query)

    answer = llm.refine(query=query, context=docs)

    return answer
`},{id:`sub-question-generation`,category:`Query`,title:`Sub-Question Generation`,difficulty:`Advanced`,time:`~30 min`,description:`Breaks complex queries into smaller sub-questions, retrieves answers individually, and combines them into a final response.`,tags:[`query`,`decomposition`,`reasoning`,`retrieval`],steps:[{label:`Input Complex Query`,icon:`🧠`,detail:`User provides a multi-part or complex question.`},{label:`Decomposition`,icon:`✂️`,detail:`Split query into smaller sub-questions.`},{label:`Independent Retrieval`,icon:`🔍`,detail:`Retrieve information for each sub-question.`},{label:`Answer Aggregation`,icon:`🧩`,detail:`Combine all sub-answers into one response.`},{label:`Final Response`,icon:`✨`,detail:`Generate coherent final output.`}],code:`
def sub_question_generation(query):
    sub_questions = decompose(query)

    answers = []
    for q in sub_questions:
        answers.append(retrieve(q))

    final_answer = aggregate(answers)

    return final_answer
`},{id:`cot-retrieval`,category:`Query`,title:`Chain-of-Thought Retrieval`,difficulty:`Advanced`,time:`~30 min`,description:`Uses step-by-step reasoning to guide retrieval at each intermediate stage, improving multi-step question answering accuracy.`,tags:[`query`,`reasoning`,`cot`,`retrieval`],steps:[{label:`Input Query`,icon:`⌨️`,detail:`User provides a complex reasoning question.`},{label:`Reasoning Breakdown`,icon:`🧠`,detail:`Decompose problem into logical steps.`},{label:`Step-wise Retrieval`,icon:`🔍`,detail:`Retrieve evidence for each reasoning step.`},{label:`Intermediate Synthesis`,icon:`🧩`,detail:`Combine step-level findings.`},{label:`Final Answer`,icon:`✨`,detail:`Produce final grounded response.`}],code:`
def cot_retrieval(query):
    steps = llm.reason_steps(query)

    docs = []
    for step in steps:
        docs.extend(retrieve(step))

    return llm.generate_answer(query, docs)
`},{id:`follow-up-query-generation`,category:`Query`,title:`Follow-Up Query Generation`,difficulty:`Advanced`,time:`~25 min`,description:`Generates additional follow-up queries based on missing information in conversation to improve completeness of retrieval.`,tags:[`query`,`conversation`,`retrieval`,`llm`],steps:[{label:`Conversation Input`,icon:`💬`,detail:`User query with chat history context.`},{label:`Gap Detection`,icon:`🕳️`,detail:`Identify missing or unclear information.`},{label:`Follow-up Query Generation`,icon:`🔄`,detail:`Generate additional clarifying queries.`},{label:`Retrieval Execution`,icon:`🔍`,detail:`Run retrieval for generated queries.`},{label:`Answer Refinement`,icon:`✨`,detail:`Combine results into final response.`}],code:`
def follow_up_query_generation(query, history):
    followups = llm.generate_followups(query, history)

    results = []
    for q in followups:
        results.append(retrieve(q))

    return llm.summarize(results)
`},{id:`conversational-query-reformulation`,category:`Query`,title:`Conversational Query Reformulation`,difficulty:`Advanced`,time:`~25 min`,description:`Rewrites context-dependent conversational queries into standalone, retrieval-ready queries using chat history.`,tags:[`query`,`conversation`,`reformulation`,`retrieval`],steps:[{label:`Input Conversation`,icon:`💬`,detail:`User query with chat history.`},{label:`Context Understanding`,icon:`🧠`,detail:`Analyze previous conversation turns.`},{label:`Query Rewrite`,icon:`✍️`,detail:`Convert ambiguous query into standalone form.`},{label:`Retrieval Execution`,icon:`🔍`,detail:`Run search with reformulated query.`},{label:`Final Answer`,icon:`✨`,detail:`Generate response using retrieved context.`}],code:`
def reformulate_query(query, history):
    standalone_query = llm.rewrite(query, history)

    results = retrieve(standalone_query)

    return results
`},{id:`context-aware-querying`,category:`Query`,title:`Context-Aware Querying`,difficulty:`Advanced`,time:`~30 min`,description:`Enhances queries using user context such as role, domain, preferences, and prior interactions to improve retrieval relevance.`,tags:[`query`,`context`,`personalization`,`retrieval`],steps:[{label:`Input Query`,icon:`⌨️`,detail:`User provides a query.`},{label:`Context Collection`,icon:`👤`,detail:`Gather user profile, role, and history.`},{label:`Query Enrichment`,icon:`🔧`,detail:`Inject contextual signals into query.`},{label:`Contextual Retrieval`,icon:`🔍`,detail:`Retrieve results based on enriched query.`},{label:`Ranking & Filtering`,icon:`📊`,detail:`Prioritize results based on relevance to context.`}],code:`
def context_aware_querying(query, user_context):
    enriched_query = inject_context(query, user_context)

    results = retrieve(enriched_query)

    ranked = rank_by_context(results, user_context)

    return ranked
`},{id:`metadata-query-generation`,category:`Query`,title:`Metadata Query Generation`,difficulty:`Advanced`,time:`~30 min`,description:`Transforms natural language queries into structured metadata filters combined with text search for precise retrieval.`,tags:[`query`,`metadata`,`filters`,`retrieval`],steps:[{label:`Input Query`,icon:`⌨️`,detail:`User provides a natural language query.`},{label:`Metadata Extraction`,icon:`🏷️`,detail:`Identify filters like date, category, author, or domain.`},{label:`Structured Query Build`,icon:`🧾`,detail:`Convert into hybrid text + metadata query.`},{label:`Filtered Retrieval`,icon:`🔍`,detail:`Retrieve documents using both filters and embeddings.`},{label:`Result Ranking`,icon:`📊`,detail:`Rank results based on relevance and constraints.`}],code:`
def metadata_query_generation(query):
    metadata = extract_metadata(query)

    results = db.search(
        text=query,
        filter=metadata
    )

    return results
`},{id:`agent-based-query-planning`,category:`Query`,title:`Agent-Based Query Planning`,difficulty:`Advanced`,time:`~40 min`,description:`Uses an autonomous LLM agent to plan, decompose, and execute multi-step query strategies using tools and iterative reasoning.`,tags:[`query`,`agent`,`planning`,`tool-use`,`retrieval`],steps:[{label:`Input Query`,icon:`⌨️`,detail:`User submits a complex query.`},{label:`Task Understanding`,icon:`🧠`,detail:`Agent interprets intent and requirements.`},{label:`Plan Generation`,icon:`📋`,detail:`Break query into actionable steps.`},{label:`Tool Execution`,icon:`🛠️`,detail:`Run retrieval, search, or external tools.`},{label:`Iteration Loop`,icon:`🔄`,detail:`Refine plan based on intermediate results.`},{label:`Final Answer`,icon:`✨`,detail:`Synthesize final response from all outputs.`}],code:`
def agent_based_query_planning(query):
    plan = agent.create_plan(query)

    results = []

    for step in plan:
        result = execute_tool(step)
        results.append(result)

        plan = agent.refine_plan(plan, result)

    return agent.summarize(results)
`},{id:`cross-encoder-reranking`,category:`Reranking`,title:`Cross Encoder Reranking`,difficulty:`Advanced`,time:`~25 min`,description:`Re-ranks retrieved documents using a cross-encoder model that jointly encodes query and document for higher relevance accuracy.`,tags:[`ranking`,`reranking`,`cross-encoder`,`retrieval`],steps:[{label:`Initial Retrieval`,icon:`🔍`,detail:`Fetch top-K candidate documents.`},{label:`Pair Encoding`,icon:`🔗`,detail:`Encode query-document pairs together.`},{label:`Score Calculation`,icon:`📊`,detail:`Compute relevance scores.`},{label:`Re-ranking`,icon:`🔝`,detail:`Sort based on scores.`}],code:`
def cross_encoder_rerank(query, docs):
    pairs = [(query, doc) for doc in docs]

    scores = cross_encoder.predict(pairs)

    ranked_docs = sort_by_score(docs, scores)

    return ranked_docs
`},{id:`cohere-reranker`,category:`Reranking`,title:`Cohere Reranker`,difficulty:`Advanced`,time:`~20 min`,description:`Uses Cohere’s rerank model to improve retrieval relevance by scoring query-document pairs.`,tags:[`reranking`,`cohere`,`ranking`,`llm`],steps:[{label:`Retrieve Candidates`,icon:`🔍`,detail:`Get top-K documents.`},{label:`Send to Cohere`,icon:`🌐`,detail:`Pass query + docs to reranker API.`},{label:`Score Results`,icon:`📊`,detail:`Receive relevance scores.`},{label:`Sort Output`,icon:`🔝`,detail:`Rank documents.`}],code:`
import cohere

co = cohere.Client("API_KEY")

def cohere_rerank(query, docs):
    results = co.rerank(
        model="rerank-english-v3.0",
        query=query,
        documents=docs
    )

    return sorted(results, key=lambda x: x.relevance_score, reverse=True)
`},{id:`bge-reranker`,category:`Reranking`,title:`BGE Reranker`,difficulty:`Advanced`,time:`~20 min`,description:`Uses BAAI's BGE reranker model to improve semantic ranking of retrieved documents.`,tags:[`bge`,`reranking`,`embedding`,`retrieval`],steps:[{label:`Retrieve Docs`,icon:`🔍`,detail:`Initial candidate retrieval.`},{label:`Encode Pairs`,icon:`🔗`,detail:`Query-document encoding.`},{label:`Score with BGE`,icon:`🧠`,detail:`Compute semantic relevance.`},{label:`Re-rank`,icon:`🔝`,detail:`Sort by score.`}],code:`
def bge_rerank(query, docs):
    pairs = [(query, doc) for doc in docs]

    scores = bge_model.score(pairs)

    return sort_by_score(docs, scores)
`},{id:`llm-reranking`,category:`Reranking`,title:`LLM Reranking`,difficulty:`Advanced`,time:`~30 min`,description:`Uses a large language model to evaluate and reorder retrieved documents based on semantic understanding.`,tags:[`llm`,`reranking`,`ranking`,`reasoning`],steps:[{label:`Retrieve Candidates`,icon:`🔍`,detail:`Fetch top-K documents.`},{label:`LLM Evaluation`,icon:`🧠`,detail:`Model evaluates relevance.`},{label:`Score Assignment`,icon:`📊`,detail:`Assign relevance scores.`},{label:`Final Ranking`,icon:`🔝`,detail:`Sort results.`}],code:`
def llm_rerank(query, docs):
    scored_docs = []

    for doc in docs:
        score = llm.evaluate_relevance(query, doc)
        scored_docs.append((doc, score))

    return sorted(scored_docs, key=lambda x: x[1], reverse=True)
`},{id:`fixed-chunking`,category:`Chunking`,title:`Fixed Chunking`,difficulty:`Beginner`,time:`~10 min`,description:`Fixed Chunking divides documents into chunks of a predefined size regardless of semantic boundaries. It is simple, fast, and widely used in basic RAG systems.`,tags:[`chunking`,`fixed-chunking`,`document-processing`,`rag`],steps:[{label:`Load Document`,icon:`📄`,detail:`Read the source document.`},{label:`Define Chunk Size`,icon:`📏`,detail:`Choose a fixed size such as 500 tokens.`},{label:`Split Text`,icon:`✂️`,detail:`Break the document into equal-sized chunks.`},{label:`Add Overlap`,icon:`🔗`,detail:`Include overlap between chunks to preserve context.`},{label:`Generate Embeddings`,icon:`🔢`,detail:`Convert chunks into vector embeddings.`},{label:`Store Chunks`,icon:`🗄️`,detail:`Save embeddings and metadata in a vector database.`}],code:`function fixedChunk(
  text,
  chunkSize = 500,
  overlap = 50
) {

  const chunks = [];

  for (
    let i = 0;
    i < text.length;
    i += chunkSize - overlap
  ) {
    chunks.push(
      text.slice(
        i,
        i + chunkSize
      )
    );
  }

  return chunks;
}

const chunks = fixedChunk(
  document,
  500,
  50
);

console.log(chunks);`},{id:`naive-rag`,category:`Foundations`,title:`Naive RAG`,difficulty:`Beginner`,time:`~15 min`,description:`The baseline pattern: embed, store, retrieve, generate. A great starting point before adding complexity.`,tags:[`retrieval`,`embeddings`,`generation`],steps:[{label:`Chunk Documents`,icon:`📄`,detail:`Split documents into fixed-size or semantic chunks (e.g. 512 tokens with 10% overlap).`},{label:`Embed Chunks`,icon:`🔢`,detail:`Use a dense embedding model (e.g. text-embedding-3-small) to vectorize each chunk.`},{label:`Store in Vector DB`,icon:`🗄️`,detail:`Upsert (id, vector, metadata) into a vector store like Pinecone, Weaviate, or pgvector.`},{label:`Embed Query`,icon:`🔍`,detail:`At query time, embed the user question using the same model.`},{label:`Top-K Retrieval`,icon:`🎯`,detail:`Cosine similarity search for top-K (K=5) most relevant chunks.`},{label:`Prompt + Generate`,icon:`✨`,detail:`Inject retrieved chunks into prompt as context, then call the LLM to generate an answer.`}],code:`import anthropic from "@anthropic-ai/sdk";
import { OpenAI } from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

const openai = new OpenAI();
const pinecone = new Pinecone();
const claude = new anthropic.Anthropic();
const index = pinecone.index("my-rag-index");

// Step 1: Ingest documents
async function ingest(docs) {
  for (const doc of docs) {
    const chunks = chunkText(doc.text, 512);
    for (const chunk of chunks) {
      const { data } = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: chunk,
      });
      await index.upsert([{
        id: crypto.randomUUID(),
        values: data[0].embedding,
        metadata: { text: chunk, source: doc.source },
      }]);
    }
  }
}

// Step 2: Query
async function query(question) {
  const { data } = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: question,
  });

  const results = await index.query({
    vector: data[0].embedding,
    topK: 5,
    includeMetadata: true,
  });

  const context = results.matches
    .map((m) => m.metadata.text)
    .join("\\n\\n---\\n\\n");

  const response = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: \`Answer using the context below.\\n\\nContext:\\n\${context}\\n\\nQuestion: \${question}\`,
    }],
  });

  return response.content[0].text;
}`},{id:`semantic-rag`,category:`Foundations`,title:`Semantic RAG`,difficulty:`Beginner`,time:`~20 min`,description:`Retrieves documents based on semantic similarity rather than keyword matching.`,tags:[`semantic-search`,`embeddings`,`retrieval`],steps:[{label:`Embed Documents`,icon:`📄`,detail:`Generate embeddings for document chunks.`},{label:`Store Vectors`,icon:`🗄️`,detail:`Save embeddings in a vector database.`},{label:`Embed Query`,icon:`🔍`,detail:`Convert user question into a vector.`},{label:`Semantic Search`,icon:`🧠`,detail:`Find semantically similar chunks.`},{label:`Build Context`,icon:`📚`,detail:`Combine retrieved chunks.`},{label:`Generate Answer`,icon:`✨`,detail:`Generate grounded response.`}],code:`const docs = await vectorStore.similaritySearch(
  question,
  5
);

const answer =
  await llm.invoke(
    buildPrompt(docs, question)
  );`},{id:`hybrid-rag`,category:`Foundations`,title:`Hybrid RAG`,difficulty:`Intermediate`,time:`~25 min`,description:`Combines vector search and keyword search for better retrieval accuracy.`,tags:[`hybrid`,`bm25`,`vector-search`],steps:[{label:`Keyword Search`,icon:`🔤`,detail:`Perform BM25 search.`},{label:`Semantic Search`,icon:`🧠`,detail:`Perform vector search.`},{label:`Merge Results`,icon:`🔗`,detail:`Combine retrieved results.`},{label:`Rerank`,icon:`📊`,detail:`Sort by relevance.`},{label:`Build Context`,icon:`📚`,detail:`Create final prompt context.`},{label:`Generate`,icon:`✨`,detail:`Generate answer.`}],code:`const keywordDocs =
  await bm25.search(question);

const semanticDocs =
  await vectorStore.similaritySearch(
    question,
    10
  );

const results =
  mergeResults(
    keywordDocs,
    semanticDocs
  );`},{id:`parent-child-rag`,category:`Foundations`,title:`Parent-Child RAG`,difficulty:`Intermediate`,time:`~30 min`,description:`Retrieves small chunks but returns larger parent context.`,tags:[`parent-child`,`hierarchical`],steps:[{label:`Create Parents`,icon:`📚`,detail:`Generate large chunks.`},{label:`Create Children`,icon:`📄`,detail:`Split into smaller chunks.`},{label:`Index Children`,icon:`🗄️`,detail:`Store child embeddings.`},{label:`Retrieve Children`,icon:`🔍`,detail:`Find matching chunks.`},{label:`Fetch Parents`,icon:`📖`,detail:`Retrieve larger context.`},{label:`Generate`,icon:`✨`,detail:`Generate answer.`}],code:`const retriever =
  new ParentDocumentRetriever({
    vectorstore,
    docstore,
  });

const docs =
  await retriever.invoke(
    question
  );`},{id:`multi-hop-rag`,category:`Foundations`,title:`Multi-Hop RAG`,difficulty:`Advanced`,time:`~35 min`,description:`Retrieves information across multiple retrieval steps and combines evidence.`,tags:[`multi-hop`,`reasoning`],steps:[{label:`Analyze Query`,icon:`🧠`,detail:`Understand information needs.`},{label:`Create Subqueries`,icon:`❓`,detail:`Break into smaller questions.`},{label:`Retrieve Evidence`,icon:`🔍`,detail:`Search each query.`},{label:`Combine Facts`,icon:`🔗`,detail:`Merge evidence.`},{label:`Reason`,icon:`📚`,detail:`Perform multi-hop reasoning.`},{label:`Generate`,icon:`✨`,detail:`Return answer.`}],code:`const subQueries =
  await planner(question);

const evidence =
  await Promise.all(
    subQueries.map(
      q => retriever.invoke(q)
    )
  );`},{id:`graph-rag`,category:`Foundations`,title:`Graph RAG`,difficulty:`Advanced`,time:`~45 min`,description:`Uses knowledge graphs to retrieve entities and relationships.`,tags:[`graph`,`knowledge-graph`],steps:[{label:`Extract Entities`,icon:`🏷️`,detail:`Identify entities.`},{label:`Build Graph`,icon:`🕸️`,detail:`Create relationships.`},{label:`Store Graph`,icon:`🗄️`,detail:`Persist graph data.`},{label:`Traverse Graph`,icon:`🔍`,detail:`Find connected knowledge.`},{label:`Build Context`,icon:`📚`,detail:`Gather graph evidence.`},{label:`Generate`,icon:`✨`,detail:`Answer using graph context.`}],code:`const entities =
  await extractEntities(
    document
  );

const graph =
  await buildKnowledgeGraph(
    entities
  );`},{id:`agentic-rag`,category:`Foundations`,title:`Agentic RAG`,difficulty:`Advanced`,time:`~45 min`,description:`Uses autonomous agents to plan, retrieve, reason, and answer.`,tags:[`agentic`,`agents`,`reasoning`],steps:[{label:`Plan`,icon:`🧠`,detail:`Create execution strategy.`},{label:`Retrieve`,icon:`🔍`,detail:`Search knowledge sources.`},{label:`Evaluate`,icon:`📊`,detail:`Assess retrieval quality.`},{label:`Refine`,icon:`🔄`,detail:`Retry if needed.`},{label:`Reason`,icon:`📚`,detail:`Combine evidence.`},{label:`Generate`,icon:`✨`,detail:`Produce final answer.`}],code:`const result =
  await agent.invoke({
    question
  });`},{id:`crag`,category:`Advanced`,title:`Corrective RAG (CRAG)`,difficulty:`Advanced`,time:`~40 min`,description:`Evaluates retrieval quality and corrects poor retrieval results.`,tags:[`crag`,`corrective-rag`],steps:[{label:`Retrieve`,icon:`🔍`,detail:`Retrieve documents.`},{label:`Evaluate`,icon:`📊`,detail:`Check retrieval quality.`},{label:`Correct`,icon:`🔄`,detail:`Perform additional retrieval.`},{label:`Filter`,icon:`🧹`,detail:`Remove noisy chunks.`},{label:`Context Build`,icon:`📚`,detail:`Create final context.`},{label:`Generate`,icon:`✨`,detail:`Generate response.`}],code:`if(score < threshold){
  docs =
    await webSearch(question);
}`},{id:`self-rag`,category:`Advanced`,title:`Self-RAG`,difficulty:`Advanced`,time:`~45 min`,description:`Allows the model to self-reflect on retrieval and generation quality.`,tags:[`self-rag`,`reflection`],steps:[{label:`Retrieve`,icon:`🔍`,detail:`Fetch context.`},{label:`Generate`,icon:`✨`,detail:`Create answer.`},{label:`Reflect`,icon:`🤔`,detail:`Evaluate answer quality.`},{label:`Retrieve Again`,icon:`🔄`,detail:`Get more evidence if needed.`},{label:`Improve`,icon:`📈`,detail:`Refine response.`},{label:`Finalize`,icon:`✅`,detail:`Return answer.`}],code:`const reflection =
  await llm.invoke(
    evaluateAnswer(answer)
  );`},{id:`adaptive-rag`,category:`Advanced`,title:`Adaptive RAG`,difficulty:`Advanced`,time:`~45 min`,description:`Dynamically selects retrieval strategies based on query complexity.`,tags:[`adaptive`,`routing`],steps:[{label:`Classify Query`,icon:`🏷️`,detail:`Analyze complexity.`},{label:`Route Strategy`,icon:`🚦`,detail:`Select retrieval type.`},{label:`Retrieve`,icon:`🔍`,detail:`Perform retrieval.`},{label:`Evaluate`,icon:`📊`,detail:`Assess results.`},{label:`Optimize`,icon:`⚙️`,detail:`Adjust retrieval.`},{label:`Generate`,icon:`✨`,detail:`Answer question.`}],code:`const route =
  await classifier(question);

if(route === "simple"){
  useNaiveRAG();
}else{
  useMultiHopRAG();
}`},{id:`multimodal-rag`,category:`Advanced`,title:`Multimodal RAG`,difficulty:`Advanced`,time:`~50 min`,description:`Retrieves and reasons over text, images, audio, and video.`,tags:[`multimodal`,`vision`,`audio`],steps:[{label:`Ingest Data`,icon:`📂`,detail:`Load multiple modalities.`},{label:`Create Embeddings`,icon:`🔢`,detail:`Generate multimodal vectors.`},{label:`Store Data`,icon:`🗄️`,detail:`Index content.`},{label:`Retrieve`,icon:`🔍`,detail:`Search across modalities.`},{label:`Fuse Context`,icon:`🔗`,detail:`Combine evidence.`},{label:`Generate`,icon:`✨`,detail:`Produce answer.`}],code:`const imageResults =
  await imageRetriever.search(
    query
  );

const textResults =
  await textRetriever.search(
    query
  );`},{id:`fusion-rag`,category:`Advanced`,title:`Fusion RAG`,difficulty:`Advanced`,time:`~45 min`,description:`Combines multiple retrieval strategies (dense, sparse, semantic) to improve answer accuracy.`,tags:[`hybrid`,`retrieval`,`ranking`,`fusion`],steps:[{label:`Query Input`,icon:`🧠`,detail:`User submits query.`},{label:`Multi-Retrieval`,icon:`🔍`,detail:`Run BM25, vector, and hybrid search.`},{label:`Score Fusion`,icon:`⚖️`,detail:`Combine results using weighted ranking.`},{label:`Deduplication`,icon:`🧹`,detail:`Remove redundant documents.`},{label:`Context Build`,icon:`🔗`,detail:`Prepare final context window.`},{label:`Generate Answer`,icon:`✨`,detail:`LLM produces final response.`}],code:`
const denseResults = await vectorSearch(query);
const sparseResults = await keywordSearch(query);

const fused = fuseResults(denseResults, sparseResults, {
  strategy: "weighted-rerank"
});
`},{id:`enterprise-rag`,category:`Production`,title:`Enterprise RAG`,difficulty:`Advanced`,time:`~60 min`,description:`Scalable RAG system designed for enterprise-grade security, compliance, and multi-source knowledge ingestion.`,tags:[`enterprise`,`security`,`scalable`,`governance`,`llmops`],steps:[{label:`Data Sources`,icon:`🏢`,detail:`Connect databases, APIs, documents.`},{label:`Ingestion Pipeline`,icon:`📥`,detail:`ETL + chunking + cleaning.`},{label:`Indexing Layer`,icon:`🗄️`,detail:`Store embeddings in vector DB.`},{label:`Access Control`,icon:`🔐`,detail:`Role-based data filtering.`},{label:`Retrieval Service`,icon:`🔍`,detail:`Secure context retrieval.`},{label:`LLM Orchestration`,icon:`🤖`,detail:`Prompt + governance layer.`},{label:`Monitoring`,icon:`📊`,detail:`Logging, tracing, evaluation.`}],code:`
const userContext = getUserRole(user);

const docs = await secureRetrieval(query, {
  filters: { accessLevel: userContext.role }
});

const response = await llm.generate({
  context: docs,
  policy: "enterprise-safe"
});
`},{id:`federated-rag`,category:`Advanced`,title:`Federated RAG`,difficulty:`Advanced`,time:`~55 min`,description:`Retrieves knowledge from multiple distributed nodes without centralizing sensitive data.`,tags:[`federated`,`privacy`,`distributed`,`edge-ai`],steps:[{label:`Local Nodes`,icon:`📱`,detail:`Each node holds private data.`},{label:`Local Retrieval`,icon:`🔍`,detail:`Search happens at edge.`},{label:`Embedding Sync`,icon:`🔄`,detail:`Share only embeddings, not raw data.`},{label:`Aggregation`,icon:`🧩`,detail:`Combine partial results securely.`},{label:`Context Fusion`,icon:`🔗`,detail:`Merge distributed knowledge.`},{label:`Generate Response`,icon:`✨`,detail:`Final LLM output.`}],code:`
const localResultsA = await nodeA.search(query);
const localResultsB = await nodeB.search(query);

const merged = secureAggregate([
  localResultsA,
  localResultsB
]);

const answer = await llm.generate({ context: merged });
`},{id:`recursive-chunking`,category:`Chunking`,title:`Recursive Chunking`,difficulty:`Beginner`,time:`~15 min`,description:`Recursively splits documents using separators such as paragraphs, sentences, and words while preserving document structure.`,tags:[`chunking`,`recursive`,`langchain`,`rag`],steps:[{label:`Load Document`,icon:`📄`,detail:`Read the source document.`},{label:`Define Separators`,icon:`📑`,detail:`Use paragraphs, sentences, and spaces.`},{label:`Recursive Split`,icon:`🔄`,detail:`Split progressively until chunk size is reached.`},{label:`Apply Overlap`,icon:`🔗`,detail:`Preserve context between chunks.`},{label:`Generate Embeddings`,icon:`🔢`,detail:`Convert chunks into vectors.`},{label:`Store Chunks`,icon:`🗄️`,detail:`Index chunks in a vector database.`}],code:`import {
  RecursiveCharacterTextSplitter
} from "langchain/text_splitter";

const splitter =
  new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
  });

const chunks =
  await splitter.splitText(document);

console.log(chunks);`},{id:`hierarchical-chunking`,category:`Chunking`,title:`Hierarchical Chunking`,difficulty:`Intermediate`,time:`~20 min`,description:`Creates parent and child chunks to support hierarchical retrieval and context expansion.`,tags:[`hierarchical`,`parent-child`,`chunking`,`rag`],steps:[{label:`Create Parent Chunks`,icon:`📚`,detail:`Split into larger sections.`},{label:`Create Child Chunks`,icon:`📄`,detail:`Further divide parent sections.`},{label:`Generate Embeddings`,icon:`🔢`,detail:`Embed child chunks.`},{label:`Store Relationships`,icon:`🔗`,detail:`Maintain parent-child mapping.`},{label:`Retrieve Child Chunks`,icon:`🔍`,detail:`Search smaller chunks.`},{label:`Return Parent Context`,icon:`📖`,detail:`Provide larger context window.`}],code:`const parentChunks =
  splitDocument(
    document,
    2000
  );

const childChunks =
  parentChunks.flatMap(
    chunk =>
      splitDocument(
        chunk,
        500
      )
  );

console.log(childChunks);`},{id:`sliding-window-chunking`,category:`Chunking`,title:`Sliding Window Chunking`,difficulty:`Intermediate`,time:`~15 min`,description:`Creates overlapping chunks to preserve context between neighboring chunks.`,tags:[`sliding-window`,`chunking`,`overlap`,`rag`],steps:[{label:`Define Window Size`,icon:`📏`,detail:`Choose chunk size.`},{label:`Define Overlap`,icon:`🔗`,detail:`Specify overlap amount.`},{label:`Slide Window`,icon:`➡️`,detail:`Move through document incrementally.`},{label:`Generate Chunks`,icon:`📄`,detail:`Create overlapping chunks.`},{label:`Generate Embeddings`,icon:`🔢`,detail:`Convert chunks to vectors.`},{label:`Store Chunks`,icon:`🗄️`,detail:`Save for retrieval.`}],code:`function slidingWindow(
  text,
  size,
  overlap
) {

  const chunks = [];

  for (
    let i = 0;
    i < text.length;
    i += size - overlap
  ) {
    chunks.push(
      text.slice(
        i,
        i + size
      )
    );
  }

  return chunks;
}`},{id:`token-based-chunking`,category:`Chunking`,title:`Token-Based Chunking`,difficulty:`Intermediate`,time:`~15 min`,description:`Splits documents based on token counts to optimize LLM context windows.`,tags:[`token`,`chunking`,`llm`,`rag`],steps:[{label:`Tokenize Document`,icon:`🔤`,detail:`Convert text into tokens.`},{label:`Define Token Limit`,icon:`📏`,detail:`Set maximum token count.`},{label:`Split Tokens`,icon:`✂️`,detail:`Create chunks within token limits.`},{label:`Apply Overlap`,icon:`🔗`,detail:`Preserve context.`},{label:`Generate Embeddings`,icon:`🔢`,detail:`Embed chunks.`},{label:`Store Chunks`,icon:`🗄️`,detail:`Save to vector database.`}],code:`import {
  TokenTextSplitter
} from "langchain/text_splitter";

const splitter =
  new TokenTextSplitter({
    chunkSize: 512,
    chunkOverlap: 50,
  });

const chunks =
  await splitter.splitText(
    document
  );`},{id:`agentic-chunking`,category:`Chunking`,title:`Agentic Chunking`,difficulty:`Advanced`,time:`~30 min`,description:`Uses an LLM or agent to intelligently determine chunk boundaries based on document meaning and structure.`,tags:[`agentic`,`chunking`,`llm`,`advanced-rag`],steps:[{label:`Analyze Document`,icon:`🧠`,detail:`Understand document structure.`},{label:`Identify Topics`,icon:`🏷️`,detail:`Detect semantic sections.`},{label:`Determine Boundaries`,icon:`✂️`,detail:`Create meaningful chunk breaks.`},{label:`Generate Chunks`,icon:`📚`,detail:`Produce context-rich chunks.`},{label:`Create Embeddings`,icon:`🔢`,detail:`Embed generated chunks.`},{label:`Store in Vector DB`,icon:`🗄️`,detail:`Index chunks for retrieval.`}],code:`const chunks =
  await llm.invoke(\`
Analyze the document and
split it into logical,
self-contained sections.

Document:
\${document}
\`);

console.log(chunks);`},{id:`semantic-chunking`,category:`Chunking`,title:`Semantic Chunking`,difficulty:`Intermediate`,time:`~20 min`,description:`Creates chunks based on semantic meaning rather than fixed sizes, resulting in more coherent retrieval.`,tags:[`semantic`,`chunking`,`embeddings`,`rag`],steps:[{label:`Load Document`,icon:`📄`,detail:`Read source content.`},{label:`Generate Embeddings`,icon:`🔢`,detail:`Create embeddings for sentences.`},{label:`Measure Similarity`,icon:`📊`,detail:`Compare adjacent sentence embeddings.`},{label:`Detect Boundaries`,icon:`✂️`,detail:`Identify topic changes.`},{label:`Create Chunks`,icon:`📚`,detail:`Group semantically related sentences.`},{label:`Store Chunks`,icon:`🗄️`,detail:`Save chunks for retrieval.`}],code:`import {
  SemanticChunker
} from "langchain_experimental";

const chunker =
  new SemanticChunker(
    embeddings
  );

const chunks =
  await chunker.createDocuments([
    document
  ]);

console.log(chunks);`},{id:`similarity-search`,category:`Retrieval`,title:`Similarity Search Retrieval`,difficulty:`Beginner`,time:`~15 min`,description:`The most common retrieval strategy in RAG systems. Query embeddings are compared against document embeddings using vector similarity metrics such as cosine similarity.`,tags:[`retrieval`,`vector-search`,`similarity-search`,`embeddings`],steps:[{label:`Embed Documents`,icon:`📄`,detail:`Generate embeddings for document chunks using an embedding model.`},{label:`Store Vectors`,icon:`🗄️`,detail:`Store embeddings in a vector database such as Pinecone, ChromaDB, or FAISS.`},{label:`Embed Query`,icon:`🔍`,detail:`Convert the user query into the same embedding space.`},{label:`Calculate Similarity`,icon:`📐`,detail:`Compare query vectors with document vectors using cosine similarity.`},{label:`Retrieve Top-K`,icon:`🎯`,detail:`Return the most similar document chunks.`},{label:`Generate Response`,icon:`✨`,detail:`Pass retrieved chunks to the LLM for answer generation.`}],code:`import { OpenAI } from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

const openai = new OpenAI();
const pinecone = new Pinecone();

const index = pinecone.index("documents");

async function retrieve(query) {

  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  });

  const results = await index.query({
    vector: embedding.data[0].embedding,
    topK: 5,
    includeMetadata: true,
  });

  return results.matches.map(
    doc => doc.metadata.text
  );
}`},{id:`hybrid-search`,category:`Retrieval`,title:`Hybrid Search`,difficulty:`Intermediate`,time:`~30 min`,description:`Combine dense semantic vectors with sparse BM25 keyword search, then re-rank. Handles both conceptual and exact-match queries.`,tags:[`BM25`,`reranking`,`fusion`],concept:ar,steps:[{label:`Dense Embed`,icon:`🔢`,detail:`Embed all chunks with a dense model for semantic search.`},{label:`Build BM25 Index`,icon:`🔑`,detail:`Build a sparse BM25 index over the same corpus for keyword matching.`},{label:`Dual Retrieval`,icon:`⚡`,detail:`Run both dense (vector) and sparse (BM25) retrieval in parallel.`},{label:`Reciprocal Rank Fusion`,icon:`🔀`,detail:`Merge result lists using RRF: score = Σ 1/(k + rank_i) where k=60.`},{label:`Cross-Encoder Rerank`,icon:`🏆`,detail:`Pass top-20 fused results through a cross-encoder to get a final top-5.`},{label:`Generate`,icon:`✨`,detail:`Use reranked top-5 as context for the LLM.`}],code:ir},{id:`semantic-search`,category:`Retrieval`,title:`Semantic Search`,difficulty:`Intermediate`,time:`~20 min`,description:`Retrieves documents based on meaning rather than exact keyword matching.`,tags:[`semantic-search`,`embeddings`,`retrieval`],steps:[{label:`Generate Embeddings`,icon:`🧠`,detail:`Encode documents and queries into semantic vectors.`},{label:`Vector Search`,icon:`🔍`,detail:`Search nearest neighbors in vector space.`},{label:`Retrieve Context`,icon:`📚`,detail:`Collect semantically relevant chunks.`},{label:`Pass to LLM`,icon:`✨`,detail:`Use retrieved context during generation.`}],code:`const results = await vectorStore.similaritySearch(
  query,
  5
);

const context = results
  .map(doc => doc.pageContent)
  .join("\\n");

const answer = await llm.invoke(
  \`Context:
  \${context}

  Question:
  \${query}\`
);`},{id:`metadata-filtering`,category:`Retrieval`,title:`Metadata Filtering`,difficulty:`Advanced`,time:`~20 min`,description:`Restrict retrieval results using metadata such as department, date, author, source, or access level.`,tags:[`metadata`,`filters`,`enterprise-rag`,`retrieval`],concept:$n,steps:[{label:`Attach Metadata`,icon:`🏷️`,detail:`Store metadata with every document chunk.`},{label:`Apply Filters`,icon:`🔒`,detail:`Filter retrieval by attributes.`},{label:`Vector Search`,icon:`🔍`,detail:`Search only within filtered documents.`},{label:`Generate Answer`,icon:`✨`,detail:`Return answers using filtered context.`}],code:Qn},{id:`sparse-retrieval`,category:`Retrieval`,title:`Sparse Retrieval (BM25)`,difficulty:`Beginner`,time:`~20 min`,description:`Retrieves documents using keyword matching and statistical term weighting such as BM25 or TF-IDF.`,tags:[`bm25`,`tfidf`,`keyword`,`retrieval`],concept:er,steps:[{label:`Input Query`,icon:`⌨️`,detail:`User submits a text query.`},{label:`Tokenization`,icon:`✂️`,detail:`Split query into searchable keywords.`},{label:`Keyword Search`,icon:`🔍`,detail:`Search inverted index using BM25 or TF-IDF.`},{label:`Ranking`,icon:`📊`,detail:`Score documents based on keyword relevance.`},{label:`Return Results`,icon:`📄`,detail:`Return the highest-ranked documents.`}],code:tr},{id:`dense-retrieval`,category:`Retrieval`,title:`Dense Retrieval`,difficulty:`Intermediate`,time:`~25 min`,description:`Uses vector embeddings to retrieve semantically similar documents.`,tags:[`embeddings`,`vector`,`semantic`,`retrieval`],concept:nr,steps:[{label:`Input Query`,icon:`⌨️`,detail:`Receive user query.`},{label:`Embedding Generation`,icon:`🧠`,detail:`Convert query into a dense vector.`},{label:`Vector Search`,icon:`📍`,detail:`Search nearest document vectors.`},{label:`Similarity Ranking`,icon:`📊`,detail:`Rank by cosine similarity or dot product.`},{label:`Return Documents`,icon:`📄`,detail:`Provide the most similar documents.`}],code:rr},{id:`multi-query-retrieval`,category:`Retrieval`,title:`Multi-Query Retrieval`,difficulty:`Advanced`,time:`~25 min`,description:`Generate multiple semantically different versions of a user query and retrieve documents for each query. This improves recall and reduces the chance of missing relevant context.`,tags:[`multi-query`,`retrieval`,`query-expansion`,`rag`],steps:[{label:`Generate Query Variations`,icon:`🧠`,detail:`Use an LLM to create multiple reformulations of the user question.`},{label:`Embed Queries`,icon:`🔢`,detail:`Convert each generated query into vector embeddings.`},{label:`Retrieve Documents`,icon:`🔍`,detail:`Perform retrieval independently for each query.`},{label:`Merge Results`,icon:`🔗`,detail:`Combine retrieved documents and remove duplicates.`},{label:`Rank Context`,icon:`📊`,detail:`Sort retrieved documents by relevance score.`},{label:`Generate Response`,icon:`✨`,detail:`Provide the consolidated context to the LLM.`}],code:`import { OpenAI } from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

const openai = new OpenAI();
const pinecone = new Pinecone();
const index = pinecone.index("rag-index");

async function generateQueries(question) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{
      role: "user",
      content: \`
Generate 4 alternative search queries
for the following question:

\${question}
\`
    }]
  });

  return response.choices[0].message.content
    .split("\\n")
    .filter(Boolean);
}

async function retrieve(question) {

  const queries = await generateQueries(question);

  const allResults = [];

  for (const query of queries) {

    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: query,
    });

    const results = await index.query({
      vector: embedding.data[0].embedding,
      topK: 5,
      includeMetadata: true,
    });

    allResults.push(...results.matches);
  }

  const uniqueDocs = [
    ...new Map(
      allResults.map(doc => [doc.id, doc])
    ).values()
  ];

  return uniqueDocs;
}`},{id:`parent-child-retrieval`,category:`Retrieval`,title:`Parent-Child Retrieval`,difficulty:`Advanced`,time:`~30 min`,description:`Store small child chunks for retrieval while returning larger parent documents for richer context and better answer generation.`,tags:[`parent-child`,`retrieval`,`context`,`enterprise-rag`],steps:[{label:`Split Parent Documents`,icon:`📚`,detail:`Break documents into large parent chunks.`},{label:`Create Child Chunks`,icon:`📄`,detail:`Further split parent chunks into smaller retrievable chunks.`},{label:`Generate Embeddings`,icon:`🔢`,detail:`Create embeddings for child chunks.`},{label:`Store Relationships`,icon:`🔗`,detail:`Maintain mapping between child and parent documents.`},{label:`Retrieve Child Chunks`,icon:`🔍`,detail:`Perform retrieval on child chunks.`},{label:`Return Parent Context`,icon:`✨`,detail:`Fetch parent documents before sending to the LLM.`}],code:`const retriever =
  new ParentDocumentRetriever({
    vectorstore,
    docstore,
    childSplitter,
    parentSplitter,
  });

const results =
  await retriever.getRelevantDocuments(
    "Explain transformer architecture"
  );

console.log(results);`},{id:`contextual-compression`,category:`Retrieval`,title:`Contextual Compression Retrieval`,difficulty:`Advanced`,time:`~25 min`,description:`Compress retrieved documents to keep only the information relevant to the user query before sending it to the LLM.`,tags:[`compression`,`retrieval`,`rag`,`cost-optimization`],steps:[{label:`Retrieve Documents`,icon:`🔍`,detail:`Fetch top-K relevant documents.`},{label:`Apply Compression`,icon:`🗜️`,detail:`Extract only query-relevant sentences.`},{label:`Remove Noise`,icon:`✂️`,detail:`Discard unrelated content.`},{label:`Build Context`,icon:`📚`,detail:`Create a compact context window.`},{label:`Generate Answer`,icon:`✨`,detail:`Send compressed context to the LLM.`}],code:`import { ContextualCompressionRetriever }
from "langchain/retrievers/contextual_compression";

const retriever =
  new ContextualCompressionRetriever({
    baseRetriever,
    compressor,
  });

const docs =
  await retriever.invoke(
    "Explain vector databases"
  );`},{id:`self-query-retrieval`,category:`Retrieval`,title:`Self Query Retrieval`,difficulty:`Expert`,time:`~30 min`,description:`Use an LLM to automatically generate metadata filters and retrieval queries.`,tags:[`metadata`,`self-query`,`retrieval`,`enterprise-rag`],steps:[{label:`Analyze Query`,icon:`🧠`,detail:`Understand user intent.`},{label:`Extract Filters`,icon:`🏷️`,detail:`Identify metadata constraints.`},{label:`Build Search Query`,icon:`🔍`,detail:`Generate optimized retrieval query.`},{label:`Apply Filters`,icon:`🔒`,detail:`Limit retrieval scope.`},{label:`Retrieve Documents`,icon:`📚`,detail:`Search matching documents.`},{label:`Generate Answer`,icon:`✨`,detail:`Provide grounded response.`}],code:`const retriever =
  SelfQueryRetriever.fromLLM(
    llm,
    vectorStore,
    metadataInfo
  );

const docs =
  await retriever.invoke(
    "Find finance reports from 2025"
  );`},{id:`recursive-retrieval`,category:`Retrieval`,title:`Recursive Retrieval`,difficulty:`Expert`,time:`~35 min`,description:`Retrieve documents iteratively until sufficient context is collected.`,tags:[`recursive`,`retrieval`,`multi-hop`,`rag`],steps:[{label:`Initial Retrieval`,icon:`🔍`,detail:`Retrieve initial documents.`},{label:`Analyze Context`,icon:`🧠`,detail:`Determine missing information.`},{label:`Generate Follow-up Query`,icon:`❓`,detail:`Create additional retrieval queries.`},{label:`Retrieve Again`,icon:`🔄`,detail:`Search for supporting evidence.`},{label:`Merge Context`,icon:`📚`,detail:`Combine all retrieved information.`},{label:`Generate Answer`,icon:`✨`,detail:`Produce final response.`}],code:`let context = [];

while(needsMoreContext(context)) {

  const docs =
    await retriever.invoke(query);

  context.push(...docs);

  query =
    await generateFollowupQuery(
      context
    );
}`},{id:`knowledge-graph-retrieval`,category:`Retrieval`,title:`Knowledge Graph Retrieval`,difficulty:`Expert`,time:`~45 min`,description:`Retrieve information using entities and relationships stored in a knowledge graph.`,tags:[`graph-rag`,`knowledge-graph`,`neo4j`,`retrieval`],steps:[{label:`Extract Entities`,icon:`🏷️`,detail:`Identify entities from documents.`},{label:`Build Graph`,icon:`🕸️`,detail:`Create relationships between entities.`},{label:`Store Graph`,icon:`🗄️`,detail:`Save in Neo4j or graph database.`},{label:`Traverse Graph`,icon:`🔍`,detail:`Find relevant relationships.`},{label:`Retrieve Context`,icon:`📚`,detail:`Collect graph-connected knowledge.`},{label:`Generate Answer`,icon:`✨`,detail:`Use graph context for generation.`}],code:`MATCH (p:Person)-[:WORKS_FOR]->
(c:Company)

RETURN p,c

LIMIT 10`},{id:`agentic-retrieval`,category:`Retrieval`,title:`Agentic Retrieval`,difficulty:`Expert`,time:`~50 min`,description:`Use multiple AI agents to plan, retrieve, validate, and synthesize information before generating an answer.`,tags:[`agentic-ai`,`retrieval`,`multi-agent`,`rag`],steps:[{label:`Plan Retrieval`,icon:`🧠`,detail:`Planner agent decides strategy.`},{label:`Knowledge Search`,icon:`📚`,detail:`Retriever agent queries vector stores.`},{label:`Web Search`,icon:`🌐`,detail:`Search agent gathers external information.`},{label:`Validate Results`,icon:`✅`,detail:`Critic agent verifies relevance.`},{label:`Merge Evidence`,icon:`🔗`,detail:`Combine validated information.`},{label:`Generate Response`,icon:`✨`,detail:`Final agent produces answer.`}],code:`const workflow = new StateGraph()
  .addNode("planner", plannerAgent)
  .addNode("retriever", retrieverAgent)
  .addNode("critic", criticAgent)
  .addNode("answer", answerAgent)

  .addEdge("planner", "retriever")
  .addEdge("retriever", "critic")
  .addEdge("critic", "answer");

const result =
  await workflow.invoke({
    query: question
  });`},{id:`ensemble-retrieval`,category:`Retrieval`,title:`Ensemble Retrieval`,difficulty:`Expert`,time:`~40 min`,description:`Combine multiple retrievers such as BM25, vector search, and graph search to maximize recall.`,tags:[`ensemble`,`hybrid`,`retrieval`,`enterprise-rag`],steps:[{label:`BM25 Search`,icon:`🔤`,detail:`Perform keyword retrieval.`},{label:`Vector Search`,icon:`🔍`,detail:`Perform semantic retrieval.`},{label:`Graph Search`,icon:`🕸️`,detail:`Retrieve graph relationships.`},{label:`Merge Results`,icon:`🔗`,detail:`Combine retrieved documents.`},{label:`Rerank Results`,icon:`📊`,detail:`Improve ranking quality.`},{label:`Generate Answer`,icon:`✨`,detail:`Pass ranked context to the LLM.`}],code:`const retriever =
  new EnsembleRetriever({
    retrievers: [
      bm25Retriever,
      vectorRetriever
    ],
    weights: [0.5, 0.5]
  });

const docs =
  await retriever.invoke(query);`},{id:`multi-vector-retrieval`,category:`Retrieval`,title:`Multi Vector Retrieval`,difficulty:`Expert`,time:`~35 min`,description:`Store multiple vector representations for the same document such as summaries, questions, and chunks to improve retrieval quality.`,tags:[`multi-vector`,`retrieval`,`rag`,`embeddings`],steps:[{label:`Generate Chunk Embeddings`,icon:`📄`,detail:`Create embeddings for document chunks.`},{label:`Generate Summary Embeddings`,icon:`📝`,detail:`Create embeddings from document summaries.`},{label:`Generate Question Embeddings`,icon:`❓`,detail:`Generate likely user questions.`},{label:`Store All Vectors`,icon:`🗄️`,detail:`Maintain multiple vector representations.`},{label:`Retrieve`,icon:`🔍`,detail:`Search across all representations.`},{label:`Merge Results`,icon:`✨`,detail:`Combine retrieved documents.`}],code:`const retriever =
  new MultiVectorRetriever({
    vectorstore,
    byteStore,
    idKey: "doc_id",
  });

const docs =
  await retriever.invoke(
    "How does GraphRAG work?"
  );`},{id:`hyde`,category:`Query`,title:`HyDE`,difficulty:`Intermediate`,time:`~20 min`,description:`Hypothetical Document Embedding: generate a fake answer first, embed it, then retrieve. Closes the query-document gap.`,tags:[`query expansion`,`embeddings`,`hallucination`],steps:[{label:`Receive Query`,icon:`💬`,detail:`Receive the original user question.`},{label:`Generate Hypothesis`,icon:`🤔`,detail:`Ask the LLM to write a hypothetical document that would answer the question.`},{label:`Embed Hypothesis`,icon:`🔢`,detail:`Embed the hypothetical document (not the original query).`},{label:`Retrieve by Hypothesis`,icon:`🎯`,detail:`Use the hypothesis vector for retrieval — it's semantically richer than a short query.`},{label:`Generate Final Answer`,icon:`✨`,detail:`Feed real retrieved chunks into the LLM to produce the grounded final answer.`}],code:`async function hydeQuery(question, vectorIndex) {
  // Step 1: Generate a hypothetical document
  const hypothesisResponse = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 512,
    messages: [{
      role: "user",
      content: \`Write a detailed paragraph that directly answers: "\${question}".
Be specific and factual. This is a hypothetical document for search.\`,
    }],
  });
  const hypothesis = hypothesisResponse.content[0].text;

  // Step 2: Embed the hypothesis
  const { data } = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: hypothesis,
  });

  // Step 3: Retrieve using hypothesis embedding
  const results = await vectorIndex.query({
    vector: data[0].embedding,
    topK: 5,
    includeMetadata: true,
  });

  const context = results.matches
    .map((m) => m.metadata.text)
    .join("\\n---\\n");

  // Step 4: Generate grounded answer
  const finalResponse = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: \`Context:\\n\${context}\\n\\nQuestion: \${question}\\nProvide a grounded answer using only the context.\`,
    }],
  });

  return finalResponse.content[0].text;
}`},{id:`corrective-rag`,category:`Advanced`,title:`Corrective RAG (CRAG)`,difficulty:`Advanced`,time:`~45 min`,description:`Evaluate retrieved documents for relevance before generation. Fall back to web search if local retrieval is insufficient.`,tags:[`self-correction`,`web search`,`evaluation`],steps:[{label:`Initial Retrieval`,icon:`🔍`,detail:`Retrieve top-K documents from local vector store.`},{label:`Relevance Grading`,icon:`⚖️`,detail:`Use LLM-as-judge to score each chunk: relevant / ambiguous / irrelevant.`},{label:`Branch Decision`,icon:`🔀`,detail:`If all chunks score < threshold → trigger web search. Mixed → use both.`},{label:`Web Search Fallback`,icon:`🌐`,detail:`Run a targeted web search query derived from the original question.`},{label:`Knowledge Refinement`,icon:`✂️`,detail:`Strip irrelevant sentences from ambiguous chunks, keep only relevant sub-passages.`},{label:`Generate`,icon:`✨`,detail:`Generate final answer from curated, high-signal context.`}],code:`async function gradeDocs(question, docs) {
  const grades = await Promise.all(docs.map(async (doc) => {
    const res = await claude.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 50,
      messages: [{
        role: "user",
        content: \`Is this document relevant to answering: "\${question}"?
Document: \${doc.text}
Reply with exactly one word: relevant, ambiguous, or irrelevant.\`,
      }],
    });
    return { doc, grade: res.content[0].text.trim().toLowerCase() };
  }));
  return grades;
}

async function correctiveRag(question, vectorIndex, webSearch) {
  const results = await vectorIndex.query({ vector: await embed(question), topK: 5, includeMetadata: true });
  const docs = results.matches.map((m) => ({ id: m.id, text: m.metadata.text }));

  const graded = await gradeDocs(question, docs);
  const relevant = graded.filter((g) => g.grade === "relevant").map((g) => g.doc);
  const ambiguous = graded.filter((g) => g.grade === "ambiguous").map((g) => g.doc);
  const allIrrelevant = relevant.length === 0;

  let context = relevant.map((d) => d.text);

  // Web search fallback
  if (allIrrelevant || ambiguous.length > 0) {
    const webResults = await webSearch(question);
    context = [...context, ...webResults];
  }

  return generateAnswer(question, context.join("\\n---\\n"));
}`},{id:`rag-fusion`,category:`Query`,title:`RAG Fusion`,difficulty:`Intermediate`,time:`~25 min`,description:`Generate multiple query variations with an LLM, retrieve for each, then fuse results. Handles ambiguous or under-specified queries.`,tags:[`query expansion`,`multi-query`,`fusion`],steps:[{label:`Generate Sub-Queries`,icon:`🧠`,detail:`Ask the LLM to produce 4 semantically different rephrasings of the original query.`},{label:`Parallel Retrieval`,icon:`⚡`,detail:`Run vector search for each sub-query simultaneously via Promise.all.`},{label:`RRF Fusion`,icon:`🔀`,detail:`Merge all per-query result lists using Reciprocal Rank Fusion.`},{label:`Deduplicate`,icon:`🧹`,detail:`Remove duplicate chunks that appeared in multiple per-query results.`},{label:`Generate`,icon:`✨`,detail:`Use the diverse, fused context to answer the original question.`}],code:`async function generateSubQueries(question) {
  const res = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 300,
    messages: [{
      role: "user",
      content: \`Generate 4 different search queries to retrieve relevant documents for:
"\${question}"
Return only a JSON array of strings. No explanation.\`,
    }],
  });
  return JSON.parse(res.content[0].text);
}

async function ragFusion(question, vectorIndex) {
  const subQueries = await generateSubQueries(question);
  const allQueries = [question, ...subQueries];

  // Parallel retrieval for each query variant
  const allResults = await Promise.all(
    allQueries.map(async (q) => {
      const emb = await embed(q);
      const hits = await vectorIndex.query({ vector: emb, topK: 10, includeMetadata: true });
      return hits.matches.map((m) => m.id);
    })
  );

  // RRF fusion across all query results
  const scores = new Map();
  allResults.forEach((ranks) => {
    ranks.forEach((id, i) => {
      scores.set(id, (scores.get(id) || 0) + 1 / (60 + i + 1));
    });
  });

  const topIds = [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id]) => id);

  const context = await fetchByIds(topIds, vectorIndex);
  return generateAnswer(question, context);
}`},{id:`self-rag`,category:`Advanced`,title:`Self-RAG`,difficulty:`Advanced`,time:`~60 min`,description:`The model decides whether to retrieve at all, evaluates retrieved passages, and critiques its own output using special reflection tokens.`,tags:[`agentic`,`self-reflection`,`adaptive`],steps:[{label:`Retrieve? Token`,icon:`❓`,detail:`LLM generates a [Retrieve] vs [No Retrieve] token — retrieval only happens when needed.`},{label:`Conditional Retrieval`,icon:`🔍`,detail:`If [Retrieve]: embed query and fetch top-K passages.`},{label:`ISREL Grading`,icon:`✅`,detail:`For each passage, generate [Relevant] / [Irrelevant] to filter noise.`},{label:`Generate with ISSUP`,icon:`📝`,detail:`Generate answer segment-by-segment; each segment gets [Fully Supported] / [Partial] / [No Support].`},{label:`ISUSE Scoring`,icon:`⭐`,detail:`Rate overall answer utility on a 1–5 scale; re-generate low-scoring segments.`}],code:`// Self-RAG uses special tokens as structured outputs
const TOKENS = {
  RETRIEVE: "[Retrieve]",
  NO_RETRIEVE: "[No Retrieve]",
  RELEVANT: "[Relevant]",
  IRRELEVANT: "[Irrelevant]",
  FULLY_SUPPORTED: "[Fully Supported]",
  PARTIAL: "[Partially Supported]",
  NO_SUPPORT: "[No Support]",
};

async function selfRag(question, vectorIndex) {
  // Step 1: Should we retrieve?
  const retrieveDecision = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 20,
    messages: [{
      role: "user",
      content: \`Do you need to retrieve documents to answer: "\${question}"?
Reply with exactly: [Retrieve] or [No Retrieve]\`,
    }],
  });

  if (retrieveDecision.content[0].text.includes(TOKENS.NO_RETRIEVE)) {
    return generateAnswer(question, "");
  }

  // Step 2: Retrieve and grade relevance
  const docs = await retrieve(question, vectorIndex);
  const gradedDocs = await Promise.all(docs.map(async (doc) => {
    const grade = await claude.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 20,
      messages: [{
        role: "user",
        content: \`Is this relevant to "\${question}"? Doc: \${doc.text}
Reply: [Relevant] or [Irrelevant]\`,
      }],
    });
    return { ...doc, relevant: grade.content[0].text.includes(TOKENS.RELEVANT) };
  }));

  const relevant = gradedDocs.filter((d) => d.relevant);

  // Step 3: Generate with support scoring
  const generations = await Promise.all(relevant.map(async (doc) => {
    const gen = await claude.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 256,
      messages: [{
        role: "user",
        content: \`Context: \${doc.text}\\nQuestion: \${question}\\nAnswer, then rate support as [Fully Supported], [Partially Supported], or [No Support].\`,
      }],
    });
    const text = gen.content[0].text;
    const score = text.includes(TOKENS.FULLY_SUPPORTED) ? 3
      : text.includes(TOKENS.PARTIAL) ? 2 : 1;
    return { text, score };
  }));

  return generations.sort((a, b) => b.score - a.score)[0].text;
}`}],Nf=[`All`,`Foundations`,`Chunking`,`Retrieval`,`Query`,`Advanced`],Pf={Beginner:`#0F6E56`,Intermediate:`#185FA5`,Advanced:`#993C1D`},Ff={Beginner:`#E1F5EE`,Intermediate:`#E6F1FB`,Advanced:`#FAECE7`};function If({steps:e}){let[t,n]=(0,x.useState)(null);return(0,Q.jsxs)(`div`,{style:{marginTop:16},children:[(0,Q.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8,alignItems:`center`},children:e.map((r,i)=>(0,Q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,Q.jsxs)(`button`,{onClick:()=>n(t===i?null:i),style:{display:`flex`,alignItems:`center`,gap:6,padding:`6px 12px`,borderRadius:20,border:t===i?`1.5px solid #185FA5`:`0.5px solid var(--color-border-tertiary)`,background:t===i?`#E6F1FB`:`var(--color-background-primary)`,color:t===i?`#185FA5`:`var(--color-text-primary)`,cursor:`pointer`,fontSize:13,fontWeight:t===i?500:400,transition:`all 0.15s`},children:[(0,Q.jsx)(`span`,{children:r.icon}),(0,Q.jsx)(`span`,{children:r.label})]}),i<e.length-1&&(0,Q.jsx)(`span`,{style:{color:`var(--color-text-tertiary)`,fontSize:12},children:`→`})]},i))}),t!==null&&(0,Q.jsxs)(`div`,{style:{marginTop:10,padding:`10px 14px`,borderRadius:8,background:`var(--color-background-secondary)`,border:`0.5px solid var(--color-border-tertiary)`,fontSize:13,color:`var(--color-text-secondary)`,lineHeight:1.6},children:[(0,Q.jsxs)(`span`,{style:{fontWeight:500,color:`var(--color-text-primary)`},children:[e[t].label,`: `]}),e[t].detail]})]})}function Lf({content:e}){return(0,Q.jsx)(`div`,{className:`prose max-w-none h-[75vh] overflow-y-auto p-6`,children:(0,Q.jsx)(Dl,{remarkPlugins:[jf],children:e})})}function Rf({code:e}){let[t,n]=(0,x.useState)(!1);return(0,Q.jsxs)(`div`,{style:{position:`relative`,marginTop:16},children:[(0,Q.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),1800)},style:{position:`absolute`,top:8,right:8,padding:`4px 10px`,borderRadius:6,border:`0.5px solid var(--color-border-secondary)`,background:`var(--color-background-secondary)`,cursor:`pointer`,fontSize:12,color:`var(--color-text-secondary)`,zIndex:1},children:t?`✓ Copied`:`Copy`}),(0,Q.jsx)(`pre`,{style:{margin:0,padding:`14px 16px`,borderRadius:10,overflowX:`auto`,background:`var(--color-background-secondary)`,border:`0.5px solid var(--color-border-tertiary)`,fontSize:12,lineHeight:1.65,fontFamily:`var(--font-mono)`,color:`var(--color-text-primary)`,whiteSpace:`pre`},children:(0,Q.jsx)(`code`,{children:e})})]})}function zf({recipe:e,onSelect:t,selected:n}){return(0,Q.jsxs)(`div`,{onClick:()=>t(e),style:{padding:`16px 18px`,borderRadius:12,cursor:`pointer`,border:n?`1.5px solid #185FA5`:`0.5px solid var(--color-border-tertiary)`,background:n?`#061320`:`var(--color-background-primary)`,transition:`all 0.15s`},children:[(0,Q.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:6},children:[(0,Q.jsx)(`span`,{style:{fontSize:13,color:`var(--color-text-secondary)`,fontWeight:400},children:e.category}),(0,Q.jsx)(`span`,{style:{fontSize:11,padding:`2px 8px`,borderRadius:20,fontWeight:500,background:Ff[e.difficulty],color:Pf[e.difficulty]},children:e.difficulty})]}),(0,Q.jsx)(`div`,{style:{fontWeight:500,fontSize:15,marginBottom:4,color:`var(--color-text-primary)`},children:e.title}),(0,Q.jsx)(`div`,{style:{fontSize:13,color:`var(--color-text-secondary)`,lineHeight:1.5},children:e.description}),(0,Q.jsx)(`div`,{style:{marginTop:10,display:`flex`,gap:6,flexWrap:`wrap`},children:e.tags.map(e=>(0,Q.jsx)(`span`,{style:{fontSize:11,padding:`2px 8px`,borderRadius:20,background:`var(--color-background-tertiary)`,color:`var(--color-text-secondary)`,border:`0.5px solid var(--color-border-tertiary)`},children:e},e))})]})}function Bf({recipe:e}){let[t,n]=(0,x.useState)(`steps`);return(0,Q.jsxs)(`div`,{style:{padding:`24px`,borderRadius:14,background:`var(--color-background-primary)`,border:`0.5px solid var(--color-border-tertiary)`},children:[(0,Q.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:4},children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{style:{fontSize:12,color:`var(--color-text-tertiary)`},children:e.category}),(0,Q.jsx)(`h2`,{style:{margin:`4px 0 6px`,fontSize:22,fontWeight:500},children:e.title})]}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,paddingTop:4},children:[(0,Q.jsx)(`span`,{style:{fontSize:12,padding:`3px 10px`,borderRadius:20,fontWeight:500,background:Ff[e.difficulty],color:Pf[e.difficulty]},children:e.difficulty}),(0,Q.jsxs)(`span`,{style:{fontSize:12,color:`var(--color-text-tertiary)`},children:[`⏱ `,e.time]})]})]}),(0,Q.jsx)(`p`,{style:{margin:`0 0 20px`,color:`var(--color-text-secondary)`,fontSize:14,lineHeight:1.6},children:e.description}),(0,Q.jsx)(`div`,{style:{display:`flex`,gap:4,marginBottom:18,borderBottom:`0.5px solid var(--color-border-tertiary)`,paddingBottom:0},children:[`steps`,`code`,`concept`].map(e=>(0,Q.jsx)(`button`,{onClick:()=>n(e),style:{padding:`8px 16px`,border:`none`,background:`none`,cursor:`pointer`,fontSize:14,fontWeight:t===e?500:400,color:t===e?`var(--color-text-primary)`:`var(--color-text-secondary)`,borderBottom:t===e?`2px solid #185FA5`:`2px solid transparent`,marginBottom:-1,transition:`all 0.12s`},children:e===`steps`?`Pipeline Steps`:e===`code`?`Code`:`Concept`},e))}),t===`steps`&&(0,Q.jsx)(If,{steps:e.steps}),t===`code`&&(0,Q.jsx)(Rf,{code:e.code}),t===`concept`&&(0,Q.jsx)(Lf,{content:e.concept})]})}function Vf({recipes:e,selected:t,onSelect:n,category:r,setCategory:i,search:a,setSearch:o}){let s=e.filter(e=>{let t=r===`All`||e.category===r,n=e.title.toLowerCase().includes(a.toLowerCase())||e.tags.some(e=>e.toLowerCase().includes(a.toLowerCase()));return t&&n});return(0,Q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:0},children:[(0,Q.jsx)(`div`,{style:{padding:`0 0 16px`},children:(0,Q.jsx)(`input`,{type:`text`,placeholder:`Search recipes…`,value:a,onChange:e=>o(e.target.value),style:{width:`100%`,boxSizing:`border-box`,padding:`8px 12px`,borderRadius:8,border:`0.5px solid var(--color-border-secondary)`,background:`var(--color-background-secondary)`,color:`var(--color-text-primary)`,fontSize:13}})}),(0,Q.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,marginBottom:16},children:Nf.map(e=>(0,Q.jsx)(`button`,{onClick:()=>i(e),style:{padding:`4px 12px`,borderRadius:20,fontSize:12,cursor:`pointer`,border:r===e?`1.5px solid #185FA5`:`0.5px solid var(--color-border-tertiary)`,background:r===e?`#E6F1FB`:`var(--color-background-primary)`,color:r===e?`#185FA5`:`var(--color-text-secondary)`,fontWeight:r===e?500:400},children:e},e))}),(0,Q.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10,overflowY:`auto`,flex:1},children:s.length===0?(0,Q.jsx)(`div`,{style:{color:`var(--color-text-tertiary)`,fontSize:13,padding:`12px 0`},children:`No recipes found.`}):s.map(e=>(0,Q.jsx)(zf,{recipe:e,onSelect:n,selected:t?.id===e.id},e.id))})]})}function Hf(){return(0,Q.jsxs)(`div`,{style:{padding:`20px 32px 16px`,borderBottom:`0.5px solid var(--color-border-tertiary)`,display:`flex`,alignItems:`center`,gap:16},children:[(0,Q.jsx)(`div`,{style:{width:40,height:40,borderRadius:10,background:`#E6F1FB`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:20},children:`📚`}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`h1`,{style:{margin:0,fontSize:20,fontWeight:500,letterSpacing:`-0.3px`},children:`RAG Cookbook`}),(0,Q.jsx)(`p`,{style:{margin:0,fontSize:13,color:`var(--color-text-secondary)`},children:`End-to-end retrieval-augmented generation recipes`})]}),(0,Q.jsx)(`div`,{style:{marginLeft:`auto`,display:`flex`,gap:20},children:[{label:`Recipes`,value:Mf.length},{label:`Patterns`,value:Nf.length-1}].map(({label:e,value:t})=>(0,Q.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,Q.jsx)(`div`,{style:{fontSize:18,fontWeight:500},children:t}),(0,Q.jsx)(`div`,{style:{fontSize:11,color:`var(--color-text-tertiary)`},children:e})]},e))})]})}function Uf(){let[e,t]=(0,x.useState)(Mf[0]),[n,r]=(0,x.useState)(`All`),[i,a]=(0,x.useState)(``);return(0,Q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100vh`,fontFamily:`var(--font-sans, system-ui, sans-serif)`,background:`var(--color-background-tertiary, #0e1643)`,color:`var(--color-text-primary)`},children:[(0,Q.jsx)(Hf,{}),(0,Q.jsxs)(`div`,{style:{display:`flex`,flex:1,overflow:`hidden`},children:[(0,Q.jsx)(`div`,{style:{width:320,minWidth:260,padding:`20px 20px`,borderRight:`0.5px solid var(--color-border-tertiary)`,background:`var(--color-background-primary)`,overflowY:`auto`},children:(0,Q.jsx)(Vf,{recipes:Mf,selected:e,onSelect:t,category:n,setCategory:r,search:i,setSearch:a})}),(0,Q.jsx)(`div`,{style:{flex:1,overflowY:`auto`,padding:`24px 28px`},children:e?(0,Q.jsx)(Bf,{recipe:e}):(0,Q.jsx)(`div`,{style:{color:`var(--color-text-tertiary)`,padding:40,textAlign:`center`},children:`Select a recipe to get started`})})]})]})}var Wf=`/rag-knowledge-tutor/assets/logo-DfeCIHVX.png`;function Gf(){return(0,Q.jsxs)(`nav`,{className:`navbar`,children:[(0,Q.jsxs)(`div`,{className:`logo`,children:[(0,Q.jsx)(`img`,{src:Wf,alt:`IC Logo`,className:`logo-icon`}),(0,Q.jsxs)(An,{to:`/`,className:`logo-text`,children:[(0,Q.jsx)(`span`,{className:`logo-white`,children:`IntelliCatalyst`}),(0,Q.jsx)(`span`,{className:`logo-blue`,children:`AI Labs`})]})]}),(0,Q.jsxs)(`div`,{className:`menu`,children:[(0,Q.jsx)(`a`,{href:`https://pooja-ai.github.io/IntelliCatalyst-Labs/#/`,target:`_blank`,rel:`noopener noreferrer`,children:`Home`}),(0,Q.jsx)(`a`,{href:`https://pooja-ai.github.io/IntelliCatalyst-Labs/#/projects`,target:`_blank`,rel:`noopener noreferrer`,children:`Projects`}),(0,Q.jsx)(`a`,{href:`https://pooja-ai.github.io/IntelliCatalyst-Labs/#/books`,target:`_blank`,rel:`noopener noreferrer`,children:`Books`}),(0,Q.jsx)(`a`,{href:`https://pooja-ai.github.io/IntelliCatalyst-Labs/#/about`,target:`_blank`,rel:`noopener noreferrer`,children:`About`})]})]})}function Kf(){return(0,Q.jsxs)(On,{children:[(0,Q.jsx)(Gf,{}),(0,Q.jsx)(Vt,{children:(0,Q.jsx)(zt,{path:`/`,element:(0,Q.jsx)(Uf,{})})})]})}Jn.createRoot(document.getElementById(`root`)).render((0,Q.jsx)(x.StrictMode,{children:(0,Q.jsx)(Kf,{})}));
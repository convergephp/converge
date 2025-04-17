var Qi=Object.create;var On=Object.defineProperty;var to=Object.getOwnPropertyDescriptor;var eo=Object.getOwnPropertyNames;var no=Object.getPrototypeOf,ro=Object.prototype.hasOwnProperty;var io=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var oo=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of eo(e))!ro.call(t,o)&&o!==n&&On(t,o,{get:()=>e[o],enumerable:!(r=to(e,o))||r.enumerable});return t};var ao=(t,e,n)=>(n=t!=null?Qi(no(t)):{},oo(e||!t||!t.__esModule?On(n,"default",{value:t,enumerable:!0}):n,t));var Vi=io((Jt,Tn)=>{(function(e,n){typeof Jt=="object"&&typeof Tn=="object"?Tn.exports=n():typeof define=="function"&&define.amd?define([],n):typeof Jt=="object"?Jt.ClipboardJS=n():e.ClipboardJS=n()})(Jt,function(){return function(){var t={686:function(r,o,i){"use strict";i.d(o,{default:function(){return Re}});var a=i(279),s=i.n(a),c=i(370),u=i.n(c),l=i(817),d=i.n(l);function p(M){try{return document.execCommand(M)}catch{return!1}}var h=function(T){var v=d()(T);return p("cut"),v},y=h;function C(M){var T=document.documentElement.getAttribute("dir")==="rtl",v=document.createElement("textarea");v.style.fontSize="12pt",v.style.border="0",v.style.padding="0",v.style.margin="0",v.style.position="absolute",v.style[T?"right":"left"]="-9999px";var x=window.pageYOffset||document.documentElement.scrollTop;return v.style.top="".concat(x,"px"),v.setAttribute("readonly",""),v.value=M,v}var _=function(T,v){var x=C(T);v.container.appendChild(x);var S=d()(x);return p("copy"),x.remove(),S},w=function(T){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},x="";return typeof T=="string"?x=_(T,v):T instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(T?.type)?x=_(T.value,v):(x=d()(T),p("copy")),x},O=w;function L(M){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(v){return typeof v}:L=function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},L(M)}var P=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=T.action,x=v===void 0?"copy":v,S=T.container,E=T.target,N=T.text;if(x!=="copy"&&x!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(E!==void 0)if(E&&L(E)==="object"&&E.nodeType===1){if(x==="copy"&&E.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(x==="cut"&&(E.hasAttribute("readonly")||E.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(N)return O(N,{container:S});if(E)return x==="cut"?y(E):O(E,{container:S})},R=P;function m(M){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(v){return typeof v}:m=function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},m(M)}function b(M,T){if(!(M instanceof T))throw new TypeError("Cannot call a class as a function")}function f(M,T){for(var v=0;v<T.length;v++){var x=T[v];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(M,x.key,x)}}function g(M,T,v){return T&&f(M.prototype,T),v&&f(M,v),M}function A(M,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(T&&T.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),T&&k(M,T)}function k(M,T){return k=Object.setPrototypeOf||function(x,S){return x.__proto__=S,x},k(M,T)}function F(M){var T=U();return function(){var x=z(M),S;if(T){var E=z(this).constructor;S=Reflect.construct(x,arguments,E)}else S=x.apply(this,arguments);return j(this,S)}}function j(M,T){return T&&(m(T)==="object"||typeof T=="function")?T:H(M)}function H(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function U(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function z(M){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(v){return v.__proto__||Object.getPrototypeOf(v)},z(M)}function K(M,T){var v="data-clipboard-".concat(M);if(T.hasAttribute(v))return T.getAttribute(v)}var Z=function(M){A(v,M);var T=F(v);function v(x,S){var E;return b(this,v),E=T.call(this),E.resolveOptions(S),E.listenClick(x),E}return g(v,[{key:"resolveOptions",value:function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof S.action=="function"?S.action:this.defaultAction,this.target=typeof S.target=="function"?S.target:this.defaultTarget,this.text=typeof S.text=="function"?S.text:this.defaultText,this.container=m(S.container)==="object"?S.container:document.body}},{key:"listenClick",value:function(S){var E=this;this.listener=u()(S,"click",function(N){return E.onClick(N)})}},{key:"onClick",value:function(S){var E=S.delegateTarget||S.currentTarget,N=this.action(E)||"copy",J=R({action:N,container:this.container,target:this.target(E),text:this.text(E)});this.emit(J?"success":"error",{action:N,text:J,trigger:E,clearSelection:function(){E&&E.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(S){return K("action",S)}},{key:"defaultTarget",value:function(S){var E=K("target",S);if(E)return document.querySelector(E)}},{key:"defaultText",value:function(S){return K("text",S)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(S){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return O(S,E)}},{key:"cut",value:function(S){return y(S)}},{key:"isSupported",value:function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],E=typeof S=="string"?[S]:S,N=!!document.queryCommandSupported;return E.forEach(function(J){N=N&&!!document.queryCommandSupported(J)}),N}}]),v}(s()),Re=Z},828:function(r){var o=9;if(typeof Element<"u"&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}function a(s,c){for(;s&&s.nodeType!==o;){if(typeof s.matches=="function"&&s.matches(c))return s;s=s.parentNode}}r.exports=a},438:function(r,o,i){var a=i(828);function s(l,d,p,h,y){var C=u.apply(this,arguments);return l.addEventListener(p,C,y),{destroy:function(){l.removeEventListener(p,C,y)}}}function c(l,d,p,h,y){return typeof l.addEventListener=="function"?s.apply(null,arguments):typeof p=="function"?s.bind(null,document).apply(null,arguments):(typeof l=="string"&&(l=document.querySelectorAll(l)),Array.prototype.map.call(l,function(C){return s(C,d,p,h,y)}))}function u(l,d,p,h){return function(y){y.delegateTarget=a(y.target,d),y.delegateTarget&&h.call(l,y)}}r.exports=c},879:function(r,o){o.node=function(i){return i!==void 0&&i instanceof HTMLElement&&i.nodeType===1},o.nodeList=function(i){var a=Object.prototype.toString.call(i);return i!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in i&&(i.length===0||o.node(i[0]))},o.string=function(i){return typeof i=="string"||i instanceof String},o.fn=function(i){var a=Object.prototype.toString.call(i);return a==="[object Function]"}},370:function(r,o,i){var a=i(879),s=i(438);function c(p,h,y){if(!p&&!h&&!y)throw new Error("Missing required arguments");if(!a.string(h))throw new TypeError("Second argument must be a String");if(!a.fn(y))throw new TypeError("Third argument must be a Function");if(a.node(p))return u(p,h,y);if(a.nodeList(p))return l(p,h,y);if(a.string(p))return d(p,h,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function u(p,h,y){return p.addEventListener(h,y),{destroy:function(){p.removeEventListener(h,y)}}}function l(p,h,y){return Array.prototype.forEach.call(p,function(C){C.addEventListener(h,y)}),{destroy:function(){Array.prototype.forEach.call(p,function(C){C.removeEventListener(h,y)})}}}function d(p,h,y){return s(document.body,p,h,y)}r.exports=c},817:function(r){function o(i){var a;if(i.nodeName==="SELECT")i.focus(),a=i.value;else if(i.nodeName==="INPUT"||i.nodeName==="TEXTAREA"){var s=i.hasAttribute("readonly");s||i.setAttribute("readonly",""),i.select(),i.setSelectionRange(0,i.value.length),s||i.removeAttribute("readonly"),a=i.value}else{i.hasAttribute("contenteditable")&&i.focus();var c=window.getSelection(),u=document.createRange();u.selectNodeContents(i),c.removeAllRanges(),c.addRange(u),a=c.toString()}return a}r.exports=o},279:function(r){function o(){}o.prototype={on:function(i,a,s){var c=this.e||(this.e={});return(c[i]||(c[i]=[])).push({fn:a,ctx:s}),this},once:function(i,a,s){var c=this;function u(){c.off(i,u),a.apply(s,arguments)}return u._=a,this.on(i,u,s)},emit:function(i){var a=[].slice.call(arguments,1),s=((this.e||(this.e={}))[i]||[]).slice(),c=0,u=s.length;for(c;c<u;c++)s[c].fn.apply(s[c].ctx,a);return this},off:function(i,a){var s=this.e||(this.e={}),c=s[i],u=[];if(c&&a)for(var l=0,d=c.length;l<d;l++)c[l].fn!==a&&c[l].fn._!==a&&u.push(c[l]);return u.length?s[i]=u:delete s[i],this}},r.exports=o,r.exports.TinyEmitter=o}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return function(){n.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(o,{a:o}),o}}(),function(){n.d=function(r,o){for(var i in o)n.o(o,i)&&!n.o(r,i)&&Object.defineProperty(r,i,{enumerable:!0,get:o[i]})}}(),function(){n.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)}}(),n(686)}().default})});var Fe=!1,Ie=!1,vt=[],De=-1;function so(t){co(t)}function co(t){vt.includes(t)||vt.push(t),lo()}function uo(t){let e=vt.indexOf(t);e!==-1&&e>De&&vt.splice(e,1)}function lo(){!Ie&&!Fe&&(Fe=!0,queueMicrotask(fo))}function fo(){Fe=!1,Ie=!0;for(let t=0;t<vt.length;t++)vt[t](),De=t;vt.length=0,De=-1,Ie=!1}var Ot,_t,Rt,qn,$e=!0;function po(t){$e=!1,t(),$e=!0}function ho(t){Ot=t.reactive,Rt=t.release,_t=e=>t.effect(e,{scheduler:n=>{$e?so(n):n()}}),qn=t.raw}function Rn(t){_t=t}function vo(t){let e=()=>{};return[r=>{let o=_t(r);return t._x_effects||(t._x_effects=new Set,t._x_runEffects=()=>{t._x_effects.forEach(i=>i())}),t._x_effects.add(o),e=()=>{o!==void 0&&(t._x_effects.delete(o),Rt(o))},o},()=>{e()}]}function zn(t,e){let n=!0,r,o=_t(()=>{let i=t();JSON.stringify(i),n?r=i:queueMicrotask(()=>{e(i,r),r=i}),n=!1});return()=>Rt(o)}var Vn=[],Wn=[],Un=[];function go(t){Un.push(t)}function Ze(t,e){typeof e=="function"?(t._x_cleanups||(t._x_cleanups=[]),t._x_cleanups.push(e)):(e=t,Wn.push(e))}function Jn(t){Vn.push(t)}function Yn(t,e,n){t._x_attributeCleanups||(t._x_attributeCleanups={}),t._x_attributeCleanups[e]||(t._x_attributeCleanups[e]=[]),t._x_attributeCleanups[e].push(n)}function Gn(t,e){t._x_attributeCleanups&&Object.entries(t._x_attributeCleanups).forEach(([n,r])=>{(e===void 0||e.includes(n))&&(r.forEach(o=>o()),delete t._x_attributeCleanups[n])})}function mo(t){for(t._x_effects?.forEach(uo);t._x_cleanups?.length;)t._x_cleanups.pop()()}var Qe=new MutationObserver(rn),tn=!1;function en(){Qe.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),tn=!0}function Xn(){bo(),Qe.disconnect(),tn=!1}var Ft=[];function bo(){let t=Qe.takeRecords();Ft.push(()=>t.length>0&&rn(t));let e=Ft.length;queueMicrotask(()=>{if(Ft.length===e)for(;Ft.length>0;)Ft.shift()()})}function $(t){if(!tn)return t();Xn();let e=t();return en(),e}var nn=!1,ne=[];function yo(){nn=!0}function _o(){nn=!1,rn(ne),ne=[]}function rn(t){if(nn){ne=ne.concat(t);return}let e=[],n=new Set,r=new Map,o=new Map;for(let i=0;i<t.length;i++)if(!t[i].target._x_ignoreMutationObserver&&(t[i].type==="childList"&&(t[i].removedNodes.forEach(a=>{a.nodeType===1&&a._x_marker&&n.add(a)}),t[i].addedNodes.forEach(a=>{if(a.nodeType===1){if(n.has(a)){n.delete(a);return}a._x_marker||e.push(a)}})),t[i].type==="attributes")){let a=t[i].target,s=t[i].attributeName,c=t[i].oldValue,u=()=>{r.has(a)||r.set(a,[]),r.get(a).push({name:s,value:a.getAttribute(s)})},l=()=>{o.has(a)||o.set(a,[]),o.get(a).push(s)};a.hasAttribute(s)&&c===null?u():a.hasAttribute(s)?(l(),u()):l()}o.forEach((i,a)=>{Gn(a,i)}),r.forEach((i,a)=>{Vn.forEach(s=>s(a,i))});for(let i of n)e.some(a=>a.contains(i))||Wn.forEach(a=>a(i));for(let i of e)i.isConnected&&Un.forEach(a=>a(i));e=null,n=null,r=null,o=null}function Zn(t){return qt(Ct(t))}function Kt(t,e,n){return t._x_dataStack=[e,...Ct(n||t)],()=>{t._x_dataStack=t._x_dataStack.filter(r=>r!==e)}}function Ct(t){return t._x_dataStack?t._x_dataStack:typeof ShadowRoot=="function"&&t instanceof ShadowRoot?Ct(t.host):t.parentNode?Ct(t.parentNode):[]}function qt(t){return new Proxy({objects:t},xo)}var xo={ownKeys({objects:t}){return Array.from(new Set(t.flatMap(e=>Object.keys(e))))},has({objects:t},e){return e==Symbol.unscopables?!1:t.some(n=>Object.prototype.hasOwnProperty.call(n,e)||Reflect.has(n,e))},get({objects:t},e,n){return e=="toJSON"?wo:Reflect.get(t.find(r=>Reflect.has(r,e))||{},e,n)},set({objects:t},e,n,r){let o=t.find(a=>Object.prototype.hasOwnProperty.call(a,e))||t[t.length-1],i=Object.getOwnPropertyDescriptor(o,e);return i?.set&&i?.get?i.set.call(r,n)||!0:Reflect.set(o,e,n)}};function wo(){return Reflect.ownKeys(this).reduce((e,n)=>(e[n]=Reflect.get(this,n),e),{})}function Qn(t){let e=r=>typeof r=="object"&&!Array.isArray(r)&&r!==null,n=(r,o="")=>{Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([i,{value:a,enumerable:s}])=>{if(s===!1||a===void 0||typeof a=="object"&&a!==null&&a.__v_skip)return;let c=o===""?i:`${o}.${i}`;typeof a=="object"&&a!==null&&a._x_interceptor?r[i]=a.initialize(t,c,i):e(a)&&a!==r&&!(a instanceof Element)&&n(a,c)})};return n(t)}function tr(t,e=()=>{}){let n={initialValue:void 0,_x_interceptor:!0,initialize(r,o,i){return t(this.initialValue,()=>So(r,o),a=>je(r,o,a),o,i)}};return e(n),r=>{if(typeof r=="object"&&r!==null&&r._x_interceptor){let o=n.initialize.bind(n);n.initialize=(i,a,s)=>{let c=r.initialize(i,a,s);return n.initialValue=c,o(i,a,s)}}else n.initialValue=r;return n}}function So(t,e){return e.split(".").reduce((n,r)=>n[r],t)}function je(t,e,n){if(typeof e=="string"&&(e=e.split(".")),e.length===1)t[e[0]]=n;else{if(e.length===0)throw error;return t[e[0]]||(t[e[0]]={}),je(t[e[0]],e.slice(1),n)}}var er={};function tt(t,e){er[t]=e}function Be(t,e){let n=Eo(e);return Object.entries(er).forEach(([r,o])=>{Object.defineProperty(t,`$${r}`,{get(){return o(e,n)},enumerable:!1})}),t}function Eo(t){let[e,n]=sr(t),r={interceptor:tr,...e};return Ze(t,n),r}function Ao(t,e,n,...r){try{return n(...r)}catch(o){Ht(o,t,e)}}function Ht(t,e,n=void 0){t=Object.assign(t??{message:"No error message given."},{el:e,expression:n}),console.warn(`Alpine Expression Error: ${t.message}

${n?'Expression: "'+n+`"

// node_modules/alpinejs/dist/module.esm.js
var flushPending = false;
var flushing = false;
var queue = [];
var lastFlushedIndex = -1;
function scheduler(callback) {
  queueJob(callback);
}
function queueJob(job) {
  if (!queue.includes(job))
    queue.push(job);
  queueFlush();
}
function dequeueJob(job) {
  let index = queue.indexOf(job);
  if (index !== -1 && index > lastFlushedIndex)
    queue.splice(index, 1);
}
function queueFlush() {
  if (!flushing && !flushPending) {
    flushPending = true;
    queueMicrotask(flushJobs);
  }
}
function flushJobs() {
  flushPending = false;
  flushing = true;
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
    lastFlushedIndex = i;
  }
  queue.length = 0;
  lastFlushedIndex = -1;
  flushing = false;
}
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
  shouldSchedule = false;
  callback();
  shouldSchedule = true;
}
function setReactivityEngine(engine) {
  reactive = engine.reactive;
  release = engine.release;
  effect = (callback) => engine.effect(callback, { scheduler: (task) => {
    if (shouldSchedule) {
      scheduler(task);
    } else {
      task();
    }
  } });
  raw = engine.raw;
}
function overrideEffect(override) {
  effect = override;
}
function elementBoundEffect(el) {
  let cleanup2 = () => {
  };
  let wrappedEffect = (callback) => {
    let effectReference = effect(callback);
    if (!el._x_effects) {
      el._x_effects = /* @__PURE__ */ new Set();
      el._x_runEffects = () => {
        el._x_effects.forEach((i) => i());
      };
    }
    el._x_effects.add(effectReference);
    cleanup2 = () => {
      if (effectReference === void 0)
        return;
      el._x_effects.delete(effectReference);
      release(effectReference);
    };
    return effectReference;
  };
  return [wrappedEffect, () => {
    cleanup2();
  }];
}
function watch(getter, callback) {
  let firstTime = true;
  let oldValue;
  let effectReference = effect(() => {
    let value = getter();
    JSON.stringify(value);
    if (!firstTime) {
      queueMicrotask(() => {
        callback(value, oldValue);
        oldValue = value;
      });
    } else {
      oldValue = value;
    }
    firstTime = false;
  });
  return () => release(effectReference);
}
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
  onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
  if (typeof callback === "function") {
    if (!el._x_cleanups)
      el._x_cleanups = [];
    el._x_cleanups.push(callback);
  } else {
    callback = el;
    onElRemoveds.push(callback);
  }
}
function onAttributesAdded(callback) {
  onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
  if (!el._x_attributeCleanups)
    el._x_attributeCleanups = {};
  if (!el._x_attributeCleanups[name])
    el._x_attributeCleanups[name] = [];
  el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups)
    return;
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === void 0 || names.includes(name)) {
      value.forEach((i) => i());
      delete el._x_attributeCleanups[name];
    }
  });
}
function cleanupElement(el) {
  el._x_effects?.forEach(dequeueJob);
  while (el._x_cleanups?.length)
    el._x_cleanups.pop()();
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
  observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
  currentlyObserving = true;
}
function stopObservingMutations() {
  flushObserver();
  observer.disconnect();
  currentlyObserving = false;
}
var queuedMutations = [];
function flushObserver() {
  let records = observer.takeRecords();
  queuedMutations.push(() => records.length > 0 && onMutate(records));
  let queueLengthWhenTriggered = queuedMutations.length;
  queueMicrotask(() => {
    if (queuedMutations.length === queueLengthWhenTriggered) {
      while (queuedMutations.length > 0)
        queuedMutations.shift()();
    }
  });
}
function mutateDom(callback) {
  if (!currentlyObserving)
    return callback();
  stopObservingMutations();
  let result = callback();
  startObservingMutations();
  return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
  isCollecting = true;
}
function flushAndStopDeferringMutations() {
  isCollecting = false;
  onMutate(deferredMutations);
  deferredMutations = [];
}
function onMutate(mutations) {
  if (isCollecting) {
    deferredMutations = deferredMutations.concat(mutations);
    return;
  }
  let addedNodes = [];
  let removedNodes = /* @__PURE__ */ new Set();
  let addedAttributes = /* @__PURE__ */ new Map();
  let removedAttributes = /* @__PURE__ */ new Map();
  for (let i = 0; i < mutations.length; i++) {
    if (mutations[i].target._x_ignoreMutationObserver)
      continue;
    if (mutations[i].type === "childList") {
      mutations[i].removedNodes.forEach((node) => {
        if (node.nodeType !== 1)
          return;
        if (!node._x_marker)
          return;
        removedNodes.add(node);
      });
      mutations[i].addedNodes.forEach((node) => {
        if (node.nodeType !== 1)
          return;
        if (removedNodes.has(node)) {
          removedNodes.delete(node);
          return;
        }
        if (node._x_marker)
          return;
        addedNodes.push(node);
      });
    }
    if (mutations[i].type === "attributes") {
      let el = mutations[i].target;
      let name = mutations[i].attributeName;
      let oldValue = mutations[i].oldValue;
      let add2 = () => {
        if (!addedAttributes.has(el))
          addedAttributes.set(el, []);
        addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
      };
      let remove = () => {
        if (!removedAttributes.has(el))
          removedAttributes.set(el, []);
        removedAttributes.get(el).push(name);
      };
      if (el.hasAttribute(name) && oldValue === null) {
        add2();
      } else if (el.hasAttribute(name)) {
        remove();
        add2();
      } else {
        remove();
      }
    }
  }
  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs);
  });
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach((i) => i(el, attrs));
  });
  for (let node of removedNodes) {
    if (addedNodes.some((i) => i.contains(node)))
      continue;
    onElRemoveds.forEach((i) => i(node));
  }
  for (let node of addedNodes) {
    if (!node.isConnected)
      continue;
    onElAddeds.forEach((i) => i(node));
  }
  addedNodes = null;
  removedNodes = null;
  addedAttributes = null;
  removedAttributes = null;
}
function scope(node) {
  return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
  return () => {
    node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
  };
}
function closestDataStack(node) {
  if (node._x_dataStack)
    return node._x_dataStack;
  if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
    return closestDataStack(node.host);
  }
  if (!node.parentNode) {
    return [];
  }
  return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
  return new Proxy({ objects }, mergeProxyTrap);
}
var mergeProxyTrap = {
  ownKeys({ objects }) {
    return Array.from(
      new Set(objects.flatMap((i) => Object.keys(i)))
    );
  },
  has({ objects }, name) {
    if (name == Symbol.unscopables)
      return false;
    return objects.some(
      (obj) => Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name)
    );
  },
  get({ objects }, name, thisProxy) {
    if (name == "toJSON")
      return collapseProxies;
    return Reflect.get(
      objects.find(
        (obj) => Reflect.has(obj, name)
      ) || {},
      name,
      thisProxy
    );
  },
  set({ objects }, name, value, thisProxy) {
    const target = objects.find(
      (obj) => Object.prototype.hasOwnProperty.call(obj, name)
    ) || objects[objects.length - 1];
    const descriptor = Object.getOwnPropertyDescriptor(target, name);
    if (descriptor?.set && descriptor?.get)
      return descriptor.set.call(thisProxy, value) || true;
    return Reflect.set(target, name, value);
  }
};
function collapseProxies() {
  let keys = Reflect.ownKeys(this);
  return keys.reduce((acc, key) => {
    acc[key] = Reflect.get(this, key);
    return acc;
  }, {});
}
function initInterceptors(data2) {
  let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
  let recurse = (obj, basePath = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
      if (enumerable === false || value === void 0)
        return;
      if (typeof value === "object" && value !== null && value.__v_skip)
        return;
      let path = basePath === "" ? key : `${basePath}.${key}`;
      if (typeof value === "object" && value !== null && value._x_interceptor) {
        obj[key] = value.initialize(data2, path, key);
      } else {
        if (isObject2(value) && value !== obj && !(value instanceof Element)) {
          recurse(value, path);
        }
      }
    });
  };
  return recurse(data2);
}
function interceptor(callback, mutateObj = () => {
}) {
  let obj = {
    initialValue: void 0,
    _x_interceptor: true,
    initialize(data2, path, key) {
      return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
    }
  };
  mutateObj(obj);
  return (initialValue) => {
    if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
      let initialize = obj.initialize.bind(obj);
      obj.initialize = (data2, path, key) => {
        let innerValue = initialValue.initialize(data2, path, key);
        obj.initialValue = innerValue;
        return initialize(data2, path, key);
      };
    } else {
      obj.initialValue = initialValue;
    }
    return obj;
  };
}
function get(obj, path) {
  return path.split(".").reduce((carry, segment) => carry[segment], obj);
}
function set(obj, path, value) {
  if (typeof path === "string")
    path = path.split(".");
  if (path.length === 1)
    obj[path[0]] = value;
  else if (path.length === 0)
    throw error;
  else {
    if (obj[path[0]])
      return set(obj[path[0]], path.slice(1), value);
    else {
      obj[path[0]] = {};
      return set(obj[path[0]], path.slice(1), value);
    }
  }
}
var magics = {};
function magic(name, callback) {
  magics[name] = callback;
}
function injectMagics(obj, el) {
  let memoizedUtilities = getUtilities(el);
  Object.entries(magics).forEach(([name, callback]) => {
    Object.defineProperty(obj, `$${name}`, {
      get() {
        return callback(el, memoizedUtilities);
      },
      enumerable: false
    });
  });
  return obj;
}
function getUtilities(el) {
  let [utilities, cleanup2] = getElementBoundUtilities(el);
  let utils = { interceptor, ...utilities };
  onElRemoved(el, cleanup2);
  return utils;
}
function tryCatch(el, expression, callback, ...args) {
  try {
    return callback(...args);
  } catch (e) {
    handleError(e, el, expression);
  }
}
function handleError(error2, el, expression = void 0) {
  error2 = Object.assign(
    error2 ?? { message: "No error message given." },
    { el, expression }
  );
  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
  setTimeout(() => {
    throw error2;
  }, 0);
}
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
  let cache = shouldAutoEvaluateFunctions;
  shouldAutoEvaluateFunctions = false;
  let result = callback();
  shouldAutoEvaluateFunctions = cache;
  return result;
}
function evaluate(el, expression, extras = {}) {
  let result;
  evaluateLater(el, expression)((value) => result = value, extras);
  return result;
}
function evaluateLater(...args) {
  return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
  theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
  let overriddenMagics = {};
  injectMagics(overriddenMagics, el);
  let dataStack = [overriddenMagics, ...closestDataStack(el)];
  let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
  return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
  return (receiver = () => {
  }, { scope: scope2 = {}, params = [] } = {}) => {
    let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
    runIfTypeOfFunction(receiver, result);
  };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
  if (evaluatorMemo[expression]) {
    return evaluatorMemo[expression];
  }
  let AsyncFunction = Object.getPrototypeOf(async function() {
  }).constructor;
  let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
  const safeAsyncFunction = () => {
    try {
      let func2 = new AsyncFunction(
        ["__self", "scope"],
        `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
      );
      Object.defineProperty(func2, "name", {
        value: `[Alpine] ${expression}`
      });
      return func2;
    } catch (error2) {
      handleError(error2, el, expression);
      return Promise.resolve();
    }
  };
  let func = safeAsyncFunction();
  evaluatorMemo[expression] = func;
  return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
  let func = generateFunctionFromString(expression, el);
  return (receiver = () => {
  }, { scope: scope2 = {}, params = [] } = {}) => {
    func.result = void 0;
    func.finished = false;
    let completeScope = mergeProxies([scope2, ...dataStack]);
    if (typeof func === "function") {
      let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
        func.result = void 0;
      } else {
        promise.then((result) => {
          runIfTypeOfFunction(receiver, result, completeScope, params, el);
        }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
      }
    }
  };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
  if (shouldAutoEvaluateFunctions && typeof value === "function") {
    let result = value.apply(scope2, params);
    if (result instanceof Promise) {
      result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
    } else {
      receiver(result);
    }
  } else if (typeof value === "object" && value instanceof Promise) {
    value.then((i) => receiver(i));
  } else {
    receiver(value);
  }
}
var prefixAsString = "x-";
function prefix(subject = "") {
  return prefixAsString + subject;
}
function setPrefix(newPrefix) {
  prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
  directiveHandlers[name] = callback;
  return {
    before(directive2) {
      if (!directiveHandlers[directive2]) {
        console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
        return;
      }
      const pos = directiveOrder.indexOf(directive2);
      directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
    }
  };
}
function directiveExists(name) {
  return Object.keys(directiveHandlers).includes(name);
}
function directives(el, attributes, originalAttributeOverride) {
  attributes = Array.from(attributes);
  if (el._x_virtualDirectives) {
    let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(vAttributes);
    vAttributes = vAttributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    attributes = attributes.concat(vAttributes);
  }
  let transformedAttributeMap = {};
  let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
  return directives2.map((directive2) => {
    return getDirectiveHandler(el, directive2);
  });
}
function attributesOnly(attributes) {
  return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = /* @__PURE__ */ new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
  isDeferringHandlers = true;
  let key = Symbol();
  currentHandlerStackKey = key;
  directiveHandlerStacks.set(key, []);
  let flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length)
      directiveHandlerStacks.get(key).shift()();
    directiveHandlerStacks.delete(key);
  };
  let stopDeferring = () => {
    isDeferringHandlers = false;
    flushHandlers();
  };
  callback(flushHandlers);
  stopDeferring();
}
function getElementBoundUtilities(el) {
  let cleanups = [];
  let cleanup2 = (callback) => cleanups.push(callback);
  let [effect3, cleanupEffect] = elementBoundEffect(el);
  cleanups.push(cleanupEffect);
  let utilities = {
    Alpine: alpine_default,
    effect: effect3,
    cleanup: cleanup2,
    evaluateLater: evaluateLater.bind(evaluateLater, el),
    evaluate: evaluate.bind(evaluate, el)
  };
  let doCleanup = () => cleanups.forEach((i) => i());
  return [utilities, doCleanup];
}
function getDirectiveHandler(el, directive2) {
  let noop = () => {
  };
  let handler4 = directiveHandlers[directive2.type] || noop;
  let [utilities, cleanup2] = getElementBoundUtilities(el);
  onAttributeRemoved(el, directive2.original, cleanup2);
  let fullHandler = () => {
    if (el._x_ignore || el._x_ignoreSelf)
      return;
    handler4.inline && handler4.inline(el, directive2, utilities);
    handler4 = handler4.bind(handler4, el, directive2, utilities);
    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
  };
  fullHandler.runCleanups = cleanup2;
  return fullHandler;
}
var startingWith = (subject, replacement) => ({ name, value }) => {
  if (name.startsWith(subject))
    name = name.replace(subject, replacement);
  return { name, value };
};
var into = (i) => i;
function toTransformedAttributes(callback = () => {
}) {
  return ({ name, value }) => {
    let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
      return transform(carry);
    }, { name, value });
    if (newName !== name)
      callback(newName, name);
    return { name: newName, value: newValue };
  };
}
var attributeTransformers = [];
function mapAttributes(callback) {
  attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name }) {
  return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({ name, value }) => {
    let typeMatch = name.match(alpineAttributeRegex());
    let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map((i) => i.replace(".", "")),
      expression: value,
      original
    };
  };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
  "ignore",
  "ref",
  "data",
  "id",
  "anchor",
  "bind",
  "init",
  "for",
  "model",
  "modelable",
  "transition",
  "show",
  "if",
  DEFAULT,
  "teleport"
];
function byPriority(a, b) {
  let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
  let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
function dispatch(el, name, detail = {}) {
  el.dispatchEvent(
    new CustomEvent(name, {
      detail,
      bubbles: true,
      // Allows events to pass the shadow DOM barrier.
      composed: true,
      cancelable: true
    })
  );
}
function walk(el, callback) {
  if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
    Array.from(el.children).forEach((el2) => walk(el2, callback));
    return;
  }
  let skip = false;
  callback(el, () => skip = true);
  if (skip)
    return;
  let node = el.firstElementChild;
  while (node) {
    walk(node, callback, false);
    node = node.nextElementSibling;
  }
}
function warn(message, ...args) {
  console.warn(`Alpine Warning: ${message}`, ...args);
}
var started = false;
function start() {
  if (started)
    warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
  started = true;
  if (!document.body)
    warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
  dispatch(document, "alpine:init");
  dispatch(document, "alpine:initializing");
  startObservingMutations();
  onElAdded((el) => initTree(el, walk));
  onElRemoved((el) => destroyTree(el));
  onAttributesAdded((el, attrs) => {
    directives(el, attrs).forEach((handle) => handle());
  });
  let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
  Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
    initTree(el);
  });
  dispatch(document, "alpine:initialized");
  setTimeout(() => {
    warnAboutMissingPlugins();
  });
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
  return rootSelectorCallbacks.map((fn) => fn());
}
function allSelectors() {
  return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
}
function addRootSelector(selectorCallback) {
  rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
  initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
  return findClosest(el, (element) => {
    const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
    if (selectors.some((selector) => element.matches(selector)))
      return true;
  });
}
function findClosest(el, callback) {
  if (!el)
    return;
  if (callback(el))
    return el;
  if (el._x_teleportBack)
    el = el._x_teleportBack;
  if (!el.parentElement)
    return;
  return findClosest(el.parentElement, callback);
}
function isRoot(el) {
  return rootSelectors().some((selector) => el.matches(selector));
}
var initInterceptors2 = [];
function interceptInit(callback) {
  initInterceptors2.push(callback);
}
var markerDispenser = 1;
function initTree(el, walker = walk, intercept = () => {
}) {
  if (findClosest(el, (i) => i._x_ignore))
    return;
  deferHandlingDirectives(() => {
    walker(el, (el2, skip) => {
      if (el2._x_marker)
        return;
      intercept(el2, skip);
      initInterceptors2.forEach((i) => i(el2, skip));
      directives(el2, el2.attributes).forEach((handle) => handle());
      if (!el2._x_ignore)
        el2._x_marker = markerDispenser++;
      el2._x_ignore && skip();
    });
  });
}
function destroyTree(root, walker = walk) {
  walker(root, (el) => {
    cleanupElement(el);
    cleanupAttributes(el);
    delete el._x_marker;
  });
}
function warnAboutMissingPlugins() {
  let pluginDirectives = [
    ["ui", "dialog", ["[x-dialog], [x-popover]"]],
    ["anchor", "anchor", ["[x-anchor]"]],
    ["sort", "sort", ["[x-sort]"]]
  ];
  pluginDirectives.forEach(([plugin2, directive2, selectors]) => {
    if (directiveExists(directive2))
      return;
    selectors.some((selector) => {
      if (document.querySelector(selector)) {
        warn(`found "${selector}", but missing ${plugin2} plugin`);
        return true;
      }
    });
  });
}
var tickStack = [];
var isHolding = false;
function nextTick(callback = () => {
}) {
  queueMicrotask(() => {
    isHolding || setTimeout(() => {
      releaseNextTicks();
    });
  });
  return new Promise((res) => {
    tickStack.push(() => {
      callback();
      res();
    });
  });
}
function releaseNextTicks() {
  isHolding = false;
  while (tickStack.length)
    tickStack.shift()();
}
function holdNextTicks() {
  isHolding = true;
}
function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(" "));
  } else if (typeof value === "object" && value !== null) {
    return setClassesFromObject(el, value);
  } else if (typeof value === "function") {
    return setClasses(el, value());
  }
  return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
  let split = (classString2) => classString2.split(" ").filter(Boolean);
  let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
  let addClassesAndReturnUndo = (classes) => {
    el.classList.add(...classes);
    return () => {
      el.classList.remove(...classes);
    };
  };
  classString = classString === true ? classString = "" : classString || "";
  return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
  let split = (classString) => classString.split(" ").filter(Boolean);
  let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
  let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
  let added = [];
  let removed = [];
  forRemove.forEach((i) => {
    if (el.classList.contains(i)) {
      el.classList.remove(i);
      removed.push(i);
    }
  });
  forAdd.forEach((i) => {
    if (!el.classList.contains(i)) {
      el.classList.add(i);
      added.push(i);
    }
  });
  return () => {
    removed.forEach((i) => el.classList.add(i));
    added.forEach((i) => el.classList.remove(i));
  };
}
function setStyles(el, value) {
  if (typeof value === "object" && value !== null) {
    return setStylesFromObject(el, value);
  }
  return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
  let previousStyles = {};
  Object.entries(value).forEach(([key, value2]) => {
    previousStyles[key] = el.style[key];
    if (!key.startsWith("--")) {
      key = kebabCase(key);
    }
    el.style.setProperty(key, value2);
  });
  setTimeout(() => {
    if (el.style.length === 0) {
      el.removeAttribute("style");
    }
  });
  return () => {
    setStyles(el, previousStyles);
  };
}
function setStylesFromString(el, value) {
  let cache = el.getAttribute("style", value);
  el.setAttribute("style", value);
  return () => {
    el.setAttribute("style", cache || "");
  };
}
function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function once(callback, fallback = () => {
}) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      callback.apply(this, arguments);
    } else {
      fallback.apply(this, arguments);
    }
  };
}
directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate22 }) => {
  if (typeof expression === "function")
    expression = evaluate22(expression);
  if (expression === false)
    return;
  if (!expression || typeof expression === "boolean") {
    registerTransitionsFromHelper(el, modifiers, value);
  } else {
    registerTransitionsFromClassString(el, expression, value);
  }
});
function registerTransitionsFromClassString(el, classString, stage) {
  registerTransitionObject(el, setClasses, "");
  let directiveStorageMap = {
    "enter": (classes) => {
      el._x_transition.enter.during = classes;
    },
    "enter-start": (classes) => {
      el._x_transition.enter.start = classes;
    },
    "enter-end": (classes) => {
      el._x_transition.enter.end = classes;
    },
    "leave": (classes) => {
      el._x_transition.leave.during = classes;
    },
    "leave-start": (classes) => {
      el._x_transition.leave.start = classes;
    },
    "leave-end": (classes) => {
      el._x_transition.leave.end = classes;
    }
  };
  directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
  registerTransitionObject(el, setStyles);
  let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
  let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
  let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
  if (modifiers.includes("in") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
  }
  if (modifiers.includes("out") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
  }
  let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
  let wantsOpacity = wantsAll || modifiers.includes("opacity");
  let wantsScale = wantsAll || modifiers.includes("scale");
  let opacityValue = wantsOpacity ? 0 : 1;
  let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
  let delay3 = modifierValue(modifiers, "delay", 0) / 1e3;
  let origin = modifierValue(modifiers, "origin", "center");
  let property = "opacity, transform";
  let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
  let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
  let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
  if (transitioningIn) {
    el._x_transition.enter.during = {
      transformOrigin: origin,
      transitionDelay: `${delay3}s`,
      transitionProperty: property,
      transitionDuration: `${durationIn}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.enter.start = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
    el._x_transition.enter.end = {
      opacity: 1,
      transform: `scale(1)`
    };
  }
  if (transitioningOut) {
    el._x_transition.leave.during = {
      transformOrigin: origin,
      transitionDelay: `${delay3}s`,
      transitionProperty: property,
      transitionDuration: `${durationOut}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.leave.start = {
      opacity: 1,
      transform: `scale(1)`
    };
    el._x_transition.leave.end = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
  }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
  if (!el._x_transition)
    el._x_transition = {
      enter: { during: defaultValue, start: defaultValue, end: defaultValue },
      leave: { during: defaultValue, start: defaultValue, end: defaultValue },
      in(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end
        }, before, after);
      },
      out(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end
        }, before, after);
      }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
  const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let clickAwayCompatibleShow = () => nextTick2(show);
  if (value) {
    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
    } else {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
    }
    return;
  }
  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
    el._x_transition.out(() => {
    }, () => resolve(hide));
    el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
  }) : Promise.resolve(hide);
  queueMicrotask(() => {
    let closest = closestHide(el);
    if (closest) {
      if (!closest._x_hideChildren)
        closest._x_hideChildren = [];
      closest._x_hideChildren.push(el);
    } else {
      nextTick2(() => {
        let hideAfterChildren = (el2) => {
          let carry = Promise.all([
            el2._x_hidePromise,
            ...(el2._x_hideChildren || []).map(hideAfterChildren)
          ]).then(([i]) => i?.());
          delete el2._x_hidePromise;
          delete el2._x_hideChildren;
          return carry;
        };
        hideAfterChildren(el).catch((e) => {
          if (!e.isFromCancelledTransition)
            throw e;
        });
      });
    }
  });
};
function closestHide(el) {
  let parent = el.parentNode;
  if (!parent)
    return;
  return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
}, after = () => {
}) {
  if (el._x_transitioning)
    el._x_transitioning.cancel();
  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
    before();
    after();
    return;
  }
  let undoStart, undoDuring, undoEnd;
  performTransition(el, {
    start() {
      undoStart = setFunction(el, start2);
    },
    during() {
      undoDuring = setFunction(el, during);
    },
    before,
    end() {
      undoStart();
      undoEnd = setFunction(el, end);
    },
    after,
    cleanup() {
      undoDuring();
      undoEnd();
    }
  });
}
function performTransition(el, stages) {
  let interrupted, reachedBefore, reachedEnd;
  let finish = once(() => {
    mutateDom(() => {
      interrupted = true;
      if (!reachedBefore)
        stages.before();
      if (!reachedEnd) {
        stages.end();
        releaseNextTicks();
      }
      stages.after();
      if (el.isConnected)
        stages.cleanup();
      delete el._x_transitioning;
    });
  });
  el._x_transitioning = {
    beforeCancels: [],
    beforeCancel(callback) {
      this.beforeCancels.push(callback);
    },
    cancel: once(function() {
      while (this.beforeCancels.length) {
        this.beforeCancels.shift()();
      }
      ;
      finish();
    }),
    finish
  };
  mutateDom(() => {
    stages.start();
    stages.during();
  });
  holdNextTicks();
  requestAnimationFrame(() => {
    if (interrupted)
      return;
    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
    let delay3 = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    if (duration === 0)
      duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
    mutateDom(() => {
      stages.before();
    });
    reachedBefore = true;
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      mutateDom(() => {
        stages.end();
      });
      releaseNextTicks();
      setTimeout(el._x_transitioning.finish, duration + delay3);
      reachedEnd = true;
    });
  });
}
function modifierValue(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1)
    return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue)
    return fallback;
  if (key === "scale") {
    if (isNaN(rawValue))
      return fallback;
  }
  if (key === "duration" || key === "delay") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match)
      return match[1];
  }
  if (key === "origin") {
    if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
    }
  }
  return rawValue;
}
var isCloning = false;
function skipDuringClone(callback, fallback = () => {
}) {
  return (...args) => isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
  return (...args) => isCloning && callback(...args);
}
var interceptors = [];
function interceptClone(callback) {
  interceptors.push(callback);
}
function cloneNode(from, to) {
  interceptors.forEach((i) => i(from, to));
  isCloning = true;
  dontRegisterReactiveSideEffects(() => {
    initTree(to, (el, callback) => {
      callback(el, () => {
      });
    });
  });
  isCloning = false;
}
var isCloningLegacy = false;
function clone(oldEl, newEl) {
  if (!newEl._x_dataStack)
    newEl._x_dataStack = oldEl._x_dataStack;
  isCloning = true;
  isCloningLegacy = true;
  dontRegisterReactiveSideEffects(() => {
    cloneTree(newEl);
  });
  isCloning = false;
  isCloningLegacy = false;
}
function cloneTree(el) {
  let hasRunThroughFirstEl = false;
  let shallowWalker = (el2, callback) => {
    walk(el2, (el3, skip) => {
      if (hasRunThroughFirstEl && isRoot(el3))
        return skip();
      hasRunThroughFirstEl = true;
      callback(el3, skip);
    });
  };
  initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
  let cache = effect;
  overrideEffect((callback2, el) => {
    let storedEffect = cache(callback2);
    release(storedEffect);
    return () => {
    };
  });
  callback();
  overrideEffect(cache);
}
function bind(el, name, value, modifiers = []) {
  if (!el._x_bindings)
    el._x_bindings = reactive({});
  el._x_bindings[name] = value;
  name = modifiers.includes("camel") ? camelCase(name) : name;
  switch (name) {
    case "value":
      bindInputValue(el, value);
      break;
    case "style":
      bindStyles(el, value);
      break;
    case "class":
      bindClasses(el, value);
      break;
    case "selected":
    case "checked":
      bindAttributeAndProperty(el, name, value);
      break;
    default:
      bindAttribute(el, name, value);
      break;
  }
}
function bindInputValue(el, value) {
  if (isRadio(el)) {
    if (el.attributes.value === void 0) {
      el.value = value;
    }
    if (window.fromModel) {
      if (typeof value === "boolean") {
        el.checked = safeParseBoolean(el.value) === value;
      } else {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    }
  } else if (isCheckbox(el)) {
    if (Number.isInteger(value)) {
      el.value = value;
    } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
      el.value = String(value);
    } else {
      if (Array.isArray(value)) {
        el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
      } else {
        el.checked = !!value;
      }
    }
  } else if (el.tagName === "SELECT") {
    updateSelect(el, value);
  } else {
    if (el.value === value)
      return;
    el.value = value === void 0 ? "" : value;
  }
}
function bindClasses(el, value) {
  if (el._x_undoAddedClasses)
    el._x_undoAddedClasses();
  el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
  if (el._x_undoAddedStyles)
    el._x_undoAddedStyles();
  el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttributeAndProperty(el, name, value) {
  bindAttribute(el, name, value);
  setPropertyIfChanged(el, name, value);
}
function bindAttribute(el, name, value) {
  if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name);
  } else {
    if (isBooleanAttr(name))
      value = name;
    setIfChanged(el, name, value);
  }
}
function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value);
  }
}
function setPropertyIfChanged(el, propName, value) {
  if (el[propName] !== value) {
    el[propName] = value;
  }
}
function updateSelect(el, value) {
  const arrayWrappedValue = [].concat(value).map((value2) => {
    return value2 + "";
  });
  Array.from(el.options).forEach((option) => {
    option.selected = arrayWrappedValue.includes(option.value);
  });
}
function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
  return valueA == valueB;
}
function safeParseBoolean(rawValue) {
  if ([1, "1", "true", "on", "yes", true].includes(rawValue)) {
    return true;
  }
  if ([0, "0", "false", "off", "no", false].includes(rawValue)) {
    return false;
  }
  return rawValue ? Boolean(rawValue) : null;
}
var booleanAttributes = /* @__PURE__ */ new Set([
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected",
  "shadowrootclonable",
  "shadowrootdelegatesfocus",
  "shadowrootserializable"
]);
function isBooleanAttr(attrName) {
  return booleanAttributes.has(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
}
function getBinding(el, name, fallback) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  return getAttributeBinding(el, name, fallback);
}
function extractProp(el, name, fallback, extract = true) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
    let binding = el._x_inlineBindings[name];
    binding.extract = extract;
    return dontAutoEvaluateFunctions(() => {
      return evaluate(el, binding.expression);
    });
  }
  return getAttributeBinding(el, name, fallback);
}
function getAttributeBinding(el, name, fallback) {
  let attr = el.getAttribute(name);
  if (attr === null)
    return typeof fallback === "function" ? fallback() : fallback;
  if (attr === "")
    return true;
  if (isBooleanAttr(name)) {
    return !![name, "true"].includes(attr);
  }
  return attr;
}
function isCheckbox(el) {
  return el.type === "checkbox" || el.localName === "ui-checkbox" || el.localName === "ui-switch";
}
function isRadio(el) {
  return el.type === "radio" || el.localName === "ui-radio";
}
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
function throttle(func, limit) {
  let inThrottle;
  return function() {
    let context = this, args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
  let firstRun = true;
  let outerHash;
  let innerHash;
  let reference = effect(() => {
    let outer = outerGet();
    let inner = innerGet();
    if (firstRun) {
      innerSet(cloneIfObject(outer));
      firstRun = false;
    } else {
      let outerHashLatest = JSON.stringify(outer);
      let innerHashLatest = JSON.stringify(inner);
      if (outerHashLatest !== outerHash) {
        innerSet(cloneIfObject(outer));
      } else if (outerHashLatest !== innerHashLatest) {
        outerSet(cloneIfObject(inner));
      } else {
      }
    }
    outerHash = JSON.stringify(outerGet());
    innerHash = JSON.stringify(innerGet());
  });
  return () => {
    release(reference);
  };
}
function cloneIfObject(value) {
  return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}
function plugin(callback) {
  let callbacks = Array.isArray(callback) ? callback : [callback];
  callbacks.forEach((i) => i(alpine_default));
}
var stores = {};
var isReactive = false;
function store(name, value) {
  if (!isReactive) {
    stores = reactive(stores);
    isReactive = true;
  }
  if (value === void 0) {
    return stores[name];
  }
  stores[name] = value;
  initInterceptors(stores[name]);
  if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
    stores[name].init();
  }
}
function getStores() {
  return stores;
}
var binds = {};
function bind2(name, bindings) {
  let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
  if (name instanceof Element) {
    return applyBindingsObject(name, getBindings());
  } else {
    binds[name] = getBindings;
  }
  return () => {
  };
}
function injectBindingProviders(obj) {
  Object.entries(binds).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback(...args);
        };
      }
    });
  });
  return obj;
}
function applyBindingsObject(el, obj, original) {
  let cleanupRunners = [];
  while (cleanupRunners.length)
    cleanupRunners.pop()();
  let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
  let staticAttributes = attributesOnly(attributes);
  attributes = attributes.map((attribute) => {
    if (staticAttributes.find((attr) => attr.name === attribute.name)) {
      return {
        name: `x-bind:${attribute.name}`,
        value: `"${attribute.value}"`
      };
    }
    return attribute;
  });
  directives(el, attributes, original).map((handle) => {
    cleanupRunners.push(handle.runCleanups);
    handle();
  });
  return () => {
    while (cleanupRunners.length)
      cleanupRunners.pop()();
  };
}
var datas = {};
function data(name, callback) {
  datas[name] = callback;
}
function injectDataProviders(obj, context) {
  Object.entries(datas).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback.bind(context)(...args);
        };
      },
      enumerable: false
    });
  });
  return obj;
}
var Alpine = {
  get reactive() {
    return reactive;
  },
  get release() {
    return release;
  },
  get effect() {
    return effect;
  },
  get raw() {
    return raw;
  },
  version: "3.14.8",
  flushAndStopDeferringMutations,
  dontAutoEvaluateFunctions,
  disableEffectScheduling,
  startObservingMutations,
  stopObservingMutations,
  setReactivityEngine,
  onAttributeRemoved,
  onAttributesAdded,
  closestDataStack,
  skipDuringClone,
  onlyDuringClone,
  addRootSelector,
  addInitSelector,
  interceptClone,
  addScopeToNode,
  deferMutations,
  mapAttributes,
  evaluateLater,
  interceptInit,
  setEvaluator,
  mergeProxies,
  extractProp,
  findClosest,
  onElRemoved,
  closestRoot,
  destroyTree,
  interceptor,
  // INTERNAL: not public API and is subject to change without major release.
  transition,
  // INTERNAL
  setStyles,
  // INTERNAL
  mutateDom,
  directive,
  entangle,
  throttle,
  debounce,
  evaluate,
  initTree,
  nextTick,
  prefixed: prefix,
  prefix: setPrefix,
  plugin,
  magic,
  store,
  start,
  clone,
  // INTERNAL
  cloneNode,
  // INTERNAL
  bound: getBinding,
  $data: scope,
  watch,
  walk,
  data,
  bind: bind2
};
var alpine_default = Alpine;
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
var EMPTY_OBJ = true ? Object.freeze({}) : {};
var EMPTY_ARR = true ? Object.freeze([]) : [];
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isString = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
var targetMap = /* @__PURE__ */ new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol(true ? "iterate" : "");
var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
function isEffect(fn) {
  return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
  if (isEffect(fn)) {
    fn = fn.raw;
  }
  const effect3 = createReactiveEffect(fn, options);
  if (!options.lazy) {
    effect3();
  }
  return effect3;
}
function stop(effect3) {
  if (effect3.active) {
    cleanup(effect3);
    if (effect3.options.onStop) {
      effect3.options.onStop();
    }
    effect3.active = false;
  }
}
var uid = 0;
function createReactiveEffect(fn, options) {
  const effect3 = function reactiveEffect() {
    if (!effect3.active) {
      return fn();
    }
    if (!effectStack.includes(effect3)) {
      cleanup(effect3);
      try {
        enableTracking();
        effectStack.push(effect3);
        activeEffect = effect3;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };
  effect3.id = uid++;
  effect3.allowRecurse = !!options.allowRecurse;
  effect3._isEffect = true;
  effect3.active = true;
  effect3.raw = fn;
  effect3.deps = [];
  effect3.options = options;
  return effect3;
}
function cleanup(effect3) {
  const { deps } = effect3;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect3);
    }
    deps.length = 0;
  }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (!shouldTrack || activeEffect === void 0) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = /* @__PURE__ */ new Set());
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.options.onTrack) {
      activeEffect.options.onTrack({
        effect: activeEffect,
        target,
        type,
        key
      });
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  const effects = /* @__PURE__ */ new Set();
  const add2 = (effectsToAdd) => {
    if (effectsToAdd) {
      effectsToAdd.forEach((effect3) => {
        if (effect3 !== activeEffect || effect3.allowRecurse) {
          effects.add(effect3);
        }
      });
    }
  };
  if (type === "clear") {
    depsMap.forEach(add2);
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        add2(dep);
      }
    });
  } else {
    if (key !== void 0) {
      add2(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          add2(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          add2(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const run = (effect3) => {
    if (effect3.options.onTrigger) {
      effect3.options.onTrigger({
        effect: effect3,
        target,
        key,
        type,
        newValue,
        oldValue,
        oldTarget
      });
    }
    if (effect3.options.scheduler) {
      effect3.options.scheduler(effect3);
    } else {
      effect3();
    }
  };
  effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var readonlyGet = /* @__PURE__ */ createGetter(true);
var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
  return function get3(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject(res)) {
      return isReadonly ? readonly(res) : reactive2(res);
    }
    return res;
  };
}
var set2 = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
  return function set3(target, key, value, receiver) {
    let oldValue = target[key];
    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
var mutableHandlers = {
  get: get2,
  set: set2,
  deleteProperty,
  has,
  ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    if (true) {
      console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    if (true) {
      console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
var toReactive = (value) => isObject(value) ? reactive2(value) : value;
var toReadonly = (value) => isObject(value) ? readonly(value) : value;
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
  target = target[
    "__v_raw"
    /* RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get", key);
  }
  !isReadonly && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly = false) {
  const target = this[
    "__v_raw"
    /* RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has", key);
  }
  !isReadonly && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
  target = target[
    "__v_raw"
    /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3 ? get3.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly, isShallow) {
  return function(...args) {
    const target = this[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (true) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod(
      "add"
      /* ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod(
      "add"
      /* ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
  const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
var mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value[
    "__v_skip"
    /* SKIP */
  ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
  if (target && target[
    "__v_isReadonly"
    /* IS_READONLY */
  ]) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (true) {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target[
    "__v_raw"
    /* RAW */
  ] && !(isReadonly && target[
    "__v_isReactive"
    /* IS_REACTIVE */
  ])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function toRaw(observed) {
  return observed && toRaw(observed[
    "__v_raw"
    /* RAW */
  ]) || observed;
}
function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}
magic("nextTick", () => nextTick);
magic("dispatch", (el) => dispatch.bind(dispatch, el));
magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => (key, callback) => {
  let evaluate22 = evaluateLater2(key);
  let getter = () => {
    let value;
    evaluate22((i) => value = i);
    return value;
  };
  let unwatch = watch(getter, callback);
  cleanup2(unwatch);
});
magic("store", getStores);
magic("data", (el) => scope(el));
magic("root", (el) => closestRoot(el));
magic("refs", (el) => {
  if (el._x_refs_proxy)
    return el._x_refs_proxy;
  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
  return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
  let refObjects = [];
  findClosest(el, (i) => {
    if (i._x_refs)
      refObjects.push(i._x_refs);
  });
  return refObjects;
}
var globalIdMemo = {};
function findAndIncrementId(name) {
  if (!globalIdMemo[name])
    globalIdMemo[name] = 0;
  return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
  return findClosest(el, (element) => {
    if (element._x_ids && element._x_ids[name])
      return true;
  });
}
function setIdRoot(el, name) {
  if (!el._x_ids)
    el._x_ids = {};
  if (!el._x_ids[name])
    el._x_ids[name] = findAndIncrementId(name);
}
magic("id", (el, { cleanup: cleanup2 }) => (name, key = null) => {
  let cacheKey = `${name}${key ? `-${key}` : ""}`;
  return cacheIdByNameOnElement(el, cacheKey, cleanup2, () => {
    let root = closestIdRoot(el, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
});
interceptClone((from, to) => {
  if (from._x_id) {
    to._x_id = from._x_id;
  }
});
function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback) {
  if (!el._x_id)
    el._x_id = {};
  if (el._x_id[cacheKey])
    return el._x_id[cacheKey];
  let output = callback();
  el._x_id[cacheKey] = output;
  cleanup2(() => {
    delete el._x_id[cacheKey];
  });
  return output;
}
magic("el", (el) => el);
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
  magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
  let func = evaluateLater2(expression);
  let innerGet = () => {
    let result;
    func((i) => result = i);
    return result;
  };
  let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
  let innerSet = (val) => evaluateInnerSet(() => {
  }, { scope: { "__placeholder": val } });
  let initialValue = innerGet();
  innerSet(initialValue);
  queueMicrotask(() => {
    if (!el._x_model)
      return;
    el._x_removeModelListeners["default"]();
    let outerGet = el._x_model.get;
    let outerSet = el._x_model.set;
    let releaseEntanglement = entangle(
      {
        get() {
          return outerGet();
        },
        set(value) {
          outerSet(value);
        }
      },
      {
        get() {
          return innerGet();
        },
        set(value) {
          innerSet(value);
        }
      }
    );
    cleanup2(releaseEntanglement);
  });
});
directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-teleport can only be used on a <template> tag", el);
  let target = getTarget(expression);
  let clone2 = el.content.cloneNode(true).firstElementChild;
  el._x_teleport = clone2;
  clone2._x_teleportBack = el;
  el.setAttribute("data-teleport-template", true);
  clone2.setAttribute("data-teleport-target", true);
  if (el._x_forwardEvents) {
    el._x_forwardEvents.forEach((eventName) => {
      clone2.addEventListener(eventName, (e) => {
        e.stopPropagation();
        el.dispatchEvent(new e.constructor(e.type, e));
      });
    });
  }
  addScopeToNode(clone2, {}, el);
  let placeInDom = (clone3, target2, modifiers2) => {
    if (modifiers2.includes("prepend")) {
      target2.parentNode.insertBefore(clone3, target2);
    } else if (modifiers2.includes("append")) {
      target2.parentNode.insertBefore(clone3, target2.nextSibling);
    } else {
      target2.appendChild(clone3);
    }
  };
  mutateDom(() => {
    placeInDom(clone2, target, modifiers);
    skipDuringClone(() => {
      initTree(clone2);
    })();
  });
  el._x_teleportPutBack = () => {
    let target2 = getTarget(expression);
    mutateDom(() => {
      placeInDom(el._x_teleport, target2, modifiers);
    });
  };
  cleanup2(
    () => mutateDom(() => {
      clone2.remove();
      destroyTree(clone2);
    })
  );
});
var teleportContainerDuringClone = document.createElement("div");
function getTarget(expression) {
  let target = skipDuringClone(() => {
    return document.querySelector(expression);
  }, () => {
    return teleportContainerDuringClone;
  })();
  if (!target)
    warn(`Cannot find x-teleport element for selector: "${expression}"`);
  return target;
}
var handler = () => {
};
handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
  modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
  cleanup2(() => {
    modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
  });
};
directive("ignore", handler);
directive("effect", skipDuringClone((el, { expression }, { effect: effect3 }) => {
  effect3(evaluateLater(el, expression));
}));
function on(el, event, modifiers, callback) {
  let listenerTarget = el;
  let handler4 = (e) => callback(e);
  let options = {};
  let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
  if (modifiers.includes("dot"))
    event = dotSyntax(event);
  if (modifiers.includes("camel"))
    event = camelCase2(event);
  if (modifiers.includes("passive"))
    options.passive = true;
  if (modifiers.includes("capture"))
    options.capture = true;
  if (modifiers.includes("window"))
    listenerTarget = window;
  if (modifiers.includes("document"))
    listenerTarget = document;
  if (modifiers.includes("debounce")) {
    let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = debounce(handler4, wait);
  }
  if (modifiers.includes("throttle")) {
    let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = throttle(handler4, wait);
  }
  if (modifiers.includes("prevent"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.preventDefault();
      next(e);
    });
  if (modifiers.includes("stop"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.stopPropagation();
      next(e);
    });
  if (modifiers.includes("once")) {
    handler4 = wrapHandler(handler4, (next, e) => {
      next(e);
      listenerTarget.removeEventListener(event, handler4, options);
    });
  }
  if (modifiers.includes("away") || modifiers.includes("outside")) {
    listenerTarget = document;
    handler4 = wrapHandler(handler4, (next, e) => {
      if (el.contains(e.target))
        return;
      if (e.target.isConnected === false)
        return;
      if (el.offsetWidth < 1 && el.offsetHeight < 1)
        return;
      if (el._x_isShown === false)
        return;
      next(e);
    });
  }
  if (modifiers.includes("self"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.target === el && next(e);
    });
  if (isKeyEvent(event) || isClickEvent(event)) {
    handler4 = wrapHandler(handler4, (next, e) => {
      if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
        return;
      }
      next(e);
    });
  }
  listenerTarget.addEventListener(event, handler4, options);
  return () => {
    listenerTarget.removeEventListener(event, handler4, options);
  };
}
function dotSyntax(subject) {
  return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function isNumeric(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
  if ([" ", "_"].includes(
    subject
  ))
    return subject;
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
  return ["keydown", "keyup"].includes(event);
}
function isClickEvent(event) {
  return ["contextmenu", "click", "mouse"].some((i) => event.includes(i));
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
  let keyModifiers = modifiers.filter((i) => {
    return !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(i);
  });
  if (keyModifiers.includes("debounce")) {
    let debounceIndex = keyModifiers.indexOf("debounce");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.includes("throttle")) {
    let debounceIndex = keyModifiers.indexOf("throttle");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.length === 0)
    return false;
  if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
    return false;
  const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
  const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
  keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
  if (selectedSystemKeyModifiers.length > 0) {
    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
      if (modifier === "cmd" || modifier === "super")
        modifier = "meta";
      return e[`${modifier}Key`];
    });
    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
      if (isClickEvent(e.type))
        return false;
      if (keyToModifiers(e.key).includes(keyModifiers[0]))
        return false;
    }
  }
  return true;
}
function keyToModifiers(key) {
  if (!key)
    return [];
  key = kebabCase2(key);
  let modifierToKeyMap = {
    "ctrl": "control",
    "slash": "/",
    "space": " ",
    "spacebar": " ",
    "cmd": "meta",
    "esc": "escape",
    "up": "arrow-up",
    "down": "arrow-down",
    "left": "arrow-left",
    "right": "arrow-right",
    "period": ".",
    "comma": ",",
    "equal": "=",
    "minus": "-",
    "underscore": "_"
  };
  modifierToKeyMap[key] = key;
  return Object.keys(modifierToKeyMap).map((modifier) => {
    if (modifierToKeyMap[modifier] === key)
      return modifier;
  }).filter((modifier) => modifier);
}
directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
  let scopeTarget = el;
  if (modifiers.includes("parent")) {
    scopeTarget = el.parentNode;
  }
  let evaluateGet = evaluateLater(scopeTarget, expression);
  let evaluateSet;
  if (typeof expression === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
  } else if (typeof expression === "function" && typeof expression() === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
  } else {
    evaluateSet = () => {
    };
  }
  let getValue = () => {
    let result;
    evaluateGet((value) => result = value);
    return isGetterSetter(result) ? result.get() : result;
  };
  let setValue = (value) => {
    let result;
    evaluateGet((value2) => result = value2);
    if (isGetterSetter(result)) {
      result.set(value);
    } else {
      evaluateSet(() => {
      }, {
        scope: { "__placeholder": value }
      });
    }
  };
  if (typeof expression === "string" && el.type === "radio") {
    mutateDom(() => {
      if (!el.hasAttribute("name"))
        el.setAttribute("name", expression);
    });
  }
  var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
  let removeListener = isCloning ? () => {
  } : on(el, event, modifiers, (e) => {
    setValue(getInputValue(el, modifiers, e, getValue()));
  });
  if (modifiers.includes("fill")) {
    if ([void 0, null, ""].includes(getValue()) || isCheckbox(el) && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) {
      setValue(
        getInputValue(el, modifiers, { target: el }, getValue())
      );
    }
  }
  if (!el._x_removeModelListeners)
    el._x_removeModelListeners = {};
  el._x_removeModelListeners["default"] = removeListener;
  cleanup2(() => el._x_removeModelListeners["default"]());
  if (el.form) {
    let removeResetListener = on(el.form, "reset", [], (e) => {
      nextTick(() => el._x_model && el._x_model.set(getInputValue(el, modifiers, { target: el }, getValue())));
    });
    cleanup2(() => removeResetListener());
  }
  el._x_model = {
    get() {
      return getValue();
    },
    set(value) {
      setValue(value);
    }
  };
  el._x_forceModelUpdate = (value) => {
    if (value === void 0 && typeof expression === "string" && expression.match(/\./))
      value = "";
    window.fromModel = true;
    mutateDom(() => bind(el, "value", value));
    delete window.fromModel;
  };
  effect3(() => {
    let value = getValue();
    if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
      return;
    el._x_forceModelUpdate(value);
  });
});
function getInputValue(el, modifiers, event, currentValue) {
  return mutateDom(() => {
    if (event instanceof CustomEvent && event.detail !== void 0)
      return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
    else if (isCheckbox(el)) {
      if (Array.isArray(currentValue)) {
        let newValue = null;
        if (modifiers.includes("number")) {
          newValue = safeParseNumber(event.target.value);
        } else if (modifiers.includes("boolean")) {
          newValue = safeParseBoolean(event.target.value);
        } else {
          newValue = event.target.value;
        }
        return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
      } else {
        return event.target.checked;
      }
    } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
      if (modifiers.includes("number")) {
        return Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        });
      } else if (modifiers.includes("boolean")) {
        return Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseBoolean(rawValue);
        });
      }
      return Array.from(event.target.selectedOptions).map((option) => {
        return option.value || option.text;
      });
    } else {
      let newValue;
      if (isRadio(el)) {
        if (event.target.checked) {
          newValue = event.target.value;
        } else {
          newValue = currentValue;
        }
      } else {
        newValue = event.target.value;
      }
      if (modifiers.includes("number")) {
        return safeParseNumber(newValue);
      } else if (modifiers.includes("boolean")) {
        return safeParseBoolean(newValue);
      } else if (modifiers.includes("trim")) {
        return newValue.trim();
      } else {
        return newValue;
      }
    }
  });
}
function safeParseNumber(rawValue) {
  let number = rawValue ? parseFloat(rawValue) : null;
  return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
  return valueA == valueB;
}
function isNumeric2(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function isGetterSetter(value) {
  return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
}
directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
addInitSelector(() => `[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate22 }) => {
  if (typeof expression === "string") {
    return !!expression.trim() && evaluate22(expression, {}, false);
  }
  return evaluate22(expression, {}, false);
}));
directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate22 = evaluateLater2(expression);
  effect3(() => {
    evaluate22((value) => {
      mutateDom(() => {
        el.textContent = value;
      });
    });
  });
});
directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate22 = evaluateLater2(expression);
  effect3(() => {
    evaluate22((value) => {
      mutateDom(() => {
        el.innerHTML = value;
        el._x_ignoreSelf = true;
        initTree(el);
        delete el._x_ignoreSelf;
      });
    });
  });
});
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3, cleanup: cleanup2 }) => {
  if (!value) {
    let bindingProviders = {};
    injectBindingProviders(bindingProviders);
    let getBindings = evaluateLater(el, expression);
    getBindings((bindings) => {
      applyBindingsObject(el, bindings, original);
    }, { scope: bindingProviders });
    return;
  }
  if (value === "key")
    return storeKeyForXFor(el, expression);
  if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
    return;
  }
  let evaluate22 = evaluateLater(el, expression);
  effect3(() => evaluate22((result) => {
    if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
      result = "";
    }
    mutateDom(() => bind(el, value, result, modifiers));
  }));
  cleanup2(() => {
    el._x_undoAddedClasses && el._x_undoAddedClasses();
    el._x_undoAddedStyles && el._x_undoAddedStyles();
  });
};
handler2.inline = (el, { value, modifiers, expression }) => {
  if (!value)
    return;
  if (!el._x_inlineBindings)
    el._x_inlineBindings = {};
  el._x_inlineBindings[value] = { expression, extract: false };
};
directive("bind", handler2);
function storeKeyForXFor(el, expression) {
  el._x_keyExpression = expression;
}
addRootSelector(() => `[${prefix("data")}]`);
directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
  if (shouldSkipRegisteringDataDuringClone(el))
    return;
  expression = expression === "" ? "{}" : expression;
  let magicContext = {};
  injectMagics(magicContext, el);
  let dataProviderContext = {};
  injectDataProviders(dataProviderContext, magicContext);
  let data2 = evaluate(el, expression, { scope: dataProviderContext });
  if (data2 === void 0 || data2 === true)
    data2 = {};
  injectMagics(data2, el);
  let reactiveData = reactive(data2);
  initInterceptors(reactiveData);
  let undo = addScopeToNode(el, reactiveData);
  reactiveData["init"] && evaluate(el, reactiveData["init"]);
  cleanup2(() => {
    reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
    undo();
  });
});
interceptClone((from, to) => {
  if (from._x_dataStack) {
    to._x_dataStack = from._x_dataStack;
    to.setAttribute("data-has-alpine-state", true);
  }
});
function shouldSkipRegisteringDataDuringClone(el) {
  if (!isCloning)
    return false;
  if (isCloningLegacy)
    return true;
  return el.hasAttribute("data-has-alpine-state");
}
directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
  let evaluate22 = evaluateLater(el, expression);
  if (!el._x_doHide)
    el._x_doHide = () => {
      mutateDom(() => {
        el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
      });
    };
  if (!el._x_doShow)
    el._x_doShow = () => {
      mutateDom(() => {
        if (el.style.length === 1 && el.style.display === "none") {
          el.removeAttribute("style");
        } else {
          el.style.removeProperty("display");
        }
      });
    };
  let hide = () => {
    el._x_doHide();
    el._x_isShown = false;
  };
  let show = () => {
    el._x_doShow();
    el._x_isShown = true;
  };
  let clickAwayCompatibleShow = () => setTimeout(show);
  let toggle = once(
    (value) => value ? show() : hide(),
    (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    }
  );
  let oldValue;
  let firstTime = true;
  effect3(() => evaluate22((value) => {
    if (!firstTime && value === oldValue)
      return;
    if (modifiers.includes("immediate"))
      value ? clickAwayCompatibleShow() : hide();
    toggle(value);
    oldValue = value;
    firstTime = false;
  }));
});
directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
  let iteratorNames = parseForExpression(expression);
  let evaluateItems = evaluateLater(el, iteratorNames.items);
  let evaluateKey = evaluateLater(
    el,
    // the x-bind:key expression is stored for our use instead of evaluated.
    el._x_keyExpression || "index"
  );
  el._x_prevKeys = [];
  el._x_lookup = {};
  effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
  cleanup2(() => {
    Object.values(el._x_lookup).forEach((el2) => mutateDom(
      () => {
        destroyTree(el2);
        el2.remove();
      }
    ));
    delete el._x_prevKeys;
    delete el._x_lookup;
  });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
  let isObject2 = (i) => typeof i === "object" && !Array.isArray(i);
  let templateEl = el;
  evaluateItems((items) => {
    if (isNumeric3(items) && items >= 0) {
      items = Array.from(Array(items).keys(), (i) => i + 1);
    }
    if (items === void 0)
      items = [];
    let lookup = el._x_lookup;
    let prevKeys = el._x_prevKeys;
    let scopes = [];
    let keys = [];
    if (isObject2(items)) {
      items = Object.entries(items).map(([key, value]) => {
        let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
        evaluateKey((value2) => {
          if (keys.includes(value2))
            warn("Duplicate key on x-for", el);
          keys.push(value2);
        }, { scope: { index: key, ...scope2 } });
        scopes.push(scope2);
      });
    } else {
      for (let i = 0; i < items.length; i++) {
        let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
        evaluateKey((value) => {
          if (keys.includes(value))
            warn("Duplicate key on x-for", el);
          keys.push(value);
        }, { scope: { index: i, ...scope2 } });
        scopes.push(scope2);
      }
    }
    let adds = [];
    let moves = [];
    let removes = [];
    let sames = [];
    for (let i = 0; i < prevKeys.length; i++) {
      let key = prevKeys[i];
      if (keys.indexOf(key) === -1)
        removes.push(key);
    }
    prevKeys = prevKeys.filter((key) => !removes.includes(key));
    let lastKey = "template";
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let prevIndex = prevKeys.indexOf(key);
      if (prevIndex === -1) {
        prevKeys.splice(i, 0, key);
        adds.push([lastKey, i]);
      } else if (prevIndex !== i) {
        let keyInSpot = prevKeys.splice(i, 1)[0];
        let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
        prevKeys.splice(i, 0, keyForSpot);
        prevKeys.splice(prevIndex, 0, keyInSpot);
        moves.push([keyInSpot, keyForSpot]);
      } else {
        sames.push(key);
      }
      lastKey = key;
    }
    for (let i = 0; i < removes.length; i++) {
      let key = removes[i];
      if (!(key in lookup))
        continue;
      mutateDom(() => {
        destroyTree(lookup[key]);
        lookup[key].remove();
      });
      delete lookup[key];
    }
    for (let i = 0; i < moves.length; i++) {
      let [keyInSpot, keyForSpot] = moves[i];
      let elInSpot = lookup[keyInSpot];
      let elForSpot = lookup[keyForSpot];
      let marker = document.createElement("div");
      mutateDom(() => {
        if (!elForSpot)
          warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup);
        elForSpot.after(marker);
        elInSpot.after(elForSpot);
        elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
        marker.before(elInSpot);
        elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
        marker.remove();
      });
      elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
    }
    for (let i = 0; i < adds.length; i++) {
      let [lastKey2, index] = adds[i];
      let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
      if (lastEl._x_currentIfEl)
        lastEl = lastEl._x_currentIfEl;
      let scope2 = scopes[index];
      let key = keys[index];
      let clone2 = document.importNode(templateEl.content, true).firstElementChild;
      let reactiveScope = reactive(scope2);
      addScopeToNode(clone2, reactiveScope, templateEl);
      clone2._x_refreshXForScope = (newScope) => {
        Object.entries(newScope).forEach(([key2, value]) => {
          reactiveScope[key2] = value;
        });
      };
      mutateDom(() => {
        lastEl.after(clone2);
        skipDuringClone(() => initTree(clone2))();
      });
      if (typeof key === "object") {
        warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
      }
      lookup[key] = clone2;
    }
    for (let i = 0; i < sames.length; i++) {
      lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
    }
    templateEl._x_prevKeys = keys;
  });
}
function parseForExpression(expression) {
  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  let stripParensRE = /^\s*\(|\)\s*$/g;
  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  let inMatch = expression.match(forAliasRE);
  if (!inMatch)
    return;
  let res = {};
  res.items = inMatch[2].trim();
  let item = inMatch[1].replace(stripParensRE, "").trim();
  let iteratorMatch = item.match(forIteratorRE);
  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, "").trim();
    res.index = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim();
    }
  } else {
    res.item = item;
  }
  return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
  let scopeVariables = {};
  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
    let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
    names.forEach((name, i) => {
      scopeVariables[name] = item[i];
    });
  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
    let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
    names.forEach((name) => {
      scopeVariables[name] = item[name];
    });
  } else {
    scopeVariables[iteratorNames.item] = item;
  }
  if (iteratorNames.index)
    scopeVariables[iteratorNames.index] = index;
  if (iteratorNames.collection)
    scopeVariables[iteratorNames.collection] = items;
  return scopeVariables;
}
function isNumeric3(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function handler3() {
}
handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
  let root = closestRoot(el);
  if (!root._x_refs)
    root._x_refs = {};
  root._x_refs[expression] = el;
  cleanup2(() => delete root._x_refs[expression]);
};
directive("ref", handler3);
directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-if can only be used on a <template> tag", el);
  let evaluate22 = evaluateLater(el, expression);
  let show = () => {
    if (el._x_currentIfEl)
      return el._x_currentIfEl;
    let clone2 = el.content.cloneNode(true).firstElementChild;
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      el.after(clone2);
      skipDuringClone(() => initTree(clone2))();
    });
    el._x_currentIfEl = clone2;
    el._x_undoIf = () => {
      mutateDom(() => {
        destroyTree(clone2);
        clone2.remove();
      });
      delete el._x_currentIfEl;
    };
    return clone2;
  };
  let hide = () => {
    if (!el._x_undoIf)
      return;
    el._x_undoIf();
    delete el._x_undoIf;
  };
  effect3(() => evaluate22((value) => {
    value ? show() : hide();
  }));
  cleanup2(() => el._x_undoIf && el._x_undoIf());
});
directive("id", (el, { expression }, { evaluate: evaluate22 }) => {
  let names = evaluate22(expression);
  names.forEach((name) => setIdRoot(el, name));
});
interceptClone((from, to) => {
  if (from._x_ids) {
    to._x_ids = from._x_ids;
  }
});
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
  let evaluate22 = expression ? evaluateLater(el, expression) : () => {
  };
  if (el.tagName.toLowerCase() === "template") {
    if (!el._x_forwardEvents)
      el._x_forwardEvents = [];
    if (!el._x_forwardEvents.includes(value))
      el._x_forwardEvents.push(value);
  }
  let removeListener = on(el, value, modifiers, (e) => {
    evaluate22(() => {
    }, { scope: { "$event": e }, params: [e] });
  });
  cleanup2(() => removeListener());
}));
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName, slug) {
  directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
var src_default = alpine_default;
var module_default = src_default;

// node_modules/@danharrin/alpine-mousetrap/dist/module.esm.js
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp2(target, "__esModule", { value: true });
var __commonJS2 = (callback, module) => () => {
  if (!module) {
    module = { exports: {} };
    callback(module.exports, module);
  }
  return module.exports;
};
var __exportStar = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames2(module))
      if (!__hasOwnProp2.call(target, key) && key !== "default")
        __defProp2(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc2(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __exportStar(__markAsModule(__defProp2(module != null ? __create2(__getProtoOf2(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var require_mousetrap = __commonJS2((exports, module) => {
  (function(window2, document2, undefined2) {
    if (!window2) {
      return;
    }
    var _MAP = {
      8: "backspace",
      9: "tab",
      13: "enter",
      16: "shift",
      17: "ctrl",
      18: "alt",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "ins",
      46: "del",
      91: "meta",
      93: "meta",
      224: "meta"
    };
    var _KEYCODE_MAP = {
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    };
    var _SHIFT_MAP = {
      "~": "`",
      "!": "1",
      "@": "2",
      "#": "3",
      $: "4",
      "%": "5",
      "^": "6",
      "&": "7",
      "*": "8",
      "(": "9",
      ")": "0",
      _: "-",
      "+": "=",
      ":": ";",
      '"': "'",
      "<": ",",
      ">": ".",
      "?": "/",
      "|": "\\"
    };
    var _SPECIAL_ALIASES = {
      option: "alt",
      command: "meta",
      return: "enter",
      escape: "esc",
      plus: "+",
      mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    };
    var _REVERSE_MAP;
    for (var i = 1; i < 20; ++i) {
      _MAP[111 + i] = "f" + i;
    }
    for (i = 0; i <= 9; ++i) {
      _MAP[i + 96] = i.toString();
    }
    function _addEvent(object, type, callback) {
      if (object.addEventListener) {
        object.addEventListener(type, callback, false);
        return;
      }
      object.attachEvent("on" + type, callback);
    }
    function _characterFromEvent(e) {
      if (e.type == "keypress") {
        var character = String.fromCharCode(e.which);
        if (!e.shiftKey) {
          character = character.toLowerCase();
        }
        return character;
      }
      if (_MAP[e.which]) {
        return _MAP[e.which];
      }
      if (_KEYCODE_MAP[e.which]) {
        return _KEYCODE_MAP[e.which];
      }
      return String.fromCharCode(e.which).toLowerCase();
    }
    function _modifiersMatch(modifiers1, modifiers2) {
      return modifiers1.sort().join(",") === modifiers2.sort().join(",");
    }
    function _eventModifiers(e) {
      var modifiers = [];
      if (e.shiftKey) {
        modifiers.push("shift");
      }
      if (e.altKey) {
        modifiers.push("alt");
      }
      if (e.ctrlKey) {
        modifiers.push("ctrl");
      }
      if (e.metaKey) {
        modifiers.push("meta");
      }
      return modifiers;
    }
    function _preventDefault(e) {
      if (e.preventDefault) {
        e.preventDefault();
        return;
      }
      e.returnValue = false;
    }
    function _stopPropagation(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
        return;
      }
      e.cancelBubble = true;
    }
    function _isModifier(key) {
      return key == "shift" || key == "ctrl" || key == "alt" || key == "meta";
    }
    function _getReverseMap() {
      if (!_REVERSE_MAP) {
        _REVERSE_MAP = {};
        for (var key in _MAP) {
          if (key > 95 && key < 112) {
            continue;
          }
          if (_MAP.hasOwnProperty(key)) {
            _REVERSE_MAP[_MAP[key]] = key;
          }
        }
      }
      return _REVERSE_MAP;
    }
    function _pickBestAction(key, modifiers, action) {
      if (!action) {
        action = _getReverseMap()[key] ? "keydown" : "keypress";
      }
      if (action == "keypress" && modifiers.length) {
        action = "keydown";
      }
      return action;
    }
    function _keysFromString(combination) {
      if (combination === "+") {
        return ["+"];
      }
      combination = combination.replace(/\+{2}/g, "+plus");
      return combination.split("+");
    }
    function _getKeyInfo(combination, action) {
      var keys;
      var key;
      var i2;
      var modifiers = [];
      keys = _keysFromString(combination);
      for (i2 = 0; i2 < keys.length; ++i2) {
        key = keys[i2];
        if (_SPECIAL_ALIASES[key]) {
          key = _SPECIAL_ALIASES[key];
        }
        if (action && action != "keypress" && _SHIFT_MAP[key]) {
          key = _SHIFT_MAP[key];
          modifiers.push("shift");
        }
        if (_isModifier(key)) {
          modifiers.push(key);
        }
      }
      action = _pickBestAction(key, modifiers, action);
      return {
        key,
        modifiers,
        action
      };
    }
    function _belongsTo(element, ancestor) {
      if (element === null || element === document2) {
        return false;
      }
      if (element === ancestor) {
        return true;
      }
      return _belongsTo(element.parentNode, ancestor);
    }
    function Mousetrap3(targetElement) {
      var self = this;
      targetElement = targetElement || document2;
      if (!(self instanceof Mousetrap3)) {
        return new Mousetrap3(targetElement);
      }
      self.target = targetElement;
      self._callbacks = {};
      self._directMap = {};
      var _sequenceLevels = {};
      var _resetTimer;
      var _ignoreNextKeyup = false;
      var _ignoreNextKeypress = false;
      var _nextExpectedAction = false;
      function _resetSequences(doNotReset) {
        doNotReset = doNotReset || {};
        var activeSequences = false, key;
        for (key in _sequenceLevels) {
          if (doNotReset[key]) {
            activeSequences = true;
            continue;
          }
          _sequenceLevels[key] = 0;
        }
        if (!activeSequences) {
          _nextExpectedAction = false;
        }
      }
      function _getMatches(character, modifiers, e, sequenceName, combination, level) {
        var i2;
        var callback;
        var matches2 = [];
        var action = e.type;
        if (!self._callbacks[character]) {
          return [];
        }
        if (action == "keyup" && _isModifier(character)) {
          modifiers = [character];
        }
        for (i2 = 0; i2 < self._callbacks[character].length; ++i2) {
          callback = self._callbacks[character][i2];
          if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
            continue;
          }
          if (action != callback.action) {
            continue;
          }
          if (action == "keypress" && !e.metaKey && !e.ctrlKey || _modifiersMatch(modifiers, callback.modifiers)) {
            var deleteCombo = !sequenceName && callback.combo == combination;
            var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
            if (deleteCombo || deleteSequence) {
              self._callbacks[character].splice(i2, 1);
            }
            matches2.push(callback);
          }
        }
        return matches2;
      }
      function _fireCallback(callback, e, combo, sequence) {
        if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
          return;
        }
        if (callback(e, combo) === false) {
          _preventDefault(e);
          _stopPropagation(e);
        }
      }
      self._handleKey = function(character, modifiers, e) {
        var callbacks = _getMatches(character, modifiers, e);
        var i2;
        var doNotReset = {};
        var maxLevel = 0;
        var processedSequenceCallback = false;
        for (i2 = 0; i2 < callbacks.length; ++i2) {
          if (callbacks[i2].seq) {
            maxLevel = Math.max(maxLevel, callbacks[i2].level);
          }
        }
        for (i2 = 0; i2 < callbacks.length; ++i2) {
          if (callbacks[i2].seq) {
            if (callbacks[i2].level != maxLevel) {
              continue;
            }
            processedSequenceCallback = true;
            doNotReset[callbacks[i2].seq] = 1;
            _fireCallback(callbacks[i2].callback, e, callbacks[i2].combo, callbacks[i2].seq);
            continue;
          }
          if (!processedSequenceCallback) {
            _fireCallback(callbacks[i2].callback, e, callbacks[i2].combo);
          }
        }
        var ignoreThisKeypress = e.type == "keypress" && _ignoreNextKeypress;
        if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
          _resetSequences(doNotReset);
        }
        _ignoreNextKeypress = processedSequenceCallback && e.type == "keydown";
      };
      function _handleKeyEvent(e) {
        if (typeof e.which !== "number") {
          e.which = e.keyCode;
        }
        var character = _characterFromEvent(e);
        if (!character) {
          return;
        }
        if (e.type == "keyup" && _ignoreNextKeyup === character) {
          _ignoreNextKeyup = false;
          return;
        }
        self.handleKey(character, _eventModifiers(e), e);
      }
      function _resetSequenceTimer() {
        clearTimeout(_resetTimer);
        _resetTimer = setTimeout(_resetSequences, 1e3);
      }
      function _bindSequence(combo, keys, callback, action) {
        _sequenceLevels[combo] = 0;
        function _increaseSequence(nextAction) {
          return function() {
            _nextExpectedAction = nextAction;
            ++_sequenceLevels[combo];
            _resetSequenceTimer();
          };
        }
        function _callbackAndReset(e) {
          _fireCallback(callback, e, combo);
          if (action !== "keyup") {
            _ignoreNextKeyup = _characterFromEvent(e);
          }
          setTimeout(_resetSequences, 10);
        }
        for (var i2 = 0; i2 < keys.length; ++i2) {
          var isFinal = i2 + 1 === keys.length;
          var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i2 + 1]).action);
          _bindSingle(keys[i2], wrappedCallback, action, combo, i2);
        }
      }
      function _bindSingle(combination, callback, action, sequenceName, level) {
        self._directMap[combination + ":" + action] = callback;
        combination = combination.replace(/\s+/g, " ");
        var sequence = combination.split(" ");
        var info;
        if (sequence.length > 1) {
          _bindSequence(combination, sequence, callback, action);
          return;
        }
        info = _getKeyInfo(combination, action);
        self._callbacks[info.key] = self._callbacks[info.key] || [];
        _getMatches(info.key, info.modifiers, { type: info.action }, sequenceName, combination, level);
        self._callbacks[info.key][sequenceName ? "unshift" : "push"]({
          callback,
          modifiers: info.modifiers,
          action: info.action,
          seq: sequenceName,
          level,
          combo: combination
        });
      }
      self._bindMultiple = function(combinations, callback, action) {
        for (var i2 = 0; i2 < combinations.length; ++i2) {
          _bindSingle(combinations[i2], callback, action);
        }
      };
      _addEvent(targetElement, "keypress", _handleKeyEvent);
      _addEvent(targetElement, "keydown", _handleKeyEvent);
      _addEvent(targetElement, "keyup", _handleKeyEvent);
    }
    Mousetrap3.prototype.bind = function(keys, callback, action) {
      var self = this;
      keys = keys instanceof Array ? keys : [keys];
      self._bindMultiple.call(self, keys, callback, action);
      return self;
    };
    Mousetrap3.prototype.unbind = function(keys, action) {
      var self = this;
      return self.bind.call(self, keys, function() {
      }, action);
    };
    Mousetrap3.prototype.trigger = function(keys, action) {
      var self = this;
      if (self._directMap[keys + ":" + action]) {
        self._directMap[keys + ":" + action]({}, keys);
      }
      return self;
    };
    Mousetrap3.prototype.reset = function() {
      var self = this;
      self._callbacks = {};
      self._directMap = {};
      return self;
    };
    Mousetrap3.prototype.stopCallback = function(e, element) {
      var self = this;
      if ((" " + element.className + " ").indexOf(" mousetrap ") > -1) {
        return false;
      }
      if (_belongsTo(element, self.target)) {
        return false;
      }
      if ("composedPath" in e && typeof e.composedPath === "function") {
        var initialEventTarget = e.composedPath()[0];
        if (initialEventTarget !== e.target) {
          element = initialEventTarget;
        }
      }
      return element.tagName == "INPUT" || element.tagName == "SELECT" || element.tagName == "TEXTAREA" || element.isContentEditable;
    };
    Mousetrap3.prototype.handleKey = function() {
      var self = this;
      return self._handleKey.apply(self, arguments);
    };
    Mousetrap3.addKeycodes = function(object) {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          _MAP[key] = object[key];
        }
      }
      _REVERSE_MAP = null;
    };
    Mousetrap3.init = function() {
      var documentMousetrap = Mousetrap3(document2);
      for (var method in documentMousetrap) {
        if (method.charAt(0) !== "_") {
          Mousetrap3[method] = function(method2) {
            return function() {
              return documentMousetrap[method2].apply(documentMousetrap, arguments);
            };
          }(method);
        }
      }
    };
    Mousetrap3.init();
    window2.Mousetrap = Mousetrap3;
    if (typeof module !== "undefined" && module.exports) {
      module.exports = Mousetrap3;
    }
    if (typeof define === "function" && define.amd) {
      define(function() {
        return Mousetrap3;
      });
    }
  })(typeof window !== "undefined" ? window : null, typeof window !== "undefined" ? document : null);
});
var import_mousetrap = __toModule(require_mousetrap());
(function(Mousetrap3) {
  if (!Mousetrap3) {
    return;
  }
  var _globalCallbacks = {};
  var _originalStopCallback = Mousetrap3.prototype.stopCallback;
  Mousetrap3.prototype.stopCallback = function(e, element, combo, sequence) {
    var self = this;
    if (self.paused) {
      return true;
    }
    if (_globalCallbacks[combo] || _globalCallbacks[sequence]) {
      return false;
    }
    return _originalStopCallback.call(self, e, element, combo);
  };
  Mousetrap3.prototype.bindGlobal = function(keys, callback, action) {
    var self = this;
    self.bind(keys, callback, action);
    if (keys instanceof Array) {
      for (var i = 0; i < keys.length; i++) {
        _globalCallbacks[keys[i]] = true;
      }
      return;
    }
    _globalCallbacks[keys] = true;
  };
  Mousetrap3.init();
})(typeof Mousetrap !== "undefined" ? Mousetrap : void 0);
var src_default2 = (Alpine2) => {
  Alpine2.directive("mousetrap", (el, { modifiers, expression }, { evaluate: evaluate3 }) => {
    const action = () => expression ? evaluate3(expression) : el.click();
    modifiers = modifiers.map((modifier) => modifier.replace(/-/g, "+"));
    if (modifiers.includes("global")) {
      modifiers = modifiers.filter((modifier) => modifier !== "global");
      import_mousetrap.default.bindGlobal(modifiers, ($event) => {
        $event.preventDefault();
        action();
      });
    }
    import_mousetrap.default.bind(modifiers, ($event) => {
      $event.preventDefault();
      action();
    });
  });
};
var module_default2 = src_default2;

// node_modules/@alpinejs/anchor/dist/module.esm.js
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start2, value, end) {
  return max(start2, min(value, end));
}
function evaluate2(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data: data2,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data2
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate2(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate2(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate2(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate2(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  return getCssDimensions(element);
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup2() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup2();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup2;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function src_default3(Alpine2) {
  Alpine2.magic("anchor", (el) => {
    if (!el._x_anchor)
      throw "Alpine: No x-anchor directive found on element using $anchor...";
    return el._x_anchor;
  });
  Alpine2.interceptClone((from, to) => {
    if (from && from._x_anchor && !to._x_anchor) {
      to._x_anchor = from._x_anchor;
    }
  });
  Alpine2.directive("anchor", Alpine2.skipDuringClone(
    (el, { expression, modifiers, value }, { cleanup: cleanup2, evaluate: evaluate22 }) => {
      let { placement, offsetValue, unstyled } = getOptions(modifiers);
      el._x_anchor = Alpine2.reactive({ x: 0, y: 0 });
      let reference = evaluate22(expression);
      if (!reference)
        throw "Alpine: no element provided to x-anchor...";
      let compute = () => {
        let previousValue;
        computePosition2(reference, el, {
          placement,
          middleware: [flip(), shift({ padding: 5 }), offset(offsetValue)]
        }).then(({ x, y }) => {
          unstyled || setStyles2(el, x, y);
          if (JSON.stringify({ x, y }) !== previousValue) {
            el._x_anchor.x = x;
            el._x_anchor.y = y;
          }
          previousValue = JSON.stringify({ x, y });
        });
      };
      let release2 = autoUpdate(reference, el, () => compute());
      cleanup2(() => release2());
    },
    // When cloning (or "morphing"), we will graft the style and position data from the live tree...
    (el, { expression, modifiers, value }, { cleanup: cleanup2, evaluate: evaluate22 }) => {
      let { placement, offsetValue, unstyled } = getOptions(modifiers);
      if (el._x_anchor) {
        unstyled || setStyles2(el, el._x_anchor.x, el._x_anchor.y);
      }
    }
  ));
}
function setStyles2(el, x, y) {
  Object.assign(el.style, {
    left: x + "px",
    top: y + "px",
    position: "absolute"
  });
}
function getOptions(modifiers) {
  let positions = ["top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"];
  let placement = positions.find((i) => modifiers.includes(i));
  let offsetValue = 0;
  if (modifiers.includes("offset")) {
    let idx = modifiers.findIndex((i) => i === "offset");
    offsetValue = modifiers[idx + 1] !== void 0 ? Number(modifiers[idx + 1]) : offsetValue;
  }
  let unstyled = modifiers.includes("no-style");
  return { placement, offsetValue, unstyled };
}
var module_default3 = src_default3;

// node_modules/@alpinejs/collapse/dist/module.esm.js
function src_default4(Alpine2) {
  Alpine2.directive("collapse", collapse);
  collapse.inline = (el, { modifiers }) => {
    if (!modifiers.includes("min"))
      return;
    el._x_doShow = () => {
    };
    el._x_doHide = () => {
    };
  };
  function collapse(el, { modifiers }) {
    let duration = modifierValue2(modifiers, "duration", 250) / 1e3;
    let floor2 = modifierValue2(modifiers, "min", 0);
    let fullyHide = !modifiers.includes("min");
    if (!el._x_isShown)
      el.style.height = `${floor2}px`;
    if (!el._x_isShown && fullyHide)
      el.hidden = true;
    if (!el._x_isShown)
      el.style.overflow = "hidden";
    let setFunction = (el2, styles) => {
      let revertFunction = Alpine2.setStyles(el2, styles);
      return styles.height ? () => {
      } : revertFunction;
    };
    let transitionStyles = {
      transitionProperty: "height",
      transitionDuration: `${duration}s`,
      transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)"
    };
    el._x_transition = {
      in(before = () => {
      }, after = () => {
      }) {
        if (fullyHide)
          el.hidden = false;
        if (fullyHide)
          el.style.display = null;
        let current = el.getBoundingClientRect().height;
        el.style.height = "auto";
        let full = el.getBoundingClientRect().height;
        if (current === full) {
          current = floor2;
        }
        Alpine2.transition(el, Alpine2.setStyles, {
          during: transitionStyles,
          start: { height: current + "px" },
          end: { height: full + "px" }
        }, () => el._x_isShown = true, () => {
          if (Math.abs(el.getBoundingClientRect().height - full) < 1) {
            el.style.overflow = null;
          }
        });
      },
      out(before = () => {
      }, after = () => {
      }) {
        let full = el.getBoundingClientRect().height;
        Alpine2.transition(el, setFunction, {
          during: transitionStyles,
          start: { height: full + "px" },
          end: { height: floor2 + "px" }
        }, () => el.style.overflow = "hidden", () => {
          el._x_isShown = false;
          if (el.style.height == `${floor2}px` && fullyHide) {
            el.style.display = "none";
            el.hidden = true;
          }
        });
      }
    };
  }
}
function modifierValue2(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1)
    return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue)
    return fallback;
  if (key === "duration") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match)
      return match[1];
  }
  if (key === "min") {
    let match = rawValue.match(/([0-9]+)px/);
    if (match)
      return match[1];
  }
  return rawValue;
}
var module_default4 = src_default4;

// node_modules/@alpinejs/focus/dist/module.esm.js
var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  return element.getRootNode();
} : function(element) {
  return element.ownerDocument;
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (element.tagName === "SLOT") {
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively2(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scope: element,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }
      var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
      var validShadowRoot = !options.shadowRootFilter || options.shadowRootFilter(element);
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scope: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var getTabindex = function getTabindex2(node, isScope) {
  if (node.tabIndex < 0) {
    if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || node.isContentEditable) && isNaN(parseInt(node.getAttribute("tabindex"), 10))) {
      return 0;
    }
  }
  return node.tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio2 = function isRadio22(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio2(node) && !isTabbableRadio(node);
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  var nodeRootHost = getRootNode(node).host;
  var nodeIsAttached = (nodeRootHost === null || nodeRootHost === void 0 ? void 0 : nodeRootHost.ownerDocument.contains(nodeRootHost)) || node.ownerDocument.contains(node);
  if (!displayCheck || displayCheck === "full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (nodeIsAttached) {
      return !node.getClientRects().length;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i) {
    var isScope = !!item.scope;
    var element = isScope ? item.scope : item;
    var candidateTabindex = getTabindex(element, isScope);
    var elements = isScope ? sortByOrder2(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(el, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable2(el, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
var isFocusable = function isFocusable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var activeFocusTraps = function() {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }
      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();
var isSelectableInput = function isSelectableInput2(node) {
  return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent2(e) {
  return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
};
var isTabEvent = function isTabEvent2(e) {
  return e.key === "Tab" || e.keyCode === 9;
};
var delay = function delay2(fn) {
  return setTimeout(fn, 0);
};
var findIndex = function findIndex2(arr, fn) {
  var idx = -1;
  arr.every(function(value, i) {
    if (fn(value)) {
      idx = i;
      return false;
    }
    return true;
  });
  return idx;
};
var valueOrHandler = function valueOrHandler2(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === "function" ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget2(event) {
  return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
};
var createFocusTrap = function createFocusTrap2(elements, userOptions) {
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   firstTabbableNode: HTMLElement|null,
    //   lastTabbableNode: HTMLElement|null,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0
  };
  var trap;
  var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };
  var findContainerIndex = function findContainerIndex2(element) {
    return state.containerGroups.findIndex(function(_ref) {
      var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      tabbableNodes.find(function(node) {
        return node === element;
      });
    });
  };
  var getNodeForOption = function getNodeForOption2(optionName) {
    var optionValue = config[optionName];
    if (typeof optionValue === "function") {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      optionValue = optionValue.apply(void 0, params);
    }
    if (optionValue === true) {
      optionValue = void 0;
    }
    if (!optionValue) {
      if (optionValue === void 0 || optionValue === false) {
        return optionValue;
      }
      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue;
    if (typeof optionValue === "string") {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode2() {
    var node = getNodeForOption("initialFocus");
    if (node === false) {
      return false;
    }
    if (node === void 0) {
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
        node = firstTabbableNode || getNodeForOption("fallbackFocus");
      }
    }
    if (!node) {
      throw new Error("Your focus-trap needs to have at least one focusable element");
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes2() {
    state.containerGroups = state.containers.map(function(container) {
      var tabbableNodes = tabbable(container, config.tabbableOptions);
      var focusableNodes = focusable(container, config.tabbableOptions);
      return {
        container,
        tabbableNodes,
        focusableNodes,
        firstTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[0] : null,
        lastTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : null,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var nodeIdx = focusableNodes.findIndex(function(n) {
            return n === node;
          });
          if (nodeIdx < 0) {
            return void 0;
          }
          if (forward) {
            return focusableNodes.slice(nodeIdx + 1).find(function(n) {
              return isTabbable(n, config.tabbableOptions);
            });
          }
          return focusableNodes.slice(0, nodeIdx).reverse().find(function(n) {
            return isTabbable(n, config.tabbableOptions);
          });
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function(group) {
      return group.tabbableNodes.length > 0;
    });
    if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    }
  };
  var tryFocus = function tryFocus2(node) {
    if (node === false) {
      return;
    }
    if (node === doc.activeElement) {
      return;
    }
    if (!node || !node.focus) {
      tryFocus2(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
    var node = getNodeForOption("setReturnFocus", previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  };
  var checkPointerDown = function checkPointerDown2(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      trap.deactivate({
        // if, on deactivation, we should return focus to the node originally-focused
        //  when the trap was activated (or the configured `setReturnFocus` node),
        //  then assume it's also OK to return focus to the outside node that was
        //  just clicked, causing deactivation, as long as that node is focusable;
        //  if it isn't focusable, then return focus to the original node focused
        //  on activation (or the configured `setReturnFocus` node)
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked, whether it's focusable or not; by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node)
        returnFocus: config.returnFocusOnDeactivate && !isFocusable(target, config.tabbableOptions)
      });
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
  };
  var checkFocusIn = function checkFocusIn2(e) {
    var target = getActualTarget(e);
    var targetContained = findContainerIndex(target) >= 0;
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  };
  var checkTab = function checkTab2(e) {
    var target = getActualTarget(e);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      var containerIndex = findContainerIndex(target);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
      if (containerIndex < 0) {
        if (e.shiftKey) {
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (e.shiftKey) {
        var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }
    } else {
      destinationNode = getNodeForOption("fallbackFocus");
    }
    if (destinationNode) {
      e.preventDefault();
      tryFocus(destinationNode);
    }
  };
  var checkKey = function checkKey2(e) {
    if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates, e) !== false) {
      e.preventDefault();
      trap.deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  };
  var checkClick = function checkClick2(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };
  var addListeners = function addListeners2() {
    if (!state.active) {
      return;
    }
    activeFocusTraps.activateTrap(trap);
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener("focusin", checkFocusIn, true);
    doc.addEventListener("mousedown", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("touchstart", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("click", checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener("keydown", checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };
  var removeListeners = function removeListeners2() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener("focusin", checkFocusIn, true);
    doc.removeEventListener("mousedown", checkPointerDown, true);
    doc.removeEventListener("touchstart", checkPointerDown, true);
    doc.removeEventListener("click", checkClick, true);
    doc.removeEventListener("keydown", checkKey, true);
    return trap;
  };
  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, "onActivate");
      var onPostActivate = getOption(activateOptions, "onPostActivate");
      var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      if (onActivate) {
        onActivate();
      }
      var finishActivation = function finishActivation2() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        if (onPostActivate) {
          onPostActivate();
        }
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer);
      state.delayInitialFocusTimer = void 0;
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = getOption(options, "onDeactivate");
      var onPostDeactivate = getOption(options, "onPostDeactivate");
      var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
      var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
      if (onDeactivate) {
        onDeactivate();
      }
      var finishDeactivation = function finishDeactivation2() {
        delay(function() {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          if (onPostDeactivate) {
            onPostDeactivate();
          }
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }
      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }
      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function(element) {
        return typeof element === "string" ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      return this;
    }
  };
  trap.updateContainerElements(elements);
  return trap;
};
function src_default5(Alpine2) {
  let lastFocused;
  let currentFocused;
  window.addEventListener("focusin", () => {
    lastFocused = currentFocused;
    currentFocused = document.activeElement;
  });
  Alpine2.magic("focus", (el) => {
    let within = el;
    return {
      __noscroll: false,
      __wrapAround: false,
      within(el2) {
        within = el2;
        return this;
      },
      withoutScrolling() {
        this.__noscroll = true;
        return this;
      },
      noscroll() {
        this.__noscroll = true;
        return this;
      },
      withWrapAround() {
        this.__wrapAround = true;
        return this;
      },
      wrap() {
        return this.withWrapAround();
      },
      focusable(el2) {
        return isFocusable(el2);
      },
      previouslyFocused() {
        return lastFocused;
      },
      lastFocused() {
        return lastFocused;
      },
      focused() {
        return currentFocused;
      },
      focusables() {
        if (Array.isArray(within))
          return within;
        return focusable(within, { displayCheck: "none" });
      },
      all() {
        return this.focusables();
      },
      isFirst(el2) {
        let els = this.all();
        return els[0] && els[0].isSameNode(el2);
      },
      isLast(el2) {
        let els = this.all();
        return els.length && els.slice(-1)[0].isSameNode(el2);
      },
      getFirst() {
        return this.all()[0];
      },
      getLast() {
        return this.all().slice(-1)[0];
      },
      getNext() {
        let list = this.all();
        let current = document.activeElement;
        if (list.indexOf(current) === -1)
          return;
        if (this.__wrapAround && list.indexOf(current) === list.length - 1) {
          return list[0];
        }
        return list[list.indexOf(current) + 1];
      },
      getPrevious() {
        let list = this.all();
        let current = document.activeElement;
        if (list.indexOf(current) === -1)
          return;
        if (this.__wrapAround && list.indexOf(current) === 0) {
          return list.slice(-1)[0];
        }
        return list[list.indexOf(current) - 1];
      },
      first() {
        this.focus(this.getFirst());
      },
      last() {
        this.focus(this.getLast());
      },
      next() {
        this.focus(this.getNext());
      },
      previous() {
        this.focus(this.getPrevious());
      },
      prev() {
        return this.previous();
      },
      focus(el2) {
        if (!el2)
          return;
        setTimeout(() => {
          if (!el2.hasAttribute("tabindex"))
            el2.setAttribute("tabindex", "0");
          el2.focus({ preventScroll: this.__noscroll });
        });
      }
    };
  });
  Alpine2.directive("trap", Alpine2.skipDuringClone(
    (el, { expression, modifiers }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
      let evaluator = evaluateLater2(expression);
      let oldValue = false;
      let options = {
        escapeDeactivates: false,
        allowOutsideClick: true,
        fallbackFocus: () => el
      };
      if (modifiers.includes("noautofocus")) {
        options.initialFocus = false;
      } else {
        let autofocusEl = el.querySelector("[autofocus]");
        if (autofocusEl)
          options.initialFocus = autofocusEl;
      }
      let trap = createFocusTrap(el, options);
      let undoInert = () => {
      };
      let undoDisableScrolling = () => {
      };
      const releaseFocus = () => {
        undoInert();
        undoInert = () => {
        };
        undoDisableScrolling();
        undoDisableScrolling = () => {
        };
        trap.deactivate({
          returnFocus: !modifiers.includes("noreturn")
        });
      };
      effect3(() => evaluator((value) => {
        if (oldValue === value)
          return;
        if (value && !oldValue) {
          if (modifiers.includes("noscroll"))
            undoDisableScrolling = disableScrolling();
          if (modifiers.includes("inert"))
            undoInert = setInert(el);
          setTimeout(() => {
            trap.activate();
          }, 15);
        }
        if (!value && oldValue) {
          releaseFocus();
        }
        oldValue = !!value;
      }));
      cleanup2(releaseFocus);
    },
    // When cloning, we only want to add aria-hidden attributes to the
    // DOM and not try to actually trap, as trapping can mess with the
    // live DOM and isn't just isolated to the cloned DOM.
    (el, { expression, modifiers }, { evaluate: evaluate3 }) => {
      if (modifiers.includes("inert") && evaluate3(expression))
        setInert(el);
    }
  ));
}
function setInert(el) {
  let undos = [];
  crawlSiblingsUp(el, (sibling) => {
    let cache = sibling.hasAttribute("aria-hidden");
    sibling.setAttribute("aria-hidden", "true");
    undos.push(() => cache || sibling.removeAttribute("aria-hidden"));
  });
  return () => {
    while (undos.length)
      undos.pop()();
  };
}
function crawlSiblingsUp(el, callback) {
  if (el.isSameNode(document.body) || !el.parentNode)
    return;
  Array.from(el.parentNode.children).forEach((sibling) => {
    if (sibling.isSameNode(el)) {
      crawlSiblingsUp(el.parentNode, callback);
    } else {
      callback(sibling);
    }
  });
}
function disableScrolling() {
  let overflow = document.documentElement.style.overflow;
  let paddingRight = document.documentElement.style.paddingRight;
  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.overflow = "hidden";
  document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
  return () => {
    document.documentElement.style.overflow = overflow;
    document.documentElement.style.paddingRight = paddingRight;
  };
}
var module_default5 = src_default5;

// resources/js/components/tableOfContent.js
var tableOfContent_default = () => ({
  activeHeading: null,
  init() {
    module_default.nextTick(() => {
      const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      if (headingElements.length > 0) {
        this.activeHeading = headingElements[0].querySelector("a")?.id;
      }
      const observer2 = new IntersectionObserver(
        (entries) => {
          const visibleHeadings = entries.filter(
            (entry) => entry.isIntersecting
          );
          visibleHeadings.sort((a, b) => {
            return a.target.offsetTop - b.target.offsetTop;
          });
          if (visibleHeadings.length > 0) {
            const topHeading = visibleHeadings.reduce(
              (prev, current) => prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current
            );
            this.activeHeading = topHeading.target.querySelector("a")?.id;
          }
        },
        { rootMargin: "0px 0px -75% 0px", threshold: 0.7 }
      );
      headingElements.forEach((heading) => observer2.observe(heading));
    });
  }
});

// resources/js/components/tabs.js
var tabs_default = () => ({
  activeId: null,
  init() {
    this.$nextTick(() => this.activate(this.$id("tab", 1)));
  },
  activate(id) {
    this.activeId = id;
  },
  isActive(id) {
    return this.activeId === id;
  },
  getTabIndex(el, parent) {
    return Array.from(parent.children).indexOf(el) + 1;
  }
});

// resources/js/components/dropdown.js
var dropdown_default = () => ({
  open: false,
  isOpen() {
    return this.open;
  },
  toggle() {
    if (this.open) {
      return this.close();
    }
    this.$refs.button.focus();
    this.open = true;
  },
  close(focusAfter) {
    if (!this.open)
      return;
    this.open = false;
    focusAfter && focusAfter.focus();
  },
  handleFocusInOut(event) {
    const panel = this.$refs.panel;
    const button = this.$refs.button;
    const target = event.target;
    if (panel.contains(target) || button.contains(target))
      return;
    const lastFocusedElement = document.activeElement;
    if (this.shouldCloseDropdown(button, panel, lastFocusedElement))
      this.close(button);
  },
  shouldCloseDropdown(button, panel, lastFocusedElement) {
    return !button.contains(lastFocusedElement) && !panel.contains(lastFocusedElement) && lastFocusedElement && button.compareDocumentPosition(lastFocusedElement) & Node.DOCUMENT_POSITION_FOLLOWING;
  }
});

// resources/js/components/sidebar.js
var sidebar_default = () => ({
  open: false,
  isOpen() {
    return this.open;
  },
  toggle() {
    this.open ? this.close() : this.openSidebar();
  },
  openSidebar() {
    this.open = true;
  },
  close() {
    this.open = false;
  }
});

// resources/js/components/clipboard.js
var import_clipboard = __toESM(require_clipboard(), 1);
var clipboard_default = () => ({
  codeBlocks: document.querySelectorAll("pre") || [],
  clipboardIcon: `<svg class="fill-current clipoard h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>`,
  clipboardCopiedIcon: `<svg fill="currentColor" class="fill-current text-green-500 h-5 w-5" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>`,
  init() {
    this.codeBlocks.forEach((element, key) => {
      const wrapper = document.createElement("div");
      ["relative", "code-block-wrapper"].forEach(
        (value) => wrapper.classList.add(value)
      );
      element.parentNode.insertBefore(wrapper, element);
      wrapper.appendChild(element);
      let copyToClipboardButton = document.createElement("button");
      copyToClipboardButton.innerHTML = this.clipboardIcon;
      copyToClipboardButton.id = `code-block-copy-button-${key}`;
      ["md:block", "hidden"].forEach(
        (value) => copyToClipboardButton.classList.add(value)
      );
      copyToClipboardButton.setAttribute(
        "aria-label",
        "Copy to Clipboard"
      );
      copyToClipboardButton.setAttribute("title", "Copy to Clipboard");
      copyToClipboardButton.classList.add("code-block-copy-button");
      wrapper.appendChild(copyToClipboardButton);
      let copyToClipboard = new import_clipboard.default(
        `#${copyToClipboardButton.id}`
      );
      copyToClipboard.on("success", (element2) => {
        copyToClipboardButton.innerHTML = this.clipboardCopiedIcon;
        element2.clearSelection();
        setTimeout(
          () => copyToClipboardButton.innerHTML = this.clipboardIcon,
          1500
        );
      });
      element.id = `code-block-text-${key}`;
      copyToClipboardButton.dataset.clipboardTarget = `#${element.id}`;
    });
  }
});

// resources/js/components/themeSwitcher.js
var themeSwitcher_default = ({
  lightMode = null,
  darkMode = null,
  highlightingLightMode = null,
  highlightingDarkMode = null
}) => ({
  activeTheme: null,
  lightMode,
  darkMode,
  updateHighlighterTheme() {
    let codeTheme = this.activeTheme === "dark" ? highlightingDarkMode : highlightingLightMode;
    const style = document.createElement("style");
    style.innerHTML = codeTheme;
    document.head.appendChild(style);
  },
  init() {
    this.activeTheme = localStorage.getItem("theme") ?? "system";
    this.updateHighlighterTheme();
    const root = document.documentElement;
    window.Alpine.store(
      "theme",
      this.activeTheme === "dark" || this.activeTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    );
    window.addEventListener("theme-changed", (event) => {
      this.activeTheme = event.detail;
      localStorage.setItem("theme", this.activeTheme);
      if (this.activeTheme === "system") {
        this.activeTheme = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches ? "dark" : "light";
      }
      window.Alpine.store("theme", this.activeTheme);
    });
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      if (localStorage.getItem("theme") === "system") {
        window.Alpine.store(
          "theme",
          event.matches ? "dark" : "light"
        );
      }
    });
    window.Alpine.effect(() => {
      this.activeTheme = window.Alpine.store("theme");
      this.activeTheme === "dark" ? this.applyStyles(root, darkMode) : this.applyStyles(root, lightMode);
      this.updateHighlighterTheme();
    });
    this.updateHighlighterTheme();
  },
  applyStyles(element, theme) {
    Object.entries(JSON.parse(theme)).forEach(([key, value]) => {
      element.style.setProperty(key, value);
    });
  }
});

// resources/js/components/search/search.js
var search_default = ({ route }) => ({
  query: "",
  results: [],
  isLoading: false,
  search_history: [],
  favorite_items: [],
  maxItemsAllowed: 10,
  route,
  init() {
    this.search_history = this.getLocalStorage("search_history");
    this.favorite_items = this.getLocalStorage("favorite_items");
    this.$watch(
      "search_history",
      (val) => this.setLocalStorage("search_history", val)
    );
    this.$watch(
      "favorite_items",
      (val) => this.setLocalStorage("favorite_items", val)
    );
    this.$watch("query", async (query) => {
      if (query.trim() === "") {
        this.results = [];
      } else {
        this.isLoading = true;
        this.results = await this.performSearch(query);
        this.isLoading = false;
        console.log(this.results);
      }
    });
  },
  async performSearch(query) {
    const response = await fetch(`${this.route}?q=${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  },
  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  },
  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  updateList(list, newItem) {
    return [
      newItem,
      ...list.filter((el) => el.title !== newItem.title)
    ].slice(0, this.maxItemsAllowed);
  },
  addToSearchHistory(searchItem, url) {
    const searchItemObject = { title: searchItem, url };
    this.search_history = this.updateList(
      this.search_history,
      searchItemObject
    );
  },
  deleteFromHistory(searchItem) {
    this.search_history = this.search_history.filter(
      (el) => el.title !== searchItem
    );
  },
  deleteAllHistory() {
    this.search_history = [];
  },
  addToFavorites(favItem, url) {
    this.deleteFromHistory(favItem);
    const favItemObject = { title: favItem, url };
    this.favorite_items = this.updateList(
      this.favorite_items,
      favItemObject
    );
  },
  deleteFromFavorites(favItem) {
    this.favorite_items = this.favorite_items.filter(
      (el) => el.title !== favItem
    );
  },
  deleteAllFavorites() {
    this.favorite_items = [];
  }
});

// resources/js/components/showContents.js
var showContents_default = () => ({
  svg: `<div class="w-7 h-7 absolute top-0 -left-7 hidden group-hover:flex rounded-md  items-center justify-center shadow-sm text-base-content transition-opacity duration-200 ring-1 hover:brightness-150 ring-base-300" style="margin-right:2px;"><svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512"><path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg></div>`,
  init() {
    const contentDiv = document.querySelector(".prose.content");
    const headings = contentDiv.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      let anchor = heading.querySelector("a");
      heading.classList.add("group", "relative", "cursor-pointer");
      heading.addEventListener("click", () => anchor.click());
      anchor.textContent = anchor.textContent.replace("#", "");
      anchor.innerHTML = this.svg;
    });
  }
});

// resources/js/app.js
module_default.plugin(module_default3);
module_default.plugin(module_default4);
module_default.plugin(module_default5);
module_default.plugin(module_default2);
module_default.data("themeSwitcher", themeSwitcher_default);
module_default.data("showContentsTweacks", showContents_default);
module_default.data("tableOfContent", tableOfContent_default);
module_default.data("codeBlockClipboard", clipboard_default);
module_default.data("tabs", tabs_default);
module_default.data("dropdown", dropdown_default);
module_default.data("sidebar", sidebar_default);
module_default.data("search", search_default);
window.Alpine = module_default;
module_default.start();
`:""}`,e),setTimeout(()=>{throw t},0)}var te=!0;function nr(t){let e=te;te=!1;let n=t();return te=e,n}function gt(t,e,n={}){let r;return W(t,e)(o=>r=o,n),r}function W(...t){return rr(...t)}var rr=ir;function Co(t){rr=t}function ir(t,e){let n={};Be(n,t);let r=[n,...Ct(t)],o=typeof e=="function"?To(r,e):Ro(r,e,t);return Ao.bind(null,t,e,o)}function To(t,e){return(n=()=>{},{scope:r={},params:o=[]}={})=>{let i=e.apply(qt([r,...t]),o);re(n,i)}}var Le={};function Oo(t,e){if(Le[t])return Le[t];let n=Object.getPrototypeOf(async function(){}).constructor,r=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t,i=(()=>{try{let a=new n(["__self","scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`);return Object.defineProperty(a,"name",{value:`[Alpine] ${t}`}),a}catch(a){return Ht(a,e,t),Promise.resolve()}})();return Le[t]=i,i}function Ro(t,e,n){let r=Oo(e,n);return(o=()=>{},{scope:i={},params:a=[]}={})=>{r.result=void 0,r.finished=!1;let s=qt([i,...t]);if(typeof r=="function"){let c=r(r,s).catch(u=>Ht(u,n,e));r.finished?(re(o,r.result,s,a,n),r.result=void 0):c.then(u=>{re(o,u,s,a,n)}).catch(u=>Ht(u,n,e)).finally(()=>r.result=void 0)}}}function re(t,e,n,r,o){if(te&&typeof e=="function"){let i=e.apply(n,r);i instanceof Promise?i.then(a=>re(t,a,n,r)).catch(a=>Ht(a,o,e)):t(i)}else typeof e=="object"&&e instanceof Promise?e.then(i=>t(i)):t(e)}var on="x-";function Lt(t=""){return on+t}function Lo(t){on=t}var ie={};function B(t,e){return ie[t]=e,{before(n){if(!ie[n]){console.warn(String.raw`Cannot find directive \`${n}\`. \`${t}\` will use the default order of execution`);return}let r=ht.indexOf(n);ht.splice(r>=0?r:ht.indexOf("DEFAULT"),0,t)}}}function ko(t){return Object.keys(ie).includes(t)}function an(t,e,n){if(e=Array.from(e),t._x_virtualDirectives){let i=Object.entries(t._x_virtualDirectives).map(([s,c])=>({name:s,value:c})),a=or(i);i=i.map(s=>a.find(c=>c.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),e=e.concat(i)}let r={};return e.map(lr((i,a)=>r[i]=a)).filter(dr).map(Po(r,n)).sort(Fo).map(i=>No(t,i))}function or(t){return Array.from(t).map(lr()).filter(e=>!dr(e))}var He=!1,$t=new Map,ar=Symbol();function Mo(t){He=!0;let e=Symbol();ar=e,$t.set(e,[]);let n=()=>{for(;$t.get(e).length;)$t.get(e).shift()();$t.delete(e)},r=()=>{He=!1,n()};t(n),r()}function sr(t){let e=[],n=s=>e.push(s),[r,o]=vo(t);return e.push(o),[{Alpine:zt,effect:r,cleanup:n,evaluateLater:W.bind(W,t),evaluate:gt.bind(gt,t)},()=>e.forEach(s=>s())]}function No(t,e){let n=()=>{},r=ie[e.type]||n,[o,i]=sr(t);Yn(t,e.original,i);let a=()=>{t._x_ignore||t._x_ignoreSelf||(r.inline&&r.inline(t,e,o),r=r.bind(r,t,e,o),He?$t.get(ar).push(r):r())};return a.runCleanups=i,a}var cr=(t,e)=>({name:n,value:r})=>(n.startsWith(t)&&(n=n.replace(t,e)),{name:n,value:r}),ur=t=>t;function lr(t=()=>{}){return({name:e,value:n})=>{let{name:r,value:o}=fr.reduce((i,a)=>a(i),{name:e,value:n});return r!==e&&t(r,e),{name:r,value:o}}}var fr=[];function sn(t){fr.push(t)}function dr({name:t}){return pr().test(t)}var pr=()=>new RegExp(`^${on}([^:^.]+)\\b`);function Po(t,e){return({name:n,value:r})=>{let o=n.match(pr()),i=n.match(/:([a-zA-Z0-9\-_:]+)/),a=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],s=e||t[n]||n;return{type:o?o[1]:null,value:i?i[1]:null,modifiers:a.map(c=>c.replace(".","")),expression:r,original:s}}}var Ke="DEFAULT",ht=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",Ke,"teleport"];function Fo(t,e){let n=ht.indexOf(t.type)===-1?Ke:t.type,r=ht.indexOf(e.type)===-1?Ke:e.type;return ht.indexOf(n)-ht.indexOf(r)}function jt(t,e,n={}){t.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}function yt(t,e){if(typeof ShadowRoot=="function"&&t instanceof ShadowRoot){Array.from(t.children).forEach(o=>yt(o,e));return}let n=!1;if(e(t,()=>n=!0),n)return;let r=t.firstElementChild;for(;r;)yt(r,e,!1),r=r.nextElementSibling}function G(t,...e){console.warn(`Alpine Warning: ${t}`,...e)}var Ln=!1;function Io(){Ln&&G("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Ln=!0,document.body||G("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),jt(document,"alpine:init"),jt(document,"alpine:initializing"),en(),go(e=>rt(e,yt)),Ze(e=>Mt(e)),Jn((e,n)=>{an(e,n).forEach(r=>r())});let t=e=>!ae(e.parentElement,!0);Array.from(document.querySelectorAll(gr().join(","))).filter(t).forEach(e=>{rt(e)}),jt(document,"alpine:initialized"),setTimeout(()=>{Bo()})}var cn=[],hr=[];function vr(){return cn.map(t=>t())}function gr(){return cn.concat(hr).map(t=>t())}function mr(t){cn.push(t)}function br(t){hr.push(t)}function ae(t,e=!1){return kt(t,n=>{if((e?gr():vr()).some(o=>n.matches(o)))return!0})}function kt(t,e){if(t){if(e(t))return t;if(t._x_teleportBack&&(t=t._x_teleportBack),!!t.parentElement)return kt(t.parentElement,e)}}function Do(t){return vr().some(e=>t.matches(e))}var yr=[];function $o(t){yr.push(t)}var jo=1;function rt(t,e=yt,n=()=>{}){kt(t,r=>r._x_ignore)||Mo(()=>{e(t,(r,o)=>{r._x_marker||(n(r,o),yr.forEach(i=>i(r,o)),an(r,r.attributes).forEach(i=>i()),r._x_ignore||(r._x_marker=jo++),r._x_ignore&&o())})})}function Mt(t,e=yt){e(t,n=>{mo(n),Gn(n),delete n._x_marker})}function Bo(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([e,n,r])=>{ko(n)||r.some(o=>{if(document.querySelector(o))return G(`found "${o}", but missing ${e} plugin`),!0})})}var qe=[],un=!1;function ln(t=()=>{}){return queueMicrotask(()=>{un||setTimeout(()=>{ze()})}),new Promise(e=>{qe.push(()=>{t(),e()})})}function ze(){for(un=!1;qe.length;)qe.shift()()}function Ho(){un=!0}function fn(t,e){return Array.isArray(e)?kn(t,e.join(" ")):typeof e=="object"&&e!==null?Ko(t,e):typeof e=="function"?fn(t,e()):kn(t,e)}function kn(t,e){let n=i=>i.split(" ").filter(Boolean),r=i=>i.split(" ").filter(a=>!t.classList.contains(a)).filter(Boolean),o=i=>(t.classList.add(...i),()=>{t.classList.remove(...i)});return e=e===!0?e="":e||"",o(r(e))}function Ko(t,e){let n=s=>s.split(" ").filter(Boolean),r=Object.entries(e).flatMap(([s,c])=>c?n(s):!1).filter(Boolean),o=Object.entries(e).flatMap(([s,c])=>c?!1:n(s)).filter(Boolean),i=[],a=[];return o.forEach(s=>{t.classList.contains(s)&&(t.classList.remove(s),a.push(s))}),r.forEach(s=>{t.classList.contains(s)||(t.classList.add(s),i.push(s))}),()=>{a.forEach(s=>t.classList.add(s)),i.forEach(s=>t.classList.remove(s))}}function se(t,e){return typeof e=="object"&&e!==null?qo(t,e):zo(t,e)}function qo(t,e){let n={};return Object.entries(e).forEach(([r,o])=>{n[r]=t.style[r],r.startsWith("--")||(r=Vo(r)),t.style.setProperty(r,o)}),setTimeout(()=>{t.style.length===0&&t.removeAttribute("style")}),()=>{se(t,n)}}function zo(t,e){let n=t.getAttribute("style",e);return t.setAttribute("style",e),()=>{t.setAttribute("style",n||"")}}function Vo(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Ve(t,e=()=>{}){let n=!1;return function(){n?e.apply(this,arguments):(n=!0,t.apply(this,arguments))}}B("transition",(t,{value:e,modifiers:n,expression:r},{evaluate:o})=>{typeof r=="function"&&(r=o(r)),r!==!1&&(!r||typeof r=="boolean"?Uo(t,n,e):Wo(t,r,e))});function Wo(t,e,n){_r(t,fn,""),{enter:o=>{t._x_transition.enter.during=o},"enter-start":o=>{t._x_transition.enter.start=o},"enter-end":o=>{t._x_transition.enter.end=o},leave:o=>{t._x_transition.leave.during=o},"leave-start":o=>{t._x_transition.leave.start=o},"leave-end":o=>{t._x_transition.leave.end=o}}[n](e)}function Uo(t,e,n){_r(t,se);let r=!e.includes("in")&&!e.includes("out")&&!n,o=r||e.includes("in")||["enter"].includes(n),i=r||e.includes("out")||["leave"].includes(n);e.includes("in")&&!r&&(e=e.filter((w,O)=>O<e.indexOf("out"))),e.includes("out")&&!r&&(e=e.filter((w,O)=>O>e.indexOf("out")));let a=!e.includes("opacity")&&!e.includes("scale"),s=a||e.includes("opacity"),c=a||e.includes("scale"),u=s?0:1,l=c?It(e,"scale",95)/100:1,d=It(e,"delay",0)/1e3,p=It(e,"origin","center"),h="opacity, transform",y=It(e,"duration",150)/1e3,C=It(e,"duration",75)/1e3,_="cubic-bezier(0.4, 0.0, 0.2, 1)";o&&(t._x_transition.enter.during={transformOrigin:p,transitionDelay:`${d}s`,transitionProperty:h,transitionDuration:`${y}s`,transitionTimingFunction:_},t._x_transition.enter.start={opacity:u,transform:`scale(${l})`},t._x_transition.enter.end={opacity:1,transform:"scale(1)"}),i&&(t._x_transition.leave.during={transformOrigin:p,transitionDelay:`${d}s`,transitionProperty:h,transitionDuration:`${C}s`,transitionTimingFunction:_},t._x_transition.leave.start={opacity:1,transform:"scale(1)"},t._x_transition.leave.end={opacity:u,transform:`scale(${l})`})}function _r(t,e,n={}){t._x_transition||(t._x_transition={enter:{during:n,start:n,end:n},leave:{during:n,start:n,end:n},in(r=()=>{},o=()=>{}){We(t,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},r,o)},out(r=()=>{},o=()=>{}){We(t,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},r,o)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(t,e,n,r){let o=document.visibilityState==="visible"?requestAnimationFrame:setTimeout,i=()=>o(n);if(e){t._x_transition&&(t._x_transition.enter||t._x_transition.leave)?t._x_transition.enter&&(Object.entries(t._x_transition.enter.during).length||Object.entries(t._x_transition.enter.start).length||Object.entries(t._x_transition.enter.end).length)?t._x_transition.in(n):i():t._x_transition?t._x_transition.in(n):i();return}t._x_hidePromise=t._x_transition?new Promise((a,s)=>{t._x_transition.out(()=>{},()=>a(r)),t._x_transitioning&&t._x_transitioning.beforeCancel(()=>s({isFromCancelledTransition:!0}))}):Promise.resolve(r),queueMicrotask(()=>{let a=xr(t);a?(a._x_hideChildren||(a._x_hideChildren=[]),a._x_hideChildren.push(t)):o(()=>{let s=c=>{let u=Promise.all([c._x_hidePromise,...(c._x_hideChildren||[]).map(s)]).then(([l])=>l?.());return delete c._x_hidePromise,delete c._x_hideChildren,u};s(t).catch(c=>{if(!c.isFromCancelledTransition)throw c})})})};function xr(t){let e=t.parentNode;if(e)return e._x_hidePromise?e:xr(e)}function We(t,e,{during:n,start:r,end:o}={},i=()=>{},a=()=>{}){if(t._x_transitioning&&t._x_transitioning.cancel(),Object.keys(n).length===0&&Object.keys(r).length===0&&Object.keys(o).length===0){i(),a();return}let s,c,u;Jo(t,{start(){s=e(t,r)},during(){c=e(t,n)},before:i,end(){s(),u=e(t,o)},after:a,cleanup(){c(),u()}})}function Jo(t,e){let n,r,o,i=Ve(()=>{$(()=>{n=!0,r||e.before(),o||(e.end(),ze()),e.after(),t.isConnected&&e.cleanup(),delete t._x_transitioning})});t._x_transitioning={beforeCancels:[],beforeCancel(a){this.beforeCancels.push(a)},cancel:Ve(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();i()}),finish:i},$(()=>{e.start(),e.during()}),Ho(),requestAnimationFrame(()=>{if(n)return;let a=Number(getComputedStyle(t).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,s=Number(getComputedStyle(t).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;a===0&&(a=Number(getComputedStyle(t).animationDuration.replace("s",""))*1e3),$(()=>{e.before()}),r=!0,requestAnimationFrame(()=>{n||($(()=>{e.end()}),ze(),setTimeout(t._x_transitioning.finish,a+s),o=!0)})})}function It(t,e,n){if(t.indexOf(e)===-1)return n;let r=t[t.indexOf(e)+1];if(!r||e==="scale"&&isNaN(r))return n;if(e==="duration"||e==="delay"){let o=r.match(/([0-9]+)ms/);if(o)return o[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(t[t.indexOf(e)+2])?[r,t[t.indexOf(e)+2]].join(" "):r}var ct=!1;function lt(t,e=()=>{}){return(...n)=>ct?e(...n):t(...n)}function Yo(t){return(...e)=>ct&&t(...e)}var wr=[];function ce(t){wr.push(t)}function Go(t,e){wr.forEach(n=>n(t,e)),ct=!0,Sr(()=>{rt(e,(n,r)=>{r(n,()=>{})})}),ct=!1}var Ue=!1;function Xo(t,e){e._x_dataStack||(e._x_dataStack=t._x_dataStack),ct=!0,Ue=!0,Sr(()=>{Zo(e)}),ct=!1,Ue=!1}function Zo(t){let e=!1;rt(t,(r,o)=>{yt(r,(i,a)=>{if(e&&Do(i))return a();e=!0,o(i,a)})})}function Sr(t){let e=_t;Rn((n,r)=>{let o=e(n);return Rt(o),()=>{}}),t(),Rn(e)}function Er(t,e,n,r=[]){switch(t._x_bindings||(t._x_bindings=Ot({})),t._x_bindings[e]=n,e=r.includes("camel")?aa(e):e,e){case"value":Qo(t,n);break;case"style":ea(t,n);break;case"class":ta(t,n);break;case"selected":case"checked":na(t,e,n);break;default:Ar(t,e,n);break}}function Qo(t,e){if(Or(t))t.attributes.value===void 0&&(t.value=e),window.fromModel&&(typeof e=="boolean"?t.checked=ee(t.value)===e:t.checked=Mn(t.value,e));else if(dn(t))Number.isInteger(e)?t.value=e:!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?t.value=String(e):Array.isArray(e)?t.checked=e.some(n=>Mn(n,t.value)):t.checked=!!e;else if(t.tagName==="SELECT")oa(t,e);else{if(t.value===e)return;t.value=e===void 0?"":e}}function ta(t,e){t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedClasses=fn(t,e)}function ea(t,e){t._x_undoAddedStyles&&t._x_undoAddedStyles(),t._x_undoAddedStyles=se(t,e)}function na(t,e,n){Ar(t,e,n),ia(t,e,n)}function Ar(t,e,n){[null,void 0,!1].includes(n)&&ca(e)?t.removeAttribute(e):(Cr(e)&&(n=e),ra(t,e,n))}function ra(t,e,n){t.getAttribute(e)!=n&&t.setAttribute(e,n)}function ia(t,e,n){t[e]!==n&&(t[e]=n)}function oa(t,e){let n=[].concat(e).map(r=>r+"");Array.from(t.options).forEach(r=>{r.selected=n.includes(r.value)})}function aa(t){return t.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function Mn(t,e){return t==e}function ee(t){return[1,"1","true","on","yes",!0].includes(t)?!0:[0,"0","false","off","no",!1].includes(t)?!1:t?!!t:null}var sa=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Cr(t){return sa.has(t)}function ca(t){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(t)}function ua(t,e,n){return t._x_bindings&&t._x_bindings[e]!==void 0?t._x_bindings[e]:Tr(t,e,n)}function la(t,e,n,r=!0){if(t._x_bindings&&t._x_bindings[e]!==void 0)return t._x_bindings[e];if(t._x_inlineBindings&&t._x_inlineBindings[e]!==void 0){let o=t._x_inlineBindings[e];return o.extract=r,nr(()=>gt(t,o.expression))}return Tr(t,e,n)}function Tr(t,e,n){let r=t.getAttribute(e);return r===null?typeof n=="function"?n():n:r===""?!0:Cr(e)?!![e,"true"].includes(r):r}function dn(t){return t.type==="checkbox"||t.localName==="ui-checkbox"||t.localName==="ui-switch"}function Or(t){return t.type==="radio"||t.localName==="ui-radio"}function Rr(t,e){var n;return function(){var r=this,o=arguments,i=function(){n=null,t.apply(r,o)};clearTimeout(n),n=setTimeout(i,e)}}function Lr(t,e){let n;return function(){let r=this,o=arguments;n||(t.apply(r,o),n=!0,setTimeout(()=>n=!1,e))}}function kr({get:t,set:e},{get:n,set:r}){let o=!0,i,a,s=_t(()=>{let c=t(),u=n();if(o)r(ke(c)),o=!1;else{let l=JSON.stringify(c),d=JSON.stringify(u);l!==i?r(ke(c)):l!==d&&e(ke(u))}i=JSON.stringify(t()),a=JSON.stringify(n())});return()=>{Rt(s)}}function ke(t){return typeof t=="object"?JSON.parse(JSON.stringify(t)):t}function fa(t){(Array.isArray(t)?t:[t]).forEach(n=>n(zt))}var pt={},Nn=!1;function da(t,e){if(Nn||(pt=Ot(pt),Nn=!0),e===void 0)return pt[t];pt[t]=e,Qn(pt[t]),typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&pt[t].init()}function pa(){return pt}var Mr={};function ha(t,e){let n=typeof e!="function"?()=>e:e;return t instanceof Element?Nr(t,n()):(Mr[t]=n,()=>{})}function va(t){return Object.entries(Mr).forEach(([e,n])=>{Object.defineProperty(t,e,{get(){return(...r)=>n(...r)}})}),t}function Nr(t,e,n){let r=[];for(;r.length;)r.pop()();let o=Object.entries(e).map(([a,s])=>({name:a,value:s})),i=or(o);return o=o.map(a=>i.find(s=>s.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),an(t,o,n).map(a=>{r.push(a.runCleanups),a()}),()=>{for(;r.length;)r.pop()()}}var Pr={};function ga(t,e){Pr[t]=e}function ma(t,e){return Object.entries(Pr).forEach(([n,r])=>{Object.defineProperty(t,n,{get(){return(...o)=>r.bind(e)(...o)},enumerable:!1})}),t}var ba={get reactive(){return Ot},get release(){return Rt},get effect(){return _t},get raw(){return qn},version:"3.14.8",flushAndStopDeferringMutations:_o,dontAutoEvaluateFunctions:nr,disableEffectScheduling:po,startObservingMutations:en,stopObservingMutations:Xn,setReactivityEngine:ho,onAttributeRemoved:Yn,onAttributesAdded:Jn,closestDataStack:Ct,skipDuringClone:lt,onlyDuringClone:Yo,addRootSelector:mr,addInitSelector:br,interceptClone:ce,addScopeToNode:Kt,deferMutations:yo,mapAttributes:sn,evaluateLater:W,interceptInit:$o,setEvaluator:Co,mergeProxies:qt,extractProp:la,findClosest:kt,onElRemoved:Ze,closestRoot:ae,destroyTree:Mt,interceptor:tr,transition:We,setStyles:se,mutateDom:$,directive:B,entangle:kr,throttle:Lr,debounce:Rr,evaluate:gt,initTree:rt,nextTick:ln,prefixed:Lt,prefix:Lo,plugin:fa,magic:tt,store:da,start:Io,clone:Xo,cloneNode:Go,bound:ua,$data:Zn,watch:zn,walk:yt,data:ga,bind:ha},zt=ba;function Fr(t,e){let n=Object.create(null),r=t.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return e?o=>!!n[o.toLowerCase()]:o=>!!n[o]}var ya="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kc=Fr(ya+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"),_a=Object.freeze({}),Mc=Object.freeze([]),xa=Object.prototype.hasOwnProperty,ue=(t,e)=>xa.call(t,e),mt=Array.isArray,Bt=t=>Ir(t)==="[object Map]",wa=t=>typeof t=="string",pn=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",Sa=Object.prototype.toString,Ir=t=>Sa.call(t),Dr=t=>Ir(t).slice(8,-1),hn=t=>wa(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fe=t=>{let e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ea=/-(\w)/g,Nc=fe(t=>t.replace(Ea,(e,n)=>n?n.toUpperCase():"")),Aa=/\B([A-Z])/g,Pc=fe(t=>t.replace(Aa,"-$1").toLowerCase()),$r=fe(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fc=fe(t=>t?`on${$r(t)}`:""),jr=(t,e)=>t!==e&&(t===t||e===e),Je=new WeakMap,Dt=[],et,bt=Symbol("iterate"),Ye=Symbol("Map key iterate");function Ca(t){return t&&t._isEffect===!0}function Ta(t,e=_a){Ca(t)&&(t=t.raw);let n=La(t,e);return e.lazy||n(),n}function Oa(t){t.active&&(Br(t),t.options.onStop&&t.options.onStop(),t.active=!1)}var Ra=0;function La(t,e){let n=function(){if(!n.active)return t();if(!Dt.includes(n)){Br(n);try{return Ma(),Dt.push(n),et=n,t()}finally{Dt.pop(),Hr(),et=Dt[Dt.length-1]}}};return n.id=Ra++,n.allowRecurse=!!e.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=t,n.deps=[],n.options=e,n}function Br(t){let{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}var Tt=!0,vn=[];function ka(){vn.push(Tt),Tt=!1}function Ma(){vn.push(Tt),Tt=!0}function Hr(){let t=vn.pop();Tt=t===void 0?!0:t}function Q(t,e,n){if(!Tt||et===void 0)return;let r=Je.get(t);r||Je.set(t,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),o.has(et)||(o.add(et),et.deps.push(o),et.options.onTrack&&et.options.onTrack({effect:et,target:t,type:e,key:n}))}function ut(t,e,n,r,o,i){let a=Je.get(t);if(!a)return;let s=new Set,c=l=>{l&&l.forEach(d=>{(d!==et||d.allowRecurse)&&s.add(d)})};if(e==="clear")a.forEach(c);else if(n==="length"&&mt(t))a.forEach((l,d)=>{(d==="length"||d>=r)&&c(l)});else switch(n!==void 0&&c(a.get(n)),e){case"add":mt(t)?hn(n)&&c(a.get("length")):(c(a.get(bt)),Bt(t)&&c(a.get(Ye)));break;case"delete":mt(t)||(c(a.get(bt)),Bt(t)&&c(a.get(Ye)));break;case"set":Bt(t)&&c(a.get(bt));break}let u=l=>{l.options.onTrigger&&l.options.onTrigger({effect:l,target:t,key:n,type:e,newValue:r,oldValue:o,oldTarget:i}),l.options.scheduler?l.options.scheduler(l):l()};s.forEach(u)}var Na=Fr("__proto__,__v_isRef,__isVue"),Kr=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(pn)),Pa=qr(),Fa=qr(!0),Pn=Ia();function Ia(){let t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){let r=D(this);for(let i=0,a=this.length;i<a;i++)Q(r,"get",i+"");let o=r[e](...n);return o===-1||o===!1?r[e](...n.map(D)):o}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ka();let r=D(this)[e].apply(this,n);return Hr(),r}}),t}function qr(t=!1,e=!1){return function(r,o,i){if(o==="__v_isReactive")return!t;if(o==="__v_isReadonly")return t;if(o==="__v_raw"&&i===(t?e?Za:Ur:e?Xa:Wr).get(r))return r;let a=mt(r);if(!t&&a&&ue(Pn,o))return Reflect.get(Pn,o,i);let s=Reflect.get(r,o,i);return(pn(o)?Kr.has(o):Na(o))||(t||Q(r,"get",o),e)?s:Ge(s)?!a||!hn(o)?s.value:s:le(s)?t?Jr(s):yn(s):s}}var Da=$a();function $a(t=!1){return function(n,r,o,i){let a=n[r];if(!t&&(o=D(o),a=D(a),!mt(n)&&Ge(a)&&!Ge(o)))return a.value=o,!0;let s=mt(n)&&hn(r)?Number(r)<n.length:ue(n,r),c=Reflect.set(n,r,o,i);return n===D(i)&&(s?jr(o,a)&&ut(n,"set",r,o,a):ut(n,"add",r,o)),c}}function ja(t,e){let n=ue(t,e),r=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&ut(t,"delete",e,void 0,r),o}function Ba(t,e){let n=Reflect.has(t,e);return(!pn(e)||!Kr.has(e))&&Q(t,"has",e),n}function Ha(t){return Q(t,"iterate",mt(t)?"length":bt),Reflect.ownKeys(t)}var Ka={get:Pa,set:Da,deleteProperty:ja,has:Ba,ownKeys:Ha},qa={get:Fa,set(t,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},gn=t=>le(t)?yn(t):t,mn=t=>le(t)?Jr(t):t,bn=t=>t,de=t=>Reflect.getPrototypeOf(t);function Yt(t,e,n=!1,r=!1){t=t.__v_raw;let o=D(t),i=D(e);e!==i&&!n&&Q(o,"get",e),!n&&Q(o,"get",i);let{has:a}=de(o),s=r?bn:n?mn:gn;if(a.call(o,e))return s(t.get(e));if(a.call(o,i))return s(t.get(i));t!==o&&t.get(e)}function Gt(t,e=!1){let n=this.__v_raw,r=D(n),o=D(t);return t!==o&&!e&&Q(r,"has",t),!e&&Q(r,"has",o),t===o?n.has(t):n.has(t)||n.has(o)}function Xt(t,e=!1){return t=t.__v_raw,!e&&Q(D(t),"iterate",bt),Reflect.get(t,"size",t)}function Fn(t){t=D(t);let e=D(this);return de(e).has.call(e,t)||(e.add(t),ut(e,"add",t,t)),this}function In(t,e){e=D(e);let n=D(this),{has:r,get:o}=de(n),i=r.call(n,t);i?Vr(n,r,t):(t=D(t),i=r.call(n,t));let a=o.call(n,t);return n.set(t,e),i?jr(e,a)&&ut(n,"set",t,e,a):ut(n,"add",t,e),this}function Dn(t){let e=D(this),{has:n,get:r}=de(e),o=n.call(e,t);o?Vr(e,n,t):(t=D(t),o=n.call(e,t));let i=r?r.call(e,t):void 0,a=e.delete(t);return o&&ut(e,"delete",t,void 0,i),a}function $n(){let t=D(this),e=t.size!==0,n=Bt(t)?new Map(t):new Set(t),r=t.clear();return e&&ut(t,"clear",void 0,void 0,n),r}function Zt(t,e){return function(r,o){let i=this,a=i.__v_raw,s=D(a),c=e?bn:t?mn:gn;return!t&&Q(s,"iterate",bt),a.forEach((u,l)=>r.call(o,c(u),c(l),i))}}function Qt(t,e,n){return function(...r){let o=this.__v_raw,i=D(o),a=Bt(i),s=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,u=o[t](...r),l=n?bn:e?mn:gn;return!e&&Q(i,"iterate",c?Ye:bt),{next(){let{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:s?[l(d[0]),l(d[1])]:l(d),done:p}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){{let n=e[0]?`on key "${e[0]}" `:"";console.warn(`${$r(t)} operation ${n}failed: target is readonly.`,D(this))}return t==="delete"?!1:this}}function za(){let t={get(i){return Yt(this,i)},get size(){return Xt(this)},has:Gt,add:Fn,set:In,delete:Dn,clear:$n,forEach:Zt(!1,!1)},e={get(i){return Yt(this,i,!1,!0)},get size(){return Xt(this)},has:Gt,add:Fn,set:In,delete:Dn,clear:$n,forEach:Zt(!1,!0)},n={get(i){return Yt(this,i,!0)},get size(){return Xt(this,!0)},has(i){return Gt.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Zt(!0,!1)},r={get(i){return Yt(this,i,!0,!0)},get size(){return Xt(this,!0)},has(i){return Gt.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Zt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Qt(i,!1,!1),n[i]=Qt(i,!0,!1),e[i]=Qt(i,!1,!0),r[i]=Qt(i,!0,!0)}),[t,n,e,r]}var[Va,Wa,Ua,Ja]=za();function zr(t,e){let n=e?t?Ja:Ua:t?Wa:Va;return(r,o,i)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?r:Reflect.get(ue(n,o)&&o in r?n:r,o,i)}var Ya={get:zr(!1,!1)},Ga={get:zr(!0,!1)};function Vr(t,e,n){let r=D(n);if(r!==n&&e.call(t,r)){let o=Dr(t);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Wr=new WeakMap,Xa=new WeakMap,Ur=new WeakMap,Za=new WeakMap;function Qa(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ts(t){return t.__v_skip||!Object.isExtensible(t)?0:Qa(Dr(t))}function yn(t){return t&&t.__v_isReadonly?t:Yr(t,!1,Ka,Ya,Wr)}function Jr(t){return Yr(t,!0,qa,Ga,Ur)}function Yr(t,e,n,r,o){if(!le(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;let i=o.get(t);if(i)return i;let a=ts(t);if(a===0)return t;let s=new Proxy(t,a===2?r:n);return o.set(t,s),s}function D(t){return t&&D(t.__v_raw)||t}function Ge(t){return!!(t&&t.__v_isRef===!0)}tt("nextTick",()=>ln);tt("dispatch",t=>jt.bind(jt,t));tt("watch",(t,{evaluateLater:e,cleanup:n})=>(r,o)=>{let i=e(r),s=zn(()=>{let c;return i(u=>c=u),c},o);n(s)});tt("store",pa);tt("data",t=>Zn(t));tt("root",t=>ae(t));tt("refs",t=>(t._x_refs_proxy||(t._x_refs_proxy=qt(es(t))),t._x_refs_proxy));function es(t){let e=[];return kt(t,n=>{n._x_refs&&e.push(n._x_refs)}),e}var Me={};function Gr(t){return Me[t]||(Me[t]=0),++Me[t]}function ns(t,e){return kt(t,n=>{if(n._x_ids&&n._x_ids[e])return!0})}function rs(t,e){t._x_ids||(t._x_ids={}),t._x_ids[e]||(t._x_ids[e]=Gr(e))}tt("id",(t,{cleanup:e})=>(n,r=null)=>{let o=`${n}${r?`-${r}`:""}`;return is(t,o,e,()=>{let i=ns(t,n),a=i?i._x_ids[n]:Gr(n);return r?`${n}-${a}-${r}`:`${n}-${a}`})});ce((t,e)=>{t._x_id&&(e._x_id=t._x_id)});function is(t,e,n,r){if(t._x_id||(t._x_id={}),t._x_id[e])return t._x_id[e];let o=r();return t._x_id[e]=o,n(()=>{delete t._x_id[e]}),o}tt("el",t=>t);Xr("Focus","focus","focus");Xr("Persist","persist","persist");function Xr(t,e,n){tt(e,r=>G(`You can't use [$${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,r))}B("modelable",(t,{expression:e},{effect:n,evaluateLater:r,cleanup:o})=>{let i=r(e),a=()=>{let l;return i(d=>l=d),l},s=r(`${e} = __placeholder`),c=l=>s(()=>{},{scope:{__placeholder:l}}),u=a();c(u),queueMicrotask(()=>{if(!t._x_model)return;t._x_removeModelListeners.default();let l=t._x_model.get,d=t._x_model.set,p=kr({get(){return l()},set(h){d(h)}},{get(){return a()},set(h){c(h)}});o(p)})});B("teleport",(t,{modifiers:e,expression:n},{cleanup:r})=>{t.tagName.toLowerCase()!=="template"&&G("x-teleport can only be used on a <template> tag",t);let o=jn(n),i=t.content.cloneNode(!0).firstElementChild;t._x_teleport=i,i._x_teleportBack=t,t.setAttribute("data-teleport-template",!0),i.setAttribute("data-teleport-target",!0),t._x_forwardEvents&&t._x_forwardEvents.forEach(s=>{i.addEventListener(s,c=>{c.stopPropagation(),t.dispatchEvent(new c.constructor(c.type,c))})}),Kt(i,{},t);let a=(s,c,u)=>{u.includes("prepend")?c.parentNode.insertBefore(s,c):u.includes("append")?c.parentNode.insertBefore(s,c.nextSibling):c.appendChild(s)};$(()=>{a(i,o,e),lt(()=>{rt(i)})()}),t._x_teleportPutBack=()=>{let s=jn(n);$(()=>{a(t._x_teleport,s,e)})},r(()=>$(()=>{i.remove(),Mt(i)}))});var os=document.createElement("div");function jn(t){let e=lt(()=>document.querySelector(t),()=>os)();return e||G(`Cannot find x-teleport element for selector: "${t}"`),e}var Zr=()=>{};Zr.inline=(t,{modifiers:e},{cleanup:n})=>{e.includes("self")?t._x_ignoreSelf=!0:t._x_ignore=!0,n(()=>{e.includes("self")?delete t._x_ignoreSelf:delete t._x_ignore})};B("ignore",Zr);B("effect",lt((t,{expression:e},{effect:n})=>{n(W(t,e))}));function Xe(t,e,n,r){let o=t,i=c=>r(c),a={},s=(c,u)=>l=>u(c,l);if(n.includes("dot")&&(e=as(e)),n.includes("camel")&&(e=ss(e)),n.includes("passive")&&(a.passive=!0),n.includes("capture")&&(a.capture=!0),n.includes("window")&&(o=window),n.includes("document")&&(o=document),n.includes("debounce")){let c=n[n.indexOf("debounce")+1]||"invalid-wait",u=oe(c.split("ms")[0])?Number(c.split("ms")[0]):250;i=Rr(i,u)}if(n.includes("throttle")){let c=n[n.indexOf("throttle")+1]||"invalid-wait",u=oe(c.split("ms")[0])?Number(c.split("ms")[0]):250;i=Lr(i,u)}return n.includes("prevent")&&(i=s(i,(c,u)=>{u.preventDefault(),c(u)})),n.includes("stop")&&(i=s(i,(c,u)=>{u.stopPropagation(),c(u)})),n.includes("once")&&(i=s(i,(c,u)=>{c(u),o.removeEventListener(e,i,a)})),(n.includes("away")||n.includes("outside"))&&(o=document,i=s(i,(c,u)=>{t.contains(u.target)||u.target.isConnected!==!1&&(t.offsetWidth<1&&t.offsetHeight<1||t._x_isShown!==!1&&c(u))})),n.includes("self")&&(i=s(i,(c,u)=>{u.target===t&&c(u)})),(us(e)||Qr(e))&&(i=s(i,(c,u)=>{ls(u,n)||c(u)})),o.addEventListener(e,i,a),()=>{o.removeEventListener(e,i,a)}}function as(t){return t.replace(/-/g,".")}function ss(t){return t.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function oe(t){return!Array.isArray(t)&&!isNaN(t)}function cs(t){return[" ","_"].includes(t)?t:t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function us(t){return["keydown","keyup"].includes(t)}function Qr(t){return["contextmenu","click","mouse"].some(e=>t.includes(e))}function ls(t,e){let n=e.filter(i=>!["window","document","prevent","stop","once","capture","self","away","outside","passive"].includes(i));if(n.includes("debounce")){let i=n.indexOf("debounce");n.splice(i,oe((n[i+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.includes("throttle")){let i=n.indexOf("throttle");n.splice(i,oe((n[i+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.length===0||n.length===1&&Bn(t.key).includes(n[0]))return!1;let o=["ctrl","shift","alt","meta","cmd","super"].filter(i=>n.includes(i));return n=n.filter(i=>!o.includes(i)),!(o.length>0&&o.filter(a=>((a==="cmd"||a==="super")&&(a="meta"),t[`${a}Key`])).length===o.length&&(Qr(t.type)||Bn(t.key).includes(n[0])))}function Bn(t){if(!t)return[];t=cs(t);let e={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return e[t]=t,Object.keys(e).map(n=>{if(e[n]===t)return n}).filter(n=>n)}B("model",(t,{modifiers:e,expression:n},{effect:r,cleanup:o})=>{let i=t;e.includes("parent")&&(i=t.parentNode);let a=W(i,n),s;typeof n=="string"?s=W(i,`${n} = __placeholder`):typeof n=="function"&&typeof n()=="string"?s=W(i,`${n()} = __placeholder`):s=()=>{};let c=()=>{let p;return a(h=>p=h),Hn(p)?p.get():p},u=p=>{let h;a(y=>h=y),Hn(h)?h.set(p):s(()=>{},{scope:{__placeholder:p}})};typeof n=="string"&&t.type==="radio"&&$(()=>{t.hasAttribute("name")||t.setAttribute("name",n)});var l=t.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(t.type)||e.includes("lazy")?"change":"input";let d=ct?()=>{}:Xe(t,l,e,p=>{u(Ne(t,e,p,c()))});if(e.includes("fill")&&([void 0,null,""].includes(c())||dn(t)&&Array.isArray(c())||t.tagName.toLowerCase()==="select"&&t.multiple)&&u(Ne(t,e,{target:t},c())),t._x_removeModelListeners||(t._x_removeModelListeners={}),t._x_removeModelListeners.default=d,o(()=>t._x_removeModelListeners.default()),t.form){let p=Xe(t.form,"reset",[],h=>{ln(()=>t._x_model&&t._x_model.set(Ne(t,e,{target:t},c())))});o(()=>p())}t._x_model={get(){return c()},set(p){u(p)}},t._x_forceModelUpdate=p=>{p===void 0&&typeof n=="string"&&n.match(/\./)&&(p=""),window.fromModel=!0,$(()=>Er(t,"value",p)),delete window.fromModel},r(()=>{let p=c();e.includes("unintrusive")&&document.activeElement.isSameNode(t)||t._x_forceModelUpdate(p)})});function Ne(t,e,n,r){return $(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail!==null&&n.detail!==void 0?n.detail:n.target.value;if(dn(t))if(Array.isArray(r)){let o=null;return e.includes("number")?o=Pe(n.target.value):e.includes("boolean")?o=ee(n.target.value):o=n.target.value,n.target.checked?r.includes(o)?r:r.concat([o]):r.filter(i=>!fs(i,o))}else return n.target.checked;else{if(t.tagName.toLowerCase()==="select"&&t.multiple)return e.includes("number")?Array.from(n.target.selectedOptions).map(o=>{let i=o.value||o.text;return Pe(i)}):e.includes("boolean")?Array.from(n.target.selectedOptions).map(o=>{let i=o.value||o.text;return ee(i)}):Array.from(n.target.selectedOptions).map(o=>o.value||o.text);{let o;return Or(t)?n.target.checked?o=n.target.value:o=r:o=n.target.value,e.includes("number")?Pe(o):e.includes("boolean")?ee(o):e.includes("trim")?o.trim():o}}})}function Pe(t){let e=t?parseFloat(t):null;return ds(e)?e:t}function fs(t,e){return t==e}function ds(t){return!Array.isArray(t)&&!isNaN(t)}function Hn(t){return t!==null&&typeof t=="object"&&typeof t.get=="function"&&typeof t.set=="function"}B("cloak",t=>queueMicrotask(()=>$(()=>t.removeAttribute(Lt("cloak")))));br(()=>`[${Lt("init")}]`);B("init",lt((t,{expression:e},{evaluate:n})=>typeof e=="string"?!!e.trim()&&n(e,{},!1):n(e,{},!1)));B("text",(t,{expression:e},{effect:n,evaluateLater:r})=>{let o=r(e);n(()=>{o(i=>{$(()=>{t.textContent=i})})})});B("html",(t,{expression:e},{effect:n,evaluateLater:r})=>{let o=r(e);n(()=>{o(i=>{$(()=>{t.innerHTML=i,t._x_ignoreSelf=!0,rt(t),delete t._x_ignoreSelf})})})});sn(cr(":",ur(Lt("bind:"))));var ti=(t,{value:e,modifiers:n,expression:r,original:o},{effect:i,cleanup:a})=>{if(!e){let c={};va(c),W(t,r)(l=>{Nr(t,l,o)},{scope:c});return}if(e==="key")return ps(t,r);if(t._x_inlineBindings&&t._x_inlineBindings[e]&&t._x_inlineBindings[e].extract)return;let s=W(t,r);i(()=>s(c=>{c===void 0&&typeof r=="string"&&r.match(/\./)&&(c=""),$(()=>Er(t,e,c,n))})),a(()=>{t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedStyles&&t._x_undoAddedStyles()})};ti.inline=(t,{value:e,modifiers:n,expression:r})=>{e&&(t._x_inlineBindings||(t._x_inlineBindings={}),t._x_inlineBindings[e]={expression:r,extract:!1})};B("bind",ti);function ps(t,e){t._x_keyExpression=e}mr(()=>`[${Lt("data")}]`);B("data",(t,{expression:e},{cleanup:n})=>{if(hs(t))return;e=e===""?"{}":e;let r={};Be(r,t);let o={};ma(o,r);let i=gt(t,e,{scope:o});(i===void 0||i===!0)&&(i={}),Be(i,t);let a=Ot(i);Qn(a);let s=Kt(t,a);a.init&&gt(t,a.init),n(()=>{a.destroy&&gt(t,a.destroy),s()})});ce((t,e)=>{t._x_dataStack&&(e._x_dataStack=t._x_dataStack,e.setAttribute("data-has-alpine-state",!0))});function hs(t){return ct?Ue?!0:t.hasAttribute("data-has-alpine-state"):!1}B("show",(t,{modifiers:e,expression:n},{effect:r})=>{let o=W(t,n);t._x_doHide||(t._x_doHide=()=>{$(()=>{t.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),t._x_doShow||(t._x_doShow=()=>{$(()=>{t.style.length===1&&t.style.display==="none"?t.removeAttribute("style"):t.style.removeProperty("display")})});let i=()=>{t._x_doHide(),t._x_isShown=!1},a=()=>{t._x_doShow(),t._x_isShown=!0},s=()=>setTimeout(a),c=Ve(d=>d?a():i(),d=>{typeof t._x_toggleAndCascadeWithTransitions=="function"?t._x_toggleAndCascadeWithTransitions(t,d,a,i):d?s():i()}),u,l=!0;r(()=>o(d=>{!l&&d===u||(e.includes("immediate")&&(d?s():i()),c(d),u=d,l=!1)}))});B("for",(t,{expression:e},{effect:n,cleanup:r})=>{let o=gs(e),i=W(t,o.items),a=W(t,t._x_keyExpression||"index");t._x_prevKeys=[],t._x_lookup={},n(()=>vs(t,o,i,a)),r(()=>{Object.values(t._x_lookup).forEach(s=>$(()=>{Mt(s),s.remove()})),delete t._x_prevKeys,delete t._x_lookup})});function vs(t,e,n,r){let o=a=>typeof a=="object"&&!Array.isArray(a),i=t;n(a=>{ms(a)&&a>=0&&(a=Array.from(Array(a).keys(),_=>_+1)),a===void 0&&(a=[]);let s=t._x_lookup,c=t._x_prevKeys,u=[],l=[];if(o(a))a=Object.entries(a).map(([_,w])=>{let O=Kn(e,w,_,a);r(L=>{l.includes(L)&&G("Duplicate key on x-for",t),l.push(L)},{scope:{index:_,...O}}),u.push(O)});else for(let _=0;_<a.length;_++){let w=Kn(e,a[_],_,a);r(O=>{l.includes(O)&&G("Duplicate key on x-for",t),l.push(O)},{scope:{index:_,...w}}),u.push(w)}let d=[],p=[],h=[],y=[];for(let _=0;_<c.length;_++){let w=c[_];l.indexOf(w)===-1&&h.push(w)}c=c.filter(_=>!h.includes(_));let C="template";for(let _=0;_<l.length;_++){let w=l[_],O=c.indexOf(w);if(O===-1)c.splice(_,0,w),d.push([C,_]);else if(O!==_){let L=c.splice(_,1)[0],P=c.splice(O-1,1)[0];c.splice(_,0,P),c.splice(O,0,L),p.push([L,P])}else y.push(w);C=w}for(let _=0;_<h.length;_++){let w=h[_];w in s&&($(()=>{Mt(s[w]),s[w].remove()}),delete s[w])}for(let _=0;_<p.length;_++){let[w,O]=p[_],L=s[w],P=s[O],R=document.createElement("div");$(()=>{P||G('x-for ":key" is undefined or invalid',i,O,s),P.after(R),L.after(P),P._x_currentIfEl&&P.after(P._x_currentIfEl),R.before(L),L._x_currentIfEl&&L.after(L._x_currentIfEl),R.remove()}),P._x_refreshXForScope(u[l.indexOf(O)])}for(let _=0;_<d.length;_++){let[w,O]=d[_],L=w==="template"?i:s[w];L._x_currentIfEl&&(L=L._x_currentIfEl);let P=u[O],R=l[O],m=document.importNode(i.content,!0).firstElementChild,b=Ot(P);Kt(m,b,i),m._x_refreshXForScope=f=>{Object.entries(f).forEach(([g,A])=>{b[g]=A})},$(()=>{L.after(m),lt(()=>rt(m))()}),typeof R=="object"&&G("x-for key cannot be an object, it must be a string or an integer",i),s[R]=m}for(let _=0;_<y.length;_++)s[y[_]]._x_refreshXForScope(u[l.indexOf(y[_])]);i._x_prevKeys=l})}function gs(t){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\s*\(|\)\s*$/g,r=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,o=t.match(r);if(!o)return;let i={};i.items=o[2].trim();let a=o[1].replace(n,"").trim(),s=a.match(e);return s?(i.item=a.replace(e,"").trim(),i.index=s[1].trim(),s[2]&&(i.collection=s[2].trim())):i.item=a,i}function Kn(t,e,n,r){let o={};return/^\[.*\]$/.test(t.item)&&Array.isArray(e)?t.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,s)=>{o[a]=e[s]}):/^\{.*\}$/.test(t.item)&&!Array.isArray(e)&&typeof e=="object"?t.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{o[a]=e[a]}):o[t.item]=e,t.index&&(o[t.index]=n),t.collection&&(o[t.collection]=r),o}function ms(t){return!Array.isArray(t)&&!isNaN(t)}function ei(){}ei.inline=(t,{expression:e},{cleanup:n})=>{let r=ae(t);r._x_refs||(r._x_refs={}),r._x_refs[e]=t,n(()=>delete r._x_refs[e])};B("ref",ei);B("if",(t,{expression:e},{effect:n,cleanup:r})=>{t.tagName.toLowerCase()!=="template"&&G("x-if can only be used on a <template> tag",t);let o=W(t,e),i=()=>{if(t._x_currentIfEl)return t._x_currentIfEl;let s=t.content.cloneNode(!0).firstElementChild;return Kt(s,{},t),$(()=>{t.after(s),lt(()=>rt(s))()}),t._x_currentIfEl=s,t._x_undoIf=()=>{$(()=>{Mt(s),s.remove()}),delete t._x_currentIfEl},s},a=()=>{t._x_undoIf&&(t._x_undoIf(),delete t._x_undoIf)};n(()=>o(s=>{s?i():a()})),r(()=>t._x_undoIf&&t._x_undoIf())});B("id",(t,{expression:e},{evaluate:n})=>{n(e).forEach(o=>rs(t,o))});ce((t,e)=>{t._x_ids&&(e._x_ids=t._x_ids)});sn(cr("@",ur(Lt("on:"))));B("on",lt((t,{value:e,modifiers:n,expression:r},{cleanup:o})=>{let i=r?W(t,r):()=>{};t.tagName.toLowerCase()==="template"&&(t._x_forwardEvents||(t._x_forwardEvents=[]),t._x_forwardEvents.includes(e)||t._x_forwardEvents.push(e));let a=Xe(t,e,n,s=>{i(()=>{},{scope:{$event:s},params:[s]})});o(()=>a())}));pe("Collapse","collapse","collapse");pe("Intersect","intersect","intersect");pe("Focus","trap","focus");pe("Mask","mask","mask");function pe(t,e,n){B(e,r=>G(`You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,r))}zt.setEvaluator(ir);zt.setReactivityEngine({reactive:yn,effect:Ta,release:Oa,raw:D});var bs=zt,q=bs;var ys=Object.create,_n=Object.defineProperty,_s=Object.getPrototypeOf,xs=Object.prototype.hasOwnProperty,ws=Object.getOwnPropertyNames,Ss=Object.getOwnPropertyDescriptor,Es=t=>_n(t,"__esModule",{value:!0}),As=(t,e)=>()=>(e||(e={exports:{}},t(e.exports,e)),e.exports),Cs=(t,e,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ws(e))!xs.call(t,r)&&r!=="default"&&_n(t,r,{get:()=>e[r],enumerable:!(n=Ss(e,r))||n.enumerable});return t},Ts=t=>Cs(Es(_n(t!=null?ys(_s(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t),Os=As((t,e)=>{(function(n,r,o){if(!n)return;for(var i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},a={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},s={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},c={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},u,l=1;l<20;++l)i[111+l]="f"+l;for(l=0;l<=9;++l)i[l+96]=l.toString();function d(f,g,A){if(f.addEventListener){f.addEventListener(g,A,!1);return}f.attachEvent("on"+g,A)}function p(f){if(f.type=="keypress"){var g=String.fromCharCode(f.which);return f.shiftKey||(g=g.toLowerCase()),g}return i[f.which]?i[f.which]:a[f.which]?a[f.which]:String.fromCharCode(f.which).toLowerCase()}function h(f,g){return f.sort().join(",")===g.sort().join(",")}function y(f){var g=[];return f.shiftKey&&g.push("shift"),f.altKey&&g.push("alt"),f.ctrlKey&&g.push("ctrl"),f.metaKey&&g.push("meta"),g}function C(f){if(f.preventDefault){f.preventDefault();return}f.returnValue=!1}function _(f){if(f.stopPropagation){f.stopPropagation();return}f.cancelBubble=!0}function w(f){return f=="shift"||f=="ctrl"||f=="alt"||f=="meta"}function O(){if(!u){u={};for(var f in i)f>95&&f<112||i.hasOwnProperty(f)&&(u[i[f]]=f)}return u}function L(f,g,A){return A||(A=O()[f]?"keydown":"keypress"),A=="keypress"&&g.length&&(A="keydown"),A}function P(f){return f==="+"?["+"]:(f=f.replace(/\+{2}/g,"+plus"),f.split("+"))}function R(f,g){var A,k,F,j=[];for(A=P(f),F=0;F<A.length;++F)k=A[F],c[k]&&(k=c[k]),g&&g!="keypress"&&s[k]&&(k=s[k],j.push("shift")),w(k)&&j.push(k);return g=L(k,j,g),{key:k,modifiers:j,action:g}}function m(f,g){return f===null||f===r?!1:f===g?!0:m(f.parentNode,g)}function b(f){var g=this;if(f=f||r,!(g instanceof b))return new b(f);g.target=f,g._callbacks={},g._directMap={};var A={},k,F=!1,j=!1,H=!1;function U(v){v=v||{};var x=!1,S;for(S in A){if(v[S]){x=!0;continue}A[S]=0}x||(H=!1)}function z(v,x,S,E,N,J){var I,V,At=[],at=S.type;if(!g._callbacks[v])return[];for(at=="keyup"&&w(v)&&(x=[v]),I=0;I<g._callbacks[v].length;++I)if(V=g._callbacks[v][I],!(!E&&V.seq&&A[V.seq]!=V.level)&&at==V.action&&(at=="keypress"&&!S.metaKey&&!S.ctrlKey||h(x,V.modifiers))){var Xi=!E&&V.combo==N,Zi=E&&V.seq==E&&V.level==J;(Xi||Zi)&&g._callbacks[v].splice(I,1),At.push(V)}return At}function K(v,x,S,E){g.stopCallback(x,x.target||x.srcElement,S,E)||v(x,S)===!1&&(C(x),_(x))}g._handleKey=function(v,x,S){var E=z(v,x,S),N,J={},I=0,V=!1;for(N=0;N<E.length;++N)E[N].seq&&(I=Math.max(I,E[N].level));for(N=0;N<E.length;++N){if(E[N].seq){if(E[N].level!=I)continue;V=!0,J[E[N].seq]=1,K(E[N].callback,S,E[N].combo,E[N].seq);continue}V||K(E[N].callback,S,E[N].combo)}var At=S.type=="keypress"&&j;S.type==H&&!w(v)&&!At&&U(J),j=V&&S.type=="keydown"};function Z(v){typeof v.which!="number"&&(v.which=v.keyCode);var x=p(v);if(x){if(v.type=="keyup"&&F===x){F=!1;return}g.handleKey(x,y(v),v)}}function Re(){clearTimeout(k),k=setTimeout(U,1e3)}function M(v,x,S,E){A[v]=0;function N(at){return function(){H=at,++A[v],Re()}}function J(at){K(S,at,v),E!=="keyup"&&(F=p(at)),setTimeout(U,10)}for(var I=0;I<x.length;++I){var V=I+1===x.length,At=V?J:N(E||R(x[I+1]).action);T(x[I],At,E,v,I)}}function T(v,x,S,E,N){g._directMap[v+":"+S]=x,v=v.replace(/\s+/g," ");var J=v.split(" "),I;if(J.length>1){M(v,J,x,S);return}I=R(v,S),g._callbacks[I.key]=g._callbacks[I.key]||[],z(I.key,I.modifiers,{type:I.action},E,v,N),g._callbacks[I.key][E?"unshift":"push"]({callback:x,modifiers:I.modifiers,action:I.action,seq:E,level:N,combo:v})}g._bindMultiple=function(v,x,S){for(var E=0;E<v.length;++E)T(v[E],x,S)},d(f,"keypress",Z),d(f,"keydown",Z),d(f,"keyup",Z)}b.prototype.bind=function(f,g,A){var k=this;return f=f instanceof Array?f:[f],k._bindMultiple.call(k,f,g,A),k},b.prototype.unbind=function(f,g){var A=this;return A.bind.call(A,f,function(){},g)},b.prototype.trigger=function(f,g){var A=this;return A._directMap[f+":"+g]&&A._directMap[f+":"+g]({},f),A},b.prototype.reset=function(){var f=this;return f._callbacks={},f._directMap={},f},b.prototype.stopCallback=function(f,g){var A=this;if((" "+g.className+" ").indexOf(" mousetrap ")>-1||m(g,A.target))return!1;if("composedPath"in f&&typeof f.composedPath=="function"){var k=f.composedPath()[0];k!==f.target&&(g=k)}return g.tagName=="INPUT"||g.tagName=="SELECT"||g.tagName=="TEXTAREA"||g.isContentEditable},b.prototype.handleKey=function(){var f=this;return f._handleKey.apply(f,arguments)},b.addKeycodes=function(f){for(var g in f)f.hasOwnProperty(g)&&(i[g]=f[g]);u=null},b.init=function(){var f=b(r);for(var g in f)g.charAt(0)!=="_"&&(b[g]=function(A){return function(){return f[A].apply(f,arguments)}}(g))},b.init(),n.Mousetrap=b,typeof e<"u"&&e.exports&&(e.exports=b),typeof define=="function"&&define.amd&&define(function(){return b})})(typeof window<"u"?window:null,typeof window<"u"?document:null)}),ni=Ts(Os());(function(t){if(t){var e={},n=t.prototype.stopCallback;t.prototype.stopCallback=function(r,o,i,a){var s=this;return s.paused?!0:e[i]||e[a]?!1:n.call(s,r,o,i)},t.prototype.bindGlobal=function(r,o,i){var a=this;if(a.bind(r,o,i),r instanceof Array){for(var s=0;s<r.length;s++)e[r[s]]=!0;return}e[r]=!0},t.init()}})(typeof Mousetrap<"u"?Mousetrap:void 0);var Rs=t=>{t.directive("mousetrap",(e,{modifiers:n,expression:r},{evaluate:o})=>{let i=()=>r?o(r):e.click();n=n.map(a=>a.replace(/-/g,"+")),n.includes("global")&&(n=n.filter(a=>a!=="global"),ni.default.bindGlobal(n,a=>{a.preventDefault(),i()})),ni.default.bind(n,a=>{a.preventDefault(),i()})})},ri=Rs;var ve=Math.min,xt=Math.max,ge=Math.round,he=Math.floor,ft=t=>({x:t,y:t}),Ls={left:"right",right:"left",bottom:"top",top:"bottom"},ks={start:"end",end:"start"};function ii(t,e,n){return xt(t,ve(e,n))}function ye(t,e){return typeof t=="function"?t(e):t}function wt(t){return t.split("-")[0]}function _e(t){return t.split("-")[1]}function fi(t){return t==="x"?"y":"x"}function di(t){return t==="y"?"height":"width"}function xe(t){return["top","bottom"].includes(wt(t))?"y":"x"}function pi(t){return fi(xe(t))}function Ms(t,e,n){n===void 0&&(n=!1);let r=_e(t),o=pi(t),i=di(o),a=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(a=me(a)),[a,me(a)]}function Ns(t){let e=me(t);return[xn(t),e,xn(e)]}function xn(t){return t.replace(/start|end/g,e=>ks[e])}function Ps(t,e,n){let r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return n?e?o:r:e?r:o;case"left":case"right":return e?i:a;default:return[]}}function Fs(t,e,n,r){let o=_e(t),i=Ps(wt(t),n==="start",r);return o&&(i=i.map(a=>a+"-"+o),e&&(i=i.concat(i.map(xn)))),i}function me(t){return t.replace(/left|right|bottom|top/g,e=>Ls[e])}function Is(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ds(t){return typeof t!="number"?Is(t):{top:t,right:t,bottom:t,left:t}}function be(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function oi(t,e,n){let{reference:r,floating:o}=t,i=xe(e),a=pi(e),s=di(a),c=wt(e),u=i==="y",l=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,p=r[s]/2-o[s]/2,h;switch(c){case"top":h={x:l,y:r.y-o.height};break;case"bottom":h={x:l,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-o.width,y:d};break;default:h={x:r.x,y:r.y}}switch(_e(e)){case"start":h[a]-=p*(n&&u?-1:1);break;case"end":h[a]+=p*(n&&u?-1:1);break}return h}var $s=async(t,e,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(e)),u=await a.getElementRects({reference:t,floating:e,strategy:o}),{x:l,y:d}=oi(u,r,c),p=r,h={},y=0;for(let C=0;C<s.length;C++){let{name:_,fn:w}=s[C],{x:O,y:L,data:P,reset:R}=await w({x:l,y:d,initialPlacement:r,placement:p,strategy:o,middlewareData:h,rects:u,platform:a,elements:{reference:t,floating:e}});if(l=O??l,d=L??d,h={...h,[_]:{...h[_],...P}},R&&y<=50){y++,typeof R=="object"&&(R.placement&&(p=R.placement),R.rects&&(u=R.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:o}):R.rects),{x:l,y:d}=oi(u,p,c)),C=-1;continue}}return{x:l,y:d,placement:p,strategy:o,middlewareData:h}};async function hi(t,e){var n;e===void 0&&(e={});let{x:r,y:o,platform:i,rects:a,elements:s,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:l="viewport",elementContext:d="floating",altBoundary:p=!1,padding:h=0}=ye(e,t),y=Ds(h),_=s[p?d==="floating"?"reference":"floating":d],w=be(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(_)))==null||n?_:_.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:l,strategy:c})),O=d==="floating"?{...a.floating,x:r,y:o}:a.reference,L=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),P=await(i.isElement==null?void 0:i.isElement(L))?await(i.getScale==null?void 0:i.getScale(L))||{x:1,y:1}:{x:1,y:1},R=be(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:O,offsetParent:L,strategy:c}):O);return{top:(w.top-R.top+y.top)/P.y,bottom:(R.bottom-w.bottom+y.bottom)/P.y,left:(w.left-R.left+y.left)/P.x,right:(R.right-w.right+y.right)/P.x}}var js=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;let{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:c,elements:u}=e,{mainAxis:l=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:C=!0,..._}=ye(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let w=wt(o),O=wt(s)===s,L=await(c.isRTL==null?void 0:c.isRTL(u.floating)),P=p||(O||!C?[me(s)]:Ns(s));!p&&y!=="none"&&P.push(...Fs(s,C,y,L));let R=[s,...P],m=await hi(e,_),b=[],f=((r=i.flip)==null?void 0:r.overflows)||[];if(l&&b.push(m[w]),d){let F=Ms(o,a,L);b.push(m[F[0]],m[F[1]])}if(f=[...f,{placement:o,overflows:b}],!b.every(F=>F<=0)){var g,A;let F=(((g=i.flip)==null?void 0:g.index)||0)+1,j=R[F];if(j)return{data:{index:F,overflows:f},reset:{placement:j}};let H=(A=f.filter(U=>U.overflows[0]<=0).sort((U,z)=>U.overflows[1]-z.overflows[1])[0])==null?void 0:A.placement;if(!H)switch(h){case"bestFit":{var k;let U=(k=f.map(z=>[z.placement,z.overflows.filter(K=>K>0).reduce((K,Z)=>K+Z,0)]).sort((z,K)=>z[1]-K[1])[0])==null?void 0:k[0];U&&(H=U);break}case"initialPlacement":H=s;break}if(o!==H)return{reset:{placement:H}}}return{}}}};async function Bs(t,e){let{placement:n,platform:r,elements:o}=t,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=wt(n),s=_e(n),c=xe(n)==="y",u=["left","top"].includes(a)?-1:1,l=i&&c?-1:1,d=ye(e,t),{mainAxis:p,crossAxis:h,alignmentAxis:y}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&typeof y=="number"&&(h=s==="end"?y*-1:y),c?{x:h*l,y:p*u}:{x:p*u,y:h*l}}var Hs=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:n,y:r}=e,o=await Bs(e,t);return{x:n+o.x,y:r+o.y,data:o}}}},Ks=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:r,placement:o}=e,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:_=>{let{x:w,y:O}=_;return{x:w,y:O}}},...c}=ye(t,e),u={x:n,y:r},l=await hi(e,c),d=xe(wt(o)),p=fi(d),h=u[p],y=u[d];if(i){let _=p==="y"?"top":"left",w=p==="y"?"bottom":"right",O=h+l[_],L=h-l[w];h=ii(O,h,L)}if(a){let _=d==="y"?"top":"left",w=d==="y"?"bottom":"right",O=y+l[_],L=y-l[w];y=ii(O,y,L)}let C=s.fn({...e,[p]:h,[d]:y});return{...C,data:{x:C.x-n,y:C.y-r}}}}};function dt(t){return vi(t)?(t.nodeName||"").toLowerCase():"#document"}function Y(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ot(t){var e;return(e=(vi(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function vi(t){return t instanceof Node||t instanceof Y(t).Node}function it(t){return t instanceof Element||t instanceof Y(t).Element}function nt(t){return t instanceof HTMLElement||t instanceof Y(t).HTMLElement}function ai(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Y(t).ShadowRoot}function Wt(t){let{overflow:e,overflowX:n,overflowY:r,display:o}=X(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(o)}function qs(t){return["table","td","th"].includes(dt(t))}function wn(t){let e=Sn(),n=X(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function zs(t){let e=Pt(t);for(;nt(e)&&!we(e);){if(wn(e))return e;e=Pt(e)}return null}function Sn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function we(t){return["html","body","#document"].includes(dt(t))}function X(t){return Y(t).getComputedStyle(t)}function Se(t){return it(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Pt(t){if(dt(t)==="html")return t;let e=t.assignedSlot||t.parentNode||ai(t)&&t.host||ot(t);return ai(e)?e.host:e}function gi(t){let e=Pt(t);return we(e)?t.ownerDocument?t.ownerDocument.body:t.body:nt(e)&&Wt(e)?e:gi(e)}function Vt(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);let o=gi(t),i=o===((r=t.ownerDocument)==null?void 0:r.body),a=Y(o);return i?e.concat(a,a.visualViewport||[],Wt(o)?o:[],a.frameElement&&n?Vt(a.frameElement):[]):e.concat(o,Vt(o,[],n))}function mi(t){let e=X(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,o=nt(t),i=o?t.offsetWidth:n,a=o?t.offsetHeight:r,s=ge(n)!==i||ge(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function En(t){return it(t)?t:t.contextElement}function Nt(t){let e=En(t);if(!nt(e))return ft(1);let n=e.getBoundingClientRect(),{width:r,height:o,$:i}=mi(e),a=(i?ge(n.width):n.width)/r,s=(i?ge(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}var Vs=ft(0);function bi(t){let e=Y(t);return!Sn()||!e.visualViewport?Vs:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ws(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Y(t)?!1:e}function St(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);let o=t.getBoundingClientRect(),i=En(t),a=ft(1);e&&(r?it(r)&&(a=Nt(r)):a=Nt(t));let s=Ws(i,n,r)?bi(i):ft(0),c=(o.left+s.x)/a.x,u=(o.top+s.y)/a.y,l=o.width/a.x,d=o.height/a.y;if(i){let p=Y(i),h=r&&it(r)?Y(r):r,y=p.frameElement;for(;y&&r&&h!==p;){let C=Nt(y),_=y.getBoundingClientRect(),w=X(y),O=_.left+(y.clientLeft+parseFloat(w.paddingLeft))*C.x,L=_.top+(y.clientTop+parseFloat(w.paddingTop))*C.y;c*=C.x,u*=C.y,l*=C.x,d*=C.y,c+=O,u+=L,y=Y(y).frameElement}}return be({width:l,height:d,x:c,y:u})}function Us(t){let{rect:e,offsetParent:n,strategy:r}=t,o=nt(n),i=ot(n);if(n===i)return e;let a={scrollLeft:0,scrollTop:0},s=ft(1),c=ft(0);if((o||!o&&r!=="fixed")&&((dt(n)!=="body"||Wt(i))&&(a=Se(n)),nt(n))){let u=St(n);s=Nt(n),c.x=u.x+n.clientLeft,c.y=u.y+n.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-a.scrollLeft*s.x+c.x,y:e.y*s.y-a.scrollTop*s.y+c.y}}function Js(t){return Array.from(t.getClientRects())}function yi(t){return St(ot(t)).left+Se(t).scrollLeft}function Ys(t){let e=ot(t),n=Se(t),r=t.ownerDocument.body,o=xt(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),i=xt(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+yi(t),s=-n.scrollTop;return X(r).direction==="rtl"&&(a+=xt(e.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}function Gs(t,e){let n=Y(t),r=ot(t),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;let u=Sn();(!u||u&&e==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s,y:c}}function Xs(t,e){let n=St(t,!0,e==="fixed"),r=n.top+t.clientTop,o=n.left+t.clientLeft,i=nt(t)?Nt(t):ft(1),a=t.clientWidth*i.x,s=t.clientHeight*i.y,c=o*i.x,u=r*i.y;return{width:a,height:s,x:c,y:u}}function si(t,e,n){let r;if(e==="viewport")r=Gs(t,n);else if(e==="document")r=Ys(ot(t));else if(it(e))r=Xs(e,n);else{let o=bi(t);r={...e,x:e.x-o.x,y:e.y-o.y}}return be(r)}function _i(t,e){let n=Pt(t);return n===e||!it(n)||we(n)?!1:X(n).position==="fixed"||_i(n,e)}function Zs(t,e){let n=e.get(t);if(n)return n;let r=Vt(t,[],!1).filter(s=>it(s)&&dt(s)!=="body"),o=null,i=X(t).position==="fixed",a=i?Pt(t):t;for(;it(a)&&!we(a);){let s=X(a),c=wn(a);!c&&s.position==="fixed"&&(o=null),(i?!c&&!o:!c&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Wt(a)&&!c&&_i(t,a))?r=r.filter(l=>l!==a):o=s,a=Pt(a)}return e.set(t,r),r}function Qs(t){let{element:e,boundary:n,rootBoundary:r,strategy:o}=t,a=[...n==="clippingAncestors"?Zs(e,this._c):[].concat(n),r],s=a[0],c=a.reduce((u,l)=>{let d=si(e,l,o);return u.top=xt(d.top,u.top),u.right=ve(d.right,u.right),u.bottom=ve(d.bottom,u.bottom),u.left=xt(d.left,u.left),u},si(e,s,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function tc(t){return mi(t)}function ec(t,e,n){let r=nt(e),o=ot(e),i=n==="fixed",a=St(t,!0,i,e),s={scrollLeft:0,scrollTop:0},c=ft(0);if(r||!r&&!i)if((dt(e)!=="body"||Wt(o))&&(s=Se(e)),r){let u=St(e,!0,i,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else o&&(c.x=yi(o));return{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function ci(t,e){return!nt(t)||X(t).position==="fixed"?null:e?e(t):t.offsetParent}function xi(t,e){let n=Y(t);if(!nt(t))return n;let r=ci(t,e);for(;r&&qs(r)&&X(r).position==="static";)r=ci(r,e);return r&&(dt(r)==="html"||dt(r)==="body"&&X(r).position==="static"&&!wn(r))?n:r||zs(t)||n}var nc=async function(t){let{reference:e,floating:n,strategy:r}=t,o=this.getOffsetParent||xi,i=this.getDimensions;return{reference:ec(e,await o(n),r),floating:{x:0,y:0,...await i(n)}}};function rc(t){return X(t).direction==="rtl"}var ic={convertOffsetParentRelativeRectToViewportRelativeRect:Us,getDocumentElement:ot,getClippingRect:Qs,getOffsetParent:xi,getElementRects:nc,getClientRects:Js,getDimensions:tc,getScale:Nt,isElement:it,isRTL:rc};function oc(t,e){let n=null,r,o=ot(t);function i(){clearTimeout(r),n&&n.disconnect(),n=null}function a(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),i();let{left:u,top:l,width:d,height:p}=t.getBoundingClientRect();if(s||e(),!d||!p)return;let h=he(l),y=he(o.clientWidth-(u+d)),C=he(o.clientHeight-(l+p)),_=he(u),O={rootMargin:-h+"px "+-y+"px "+-C+"px "+-_+"px",threshold:xt(0,ve(1,c))||1},L=!0;function P(R){let m=R[0].intersectionRatio;if(m!==c){if(!L)return a();m?a(!1,m):r=setTimeout(()=>{a(!1,1e-7)},100)}L=!1}try{n=new IntersectionObserver(P,{...O,root:o.ownerDocument})}catch{n=new IntersectionObserver(P,O)}n.observe(t)}return a(!0),i}function ac(t,e,n,r){r===void 0&&(r={});let{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=En(t),l=o||i?[...u?Vt(u):[],...Vt(e)]:[];l.forEach(w=>{o&&w.addEventListener("scroll",n,{passive:!0}),i&&w.addEventListener("resize",n)});let d=u&&s?oc(u,n):null,p=-1,h=null;a&&(h=new ResizeObserver(w=>{let[O]=w;O&&O.target===u&&h&&(h.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{h&&h.observe(e)})),n()}),u&&!c&&h.observe(u),h.observe(e));let y,C=c?St(t):null;c&&_();function _(){let w=St(t);C&&(w.x!==C.x||w.y!==C.y||w.width!==C.width||w.height!==C.height)&&n(),C=w,y=requestAnimationFrame(_)}return n(),()=>{l.forEach(w=>{o&&w.removeEventListener("scroll",n),i&&w.removeEventListener("resize",n)}),d&&d(),h&&h.disconnect(),h=null,c&&cancelAnimationFrame(y)}}var sc=(t,e,n)=>{let r=new Map,o={platform:ic,...n},i={...o.platform,_c:r};return $s(t,e,{...o,platform:i})};function cc(t){t.magic("anchor",e=>{if(!e._x_anchor)throw"Alpine: No x-anchor directive found on element using $anchor...";return e._x_anchor}),t.interceptClone((e,n)=>{e&&e._x_anchor&&!n._x_anchor&&(n._x_anchor=e._x_anchor)}),t.directive("anchor",t.skipDuringClone((e,{expression:n,modifiers:r,value:o},{cleanup:i,evaluate:a})=>{let{placement:s,offsetValue:c,unstyled:u}=li(r);e._x_anchor=t.reactive({x:0,y:0});let l=a(n);if(!l)throw"Alpine: no element provided to x-anchor...";let d=()=>{let h;sc(l,e,{placement:s,middleware:[js(),Ks({padding:5}),Hs(c)]}).then(({x:y,y:C})=>{u||ui(e,y,C),JSON.stringify({x:y,y:C})!==h&&(e._x_anchor.x=y,e._x_anchor.y=C),h=JSON.stringify({x:y,y:C})})},p=ac(l,e,()=>d());i(()=>p())},(e,{expression:n,modifiers:r,value:o},{cleanup:i,evaluate:a})=>{let{placement:s,offsetValue:c,unstyled:u}=li(r);e._x_anchor&&(u||ui(e,e._x_anchor.x,e._x_anchor.y))}))}function ui(t,e,n){Object.assign(t.style,{left:e+"px",top:n+"px",position:"absolute"})}function li(t){let n=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"].find(i=>t.includes(i)),r=0;if(t.includes("offset")){let i=t.findIndex(a=>a==="offset");r=t[i+1]!==void 0?Number(t[i+1]):r}let o=t.includes("no-style");return{placement:n,offsetValue:r,unstyled:o}}var wi=cc;function uc(t){t.directive("collapse",e),e.inline=(n,{modifiers:r})=>{r.includes("min")&&(n._x_doShow=()=>{},n._x_doHide=()=>{})};function e(n,{modifiers:r}){let o=Si(r,"duration",250)/1e3,i=Si(r,"min",0),a=!r.includes("min");n._x_isShown||(n.style.height=`${i}px`),!n._x_isShown&&a&&(n.hidden=!0),n._x_isShown||(n.style.overflow="hidden");let s=(u,l)=>{let d=t.setStyles(u,l);return l.height?()=>{}:d},c={transitionProperty:"height",transitionDuration:`${o}s`,transitionTimingFunction:"cubic-bezier(0.4, 0.0, 0.2, 1)"};n._x_transition={in(u=()=>{},l=()=>{}){a&&(n.hidden=!1),a&&(n.style.display=null);let d=n.getBoundingClientRect().height;n.style.height="auto";let p=n.getBoundingClientRect().height;d===p&&(d=i),t.transition(n,t.setStyles,{during:c,start:{height:d+"px"},end:{height:p+"px"}},()=>n._x_isShown=!0,()=>{Math.abs(n.getBoundingClientRect().height-p)<1&&(n.style.overflow=null)})},out(u=()=>{},l=()=>{}){let d=n.getBoundingClientRect().height;t.transition(n,s,{during:c,start:{height:d+"px"},end:{height:i+"px"}},()=>n.style.overflow="hidden",()=>{n._x_isShown=!1,n.style.height==`${i}px`&&a&&(n.style.display="none",n.hidden=!0)})}}}}function Si(t,e,n){if(t.indexOf(e)===-1)return n;let r=t[t.indexOf(e)+1];if(!r)return n;if(e==="duration"){let o=r.match(/([0-9]+)ms/);if(o)return o[1]}if(e==="min"){let o=r.match(/([0-9]+)px/);if(o)return o[1]}return r}var Ei=uc;var Mi=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Te=Mi.join(","),Ni=typeof Element>"u",Et=Ni?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,An=!Ni&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},Pi=function(e,n,r){var o=Array.prototype.slice.apply(e.querySelectorAll(Te));return n&&Et.call(e,Te)&&o.unshift(e),o=o.filter(r),o},Fi=function t(e,n,r){for(var o=[],i=Array.from(e);i.length;){var a=i.shift();if(a.tagName==="SLOT"){var s=a.assignedElements(),c=s.length?s:a.children,u=t(c,!0,r);r.flatten?o.push.apply(o,u):o.push({scope:a,candidates:u})}else{var l=Et.call(a,Te);l&&r.filter(a)&&(n||!e.includes(a))&&o.push(a);var d=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),p=!r.shadowRootFilter||r.shadowRootFilter(a);if(d&&p){var h=t(d===!0?a.children:d.children,!0,r);r.flatten?o.push.apply(o,h):o.push({scope:a,candidates:h})}else i.unshift.apply(i,a.children)}}return o},Ii=function(e,n){return e.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},lc=function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex},Di=function(e){return e.tagName==="INPUT"},fc=function(e){return Di(e)&&e.type==="hidden"},dc=function(e){var n=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(r){return r.tagName==="SUMMARY"});return n},pc=function(e,n){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===n)return e[r]},hc=function(e){if(!e.name)return!0;var n=e.form||An(e),r=function(s){return n.querySelectorAll('input[type="radio"][name="'+s+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(e.name));else try{o=r(e.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=pc(o,e.form);return!i||i===e},vc=function(e){return Di(e)&&e.type==="radio"},gc=function(e){return vc(e)&&!hc(e)},Ai=function(e){var n=e.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},mc=function(e,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var i=Et.call(e,"details>summary:first-of-type"),a=i?e.parentElement:e;if(Et.call(a,"details:not([open]) *"))return!0;var s=An(e).host,c=s?.ownerDocument.contains(s)||e.ownerDocument.contains(e);if(!r||r==="full"){if(typeof o=="function"){for(var u=e;e;){var l=e.parentElement,d=An(e);if(l&&!l.shadowRoot&&o(l)===!0)return Ai(e);e.assignedSlot?e=e.assignedSlot:!l&&d!==e.ownerDocument?e=d.host:e=l}e=u}if(c)return!e.getClientRects().length}else if(r==="non-zero-area")return Ai(e);return!1},bc=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var n=e.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return Et.call(n,"fieldset[disabled] *")?!0:!o.contains(e)}return!0}n=n.parentElement}return!1},Oe=function(e,n){return!(n.disabled||fc(n)||mc(n,e)||dc(n)||bc(n))},Cn=function(e,n){return!(gc(n)||Ii(n)<0||!Oe(e,n))},yc=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},_c=function t(e){var n=[],r=[];return e.forEach(function(o,i){var a=!!o.scope,s=a?o.scope:o,c=Ii(s,a),u=a?t(o.candidates):s;c===0?a?n.push.apply(n,u):n.push(s):r.push({documentOrder:i,tabIndex:c,item:o,isScope:a,content:u})}),r.sort(lc).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(n)},xc=function(e,n){n=n||{};var r;return n.getShadowRoot?r=Fi([e],n.includeContainer,{filter:Cn.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:yc}):r=Pi(e,n.includeContainer,Cn.bind(null,n)),_c(r)},$i=function(e,n){n=n||{};var r;return n.getShadowRoot?r=Fi([e],n.includeContainer,{filter:Oe.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):r=Pi(e,n.includeContainer,Oe.bind(null,n)),r},Ee=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return Et.call(e,Te)===!1?!1:Cn(n,e)},wc=Mi.concat("iframe").join(","),Ce=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return Et.call(e,wc)===!1?!1:Oe(n,e)};function Ci(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Ti(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ci(Object(n),!0).forEach(function(r){Sc(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ci(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Sc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Oi=function(){var t=[];return{activateTrap:function(n){if(t.length>0){var r=t[t.length-1];r!==n&&r.pause()}var o=t.indexOf(n);o===-1||t.splice(o,1),t.push(n)},deactivateTrap:function(n){var r=t.indexOf(n);r!==-1&&t.splice(r,1),t.length>0&&t[t.length-1].unpause()}}}(),Ec=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},Ac=function(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27},Cc=function(e){return e.key==="Tab"||e.keyCode===9},Ri=function(e){return setTimeout(e,0)},Li=function(e,n){var r=-1;return e.every(function(o,i){return n(o)?(r=i,!1):!0}),r},Ut=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return typeof e=="function"?e.apply(void 0,r):e},Ae=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Tc=function(e,n){var r=n?.document||document,o=Ti({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},n),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a,s=function(m,b,f){return m&&m[b]!==void 0?m[b]:o[f||b]},c=function(m){return i.containerGroups.findIndex(function(b){var f=b.container,g=b.tabbableNodes;return f.contains(m)||g.find(function(A){return A===m})})},u=function(m){var b=o[m];if(typeof b=="function"){for(var f=arguments.length,g=new Array(f>1?f-1:0),A=1;A<f;A++)g[A-1]=arguments[A];b=b.apply(void 0,g)}if(b===!0&&(b=void 0),!b){if(b===void 0||b===!1)return b;throw new Error("`".concat(m,"` was specified but was not a node, or did not return a node"))}var k=b;if(typeof b=="string"&&(k=r.querySelector(b),!k))throw new Error("`".concat(m,"` as selector refers to no known node"));return k},l=function(){var m=u("initialFocus");if(m===!1)return!1;if(m===void 0)if(c(r.activeElement)>=0)m=r.activeElement;else{var b=i.tabbableGroups[0],f=b&&b.firstTabbableNode;m=f||u("fallbackFocus")}if(!m)throw new Error("Your focus-trap needs to have at least one focusable element");return m},d=function(){if(i.containerGroups=i.containers.map(function(m){var b=xc(m,o.tabbableOptions),f=$i(m,o.tabbableOptions);return{container:m,tabbableNodes:b,focusableNodes:f,firstTabbableNode:b.length>0?b[0]:null,lastTabbableNode:b.length>0?b[b.length-1]:null,nextTabbableNode:function(A){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,F=f.findIndex(function(j){return j===A});if(!(F<0))return k?f.slice(F+1).find(function(j){return Ee(j,o.tabbableOptions)}):f.slice(0,F).reverse().find(function(j){return Ee(j,o.tabbableOptions)})}}}),i.tabbableGroups=i.containerGroups.filter(function(m){return m.tabbableNodes.length>0}),i.tabbableGroups.length<=0&&!u("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},p=function R(m){if(m!==!1&&m!==r.activeElement){if(!m||!m.focus){R(l());return}m.focus({preventScroll:!!o.preventScroll}),i.mostRecentlyFocusedNode=m,Ec(m)&&m.select()}},h=function(m){var b=u("setReturnFocus",m);return b||(b===!1?!1:m)},y=function(m){var b=Ae(m);if(!(c(b)>=0)){if(Ut(o.clickOutsideDeactivates,m)){a.deactivate({returnFocus:o.returnFocusOnDeactivate&&!Ce(b,o.tabbableOptions)});return}Ut(o.allowOutsideClick,m)||m.preventDefault()}},C=function(m){var b=Ae(m),f=c(b)>=0;f||b instanceof Document?f&&(i.mostRecentlyFocusedNode=b):(m.stopImmediatePropagation(),p(i.mostRecentlyFocusedNode||l()))},_=function(m){var b=Ae(m);d();var f=null;if(i.tabbableGroups.length>0){var g=c(b),A=g>=0?i.containerGroups[g]:void 0;if(g<0)m.shiftKey?f=i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:f=i.tabbableGroups[0].firstTabbableNode;else if(m.shiftKey){var k=Li(i.tabbableGroups,function(K){var Z=K.firstTabbableNode;return b===Z});if(k<0&&(A.container===b||Ce(b,o.tabbableOptions)&&!Ee(b,o.tabbableOptions)&&!A.nextTabbableNode(b,!1))&&(k=g),k>=0){var F=k===0?i.tabbableGroups.length-1:k-1,j=i.tabbableGroups[F];f=j.lastTabbableNode}}else{var H=Li(i.tabbableGroups,function(K){var Z=K.lastTabbableNode;return b===Z});if(H<0&&(A.container===b||Ce(b,o.tabbableOptions)&&!Ee(b,o.tabbableOptions)&&!A.nextTabbableNode(b))&&(H=g),H>=0){var U=H===i.tabbableGroups.length-1?0:H+1,z=i.tabbableGroups[U];f=z.firstTabbableNode}}}else f=u("fallbackFocus");f&&(m.preventDefault(),p(f))},w=function(m){if(Ac(m)&&Ut(o.escapeDeactivates,m)!==!1){m.preventDefault(),a.deactivate();return}if(Cc(m)){_(m);return}},O=function(m){var b=Ae(m);c(b)>=0||Ut(o.clickOutsideDeactivates,m)||Ut(o.allowOutsideClick,m)||(m.preventDefault(),m.stopImmediatePropagation())},L=function(){if(i.active)return Oi.activateTrap(a),i.delayInitialFocusTimer=o.delayInitialFocus?Ri(function(){p(l())}):p(l()),r.addEventListener("focusin",C,!0),r.addEventListener("mousedown",y,{capture:!0,passive:!1}),r.addEventListener("touchstart",y,{capture:!0,passive:!1}),r.addEventListener("click",O,{capture:!0,passive:!1}),r.addEventListener("keydown",w,{capture:!0,passive:!1}),a},P=function(){if(i.active)return r.removeEventListener("focusin",C,!0),r.removeEventListener("mousedown",y,!0),r.removeEventListener("touchstart",y,!0),r.removeEventListener("click",O,!0),r.removeEventListener("keydown",w,!0),a};return a={get active(){return i.active},get paused(){return i.paused},activate:function(m){if(i.active)return this;var b=s(m,"onActivate"),f=s(m,"onPostActivate"),g=s(m,"checkCanFocusTrap");g||d(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,b&&b();var A=function(){g&&d(),L(),f&&f()};return g?(g(i.containers.concat()).then(A,A),this):(A(),this)},deactivate:function(m){if(!i.active)return this;var b=Ti({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},m);clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,P(),i.active=!1,i.paused=!1,Oi.deactivateTrap(a);var f=s(b,"onDeactivate"),g=s(b,"onPostDeactivate"),A=s(b,"checkCanReturnFocus"),k=s(b,"returnFocus","returnFocusOnDeactivate");f&&f();var F=function(){Ri(function(){k&&p(h(i.nodeFocusedBeforeActivation)),g&&g()})};return k&&A?(A(h(i.nodeFocusedBeforeActivation)).then(F,F),this):(F(),this)},pause:function(){return i.paused||!i.active?this:(i.paused=!0,P(),this)},unpause:function(){return!i.paused||!i.active?this:(i.paused=!1,d(),L(),this)},updateContainerElements:function(m){var b=[].concat(m).filter(Boolean);return i.containers=b.map(function(f){return typeof f=="string"?r.querySelector(f):f}),i.active&&d(),this}},a.updateContainerElements(e),a};function Oc(t){let e,n;window.addEventListener("focusin",()=>{e=n,n=document.activeElement}),t.magic("focus",r=>{let o=r;return{__noscroll:!1,__wrapAround:!1,within(i){return o=i,this},withoutScrolling(){return this.__noscroll=!0,this},noscroll(){return this.__noscroll=!0,this},withWrapAround(){return this.__wrapAround=!0,this},wrap(){return this.withWrapAround()},focusable(i){return Ce(i)},previouslyFocused(){return e},lastFocused(){return e},focused(){return n},focusables(){return Array.isArray(o)?o:$i(o,{displayCheck:"none"})},all(){return this.focusables()},isFirst(i){let a=this.all();return a[0]&&a[0].isSameNode(i)},isLast(i){let a=this.all();return a.length&&a.slice(-1)[0].isSameNode(i)},getFirst(){return this.all()[0]},getLast(){return this.all().slice(-1)[0]},getNext(){let i=this.all(),a=document.activeElement;if(i.indexOf(a)!==-1)return this.__wrapAround&&i.indexOf(a)===i.length-1?i[0]:i[i.indexOf(a)+1]},getPrevious(){let i=this.all(),a=document.activeElement;if(i.indexOf(a)!==-1)return this.__wrapAround&&i.indexOf(a)===0?i.slice(-1)[0]:i[i.indexOf(a)-1]},first(){this.focus(this.getFirst())},last(){this.focus(this.getLast())},next(){this.focus(this.getNext())},previous(){this.focus(this.getPrevious())},prev(){return this.previous()},focus(i){i&&setTimeout(()=>{i.hasAttribute("tabindex")||i.setAttribute("tabindex","0"),i.focus({preventScroll:this.__noscroll})})}}}),t.directive("trap",t.skipDuringClone((r,{expression:o,modifiers:i},{effect:a,evaluateLater:s,cleanup:c})=>{let u=s(o),l=!1,d={escapeDeactivates:!1,allowOutsideClick:!0,fallbackFocus:()=>r};if(i.includes("noautofocus"))d.initialFocus=!1;else{let _=r.querySelector("[autofocus]");_&&(d.initialFocus=_)}let p=Tc(r,d),h=()=>{},y=()=>{},C=()=>{h(),h=()=>{},y(),y=()=>{},p.deactivate({returnFocus:!i.includes("noreturn")})};a(()=>u(_=>{l!==_&&(_&&!l&&(i.includes("noscroll")&&(y=Rc()),i.includes("inert")&&(h=ki(r)),setTimeout(()=>{p.activate()},15)),!_&&l&&C(),l=!!_)})),c(C)},(r,{expression:o,modifiers:i},{evaluate:a})=>{i.includes("inert")&&a(o)&&ki(r)}))}function ki(t){let e=[];return ji(t,n=>{let r=n.hasAttribute("aria-hidden");n.setAttribute("aria-hidden","true"),e.push(()=>r||n.removeAttribute("aria-hidden"))}),()=>{for(;e.length;)e.pop()()}}function ji(t,e){t.isSameNode(document.body)||!t.parentNode||Array.from(t.parentNode.children).forEach(n=>{n.isSameNode(t)?ji(t.parentNode,e):e(n)})}function Rc(){let t=document.documentElement.style.overflow,e=document.documentElement.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=`${n}px`,()=>{document.documentElement.style.overflow=t,document.documentElement.style.paddingRight=e}}var Bi=Oc;var Hi=()=>({activeHeading:null,init(){q.nextTick(()=>{let t=document.querySelectorAll("h1, h2, h3, h4, h5, h6");t.length>0&&(this.activeHeading=t[0].querySelector("a")?.id);let e=new IntersectionObserver(n=>{let r=n.filter(o=>o.isIntersecting);if(r.length>0){let o=r.reduce((i,a)=>i.boundingClientRect.top<a.boundingClientRect.top?i:a);this.activeHeading=o.target.querySelector("a")?.id}},{rootMargin:"0px 0px -75% 0px",threshold:1});t.forEach(n=>e.observe(n))})}});var Ki=()=>({activeId:null,init(){this.$nextTick(()=>this.activate(this.$id("tab",1)))},activate(t){this.activeId=t},isActive(t){return this.activeId===t},getTabIndex(t,e){return Array.from(e.children).indexOf(t)+1}});var qi=()=>({open:!1,isOpen(){return this.open},toggle(){if(this.open)return this.close();this.$refs.button.focus(),this.open=!0},close(t){this.open&&(this.open=!1,t&&t.focus())},handleFocusInOut(t){let e=this.$refs.panel,n=this.$refs.button,r=t.target;if(e.contains(r)||n.contains(r))return;let o=document.activeElement;this.shouldCloseDropdown(n,e,o)&&this.close(n)},shouldCloseDropdown(t,e,n){return!t.contains(n)&&!e.contains(n)&&n&&t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING}});var zi=()=>({open:!1,isOpen(){return this.open},toggle(){this.open?this.close():this.openSidebar()},openSidebar(){this.open=!0},close(){this.open=!1}});var Wi=ao(Vi(),1),Ui=()=>({codeBlocks:document.querySelectorAll("pre")||[],clipboardIcon:'<svg class="fill-current clipoard h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>',clipboardCopiedIcon:'<svg fill="currentColor" class="fill-current text-green-500 h-5 w-5" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>',init(){this.codeBlocks.forEach((t,e)=>{let n=document.createElement("div");["relative","code-block-wrapper"].forEach(i=>n.classList.add(i)),t.parentNode.insertBefore(n,t),n.appendChild(t);let r=document.createElement("button");r.innerHTML=this.clipboardIcon,r.id=`code-block-copy-button-${e}`,["md:block","hidden"].forEach(i=>r.classList.add(i)),r.setAttribute("aria-label","Copy to Clipboard"),r.setAttribute("title","Copy to Clipboard"),r.classList.add("code-block-copy-button"),n.appendChild(r),new Wi.default(`#${r.id}`).on("success",i=>{r.innerHTML=this.clipboardCopiedIcon,i.clearSelection(),setTimeout(()=>r.innerHTML=this.clipboardIcon,1500)}),t.id=`code-block-text-${e}`,r.dataset.clipboardTarget=`#${t.id}`})}});var Ji=({lightMode:t=null,darkMode:e=null,highlightingLightMode:n=null,highlightingDarkMode:r=null})=>({activeTheme:null,lightMode:t,darkMode:e,updateHighlighterTheme(){let o=this.activeTheme==="dark"?r:n,i=document.createElement("style");i.innerHTML=o,document.head.appendChild(i)},init(){this.activeTheme=localStorage.getItem("theme")??"system",this.updateHighlighterTheme();let o=document.documentElement;window.Alpine.store("theme",this.activeTheme==="dark"||this.activeTheme==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),window.addEventListener("theme-changed",i=>{this.activeTheme=i.detail,localStorage.setItem("theme",this.activeTheme),this.activeTheme==="system"&&(this.activeTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),window.Alpine.store("theme",this.activeTheme)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",i=>{localStorage.getItem("theme")==="system"&&window.Alpine.store("theme",i.matches?"dark":"light")}),window.Alpine.effect(()=>{this.activeTheme=window.Alpine.store("theme"),this.activeTheme==="dark"?this.applyStyles(o,e):this.applyStyles(o,t),this.updateHighlighterTheme()}),this.updateHighlighterTheme()},applyStyles(o,i){Object.entries(JSON.parse(i)).forEach(([a,s])=>{o.style.setProperty(a,s)})}});var Yi=({route:t})=>({query:"",results:[],isLoading:!1,search_history:[],favorite_items:[],maxItemsAllowed:10,route:t,init(){this.search_history=this.getLocalStorage("search_history"),this.favorite_items=this.getLocalStorage("favorite_items"),this.$watch("search_history",e=>this.setLocalStorage("search_history",e)),this.$watch("favorite_items",e=>this.setLocalStorage("favorite_items",e)),this.$watch("query",async e=>{e.trim()===""?this.results=[]:(this.isLoading=!0,this.results=await this.performSearch(e),this.isLoading=!1,console.log(this.results))})},async performSearch(e){let n=await fetch(`${this.route}?q=${e}`);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return await n.json()},getLocalStorage(e){return JSON.parse(localStorage.getItem(e))||[]},setLocalStorage(e,n){localStorage.setItem(e,JSON.stringify(n))},updateList(e,n){return[n,...e.filter(r=>r.title!==n.title)].slice(0,this.maxItemsAllowed)},addToSearchHistory(e,n){let r={title:e,url:n};this.search_history=this.updateList(this.search_history,r)},deleteFromHistory(e){this.search_history=this.search_history.filter(n=>n.title!==e)},deleteAllHistory(){this.search_history=[]},addToFavorites(e,n){this.deleteFromHistory(e);let r={title:e,url:n};this.favorite_items=this.updateList(this.favorite_items,r)},deleteFromFavorites(e){this.favorite_items=this.favorite_items.filter(n=>n.title!==e)},deleteAllFavorites(){this.favorite_items=[]}});var Gi=()=>({svg:'<div class="w-7 h-7 absolute top-0 -left-7 hidden group-hover:flex rounded-md  items-center justify-center shadow-sm text-base-content transition-opacity duration-200 ring-1 hover:brightness-150 ring-base-300" style="margin-right:2px;"><svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512"><path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg></div>',init(){document.querySelector(".prose.content").querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(n=>{let r=n.querySelector("a");n.classList.add("group","relative","cursor-pointer"),n.addEventListener("click",()=>r.click()),r.innerHTML=this.svg})}});q.plugin(wi);q.plugin(Ei);q.plugin(Bi);q.plugin(ri);q.data("themeSwitcher",Ji);q.data("showContentsTweacks",Gi);q.data("tableOfContent",Hi);q.data("codeBlockClipboard",Ui);q.data("tabs",Ki);q.data("dropdown",qi);q.data("sidebar",zi);q.data("search",Yi);window.Alpine=q;q.start();

/*! Bundled license information:

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)

@alpinejs/focus/dist/module.esm.js:
  (*! Bundled license information:

  tabbable/dist/index.esm.js:
    (*!
    * tabbable 5.3.3
    * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
    *)

  focus-trap/dist/focus-trap.esm.js:
    (*!
    * focus-trap 6.9.4
    * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
    *)
  *)
*/

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC9kaXN0L2NsaXBib2FyZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvYWxwaW5lanMvZGlzdC9tb2R1bGUuZXNtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9AZGFuaGFycmluL2FscGluZS1tb3VzZXRyYXAvZGlzdC9tb2R1bGUuZXNtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9AYWxwaW5lanMvYW5jaG9yL2Rpc3QvbW9kdWxlLmVzbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvQGFscGluZWpzL2NvbGxhcHNlL2Rpc3QvbW9kdWxlLmVzbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvQGFscGluZWpzL2ZvY3VzL2Rpc3QvbW9kdWxlLmVzbS5qcyIsICIuLi8uLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy90YWJsZU9mQ29udGVudC5qcyIsICIuLi8uLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy90YWJzLmpzIiwgIi4uLy4uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Ryb3Bkb3duLmpzIiwgIi4uLy4uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3NpZGViYXIuanMiLCAiLi4vLi4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY2xpcGJvYXJkLmpzIiwgIi4uLy4uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3RoZW1lU3dpdGNoZXIuanMiLCAiLi4vLi4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qcyIsICIuLi8uLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9zaG93Q29udGVudHMuanMiLCAiLi4vLi4vcmVzb3VyY2VzL2pzL2FwcC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohXG4gKiBjbGlwYm9hcmQuanMgdjIuMC4xMVxuICogaHR0cHM6Ly9jbGlwYm9hcmRqcy5jb20vXG4gKlxuICogTGljZW5zZWQgTUlUIFx1MDBBOSBaZW5vIFJvY2hhXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gNjg2OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyBFWFBPUlRTXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuICBcImRlZmF1bHRcIjogZnVuY3Rpb24oKSB7IHJldHVybiAvKiBiaW5kaW5nICovIGNsaXBib2FyZDsgfVxufSk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzXG52YXIgdGlueV9lbWl0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzkpO1xudmFyIHRpbnlfZW1pdHRlcl9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubih0aW55X2VtaXR0ZXIpO1xuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9nb29kLWxpc3RlbmVyL3NyYy9saXN0ZW4uanNcbnZhciBsaXN0ZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3MCk7XG52YXIgbGlzdGVuX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGxpc3Rlbik7XG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3NlbGVjdC9zcmMvc2VsZWN0LmpzXG52YXIgc3JjX3NlbGVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oODE3KTtcbnZhciBzZWxlY3RfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oc3JjX3NlbGVjdCk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tbW9uL2NvbW1hbmQuanNcbi8qKlxuICogRXhlY3V0ZXMgYSBnaXZlbiBvcGVyYXRpb24gdHlwZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBjb21tYW5kKHR5cGUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZXhlY0NvbW1hbmQodHlwZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2FjdGlvbnMvY3V0LmpzXG5cblxuLyoqXG4gKiBDdXQgYWN0aW9uIHdyYXBwZXIuXG4gKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxudmFyIENsaXBib2FyZEFjdGlvbkN1dCA9IGZ1bmN0aW9uIENsaXBib2FyZEFjdGlvbkN1dCh0YXJnZXQpIHtcbiAgdmFyIHNlbGVjdGVkVGV4dCA9IHNlbGVjdF9kZWZhdWx0KCkodGFyZ2V0KTtcbiAgY29tbWFuZCgnY3V0Jyk7XG4gIHJldHVybiBzZWxlY3RlZFRleHQ7XG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBhY3Rpb25zX2N1dCA9IChDbGlwYm9hcmRBY3Rpb25DdXQpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbW1vbi9jcmVhdGUtZmFrZS1lbGVtZW50LmpzXG4vKipcbiAqIENyZWF0ZXMgYSBmYWtlIHRleHRhcmVhIGVsZW1lbnQgd2l0aCBhIHZhbHVlLlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmFrZUVsZW1lbnQodmFsdWUpIHtcbiAgdmFyIGlzUlRMID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlyJykgPT09ICdydGwnO1xuICB2YXIgZmFrZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpOyAvLyBQcmV2ZW50IHpvb21pbmcgb24gaU9TXG5cbiAgZmFrZUVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnMTJwdCc7IC8vIFJlc2V0IGJveCBtb2RlbFxuXG4gIGZha2VFbGVtZW50LnN0eWxlLmJvcmRlciA9ICcwJztcbiAgZmFrZUVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgZmFrZUVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzAnOyAvLyBNb3ZlIGVsZW1lbnQgb3V0IG9mIHNjcmVlbiBob3Jpem9udGFsbHlcblxuICBmYWtlRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGZha2VFbGVtZW50LnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7IC8vIE1vdmUgZWxlbWVudCB0byB0aGUgc2FtZSBwb3NpdGlvbiB2ZXJ0aWNhbGx5XG5cbiAgdmFyIHlQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICBmYWtlRWxlbWVudC5zdHlsZS50b3AgPSBcIlwiLmNvbmNhdCh5UG9zaXRpb24sIFwicHhcIik7XG4gIGZha2VFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gIGZha2VFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIHJldHVybiBmYWtlRWxlbWVudDtcbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9hY3Rpb25zL2NvcHkuanNcblxuXG5cbi8qKlxuICogQ3JlYXRlIGZha2UgY29weSBhY3Rpb24gd3JhcHBlciB1c2luZyBhIGZha2UgZWxlbWVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxudmFyIGZha2VDb3B5QWN0aW9uID0gZnVuY3Rpb24gZmFrZUNvcHlBY3Rpb24odmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIGZha2VFbGVtZW50ID0gY3JlYXRlRmFrZUVsZW1lbnQodmFsdWUpO1xuICBvcHRpb25zLmNvbnRhaW5lci5hcHBlbmRDaGlsZChmYWtlRWxlbWVudCk7XG4gIHZhciBzZWxlY3RlZFRleHQgPSBzZWxlY3RfZGVmYXVsdCgpKGZha2VFbGVtZW50KTtcbiAgY29tbWFuZCgnY29weScpO1xuICBmYWtlRWxlbWVudC5yZW1vdmUoKTtcbiAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcbn07XG4vKipcbiAqIENvcHkgYWN0aW9uIHdyYXBwZXIuXG4gKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cblxudmFyIENsaXBib2FyZEFjdGlvbkNvcHkgPSBmdW5jdGlvbiBDbGlwYm9hcmRBY3Rpb25Db3B5KHRhcmdldCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keVxuICB9O1xuICB2YXIgc2VsZWN0ZWRUZXh0ID0gJyc7XG5cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgc2VsZWN0ZWRUZXh0ID0gZmFrZUNvcHlBY3Rpb24odGFyZ2V0LCBvcHRpb25zKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmICFbJ3RleHQnLCAnc2VhcmNoJywgJ3VybCcsICd0ZWwnLCAncGFzc3dvcmQnXS5pbmNsdWRlcyh0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXJnZXQudHlwZSkpIHtcbiAgICAvLyBJZiBpbnB1dCB0eXBlIGRvZXNuJ3Qgc3VwcG9ydCBgc2V0U2VsZWN0aW9uUmFuZ2VgLiBTaW11bGF0ZSBpdC4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxJbnB1dEVsZW1lbnQvc2V0U2VsZWN0aW9uUmFuZ2VcbiAgICBzZWxlY3RlZFRleHQgPSBmYWtlQ29weUFjdGlvbih0YXJnZXQudmFsdWUsIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHNlbGVjdGVkVGV4dCA9IHNlbGVjdF9kZWZhdWx0KCkodGFyZ2V0KTtcbiAgICBjb21tYW5kKCdjb3B5Jyk7XG4gIH1cblxuICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgYWN0aW9uc19jb3B5ID0gKENsaXBib2FyZEFjdGlvbkNvcHkpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2FjdGlvbnMvZGVmYXVsdC5qc1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5cblxuLyoqXG4gKiBJbm5lciBmdW5jdGlvbiB3aGljaCBwZXJmb3JtcyBzZWxlY3Rpb24gZnJvbSBlaXRoZXIgYHRleHRgIG9yIGB0YXJnZXRgXG4gKiBwcm9wZXJ0aWVzIGFuZCB0aGVuIGV4ZWN1dGVzIGNvcHkgb3IgY3V0IG9wZXJhdGlvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbnZhciBDbGlwYm9hcmRBY3Rpb25EZWZhdWx0ID0gZnVuY3Rpb24gQ2xpcGJvYXJkQWN0aW9uRGVmYXVsdCgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAvLyBEZWZpbmVzIGJhc2UgcHJvcGVydGllcyBwYXNzZWQgZnJvbSBjb25zdHJ1Y3Rvci5cbiAgdmFyIF9vcHRpb25zJGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uLFxuICAgICAgYWN0aW9uID0gX29wdGlvbnMkYWN0aW9uID09PSB2b2lkIDAgPyAnY29weScgOiBfb3B0aW9ucyRhY3Rpb24sXG4gICAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcixcbiAgICAgIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0LFxuICAgICAgdGV4dCA9IG9wdGlvbnMudGV4dDsgLy8gU2V0cyB0aGUgYGFjdGlvbmAgdG8gYmUgcGVyZm9ybWVkIHdoaWNoIGNhbiBiZSBlaXRoZXIgJ2NvcHknIG9yICdjdXQnLlxuXG4gIGlmIChhY3Rpb24gIT09ICdjb3B5JyAmJiBhY3Rpb24gIT09ICdjdXQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwiYWN0aW9uXCIgdmFsdWUsIHVzZSBlaXRoZXIgXCJjb3B5XCIgb3IgXCJjdXRcIicpO1xuICB9IC8vIFNldHMgdGhlIGB0YXJnZXRgIHByb3BlcnR5IHVzaW5nIGFuIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGhhdmUgaXRzIGNvbnRlbnQgY29waWVkLlxuXG5cbiAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRhcmdldCAmJiBfdHlwZW9mKHRhcmdldCkgPT09ICdvYmplY3QnICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgaWYgKGFjdGlvbiA9PT0gJ2NvcHknICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBQbGVhc2UgdXNlIFwicmVhZG9ubHlcIiBpbnN0ZWFkIG9mIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbiA9PT0gJ2N1dCcgJiYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykgfHwgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBZb3UgY2FuXFwndCBjdXQgdGV4dCBmcm9tIGVsZW1lbnRzIHdpdGggXCJyZWFkb25seVwiIG9yIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGVzJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7XG4gICAgfVxuICB9IC8vIERlZmluZSBzZWxlY3Rpb24gc3RyYXRlZ3kgYmFzZWQgb24gYHRleHRgIHByb3BlcnR5LlxuXG5cbiAgaWYgKHRleHQpIHtcbiAgICByZXR1cm4gYWN0aW9uc19jb3B5KHRleHQsIHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyXG4gICAgfSk7XG4gIH0gLy8gRGVmaW5lcyB3aGljaCBzZWxlY3Rpb24gc3RyYXRlZ3kgYmFzZWQgb24gYHRhcmdldGAgcHJvcGVydHkuXG5cblxuICBpZiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9PT0gJ2N1dCcgPyBhY3Rpb25zX2N1dCh0YXJnZXQpIDogYWN0aW9uc19jb3B5KHRhcmdldCwge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJcbiAgICB9KTtcbiAgfVxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgYWN0aW9uc19kZWZhdWx0ID0gKENsaXBib2FyZEFjdGlvbkRlZmF1bHQpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NsaXBib2FyZC5qc1xuZnVuY3Rpb24gY2xpcGJvYXJkX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgY2xpcGJvYXJkX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBjbGlwYm9hcmRfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIGNsaXBib2FyZF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKGNsaXBib2FyZF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5cblxuXG5cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgYXR0cmlidXRlIHZhbHVlLlxuICogQHBhcmFtIHtTdHJpbmd9IHN1ZmZpeFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlVmFsdWUoc3VmZml4LCBlbGVtZW50KSB7XG4gIHZhciBhdHRyaWJ1dGUgPSBcImRhdGEtY2xpcGJvYXJkLVwiLmNvbmNhdChzdWZmaXgpO1xuXG4gIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIHdoaWNoIHRha2VzIG9uZSBvciBtb3JlIGVsZW1lbnRzLCBhZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGVtLFxuICogYW5kIGluc3RhbnRpYXRlcyBhIG5ldyBgQ2xpcGJvYXJkQWN0aW9uYCBvbiBlYWNoIGNsaWNrLlxuICovXG5cblxudmFyIENsaXBib2FyZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0VtaXR0ZXIpIHtcbiAgX2luaGVyaXRzKENsaXBib2FyZCwgX0VtaXR0ZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQ2xpcGJvYXJkKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRyaWdnZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGZ1bmN0aW9uIENsaXBib2FyZCh0cmlnZ2VyLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsaXBib2FyZCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgX3RoaXMucmVzb2x2ZU9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBfdGhpcy5saXN0ZW5DbGljayh0cmlnZ2VyKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcbiAgICogRGVmaW5lcyBpZiBhdHRyaWJ1dGVzIHdvdWxkIGJlIHJlc29sdmVkIHVzaW5nIGludGVybmFsIHNldHRlciBmdW5jdGlvbnNcbiAgICogb3IgY3VzdG9tIGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQ2xpcGJvYXJkLCBbe1xuICAgIGtleTogXCJyZXNvbHZlT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIHRoaXMuYWN0aW9uID0gdHlwZW9mIG9wdGlvbnMuYWN0aW9uID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5hY3Rpb24gOiB0aGlzLmRlZmF1bHRBY3Rpb247XG4gICAgICB0aGlzLnRhcmdldCA9IHR5cGVvZiBvcHRpb25zLnRhcmdldCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGFyZ2V0IDogdGhpcy5kZWZhdWx0VGFyZ2V0O1xuICAgICAgdGhpcy50ZXh0ID0gdHlwZW9mIG9wdGlvbnMudGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGV4dCA6IHRoaXMuZGVmYXVsdFRleHQ7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNsaXBib2FyZF90eXBlb2Yob3B0aW9ucy5jb250YWluZXIpID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuY29udGFpbmVyIDogZG9jdW1lbnQuYm9keTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwYXNzZWQgdHJpZ2dlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdHJpZ2dlclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuQ2xpY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuQ2xpY2sodHJpZ2dlcikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5fZGVmYXVsdCgpKHRyaWdnZXIsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIub25DbGljayhlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgbmV3IGBDbGlwYm9hcmRBY3Rpb25gIG9uIGVhY2ggY2xpY2sgZXZlbnQuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25DbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgIHZhciB0cmlnZ2VyID0gZS5kZWxlZ2F0ZVRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3Rpb24odHJpZ2dlcikgfHwgJ2NvcHknO1xuICAgICAgdmFyIHRleHQgPSBhY3Rpb25zX2RlZmF1bHQoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCh0cmlnZ2VyKSxcbiAgICAgICAgdGV4dDogdGhpcy50ZXh0KHRyaWdnZXIpXG4gICAgICB9KTsgLy8gRmlyZXMgYW4gZXZlbnQgYmFzZWQgb24gdGhlIGNvcHkgb3BlcmF0aW9uIHJlc3VsdC5cblxuICAgICAgdGhpcy5lbWl0KHRleHQgPyAnc3VjY2VzcycgOiAnZXJyb3InLCB7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICAgICAgICBjbGVhclNlbGVjdGlvbjogZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHRyaWdnZXIuZm9jdXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGBhY3Rpb25gIGxvb2t1cCBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRyaWdnZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRBY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ2FjdGlvbicsIHRyaWdnZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGB0YXJnZXRgIGxvb2t1cCBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRyaWdnZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRUYXJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdFRhcmdldCh0cmlnZ2VyKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBnZXRBdHRyaWJ1dGVWYWx1ZSgndGFyZ2V0JywgdHJpZ2dlcik7XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsbG93IGZpcmUgcHJvZ3JhbW1hdGljYWxseSBhIGNvcHkgYWN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybnMgVGV4dCBjb3BpZWQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0VGV4dFwiLFxuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBgdGV4dGAgbG9va3VwIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VGV4dCh0cmlnZ2VyKSB7XG4gICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ3RleHQnLCB0cmlnZ2VyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVzdHJveSBsaWZlY3ljbGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJjb3B5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvcHkodGFyZ2V0KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHlcbiAgICAgIH07XG4gICAgICByZXR1cm4gYWN0aW9uc19jb3B5KHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsbG93IGZpcmUgcHJvZ3JhbW1hdGljYWxseSBhIGN1dCBhY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAgICogQHJldHVybnMgVGV4dCBjdXR0ZWQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3V0KHRhcmdldCkge1xuICAgICAgcmV0dXJuIGFjdGlvbnNfY3V0KHRhcmdldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1cHBvcnQgb2YgdGhlIGdpdmVuIGFjdGlvbiwgb3IgYWxsIGFjdGlvbnMgaWYgbm8gYWN0aW9uIGlzXG4gICAgICogZ2l2ZW4uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFthY3Rpb25dXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc1N1cHBvcnRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcbiAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnY29weScsICdjdXQnXTtcbiAgICAgIHZhciBhY3Rpb25zID0gdHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycgPyBbYWN0aW9uXSA6IGFjdGlvbjtcbiAgICAgIHZhciBzdXBwb3J0ID0gISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQ7XG4gICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBzdXBwb3J0ID0gc3VwcG9ydCAmJiAhIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZChhY3Rpb24pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3VwcG9ydDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2xpcGJvYXJkO1xufSgodGlueV9lbWl0dGVyX2RlZmF1bHQoKSkpO1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjbGlwYm9hcmQgPSAoQ2xpcGJvYXJkKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDgyODpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxudmFyIERPQ1VNRU5UX05PREVfVFlQRSA9IDk7XG5cbi8qKlxuICogQSBwb2x5ZmlsbCBmb3IgRWxlbWVudC5tYXRjaGVzKClcbiAqL1xuaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8ubWF0Y2hlcyA9IHByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGNsb3Nlc3QgcGFyZW50IHRoYXQgbWF0Y2hlcyBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdCAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSBET0NVTUVOVF9OT0RFX1RZUEUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA0Mzg6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNsb3Nlc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgyOCk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfEFycmF5fSBbZWxlbWVudHNdXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnRzLCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEVsZW1lbnQtbGVzcyB1c2FnZSwgaXQgZGVmYXVsdHMgdG8gZ2xvYmFsIGRlbGVnYXRpb25cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVXNlIGBkb2N1bWVudGAgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgdGhlbiBhcHBseSBhcmd1bWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0IHdheSB0byAudW5zaGlmdCBgYXJndW1lbnRzYCB3aXRob3V0IHJ1bm5pbmcgaW50byBkZW9wdGltaXphdGlvbnNcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGNsb3Nlc3QoZS50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gODc5OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBIVE1MIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgJiYgdmFsdWUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5ub2RlTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgKHR5cGUgPT09ICdbb2JqZWN0IE5vZGVMaXN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJylcbiAgICAgICAgJiYgKCdsZW5ndGgnIGluIHZhbHVlKVxuICAgICAgICAmJiAodmFsdWUubGVuZ3RoID09PSAwIHx8IGV4cG9ydHMubm9kZSh2YWx1ZVswXSkpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuc3RyaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuZm4gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB0eXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMzcwOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpcyA9IF9fd2VicGFja19yZXF1aXJlX18oODc5KTtcbnZhciBkZWxlZ2F0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNDM4KTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgYWxsIHBhcmFtcyBhbmQgY2FsbHMgdGhlIHJpZ2h0XG4gKiBsaXN0ZW5lciBmdW5jdGlvbiBiYXNlZCBvbiBpdHMgdGFyZ2V0IHR5cGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRhcmdldFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0YXJnZXQgJiYgIXR5cGUgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudHMnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzLnN0cmluZyh0eXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIFN0cmluZycpO1xuICAgIH1cblxuICAgIGlmICghaXMuZm4oY2FsbGJhY2spKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoaXJkIGFyZ3VtZW50IG11c3QgYmUgYSBGdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChpcy5ub2RlKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Rlbk5vZGUodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzLm5vZGVMaXN0KHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Rlbk5vZGVMaXN0KHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIGlmIChpcy5zdHJpbmcodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuU2VsZWN0b3IodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nLCBIVE1MRWxlbWVudCwgSFRNTENvbGxlY3Rpb24sIG9yIE5vZGVMaXN0Jyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBIVE1MIGVsZW1lbnRcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5Ob2RlKG5vZGUsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBsaXN0IG9mIEhUTUwgZWxlbWVudHNcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb259IG5vZGVMaXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuTm9kZUxpc3Qobm9kZUxpc3QsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlTGlzdCwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhIHNlbGVjdG9yXG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5TZWxlY3RvcihzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZGVsZWdhdGUoZG9jdW1lbnQuYm9keSwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0ZW47XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDgxNzpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxuZnVuY3Rpb24gc2VsZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgc2VsZWN0ZWRUZXh0O1xuXG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsZW1lbnQubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgdmFyIGlzUmVhZE9ubHkgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2VsZWN0KCk7XG4gICAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgZWxlbWVudC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbGVjdDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMjc5OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5mdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcbm1vZHVsZS5leHBvcnRzLlRpbnlFbWl0dGVyID0gRTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0ICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyg2ODYpO1xuLyoqKioqKi8gfSkoKVxuLmRlZmF1bHQ7XG59KTsiLCAiLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3NjaGVkdWxlci5qc1xudmFyIGZsdXNoUGVuZGluZyA9IGZhbHNlO1xudmFyIGZsdXNoaW5nID0gZmFsc2U7XG52YXIgcXVldWUgPSBbXTtcbnZhciBsYXN0Rmx1c2hlZEluZGV4ID0gLTE7XG5mdW5jdGlvbiBzY2hlZHVsZXIoY2FsbGJhY2spIHtcbiAgcXVldWVKb2IoY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gcXVldWVKb2Ioam9iKSB7XG4gIGlmICghcXVldWUuaW5jbHVkZXMoam9iKSlcbiAgICBxdWV1ZS5wdXNoKGpvYik7XG4gIHF1ZXVlRmx1c2goKTtcbn1cbmZ1bmN0aW9uIGRlcXVldWVKb2Ioam9iKSB7XG4gIGxldCBpbmRleCA9IHF1ZXVlLmluZGV4T2Yoam9iKTtcbiAgaWYgKGluZGV4ICE9PSAtMSAmJiBpbmRleCA+IGxhc3RGbHVzaGVkSW5kZXgpXG4gICAgcXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbn1cbmZ1bmN0aW9uIHF1ZXVlRmx1c2goKSB7XG4gIGlmICghZmx1c2hpbmcgJiYgIWZsdXNoUGVuZGluZykge1xuICAgIGZsdXNoUGVuZGluZyA9IHRydWU7XG4gICAgcXVldWVNaWNyb3Rhc2soZmx1c2hKb2JzKTtcbiAgfVxufVxuZnVuY3Rpb24gZmx1c2hKb2JzKCkge1xuICBmbHVzaFBlbmRpbmcgPSBmYWxzZTtcbiAgZmx1c2hpbmcgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0oKTtcbiAgICBsYXN0Rmx1c2hlZEluZGV4ID0gaTtcbiAgfVxuICBxdWV1ZS5sZW5ndGggPSAwO1xuICBsYXN0Rmx1c2hlZEluZGV4ID0gLTE7XG4gIGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9yZWFjdGl2aXR5LmpzXG52YXIgcmVhY3RpdmU7XG52YXIgZWZmZWN0O1xudmFyIHJlbGVhc2U7XG52YXIgcmF3O1xudmFyIHNob3VsZFNjaGVkdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVFZmZlY3RTY2hlZHVsaW5nKGNhbGxiYWNrKSB7XG4gIHNob3VsZFNjaGVkdWxlID0gZmFsc2U7XG4gIGNhbGxiYWNrKCk7XG4gIHNob3VsZFNjaGVkdWxlID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHNldFJlYWN0aXZpdHlFbmdpbmUoZW5naW5lKSB7XG4gIHJlYWN0aXZlID0gZW5naW5lLnJlYWN0aXZlO1xuICByZWxlYXNlID0gZW5naW5lLnJlbGVhc2U7XG4gIGVmZmVjdCA9IChjYWxsYmFjaykgPT4gZW5naW5lLmVmZmVjdChjYWxsYmFjaywgeyBzY2hlZHVsZXI6ICh0YXNrKSA9PiB7XG4gICAgaWYgKHNob3VsZFNjaGVkdWxlKSB7XG4gICAgICBzY2hlZHVsZXIodGFzayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2soKTtcbiAgICB9XG4gIH0gfSk7XG4gIHJhdyA9IGVuZ2luZS5yYXc7XG59XG5mdW5jdGlvbiBvdmVycmlkZUVmZmVjdChvdmVycmlkZSkge1xuICBlZmZlY3QgPSBvdmVycmlkZTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCb3VuZEVmZmVjdChlbCkge1xuICBsZXQgY2xlYW51cDIgPSAoKSA9PiB7XG4gIH07XG4gIGxldCB3cmFwcGVkRWZmZWN0ID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGVmZmVjdFJlZmVyZW5jZSA9IGVmZmVjdChjYWxsYmFjayk7XG4gICAgaWYgKCFlbC5feF9lZmZlY3RzKSB7XG4gICAgICBlbC5feF9lZmZlY3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICAgIGVsLl94X3J1bkVmZmVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGVsLl94X2VmZmVjdHMuZm9yRWFjaCgoaSkgPT4gaSgpKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGVsLl94X2VmZmVjdHMuYWRkKGVmZmVjdFJlZmVyZW5jZSk7XG4gICAgY2xlYW51cDIgPSAoKSA9PiB7XG4gICAgICBpZiAoZWZmZWN0UmVmZXJlbmNlID09PSB2b2lkIDApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGVsLl94X2VmZmVjdHMuZGVsZXRlKGVmZmVjdFJlZmVyZW5jZSk7XG4gICAgICByZWxlYXNlKGVmZmVjdFJlZmVyZW5jZSk7XG4gICAgfTtcbiAgICByZXR1cm4gZWZmZWN0UmVmZXJlbmNlO1xuICB9O1xuICByZXR1cm4gW3dyYXBwZWRFZmZlY3QsICgpID0+IHtcbiAgICBjbGVhbnVwMigpO1xuICB9XTtcbn1cbmZ1bmN0aW9uIHdhdGNoKGdldHRlciwgY2FsbGJhY2spIHtcbiAgbGV0IGZpcnN0VGltZSA9IHRydWU7XG4gIGxldCBvbGRWYWx1ZTtcbiAgbGV0IGVmZmVjdFJlZmVyZW5jZSA9IGVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZ2V0dGVyKCk7XG4gICAgSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIGlmICghZmlyc3RUaW1lKSB7XG4gICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4gcmVsZWFzZShlZmZlY3RSZWZlcmVuY2UpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbXV0YXRpb24uanNcbnZhciBvbkF0dHJpYnV0ZUFkZGVkcyA9IFtdO1xudmFyIG9uRWxSZW1vdmVkcyA9IFtdO1xudmFyIG9uRWxBZGRlZHMgPSBbXTtcbmZ1bmN0aW9uIG9uRWxBZGRlZChjYWxsYmFjaykge1xuICBvbkVsQWRkZWRzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb25FbFJlbW92ZWQoZWwsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGlmICghZWwuX3hfY2xlYW51cHMpXG4gICAgICBlbC5feF9jbGVhbnVwcyA9IFtdO1xuICAgIGVsLl94X2NsZWFudXBzLnB1c2goY2FsbGJhY2spO1xuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrID0gZWw7XG4gICAgb25FbFJlbW92ZWRzLnB1c2goY2FsbGJhY2spO1xuICB9XG59XG5mdW5jdGlvbiBvbkF0dHJpYnV0ZXNBZGRlZChjYWxsYmFjaykge1xuICBvbkF0dHJpYnV0ZUFkZGVkcy5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIG9uQXR0cmlidXRlUmVtb3ZlZChlbCwgbmFtZSwgY2FsbGJhY2spIHtcbiAgaWYgKCFlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcylcbiAgICBlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcyA9IHt9O1xuICBpZiAoIWVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdKVxuICAgIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdID0gW107XG4gIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gY2xlYW51cEF0dHJpYnV0ZXMoZWwsIG5hbWVzKSB7XG4gIGlmICghZWwuX3hfYXR0cmlidXRlQ2xlYW51cHMpXG4gICAgcmV0dXJuO1xuICBPYmplY3QuZW50cmllcyhlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcykuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgIGlmIChuYW1lcyA9PT0gdm9pZCAwIHx8IG5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICAgICAgZGVsZXRlIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBjbGVhbnVwRWxlbWVudChlbCkge1xuICBlbC5feF9lZmZlY3RzPy5mb3JFYWNoKGRlcXVldWVKb2IpO1xuICB3aGlsZSAoZWwuX3hfY2xlYW51cHM/Lmxlbmd0aClcbiAgICBlbC5feF9jbGVhbnVwcy5wb3AoKSgpO1xufVxudmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob25NdXRhdGUpO1xudmFyIGN1cnJlbnRseU9ic2VydmluZyA9IGZhbHNlO1xuZnVuY3Rpb24gc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMoKSB7XG4gIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHsgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSB9KTtcbiAgY3VycmVudGx5T2JzZXJ2aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHN0b3BPYnNlcnZpbmdNdXRhdGlvbnMoKSB7XG4gIGZsdXNoT2JzZXJ2ZXIoKTtcbiAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBjdXJyZW50bHlPYnNlcnZpbmcgPSBmYWxzZTtcbn1cbnZhciBxdWV1ZWRNdXRhdGlvbnMgPSBbXTtcbmZ1bmN0aW9uIGZsdXNoT2JzZXJ2ZXIoKSB7XG4gIGxldCByZWNvcmRzID0gb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcbiAgcXVldWVkTXV0YXRpb25zLnB1c2goKCkgPT4gcmVjb3Jkcy5sZW5ndGggPiAwICYmIG9uTXV0YXRlKHJlY29yZHMpKTtcbiAgbGV0IHF1ZXVlTGVuZ3RoV2hlblRyaWdnZXJlZCA9IHF1ZXVlZE11dGF0aW9ucy5sZW5ndGg7XG4gIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICBpZiAocXVldWVkTXV0YXRpb25zLmxlbmd0aCA9PT0gcXVldWVMZW5ndGhXaGVuVHJpZ2dlcmVkKSB7XG4gICAgICB3aGlsZSAocXVldWVkTXV0YXRpb25zLmxlbmd0aCA+IDApXG4gICAgICAgIHF1ZXVlZE11dGF0aW9ucy5zaGlmdCgpKCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIG11dGF0ZURvbShjYWxsYmFjaykge1xuICBpZiAoIWN1cnJlbnRseU9ic2VydmluZylcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgc3RvcE9ic2VydmluZ011dGF0aW9ucygpO1xuICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbnZhciBpc0NvbGxlY3RpbmcgPSBmYWxzZTtcbnZhciBkZWZlcnJlZE11dGF0aW9ucyA9IFtdO1xuZnVuY3Rpb24gZGVmZXJNdXRhdGlvbnMoKSB7XG4gIGlzQ29sbGVjdGluZyA9IHRydWU7XG59XG5mdW5jdGlvbiBmbHVzaEFuZFN0b3BEZWZlcnJpbmdNdXRhdGlvbnMoKSB7XG4gIGlzQ29sbGVjdGluZyA9IGZhbHNlO1xuICBvbk11dGF0ZShkZWZlcnJlZE11dGF0aW9ucyk7XG4gIGRlZmVycmVkTXV0YXRpb25zID0gW107XG59XG5mdW5jdGlvbiBvbk11dGF0ZShtdXRhdGlvbnMpIHtcbiAgaWYgKGlzQ29sbGVjdGluZykge1xuICAgIGRlZmVycmVkTXV0YXRpb25zID0gZGVmZXJyZWRNdXRhdGlvbnMuY29uY2F0KG11dGF0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBhZGRlZE5vZGVzID0gW107XG4gIGxldCByZW1vdmVkTm9kZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBsZXQgYWRkZWRBdHRyaWJ1dGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgbGV0IHJlbW92ZWRBdHRyaWJ1dGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobXV0YXRpb25zW2ldLnRhcmdldC5feF9pZ25vcmVNdXRhdGlvbk9ic2VydmVyKVxuICAgICAgY29udGludWU7XG4gICAgaWYgKG11dGF0aW9uc1tpXS50eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XG4gICAgICBtdXRhdGlvbnNbaV0ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IDEpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIW5vZGUuX3hfbWFya2VyKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmVtb3ZlZE5vZGVzLmFkZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgbXV0YXRpb25zW2ldLmFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gMSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChyZW1vdmVkTm9kZXMuaGFzKG5vZGUpKSB7XG4gICAgICAgICAgcmVtb3ZlZE5vZGVzLmRlbGV0ZShub2RlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuX3hfbWFya2VyKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgYWRkZWROb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtdXRhdGlvbnNbaV0udHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgIGxldCBlbCA9IG11dGF0aW9uc1tpXS50YXJnZXQ7XG4gICAgICBsZXQgbmFtZSA9IG11dGF0aW9uc1tpXS5hdHRyaWJ1dGVOYW1lO1xuICAgICAgbGV0IG9sZFZhbHVlID0gbXV0YXRpb25zW2ldLm9sZFZhbHVlO1xuICAgICAgbGV0IGFkZDIgPSAoKSA9PiB7XG4gICAgICAgIGlmICghYWRkZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgYWRkZWRBdHRyaWJ1dGVzLnNldChlbCwgW10pO1xuICAgICAgICBhZGRlZEF0dHJpYnV0ZXMuZ2V0KGVsKS5wdXNoKHsgbmFtZSwgdmFsdWU6IGVsLmdldEF0dHJpYnV0ZShuYW1lKSB9KTtcbiAgICAgIH07XG4gICAgICBsZXQgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXJlbW92ZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgcmVtb3ZlZEF0dHJpYnV0ZXMuc2V0KGVsLCBbXSk7XG4gICAgICAgIHJlbW92ZWRBdHRyaWJ1dGVzLmdldChlbCkucHVzaChuYW1lKTtcbiAgICAgIH07XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpICYmIG9sZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGFkZDIoKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgICBhZGQyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVtb3ZlZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cnMsIGVsKSA9PiB7XG4gICAgY2xlYW51cEF0dHJpYnV0ZXMoZWwsIGF0dHJzKTtcbiAgfSk7XG4gIGFkZGVkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRycywgZWwpID0+IHtcbiAgICBvbkF0dHJpYnV0ZUFkZGVkcy5mb3JFYWNoKChpKSA9PiBpKGVsLCBhdHRycykpO1xuICB9KTtcbiAgZm9yIChsZXQgbm9kZSBvZiByZW1vdmVkTm9kZXMpIHtcbiAgICBpZiAoYWRkZWROb2Rlcy5zb21lKChpKSA9PiBpLmNvbnRhaW5zKG5vZGUpKSlcbiAgICAgIGNvbnRpbnVlO1xuICAgIG9uRWxSZW1vdmVkcy5mb3JFYWNoKChpKSA9PiBpKG5vZGUpKTtcbiAgfVxuICBmb3IgKGxldCBub2RlIG9mIGFkZGVkTm9kZXMpIHtcbiAgICBpZiAoIW5vZGUuaXNDb25uZWN0ZWQpXG4gICAgICBjb250aW51ZTtcbiAgICBvbkVsQWRkZWRzLmZvckVhY2goKGkpID0+IGkobm9kZSkpO1xuICB9XG4gIGFkZGVkTm9kZXMgPSBudWxsO1xuICByZW1vdmVkTm9kZXMgPSBudWxsO1xuICBhZGRlZEF0dHJpYnV0ZXMgPSBudWxsO1xuICByZW1vdmVkQXR0cmlidXRlcyA9IG51bGw7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9zY29wZS5qc1xuZnVuY3Rpb24gc2NvcGUobm9kZSkge1xuICByZXR1cm4gbWVyZ2VQcm94aWVzKGNsb3Nlc3REYXRhU3RhY2sobm9kZSkpO1xufVxuZnVuY3Rpb24gYWRkU2NvcGVUb05vZGUobm9kZSwgZGF0YTIsIHJlZmVyZW5jZU5vZGUpIHtcbiAgbm9kZS5feF9kYXRhU3RhY2sgPSBbZGF0YTIsIC4uLmNsb3Nlc3REYXRhU3RhY2socmVmZXJlbmNlTm9kZSB8fCBub2RlKV07XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbm9kZS5feF9kYXRhU3RhY2sgPSBub2RlLl94X2RhdGFTdGFjay5maWx0ZXIoKGkpID0+IGkgIT09IGRhdGEyKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNsb3Nlc3REYXRhU3RhY2sobm9kZSkge1xuICBpZiAobm9kZS5feF9kYXRhU3RhY2spXG4gICAgcmV0dXJuIG5vZGUuX3hfZGF0YVN0YWNrO1xuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09IFwiZnVuY3Rpb25cIiAmJiBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIHJldHVybiBjbG9zZXN0RGF0YVN0YWNrKG5vZGUuaG9zdCk7XG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIGNsb3Nlc3REYXRhU3RhY2sobm9kZS5wYXJlbnROb2RlKTtcbn1cbmZ1bmN0aW9uIG1lcmdlUHJveGllcyhvYmplY3RzKSB7XG4gIHJldHVybiBuZXcgUHJveHkoeyBvYmplY3RzIH0sIG1lcmdlUHJveHlUcmFwKTtcbn1cbnZhciBtZXJnZVByb3h5VHJhcCA9IHtcbiAgb3duS2V5cyh7IG9iamVjdHMgfSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgbmV3IFNldChvYmplY3RzLmZsYXRNYXAoKGkpID0+IE9iamVjdC5rZXlzKGkpKSlcbiAgICApO1xuICB9LFxuICBoYXMoeyBvYmplY3RzIH0sIG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PSBTeW1ib2wudW5zY29wYWJsZXMpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIG9iamVjdHMuc29tZShcbiAgICAgIChvYmopID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpIHx8IFJlZmxlY3QuaGFzKG9iaiwgbmFtZSlcbiAgICApO1xuICB9LFxuICBnZXQoeyBvYmplY3RzIH0sIG5hbWUsIHRoaXNQcm94eSkge1xuICAgIGlmIChuYW1lID09IFwidG9KU09OXCIpXG4gICAgICByZXR1cm4gY29sbGFwc2VQcm94aWVzO1xuICAgIHJldHVybiBSZWZsZWN0LmdldChcbiAgICAgIG9iamVjdHMuZmluZChcbiAgICAgICAgKG9iaikgPT4gUmVmbGVjdC5oYXMob2JqLCBuYW1lKVxuICAgICAgKSB8fCB7fSxcbiAgICAgIG5hbWUsXG4gICAgICB0aGlzUHJveHlcbiAgICApO1xuICB9LFxuICBzZXQoeyBvYmplY3RzIH0sIG5hbWUsIHZhbHVlLCB0aGlzUHJveHkpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBvYmplY3RzLmZpbmQoXG4gICAgICAob2JqKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBuYW1lKVxuICAgICkgfHwgb2JqZWN0c1tvYmplY3RzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbmFtZSk7XG4gICAgaWYgKGRlc2NyaXB0b3I/LnNldCAmJiBkZXNjcmlwdG9yPy5nZXQpXG4gICAgICByZXR1cm4gZGVzY3JpcHRvci5zZXQuY2FsbCh0aGlzUHJveHksIHZhbHVlKSB8fCB0cnVlO1xuICAgIHJldHVybiBSZWZsZWN0LnNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGNvbGxhcHNlUHJveGllcygpIHtcbiAgbGV0IGtleXMgPSBSZWZsZWN0Lm93bktleXModGhpcyk7XG4gIHJldHVybiBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBhY2Nba2V5XSA9IFJlZmxlY3QuZ2V0KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvaW50ZXJjZXB0b3IuanNcbmZ1bmN0aW9uIGluaXRJbnRlcmNlcHRvcnMoZGF0YTIpIHtcbiAgbGV0IGlzT2JqZWN0MiA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwgIT09IG51bGw7XG4gIGxldCByZWN1cnNlID0gKG9iaiwgYmFzZVBhdGggPSBcIlwiKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSkuZm9yRWFjaCgoW2tleSwgeyB2YWx1ZSwgZW51bWVyYWJsZSB9XSkgPT4ge1xuICAgICAgaWYgKGVudW1lcmFibGUgPT09IGZhbHNlIHx8IHZhbHVlID09PSB2b2lkIDApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUuX192X3NraXApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGxldCBwYXRoID0gYmFzZVBhdGggPT09IFwiXCIgPyBrZXkgOiBgJHtiYXNlUGF0aH0uJHtrZXl9YDtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUuX3hfaW50ZXJjZXB0b3IpIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZS5pbml0aWFsaXplKGRhdGEyLCBwYXRoLCBrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzT2JqZWN0Mih2YWx1ZSkgJiYgdmFsdWUgIT09IG9iaiAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICByZWN1cnNlKHZhbHVlLCBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gcmVjdXJzZShkYXRhMik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRvcihjYWxsYmFjaywgbXV0YXRlT2JqID0gKCkgPT4ge1xufSkge1xuICBsZXQgb2JqID0ge1xuICAgIGluaXRpYWxWYWx1ZTogdm9pZCAwLFxuICAgIF94X2ludGVyY2VwdG9yOiB0cnVlLFxuICAgIGluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHRoaXMuaW5pdGlhbFZhbHVlLCAoKSA9PiBnZXQoZGF0YTIsIHBhdGgpLCAodmFsdWUpID0+IHNldChkYXRhMiwgcGF0aCwgdmFsdWUpLCBwYXRoLCBrZXkpO1xuICAgIH1cbiAgfTtcbiAgbXV0YXRlT2JqKG9iaik7XG4gIHJldHVybiAoaW5pdGlhbFZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbml0aWFsVmFsdWUgPT09IFwib2JqZWN0XCIgJiYgaW5pdGlhbFZhbHVlICE9PSBudWxsICYmIGluaXRpYWxWYWx1ZS5feF9pbnRlcmNlcHRvcikge1xuICAgICAgbGV0IGluaXRpYWxpemUgPSBvYmouaW5pdGlhbGl6ZS5iaW5kKG9iaik7XG4gICAgICBvYmouaW5pdGlhbGl6ZSA9IChkYXRhMiwgcGF0aCwga2V5KSA9PiB7XG4gICAgICAgIGxldCBpbm5lclZhbHVlID0gaW5pdGlhbFZhbHVlLmluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSk7XG4gICAgICAgIG9iai5pbml0aWFsVmFsdWUgPSBpbm5lclZhbHVlO1xuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5pbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG59XG5mdW5jdGlvbiBnZXQob2JqLCBwYXRoKSB7XG4gIHJldHVybiBwYXRoLnNwbGl0KFwiLlwiKS5yZWR1Y2UoKGNhcnJ5LCBzZWdtZW50KSA9PiBjYXJyeVtzZWdtZW50XSwgb2JqKTtcbn1cbmZ1bmN0aW9uIHNldChvYmosIHBhdGgsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIilcbiAgICBwYXRoID0gcGF0aC5zcGxpdChcIi5cIik7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMSlcbiAgICBvYmpbcGF0aFswXV0gPSB2YWx1ZTtcbiAgZWxzZSBpZiAocGF0aC5sZW5ndGggPT09IDApXG4gICAgdGhyb3cgZXJyb3I7XG4gIGVsc2Uge1xuICAgIGlmIChvYmpbcGF0aFswXV0pXG4gICAgICByZXR1cm4gc2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSwgdmFsdWUpO1xuICAgIGVsc2Uge1xuICAgICAgb2JqW3BhdGhbMF1dID0ge307XG4gICAgICByZXR1cm4gc2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLmpzXG52YXIgbWFnaWNzID0ge307XG5mdW5jdGlvbiBtYWdpYyhuYW1lLCBjYWxsYmFjaykge1xuICBtYWdpY3NbbmFtZV0gPSBjYWxsYmFjaztcbn1cbmZ1bmN0aW9uIGluamVjdE1hZ2ljcyhvYmosIGVsKSB7XG4gIGxldCBtZW1vaXplZFV0aWxpdGllcyA9IGdldFV0aWxpdGllcyhlbCk7XG4gIE9iamVjdC5lbnRyaWVzKG1hZ2ljcykuZm9yRWFjaCgoW25hbWUsIGNhbGxiYWNrXSkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGAkJHtuYW1lfWAsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVsLCBtZW1vaXplZFV0aWxpdGllcyk7XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBnZXRVdGlsaXRpZXMoZWwpIHtcbiAgbGV0IFt1dGlsaXRpZXMsIGNsZWFudXAyXSA9IGdldEVsZW1lbnRCb3VuZFV0aWxpdGllcyhlbCk7XG4gIGxldCB1dGlscyA9IHsgaW50ZXJjZXB0b3IsIC4uLnV0aWxpdGllcyB9O1xuICBvbkVsUmVtb3ZlZChlbCwgY2xlYW51cDIpO1xuICByZXR1cm4gdXRpbHM7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9lcnJvci5qc1xuZnVuY3Rpb24gdHJ5Q2F0Y2goZWwsIGV4cHJlc3Npb24sIGNhbGxiYWNrLCAuLi5hcmdzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgZWwsIGV4cHJlc3Npb24pO1xuICB9XG59XG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCBleHByZXNzaW9uID0gdm9pZCAwKSB7XG4gIGVycm9yMiA9IE9iamVjdC5hc3NpZ24oXG4gICAgZXJyb3IyID8/IHsgbWVzc2FnZTogXCJObyBlcnJvciBtZXNzYWdlIGdpdmVuLlwiIH0sXG4gICAgeyBlbCwgZXhwcmVzc2lvbiB9XG4gICk7XG4gIGNvbnNvbGUud2FybihgQWxwaW5lIEV4cHJlc3Npb24gRXJyb3I6ICR7ZXJyb3IyLm1lc3NhZ2V9XG5cbiR7ZXhwcmVzc2lvbiA/ICdFeHByZXNzaW9uOiBcIicgKyBleHByZXNzaW9uICsgJ1wiXFxuXFxuJyA6IFwiXCJ9YCwgZWwpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0aHJvdyBlcnJvcjI7XG4gIH0sIDApO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZXZhbHVhdG9yLmpzXG52YXIgc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zID0gdHJ1ZTtcbmZ1bmN0aW9uIGRvbnRBdXRvRXZhbHVhdGVGdW5jdGlvbnMoY2FsbGJhY2spIHtcbiAgbGV0IGNhY2hlID0gc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zO1xuICBzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnMgPSBmYWxzZTtcbiAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gIHNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyA9IGNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZXZhbHVhdGUoZWwsIGV4cHJlc3Npb24sIGV4dHJhcyA9IHt9KSB7XG4gIGxldCByZXN1bHQ7XG4gIGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pKCh2YWx1ZSkgPT4gcmVzdWx0ID0gdmFsdWUsIGV4dHJhcyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBldmFsdWF0ZUxhdGVyKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIHRoZUV2YWx1YXRvckZ1bmN0aW9uKC4uLmFyZ3MpO1xufVxudmFyIHRoZUV2YWx1YXRvckZ1bmN0aW9uID0gbm9ybWFsRXZhbHVhdG9yO1xuZnVuY3Rpb24gc2V0RXZhbHVhdG9yKG5ld0V2YWx1YXRvcikge1xuICB0aGVFdmFsdWF0b3JGdW5jdGlvbiA9IG5ld0V2YWx1YXRvcjtcbn1cbmZ1bmN0aW9uIG5vcm1hbEV2YWx1YXRvcihlbCwgZXhwcmVzc2lvbikge1xuICBsZXQgb3ZlcnJpZGRlbk1hZ2ljcyA9IHt9O1xuICBpbmplY3RNYWdpY3Mob3ZlcnJpZGRlbk1hZ2ljcywgZWwpO1xuICBsZXQgZGF0YVN0YWNrID0gW292ZXJyaWRkZW5NYWdpY3MsIC4uLmNsb3Nlc3REYXRhU3RhY2soZWwpXTtcbiAgbGV0IGV2YWx1YXRvciA9IHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIgPyBnZW5lcmF0ZUV2YWx1YXRvckZyb21GdW5jdGlvbihkYXRhU3RhY2ssIGV4cHJlc3Npb24pIDogZ2VuZXJhdGVFdmFsdWF0b3JGcm9tU3RyaW5nKGRhdGFTdGFjaywgZXhwcmVzc2lvbiwgZWwpO1xuICByZXR1cm4gdHJ5Q2F0Y2guYmluZChudWxsLCBlbCwgZXhwcmVzc2lvbiwgZXZhbHVhdG9yKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlRXZhbHVhdG9yRnJvbUZ1bmN0aW9uKGRhdGFTdGFjaywgZnVuYykge1xuICByZXR1cm4gKHJlY2VpdmVyID0gKCkgPT4ge1xuICB9LCB7IHNjb3BlOiBzY29wZTIgPSB7fSwgcGFyYW1zID0gW10gfSA9IHt9KSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGZ1bmMuYXBwbHkobWVyZ2VQcm94aWVzKFtzY29wZTIsIC4uLmRhdGFTdGFja10pLCBwYXJhbXMpO1xuICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIHJlc3VsdCk7XG4gIH07XG59XG52YXIgZXZhbHVhdG9yTWVtbyA9IHt9O1xuZnVuY3Rpb24gZ2VuZXJhdGVGdW5jdGlvbkZyb21TdHJpbmcoZXhwcmVzc2lvbiwgZWwpIHtcbiAgaWYgKGV2YWx1YXRvck1lbW9bZXhwcmVzc2lvbl0pIHtcbiAgICByZXR1cm4gZXZhbHVhdG9yTWVtb1tleHByZXNzaW9uXTtcbiAgfVxuICBsZXQgQXN5bmNGdW5jdGlvbiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhc3luYyBmdW5jdGlvbigpIHtcbiAgfSkuY29uc3RydWN0b3I7XG4gIGxldCByaWdodFNpZGVTYWZlRXhwcmVzc2lvbiA9IC9eW1xcblxcc10qaWYuKlxcKC4qXFwpLy50ZXN0KGV4cHJlc3Npb24udHJpbSgpKSB8fCAvXihsZXR8Y29uc3QpXFxzLy50ZXN0KGV4cHJlc3Npb24udHJpbSgpKSA/IGAoYXN5bmMoKT0+eyAke2V4cHJlc3Npb259IH0pKClgIDogZXhwcmVzc2lvbjtcbiAgY29uc3Qgc2FmZUFzeW5jRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBmdW5jMiA9IG5ldyBBc3luY0Z1bmN0aW9uKFxuICAgICAgICBbXCJfX3NlbGZcIiwgXCJzY29wZVwiXSxcbiAgICAgICAgYHdpdGggKHNjb3BlKSB7IF9fc2VsZi5yZXN1bHQgPSAke3JpZ2h0U2lkZVNhZmVFeHByZXNzaW9ufSB9OyBfX3NlbGYuZmluaXNoZWQgPSB0cnVlOyByZXR1cm4gX19zZWxmLnJlc3VsdDtgXG4gICAgICApO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmMyLCBcIm5hbWVcIiwge1xuICAgICAgICB2YWx1ZTogYFtBbHBpbmVdICR7ZXhwcmVzc2lvbn1gXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jMjtcbiAgICB9IGNhdGNoIChlcnJvcjIpIHtcbiAgICAgIGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgfTtcbiAgbGV0IGZ1bmMgPSBzYWZlQXN5bmNGdW5jdGlvbigpO1xuICBldmFsdWF0b3JNZW1vW2V4cHJlc3Npb25dID0gZnVuYztcbiAgcmV0dXJuIGZ1bmM7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUV2YWx1YXRvckZyb21TdHJpbmcoZGF0YVN0YWNrLCBleHByZXNzaW9uLCBlbCkge1xuICBsZXQgZnVuYyA9IGdlbmVyYXRlRnVuY3Rpb25Gcm9tU3RyaW5nKGV4cHJlc3Npb24sIGVsKTtcbiAgcmV0dXJuIChyZWNlaXZlciA9ICgpID0+IHtcbiAgfSwgeyBzY29wZTogc2NvcGUyID0ge30sIHBhcmFtcyA9IFtdIH0gPSB7fSkgPT4ge1xuICAgIGZ1bmMucmVzdWx0ID0gdm9pZCAwO1xuICAgIGZ1bmMuZmluaXNoZWQgPSBmYWxzZTtcbiAgICBsZXQgY29tcGxldGVTY29wZSA9IG1lcmdlUHJveGllcyhbc2NvcGUyLCAuLi5kYXRhU3RhY2tdKTtcbiAgICBpZiAodHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IHByb21pc2UgPSBmdW5jKGZ1bmMsIGNvbXBsZXRlU2NvcGUpLmNhdGNoKChlcnJvcjIpID0+IGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24pKTtcbiAgICAgIGlmIChmdW5jLmZpbmlzaGVkKSB7XG4gICAgICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIGZ1bmMucmVzdWx0LCBjb21wbGV0ZVNjb3BlLCBwYXJhbXMsIGVsKTtcbiAgICAgICAgZnVuYy5yZXN1bHQgPSB2b2lkIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIHJlc3VsdCwgY29tcGxldGVTY29wZSwgcGFyYW1zLCBlbCk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcjIpID0+IGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24pKS5maW5hbGx5KCgpID0+IGZ1bmMucmVzdWx0ID0gdm9pZCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCB2YWx1ZSwgc2NvcGUyLCBwYXJhbXMsIGVsKSB7XG4gIGlmIChzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnMgJiYgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsdWUuYXBwbHkoc2NvcGUyLCBwYXJhbXMpO1xuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICByZXN1bHQudGhlbigoaSkgPT4gcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgaSwgc2NvcGUyLCBwYXJhbXMpKS5jYXRjaCgoZXJyb3IyKSA9PiBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCB2YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWNlaXZlcihyZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgdmFsdWUudGhlbigoaSkgPT4gcmVjZWl2ZXIoaSkpO1xuICB9IGVsc2Uge1xuICAgIHJlY2VpdmVyKHZhbHVlKTtcbiAgfVxufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy5qc1xudmFyIHByZWZpeEFzU3RyaW5nID0gXCJ4LVwiO1xuZnVuY3Rpb24gcHJlZml4KHN1YmplY3QgPSBcIlwiKSB7XG4gIHJldHVybiBwcmVmaXhBc1N0cmluZyArIHN1YmplY3Q7XG59XG5mdW5jdGlvbiBzZXRQcmVmaXgobmV3UHJlZml4KSB7XG4gIHByZWZpeEFzU3RyaW5nID0gbmV3UHJlZml4O1xufVxudmFyIGRpcmVjdGl2ZUhhbmRsZXJzID0ge307XG5mdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgY2FsbGJhY2spIHtcbiAgZGlyZWN0aXZlSGFuZGxlcnNbbmFtZV0gPSBjYWxsYmFjaztcbiAgcmV0dXJuIHtcbiAgICBiZWZvcmUoZGlyZWN0aXZlMikge1xuICAgICAgaWYgKCFkaXJlY3RpdmVIYW5kbGVyc1tkaXJlY3RpdmUyXSkge1xuICAgICAgICBjb25zb2xlLndhcm4oU3RyaW5nLnJhd2BDYW5ub3QgZmluZCBkaXJlY3RpdmUgXFxgJHtkaXJlY3RpdmUyfVxcYC4gXFxgJHtuYW1lfVxcYCB3aWxsIHVzZSB0aGUgZGVmYXVsdCBvcmRlciBvZiBleGVjdXRpb25gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcG9zID0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihkaXJlY3RpdmUyKTtcbiAgICAgIGRpcmVjdGl2ZU9yZGVyLnNwbGljZShwb3MgPj0gMCA/IHBvcyA6IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoXCJERUZBVUxUXCIpLCAwLCBuYW1lKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkaXJlY3RpdmVFeGlzdHMobmFtZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGlyZWN0aXZlSGFuZGxlcnMpLmluY2x1ZGVzKG5hbWUpO1xufVxuZnVuY3Rpb24gZGlyZWN0aXZlcyhlbCwgYXR0cmlidXRlcywgb3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSkge1xuICBhdHRyaWJ1dGVzID0gQXJyYXkuZnJvbShhdHRyaWJ1dGVzKTtcbiAgaWYgKGVsLl94X3ZpcnR1YWxEaXJlY3RpdmVzKSB7XG4gICAgbGV0IHZBdHRyaWJ1dGVzID0gT2JqZWN0LmVudHJpZXMoZWwuX3hfdmlydHVhbERpcmVjdGl2ZXMpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gKHsgbmFtZSwgdmFsdWUgfSkpO1xuICAgIGxldCBzdGF0aWNBdHRyaWJ1dGVzID0gYXR0cmlidXRlc09ubHkodkF0dHJpYnV0ZXMpO1xuICAgIHZBdHRyaWJ1dGVzID0gdkF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGlmIChzdGF0aWNBdHRyaWJ1dGVzLmZpbmQoKGF0dHIpID0+IGF0dHIubmFtZSA9PT0gYXR0cmlidXRlLm5hbWUpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogYHgtYmluZDoke2F0dHJpYnV0ZS5uYW1lfWAsXG4gICAgICAgICAgdmFsdWU6IGBcIiR7YXR0cmlidXRlLnZhbHVlfVwiYFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZTtcbiAgICB9KTtcbiAgICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlcy5jb25jYXQodkF0dHJpYnV0ZXMpO1xuICB9XG4gIGxldCB0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcCA9IHt9O1xuICBsZXQgZGlyZWN0aXZlczIgPSBhdHRyaWJ1dGVzLm1hcCh0b1RyYW5zZm9ybWVkQXR0cmlidXRlcygobmV3TmFtZSwgb2xkTmFtZSkgPT4gdHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXBbbmV3TmFtZV0gPSBvbGROYW1lKSkuZmlsdGVyKG91dE5vbkFscGluZUF0dHJpYnV0ZXMpLm1hcCh0b1BhcnNlZERpcmVjdGl2ZXModHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXAsIG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUpKS5zb3J0KGJ5UHJpb3JpdHkpO1xuICByZXR1cm4gZGlyZWN0aXZlczIubWFwKChkaXJlY3RpdmUyKSA9PiB7XG4gICAgcmV0dXJuIGdldERpcmVjdGl2ZUhhbmRsZXIoZWwsIGRpcmVjdGl2ZTIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNPbmx5KGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oYXR0cmlidXRlcykubWFwKHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKCkpLmZpbHRlcigoYXR0cikgPT4gIW91dE5vbkFscGluZUF0dHJpYnV0ZXMoYXR0cikpO1xufVxudmFyIGlzRGVmZXJyaW5nSGFuZGxlcnMgPSBmYWxzZTtcbnZhciBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBjdXJyZW50SGFuZGxlclN0YWNrS2V5ID0gU3ltYm9sKCk7XG5mdW5jdGlvbiBkZWZlckhhbmRsaW5nRGlyZWN0aXZlcyhjYWxsYmFjaykge1xuICBpc0RlZmVycmluZ0hhbmRsZXJzID0gdHJ1ZTtcbiAgbGV0IGtleSA9IFN5bWJvbCgpO1xuICBjdXJyZW50SGFuZGxlclN0YWNrS2V5ID0ga2V5O1xuICBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLnNldChrZXksIFtdKTtcbiAgbGV0IGZsdXNoSGFuZGxlcnMgPSAoKSA9PiB7XG4gICAgd2hpbGUgKGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MuZ2V0KGtleSkubGVuZ3RoKVxuICAgICAgZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5nZXQoa2V5KS5zaGlmdCgpKCk7XG4gICAgZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5kZWxldGUoa2V5KTtcbiAgfTtcbiAgbGV0IHN0b3BEZWZlcnJpbmcgPSAoKSA9PiB7XG4gICAgaXNEZWZlcnJpbmdIYW5kbGVycyA9IGZhbHNlO1xuICAgIGZsdXNoSGFuZGxlcnMoKTtcbiAgfTtcbiAgY2FsbGJhY2soZmx1c2hIYW5kbGVycyk7XG4gIHN0b3BEZWZlcnJpbmcoKTtcbn1cbmZ1bmN0aW9uIGdldEVsZW1lbnRCb3VuZFV0aWxpdGllcyhlbCkge1xuICBsZXQgY2xlYW51cHMgPSBbXTtcbiAgbGV0IGNsZWFudXAyID0gKGNhbGxiYWNrKSA9PiBjbGVhbnVwcy5wdXNoKGNhbGxiYWNrKTtcbiAgbGV0IFtlZmZlY3QzLCBjbGVhbnVwRWZmZWN0XSA9IGVsZW1lbnRCb3VuZEVmZmVjdChlbCk7XG4gIGNsZWFudXBzLnB1c2goY2xlYW51cEVmZmVjdCk7XG4gIGxldCB1dGlsaXRpZXMgPSB7XG4gICAgQWxwaW5lOiBhbHBpbmVfZGVmYXVsdCxcbiAgICBlZmZlY3Q6IGVmZmVjdDMsXG4gICAgY2xlYW51cDogY2xlYW51cDIsXG4gICAgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlci5iaW5kKGV2YWx1YXRlTGF0ZXIsIGVsKSxcbiAgICBldmFsdWF0ZTogZXZhbHVhdGUuYmluZChldmFsdWF0ZSwgZWwpXG4gIH07XG4gIGxldCBkb0NsZWFudXAgPSAoKSA9PiBjbGVhbnVwcy5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICByZXR1cm4gW3V0aWxpdGllcywgZG9DbGVhbnVwXTtcbn1cbmZ1bmN0aW9uIGdldERpcmVjdGl2ZUhhbmRsZXIoZWwsIGRpcmVjdGl2ZTIpIHtcbiAgbGV0IG5vb3AgPSAoKSA9PiB7XG4gIH07XG4gIGxldCBoYW5kbGVyNCA9IGRpcmVjdGl2ZUhhbmRsZXJzW2RpcmVjdGl2ZTIudHlwZV0gfHwgbm9vcDtcbiAgbGV0IFt1dGlsaXRpZXMsIGNsZWFudXAyXSA9IGdldEVsZW1lbnRCb3VuZFV0aWxpdGllcyhlbCk7XG4gIG9uQXR0cmlidXRlUmVtb3ZlZChlbCwgZGlyZWN0aXZlMi5vcmlnaW5hbCwgY2xlYW51cDIpO1xuICBsZXQgZnVsbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKGVsLl94X2lnbm9yZSB8fCBlbC5feF9pZ25vcmVTZWxmKVxuICAgICAgcmV0dXJuO1xuICAgIGhhbmRsZXI0LmlubGluZSAmJiBoYW5kbGVyNC5pbmxpbmUoZWwsIGRpcmVjdGl2ZTIsIHV0aWxpdGllcyk7XG4gICAgaGFuZGxlcjQgPSBoYW5kbGVyNC5iaW5kKGhhbmRsZXI0LCBlbCwgZGlyZWN0aXZlMiwgdXRpbGl0aWVzKTtcbiAgICBpc0RlZmVycmluZ0hhbmRsZXJzID8gZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5nZXQoY3VycmVudEhhbmRsZXJTdGFja0tleSkucHVzaChoYW5kbGVyNCkgOiBoYW5kbGVyNCgpO1xuICB9O1xuICBmdWxsSGFuZGxlci5ydW5DbGVhbnVwcyA9IGNsZWFudXAyO1xuICByZXR1cm4gZnVsbEhhbmRsZXI7XG59XG52YXIgc3RhcnRpbmdXaXRoID0gKHN1YmplY3QsIHJlcGxhY2VtZW50KSA9PiAoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gIGlmIChuYW1lLnN0YXJ0c1dpdGgoc3ViamVjdCkpXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZShzdWJqZWN0LCByZXBsYWNlbWVudCk7XG4gIHJldHVybiB7IG5hbWUsIHZhbHVlIH07XG59O1xudmFyIGludG8gPSAoaSkgPT4gaTtcbmZ1bmN0aW9uIHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKGNhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICByZXR1cm4gKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgIGxldCB7IG5hbWU6IG5ld05hbWUsIHZhbHVlOiBuZXdWYWx1ZSB9ID0gYXR0cmlidXRlVHJhbnNmb3JtZXJzLnJlZHVjZSgoY2FycnksIHRyYW5zZm9ybSkgPT4ge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybShjYXJyeSk7XG4gICAgfSwgeyBuYW1lLCB2YWx1ZSB9KTtcbiAgICBpZiAobmV3TmFtZSAhPT0gbmFtZSlcbiAgICAgIGNhbGxiYWNrKG5ld05hbWUsIG5hbWUpO1xuICAgIHJldHVybiB7IG5hbWU6IG5ld05hbWUsIHZhbHVlOiBuZXdWYWx1ZSB9O1xuICB9O1xufVxudmFyIGF0dHJpYnV0ZVRyYW5zZm9ybWVycyA9IFtdO1xuZnVuY3Rpb24gbWFwQXR0cmlidXRlcyhjYWxsYmFjaykge1xuICBhdHRyaWJ1dGVUcmFuc2Zvcm1lcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBvdXROb25BbHBpbmVBdHRyaWJ1dGVzKHsgbmFtZSB9KSB7XG4gIHJldHVybiBhbHBpbmVBdHRyaWJ1dGVSZWdleCgpLnRlc3QobmFtZSk7XG59XG52YXIgYWxwaW5lQXR0cmlidXRlUmVnZXggPSAoKSA9PiBuZXcgUmVnRXhwKGBeJHtwcmVmaXhBc1N0cmluZ30oW146Xi5dKylcXFxcYmApO1xuZnVuY3Rpb24gdG9QYXJzZWREaXJlY3RpdmVzKHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwLCBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlKSB7XG4gIHJldHVybiAoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgbGV0IHR5cGVNYXRjaCA9IG5hbWUubWF0Y2goYWxwaW5lQXR0cmlidXRlUmVnZXgoKSk7XG4gICAgbGV0IHZhbHVlTWF0Y2ggPSBuYW1lLm1hdGNoKC86KFthLXpBLVowLTlcXC1fOl0rKS8pO1xuICAgIGxldCBtb2RpZmllcnMgPSBuYW1lLm1hdGNoKC9cXC5bXi5cXF1dKyg/PVteXFxdXSokKS9nKSB8fCBbXTtcbiAgICBsZXQgb3JpZ2luYWwgPSBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlIHx8IHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwW25hbWVdIHx8IG5hbWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHR5cGVNYXRjaCA/IHR5cGVNYXRjaFsxXSA6IG51bGwsXG4gICAgICB2YWx1ZTogdmFsdWVNYXRjaCA/IHZhbHVlTWF0Y2hbMV0gOiBudWxsLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMubWFwKChpKSA9PiBpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSxcbiAgICAgIGV4cHJlc3Npb246IHZhbHVlLFxuICAgICAgb3JpZ2luYWxcbiAgICB9O1xuICB9O1xufVxudmFyIERFRkFVTFQgPSBcIkRFRkFVTFRcIjtcbnZhciBkaXJlY3RpdmVPcmRlciA9IFtcbiAgXCJpZ25vcmVcIixcbiAgXCJyZWZcIixcbiAgXCJkYXRhXCIsXG4gIFwiaWRcIixcbiAgXCJhbmNob3JcIixcbiAgXCJiaW5kXCIsXG4gIFwiaW5pdFwiLFxuICBcImZvclwiLFxuICBcIm1vZGVsXCIsXG4gIFwibW9kZWxhYmxlXCIsXG4gIFwidHJhbnNpdGlvblwiLFxuICBcInNob3dcIixcbiAgXCJpZlwiLFxuICBERUZBVUxULFxuICBcInRlbGVwb3J0XCJcbl07XG5mdW5jdGlvbiBieVByaW9yaXR5KGEsIGIpIHtcbiAgbGV0IHR5cGVBID0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihhLnR5cGUpID09PSAtMSA/IERFRkFVTFQgOiBhLnR5cGU7XG4gIGxldCB0eXBlQiA9IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoYi50eXBlKSA9PT0gLTEgPyBERUZBVUxUIDogYi50eXBlO1xuICByZXR1cm4gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZih0eXBlQSkgLSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKHR5cGVCKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2Rpc3BhdGNoLmpzXG5mdW5jdGlvbiBkaXNwYXRjaChlbCwgbmFtZSwgZGV0YWlsID0ge30pIHtcbiAgZWwuZGlzcGF0Y2hFdmVudChcbiAgICBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgZGV0YWlsLFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIC8vIEFsbG93cyBldmVudHMgdG8gcGFzcyB0aGUgc2hhZG93IERPTSBiYXJyaWVyLlxuICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgfSlcbiAgKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3dhbGsuanNcbmZ1bmN0aW9uIHdhbGsoZWwsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJmdW5jdGlvblwiICYmIGVsIGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIEFycmF5LmZyb20oZWwuY2hpbGRyZW4pLmZvckVhY2goKGVsMikgPT4gd2FsayhlbDIsIGNhbGxiYWNrKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBza2lwID0gZmFsc2U7XG4gIGNhbGxiYWNrKGVsLCAoKSA9PiBza2lwID0gdHJ1ZSk7XG4gIGlmIChza2lwKVxuICAgIHJldHVybjtcbiAgbGV0IG5vZGUgPSBlbC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICB3YWxrKG5vZGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgbm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy93YXJuLmpzXG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgY29uc29sZS53YXJuKGBBbHBpbmUgV2FybmluZzogJHttZXNzYWdlfWAsIC4uLmFyZ3MpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbGlmZWN5Y2xlLmpzXG52YXIgc3RhcnRlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmIChzdGFydGVkKVxuICAgIHdhcm4oXCJBbHBpbmUgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCBvbiB0aGlzIHBhZ2UuIENhbGxpbmcgQWxwaW5lLnN0YXJ0KCkgbW9yZSB0aGFuIG9uY2UgY2FuIGNhdXNlIHByb2JsZW1zLlwiKTtcbiAgc3RhcnRlZCA9IHRydWU7XG4gIGlmICghZG9jdW1lbnQuYm9keSlcbiAgICB3YXJuKFwiVW5hYmxlIHRvIGluaXRpYWxpemUuIFRyeWluZyB0byBsb2FkIEFscGluZSBiZWZvcmUgYDxib2R5PmAgaXMgYXZhaWxhYmxlLiBEaWQgeW91IGZvcmdldCB0byBhZGQgYGRlZmVyYCBpbiBBbHBpbmUncyBgPHNjcmlwdD5gIHRhZz9cIik7XG4gIGRpc3BhdGNoKGRvY3VtZW50LCBcImFscGluZTppbml0XCIpO1xuICBkaXNwYXRjaChkb2N1bWVudCwgXCJhbHBpbmU6aW5pdGlhbGl6aW5nXCIpO1xuICBzdGFydE9ic2VydmluZ011dGF0aW9ucygpO1xuICBvbkVsQWRkZWQoKGVsKSA9PiBpbml0VHJlZShlbCwgd2FsaykpO1xuICBvbkVsUmVtb3ZlZCgoZWwpID0+IGRlc3Ryb3lUcmVlKGVsKSk7XG4gIG9uQXR0cmlidXRlc0FkZGVkKChlbCwgYXR0cnMpID0+IHtcbiAgICBkaXJlY3RpdmVzKGVsLCBhdHRycykuZm9yRWFjaCgoaGFuZGxlKSA9PiBoYW5kbGUoKSk7XG4gIH0pO1xuICBsZXQgb3V0TmVzdGVkQ29tcG9uZW50cyA9IChlbCkgPT4gIWNsb3Nlc3RSb290KGVsLnBhcmVudEVsZW1lbnQsIHRydWUpO1xuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYWxsU2VsZWN0b3JzKCkuam9pbihcIixcIikpKS5maWx0ZXIob3V0TmVzdGVkQ29tcG9uZW50cykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpbml0VHJlZShlbCk7XG4gIH0pO1xuICBkaXNwYXRjaChkb2N1bWVudCwgXCJhbHBpbmU6aW5pdGlhbGl6ZWRcIik7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdhcm5BYm91dE1pc3NpbmdQbHVnaW5zKCk7XG4gIH0pO1xufVxudmFyIHJvb3RTZWxlY3RvckNhbGxiYWNrcyA9IFtdO1xudmFyIGluaXRTZWxlY3RvckNhbGxiYWNrcyA9IFtdO1xuZnVuY3Rpb24gcm9vdFNlbGVjdG9ycygpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvckNhbGxiYWNrcy5tYXAoKGZuKSA9PiBmbigpKTtcbn1cbmZ1bmN0aW9uIGFsbFNlbGVjdG9ycygpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvckNhbGxiYWNrcy5jb25jYXQoaW5pdFNlbGVjdG9yQ2FsbGJhY2tzKS5tYXAoKGZuKSA9PiBmbigpKTtcbn1cbmZ1bmN0aW9uIGFkZFJvb3RTZWxlY3RvcihzZWxlY3RvckNhbGxiYWNrKSB7XG4gIHJvb3RTZWxlY3RvckNhbGxiYWNrcy5wdXNoKHNlbGVjdG9yQ2FsbGJhY2spO1xufVxuZnVuY3Rpb24gYWRkSW5pdFNlbGVjdG9yKHNlbGVjdG9yQ2FsbGJhY2spIHtcbiAgaW5pdFNlbGVjdG9yQ2FsbGJhY2tzLnB1c2goc2VsZWN0b3JDYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbG9zZXN0Um9vdChlbCwgaW5jbHVkZUluaXRTZWxlY3RvcnMgPSBmYWxzZSkge1xuICByZXR1cm4gZmluZENsb3Nlc3QoZWwsIChlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gaW5jbHVkZUluaXRTZWxlY3RvcnMgPyBhbGxTZWxlY3RvcnMoKSA6IHJvb3RTZWxlY3RvcnMoKTtcbiAgICBpZiAoc2VsZWN0b3JzLnNvbWUoKHNlbGVjdG9yKSA9PiBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGZpbmRDbG9zZXN0KGVsLCBjYWxsYmFjaykge1xuICBpZiAoIWVsKVxuICAgIHJldHVybjtcbiAgaWYgKGNhbGxiYWNrKGVsKSlcbiAgICByZXR1cm4gZWw7XG4gIGlmIChlbC5feF90ZWxlcG9ydEJhY2spXG4gICAgZWwgPSBlbC5feF90ZWxlcG9ydEJhY2s7XG4gIGlmICghZWwucGFyZW50RWxlbWVudClcbiAgICByZXR1cm47XG4gIHJldHVybiBmaW5kQ2xvc2VzdChlbC5wYXJlbnRFbGVtZW50LCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBpc1Jvb3QoZWwpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvcnMoKS5zb21lKChzZWxlY3RvcikgPT4gZWwubWF0Y2hlcyhzZWxlY3RvcikpO1xufVxudmFyIGluaXRJbnRlcmNlcHRvcnMyID0gW107XG5mdW5jdGlvbiBpbnRlcmNlcHRJbml0KGNhbGxiYWNrKSB7XG4gIGluaXRJbnRlcmNlcHRvcnMyLnB1c2goY2FsbGJhY2spO1xufVxudmFyIG1hcmtlckRpc3BlbnNlciA9IDE7XG5mdW5jdGlvbiBpbml0VHJlZShlbCwgd2Fsa2VyID0gd2FsaywgaW50ZXJjZXB0ID0gKCkgPT4ge1xufSkge1xuICBpZiAoZmluZENsb3Nlc3QoZWwsIChpKSA9PiBpLl94X2lnbm9yZSkpXG4gICAgcmV0dXJuO1xuICBkZWZlckhhbmRsaW5nRGlyZWN0aXZlcygoKSA9PiB7XG4gICAgd2Fsa2VyKGVsLCAoZWwyLCBza2lwKSA9PiB7XG4gICAgICBpZiAoZWwyLl94X21hcmtlcilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaW50ZXJjZXB0KGVsMiwgc2tpcCk7XG4gICAgICBpbml0SW50ZXJjZXB0b3JzMi5mb3JFYWNoKChpKSA9PiBpKGVsMiwgc2tpcCkpO1xuICAgICAgZGlyZWN0aXZlcyhlbDIsIGVsMi5hdHRyaWJ1dGVzKS5mb3JFYWNoKChoYW5kbGUpID0+IGhhbmRsZSgpKTtcbiAgICAgIGlmICghZWwyLl94X2lnbm9yZSlcbiAgICAgICAgZWwyLl94X21hcmtlciA9IG1hcmtlckRpc3BlbnNlcisrO1xuICAgICAgZWwyLl94X2lnbm9yZSAmJiBza2lwKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZGVzdHJveVRyZWUocm9vdCwgd2Fsa2VyID0gd2Fsaykge1xuICB3YWxrZXIocm9vdCwgKGVsKSA9PiB7XG4gICAgY2xlYW51cEVsZW1lbnQoZWwpO1xuICAgIGNsZWFudXBBdHRyaWJ1dGVzKGVsKTtcbiAgICBkZWxldGUgZWwuX3hfbWFya2VyO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHdhcm5BYm91dE1pc3NpbmdQbHVnaW5zKCkge1xuICBsZXQgcGx1Z2luRGlyZWN0aXZlcyA9IFtcbiAgICBbXCJ1aVwiLCBcImRpYWxvZ1wiLCBbXCJbeC1kaWFsb2ddLCBbeC1wb3BvdmVyXVwiXV0sXG4gICAgW1wiYW5jaG9yXCIsIFwiYW5jaG9yXCIsIFtcIlt4LWFuY2hvcl1cIl1dLFxuICAgIFtcInNvcnRcIiwgXCJzb3J0XCIsIFtcIlt4LXNvcnRdXCJdXVxuICBdO1xuICBwbHVnaW5EaXJlY3RpdmVzLmZvckVhY2goKFtwbHVnaW4yLCBkaXJlY3RpdmUyLCBzZWxlY3RvcnNdKSA9PiB7XG4gICAgaWYgKGRpcmVjdGl2ZUV4aXN0cyhkaXJlY3RpdmUyKSlcbiAgICAgIHJldHVybjtcbiAgICBzZWxlY3RvcnMuc29tZSgoc2VsZWN0b3IpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xuICAgICAgICB3YXJuKGBmb3VuZCBcIiR7c2VsZWN0b3J9XCIsIGJ1dCBtaXNzaW5nICR7cGx1Z2luMn0gcGx1Z2luYCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL25leHRUaWNrLmpzXG52YXIgdGlja1N0YWNrID0gW107XG52YXIgaXNIb2xkaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjayA9ICgpID0+IHtcbn0pIHtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGlzSG9sZGluZyB8fCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlbGVhc2VOZXh0VGlja3MoKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgdGlja1N0YWNrLnB1c2goKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHJlcygpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJlbGVhc2VOZXh0VGlja3MoKSB7XG4gIGlzSG9sZGluZyA9IGZhbHNlO1xuICB3aGlsZSAodGlja1N0YWNrLmxlbmd0aClcbiAgICB0aWNrU3RhY2suc2hpZnQoKSgpO1xufVxuZnVuY3Rpb24gaG9sZE5leHRUaWNrcygpIHtcbiAgaXNIb2xkaW5nID0gdHJ1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2NsYXNzZXMuanNcbmZ1bmN0aW9uIHNldENsYXNzZXMoZWwsIHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBzZXRDbGFzc2VzRnJvbVN0cmluZyhlbCwgdmFsdWUuam9pbihcIiBcIikpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzZXRDbGFzc2VzRnJvbU9iamVjdChlbCwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHNldENsYXNzZXMoZWwsIHZhbHVlKCkpO1xuICB9XG4gIHJldHVybiBzZXRDbGFzc2VzRnJvbVN0cmluZyhlbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gc2V0Q2xhc3Nlc0Zyb21TdHJpbmcoZWwsIGNsYXNzU3RyaW5nKSB7XG4gIGxldCBzcGxpdCA9IChjbGFzc1N0cmluZzIpID0+IGNsYXNzU3RyaW5nMi5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgbWlzc2luZ0NsYXNzZXMgPSAoY2xhc3NTdHJpbmcyKSA9PiBjbGFzc1N0cmluZzIuc3BsaXQoXCIgXCIpLmZpbHRlcigoaSkgPT4gIWVsLmNsYXNzTGlzdC5jb250YWlucyhpKSkuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgYWRkQ2xhc3Nlc0FuZFJldHVyblVuZG8gPSAoY2xhc3NlcykgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlcyk7XG4gICAgfTtcbiAgfTtcbiAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyA9PT0gdHJ1ZSA/IGNsYXNzU3RyaW5nID0gXCJcIiA6IGNsYXNzU3RyaW5nIHx8IFwiXCI7XG4gIHJldHVybiBhZGRDbGFzc2VzQW5kUmV0dXJuVW5kbyhtaXNzaW5nQ2xhc3NlcyhjbGFzc1N0cmluZykpO1xufVxuZnVuY3Rpb24gc2V0Q2xhc3Nlc0Zyb21PYmplY3QoZWwsIGNsYXNzT2JqZWN0KSB7XG4gIGxldCBzcGxpdCA9IChjbGFzc1N0cmluZykgPT4gY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGZvckFkZCA9IE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqZWN0KS5mbGF0TWFwKChbY2xhc3NTdHJpbmcsIGJvb2xdKSA9PiBib29sID8gc3BsaXQoY2xhc3NTdHJpbmcpIDogZmFsc2UpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGZvclJlbW92ZSA9IE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqZWN0KS5mbGF0TWFwKChbY2xhc3NTdHJpbmcsIGJvb2xdKSA9PiAhYm9vbCA/IHNwbGl0KGNsYXNzU3RyaW5nKSA6IGZhbHNlKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBhZGRlZCA9IFtdO1xuICBsZXQgcmVtb3ZlZCA9IFtdO1xuICBmb3JSZW1vdmUuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoaSkpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaSk7XG4gICAgICByZW1vdmVkLnB1c2goaSk7XG4gICAgfVxuICB9KTtcbiAgZm9yQWRkLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucyhpKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgIGFkZGVkLnB1c2goaSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZW1vdmVkLmZvckVhY2goKGkpID0+IGVsLmNsYXNzTGlzdC5hZGQoaSkpO1xuICAgIGFkZGVkLmZvckVhY2goKGkpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoaSkpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvc3R5bGVzLmpzXG5mdW5jdGlvbiBzZXRTdHlsZXMoZWwsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc2V0U3R5bGVzRnJvbU9iamVjdChlbCwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBzZXRTdHlsZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRTdHlsZXNGcm9tT2JqZWN0KGVsLCB2YWx1ZSkge1xuICBsZXQgcHJldmlvdXNTdHlsZXMgPSB7fTtcbiAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtrZXksIHZhbHVlMl0pID0+IHtcbiAgICBwcmV2aW91c1N0eWxlc1trZXldID0gZWwuc3R5bGVba2V5XTtcbiAgICBpZiAoIWtleS5zdGFydHNXaXRoKFwiLS1cIikpIHtcbiAgICAgIGtleSA9IGtlYmFiQ2FzZShrZXkpO1xuICAgIH1cbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlMik7XG4gIH0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZWwuc3R5bGUubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHNldFN0eWxlcyhlbCwgcHJldmlvdXNTdHlsZXMpO1xuICB9O1xufVxuZnVuY3Rpb24gc2V0U3R5bGVzRnJvbVN0cmluZyhlbCwgdmFsdWUpIHtcbiAgbGV0IGNhY2hlID0gZWwuZ2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdmFsdWUpO1xuICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB2YWx1ZSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgY2FjaGUgfHwgXCJcIik7XG4gIH07XG59XG5mdW5jdGlvbiBrZWJhYkNhc2Uoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9vbmNlLmpzXG5mdW5jdGlvbiBvbmNlKGNhbGxiYWNrLCBmYWxsYmFjayA9ICgpID0+IHtcbn0pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC10cmFuc2l0aW9uLmpzXG5kaXJlY3RpdmUoXCJ0cmFuc2l0aW9uXCIsIChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgZXZhbHVhdGU6IGV2YWx1YXRlMiB9KSA9PiB7XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiKVxuICAgIGV4cHJlc3Npb24gPSBldmFsdWF0ZTIoZXhwcmVzc2lvbik7XG4gIGlmIChleHByZXNzaW9uID09PSBmYWxzZSlcbiAgICByZXR1cm47XG4gIGlmICghZXhwcmVzc2lvbiB8fCB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICByZWdpc3RlclRyYW5zaXRpb25zRnJvbUhlbHBlcihlbCwgbW9kaWZpZXJzLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21DbGFzc1N0cmluZyhlbCwgZXhwcmVzc2lvbiwgdmFsdWUpO1xuICB9XG59KTtcbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tQ2xhc3NTdHJpbmcoZWwsIGNsYXNzU3RyaW5nLCBzdGFnZSkge1xuICByZWdpc3RlclRyYW5zaXRpb25PYmplY3QoZWwsIHNldENsYXNzZXMsIFwiXCIpO1xuICBsZXQgZGlyZWN0aXZlU3RvcmFnZU1hcCA9IHtcbiAgICBcImVudGVyXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmR1cmluZyA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImVudGVyLXN0YXJ0XCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLnN0YXJ0ID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwiZW50ZXItZW5kXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmVuZCA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImxlYXZlXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmR1cmluZyA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImxlYXZlLXN0YXJ0XCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLnN0YXJ0ID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwibGVhdmUtZW5kXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmVuZCA9IGNsYXNzZXM7XG4gICAgfVxuICB9O1xuICBkaXJlY3RpdmVTdG9yYWdlTWFwW3N0YWdlXShjbGFzc1N0cmluZyk7XG59XG5mdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25zRnJvbUhlbHBlcihlbCwgbW9kaWZpZXJzLCBzdGFnZSkge1xuICByZWdpc3RlclRyYW5zaXRpb25PYmplY3QoZWwsIHNldFN0eWxlcyk7XG4gIGxldCBkb2VzbnRTcGVjaWZ5ID0gIW1vZGlmaWVycy5pbmNsdWRlcyhcImluXCIpICYmICFtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRcIikgJiYgIXN0YWdlO1xuICBsZXQgdHJhbnNpdGlvbmluZ0luID0gZG9lc250U3BlY2lmeSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJpblwiKSB8fCBbXCJlbnRlclwiXS5pbmNsdWRlcyhzdGFnZSk7XG4gIGxldCB0cmFuc2l0aW9uaW5nT3V0ID0gZG9lc250U3BlY2lmeSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRcIikgfHwgW1wibGVhdmVcIl0uaW5jbHVkZXMoc3RhZ2UpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiaW5cIikgJiYgIWRvZXNudFNwZWNpZnkpIHtcbiAgICBtb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKChpLCBpbmRleCkgPT4gaW5kZXggPCBtb2RpZmllcnMuaW5kZXhPZihcIm91dFwiKSk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dFwiKSAmJiAhZG9lc250U3BlY2lmeSkge1xuICAgIG1vZGlmaWVycyA9IG1vZGlmaWVycy5maWx0ZXIoKGksIGluZGV4KSA9PiBpbmRleCA+IG1vZGlmaWVycy5pbmRleE9mKFwib3V0XCIpKTtcbiAgfVxuICBsZXQgd2FudHNBbGwgPSAhbW9kaWZpZXJzLmluY2x1ZGVzKFwib3BhY2l0eVwiKSAmJiAhbW9kaWZpZXJzLmluY2x1ZGVzKFwic2NhbGVcIik7XG4gIGxldCB3YW50c09wYWNpdHkgPSB3YW50c0FsbCB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJvcGFjaXR5XCIpO1xuICBsZXQgd2FudHNTY2FsZSA9IHdhbnRzQWxsIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcInNjYWxlXCIpO1xuICBsZXQgb3BhY2l0eVZhbHVlID0gd2FudHNPcGFjaXR5ID8gMCA6IDE7XG4gIGxldCBzY2FsZVZhbHVlID0gd2FudHNTY2FsZSA/IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcInNjYWxlXCIsIDk1KSAvIDEwMCA6IDE7XG4gIGxldCBkZWxheSA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImRlbGF5XCIsIDApIC8gMWUzO1xuICBsZXQgb3JpZ2luID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwib3JpZ2luXCIsIFwiY2VudGVyXCIpO1xuICBsZXQgcHJvcGVydHkgPSBcIm9wYWNpdHksIHRyYW5zZm9ybVwiO1xuICBsZXQgZHVyYXRpb25JbiA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImR1cmF0aW9uXCIsIDE1MCkgLyAxZTM7XG4gIGxldCBkdXJhdGlvbk91dCA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImR1cmF0aW9uXCIsIDc1KSAvIDFlMztcbiAgbGV0IGVhc2luZyA9IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSlgO1xuICBpZiAodHJhbnNpdGlvbmluZ0luKSB7XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5kdXJpbmcgPSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IG9yaWdpbixcbiAgICAgIHRyYW5zaXRpb25EZWxheTogYCR7ZGVsYXl9c2AsXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbklufXNgLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBlYXNpbmdcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuc3RhcnQgPSB7XG4gICAgICBvcGFjaXR5OiBvcGFjaXR5VmFsdWUsXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlVmFsdWV9KWBcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZW5kID0ge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKDEpYFxuICAgIH07XG4gIH1cbiAgaWYgKHRyYW5zaXRpb25pbmdPdXQpIHtcbiAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmR1cmluZyA9IHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogb3JpZ2luLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiBgJHtkZWxheX1zYCxcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke2R1cmF0aW9uT3V0fXNgLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBlYXNpbmdcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuc3RhcnQgPSB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoMSlgXG4gICAgfTtcbiAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmVuZCA9IHtcbiAgICAgIG9wYWNpdHk6IG9wYWNpdHlWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGVWYWx1ZX0pYFxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbk9iamVjdChlbCwgc2V0RnVuY3Rpb24sIGRlZmF1bHRWYWx1ZSA9IHt9KSB7XG4gIGlmICghZWwuX3hfdHJhbnNpdGlvbilcbiAgICBlbC5feF90cmFuc2l0aW9uID0ge1xuICAgICAgZW50ZXI6IHsgZHVyaW5nOiBkZWZhdWx0VmFsdWUsIHN0YXJ0OiBkZWZhdWx0VmFsdWUsIGVuZDogZGVmYXVsdFZhbHVlIH0sXG4gICAgICBsZWF2ZTogeyBkdXJpbmc6IGRlZmF1bHRWYWx1ZSwgc3RhcnQ6IGRlZmF1bHRWYWx1ZSwgZW5kOiBkZWZhdWx0VmFsdWUgfSxcbiAgICAgIGluKGJlZm9yZSA9ICgpID0+IHtcbiAgICAgIH0sIGFmdGVyID0gKCkgPT4ge1xuICAgICAgfSkge1xuICAgICAgICB0cmFuc2l0aW9uKGVsLCBzZXRGdW5jdGlvbiwge1xuICAgICAgICAgIGR1cmluZzogdGhpcy5lbnRlci5kdXJpbmcsXG4gICAgICAgICAgc3RhcnQ6IHRoaXMuZW50ZXIuc3RhcnQsXG4gICAgICAgICAgZW5kOiB0aGlzLmVudGVyLmVuZFxuICAgICAgICB9LCBiZWZvcmUsIGFmdGVyKTtcbiAgICAgIH0sXG4gICAgICBvdXQoYmVmb3JlID0gKCkgPT4ge1xuICAgICAgfSwgYWZ0ZXIgPSAoKSA9PiB7XG4gICAgICB9KSB7XG4gICAgICAgIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7XG4gICAgICAgICAgZHVyaW5nOiB0aGlzLmxlYXZlLmR1cmluZyxcbiAgICAgICAgICBzdGFydDogdGhpcy5sZWF2ZS5zdGFydCxcbiAgICAgICAgICBlbmQ6IHRoaXMubGVhdmUuZW5kXG4gICAgICAgIH0sIGJlZm9yZSwgYWZ0ZXIpO1xuICAgICAgfVxuICAgIH07XG59XG53aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuX3hfdG9nZ2xlQW5kQ2FzY2FkZVdpdGhUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uKGVsLCB2YWx1ZSwgc2hvdywgaGlkZSkge1xuICBjb25zdCBuZXh0VGljazIgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIDogc2V0VGltZW91dDtcbiAgbGV0IGNsaWNrQXdheUNvbXBhdGlibGVTaG93ID0gKCkgPT4gbmV4dFRpY2syKHNob3cpO1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoZWwuX3hfdHJhbnNpdGlvbiAmJiAoZWwuX3hfdHJhbnNpdGlvbi5lbnRlciB8fCBlbC5feF90cmFuc2l0aW9uLmxlYXZlKSkge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlciAmJiAoT2JqZWN0LmVudHJpZXMoZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5kdXJpbmcpLmxlbmd0aCB8fCBPYmplY3QuZW50cmllcyhlbC5feF90cmFuc2l0aW9uLmVudGVyLnN0YXJ0KS5sZW5ndGggfHwgT2JqZWN0LmVudHJpZXMoZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5lbmQpLmxlbmd0aCkgPyBlbC5feF90cmFuc2l0aW9uLmluKHNob3cpIDogY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbiA/IGVsLl94X3RyYW5zaXRpb24uaW4oc2hvdykgOiBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgZWwuX3hfaGlkZVByb21pc2UgPSBlbC5feF90cmFuc2l0aW9uID8gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGVsLl94X3RyYW5zaXRpb24ub3V0KCgpID0+IHtcbiAgICB9LCAoKSA9PiByZXNvbHZlKGhpZGUpKTtcbiAgICBlbC5feF90cmFuc2l0aW9uaW5nICYmIGVsLl94X3RyYW5zaXRpb25pbmcuYmVmb3JlQ2FuY2VsKCgpID0+IHJlamVjdCh7IGlzRnJvbUNhbmNlbGxlZFRyYW5zaXRpb246IHRydWUgfSkpO1xuICB9KSA6IFByb21pc2UucmVzb2x2ZShoaWRlKTtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGxldCBjbG9zZXN0ID0gY2xvc2VzdEhpZGUoZWwpO1xuICAgIGlmIChjbG9zZXN0KSB7XG4gICAgICBpZiAoIWNsb3Nlc3QuX3hfaGlkZUNoaWxkcmVuKVxuICAgICAgICBjbG9zZXN0Ll94X2hpZGVDaGlsZHJlbiA9IFtdO1xuICAgICAgY2xvc2VzdC5feF9oaWRlQ2hpbGRyZW4ucHVzaChlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRUaWNrMigoKSA9PiB7XG4gICAgICAgIGxldCBoaWRlQWZ0ZXJDaGlsZHJlbiA9IChlbDIpID0+IHtcbiAgICAgICAgICBsZXQgY2FycnkgPSBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbDIuX3hfaGlkZVByb21pc2UsXG4gICAgICAgICAgICAuLi4oZWwyLl94X2hpZGVDaGlsZHJlbiB8fCBbXSkubWFwKGhpZGVBZnRlckNoaWxkcmVuKVxuICAgICAgICAgIF0pLnRoZW4oKFtpXSkgPT4gaT8uKCkpO1xuICAgICAgICAgIGRlbGV0ZSBlbDIuX3hfaGlkZVByb21pc2U7XG4gICAgICAgICAgZGVsZXRlIGVsMi5feF9oaWRlQ2hpbGRyZW47XG4gICAgICAgICAgcmV0dXJuIGNhcnJ5O1xuICAgICAgICB9O1xuICAgICAgICBoaWRlQWZ0ZXJDaGlsZHJlbihlbCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoIWUuaXNGcm9tQ2FuY2VsbGVkVHJhbnNpdGlvbilcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5mdW5jdGlvbiBjbG9zZXN0SGlkZShlbCkge1xuICBsZXQgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgaWYgKCFwYXJlbnQpXG4gICAgcmV0dXJuO1xuICByZXR1cm4gcGFyZW50Ll94X2hpZGVQcm9taXNlID8gcGFyZW50IDogY2xvc2VzdEhpZGUocGFyZW50KTtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7IGR1cmluZywgc3RhcnQ6IHN0YXJ0MiwgZW5kIH0gPSB7fSwgYmVmb3JlID0gKCkgPT4ge1xufSwgYWZ0ZXIgPSAoKSA9PiB7XG59KSB7XG4gIGlmIChlbC5feF90cmFuc2l0aW9uaW5nKVxuICAgIGVsLl94X3RyYW5zaXRpb25pbmcuY2FuY2VsKCk7XG4gIGlmIChPYmplY3Qua2V5cyhkdXJpbmcpLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhzdGFydDIpLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhlbmQpLmxlbmd0aCA9PT0gMCkge1xuICAgIGJlZm9yZSgpO1xuICAgIGFmdGVyKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCB1bmRvU3RhcnQsIHVuZG9EdXJpbmcsIHVuZG9FbmQ7XG4gIHBlcmZvcm1UcmFuc2l0aW9uKGVsLCB7XG4gICAgc3RhcnQoKSB7XG4gICAgICB1bmRvU3RhcnQgPSBzZXRGdW5jdGlvbihlbCwgc3RhcnQyKTtcbiAgICB9LFxuICAgIGR1cmluZygpIHtcbiAgICAgIHVuZG9EdXJpbmcgPSBzZXRGdW5jdGlvbihlbCwgZHVyaW5nKTtcbiAgICB9LFxuICAgIGJlZm9yZSxcbiAgICBlbmQoKSB7XG4gICAgICB1bmRvU3RhcnQoKTtcbiAgICAgIHVuZG9FbmQgPSBzZXRGdW5jdGlvbihlbCwgZW5kKTtcbiAgICB9LFxuICAgIGFmdGVyLFxuICAgIGNsZWFudXAoKSB7XG4gICAgICB1bmRvRHVyaW5nKCk7XG4gICAgICB1bmRvRW5kKCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHBlcmZvcm1UcmFuc2l0aW9uKGVsLCBzdGFnZXMpIHtcbiAgbGV0IGludGVycnVwdGVkLCByZWFjaGVkQmVmb3JlLCByZWFjaGVkRW5kO1xuICBsZXQgZmluaXNoID0gb25jZSgoKSA9PiB7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGludGVycnVwdGVkID0gdHJ1ZTtcbiAgICAgIGlmICghcmVhY2hlZEJlZm9yZSlcbiAgICAgICAgc3RhZ2VzLmJlZm9yZSgpO1xuICAgICAgaWYgKCFyZWFjaGVkRW5kKSB7XG4gICAgICAgIHN0YWdlcy5lbmQoKTtcbiAgICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgICAgfVxuICAgICAgc3RhZ2VzLmFmdGVyKCk7XG4gICAgICBpZiAoZWwuaXNDb25uZWN0ZWQpXG4gICAgICAgIHN0YWdlcy5jbGVhbnVwKCk7XG4gICAgICBkZWxldGUgZWwuX3hfdHJhbnNpdGlvbmluZztcbiAgICB9KTtcbiAgfSk7XG4gIGVsLl94X3RyYW5zaXRpb25pbmcgPSB7XG4gICAgYmVmb3JlQ2FuY2VsczogW10sXG4gICAgYmVmb3JlQ2FuY2VsKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmJlZm9yZUNhbmNlbHMucHVzaChjYWxsYmFjayk7XG4gICAgfSxcbiAgICBjYW5jZWw6IG9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICB3aGlsZSAodGhpcy5iZWZvcmVDYW5jZWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmJlZm9yZUNhbmNlbHMuc2hpZnQoKSgpO1xuICAgICAgfVxuICAgICAgO1xuICAgICAgZmluaXNoKCk7XG4gICAgfSksXG4gICAgZmluaXNoXG4gIH07XG4gIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgc3RhZ2VzLnN0YXJ0KCk7XG4gICAgc3RhZ2VzLmR1cmluZygpO1xuICB9KTtcbiAgaG9sZE5leHRUaWNrcygpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGlmIChpbnRlcnJ1cHRlZClcbiAgICAgIHJldHVybjtcbiAgICBsZXQgZHVyYXRpb24gPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBsZXQgZGVsYXkgPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkRlbGF5LnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBpZiAoZHVyYXRpb24gPT09IDApXG4gICAgICBkdXJhdGlvbiA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EdXJhdGlvbi5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxZTM7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIHN0YWdlcy5iZWZvcmUoKTtcbiAgICB9KTtcbiAgICByZWFjaGVkQmVmb3JlID0gdHJ1ZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKGludGVycnVwdGVkKVxuICAgICAgICByZXR1cm47XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBzdGFnZXMuZW5kKCk7XG4gICAgICB9KTtcbiAgICAgIHJlbGVhc2VOZXh0VGlja3MoKTtcbiAgICAgIHNldFRpbWVvdXQoZWwuX3hfdHJhbnNpdGlvbmluZy5maW5pc2gsIGR1cmF0aW9uICsgZGVsYXkpO1xuICAgICAgcmVhY2hlZEVuZCA9IHRydWU7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIGtleSwgZmFsbGJhY2spIHtcbiAgaWYgKG1vZGlmaWVycy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgY29uc3QgcmF3VmFsdWUgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDFdO1xuICBpZiAoIXJhd1ZhbHVlKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgaWYgKGtleSA9PT0gXCJzY2FsZVwiKSB7XG4gICAgaWYgKGlzTmFOKHJhd1ZhbHVlKSlcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxuICBpZiAoa2V5ID09PSBcImR1cmF0aW9uXCIgfHwga2V5ID09PSBcImRlbGF5XCIpIHtcbiAgICBsZXQgbWF0Y2ggPSByYXdWYWx1ZS5tYXRjaCgvKFswLTldKyltcy8pO1xuICAgIGlmIChtYXRjaClcbiAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICBpZiAoa2V5ID09PSBcIm9yaWdpblwiKSB7XG4gICAgaWYgKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwibGVmdFwiLCBcImNlbnRlclwiLCBcImJvdHRvbVwiXS5pbmNsdWRlcyhtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDJdKSkge1xuICAgICAgcmV0dXJuIFtyYXdWYWx1ZSwgbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKGtleSkgKyAyXV0uam9pbihcIiBcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiByYXdWYWx1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2Nsb25lLmpzXG52YXIgaXNDbG9uaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBza2lwRHVyaW5nQ2xvbmUoY2FsbGJhY2ssIGZhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IGlzQ2xvbmluZyA/IGZhbGxiYWNrKC4uLmFyZ3MpIDogY2FsbGJhY2soLi4uYXJncyk7XG59XG5mdW5jdGlvbiBvbmx5RHVyaW5nQ2xvbmUoY2FsbGJhY2spIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiBpc0Nsb25pbmcgJiYgY2FsbGJhY2soLi4uYXJncyk7XG59XG52YXIgaW50ZXJjZXB0b3JzID0gW107XG5mdW5jdGlvbiBpbnRlcmNlcHRDbG9uZShjYWxsYmFjaykge1xuICBpbnRlcmNlcHRvcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbG9uZU5vZGUoZnJvbSwgdG8pIHtcbiAgaW50ZXJjZXB0b3JzLmZvckVhY2goKGkpID0+IGkoZnJvbSwgdG8pKTtcbiAgaXNDbG9uaW5nID0gdHJ1ZTtcbiAgZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgaW5pdFRyZWUodG8sIChlbCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGVsLCAoKSA9PiB7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIGlzQ2xvbmluZyA9IGZhbHNlO1xufVxudmFyIGlzQ2xvbmluZ0xlZ2FjeSA9IGZhbHNlO1xuZnVuY3Rpb24gY2xvbmUob2xkRWwsIG5ld0VsKSB7XG4gIGlmICghbmV3RWwuX3hfZGF0YVN0YWNrKVxuICAgIG5ld0VsLl94X2RhdGFTdGFjayA9IG9sZEVsLl94X2RhdGFTdGFjaztcbiAgaXNDbG9uaW5nID0gdHJ1ZTtcbiAgaXNDbG9uaW5nTGVnYWN5ID0gdHJ1ZTtcbiAgZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgY2xvbmVUcmVlKG5ld0VsKTtcbiAgfSk7XG4gIGlzQ2xvbmluZyA9IGZhbHNlO1xuICBpc0Nsb25pbmdMZWdhY3kgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNsb25lVHJlZShlbCkge1xuICBsZXQgaGFzUnVuVGhyb3VnaEZpcnN0RWwgPSBmYWxzZTtcbiAgbGV0IHNoYWxsb3dXYWxrZXIgPSAoZWwyLCBjYWxsYmFjaykgPT4ge1xuICAgIHdhbGsoZWwyLCAoZWwzLCBza2lwKSA9PiB7XG4gICAgICBpZiAoaGFzUnVuVGhyb3VnaEZpcnN0RWwgJiYgaXNSb290KGVsMykpXG4gICAgICAgIHJldHVybiBza2lwKCk7XG4gICAgICBoYXNSdW5UaHJvdWdoRmlyc3RFbCA9IHRydWU7XG4gICAgICBjYWxsYmFjayhlbDMsIHNraXApO1xuICAgIH0pO1xuICB9O1xuICBpbml0VHJlZShlbCwgc2hhbGxvd1dhbGtlcik7XG59XG5mdW5jdGlvbiBkb250UmVnaXN0ZXJSZWFjdGl2ZVNpZGVFZmZlY3RzKGNhbGxiYWNrKSB7XG4gIGxldCBjYWNoZSA9IGVmZmVjdDtcbiAgb3ZlcnJpZGVFZmZlY3QoKGNhbGxiYWNrMiwgZWwpID0+IHtcbiAgICBsZXQgc3RvcmVkRWZmZWN0ID0gY2FjaGUoY2FsbGJhY2syKTtcbiAgICByZWxlYXNlKHN0b3JlZEVmZmVjdCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICB9KTtcbiAgY2FsbGJhY2soKTtcbiAgb3ZlcnJpZGVFZmZlY3QoY2FjaGUpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvYmluZC5qc1xuZnVuY3Rpb24gYmluZChlbCwgbmFtZSwgdmFsdWUsIG1vZGlmaWVycyA9IFtdKSB7XG4gIGlmICghZWwuX3hfYmluZGluZ3MpXG4gICAgZWwuX3hfYmluZGluZ3MgPSByZWFjdGl2ZSh7fSk7XG4gIGVsLl94X2JpbmRpbmdzW25hbWVdID0gdmFsdWU7XG4gIG5hbWUgPSBtb2RpZmllcnMuaW5jbHVkZXMoXCJjYW1lbFwiKSA/IGNhbWVsQ2FzZShuYW1lKSA6IG5hbWU7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgYmluZElucHV0VmFsdWUoZWwsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdHlsZVwiOlxuICAgICAgYmluZFN0eWxlcyhlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNsYXNzXCI6XG4gICAgICBiaW5kQ2xhc3NlcyhlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNlbGVjdGVkXCI6XG4gICAgY2FzZSBcImNoZWNrZWRcIjpcbiAgICAgIGJpbmRBdHRyaWJ1dGVBbmRQcm9wZXJ0eShlbCwgbmFtZSwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJpbmRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5mdW5jdGlvbiBiaW5kSW5wdXRWYWx1ZShlbCwgdmFsdWUpIHtcbiAgaWYgKGlzUmFkaW8oZWwpKSB7XG4gICAgaWYgKGVsLmF0dHJpYnV0ZXMudmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5mcm9tTW9kZWwpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSBzYWZlUGFyc2VCb29sZWFuKGVsLnZhbHVlKSA9PT0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jaGVja2VkID0gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUoZWwudmFsdWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNDaGVja2JveChlbCkpIHtcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlICE9PSBcImJvb2xlYW5cIiAmJiAhW251bGwsIHZvaWQgMF0uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICBlbC52YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBlbC5jaGVja2VkID0gdmFsdWUuc29tZSgodmFsKSA9PiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZSh2YWwsIGVsLnZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jaGVja2VkID0gISF2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoZWwudGFnTmFtZSA9PT0gXCJTRUxFQ1RcIikge1xuICAgIHVwZGF0ZVNlbGVjdChlbCwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChlbC52YWx1ZSA9PT0gdmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgZWwudmFsdWUgPSB2YWx1ZSA9PT0gdm9pZCAwID8gXCJcIiA6IHZhbHVlO1xuICB9XG59XG5mdW5jdGlvbiBiaW5kQ2xhc3NlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKGVsLl94X3VuZG9BZGRlZENsYXNzZXMpXG4gICAgZWwuX3hfdW5kb0FkZGVkQ2xhc3NlcygpO1xuICBlbC5feF91bmRvQWRkZWRDbGFzc2VzID0gc2V0Q2xhc3NlcyhlbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYmluZFN0eWxlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKGVsLl94X3VuZG9BZGRlZFN0eWxlcylcbiAgICBlbC5feF91bmRvQWRkZWRTdHlsZXMoKTtcbiAgZWwuX3hfdW5kb0FkZGVkU3R5bGVzID0gc2V0U3R5bGVzKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBiaW5kQXR0cmlidXRlQW5kUHJvcGVydHkoZWwsIG5hbWUsIHZhbHVlKSB7XG4gIGJpbmRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKTtcbiAgc2V0UHJvcGVydHlJZkNoYW5nZWQoZWwsIG5hbWUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGJpbmRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChbbnVsbCwgdm9pZCAwLCBmYWxzZV0uaW5jbHVkZXModmFsdWUpICYmIGF0dHJpYnV0ZVNob3VsZG50QmVQcmVzZXJ2ZWRJZkZhbHN5KG5hbWUpKSB7XG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChpc0Jvb2xlYW5BdHRyKG5hbWUpKVxuICAgICAgdmFsdWUgPSBuYW1lO1xuICAgIHNldElmQ2hhbmdlZChlbCwgbmFtZSwgdmFsdWUpO1xuICB9XG59XG5mdW5jdGlvbiBzZXRJZkNoYW5nZWQoZWwsIGF0dHJOYW1lLCB2YWx1ZSkge1xuICBpZiAoZWwuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKSAhPSB2YWx1ZSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgdmFsdWUpO1xuICB9XG59XG5mdW5jdGlvbiBzZXRQcm9wZXJ0eUlmQ2hhbmdlZChlbCwgcHJvcE5hbWUsIHZhbHVlKSB7XG4gIGlmIChlbFtwcm9wTmFtZV0gIT09IHZhbHVlKSB7XG4gICAgZWxbcHJvcE5hbWVdID0gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZVNlbGVjdChlbCwgdmFsdWUpIHtcbiAgY29uc3QgYXJyYXlXcmFwcGVkVmFsdWUgPSBbXS5jb25jYXQodmFsdWUpLm1hcCgodmFsdWUyKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlMiArIFwiXCI7XG4gIH0pO1xuICBBcnJheS5mcm9tKGVsLm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gY2FtZWxDYXNlKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKFxcdykvZywgKG1hdGNoLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufVxuZnVuY3Rpb24gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUodmFsdWVBLCB2YWx1ZUIpIHtcbiAgcmV0dXJuIHZhbHVlQSA9PSB2YWx1ZUI7XG59XG5mdW5jdGlvbiBzYWZlUGFyc2VCb29sZWFuKHJhd1ZhbHVlKSB7XG4gIGlmIChbMSwgXCIxXCIsIFwidHJ1ZVwiLCBcIm9uXCIsIFwieWVzXCIsIHRydWVdLmluY2x1ZGVzKHJhd1ZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChbMCwgXCIwXCIsIFwiZmFsc2VcIiwgXCJvZmZcIiwgXCJub1wiLCBmYWxzZV0uaW5jbHVkZXMocmF3VmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYXdWYWx1ZSA/IEJvb2xlYW4ocmF3VmFsdWUpIDogbnVsbDtcbn1cbnZhciBib29sZWFuQXR0cmlidXRlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcbiAgXCJhbGxvd2Z1bGxzY3JlZW5cIixcbiAgXCJhc3luY1wiLFxuICBcImF1dG9mb2N1c1wiLFxuICBcImF1dG9wbGF5XCIsXG4gIFwiY2hlY2tlZFwiLFxuICBcImNvbnRyb2xzXCIsXG4gIFwiZGVmYXVsdFwiLFxuICBcImRlZmVyXCIsXG4gIFwiZGlzYWJsZWRcIixcbiAgXCJmb3Jtbm92YWxpZGF0ZVwiLFxuICBcImluZXJ0XCIsXG4gIFwiaXNtYXBcIixcbiAgXCJpdGVtc2NvcGVcIixcbiAgXCJsb29wXCIsXG4gIFwibXVsdGlwbGVcIixcbiAgXCJtdXRlZFwiLFxuICBcIm5vbW9kdWxlXCIsXG4gIFwibm92YWxpZGF0ZVwiLFxuICBcIm9wZW5cIixcbiAgXCJwbGF5c2lubGluZVwiLFxuICBcInJlYWRvbmx5XCIsXG4gIFwicmVxdWlyZWRcIixcbiAgXCJyZXZlcnNlZFwiLFxuICBcInNlbGVjdGVkXCIsXG4gIFwic2hhZG93cm9vdGNsb25hYmxlXCIsXG4gIFwic2hhZG93cm9vdGRlbGVnYXRlc2ZvY3VzXCIsXG4gIFwic2hhZG93cm9vdHNlcmlhbGl6YWJsZVwiXG5dKTtcbmZ1bmN0aW9uIGlzQm9vbGVhbkF0dHIoYXR0ck5hbWUpIHtcbiAgcmV0dXJuIGJvb2xlYW5BdHRyaWJ1dGVzLmhhcyhhdHRyTmFtZSk7XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVTaG91bGRudEJlUHJlc2VydmVkSWZGYWxzeShuYW1lKSB7XG4gIHJldHVybiAhW1wiYXJpYS1wcmVzc2VkXCIsIFwiYXJpYS1jaGVja2VkXCIsIFwiYXJpYS1leHBhbmRlZFwiLCBcImFyaWEtc2VsZWN0ZWRcIl0uaW5jbHVkZXMobmFtZSk7XG59XG5mdW5jdGlvbiBnZXRCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjaykge1xuICBpZiAoZWwuX3hfYmluZGluZ3MgJiYgZWwuX3hfYmluZGluZ3NbbmFtZV0gIT09IHZvaWQgMClcbiAgICByZXR1cm4gZWwuX3hfYmluZGluZ3NbbmFtZV07XG4gIHJldHVybiBnZXRBdHRyaWJ1dGVCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjayk7XG59XG5mdW5jdGlvbiBleHRyYWN0UHJvcChlbCwgbmFtZSwgZmFsbGJhY2ssIGV4dHJhY3QgPSB0cnVlKSB7XG4gIGlmIChlbC5feF9iaW5kaW5ncyAmJiBlbC5feF9iaW5kaW5nc1tuYW1lXSAhPT0gdm9pZCAwKVxuICAgIHJldHVybiBlbC5feF9iaW5kaW5nc1tuYW1lXTtcbiAgaWYgKGVsLl94X2lubGluZUJpbmRpbmdzICYmIGVsLl94X2lubGluZUJpbmRpbmdzW25hbWVdICE9PSB2b2lkIDApIHtcbiAgICBsZXQgYmluZGluZyA9IGVsLl94X2lubGluZUJpbmRpbmdzW25hbWVdO1xuICAgIGJpbmRpbmcuZXh0cmFjdCA9IGV4dHJhY3Q7XG4gICAgcmV0dXJuIGRvbnRBdXRvRXZhbHVhdGVGdW5jdGlvbnMoKCkgPT4ge1xuICAgICAgcmV0dXJuIGV2YWx1YXRlKGVsLCBiaW5kaW5nLmV4cHJlc3Npb24pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBnZXRBdHRyaWJ1dGVCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjayk7XG59XG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjaykge1xuICBsZXQgYXR0ciA9IGVsLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgaWYgKGF0dHIgPT09IG51bGwpXG4gICAgcmV0dXJuIHR5cGVvZiBmYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiID8gZmFsbGJhY2soKSA6IGZhbGxiYWNrO1xuICBpZiAoYXR0ciA9PT0gXCJcIilcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKGlzQm9vbGVhbkF0dHIobmFtZSkpIHtcbiAgICByZXR1cm4gISFbbmFtZSwgXCJ0cnVlXCJdLmluY2x1ZGVzKGF0dHIpO1xuICB9XG4gIHJldHVybiBhdHRyO1xufVxuZnVuY3Rpb24gaXNDaGVja2JveChlbCkge1xuICByZXR1cm4gZWwudHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGVsLmxvY2FsTmFtZSA9PT0gXCJ1aS1jaGVja2JveFwiIHx8IGVsLmxvY2FsTmFtZSA9PT0gXCJ1aS1zd2l0Y2hcIjtcbn1cbmZ1bmN0aW9uIGlzUmFkaW8oZWwpIHtcbiAgcmV0dXJuIGVsLnR5cGUgPT09IFwicmFkaW9cIiB8fCBlbC5sb2NhbE5hbWUgPT09IFwidWktcmFkaW9cIjtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2RlYm91bmNlLmpzXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0KSB7XG4gIHZhciB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3Rocm90dGxlLmpzXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCBsaW1pdCkge1xuICBsZXQgaW5UaHJvdHRsZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZiAoIWluVGhyb3R0bGUpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpblRocm90dGxlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5UaHJvdHRsZSA9IGZhbHNlLCBsaW1pdCk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZW50YW5nbGUuanNcbmZ1bmN0aW9uIGVudGFuZ2xlKHsgZ2V0OiBvdXRlckdldCwgc2V0OiBvdXRlclNldCB9LCB7IGdldDogaW5uZXJHZXQsIHNldDogaW5uZXJTZXQgfSkge1xuICBsZXQgZmlyc3RSdW4gPSB0cnVlO1xuICBsZXQgb3V0ZXJIYXNoO1xuICBsZXQgaW5uZXJIYXNoO1xuICBsZXQgcmVmZXJlbmNlID0gZWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb3V0ZXIgPSBvdXRlckdldCgpO1xuICAgIGxldCBpbm5lciA9IGlubmVyR2V0KCk7XG4gICAgaWYgKGZpcnN0UnVuKSB7XG4gICAgICBpbm5lclNldChjbG9uZUlmT2JqZWN0KG91dGVyKSk7XG4gICAgICBmaXJzdFJ1biA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgb3V0ZXJIYXNoTGF0ZXN0ID0gSlNPTi5zdHJpbmdpZnkob3V0ZXIpO1xuICAgICAgbGV0IGlubmVySGFzaExhdGVzdCA9IEpTT04uc3RyaW5naWZ5KGlubmVyKTtcbiAgICAgIGlmIChvdXRlckhhc2hMYXRlc3QgIT09IG91dGVySGFzaCkge1xuICAgICAgICBpbm5lclNldChjbG9uZUlmT2JqZWN0KG91dGVyKSk7XG4gICAgICB9IGVsc2UgaWYgKG91dGVySGFzaExhdGVzdCAhPT0gaW5uZXJIYXNoTGF0ZXN0KSB7XG4gICAgICAgIG91dGVyU2V0KGNsb25lSWZPYmplY3QoaW5uZXIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICB9XG4gICAgfVxuICAgIG91dGVySGFzaCA9IEpTT04uc3RyaW5naWZ5KG91dGVyR2V0KCkpO1xuICAgIGlubmVySGFzaCA9IEpTT04uc3RyaW5naWZ5KGlubmVyR2V0KCkpO1xuICB9KTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZWxlYXNlKHJlZmVyZW5jZSk7XG4gIH07XG59XG5mdW5jdGlvbiBjbG9uZUlmT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSkgOiB2YWx1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3BsdWdpbi5qc1xuZnVuY3Rpb24gcGx1Z2luKGNhbGxiYWNrKSB7XG4gIGxldCBjYWxsYmFja3MgPSBBcnJheS5pc0FycmF5KGNhbGxiYWNrKSA/IGNhbGxiYWNrIDogW2NhbGxiYWNrXTtcbiAgY2FsbGJhY2tzLmZvckVhY2goKGkpID0+IGkoYWxwaW5lX2RlZmF1bHQpKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3N0b3JlLmpzXG52YXIgc3RvcmVzID0ge307XG52YXIgaXNSZWFjdGl2ZSA9IGZhbHNlO1xuZnVuY3Rpb24gc3RvcmUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKCFpc1JlYWN0aXZlKSB7XG4gICAgc3RvcmVzID0gcmVhY3RpdmUoc3RvcmVzKTtcbiAgICBpc1JlYWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiBzdG9yZXNbbmFtZV07XG4gIH1cbiAgc3RvcmVzW25hbWVdID0gdmFsdWU7XG4gIGluaXRJbnRlcmNlcHRvcnMoc3RvcmVzW25hbWVdKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImluaXRcIikgJiYgdHlwZW9mIHZhbHVlLmluaXQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHN0b3Jlc1tuYW1lXS5pbml0KCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFN0b3JlcygpIHtcbiAgcmV0dXJuIHN0b3Jlcztcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2JpbmRzLmpzXG52YXIgYmluZHMgPSB7fTtcbmZ1bmN0aW9uIGJpbmQyKG5hbWUsIGJpbmRpbmdzKSB7XG4gIGxldCBnZXRCaW5kaW5ncyA9IHR5cGVvZiBiaW5kaW5ncyAhPT0gXCJmdW5jdGlvblwiID8gKCkgPT4gYmluZGluZ3MgOiBiaW5kaW5ncztcbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIGFwcGx5QmluZGluZ3NPYmplY3QobmFtZSwgZ2V0QmluZGluZ3MoKSk7XG4gIH0gZWxzZSB7XG4gICAgYmluZHNbbmFtZV0gPSBnZXRCaW5kaW5ncztcbiAgfVxuICByZXR1cm4gKCkgPT4ge1xuICB9O1xufVxuZnVuY3Rpb24gaW5qZWN0QmluZGluZ1Byb3ZpZGVycyhvYmopIHtcbiAgT2JqZWN0LmVudHJpZXMoYmluZHMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBhcHBseUJpbmRpbmdzT2JqZWN0KGVsLCBvYmosIG9yaWdpbmFsKSB7XG4gIGxldCBjbGVhbnVwUnVubmVycyA9IFtdO1xuICB3aGlsZSAoY2xlYW51cFJ1bm5lcnMubGVuZ3RoKVxuICAgIGNsZWFudXBSdW5uZXJzLnBvcCgpKCk7XG4gIGxldCBhdHRyaWJ1dGVzID0gT2JqZWN0LmVudHJpZXMob2JqKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+ICh7IG5hbWUsIHZhbHVlIH0pKTtcbiAgbGV0IHN0YXRpY0F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzT25seShhdHRyaWJ1dGVzKTtcbiAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICBpZiAoc3RhdGljQXR0cmlidXRlcy5maW5kKChhdHRyKSA9PiBhdHRyLm5hbWUgPT09IGF0dHJpYnV0ZS5uYW1lKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogYHgtYmluZDoke2F0dHJpYnV0ZS5uYW1lfWAsXG4gICAgICAgIHZhbHVlOiBgXCIke2F0dHJpYnV0ZS52YWx1ZX1cImBcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGU7XG4gIH0pO1xuICBkaXJlY3RpdmVzKGVsLCBhdHRyaWJ1dGVzLCBvcmlnaW5hbCkubWFwKChoYW5kbGUpID0+IHtcbiAgICBjbGVhbnVwUnVubmVycy5wdXNoKGhhbmRsZS5ydW5DbGVhbnVwcyk7XG4gICAgaGFuZGxlKCk7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHdoaWxlIChjbGVhbnVwUnVubmVycy5sZW5ndGgpXG4gICAgICBjbGVhbnVwUnVubmVycy5wb3AoKSgpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGF0YXMuanNcbnZhciBkYXRhcyA9IHt9O1xuZnVuY3Rpb24gZGF0YShuYW1lLCBjYWxsYmFjaykge1xuICBkYXRhc1tuYW1lXSA9IGNhbGxiYWNrO1xufVxuZnVuY3Rpb24gaW5qZWN0RGF0YVByb3ZpZGVycyhvYmosIGNvbnRleHQpIHtcbiAgT2JqZWN0LmVudHJpZXMoZGF0YXMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5iaW5kKGNvbnRleHQpKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvYWxwaW5lLmpzXG52YXIgQWxwaW5lID0ge1xuICBnZXQgcmVhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlO1xuICB9LFxuICBnZXQgcmVsZWFzZSgpIHtcbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfSxcbiAgZ2V0IGVmZmVjdCgpIHtcbiAgICByZXR1cm4gZWZmZWN0O1xuICB9LFxuICBnZXQgcmF3KCkge1xuICAgIHJldHVybiByYXc7XG4gIH0sXG4gIHZlcnNpb246IFwiMy4xNC44XCIsXG4gIGZsdXNoQW5kU3RvcERlZmVycmluZ011dGF0aW9ucyxcbiAgZG9udEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyxcbiAgZGlzYWJsZUVmZmVjdFNjaGVkdWxpbmcsXG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zLFxuICBzdG9wT2JzZXJ2aW5nTXV0YXRpb25zLFxuICBzZXRSZWFjdGl2aXR5RW5naW5lLFxuICBvbkF0dHJpYnV0ZVJlbW92ZWQsXG4gIG9uQXR0cmlidXRlc0FkZGVkLFxuICBjbG9zZXN0RGF0YVN0YWNrLFxuICBza2lwRHVyaW5nQ2xvbmUsXG4gIG9ubHlEdXJpbmdDbG9uZSxcbiAgYWRkUm9vdFNlbGVjdG9yLFxuICBhZGRJbml0U2VsZWN0b3IsXG4gIGludGVyY2VwdENsb25lLFxuICBhZGRTY29wZVRvTm9kZSxcbiAgZGVmZXJNdXRhdGlvbnMsXG4gIG1hcEF0dHJpYnV0ZXMsXG4gIGV2YWx1YXRlTGF0ZXIsXG4gIGludGVyY2VwdEluaXQsXG4gIHNldEV2YWx1YXRvcixcbiAgbWVyZ2VQcm94aWVzLFxuICBleHRyYWN0UHJvcCxcbiAgZmluZENsb3Nlc3QsXG4gIG9uRWxSZW1vdmVkLFxuICBjbG9zZXN0Um9vdCxcbiAgZGVzdHJveVRyZWUsXG4gIGludGVyY2VwdG9yLFxuICAvLyBJTlRFUk5BTDogbm90IHB1YmxpYyBBUEkgYW5kIGlzIHN1YmplY3QgdG8gY2hhbmdlIHdpdGhvdXQgbWFqb3IgcmVsZWFzZS5cbiAgdHJhbnNpdGlvbixcbiAgLy8gSU5URVJOQUxcbiAgc2V0U3R5bGVzLFxuICAvLyBJTlRFUk5BTFxuICBtdXRhdGVEb20sXG4gIGRpcmVjdGl2ZSxcbiAgZW50YW5nbGUsXG4gIHRocm90dGxlLFxuICBkZWJvdW5jZSxcbiAgZXZhbHVhdGUsXG4gIGluaXRUcmVlLFxuICBuZXh0VGljayxcbiAgcHJlZml4ZWQ6IHByZWZpeCxcbiAgcHJlZml4OiBzZXRQcmVmaXgsXG4gIHBsdWdpbixcbiAgbWFnaWMsXG4gIHN0b3JlLFxuICBzdGFydCxcbiAgY2xvbmUsXG4gIC8vIElOVEVSTkFMXG4gIGNsb25lTm9kZSxcbiAgLy8gSU5URVJOQUxcbiAgYm91bmQ6IGdldEJpbmRpbmcsXG4gICRkYXRhOiBzY29wZSxcbiAgd2F0Y2gsXG4gIHdhbGssXG4gIGRhdGEsXG4gIGJpbmQ6IGJpbmQyXG59O1xudmFyIGFscGluZV9kZWZhdWx0ID0gQWxwaW5lO1xuXG4vLyBub2RlX21vZHVsZXMvQHZ1ZS9zaGFyZWQvZGlzdC9zaGFyZWQuZXNtLWJ1bmRsZXIuanNcbmZ1bmN0aW9uIG1ha2VNYXAoc3RyLCBleHBlY3RzTG93ZXJDYXNlKSB7XG4gIGNvbnN0IG1hcCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBjb25zdCBsaXN0ID0gc3RyLnNwbGl0KFwiLFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZSA/ICh2YWwpID0+ICEhbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXSA6ICh2YWwpID0+ICEhbWFwW3ZhbF07XG59XG52YXIgc3BlY2lhbEJvb2xlYW5BdHRycyA9IGBpdGVtc2NvcGUsYWxsb3dmdWxsc2NyZWVuLGZvcm1ub3ZhbGlkYXRlLGlzbWFwLG5vbW9kdWxlLG5vdmFsaWRhdGUscmVhZG9ubHlgO1xudmFyIGlzQm9vbGVhbkF0dHIyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoc3BlY2lhbEJvb2xlYW5BdHRycyArIGAsYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LGNvbnRyb2xzLGRlZmF1bHQsZGVmZXIsZGlzYWJsZWQsaGlkZGVuLGxvb3Asb3BlbixyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3MsY2hlY2tlZCxtdXRlZCxtdWx0aXBsZSxzZWxlY3RlZGApO1xudmFyIEVNUFRZX09CSiA9IHRydWUgPyBPYmplY3QuZnJlZXplKHt9KSA6IHt9O1xudmFyIEVNUFRZX0FSUiA9IHRydWUgPyBPYmplY3QuZnJlZXplKFtdKSA6IFtdO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBoYXNPd24gPSAodmFsLCBrZXkpID0+IGhhc093blByb3BlcnR5LmNhbGwodmFsLCBrZXkpO1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIGlzTWFwID0gKHZhbCkgPT4gdG9UeXBlU3RyaW5nKHZhbCkgPT09IFwiW29iamVjdCBNYXBdXCI7XG52YXIgaXNTdHJpbmcgPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiO1xudmFyIGlzU3ltYm9sID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJzeW1ib2xcIjtcbnZhciBpc09iamVjdCA9ICh2YWwpID0+IHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiO1xudmFyIG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciB0b1R5cGVTdHJpbmcgPSAodmFsdWUpID0+IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xudmFyIHRvUmF3VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdG9UeXBlU3RyaW5nKHZhbHVlKS5zbGljZSg4LCAtMSk7XG59O1xudmFyIGlzSW50ZWdlcktleSA9IChrZXkpID0+IGlzU3RyaW5nKGtleSkgJiYga2V5ICE9PSBcIk5hTlwiICYmIGtleVswXSAhPT0gXCItXCIgJiYgXCJcIiArIHBhcnNlSW50KGtleSwgMTApID09PSBrZXk7XG52YXIgY2FjaGVTdHJpbmdGdW5jdGlvbiA9IChmbikgPT4ge1xuICBjb25zdCBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gKHN0cikgPT4ge1xuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICB9O1xufTtcbnZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xudmFyIGNhbWVsaXplID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCAoXywgYykgPT4gYyA/IGMudG9VcHBlckNhc2UoKSA6IFwiXCIpO1xufSk7XG52YXIgaHlwaGVuYXRlUkUgPSAvXFxCKFtBLVpdKS9nO1xudmFyIGh5cGhlbmF0ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xudmFyIGNhcGl0YWxpemUgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKSk7XG52YXIgdG9IYW5kbGVyS2V5ID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiBzdHIgPyBgb24ke2NhcGl0YWxpemUoc3RyKX1gIDogYGApO1xudmFyIGhhc0NoYW5nZWQgPSAodmFsdWUsIG9sZFZhbHVlKSA9PiB2YWx1ZSAhPT0gb2xkVmFsdWUgJiYgKHZhbHVlID09PSB2YWx1ZSB8fCBvbGRWYWx1ZSA9PT0gb2xkVmFsdWUpO1xuXG4vLyBub2RlX21vZHVsZXMvQHZ1ZS9yZWFjdGl2aXR5L2Rpc3QvcmVhY3Rpdml0eS5lc20tYnVuZGxlci5qc1xudmFyIHRhcmdldE1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGVmZmVjdFN0YWNrID0gW107XG52YXIgYWN0aXZlRWZmZWN0O1xudmFyIElURVJBVEVfS0VZID0gU3ltYm9sKHRydWUgPyBcIml0ZXJhdGVcIiA6IFwiXCIpO1xudmFyIE1BUF9LRVlfSVRFUkFURV9LRVkgPSBTeW1ib2wodHJ1ZSA/IFwiTWFwIGtleSBpdGVyYXRlXCIgOiBcIlwiKTtcbmZ1bmN0aW9uIGlzRWZmZWN0KGZuKSB7XG4gIHJldHVybiBmbiAmJiBmbi5faXNFZmZlY3QgPT09IHRydWU7XG59XG5mdW5jdGlvbiBlZmZlY3QyKGZuLCBvcHRpb25zID0gRU1QVFlfT0JKKSB7XG4gIGlmIChpc0VmZmVjdChmbikpIHtcbiAgICBmbiA9IGZuLnJhdztcbiAgfVxuICBjb25zdCBlZmZlY3QzID0gY3JlYXRlUmVhY3RpdmVFZmZlY3QoZm4sIG9wdGlvbnMpO1xuICBpZiAoIW9wdGlvbnMubGF6eSkge1xuICAgIGVmZmVjdDMoKTtcbiAgfVxuICByZXR1cm4gZWZmZWN0Mztcbn1cbmZ1bmN0aW9uIHN0b3AoZWZmZWN0Mykge1xuICBpZiAoZWZmZWN0My5hY3RpdmUpIHtcbiAgICBjbGVhbnVwKGVmZmVjdDMpO1xuICAgIGlmIChlZmZlY3QzLm9wdGlvbnMub25TdG9wKSB7XG4gICAgICBlZmZlY3QzLm9wdGlvbnMub25TdG9wKCk7XG4gICAgfVxuICAgIGVmZmVjdDMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn1cbnZhciB1aWQgPSAwO1xuZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmVFZmZlY3QoZm4sIG9wdGlvbnMpIHtcbiAgY29uc3QgZWZmZWN0MyA9IGZ1bmN0aW9uIHJlYWN0aXZlRWZmZWN0KCkge1xuICAgIGlmICghZWZmZWN0My5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBmbigpO1xuICAgIH1cbiAgICBpZiAoIWVmZmVjdFN0YWNrLmluY2x1ZGVzKGVmZmVjdDMpKSB7XG4gICAgICBjbGVhbnVwKGVmZmVjdDMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZW5hYmxlVHJhY2tpbmcoKTtcbiAgICAgICAgZWZmZWN0U3RhY2sucHVzaChlZmZlY3QzKTtcbiAgICAgICAgYWN0aXZlRWZmZWN0ID0gZWZmZWN0MztcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBlZmZlY3RTdGFjay5wb3AoKTtcbiAgICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgICBhY3RpdmVFZmZlY3QgPSBlZmZlY3RTdGFja1tlZmZlY3RTdGFjay5sZW5ndGggLSAxXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGVmZmVjdDMuaWQgPSB1aWQrKztcbiAgZWZmZWN0My5hbGxvd1JlY3Vyc2UgPSAhIW9wdGlvbnMuYWxsb3dSZWN1cnNlO1xuICBlZmZlY3QzLl9pc0VmZmVjdCA9IHRydWU7XG4gIGVmZmVjdDMuYWN0aXZlID0gdHJ1ZTtcbiAgZWZmZWN0My5yYXcgPSBmbjtcbiAgZWZmZWN0My5kZXBzID0gW107XG4gIGVmZmVjdDMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHJldHVybiBlZmZlY3QzO1xufVxuZnVuY3Rpb24gY2xlYW51cChlZmZlY3QzKSB7XG4gIGNvbnN0IHsgZGVwcyB9ID0gZWZmZWN0MztcbiAgaWYgKGRlcHMubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXBzW2ldLmRlbGV0ZShlZmZlY3QzKTtcbiAgICB9XG4gICAgZGVwcy5sZW5ndGggPSAwO1xuICB9XG59XG52YXIgc2hvdWxkVHJhY2sgPSB0cnVlO1xudmFyIHRyYWNrU3RhY2sgPSBbXTtcbmZ1bmN0aW9uIHBhdXNlVHJhY2tpbmcoKSB7XG4gIHRyYWNrU3RhY2sucHVzaChzaG91bGRUcmFjayk7XG4gIHNob3VsZFRyYWNrID0gZmFsc2U7XG59XG5mdW5jdGlvbiBlbmFibGVUcmFja2luZygpIHtcbiAgdHJhY2tTdGFjay5wdXNoKHNob3VsZFRyYWNrKTtcbiAgc2hvdWxkVHJhY2sgPSB0cnVlO1xufVxuZnVuY3Rpb24gcmVzZXRUcmFja2luZygpIHtcbiAgY29uc3QgbGFzdCA9IHRyYWNrU3RhY2sucG9wKCk7XG4gIHNob3VsZFRyYWNrID0gbGFzdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IGxhc3Q7XG59XG5mdW5jdGlvbiB0cmFjayh0YXJnZXQsIHR5cGUsIGtleSkge1xuICBpZiAoIXNob3VsZFRyYWNrIHx8IGFjdGl2ZUVmZmVjdCA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBkZXBzTWFwID0gdGFyZ2V0TWFwLmdldCh0YXJnZXQpO1xuICBpZiAoIWRlcHNNYXApIHtcbiAgICB0YXJnZXRNYXAuc2V0KHRhcmdldCwgZGVwc01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuICB9XG4gIGxldCBkZXAgPSBkZXBzTWFwLmdldChrZXkpO1xuICBpZiAoIWRlcCkge1xuICAgIGRlcHNNYXAuc2V0KGtleSwgZGVwID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG4gIH1cbiAgaWYgKCFkZXAuaGFzKGFjdGl2ZUVmZmVjdCkpIHtcbiAgICBkZXAuYWRkKGFjdGl2ZUVmZmVjdCk7XG4gICAgYWN0aXZlRWZmZWN0LmRlcHMucHVzaChkZXApO1xuICAgIGlmIChhY3RpdmVFZmZlY3Qub3B0aW9ucy5vblRyYWNrKSB7XG4gICAgICBhY3RpdmVFZmZlY3Qub3B0aW9ucy5vblRyYWNrKHtcbiAgICAgICAgZWZmZWN0OiBhY3RpdmVFZmZlY3QsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAga2V5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHRyaWdnZXIodGFyZ2V0LCB0eXBlLCBrZXksIG5ld1ZhbHVlLCBvbGRWYWx1ZSwgb2xkVGFyZ2V0KSB7XG4gIGNvbnN0IGRlcHNNYXAgPSB0YXJnZXRNYXAuZ2V0KHRhcmdldCk7XG4gIGlmICghZGVwc01hcCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBlZmZlY3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgY29uc3QgYWRkMiA9IChlZmZlY3RzVG9BZGQpID0+IHtcbiAgICBpZiAoZWZmZWN0c1RvQWRkKSB7XG4gICAgICBlZmZlY3RzVG9BZGQuZm9yRWFjaCgoZWZmZWN0MykgPT4ge1xuICAgICAgICBpZiAoZWZmZWN0MyAhPT0gYWN0aXZlRWZmZWN0IHx8IGVmZmVjdDMuYWxsb3dSZWN1cnNlKSB7XG4gICAgICAgICAgZWZmZWN0cy5hZGQoZWZmZWN0Myk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaWYgKHR5cGUgPT09IFwiY2xlYXJcIikge1xuICAgIGRlcHNNYXAuZm9yRWFjaChhZGQyKTtcbiAgfSBlbHNlIGlmIChrZXkgPT09IFwibGVuZ3RoXCIgJiYgaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgZGVwc01hcC5mb3JFYWNoKChkZXAsIGtleTIpID0+IHtcbiAgICAgIGlmIChrZXkyID09PSBcImxlbmd0aFwiIHx8IGtleTIgPj0gbmV3VmFsdWUpIHtcbiAgICAgICAgYWRkMihkZXApO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChrZXkgIT09IHZvaWQgMCkge1xuICAgICAgYWRkMihkZXBzTWFwLmdldChrZXkpKTtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwiYWRkXCI6XG4gICAgICAgIGlmICghaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgYWRkMihkZXBzTWFwLmdldChJVEVSQVRFX0tFWSkpO1xuICAgICAgICAgIGlmIChpc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KE1BUF9LRVlfSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNJbnRlZ2VyS2V5KGtleSkpIHtcbiAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KFwibGVuZ3RoXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZWxldGVcIjpcbiAgICAgICAgaWYgKCFpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgICAgaWYgKGlzTWFwKHRhcmdldCkpIHtcbiAgICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoTUFQX0tFWV9JVEVSQVRFX0tFWSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzZXRcIjpcbiAgICAgICAgaWYgKGlzTWFwKHRhcmdldCkpIHtcbiAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJ1biA9IChlZmZlY3QzKSA9PiB7XG4gICAgaWYgKGVmZmVjdDMub3B0aW9ucy5vblRyaWdnZXIpIHtcbiAgICAgIGVmZmVjdDMub3B0aW9ucy5vblRyaWdnZXIoe1xuICAgICAgICBlZmZlY3Q6IGVmZmVjdDMsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAga2V5LFxuICAgICAgICB0eXBlLFxuICAgICAgICBuZXdWYWx1ZSxcbiAgICAgICAgb2xkVmFsdWUsXG4gICAgICAgIG9sZFRhcmdldFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlZmZlY3QzLm9wdGlvbnMuc2NoZWR1bGVyKSB7XG4gICAgICBlZmZlY3QzLm9wdGlvbnMuc2NoZWR1bGVyKGVmZmVjdDMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlZmZlY3QzKCk7XG4gICAgfVxuICB9O1xuICBlZmZlY3RzLmZvckVhY2gocnVuKTtcbn1cbnZhciBpc05vblRyYWNrYWJsZUtleXMgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChgX19wcm90b19fLF9fdl9pc1JlZixfX2lzVnVlYCk7XG52YXIgYnVpbHRJblN5bWJvbHMgPSBuZXcgU2V0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFN5bWJvbCkubWFwKChrZXkpID0+IFN5bWJvbFtrZXldKS5maWx0ZXIoaXNTeW1ib2wpKTtcbnZhciBnZXQyID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUdldHRlcigpO1xudmFyIHJlYWRvbmx5R2V0ID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUdldHRlcih0cnVlKTtcbnZhciBhcnJheUluc3RydW1lbnRhdGlvbnMgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlQXJyYXlJbnN0cnVtZW50YXRpb25zKCk7XG5mdW5jdGlvbiBjcmVhdGVBcnJheUluc3RydW1lbnRhdGlvbnMoKSB7XG4gIGNvbnN0IGluc3RydW1lbnRhdGlvbnMgPSB7fTtcbiAgW1wiaW5jbHVkZXNcIiwgXCJpbmRleE9mXCIsIFwibGFzdEluZGV4T2ZcIl0uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaW5zdHJ1bWVudGF0aW9uc1trZXldID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgY29uc3QgYXJyID0gdG9SYXcodGhpcyk7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRyYWNrKGFyciwgXCJnZXRcIiwgaSArIFwiXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gYXJyW2tleV0oLi4uYXJncyk7XG4gICAgICBpZiAocmVzID09PSAtMSB8fCByZXMgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBhcnJba2V5XSguLi5hcmdzLm1hcCh0b1JhdykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgW1wicHVzaFwiLCBcInBvcFwiLCBcInNoaWZ0XCIsIFwidW5zaGlmdFwiLCBcInNwbGljZVwiXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpbnN0cnVtZW50YXRpb25zW2tleV0gPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBwYXVzZVRyYWNraW5nKCk7XG4gICAgICBjb25zdCByZXMgPSB0b1Jhdyh0aGlzKVtrZXldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIGluc3RydW1lbnRhdGlvbnM7XG59XG5mdW5jdGlvbiBjcmVhdGVHZXR0ZXIoaXNSZWFkb25seSA9IGZhbHNlLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldDModGFyZ2V0LCBrZXksIHJlY2VpdmVyKSB7XG4gICAgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFjdGl2ZVwiKSB7XG4gICAgICByZXR1cm4gIWlzUmVhZG9ubHk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X2lzUmVhZG9ubHlcIikge1xuICAgICAgcmV0dXJuIGlzUmVhZG9ubHk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X3Jhd1wiICYmIHJlY2VpdmVyID09PSAoaXNSZWFkb25seSA/IHNoYWxsb3cgPyBzaGFsbG93UmVhZG9ubHlNYXAgOiByZWFkb25seU1hcCA6IHNoYWxsb3cgPyBzaGFsbG93UmVhY3RpdmVNYXAgOiByZWFjdGl2ZU1hcCkuZ2V0KHRhcmdldCkpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldElzQXJyYXkgPSBpc0FycmF5KHRhcmdldCk7XG4gICAgaWYgKCFpc1JlYWRvbmx5ICYmIHRhcmdldElzQXJyYXkgJiYgaGFzT3duKGFycmF5SW5zdHJ1bWVudGF0aW9ucywga2V5KSkge1xuICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGFycmF5SW5zdHJ1bWVudGF0aW9ucywga2V5LCByZWNlaXZlcik7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IFJlZmxlY3QuZ2V0KHRhcmdldCwga2V5LCByZWNlaXZlcik7XG4gICAgaWYgKGlzU3ltYm9sKGtleSkgPyBidWlsdEluU3ltYm9scy5oYXMoa2V5KSA6IGlzTm9uVHJhY2thYmxlS2V5cyhrZXkpKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBpZiAoIWlzUmVhZG9ubHkpIHtcbiAgICAgIHRyYWNrKHRhcmdldCwgXCJnZXRcIiwga2V5KTtcbiAgICB9XG4gICAgaWYgKHNoYWxsb3cpIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGlmIChpc1JlZihyZXMpKSB7XG4gICAgICBjb25zdCBzaG91bGRVbndyYXAgPSAhdGFyZ2V0SXNBcnJheSB8fCAhaXNJbnRlZ2VyS2V5KGtleSk7XG4gICAgICByZXR1cm4gc2hvdWxkVW53cmFwID8gcmVzLnZhbHVlIDogcmVzO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgcmV0dXJuIGlzUmVhZG9ubHkgPyByZWFkb25seShyZXMpIDogcmVhY3RpdmUyKHJlcyk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG59XG52YXIgc2V0MiA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTZXR0ZXIoKTtcbmZ1bmN0aW9uIGNyZWF0ZVNldHRlcihzaGFsbG93ID0gZmFsc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNldDModGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcikge1xuICAgIGxldCBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xuICAgIGlmICghc2hhbGxvdykge1xuICAgICAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSk7XG4gICAgICBvbGRWYWx1ZSA9IHRvUmF3KG9sZFZhbHVlKTtcbiAgICAgIGlmICghaXNBcnJheSh0YXJnZXQpICYmIGlzUmVmKG9sZFZhbHVlKSAmJiAhaXNSZWYodmFsdWUpKSB7XG4gICAgICAgIG9sZFZhbHVlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoYWRLZXkgPSBpc0FycmF5KHRhcmdldCkgJiYgaXNJbnRlZ2VyS2V5KGtleSkgPyBOdW1iZXIoa2V5KSA8IHRhcmdldC5sZW5ndGggOiBoYXNPd24odGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3Quc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICAgIGlmICh0YXJnZXQgPT09IHRvUmF3KHJlY2VpdmVyKSkge1xuICAgICAgaWYgKCFoYWRLZXkpIHtcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGhhZEtleSA9IGhhc093bih0YXJnZXQsIGtleSk7XG4gIGNvbnN0IG9sZFZhbHVlID0gdGFyZ2V0W2tleV07XG4gIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpO1xuICBpZiAocmVzdWx0ICYmIGhhZEtleSkge1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcImRlbGV0ZVwiLCBrZXksIHZvaWQgMCwgb2xkVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBoYXModGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5oYXModGFyZ2V0LCBrZXkpO1xuICBpZiAoIWlzU3ltYm9sKGtleSkgfHwgIWJ1aWx0SW5TeW1ib2xzLmhhcyhrZXkpKSB7XG4gICAgdHJhY2sodGFyZ2V0LCBcImhhc1wiLCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBvd25LZXlzKHRhcmdldCkge1xuICB0cmFjayh0YXJnZXQsIFwiaXRlcmF0ZVwiLCBpc0FycmF5KHRhcmdldCkgPyBcImxlbmd0aFwiIDogSVRFUkFURV9LRVkpO1xuICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XG59XG52YXIgbXV0YWJsZUhhbmRsZXJzID0ge1xuICBnZXQ6IGdldDIsXG4gIHNldDogc2V0MixcbiAgZGVsZXRlUHJvcGVydHksXG4gIGhhcyxcbiAgb3duS2V5c1xufTtcbnZhciByZWFkb25seUhhbmRsZXJzID0ge1xuICBnZXQ6IHJlYWRvbmx5R2V0LFxuICBzZXQodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgY29uc29sZS53YXJuKGBTZXQgb3BlcmF0aW9uIG9uIGtleSBcIiR7U3RyaW5nKGtleSl9XCIgZmFpbGVkOiB0YXJnZXQgaXMgcmVhZG9ubHkuYCwgdGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGNvbnNvbGUud2FybihgRGVsZXRlIG9wZXJhdGlvbiBvbiBrZXkgXCIke1N0cmluZyhrZXkpfVwiIGZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsIHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xudmFyIHRvUmVhY3RpdmUgPSAodmFsdWUpID0+IGlzT2JqZWN0KHZhbHVlKSA/IHJlYWN0aXZlMih2YWx1ZSkgOiB2YWx1ZTtcbnZhciB0b1JlYWRvbmx5ID0gKHZhbHVlKSA9PiBpc09iamVjdCh2YWx1ZSkgPyByZWFkb25seSh2YWx1ZSkgOiB2YWx1ZTtcbnZhciB0b1NoYWxsb3cgPSAodmFsdWUpID0+IHZhbHVlO1xudmFyIGdldFByb3RvID0gKHYpID0+IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2Yodik7XG5mdW5jdGlvbiBnZXQkMSh0YXJnZXQsIGtleSwgaXNSZWFkb25seSA9IGZhbHNlLCBpc1NoYWxsb3cgPSBmYWxzZSkge1xuICB0YXJnZXQgPSB0YXJnZXRbXG4gICAgXCJfX3ZfcmF3XCJcbiAgICAvKiBSQVcgKi9cbiAgXTtcbiAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgY29uc3QgcmF3S2V5ID0gdG9SYXcoa2V5KTtcbiAgaWYgKGtleSAhPT0gcmF3S2V5KSB7XG4gICAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcImdldFwiLCBrZXkpO1xuICB9XG4gICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJnZXRcIiwgcmF3S2V5KTtcbiAgY29uc3QgeyBoYXM6IGhhczIgfSA9IGdldFByb3RvKHJhd1RhcmdldCk7XG4gIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5ID8gdG9SZWFkb25seSA6IHRvUmVhY3RpdmU7XG4gIGlmIChoYXMyLmNhbGwocmF3VGFyZ2V0LCBrZXkpKSB7XG4gICAgcmV0dXJuIHdyYXAodGFyZ2V0LmdldChrZXkpKTtcbiAgfSBlbHNlIGlmIChoYXMyLmNhbGwocmF3VGFyZ2V0LCByYXdLZXkpKSB7XG4gICAgcmV0dXJuIHdyYXAodGFyZ2V0LmdldChyYXdLZXkpKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHJhd1RhcmdldCkge1xuICAgIHRhcmdldC5nZXQoa2V5KTtcbiAgfVxufVxuZnVuY3Rpb24gaGFzJDEoa2V5LCBpc1JlYWRvbmx5ID0gZmFsc2UpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdGhpc1tcbiAgICBcIl9fdl9yYXdcIlxuICAgIC8qIFJBVyAqL1xuICBdO1xuICBjb25zdCByYXdUYXJnZXQgPSB0b1Jhdyh0YXJnZXQpO1xuICBjb25zdCByYXdLZXkgPSB0b1JhdyhrZXkpO1xuICBpZiAoa2V5ICE9PSByYXdLZXkpIHtcbiAgICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiaGFzXCIsIGtleSk7XG4gIH1cbiAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcImhhc1wiLCByYXdLZXkpO1xuICByZXR1cm4ga2V5ID09PSByYXdLZXkgPyB0YXJnZXQuaGFzKGtleSkgOiB0YXJnZXQuaGFzKGtleSkgfHwgdGFyZ2V0LmhhcyhyYXdLZXkpO1xufVxuZnVuY3Rpb24gc2l6ZSh0YXJnZXQsIGlzUmVhZG9ubHkgPSBmYWxzZSkge1xuICB0YXJnZXQgPSB0YXJnZXRbXG4gICAgXCJfX3ZfcmF3XCJcbiAgICAvKiBSQVcgKi9cbiAgXTtcbiAgIWlzUmVhZG9ubHkgJiYgdHJhY2sodG9SYXcodGFyZ2V0KSwgXCJpdGVyYXRlXCIsIElURVJBVEVfS0VZKTtcbiAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgXCJzaXplXCIsIHRhcmdldCk7XG59XG5mdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSk7XG4gIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICBjb25zdCBwcm90byA9IGdldFByb3RvKHRhcmdldCk7XG4gIGNvbnN0IGhhZEtleSA9IHByb3RvLmhhcy5jYWxsKHRhcmdldCwgdmFsdWUpO1xuICBpZiAoIWhhZEtleSkge1xuICAgIHRhcmdldC5hZGQodmFsdWUpO1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcImFkZFwiLCB2YWx1ZSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gc2V0JDEoa2V5LCB2YWx1ZSkge1xuICB2YWx1ZSA9IHRvUmF3KHZhbHVlKTtcbiAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gIGNvbnN0IHsgaGFzOiBoYXMyLCBnZXQ6IGdldDMgfSA9IGdldFByb3RvKHRhcmdldCk7XG4gIGxldCBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICBpZiAoIWhhZEtleSkge1xuICAgIGtleSA9IHRvUmF3KGtleSk7XG4gICAgaGFkS2V5ID0gaGFzMi5jYWxsKHRhcmdldCwga2V5KTtcbiAgfSBlbHNlIGlmICh0cnVlKSB7XG4gICAgY2hlY2tJZGVudGl0eUtleXModGFyZ2V0LCBoYXMyLCBrZXkpO1xuICB9XG4gIGNvbnN0IG9sZFZhbHVlID0gZ2V0My5jYWxsKHRhcmdldCwga2V5KTtcbiAgdGFyZ2V0LnNldChrZXksIHZhbHVlKTtcbiAgaWYgKCFoYWRLZXkpIHtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJhZGRcIiwga2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGRlbGV0ZUVudHJ5KGtleSkge1xuICBjb25zdCB0YXJnZXQgPSB0b1Jhdyh0aGlzKTtcbiAgY29uc3QgeyBoYXM6IGhhczIsIGdldDogZ2V0MyB9ID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgbGV0IGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gIGlmICghaGFkS2V5KSB7XG4gICAga2V5ID0gdG9SYXcoa2V5KTtcbiAgICBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICB9IGVsc2UgaWYgKHRydWUpIHtcbiAgICBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhczIsIGtleSk7XG4gIH1cbiAgY29uc3Qgb2xkVmFsdWUgPSBnZXQzID8gZ2V0My5jYWxsKHRhcmdldCwga2V5KSA6IHZvaWQgMDtcbiAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0LmRlbGV0ZShrZXkpO1xuICBpZiAoaGFkS2V5KSB7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwiZGVsZXRlXCIsIGtleSwgdm9pZCAwLCBvbGRWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICBjb25zdCB0YXJnZXQgPSB0b1Jhdyh0aGlzKTtcbiAgY29uc3QgaGFkSXRlbXMgPSB0YXJnZXQuc2l6ZSAhPT0gMDtcbiAgY29uc3Qgb2xkVGFyZ2V0ID0gdHJ1ZSA/IGlzTWFwKHRhcmdldCkgPyBuZXcgTWFwKHRhcmdldCkgOiBuZXcgU2V0KHRhcmdldCkgOiB2b2lkIDA7XG4gIGNvbnN0IHJlc3VsdCA9IHRhcmdldC5jbGVhcigpO1xuICBpZiAoaGFkSXRlbXMpIHtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJjbGVhclwiLCB2b2lkIDAsIHZvaWQgMCwgb2xkVGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY3JlYXRlRm9yRWFjaChpc1JlYWRvbmx5LCBpc1NoYWxsb3cpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBjb25zdCBvYnNlcnZlZCA9IHRoaXM7XG4gICAgY29uc3QgdGFyZ2V0ID0gb2JzZXJ2ZWRbXG4gICAgICBcIl9fdl9yYXdcIlxuICAgICAgLyogUkFXICovXG4gICAgXTtcbiAgICBjb25zdCByYXdUYXJnZXQgPSB0b1Jhdyh0YXJnZXQpO1xuICAgIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5ID8gdG9SZWFkb25seSA6IHRvUmVhY3RpdmU7XG4gICAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcIml0ZXJhdGVcIiwgSVRFUkFURV9LRVkpO1xuICAgIHJldHVybiB0YXJnZXQuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgd3JhcCh2YWx1ZSksIHdyYXAoa2V5KSwgb2JzZXJ2ZWQpO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBpc1JlYWRvbmx5LCBpc1NoYWxsb3cpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzW1xuICAgICAgXCJfX3ZfcmF3XCJcbiAgICAgIC8qIFJBVyAqL1xuICAgIF07XG4gICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgICBjb25zdCB0YXJnZXRJc01hcCA9IGlzTWFwKHJhd1RhcmdldCk7XG4gICAgY29uc3QgaXNQYWlyID0gbWV0aG9kID09PSBcImVudHJpZXNcIiB8fCBtZXRob2QgPT09IFN5bWJvbC5pdGVyYXRvciAmJiB0YXJnZXRJc01hcDtcbiAgICBjb25zdCBpc0tleU9ubHkgPSBtZXRob2QgPT09IFwia2V5c1wiICYmIHRhcmdldElzTWFwO1xuICAgIGNvbnN0IGlubmVySXRlcmF0b3IgPSB0YXJnZXRbbWV0aG9kXSguLi5hcmdzKTtcbiAgICBjb25zdCB3cmFwID0gaXNTaGFsbG93ID8gdG9TaGFsbG93IDogaXNSZWFkb25seSA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICAgICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJpdGVyYXRlXCIsIGlzS2V5T25seSA/IE1BUF9LRVlfSVRFUkFURV9LRVkgOiBJVEVSQVRFX0tFWSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGl0ZXJhdG9yIHByb3RvY29sXG4gICAgICBuZXh0KCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBpbm5lckl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIGRvbmUgPyB7IHZhbHVlLCBkb25lIH0gOiB7XG4gICAgICAgICAgdmFsdWU6IGlzUGFpciA/IFt3cmFwKHZhbHVlWzBdKSwgd3JhcCh2YWx1ZVsxXSldIDogd3JhcCh2YWx1ZSksXG4gICAgICAgICAgZG9uZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIC8vIGl0ZXJhYmxlIHByb3RvY29sXG4gICAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlYWRvbmx5TWV0aG9kKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgY29uc3Qga2V5ID0gYXJnc1swXSA/IGBvbiBrZXkgXCIke2FyZ3NbMF19XCIgYCA6IGBgO1xuICAgICAgY29uc29sZS53YXJuKGAke2NhcGl0YWxpemUodHlwZSl9IG9wZXJhdGlvbiAke2tleX1mYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLCB0b1Jhdyh0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlID09PSBcImRlbGV0ZVwiID8gZmFsc2UgOiB0aGlzO1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlSW5zdHJ1bWVudGF0aW9ucygpIHtcbiAgY29uc3QgbXV0YWJsZUluc3RydW1lbnRhdGlvbnMyID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXkpO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZSh0aGlzKTtcbiAgICB9LFxuICAgIGhhczogaGFzJDEsXG4gICAgYWRkLFxuICAgIHNldDogc2V0JDEsXG4gICAgZGVsZXRlOiBkZWxldGVFbnRyeSxcbiAgICBjbGVhcixcbiAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKGZhbHNlLCBmYWxzZSlcbiAgfTtcbiAgY29uc3Qgc2hhbGxvd0luc3RydW1lbnRhdGlvbnMyID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXksIGZhbHNlLCB0cnVlKTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemUodGhpcyk7XG4gICAgfSxcbiAgICBoYXM6IGhhcyQxLFxuICAgIGFkZCxcbiAgICBzZXQ6IHNldCQxLFxuICAgIGRlbGV0ZTogZGVsZXRlRW50cnksXG4gICAgY2xlYXIsXG4gICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaChmYWxzZSwgdHJ1ZSlcbiAgfTtcbiAgY29uc3QgcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMiA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5LCB0cnVlKTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemUodGhpcywgdHJ1ZSk7XG4gICAgfSxcbiAgICBoYXMoa2V5KSB7XG4gICAgICByZXR1cm4gaGFzJDEuY2FsbCh0aGlzLCBrZXksIHRydWUpO1xuICAgIH0sXG4gICAgYWRkOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiYWRkXCJcbiAgICAgIC8qIEFERCAqL1xuICAgICksXG4gICAgc2V0OiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwic2V0XCJcbiAgICAgIC8qIFNFVCAqL1xuICAgICksXG4gICAgZGVsZXRlOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiZGVsZXRlXCJcbiAgICAgIC8qIERFTEVURSAqL1xuICAgICksXG4gICAgY2xlYXI6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJjbGVhclwiXG4gICAgICAvKiBDTEVBUiAqL1xuICAgICksXG4gICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaCh0cnVlLCBmYWxzZSlcbiAgfTtcbiAgY29uc3Qgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczIgPSB7XG4gICAgZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplKHRoaXMsIHRydWUpO1xuICAgIH0sXG4gICAgaGFzKGtleSkge1xuICAgICAgcmV0dXJuIGhhcyQxLmNhbGwodGhpcywga2V5LCB0cnVlKTtcbiAgICB9LFxuICAgIGFkZDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImFkZFwiXG4gICAgICAvKiBBREQgKi9cbiAgICApLFxuICAgIHNldDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcInNldFwiXG4gICAgICAvKiBTRVQgKi9cbiAgICApLFxuICAgIGRlbGV0ZTogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImRlbGV0ZVwiXG4gICAgICAvKiBERUxFVEUgKi9cbiAgICApLFxuICAgIGNsZWFyOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiY2xlYXJcIlxuICAgICAgLyogQ0xFQVIgKi9cbiAgICApLFxuICAgIGZvckVhY2g6IGNyZWF0ZUZvckVhY2godHJ1ZSwgdHJ1ZSlcbiAgfTtcbiAgY29uc3QgaXRlcmF0b3JNZXRob2RzID0gW1wia2V5c1wiLCBcInZhbHVlc1wiLCBcImVudHJpZXNcIiwgU3ltYm9sLml0ZXJhdG9yXTtcbiAgaXRlcmF0b3JNZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgIG11dGFibGVJbnN0cnVtZW50YXRpb25zMlttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBmYWxzZSwgZmFsc2UpO1xuICAgIHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczJbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgdHJ1ZSwgZmFsc2UpO1xuICAgIHNoYWxsb3dJbnN0cnVtZW50YXRpb25zMlttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBmYWxzZSwgdHJ1ZSk7XG4gICAgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczJbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgdHJ1ZSwgdHJ1ZSk7XG4gIH0pO1xuICByZXR1cm4gW1xuICAgIG11dGFibGVJbnN0cnVtZW50YXRpb25zMixcbiAgICByZWFkb25seUluc3RydW1lbnRhdGlvbnMyLFxuICAgIHNoYWxsb3dJbnN0cnVtZW50YXRpb25zMixcbiAgICBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMlxuICBdO1xufVxudmFyIFttdXRhYmxlSW5zdHJ1bWVudGF0aW9ucywgcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zLCBzaGFsbG93SW5zdHJ1bWVudGF0aW9ucywgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9uc10gPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlSW5zdHJ1bWVudGF0aW9ucygpO1xuZnVuY3Rpb24gY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKGlzUmVhZG9ubHksIHNoYWxsb3cpIHtcbiAgY29uc3QgaW5zdHJ1bWVudGF0aW9ucyA9IHNoYWxsb3cgPyBpc1JlYWRvbmx5ID8gc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9ucyA6IHNoYWxsb3dJbnN0cnVtZW50YXRpb25zIDogaXNSZWFkb25seSA/IHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9ucyA6IG11dGFibGVJbnN0cnVtZW50YXRpb25zO1xuICByZXR1cm4gKHRhcmdldCwga2V5LCByZWNlaXZlcikgPT4ge1xuICAgIGlmIChrZXkgPT09IFwiX192X2lzUmVhY3RpdmVcIikge1xuICAgICAgcmV0dXJuICFpc1JlYWRvbmx5O1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWRvbmx5XCIpIHtcbiAgICAgIHJldHVybiBpc1JlYWRvbmx5O1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9yYXdcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGhhc093bihpbnN0cnVtZW50YXRpb25zLCBrZXkpICYmIGtleSBpbiB0YXJnZXQgPyBpbnN0cnVtZW50YXRpb25zIDogdGFyZ2V0LCBrZXksIHJlY2VpdmVyKTtcbiAgfTtcbn1cbnZhciBtdXRhYmxlQ29sbGVjdGlvbkhhbmRsZXJzID0ge1xuICBnZXQ6IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIoZmFsc2UsIGZhbHNlKVxufTtcbnZhciByZWFkb25seUNvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgZ2V0OiAvKiBAX19QVVJFX18gKi8gY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKHRydWUsIGZhbHNlKVxufTtcbmZ1bmN0aW9uIGNoZWNrSWRlbnRpdHlLZXlzKHRhcmdldCwgaGFzMiwga2V5KSB7XG4gIGNvbnN0IHJhd0tleSA9IHRvUmF3KGtleSk7XG4gIGlmIChyYXdLZXkgIT09IGtleSAmJiBoYXMyLmNhbGwodGFyZ2V0LCByYXdLZXkpKSB7XG4gICAgY29uc3QgdHlwZSA9IHRvUmF3VHlwZSh0YXJnZXQpO1xuICAgIGNvbnNvbGUud2FybihgUmVhY3RpdmUgJHt0eXBlfSBjb250YWlucyBib3RoIHRoZSByYXcgYW5kIHJlYWN0aXZlIHZlcnNpb25zIG9mIHRoZSBzYW1lIG9iamVjdCR7dHlwZSA9PT0gYE1hcGAgPyBgIGFzIGtleXNgIDogYGB9LCB3aGljaCBjYW4gbGVhZCB0byBpbmNvbnNpc3RlbmNpZXMuIEF2b2lkIGRpZmZlcmVudGlhdGluZyBiZXR3ZWVuIHRoZSByYXcgYW5kIHJlYWN0aXZlIHZlcnNpb25zIG9mIGFuIG9iamVjdCBhbmQgb25seSB1c2UgdGhlIHJlYWN0aXZlIHZlcnNpb24gaWYgcG9zc2libGUuYCk7XG4gIH1cbn1cbnZhciByZWFjdGl2ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHNoYWxsb3dSZWFjdGl2ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHJlYWRvbmx5TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgc2hhbGxvd1JlYWRvbmx5TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiB0YXJnZXRUeXBlTWFwKHJhd1R5cGUpIHtcbiAgc3dpdGNoIChyYXdUeXBlKSB7XG4gICAgY2FzZSBcIk9iamVjdFwiOlxuICAgIGNhc2UgXCJBcnJheVwiOlxuICAgICAgcmV0dXJuIDE7XG4gICAgY2FzZSBcIk1hcFwiOlxuICAgIGNhc2UgXCJTZXRcIjpcbiAgICBjYXNlIFwiV2Vha01hcFwiOlxuICAgIGNhc2UgXCJXZWFrU2V0XCI6XG4gICAgICByZXR1cm4gMjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDA7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFRhcmdldFR5cGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlW1xuICAgIFwiX192X3NraXBcIlxuICAgIC8qIFNLSVAgKi9cbiAgXSB8fCAhT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgPyAwIDogdGFyZ2V0VHlwZU1hcCh0b1Jhd1R5cGUodmFsdWUpKTtcbn1cbmZ1bmN0aW9uIHJlYWN0aXZlMih0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCAmJiB0YXJnZXRbXG4gICAgXCJfX3ZfaXNSZWFkb25seVwiXG4gICAgLyogSVNfUkVBRE9OTFkgKi9cbiAgXSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KHRhcmdldCwgZmFsc2UsIG11dGFibGVIYW5kbGVycywgbXV0YWJsZUNvbGxlY3Rpb25IYW5kbGVycywgcmVhY3RpdmVNYXApO1xufVxuZnVuY3Rpb24gcmVhZG9ubHkodGFyZ2V0KSB7XG4gIHJldHVybiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIHRydWUsIHJlYWRvbmx5SGFuZGxlcnMsIHJlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzLCByZWFkb25seU1hcCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIGlzUmVhZG9ubHksIGJhc2VIYW5kbGVycywgY29sbGVjdGlvbkhhbmRsZXJzLCBwcm94eU1hcCkge1xuICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgY29uc29sZS53YXJuKGB2YWx1ZSBjYW5ub3QgYmUgbWFkZSByZWFjdGl2ZTogJHtTdHJpbmcodGFyZ2V0KX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBpZiAodGFyZ2V0W1xuICAgIFwiX192X3Jhd1wiXG4gICAgLyogUkFXICovXG4gIF0gJiYgIShpc1JlYWRvbmx5ICYmIHRhcmdldFtcbiAgICBcIl9fdl9pc1JlYWN0aXZlXCJcbiAgICAvKiBJU19SRUFDVElWRSAqL1xuICBdKSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgY29uc3QgZXhpc3RpbmdQcm94eSA9IHByb3h5TWFwLmdldCh0YXJnZXQpO1xuICBpZiAoZXhpc3RpbmdQcm94eSkge1xuICAgIHJldHVybiBleGlzdGluZ1Byb3h5O1xuICB9XG4gIGNvbnN0IHRhcmdldFR5cGUgPSBnZXRUYXJnZXRUeXBlKHRhcmdldCk7XG4gIGlmICh0YXJnZXRUeXBlID09PSAwKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBjb25zdCBwcm94eSA9IG5ldyBQcm94eSh0YXJnZXQsIHRhcmdldFR5cGUgPT09IDIgPyBjb2xsZWN0aW9uSGFuZGxlcnMgOiBiYXNlSGFuZGxlcnMpO1xuICBwcm94eU1hcC5zZXQodGFyZ2V0LCBwcm94eSk7XG4gIHJldHVybiBwcm94eTtcbn1cbmZ1bmN0aW9uIHRvUmF3KG9ic2VydmVkKSB7XG4gIHJldHVybiBvYnNlcnZlZCAmJiB0b1JhdyhvYnNlcnZlZFtcbiAgICBcIl9fdl9yYXdcIlxuICAgIC8qIFJBVyAqL1xuICBdKSB8fCBvYnNlcnZlZDtcbn1cbmZ1bmN0aW9uIGlzUmVmKHIpIHtcbiAgcmV0dXJuIEJvb2xlYW4ociAmJiByLl9fdl9pc1JlZiA9PT0gdHJ1ZSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJG5leHRUaWNrLmpzXG5tYWdpYyhcIm5leHRUaWNrXCIsICgpID0+IG5leHRUaWNrKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kZGlzcGF0Y2guanNcbm1hZ2ljKFwiZGlzcGF0Y2hcIiwgKGVsKSA9PiBkaXNwYXRjaC5iaW5kKGRpc3BhdGNoLCBlbCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyR3YXRjaC5qc1xubWFnaWMoXCJ3YXRjaFwiLCAoZWwsIHsgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIsIGNsZWFudXA6IGNsZWFudXAyIH0pID0+IChrZXksIGNhbGxiYWNrKSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyMihrZXkpO1xuICBsZXQgZ2V0dGVyID0gKCkgPT4ge1xuICAgIGxldCB2YWx1ZTtcbiAgICBldmFsdWF0ZTIoKGkpID0+IHZhbHVlID0gaSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICBsZXQgdW53YXRjaCA9IHdhdGNoKGdldHRlciwgY2FsbGJhY2spO1xuICBjbGVhbnVwMih1bndhdGNoKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRzdG9yZS5qc1xubWFnaWMoXCJzdG9yZVwiLCBnZXRTdG9yZXMpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRkYXRhLmpzXG5tYWdpYyhcImRhdGFcIiwgKGVsKSA9PiBzY29wZShlbCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRyb290LmpzXG5tYWdpYyhcInJvb3RcIiwgKGVsKSA9PiBjbG9zZXN0Um9vdChlbCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRyZWZzLmpzXG5tYWdpYyhcInJlZnNcIiwgKGVsKSA9PiB7XG4gIGlmIChlbC5feF9yZWZzX3Byb3h5KVxuICAgIHJldHVybiBlbC5feF9yZWZzX3Byb3h5O1xuICBlbC5feF9yZWZzX3Byb3h5ID0gbWVyZ2VQcm94aWVzKGdldEFycmF5T2ZSZWZPYmplY3QoZWwpKTtcbiAgcmV0dXJuIGVsLl94X3JlZnNfcHJveHk7XG59KTtcbmZ1bmN0aW9uIGdldEFycmF5T2ZSZWZPYmplY3QoZWwpIHtcbiAgbGV0IHJlZk9iamVjdHMgPSBbXTtcbiAgZmluZENsb3Nlc3QoZWwsIChpKSA9PiB7XG4gICAgaWYgKGkuX3hfcmVmcylcbiAgICAgIHJlZk9iamVjdHMucHVzaChpLl94X3JlZnMpO1xuICB9KTtcbiAgcmV0dXJuIHJlZk9iamVjdHM7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9pZHMuanNcbnZhciBnbG9iYWxJZE1lbW8gPSB7fTtcbmZ1bmN0aW9uIGZpbmRBbmRJbmNyZW1lbnRJZChuYW1lKSB7XG4gIGlmICghZ2xvYmFsSWRNZW1vW25hbWVdKVxuICAgIGdsb2JhbElkTWVtb1tuYW1lXSA9IDA7XG4gIHJldHVybiArK2dsb2JhbElkTWVtb1tuYW1lXTtcbn1cbmZ1bmN0aW9uIGNsb3Nlc3RJZFJvb3QoZWwsIG5hbWUpIHtcbiAgcmV0dXJuIGZpbmRDbG9zZXN0KGVsLCAoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50Ll94X2lkcyAmJiBlbGVtZW50Ll94X2lkc1tuYW1lXSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNldElkUm9vdChlbCwgbmFtZSkge1xuICBpZiAoIWVsLl94X2lkcylcbiAgICBlbC5feF9pZHMgPSB7fTtcbiAgaWYgKCFlbC5feF9pZHNbbmFtZV0pXG4gICAgZWwuX3hfaWRzW25hbWVdID0gZmluZEFuZEluY3JlbWVudElkKG5hbWUpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRpZC5qc1xubWFnaWMoXCJpZFwiLCAoZWwsIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4gKG5hbWUsIGtleSA9IG51bGwpID0+IHtcbiAgbGV0IGNhY2hlS2V5ID0gYCR7bmFtZX0ke2tleSA/IGAtJHtrZXl9YCA6IFwiXCJ9YDtcbiAgcmV0dXJuIGNhY2hlSWRCeU5hbWVPbkVsZW1lbnQoZWwsIGNhY2hlS2V5LCBjbGVhbnVwMiwgKCkgPT4ge1xuICAgIGxldCByb290ID0gY2xvc2VzdElkUm9vdChlbCwgbmFtZSk7XG4gICAgbGV0IGlkID0gcm9vdCA/IHJvb3QuX3hfaWRzW25hbWVdIDogZmluZEFuZEluY3JlbWVudElkKG5hbWUpO1xuICAgIHJldHVybiBrZXkgPyBgJHtuYW1lfS0ke2lkfS0ke2tleX1gIDogYCR7bmFtZX0tJHtpZH1gO1xuICB9KTtcbn0pO1xuaW50ZXJjZXB0Q2xvbmUoKGZyb20sIHRvKSA9PiB7XG4gIGlmIChmcm9tLl94X2lkKSB7XG4gICAgdG8uX3hfaWQgPSBmcm9tLl94X2lkO1xuICB9XG59KTtcbmZ1bmN0aW9uIGNhY2hlSWRCeU5hbWVPbkVsZW1lbnQoZWwsIGNhY2hlS2V5LCBjbGVhbnVwMiwgY2FsbGJhY2spIHtcbiAgaWYgKCFlbC5feF9pZClcbiAgICBlbC5feF9pZCA9IHt9O1xuICBpZiAoZWwuX3hfaWRbY2FjaGVLZXldKVxuICAgIHJldHVybiBlbC5feF9pZFtjYWNoZUtleV07XG4gIGxldCBvdXRwdXQgPSBjYWxsYmFjaygpO1xuICBlbC5feF9pZFtjYWNoZUtleV0gPSBvdXRwdXQ7XG4gIGNsZWFudXAyKCgpID0+IHtcbiAgICBkZWxldGUgZWwuX3hfaWRbY2FjaGVLZXldO1xuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kZWwuanNcbm1hZ2ljKFwiZWxcIiwgKGVsKSA9PiBlbCk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvaW5kZXguanNcbndhcm5NaXNzaW5nUGx1Z2luTWFnaWMoXCJGb2N1c1wiLCBcImZvY3VzXCIsIFwiZm9jdXNcIik7XG53YXJuTWlzc2luZ1BsdWdpbk1hZ2ljKFwiUGVyc2lzdFwiLCBcInBlcnNpc3RcIiwgXCJwZXJzaXN0XCIpO1xuZnVuY3Rpb24gd2Fybk1pc3NpbmdQbHVnaW5NYWdpYyhuYW1lLCBtYWdpY05hbWUsIHNsdWcpIHtcbiAgbWFnaWMobWFnaWNOYW1lLCAoZWwpID0+IHdhcm4oYFlvdSBjYW4ndCB1c2UgWyQke21hZ2ljTmFtZX1dIHdpdGhvdXQgZmlyc3QgaW5zdGFsbGluZyB0aGUgXCIke25hbWV9XCIgcGx1Z2luIGhlcmU6IGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvJHtzbHVnfWAsIGVsKSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtbW9kZWxhYmxlLmpzXG5kaXJlY3RpdmUoXCJtb2RlbGFibGVcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIyLCBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGxldCBmdW5jID0gZXZhbHVhdGVMYXRlcjIoZXhwcmVzc2lvbik7XG4gIGxldCBpbm5lckdldCA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGZ1bmMoKGkpID0+IHJlc3VsdCA9IGkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGxldCBldmFsdWF0ZUlubmVyU2V0ID0gZXZhbHVhdGVMYXRlcjIoYCR7ZXhwcmVzc2lvbn0gPSBfX3BsYWNlaG9sZGVyYCk7XG4gIGxldCBpbm5lclNldCA9ICh2YWwpID0+IGV2YWx1YXRlSW5uZXJTZXQoKCkgPT4ge1xuICB9LCB7IHNjb3BlOiB7IFwiX19wbGFjZWhvbGRlclwiOiB2YWwgfSB9KTtcbiAgbGV0IGluaXRpYWxWYWx1ZSA9IGlubmVyR2V0KCk7XG4gIGlubmVyU2V0KGluaXRpYWxWYWx1ZSk7XG4gIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICBpZiAoIWVsLl94X21vZGVsKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzW1wiZGVmYXVsdFwiXSgpO1xuICAgIGxldCBvdXRlckdldCA9IGVsLl94X21vZGVsLmdldDtcbiAgICBsZXQgb3V0ZXJTZXQgPSBlbC5feF9tb2RlbC5zZXQ7XG4gICAgbGV0IHJlbGVhc2VFbnRhbmdsZW1lbnQgPSBlbnRhbmdsZShcbiAgICAgIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBvdXRlckdldCgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICBvdXRlclNldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gaW5uZXJHZXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgaW5uZXJTZXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBjbGVhbnVwMihyZWxlYXNlRW50YW5nbGVtZW50KTtcbiAgfSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC10ZWxlcG9ydC5qc1xuZGlyZWN0aXZlKFwidGVsZXBvcnRcIiwgKGVsLCB7IG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJ0ZW1wbGF0ZVwiKVxuICAgIHdhcm4oXCJ4LXRlbGVwb3J0IGNhbiBvbmx5IGJlIHVzZWQgb24gYSA8dGVtcGxhdGU+IHRhZ1wiLCBlbCk7XG4gIGxldCB0YXJnZXQgPSBnZXRUYXJnZXQoZXhwcmVzc2lvbik7XG4gIGxldCBjbG9uZTIgPSBlbC5jb250ZW50LmNsb25lTm9kZSh0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgZWwuX3hfdGVsZXBvcnQgPSBjbG9uZTI7XG4gIGNsb25lMi5feF90ZWxlcG9ydEJhY2sgPSBlbDtcbiAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWxlcG9ydC10ZW1wbGF0ZVwiLCB0cnVlKTtcbiAgY2xvbmUyLnNldEF0dHJpYnV0ZShcImRhdGEtdGVsZXBvcnQtdGFyZ2V0XCIsIHRydWUpO1xuICBpZiAoZWwuX3hfZm9yd2FyZEV2ZW50cykge1xuICAgIGVsLl94X2ZvcndhcmRFdmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICBjbG9uZTIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQobmV3IGUuY29uc3RydWN0b3IoZS50eXBlLCBlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhZGRTY29wZVRvTm9kZShjbG9uZTIsIHt9LCBlbCk7XG4gIGxldCBwbGFjZUluRG9tID0gKGNsb25lMywgdGFyZ2V0MiwgbW9kaWZpZXJzMikgPT4ge1xuICAgIGlmIChtb2RpZmllcnMyLmluY2x1ZGVzKFwicHJlcGVuZFwiKSkge1xuICAgICAgdGFyZ2V0Mi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZTMsIHRhcmdldDIpO1xuICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzMi5pbmNsdWRlcyhcImFwcGVuZFwiKSkge1xuICAgICAgdGFyZ2V0Mi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZTMsIHRhcmdldDIubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQyLmFwcGVuZENoaWxkKGNsb25lMyk7XG4gICAgfVxuICB9O1xuICBtdXRhdGVEb20oKCkgPT4ge1xuICAgIHBsYWNlSW5Eb20oY2xvbmUyLCB0YXJnZXQsIG1vZGlmaWVycyk7XG4gICAgc2tpcER1cmluZ0Nsb25lKCgpID0+IHtcbiAgICAgIGluaXRUcmVlKGNsb25lMik7XG4gICAgfSkoKTtcbiAgfSk7XG4gIGVsLl94X3RlbGVwb3J0UHV0QmFjayA9ICgpID0+IHtcbiAgICBsZXQgdGFyZ2V0MiA9IGdldFRhcmdldChleHByZXNzaW9uKTtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgcGxhY2VJbkRvbShlbC5feF90ZWxlcG9ydCwgdGFyZ2V0MiwgbW9kaWZpZXJzKTtcbiAgICB9KTtcbiAgfTtcbiAgY2xlYW51cDIoXG4gICAgKCkgPT4gbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGNsb25lMi5yZW1vdmUoKTtcbiAgICAgIGRlc3Ryb3lUcmVlKGNsb25lMik7XG4gICAgfSlcbiAgKTtcbn0pO1xudmFyIHRlbGVwb3J0Q29udGFpbmVyRHVyaW5nQ2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KGV4cHJlc3Npb24pIHtcbiAgbGV0IHRhcmdldCA9IHNraXBEdXJpbmdDbG9uZSgoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZXhwcmVzc2lvbik7XG4gIH0sICgpID0+IHtcbiAgICByZXR1cm4gdGVsZXBvcnRDb250YWluZXJEdXJpbmdDbG9uZTtcbiAgfSkoKTtcbiAgaWYgKCF0YXJnZXQpXG4gICAgd2FybihgQ2Fubm90IGZpbmQgeC10ZWxlcG9ydCBlbGVtZW50IGZvciBzZWxlY3RvcjogXCIke2V4cHJlc3Npb259XCJgKTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZ25vcmUuanNcbnZhciBoYW5kbGVyID0gKCkgPT4ge1xufTtcbmhhbmRsZXIuaW5saW5lID0gKGVsLCB7IG1vZGlmaWVycyB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSA/IGVsLl94X2lnbm9yZVNlbGYgPSB0cnVlIDogZWwuX3hfaWdub3JlID0gdHJ1ZTtcbiAgY2xlYW51cDIoKCkgPT4ge1xuICAgIG1vZGlmaWVycy5pbmNsdWRlcyhcInNlbGZcIikgPyBkZWxldGUgZWwuX3hfaWdub3JlU2VsZiA6IGRlbGV0ZSBlbC5feF9pZ25vcmU7XG4gIH0pO1xufTtcbmRpcmVjdGl2ZShcImlnbm9yZVwiLCBoYW5kbGVyKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1lZmZlY3QuanNcbmRpcmVjdGl2ZShcImVmZmVjdFwiLCBza2lwRHVyaW5nQ2xvbmUoKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMgfSkgPT4ge1xuICBlZmZlY3QzKGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pKTtcbn0pKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL29uLmpzXG5mdW5jdGlvbiBvbihlbCwgZXZlbnQsIG1vZGlmaWVycywgY2FsbGJhY2spIHtcbiAgbGV0IGxpc3RlbmVyVGFyZ2V0ID0gZWw7XG4gIGxldCBoYW5kbGVyNCA9IChlKSA9PiBjYWxsYmFjayhlKTtcbiAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgbGV0IHdyYXBIYW5kbGVyID0gKGNhbGxiYWNrMiwgd3JhcHBlcikgPT4gKGUpID0+IHdyYXBwZXIoY2FsbGJhY2syLCBlKTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImRvdFwiKSlcbiAgICBldmVudCA9IGRvdFN5bnRheChldmVudCk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJjYW1lbFwiKSlcbiAgICBldmVudCA9IGNhbWVsQ2FzZTIoZXZlbnQpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwicGFzc2l2ZVwiKSlcbiAgICBvcHRpb25zLnBhc3NpdmUgPSB0cnVlO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiY2FwdHVyZVwiKSlcbiAgICBvcHRpb25zLmNhcHR1cmUgPSB0cnVlO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwid2luZG93XCIpKVxuICAgIGxpc3RlbmVyVGFyZ2V0ID0gd2luZG93O1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZG9jdW1lbnRcIikpXG4gICAgbGlzdGVuZXJUYXJnZXQgPSBkb2N1bWVudDtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImRlYm91bmNlXCIpKSB7XG4gICAgbGV0IG5leHRNb2RpZmllciA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihcImRlYm91bmNlXCIpICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIjtcbiAgICBsZXQgd2FpdCA9IGlzTnVtZXJpYyhuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgPyBOdW1iZXIobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pIDogMjUwO1xuICAgIGhhbmRsZXI0ID0gZGVib3VuY2UoaGFuZGxlcjQsIHdhaXQpO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ0aHJvdHRsZVwiKSkge1xuICAgIGxldCBuZXh0TW9kaWZpZXIgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2YoXCJ0aHJvdHRsZVwiKSArIDFdIHx8IFwiaW52YWxpZC13YWl0XCI7XG4gICAgbGV0IHdhaXQgPSBpc051bWVyaWMobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pID8gTnVtYmVyKG5leHRNb2RpZmllci5zcGxpdChcIm1zXCIpWzBdKSA6IDI1MDtcbiAgICBoYW5kbGVyNCA9IHRocm90dGxlKGhhbmRsZXI0LCB3YWl0KTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwicHJldmVudFwiKSlcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInN0b3BcIikpXG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBuZXh0KGUpO1xuICAgIH0pO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwib25jZVwiKSkge1xuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBuZXh0KGUpO1xuICAgICAgbGlzdGVuZXJUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcjQsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJhd2F5XCIpIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dHNpZGVcIikpIHtcbiAgICBsaXN0ZW5lclRhcmdldCA9IGRvY3VtZW50O1xuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBpZiAoZWwuY29udGFpbnMoZS50YXJnZXQpKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAoZS50YXJnZXQuaXNDb25uZWN0ZWQgPT09IGZhbHNlKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAoZWwub2Zmc2V0V2lkdGggPCAxICYmIGVsLm9mZnNldEhlaWdodCA8IDEpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChlbC5feF9pc1Nob3duID09PSBmYWxzZSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSlcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS50YXJnZXQgPT09IGVsICYmIG5leHQoZSk7XG4gICAgfSk7XG4gIGlmIChpc0tleUV2ZW50KGV2ZW50KSB8fCBpc0NsaWNrRXZlbnQoZXZlbnQpKSB7XG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIGlmIChpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgfVxuICBsaXN0ZW5lclRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyNCwgb3B0aW9ucyk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGlzdGVuZXJUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcjQsIG9wdGlvbnMpO1xuICB9O1xufVxuZnVuY3Rpb24gZG90U3ludGF4KHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QucmVwbGFjZSgvLS9nLCBcIi5cIik7XG59XG5mdW5jdGlvbiBjYW1lbENhc2UyKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKFxcdykvZywgKG1hdGNoLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufVxuZnVuY3Rpb24gaXNOdW1lcmljKHN1YmplY3QpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KHN1YmplY3QpICYmICFpc05hTihzdWJqZWN0KTtcbn1cbmZ1bmN0aW9uIGtlYmFiQ2FzZTIoc3ViamVjdCkge1xuICBpZiAoW1wiIFwiLCBcIl9cIl0uaW5jbHVkZXMoXG4gICAgc3ViamVjdFxuICApKVxuICAgIHJldHVybiBzdWJqZWN0O1xuICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnJlcGxhY2UoL1tfXFxzXS8sIFwiLVwiKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gaXNLZXlFdmVudChldmVudCkge1xuICByZXR1cm4gW1wia2V5ZG93blwiLCBcImtleXVwXCJdLmluY2x1ZGVzKGV2ZW50KTtcbn1cbmZ1bmN0aW9uIGlzQ2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gW1wiY29udGV4dG1lbnVcIiwgXCJjbGlja1wiLCBcIm1vdXNlXCJdLnNvbWUoKGkpID0+IGV2ZW50LmluY2x1ZGVzKGkpKTtcbn1cbmZ1bmN0aW9uIGlzTGlzdGVuaW5nRm9yQVNwZWNpZmljS2V5VGhhdEhhc250QmVlblByZXNzZWQoZSwgbW9kaWZpZXJzKSB7XG4gIGxldCBrZXlNb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKChpKSA9PiB7XG4gICAgcmV0dXJuICFbXCJ3aW5kb3dcIiwgXCJkb2N1bWVudFwiLCBcInByZXZlbnRcIiwgXCJzdG9wXCIsIFwib25jZVwiLCBcImNhcHR1cmVcIiwgXCJzZWxmXCIsIFwiYXdheVwiLCBcIm91dHNpZGVcIiwgXCJwYXNzaXZlXCJdLmluY2x1ZGVzKGkpO1xuICB9KTtcbiAgaWYgKGtleU1vZGlmaWVycy5pbmNsdWRlcyhcImRlYm91bmNlXCIpKSB7XG4gICAgbGV0IGRlYm91bmNlSW5kZXggPSBrZXlNb2RpZmllcnMuaW5kZXhPZihcImRlYm91bmNlXCIpO1xuICAgIGtleU1vZGlmaWVycy5zcGxpY2UoZGVib3VuY2VJbmRleCwgaXNOdW1lcmljKChrZXlNb2RpZmllcnNbZGVib3VuY2VJbmRleCArIDFdIHx8IFwiaW52YWxpZC13YWl0XCIpLnNwbGl0KFwibXNcIilbMF0pID8gMiA6IDEpO1xuICB9XG4gIGlmIChrZXlNb2RpZmllcnMuaW5jbHVkZXMoXCJ0aHJvdHRsZVwiKSkge1xuICAgIGxldCBkZWJvdW5jZUluZGV4ID0ga2V5TW9kaWZpZXJzLmluZGV4T2YoXCJ0aHJvdHRsZVwiKTtcbiAgICBrZXlNb2RpZmllcnMuc3BsaWNlKGRlYm91bmNlSW5kZXgsIGlzTnVtZXJpYygoa2V5TW9kaWZpZXJzW2RlYm91bmNlSW5kZXggKyAxXSB8fCBcImludmFsaWQtd2FpdFwiKS5zcGxpdChcIm1zXCIpWzBdKSA/IDIgOiAxKTtcbiAgfVxuICBpZiAoa2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGlmIChrZXlNb2RpZmllcnMubGVuZ3RoID09PSAxICYmIGtleVRvTW9kaWZpZXJzKGUua2V5KS5pbmNsdWRlcyhrZXlNb2RpZmllcnNbMF0pKVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc3lzdGVtS2V5TW9kaWZpZXJzID0gW1wiY3RybFwiLCBcInNoaWZ0XCIsIFwiYWx0XCIsIFwibWV0YVwiLCBcImNtZFwiLCBcInN1cGVyXCJdO1xuICBjb25zdCBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycyA9IHN5c3RlbUtleU1vZGlmaWVycy5maWx0ZXIoKG1vZGlmaWVyKSA9PiBrZXlNb2RpZmllcnMuaW5jbHVkZXMobW9kaWZpZXIpKTtcbiAga2V5TW9kaWZpZXJzID0ga2V5TW9kaWZpZXJzLmZpbHRlcigoaSkgPT4gIXNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmluY2x1ZGVzKGkpKTtcbiAgaWYgKHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBhY3RpdmVseVByZXNzZWRLZXlNb2RpZmllcnMgPSBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5maWx0ZXIoKG1vZGlmaWVyKSA9PiB7XG4gICAgICBpZiAobW9kaWZpZXIgPT09IFwiY21kXCIgfHwgbW9kaWZpZXIgPT09IFwic3VwZXJcIilcbiAgICAgICAgbW9kaWZpZXIgPSBcIm1ldGFcIjtcbiAgICAgIHJldHVybiBlW2Ake21vZGlmaWVyfUtleWBdO1xuICAgIH0pO1xuICAgIGlmIChhY3RpdmVseVByZXNzZWRLZXlNb2RpZmllcnMubGVuZ3RoID09PSBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5sZW5ndGgpIHtcbiAgICAgIGlmIChpc0NsaWNrRXZlbnQoZS50eXBlKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGtleVRvTW9kaWZpZXJzKGUua2V5KS5pbmNsdWRlcyhrZXlNb2RpZmllcnNbMF0pKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24ga2V5VG9Nb2RpZmllcnMoa2V5KSB7XG4gIGlmICgha2V5KVxuICAgIHJldHVybiBbXTtcbiAga2V5ID0ga2ViYWJDYXNlMihrZXkpO1xuICBsZXQgbW9kaWZpZXJUb0tleU1hcCA9IHtcbiAgICBcImN0cmxcIjogXCJjb250cm9sXCIsXG4gICAgXCJzbGFzaFwiOiBcIi9cIixcbiAgICBcInNwYWNlXCI6IFwiIFwiLFxuICAgIFwic3BhY2ViYXJcIjogXCIgXCIsXG4gICAgXCJjbWRcIjogXCJtZXRhXCIsXG4gICAgXCJlc2NcIjogXCJlc2NhcGVcIixcbiAgICBcInVwXCI6IFwiYXJyb3ctdXBcIixcbiAgICBcImRvd25cIjogXCJhcnJvdy1kb3duXCIsXG4gICAgXCJsZWZ0XCI6IFwiYXJyb3ctbGVmdFwiLFxuICAgIFwicmlnaHRcIjogXCJhcnJvdy1yaWdodFwiLFxuICAgIFwicGVyaW9kXCI6IFwiLlwiLFxuICAgIFwiY29tbWFcIjogXCIsXCIsXG4gICAgXCJlcXVhbFwiOiBcIj1cIixcbiAgICBcIm1pbnVzXCI6IFwiLVwiLFxuICAgIFwidW5kZXJzY29yZVwiOiBcIl9cIlxuICB9O1xuICBtb2RpZmllclRvS2V5TWFwW2tleV0gPSBrZXk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhtb2RpZmllclRvS2V5TWFwKS5tYXAoKG1vZGlmaWVyKSA9PiB7XG4gICAgaWYgKG1vZGlmaWVyVG9LZXlNYXBbbW9kaWZpZXJdID09PSBrZXkpXG4gICAgICByZXR1cm4gbW9kaWZpZXI7XG4gIH0pLmZpbHRlcigobW9kaWZpZXIpID0+IG1vZGlmaWVyKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1tb2RlbC5qc1xuZGlyZWN0aXZlKFwibW9kZWxcIiwgKGVsLCB7IG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgc2NvcGVUYXJnZXQgPSBlbDtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInBhcmVudFwiKSkge1xuICAgIHNjb3BlVGFyZ2V0ID0gZWwucGFyZW50Tm9kZTtcbiAgfVxuICBsZXQgZXZhbHVhdGVHZXQgPSBldmFsdWF0ZUxhdGVyKHNjb3BlVGFyZ2V0LCBleHByZXNzaW9uKTtcbiAgbGV0IGV2YWx1YXRlU2V0O1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICBldmFsdWF0ZVNldCA9IGV2YWx1YXRlTGF0ZXIoc2NvcGVUYXJnZXQsIGAke2V4cHJlc3Npb259ID0gX19wbGFjZWhvbGRlcmApO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGV4cHJlc3Npb24oKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGV2YWx1YXRlU2V0ID0gZXZhbHVhdGVMYXRlcihzY29wZVRhcmdldCwgYCR7ZXhwcmVzc2lvbigpfSA9IF9fcGxhY2Vob2xkZXJgKTtcbiAgfSBlbHNlIHtcbiAgICBldmFsdWF0ZVNldCA9ICgpID0+IHtcbiAgICB9O1xuICB9XG4gIGxldCBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGV2YWx1YXRlR2V0KCh2YWx1ZSkgPT4gcmVzdWx0ID0gdmFsdWUpO1xuICAgIHJldHVybiBpc0dldHRlclNldHRlcihyZXN1bHQpID8gcmVzdWx0LmdldCgpIDogcmVzdWx0O1xuICB9O1xuICBsZXQgc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGV2YWx1YXRlR2V0KCh2YWx1ZTIpID0+IHJlc3VsdCA9IHZhbHVlMik7XG4gICAgaWYgKGlzR2V0dGVyU2V0dGVyKHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdC5zZXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmFsdWF0ZVNldCgoKSA9PiB7XG4gICAgICB9LCB7XG4gICAgICAgIHNjb3BlOiB7IFwiX19wbGFjZWhvbGRlclwiOiB2YWx1ZSB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBlbC50eXBlID09PSBcInJhZGlvXCIpIHtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoXCJuYW1lXCIpKVxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGV4cHJlc3Npb24pO1xuICAgIH0pO1xuICB9XG4gIHZhciBldmVudCA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiB8fCBbXCJjaGVja2JveFwiLCBcInJhZGlvXCJdLmluY2x1ZGVzKGVsLnR5cGUpIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcImxhenlcIikgPyBcImNoYW5nZVwiIDogXCJpbnB1dFwiO1xuICBsZXQgcmVtb3ZlTGlzdGVuZXIgPSBpc0Nsb25pbmcgPyAoKSA9PiB7XG4gIH0gOiBvbihlbCwgZXZlbnQsIG1vZGlmaWVycywgKGUpID0+IHtcbiAgICBzZXRWYWx1ZShnZXRJbnB1dFZhbHVlKGVsLCBtb2RpZmllcnMsIGUsIGdldFZhbHVlKCkpKTtcbiAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJmaWxsXCIpKSB7XG4gICAgaWYgKFt2b2lkIDAsIG51bGwsIFwiXCJdLmluY2x1ZGVzKGdldFZhbHVlKCkpIHx8IGlzQ2hlY2tib3goZWwpICYmIEFycmF5LmlzQXJyYXkoZ2V0VmFsdWUoKSkgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiICYmIGVsLm11bHRpcGxlKSB7XG4gICAgICBzZXRWYWx1ZShcbiAgICAgICAgZ2V0SW5wdXRWYWx1ZShlbCwgbW9kaWZpZXJzLCB7IHRhcmdldDogZWwgfSwgZ2V0VmFsdWUoKSlcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGlmICghZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnMpXG4gICAgZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnMgPSB7fTtcbiAgZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnNbXCJkZWZhdWx0XCJdID0gcmVtb3ZlTGlzdGVuZXI7XG4gIGNsZWFudXAyKCgpID0+IGVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzW1wiZGVmYXVsdFwiXSgpKTtcbiAgaWYgKGVsLmZvcm0pIHtcbiAgICBsZXQgcmVtb3ZlUmVzZXRMaXN0ZW5lciA9IG9uKGVsLmZvcm0sIFwicmVzZXRcIiwgW10sIChlKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiBlbC5feF9tb2RlbCAmJiBlbC5feF9tb2RlbC5zZXQoZ2V0SW5wdXRWYWx1ZShlbCwgbW9kaWZpZXJzLCB7IHRhcmdldDogZWwgfSwgZ2V0VmFsdWUoKSkpKTtcbiAgICB9KTtcbiAgICBjbGVhbnVwMigoKSA9PiByZW1vdmVSZXNldExpc3RlbmVyKCkpO1xuICB9XG4gIGVsLl94X21vZGVsID0ge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBnZXRWYWx1ZSgpO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xuICBlbC5feF9mb3JjZU1vZGVsVXBkYXRlID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDAgJiYgdHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIgJiYgZXhwcmVzc2lvbi5tYXRjaCgvXFwuLykpXG4gICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgd2luZG93LmZyb21Nb2RlbCA9IHRydWU7XG4gICAgbXV0YXRlRG9tKCgpID0+IGJpbmQoZWwsIFwidmFsdWVcIiwgdmFsdWUpKTtcbiAgICBkZWxldGUgd2luZG93LmZyb21Nb2RlbDtcbiAgfTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZ2V0VmFsdWUoKTtcbiAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwidW5pbnRydXNpdmVcIikgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pc1NhbWVOb2RlKGVsKSlcbiAgICAgIHJldHVybjtcbiAgICBlbC5feF9mb3JjZU1vZGVsVXBkYXRlKHZhbHVlKTtcbiAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoZWwsIG1vZGlmaWVycywgZXZlbnQsIGN1cnJlbnRWYWx1ZSkge1xuICByZXR1cm4gbXV0YXRlRG9tKCgpID0+IHtcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBDdXN0b21FdmVudCAmJiBldmVudC5kZXRhaWwgIT09IHZvaWQgMClcbiAgICAgIHJldHVybiBldmVudC5kZXRhaWwgIT09IG51bGwgJiYgZXZlbnQuZGV0YWlsICE9PSB2b2lkIDAgPyBldmVudC5kZXRhaWwgOiBldmVudC50YXJnZXQudmFsdWU7XG4gICAgZWxzZSBpZiAoaXNDaGVja2JveChlbCkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm51bWJlclwiKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gc2FmZVBhcnNlTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiYm9vbGVhblwiKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gc2FmZVBhcnNlQm9vbGVhbihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2hlY2tlZCA/IGN1cnJlbnRWYWx1ZS5pbmNsdWRlcyhuZXdWYWx1ZSkgPyBjdXJyZW50VmFsdWUgOiBjdXJyZW50VmFsdWUuY29uY2F0KFtuZXdWYWx1ZV0pIDogY3VycmVudFZhbHVlLmZpbHRlcigoZWwyKSA9PiAhY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUyKGVsMiwgbmV3VmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiAmJiBlbC5tdWx0aXBsZSkge1xuICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm51bWJlclwiKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShldmVudC50YXJnZXQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByYXdWYWx1ZSA9IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbiAgICAgICAgICByZXR1cm4gc2FmZVBhcnNlTnVtYmVyKHJhd1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImJvb2xlYW5cIikpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9ucykubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICBsZXQgcmF3VmFsdWUgPSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICAgICAgcmV0dXJuIHNhZmVQYXJzZUJvb2xlYW4ocmF3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1ZhbHVlO1xuICAgICAgaWYgKGlzUmFkaW8oZWwpKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJudW1iZXJcIikpIHtcbiAgICAgICAgcmV0dXJuIHNhZmVQYXJzZU51bWJlcihuZXdWYWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImJvb2xlYW5cIikpIHtcbiAgICAgICAgcmV0dXJuIHNhZmVQYXJzZUJvb2xlYW4obmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ0cmltXCIpKSB7XG4gICAgICAgIHJldHVybiBuZXdWYWx1ZS50cmltKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHNhZmVQYXJzZU51bWJlcihyYXdWYWx1ZSkge1xuICBsZXQgbnVtYmVyID0gcmF3VmFsdWUgPyBwYXJzZUZsb2F0KHJhd1ZhbHVlKSA6IG51bGw7XG4gIHJldHVybiBpc051bWVyaWMyKG51bWJlcikgPyBudW1iZXIgOiByYXdWYWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlMih2YWx1ZUEsIHZhbHVlQikge1xuICByZXR1cm4gdmFsdWVBID09IHZhbHVlQjtcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpYzIoc3ViamVjdCkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkoc3ViamVjdCkgJiYgIWlzTmFOKHN1YmplY3QpO1xufVxuZnVuY3Rpb24gaXNHZXR0ZXJTZXR0ZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUuZ2V0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHZhbHVlLnNldCA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWNsb2FrLmpzXG5kaXJlY3RpdmUoXCJjbG9ha1wiLCAoZWwpID0+IHF1ZXVlTWljcm90YXNrKCgpID0+IG11dGF0ZURvbSgoKSA9PiBlbC5yZW1vdmVBdHRyaWJ1dGUocHJlZml4KFwiY2xvYWtcIikpKSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWluaXQuanNcbmFkZEluaXRTZWxlY3RvcigoKSA9PiBgWyR7cHJlZml4KFwiaW5pdFwiKX1dYCk7XG5kaXJlY3RpdmUoXCJpbml0XCIsIHNraXBEdXJpbmdDbG9uZSgoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGV2YWx1YXRlOiBldmFsdWF0ZTIgfSkgPT4ge1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gISFleHByZXNzaW9uLnRyaW0oKSAmJiBldmFsdWF0ZTIoZXhwcmVzc2lvbiwge30sIGZhbHNlKTtcbiAgfVxuICByZXR1cm4gZXZhbHVhdGUyKGV4cHJlc3Npb24sIHt9LCBmYWxzZSk7XG59KSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtdGV4dC5qc1xuZGlyZWN0aXZlKFwidGV4dFwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIgfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcjIoZXhwcmVzc2lvbik7XG4gIGVmZmVjdDMoKCkgPT4ge1xuICAgIGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1odG1sLmpzXG5kaXJlY3RpdmUoXCJodG1sXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBldmFsdWF0ZUxhdGVyOiBldmFsdWF0ZUxhdGVyMiB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyMihleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIGVsLl94X2lnbm9yZVNlbGYgPSB0cnVlO1xuICAgICAgICBpbml0VHJlZShlbCk7XG4gICAgICAgIGRlbGV0ZSBlbC5feF9pZ25vcmVTZWxmO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtYmluZC5qc1xubWFwQXR0cmlidXRlcyhzdGFydGluZ1dpdGgoXCI6XCIsIGludG8ocHJlZml4KFwiYmluZDpcIikpKSk7XG52YXIgaGFuZGxlcjIgPSAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycywgZXhwcmVzc2lvbiwgb3JpZ2luYWwgfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIGxldCBiaW5kaW5nUHJvdmlkZXJzID0ge307XG4gICAgaW5qZWN0QmluZGluZ1Byb3ZpZGVycyhiaW5kaW5nUHJvdmlkZXJzKTtcbiAgICBsZXQgZ2V0QmluZGluZ3MgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgICBnZXRCaW5kaW5ncygoYmluZGluZ3MpID0+IHtcbiAgICAgIGFwcGx5QmluZGluZ3NPYmplY3QoZWwsIGJpbmRpbmdzLCBvcmlnaW5hbCk7XG4gICAgfSwgeyBzY29wZTogYmluZGluZ1Byb3ZpZGVycyB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHZhbHVlID09PSBcImtleVwiKVxuICAgIHJldHVybiBzdG9yZUtleUZvclhGb3IoZWwsIGV4cHJlc3Npb24pO1xuICBpZiAoZWwuX3hfaW5saW5lQmluZGluZ3MgJiYgZWwuX3hfaW5saW5lQmluZGluZ3NbdmFsdWVdICYmIGVsLl94X2lubGluZUJpbmRpbmdzW3ZhbHVlXS5leHRyYWN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHJlc3VsdCkgPT4ge1xuICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCAmJiB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBleHByZXNzaW9uLm1hdGNoKC9cXC4vKSkge1xuICAgICAgcmVzdWx0ID0gXCJcIjtcbiAgICB9XG4gICAgbXV0YXRlRG9tKCgpID0+IGJpbmQoZWwsIHZhbHVlLCByZXN1bHQsIG1vZGlmaWVycykpO1xuICB9KSk7XG4gIGNsZWFudXAyKCgpID0+IHtcbiAgICBlbC5feF91bmRvQWRkZWRDbGFzc2VzICYmIGVsLl94X3VuZG9BZGRlZENsYXNzZXMoKTtcbiAgICBlbC5feF91bmRvQWRkZWRTdHlsZXMgJiYgZWwuX3hfdW5kb0FkZGVkU3R5bGVzKCk7XG4gIH0pO1xufTtcbmhhbmRsZXIyLmlubGluZSA9IChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0pID0+IHtcbiAgaWYgKCF2YWx1ZSlcbiAgICByZXR1cm47XG4gIGlmICghZWwuX3hfaW5saW5lQmluZGluZ3MpXG4gICAgZWwuX3hfaW5saW5lQmluZGluZ3MgPSB7fTtcbiAgZWwuX3hfaW5saW5lQmluZGluZ3NbdmFsdWVdID0geyBleHByZXNzaW9uLCBleHRyYWN0OiBmYWxzZSB9O1xufTtcbmRpcmVjdGl2ZShcImJpbmRcIiwgaGFuZGxlcjIpO1xuZnVuY3Rpb24gc3RvcmVLZXlGb3JYRm9yKGVsLCBleHByZXNzaW9uKSB7XG4gIGVsLl94X2tleUV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWRhdGEuanNcbmFkZFJvb3RTZWxlY3RvcigoKSA9PiBgWyR7cHJlZml4KFwiZGF0YVwiKX1dYCk7XG5kaXJlY3RpdmUoXCJkYXRhXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBpZiAoc2hvdWxkU2tpcFJlZ2lzdGVyaW5nRGF0YUR1cmluZ0Nsb25lKGVsKSlcbiAgICByZXR1cm47XG4gIGV4cHJlc3Npb24gPSBleHByZXNzaW9uID09PSBcIlwiID8gXCJ7fVwiIDogZXhwcmVzc2lvbjtcbiAgbGV0IG1hZ2ljQ29udGV4dCA9IHt9O1xuICBpbmplY3RNYWdpY3MobWFnaWNDb250ZXh0LCBlbCk7XG4gIGxldCBkYXRhUHJvdmlkZXJDb250ZXh0ID0ge307XG4gIGluamVjdERhdGFQcm92aWRlcnMoZGF0YVByb3ZpZGVyQ29udGV4dCwgbWFnaWNDb250ZXh0KTtcbiAgbGV0IGRhdGEyID0gZXZhbHVhdGUoZWwsIGV4cHJlc3Npb24sIHsgc2NvcGU6IGRhdGFQcm92aWRlckNvbnRleHQgfSk7XG4gIGlmIChkYXRhMiA9PT0gdm9pZCAwIHx8IGRhdGEyID09PSB0cnVlKVxuICAgIGRhdGEyID0ge307XG4gIGluamVjdE1hZ2ljcyhkYXRhMiwgZWwpO1xuICBsZXQgcmVhY3RpdmVEYXRhID0gcmVhY3RpdmUoZGF0YTIpO1xuICBpbml0SW50ZXJjZXB0b3JzKHJlYWN0aXZlRGF0YSk7XG4gIGxldCB1bmRvID0gYWRkU2NvcGVUb05vZGUoZWwsIHJlYWN0aXZlRGF0YSk7XG4gIHJlYWN0aXZlRGF0YVtcImluaXRcIl0gJiYgZXZhbHVhdGUoZWwsIHJlYWN0aXZlRGF0YVtcImluaXRcIl0pO1xuICBjbGVhbnVwMigoKSA9PiB7XG4gICAgcmVhY3RpdmVEYXRhW1wiZGVzdHJveVwiXSAmJiBldmFsdWF0ZShlbCwgcmVhY3RpdmVEYXRhW1wiZGVzdHJveVwiXSk7XG4gICAgdW5kbygpO1xuICB9KTtcbn0pO1xuaW50ZXJjZXB0Q2xvbmUoKGZyb20sIHRvKSA9PiB7XG4gIGlmIChmcm9tLl94X2RhdGFTdGFjaykge1xuICAgIHRvLl94X2RhdGFTdGFjayA9IGZyb20uX3hfZGF0YVN0YWNrO1xuICAgIHRvLnNldEF0dHJpYnV0ZShcImRhdGEtaGFzLWFscGluZS1zdGF0ZVwiLCB0cnVlKTtcbiAgfVxufSk7XG5mdW5jdGlvbiBzaG91bGRTa2lwUmVnaXN0ZXJpbmdEYXRhRHVyaW5nQ2xvbmUoZWwpIHtcbiAgaWYgKCFpc0Nsb25pbmcpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoaXNDbG9uaW5nTGVnYWN5KVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gZWwuaGFzQXR0cmlidXRlKFwiZGF0YS1oYXMtYWxwaW5lLXN0YXRlXCIpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXNob3cuanNcbmRpcmVjdGl2ZShcInNob3dcIiwgKGVsLCB7IG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MyB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgaWYgKCFlbC5feF9kb0hpZGUpXG4gICAgZWwuX3hfZG9IaWRlID0gKCkgPT4ge1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwibm9uZVwiLCBtb2RpZmllcnMuaW5jbHVkZXMoXCJpbXBvcnRhbnRcIikgPyBcImltcG9ydGFudFwiIDogdm9pZCAwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIGlmICghZWwuX3hfZG9TaG93KVxuICAgIGVsLl94X2RvU2hvdyA9ICgpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGlmIChlbC5zdHlsZS5sZW5ndGggPT09IDEgJiYgZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIGxldCBoaWRlID0gKCkgPT4ge1xuICAgIGVsLl94X2RvSGlkZSgpO1xuICAgIGVsLl94X2lzU2hvd24gPSBmYWxzZTtcbiAgfTtcbiAgbGV0IHNob3cgPSAoKSA9PiB7XG4gICAgZWwuX3hfZG9TaG93KCk7XG4gICAgZWwuX3hfaXNTaG93biA9IHRydWU7XG4gIH07XG4gIGxldCBjbGlja0F3YXlDb21wYXRpYmxlU2hvdyA9ICgpID0+IHNldFRpbWVvdXQoc2hvdyk7XG4gIGxldCB0b2dnbGUgPSBvbmNlKFxuICAgICh2YWx1ZSkgPT4gdmFsdWUgPyBzaG93KCkgOiBoaWRlKCksXG4gICAgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGVsLl94X3RvZ2dsZUFuZENhc2NhZGVXaXRoVHJhbnNpdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlbC5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zKGVsLCB2YWx1ZSwgc2hvdywgaGlkZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA/IGNsaWNrQXdheUNvbXBhdGlibGVTaG93KCkgOiBoaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICApO1xuICBsZXQgb2xkVmFsdWU7XG4gIGxldCBmaXJzdFRpbWUgPSB0cnVlO1xuICBlZmZlY3QzKCgpID0+IGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICBpZiAoIWZpcnN0VGltZSAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImltbWVkaWF0ZVwiKSlcbiAgICAgIHZhbHVlID8gY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKSA6IGhpZGUoKTtcbiAgICB0b2dnbGUodmFsdWUpO1xuICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH0pKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWZvci5qc1xuZGlyZWN0aXZlKFwiZm9yXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGxldCBpdGVyYXRvck5hbWVzID0gcGFyc2VGb3JFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICBsZXQgZXZhbHVhdGVJdGVtcyA9IGV2YWx1YXRlTGF0ZXIoZWwsIGl0ZXJhdG9yTmFtZXMuaXRlbXMpO1xuICBsZXQgZXZhbHVhdGVLZXkgPSBldmFsdWF0ZUxhdGVyKFxuICAgIGVsLFxuICAgIC8vIHRoZSB4LWJpbmQ6a2V5IGV4cHJlc3Npb24gaXMgc3RvcmVkIGZvciBvdXIgdXNlIGluc3RlYWQgb2YgZXZhbHVhdGVkLlxuICAgIGVsLl94X2tleUV4cHJlc3Npb24gfHwgXCJpbmRleFwiXG4gICk7XG4gIGVsLl94X3ByZXZLZXlzID0gW107XG4gIGVsLl94X2xvb2t1cCA9IHt9O1xuICBlZmZlY3QzKCgpID0+IGxvb3AoZWwsIGl0ZXJhdG9yTmFtZXMsIGV2YWx1YXRlSXRlbXMsIGV2YWx1YXRlS2V5KSk7XG4gIGNsZWFudXAyKCgpID0+IHtcbiAgICBPYmplY3QudmFsdWVzKGVsLl94X2xvb2t1cCkuZm9yRWFjaCgoZWwyKSA9PiBtdXRhdGVEb20oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGRlc3Ryb3lUcmVlKGVsMik7XG4gICAgICAgIGVsMi5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICApKTtcbiAgICBkZWxldGUgZWwuX3hfcHJldktleXM7XG4gICAgZGVsZXRlIGVsLl94X2xvb2t1cDtcbiAgfSk7XG59KTtcbmZ1bmN0aW9uIGxvb3AoZWwsIGl0ZXJhdG9yTmFtZXMsIGV2YWx1YXRlSXRlbXMsIGV2YWx1YXRlS2V5KSB7XG4gIGxldCBpc09iamVjdDIgPSAoaSkgPT4gdHlwZW9mIGkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaSk7XG4gIGxldCB0ZW1wbGF0ZUVsID0gZWw7XG4gIGV2YWx1YXRlSXRlbXMoKGl0ZW1zKSA9PiB7XG4gICAgaWYgKGlzTnVtZXJpYzMoaXRlbXMpICYmIGl0ZW1zID49IDApIHtcbiAgICAgIGl0ZW1zID0gQXJyYXkuZnJvbShBcnJheShpdGVtcykua2V5cygpLCAoaSkgPT4gaSArIDEpO1xuICAgIH1cbiAgICBpZiAoaXRlbXMgPT09IHZvaWQgMClcbiAgICAgIGl0ZW1zID0gW107XG4gICAgbGV0IGxvb2t1cCA9IGVsLl94X2xvb2t1cDtcbiAgICBsZXQgcHJldktleXMgPSBlbC5feF9wcmV2S2V5cztcbiAgICBsZXQgc2NvcGVzID0gW107XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICBpZiAoaXNPYmplY3QyKGl0ZW1zKSkge1xuICAgICAgaXRlbXMgPSBPYmplY3QuZW50cmllcyhpdGVtcykubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgbGV0IHNjb3BlMiA9IGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIHZhbHVlLCBrZXksIGl0ZW1zKTtcbiAgICAgICAgZXZhbHVhdGVLZXkoKHZhbHVlMikgPT4ge1xuICAgICAgICAgIGlmIChrZXlzLmluY2x1ZGVzKHZhbHVlMikpXG4gICAgICAgICAgICB3YXJuKFwiRHVwbGljYXRlIGtleSBvbiB4LWZvclwiLCBlbCk7XG4gICAgICAgICAga2V5cy5wdXNoKHZhbHVlMik7XG4gICAgICAgIH0sIHsgc2NvcGU6IHsgaW5kZXg6IGtleSwgLi4uc2NvcGUyIH0gfSk7XG4gICAgICAgIHNjb3Blcy5wdXNoKHNjb3BlMik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2NvcGUyID0gZ2V0SXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMoaXRlcmF0b3JOYW1lcywgaXRlbXNbaV0sIGksIGl0ZW1zKTtcbiAgICAgICAgZXZhbHVhdGVLZXkoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKGtleXMuaW5jbHVkZXModmFsdWUpKVxuICAgICAgICAgICAgd2FybihcIkR1cGxpY2F0ZSBrZXkgb24geC1mb3JcIiwgZWwpO1xuICAgICAgICAgIGtleXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0sIHsgc2NvcGU6IHsgaW5kZXg6IGksIC4uLnNjb3BlMiB9IH0pO1xuICAgICAgICBzY29wZXMucHVzaChzY29wZTIpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgYWRkcyA9IFtdO1xuICAgIGxldCBtb3ZlcyA9IFtdO1xuICAgIGxldCByZW1vdmVzID0gW107XG4gICAgbGV0IHNhbWVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV2S2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IHByZXZLZXlzW2ldO1xuICAgICAgaWYgKGtleXMuaW5kZXhPZihrZXkpID09PSAtMSlcbiAgICAgICAgcmVtb3Zlcy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHByZXZLZXlzID0gcHJldktleXMuZmlsdGVyKChrZXkpID0+ICFyZW1vdmVzLmluY2x1ZGVzKGtleSkpO1xuICAgIGxldCBsYXN0S2V5ID0gXCJ0ZW1wbGF0ZVwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBsZXQgcHJldkluZGV4ID0gcHJldktleXMuaW5kZXhPZihrZXkpO1xuICAgICAgaWYgKHByZXZJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcHJldktleXMuc3BsaWNlKGksIDAsIGtleSk7XG4gICAgICAgIGFkZHMucHVzaChbbGFzdEtleSwgaV0pO1xuICAgICAgfSBlbHNlIGlmIChwcmV2SW5kZXggIT09IGkpIHtcbiAgICAgICAgbGV0IGtleUluU3BvdCA9IHByZXZLZXlzLnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgbGV0IGtleUZvclNwb3QgPSBwcmV2S2V5cy5zcGxpY2UocHJldkluZGV4IC0gMSwgMSlbMF07XG4gICAgICAgIHByZXZLZXlzLnNwbGljZShpLCAwLCBrZXlGb3JTcG90KTtcbiAgICAgICAgcHJldktleXMuc3BsaWNlKHByZXZJbmRleCwgMCwga2V5SW5TcG90KTtcbiAgICAgICAgbW92ZXMucHVzaChba2V5SW5TcG90LCBrZXlGb3JTcG90XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYW1lcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgICBsYXN0S2V5ID0ga2V5O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSByZW1vdmVzW2ldO1xuICAgICAgaWYgKCEoa2V5IGluIGxvb2t1cCkpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZGVzdHJveVRyZWUobG9va3VwW2tleV0pO1xuICAgICAgICBsb29rdXBba2V5XS5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgICAgZGVsZXRlIGxvb2t1cFtrZXldO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgW2tleUluU3BvdCwga2V5Rm9yU3BvdF0gPSBtb3Zlc1tpXTtcbiAgICAgIGxldCBlbEluU3BvdCA9IGxvb2t1cFtrZXlJblNwb3RdO1xuICAgICAgbGV0IGVsRm9yU3BvdCA9IGxvb2t1cFtrZXlGb3JTcG90XTtcbiAgICAgIGxldCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgaWYgKCFlbEZvclNwb3QpXG4gICAgICAgICAgd2FybihgeC1mb3IgXCI6a2V5XCIgaXMgdW5kZWZpbmVkIG9yIGludmFsaWRgLCB0ZW1wbGF0ZUVsLCBrZXlGb3JTcG90LCBsb29rdXApO1xuICAgICAgICBlbEZvclNwb3QuYWZ0ZXIobWFya2VyKTtcbiAgICAgICAgZWxJblNwb3QuYWZ0ZXIoZWxGb3JTcG90KTtcbiAgICAgICAgZWxGb3JTcG90Ll94X2N1cnJlbnRJZkVsICYmIGVsRm9yU3BvdC5hZnRlcihlbEZvclNwb3QuX3hfY3VycmVudElmRWwpO1xuICAgICAgICBtYXJrZXIuYmVmb3JlKGVsSW5TcG90KTtcbiAgICAgICAgZWxJblNwb3QuX3hfY3VycmVudElmRWwgJiYgZWxJblNwb3QuYWZ0ZXIoZWxJblNwb3QuX3hfY3VycmVudElmRWwpO1xuICAgICAgICBtYXJrZXIucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIGVsRm9yU3BvdC5feF9yZWZyZXNoWEZvclNjb3BlKHNjb3Blc1trZXlzLmluZGV4T2Yoa2V5Rm9yU3BvdCldKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgW2xhc3RLZXkyLCBpbmRleF0gPSBhZGRzW2ldO1xuICAgICAgbGV0IGxhc3RFbCA9IGxhc3RLZXkyID09PSBcInRlbXBsYXRlXCIgPyB0ZW1wbGF0ZUVsIDogbG9va3VwW2xhc3RLZXkyXTtcbiAgICAgIGlmIChsYXN0RWwuX3hfY3VycmVudElmRWwpXG4gICAgICAgIGxhc3RFbCA9IGxhc3RFbC5feF9jdXJyZW50SWZFbDtcbiAgICAgIGxldCBzY29wZTIgPSBzY29wZXNbaW5kZXhdO1xuICAgICAgbGV0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgbGV0IGNsb25lMiA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGVFbC5jb250ZW50LCB0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgIGxldCByZWFjdGl2ZVNjb3BlID0gcmVhY3RpdmUoc2NvcGUyKTtcbiAgICAgIGFkZFNjb3BlVG9Ob2RlKGNsb25lMiwgcmVhY3RpdmVTY29wZSwgdGVtcGxhdGVFbCk7XG4gICAgICBjbG9uZTIuX3hfcmVmcmVzaFhGb3JTY29wZSA9IChuZXdTY29wZSkgPT4ge1xuICAgICAgICBPYmplY3QuZW50cmllcyhuZXdTY29wZSkuZm9yRWFjaCgoW2tleTIsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIHJlYWN0aXZlU2NvcGVba2V5Ml0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgbGFzdEVsLmFmdGVyKGNsb25lMik7XG4gICAgICAgIHNraXBEdXJpbmdDbG9uZSgoKSA9PiBpbml0VHJlZShjbG9uZTIpKSgpO1xuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICB3YXJuKFwieC1mb3Iga2V5IGNhbm5vdCBiZSBhbiBvYmplY3QsIGl0IG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gaW50ZWdlclwiLCB0ZW1wbGF0ZUVsKTtcbiAgICAgIH1cbiAgICAgIGxvb2t1cFtrZXldID0gY2xvbmUyO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsb29rdXBbc2FtZXNbaV1dLl94X3JlZnJlc2hYRm9yU2NvcGUoc2NvcGVzW2tleXMuaW5kZXhPZihzYW1lc1tpXSldKTtcbiAgICB9XG4gICAgdGVtcGxhdGVFbC5feF9wcmV2S2V5cyA9IGtleXM7XG4gIH0pO1xufVxuZnVuY3Rpb24gcGFyc2VGb3JFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgbGV0IGZvckl0ZXJhdG9yUkUgPSAvLChbXixcXH1cXF1dKikoPzosKFteLFxcfVxcXV0qKSk/JC87XG4gIGxldCBzdHJpcFBhcmVuc1JFID0gL15cXHMqXFwofFxcKVxccyokL2c7XG4gIGxldCBmb3JBbGlhc1JFID0gLyhbXFxzXFxTXSo/KVxccysoPzppbnxvZilcXHMrKFtcXHNcXFNdKikvO1xuICBsZXQgaW5NYXRjaCA9IGV4cHJlc3Npb24ubWF0Y2goZm9yQWxpYXNSRSk7XG4gIGlmICghaW5NYXRjaClcbiAgICByZXR1cm47XG4gIGxldCByZXMgPSB7fTtcbiAgcmVzLml0ZW1zID0gaW5NYXRjaFsyXS50cmltKCk7XG4gIGxldCBpdGVtID0gaW5NYXRjaFsxXS5yZXBsYWNlKHN0cmlwUGFyZW5zUkUsIFwiXCIpLnRyaW0oKTtcbiAgbGV0IGl0ZXJhdG9yTWF0Y2ggPSBpdGVtLm1hdGNoKGZvckl0ZXJhdG9yUkUpO1xuICBpZiAoaXRlcmF0b3JNYXRjaCkge1xuICAgIHJlcy5pdGVtID0gaXRlbS5yZXBsYWNlKGZvckl0ZXJhdG9yUkUsIFwiXCIpLnRyaW0oKTtcbiAgICByZXMuaW5kZXggPSBpdGVyYXRvck1hdGNoWzFdLnRyaW0oKTtcbiAgICBpZiAoaXRlcmF0b3JNYXRjaFsyXSkge1xuICAgICAgcmVzLmNvbGxlY3Rpb24gPSBpdGVyYXRvck1hdGNoWzJdLnRyaW0oKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLml0ZW0gPSBpdGVtO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBnZXRJdGVyYXRpb25TY29wZVZhcmlhYmxlcyhpdGVyYXRvck5hbWVzLCBpdGVtLCBpbmRleCwgaXRlbXMpIHtcbiAgbGV0IHNjb3BlVmFyaWFibGVzID0ge307XG4gIGlmICgvXlxcWy4qXFxdJC8udGVzdChpdGVyYXRvck5hbWVzLml0ZW0pICYmIEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICBsZXQgbmFtZXMgPSBpdGVyYXRvck5hbWVzLml0ZW0ucmVwbGFjZShcIltcIiwgXCJcIikucmVwbGFjZShcIl1cIiwgXCJcIikuc3BsaXQoXCIsXCIpLm1hcCgoaSkgPT4gaS50cmltKCkpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUsIGkpID0+IHtcbiAgICAgIHNjb3BlVmFyaWFibGVzW25hbWVdID0gaXRlbVtpXTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICgvXlxcey4qXFx9JC8udGVzdChpdGVyYXRvck5hbWVzLml0ZW0pICYmICFBcnJheS5pc0FycmF5KGl0ZW0pICYmIHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKSB7XG4gICAgbGV0IG5hbWVzID0gaXRlcmF0b3JOYW1lcy5pdGVtLnJlcGxhY2UoXCJ7XCIsIFwiXCIpLnJlcGxhY2UoXCJ9XCIsIFwiXCIpLnNwbGl0KFwiLFwiKS5tYXAoKGkpID0+IGkudHJpbSgpKTtcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBzY29wZVZhcmlhYmxlc1tuYW1lXSA9IGl0ZW1bbmFtZV07XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc2NvcGVWYXJpYWJsZXNbaXRlcmF0b3JOYW1lcy5pdGVtXSA9IGl0ZW07XG4gIH1cbiAgaWYgKGl0ZXJhdG9yTmFtZXMuaW5kZXgpXG4gICAgc2NvcGVWYXJpYWJsZXNbaXRlcmF0b3JOYW1lcy5pbmRleF0gPSBpbmRleDtcbiAgaWYgKGl0ZXJhdG9yTmFtZXMuY29sbGVjdGlvbilcbiAgICBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLmNvbGxlY3Rpb25dID0gaXRlbXM7XG4gIHJldHVybiBzY29wZVZhcmlhYmxlcztcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpYzMoc3ViamVjdCkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkoc3ViamVjdCkgJiYgIWlzTmFOKHN1YmplY3QpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXJlZi5qc1xuZnVuY3Rpb24gaGFuZGxlcjMoKSB7XG59XG5oYW5kbGVyMy5pbmxpbmUgPSAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbGV0IHJvb3QgPSBjbG9zZXN0Um9vdChlbCk7XG4gIGlmICghcm9vdC5feF9yZWZzKVxuICAgIHJvb3QuX3hfcmVmcyA9IHt9O1xuICByb290Ll94X3JlZnNbZXhwcmVzc2lvbl0gPSBlbDtcbiAgY2xlYW51cDIoKCkgPT4gZGVsZXRlIHJvb3QuX3hfcmVmc1tleHByZXNzaW9uXSk7XG59O1xuZGlyZWN0aXZlKFwicmVmXCIsIGhhbmRsZXIzKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZi5qc1xuZGlyZWN0aXZlKFwiaWZcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJ0ZW1wbGF0ZVwiKVxuICAgIHdhcm4oXCJ4LWlmIGNhbiBvbmx5IGJlIHVzZWQgb24gYSA8dGVtcGxhdGU+IHRhZ1wiLCBlbCk7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgbGV0IHNob3cgPSAoKSA9PiB7XG4gICAgaWYgKGVsLl94X2N1cnJlbnRJZkVsKVxuICAgICAgcmV0dXJuIGVsLl94X2N1cnJlbnRJZkVsO1xuICAgIGxldCBjbG9uZTIgPSBlbC5jb250ZW50LmNsb25lTm9kZSh0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBhZGRTY29wZVRvTm9kZShjbG9uZTIsIHt9LCBlbCk7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGVsLmFmdGVyKGNsb25lMik7XG4gICAgICBza2lwRHVyaW5nQ2xvbmUoKCkgPT4gaW5pdFRyZWUoY2xvbmUyKSkoKTtcbiAgICB9KTtcbiAgICBlbC5feF9jdXJyZW50SWZFbCA9IGNsb25lMjtcbiAgICBlbC5feF91bmRvSWYgPSAoKSA9PiB7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBkZXN0cm95VHJlZShjbG9uZTIpO1xuICAgICAgICBjbG9uZTIucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSBlbC5feF9jdXJyZW50SWZFbDtcbiAgICB9O1xuICAgIHJldHVybiBjbG9uZTI7XG4gIH07XG4gIGxldCBoaWRlID0gKCkgPT4ge1xuICAgIGlmICghZWwuX3hfdW5kb0lmKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLl94X3VuZG9JZigpO1xuICAgIGRlbGV0ZSBlbC5feF91bmRvSWY7XG4gIH07XG4gIGVmZmVjdDMoKCkgPT4gZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgIHZhbHVlID8gc2hvdygpIDogaGlkZSgpO1xuICB9KSk7XG4gIGNsZWFudXAyKCgpID0+IGVsLl94X3VuZG9JZiAmJiBlbC5feF91bmRvSWYoKSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZC5qc1xuZGlyZWN0aXZlKFwiaWRcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBldmFsdWF0ZTogZXZhbHVhdGUyIH0pID0+IHtcbiAgbGV0IG5hbWVzID0gZXZhbHVhdGUyKGV4cHJlc3Npb24pO1xuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiBzZXRJZFJvb3QoZWwsIG5hbWUpKTtcbn0pO1xuaW50ZXJjZXB0Q2xvbmUoKGZyb20sIHRvKSA9PiB7XG4gIGlmIChmcm9tLl94X2lkcykge1xuICAgIHRvLl94X2lkcyA9IGZyb20uX3hfaWRzO1xuICB9XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1vbi5qc1xubWFwQXR0cmlidXRlcyhzdGFydGluZ1dpdGgoXCJAXCIsIGludG8ocHJlZml4KFwib246XCIpKSkpO1xuZGlyZWN0aXZlKFwib25cIiwgc2tpcER1cmluZ0Nsb25lKChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXhwcmVzc2lvbiA/IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pIDogKCkgPT4ge1xuICB9O1xuICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInRlbXBsYXRlXCIpIHtcbiAgICBpZiAoIWVsLl94X2ZvcndhcmRFdmVudHMpXG4gICAgICBlbC5feF9mb3J3YXJkRXZlbnRzID0gW107XG4gICAgaWYgKCFlbC5feF9mb3J3YXJkRXZlbnRzLmluY2x1ZGVzKHZhbHVlKSlcbiAgICAgIGVsLl94X2ZvcndhcmRFdmVudHMucHVzaCh2YWx1ZSk7XG4gIH1cbiAgbGV0IHJlbW92ZUxpc3RlbmVyID0gb24oZWwsIHZhbHVlLCBtb2RpZmllcnMsIChlKSA9PiB7XG4gICAgZXZhbHVhdGUyKCgpID0+IHtcbiAgICB9LCB7IHNjb3BlOiB7IFwiJGV2ZW50XCI6IGUgfSwgcGFyYW1zOiBbZV0gfSk7XG4gIH0pO1xuICBjbGVhbnVwMigoKSA9PiByZW1vdmVMaXN0ZW5lcigpKTtcbn0pKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMvaW5kZXguanNcbndhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKFwiQ29sbGFwc2VcIiwgXCJjb2xsYXBzZVwiLCBcImNvbGxhcHNlXCIpO1xud2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUoXCJJbnRlcnNlY3RcIiwgXCJpbnRlcnNlY3RcIiwgXCJpbnRlcnNlY3RcIik7XG53YXJuTWlzc2luZ1BsdWdpbkRpcmVjdGl2ZShcIkZvY3VzXCIsIFwidHJhcFwiLCBcImZvY3VzXCIpO1xud2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUoXCJNYXNrXCIsIFwibWFza1wiLCBcIm1hc2tcIik7XG5mdW5jdGlvbiB3YXJuTWlzc2luZ1BsdWdpbkRpcmVjdGl2ZShuYW1lLCBkaXJlY3RpdmVOYW1lLCBzbHVnKSB7XG4gIGRpcmVjdGl2ZShkaXJlY3RpdmVOYW1lLCAoZWwpID0+IHdhcm4oYFlvdSBjYW4ndCB1c2UgW3gtJHtkaXJlY3RpdmVOYW1lfV0gd2l0aG91dCBmaXJzdCBpbnN0YWxsaW5nIHRoZSBcIiR7bmFtZX1cIiBwbHVnaW4gaGVyZTogaHR0cHM6Ly9hbHBpbmVqcy5kZXYvcGx1Z2lucy8ke3NsdWd9YCwgZWwpKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2luZGV4LmpzXG5hbHBpbmVfZGVmYXVsdC5zZXRFdmFsdWF0b3Iobm9ybWFsRXZhbHVhdG9yKTtcbmFscGluZV9kZWZhdWx0LnNldFJlYWN0aXZpdHlFbmdpbmUoeyByZWFjdGl2ZTogcmVhY3RpdmUyLCBlZmZlY3Q6IGVmZmVjdDIsIHJlbGVhc2U6IHN0b3AsIHJhdzogdG9SYXcgfSk7XG52YXIgc3JjX2RlZmF1bHQgPSBhbHBpbmVfZGVmYXVsdDtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvYnVpbGRzL21vZHVsZS5qc1xudmFyIG1vZHVsZV9kZWZhdWx0ID0gc3JjX2RlZmF1bHQ7XG5leHBvcnQge1xuICBzcmNfZGVmYXVsdCBhcyBBbHBpbmUsXG4gIG1vZHVsZV9kZWZhdWx0IGFzIGRlZmF1bHRcbn07XG4iLCAidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX21hcmtBc01vZHVsZSA9ICh0YXJnZXQpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6IHRydWV9KTtcbnZhciBfX2NvbW1vbkpTID0gKGNhbGxiYWNrLCBtb2R1bGUpID0+ICgpID0+IHtcbiAgaWYgKCFtb2R1bGUpIHtcbiAgICBtb2R1bGUgPSB7ZXhwb3J0czoge319O1xuICAgIGNhbGxiYWNrKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUpO1xuICB9XG4gIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn07XG52YXIgX19leHBvcnRTdGFyID0gKHRhcmdldCwgbW9kdWxlLCBkZXNjKSA9PiB7XG4gIGlmIChtb2R1bGUgJiYgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgbW9kdWxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMobW9kdWxlKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodGFyZ2V0LCBrZXkpICYmIGtleSAhPT0gXCJkZWZhdWx0XCIpXG4gICAgICAgIF9fZGVmUHJvcCh0YXJnZXQsIGtleSwge2dldDogKCkgPT4gbW9kdWxlW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MobW9kdWxlLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGV9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbnZhciBfX3RvTW9kdWxlID0gKG1vZHVsZSkgPT4ge1xuICByZXR1cm4gX19leHBvcnRTdGFyKF9fbWFya0FzTW9kdWxlKF9fZGVmUHJvcChtb2R1bGUgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2R1bGUpKSA6IHt9LCBcImRlZmF1bHRcIiwgbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlICYmIFwiZGVmYXVsdFwiIGluIG1vZHVsZSA/IHtnZXQ6ICgpID0+IG1vZHVsZS5kZWZhdWx0LCBlbnVtZXJhYmxlOiB0cnVlfSA6IHt2YWx1ZTogbW9kdWxlLCBlbnVtZXJhYmxlOiB0cnVlfSkpLCBtb2R1bGUpO1xufTtcblxuLy8gbm9kZV9tb2R1bGVzL21vdXNldHJhcC9tb3VzZXRyYXAuanNcbnZhciByZXF1aXJlX21vdXNldHJhcCA9IF9fY29tbW9uSlMoKGV4cG9ydHMsIG1vZHVsZSkgPT4ge1xuICAoZnVuY3Rpb24od2luZG93MiwgZG9jdW1lbnQyLCB1bmRlZmluZWQyKSB7XG4gICAgaWYgKCF3aW5kb3cyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBfTUFQID0ge1xuICAgICAgODogXCJiYWNrc3BhY2VcIixcbiAgICAgIDk6IFwidGFiXCIsXG4gICAgICAxMzogXCJlbnRlclwiLFxuICAgICAgMTY6IFwic2hpZnRcIixcbiAgICAgIDE3OiBcImN0cmxcIixcbiAgICAgIDE4OiBcImFsdFwiLFxuICAgICAgMjA6IFwiY2Fwc2xvY2tcIixcbiAgICAgIDI3OiBcImVzY1wiLFxuICAgICAgMzI6IFwic3BhY2VcIixcbiAgICAgIDMzOiBcInBhZ2V1cFwiLFxuICAgICAgMzQ6IFwicGFnZWRvd25cIixcbiAgICAgIDM1OiBcImVuZFwiLFxuICAgICAgMzY6IFwiaG9tZVwiLFxuICAgICAgMzc6IFwibGVmdFwiLFxuICAgICAgMzg6IFwidXBcIixcbiAgICAgIDM5OiBcInJpZ2h0XCIsXG4gICAgICA0MDogXCJkb3duXCIsXG4gICAgICA0NTogXCJpbnNcIixcbiAgICAgIDQ2OiBcImRlbFwiLFxuICAgICAgOTE6IFwibWV0YVwiLFxuICAgICAgOTM6IFwibWV0YVwiLFxuICAgICAgMjI0OiBcIm1ldGFcIlxuICAgIH07XG4gICAgdmFyIF9LRVlDT0RFX01BUCA9IHtcbiAgICAgIDEwNjogXCIqXCIsXG4gICAgICAxMDc6IFwiK1wiLFxuICAgICAgMTA5OiBcIi1cIixcbiAgICAgIDExMDogXCIuXCIsXG4gICAgICAxMTE6IFwiL1wiLFxuICAgICAgMTg2OiBcIjtcIixcbiAgICAgIDE4NzogXCI9XCIsXG4gICAgICAxODg6IFwiLFwiLFxuICAgICAgMTg5OiBcIi1cIixcbiAgICAgIDE5MDogXCIuXCIsXG4gICAgICAxOTE6IFwiL1wiLFxuICAgICAgMTkyOiBcImBcIixcbiAgICAgIDIxOTogXCJbXCIsXG4gICAgICAyMjA6IFwiXFxcXFwiLFxuICAgICAgMjIxOiBcIl1cIixcbiAgICAgIDIyMjogXCInXCJcbiAgICB9O1xuICAgIHZhciBfU0hJRlRfTUFQID0ge1xuICAgICAgXCJ+XCI6IFwiYFwiLFxuICAgICAgXCIhXCI6IFwiMVwiLFxuICAgICAgXCJAXCI6IFwiMlwiLFxuICAgICAgXCIjXCI6IFwiM1wiLFxuICAgICAgJDogXCI0XCIsXG4gICAgICBcIiVcIjogXCI1XCIsXG4gICAgICBcIl5cIjogXCI2XCIsXG4gICAgICBcIiZcIjogXCI3XCIsXG4gICAgICBcIipcIjogXCI4XCIsXG4gICAgICBcIihcIjogXCI5XCIsXG4gICAgICBcIilcIjogXCIwXCIsXG4gICAgICBfOiBcIi1cIixcbiAgICAgIFwiK1wiOiBcIj1cIixcbiAgICAgIFwiOlwiOiBcIjtcIixcbiAgICAgICdcIic6IFwiJ1wiLFxuICAgICAgXCI8XCI6IFwiLFwiLFxuICAgICAgXCI+XCI6IFwiLlwiLFxuICAgICAgXCI/XCI6IFwiL1wiLFxuICAgICAgXCJ8XCI6IFwiXFxcXFwiXG4gICAgfTtcbiAgICB2YXIgX1NQRUNJQUxfQUxJQVNFUyA9IHtcbiAgICAgIG9wdGlvbjogXCJhbHRcIixcbiAgICAgIGNvbW1hbmQ6IFwibWV0YVwiLFxuICAgICAgcmV0dXJuOiBcImVudGVyXCIsXG4gICAgICBlc2NhcGU6IFwiZXNjXCIsXG4gICAgICBwbHVzOiBcIitcIixcbiAgICAgIG1vZDogL01hY3xpUG9kfGlQaG9uZXxpUGFkLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkgPyBcIm1ldGFcIiA6IFwiY3RybFwiXG4gICAgfTtcbiAgICB2YXIgX1JFVkVSU0VfTUFQO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMjA7ICsraSkge1xuICAgICAgX01BUFsxMTEgKyBpXSA9IFwiZlwiICsgaTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8PSA5OyArK2kpIHtcbiAgICAgIF9NQVBbaSArIDk2XSA9IGkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50KG9iamVjdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvYmplY3QuYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpIHtcbiAgICAgIGlmIChlLnR5cGUgPT0gXCJrZXlwcmVzc1wiKSB7XG4gICAgICAgIHZhciBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpO1xuICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgICAgfVxuICAgICAgaWYgKF9NQVBbZS53aGljaF0pIHtcbiAgICAgICAgcmV0dXJuIF9NQVBbZS53aGljaF07XG4gICAgICB9XG4gICAgICBpZiAoX0tFWUNPREVfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgIHJldHVybiBfS0VZQ09ERV9NQVBbZS53aGljaF07XG4gICAgICB9XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzMSwgbW9kaWZpZXJzMikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyczEuc29ydCgpLmpvaW4oXCIsXCIpID09PSBtb2RpZmllcnMyLnNvcnQoKS5qb2luKFwiLFwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2V2ZW50TW9kaWZpZXJzKGUpIHtcbiAgICAgIHZhciBtb2RpZmllcnMgPSBbXTtcbiAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgIG1vZGlmaWVycy5wdXNoKFwic2hpZnRcIik7XG4gICAgICB9XG4gICAgICBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goXCJhbHRcIik7XG4gICAgICB9XG4gICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgIG1vZGlmaWVycy5wdXNoKFwiY3RybFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goXCJtZXRhXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vZGlmaWVycztcbiAgICB9XG4gICAgZnVuY3Rpb24gX3ByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9pc01vZGlmaWVyKGtleSkge1xuICAgICAgcmV0dXJuIGtleSA9PSBcInNoaWZ0XCIgfHwga2V5ID09IFwiY3RybFwiIHx8IGtleSA9PSBcImFsdFwiIHx8IGtleSA9PSBcIm1ldGFcIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2dldFJldmVyc2VNYXAoKSB7XG4gICAgICBpZiAoIV9SRVZFUlNFX01BUCkge1xuICAgICAgICBfUkVWRVJTRV9NQVAgPSB7fTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIF9NQVApIHtcbiAgICAgICAgICBpZiAoa2V5ID4gOTUgJiYga2V5IDwgMTEyKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF9NQVAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgX1JFVkVSU0VfTUFQW19NQVBba2V5XV0gPSBrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX1JFVkVSU0VfTUFQO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbikge1xuICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgYWN0aW9uID0gX2dldFJldmVyc2VNYXAoKVtrZXldID8gXCJrZXlkb3duXCIgOiBcImtleXByZXNzXCI7XG4gICAgICB9XG4gICAgICBpZiAoYWN0aW9uID09IFwia2V5cHJlc3NcIiAmJiBtb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbiA9IFwia2V5ZG93blwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2tleXNGcm9tU3RyaW5nKGNvbWJpbmF0aW9uKSB7XG4gICAgICBpZiAoY29tYmluYXRpb24gPT09IFwiK1wiKSB7XG4gICAgICAgIHJldHVybiBbXCIrXCJdO1xuICAgICAgfVxuICAgICAgY29tYmluYXRpb24gPSBjb21iaW5hdGlvbi5yZXBsYWNlKC9cXCt7Mn0vZywgXCIrcGx1c1wiKTtcbiAgICAgIHJldHVybiBjb21iaW5hdGlvbi5zcGxpdChcIitcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pIHtcbiAgICAgIHZhciBrZXlzO1xuICAgICAgdmFyIGtleTtcbiAgICAgIHZhciBpMjtcbiAgICAgIHZhciBtb2RpZmllcnMgPSBbXTtcbiAgICAgIGtleXMgPSBfa2V5c0Zyb21TdHJpbmcoY29tYmluYXRpb24pO1xuICAgICAgZm9yIChpMiA9IDA7IGkyIDwga2V5cy5sZW5ndGg7ICsraTIpIHtcbiAgICAgICAga2V5ID0ga2V5c1tpMl07XG4gICAgICAgIGlmIChfU1BFQ0lBTF9BTElBU0VTW2tleV0pIHtcbiAgICAgICAgICBrZXkgPSBfU1BFQ0lBTF9BTElBU0VTW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbiAmJiBhY3Rpb24gIT0gXCJrZXlwcmVzc1wiICYmIF9TSElGVF9NQVBba2V5XSkge1xuICAgICAgICAgIGtleSA9IF9TSElGVF9NQVBba2V5XTtcbiAgICAgICAgICBtb2RpZmllcnMucHVzaChcInNoaWZ0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaXNNb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgbW9kaWZpZXJzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYWN0aW9uID0gX3BpY2tCZXN0QWN0aW9uKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5LFxuICAgICAgICBtb2RpZmllcnMsXG4gICAgICAgIGFjdGlvblxuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2JlbG9uZ3NUbyhlbGVtZW50LCBhbmNlc3Rvcikge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gZG9jdW1lbnQyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50ID09PSBhbmNlc3Rvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfYmVsb25nc1RvKGVsZW1lbnQucGFyZW50Tm9kZSwgYW5jZXN0b3IpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBNb3VzZXRyYXAzKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50IHx8IGRvY3VtZW50MjtcbiAgICAgIGlmICghKHNlbGYgaW5zdGFuY2VvZiBNb3VzZXRyYXAzKSkge1xuICAgICAgICByZXR1cm4gbmV3IE1vdXNldHJhcDModGFyZ2V0RWxlbWVudCk7XG4gICAgICB9XG4gICAgICBzZWxmLnRhcmdldCA9IHRhcmdldEVsZW1lbnQ7XG4gICAgICBzZWxmLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgIHNlbGYuX2RpcmVjdE1hcCA9IHt9O1xuICAgICAgdmFyIF9zZXF1ZW5jZUxldmVscyA9IHt9O1xuICAgICAgdmFyIF9yZXNldFRpbWVyO1xuICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5dXAgPSBmYWxzZTtcbiAgICAgIHZhciBfaWdub3JlTmV4dEtleXByZXNzID0gZmFsc2U7XG4gICAgICB2YXIgX25leHRFeHBlY3RlZEFjdGlvbiA9IGZhbHNlO1xuICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpIHtcbiAgICAgICAgZG9Ob3RSZXNldCA9IGRvTm90UmVzZXQgfHwge307XG4gICAgICAgIHZhciBhY3RpdmVTZXF1ZW5jZXMgPSBmYWxzZSwga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBfc2VxdWVuY2VMZXZlbHMpIHtcbiAgICAgICAgICBpZiAoZG9Ob3RSZXNldFtrZXldKSB7XG4gICAgICAgICAgICBhY3RpdmVTZXF1ZW5jZXMgPSB0cnVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9zZXF1ZW5jZUxldmVsc1trZXldID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFjdGl2ZVNlcXVlbmNlcykge1xuICAgICAgICAgIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX2dldE1hdGNoZXMoY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUsIHNlcXVlbmNlTmFtZSwgY29tYmluYXRpb24sIGxldmVsKSB7XG4gICAgICAgIHZhciBpMjtcbiAgICAgICAgdmFyIGNhbGxiYWNrO1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgICAgICB2YXIgYWN0aW9uID0gZS50eXBlO1xuICAgICAgICBpZiAoIXNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb24gPT0gXCJrZXl1cFwiICYmIF9pc01vZGlmaWVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICBtb2RpZmllcnMgPSBbY2hhcmFjdGVyXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkyID0gMDsgaTIgPCBzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXS5sZW5ndGg7ICsraTIpIHtcbiAgICAgICAgICBjYWxsYmFjayA9IHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdW2kyXTtcbiAgICAgICAgICBpZiAoIXNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5zZXEgJiYgX3NlcXVlbmNlTGV2ZWxzW2NhbGxiYWNrLnNlcV0gIT0gY2FsbGJhY2subGV2ZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYWN0aW9uICE9IGNhbGxiYWNrLmFjdGlvbikge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb24gPT0gXCJrZXlwcmVzc1wiICYmICFlLm1ldGFLZXkgJiYgIWUuY3RybEtleSB8fCBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzLCBjYWxsYmFjay5tb2RpZmllcnMpKSB7XG4gICAgICAgICAgICB2YXIgZGVsZXRlQ29tYm8gPSAhc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLmNvbWJvID09IGNvbWJpbmF0aW9uO1xuICAgICAgICAgICAgdmFyIGRlbGV0ZVNlcXVlbmNlID0gc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLnNlcSA9PSBzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2subGV2ZWwgPT0gbGV2ZWw7XG4gICAgICAgICAgICBpZiAoZGVsZXRlQ29tYm8gfHwgZGVsZXRlU2VxdWVuY2UpIHtcbiAgICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0uc3BsaWNlKGkyLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX2ZpcmVDYWxsYmFjayhjYWxsYmFjaywgZSwgY29tYm8sIHNlcXVlbmNlKSB7XG4gICAgICAgIGlmIChzZWxmLnN0b3BDYWxsYmFjayhlLCBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQsIGNvbWJvLCBzZXF1ZW5jZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKGUsIGNvbWJvKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBfcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgICAgX3N0b3BQcm9wYWdhdGlvbihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZi5faGFuZGxlS2V5ID0gZnVuY3Rpb24oY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IF9nZXRNYXRjaGVzKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlKTtcbiAgICAgICAgdmFyIGkyO1xuICAgICAgICB2YXIgZG9Ob3RSZXNldCA9IHt9O1xuICAgICAgICB2YXIgbWF4TGV2ZWwgPSAwO1xuICAgICAgICB2YXIgcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICBmb3IgKGkyID0gMDsgaTIgPCBjYWxsYmFja3MubGVuZ3RoOyArK2kyKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrc1tpMl0uc2VxKSB7XG4gICAgICAgICAgICBtYXhMZXZlbCA9IE1hdGgubWF4KG1heExldmVsLCBjYWxsYmFja3NbaTJdLmxldmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpMiA9IDA7IGkyIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpMikge1xuICAgICAgICAgIGlmIChjYWxsYmFja3NbaTJdLnNlcSkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpMl0ubGV2ZWwgIT0gbWF4TGV2ZWwpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvTm90UmVzZXRbY2FsbGJhY2tzW2kyXS5zZXFdID0gMTtcbiAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2tzW2kyXS5jYWxsYmFjaywgZSwgY2FsbGJhY2tzW2kyXS5jb21ibywgY2FsbGJhY2tzW2kyXS5zZXEpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjaykge1xuICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaTJdLmNhbGxiYWNrLCBlLCBjYWxsYmFja3NbaTJdLmNvbWJvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlnbm9yZVRoaXNLZXlwcmVzcyA9IGUudHlwZSA9PSBcImtleXByZXNzXCIgJiYgX2lnbm9yZU5leHRLZXlwcmVzcztcbiAgICAgICAgaWYgKGUudHlwZSA9PSBfbmV4dEV4cGVjdGVkQWN0aW9uICYmICFfaXNNb2RpZmllcihjaGFyYWN0ZXIpICYmICFpZ25vcmVUaGlzS2V5cHJlc3MpIHtcbiAgICAgICAgICBfcmVzZXRTZXF1ZW5jZXMoZG9Ob3RSZXNldCk7XG4gICAgICAgIH1cbiAgICAgICAgX2lnbm9yZU5leHRLZXlwcmVzcyA9IHByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2sgJiYgZS50eXBlID09IFwia2V5ZG93blwiO1xuICAgICAgfTtcbiAgICAgIGZ1bmN0aW9uIF9oYW5kbGVLZXlFdmVudChlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZS53aGljaCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGUud2hpY2ggPSBlLmtleUNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoYXJhY3RlciA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG4gICAgICAgIGlmICghY2hhcmFjdGVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnR5cGUgPT0gXCJrZXl1cFwiICYmIF9pZ25vcmVOZXh0S2V5dXAgPT09IGNoYXJhY3Rlcikge1xuICAgICAgICAgIF9pZ25vcmVOZXh0S2V5dXAgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5oYW5kbGVLZXkoY2hhcmFjdGVyLCBfZXZlbnRNb2RpZmllcnMoZSksIGUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VUaW1lcigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF9yZXNldFRpbWVyKTtcbiAgICAgICAgX3Jlc2V0VGltZXIgPSBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMWUzKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF9iaW5kU2VxdWVuY2UoY29tYm8sIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgICAgX3NlcXVlbmNlTGV2ZWxzW2NvbWJvXSA9IDA7XG4gICAgICAgIGZ1bmN0aW9uIF9pbmNyZWFzZVNlcXVlbmNlKG5leHRBY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfbmV4dEV4cGVjdGVkQWN0aW9uID0gbmV4dEFjdGlvbjtcbiAgICAgICAgICAgICsrX3NlcXVlbmNlTGV2ZWxzW2NvbWJvXTtcbiAgICAgICAgICAgIF9yZXNldFNlcXVlbmNlVGltZXIoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9jYWxsYmFja0FuZFJlc2V0KGUpIHtcbiAgICAgICAgICBfZmlyZUNhbGxiYWNrKGNhbGxiYWNrLCBlLCBjb21ibyk7XG4gICAgICAgICAgaWYgKGFjdGlvbiAhPT0gXCJrZXl1cFwiKSB7XG4gICAgICAgICAgICBfaWdub3JlTmV4dEtleXVwID0gX2NoYXJhY3RlckZyb21FdmVudChlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0VGltZW91dChfcmVzZXRTZXF1ZW5jZXMsIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpMiA9IDA7IGkyIDwga2V5cy5sZW5ndGg7ICsraTIpIHtcbiAgICAgICAgICB2YXIgaXNGaW5hbCA9IGkyICsgMSA9PT0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgdmFyIHdyYXBwZWRDYWxsYmFjayA9IGlzRmluYWwgPyBfY2FsbGJhY2tBbmRSZXNldCA6IF9pbmNyZWFzZVNlcXVlbmNlKGFjdGlvbiB8fCBfZ2V0S2V5SW5mbyhrZXlzW2kyICsgMV0pLmFjdGlvbik7XG4gICAgICAgICAgX2JpbmRTaW5nbGUoa2V5c1tpMl0sIHdyYXBwZWRDYWxsYmFjaywgYWN0aW9uLCBjb21ibywgaTIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfYmluZFNpbmdsZShjb21iaW5hdGlvbiwgY2FsbGJhY2ssIGFjdGlvbiwgc2VxdWVuY2VOYW1lLCBsZXZlbCkge1xuICAgICAgICBzZWxmLl9kaXJlY3RNYXBbY29tYmluYXRpb24gKyBcIjpcIiArIGFjdGlvbl0gPSBjYWxsYmFjaztcbiAgICAgICAgY29tYmluYXRpb24gPSBjb21iaW5hdGlvbi5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKTtcbiAgICAgICAgdmFyIHNlcXVlbmNlID0gY29tYmluYXRpb24uc3BsaXQoXCIgXCIpO1xuICAgICAgICB2YXIgaW5mbztcbiAgICAgICAgaWYgKHNlcXVlbmNlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBfYmluZFNlcXVlbmNlKGNvbWJpbmF0aW9uLCBzZXF1ZW5jZSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluZm8gPSBfZ2V0S2V5SW5mbyhjb21iaW5hdGlvbiwgYWN0aW9uKTtcbiAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XSA9IHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV0gfHwgW107XG4gICAgICAgIF9nZXRNYXRjaGVzKGluZm8ua2V5LCBpbmZvLm1vZGlmaWVycywge3R5cGU6IGluZm8uYWN0aW9ufSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpO1xuICAgICAgICBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldW3NlcXVlbmNlTmFtZSA/IFwidW5zaGlmdFwiIDogXCJwdXNoXCJdKHtcbiAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICBtb2RpZmllcnM6IGluZm8ubW9kaWZpZXJzLFxuICAgICAgICAgIGFjdGlvbjogaW5mby5hY3Rpb24sXG4gICAgICAgICAgc2VxOiBzZXF1ZW5jZU5hbWUsXG4gICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgY29tYm86IGNvbWJpbmF0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgc2VsZi5fYmluZE11bHRpcGxlID0gZnVuY3Rpb24oY29tYmluYXRpb25zLCBjYWxsYmFjaywgYWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBjb21iaW5hdGlvbnMubGVuZ3RoOyArK2kyKSB7XG4gICAgICAgICAgX2JpbmRTaW5nbGUoY29tYmluYXRpb25zW2kyXSwgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBfYWRkRXZlbnQodGFyZ2V0RWxlbWVudCwgXCJrZXlwcmVzc1wiLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsIFwia2V5ZG93blwiLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsIFwia2V5dXBcIiwgX2hhbmRsZUtleUV2ZW50KTtcbiAgICB9XG4gICAgTW91c2V0cmFwMy5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGtleXMgPSBrZXlzIGluc3RhbmNlb2YgQXJyYXkgPyBrZXlzIDogW2tleXNdO1xuICAgICAgc2VsZi5fYmluZE11bHRpcGxlLmNhbGwoc2VsZiwga2V5cywgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIE1vdXNldHJhcDMucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgcmV0dXJuIHNlbGYuYmluZC5jYWxsKHNlbGYsIGtleXMsIGZ1bmN0aW9uKCkge1xuICAgICAgfSwgYWN0aW9uKTtcbiAgICB9O1xuICAgIE1vdXNldHJhcDMucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihrZXlzLCBhY3Rpb24pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGlmIChzZWxmLl9kaXJlY3RNYXBba2V5cyArIFwiOlwiICsgYWN0aW9uXSkge1xuICAgICAgICBzZWxmLl9kaXJlY3RNYXBba2V5cyArIFwiOlwiICsgYWN0aW9uXSh7fSwga2V5cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIE1vdXNldHJhcDMucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgIHNlbGYuX2RpcmVjdE1hcCA9IHt9O1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgICBNb3VzZXRyYXAzLnByb3RvdHlwZS5zdG9wQ2FsbGJhY2sgPSBmdW5jdGlvbihlLCBlbGVtZW50KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBpZiAoKFwiIFwiICsgZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIikuaW5kZXhPZihcIiBtb3VzZXRyYXAgXCIpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKF9iZWxvbmdzVG8oZWxlbWVudCwgc2VsZi50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChcImNvbXBvc2VkUGF0aFwiIGluIGUgJiYgdHlwZW9mIGUuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmFyIGluaXRpYWxFdmVudFRhcmdldCA9IGUuY29tcG9zZWRQYXRoKClbMF07XG4gICAgICAgIGlmIChpbml0aWFsRXZlbnRUYXJnZXQgIT09IGUudGFyZ2V0KSB7XG4gICAgICAgICAgZWxlbWVudCA9IGluaXRpYWxFdmVudFRhcmdldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVsZW1lbnQudGFnTmFtZSA9PSBcIklOUFVUXCIgfHwgZWxlbWVudC50YWdOYW1lID09IFwiU0VMRUNUXCIgfHwgZWxlbWVudC50YWdOYW1lID09IFwiVEVYVEFSRUFcIiB8fCBlbGVtZW50LmlzQ29udGVudEVkaXRhYmxlO1xuICAgIH07XG4gICAgTW91c2V0cmFwMy5wcm90b3R5cGUuaGFuZGxlS2V5ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICByZXR1cm4gc2VsZi5faGFuZGxlS2V5LmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICBNb3VzZXRyYXAzLmFkZEtleWNvZGVzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIF9NQVBba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfUkVWRVJTRV9NQVAgPSBudWxsO1xuICAgIH07XG4gICAgTW91c2V0cmFwMy5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZG9jdW1lbnRNb3VzZXRyYXAgPSBNb3VzZXRyYXAzKGRvY3VtZW50Mik7XG4gICAgICBmb3IgKHZhciBtZXRob2QgaW4gZG9jdW1lbnRNb3VzZXRyYXApIHtcbiAgICAgICAgaWYgKG1ldGhvZC5jaGFyQXQoMCkgIT09IFwiX1wiKSB7XG4gICAgICAgICAgTW91c2V0cmFwM1ttZXRob2RdID0gZnVuY3Rpb24obWV0aG9kMikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRNb3VzZXRyYXBbbWV0aG9kMl0uYXBwbHkoZG9jdW1lbnRNb3VzZXRyYXAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0obWV0aG9kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgTW91c2V0cmFwMy5pbml0KCk7XG4gICAgd2luZG93Mi5Nb3VzZXRyYXAgPSBNb3VzZXRyYXAzO1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IE1vdXNldHJhcDM7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTW91c2V0cmFwMztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSkodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IG51bGwsIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xufSk7XG5cbi8vIHNyYy9pbmRleC5qc1xudmFyIGltcG9ydF9tb3VzZXRyYXAgPSBfX3RvTW9kdWxlKHJlcXVpcmVfbW91c2V0cmFwKCkpO1xuXG4vLyBub2RlX21vZHVsZXMvbW91c2V0cmFwL3BsdWdpbnMvZ2xvYmFsLWJpbmQvbW91c2V0cmFwLWdsb2JhbC1iaW5kLmpzXG4oZnVuY3Rpb24oTW91c2V0cmFwMykge1xuICBpZiAoIU1vdXNldHJhcDMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIF9nbG9iYWxDYWxsYmFja3MgPSB7fTtcbiAgdmFyIF9vcmlnaW5hbFN0b3BDYWxsYmFjayA9IE1vdXNldHJhcDMucHJvdG90eXBlLnN0b3BDYWxsYmFjaztcbiAgTW91c2V0cmFwMy5wcm90b3R5cGUuc3RvcENhbGxiYWNrID0gZnVuY3Rpb24oZSwgZWxlbWVudCwgY29tYm8sIHNlcXVlbmNlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLnBhdXNlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChfZ2xvYmFsQ2FsbGJhY2tzW2NvbWJvXSB8fCBfZ2xvYmFsQ2FsbGJhY2tzW3NlcXVlbmNlXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gX29yaWdpbmFsU3RvcENhbGxiYWNrLmNhbGwoc2VsZiwgZSwgZWxlbWVudCwgY29tYm8pO1xuICB9O1xuICBNb3VzZXRyYXAzLnByb3RvdHlwZS5iaW5kR2xvYmFsID0gZnVuY3Rpb24oa2V5cywgY2FsbGJhY2ssIGFjdGlvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLmJpbmQoa2V5cywgY2FsbGJhY2ssIGFjdGlvbik7XG4gICAgaWYgKGtleXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9nbG9iYWxDYWxsYmFja3Nba2V5c1tpXV0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfZ2xvYmFsQ2FsbGJhY2tzW2tleXNdID0gdHJ1ZTtcbiAgfTtcbiAgTW91c2V0cmFwMy5pbml0KCk7XG59KSh0eXBlb2YgTW91c2V0cmFwICE9PSBcInVuZGVmaW5lZFwiID8gTW91c2V0cmFwIDogdm9pZCAwKTtcblxuLy8gc3JjL2luZGV4LmpzXG52YXIgc3JjX2RlZmF1bHQgPSAoQWxwaW5lKSA9PiB7XG4gIEFscGluZS5kaXJlY3RpdmUoXCJtb3VzZXRyYXBcIiwgKGVsLCB7bW9kaWZpZXJzLCBleHByZXNzaW9ufSwge2V2YWx1YXRlfSkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbiA9ICgpID0+IGV4cHJlc3Npb24gPyBldmFsdWF0ZShleHByZXNzaW9uKSA6IGVsLmNsaWNrKCk7XG4gICAgbW9kaWZpZXJzID0gbW9kaWZpZXJzLm1hcCgobW9kaWZpZXIpID0+IG1vZGlmaWVyLnJlcGxhY2UoLy0vZywgXCIrXCIpKTtcbiAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZ2xvYmFsXCIpKSB7XG4gICAgICBtb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKChtb2RpZmllcikgPT4gbW9kaWZpZXIgIT09IFwiZ2xvYmFsXCIpO1xuICAgICAgaW1wb3J0X21vdXNldHJhcC5kZWZhdWx0LmJpbmRHbG9iYWwobW9kaWZpZXJzLCAoJGV2ZW50KSA9PiB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhY3Rpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpbXBvcnRfbW91c2V0cmFwLmRlZmF1bHQuYmluZChtb2RpZmllcnMsICgkZXZlbnQpID0+IHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWN0aW9uKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gYnVpbGRzL21vZHVsZS5qc1xudmFyIG1vZHVsZV9kZWZhdWx0ID0gc3JjX2RlZmF1bHQ7XG5leHBvcnQge1xuICBtb2R1bGVfZGVmYXVsdCBhcyBkZWZhdWx0XG59O1xuIiwgIi8vIG5vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5tanNcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciByb3VuZCA9IE1hdGgucm91bmQ7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIGNyZWF0ZUNvb3JkcyA9ICh2KSA9PiAoe1xuICB4OiB2LFxuICB5OiB2XG59KTtcbnZhciBvcHBvc2l0ZVNpZGVNYXAgPSB7XG4gIGxlZnQ6IFwicmlnaHRcIixcbiAgcmlnaHQ6IFwibGVmdFwiLFxuICBib3R0b206IFwidG9wXCIsXG4gIHRvcDogXCJib3R0b21cIlxufTtcbnZhciBvcHBvc2l0ZUFsaWdubWVudE1hcCA9IHtcbiAgc3RhcnQ6IFwiZW5kXCIsXG4gIGVuZDogXCJzdGFydFwiXG59O1xuZnVuY3Rpb24gY2xhbXAoc3RhcnQsIHZhbHVlLCBlbmQpIHtcbiAgcmV0dXJuIG1heChzdGFydCwgbWluKHZhbHVlLCBlbmQpKTtcbn1cbmZ1bmN0aW9uIGV2YWx1YXRlKHZhbHVlLCBwYXJhbSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyB2YWx1ZShwYXJhbSkgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldFNpZGUocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoXCItXCIpWzBdO1xufVxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KFwiLVwiKVsxXTtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSBcInhcIiA/IFwieVwiIDogXCJ4XCI7XG59XG5mdW5jdGlvbiBnZXRBeGlzTGVuZ3RoKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09IFwieVwiID8gXCJoZWlnaHRcIiA6IFwid2lkdGhcIjtcbn1cbmZ1bmN0aW9uIGdldFNpZGVBeGlzKHBsYWNlbWVudCkge1xuICByZXR1cm4gW1widG9wXCIsIFwiYm90dG9tXCJdLmluY2x1ZGVzKGdldFNpZGUocGxhY2VtZW50KSkgPyBcInlcIiA6IFwieFwiO1xufVxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50QXhpcyhwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGdldE9wcG9zaXRlQXhpcyhnZXRTaWRlQXhpcyhwbGFjZW1lbnQpKTtcbn1cbmZ1bmN0aW9uIGdldEFsaWdubWVudFNpZGVzKHBsYWNlbWVudCwgcmVjdHMsIHJ0bCkge1xuICBpZiAocnRsID09PSB2b2lkIDApIHtcbiAgICBydGwgPSBmYWxzZTtcbiAgfVxuICBjb25zdCBhbGlnbm1lbnQgPSBnZXRBbGlnbm1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgYWxpZ25tZW50QXhpcyA9IGdldEFsaWdubWVudEF4aXMocGxhY2VtZW50KTtcbiAgY29uc3QgbGVuZ3RoID0gZ2V0QXhpc0xlbmd0aChhbGlnbm1lbnRBeGlzKTtcbiAgbGV0IG1haW5BbGlnbm1lbnRTaWRlID0gYWxpZ25tZW50QXhpcyA9PT0gXCJ4XCIgPyBhbGlnbm1lbnQgPT09IChydGwgPyBcImVuZFwiIDogXCJzdGFydFwiKSA/IFwicmlnaHRcIiA6IFwibGVmdFwiIDogYWxpZ25tZW50ID09PSBcInN0YXJ0XCIgPyBcImJvdHRvbVwiIDogXCJ0b3BcIjtcbiAgaWYgKHJlY3RzLnJlZmVyZW5jZVtsZW5ndGhdID4gcmVjdHMuZmxvYXRpbmdbbGVuZ3RoXSkge1xuICAgIG1haW5BbGlnbm1lbnRTaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpbkFsaWdubWVudFNpZGUpO1xuICB9XG4gIHJldHVybiBbbWFpbkFsaWdubWVudFNpZGUsIGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5BbGlnbm1lbnRTaWRlKV07XG59XG5mdW5jdGlvbiBnZXRFeHBhbmRlZFBsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGNvbnN0IG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCAoYWxpZ25tZW50KSA9PiBvcHBvc2l0ZUFsaWdubWVudE1hcFthbGlnbm1lbnRdKTtcbn1cbmZ1bmN0aW9uIGdldFNpZGVMaXN0KHNpZGUsIGlzU3RhcnQsIHJ0bCkge1xuICBjb25zdCBsciA9IFtcImxlZnRcIiwgXCJyaWdodFwiXTtcbiAgY29uc3QgcmwgPSBbXCJyaWdodFwiLCBcImxlZnRcIl07XG4gIGNvbnN0IHRiID0gW1widG9wXCIsIFwiYm90dG9tXCJdO1xuICBjb25zdCBidCA9IFtcImJvdHRvbVwiLCBcInRvcFwiXTtcbiAgc3dpdGNoIChzaWRlKSB7XG4gICAgY2FzZSBcInRvcFwiOlxuICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgIGlmIChydGwpXG4gICAgICAgIHJldHVybiBpc1N0YXJ0ID8gcmwgOiBscjtcbiAgICAgIHJldHVybiBpc1N0YXJ0ID8gbHIgOiBybDtcbiAgICBjYXNlIFwibGVmdFwiOlxuICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgcmV0dXJuIGlzU3RhcnQgPyB0YiA6IGJ0O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW107XG4gIH1cbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQXhpc1BsYWNlbWVudHMocGxhY2VtZW50LCBmbGlwQWxpZ25tZW50LCBkaXJlY3Rpb24sIHJ0bCkge1xuICBjb25zdCBhbGlnbm1lbnQgPSBnZXRBbGlnbm1lbnQocGxhY2VtZW50KTtcbiAgbGV0IGxpc3QgPSBnZXRTaWRlTGlzdChnZXRTaWRlKHBsYWNlbWVudCksIGRpcmVjdGlvbiA9PT0gXCJzdGFydFwiLCBydGwpO1xuICBpZiAoYWxpZ25tZW50KSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKChzaWRlKSA9PiBzaWRlICsgXCItXCIgKyBhbGlnbm1lbnQpO1xuICAgIGlmIChmbGlwQWxpZ25tZW50KSB7XG4gICAgICBsaXN0ID0gbGlzdC5jb25jYXQobGlzdC5tYXAoZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgKHNpZGUpID0+IG9wcG9zaXRlU2lkZU1hcFtzaWRlXSk7XG59XG5mdW5jdGlvbiBleHBhbmRQYWRkaW5nT2JqZWN0KHBhZGRpbmcpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgLi4ucGFkZGluZ1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0UGFkZGluZ09iamVjdChwYWRkaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgcGFkZGluZyAhPT0gXCJudW1iZXJcIiA/IGV4cGFuZFBhZGRpbmdPYmplY3QocGFkZGluZykgOiB7XG4gICAgdG9wOiBwYWRkaW5nLFxuICAgIHJpZ2h0OiBwYWRkaW5nLFxuICAgIGJvdHRvbTogcGFkZGluZyxcbiAgICBsZWZ0OiBwYWRkaW5nXG4gIH07XG59XG5mdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5yZWN0LFxuICAgIHRvcDogcmVjdC55LFxuICAgIGxlZnQ6IHJlY3QueCxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbi8vIG5vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvY29yZS9kaXN0L2Zsb2F0aW5nLXVpLmNvcmUubWpzXG5mdW5jdGlvbiBjb21wdXRlQ29vcmRzRnJvbVBsYWNlbWVudChfcmVmLCBwbGFjZW1lbnQsIHJ0bCkge1xuICBsZXQge1xuICAgIHJlZmVyZW5jZSxcbiAgICBmbG9hdGluZ1xuICB9ID0gX3JlZjtcbiAgY29uc3Qgc2lkZUF4aXMgPSBnZXRTaWRlQXhpcyhwbGFjZW1lbnQpO1xuICBjb25zdCBhbGlnbm1lbnRBeGlzID0gZ2V0QWxpZ25tZW50QXhpcyhwbGFjZW1lbnQpO1xuICBjb25zdCBhbGlnbkxlbmd0aCA9IGdldEF4aXNMZW5ndGgoYWxpZ25tZW50QXhpcyk7XG4gIGNvbnN0IHNpZGUgPSBnZXRTaWRlKHBsYWNlbWVudCk7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBzaWRlQXhpcyA9PT0gXCJ5XCI7XG4gIGNvbnN0IGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBmbG9hdGluZy53aWR0aCAvIDI7XG4gIGNvbnN0IGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZmxvYXRpbmcuaGVpZ2h0IC8gMjtcbiAgY29uc3QgY29tbW9uQWxpZ24gPSByZWZlcmVuY2VbYWxpZ25MZW5ndGhdIC8gMiAtIGZsb2F0aW5nW2FsaWduTGVuZ3RoXSAvIDI7XG4gIGxldCBjb29yZHM7XG4gIHN3aXRjaCAoc2lkZSkge1xuICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBmbG9hdGluZy5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgY29vcmRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZmxvYXRpbmcud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29vcmRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cbiAgc3dpdGNoIChnZXRBbGlnbm1lbnQocGxhY2VtZW50KSkge1xuICAgIGNhc2UgXCJzdGFydFwiOlxuICAgICAgY29vcmRzW2FsaWdubWVudEF4aXNdIC09IGNvbW1vbkFsaWduICogKHJ0bCAmJiBpc1ZlcnRpY2FsID8gLTEgOiAxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgIGNvb3Jkc1thbGlnbm1lbnRBeGlzXSArPSBjb21tb25BbGlnbiAqIChydGwgJiYgaXNWZXJ0aWNhbCA/IC0xIDogMSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxudmFyIGNvbXB1dGVQb3NpdGlvbiA9IGFzeW5jIChyZWZlcmVuY2UsIGZsb2F0aW5nLCBjb25maWcpID0+IHtcbiAgY29uc3Qge1xuICAgIHBsYWNlbWVudCA9IFwiYm90dG9tXCIsXG4gICAgc3RyYXRlZ3kgPSBcImFic29sdXRlXCIsXG4gICAgbWlkZGxld2FyZSA9IFtdLFxuICAgIHBsYXRmb3JtOiBwbGF0Zm9ybTJcbiAgfSA9IGNvbmZpZztcbiAgY29uc3QgdmFsaWRNaWRkbGV3YXJlID0gbWlkZGxld2FyZS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IHJ0bCA9IGF3YWl0IChwbGF0Zm9ybTIuaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtMi5pc1JUTChmbG9hdGluZykpO1xuICBsZXQgcmVjdHMgPSBhd2FpdCBwbGF0Zm9ybTIuZ2V0RWxlbWVudFJlY3RzKHtcbiAgICByZWZlcmVuY2UsXG4gICAgZmxvYXRpbmcsXG4gICAgc3RyYXRlZ3lcbiAgfSk7XG4gIGxldCB7XG4gICAgeCxcbiAgICB5XG4gIH0gPSBjb21wdXRlQ29vcmRzRnJvbVBsYWNlbWVudChyZWN0cywgcGxhY2VtZW50LCBydGwpO1xuICBsZXQgc3RhdGVmdWxQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gIGxldCBtaWRkbGV3YXJlRGF0YSA9IHt9O1xuICBsZXQgcmVzZXRDb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRNaWRkbGV3YXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIGZuXG4gICAgfSA9IHZhbGlkTWlkZGxld2FyZVtpXTtcbiAgICBjb25zdCB7XG4gICAgICB4OiBuZXh0WCxcbiAgICAgIHk6IG5leHRZLFxuICAgICAgZGF0YSxcbiAgICAgIHJlc2V0XG4gICAgfSA9IGF3YWl0IGZuKHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgaW5pdGlhbFBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50OiBzdGF0ZWZ1bFBsYWNlbWVudCxcbiAgICAgIHN0cmF0ZWd5LFxuICAgICAgbWlkZGxld2FyZURhdGEsXG4gICAgICByZWN0cyxcbiAgICAgIHBsYXRmb3JtOiBwbGF0Zm9ybTIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgIGZsb2F0aW5nXG4gICAgICB9XG4gICAgfSk7XG4gICAgeCA9IG5leHRYICE9IG51bGwgPyBuZXh0WCA6IHg7XG4gICAgeSA9IG5leHRZICE9IG51bGwgPyBuZXh0WSA6IHk7XG4gICAgbWlkZGxld2FyZURhdGEgPSB7XG4gICAgICAuLi5taWRkbGV3YXJlRGF0YSxcbiAgICAgIFtuYW1lXToge1xuICAgICAgICAuLi5taWRkbGV3YXJlRGF0YVtuYW1lXSxcbiAgICAgICAgLi4uZGF0YVxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHJlc2V0ICYmIHJlc2V0Q291bnQgPD0gNTApIHtcbiAgICAgIHJlc2V0Q291bnQrKztcbiAgICAgIGlmICh0eXBlb2YgcmVzZXQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKHJlc2V0LnBsYWNlbWVudCkge1xuICAgICAgICAgIHN0YXRlZnVsUGxhY2VtZW50ID0gcmVzZXQucGxhY2VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNldC5yZWN0cykge1xuICAgICAgICAgIHJlY3RzID0gcmVzZXQucmVjdHMgPT09IHRydWUgPyBhd2FpdCBwbGF0Zm9ybTIuZ2V0RWxlbWVudFJlY3RzKHtcbiAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgIGZsb2F0aW5nLFxuICAgICAgICAgICAgc3RyYXRlZ3lcbiAgICAgICAgICB9KSA6IHJlc2V0LnJlY3RzO1xuICAgICAgICB9XG4gICAgICAgICh7XG4gICAgICAgICAgeCxcbiAgICAgICAgICB5XG4gICAgICAgIH0gPSBjb21wdXRlQ29vcmRzRnJvbVBsYWNlbWVudChyZWN0cywgc3RhdGVmdWxQbGFjZW1lbnQsIHJ0bCkpO1xuICAgICAgfVxuICAgICAgaSA9IC0xO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgeCxcbiAgICB5LFxuICAgIHBsYWNlbWVudDogc3RhdGVmdWxQbGFjZW1lbnQsXG4gICAgc3RyYXRlZ3ksXG4gICAgbWlkZGxld2FyZURhdGFcbiAgfTtcbn07XG5hc3luYyBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX2F3YWl0JHBsYXRmb3JtJGlzRWxlO1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGNvbnN0IHtcbiAgICB4LFxuICAgIHksXG4gICAgcGxhdGZvcm06IHBsYXRmb3JtMixcbiAgICByZWN0cyxcbiAgICBlbGVtZW50cyxcbiAgICBzdHJhdGVneVxuICB9ID0gc3RhdGU7XG4gIGNvbnN0IHtcbiAgICBib3VuZGFyeSA9IFwiY2xpcHBpbmdBbmNlc3RvcnNcIixcbiAgICByb290Qm91bmRhcnkgPSBcInZpZXdwb3J0XCIsXG4gICAgZWxlbWVudENvbnRleHQgPSBcImZsb2F0aW5nXCIsXG4gICAgYWx0Qm91bmRhcnkgPSBmYWxzZSxcbiAgICBwYWRkaW5nID0gMFxuICB9ID0gZXZhbHVhdGUob3B0aW9ucywgc3RhdGUpO1xuICBjb25zdCBwYWRkaW5nT2JqZWN0ID0gZ2V0UGFkZGluZ09iamVjdChwYWRkaW5nKTtcbiAgY29uc3QgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBcImZsb2F0aW5nXCIgPyBcInJlZmVyZW5jZVwiIDogXCJmbG9hdGluZ1wiO1xuICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICBjb25zdCBjbGlwcGluZ0NsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KGF3YWl0IHBsYXRmb3JtMi5nZXRDbGlwcGluZ1JlY3Qoe1xuICAgIGVsZW1lbnQ6ICgoX2F3YWl0JHBsYXRmb3JtJGlzRWxlID0gYXdhaXQgKHBsYXRmb3JtMi5pc0VsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtMi5pc0VsZW1lbnQoZWxlbWVudCkpKSAhPSBudWxsID8gX2F3YWl0JHBsYXRmb3JtJGlzRWxlIDogdHJ1ZSkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBhd2FpdCAocGxhdGZvcm0yLmdldERvY3VtZW50RWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0yLmdldERvY3VtZW50RWxlbWVudChlbGVtZW50cy5mbG9hdGluZykpLFxuICAgIGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeSxcbiAgICBzdHJhdGVneVxuICB9KSk7XG4gIGNvbnN0IHJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gXCJmbG9hdGluZ1wiID8ge1xuICAgIC4uLnJlY3RzLmZsb2F0aW5nLFxuICAgIHgsXG4gICAgeVxuICB9IDogcmVjdHMucmVmZXJlbmNlO1xuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBhd2FpdCAocGxhdGZvcm0yLmdldE9mZnNldFBhcmVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0yLmdldE9mZnNldFBhcmVudChlbGVtZW50cy5mbG9hdGluZykpO1xuICBjb25zdCBvZmZzZXRTY2FsZSA9IGF3YWl0IChwbGF0Zm9ybTIuaXNFbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybTIuaXNFbGVtZW50KG9mZnNldFBhcmVudCkpID8gYXdhaXQgKHBsYXRmb3JtMi5nZXRTY2FsZSA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0yLmdldFNjYWxlKG9mZnNldFBhcmVudCkpIHx8IHtcbiAgICB4OiAxLFxuICAgIHk6IDFcbiAgfSA6IHtcbiAgICB4OiAxLFxuICAgIHk6IDFcbiAgfTtcbiAgY29uc3QgZWxlbWVudENsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KHBsYXRmb3JtMi5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCA/IGF3YWl0IHBsYXRmb3JtMi5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCh7XG4gICAgcmVjdCxcbiAgICBvZmZzZXRQYXJlbnQsXG4gICAgc3RyYXRlZ3lcbiAgfSkgOiByZWN0KTtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IChjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3ApIC8gb2Zmc2V0U2NhbGUueSxcbiAgICBib3R0b206IChlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20pIC8gb2Zmc2V0U2NhbGUueSxcbiAgICBsZWZ0OiAoY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0KSAvIG9mZnNldFNjYWxlLngsXG4gICAgcmlnaHQ6IChlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHQpIC8gb2Zmc2V0U2NhbGUueFxuICB9O1xufVxudmFyIGZsaXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcImZsaXBcIixcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICB2YXIgX21pZGRsZXdhcmVEYXRhJGFycm93LCBfbWlkZGxld2FyZURhdGEkZmxpcDtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBtaWRkbGV3YXJlRGF0YSxcbiAgICAgICAgcmVjdHMsXG4gICAgICAgIGluaXRpYWxQbGFjZW1lbnQsXG4gICAgICAgIHBsYXRmb3JtOiBwbGF0Zm9ybTIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1haW5BeGlzOiBjaGVja01haW5BeGlzID0gdHJ1ZSxcbiAgICAgICAgY3Jvc3NBeGlzOiBjaGVja0Nyb3NzQXhpcyA9IHRydWUsXG4gICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgICBmYWxsYmFja1N0cmF0ZWd5ID0gXCJiZXN0Rml0XCIsXG4gICAgICAgIGZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb24gPSBcIm5vbmVcIixcbiAgICAgICAgZmxpcEFsaWdubWVudCA9IHRydWUsXG4gICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9uc1xuICAgICAgfSA9IGV2YWx1YXRlKG9wdGlvbnMsIHN0YXRlKTtcbiAgICAgIGlmICgoX21pZGRsZXdhcmVEYXRhJGFycm93ID0gbWlkZGxld2FyZURhdGEuYXJyb3cpICE9IG51bGwgJiYgX21pZGRsZXdhcmVEYXRhJGFycm93LmFsaWdubWVudE9mZnNldCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgICBjb25zdCBzaWRlID0gZ2V0U2lkZShwbGFjZW1lbnQpO1xuICAgICAgY29uc3QgaXNCYXNlUGxhY2VtZW50ID0gZ2V0U2lkZShpbml0aWFsUGxhY2VtZW50KSA9PT0gaW5pdGlhbFBsYWNlbWVudDtcbiAgICAgIGNvbnN0IHJ0bCA9IGF3YWl0IChwbGF0Zm9ybTIuaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtMi5pc1JUTChlbGVtZW50cy5mbG9hdGluZykpO1xuICAgICAgY29uc3QgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBBbGlnbm1lbnQgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQoaW5pdGlhbFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRQbGFjZW1lbnRzKGluaXRpYWxQbGFjZW1lbnQpKTtcbiAgICAgIGlmICghc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzICYmIGZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb24gIT09IFwibm9uZVwiKSB7XG4gICAgICAgIGZhbGxiYWNrUGxhY2VtZW50cy5wdXNoKC4uLmdldE9wcG9zaXRlQXhpc1BsYWNlbWVudHMoaW5pdGlhbFBsYWNlbWVudCwgZmxpcEFsaWdubWVudCwgZmFsbGJhY2tBeGlzU2lkZURpcmVjdGlvbiwgcnRsKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBwbGFjZW1lbnRzMiA9IFtpbml0aWFsUGxhY2VtZW50LCAuLi5mYWxsYmFja1BsYWNlbWVudHNdO1xuICAgICAgY29uc3Qgb3ZlcmZsb3cgPSBhd2FpdCBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgZGV0ZWN0T3ZlcmZsb3dPcHRpb25zKTtcbiAgICAgIGNvbnN0IG92ZXJmbG93cyA9IFtdO1xuICAgICAgbGV0IG92ZXJmbG93c0RhdGEgPSAoKF9taWRkbGV3YXJlRGF0YSRmbGlwID0gbWlkZGxld2FyZURhdGEuZmxpcCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9taWRkbGV3YXJlRGF0YSRmbGlwLm92ZXJmbG93cykgfHwgW107XG4gICAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgICBvdmVyZmxvd3MucHVzaChvdmVyZmxvd1tzaWRlXSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hlY2tDcm9zc0F4aXMpIHtcbiAgICAgICAgY29uc3Qgc2lkZXMyID0gZ2V0QWxpZ25tZW50U2lkZXMocGxhY2VtZW50LCByZWN0cywgcnRsKTtcbiAgICAgICAgb3ZlcmZsb3dzLnB1c2gob3ZlcmZsb3dbc2lkZXMyWzBdXSwgb3ZlcmZsb3dbc2lkZXMyWzFdXSk7XG4gICAgICB9XG4gICAgICBvdmVyZmxvd3NEYXRhID0gWy4uLm92ZXJmbG93c0RhdGEsIHtcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBvdmVyZmxvd3NcbiAgICAgIH1dO1xuICAgICAgaWYgKCFvdmVyZmxvd3MuZXZlcnkoKHNpZGUyKSA9PiBzaWRlMiA8PSAwKSkge1xuICAgICAgICB2YXIgX21pZGRsZXdhcmVEYXRhJGZsaXAyLCBfb3ZlcmZsb3dzRGF0YSRmaWx0ZXI7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9ICgoKF9taWRkbGV3YXJlRGF0YSRmbGlwMiA9IG1pZGRsZXdhcmVEYXRhLmZsaXApID09IG51bGwgPyB2b2lkIDAgOiBfbWlkZGxld2FyZURhdGEkZmxpcDIuaW5kZXgpIHx8IDApICsgMTtcbiAgICAgICAgY29uc3QgbmV4dFBsYWNlbWVudCA9IHBsYWNlbWVudHMyW25leHRJbmRleF07XG4gICAgICAgIGlmIChuZXh0UGxhY2VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgaW5kZXg6IG5leHRJbmRleCxcbiAgICAgICAgICAgICAgb3ZlcmZsb3dzOiBvdmVyZmxvd3NEYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzZXQ6IHtcbiAgICAgICAgICAgICAgcGxhY2VtZW50OiBuZXh0UGxhY2VtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzZXRQbGFjZW1lbnQgPSAoX292ZXJmbG93c0RhdGEkZmlsdGVyID0gb3ZlcmZsb3dzRGF0YS5maWx0ZXIoKGQpID0+IGQub3ZlcmZsb3dzWzBdIDw9IDApLnNvcnQoKGEsIGIpID0+IGEub3ZlcmZsb3dzWzFdIC0gYi5vdmVyZmxvd3NbMV0pWzBdKSA9PSBudWxsID8gdm9pZCAwIDogX292ZXJmbG93c0RhdGEkZmlsdGVyLnBsYWNlbWVudDtcbiAgICAgICAgaWYgKCFyZXNldFBsYWNlbWVudCkge1xuICAgICAgICAgIHN3aXRjaCAoZmFsbGJhY2tTdHJhdGVneSkge1xuICAgICAgICAgICAgY2FzZSBcImJlc3RGaXRcIjoge1xuICAgICAgICAgICAgICB2YXIgX292ZXJmbG93c0RhdGEkbWFwJHNvO1xuICAgICAgICAgICAgICBjb25zdCBwbGFjZW1lbnQyID0gKF9vdmVyZmxvd3NEYXRhJG1hcCRzbyA9IG92ZXJmbG93c0RhdGEubWFwKChkKSA9PiBbZC5wbGFjZW1lbnQsIGQub3ZlcmZsb3dzLmZpbHRlcigob3ZlcmZsb3cyKSA9PiBvdmVyZmxvdzIgPiAwKS5yZWR1Y2UoKGFjYywgb3ZlcmZsb3cyKSA9PiBhY2MgKyBvdmVyZmxvdzIsIDApXSkuc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pWzBdKSA9PSBudWxsID8gdm9pZCAwIDogX292ZXJmbG93c0RhdGEkbWFwJHNvWzBdO1xuICAgICAgICAgICAgICBpZiAocGxhY2VtZW50Mikge1xuICAgICAgICAgICAgICAgIHJlc2V0UGxhY2VtZW50ID0gcGxhY2VtZW50MjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJpbml0aWFsUGxhY2VtZW50XCI6XG4gICAgICAgICAgICAgIHJlc2V0UGxhY2VtZW50ID0gaW5pdGlhbFBsYWNlbWVudDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZW1lbnQgIT09IHJlc2V0UGxhY2VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc2V0OiB7XG4gICAgICAgICAgICAgIHBsYWNlbWVudDogcmVzZXRQbGFjZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9O1xufTtcbmFzeW5jIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZVRvQ29vcmRzKHN0YXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBwbGFjZW1lbnQsXG4gICAgcGxhdGZvcm06IHBsYXRmb3JtMixcbiAgICBlbGVtZW50c1xuICB9ID0gc3RhdGU7XG4gIGNvbnN0IHJ0bCA9IGF3YWl0IChwbGF0Zm9ybTIuaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtMi5pc1JUTChlbGVtZW50cy5mbG9hdGluZykpO1xuICBjb25zdCBzaWRlID0gZ2V0U2lkZShwbGFjZW1lbnQpO1xuICBjb25zdCBhbGlnbm1lbnQgPSBnZXRBbGlnbm1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IGdldFNpZGVBeGlzKHBsYWNlbWVudCkgPT09IFwieVwiO1xuICBjb25zdCBtYWluQXhpc011bHRpID0gW1wibGVmdFwiLCBcInRvcFwiXS5pbmNsdWRlcyhzaWRlKSA/IC0xIDogMTtcbiAgY29uc3QgY3Jvc3NBeGlzTXVsdGkgPSBydGwgJiYgaXNWZXJ0aWNhbCA/IC0xIDogMTtcbiAgY29uc3QgcmF3VmFsdWUgPSBldmFsdWF0ZShvcHRpb25zLCBzdGF0ZSk7XG4gIGxldCB7XG4gICAgbWFpbkF4aXMsXG4gICAgY3Jvc3NBeGlzLFxuICAgIGFsaWdubWVudEF4aXNcbiAgfSA9IHR5cGVvZiByYXdWYWx1ZSA9PT0gXCJudW1iZXJcIiA/IHtcbiAgICBtYWluQXhpczogcmF3VmFsdWUsXG4gICAgY3Jvc3NBeGlzOiAwLFxuICAgIGFsaWdubWVudEF4aXM6IG51bGxcbiAgfSA6IHtcbiAgICBtYWluQXhpczogMCxcbiAgICBjcm9zc0F4aXM6IDAsXG4gICAgYWxpZ25tZW50QXhpczogbnVsbCxcbiAgICAuLi5yYXdWYWx1ZVxuICB9O1xuICBpZiAoYWxpZ25tZW50ICYmIHR5cGVvZiBhbGlnbm1lbnRBeGlzID09PSBcIm51bWJlclwiKSB7XG4gICAgY3Jvc3NBeGlzID0gYWxpZ25tZW50ID09PSBcImVuZFwiID8gYWxpZ25tZW50QXhpcyAqIC0xIDogYWxpZ25tZW50QXhpcztcbiAgfVxuICByZXR1cm4gaXNWZXJ0aWNhbCA/IHtcbiAgICB4OiBjcm9zc0F4aXMgKiBjcm9zc0F4aXNNdWx0aSxcbiAgICB5OiBtYWluQXhpcyAqIG1haW5BeGlzTXVsdGlcbiAgfSA6IHtcbiAgICB4OiBtYWluQXhpcyAqIG1haW5BeGlzTXVsdGksXG4gICAgeTogY3Jvc3NBeGlzICogY3Jvc3NBeGlzTXVsdGlcbiAgfTtcbn1cbnZhciBvZmZzZXQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0gMDtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IFwib2Zmc2V0XCIsXG4gICAgb3B0aW9ucyxcbiAgICBhc3luYyBmbihzdGF0ZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCBkaWZmQ29vcmRzID0gYXdhaXQgY29udmVydFZhbHVlVG9Db29yZHMoc3RhdGUsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeCArIGRpZmZDb29yZHMueCxcbiAgICAgICAgeTogeSArIGRpZmZDb29yZHMueSxcbiAgICAgICAgZGF0YTogZGlmZkNvb3Jkc1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xudmFyIHNoaWZ0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJzaGlmdFwiLFxuICAgIG9wdGlvbnMsXG4gICAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgcGxhY2VtZW50XG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1haW5BeGlzOiBjaGVja01haW5BeGlzID0gdHJ1ZSxcbiAgICAgICAgY3Jvc3NBeGlzOiBjaGVja0Nyb3NzQXhpcyA9IGZhbHNlLFxuICAgICAgICBsaW1pdGVyID0ge1xuICAgICAgICAgIGZuOiAoX3JlZikgPT4ge1xuICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgeDogeDIsXG4gICAgICAgICAgICAgIHk6IHkyXG4gICAgICAgICAgICB9ID0gX3JlZjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHg6IHgyLFxuICAgICAgICAgICAgICB5OiB5MlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9uc1xuICAgICAgfSA9IGV2YWx1YXRlKG9wdGlvbnMsIHN0YXRlKTtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IHtcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG92ZXJmbG93ID0gYXdhaXQgZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIGRldGVjdE92ZXJmbG93T3B0aW9ucyk7XG4gICAgICBjb25zdCBjcm9zc0F4aXMgPSBnZXRTaWRlQXhpcyhnZXRTaWRlKHBsYWNlbWVudCkpO1xuICAgICAgY29uc3QgbWFpbkF4aXMgPSBnZXRPcHBvc2l0ZUF4aXMoY3Jvc3NBeGlzKTtcbiAgICAgIGxldCBtYWluQXhpc0Nvb3JkID0gY29vcmRzW21haW5BeGlzXTtcbiAgICAgIGxldCBjcm9zc0F4aXNDb29yZCA9IGNvb3Jkc1tjcm9zc0F4aXNdO1xuICAgICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgICAgY29uc3QgbWluU2lkZSA9IG1haW5BeGlzID09PSBcInlcIiA/IFwidG9wXCIgOiBcImxlZnRcIjtcbiAgICAgICAgY29uc3QgbWF4U2lkZSA9IG1haW5BeGlzID09PSBcInlcIiA/IFwiYm90dG9tXCIgOiBcInJpZ2h0XCI7XG4gICAgICAgIGNvbnN0IG1pbjIgPSBtYWluQXhpc0Nvb3JkICsgb3ZlcmZsb3dbbWluU2lkZV07XG4gICAgICAgIGNvbnN0IG1heDIgPSBtYWluQXhpc0Nvb3JkIC0gb3ZlcmZsb3dbbWF4U2lkZV07XG4gICAgICAgIG1haW5BeGlzQ29vcmQgPSBjbGFtcChtaW4yLCBtYWluQXhpc0Nvb3JkLCBtYXgyKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGVja0Nyb3NzQXhpcykge1xuICAgICAgICBjb25zdCBtaW5TaWRlID0gY3Jvc3NBeGlzID09PSBcInlcIiA/IFwidG9wXCIgOiBcImxlZnRcIjtcbiAgICAgICAgY29uc3QgbWF4U2lkZSA9IGNyb3NzQXhpcyA9PT0gXCJ5XCIgPyBcImJvdHRvbVwiIDogXCJyaWdodFwiO1xuICAgICAgICBjb25zdCBtaW4yID0gY3Jvc3NBeGlzQ29vcmQgKyBvdmVyZmxvd1ttaW5TaWRlXTtcbiAgICAgICAgY29uc3QgbWF4MiA9IGNyb3NzQXhpc0Nvb3JkIC0gb3ZlcmZsb3dbbWF4U2lkZV07XG4gICAgICAgIGNyb3NzQXhpc0Nvb3JkID0gY2xhbXAobWluMiwgY3Jvc3NBeGlzQ29vcmQsIG1heDIpO1xuICAgICAgfVxuICAgICAgY29uc3QgbGltaXRlZENvb3JkcyA9IGxpbWl0ZXIuZm4oe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW21haW5BeGlzXTogbWFpbkF4aXNDb29yZCxcbiAgICAgICAgW2Nyb3NzQXhpc106IGNyb3NzQXhpc0Nvb3JkXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmxpbWl0ZWRDb29yZHMsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB4OiBsaW1pdGVkQ29vcmRzLnggLSB4LFxuICAgICAgICAgIHk6IGxpbWl0ZWRDb29yZHMueSAtIHlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xuXG4vLyBub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3V0aWxzL2RvbS9kaXN0L2Zsb2F0aW5nLXVpLnV0aWxzLmRvbS5tanNcbmZ1bmN0aW9uIGdldE5vZGVOYW1lKG5vZGUpIHtcbiAgaWYgKGlzTm9kZShub2RlKSkge1xuICAgIHJldHVybiAobm9kZS5ub2RlTmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBcIiNkb2N1bWVudFwiO1xufVxuZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgdmFyIF9ub2RlJG93bmVyRG9jdW1lbnQ7XG4gIHJldHVybiAobm9kZSA9PSBudWxsID8gdm9pZCAwIDogKF9ub2RlJG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbm9kZSRvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSB8fCB3aW5kb3c7XG59XG5mdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQobm9kZSkge1xuICB2YXIgX3JlZjtcbiAgcmV0dXJuIChfcmVmID0gKGlzTm9kZShub2RlKSA/IG5vZGUub3duZXJEb2N1bWVudCA6IG5vZGUuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZWYuZG9jdW1lbnRFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNOb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE5vZGUgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLk5vZGU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCB8fCB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLkhUTUxFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNTaGFkb3dSb290KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBTaGFkb3dSb290IHx8IHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5TaGFkb3dSb290O1xufVxuZnVuY3Rpb24gaXNPdmVyZmxvd0VsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCB7XG4gICAgb3ZlcmZsb3csXG4gICAgb3ZlcmZsb3dYLFxuICAgIG92ZXJmbG93WSxcbiAgICBkaXNwbGF5XG4gIH0gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVufGNsaXAvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpICYmICFbXCJpbmxpbmVcIiwgXCJjb250ZW50c1wiXS5pbmNsdWRlcyhkaXNwbGF5KTtcbn1cbmZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFtcInRhYmxlXCIsIFwidGRcIiwgXCJ0aFwiXS5pbmNsdWRlcyhnZXROb2RlTmFtZShlbGVtZW50KSk7XG59XG5mdW5jdGlvbiBpc0NvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIGNvbnN0IHdlYmtpdCA9IGlzV2ViS2l0KCk7XG4gIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHJldHVybiBjc3MudHJhbnNmb3JtICE9PSBcIm5vbmVcIiB8fCBjc3MucGVyc3BlY3RpdmUgIT09IFwibm9uZVwiIHx8IChjc3MuY29udGFpbmVyVHlwZSA/IGNzcy5jb250YWluZXJUeXBlICE9PSBcIm5vcm1hbFwiIDogZmFsc2UpIHx8ICF3ZWJraXQgJiYgKGNzcy5iYWNrZHJvcEZpbHRlciA/IGNzcy5iYWNrZHJvcEZpbHRlciAhPT0gXCJub25lXCIgOiBmYWxzZSkgfHwgIXdlYmtpdCAmJiAoY3NzLmZpbHRlciA/IGNzcy5maWx0ZXIgIT09IFwibm9uZVwiIDogZmFsc2UpIHx8IFtcInRyYW5zZm9ybVwiLCBcInBlcnNwZWN0aXZlXCIsIFwiZmlsdGVyXCJdLnNvbWUoKHZhbHVlKSA9PiAoY3NzLndpbGxDaGFuZ2UgfHwgXCJcIikuaW5jbHVkZXModmFsdWUpKSB8fCBbXCJwYWludFwiLCBcImxheW91dFwiLCBcInN0cmljdFwiLCBcImNvbnRlbnRcIl0uc29tZSgodmFsdWUpID0+IChjc3MuY29udGFpbiB8fCBcIlwiKS5pbmNsdWRlcyh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgbGV0IGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmICFpc0xhc3RUcmF2ZXJzYWJsZU5vZGUoY3VycmVudE5vZGUpKSB7XG4gICAgaWYgKGlzQ29udGFpbmluZ0Jsb2NrKGN1cnJlbnROb2RlKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzV2ViS2l0KCkge1xuICBpZiAodHlwZW9mIENTUyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhQ1NTLnN1cHBvcnRzKVxuICAgIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIENTUy5zdXBwb3J0cyhcIi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyXCIsIFwibm9uZVwiKTtcbn1cbmZ1bmN0aW9uIGlzTGFzdFRyYXZlcnNhYmxlTm9kZShub2RlKSB7XG4gIHJldHVybiBbXCJodG1sXCIsIFwiYm9keVwiLCBcIiNkb2N1bWVudFwiXS5pbmNsdWRlcyhnZXROb2RlTmFtZShub2RlKSk7XG59XG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChlbGVtZW50KSB7XG4gIGlmIChpc0VsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnBhZ2VYT2Zmc2V0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5wYWdlWU9mZnNldFxuICB9O1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShub2RlKSB7XG4gIGlmIChnZXROb2RlTmFtZShub2RlKSA9PT0gXCJodG1sXCIpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICBjb25zdCByZXN1bHQgPSAoXG4gICAgLy8gU3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGUuXG4gICAgbm9kZS5hc3NpZ25lZFNsb3QgfHwgLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWQuXG4gICAgbm9kZS5wYXJlbnROb2RlIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWQuXG4gICAgaXNTaGFkb3dSb290KG5vZGUpICYmIG5vZGUuaG9zdCB8fCAvLyBGYWxsYmFjay5cbiAgICBnZXREb2N1bWVudEVsZW1lbnQobm9kZSlcbiAgKTtcbiAgcmV0dXJuIGlzU2hhZG93Um9vdChyZXN1bHQpID8gcmVzdWx0Lmhvc3QgOiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3Rvcihub2RlKSB7XG4gIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKG5vZGUpO1xuICBpZiAoaXNMYXN0VHJhdmVyc2FibGVOb2RlKHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudCA/IG5vZGUub3duZXJEb2N1bWVudC5ib2R5IDogbm9kZS5ib2R5O1xuICB9XG4gIGlmIChpc0hUTUxFbGVtZW50KHBhcmVudE5vZGUpICYmIGlzT3ZlcmZsb3dFbGVtZW50KHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKHBhcmVudE5vZGUpO1xufVxuZnVuY3Rpb24gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMobm9kZSwgbGlzdCwgdHJhdmVyc2VJZnJhbWVzKSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50MjtcbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuICBpZiAodHJhdmVyc2VJZnJhbWVzID09PSB2b2lkIDApIHtcbiAgICB0cmF2ZXJzZUlmcmFtZXMgPSB0cnVlO1xuICB9XG4gIGNvbnN0IHNjcm9sbGFibGVBbmNlc3RvciA9IGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKG5vZGUpO1xuICBjb25zdCBpc0JvZHkgPSBzY3JvbGxhYmxlQW5jZXN0b3IgPT09ICgoX25vZGUkb3duZXJEb2N1bWVudDIgPSBub2RlLm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbm9kZSRvd25lckRvY3VtZW50Mi5ib2R5KTtcbiAgY29uc3Qgd2luID0gZ2V0V2luZG93KHNjcm9sbGFibGVBbmNlc3Rvcik7XG4gIGlmIChpc0JvZHkpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQod2luLCB3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzT3ZlcmZsb3dFbGVtZW50KHNjcm9sbGFibGVBbmNlc3RvcikgPyBzY3JvbGxhYmxlQW5jZXN0b3IgOiBbXSwgd2luLmZyYW1lRWxlbWVudCAmJiB0cmF2ZXJzZUlmcmFtZXMgPyBnZXRPdmVyZmxvd0FuY2VzdG9ycyh3aW4uZnJhbWVFbGVtZW50KSA6IFtdKTtcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoc2Nyb2xsYWJsZUFuY2VzdG9yLCBnZXRPdmVyZmxvd0FuY2VzdG9ycyhzY3JvbGxhYmxlQW5jZXN0b3IsIFtdLCB0cmF2ZXJzZUlmcmFtZXMpKTtcbn1cblxuLy8gbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS9kb20vZGlzdC9mbG9hdGluZy11aS5kb20ubWpzXG5mdW5jdGlvbiBnZXRDc3NEaW1lbnNpb25zKGVsZW1lbnQpIHtcbiAgY29uc3QgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgbGV0IHdpZHRoID0gcGFyc2VGbG9hdChjc3Mud2lkdGgpIHx8IDA7XG4gIGxldCBoZWlnaHQgPSBwYXJzZUZsb2F0KGNzcy5oZWlnaHQpIHx8IDA7XG4gIGNvbnN0IGhhc09mZnNldCA9IGlzSFRNTEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IG9mZnNldFdpZHRoID0gaGFzT2Zmc2V0ID8gZWxlbWVudC5vZmZzZXRXaWR0aCA6IHdpZHRoO1xuICBjb25zdCBvZmZzZXRIZWlnaHQgPSBoYXNPZmZzZXQgPyBlbGVtZW50Lm9mZnNldEhlaWdodCA6IGhlaWdodDtcbiAgY29uc3Qgc2hvdWxkRmFsbGJhY2sgPSByb3VuZCh3aWR0aCkgIT09IG9mZnNldFdpZHRoIHx8IHJvdW5kKGhlaWdodCkgIT09IG9mZnNldEhlaWdodDtcbiAgaWYgKHNob3VsZEZhbGxiYWNrKSB7XG4gICAgd2lkdGggPSBvZmZzZXRXaWR0aDtcbiAgICBoZWlnaHQgPSBvZmZzZXRIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgJDogc2hvdWxkRmFsbGJhY2tcbiAgfTtcbn1cbmZ1bmN0aW9uIHVud3JhcEVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gIWlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgOiBlbGVtZW50O1xufVxuZnVuY3Rpb24gZ2V0U2NhbGUoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gdW53cmFwRWxlbWVudChlbGVtZW50KTtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGRvbUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvb3JkcygxKTtcbiAgfVxuICBjb25zdCByZWN0ID0gZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3Qge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICAkXG4gIH0gPSBnZXRDc3NEaW1lbnNpb25zKGRvbUVsZW1lbnQpO1xuICBsZXQgeCA9ICgkID8gcm91bmQocmVjdC53aWR0aCkgOiByZWN0LndpZHRoKSAvIHdpZHRoO1xuICBsZXQgeSA9ICgkID8gcm91bmQocmVjdC5oZWlnaHQpIDogcmVjdC5oZWlnaHQpIC8gaGVpZ2h0O1xuICBpZiAoIXggfHwgIU51bWJlci5pc0Zpbml0ZSh4KSkge1xuICAgIHggPSAxO1xuICB9XG4gIGlmICgheSB8fCAhTnVtYmVyLmlzRmluaXRlKHkpKSB7XG4gICAgeSA9IDE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cbnZhciBub09mZnNldHMgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlQ29vcmRzKDApO1xuZnVuY3Rpb24gZ2V0VmlzdWFsT2Zmc2V0cyhlbGVtZW50KSB7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgaWYgKCFpc1dlYktpdCgpIHx8ICF3aW4udmlzdWFsVmlld3BvcnQpIHtcbiAgICByZXR1cm4gbm9PZmZzZXRzO1xuICB9XG4gIHJldHVybiB7XG4gICAgeDogd2luLnZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQsXG4gICAgeTogd2luLnZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcFxuICB9O1xufVxuZnVuY3Rpb24gc2hvdWxkQWRkVmlzdWFsT2Zmc2V0cyhlbGVtZW50LCBpc0ZpeGVkLCBmbG9hdGluZ09mZnNldFBhcmVudCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG4gIGlmICghZmxvYXRpbmdPZmZzZXRQYXJlbnQgfHwgaXNGaXhlZCAmJiBmbG9hdGluZ09mZnNldFBhcmVudCAhPT0gZ2V0V2luZG93KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc0ZpeGVkO1xufVxuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5LCBvZmZzZXRQYXJlbnQpIHtcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzRml4ZWRTdHJhdGVneSA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZFN0cmF0ZWd5ID0gZmFsc2U7XG4gIH1cbiAgY29uc3QgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB1bndyYXBFbGVtZW50KGVsZW1lbnQpO1xuICBsZXQgc2NhbGUgPSBjcmVhdGVDb29yZHMoMSk7XG4gIGlmIChpbmNsdWRlU2NhbGUpIHtcbiAgICBpZiAob2Zmc2V0UGFyZW50KSB7XG4gICAgICBpZiAoaXNFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgICAgc2NhbGUgPSBnZXRTY2FsZShvZmZzZXRQYXJlbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzY2FsZSA9IGdldFNjYWxlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBjb25zdCB2aXN1YWxPZmZzZXRzID0gc2hvdWxkQWRkVmlzdWFsT2Zmc2V0cyhkb21FbGVtZW50LCBpc0ZpeGVkU3RyYXRlZ3ksIG9mZnNldFBhcmVudCkgPyBnZXRWaXN1YWxPZmZzZXRzKGRvbUVsZW1lbnQpIDogY3JlYXRlQ29vcmRzKDApO1xuICBsZXQgeCA9IChjbGllbnRSZWN0LmxlZnQgKyB2aXN1YWxPZmZzZXRzLngpIC8gc2NhbGUueDtcbiAgbGV0IHkgPSAoY2xpZW50UmVjdC50b3AgKyB2aXN1YWxPZmZzZXRzLnkpIC8gc2NhbGUueTtcbiAgbGV0IHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlLng7XG4gIGxldCBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlLnk7XG4gIGlmIChkb21FbGVtZW50KSB7XG4gICAgY29uc3Qgd2luID0gZ2V0V2luZG93KGRvbUVsZW1lbnQpO1xuICAgIGNvbnN0IG9mZnNldFdpbiA9IG9mZnNldFBhcmVudCAmJiBpc0VsZW1lbnQob2Zmc2V0UGFyZW50KSA/IGdldFdpbmRvdyhvZmZzZXRQYXJlbnQpIDogb2Zmc2V0UGFyZW50O1xuICAgIGxldCBjdXJyZW50SUZyYW1lID0gd2luLmZyYW1lRWxlbWVudDtcbiAgICB3aGlsZSAoY3VycmVudElGcmFtZSAmJiBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0V2luICE9PSB3aW4pIHtcbiAgICAgIGNvbnN0IGlmcmFtZVNjYWxlID0gZ2V0U2NhbGUoY3VycmVudElGcmFtZSk7XG4gICAgICBjb25zdCBpZnJhbWVSZWN0ID0gY3VycmVudElGcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudElGcmFtZSk7XG4gICAgICBjb25zdCBsZWZ0ID0gaWZyYW1lUmVjdC5sZWZ0ICsgKGN1cnJlbnRJRnJhbWUuY2xpZW50TGVmdCArIHBhcnNlRmxvYXQoY3NzLnBhZGRpbmdMZWZ0KSkgKiBpZnJhbWVTY2FsZS54O1xuICAgICAgY29uc3QgdG9wID0gaWZyYW1lUmVjdC50b3AgKyAoY3VycmVudElGcmFtZS5jbGllbnRUb3AgKyBwYXJzZUZsb2F0KGNzcy5wYWRkaW5nVG9wKSkgKiBpZnJhbWVTY2FsZS55O1xuICAgICAgeCAqPSBpZnJhbWVTY2FsZS54O1xuICAgICAgeSAqPSBpZnJhbWVTY2FsZS55O1xuICAgICAgd2lkdGggKj0gaWZyYW1lU2NhbGUueDtcbiAgICAgIGhlaWdodCAqPSBpZnJhbWVTY2FsZS55O1xuICAgICAgeCArPSBsZWZ0O1xuICAgICAgeSArPSB0b3A7XG4gICAgICBjdXJyZW50SUZyYW1lID0gZ2V0V2luZG93KGN1cnJlbnRJRnJhbWUpLmZyYW1lRWxlbWVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlY3RUb0NsaWVudFJlY3Qoe1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfSk7XG59XG5mdW5jdGlvbiBjb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdChfcmVmKSB7XG4gIGxldCB7XG4gICAgcmVjdCxcbiAgICBvZmZzZXRQYXJlbnQsXG4gICAgc3RyYXRlZ3lcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgaWYgKG9mZnNldFBhcmVudCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cbiAgbGV0IHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICBsZXQgc2NhbGUgPSBjcmVhdGVDb29yZHMoMSk7XG4gIGNvbnN0IG9mZnNldHMgPSBjcmVhdGVDb29yZHMoMCk7XG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgc3RyYXRlZ3kgIT09IFwiZml4ZWRcIikge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSBcImJvZHlcIiB8fCBpc092ZXJmbG93RWxlbWVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIGNvbnN0IG9mZnNldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcbiAgICAgIHNjYWxlID0gZ2V0U2NhbGUob2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCA9IG9mZnNldFJlY3QueCArIG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ID0gb2Zmc2V0UmVjdC55ICsgb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCAqIHNjYWxlLngsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCAqIHNjYWxlLnksXG4gICAgeDogcmVjdC54ICogc2NhbGUueCAtIHNjcm9sbC5zY3JvbGxMZWZ0ICogc2NhbGUueCArIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnkgKiBzY2FsZS55IC0gc2Nyb2xsLnNjcm9sbFRvcCAqIHNjYWxlLnkgKyBvZmZzZXRzLnlcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RzKGVsZW1lbnQpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5nZXRDbGllbnRSZWN0cygpKTtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldE5vZGVTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn1cbmZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIGNvbnN0IGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IHNjcm9sbCA9IGdldE5vZGVTY3JvbGwoZWxlbWVudCk7XG4gIGNvbnN0IGJvZHkgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgY29uc3Qgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keS5zY3JvbGxXaWR0aCwgYm9keS5jbGllbnRXaWR0aCk7XG4gIGNvbnN0IGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5LmNsaWVudEhlaWdodCk7XG4gIGxldCB4ID0gLXNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgY29uc3QgeSA9IC1zY3JvbGwuc2Nyb2xsVG9wO1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5KS5kaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5LmNsaWVudFdpZHRoKSAtIHdpZHRoO1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgY29uc3QgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgY29uc3QgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIGxldCB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIGxldCBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIGNvbnN0IHZpc3VhbFZpZXdwb3J0QmFzZWQgPSBpc1dlYktpdCgpO1xuICAgIGlmICghdmlzdWFsVmlld3BvcnRCYXNlZCB8fCB2aXN1YWxWaWV3cG9ydEJhc2VkICYmIHN0cmF0ZWd5ID09PSBcImZpeGVkXCIpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICBjb25zdCBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHRydWUsIHN0cmF0ZWd5ID09PSBcImZpeGVkXCIpO1xuICBjb25zdCB0b3AgPSBjbGllbnRSZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICBjb25zdCBsZWZ0ID0gY2xpZW50UmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICBjb25zdCBzY2FsZSA9IGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRTY2FsZShlbGVtZW50KSA6IGNyZWF0ZUNvb3JkcygxKTtcbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoICogc2NhbGUueDtcbiAgY29uc3QgaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY2FsZS55O1xuICBjb25zdCB4ID0gbGVmdCAqIHNjYWxlLng7XG4gIGNvbnN0IHkgPSB0b3AgKiBzY2FsZS55O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBjbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSkge1xuICBsZXQgcmVjdDtcbiAgaWYgKGNsaXBwaW5nQW5jZXN0b3IgPT09IFwidmlld3BvcnRcIikge1xuICAgIHJlY3QgPSBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpO1xuICB9IGVsc2UgaWYgKGNsaXBwaW5nQW5jZXN0b3IgPT09IFwiZG9jdW1lbnRcIikge1xuICAgIHJlY3QgPSBnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKTtcbiAgfSBlbHNlIGlmIChpc0VsZW1lbnQoY2xpcHBpbmdBbmNlc3RvcikpIHtcbiAgICByZWN0ID0gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZpc3VhbE9mZnNldHMgPSBnZXRWaXN1YWxPZmZzZXRzKGVsZW1lbnQpO1xuICAgIHJlY3QgPSB7XG4gICAgICAuLi5jbGlwcGluZ0FuY2VzdG9yLFxuICAgICAgeDogY2xpcHBpbmdBbmNlc3Rvci54IC0gdmlzdWFsT2Zmc2V0cy54LFxuICAgICAgeTogY2xpcHBpbmdBbmNlc3Rvci55IC0gdmlzdWFsT2Zmc2V0cy55XG4gICAgfTtcbiAgfVxuICByZXR1cm4gcmVjdFRvQ2xpZW50UmVjdChyZWN0KTtcbn1cbmZ1bmN0aW9uIGhhc0ZpeGVkUG9zaXRpb25BbmNlc3RvcihlbGVtZW50LCBzdG9wTm9kZSkge1xuICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgaWYgKHBhcmVudE5vZGUgPT09IHN0b3BOb2RlIHx8ICFpc0VsZW1lbnQocGFyZW50Tm9kZSkgfHwgaXNMYXN0VHJhdmVyc2FibGVOb2RlKHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKHBhcmVudE5vZGUpLnBvc2l0aW9uID09PSBcImZpeGVkXCIgfHwgaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKHBhcmVudE5vZGUsIHN0b3BOb2RlKTtcbn1cbmZ1bmN0aW9uIGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9ycyhlbGVtZW50LCBjYWNoZSkge1xuICBjb25zdCBjYWNoZWRSZXN1bHQgPSBjYWNoZS5nZXQoZWxlbWVudCk7XG4gIGlmIChjYWNoZWRSZXN1bHQpIHtcbiAgICByZXR1cm4gY2FjaGVkUmVzdWx0O1xuICB9XG4gIGxldCByZXN1bHQgPSBnZXRPdmVyZmxvd0FuY2VzdG9ycyhlbGVtZW50LCBbXSwgZmFsc2UpLmZpbHRlcigoZWwpID0+IGlzRWxlbWVudChlbCkgJiYgZ2V0Tm9kZU5hbWUoZWwpICE9PSBcImJvZHlcIik7XG4gIGxldCBjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA9IG51bGw7XG4gIGNvbnN0IGVsZW1lbnRJc0ZpeGVkID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gXCJmaXhlZFwiO1xuICBsZXQgY3VycmVudE5vZGUgPSBlbGVtZW50SXNGaXhlZCA/IGdldFBhcmVudE5vZGUoZWxlbWVudCkgOiBlbGVtZW50O1xuICB3aGlsZSAoaXNFbGVtZW50KGN1cnJlbnROb2RlKSAmJiAhaXNMYXN0VHJhdmVyc2FibGVOb2RlKGN1cnJlbnROb2RlKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTtcbiAgICBjb25zdCBjdXJyZW50Tm9kZUlzQ29udGFpbmluZyA9IGlzQ29udGFpbmluZ0Jsb2NrKGN1cnJlbnROb2RlKTtcbiAgICBpZiAoIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09IFwiZml4ZWRcIikge1xuICAgICAgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBudWxsO1xuICAgIH1cbiAgICBjb25zdCBzaG91bGREcm9wQ3VycmVudE5vZGUgPSBlbGVtZW50SXNGaXhlZCA/ICFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiAhY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgOiAhY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgY29tcHV0ZWRTdHlsZS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiAmJiAhIWN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlICYmIFtcImFic29sdXRlXCIsIFwiZml4ZWRcIl0uaW5jbHVkZXMoY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUucG9zaXRpb24pIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGN1cnJlbnROb2RlKSAmJiAhY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKGVsZW1lbnQsIGN1cnJlbnROb2RlKTtcbiAgICBpZiAoc2hvdWxkRHJvcEN1cnJlbnROb2RlKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKChhbmNlc3RvcikgPT4gYW5jZXN0b3IgIT09IGN1cnJlbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBjb21wdXRlZFN0eWxlO1xuICAgIH1cbiAgICBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpO1xuICB9XG4gIGNhY2hlLnNldChlbGVtZW50LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBlbGVtZW50LFxuICAgIGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeSxcbiAgICBzdHJhdGVneVxuICB9ID0gX3JlZjtcbiAgY29uc3QgZWxlbWVudENsaXBwaW5nQW5jZXN0b3JzID0gYm91bmRhcnkgPT09IFwiY2xpcHBpbmdBbmNlc3RvcnNcIiA/IGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9ycyhlbGVtZW50LCB0aGlzLl9jKSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIGNvbnN0IGNsaXBwaW5nQW5jZXN0b3JzID0gWy4uLmVsZW1lbnRDbGlwcGluZ0FuY2VzdG9ycywgcm9vdEJvdW5kYXJ5XTtcbiAgY29uc3QgZmlyc3RDbGlwcGluZ0FuY2VzdG9yID0gY2xpcHBpbmdBbmNlc3RvcnNbMF07XG4gIGNvbnN0IGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nQW5jZXN0b3JzLnJlZHVjZSgoYWNjUmVjdCwgY2xpcHBpbmdBbmNlc3RvcikgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBmaXJzdENsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KSk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0LFxuICAgIGhlaWdodDogY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3AsXG4gICAgeDogY2xpcHBpbmdSZWN0LmxlZnQsXG4gICAgeTogY2xpcHBpbmdSZWN0LnRvcFxuICB9O1xufVxuZnVuY3Rpb24gZ2V0RGltZW5zaW9ucyhlbGVtZW50KSB7XG4gIHJldHVybiBnZXRDc3NEaW1lbnNpb25zKGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gZ2V0UmVjdFJlbGF0aXZlVG9PZmZzZXRQYXJlbnQoZWxlbWVudCwgb2Zmc2V0UGFyZW50LCBzdHJhdGVneSkge1xuICBjb25zdCBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGNvbnN0IGlzRml4ZWQgPSBzdHJhdGVneSA9PT0gXCJmaXhlZFwiO1xuICBjb25zdCByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHRydWUsIGlzRml4ZWQsIG9mZnNldFBhcmVudCk7XG4gIGxldCBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgY29uc3Qgb2Zmc2V0cyA9IGNyZWF0ZUNvb3JkcygwKTtcbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSBcImJvZHlcIiB8fCBpc092ZXJmbG93RWxlbWVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCkge1xuICAgICAgY29uc3Qgb2Zmc2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUsIGlzRml4ZWQsIG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggPSBvZmZzZXRSZWN0LnggKyBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSA9IG9mZnNldFJlY3QueSArIG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufVxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gXCJmaXhlZFwiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHBvbHlmaWxsKSB7XG4gICAgcmV0dXJuIHBvbHlmaWxsKGVsZW1lbnQpO1xuICB9XG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn1cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCkge1xuICBjb25zdCB3aW5kb3cyID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gd2luZG93MjtcbiAgfVxuICBsZXQgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCk7XG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCwgcG9seWZpbGwpO1xuICB9XG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09IFwiaHRtbFwiIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09IFwiYm9keVwiICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiAmJiAhaXNDb250YWluaW5nQmxvY2sob2Zmc2V0UGFyZW50KSkpIHtcbiAgICByZXR1cm4gd2luZG93MjtcbiAgfVxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3cyO1xufVxudmFyIGdldEVsZW1lbnRSZWN0cyA9IGFzeW5jIGZ1bmN0aW9uKF9yZWYpIHtcbiAgbGV0IHtcbiAgICByZWZlcmVuY2UsXG4gICAgZmxvYXRpbmcsXG4gICAgc3RyYXRlZ3lcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGdldE9mZnNldFBhcmVudEZuID0gdGhpcy5nZXRPZmZzZXRQYXJlbnQgfHwgZ2V0T2Zmc2V0UGFyZW50O1xuICBjb25zdCBnZXREaW1lbnNpb25zRm4gPSB0aGlzLmdldERpbWVuc2lvbnM7XG4gIHJldHVybiB7XG4gICAgcmVmZXJlbmNlOiBnZXRSZWN0UmVsYXRpdmVUb09mZnNldFBhcmVudChyZWZlcmVuY2UsIGF3YWl0IGdldE9mZnNldFBhcmVudEZuKGZsb2F0aW5nKSwgc3RyYXRlZ3kpLFxuICAgIGZsb2F0aW5nOiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIC4uLmF3YWl0IGdldERpbWVuc2lvbnNGbihmbG9hdGluZylcbiAgICB9XG4gIH07XG59O1xuZnVuY3Rpb24gaXNSVEwoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXJlY3Rpb24gPT09IFwicnRsXCI7XG59XG52YXIgcGxhdGZvcm0gPSB7XG4gIGNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0LFxuICBnZXREb2N1bWVudEVsZW1lbnQsXG4gIGdldENsaXBwaW5nUmVjdCxcbiAgZ2V0T2Zmc2V0UGFyZW50LFxuICBnZXRFbGVtZW50UmVjdHMsXG4gIGdldENsaWVudFJlY3RzLFxuICBnZXREaW1lbnNpb25zLFxuICBnZXRTY2FsZSxcbiAgaXNFbGVtZW50LFxuICBpc1JUTFxufTtcbmZ1bmN0aW9uIG9ic2VydmVNb3ZlKGVsZW1lbnQsIG9uTW92ZSkge1xuICBsZXQgaW8gPSBudWxsO1xuICBsZXQgdGltZW91dElkO1xuICBjb25zdCByb290ID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIGlvICYmIGlvLmRpc2Nvbm5lY3QoKTtcbiAgICBpbyA9IG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gcmVmcmVzaChza2lwLCB0aHJlc2hvbGQpIHtcbiAgICBpZiAoc2tpcCA9PT0gdm9pZCAwKSB7XG4gICAgICBza2lwID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aHJlc2hvbGQgPT09IHZvaWQgMCkge1xuICAgICAgdGhyZXNob2xkID0gMTtcbiAgICB9XG4gICAgY2xlYW51cCgpO1xuICAgIGNvbnN0IHtcbiAgICAgIGxlZnQsXG4gICAgICB0b3AsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghc2tpcCkge1xuICAgICAgb25Nb3ZlKCk7XG4gICAgfVxuICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbnNldFRvcCA9IGZsb29yKHRvcCk7XG4gICAgY29uc3QgaW5zZXRSaWdodCA9IGZsb29yKHJvb3QuY2xpZW50V2lkdGggLSAobGVmdCArIHdpZHRoKSk7XG4gICAgY29uc3QgaW5zZXRCb3R0b20gPSBmbG9vcihyb290LmNsaWVudEhlaWdodCAtICh0b3AgKyBoZWlnaHQpKTtcbiAgICBjb25zdCBpbnNldExlZnQgPSBmbG9vcihsZWZ0KTtcbiAgICBjb25zdCByb290TWFyZ2luID0gLWluc2V0VG9wICsgXCJweCBcIiArIC1pbnNldFJpZ2h0ICsgXCJweCBcIiArIC1pbnNldEJvdHRvbSArIFwicHggXCIgKyAtaW5zZXRMZWZ0ICsgXCJweFwiO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICByb290TWFyZ2luLFxuICAgICAgdGhyZXNob2xkOiBtYXgoMCwgbWluKDEsIHRocmVzaG9sZCkpIHx8IDFcbiAgICB9O1xuICAgIGxldCBpc0ZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgICBmdW5jdGlvbiBoYW5kbGVPYnNlcnZlKGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gZW50cmllc1swXS5pbnRlcnNlY3Rpb25SYXRpbztcbiAgICAgIGlmIChyYXRpbyAhPT0gdGhyZXNob2xkKSB7XG4gICAgICAgIGlmICghaXNGaXJzdFVwZGF0ZSkge1xuICAgICAgICAgIHJldHVybiByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyYXRpbykge1xuICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVmcmVzaChmYWxzZSwgMWUtNyk7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWZyZXNoKGZhbHNlLCByYXRpbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlzRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZU9ic2VydmUsIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgLy8gSGFuZGxlIDxpZnJhbWU+c1xuICAgICAgICByb290OiByb290Lm93bmVyRG9jdW1lbnRcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZU9ic2VydmUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpby5vYnNlcnZlKGVsZW1lbnQpO1xuICB9XG4gIHJlZnJlc2godHJ1ZSk7XG4gIHJldHVybiBjbGVhbnVwO1xufVxuZnVuY3Rpb24gYXV0b1VwZGF0ZShyZWZlcmVuY2UsIGZsb2F0aW5nLCB1cGRhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBjb25zdCB7XG4gICAgYW5jZXN0b3JTY3JvbGwgPSB0cnVlLFxuICAgIGFuY2VzdG9yUmVzaXplID0gdHJ1ZSxcbiAgICBlbGVtZW50UmVzaXplID0gdHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSBcImZ1bmN0aW9uXCIsXG4gICAgbGF5b3V0U2hpZnQgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09IFwiZnVuY3Rpb25cIixcbiAgICBhbmltYXRpb25GcmFtZSA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCByZWZlcmVuY2VFbCA9IHVud3JhcEVsZW1lbnQocmVmZXJlbmNlKTtcbiAgY29uc3QgYW5jZXN0b3JzID0gYW5jZXN0b3JTY3JvbGwgfHwgYW5jZXN0b3JSZXNpemUgPyBbLi4ucmVmZXJlbmNlRWwgPyBnZXRPdmVyZmxvd0FuY2VzdG9ycyhyZWZlcmVuY2VFbCkgOiBbXSwgLi4uZ2V0T3ZlcmZsb3dBbmNlc3RvcnMoZmxvYXRpbmcpXSA6IFtdO1xuICBhbmNlc3RvcnMuZm9yRWFjaCgoYW5jZXN0b3IpID0+IHtcbiAgICBhbmNlc3RvclNjcm9sbCAmJiBhbmNlc3Rvci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIGFuY2VzdG9yUmVzaXplICYmIGFuY2VzdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlKTtcbiAgfSk7XG4gIGNvbnN0IGNsZWFudXBJbyA9IHJlZmVyZW5jZUVsICYmIGxheW91dFNoaWZ0ID8gb2JzZXJ2ZU1vdmUocmVmZXJlbmNlRWwsIHVwZGF0ZSkgOiBudWxsO1xuICBsZXQgcmVvYnNlcnZlRnJhbWUgPSAtMTtcbiAgbGV0IHJlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgaWYgKGVsZW1lbnRSZXNpemUpIHtcbiAgICByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoX3JlZikgPT4ge1xuICAgICAgbGV0IFtmaXJzdEVudHJ5XSA9IF9yZWY7XG4gICAgICBpZiAoZmlyc3RFbnRyeSAmJiBmaXJzdEVudHJ5LnRhcmdldCA9PT0gcmVmZXJlbmNlRWwgJiYgcmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGZsb2F0aW5nKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVvYnNlcnZlRnJhbWUpO1xuICAgICAgICByZW9ic2VydmVGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgcmVzaXplT2JzZXJ2ZXIgJiYgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShmbG9hdGluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG4gICAgaWYgKHJlZmVyZW5jZUVsICYmICFhbmltYXRpb25GcmFtZSkge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShyZWZlcmVuY2VFbCk7XG4gICAgfVxuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZmxvYXRpbmcpO1xuICB9XG4gIGxldCBmcmFtZUlkO1xuICBsZXQgcHJldlJlZlJlY3QgPSBhbmltYXRpb25GcmFtZSA/IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2UpIDogbnVsbDtcbiAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgZnJhbWVMb29wKCk7XG4gIH1cbiAgZnVuY3Rpb24gZnJhbWVMb29wKCkge1xuICAgIGNvbnN0IG5leHRSZWZSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHJlZmVyZW5jZSk7XG4gICAgaWYgKHByZXZSZWZSZWN0ICYmIChuZXh0UmVmUmVjdC54ICE9PSBwcmV2UmVmUmVjdC54IHx8IG5leHRSZWZSZWN0LnkgIT09IHByZXZSZWZSZWN0LnkgfHwgbmV4dFJlZlJlY3Qud2lkdGggIT09IHByZXZSZWZSZWN0LndpZHRoIHx8IG5leHRSZWZSZWN0LmhlaWdodCAhPT0gcHJldlJlZlJlY3QuaGVpZ2h0KSkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICAgIHByZXZSZWZSZWN0ID0gbmV4dFJlZlJlY3Q7XG4gICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZUxvb3ApO1xuICB9XG4gIHVwZGF0ZSgpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGFuY2VzdG9ycy5mb3JFYWNoKChhbmNlc3RvcikgPT4ge1xuICAgICAgYW5jZXN0b3JTY3JvbGwgJiYgYW5jZXN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGUpO1xuICAgICAgYW5jZXN0b3JSZXNpemUgJiYgYW5jZXN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGUpO1xuICAgIH0pO1xuICAgIGNsZWFudXBJbyAmJiBjbGVhbnVwSW8oKTtcbiAgICByZXNpemVPYnNlcnZlciAmJiByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgcmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuICAgIGlmIChhbmltYXRpb25GcmFtZSkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XG4gICAgfVxuICB9O1xufVxudmFyIGNvbXB1dGVQb3NpdGlvbjIgPSAocmVmZXJlbmNlLCBmbG9hdGluZywgb3B0aW9ucykgPT4ge1xuICBjb25zdCBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgcGxhdGZvcm0sXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBjb25zdCBwbGF0Zm9ybVdpdGhDYWNoZSA9IHtcbiAgICAuLi5tZXJnZWRPcHRpb25zLnBsYXRmb3JtLFxuICAgIF9jOiBjYWNoZVxuICB9O1xuICByZXR1cm4gY29tcHV0ZVBvc2l0aW9uKHJlZmVyZW5jZSwgZmxvYXRpbmcsIHtcbiAgICAuLi5tZXJnZWRPcHRpb25zLFxuICAgIHBsYXRmb3JtOiBwbGF0Zm9ybVdpdGhDYWNoZVxuICB9KTtcbn07XG5cbi8vIHBhY2thZ2VzL2FuY2hvci9zcmMvaW5kZXguanNcbmZ1bmN0aW9uIHNyY19kZWZhdWx0KEFscGluZSkge1xuICBBbHBpbmUubWFnaWMoXCJhbmNob3JcIiwgKGVsKSA9PiB7XG4gICAgaWYgKCFlbC5feF9hbmNob3IpXG4gICAgICB0aHJvdyBcIkFscGluZTogTm8geC1hbmNob3IgZGlyZWN0aXZlIGZvdW5kIG9uIGVsZW1lbnQgdXNpbmcgJGFuY2hvci4uLlwiO1xuICAgIHJldHVybiBlbC5feF9hbmNob3I7XG4gIH0pO1xuICBBbHBpbmUuaW50ZXJjZXB0Q2xvbmUoKGZyb20sIHRvKSA9PiB7XG4gICAgaWYgKGZyb20gJiYgZnJvbS5feF9hbmNob3IgJiYgIXRvLl94X2FuY2hvcikge1xuICAgICAgdG8uX3hfYW5jaG9yID0gZnJvbS5feF9hbmNob3I7XG4gICAgfVxuICB9KTtcbiAgQWxwaW5lLmRpcmVjdGl2ZShcImFuY2hvclwiLCBBbHBpbmUuc2tpcER1cmluZ0Nsb25lKFxuICAgIChlbCwgeyBleHByZXNzaW9uLCBtb2RpZmllcnMsIHZhbHVlIH0sIHsgY2xlYW51cCwgZXZhbHVhdGU6IGV2YWx1YXRlMiB9KSA9PiB7XG4gICAgICBsZXQgeyBwbGFjZW1lbnQsIG9mZnNldFZhbHVlLCB1bnN0eWxlZCB9ID0gZ2V0T3B0aW9ucyhtb2RpZmllcnMpO1xuICAgICAgZWwuX3hfYW5jaG9yID0gQWxwaW5lLnJlYWN0aXZlKHsgeDogMCwgeTogMCB9KTtcbiAgICAgIGxldCByZWZlcmVuY2UgPSBldmFsdWF0ZTIoZXhwcmVzc2lvbik7XG4gICAgICBpZiAoIXJlZmVyZW5jZSlcbiAgICAgICAgdGhyb3cgXCJBbHBpbmU6IG5vIGVsZW1lbnQgcHJvdmlkZWQgdG8geC1hbmNob3IuLi5cIjtcbiAgICAgIGxldCBjb21wdXRlID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJldmlvdXNWYWx1ZTtcbiAgICAgICAgY29tcHV0ZVBvc2l0aW9uMihyZWZlcmVuY2UsIGVsLCB7XG4gICAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICAgIG1pZGRsZXdhcmU6IFtmbGlwKCksIHNoaWZ0KHsgcGFkZGluZzogNSB9KSwgb2Zmc2V0KG9mZnNldFZhbHVlKV1cbiAgICAgICAgfSkudGhlbigoeyB4LCB5IH0pID0+IHtcbiAgICAgICAgICB1bnN0eWxlZCB8fCBzZXRTdHlsZXMoZWwsIHgsIHkpO1xuICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh7IHgsIHkgfSkgIT09IHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgIGVsLl94X2FuY2hvci54ID0geDtcbiAgICAgICAgICAgIGVsLl94X2FuY2hvci55ID0geTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJldmlvdXNWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHsgeCwgeSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbGV0IHJlbGVhc2UgPSBhdXRvVXBkYXRlKHJlZmVyZW5jZSwgZWwsICgpID0+IGNvbXB1dGUoKSk7XG4gICAgICBjbGVhbnVwKCgpID0+IHJlbGVhc2UoKSk7XG4gICAgfSxcbiAgICAvLyBXaGVuIGNsb25pbmcgKG9yIFwibW9ycGhpbmdcIiksIHdlIHdpbGwgZ3JhZnQgdGhlIHN0eWxlIGFuZCBwb3NpdGlvbiBkYXRhIGZyb20gdGhlIGxpdmUgdHJlZS4uLlxuICAgIChlbCwgeyBleHByZXNzaW9uLCBtb2RpZmllcnMsIHZhbHVlIH0sIHsgY2xlYW51cCwgZXZhbHVhdGU6IGV2YWx1YXRlMiB9KSA9PiB7XG4gICAgICBsZXQgeyBwbGFjZW1lbnQsIG9mZnNldFZhbHVlLCB1bnN0eWxlZCB9ID0gZ2V0T3B0aW9ucyhtb2RpZmllcnMpO1xuICAgICAgaWYgKGVsLl94X2FuY2hvcikge1xuICAgICAgICB1bnN0eWxlZCB8fCBzZXRTdHlsZXMoZWwsIGVsLl94X2FuY2hvci54LCBlbC5feF9hbmNob3IueSk7XG4gICAgICB9XG4gICAgfVxuICApKTtcbn1cbmZ1bmN0aW9uIHNldFN0eWxlcyhlbCwgeCwgeSkge1xuICBPYmplY3QuYXNzaWduKGVsLnN0eWxlLCB7XG4gICAgbGVmdDogeCArIFwicHhcIixcbiAgICB0b3A6IHkgKyBcInB4XCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIlxuICB9KTtcbn1cbmZ1bmN0aW9uIGdldE9wdGlvbnMobW9kaWZpZXJzKSB7XG4gIGxldCBwb3NpdGlvbnMgPSBbXCJ0b3BcIiwgXCJ0b3Atc3RhcnRcIiwgXCJ0b3AtZW5kXCIsIFwicmlnaHRcIiwgXCJyaWdodC1zdGFydFwiLCBcInJpZ2h0LWVuZFwiLCBcImJvdHRvbVwiLCBcImJvdHRvbS1zdGFydFwiLCBcImJvdHRvbS1lbmRcIiwgXCJsZWZ0XCIsIFwibGVmdC1zdGFydFwiLCBcImxlZnQtZW5kXCJdO1xuICBsZXQgcGxhY2VtZW50ID0gcG9zaXRpb25zLmZpbmQoKGkpID0+IG1vZGlmaWVycy5pbmNsdWRlcyhpKSk7XG4gIGxldCBvZmZzZXRWYWx1ZSA9IDA7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJvZmZzZXRcIikpIHtcbiAgICBsZXQgaWR4ID0gbW9kaWZpZXJzLmZpbmRJbmRleCgoaSkgPT4gaSA9PT0gXCJvZmZzZXRcIik7XG4gICAgb2Zmc2V0VmFsdWUgPSBtb2RpZmllcnNbaWR4ICsgMV0gIT09IHZvaWQgMCA/IE51bWJlcihtb2RpZmllcnNbaWR4ICsgMV0pIDogb2Zmc2V0VmFsdWU7XG4gIH1cbiAgbGV0IHVuc3R5bGVkID0gbW9kaWZpZXJzLmluY2x1ZGVzKFwibm8tc3R5bGVcIik7XG4gIHJldHVybiB7IHBsYWNlbWVudCwgb2Zmc2V0VmFsdWUsIHVuc3R5bGVkIH07XG59XG5cbi8vIHBhY2thZ2VzL2FuY2hvci9idWlsZHMvbW9kdWxlLmpzXG52YXIgbW9kdWxlX2RlZmF1bHQgPSBzcmNfZGVmYXVsdDtcbmV4cG9ydCB7XG4gIHNyY19kZWZhdWx0IGFzIGFuY2hvcixcbiAgbW9kdWxlX2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbiIsICIvLyBwYWNrYWdlcy9jb2xsYXBzZS9zcmMvaW5kZXguanNcbmZ1bmN0aW9uIHNyY19kZWZhdWx0KEFscGluZSkge1xuICBBbHBpbmUuZGlyZWN0aXZlKFwiY29sbGFwc2VcIiwgY29sbGFwc2UpO1xuICBjb2xsYXBzZS5pbmxpbmUgPSAoZWwsIHsgbW9kaWZpZXJzIH0pID0+IHtcbiAgICBpZiAoIW1vZGlmaWVycy5pbmNsdWRlcyhcIm1pblwiKSlcbiAgICAgIHJldHVybjtcbiAgICBlbC5feF9kb1Nob3cgPSAoKSA9PiB7XG4gICAgfTtcbiAgICBlbC5feF9kb0hpZGUgPSAoKSA9PiB7XG4gICAgfTtcbiAgfTtcbiAgZnVuY3Rpb24gY29sbGFwc2UoZWwsIHsgbW9kaWZpZXJzIH0pIHtcbiAgICBsZXQgZHVyYXRpb24gPSBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJkdXJhdGlvblwiLCAyNTApIC8gMWUzO1xuICAgIGxldCBmbG9vciA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcIm1pblwiLCAwKTtcbiAgICBsZXQgZnVsbHlIaWRlID0gIW1vZGlmaWVycy5pbmNsdWRlcyhcIm1pblwiKTtcbiAgICBpZiAoIWVsLl94X2lzU2hvd24pXG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBgJHtmbG9vcn1weGA7XG4gICAgaWYgKCFlbC5feF9pc1Nob3duICYmIGZ1bGx5SGlkZSlcbiAgICAgIGVsLmhpZGRlbiA9IHRydWU7XG4gICAgaWYgKCFlbC5feF9pc1Nob3duKVxuICAgICAgZWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgIGxldCBzZXRGdW5jdGlvbiA9IChlbDIsIHN0eWxlcykgPT4ge1xuICAgICAgbGV0IHJldmVydEZ1bmN0aW9uID0gQWxwaW5lLnNldFN0eWxlcyhlbDIsIHN0eWxlcyk7XG4gICAgICByZXR1cm4gc3R5bGVzLmhlaWdodCA/ICgpID0+IHtcbiAgICAgIH0gOiByZXZlcnRGdW5jdGlvbjtcbiAgICB9O1xuICAgIGxldCB0cmFuc2l0aW9uU3R5bGVzID0ge1xuICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiBcImhlaWdodFwiLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbn1zYCxcbiAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogXCJjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSlcIlxuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbiA9IHtcbiAgICAgIGluKGJlZm9yZSA9ICgpID0+IHtcbiAgICAgIH0sIGFmdGVyID0gKCkgPT4ge1xuICAgICAgfSkge1xuICAgICAgICBpZiAoZnVsbHlIaWRlKVxuICAgICAgICAgIGVsLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICBpZiAoZnVsbHlIaWRlKVxuICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICBsZXQgY3VycmVudCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICAgIGxldCBmdWxsID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICBpZiAoY3VycmVudCA9PT0gZnVsbCkge1xuICAgICAgICAgIGN1cnJlbnQgPSBmbG9vcjtcbiAgICAgICAgfVxuICAgICAgICBBbHBpbmUudHJhbnNpdGlvbihlbCwgQWxwaW5lLnNldFN0eWxlcywge1xuICAgICAgICAgIGR1cmluZzogdHJhbnNpdGlvblN0eWxlcyxcbiAgICAgICAgICBzdGFydDogeyBoZWlnaHQ6IGN1cnJlbnQgKyBcInB4XCIgfSxcbiAgICAgICAgICBlbmQ6IHsgaGVpZ2h0OiBmdWxsICsgXCJweFwiIH1cbiAgICAgICAgfSwgKCkgPT4gZWwuX3hfaXNTaG93biA9IHRydWUsICgpID0+IHtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gZnVsbCkgPCAxKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvdXQoYmVmb3JlID0gKCkgPT4ge1xuICAgICAgfSwgYWZ0ZXIgPSAoKSA9PiB7XG4gICAgICB9KSB7XG4gICAgICAgIGxldCBmdWxsID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICBBbHBpbmUudHJhbnNpdGlvbihlbCwgc2V0RnVuY3Rpb24sIHtcbiAgICAgICAgICBkdXJpbmc6IHRyYW5zaXRpb25TdHlsZXMsXG4gICAgICAgICAgc3RhcnQ6IHsgaGVpZ2h0OiBmdWxsICsgXCJweFwiIH0sXG4gICAgICAgICAgZW5kOiB7IGhlaWdodDogZmxvb3IgKyBcInB4XCIgfVxuICAgICAgICB9LCAoKSA9PiBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCIsICgpID0+IHtcbiAgICAgICAgICBlbC5feF9pc1Nob3duID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGVsLnN0eWxlLmhlaWdodCA9PSBgJHtmbG9vcn1weGAgJiYgZnVsbHlIaWRlKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBlbC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIGtleSwgZmFsbGJhY2spIHtcbiAgaWYgKG1vZGlmaWVycy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgY29uc3QgcmF3VmFsdWUgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDFdO1xuICBpZiAoIXJhd1ZhbHVlKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgaWYgKGtleSA9PT0gXCJkdXJhdGlvblwiKSB7XG4gICAgbGV0IG1hdGNoID0gcmF3VmFsdWUubWF0Y2goLyhbMC05XSspbXMvKTtcbiAgICBpZiAobWF0Y2gpXG4gICAgICByZXR1cm4gbWF0Y2hbMV07XG4gIH1cbiAgaWYgKGtleSA9PT0gXCJtaW5cIikge1xuICAgIGxldCBtYXRjaCA9IHJhd1ZhbHVlLm1hdGNoKC8oWzAtOV0rKXB4Lyk7XG4gICAgaWYgKG1hdGNoKVxuICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICB9XG4gIHJldHVybiByYXdWYWx1ZTtcbn1cblxuLy8gcGFja2FnZXMvY29sbGFwc2UvYnVpbGRzL21vZHVsZS5qc1xudmFyIG1vZHVsZV9kZWZhdWx0ID0gc3JjX2RlZmF1bHQ7XG5leHBvcnQge1xuICBzcmNfZGVmYXVsdCBhcyBjb2xsYXBzZSxcbiAgbW9kdWxlX2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbiIsICIvLyBub2RlX21vZHVsZXMvdGFiYmFibGUvZGlzdC9pbmRleC5lc20uanNcbnZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbXCJpbnB1dFwiLCBcInNlbGVjdFwiLCBcInRleHRhcmVhXCIsIFwiYVtocmVmXVwiLCBcImJ1dHRvblwiLCBcIlt0YWJpbmRleF06bm90KHNsb3QpXCIsIFwiYXVkaW9bY29udHJvbHNdXCIsIFwidmlkZW9bY29udHJvbHNdXCIsICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKScsIFwiZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGVcIiwgXCJkZXRhaWxzXCJdO1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9yID0gLyogQF9fUFVSRV9fICovIGNhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKFwiLFwiKTtcbnZhciBOb0VsZW1lbnQgPSB0eXBlb2YgRWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcbnZhciBtYXRjaGVzID0gTm9FbGVtZW50ID8gZnVuY3Rpb24oKSB7XG59IDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG52YXIgZ2V0Um9vdE5vZGUgPSAhTm9FbGVtZW50ICYmIEVsZW1lbnQucHJvdG90eXBlLmdldFJvb3ROb2RlID8gZnVuY3Rpb24oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xufSA6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudDtcbn07XG52YXIgZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMyKGVsLCBpbmNsdWRlQ29udGFpbmVyLCBmaWx0ZXIpIHtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZWwucXVlcnlTZWxlY3RvckFsbChjYW5kaWRhdGVTZWxlY3RvcikpO1xuICBpZiAoaW5jbHVkZUNvbnRhaW5lciAmJiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gIH1cbiAgY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXMuZmlsdGVyKGZpbHRlcik7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcbnZhciBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkgPSBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkyKGVsZW1lbnRzLCBpbmNsdWRlQ29udGFpbmVyLCBvcHRpb25zKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gW107XG4gIHZhciBlbGVtZW50c1RvQ2hlY2sgPSBBcnJheS5mcm9tKGVsZW1lbnRzKTtcbiAgd2hpbGUgKGVsZW1lbnRzVG9DaGVjay5sZW5ndGgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzVG9DaGVjay5zaGlmdCgpO1xuICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09IFwiU0xPVFwiKSB7XG4gICAgICB2YXIgYXNzaWduZWQgPSBlbGVtZW50LmFzc2lnbmVkRWxlbWVudHMoKTtcbiAgICAgIHZhciBjb250ZW50ID0gYXNzaWduZWQubGVuZ3RoID8gYXNzaWduZWQgOiBlbGVtZW50LmNoaWxkcmVuO1xuICAgICAgdmFyIG5lc3RlZENhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkyKGNvbnRlbnQsIHRydWUsIG9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMuZmxhdHRlbikge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2guYXBwbHkoY2FuZGlkYXRlcywgbmVzdGVkQ2FuZGlkYXRlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2goe1xuICAgICAgICAgIHNjb3BlOiBlbGVtZW50LFxuICAgICAgICAgIGNhbmRpZGF0ZXM6IG5lc3RlZENhbmRpZGF0ZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2YWxpZENhbmRpZGF0ZSA9IG1hdGNoZXMuY2FsbChlbGVtZW50LCBjYW5kaWRhdGVTZWxlY3Rvcik7XG4gICAgICBpZiAodmFsaWRDYW5kaWRhdGUgJiYgb3B0aW9ucy5maWx0ZXIoZWxlbWVudCkgJiYgKGluY2x1ZGVDb250YWluZXIgfHwgIWVsZW1lbnRzLmluY2x1ZGVzKGVsZW1lbnQpKSkge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2goZWxlbWVudCk7XG4gICAgICB9XG4gICAgICB2YXIgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdCB8fCAvLyBjaGVjayBmb3IgYW4gdW5kaXNjbG9zZWQgc2hhZG93XG4gICAgICB0eXBlb2Ygb3B0aW9ucy5nZXRTaGFkb3dSb290ID09PSBcImZ1bmN0aW9uXCIgJiYgb3B0aW9ucy5nZXRTaGFkb3dSb290KGVsZW1lbnQpO1xuICAgICAgdmFyIHZhbGlkU2hhZG93Um9vdCA9ICFvcHRpb25zLnNoYWRvd1Jvb3RGaWx0ZXIgfHwgb3B0aW9ucy5zaGFkb3dSb290RmlsdGVyKGVsZW1lbnQpO1xuICAgICAgaWYgKHNoYWRvd1Jvb3QgJiYgdmFsaWRTaGFkb3dSb290KSB7XG4gICAgICAgIHZhciBfbmVzdGVkQ2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseTIoc2hhZG93Um9vdCA9PT0gdHJ1ZSA/IGVsZW1lbnQuY2hpbGRyZW4gOiBzaGFkb3dSb290LmNoaWxkcmVuLCB0cnVlLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZmxhdHRlbikge1xuICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaC5hcHBseShjYW5kaWRhdGVzLCBfbmVzdGVkQ2FuZGlkYXRlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FuZGlkYXRlcy5wdXNoKHtcbiAgICAgICAgICAgIHNjb3BlOiBlbGVtZW50LFxuICAgICAgICAgICAgY2FuZGlkYXRlczogX25lc3RlZENhbmRpZGF0ZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHNUb0NoZWNrLnVuc2hpZnQuYXBwbHkoZWxlbWVudHNUb0NoZWNrLCBlbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xudmFyIGdldFRhYmluZGV4ID0gZnVuY3Rpb24gZ2V0VGFiaW5kZXgyKG5vZGUsIGlzU2NvcGUpIHtcbiAgaWYgKG5vZGUudGFiSW5kZXggPCAwKSB7XG4gICAgaWYgKChpc1Njb3BlIHx8IC9eKEFVRElPfFZJREVPfERFVEFJTFMpJC8udGVzdChub2RlLnRhZ05hbWUpIHx8IG5vZGUuaXNDb250ZW50RWRpdGFibGUpICYmIGlzTmFOKHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiksIDEwKSkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn07XG52YXIgc29ydE9yZGVyZWRUYWJiYWJsZXMgPSBmdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlczIoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufTtcbnZhciBpc0lucHV0ID0gZnVuY3Rpb24gaXNJbnB1dDIobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSBcIklOUFVUXCI7XG59O1xudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0Mihub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gXCJoaWRkZW5cIjtcbn07XG52YXIgaXNEZXRhaWxzV2l0aFN1bW1hcnkgPSBmdW5jdGlvbiBpc0RldGFpbHNXaXRoU3VtbWFyeTIobm9kZSkge1xuICB2YXIgciA9IG5vZGUudGFnTmFtZSA9PT0gXCJERVRBSUxTXCIgJiYgQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KG5vZGUuY2hpbGRyZW4pLnNvbWUoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudGFnTmFtZSA9PT0gXCJTVU1NQVJZXCI7XG4gIH0pO1xuICByZXR1cm4gcjtcbn07XG52YXIgZ2V0Q2hlY2tlZFJhZGlvID0gZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvMihub2RlcywgZm9ybSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vZGVzW2ldLmNoZWNrZWQgJiYgbm9kZXNbaV0uZm9ybSA9PT0gZm9ybSkge1xuICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgIH1cbiAgfVxufTtcbnZhciBpc1RhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc1RhYmJhYmxlUmFkaW8yKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgcmFkaW9TY29wZSA9IG5vZGUuZm9ybSB8fCBnZXRSb290Tm9kZShub2RlKTtcbiAgdmFyIHF1ZXJ5UmFkaW9zID0gZnVuY3Rpb24gcXVlcnlSYWRpb3MyKG5hbWUpIHtcbiAgICByZXR1cm4gcmFkaW9TY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xuICB9O1xuICB2YXIgcmFkaW9TZXQ7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuQ1NTICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuQ1NTLmVzY2FwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyh3aW5kb3cuQ1NTLmVzY2FwZShub2RlLm5hbWUpKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyhub2RlLm5hbWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkxvb2tzIGxpa2UgeW91IGhhdmUgYSByYWRpbyBidXR0b24gd2l0aCBhIG5hbWUgYXR0cmlidXRlIGNvbnRhaW5pbmcgaW52YWxpZCBDU1Mgc2VsZWN0b3IgY2hhcmFjdGVycyBhbmQgbmVlZCB0aGUgQ1NTLmVzY2FwZSBwb2x5ZmlsbDogJXNcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCwgbm9kZS5mb3JtKTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59O1xudmFyIGlzUmFkaW8gPSBmdW5jdGlvbiBpc1JhZGlvMihub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gXCJyYWRpb1wiO1xufTtcbnZhciBpc05vblRhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8yKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn07XG52YXIgaXNaZXJvQXJlYSA9IGZ1bmN0aW9uIGlzWmVyb0FyZWEyKG5vZGUpIHtcbiAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoLCBoZWlnaHQgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUuaGVpZ2h0O1xuICByZXR1cm4gd2lkdGggPT09IDAgJiYgaGVpZ2h0ID09PSAwO1xufTtcbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uIGlzSGlkZGVuMihub2RlLCBfcmVmKSB7XG4gIHZhciBkaXNwbGF5Q2hlY2sgPSBfcmVmLmRpc3BsYXlDaGVjaywgZ2V0U2hhZG93Um9vdCA9IF9yZWYuZ2V0U2hhZG93Um9vdDtcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkudmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBpc0RpcmVjdFN1bW1hcnkgPSBtYXRjaGVzLmNhbGwobm9kZSwgXCJkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZVwiKTtcbiAgdmFyIG5vZGVVbmRlckRldGFpbHMgPSBpc0RpcmVjdFN1bW1hcnkgPyBub2RlLnBhcmVudEVsZW1lbnQgOiBub2RlO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGVVbmRlckRldGFpbHMsIFwiZGV0YWlsczpub3QoW29wZW5dKSAqXCIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIG5vZGVSb290SG9zdCA9IGdldFJvb3ROb2RlKG5vZGUpLmhvc3Q7XG4gIHZhciBub2RlSXNBdHRhY2hlZCA9IChub2RlUm9vdEhvc3QgPT09IG51bGwgfHwgbm9kZVJvb3RIb3N0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlUm9vdEhvc3Qub3duZXJEb2N1bWVudC5jb250YWlucyhub2RlUm9vdEhvc3QpKSB8fCBub2RlLm93bmVyRG9jdW1lbnQuY29udGFpbnMobm9kZSk7XG4gIGlmICghZGlzcGxheUNoZWNrIHx8IGRpc3BsYXlDaGVjayA9PT0gXCJmdWxsXCIpIHtcbiAgICBpZiAodHlwZW9mIGdldFNoYWRvd1Jvb3QgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdmFyIG9yaWdpbmFsTm9kZSA9IG5vZGU7XG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICB2YXIgcGFyZW50RWxlbWVudCA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHJvb3ROb2RlID0gZ2V0Um9vdE5vZGUobm9kZSk7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50ICYmICFwYXJlbnRFbGVtZW50LnNoYWRvd1Jvb3QgJiYgZ2V0U2hhZG93Um9vdChwYXJlbnRFbGVtZW50KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBpc1plcm9BcmVhKG5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGUuYXNzaWduZWRTbG90O1xuICAgICAgICB9IGVsc2UgaWYgKCFwYXJlbnRFbGVtZW50ICYmIHJvb3ROb2RlICE9PSBub2RlLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICBub2RlID0gcm9vdE5vZGUuaG9zdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlID0gcGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9kZSA9IG9yaWdpbmFsTm9kZTtcbiAgICB9XG4gICAgaWYgKG5vZGVJc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm4gIW5vZGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpc3BsYXlDaGVjayA9PT0gXCJub24temVyby1hcmVhXCIpIHtcbiAgICByZXR1cm4gaXNaZXJvQXJlYShub2RlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xudmFyIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQgPSBmdW5jdGlvbiBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0Mihub2RlKSB7XG4gIGlmICgvXihJTlBVVHxCVVRUT058U0VMRUNUfFRFWFRBUkVBKSQvLnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIHdoaWxlIChwYXJlbnROb2RlKSB7XG4gICAgICBpZiAocGFyZW50Tm9kZS50YWdOYW1lID09PSBcIkZJRUxEU0VUXCIgJiYgcGFyZW50Tm9kZS5kaXNhYmxlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBwYXJlbnROb2RlLmNoaWxkcmVuLml0ZW0oaSk7XG4gICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09IFwiTEVHRU5EXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzLmNhbGwocGFyZW50Tm9kZSwgXCJmaWVsZHNldFtkaXNhYmxlZF0gKlwiKSA/IHRydWUgOiAhY2hpbGQuY29udGFpbnMobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZTIob3B0aW9ucywgbm9kZSkge1xuICBpZiAobm9kZS5kaXNhYmxlZCB8fCBpc0hpZGRlbklucHV0KG5vZGUpIHx8IGlzSGlkZGVuKG5vZGUsIG9wdGlvbnMpIHx8IC8vIEZvciBhIGRldGFpbHMgZWxlbWVudCB3aXRoIGEgc3VtbWFyeSwgdGhlIHN1bW1hcnkgZWxlbWVudCBnZXRzIHRoZSBmb2N1c1xuICBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB8fCBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0KG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUgPSBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUyKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB8fCBnZXRUYWJpbmRleChub2RlKSA8IDAgfHwgIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIGlzVmFsaWRTaGFkb3dSb290VGFiYmFibGUgPSBmdW5jdGlvbiBpc1ZhbGlkU2hhZG93Um9vdFRhYmJhYmxlMihzaGFkb3dIb3N0Tm9kZSkge1xuICB2YXIgdGFiSW5kZXggPSBwYXJzZUludChzaGFkb3dIb3N0Tm9kZS5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKSwgMTApO1xuICBpZiAoaXNOYU4odGFiSW5kZXgpIHx8IHRhYkluZGV4ID49IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xudmFyIHNvcnRCeU9yZGVyID0gZnVuY3Rpb24gc29ydEJ5T3JkZXIyKGNhbmRpZGF0ZXMpIHtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICB2YXIgaXNTY29wZSA9ICEhaXRlbS5zY29wZTtcbiAgICB2YXIgZWxlbWVudCA9IGlzU2NvcGUgPyBpdGVtLnNjb3BlIDogaXRlbTtcbiAgICB2YXIgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChlbGVtZW50LCBpc1Njb3BlKTtcbiAgICB2YXIgZWxlbWVudHMgPSBpc1Njb3BlID8gc29ydEJ5T3JkZXIyKGl0ZW0uY2FuZGlkYXRlcykgOiBlbGVtZW50O1xuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgaXNTY29wZSA/IHJlZ3VsYXJUYWJiYWJsZXMucHVzaC5hcHBseShyZWd1bGFyVGFiYmFibGVzLCBlbGVtZW50cykgOiByZWd1bGFyVGFiYmFibGVzLnB1c2goZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgaXNTY29wZSxcbiAgICAgICAgY29udGVudDogZWxlbWVudHNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvcmRlcmVkVGFiYmFibGVzLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpLnJlZHVjZShmdW5jdGlvbihhY2MsIHNvcnRhYmxlKSB7XG4gICAgc29ydGFibGUuaXNTY29wZSA/IGFjYy5wdXNoLmFwcGx5KGFjYywgc29ydGFibGUuY29udGVudCkgOiBhY2MucHVzaChzb3J0YWJsZS5jb250ZW50KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSkuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xufTtcbnZhciB0YWJiYWJsZSA9IGZ1bmN0aW9uIHRhYmJhYmxlMihlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXM7XG4gIGlmIChvcHRpb25zLmdldFNoYWRvd1Jvb3QpIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KFtlbF0sIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwge1xuICAgICAgZmlsdGVyOiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IGZhbHNlLFxuICAgICAgZ2V0U2hhZG93Um9vdDogb3B0aW9ucy5nZXRTaGFkb3dSb290LFxuICAgICAgc2hhZG93Um9vdEZpbHRlcjogaXNWYWxpZFNoYWRvd1Jvb3RUYWJiYWJsZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgfVxuICByZXR1cm4gc29ydEJ5T3JkZXIoY2FuZGlkYXRlcyk7XG59O1xudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZTIoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBjYW5kaWRhdGVzO1xuICBpZiAob3B0aW9ucy5nZXRTaGFkb3dSb290KSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXNJdGVyYXRpdmVseShbZWxdLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIHtcbiAgICAgIGZpbHRlcjogaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpLFxuICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgIGdldFNoYWRvd1Jvb3Q6IG9wdGlvbnMuZ2V0U2hhZG93Um9vdFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUuYmluZChudWxsLCBvcHRpb25zKSk7XG4gIH1cbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xudmFyIGlzVGFiYmFibGUgPSBmdW5jdGlvbiBpc1RhYmJhYmxlMihub2RlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBub2RlIHByb3ZpZGVkXCIpO1xuICB9XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgY2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcbnZhciBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciA9IC8qIEBfX1BVUkVfXyAqLyBjYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KFwiaWZyYW1lXCIpLmpvaW4oXCIsXCIpO1xudmFyIGlzRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNGb2N1c2FibGUyKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG5vZGUgcHJvdmlkZWRcIik7XG4gIH1cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxuLy8gbm9kZV9tb2R1bGVzL2ZvY3VzLXRyYXAvZGlzdC9mb2N1cy10cmFwLmVzbS5qc1xuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG52YXIgYWN0aXZlRm9jdXNUcmFwcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdHJhcFF1ZXVlID0gW107XG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVUcmFwOiBmdW5jdGlvbiBhY3RpdmF0ZVRyYXAodHJhcCkge1xuICAgICAgaWYgKHRyYXBRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhY3RpdmVUcmFwID0gdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGFjdGl2ZVRyYXAgIT09IHRyYXApIHtcbiAgICAgICAgICBhY3RpdmVUcmFwLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcbiAgICAgIGlmICh0cmFwSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgICB0cmFwUXVldWUucHVzaCh0cmFwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlYWN0aXZhdGVUcmFwOiBmdW5jdGlvbiBkZWFjdGl2YXRlVHJhcCh0cmFwKSB7XG4gICAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFF1ZXVlLmluZGV4T2YodHJhcCk7XG4gICAgICBpZiAodHJhcEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0cmFwUXVldWUuc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICB9XG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXS51bnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSgpO1xudmFyIGlzU2VsZWN0YWJsZUlucHV0ID0gZnVuY3Rpb24gaXNTZWxlY3RhYmxlSW5wdXQyKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiICYmIHR5cGVvZiBub2RlLnNlbGVjdCA9PT0gXCJmdW5jdGlvblwiO1xufTtcbnZhciBpc0VzY2FwZUV2ZW50ID0gZnVuY3Rpb24gaXNFc2NhcGVFdmVudDIoZSkge1xuICByZXR1cm4gZS5rZXkgPT09IFwiRXNjYXBlXCIgfHwgZS5rZXkgPT09IFwiRXNjXCIgfHwgZS5rZXlDb2RlID09PSAyNztcbn07XG52YXIgaXNUYWJFdmVudCA9IGZ1bmN0aW9uIGlzVGFiRXZlbnQyKGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSBcIlRhYlwiIHx8IGUua2V5Q29kZSA9PT0gOTtcbn07XG52YXIgZGVsYXkgPSBmdW5jdGlvbiBkZWxheTIoZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufTtcbnZhciBmaW5kSW5kZXggPSBmdW5jdGlvbiBmaW5kSW5kZXgyKGFyciwgZm4pIHtcbiAgdmFyIGlkeCA9IC0xO1xuICBhcnIuZXZlcnkoZnVuY3Rpb24odmFsdWUsIGkpIHtcbiAgICBpZiAoZm4odmFsdWUpKSB7XG4gICAgICBpZHggPSBpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiBpZHg7XG59O1xudmFyIHZhbHVlT3JIYW5kbGVyID0gZnVuY3Rpb24gdmFsdWVPckhhbmRsZXIyKHZhbHVlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gdmFsdWUuYXBwbHkodm9pZCAwLCBwYXJhbXMpIDogdmFsdWU7XG59O1xudmFyIGdldEFjdHVhbFRhcmdldCA9IGZ1bmN0aW9uIGdldEFjdHVhbFRhcmdldDIoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnRhcmdldC5zaGFkb3dSb290ICYmIHR5cGVvZiBldmVudC5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIiA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpWzBdIDogZXZlbnQudGFyZ2V0O1xufTtcbnZhciBjcmVhdGVGb2N1c1RyYXAgPSBmdW5jdGlvbiBjcmVhdGVGb2N1c1RyYXAyKGVsZW1lbnRzLCB1c2VyT3B0aW9ucykge1xuICB2YXIgZG9jID0gKHVzZXJPcHRpb25zID09PSBudWxsIHx8IHVzZXJPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyT3B0aW9ucy5kb2N1bWVudCkgfHwgZG9jdW1lbnQ7XG4gIHZhciBjb25maWcgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IHRydWUsXG4gICAgZXNjYXBlRGVhY3RpdmF0ZXM6IHRydWUsXG4gICAgZGVsYXlJbml0aWFsRm9jdXM6IHRydWVcbiAgfSwgdXNlck9wdGlvbnMpO1xuICB2YXIgc3RhdGUgPSB7XG4gICAgLy8gY29udGFpbmVycyBnaXZlbiB0byBjcmVhdGVGb2N1c1RyYXAoKVxuICAgIC8vIEB0eXBlIHtBcnJheTxIVE1MRWxlbWVudD59XG4gICAgY29udGFpbmVyczogW10sXG4gICAgLy8gbGlzdCBvZiBvYmplY3RzIGlkZW50aWZ5aW5nIHRhYmJhYmxlIG5vZGVzIGluIGBjb250YWluZXJzYCBpbiB0aGUgdHJhcFxuICAgIC8vIE5PVEU6IGl0J3MgcG9zc2libGUgdGhhdCBhIGdyb3VwIGhhcyBubyB0YWJiYWJsZSBub2RlcyBpZiBub2RlcyBnZXQgcmVtb3ZlZCB3aGlsZSB0aGUgdHJhcFxuICAgIC8vICBpcyBhY3RpdmUsIGJ1dCB0aGUgdHJhcCBzaG91bGQgbmV2ZXIgZ2V0IHRvIGEgc3RhdGUgd2hlcmUgdGhlcmUgaXNuJ3QgYXQgbGVhc3Qgb25lIGdyb3VwXG4gICAgLy8gIHdpdGggYXQgbGVhc3Qgb25lIHRhYmJhYmxlIG5vZGUgaW4gaXQgKHRoYXQgd291bGQgbGVhZCB0byBhbiBlcnJvciBjb25kaXRpb24gdGhhdCB3b3VsZFxuICAgIC8vICByZXN1bHQgaW4gYW4gZXJyb3IgYmVpbmcgdGhyb3duKVxuICAgIC8vIEB0eXBlIHtBcnJheTx7XG4gICAgLy8gICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIC8vICAgdGFiYmFibGVOb2RlczogQXJyYXk8SFRNTEVsZW1lbnQ+LCAvLyBlbXB0eSBpZiBub25lXG4gICAgLy8gICBmb2N1c2FibGVOb2RlczogQXJyYXk8SFRNTEVsZW1lbnQ+LCAvLyBlbXB0eSBpZiBub25lXG4gICAgLy8gICBmaXJzdFRhYmJhYmxlTm9kZTogSFRNTEVsZW1lbnR8bnVsbCxcbiAgICAvLyAgIGxhc3RUYWJiYWJsZU5vZGU6IEhUTUxFbGVtZW50fG51bGwsXG4gICAgLy8gICBuZXh0VGFiYmFibGVOb2RlOiAobm9kZTogSFRNTEVsZW1lbnQsIGZvcndhcmQ6IGJvb2xlYW4pID0+IEhUTUxFbGVtZW50fHVuZGVmaW5lZFxuICAgIC8vIH0+fVxuICAgIGNvbnRhaW5lckdyb3VwczogW10sXG4gICAgLy8gc2FtZSBvcmRlci9sZW5ndGggYXMgYGNvbnRhaW5lcnNgIGxpc3RcbiAgICAvLyByZWZlcmVuY2VzIHRvIG9iamVjdHMgaW4gYGNvbnRhaW5lckdyb3Vwc2AsIGJ1dCBvbmx5IHRob3NlIHRoYXQgYWN0dWFsbHkgaGF2ZVxuICAgIC8vICB0YWJiYWJsZSBub2RlcyBpbiB0aGVtXG4gICAgLy8gTk9URTogc2FtZSBvcmRlciBhcyBgY29udGFpbmVyc2AgYW5kIGBjb250YWluZXJHcm91cHNgLCBidXQgX19ub3QgbmVjZXNzYXJpbHlfX1xuICAgIC8vICB0aGUgc2FtZSBsZW5ndGhcbiAgICB0YWJiYWJsZUdyb3VwczogW10sXG4gICAgbm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uOiBudWxsLFxuICAgIG1vc3RSZWNlbnRseUZvY3VzZWROb2RlOiBudWxsLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgcGF1c2VkOiBmYWxzZSxcbiAgICAvLyB0aW1lciBJRCBmb3Igd2hlbiBkZWxheUluaXRpYWxGb2N1cyBpcyB0cnVlIGFuZCBpbml0aWFsIGZvY3VzIGluIHRoaXMgdHJhcFxuICAgIC8vICBoYXMgYmVlbiBkZWxheWVkIGR1cmluZyBhY3RpdmF0aW9uXG4gICAgZGVsYXlJbml0aWFsRm9jdXNUaW1lcjogdm9pZCAwXG4gIH07XG4gIHZhciB0cmFwO1xuICB2YXIgZ2V0T3B0aW9uID0gZnVuY3Rpb24gZ2V0T3B0aW9uMihjb25maWdPdmVycmlkZU9wdGlvbnMsIG9wdGlvbk5hbWUsIGNvbmZpZ09wdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gY29uZmlnT3ZlcnJpZGVPcHRpb25zICYmIGNvbmZpZ092ZXJyaWRlT3B0aW9uc1tvcHRpb25OYW1lXSAhPT0gdm9pZCAwID8gY29uZmlnT3ZlcnJpZGVPcHRpb25zW29wdGlvbk5hbWVdIDogY29uZmlnW2NvbmZpZ09wdGlvbk5hbWUgfHwgb3B0aW9uTmFtZV07XG4gIH07XG4gIHZhciBmaW5kQ29udGFpbmVySW5kZXggPSBmdW5jdGlvbiBmaW5kQ29udGFpbmVySW5kZXgyKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gc3RhdGUuY29udGFpbmVyR3JvdXBzLmZpbmRJbmRleChmdW5jdGlvbihfcmVmKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gX3JlZi5jb250YWluZXIsIHRhYmJhYmxlTm9kZXMgPSBfcmVmLnRhYmJhYmxlTm9kZXM7XG4gICAgICByZXR1cm4gY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpIHx8IC8vIGZhbGwgYmFjayB0byBleHBsaWNpdCB0YWJiYWJsZSBzZWFyY2ggd2hpY2ggd2lsbCB0YWtlIGludG8gY29uc2lkZXJhdGlvbiBhbnlcbiAgICAgIC8vICB3ZWIgY29tcG9uZW50cyBpZiB0aGUgYHRhYmJhYmxlT3B0aW9ucy5nZXRTaGFkb3dSb290YCBvcHRpb24gd2FzIHVzZWQgZm9yXG4gICAgICAvLyAgdGhlIHRyYXAsIGVuYWJsaW5nIHNoYWRvdyBET00gc3VwcG9ydCBpbiB0YWJiYWJsZSAoYE5vZGUuY29udGFpbnMoKWAgZG9lc24ndFxuICAgICAgLy8gIGxvb2sgaW5zaWRlIHdlYiBjb21wb25lbnRzIGV2ZW4gaWYgb3BlbilcbiAgICAgIHRhYmJhYmxlTm9kZXMuZmluZChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlID09PSBlbGVtZW50O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHZhciBnZXROb2RlRm9yT3B0aW9uID0gZnVuY3Rpb24gZ2V0Tm9kZUZvck9wdGlvbjIob3B0aW9uTmFtZSkge1xuICAgIHZhciBvcHRpb25WYWx1ZSA9IGNvbmZpZ1tvcHRpb25OYW1lXTtcbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgcGFyYW1zW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuICAgICAgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZS5hcHBseSh2b2lkIDAsIHBhcmFtcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25WYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgb3B0aW9uVmFsdWUgPSB2b2lkIDA7XG4gICAgfVxuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcbiAgICAgIGlmIChvcHRpb25WYWx1ZSA9PT0gdm9pZCAwIHx8IG9wdGlvblZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uVmFsdWU7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgXCIuY29uY2F0KG9wdGlvbk5hbWUsIFwiYCB3YXMgc3BlY2lmaWVkIGJ1dCB3YXMgbm90IGEgbm9kZSwgb3IgZGlkIG5vdCByZXR1cm4gYSBub2RlXCIpKTtcbiAgICB9XG4gICAgdmFyIG5vZGUgPSBvcHRpb25WYWx1ZTtcbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBub2RlID0gZG9jLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uVmFsdWUpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImBcIi5jb25jYXQob3B0aW9uTmFtZSwgXCJgIGFzIHNlbGVjdG9yIHJlZmVycyB0byBubyBrbm93biBub2RlXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIHZhciBnZXRJbml0aWFsRm9jdXNOb2RlID0gZnVuY3Rpb24gZ2V0SW5pdGlhbEZvY3VzTm9kZTIoKSB7XG4gICAgdmFyIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKFwiaW5pdGlhbEZvY3VzXCIpO1xuICAgIGlmIChub2RlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobm9kZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KGRvYy5hY3RpdmVFbGVtZW50KSA+PSAwKSB7XG4gICAgICAgIG5vZGUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBmaXJzdFRhYmJhYmxlR3JvdXAgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1swXTtcbiAgICAgICAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gZmlyc3RUYWJiYWJsZUdyb3VwICYmIGZpcnN0VGFiYmFibGVHcm91cC5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgbm9kZSA9IGZpcnN0VGFiYmFibGVOb2RlIHx8IGdldE5vZGVGb3JPcHRpb24oXCJmYWxsYmFja0ZvY3VzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdXIgZm9jdXMtdHJhcCBuZWVkcyB0byBoYXZlIGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZWxlbWVudFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIHZhciB1cGRhdGVUYWJiYWJsZU5vZGVzID0gZnVuY3Rpb24gdXBkYXRlVGFiYmFibGVOb2RlczIoKSB7XG4gICAgc3RhdGUuY29udGFpbmVyR3JvdXBzID0gc3RhdGUuY29udGFpbmVycy5tYXAoZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gICAgICB2YXIgdGFiYmFibGVOb2RlcyA9IHRhYmJhYmxlKGNvbnRhaW5lciwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG4gICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSBmb2N1c2FibGUoY29udGFpbmVyLCBjb25maWcudGFiYmFibGVPcHRpb25zKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgdGFiYmFibGVOb2RlcyxcbiAgICAgICAgZm9jdXNhYmxlTm9kZXMsXG4gICAgICAgIGZpcnN0VGFiYmFibGVOb2RlOiB0YWJiYWJsZU5vZGVzLmxlbmd0aCA+IDAgPyB0YWJiYWJsZU5vZGVzWzBdIDogbnVsbCxcbiAgICAgICAgbGFzdFRhYmJhYmxlTm9kZTogdGFiYmFibGVOb2Rlcy5sZW5ndGggPiAwID8gdGFiYmFibGVOb2Rlc1t0YWJiYWJsZU5vZGVzLmxlbmd0aCAtIDFdIDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmRzIHRoZSBfX3RhYmJhYmxlX18gbm9kZSB0aGF0IGZvbGxvd3MgdGhlIGdpdmVuIG5vZGUgaW4gdGhlIHNwZWNpZmllZCBkaXJlY3Rpb24sXG4gICAgICAgICAqICBpbiB0aGlzIGNvbnRhaW5lciwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcndhcmRdIFRydWUgaWYgZ29pbmcgaW4gZm9yd2FyZCB0YWIgb3JkZXI7IGZhbHNlIGlmIGdvaW5nXG4gICAgICAgICAqICBpbiByZXZlcnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8dW5kZWZpbmVkfSBUaGUgbmV4dCB0YWJiYWJsZSBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0VGFiYmFibGVOb2RlOiBmdW5jdGlvbiBuZXh0VGFiYmFibGVOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgZm9yd2FyZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgICAgICB2YXIgbm9kZUlkeCA9IGZvY3VzYWJsZU5vZGVzLmZpbmRJbmRleChmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICByZXR1cm4gbiA9PT0gbm9kZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobm9kZUlkeCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9jdXNhYmxlTm9kZXMuc2xpY2Uobm9kZUlkeCArIDEpLmZpbmQoZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICByZXR1cm4gaXNUYWJiYWJsZShuLCBjb25maWcudGFiYmFibGVPcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZm9jdXNhYmxlTm9kZXMuc2xpY2UoMCwgbm9kZUlkeCkucmV2ZXJzZSgpLmZpbmQoZnVuY3Rpb24obikge1xuICAgICAgICAgICAgcmV0dXJuIGlzVGFiYmFibGUobiwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgc3RhdGUudGFiYmFibGVHcm91cHMgPSBzdGF0ZS5jb250YWluZXJHcm91cHMuZmlsdGVyKGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICByZXR1cm4gZ3JvdXAudGFiYmFibGVOb2Rlcy5sZW5ndGggPiAwO1xuICAgIH0pO1xuICAgIGlmIChzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggPD0gMCAmJiAhZ2V0Tm9kZUZvck9wdGlvbihcImZhbGxiYWNrRm9jdXNcIikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdXIgZm9jdXMtdHJhcCBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNvbnRhaW5lciB3aXRoIGF0IGxlYXN0IG9uZSB0YWJiYWJsZSBub2RlIGluIGl0IGF0IGFsbCB0aW1lc1wiKTtcbiAgICB9XG4gIH07XG4gIHZhciB0cnlGb2N1cyA9IGZ1bmN0aW9uIHRyeUZvY3VzMihub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlID09PSBkb2MuYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZm9jdXMpIHtcbiAgICAgIHRyeUZvY3VzMihnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlLmZvY3VzKHtcbiAgICAgIHByZXZlbnRTY3JvbGw6ICEhY29uZmlnLnByZXZlbnRTY3JvbGxcbiAgICB9KTtcbiAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IG5vZGU7XG4gICAgaWYgKGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpKSB7XG4gICAgICBub2RlLnNlbGVjdCgpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGdldFJldHVybkZvY3VzTm9kZSA9IGZ1bmN0aW9uIGdldFJldHVybkZvY3VzTm9kZTIocHJldmlvdXNBY3RpdmVFbGVtZW50KSB7XG4gICAgdmFyIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKFwic2V0UmV0dXJuRm9jdXNcIiwgcHJldmlvdXNBY3RpdmVFbGVtZW50KTtcbiAgICByZXR1cm4gbm9kZSA/IG5vZGUgOiBub2RlID09PSBmYWxzZSA/IGZhbHNlIDogcHJldmlvdXNBY3RpdmVFbGVtZW50O1xuICB9O1xuICB2YXIgY2hlY2tQb2ludGVyRG93biA9IGZ1bmN0aW9uIGNoZWNrUG9pbnRlckRvd24yKGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0QWN0dWFsVGFyZ2V0KGUpO1xuICAgIGlmIChmaW5kQ29udGFpbmVySW5kZXgodGFyZ2V0KSA+PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMsIGUpKSB7XG4gICAgICB0cmFwLmRlYWN0aXZhdGUoe1xuICAgICAgICAvLyBpZiwgb24gZGVhY3RpdmF0aW9uLCB3ZSBzaG91bGQgcmV0dXJuIGZvY3VzIHRvIHRoZSBub2RlIG9yaWdpbmFsbHktZm9jdXNlZFxuICAgICAgICAvLyAgd2hlbiB0aGUgdHJhcCB3YXMgYWN0aXZhdGVkIChvciB0aGUgY29uZmlndXJlZCBgc2V0UmV0dXJuRm9jdXNgIG5vZGUpLFxuICAgICAgICAvLyAgdGhlbiBhc3N1bWUgaXQncyBhbHNvIE9LIHRvIHJldHVybiBmb2N1cyB0byB0aGUgb3V0c2lkZSBub2RlIHRoYXQgd2FzXG4gICAgICAgIC8vICBqdXN0IGNsaWNrZWQsIGNhdXNpbmcgZGVhY3RpdmF0aW9uLCBhcyBsb25nIGFzIHRoYXQgbm9kZSBpcyBmb2N1c2FibGU7XG4gICAgICAgIC8vICBpZiBpdCBpc24ndCBmb2N1c2FibGUsIHRoZW4gcmV0dXJuIGZvY3VzIHRvIHRoZSBvcmlnaW5hbCBub2RlIGZvY3VzZWRcbiAgICAgICAgLy8gIG9uIGFjdGl2YXRpb24gKG9yIHRoZSBjb25maWd1cmVkIGBzZXRSZXR1cm5Gb2N1c2Agbm9kZSlcbiAgICAgICAgLy8gTk9URTogYnkgc2V0dGluZyBgcmV0dXJuRm9jdXM6IGZhbHNlYCwgZGVhY3RpdmF0ZSgpIHdpbGwgZG8gbm90aGluZyxcbiAgICAgICAgLy8gIHdoaWNoIHdpbGwgcmVzdWx0IGluIHRoZSBvdXRzaWRlIGNsaWNrIHNldHRpbmcgZm9jdXMgdG8gdGhlIG5vZGVcbiAgICAgICAgLy8gIHRoYXQgd2FzIGNsaWNrZWQsIHdoZXRoZXIgaXQncyBmb2N1c2FibGUgb3Igbm90OyBieSBzZXR0aW5nXG4gICAgICAgIC8vICBgcmV0dXJuRm9jdXM6IHRydWVgLCB3ZSdsbCBhdHRlbXB0IHRvIHJlLWZvY3VzIHRoZSBub2RlIG9yaWdpbmFsbHktZm9jdXNlZFxuICAgICAgICAvLyAgb24gYWN0aXZhdGlvbiAob3IgdGhlIGNvbmZpZ3VyZWQgYHNldFJldHVybkZvY3VzYCBub2RlKVxuICAgICAgICByZXR1cm5Gb2N1czogY29uZmlnLnJldHVybkZvY3VzT25EZWFjdGl2YXRlICYmICFpc0ZvY3VzYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5hbGxvd091dHNpZGVDbGljaywgZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuICB2YXIgY2hlY2tGb2N1c0luID0gZnVuY3Rpb24gY2hlY2tGb2N1c0luMihlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICB2YXIgdGFyZ2V0Q29udGFpbmVkID0gZmluZENvbnRhaW5lckluZGV4KHRhcmdldCkgPj0gMDtcbiAgICBpZiAodGFyZ2V0Q29udGFpbmVkIHx8IHRhcmdldCBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICBpZiAodGFyZ2V0Q29udGFpbmVkKSB7XG4gICAgICAgIHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlID0gdGFyZ2V0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9XG4gIH07XG4gIHZhciBjaGVja1RhYiA9IGZ1bmN0aW9uIGNoZWNrVGFiMihlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgdmFyIGRlc3RpbmF0aW9uTm9kZSA9IG51bGw7XG4gICAgaWYgKHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQpO1xuICAgICAgdmFyIGNvbnRhaW5lckdyb3VwID0gY29udGFpbmVySW5kZXggPj0gMCA/IHN0YXRlLmNvbnRhaW5lckdyb3Vwc1tjb250YWluZXJJbmRleF0gOiB2b2lkIDA7XG4gICAgICBpZiAoY29udGFpbmVySW5kZXggPCAwKSB7XG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gc3RhdGUudGFiYmFibGVHcm91cHNbc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMV0ubGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1swXS5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgIHZhciBzdGFydE9mR3JvdXBJbmRleCA9IGZpbmRJbmRleChzdGF0ZS50YWJiYWJsZUdyb3VwcywgZnVuY3Rpb24oX3JlZjIpIHtcbiAgICAgICAgICB2YXIgZmlyc3RUYWJiYWJsZU5vZGUgPSBfcmVmMi5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBmaXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdGFydE9mR3JvdXBJbmRleCA8IDAgJiYgKGNvbnRhaW5lckdyb3VwLmNvbnRhaW5lciA9PT0gdGFyZ2V0IHx8IGlzRm9jdXNhYmxlKHRhcmdldCwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykgJiYgIWlzVGFiYmFibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhY29udGFpbmVyR3JvdXAubmV4dFRhYmJhYmxlTm9kZSh0YXJnZXQsIGZhbHNlKSkpIHtcbiAgICAgICAgICBzdGFydE9mR3JvdXBJbmRleCA9IGNvbnRhaW5lckluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydE9mR3JvdXBJbmRleCA+PSAwKSB7XG4gICAgICAgICAgdmFyIGRlc3RpbmF0aW9uR3JvdXBJbmRleCA9IHN0YXJ0T2ZHcm91cEluZGV4ID09PSAwID8gc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMSA6IHN0YXJ0T2ZHcm91cEluZGV4IC0gMTtcbiAgICAgICAgICB2YXIgZGVzdGluYXRpb25Hcm91cCA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzW2Rlc3RpbmF0aW9uR3JvdXBJbmRleF07XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gZGVzdGluYXRpb25Hcm91cC5sYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbGFzdE9mR3JvdXBJbmRleCA9IGZpbmRJbmRleChzdGF0ZS50YWJiYWJsZUdyb3VwcywgZnVuY3Rpb24oX3JlZjMpIHtcbiAgICAgICAgICB2YXIgbGFzdFRhYmJhYmxlTm9kZSA9IF9yZWYzLmxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gbGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsYXN0T2ZHcm91cEluZGV4IDwgMCAmJiAoY29udGFpbmVyR3JvdXAuY29udGFpbmVyID09PSB0YXJnZXQgfHwgaXNGb2N1c2FibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhaXNUYWJiYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCkpKSB7XG4gICAgICAgICAgbGFzdE9mR3JvdXBJbmRleCA9IGNvbnRhaW5lckluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0T2ZHcm91cEluZGV4ID49IDApIHtcbiAgICAgICAgICB2YXIgX2Rlc3RpbmF0aW9uR3JvdXBJbmRleCA9IGxhc3RPZkdyb3VwSW5kZXggPT09IHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCAtIDEgPyAwIDogbGFzdE9mR3JvdXBJbmRleCArIDE7XG4gICAgICAgICAgdmFyIF9kZXN0aW5hdGlvbkdyb3VwID0gc3RhdGUudGFiYmFibGVHcm91cHNbX2Rlc3RpbmF0aW9uR3JvdXBJbmRleF07XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gX2Rlc3RpbmF0aW9uR3JvdXAuZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdGluYXRpb25Ob2RlID0gZ2V0Tm9kZUZvck9wdGlvbihcImZhbGxiYWNrRm9jdXNcIik7XG4gICAgfVxuICAgIGlmIChkZXN0aW5hdGlvbk5vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeUZvY3VzKGRlc3RpbmF0aW9uTm9kZSk7XG4gICAgfVxuICB9O1xuICB2YXIgY2hlY2tLZXkgPSBmdW5jdGlvbiBjaGVja0tleTIoZSkge1xuICAgIGlmIChpc0VzY2FwZUV2ZW50KGUpICYmIHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcywgZSkgIT09IGZhbHNlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzVGFiRXZlbnQoZSkpIHtcbiAgICAgIGNoZWNrVGFiKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTtcbiAgdmFyIGNoZWNrQ2xpY2sgPSBmdW5jdGlvbiBjaGVja0NsaWNrMihlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KHRhcmdldCkgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzLCBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmFsbG93T3V0c2lkZUNsaWNrLCBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfTtcbiAgdmFyIGFkZExpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyczIoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWN0aXZlRm9jdXNUcmFwcy5hY3RpdmF0ZVRyYXAodHJhcCk7XG4gICAgc3RhdGUuZGVsYXlJbml0aWFsRm9jdXNUaW1lciA9IGNvbmZpZy5kZWxheUluaXRpYWxGb2N1cyA/IGRlbGF5KGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9KSA6IHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2hlY2tQb2ludGVyRG93biwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGNoZWNrUG9pbnRlckRvd24sIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tDbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoZWNrS2V5LCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfTtcbiAgdmFyIHJlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyczIoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoZWNrS2V5LCB0cnVlKTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfTtcbiAgdHJhcCA9IHtcbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmFjdGl2ZTtcbiAgICB9LFxuICAgIGdldCBwYXVzZWQoKSB7XG4gICAgICByZXR1cm4gc3RhdGUucGF1c2VkO1xuICAgIH0sXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIGFjdGl2YXRlKGFjdGl2YXRlT3B0aW9ucykge1xuICAgICAgaWYgKHN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvbkFjdGl2YXRlID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgXCJvbkFjdGl2YXRlXCIpO1xuICAgICAgdmFyIG9uUG9zdEFjdGl2YXRlID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgXCJvblBvc3RBY3RpdmF0ZVwiKTtcbiAgICAgIHZhciBjaGVja0NhbkZvY3VzVHJhcCA9IGdldE9wdGlvbihhY3RpdmF0ZU9wdGlvbnMsIFwiY2hlY2tDYW5Gb2N1c1RyYXBcIik7XG4gICAgICBpZiAoIWNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgICAgaWYgKG9uQWN0aXZhdGUpIHtcbiAgICAgICAgb25BY3RpdmF0ZSgpO1xuICAgICAgfVxuICAgICAgdmFyIGZpbmlzaEFjdGl2YXRpb24gPSBmdW5jdGlvbiBmaW5pc2hBY3RpdmF0aW9uMigpIHtcbiAgICAgICAgaWYgKGNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgICB9XG4gICAgICAgIGFkZExpc3RlbmVycygpO1xuICAgICAgICBpZiAob25Qb3N0QWN0aXZhdGUpIHtcbiAgICAgICAgICBvblBvc3RBY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKGNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgIGNoZWNrQ2FuRm9jdXNUcmFwKHN0YXRlLmNvbnRhaW5lcnMuY29uY2F0KCkpLnRoZW4oZmluaXNoQWN0aXZhdGlvbiwgZmluaXNoQWN0aXZhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgZmluaXNoQWN0aXZhdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiBkZWFjdGl2YXRlKGRlYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgICBpZiAoIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBvbkRlYWN0aXZhdGU6IGNvbmZpZy5vbkRlYWN0aXZhdGUsXG4gICAgICAgIG9uUG9zdERlYWN0aXZhdGU6IGNvbmZpZy5vblBvc3REZWFjdGl2YXRlLFxuICAgICAgICBjaGVja0NhblJldHVybkZvY3VzOiBjb25maWcuY2hlY2tDYW5SZXR1cm5Gb2N1c1xuICAgICAgfSwgZGVhY3RpdmF0ZU9wdGlvbnMpO1xuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLmRlbGF5SW5pdGlhbEZvY3VzVGltZXIpO1xuICAgICAgc3RhdGUuZGVsYXlJbml0aWFsRm9jdXNUaW1lciA9IHZvaWQgMDtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZUZvY3VzVHJhcHMuZGVhY3RpdmF0ZVRyYXAodHJhcCk7XG4gICAgICB2YXIgb25EZWFjdGl2YXRlID0gZ2V0T3B0aW9uKG9wdGlvbnMsIFwib25EZWFjdGl2YXRlXCIpO1xuICAgICAgdmFyIG9uUG9zdERlYWN0aXZhdGUgPSBnZXRPcHRpb24ob3B0aW9ucywgXCJvblBvc3REZWFjdGl2YXRlXCIpO1xuICAgICAgdmFyIGNoZWNrQ2FuUmV0dXJuRm9jdXMgPSBnZXRPcHRpb24ob3B0aW9ucywgXCJjaGVja0NhblJldHVybkZvY3VzXCIpO1xuICAgICAgdmFyIHJldHVybkZvY3VzID0gZ2V0T3B0aW9uKG9wdGlvbnMsIFwicmV0dXJuRm9jdXNcIiwgXCJyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZVwiKTtcbiAgICAgIGlmIChvbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgb25EZWFjdGl2YXRlKCk7XG4gICAgICB9XG4gICAgICB2YXIgZmluaXNoRGVhY3RpdmF0aW9uID0gZnVuY3Rpb24gZmluaXNoRGVhY3RpdmF0aW9uMigpIHtcbiAgICAgICAgZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHJldHVybkZvY3VzKSB7XG4gICAgICAgICAgICB0cnlGb2N1cyhnZXRSZXR1cm5Gb2N1c05vZGUoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvblBvc3REZWFjdGl2YXRlKSB7XG4gICAgICAgICAgICBvblBvc3REZWFjdGl2YXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBpZiAocmV0dXJuRm9jdXMgJiYgY2hlY2tDYW5SZXR1cm5Gb2N1cykge1xuICAgICAgICBjaGVja0NhblJldHVybkZvY3VzKGdldFJldHVybkZvY3VzTm9kZShzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24pKS50aGVuKGZpbmlzaERlYWN0aXZhdGlvbiwgZmluaXNoRGVhY3RpdmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBmaW5pc2hEZWFjdGl2YXRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgaWYgKHN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB1bnBhdXNlOiBmdW5jdGlvbiB1bnBhdXNlKCkge1xuICAgICAgaWYgKCFzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzOiBmdW5jdGlvbiB1cGRhdGVDb250YWluZXJFbGVtZW50cyhjb250YWluZXJFbGVtZW50cykge1xuICAgICAgdmFyIGVsZW1lbnRzQXNBcnJheSA9IFtdLmNvbmNhdChjb250YWluZXJFbGVtZW50cykuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgc3RhdGUuY29udGFpbmVycyA9IGVsZW1lbnRzQXNBcnJheS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIgPyBkb2MucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnQ7XG4gICAgICB9KTtcbiAgICAgIGlmIChzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuICB0cmFwLnVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzKGVsZW1lbnRzKTtcbiAgcmV0dXJuIHRyYXA7XG59O1xuXG4vLyBwYWNrYWdlcy9mb2N1cy9zcmMvaW5kZXguanNcbmZ1bmN0aW9uIHNyY19kZWZhdWx0KEFscGluZSkge1xuICBsZXQgbGFzdEZvY3VzZWQ7XG4gIGxldCBjdXJyZW50Rm9jdXNlZDtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsICgpID0+IHtcbiAgICBsYXN0Rm9jdXNlZCA9IGN1cnJlbnRGb2N1c2VkO1xuICAgIGN1cnJlbnRGb2N1c2VkID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgfSk7XG4gIEFscGluZS5tYWdpYyhcImZvY3VzXCIsIChlbCkgPT4ge1xuICAgIGxldCB3aXRoaW4gPSBlbDtcbiAgICByZXR1cm4ge1xuICAgICAgX19ub3Njcm9sbDogZmFsc2UsXG4gICAgICBfX3dyYXBBcm91bmQ6IGZhbHNlLFxuICAgICAgd2l0aGluKGVsMikge1xuICAgICAgICB3aXRoaW4gPSBlbDI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIHdpdGhvdXRTY3JvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuX19ub3Njcm9sbCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIG5vc2Nyb2xsKCkge1xuICAgICAgICB0aGlzLl9fbm9zY3JvbGwgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICB3aXRoV3JhcEFyb3VuZCgpIHtcbiAgICAgICAgdGhpcy5fX3dyYXBBcm91bmQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICB3cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aXRoV3JhcEFyb3VuZCgpO1xuICAgICAgfSxcbiAgICAgIGZvY3VzYWJsZShlbDIpIHtcbiAgICAgICAgcmV0dXJuIGlzRm9jdXNhYmxlKGVsMik7XG4gICAgICB9LFxuICAgICAgcHJldmlvdXNseUZvY3VzZWQoKSB7XG4gICAgICAgIHJldHVybiBsYXN0Rm9jdXNlZDtcbiAgICAgIH0sXG4gICAgICBsYXN0Rm9jdXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIGxhc3RGb2N1c2VkO1xuICAgICAgfSxcbiAgICAgIGZvY3VzZWQoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Rm9jdXNlZDtcbiAgICAgIH0sXG4gICAgICBmb2N1c2FibGVzKCkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh3aXRoaW4pKVxuICAgICAgICAgIHJldHVybiB3aXRoaW47XG4gICAgICAgIHJldHVybiBmb2N1c2FibGUod2l0aGluLCB7IGRpc3BsYXlDaGVjazogXCJub25lXCIgfSk7XG4gICAgICB9LFxuICAgICAgYWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVzKCk7XG4gICAgICB9LFxuICAgICAgaXNGaXJzdChlbDIpIHtcbiAgICAgICAgbGV0IGVscyA9IHRoaXMuYWxsKCk7XG4gICAgICAgIHJldHVybiBlbHNbMF0gJiYgZWxzWzBdLmlzU2FtZU5vZGUoZWwyKTtcbiAgICAgIH0sXG4gICAgICBpc0xhc3QoZWwyKSB7XG4gICAgICAgIGxldCBlbHMgPSB0aGlzLmFsbCgpO1xuICAgICAgICByZXR1cm4gZWxzLmxlbmd0aCAmJiBlbHMuc2xpY2UoLTEpWzBdLmlzU2FtZU5vZGUoZWwyKTtcbiAgICAgIH0sXG4gICAgICBnZXRGaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsKClbMF07XG4gICAgICB9LFxuICAgICAgZ2V0TGFzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsKCkuc2xpY2UoLTEpWzBdO1xuICAgICAgfSxcbiAgICAgIGdldE5leHQoKSB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5hbGwoKTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICBpZiAobGlzdC5pbmRleE9mKGN1cnJlbnQpID09PSAtMSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLl9fd3JhcEFyb3VuZCAmJiBsaXN0LmluZGV4T2YoY3VycmVudCkgPT09IGxpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHJldHVybiBsaXN0WzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0W2xpc3QuaW5kZXhPZihjdXJyZW50KSArIDFdO1xuICAgICAgfSxcbiAgICAgIGdldFByZXZpb3VzKCkge1xuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuYWxsKCk7XG4gICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKGxpc3QuaW5kZXhPZihjdXJyZW50KSA9PT0gLTEpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5fX3dyYXBBcm91bmQgJiYgbGlzdC5pbmRleE9mKGN1cnJlbnQpID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3Quc2xpY2UoLTEpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0W2xpc3QuaW5kZXhPZihjdXJyZW50KSAtIDFdO1xuICAgICAgfSxcbiAgICAgIGZpcnN0KCkge1xuICAgICAgICB0aGlzLmZvY3VzKHRoaXMuZ2V0Rmlyc3QoKSk7XG4gICAgICB9LFxuICAgICAgbGFzdCgpIHtcbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLmdldExhc3QoKSk7XG4gICAgICB9LFxuICAgICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLmdldE5leHQoKSk7XG4gICAgICB9LFxuICAgICAgcHJldmlvdXMoKSB7XG4gICAgICAgIHRoaXMuZm9jdXModGhpcy5nZXRQcmV2aW91cygpKTtcbiAgICAgIH0sXG4gICAgICBwcmV2KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91cygpO1xuICAgICAgfSxcbiAgICAgIGZvY3VzKGVsMikge1xuICAgICAgICBpZiAoIWVsMilcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICghZWwyLmhhc0F0dHJpYnV0ZShcInRhYmluZGV4XCIpKVxuICAgICAgICAgICAgZWwyLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgICBlbDIuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0aGlzLl9fbm9zY3JvbGwgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICBBbHBpbmUuZGlyZWN0aXZlKFwidHJhcFwiLCBBbHBpbmUuc2tpcER1cmluZ0Nsb25lKFxuICAgIChlbCwgeyBleHByZXNzaW9uLCBtb2RpZmllcnMgfSwgeyBlZmZlY3QsIGV2YWx1YXRlTGF0ZXIsIGNsZWFudXAgfSkgPT4ge1xuICAgICAgbGV0IGV2YWx1YXRvciA9IGV2YWx1YXRlTGF0ZXIoZXhwcmVzc2lvbik7XG4gICAgICBsZXQgb2xkVmFsdWUgPSBmYWxzZTtcbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXG4gICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICBmYWxsYmFja0ZvY3VzOiAoKSA9PiBlbFxuICAgICAgfTtcbiAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJub2F1dG9mb2N1c1wiKSkge1xuICAgICAgICBvcHRpb25zLmluaXRpYWxGb2N1cyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGF1dG9mb2N1c0VsID0gZWwucXVlcnlTZWxlY3RvcihcIlthdXRvZm9jdXNdXCIpO1xuICAgICAgICBpZiAoYXV0b2ZvY3VzRWwpXG4gICAgICAgICAgb3B0aW9ucy5pbml0aWFsRm9jdXMgPSBhdXRvZm9jdXNFbDtcbiAgICAgIH1cbiAgICAgIGxldCB0cmFwID0gY3JlYXRlRm9jdXNUcmFwKGVsLCBvcHRpb25zKTtcbiAgICAgIGxldCB1bmRvSW5lcnQgPSAoKSA9PiB7XG4gICAgICB9O1xuICAgICAgbGV0IHVuZG9EaXNhYmxlU2Nyb2xsaW5nID0gKCkgPT4ge1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlbGVhc2VGb2N1cyA9ICgpID0+IHtcbiAgICAgICAgdW5kb0luZXJ0KCk7XG4gICAgICAgIHVuZG9JbmVydCA9ICgpID0+IHtcbiAgICAgICAgfTtcbiAgICAgICAgdW5kb0Rpc2FibGVTY3JvbGxpbmcoKTtcbiAgICAgICAgdW5kb0Rpc2FibGVTY3JvbGxpbmcgPSAoKSA9PiB7XG4gICAgICAgIH07XG4gICAgICAgIHRyYXAuZGVhY3RpdmF0ZSh7XG4gICAgICAgICAgcmV0dXJuRm9jdXM6ICFtb2RpZmllcnMuaW5jbHVkZXMoXCJub3JldHVyblwiKVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBlZmZlY3QoKCkgPT4gZXZhbHVhdG9yKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAob2xkVmFsdWUgPT09IHZhbHVlKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHZhbHVlICYmICFvbGRWYWx1ZSkge1xuICAgICAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJub3Njcm9sbFwiKSlcbiAgICAgICAgICAgIHVuZG9EaXNhYmxlU2Nyb2xsaW5nID0gZGlzYWJsZVNjcm9sbGluZygpO1xuICAgICAgICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJpbmVydFwiKSlcbiAgICAgICAgICAgIHVuZG9JbmVydCA9IHNldEluZXJ0KGVsKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRyYXAuYWN0aXZhdGUoKTtcbiAgICAgICAgICB9LCAxNSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWx1ZSAmJiBvbGRWYWx1ZSkge1xuICAgICAgICAgIHJlbGVhc2VGb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIG9sZFZhbHVlID0gISF2YWx1ZTtcbiAgICAgIH0pKTtcbiAgICAgIGNsZWFudXAocmVsZWFzZUZvY3VzKTtcbiAgICB9LFxuICAgIC8vIFdoZW4gY2xvbmluZywgd2Ugb25seSB3YW50IHRvIGFkZCBhcmlhLWhpZGRlbiBhdHRyaWJ1dGVzIHRvIHRoZVxuICAgIC8vIERPTSBhbmQgbm90IHRyeSB0byBhY3R1YWxseSB0cmFwLCBhcyB0cmFwcGluZyBjYW4gbWVzcyB3aXRoIHRoZVxuICAgIC8vIGxpdmUgRE9NIGFuZCBpc24ndCBqdXN0IGlzb2xhdGVkIHRvIHRoZSBjbG9uZWQgRE9NLlxuICAgIChlbCwgeyBleHByZXNzaW9uLCBtb2RpZmllcnMgfSwgeyBldmFsdWF0ZSB9KSA9PiB7XG4gICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiaW5lcnRcIikgJiYgZXZhbHVhdGUoZXhwcmVzc2lvbikpXG4gICAgICAgIHNldEluZXJ0KGVsKTtcbiAgICB9XG4gICkpO1xufVxuZnVuY3Rpb24gc2V0SW5lcnQoZWwpIHtcbiAgbGV0IHVuZG9zID0gW107XG4gIGNyYXdsU2libGluZ3NVcChlbCwgKHNpYmxpbmcpID0+IHtcbiAgICBsZXQgY2FjaGUgPSBzaWJsaW5nLmhhc0F0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xuICAgIHNpYmxpbmcuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgIHVuZG9zLnB1c2goKCkgPT4gY2FjaGUgfHwgc2libGluZy5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSk7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHdoaWxlICh1bmRvcy5sZW5ndGgpXG4gICAgICB1bmRvcy5wb3AoKSgpO1xuICB9O1xufVxuZnVuY3Rpb24gY3Jhd2xTaWJsaW5nc1VwKGVsLCBjYWxsYmFjaykge1xuICBpZiAoZWwuaXNTYW1lTm9kZShkb2N1bWVudC5ib2R5KSB8fCAhZWwucGFyZW50Tm9kZSlcbiAgICByZXR1cm47XG4gIEFycmF5LmZyb20oZWwucGFyZW50Tm9kZS5jaGlsZHJlbikuZm9yRWFjaCgoc2libGluZykgPT4ge1xuICAgIGlmIChzaWJsaW5nLmlzU2FtZU5vZGUoZWwpKSB7XG4gICAgICBjcmF3bFNpYmxpbmdzVXAoZWwucGFyZW50Tm9kZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhzaWJsaW5nKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gZGlzYWJsZVNjcm9sbGluZygpIHtcbiAgbGV0IG92ZXJmbG93ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93O1xuICBsZXQgcGFkZGluZ1JpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgbGV0IHNjcm9sbGJhcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGA7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmdSaWdodDtcbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvZm9jdXMvYnVpbGRzL21vZHVsZS5qc1xudmFyIG1vZHVsZV9kZWZhdWx0ID0gc3JjX2RlZmF1bHQ7XG5leHBvcnQge1xuICBtb2R1bGVfZGVmYXVsdCBhcyBkZWZhdWx0LFxuICBzcmNfZGVmYXVsdCBhcyBmb2N1c1xufTtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnRhYmJhYmxlL2Rpc3QvaW5kZXguZXNtLmpzOlxuICAoKiFcbiAgKiB0YWJiYWJsZSA1LjMuM1xuICAqIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAqKVxuXG5mb2N1cy10cmFwL2Rpc3QvZm9jdXMtdHJhcC5lc20uanM6XG4gICgqIVxuICAqIGZvY3VzLXRyYXAgNi45LjRcbiAgKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL2ZvY3VzLXRyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAqKVxuKi9cbiIsICJpbXBvcnQgQWxwaW5lIGZyb20gXCJhbHBpbmVqc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcclxuICAgIGFjdGl2ZUhlYWRpbmc6IG51bGwsXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIEFscGluZS5uZXh0VGljaygoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoZWFkaW5nRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVIZWFkaW5nID0gaGVhZGluZ0VsZW1lbnRzWzBdLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpPy5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgICAgICAgICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpc2libGVIZWFkaW5ncyA9IGVudHJpZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUhlYWRpbmdzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudGFyZ2V0Lm9mZnNldFRvcCAtIGIudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmlzaWJsZUhlYWRpbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgdmlzaWJsZSBoZWFkaW5nIHdpdGggdGhlIGxvd2VzdCB0b3AgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wSGVhZGluZyA9IHZpc2libGVIZWFkaW5ncy5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJldiwgY3VycmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2LmJvdW5kaW5nQ2xpZW50UmVjdC50b3AgPFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuYm91bmRpbmdDbGllbnRSZWN0LnRvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByZXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUhlYWRpbmcgPSB0b3BIZWFkaW5nLnRhcmdldC5xdWVyeVNlbGVjdG9yKCdhJyk/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IHJvb3RNYXJnaW46ICcwcHggMHB4IC03NSUgMHB4JywgdGhyZXNob2xkOiAwLjcgfSxcclxuICAgICAgICAgICAgKVxyXG4gICAgXHJcbiAgICAgICAgICAgIGhlYWRpbmdFbGVtZW50cy5mb3JFYWNoKGhlYWRpbmcgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShoZWFkaW5nKSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG59KTtcclxuIiwgImV4cG9ydCBkZWZhdWx0ICgpID0+ICh7XHJcbiAgICBhY3RpdmVJZDogbnVsbCxcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy5hY3RpdmF0ZSh0aGlzLiRpZChcInRhYlwiLCAxKSkpO1xyXG4gICAgfSxcclxuICAgIGFjdGl2YXRlKGlkKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVJZCA9IGlkO1xyXG4gICAgfSxcclxuICAgIGlzQWN0aXZlKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlSWQgPT09IGlkO1xyXG4gICAgfSxcclxuICAgIGdldFRhYkluZGV4KGVsLCBwYXJlbnQpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmluZGV4T2YoZWwpICsgMTtcclxuICAgIH0sXHJcbn0pO1xyXG4iLCAiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcclxuICAgIG9wZW46IGZhbHNlLFxyXG4gICAgaXNPcGVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW47XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJHJlZnMuYnV0dG9uLmZvY3VzKCk7XHJcblxyXG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgY2xvc2UoZm9jdXNBZnRlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5vcGVuKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb2N1c0FmdGVyICYmIGZvY3VzQWZ0ZXIuZm9jdXMoKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVGb2N1c0luT3V0KGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcGFuZWwgPSB0aGlzLiRyZWZzLnBhbmVsO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuJHJlZnMuYnV0dG9uO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgaWYgKHBhbmVsLmNvbnRhaW5zKHRhcmdldCkgfHwgYnV0dG9uLmNvbnRhaW5zKHRhcmdldCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgbGFzdEZvY3VzZWRFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ2xvc2VEcm9wZG93bihidXR0b24sIHBhbmVsLCBsYXN0Rm9jdXNlZEVsZW1lbnQpKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKGJ1dHRvbik7XHJcbiAgICB9LFxyXG4gICAgc2hvdWxkQ2xvc2VEcm9wZG93bihidXR0b24sIHBhbmVsLCBsYXN0Rm9jdXNlZEVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhYnV0dG9uLmNvbnRhaW5zKGxhc3RGb2N1c2VkRWxlbWVudCkgJiZcclxuICAgICAgICAgICAgIXBhbmVsLmNvbnRhaW5zKGxhc3RGb2N1c2VkRWxlbWVudCkgJiZcclxuICAgICAgICAgICAgbGFzdEZvY3VzZWRFbGVtZW50ICYmXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihsYXN0Rm9jdXNlZEVsZW1lbnQpICZcclxuICAgICAgICAgICAgICAgIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HXHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iLCAiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcclxuICAgIG9wZW46IGZhbHNlLFxyXG4gICAgaXNPcGVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW47XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMub3BlbiA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlblNpZGViYXIoKTtcclxuICAgIH0sXHJcbiAgICBvcGVuU2lkZWJhcigpIHtcclxuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG59KTtcclxuIiwgImltcG9ydCBDbGlwYm9hcmRKUyBmcm9tIFwiY2xpcGJvYXJkL2Rpc3QvY2xpcGJvYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xyXG4gICAgY29kZUJsb2NrczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInByZVwiKSB8fCBbXSxcclxuICAgIGNsaXBib2FyZEljb246IGA8c3ZnIGNsYXNzPVwiZmlsbC1jdXJyZW50IGNsaXBvYXJkIGgtNSB3LTVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBkPVwiTTggM2ExIDEgMCAwMTEtMWgyYTEgMSAwIDExMCAySDlhMSAxIDAgMDEtMS0xelwiPjwvcGF0aD48cGF0aCBkPVwiTTYgM2EyIDIgMCAwMC0yIDJ2MTFhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMiAzIDMgMCAwMS0zIDNIOWEzIDMgMCAwMS0zLTN6XCI+PC9wYXRoPjwvc3ZnPmAsXHJcbiAgICBjbGlwYm9hcmRDb3BpZWRJY29uOiBgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJmaWxsLWN1cnJlbnQgdGV4dC1ncmVlbi01MDAgaC01IHctNVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48cGF0aCBkPVwiTTkgMmExIDEgMCAwMDAgMmgyYTEgMSAwIDEwMC0ySDl6XCI+PC9wYXRoPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTQgNWEyIDIgMCAwMTItMiAzIDMgMCAwMDMgM2gyYTMgMyAwIDAwMy0zIDIgMiAwIDAxMiAydjExYTIgMiAwIDAxLTIgMkg2YTIgMiAwIDAxLTItMlY1em05LjcwNyA1LjcwN2ExIDEgMCAwMC0xLjQxNC0xLjQxNEw5IDEyLjU4NmwtMS4yOTMtMS4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMiAyYTEgMSAwIDAwMS40MTQgMGw0LTR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD48L3N2Zz5gLFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvZGVCbG9ja3MuZm9yRWFjaCgoZWxlbWVudCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgICAgICAgW1wicmVsYXRpdmVcIiwgXCJjb2RlLWJsb2NrLXdyYXBwZXJcIl0uZm9yRWFjaCgodmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQodmFsdWUpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb3B5VG9DbGlwYm9hcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmRCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5jbGlwYm9hcmRJY29uO1xyXG4gICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmRCdXR0b24uaWQgPSBgY29kZS1ibG9jay1jb3B5LWJ1dHRvbi0ke2tleX1gO1xyXG4gICAgICAgICAgICBbXCJtZDpibG9ja1wiLCBcImhpZGRlblwiXS5mb3JFYWNoKCh2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHZhbHVlKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29weVRvQ2xpcGJvYXJkQnV0dG9uLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb3B5IHRvIENsaXBib2FyZFwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIkNvcHkgdG8gQ2xpcGJvYXJkXCIpO1xyXG4gICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmRCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvZGUtYmxvY2stY29weS1idXR0b25cIik7XHJcblxyXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvcHlUb0NsaXBib2FyZEJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29weVRvQ2xpcGJvYXJkID0gbmV3IENsaXBib2FyZEpTKFxyXG4gICAgICAgICAgICAgICAgYCMke2NvcHlUb0NsaXBib2FyZEJ1dHRvbi5pZH1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZC5vbihcInN1Y2Nlc3NcIiwgKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZEJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLmNsaXBib2FyZENvcGllZEljb247XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjb3B5VG9DbGlwYm9hcmRCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5jbGlwYm9hcmRJY29uKSxcclxuICAgICAgICAgICAgICAgICAgICAxNTAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBgY29kZS1ibG9jay10ZXh0LSR7a2V5fWA7XHJcbiAgICAgICAgICAgIGNvcHlUb0NsaXBib2FyZEJ1dHRvbi5kYXRhc2V0LmNsaXBib2FyZFRhcmdldCA9IGAjJHtlbGVtZW50LmlkfWA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59KTtcclxuIiwgImV4cG9ydCBkZWZhdWx0ICh7XHJcbiAgICBsaWdodE1vZGUgPSBudWxsLFxyXG4gICAgZGFya01vZGUgPSBudWxsLFxyXG4gICAgaGlnaGxpZ2h0aW5nTGlnaHRNb2RlID0gbnVsbCxcclxuICAgIGhpZ2hsaWdodGluZ0RhcmtNb2RlID0gbnVsbCxcclxufSkgPT4gKHtcclxuICAgIGFjdGl2ZVRoZW1lOiBudWxsLFxyXG4gICAgbGlnaHRNb2RlLFxyXG4gICAgZGFya01vZGUsXHJcblxyXG4gICAgdXBkYXRlSGlnaGxpZ2h0ZXJUaGVtZSgpIHtcclxuICAgICAgICBsZXQgY29kZVRoZW1lID1cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVUaGVtZSA9PT0gXCJkYXJrXCJcclxuICAgICAgICAgICAgICAgID8gaGlnaGxpZ2h0aW5nRGFya01vZGVcclxuICAgICAgICAgICAgICAgIDogaGlnaGxpZ2h0aW5nTGlnaHRNb2RlO1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHJcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gY29kZVRoZW1lO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIH0sXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID8/IFwic3lzdGVtXCI7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIaWdobGlnaHRlclRoZW1lKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgd2luZG93LkFscGluZS5zdG9yZShcclxuICAgICAgICAgICAgXCJ0aGVtZVwiLFxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRoZW1lID09PSBcImRhcmtcIiB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuYWN0aXZlVGhlbWUgPT09IFwic3lzdGVtXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcylcclxuICAgICAgICAgICAgICAgID8gXCJkYXJrXCJcclxuICAgICAgICAgICAgICAgIDogXCJsaWdodFwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0aGVtZS1jaGFuZ2VkXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRoZW1lID0gZXZlbnQuZGV0YWlsO1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCB0aGlzLmFjdGl2ZVRoZW1lKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVRoZW1lID09PSBcInN5c3RlbVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVRoZW1lID0gd2luZG93Lm1hdGNoTWVkaWEoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCJcclxuICAgICAgICAgICAgICAgICkubWF0Y2hlc1xyXG4gICAgICAgICAgICAgICAgICAgID8gXCJkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwibGlnaHRcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93LkFscGluZS5zdG9yZShcInRoZW1lXCIsIHRoaXMuYWN0aXZlVGhlbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3dcclxuICAgICAgICAgICAgLm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpXHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPT09IFwic3lzdGVtXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuQWxwaW5lLnN0b3JlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRoZW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm1hdGNoZXMgPyBcImRhcmtcIiA6IFwibGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuQWxwaW5lLmVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGhlbWUgPSB3aW5kb3cuQWxwaW5lLnN0b3JlKFwidGhlbWVcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRoZW1lID09PSBcImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLmFwcGx5U3R5bGVzKHJvb3QsIGRhcmtNb2RlKVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLmFwcGx5U3R5bGVzKHJvb3QsIGxpZ2h0TW9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGlnaGxpZ2h0ZXJUaGVtZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSGlnaGxpZ2h0ZXJUaGVtZSgpO1xyXG4gICAgfSxcclxuICAgIGFwcGx5U3R5bGVzKGVsZW1lbnQsIHRoZW1lKSB7XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoSlNPTi5wYXJzZSh0aGVtZSkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSk7XHJcbiIsICJleHBvcnQgZGVmYXVsdCAoe3JvdXRlfSkgPT4gKHtcclxuICAgIHF1ZXJ5OiBcIlwiLFxyXG4gICAgcmVzdWx0czogW10sXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLCAgIFxyXG4gICAgc2VhcmNoX2hpc3Rvcnk6IFtdLFxyXG4gICAgZmF2b3JpdGVfaXRlbXM6IFtdLFxyXG4gICAgbWF4SXRlbXNBbGxvd2VkOiAxMCxcclxuICAgIHJvdXRlLFxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hfaGlzdG9yeSA9IHRoaXMuZ2V0TG9jYWxTdG9yYWdlKFwic2VhcmNoX2hpc3RvcnlcIik7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZV9pdGVtcyA9IHRoaXMuZ2V0TG9jYWxTdG9yYWdlKFwiZmF2b3JpdGVfaXRlbXNcIik7XHJcblxyXG4gICAgICAgIHRoaXMuJHdhdGNoKFwic2VhcmNoX2hpc3RvcnlcIiwgKHZhbCkgPT5cclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UoXCJzZWFyY2hfaGlzdG9yeVwiLCB2YWwpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLiR3YXRjaChcImZhdm9yaXRlX2l0ZW1zXCIsICh2YWwpID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKFwiZmF2b3JpdGVfaXRlbXNcIiwgdmFsKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuJHdhdGNoKFwicXVlcnlcIiwgYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxdWVyeS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzID0gYXdhaXQgdGhpcy5wZXJmb3JtU2VhcmNoKHF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdHMpICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBwZXJmb3JtU2VhcmNoKHF1ZXJ5KSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnJvdXRlfT9xPSR7cXVlcnl9YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIGdldExvY2FsU3RvcmFnZShrZXkpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB8fCBbXTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHNldExvY2FsU3RvcmFnZShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVMaXN0KGxpc3QsIG5ld0l0ZW0pIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBuZXdJdGVtLFxyXG4gICAgICAgICAgICAuLi5saXN0LmZpbHRlcigoZWwpID0+IGVsLnRpdGxlICE9PSBuZXdJdGVtLnRpdGxlKSxcclxuICAgICAgICBdLnNsaWNlKDAsIHRoaXMubWF4SXRlbXNBbGxvd2VkKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkVG9TZWFyY2hIaXN0b3J5KHNlYXJjaEl0ZW0sIHVybCkge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEl0ZW1PYmplY3QgPSB7IHRpdGxlOiBzZWFyY2hJdGVtLCB1cmwgfTtcclxuICAgICAgICB0aGlzLnNlYXJjaF9oaXN0b3J5ID0gdGhpcy51cGRhdGVMaXN0KFxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaF9oaXN0b3J5LFxyXG4gICAgICAgICAgICBzZWFyY2hJdGVtT2JqZWN0XHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZXRlRnJvbUhpc3Rvcnkoc2VhcmNoSXRlbSkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoX2hpc3RvcnkgPSB0aGlzLnNlYXJjaF9oaXN0b3J5LmZpbHRlcihcclxuICAgICAgICAgICAgKGVsKSA9PiBlbC50aXRsZSAhPT0gc2VhcmNoSXRlbVxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGV0ZUFsbEhpc3RvcnkoKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hfaGlzdG9yeSA9IFtdO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUb0Zhdm9yaXRlcyhmYXZJdGVtLCB1cmwpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZUZyb21IaXN0b3J5KGZhdkl0ZW0pO1xyXG4gICAgICAgIGNvbnN0IGZhdkl0ZW1PYmplY3QgPSB7IHRpdGxlOiBmYXZJdGVtLCB1cmwgfTtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlX2l0ZW1zID0gdGhpcy51cGRhdGVMaXN0KFxyXG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlX2l0ZW1zLFxyXG4gICAgICAgICAgICBmYXZJdGVtT2JqZWN0XHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZXRlRnJvbUZhdm9yaXRlcyhmYXZJdGVtKSB7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZV9pdGVtcyA9IHRoaXMuZmF2b3JpdGVfaXRlbXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAoZWwpID0+IGVsLnRpdGxlICE9PSBmYXZJdGVtXHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZXRlQWxsRmF2b3JpdGVzKCkge1xyXG4gICAgICAgIHRoaXMuZmF2b3JpdGVfaXRlbXMgPSBbXTtcclxuICAgIH0sXHJcbn0pO1xyXG4iLCAiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcclxuICAgIHN2ZzogYDxkaXYgY2xhc3M9XCJ3LTcgaC03IGFic29sdXRlIHRvcC0wIC1sZWZ0LTcgaGlkZGVuIGdyb3VwLWhvdmVyOmZsZXggcm91bmRlZC1tZCAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1zbSB0ZXh0LWJhc2UtY29udGVudCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMjAwIHJpbmctMSBob3ZlcjpicmlnaHRuZXNzLTE1MCByaW5nLWJhc2UtMzAwXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MnB4O1wiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJncmF5XCIgaGVpZ2h0PVwiMTJweFwiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGQ9XCJNMCAyNTZDMCAxNjcuNiA3MS42IDk2IDE2MCA5Nmg3MmMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNEgxNjBDOTguMSAxNDQgNDggMTk0LjEgNDggMjU2czUwLjEgMTEyIDExMiAxMTJoNzJjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRIMTYwQzcxLjYgNDE2IDAgMzQ0LjQgMCAyNTZ6bTU3NiAwYzAgODguNC03MS42IDE2MC0xNjAgMTYwSDM0NGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGg3MmM2MS45IDAgMTEyLTUwLjEgMTEyLTExMnMtNTAuMS0xMTItMTEyLTExMkgzNDRjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjRoNzJjODguNCAwIDE2MCA3MS42IDE2MCAxNjB6TTE4NCAyMzJIMzkyYzEzLjMgMCAyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0SDE4NGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNHpcIj48L3BhdGg+PC9zdmc+PC9kaXY+YCxcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvc2UuY29udGVudFwiKTtcclxuICAgICAgICBjb25zdCBoZWFkaW5ncyA9IGNvbnRlbnREaXYucXVlcnlTZWxlY3RvckFsbChcImgxLCBoMiwgaDMsIGg0LCBoNSwgaDZcIik7XHJcblxyXG4gICAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBhbmNob3IgPSBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xyXG5cclxuICAgICAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdncm91cCcsJ3JlbGF0aXZlJywnY3Vyc29yLXBvaW50ZXInKVxyXG5cclxuICAgICAgICAgICAgaGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gYW5jaG9yLmNsaWNrKCkpXHJcblxyXG4gICAgICAgICAgICBhbmNob3IudGV4dENvbnRlbnQgPSBhbmNob3IudGV4dENvbnRlbnQucmVwbGFjZShcIiNcIiwgJycpO1xyXG5cclxuICAgICAgICAgICAgYW5jaG9yLmlubmVySFRNTCA9IHRoaXMuc3ZnIDtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pO1xyXG4iLCAiaW1wb3J0IEFscGluZSBmcm9tIFwiYWxwaW5lanNcIjtcclxuaW1wb3J0IE1vdXNldHJhcCBmcm9tICdAZGFuaGFycmluL2FscGluZS1tb3VzZXRyYXAnXHJcbmltcG9ydCBhbmNob3IgZnJvbSBcIkBhbHBpbmVqcy9hbmNob3JcIjtcclxuaW1wb3J0IGNvbGxhcHNlIGZyb20gXCJAYWxwaW5lanMvY29sbGFwc2VcIjtcclxuaW1wb3J0IGZvY3VzIGZyb20gXCJAYWxwaW5lanMvZm9jdXNcIjtcclxuXHJcbmltcG9ydCB0YWJsZU9mQ29udGVudCBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmxlT2ZDb250ZW50XCI7XHJcbmltcG9ydCB0YWJzIGZyb20gXCIuL2NvbXBvbmVudHMvdGFic1wiO1xyXG5pbXBvcnQgZHJvcGRvd24gZnJvbSBcIi4vY29tcG9uZW50cy9kcm9wZG93blwiO1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGViYXJcIjtcclxuaW1wb3J0IGNsaXBib2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL2NsaXBib2FyZFwiO1xyXG5pbXBvcnQgdGhlbWVTd2l0Y2hlciBmcm9tIFwiLi9jb21wb25lbnRzL3RoZW1lU3dpdGNoZXJcIjtcclxuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2hcIjtcclxuaW1wb3J0IHNob3dDb250ZW50cyBmcm9tIFwiLi9jb21wb25lbnRzL3Nob3dDb250ZW50c1wiO1xyXG5cclxuLy8gcGx1Z2luc1xyXG5BbHBpbmUucGx1Z2luKGFuY2hvcik7XHJcbkFscGluZS5wbHVnaW4oY29sbGFwc2UpO1xyXG5BbHBpbmUucGx1Z2luKGZvY3VzKTtcclxuQWxwaW5lLnBsdWdpbihNb3VzZXRyYXApXHJcblxyXG4vLyBjb21wb25lbnRzXHJcbkFscGluZS5kYXRhKFwidGhlbWVTd2l0Y2hlclwiLCB0aGVtZVN3aXRjaGVyKTtcclxuQWxwaW5lLmRhdGEoXCJzaG93Q29udGVudHNUd2VhY2tzXCIsc2hvd0NvbnRlbnRzKVxyXG5BbHBpbmUuZGF0YShcInRhYmxlT2ZDb250ZW50XCIsIHRhYmxlT2ZDb250ZW50KTtcclxuQWxwaW5lLmRhdGEoXCJjb2RlQmxvY2tDbGlwYm9hcmRcIiwgY2xpcGJvYXJkKTtcclxuQWxwaW5lLmRhdGEoXCJ0YWJzXCIsIHRhYnMpO1xyXG5BbHBpbmUuZGF0YShcImRyb3Bkb3duXCIsIGRyb3Bkb3duKTtcclxuQWxwaW5lLmRhdGEoXCJzaWRlYmFyXCIsIHNpZGViYXIpO1xyXG5BbHBpbmUuZGF0YShcInNlYXJjaFwiLCBzZWFyY2gpO1xyXG5cclxuXHJcbndpbmRvdy5BbHBpbmUgPSBBbHBpbmU7XHJcbkFscGluZS5zdGFydCgpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBTUEsS0FBQyxTQUFTLGlDQUFpQyxNQUFNLFNBQVM7QUFDekQsVUFBRyxPQUFPLFlBQVksWUFBWSxPQUFPLFdBQVc7QUFDbkQsZUFBTyxVQUFVLFFBQVE7QUFBQSxlQUNsQixPQUFPLFdBQVcsY0FBYyxPQUFPO0FBQzlDLGVBQU8sQ0FBQyxHQUFHLE9BQU87QUFBQSxlQUNYLE9BQU8sWUFBWTtBQUMxQixnQkFBUSxhQUFhLElBQUksUUFBUTtBQUFBO0FBRWpDLGFBQUssYUFBYSxJQUFJLFFBQVE7QUFBQSxJQUNoQyxHQUFHLFNBQU0sV0FBVztBQUNwQjtBQUFBO0FBQUEsUUFBaUIsV0FBVztBQUNs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QUFLLGlCQUFpQixDQUFDO0FBQUEsRUFDM0I7QUFDSjs7O0FDN0ZBLElBQU8sdUJBQVEsT0FBTztBQUFBLEVBQ2xCLEtBQUs7QUFBQSxFQUNMLE9BQU87QUFDSCxVQUFNLGFBQWEsU0FBUyxjQUFjLGdCQUFnQjtBQUMxRCxVQUFNLFdBQVcsV0FBVyxpQkFBaUIsd0JBQXdCO0FBRXJFLGFBQVMsUUFBUSxDQUFDLFlBQVk7QUFFMUIsVUFBSSxTQUFTLFFBQVEsY0FBYyxHQUFHO0FBRXRDLGNBQVEsVUFBVSxJQUFJLFNBQVEsWUFBVyxnQkFBZ0I7QUFFekQsY0FBUSxpQkFBaUIsU0FBUSxNQUFNLE9BQU8sTUFBTSxDQUFDO0FBRXJELGFBQU8sY0FBYyxPQUFPLFlBQVksUUFBUSxLQUFLLEVBQUU7QUFFdkQsYUFBTyxZQUFZLEtBQUs7QUFBQSxJQUM1QixDQUFDO0FBQUEsRUFDTDtBQUNKOzs7QUNIQSxlQUFPLE9BQU9DLGVBQU07QUFDcEIsZUFBTyxPQUFPQSxlQUFRO0FBQ3RCLGVBQU8sT0FBT0EsZUFBSztBQUNuQixlQUFPLE9BQU9BLGVBQVM7QUFHdkIsZUFBTyxLQUFLLGlCQUFpQixxQkFBYTtBQUMxQyxlQUFPLEtBQUssdUJBQXNCLG9CQUFZO0FBQzlDLGVBQU8sS0FBSyxrQkFBa0Isc0JBQWM7QUFDNUMsZUFBTyxLQUFLLHNCQUFzQixpQkFBUztBQUMzQyxlQUFPLEtBQUssUUFBUSxZQUFJO0FBQ3hCLGVBQU8sS0FBSyxZQUFZLGdCQUFRO0FBQ2hDLGVBQU8sS0FBSyxXQUFXLGVBQU87QUFDOUIsZUFBTyxLQUFLLFVBQVUsY0FBTTtBQUc1QixPQUFPLFNBQVM7QUFDaEIsZUFBTyxNQUFNOyIsCiAgIm5hbWVzIjogWyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwgIkNsaXBib2FyZEFjdGlvbkN1dCIsICJpc1JUTCIsICJmYWtlQ29weUFjdGlvbiIsICJDbGlwYm9hcmRBY3Rpb25Db3B5IiwgIl90eXBlb2YiLCAib2JqIiwgIkNsaXBib2FyZEFjdGlvbkRlZmF1bHQiLCAiX3NldFByb3RvdHlwZU9mIiwgIm8iLCAicCIsICJfZ2V0UHJvdG90eXBlT2YiLCAiQ2xpcGJvYXJkIiwgInRyaWdnZXIiLCAiYWN0aW9uIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImRhdGEiLCAiZXZhbHVhdGUyIiwgImRlbGF5IiwgIl9fY3JlYXRlIiwgIl9fZGVmUHJvcCIsICJfX2dldFByb3RvT2YiLCAiX19oYXNPd25Qcm9wIiwgIl9fZ2V0T3duUHJvcE5hbWVzIiwgIl9fZ2V0T3duUHJvcERlc2MiLCAiX19jb21tb25KUyIsICJtYXRjaGVzIiwgInNyY19kZWZhdWx0IiwgIkFscGluZSIsICJldmFsdWF0ZSIsICJtb2R1bGVfZGVmYXVsdCIsICJzdGFydCIsICJldmFsdWF0ZSIsICJkYXRhIiwgImdldENvbXB1dGVkU3R5bGUiLCAiY2xlYW51cCIsICJzcmNfZGVmYXVsdCIsICJBbHBpbmUiLCAiZXZhbHVhdGUyIiwgInNldFN0eWxlcyIsICJyZWxlYXNlIiwgIm1vZHVsZV9kZWZhdWx0IiwgInNyY19kZWZhdWx0IiwgIkFscGluZSIsICJtb2RpZmllclZhbHVlIiwgImZsb29yIiwgIm1vZHVsZV9kZWZhdWx0IiwgImlzUmFkaW8iLCAiaXNSYWRpbzIiLCAib3duS2V5cyIsICJzcmNfZGVmYXVsdCIsICJBbHBpbmUiLCAiZWZmZWN0IiwgImV2YWx1YXRlTGF0ZXIiLCAiY2xlYW51cCIsICJldmFsdWF0ZSIsICJtb2R1bGVfZGVmYXVsdCIsICJvYnNlcnZlciIsICJDbGlwYm9hcmRKUyIsICJlbGVtZW50IiwgIm1vZHVsZV9kZWZhdWx0Il0KfQo=

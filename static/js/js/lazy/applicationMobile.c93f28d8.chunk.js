/*! For license information please see applicationMobile.c93f28d8.chunk.js.LICENSE.txt */
(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[5176],{3061:(e,n,t)=>{"use strict";t.r(n),t.d(n,{ApplicationMobile:()=>l,default:()=>p});var r=t(47313),i=t(53933),o=t(25866),a=t(92755),c=t(97303),s=t(33718),u=t(72231),f=t(46417);class l extends r.Component{constructor(e){super(e);const{reactRedirect:n}=document.body.dataset;n&&u.mW.push(n)}componentDidMount(){}render(){let e=window.domainName.name.split(".")[window.domainName.name.split(".").length-1];return(0,f.jsxs)("div",{id:"mobile",children:[(0,f.jsx)(i.ql,{title:"remarket.ch"===window.domainName.name?s.M.title_ch:s.M.title_de,meta:[{name:"description",content:"remarket.ch"===window.domainName.name?s.M.description_ch:s.M.description_de}]}),this.props.children,(0,f.jsx)(o.default,{id:"spinner-box-load"}),(0,f.jsx)("div",{className:"hiddenHeader",children:(0,f.jsx)(a.Z,{})}),"de"===e&&(0,f.jsx)(c.Z,{})]})}}const p=l},46123:(e,n)=>{var t;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var a=i.apply(null,t);a&&e.push(a)}}else if("object"===o){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var c in t)r.call(t,c)&&t[c]&&e.push(c)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(n,[]))||(e.exports=t)}()},53454:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var r=t(4942),i=t(29439),o=t(45987),a=t(47313),c=t(10412);function s(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var u={};function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&u[n[0]]||("string"===typeof n[0]&&(u[n[0]]=new Date),s.apply(void 0,n))}function l(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e,n){var t=(0,a.useRef)();return(0,a.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,a.useContext)(c.OO)||{},o=r.i18n,s=r.defaultNS,u=t||o||(0,c.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new c.zv),!u){f("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},y=[p,{},!1];return y.t=p,y.i18n={},y.ready=!1,y}u.options.react&&void 0!==u.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=d(d(d({},(0,c.JP)()),u.options.react),n),v=b.useSuspense,h=b.keyPrefix,m=e||s||u.options&&u.options.defaultNS;m="string"===typeof m?[m]:m||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(m);var O=(u.isInitialized||u.initializedStoreOnce)&&m.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],i=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!a(r,e)||i&&!a(o,e)))}(e,n,t):(f("i18n.languages were undefined or empty",n.languages),!0)}(e,u,b)}));function w(){return u.getFixedT(null,"fallback"===b.nsMode?m:m[0],h)}var j=(0,a.useState)(w),x=(0,i.Z)(j,2),P=x[0],k=x[1],S=m.join(),N=g(S),C=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=b.bindI18n,n=b.bindI18nStore;function t(){C.current&&k(w)}return C.current=!0,O||v||l(u,m,(function(){C.current&&k(w)})),O&&N&&N!==S&&C.current&&k(w),e&&u&&u.on(e,t),n&&u&&u.store.on(n,t),function(){C.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,t)})),n&&u&&n.split(" ").forEach((function(e){return u.store.off(e,t)}))}}),[u,S]);var R=(0,a.useRef)(!0);(0,a.useEffect)((function(){C.current&&!R.current&&k(w),R.current=!1}),[u,h]);var Z=[P,u,O];if(Z.t=P,Z.i18n=u,Z.ready=O,O)return Z;if(!O&&!v)return Z;throw new Promise((function(e){l(u,m,(function(){e()}))}))}var b=["forwardedRef"];function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function r(r){var c=r.forwardedRef,s=(0,o.Z)(r,b),u=y(e,h(h({},s),{},{keyPrefix:n.keyPrefix})),f=(0,i.Z)(u,3),l=f[0],p=f[1],d=f[2],g=h(h({},s),{},{t:l,i18n:p,tReady:d});return n.withRef&&c?g.ref=c:!n.withRef&&c&&(g.forwardedRef=c),(0,a.createElement)(t,g)}var c;r.displayName="withI18nextTranslation(".concat((c=t).displayName||c.name||("string"===typeof c&&c.length>0?c:"Unknown"),")"),r.WrappedComponent=t;return n.withRef?(0,a.forwardRef)((function(e,n){return(0,a.createElement)(r,Object.assign({},e,{forwardedRef:n}))})):r}}},45987:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(63366);function i(e,n){if(null==e)return{};var t,i,o=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},29439:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r=t(83878);var i=t(40181),o=t(25267);function a(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o,a,c=[],s=!0,u=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=o.call(t)).done)&&(c.push(r.value),c.length!==n);s=!0);}catch(e){u=!0,i=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw i}}return c}}(e,n)||(0,i.Z)(e,n)||(0,o.Z)()}}}]);
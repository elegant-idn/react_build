"use strict";(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[152],{99958:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var r=t(47313),o=t(72231),i=t(5835),a=t(46417);class s extends r.Component{constructor(e){super(e),this.state={}}render(){return(0,a.jsxs)("div",{className:"not-found-mobile",children:[(0,a.jsx)(i.Z,{menu:!0,title:'<img alt="Logo" src="/images/design/logo_all_pages.svg"/>'}),(0,a.jsxs)("div",{className:"not-found-mobile__main",children:[(0,a.jsx)("h1",{className:"not-found-mobile__main-number",children:"404"}),(0,a.jsx)("h1",{className:"not-found-mobile__main-title",children:"Oops. Seite nicht gefunden"}),(0,a.jsx)("h5",{className:"not-found-mobile__main-subtitle",children:"Diese Seite existiert leider nicht oder ist fehlerhaft"}),(0,a.jsx)("div",{className:"not-found-mobile__main-wrapper",children:(0,a.jsx)("button",{className:"not-found-mobile__main-wrapper-btn",children:(0,a.jsx)(o.rU,{to:"/",children:"Gehe zur Homepage"})})})]}),(0,a.jsx)("div",{className:"not-found-mobile__footer",children:(0,a.jsx)("img",{src:"/images/design/Guy.svg",alt:""})})]})}}const c=s},53454:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(4942),o=t(29439),i=t(45987),a=t(47313),s=t(10412);function c(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var u={};function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&u[n[0]]||("string"===typeof n[0]&&(u[n[0]]=new Date),c.apply(void 0,n))}function l(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e,n){var t=(0,a.useRef)();return(0,a.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,a.useContext)(s.OO)||{},i=r.i18n,c=r.defaultNS,u=t||i||(0,s.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new s.zv),!u){f("You will need to pass in an i18next instance by using initReactI18next");var d=function(e){return Array.isArray(e)?e[e.length-1]:e},b=[d,{},!1];return b.t=d,b.i18n={},b.ready=!1,b}u.options.react&&void 0!==u.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=p(p(p({},(0,s.JP)()),u.options.react),n),h=m.useSuspense,y=m.keyPrefix,v=e||c||u.options&&u.options.defaultNS;v="string"===typeof v?[v]:v||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(v);var O=(u.isInitialized||u.initializedStoreOnce)&&v.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!a(r,e)||o&&!a(i,e)))}(e,n,t):(f("i18n.languages were undefined or empty",n.languages),!0)}(e,u,m)}));function w(){return u.getFixedT(null,"fallback"===m.nsMode?v:v[0],y)}var j=(0,a.useState)(w),x=(0,o.Z)(j,2),P=x[0],N=x[1],k=v.join(),S=g(k),C=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=m.bindI18n,n=m.bindI18nStore;function t(){C.current&&N(w)}return C.current=!0,O||h||l(u,v,(function(){C.current&&N(w)})),O&&S&&S!==k&&C.current&&N(w),e&&u&&u.on(e,t),n&&u&&u.store.on(n,t),function(){C.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,t)})),n&&u&&n.split(" ").forEach((function(e){return u.store.off(e,t)}))}}),[u,k]);var _=(0,a.useRef)(!0);(0,a.useEffect)((function(){C.current&&!_.current&&N(w),_.current=!1}),[u,y]);var R=[P,u,O];if(R.t=P,R.i18n=u,R.ready=O,O)return R;if(!O&&!h)return R;throw new Promise((function(e){l(u,v,(function(){e()}))}))}var m=["forwardedRef"];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function r(r){var s=r.forwardedRef,c=(0,i.Z)(r,m),u=b(e,y(y({},c),{},{keyPrefix:n.keyPrefix})),f=(0,o.Z)(u,3),l=f[0],d=f[1],p=f[2],g=y(y({},c),{},{t:l,i18n:d,tReady:p});return n.withRef&&s?g.ref=s:!n.withRef&&s&&(g.forwardedRef=s),(0,a.createElement)(t,g)}var s;r.displayName="withI18nextTranslation(".concat((s=t).displayName||s.name||("string"===typeof s&&s.length>0?s:"Unknown"),")"),r.WrappedComponent=t;return n.withRef?(0,a.forwardRef)((function(e,n){return(0,a.createElement)(r,Object.assign({},e,{forwardedRef:n}))})):r}}},45987:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(63366);function o(e,n){if(null==e)return{};var t,o,i=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}},29439:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(83878);var o=t(40181),i=t(25267);function a(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,s=[],c=!0,u=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(e,n)||(0,o.Z)(e,n)||(0,i.Z)()}}}]);
"use strict";(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[6449,2962],{26780:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var r=t(47313),a=t(5835),o=t(89177),i=t(46417);class s extends r.Component{constructor(e){super(e),this.state={}}render(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Z,{menu:!0,title:"Tracking-Informationen"}),(0,i.jsx)(o.default,{params:this.props.params})]})}}const c=s},89177:(e,n,t)=>{t.r(n),t.d(n,{TrackingInfo:()=>s,default:()=>c});var r=t(47313),a=t(72231),o=t(78081),i=t(46417);class s extends r.Component{constructor(e){super(e),this._loadTrackingInfo=()=>{let{type:e,shortcode:n}=this.props.params;document.getElementById("spinner-box-load").style.display="block",axios.get("/api/basketTracking?type=".concat(e,"&shortcode=").concat(n)).then((e=>{document.getElementById("spinner-box-load").style.display="none",this.setState({trackingData:e.data})})).catch((e=>{document.getElementById("spinner-box-load").style.display="none",404===e.response.status&&this.setState({errorMsg:"Keine Information"})}))},this.mapTrackingData=(e,n)=>(0,i.jsxs)("div",{className:"itemTracking",children:[(0,i.jsxs)("h1",{children:["Versandinformationen zum Auftrag ",e.shortcode]}),e.status&&(0,i.jsx)("p",{className:"status",children:e.status}),(0,i.jsxs)("p",{className:"title",children:["Tracking ",e.tracking]}),(0,i.jsx)("h3",{className:"eventsTitle",children:(0,i.jsx)("span",{children:"Aktueller Standort Ihres Pakets gem\xe4ss Post"})}),(0,i.jsxs)("div",{className:"wrapEvents",children:[0===e.events.length&&(0,i.jsx)("p",{className:"noInfo",children:"Keine Information"}),e.events.map(((e,n)=>(0,i.jsxs)("p",{className:"itemEvent",children:[e.date,": ",e.description,e.location.trim()&&" - ",e.location]},n)))]})]},n),this.state={trackingData:[],errorMsg:""}}componentWillReceiveProps(e){e.user.isLogin!==this.props.user.isLogin&&!1===e.user.isLogin&&a.mW.push("/")}componentDidMount(){this._loadTrackingInfo()}render(){let{errorMsg:e,trackingData:n}=this.state;return(0,i.jsx)("div",{className:"container trackingInfo",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-md-12",children:[e&&(0,i.jsx)("p",{className:"text-center",children:e}),n.map(this.mapTrackingData)]})})})}}const c=(0,o.$j)((function(e){return{user:e.user}}))(s)},53454:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(4942),a=t(29439),o=t(45987),i=t(47313),s=t(10412);function c(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var u={};function l(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&u[n[0]]||("string"===typeof n[0]&&(u[n[0]]=new Date),c.apply(void 0,n))}function f(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e,n){var t=(0,i.useRef)();return(0,i.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function h(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,i.useContext)(s.OO)||{},o=r.i18n,c=r.defaultNS,u=t||o||(0,s.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new s.zv),!u){l("You will need to pass in an i18next instance by using initReactI18next");var d=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[d,{},!1];return h.t=d,h.i18n={},h.ready=!1,h}u.options.react&&void 0!==u.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=p(p(p({},(0,s.JP)()),u.options.react),n),y=m.useSuspense,v=m.keyPrefix,b=e||c||u.options&&u.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(b);var O=(u.isInitialized||u.initializedStoreOnce)&&b.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],a=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!i(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!i(r,e)||a&&!i(o,e)))}(e,n,t):(l("i18n.languages were undefined or empty",n.languages),!0)}(e,u,m)}));function j(){return u.getFixedT(null,"fallback"===m.nsMode?b:b[0],v)}var w=(0,i.useState)(j),k=(0,a.Z)(w,2),x=k[0],P=k[1],I=b.join(),N=g(I),S=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=m.bindI18n,n=m.bindI18nStore;function t(){S.current&&P(j)}return S.current=!0,O||y||f(u,b,(function(){S.current&&P(j)})),O&&N&&N!==I&&S.current&&P(j),e&&u&&u.on(e,t),n&&u&&u.store.on(n,t),function(){S.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,t)})),n&&u&&n.split(" ").forEach((function(e){return u.store.off(e,t)}))}}),[u,I]);var C=(0,i.useRef)(!0);(0,i.useEffect)((function(){S.current&&!C.current&&P(j),C.current=!1}),[u,v]);var E=[x,u,O];if(E.t=x,E.i18n=u,E.ready=O,O)return E;if(!O&&!y)return E;throw new Promise((function(e){f(u,b,(function(){e()}))}))}var m=["forwardedRef"];function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function r(r){var s=r.forwardedRef,c=(0,o.Z)(r,m),u=h(e,v(v({},c),{},{keyPrefix:n.keyPrefix})),l=(0,a.Z)(u,3),f=l[0],d=l[1],p=l[2],g=v(v({},c),{},{t:f,i18n:d,tReady:p});return n.withRef&&s?g.ref=s:!n.withRef&&s&&(g.forwardedRef=s),(0,i.createElement)(t,g)}var s;r.displayName="withI18nextTranslation(".concat((s=t).displayName||s.name||("string"===typeof s&&s.length>0?s:"Unknown"),")"),r.WrappedComponent=t;return n.withRef?(0,i.forwardRef)((function(e,n){return(0,i.createElement)(r,Object.assign({},e,{forwardedRef:n}))})):r}}},45987:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(63366);function a(e,n){if(null==e)return{};var t,a,o=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},29439:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(83878);var a=t(40181),o=t(25267);function i(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o,i,s=[],c=!0,u=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw a}}return s}}(e,n)||(0,a.Z)(e,n)||(0,o.Z)()}}}]);
"use strict";(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[4992],{64588:(e,t,n)=>{n.r(t),n.d(t,{VerkaufenBetaMobile:()=>d,default:()=>f});var s=n(47313),r=n(72231),i=n(5835),a=n(41923),o=n(78081),c=n(72905),u=n(76233),l=n(46417);class d extends s.Component{constructor(e){super(e),this.handlerEditAnswers=e=>t=>{"open"===e?($("#mobile .verkaufen-mobile aside").addClass("open"),this.setState({showEditAnswers:!0})):($("#mobile .verkaufen-mobile aside").removeClass("open"),this.setState({showEditAnswers:!1}))},this.state={headerTitle:"verkaufen",step:"summary",showLastQuestion:!1,isGuest:!1,showEditAnswers:!1,chooseTab:""},this._defineTitleHead=this._defineTitleHead.bind(this),this.handleClearSummaryTab=this.handleClearSummaryTab.bind(this),this._setStep=this._setStep.bind(this),this._setIsGuest=this._setIsGuest.bind(this),this._setShowLastQuestion=this._setShowLastQuestion.bind(this),this.handleBackFilter=this.handleBackFilter.bind(this)}componentDidMount(){"verkaufen"===this.state.headerTitle&&($("#intercom-container").length>0&&($("#intercom-container .intercom-launcher-frame").removeAttr("style"),$("#intercom-container").before('<div class="verkaufenQuestion"></div>')),$("#tidio-chat").length>0?$("#tidio-chat").before('<div class="verkaufenQuestion"></div>'):$("body").append('<div class="verkaufenQuestion"></div>'))}componentWillUnmount(){$("#intercom-container .intercom-launcher-frame").attr("style","bottom:20px !important"),$("#tidio-chat #tidio-chat-iframe").css({bottom:"-10px",right:"10px"}),$("body .verkaufenQuestion").remove()}_defineTitleHead(e){this.setState({headerTitle:e})}_setStep(e){this.setState({step:e})}_setShowLastQuestion(e){this.setState({showLastQuestion:e})}_setIsGuest(e){this.setState({isGuest:e})}handleBackFilter(){let e=document.getElementById("chooseLocationTab"),t=document.getElementById("form"),n=document.getElementById("bringToShop"),{step:s}=this.state;if("instructions"===s){let{isLogin:e}=this.props.user;e?r.mW.push("/kundenkonto"):this.state.isGuest?r.mW.push("/"):(document.getElementById("op").checked=!0,this.props.userActions.setRedirectTo("/kundenkonto"))}else"summary"!==s||e||n?((e||t||n)&&this.setState({chooseTab:"generalInfo"}),$('.nav-pills a[href="#summary"]').tab("show"),this._defineTitleHead('<span class="count">1/3</span> Zusammenfassung'),this._setStep("summary"),$(".buttonsForMobile .sendForm").css({display:"none"}),$(".buttonsForMobile .summary").css({display:"block"}),$(".fixedBtnVerkaufenResult").addClass("summary")):($("#intercom-container").length>0&&($("#intercom-container .intercom-launcher-frame").removeAttr("style"),$("#intercom-container").before('<div class="verkaufenQuestion"></div>')),$("#tidio-chat").length>0?$("#tidio-chat").before('<div class="verkaufenQuestion"></div>'):$("body").append('<div class="verkaufenQuestion"></div>'),this.setState({showLastQuestion:!0}),$(".sellBetaPage-wrap").show(),this._defineTitleHead("verkaufen"),$(".sellBetaPage .answersBetaField .itemAnswer:last-child .question.client").click(),$(".answersBetaField").scrollTop($(".answersBetaField")[0].scrollHeight).css({paddingTop:"30px"}))}handleClearSummaryTab(){this.setState({chooseTab:""})}render(){return(0,l.jsxs)("div",{className:"verkaufen-mobile",children:[(0,l.jsx)(i.Z,{title:'<img loading="lazy" alt="Logo" src="/images/design/logo_all_pages.svg"/>',back:!1,handlerBack:this.handleBackFilter,menu:!0}),"verkaufen"===this.state.headerTitle&&(0,l.jsxs)("div",{className:this.state.showEditAnswers?"open edit-answers":"edit-answers",children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{loading:"lazy",src:"/images/design/simple-close-logFormBlack.svg",onClick:this.handlerEditAnswers("close"),className:"btn-close"})}),(0,l.jsxs)("div",{className:"btn-edit",onClick:this.handlerEditAnswers("open"),children:["Ihre Angaben anzeigen",(0,l.jsx)("img",{loading:"lazy",src:"/images/design/edit_answers_icon.svg"})]})]}),(0,l.jsx)(a.default,{params:this.props.params,handlerBack:this.handleBackFilter,handlerMobileEditAnswers:this.handlerEditAnswers,setStep:this._setStep,setShowLastQuestion:this._setShowLastQuestion,setIsGuest:this._setIsGuest,showLastQuestion:this.state.showLastQuestion,chooseSummaryTab:this.state.chooseTab,handleClearSummaryTab:this.handleClearSummaryTab,setTitle:this._defineTitleHead})]})}}const f=(0,o.$j)((function(e){return{user:e.user}}),(function(e){return{userActions:(0,c.DE)(u,e)}}),null,{pure:!1})(d)},53454:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(4942),r=n(29439),i=n(45987),a=n(47313),o=n(10412);function c(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var u={};function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&u[t[0]]||("string"===typeof t[0]&&(u[t[0]]=new Date),c.apply(void 0,t))}function d(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e,t){var n=(0,a.useRef)();return(0,a.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current};function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,s=(0,a.useContext)(o.OO)||{},i=s.i18n,c=s.defaultNS,u=n||i||(0,o.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new o.zv),!u){l("You will need to pass in an i18next instance by using initReactI18next");var f=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[f,{},!1];return g.t=f,g.i18n={},g.ready=!1,g}u.options.react&&void 0!==u.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=h(h(h({},(0,o.JP)()),u.options.react),t),b=m.useSuspense,v=m.keyPrefix,y=e||c||u.options&&u.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(y);var w=(u.isInitialized||u.initializedStoreOnce)&&y.every((function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{precheck:function(t,s){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e))return!1}}):function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=t.languages[0],r=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===s.toLowerCase())return!0;var a=function(e,n){var s=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===s||2===s};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(s,e)||!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!a(s,e)||r&&!a(i,e)))}(e,t,n):(l("i18n.languages were undefined or empty",t.languages),!0)}(e,u,m)}));function k(){return u.getFixedT(null,"fallback"===m.nsMode?y:y[0],v)}var O=(0,a.useState)(k),S=(0,r.Z)(O,2),j=S[0],T=S[1],x=y.join(),C=p(x),E=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=m.bindI18n,t=m.bindI18nStore;function n(){E.current&&T(k)}return E.current=!0,w||b||d(u,y,(function(){E.current&&T(k)})),w&&C&&C!==x&&E.current&&T(k),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){E.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[u,x]);var $=(0,a.useRef)(!0);(0,a.useEffect)((function(){E.current&&!$.current&&T(k),$.current=!1}),[u,v]);var P=[j,u,w];if(P.t=j,P.i18n=u,P.ready=w,w)return P;if(!w&&!b)return P;throw new Promise((function(e){d(u,y,(function(){e()}))}))}var m=["forwardedRef"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function s(s){var o=s.forwardedRef,c=(0,i.Z)(s,m),u=g(e,v(v({},c),{},{keyPrefix:t.keyPrefix})),l=(0,r.Z)(u,3),d=l[0],f=l[1],h=l[2],p=v(v({},c),{},{t:d,i18n:f,tReady:h});return t.withRef&&o?p.ref=o:!t.withRef&&o&&(p.forwardedRef=o),(0,a.createElement)(n,p)}var o;s.displayName="withI18nextTranslation(".concat((o=n).displayName||o.name||("string"===typeof o&&o.length>0?o:"Unknown"),")"),s.WrappedComponent=n;return t.withRef?(0,a.forwardRef)((function(e,t){return(0,a.createElement)(s,Object.assign({},e,{forwardedRef:t}))})):s}}},45987:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(63366);function r(e,t){if(null==e)return{};var n,r,i=(0,s.Z)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},29439:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(83878);var r=n(40181),i=n(25267);function a(e,t){return(0,s.Z)(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var s,r,i,a,o=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(s=i.call(n)).done)&&(o.push(s.value),o.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return o}}(e,t)||(0,r.Z)(e,t)||(0,i.Z)()}}}]);
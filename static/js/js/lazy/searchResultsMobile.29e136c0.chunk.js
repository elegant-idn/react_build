"use strict";(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[3037],{46137:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(47313),n=s(72231),i=s(7e3),r=s(91066),o=s(46417);class c extends a.Component{constructor(e){super(e),this.handleCloseQuickView=()=>{this.props.closeQuickView()},this.state={currentModel:this.props.model,showPrev:this.props.allModels[0].id!==this.props.model.id,showNext:this.props.allModels[this.props.allModels.length-1].id!==this.props.model.id},this.handleKeyPress=this.handleKeyPress.bind(this),this.nextModel=this.nextModel.bind(this),this.prevModel=this.prevModel.bind(this)}componentDidMount(){document.addEventListener("keyup",this.handleKeyPress,{passive:!0})}componentWillUnmount(){document.removeEventListener("keyup",this.handleKeyPress)}handleKeyPress(e){"Escape"===e.key?this.props.closeQuickView():"ArrowRight"===e.key?this.state.showNext&&this.nextModel():"ArrowLeft"===e.key&&this.state.showPrev&&this.prevModel()}nextModel(){let e=this.props.allModels.findIndex((e=>e.id===this.state.currentModel.id));e>=0&&this.setState({currentModel:this.props.allModels[e+1],showPrev:!0,showNext:this.props.allModels.length>e+2})}prevModel(){let e=this.props.allModels.findIndex((e=>e.id===this.state.currentModel.id));e>=0&&this.setState({currentModel:this.props.allModels[e-1],showNext:!0,showPrev:e-1>0})}render(){let e=this.state.currentModel.model.split(" ").join("-").toLowerCase(),t=this.state.currentModel.color.toLowerCase()||"color",s=this.state.currentModel.capacity.toLowerCase()||"capacity",a=this.state.currentModel.deviceName.replace(/ /g,"-").toLowerCase(),c=this.state.currentModel;gtag("event","view_item",{items:[{id:c.shortcode,name:c.descriptionLong,list_name:"Kaufen",quantity:1,price:c.price,brand:c.deviceName,category:this.props.deviceName||""}]}),(0,r.mW)();var l={ProductName:c.descriptionLong,ProductID:c.shortcode,Categories:[this.props.deviceName],ImageURL:c.deviceImages.mainImg.src,URL:window.location.href,Brand:c.deviceName,Price:c.discountPrice||c.price,CompareAtPrice:c.price};return _learnq.push(["track","Viewed Product",l]),_learnq.push(["trackViewedItem",{Title:l.ProductName,ItemId:l.ProductID,Categories:l.Categories,ImageUrl:l.ImageURL,Url:l.URL,Metadata:{Brand:l.Brand,Price:l.Price,CompareAtPrice:l.CompareAtPrice}}]),(0,o.jsx)("div",{className:"quickViewPage-overlay",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"quickViewPage-wrap",children:[(0,o.jsx)("div",{className:"quickViewPage-wrap-btnClose",onClick:this.props.closeQuickView,children:(0,o.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})}),this.state.showNext&&(0,o.jsx)("span",{className:"next",onClick:this.nextModel,children:(0,o.jsx)("i",{className:"fa fa-angle-right","aria-hidden":"true"})}),this.state.showPrev&&(0,o.jsx)("span",{className:"prev",onClick:this.prevModel,children:(0,o.jsx)("i",{className:"fa fa-angle-left","aria-hidden":"true"})}),(0,o.jsx)(i.Z,{currentModel:[this.state.currentModel],quickPreview:!0,handleCloseQuickView:this.handleCloseQuickView,openSuccessAddToBasket:this.props.openSuccessAddToBasket,capacityName:this.props.capacityName,upsellingItems:[]}),(0,o.jsx)("div",{className:"cb"}),(0,o.jsx)("div",{className:"col-sm-12",style:{marginTop:"15px"},children:(0,o.jsxs)(n.rU,{className:"btn",style:{color:"#fff"},to:"/kaufen/detail/".concat(a,"/").concat(e,"/").concat(s,"/").concat(t,"/").concat(this.state.currentModel.shortcode),children:["Im Detail anzeigen",(0,o.jsx)("span",{children:(0,o.jsx)("i",{className:"fa fa-long-arrow-right","aria-hidden":"true"})})]})}),(0,o.jsx)("div",{className:"cb"})]})})})}}c.defaultProps={};const l=c},91704:(e,t,s)=>{s.r(t),s.d(t,{SearchResultsKaufen:()=>v,default:()=>y});var a=s(47313),n=s(77262),i=s(78081),r=s(72231),o=s(42240),c=s.n(o),l=s(72905),d=s(73815),u=s(18871),p=s(22667),h=s(46137),m=s(46417);const g=e=>{let{data:t,addModelToBasket:s,status:a,openQuickView:n}=e,i=t.model.split(" ").join("-").toLowerCase(),o=t.color.toLowerCase()||"color",c=t.capacity.toLowerCase()||"capacity",l=t.deviceName.replace(/ /g,"-").toLowerCase();return(0,m.jsxs)("div",{className:t.discountPrice?"itemModelSearch discount":"itemModelSearch",children:[(0,m.jsxs)("div",{className:"modelInfo",children:[(0,m.jsx)("div",{className:"image",children:(0,m.jsx)("img",{loading:"lazy",src:t.deviceImages.mainImg.src,alt:""})}),(0,m.jsxs)("div",{className:"info",children:[t.discountPrice&&(0,m.jsx)("span",{className:"discount-mark",children:"aktion"}),(0,m.jsxs)(r.rU,{className:"name",to:"/kaufen/detail/".concat(l,"/").concat(i,"/").concat(c,"/").concat(o,"/").concat(t.shortcode),onClick:e=>{return s=t,gtag("event","select_content",{content_type:"product",items:[{id:s.shortcode,name:s.descriptionLong||s.model||"",list_name:"Kaufen",quantity:1,brand:s.deviceName,price:s.discountPrice||s.price}]}),void window.localStorage.setItem("gtag",JSON.stringify({category:""}));var s},children:[t.model,", ID: ",t.shortcode]}),(0,m.jsxs)("p",{className:"criteria",children:[t.color,", ",t.capacity]}),window.isMobile&&(0,m.jsxs)("span",{className:"priceMobile",children:[t.discountPrice&&(0,m.jsxs)("span",{className:"value discount-price",children:[t.discountPrice," ",window.currencyValue]}),(0,m.jsxs)("span",{className:t.discountPrice?"value old-price":"value",children:[t.price," ",window.currencyValue]})]})]})]}),(0,m.jsxs)("div",{className:"modelInfoRight",children:[(0,m.jsxs)("div",{className:"price",children:[(0,m.jsx)("span",{className:"title",children:"Preis"}),t.discountPrice&&(0,m.jsxs)("span",{className:"value discount-price",children:[t.discountPrice," ",window.currencyValue]}),(0,m.jsxs)("span",{className:t.discountPrice?"value old-price":"value",children:[t.price," ",window.currencyValue]})]}),(0,m.jsx)("button",{className:"addToBasket","data-status":a,onClick:e=>s(e,t)})]})]})},f=[{label:"Beliebteste Produkte",value:"popular"},{label:"G\xfcnstige Preise zuerst anzeigen",value:"niedrighoch"},{label:"Hohe Preise zuerst anzeigen",value:"hochniedrig"},{label:"Nach Einstelldatum sortieren",value:"neu"}];class v extends a.Component{constructor(e){super(e),this.state={pagination:{activePage:0,totalItemsCount:0,pageCount:0},currentValueSort:"popular",infoNoModels:!1,quickPreview:null,capacityName:""},this.goBack=this.goBack.bind(this),this.changeSortBy=this.changeSortBy.bind(this),this.mapModels=this.mapModels.bind(this),this.addModelToBasket=this.addModelToBasket.bind(this),this.handlePageChange=this.handlePageChange.bind(this),this.openQuickView=this.openQuickView.bind(this),this.closeQuickView=this.closeQuickView.bind(this)}componentWillUnmount(){this.props.shopActions.setSearchResult({data:[],meta:{totalCount:0}},"")}componentDidMount(){document.getElementById("spinner-box-load").style.display="block",axios.post("/api/models",{search:this.props.params.searchParam,sort:"popular",page:1}).then((e=>{document.getElementById("spinner-box-load").style.display="none";let t=e.data.meta.pagination;this.props.shopActions.setSearchResult(e.data,this.props.params.searchParam),this.setState({pagination:{...this.state.pagination,activePage:0,totalItemsCount:t.total,pageCount:Math.ceil(t.total/t.per_page)},infoNoModels:0===e.data.data.length,capacityName:e.data.meta.capacityName}),window.isGoogleConnection&&this.gtagEnhancedEcommerce()}))}gtagEnhancedEcommerce(){let e=this.props.searchResults.data.map((e=>({id:e.shortcode,name:e.descriptionLong||e.model||"",list_name:"Kaufen",quantity:1,brand:e.deviceName,price:e.discountPrice||e.price})));gtag("event","view_item_list",{items:e})}openQuickView(e){let{data:t}=this.props.searchResults;this.setState({quickPreview:(0,m.jsx)(h.Z,{model:e,allModels:t,capacityName:this.state.capacityName,closeQuickView:this.closeQuickView})})}closeQuickView(){this.setState({quickPreview:null})}handlePageChange(e){let t={search:this.props.params.searchParam,sort:this.state.currentValueSort,page:e.selected+1};document.getElementById("spinner-box-load").style.display="block",axios.post("/api/models",t).then((t=>{document.getElementById("spinner-box-load").style.display="none",window.scrollTo(0,0),this.props.shopActions.setSearchResult(t.data,this.props.params.searchParam),this.setState({pagination:{...this.state.pagination,activePage:e.selected}}),window.isGoogleConnection&&this.gtagEnhancedEcommerce()}))}addModelToBasket(e,t){e.stopPropagation();let s=e.target.getAttribute("data-status"),{basketData:a}=this.props,n=null;if(a.every((e=>e.id!=t.id)))n=[...a,t];else{let e="";n=a.filter((s=>s.id!=t.id||(e=s.shortcode,!1))),e&&(n=n.filter((t=>t.deviceShortcode!=e)))}this.props.basketActions.changeBasketData(n),"out"===s&&(window.isMobile?r.mW.push("/warenkorb"):(this.props.basketActions.basketAddEffect((0,m.jsx)(p.Z,{startPosition:$(e.target).offset(),image:t.deviceImages.mainImg.src,basketType:"kaufen"})),setTimeout((()=>{r.mW.push("/warenkorb"),this.props.basketActions.basketAddEffect(null)}),2e3)))}changeSortBy(e){let t=e,s={search:this.props.searchResults.searchValue,sort:t,page:1};document.getElementById("spinner-box-load").style.display="block",axios.post("/api/models",s).then((e=>{document.getElementById("spinner-box-load").style.display="none";let s=e.data.meta.pagination;this.setState({pagination:{...this.state.pagination,activePage:0,totalItemsCount:s.total,pageCount:Math.ceil(s.total/s.per_page)},currentValueSort:t}),this.props.shopActions.setSearchResult(e.data,this.props.searchResults.searchValue),window.isGoogleConnection&&this.gtagEnhancedEcommerce()}))}goBack(){this.props.shopActions.setSearchResult({data:[],meta:{totalCount:0}},""),r.mW.push("/kaufen")}mapModels(e,t){return(0,m.jsx)(g,{data:e,openQuickView:this.openQuickView,status:this.props.basketData.some((t=>t.id===e.id))?"in":"out",addModelToBasket:this.addModelToBasket},t)}render(){let{data:e}=this.props.searchResults,{pagination:t,infoNoModels:s,quickPreview:a}=this.state;return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"searchResults",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xs-12",children:(0,m.jsxs)("div",{className:"div topRow",children:[(0,m.jsx)("button",{onClick:this.goBack,children:"zur\xfcck"}),(0,m.jsxs)("div",{className:"sort",children:[(0,m.jsx)("span",{children:"Sortieren nach"}),(0,m.jsx)(c(),{options:f,onChange:this.changeSortBy,value:this.state.currentValueSort,searchable:!1})]})]})}),(0,m.jsxs)("div",{className:"col-xs-12",children:[(0,m.jsxs)("div",{className:"wrapModels",children:[e.map(this.mapModels),s&&(0,m.jsxs)("p",{children:["Zum aktuellen Zeitpunkt haben vom Modell:"," ",this.props.searchResults.searchValue," keine Produkte an Lager."]})]}),e.length>0&&(0,m.jsx)("div",{className:"col-md-12 text-center",children:(0,m.jsx)(n.Z,{previousLabel:"<",nextLabel:">",breakLabel:(0,m.jsx)("a",{href:"",children:"..."}),breakClassName:"break-me",pageCount:t.pageCount,forcePage:t.activePage,marginPagesDisplayed:5,pageRangeDisplayed:5,onPageChange:this.handlePageChange,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})]})]})})}),a]})}}v.defaultProps={};const y=(0,i.$j)((function(e){return{searchResults:e.shop.searchResults,basketData:e.basket.basketData}}),(function(e){return{shopActions:(0,l.DE)(u,e),basketActions:(0,l.DE)(d,e)}}))(v)},20389:(e,t,s)=>{s.r(t),s.d(t,{SearchResultsMobile:()=>u,default:()=>p});var a=s(47313),n=s(72231),i=s(5835),r=s(91704),o=s(78081),c=s(72905),l=s(18871),d=s(46417);class u extends a.Component{constructor(e){super(e),this.state={},this.handleBackFilter=this.handleBackFilter.bind(this)}handleBackFilter(){n.mW.push("/kaufen")}render(){let e='<p class="search">'.concat(this.props.searchResults.total," Suchresultate f\xfcr <span>").concat(this.props.searchResults.searchValue,"</span></p>");return(0,d.jsxs)("div",{children:[(0,d.jsx)(i.Z,{back:!0,backColorGreen:!0,handlerBack:this.handleBackFilter,title:e}),(0,d.jsx)(r.default,{params:this.props.params})]})}}u.defaultProps={};const p=(0,o.$j)((function(e){return{searchResults:e.shop.searchResults}}),(function(e){return{shopActions:(0,c.DE)(l,e)}}))(u)},53454:(e,t,s)=>{s.d(t,{Z:()=>b});var a=s(4942),n=s(29439),i=s(45987),r=s(47313),o=s(10412);function c(){if(console&&console.warn){for(var e,t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];"string"===typeof s[0]&&(s[0]="react-i18next:: ".concat(s[0])),(e=console).warn.apply(e,s)}}var l={};function d(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];"string"===typeof t[0]&&l[t[0]]||("string"===typeof t[0]&&(l[t[0]]=new Date),c.apply(void 0,t))}function u(e,t,s){e.loadNamespaces(t,(function(){if(e.isInitialized)s();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),s()}))}}))}function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function h(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?p(Object(s),!0).forEach((function(t){(0,a.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var m=function(e,t){var s=(0,r.useRef)();return(0,r.useEffect)((function(){s.current=t?s.current:e}),[e,t]),s.current};function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=t.i18n,a=(0,r.useContext)(o.OO)||{},i=a.i18n,c=a.defaultNS,l=s||i||(0,o.nI)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new o.zv),!l){d("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[p,{},!1];return g.t=p,g.i18n={},g.ready=!1,g}l.options.react&&void 0!==l.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=h(h(h({},(0,o.JP)()),l.options.react),t),v=f.useSuspense,y=f.keyPrefix,b=e||c||l.options&&l.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(b);var w=(l.isInitialized||l.initializedStoreOnce)&&b.every((function(e){return function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{precheck:function(t,a){if(s.bindI18n&&s.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))return!1}}):function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=t.languages[0],n=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===a.toLowerCase())return!0;var r=function(e,s){var a=t.services.backendConnector.state["".concat(e,"|").concat(s)];return-1===a||2===a};return!(s.bindI18n&&s.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(a,e)||!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!r(a,e)||n&&!r(i,e)))}(e,t,s):(d("i18n.languages were undefined or empty",t.languages),!0)}(e,l,f)}));function k(){return l.getFixedT(null,"fallback"===f.nsMode?b:b[0],y)}var x=(0,r.useState)(k),P=(0,n.Z)(x,2),j=P[0],N=P[1],C=b.join(),M=m(C),O=(0,r.useRef)(!0);(0,r.useEffect)((function(){var e=f.bindI18n,t=f.bindI18nStore;function s(){O.current&&N(k)}return O.current=!0,w||v||u(l,b,(function(){O.current&&N(k)})),w&&M&&M!==C&&O.current&&N(k),e&&l&&l.on(e,s),t&&l&&l.store.on(t,s),function(){O.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,s)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,s)}))}}),[l,C]);var S=(0,r.useRef)(!0);(0,r.useEffect)((function(){O.current&&!S.current&&N(k),S.current=!1}),[l,y]);var I=[j,l,w];if(I.t=j,I.i18n=l,I.ready=w,w)return I;if(!w&&!v)return I;throw new Promise((function(e){u(l,b,(function(){e()}))}))}var f=["forwardedRef"];function v(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function y(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?v(Object(s),!0).forEach((function(t){(0,a.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(s){function a(a){var o=a.forwardedRef,c=(0,i.Z)(a,f),l=g(e,y(y({},c),{},{keyPrefix:t.keyPrefix})),d=(0,n.Z)(l,3),u=d[0],p=d[1],h=d[2],m=y(y({},c),{},{t:u,i18n:p,tReady:h});return t.withRef&&o?m.ref=o:!t.withRef&&o&&(m.forwardedRef=o),(0,r.createElement)(s,m)}var o;a.displayName="withI18nextTranslation(".concat((o=s).displayName||o.name||("string"===typeof o&&o.length>0?o:"Unknown"),")"),a.WrappedComponent=s;return t.withRef?(0,r.forwardRef)((function(e,t){return(0,r.createElement)(a,Object.assign({},e,{forwardedRef:t}))})):a}}},45987:(e,t,s)=>{s.d(t,{Z:()=>n});var a=s(63366);function n(e,t){if(null==e)return{};var s,n,i=(0,a.Z)(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}},29439:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(83878);var n=s(40181),i=s(25267);function r(e,t){return(0,a.Z)(e)||function(e,t){var s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var a,n,i,r,o=[],c=!0,l=!1;try{if(i=(s=s.call(e)).next,0===t){if(Object(s)!==s)return;c=!1}else for(;!(c=(a=i.call(s)).done)&&(o.push(a.value),o.length!==t);c=!0);}catch(e){l=!0,n=e}finally{try{if(!c&&null!=s.return&&(r=s.return(),Object(r)!==r))return}finally{if(l)throw n}}return o}}(e,t)||(0,n.Z)(e,t)||(0,i.Z)()}}}]);
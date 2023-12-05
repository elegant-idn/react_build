"use strict";(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[5835],{70259:(e,s,t)=>{t.r(s),t.d(s,{setLocation:()=>a});var i=t(13022);t(31881);function a(e){return{type:i.z,payload:e}}},18871:(e,s,t)=>{t.r(s),t.d(s,{definedCounerForSearchInput:()=>c,loadDevices:()=>o,loadModels:()=>n,setFilterOptions:()=>l,setSearchResult:()=>r});var i=t(68903),a=t(51426);function o(e,s){return t=>{if("verkaufen"===s){const s=window.localStorage.getItem("devicesForPurchaseWithParams")&&""!==window.localStorage.getItem("devicesForPurchaseWithParams")?JSON.parse(window.localStorage.getItem("devicesForPurchaseWithParams")):null;s?t({type:i.LV,payload:s}):a.Z.loadDevices(e).then((e=>{let{data:{data:s}}=e;window.localStorage.setItem("devicesForPurchaseWithParams",JSON.stringify(s)),t({type:i.LV,payload:s})}))}else{const s=window.localStorage.getItem("devicesData")&&""!==window.localStorage.getItem("devicesData")?JSON.parse(window.localStorage.getItem("devicesData")):null,o=window.localStorage.getItem("devicesForPurchase")&&""!==window.localStorage.getItem("devicesForPurchase")?JSON.parse(window.localStorage.getItem("devicesForPurchase")):null;"/api/devices"===e&&s?t({type:i.GH,payload:s}):"/api/devicesForPurchase"===e&&o?t({type:i.GH,payload:o}):a.Z.loadDevices(e).then((s=>{let{data:{data:a}}=s;axios.get("/api/getShopCategories").then((s=>{let o=[...a];s.data.length>0&&(o=[...a,{id:11,name:"Zubeh\xf6r",submodels:s.data}]),"/api/devices"===e&&window.localStorage.setItem("devicesData",JSON.stringify(o)),"/api/devicesForPurchase"===e&&window.localStorage.setItem("devicesForPurchase",JSON.stringify(o)),t({type:i.GH,payload:o})}))}))}}}function n(e,s){return t=>{t({type:i.Ee,payload:{models:e,categoriesList:s}})}}function l(e){return s=>{s({type:i.gd,payload:e})}}function r(e,s){return{type:i.qZ,payload:{data:e.data,total:e.meta.totalCount,searchValue:s}}}function c(e){return{type:i.I,payload:e}}},51426:(e,s,t)=>{t.d(s,{Z:()=>o});var i=t(31881),a=t.n(i);const o={loadDevices:e=>a()({method:"get",url:e,progress:function(e,s){document.getElementById("progress").style.width=e/s*100+"%"}}),getFilterOptions:()=>a().get("/api/reference"),getModels:(e,s)=>a()({data:s,method:"post",url:e,progress:function(e,s){document.getElementById("progress").style.width=e/s*100+"%"}}),getModelsVerkaufen:e=>a()({method:"get",url:"/api/devicesModelsForPurchase?modelName=".concat(e),progress:function(e,s){document.getElementById("progress").style.width=e/s*100+"%"}}),getModelsList:e=>a().get("/api/modelslist/".concat(e))}},97618:(e,s,t)=>{t.d(s,{Z:()=>n});var i=t(47313),a=t(46417);class o extends i.Component{constructor(e){super(e),this.state={},this.handleKeyPress=this.handleKeyPress.bind(this),this.setEqualHeight=this.setEqualHeight.bind(this)}componentDidMount(){this.setEqualHeight(),document.addEventListener("keyup",this.handleKeyPress,{passive:!0})}componentWillUnmount(){document.removeEventListener("keyup",this.handleKeyPress)}setEqualHeight(){setTimeout((()=>{$(".horizontal.first").height()>$(".horizontal.last").height()?$(".horizontal.last").height($(".horizontal.first").height()):$(".horizontal.first").height($(".horizontal.last").height())}),10)}handleKeyPress(e){"Escape"===e.key&&this.props.toggleLightbox()}render(){return(0,a.jsx)("div",{className:"coupon-light-box light-box",children:(0,a.jsx)("div",{className:"light-box-container",children:(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("div",{className:"top text-right",children:(0,a.jsx)("img",{loading:"lazy",src:"/images/design/simple-close-logForm.svg",onClick:this.props.toggleLightbox,alt:""})}),(0,a.jsxs)("div",{className:"body",children:[(0,a.jsx)("p",{style:{width:"100%",textAlign:"-webkit-center"},children:(0,a.jsx)("div",{className:"Oval-2",children:(0,a.jsx)("img",{loading:"lazy",src:"/images/design/cut.svg",className:"cut"})})}),(0,a.jsx)("p",{className:"title",children:"The coupon is added"}),(0,a.jsxs)("p",{className:"description",children:["Dein pers\xf6nlicher Rabattcode"," ",(0,a.jsx)("span",{style:{color:"black",fontWeight:"bold"},id:"coupon_text"})," ","wurde hinzugef\xfcgt und wir beim Checkout verrechnet."]}),(0,a.jsx)("p",{style:{width:"100%",textAlign:"-webkit-center"},children:(0,a.jsx)("button",{class:"btn",onClick:this.props.toggleLightbox,style:{width:"60%"},children:"ok"})})]})]})})})}}o.defaultProps={};const n=o},5835:(e,s,t)=>{t.d(s,{Z:()=>f});var i=t(47313),a=t(72231),o=t(78081),n=t(83924),l=(t(31946),t(59548)),r=t(53454),c=t(46417);class d extends i.Component{constructor(e){let s=window.localStorage.getItem("lang");"undefined"!=typeof s&&s&&""!=s||(s="de"),super(e),this.state={lang:s,langOptions:[{title:"DE",value:"de",image:"/images/design/lang/de.svg"},{title:"FR",value:"fr",image:"/images/design/lang/fr.svg"},{title:"IT",value:"it",image:"/images/design/lang/it.svg"},{title:"EN",value:"en",image:"/images/design/lang/en.svg"}]},this.selLang=this.selLang.bind(this),this.applyLang=this.applyLang.bind(this)}componentDidMount(){let e=$(".header-mobile.scrolling-header").innerHeight();$(".menuMobile").css({top:e+"px",maxHeight:"calc( 100vh - ".concat(e,"px"),transform:"translateY(0)"})}selLang(e,s){this.setState({lang:s.value})}applyLang(){let{lang:e}=this.state,{hideLangMenu:s}=this.props;window.localStorage.setItem("lang",e),l.ZP.changeLanguage(e),s&&s()}render(){let{lang:e,langOptions:s}=this.state;return(0,c.jsxs)("div",{className:"menuMobile langUse",children:[(0,c.jsx)("nav",{children:(0,c.jsx)("ul",{children:s.map(((s,t)=>(0,c.jsxs)("li",{className:s.value===e?"acitve":null,onClick:e=>this.selLang(e,s),children:[(0,c.jsx)("img",{loading:"lazy",src:"/images/design/lang/".concat(s.value,".svg"),alt:"langOption"}),(0,c.jsx)("p",{children:s.title})]},"lang-".concat(t))))})}),(0,c.jsx)("div",{className:"langUseBtn",onClick:this.applyLang,children:"anwenden"})]})}}d.defaultProps={};const h=(0,r.Z)()(d);var g=t(97618),p=t(91066),m=t(12279),u=t.n(m),x=t(72905),w=t(18871),v=t(86473),b=t.n(v);class S extends i.Component{constructor(e){super(e),this.getSuggestionValue=e=>e.name,this.getSectionSuggestions=e=>e.item,this.renderSectionTitle=e=>(0,c.jsx)(i.Fragment,{children:(0,c.jsxs)("div",{className:"searchResultSection",children:[(0,c.jsx)("div",{className:"searchResultSectionTitle",children:e.section.name}),e.section.count>5&&(0,c.jsx)("div",{className:"searchResultSectionnMore",onClick:s=>this._clickViewmore(s,e.section.id),children:"Mehr anzeigen"})]})}),this.renderSuggestion=e=>{let{value:s}=this.state,t=e.name,a=s.split(" ");const o=a.some((e=>t.toLowerCase().includes(e.toLocaleLowerCase())));let n="",l=t.toLowerCase().trim();if(o){let s=[],o=0;a.forEach((e=>{let t=l.indexOf(e.trim().toLowerCase(),o),i=e.trim().length;s=[...s,{start:t,len:i}],o=t+i}));let r=0,d="",h="";for(let e=0;e<s.length;e++){n=t.slice(r,s[e].start),d+=n+'<span class="searchText">'+t.slice(s[e].start,s[e].start+s[e].len)+"</span>",r=s[e].start+s[e].len,h=t.slice(r,t.length)}d+=h;let g="searchResultItem";return e.hide&&(g="searchResultItem hide"),(0,c.jsx)(i.Fragment,{children:(0,c.jsxs)("div",{className:g,children:[(0,c.jsxs)("div",{className:"searchResultItemTitle",children:[(0,c.jsx)("div",{className:"verkaufen-search-img",children:(0,c.jsx)("img",{loading:"lazy",className:"verkaufen-search-img",src:e.image})}),(0,c.jsx)("div",{className:"searchResultItemName",dangerouslySetInnerHTML:{__html:d}})]}),(0,c.jsxs)("div",{className:"searchResultItemPrice",children:[e.price,"CHF"]})]})})}},this.onChange=(e,s)=>{let{newValue:t}=s;this.setState({value:t})},this.pressEnterOnInput=e=>{"Enter"===e.key&&(this.setState({pressSearch:!0}),a.mW.push("/kaufen/search/".concat(this.state.value)))},this.onSuggestionsFetchRequested=e=>{let{value:s}=e;this.debouncedLoadSuggestions(s)},this.onSuggestionSelected=(e,s)=>{let{suggestion:t}=s;if(this.onSuggestionsClearRequested(),this.setState({value:""}),"product"===t.searchType){let e=t.name.split(" ").join("-").toLowerCase();e=e.split("/"),a.mW.push("/kaufen/detail/zubehoer/".concat(t.categoryName,"/").concat(e[e.length-1],"/").concat(t.shortcode))}else if("device"===t.searchType){let e=t.name.replace(/ /g,"-").toLowerCase(),s=t.color,i=t.capacity,o=t.deviceName,n="/kaufen/detail/".concat(o,"/").concat(e,"/").concat(i,"/").concat(s,"/").concat(t.shortcode);a.mW.push(n)}},this.onSuggestionsClearRequested=()=>{this.setState({suggestions:[]})},this.state={value:"",suggestions:[],filteredByShortcode:!1},this._parseUrl=this._parseUrl.bind(this),this._clickViewmore=this._clickViewmore.bind(this),this._getObjForRequest=this._getObjForRequest.bind(this),this._getProductSuggestions=this._getProductSuggestions.bind(this),this._setProductSuggestions=this._setProductSuggestions.bind(this),this._getDeviceSuggestions=this._getDeviceSuggestions.bind(this),this._setDeviceSuggestions=this._setDeviceSuggestions.bind(this),this._setBothSuggestions=this._setBothSuggestions.bind(this),this.debouncedLoadSuggestions=u()(this.loadSuggestions,500)}componentDidMount(){}componentDidUpdate(){}componentWillUnmount(){this.debouncedLoadSuggestions.cancel()}_clickViewmore(e,s){let{suggestions:t}=this.state,i=t.map((e=>{if(e.section.id===s){let s=[];return s="undefined"!==typeof e.item.find((e=>!0===e.hide))?e.item.map((e=>({...e,hide:!1}))):e.item.map(((e,s)=>s+1>5?{...e,hide:!0}:e)),{...e,item:s}}return e}));this.setState({suggestions:i})}_parseUrl(e){let s=e,t={page:1,price:{min:0,max:1,maxSearch:0,minSearch:0},lagerort:{values:[]},modell:{values:[]},zustand:{values:[]},sort:(e.deviceCategory1,"popular")},i=JSON.parse(window.localStorage.getItem("locationData")),a={};this.props.places?a=this.props.places:i?i.data.forEach((e=>{!0===e.active&&(a=e)})):a=null;for(let o in s)if(o.includes("param")&&s[o]){let e=s[o].slice(0,s[o].indexOf("=")),i=[];"preis"===e?(i=s[o].slice(s[o].indexOf("=")+1).split("-"),t.price.minSearch=i[0],t.price.maxSearch=i[1]):"sort"===e||"page"===e?(i=s[o].slice(s[o].indexOf("=")+1),t[e]=i):(i=s[o].slice(s[o].indexOf("=")+1).split(","),i.forEach(((e,s)=>i[s]=e.replace(/-/g," ").replace(/\|/g,"/"))),t[e]=i)}return t}_getObjForRequest(e,s,t,i,a){let o={...e};for(let l in o)"price"!==l&&"sort"!==l&&"page"!==l&&(o[l]=[...e[l]]);if(o.criterias={},o.specifications={},o.page=1,o.deviceName=a,o.searchQuery=i,o.webShopCategoryIds=[],o.modelCategoryIds=[],"product"===t){let e=s.filter((e=>"zubeh\xf6r"===e.name.toLowerCase()));e.length>0&&""!==a&&(o.webShopCategoryIds=e[0].submodels.filter((e=>e.name.toLowerCase()===a)).map((e=>e.id)))}else if("device"===t);else if("both"===t){let e=s.filter((e=>"zubeh\xf6r"===e.name.toLowerCase()));e.length>0&&(o.webShopCategoryIds=e[0].submodels.map((e=>e.id)));let t=s.filter((e=>"zubeh\xf6r"!==e.name.toLowerCase()));t.length>0&&(o.modelCategoryIds=t.map((e=>e.id)))}let n=["lagerort","modell","deviceName","webShopCategoryIds","modelCategoryIds","price","zustand","garantie","sort","page","criterias","specifications","searchQuery"];for(let l in o)if(n.every((e=>e!==l))){let e=l.slice(l.lastIndexOf("-")+1);o["kategorie"===l.slice(0,l.lastIndexOf("-"))?"criterias":"specifications"][e]=[...o[l]],delete o[l]}return o}_getProductSuggestions(e){let s=this.props.devices.filter((e=>"zubeh\xf6r"===e.name.toLowerCase()));if(s.length>0){let t=e.map(((e,t)=>({id:e.id,name:e.descriptionSearch,price:e.price,image:e.deviceImages?e.deviceImages.mainImg.src:"/images/design/"+s[0].id+"device.svg",categoryName:e.categoryName,shortcode:e.shortcode,searchType:"product",categoryId:s[0].id,index:t,hide:t+1>5})));return[{section:{id:s[0].id,name:s[0].name,count:t.length},item:t}]}return[]}_setProductSuggestions(e){this.setState({suggestions:this._getProductSuggestions(e)})}_getDeviceSuggestions(e){let s=this.props.devices.filter((e=>"zubeh\xf6r"!==e.name.toLowerCase()));if(s.length>0){let t=[];return s.map((s=>{let i=e.filter((e=>e.mainDeviceId===s.id));if(i.length>0){let e={id:s.id,name:s.name,count:i.length},a=i.map(((e,t)=>({id:e.id,name:e.model,price:e.price,color:e.color?e.color.toLowerCase():"color",capacity:e.capacity?e.capacity.toLowerCase():"capacity",deviceName:e.deviceName.replace(/ /g,"-").toLowerCase(),image:e.deviceImages?e.deviceImages.mainImg.src:"/images/design/"+s.id+"device.svg",categoryName:e.deviceName,shortcode:e.shortcode,searchType:"device",categoryId:e.DeviceId,index:t,hide:t+1>5})));t=[...t,{section:e,item:a}]}})),t}return[]}_setDeviceSuggestions(e){this.setState({suggestions:this._getDeviceSuggestions(e)})}_setBothSuggestions(e,s){let t=this._getDeviceSuggestions(s),i=this._getProductSuggestions(e),a=[];a=[...a,...t,...i],this.setState({suggestions:a})}loadSuggestions(e){if(e.length<5)return;let{params:s}=this.props,t=this._parseUrl(this.props.params),i="both",a=this._getObjForRequest(t,this.props.devices,i,e,"");this.onSuggestionsClearRequested();{const e=axios.post("/api/searchShopCategoryProducts",a),s=axios.post("/api/searchModels",a);Promise.all([e,s]).then((e=>{let s=[],t=[];e.forEach((e=>{"/api/searchShopCategoryProducts"===e.config.url?s=e.data.data:"/api/searchModels"===e.config.url&&(t=e.data.data)})),this._setBothSuggestions(s,t)}))}}render(){const{value:e,suggestions:s}=this.state;let{pathname:t}=this.props.location;const i={placeholder:this.props.placeholder||"",value:e,onChange:this.onChange};return(0,c.jsxs)("div",{className:"searchBar",children:[null,(0,c.jsx)(b(),{multiSection:!0,suggestions:s,onSuggestionSelected:this.onSuggestionSelected,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,renderSectionTitle:this.renderSectionTitle,getSectionSuggestions:this.getSectionSuggestions,inputProps:i}),(window.isMobile||window.isTablet)&&(0,c.jsx)("div",{className:"closeDiv",onClick:this.props.hideSearchBar,children:(0,c.jsx)("img",{loading:"lazy",src:"/images/design/closeBtn.svg"})})]})}}S.defaultProps={};const y=(0,a.EN)((0,o.$j)((function(e){return{devices:e.shop.devices}}),(function(e){return{shopActions:(0,x.DE)(w,e)}}))(S));class j extends i.Component{constructor(e){super(e),this.state={showCouponFromAds:!1,showSearch:1===window.localStorage.getItem("mobileSearchBar"),showMobileMenu:1===window.localStorage.getItem("mobileShowMenu"),showLang:!1},this.showMenu=this.showMenu.bind(this),this.showSearchBar=this.showSearchBar.bind(this),this.hideSearchBar=this.hideSearchBar.bind(this),this.showLangMenu=this.showLangMenu.bind(this),this.hideLangMenu=this.hideLangMenu.bind(this),this.toggleCouponFromAds=this.toggleCouponFromAds.bind(this)}componentDidMount(){this.checkAdsSource(),p.d3.initialize(),window.addEventListener("scroll",(function(){!window.isMobile&&window.scrollY>=100||window.isMobile&&window.scrollY>=70?$(scrollingHeader).addClass("scroll"):$(scrollingHeader).removeClass("scroll")}),{passive:!0})}checkAdsSource(){let e=new URL(document.URL).searchParams;if(e.has("coupon")&&!window.localStorage.hasOwnProperty("coupon")){let s=e.get("coupon");axios.get("/api/checkAdsCoupon?coupon=".concat(s)).then((e=>{"ok"==e.data.status&&(this.toggleCouponFromAds(),document.getElementById("coupon_text").innerHTML=s,window.localStorage.setItem("coupon",s))})).catch((e=>{}))}}toggleCouponFromAds(){this.setState({showCouponFromAds:!this.state.showCouponFromAds})}showMenu(e){let s=$(".header-mobile.scrolling-header").innerHeight();$(".header-mobile.scrolling-header").hasClass("scroll")&&(s+=40);let{showMobileMenu:t}=this.state;!0===t?($(".menuMobile").css({top:0,transform:"translateY(-100%)"}),$("#mobile > .mainPage > .headerBottom-mobile .header-bottom").css("display","block"),$("#mobile > .mainPage > .mainPage").css("display","block"),window.localStorage.setItem("mobileShowMenu",0),this.setState({showMobileMenu:!1}),$(e.currentTarget).removeClass("open")):($(".menuMobile").css({top:s+"px",maxHeight:"calc( 100vh - ".concat(s,"px"),transform:"translateY(0)"}),setTimeout((function(){$("#mobile > .mainPage > .headerBottom-mobile .header-bottom").css("display","none"),$("#mobile > .mainPage > .mainPage").css("display","none")}),1e3),window.localStorage.setItem("mobileShowMenu",1),this.setState({showMobileMenu:!0}),$(e.currentTarget).addClass("open"))}showSearchBar(){this.setState({showSearch:!0}),window.localStorage.setItem("mobileSearchBar",1),this.setState({showMobileMenu:!1}),window.localStorage.setItem("mobileShowMenu",0)}hideSearchBar(){this.setState({showSearch:!1}),window.localStorage.setItem("mobileSearchBar",0)}showLangMenu(){$(".menuMobile").css({top:0,transform:"translateY(-100%)"}),$("#mobile > .mainPage > .headerBottom-mobile .header-bottom").css("display","block"),$("#mobile > .mainPage > .mainPage").css("display","block"),window.localStorage.setItem("mobileShowMenu",0),this.setState({showMobileMenu:!1}),this.setState({showLang:!0})}hideLangMenu(){$(".hamburgerLang").toggleClass("open"),$(".menuMobile").css({top:0,transform:"translateY(-100%)"}),$("#mobile > .mainPage > .headerBottom-mobile .header-bottom").css("display","block"),$("#mobile > .mainPage > .mainPage").css("display","block"),setTimeout(function(){this.setState({showLang:!1})}.bind(this),700)}render(){let{showSearch:e,showCouponFromAds:s,showLang:t}=this.state,o=this.props.backColorGreen?"/images/design/mobile/back-btn-green.svg":"/images/design/mobile/back-btn.svg";const l=JSON.parse(window.localStorage.getItem("webshopDiscountData"));return(0,c.jsxs)(i.Fragment,{children:[e&&!t&&(0,c.jsx)("div",{className:"row header-mobile scrolling-header",children:(0,c.jsx)("div",{className:"wrap-header",children:(0,c.jsx)("div",{className:"mobile-search-section",children:(0,c.jsx)(y,{placeholder:"Suchbegriff eingeben...",hideSearchBar:this.hideSearchBar})})})}),!e&&!t&&(0,c.jsxs)("div",{className:"row header-mobile scrolling-header",children:[1==l.mobile_topbar_active&&(0,c.jsx)("div",{style:{position:"relative"},className:"notification-top-bar",children:(0,c.jsx)("p",{dangerouslySetInnerHTML:{__html:(0,p.y7)(l.mobile_topbar_text,"discount-code")}})}),(0,c.jsxs)("div",{className:"wrap-header",children:[(0,c.jsxs)("div",{className:window.isTablet?"col-xs-2 mobile-header":"col-xs-3 mobile-header",children:[this.props.back&&(0,c.jsx)("img",{loading:"lazy",src:o,onClick:this.props.handlerBack,alt:""}),this.props.menu&&(0,c.jsx)("div",{className:"hamburger",onClick:this.showMenu,children:window.isTablet?(0,c.jsxs)("svg",{viewBox:"0 0 64 48",children:[(0,c.jsx)("path",{d:"M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"}),(0,c.jsx)("path",{d:"M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"}),(0,c.jsx)("path",{d:"M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"})]}):(0,c.jsxs)("svg",{viewBox:"0 0 64 48",children:[(0,c.jsx)("path",{d:"M16,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"}),(0,c.jsx)("path",{d:"M16,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"}),(0,c.jsx)("path",{d:"M42,33 L19,33 C-8,33 6,-2 22,14 L45,37"})]})})]}),(0,c.jsx)("div",{className:window.isTablet?"col-xs-8 text-center":"col-xs-6 text-center",children:(0,c.jsx)(a.rU,{to:"/",children:(0,c.jsx)("p",{className:"title",dangerouslySetInnerHTML:{__html:this.props.title}})})}),(0,c.jsxs)("div",{className:window.isTablet?"col-xs-2 text-right":"col-xs-3 text-right",style:{paddingLeft:"0px"},children:[!this.props.btnWriteReview&&(0,c.jsxs)("span",{className:"basketButtons",children:[(0,c.jsx)("span",{className:"search",onClick:this.showSearchBar,children:(0,c.jsx)("img",{loading:"lazy",src:"/images/design/searchBtn.svg",alt:""})}),(0,c.jsx)("div",{className:"basketArea",children:(0,c.jsx)(a.rU,{to:"/warenkorb","aria-label":"Read",children:(0,c.jsxs)("span",{className:"basket",children:[(0,c.jsx)("img",{loading:"lazy",src:"/images/design/cart-new.svg",alt:"",width:"auto",height:"auto"}),this.props.basket.countVerkaufen+this.props.basket.count>0&&(0,c.jsx)("span",{className:"count cart-total-kaufen",children:this.props.basket.countVerkaufen+this.props.basket.count})]})})}),(0,c.jsx)("span",{className:"wishButtons",children:(0,c.jsx)(a.rU,{to:"/wunschliste","aria-label":"Read",children:(0,c.jsxs)("span",{className:"basket",children:[(0,c.jsx)("img",{loading:"lazy",src:"/images/design/wishIcon.svg",alt:"",width:"auto",height:"auto"}),this.props.basket.wishlistCount>0&&(0,c.jsx)("span",{className:"count wish-total-kaufen",children:this.props.basket.wishlistCount})]})})})]}),this.props.btnWriteReview&&(0,c.jsx)("img",{loading:"lazy",src:"/images/design/edit-green.png",onClick:this.props.handlerWrite})]})]}),(0,c.jsx)(n.Z,{showLangMenu:this.showLangMenu})]}),t&&!e&&(0,c.jsxs)("div",{className:"row header-mobile scrolling-header",children:[(0,c.jsxs)("div",{className:"wrap-header",children:[(0,c.jsx)("div",{className:"col-xs-3 mobile-header",children:(0,c.jsx)("div",{className:"hamburgerLang open",onClick:this.hideLangMenu,children:window.isTablet?(0,c.jsxs)("svg",{viewBox:"0 0 64 48",children:[(0,c.jsx)("path",{d:"M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"}),(0,c.jsx)("path",{d:"M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"}),(0,c.jsx)("path",{d:"M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"})]}):(0,c.jsxs)("svg",{viewBox:"0 0 64 48",children:[(0,c.jsx)("path",{d:"M16,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"}),(0,c.jsx)("path",{d:"M16,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"}),(0,c.jsx)("path",{d:"M42,33 L19,33 C-8,33 6,-2 22,14 L45,37"})]})})}),(0,c.jsx)("div",{className:"col-xs-6 text-center",children:(0,c.jsx)("p",{className:"title",children:"Sprache ausw\xe4hlen"})})]}),(0,c.jsx)(h,{hideLangMenu:this.hideLangMenu})]}),!e&&!t&&s&&(0,c.jsx)(g.Z,{toggleLightbox:this.toggleCouponFromAds})]})}}j.defaultProps={};const f=(0,o.$j)((function(e){return{basket:e.basket}}))(j)},83924:(e,s,t)=>{t.d(s,{Z:()=>u});var i=t(47313),a=t(78081),o=t(72231),n=t(72905),l=t(70259),r=t(18871),c=t(76233),d=t(77115),h=t.n(d),g=(t(31946),t(59548),t(53454)),p=t(46417);class m extends i.Component{constructor(e){let s=window.localStorage.getItem("lang");"undefined"!=typeof s&&s&&""!=s||(s="de"),super(e),this.state={isToggle:!1,lang:s},this.mapSubmodels=this.mapSubmodels.bind(this),this.logOut=this.logOut.bind(this),this.initFb=this.initFb.bind(this),this.initGoogle=this.initGoogle.bind(this),this.hideMenu=this.hideMenu.bind(this)}componentDidMount(){window.isFBConnection&&this.initFb(),window.isGoogleConnection&&this.initGoogle(),window.isMobile||this.props.shopActions.loadDevices("/api/devices")}hideMenu(){$(".menuMobile").css({top:0,transform:"translateY(-100%)"}),$(".hamburger").toggleClass("open")}toggleDropdown(){const e=this.state.isToggle;this.setState({isToggle:!e})}showLangMenu(){this.props.showLangMenu&&this.props.showLangMenu()}mapSubmodels(e,s){let t=[e.name.replace(/ /g,"-").toLowerCase()];e.submodels&&function e(s){t.push(s[0].name.replace(/ /g,"-").toLowerCase()),s[0].submodels&&e(s[0].submodels)}(e.submodels);t.join("/")}initFb(){window.fbAsyncInit=function(){FB.init({appId:window.oauthIds.facebookId,xfbml:!0,version:"v2.9"})},function(e,s,t){var i,a=e.getElementsByTagName(s)[0];e.getElementById(t)||((i=e.createElement(s)).id=t,i.src="//connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(i,a))}(document,"script","facebook-jssdk")}initGoogle(){window.gapiAuth2=null,"undefined"!==typeof gapi&&gapi.load("auth2",(()=>{gapi.auth2.init({client_id:window.oauthIds.googleId}).then((e=>{window.gapiAuth2=e}))}))}logOut(){null!=FB.getAccessToken()&&FB.logout((function(e){FB.Auth.setAuthResponse(null,"unknown")})),window.gapiAuth2&&window.gapiAuth2.disconnect(),window.localStorage.removeItem("token"),this.props.userActions.logOut()}render(){let{selectedOption:e,lang:s,isToggle:t}=this.state;window.domainName.name.split(".")[window.domainName.name.split(".").length-1];const i=JSON.parse(window.localStorage.getItem("locationData"));let a=new(h())(window.navigator.userAgent);const n={};return i&&(n.place=i.data.find((e=>!0===e.active)),null==n.place&&(n.place=i.data[0])),(0,p.jsx)("div",{className:"menuMobile",children:(0,p.jsx)("nav",{className:"iPhone"===a.mobile()&&"Safari"===a.userAgent()&&t?"is-toggle":null,children:(0,p.jsxs)("ul",{children:[this.props.user.isLogin&&(0,p.jsxs)("li",{style:{fontWeigh:"500",fontSize:"14px",color:"#161616",display:"flex",paddingBottom:"30px"},children:[(0,p.jsx)("img",{loading:"lazy",src:"/images/mobile_menu/user.svg",alt:"user"}),(0,p.jsx)(o.rU,{to:"/kundenkonto",activeClassName:"active",onClick:this.hideMenu,style:{paddingBottom:"0px"},children:(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,p.jsxs)("span",{className:"username",children:["Kundenkonto:"," ",this.props.user.data&&this.props.user.data.systemAddress.first_name+" "+this.props.user.data.systemAddress.last_name]}),(0,p.jsx)("span",{className:"email",style:{fontSize:"12px",color:"#707070"},children:this.props.user.data&&this.props.user.data.systemAddress.email})]})})]}),!this.props.user.isLogin&&(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{loading:"lazy",src:"/images/mobile_menu/user.svg",alt:"user"}),(0,p.jsx)("a",{href:"#",onClick:()=>(this.hideMenu(),$(".login-box-wrapper").css({display:"block"}),$("#op").trigger("click"),!1),children:"Login/Registrieren"})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{loading:"lazy",src:"/images/mobile_menu/wunschliste.svg",alt:"wunschliste"}),(0,p.jsx)(o.rU,{to:"/wunschliste",activeClassName:"active",onClick:this.hideMenu,"aria-label":"Read",children:"Wunschliste"})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{loading:"lazy",src:"/images/mobile_menu/Verkaufen.svg",alt:"Verkaufen"}),(0,p.jsx)(o.rU,{to:"/verkaufen",activeClassName:"active",onClick:this.hideMenu,children:this.props.t("headerTop.sell")})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{loading:"lazy",src:"/images/mobile_menu/Reparieren.svg",alt:"Reparieren"}),(0,p.jsx)("a",{href:"https://www.ireparatur.ch/",rel:"noopener",target:"_blank",onClick:this.hideMenu,children:this.props.t("headerTop.repair")})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{loading:"lazy",src:"/images/mobile_menu/Kaufen.svg",alt:"Kaufen"}),(0,p.jsx)(o.rU,{to:"/kaufen",activeClassName:"active",onClick:this.hideMenu,children:this.props.t("headerTop.buy")}),(0,p.jsx)("ul",{className:"submenu",children:this.props.devices.map(this.mapSubmodels)})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{loading:"lazy",src:"/images/mobile_menu/Kontakt.svg",alt:"Kontakt"}),(0,p.jsx)(o.rU,{to:"/kontakt",activeClassName:"active",onClick:this.hideMenu,children:this.props.t("headerTop.contact")})]}),(0,p.jsxs)("li",{onClick:()=>this.toggleDropdown(),children:[(0,p.jsx)("img",{loading:"lazy",src:"/images/location.png",alt:"location"}),(0,p.jsx)("p",{children:"Unsere Standorte"}),this.state.isToggle&&(0,p.jsx)("img",{loading:"lazy",style:{float:"right",marginRight:"18px"},src:"/images/caret-up.png"}),!this.state.isToggle&&(0,p.jsx)("img",{loading:"lazy",style:{float:"right",marginRight:"18px"},src:"/images/caret-down.png",alt:"caret-down"}),i&&this.state.isToggle&&i.data.map((e=>(0,p.jsxs)("div",{className:"img-item item-".concat(e.id),style:{display:"flex",marginBottom:"10px"},children:[console.log("item",e),(0,p.jsx)("img",{loading:"lazy",alt:"alt",width:10,height:13,src:"/images/".concat(e.id,".png"),style:{marginTop:"5px"}}),(0,p.jsxs)("div",{style:{width:"300px"},children:[(0,p.jsx)("span",{style:{fontWeight:"700",color:"#0F0F0F",fontSize:"16px",display:"block"},children:e.descriptionBranch}),(0,p.jsxs)("span",{style:{fontSize:"13px",color:"#949494",marginBottom:"12px",display:"block"},children:[e.address,",\xa0",e.zip,"\xa0",e.city]}),(0,p.jsxs)("p",{style:{fontSize:"13px",display:"flex",padding:0},children:[(0,p.jsx)("div",{className:"col-sm-3",style:{paddingLeft:0,width:"20px"},children:(0,p.jsx)("span",{style:{color:"#8B8B8B"},children:"Mo:"})}),(0,p.jsx)("div",{className:"col-md-9",children:(0,p.jsx)("span",{style:{color:"#0F0F0F"},children:e.openingHours.mon})})]}),(0,p.jsxs)("p",{style:{fontSize:"13px",display:"flex",padding:0},children:[(0,p.jsx)("div",{className:"col-sm-3",style:{paddingLeft:0,width:"20px"},children:(0,p.jsx)("span",{style:{color:"#8B8B8B"},children:"Di:"})}),(0,p.jsx)("div",{className:"col-md-9",children:(0,p.jsx)("span",{style:{color:"#0F0F0F"},children:e.openingHours.tue})})]}),(0,p.jsxs)("p",{style:{fontSize:"13px",display:"flex",padding:0},children:[(0,p.jsx)("div",{className:"col-sm-3",style:{paddingLeft:0,width:"20px"},children:(0,p.jsx)("span",{style:{color:"#8B8B8B"},children:"Mi:"})}),(0,p.jsx)("div",{className:"col-md-9",children:(0,p.jsx)("span",{style:{color:"#0F0F0F"},children:e.openingHours.wed})})]}),(0,p.jsxs)("p",{style:{fontSize:"13px",display:"flex",padding:0},children:[(0,p.jsx)("div",{className:"col-sm-3",style:{paddingLeft:0,width:"20px"},children:(0,p.jsx)("span",{style:{color:"#8B8B8B"},children:"Do:"})}),(0,p.jsx)("div",{className:"col-md-9",children:(0,p.jsx)("span",{style:{color:"#0F0F0F"},children:e.openingHours.thu})})]}),(0,p.jsxs)("p",{style:{fontSize:"13px",display:"flex",padding:0},children:[(0,p.jsx)("div",{className:"col-sm-3",style:{paddingLeft:0,width:"20px"},children:(0,p.jsx)("span",{style:{color:"#8B8B8B"},children:"Fr:"})}),(0,p.jsx)("div",{className:"col-md-9",children:(0,p.jsx)("span",{style:{color:"#0F0F0F"},children:e.openingHours.fri})})]}),(0,p.jsxs)("p",{style:{fontSize:"13px",display:"flex",padding:0},children:[(0,p.jsx)("div",{className:"col-sm-3",style:{paddingLeft:0,width:"20px"},children:(0,p.jsx)("span",{style:{color:"#8B8B8B"},children:"Sa:"})}),(0,p.jsx)("div",{className:"col-md-9",children:(0,p.jsx)("span",{style:{color:"#0F0F0F"},children:e.openingHours.sat})})]})]})]},"img-item-".concat(e.id))))]}),(0,p.jsxs)("li",{onClick:()=>this.showLangMenu(),children:[(0,p.jsx)("img",{loading:"lazy",src:"/images/design/lang/".concat(s,".svg")}),(0,p.jsx)("p",{children:s.toUpperCase()}),(0,p.jsx)("img",{loading:"lazy",style:{float:"right",marginRight:"18px"},src:"/images/caret-down.png",alt:"caret-down"})]})]})})})}}m.defaultProps={};const u=(0,g.Z)()((0,a.$j)((function(e){return{user:e.user,devices:e.shop.devices,places:e.places.currentLocation}}),(function(e){return{shopActions:(0,n.DE)(r,e),userActions:(0,n.DE)(c,e),placesActions:(0,n.DE)(l,e)}}))(m))}}]);
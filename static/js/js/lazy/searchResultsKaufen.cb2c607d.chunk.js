(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[5474,8100,8834],{18871:(e,t,s)=>{"use strict";s.r(t),s.d(t,{definedCounerForSearchInput:()=>l,loadDevices:()=>o,loadModels:()=>n,setFilterOptions:()=>r,setSearchResult:()=>c});var a=s(68903),i=s(51426);function o(e,t){return s=>{if("verkaufen"===t){const t=window.localStorage.getItem("devicesForPurchaseWithParams")&&""!==window.localStorage.getItem("devicesForPurchaseWithParams")?JSON.parse(window.localStorage.getItem("devicesForPurchaseWithParams")):null;t?s({type:a.LV,payload:t}):i.Z.loadDevices(e).then((e=>{let{data:{data:t}}=e;window.localStorage.setItem("devicesForPurchaseWithParams",JSON.stringify(t)),s({type:a.LV,payload:t})}))}else{const t=window.localStorage.getItem("devicesData")&&""!==window.localStorage.getItem("devicesData")?JSON.parse(window.localStorage.getItem("devicesData")):null,o=window.localStorage.getItem("devicesForPurchase")&&""!==window.localStorage.getItem("devicesForPurchase")?JSON.parse(window.localStorage.getItem("devicesForPurchase")):null;"/api/devices"===e&&t?s({type:a.GH,payload:t}):"/api/devicesForPurchase"===e&&o?s({type:a.GH,payload:o}):i.Z.loadDevices(e).then((t=>{let{data:{data:i}}=t;axios.get("/api/getShopCategories").then((t=>{let o=[...i];t.data.length>0&&(o=[...i,{id:11,name:"Zubeh\xf6r",submodels:t.data}]),"/api/devices"===e&&window.localStorage.setItem("devicesData",JSON.stringify(o)),"/api/devicesForPurchase"===e&&window.localStorage.setItem("devicesForPurchase",JSON.stringify(o)),s({type:a.GH,payload:o})}))}))}}}function n(e,t){return s=>{s({type:a.Ee,payload:{models:e,categoriesList:t}})}}function r(e){return t=>{t({type:a.gd,payload:e})}}function c(e,t){return{type:a.qZ,payload:{data:e.data,total:e.meta.totalCount,searchValue:t}}}function l(e){return{type:a.I,payload:e}}},46137:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(47313),i=s(72231),o=s(7e3),n=s(91066),r=s(46417);class c extends a.Component{constructor(e){super(e),this.handleCloseQuickView=()=>{this.props.closeQuickView()},this.state={currentModel:this.props.model,showPrev:this.props.allModels[0].id!==this.props.model.id,showNext:this.props.allModels[this.props.allModels.length-1].id!==this.props.model.id},this.handleKeyPress=this.handleKeyPress.bind(this),this.nextModel=this.nextModel.bind(this),this.prevModel=this.prevModel.bind(this)}componentDidMount(){document.addEventListener("keyup",this.handleKeyPress,{passive:!0})}componentWillUnmount(){document.removeEventListener("keyup",this.handleKeyPress)}handleKeyPress(e){"Escape"===e.key?this.props.closeQuickView():"ArrowRight"===e.key?this.state.showNext&&this.nextModel():"ArrowLeft"===e.key&&this.state.showPrev&&this.prevModel()}nextModel(){let e=this.props.allModels.findIndex((e=>e.id===this.state.currentModel.id));e>=0&&this.setState({currentModel:this.props.allModels[e+1],showPrev:!0,showNext:this.props.allModels.length>e+2})}prevModel(){let e=this.props.allModels.findIndex((e=>e.id===this.state.currentModel.id));e>=0&&this.setState({currentModel:this.props.allModels[e-1],showNext:!0,showPrev:e-1>0})}render(){let e=this.state.currentModel.model.split(" ").join("-").toLowerCase(),t=this.state.currentModel.color.toLowerCase()||"color",s=this.state.currentModel.capacity.toLowerCase()||"capacity",a=this.state.currentModel.deviceName.replace(/ /g,"-").toLowerCase(),c=this.state.currentModel;gtag("event","view_item",{items:[{id:c.shortcode,name:c.descriptionLong,list_name:"Kaufen",quantity:1,price:c.price,brand:c.deviceName,category:this.props.deviceName||""}]}),(0,n.mW)();var l={ProductName:c.descriptionLong,ProductID:c.shortcode,Categories:[this.props.deviceName],ImageURL:c.deviceImages.mainImg.src,URL:window.location.href,Brand:c.deviceName,Price:c.discountPrice||c.price,CompareAtPrice:c.price};return _learnq.push(["track","Viewed Product",l]),_learnq.push(["trackViewedItem",{Title:l.ProductName,ItemId:l.ProductID,Categories:l.Categories,ImageUrl:l.ImageURL,Url:l.URL,Metadata:{Brand:l.Brand,Price:l.Price,CompareAtPrice:l.CompareAtPrice}}]),(0,r.jsx)("div",{className:"quickViewPage-overlay",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"quickViewPage-wrap",children:[(0,r.jsx)("div",{className:"quickViewPage-wrap-btnClose",onClick:this.props.closeQuickView,children:(0,r.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})}),this.state.showNext&&(0,r.jsx)("span",{className:"next",onClick:this.nextModel,children:(0,r.jsx)("i",{className:"fa fa-angle-right","aria-hidden":"true"})}),this.state.showPrev&&(0,r.jsx)("span",{className:"prev",onClick:this.prevModel,children:(0,r.jsx)("i",{className:"fa fa-angle-left","aria-hidden":"true"})}),(0,r.jsx)(o.Z,{currentModel:[this.state.currentModel],quickPreview:!0,handleCloseQuickView:this.handleCloseQuickView,openSuccessAddToBasket:this.props.openSuccessAddToBasket,capacityName:this.props.capacityName,upsellingItems:[]}),(0,r.jsx)("div",{className:"cb"}),(0,r.jsx)("div",{className:"col-sm-12",style:{marginTop:"15px"},children:(0,r.jsxs)(i.rU,{className:"btn",style:{color:"#fff"},to:"/kaufen/detail/".concat(a,"/").concat(e,"/").concat(s,"/").concat(t,"/").concat(this.state.currentModel.shortcode),children:["Im Detail anzeigen",(0,r.jsx)("span",{children:(0,r.jsx)("i",{className:"fa fa-long-arrow-right","aria-hidden":"true"})})]})}),(0,r.jsx)("div",{className:"cb"})]})})})}}c.defaultProps={};const l=c},91704:(e,t,s)=>{"use strict";s.r(t),s.d(t,{SearchResultsKaufen:()=>w,default:()=>k});var a=s(47313),i=s(77262),o=s(78081),n=s(72231),r=s(42240),c=s.n(r),l=s(72905),d=s(73815),h=s(18871),p=s(22667),u=s(46137),m=s(46417);const g=e=>{let{data:t,addModelToBasket:s,status:a,openQuickView:i}=e,o=t.model.split(" ").join("-").toLowerCase(),r=t.color.toLowerCase()||"color",c=t.capacity.toLowerCase()||"capacity",l=t.deviceName.replace(/ /g,"-").toLowerCase();return(0,m.jsxs)("div",{className:t.discountPrice?"itemModelSearch discount":"itemModelSearch",children:[(0,m.jsxs)("div",{className:"modelInfo",children:[(0,m.jsx)("div",{className:"image",children:(0,m.jsx)("img",{src:t.deviceImages.mainImg.src,alt:""})}),(0,m.jsxs)("div",{className:"info",children:[t.discountPrice&&(0,m.jsx)("span",{className:"discount-mark",children:"aktion"}),(0,m.jsxs)(n.rU,{className:"name",to:"/kaufen/detail/".concat(l,"/").concat(o,"/").concat(c,"/").concat(r,"/").concat(t.shortcode),onClick:e=>{return s=t,gtag("event","select_content",{content_type:"product",items:[{id:s.shortcode,name:s.descriptionLong||s.model||"",list_name:"Kaufen",quantity:1,brand:s.deviceName,price:s.discountPrice||s.price}]}),void window.localStorage.setItem("gtag",JSON.stringify({category:""}));var s},children:[t.model,", ID: ",t.shortcode]}),(0,m.jsxs)("p",{className:"criteria",children:[t.color,", ",t.capacity]}),window.isMobile&&(0,m.jsxs)("span",{className:"priceMobile",children:[t.discountPrice&&(0,m.jsxs)("span",{className:"value discount-price",children:[t.discountPrice," ",window.currencyValue]}),(0,m.jsxs)("span",{className:t.discountPrice?"value old-price":"value",children:[t.price," ",window.currencyValue]})]})]})]}),(0,m.jsxs)("div",{className:"modelInfoRight",children:[(0,m.jsxs)("div",{className:"price",children:[(0,m.jsx)("span",{className:"title",children:"Preis"}),t.discountPrice&&(0,m.jsxs)("span",{className:"value discount-price",children:[t.discountPrice," ",window.currencyValue]}),(0,m.jsxs)("span",{className:t.discountPrice?"value old-price":"value",children:[t.price," ",window.currencyValue]})]}),(0,m.jsx)("button",{className:"addToBasket","data-status":a,onClick:e=>s(e,t)})]})]})},v=[{label:"Beliebteste Produkte",value:"popular"},{label:"G\xfcnstige Preise zuerst anzeigen",value:"niedrighoch"},{label:"Hohe Preise zuerst anzeigen",value:"hochniedrig"},{label:"Nach Einstelldatum sortieren",value:"neu"}];class w extends a.Component{constructor(e){super(e),this.state={pagination:{activePage:0,totalItemsCount:0,pageCount:0},currentValueSort:"popular",infoNoModels:!1,quickPreview:null,capacityName:""},this.goBack=this.goBack.bind(this),this.changeSortBy=this.changeSortBy.bind(this),this.mapModels=this.mapModels.bind(this),this.addModelToBasket=this.addModelToBasket.bind(this),this.handlePageChange=this.handlePageChange.bind(this),this.openQuickView=this.openQuickView.bind(this),this.closeQuickView=this.closeQuickView.bind(this)}componentWillUnmount(){this.props.shopActions.setSearchResult({data:[],meta:{totalCount:0}},"")}componentDidMount(){document.getElementById("spinner-box-load").style.display="block",axios.post("/api/models",{search:this.props.params.searchParam,sort:"popular",page:1}).then((e=>{document.getElementById("spinner-box-load").style.display="none";let t=e.data.meta.pagination;this.props.shopActions.setSearchResult(e.data,this.props.params.searchParam),this.setState({pagination:{...this.state.pagination,activePage:0,totalItemsCount:t.total,pageCount:Math.ceil(t.total/t.per_page)},infoNoModels:0===e.data.data.length,capacityName:e.data.meta.capacityName}),window.isGoogleConnection&&this.gtagEnhancedEcommerce()}))}gtagEnhancedEcommerce(){let e=this.props.searchResults.data.map((e=>({id:e.shortcode,name:e.descriptionLong||e.model||"",list_name:"Kaufen",quantity:1,brand:e.deviceName,price:e.discountPrice||e.price})));gtag("event","view_item_list",{items:e})}openQuickView(e){let{data:t}=this.props.searchResults;this.setState({quickPreview:(0,m.jsx)(u.Z,{model:e,allModels:t,capacityName:this.state.capacityName,closeQuickView:this.closeQuickView})})}closeQuickView(){this.setState({quickPreview:null})}handlePageChange(e){let t={search:this.props.params.searchParam,sort:this.state.currentValueSort,page:e.selected+1};document.getElementById("spinner-box-load").style.display="block",axios.post("/api/models",t).then((t=>{document.getElementById("spinner-box-load").style.display="none",window.scrollTo(0,0),this.props.shopActions.setSearchResult(t.data,this.props.params.searchParam),this.setState({pagination:{...this.state.pagination,activePage:e.selected}}),window.isGoogleConnection&&this.gtagEnhancedEcommerce()}))}addModelToBasket(e,t){e.stopPropagation();let s=e.target.getAttribute("data-status"),{basketData:a}=this.props,i=null;if(a.every((e=>e.id!=t.id)))i=[...a,t];else{let e="";i=a.filter((s=>s.id!=t.id||(e=s.shortcode,!1))),e&&(i=i.filter((t=>t.deviceShortcode!=e)))}this.props.basketActions.changeBasketData(i),"out"===s&&(window.isMobile?n.mW.push("/warenkorb"):(this.props.basketActions.basketAddEffect((0,m.jsx)(p.Z,{startPosition:$(e.target).offset(),image:t.deviceImages.mainImg.src,basketType:"kaufen"})),setTimeout((()=>{n.mW.push("/warenkorb"),this.props.basketActions.basketAddEffect(null)}),2e3)))}changeSortBy(e){let t=e,s={search:this.props.searchResults.searchValue,sort:t,page:1};document.getElementById("spinner-box-load").style.display="block",axios.post("/api/models",s).then((e=>{document.getElementById("spinner-box-load").style.display="none";let s=e.data.meta.pagination;this.setState({pagination:{...this.state.pagination,activePage:0,totalItemsCount:s.total,pageCount:Math.ceil(s.total/s.per_page)},currentValueSort:t}),this.props.shopActions.setSearchResult(e.data,this.props.searchResults.searchValue),window.isGoogleConnection&&this.gtagEnhancedEcommerce()}))}goBack(){this.props.shopActions.setSearchResult({data:[],meta:{totalCount:0}},""),n.mW.push("/kaufen")}mapModels(e,t){return(0,m.jsx)(g,{data:e,openQuickView:this.openQuickView,status:this.props.basketData.some((t=>t.id===e.id))?"in":"out",addModelToBasket:this.addModelToBasket},t)}render(){let{data:e}=this.props.searchResults,{pagination:t,infoNoModels:s,quickPreview:a}=this.state;return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"searchResults",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xs-12",children:(0,m.jsxs)("div",{className:"div topRow",children:[(0,m.jsx)("button",{onClick:this.goBack,children:"zur\xfcck"}),(0,m.jsxs)("div",{className:"sort",children:[(0,m.jsx)("span",{children:"Sortieren nach"}),(0,m.jsx)(c(),{options:v,onChange:this.changeSortBy,value:this.state.currentValueSort,searchable:!1})]})]})}),(0,m.jsxs)("div",{className:"col-xs-12",children:[(0,m.jsxs)("div",{className:"wrapModels",children:[e.map(this.mapModels),s&&(0,m.jsxs)("p",{children:["Zum aktuellen Zeitpunkt haben vom Modell:"," ",this.props.searchResults.searchValue," keine Produkte an Lager."]})]}),e.length>0&&(0,m.jsx)("div",{className:"col-md-12 text-center",children:(0,m.jsx)(i.Z,{previousLabel:"<",nextLabel:">",breakLabel:(0,m.jsx)("a",{href:"",children:"..."}),breakClassName:"break-me",pageCount:t.pageCount,forcePage:t.activePage,marginPagesDisplayed:5,pageRangeDisplayed:5,onPageChange:this.handlePageChange,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})]})]})})}),a]})}}w.defaultProps={};const k=(0,o.$j)((function(e){return{searchResults:e.shop.searchResults,basketData:e.basket.basketData}}),(function(e){return{shopActions:(0,l.DE)(h,e),basketActions:(0,l.DE)(d,e)}}))(w)},72060:(e,t,s)=>{var a=s(18665),i=s(89752);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==a(e)}}}]);
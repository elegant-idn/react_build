"use strict";(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[621],{18871:(e,a,s)=>{s.r(a),s.d(a,{definedCounerForSearchInput:()=>n,loadDevices:()=>c,loadModels:()=>i,setFilterOptions:()=>o,setSearchResult:()=>l});var t=s(68903),r=s(51426);function c(e,a){return s=>{if("verkaufen"===a){const a=window.localStorage.getItem("devicesForPurchaseWithParams")&&""!==window.localStorage.getItem("devicesForPurchaseWithParams")?JSON.parse(window.localStorage.getItem("devicesForPurchaseWithParams")):null;a?s({type:t.LV,payload:a}):r.Z.loadDevices(e).then((e=>{let{data:{data:a}}=e;window.localStorage.setItem("devicesForPurchaseWithParams",JSON.stringify(a)),s({type:t.LV,payload:a})}))}else{const a=window.localStorage.getItem("devicesData")&&""!==window.localStorage.getItem("devicesData")?JSON.parse(window.localStorage.getItem("devicesData")):null,c=window.localStorage.getItem("devicesForPurchase")&&""!==window.localStorage.getItem("devicesForPurchase")?JSON.parse(window.localStorage.getItem("devicesForPurchase")):null;"/api/devices"===e&&a?s({type:t.GH,payload:a}):"/api/devicesForPurchase"===e&&c?s({type:t.GH,payload:c}):r.Z.loadDevices(e).then((a=>{let{data:{data:r}}=a;axios.get("/api/getShopCategories").then((a=>{let c=[...r];a.data.length>0&&(c=[...r,{id:11,name:"Zubeh\xf6r",submodels:a.data}]),"/api/devices"===e&&window.localStorage.setItem("devicesData",JSON.stringify(c)),"/api/devicesForPurchase"===e&&window.localStorage.setItem("devicesForPurchase",JSON.stringify(c)),s({type:t.GH,payload:c})}))}))}}}function i(e,a){return s=>{s({type:t.Ee,payload:{models:e,categoriesList:a}})}}function o(e){return a=>{a({type:t.gd,payload:e})}}function l(e,a){return{type:t.qZ,payload:{data:e.data,total:e.meta.totalCount,searchValue:a}}}function n(e){return{type:t.I,payload:e}}},32339:(e,a,s)=>{s.r(a),s.d(a,{CategoriesPage:()=>p,default:()=>g});var t=s(47313),r=s(72231),c=s(12279),i=s.n(c),o=s(23320),l=(s(24679),s(46417));class n extends t.Component{constructor(e){super(e),this.state={},this.mapSubmodels=this.mapSubmodels.bind(this)}mapSubmodels(e,a){let{index:s,params:t}=this.props,c="";for(let r in t){let e=r.slice(14);r.includes("deviceCategory")&&t[r]&&+e<s&&(c+=t[r]+"/")}let i=e.submodels?"":"/filter";return(0,l.jsxs)(r.rU,{to:"/kaufen/".concat(c).concat(e.name.toLowerCase().replace(/ /g,"-")).concat(i),className:"item-category",children:[1===this.props.index&&(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{loading:"lazy",src:"/images/design/".concat(e.id,"activeDevice.svg"),alt:""})}),1!==this.props.index&&e.logoContent&&(0,l.jsx)("div",{className:"image",dangerouslySetInnerHTML:{__html:e.logoContent}}),1!==this.props.index&&e.images&&(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{loading:"lazy",src:e.images[0],alt:""})}),(0,l.jsx)("p",{className:"name",children:e.name})]},a)}render(){let{submodels:e,index:a,params:s,category:t}=this.props,c="",i=[];return s["deviceCategory"+a]&&(c=e.filter((e=>e.name.toLowerCase()==s["deviceCategory"+a].replace(/-/g," ")))),c[0]&&c[0].submodels&&(i=c[0].submodels),(0,l.jsxs)("div",{children:[!s["deviceCategory"+a]&&(0,l.jsxs)("div",{className:"category-row",children:[t&&"zubeh\xf6r"!=t&&(0,l.jsxs)(r.rU,{to:"/kaufen/".concat(t,"/filter"),className:"item-category",children:[(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{loading:"lazy",src:"/images/design/all_devices.svg",alt:""})}),(0,l.jsx)("p",{className:"name",children:"Alle Ger\xe4te anzeigen"})]},a+99),this.props.submodels.map(this.mapSubmodels)]}),i.length>0&&s["deviceCategory"+a]&&(0,l.jsx)(n,{submodels:i,params:s,index:a+1,category:s["deviceCategory"+a]})]})}}const d=n;var h=s(78081),m=s(18871),u=s(72905);class p extends t.Component{constructor(e){super(e),this.handleOnScroll=()=>{let{searchValue:e,totalSearchItems:a,searchData:s}=this.state;if(e){if(s.length===a)return!1;window.innerHeight+document.documentElement.scrollTop>document.documentElement.offsetHeight-window.innerHeight/1.5.toFixed()&&this.handleClickLoadMoreSearchResults()}},this.handleClickLoadMoreSearchResults=()=>{let{currentSearchPage:e,searchValue:a}=this.state,s=++e;this.setState({currentSearchPage:s}),this._getSearchResults(a,s,!0)},this.state={categoryName:this.props.params.deviceCategory1||"Welches Ger\xe4t m\xf6chten Sie kaufen?",searchData:[],searchValue:this.props.helperCounter,totalSearchItems:0,currentSearchPage:1,perPage:0,showInfoNoData:!1,showSearchResult:!1},this.handleChangeSearchField=this.handleChangeSearchField.bind(this),this.mapCategoriesData=this.mapCategoriesData.bind(this),this.mapSearchData=this.mapSearchData.bind(this),this.handleClickLoadMoreSearchResults=this.handleClickLoadMoreSearchResults.bind(this),this._getSearchResults=this._getSearchResults.bind(this),this.setSearchData=this.setSearchData.bind(this),this.debouncedLoadSearchResults=i()(this._getSearchResults,1e3)}componentWillMount(){if(this.props.helperCounter)return this.debouncedLoadSearchResults(this.props.helperCounter,1)}componentDidMount(){window.addEventListener("scroll",this.handleOnScroll,{passive:!0}),0===this.props.devices.length&&(document.getElementById("spinner-box-load").style.display="block")}componentWillReceiveProps(e){e.devices!==this.props.devices&&e.devices.length>=0&&(document.getElementById("spinner-box-load").style.display="none"),e.params!==this.props.params&&this.setState({showSearchResult:!1,searchValue:"",searchData:[],currentSearchPage:1,showInfoNoData:!1,showSearchInfo:!1,categoryName:e.params.deviceCategory1||"Kategorien"})}componentWillUnmount(){window.removeEventListener("scroll",this.handleOnScroll),this.debouncedLoadSearchResults.cancel()}_getSearchResults(e,a,s){document.getElementById("spinner-box-load").style.display="block",axios.get("/api/searchShopAccessories?search=".concat(e,"&page=").concat(a)).then((e=>{document.getElementById("spinner-box-load").style.display="none",s?this.setState({searchData:this.state.searchData.concat(e.data.accessories),totalSearchItems:e.data.totalCount,perPage:e.data.perPage}):this.setState({searchData:e.data.accessories,totalSearchItems:e.data.totalCount,perPage:e.data.perPage,currentSearchPage:1,showSearchResult:!0,showInfoNoData:0===e.data.accessories.length})}))}setSearchData(e){this.setState({searchData:e})}handleChangeSearchField(e){let{value:a}=e.target;a?(this.setState({searchValue:a}),this.debouncedLoadSearchResults(a,1)):(this.debouncedLoadSearchResults.cancel(),this.setState({searchValue:a,showSearchResult:!1,searchData:[],currentSearchPage:1,showInfoNoData:!1,showSearchInfo:!1}))}mapSearchData(e,a){const{definedCounerForSearchInput:s}=this.props.shopActions,{searchValue:t,currentSearchPage:c}=this.state;let i=e.title.split(" ").join("-").toLowerCase().replace(/\//g,"--"),n=e.deviceName.toLowerCase().replace(/ /g,"-");return(0,l.jsx)("div",{onClick:()=>s({searchValue:t,currentSearchPage:c}),className:"col-md-3 item-accessory-shuffle",children:(0,l.jsx)(o.f,{animationIn:"fadeIn zoomIn",animationOut:"zoomOut",children:(0,l.jsx)(r.rU,{to:"/kaufen/detail/zubehoer/".concat(n,"/").concat(i,"/").concat(e.shortcode),children:(0,l.jsxs)("div",{className:"item-accessory",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{loading:"lazy",src:e.images&&e.images[0].filename||"/images/design/Product.svg",alt:""})}),(0,l.jsx)("p",{className:"modelName",children:e.title})]}),(0,l.jsxs)("div",{className:"bottom-row",children:[(0,l.jsxs)("div",{className:"price",children:[(0,l.jsx)("p",{className:"price-head",children:"Preis"}),(0,l.jsxs)("p",{className:"price-value",children:[e.price," ",window.currencyValue]})]}),(0,l.jsx)("div",{className:"text-right",children:(0,l.jsx)("button",{className:"btn addToBasket"})})]})]})})})},a)}mapCategoriesData(){let e=window.isMobile?2:4;return this.props.devices.reduce(((a,s,t)=>(t%e===0&&a.push([]),a[a.length-1].push((0,l.jsxs)(r.rU,{to:"/kaufen/".concat(s.name.toLowerCase().replace(/ /g,"-")),className:"item-category",children:[(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{loading:"lazy",src:"/images/design/".concat(s.id,"activeDevice.svg"),alt:""})}),(0,l.jsx)("p",{className:"name",children:s.name})]},t)),a)),[]).map((function(e,a){return(0,l.jsx)("div",{className:"category-row",children:e},a)}))}render(){let{categoryName:e,searchValue:a,searchData:s,totalSearchItems:t,showSearchResult:r,showInfoNoData:c,currentSearchPage:i,perPage:o}=this.state;Math.ceil(t/o);return(0,l.jsx)("div",{className:"kaufen-page",children:(0,l.jsx)("div",{className:"kaufen-page-content",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsx)("div",{className:"categories-list",style:{margin:0},children:(0,l.jsxs)("div",{className:"item-category main",children:[(0,l.jsx)("p",{className:"category",children:"Produkt ausw\xe4hlen"}),(0,l.jsx)("p",{className:"title",children:e})]})})}),"zubeh\xf6r"===this.props.params.deviceCategory1&&(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsxs)("div",{className:"searchBar",children:[(0,l.jsx)("input",{type:"text",value:a||this.props.helperCounter,onChange:this.handleChangeSearchField,placeholder:"Produkt finden"}),s.length>0&&(0,l.jsxs)("span",{className:"result-count",children:[t," Resulate"]})]})})]}),r&&s.length>0&&(0,l.jsx)("div",{className:"accessories",children:(0,l.jsx)("div",{className:"row accessory-row",children:s.map(this.mapSearchData)})}),!r&&(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"categories-list",children:[(0,l.jsx)("div",{className:"col-md-3"}),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)(d,{index:1,params:this.props.params,submodels:this.props.devices||[]})})]})}),c&&(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("h1",{children:"Information"}),(0,l.jsx)("p",{children:"Aktuell sind von diesem Typ keine Produkte an Lager."})]})]})})})}}const g=(0,h.$j)((function(e){return{devices:e.shop.devices,helperCounter:e.shop.helperCounter.searchValue,currentPage:e.shop.helperCounter.currentSearchPage}}),(function(e){return{shopActions:(0,u.DE)(m,e)}}))(p)}}]);
"use strict";(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[9],{78188:(s,e,a)=>{a.d(e,{Z:()=>l});var i=a(47313),t=a(46417);class n extends i.Component{constructor(s){super(s),this.state={inputField:"",errorInputData:"",showInput:!0,showOkMessage:!1},this.send=this.send.bind(this),this.changeInput=this.changeInput.bind(this),this.handleNoEmail=this.handleNoEmail.bind(this),this._validateInput=this._validateInput.bind(this),this._gtag_report_conversion=this._gtag_report_conversion.bind(this)}_render(){let s=new Date((new Date).getTime()+12096e5).toJSON().slice(0,10).split("-").reverse().join(".");return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsxs)("div",{className:"row banner",children:[(0,t.jsx)("div",{className:"guy",children:(0,t.jsx)("img",{loading:"lazy",src:"/images/design/Guy.svg",alt:""})}),(0,t.jsxs)("div",{className:"price",children:[(0,t.jsx)("span",{className:"price-amount",children:"20 CHF"}),(0,t.jsx)("span",{className:"price-title",children:"Gutschein"})]}),(0,t.jsx)("div",{className:"visible-md visible-lg visible-xl col-sm-2 col-md-2"}),(0,t.jsx)("div",{className:"col-sm-6 col-md-5 text-left",children:(0,t.jsxs)("div",{className:"flex-column",children:[(0,t.jsxs)("h3",{children:["Wir feiern unser 10 j\xe4hriges ",(0,t.jsx)("span",{children:"Jubil\xe4um"})," - Feiern Sie mit!"]}),(0,t.jsxs)("p",{children:["G\xfcltig auf alle Ank\xe4ufe ab 50.- ",window.currencyValue," bzw. Ger\xe4te ab 99.- ",window.currencyValue," mit diesem Gutschein, g\xfcltig bis ",s,". Dieser Gutschein ist nicht mit anderen Aktionen / Rabatten kumulierbar."]})]})}),this.state.showInput&&(0,t.jsx)("div",{className:"col-sm-3 col-md-4 text-right",children:(0,t.jsxs)("div",{className:"flex-column",children:[(0,t.jsx)("span",{className:"error",children:this.state.errorInputData}),(0,t.jsx)("form",{className:"form",name:"coupon",onSubmit:this.send,children:(0,t.jsxs)("label",{style:{display:"inline",float:"none",lineHeight:"inherit"},children:[(0,t.jsx)("input",{type:"text",name:"email",id:"couponEmail",onChange:this.changeInput,placeholder:"E-Mail oder Mobilnummer"}),(0,t.jsx)("button",{"aria-label":"Submit",type:"submit"}),(0,t.jsx)("input",{type:"text",name:"email2",style:{display:"none"}}),(0,t.jsx)("p",{className:"info-text",children:"Wir geben Ihre Daten niemals an Dritte weiter."})]})})]})}),this.state.showOkMessage&&(0,t.jsx)("div",{className:"col-sm-4 col-md-5 text-right",style:{margin:"0 20px"},children:(0,t.jsxs)("p",{children:["Vielen Dank! Sie erhalten den Gutschein innerhalb von 15 Minuten per E-Mail bzw. SMS zugesendet.\xa0",(0,t.jsx)("a",{href:"#",className:"noEmail",onClick:this.handleNoEmail,children:"Gutschein nicht erhalten"}),"?"]})})]}),(0,t.jsxs)("p",{className:"couponDescr-mobile",children:["Auf alle Ank\xe4ufe ab 99.- ",window.currencyValue," mit diesem Gutschein, g\xfcltig bis ",s,". Dieser Gutschein ist nicht mit anderen Aktionen / Rabatten kumulierbar."]})]})}}n.defaultProps={};const l=n},12197:(s,e,a)=>{a.d(e,{Z:()=>m});var i=a(47313),t=a(72231),n=a(44021),l=a(3504),r=a(60973),c=a(81698),o=a(78081),d=a(46417);class h extends i.Component{constructor(s){super(s),this.state={data:[],hideNavArrowsPrev:!0,hideNavArrowsNext:!0,infoRatings:{total:0,average:0,statistics:[{stars:5,count:0},{stars:4,count:0},{stars:3,count:0},{stars:2,count:0},{stars:1,count:0}]},showModalWriteRating:!1,writeRatingToday:!1},this.mapItemReview=this.mapItemReview.bind(this),this.prevReview=this.prevReview.bind(this),this.nextReview=this.nextReview.bind(this),this.beforeChange=this.beforeChange.bind(this),this.showReview=this.showReview.bind(this),this._loadRatingData=this._loadRatingData.bind(this),this.closeShowModalWriteRating=this.closeShowModalWriteRating.bind(this),this.writeRating=this.writeRating.bind(this)}componentDidMount(){this._loadRatingData()}_loadRatingData(){this.props.notShowLoader||(document.getElementById("spinner-box-load").style.display="block"),axios.get("/api/getRatings?page=1&&sort=newest").then((s=>{this.props.notShowLoader||(document.getElementById("spinner-box-load").style.display="none"),this.setState({infoRatings:s.data.info,hideNavArrowsNext:s.data.items.length<3,data:s.data.items})}))}cmapItemReview(s,e){return(0,d.jsx)("div",{className:"col-xs-12 itemCustomer",children:(0,d.jsxs)(i.Fragment,{children:[(0,d.jsxs)("div",{className:"avatar",children:[s.googleRating&&(0,d.jsx)("img",{loading:"lazy",src:s.photo,alt:""}),!s.googleRating&&1===s.anonym&&(0,d.jsx)("span",{children:s.name}),!s.googleRating&&0===s.anonym&&(0,d.jsx)("span",{children:s.firstname.slice(0,1).toUpperCase()+s.lastname.slice(0,1).toUpperCase()})]}),(0,d.jsxs)("div",{className:"name",children:[(s.googleRating||1===s.anonym)&&(0,d.jsx)("span",{children:s.name}),!s.googleRating&&0===s.anonym&&(0,d.jsx)("span",{children:s.firstname+" "+s.lastname}),(0,d.jsx)("div",{className:"stars",children:function(s){let e=[];for(let a=1;a<=5;++a){let i=s>=a?"fa fa-star active":"fa fa-star";e.push((0,d.jsx)("i",{className:i,"aria-hidden":"true"},"ItemReviewStar-".concat(a)))}return e}(s.stars)})]}),(0,d.jsxs)("div",{className:"text",children:[s.message.length>150&&(0,d.jsxs)("p",{children:[s.message.substr(0,150),(0,d.jsx)("span",{children:"..."}),(0,d.jsx)("i",{onClick:this.showReview,className:"fa fa-angle-down","aria-hidden":"true"}),(0,d.jsxs)("span",{style:{display:"none"},children:[s.message.substr(150,s.message.length),(0,d.jsx)("i",{onClick:this.showReview,className:"fa fa-angle-up","aria-hidden":"true"})]})]}),s.message.length<=150&&(0,d.jsx)("p",{children:s.message})]})]})},"ItemReview-".concat(e))}sloopRender(){for(var s=[],e=0;e<this.state.infoRatings.average;e++)s.push((0,d.jsx)("i",{className:"fa fa-star","aria-hidden":"true"},"front-stars-".concat(e)));return s}render(){let{data:s,infoRatings:e,showModalWriteRating:a,writeRatingToday:i}=this.state,c=(window.isMobile,{dots:!1,arrows:!1,infinite:window.isMobile,draggable:!1,adaptiveHeight:s.length>0&&window.isMobile,speed:700,slidesToShow:3,slidesToScroll:1,beforeChange:this.beforeChange,useTransform:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}}]}),o=this.state.hideNavArrowsPrev?"navArrows disabled":"navArrows",h=this.state.hideNavArrowsNext?"navArrows disabled":"navArrows";return(0,d.jsxs)("section",{children:[(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"head",children:[(0,d.jsx)("p",{children:"Kundenmeinungen"}),(0,d.jsx)("h1",{children:"Unsere Kunden \xfcber uns"})]})}),(0,d.jsx)("p",{className:"link-to-ratings",children:(0,d.jsx)(t.rU,{to:"/bewertungen",children:"Alle Bewertungen anzeigen"})}),(0,d.jsxs)("div",{className:"row rating-section",children:[(0,d.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-3 pr-0 mobile-border",children:(0,d.jsxs)("div",{className:"ratings-info",children:[i&&(0,d.jsx)("span",{className:"error",children:"Sie k\xf6nnen nur eine Bewertung pro Tag abgeben"}),(0,d.jsxs)("div",{className:"wrap-info",children:[(0,d.jsxs)("div",{className:"average",children:[e.average,"/5"]}),(0,d.jsxs)("div",{className:"back-stars",children:[(0,d.jsx)("i",{className:"fa fa-star active","aria-hidden":"true"},"back-starts-1"),(0,d.jsx)("i",{className:"fa fa-star active","aria-hidden":"true"},"back-starts-2"),(0,d.jsx)("i",{className:"fa fa-star active","aria-hidden":"true"},"back-starts-3"),(0,d.jsx)("i",{className:"fa fa-star active","aria-hidden":"true"},"back-starts-4"),(0,d.jsx)("i",{className:"fa fa-star active","aria-hidden":"true"},"back-starts-5"),(0,d.jsx)("div",{className:"front-stars",children:this.loopRender()})]}),(0,d.jsx)("p",{className:"title",children:"Durchschnitt"}),(0,d.jsx)("div",{className:"write",onClick:this.writeRating,children:(0,d.jsx)("span",{children:"Bewertung abgeben"})})]})]})}),(0,d.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-9 pl-0",children:[(0,d.jsx)("div",{className:"row wrapCustomers",children:(0,d.jsx)("div",{className:"col-xs-12 col-md-12",children:s.length>0&&(0,d.jsx)(n.Z,{ref:"slider",...c,children:s.map(this.mapItemReview)})})}),(0,d.jsx)("div",{className:"row text-right",children:(0,d.jsxs)("div",{className:"col-md-12",children:[(0,d.jsx)("span",{className:o,onClick:this.prevReview,children:(0,d.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})}),(0,d.jsx)("span",{className:h,onClick:this.nextReview,children:(0,d.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"})})]})})]})]}),!window.isMobile&&(0,d.jsx)(l.Z,{showModalWriteRating:a,closeShowModalWriteRating:this.closeShowModalWriteRating,user:this.props.user}),window.isMobile&&(0,d.jsx)(r.Z,{user:this.props.user,showModalWriteRating:a,closeShowModalWriteRating:this.closeShowModalWriteRating})]})}}h.defaultProps={};const m=(0,o.$j)((function(s){return{user:s.user}}))(h)},46125:(s,e,a)=>{a.d(e,{Z:()=>c});var i=a(47313),t=a(44021),n=a(22707),l=a(46417);class r extends i.Component{constructor(s){super(s),this.state={countNumbers:!1},this._mapNumbers=this._mapNumbers.bind(this),this.animateOnScroll=this.animateOnScroll.bind(this),this.animateOnScroll.passive=!1}componentDidMount(){this.animateOnScroll()}animateOnScroll(){let s=this,e=$(".numbers").offset().top,a=$(".numbers").outerHeight(),i=$(window).height(),t=$(this).scrollTop();t-a-40>e+a-i&&s.setState({countNumbers:!0}),$(window).scroll((f))}_render(){return(0,l.jsxs)("div",{className:"container-fluid",children:[(0,l.jsxs)("div",{className:"row numbers text-center hidden-xs",children:[(0,l.jsxs)("div",{className:"col-xs-6 col-sm-6 col-md-3 itemNumber",children:[(0,l.jsx)("span",{className:"big",children:"5/5"}),(0,l.jsxs)("div",{className:"back-stars",children:[(0,l.jsx)("i",{className:"fa fa-star active"}),(0,l.jsx)("i",{className:"fa fa-star active"}),(0,l.jsx)("i",{className:"fa fa-star active"}),(0,l.jsx)("i",{className:"fa fa-star active"}),(0,l.jsx)("i",{className:"fa fa-star active"}),(0,l.jsxs)("div",{className:"front-stars",children:[(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"})]})]}),(0,l.jsx)("p",{className:"small",children:"BEWERTUNG"})]}),(0,l.jsxs)("div",{className:"col-xs-6 col-sm-6 col-md-3 itemNumber",children:[(0,l.jsxs)("span",{className:"big",children:[(0,l.jsx)("span",{className:"sybmol",children:"+"})," ",!this.state.countNumbers&&0,this.state.countNumbers&&(0,l.jsx)(n.Z,{to:11,speed:2e3})]}),(0,l.jsx)("p",{className:"small",children:"Jahre Erfahrung"})]}),(0,l.jsx)("div",{className:"clearfix visible-xs-block visible-sm-block"}),(0,l.jsxs)("div",{className:"col-xs-6 col-sm-6 col-md-3 itemNumber",children:[(0,l.jsxs)("span",{className:"big",children:[!this.state.countNumbers&&0,this.state.countNumbers&&(0,l.jsx)(n.Z,{to:30,speed:2e3}),(0,l.jsx)("sub",{children:"min."})]}),(0,l.jsx)("p",{className:"small",children:"schnelle Preissch\xe4tzung"}),(0,l.jsxs)("p",{className:"small",children:[(0,l.jsx)("span",{className:"smartphone",children:"30-60 min"}),(0,l.jsx)("span",{className:"television",children:"2-48 std"})]})]}),(0,l.jsxs)("div",{className:"col-xs-6 col-sm-6 col-md-3 itemNumber",children:[(0,l.jsxs)("span",{className:"big",children:[!this.state.countNumbers&&0,this.state.countNumbers&&(0,l.jsx)(n.Z,{to:24,speed:2e3}),(0,l.jsx)("sub",{children:"Std."})]}),(0,l.jsx)("p",{className:"small",children:"Dauer der Express"}),(0,l.jsx)("p",{className:"small pt-0",children:"Auszahlung"})]})]}),(0,l.jsxs)("div",{className:"row numbers text-center visible-xs",children:[(0,l.jsxs)("div",{className:"col-xs-6 col-sm-6 col-md-3 itemNumber",children:[(0,l.jsx)("span",{className:"big",children:"5/5"}),(0,l.jsxs)("div",{className:"back-stars",children:[(0,l.jsx)("i",{className:"fa fa-star active"}),(0,l.jsx)("i",{className:"fa fa-star active"}),(0,l.jsx)("i",{className:"fa fa-star active"}),(0,l.jsx)("i",{className:"fa fa-star active"}),(0,l.jsx)("i",{className:"fa fa-star active"}),(0,l.jsxs)("div",{className:"front-stars",children:[(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"})]})]}),(0,l.jsx)("p",{className:"small",children:"BEWERTUNG"})]}),(0,l.jsxs)("div",{className:"col-xs-6 col-sm-6 col-md-3 itemNumber",children:[(0,l.jsxs)("span",{className:"big",children:[!this.state.countNumbers&&0,this.state.countNumbers&&(0,l.jsx)(n.Z,{to:30,speed:2e3}),(0,l.jsx)("sub",{children:"min."})]}),(0,l.jsxs)("p",{className:"small",children:[(0,l.jsx)("span",{className:"smartphone",children:"30-60 min"}),(0,l.jsx)("span",{className:"television",children:"2-48 std"})]}),(0,l.jsx)("p",{className:"small",children:"schnelle Preissch\xe4tzung"})]}),(0,l.jsx)("div",{className:"clearfix visible-xs-block visible-sm-block"}),(0,l.jsxs)("div",{className:"col-xs-6 col-sm-6 col-md-3 itemNumber",children:[(0,l.jsxs)("span",{className:"big",children:[(0,l.jsx)("span",{className:"sybmol",children:"+"})," ",!this.state.countNumbers&&0,this.state.countNumbers&&(0,l.jsx)(n.Z,{to:11,speed:2e3})]}),(0,l.jsx)("p",{className:"small",children:"Jahre Erfahrung"})]}),(0,l.jsxs)("div",{className:"col-xs-6 col-sm-6 col-md-3 itemNumber",children:[(0,l.jsxs)("span",{className:"big",children:[!this.state.countNumbers&&0,this.state.countNumbers&&(0,l.jsx)(n.Z,{to:24,speed:2e3}),(0,l.jsx)("sub",{children:"Std."})]}),(0,l.jsx)("p",{className:"small",children:"Dauer der Express"}),(0,l.jsx)("p",{className:"small pt-0",children:"Auszahlung"})]})]})]})}}const c=r}}]);
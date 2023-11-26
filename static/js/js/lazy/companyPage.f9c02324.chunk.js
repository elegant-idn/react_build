/*! For license information please see companyPage.f9c02324.chunk.js.LICENSE.txt */
(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[7174],{11748:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var n=a(47313),r=a(89850),t=a.n(r),i=a(39157),l=a(46417);const c=[{value:"Vorwahl",label:"Vorwahl"},{value:"079",label:"079"},{value:"078",label:"078"},{value:"077",label:"077"},{value:"076",label:"076"},{value:"075",label:"075"},{value:"0049 (DE)",label:"0049 (DE)"},{value:"0033 (FR)",label:"0033 (FR)"},{value:"Andere",label:"Andere"}];class o extends n.Component{constructor(e){super(e),this.state={phoneCodes:{codes:c,currentCode:"Vorwahl"},captcha:{errorCaptcha:!1,isCheckedCaptcha:!1},errors:{phoneNumber:null},successMsg:null},this.verifyCaptchaCallback=this.verifyCaptchaCallback.bind(this),this.changeInput=this.changeInput.bind(this),this.sendForm=this.sendForm.bind(this),this.changePhoneCode=this.changePhoneCode.bind(this)}componentDidMount(){$("button.registerNow").on("click",(()=>$("html, body").animate({scrollTop:$("#form").offset().top},600)))}changePhoneCode(e){let{value:s}=e;this.setState({phoneCodes:{...this.state.phoneCodes,currentCode:s}})}verifyCaptchaCallback(){this.setState({captcha:{...this.state.captcha,isCheckCaptcha:!0,errorCaptcha:!1}})}changeInput(e){let{name:s}=e.target,{errors:a}=this.state;a[s]=null,this.setState({errors:a})}sendForm(e){e.preventDefault();let s=new FormData(document.forms.companyForm),{captcha:a}=this.state;a.isCheckCaptcha||!window.isGoogleConnection?axios.post("/api/registerCompany",s).then((e=>{this.setState({successMsg:e.data})})).catch((e=>{404===e.response.status&&this.setState({errors:{...this.state.errors,phoneNumber:e.response.data}})})):this.setState({captcha:{...this.state.captcha,errorCaptcha:!0}})}render(){let{captcha:e,successMsg:s,phoneCodes:a}=this.state;return(0,l.jsx)("main",{children:(0,l.jsxs)("div",{className:"companyPage",children:[(0,l.jsxs)("section",{className:"top",children:[(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-sm-5",children:[(0,l.jsx)("p",{className:"title",children:"Firmenkunde werden"}),(0,l.jsx)("p",{className:"title",children:"und profitieren"}),(0,l.jsx)("p",{className:"title",children:"- einfach und kostenlos"}),(0,l.jsx)("p",{className:"text",children:"Registrieren Sie sich als Firmenkunde und kommen Sie in den Genuss von einem hervorragenden Service, mit dem Ihr Unternehmen noch leistungsf\xe4higer wird."}),(0,l.jsxs)("button",{className:"btn registerNow",children:["Jetzt registrieren",(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa fa-long-arrow-right","aria-hidden":"true"})})]}),(0,l.jsx)("a",{href:"tel:+61 511 22 44",className:"callToUs",children:"oder rufen Sie uns an 061 511 22 44"})]})})}),(0,l.jsx)("img",{src:"/images/design/companyPhone.png",className:"phone"}),(0,l.jsx)("img",{className:"bigTriangle",src:"/images/design/company-triangle.svg",alt:""}),(0,l.jsx)("img",{className:"grayTriangle",src:"/images/design/company-triangle-gray.svg",alt:""})]}),(0,l.jsxs)("section",{className:"corporate",children:[(0,l.jsx)("img",{src:"/images/design/corporateCustomers.jpg",alt:""}),(0,l.jsx)("div",{className:"wrapCorporate",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"wrap clearfix",children:(0,l.jsxs)("div",{className:"col-sm-6 col-sm-push-6 right-side",children:[(0,l.jsx)("p",{className:"title",children:"Vorteile"}),(0,l.jsx)("p",{className:"caption",children:"Firmenkunde"}),(0,l.jsx)("p",{className:"text",children:"Als Person, die f\xfcr Smartphones und Tablets in Ihrem Unternehmen verantwortlich ist, profitieren Sie von unz\xe4hligen Vorteilen bei remarket. Wir wissen, wie wichtig mobile Ger\xe4te in Ihrem t\xe4glichen Gesch\xe4ft sind, und haben und darauf spezialisiert, Reparaturen, Ank\xe4ufe und Verk\xe4ufe f\xfcr Firmen und der schnellst m\xf6glichen Zeit durchzuf\xfchren. F\xfcr den Fall, dass ein Schaden nicht von Ihrer Versicherung abgedeckt ist, helfen wir als zuverl\xe4ssiger Partner und \xfcbernehmen alle Reparatur Services."})]})})})})})]}),(0,l.jsx)("section",{className:"insurance",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"wrap clearfix",children:[(0,l.jsxs)("div",{className:"col-xs-6",children:[(0,l.jsx)("p",{className:"title",children:"Vorteile"}),(0,l.jsx)("p",{className:"caption",children:"Versicherungsunternehmen"}),(0,l.jsx)("p",{className:"text",children:"Auch f\xfcr Versicherungsunternehmen bieten wir attraktive Service rund um die Smartphone und Tablet Reparatur. iReparatur.ch ist Ihr kompetenter Partner f\xfcr Reparaturen im Fall eines Versicherungsanspruchs, und stellt sicher, dass Ihr Schadensvolumen so klein wie m\xf6glich ist."})]}),(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{src:"/images/design/company-insurance.png",alt:""})})]})})})}),(0,l.jsx)("section",{className:"plans",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"wrapPlans",children:[(0,l.jsxs)("div",{className:"itemPlan",children:[(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{className:"title",children:"Angebot"}),(0,l.jsx)("p",{className:"caption",children:"Reparieren"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"circleOk"}),"Zahlung per Rechnung m\xf6glich"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"circleOk"}),"Keine Terminvereinbarung n\xf6tig"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"circleOk"}),"Rabatte auf gr\xf6ssere Reparaturvolumen m\xf6glich"]})]})]}),(0,l.jsxs)("button",{type:"button",className:"btn registerNow",children:["Anmelden",(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa fa-long-arrow-right","aria-hidden":"true"})})]})]}),(0,l.jsxs)("div",{className:"itemPlan",children:[(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{className:"title",children:"Angebot"}),(0,l.jsx)("p",{className:"caption",children:"Kaufen"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"circleOk"}),"Zahlung per Rechnung m\xf6glich"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"circleOk"}),"Mengenrabatte m\xf6glich"]})]})]}),(0,l.jsxs)("button",{type:"button",className:"btn registerNow",children:["Anmelden",(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa fa-long-arrow-right","aria-hidden":"true"})})]})]}),(0,l.jsxs)("div",{className:"itemPlan",children:[(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{className:"title",children:"Angebot"}),(0,l.jsx)("p",{className:"caption",children:"Verkaufen"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"circleOk"}),"Abholung m\xf6glich"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"circleOk"}),"Bonus bei gr\xf6sseren Verkaufsmengen"]})]})]}),(0,l.jsxs)("button",{type:"button",className:"btn registerNow",children:["Anmelden",(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa fa-long-arrow-right","aria-hidden":"true"})})]})]})]})})})}),(0,l.jsx)("section",{className:"sponsors",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-sm-12",children:(0,l.jsxs)("div",{className:"wrapSponsors",children:[(0,l.jsx)("img",{src:"/images/design/sponsors/dieMob.png",alt:""}),(0,l.jsx)("img",{src:"/images/design/sponsors/stam.svg",alt:""}),(0,l.jsx)("img",{src:"/images/design/sponsors/bayer.svg",alt:""}),(0,l.jsx)("img",{src:"/images/design/sponsors/lions.svg",alt:""}),(0,l.jsx)("img",{src:"/images/design/sponsors/endress.png",alt:""})]})})}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-sm-12",children:(0,l.jsxs)("div",{className:"wrapSponsors",children:[(0,l.jsx)("img",{src:"/images/design/sponsors/alpiq.png",className:"alpiq"}),(0,l.jsx)("img",{src:"/images/design/sponsors/migros.png",alt:""}),(0,l.jsx)("img",{src:"/images/design/sponsors/wr.png",alt:""}),(0,l.jsx)("img",{src:"/images/design/sponsors/tesla.svg",alt:""}),(0,l.jsx)("img",{src:"/images/design/sponsors/bell.svg",alt:""})]})})})]})}),(0,l.jsxs)("section",{className:"form",id:"form",children:[(0,l.jsx)("p",{className:"title",children:"Registrieren Sie sich jetzt kostenlos als Firmenkunde"}),(0,l.jsx)("div",{className:"wrapForm clearfix",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-sm-10 col-sm-push-1 mainPart",children:[(0,l.jsxs)("form",{action:"#",name:"companyForm",className:"companyForm",onSubmit:this.sendForm,children:[s&&(0,l.jsx)("p",{className:"successMsg",children:s}),(0,l.jsxs)("div",{className:"companyForm",children:[(0,l.jsx)("p",{className:"title",children:"Ihre Kontaktdetails:"}),(0,l.jsxs)("div",{className:"wrapLabel",children:[(0,l.jsxs)("label",{children:[(0,l.jsx)("input",{type:"radio",name:"gender",value:"Herr",required:!0}),(0,l.jsx)("span",{}),"Herr"]}),(0,l.jsxs)("label",{children:[(0,l.jsx)("input",{type:"radio",name:"gender",value:"Frau"}),(0,l.jsx)("span",{}),"Frau"]})]}),(0,l.jsx)("input",{type:"text",name:"firmenname",placeholder:"Firmenname",required:!0}),(0,l.jsx)("input",{type:"text",name:"ihrVorname",placeholder:"Ihr Vorname",required:!0}),(0,l.jsx)("input",{type:"text",name:"ihrNachname",placeholder:"Ihr Nachname",required:!0}),(0,l.jsx)("input",{type:"email",name:"ihreEmail",placeholder:"Ihre E-Mail",required:!0}),(0,l.jsxs)("div",{className:"phoneNumber",children:[(0,l.jsx)(i.ZP,{placeholder:"Ausw\xe4hlen...",value:a.currentCode,name:"phoneCod",clearable:!1,options:a.codes,searchable:!1,onChange:this.changePhoneCode}),(0,l.jsx)("input",{type:"text",name:"phoneNumber",placeholder:"Ihre Handynummer",required:!0,onChange:this.changeInput})]}),this.state.errors.phoneNumber&&(0,l.jsx)("span",{className:"error",children:this.state.errors.phoneNumber}),(0,l.jsx)(t(),{sitekey:window.captchaSitekey.key,render:"explicit",hl:"de",verifyCallback:this.verifyCaptchaCallback,onloadCallback:()=>!1}),e.errorCaptcha&&(0,l.jsx)("p",{style:{color:"red"},children:"Bitte best\xe4tigen Sie das Sie kein Roboter sind"})]}),(0,l.jsxs)("button",{type:"submit",className:"btn",children:["Jetzt absenden",(0,l.jsx)("span",{children:(0,l.jsx)("i",{className:"fa fa-long-arrow-right","aria-hidden":"true"})})]})]}),(0,l.jsxs)("div",{className:"commentPart",children:[(0,l.jsx)("p",{className:"commentText",children:"\u201cUnsere Kunden sind die beste Werbung\u201d"}),(0,l.jsx)("div",{className:"userInfo",children:(0,l.jsx)("div",{className:"user",children:(0,l.jsx)("p",{className:"name",children:"- Rainer Megerle"})})}),(0,l.jsx)("img",{src:"/images/design/quotes.svg",alt:""})]})]})})})})]})]})})}}o.defaultProps={};const d=o},46123:(e,s)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],s=0;s<arguments.length;s++){var a=arguments[s];if(a){var t=typeof a;if("string"===t||"number"===t)e.push(a);else if(Array.isArray(a)){if(a.length){var i=r.apply(null,a);i&&e.push(i)}}else if("object"===t){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(s,[]))||(e.exports=a)}()},89850:function(e,s,a){var n;e.exports=(n=a(47313),function(e){function s(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}var a={};return s.m=e,s.c=a,s.p="",s(0)}([function(e,s,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}function t(e,s){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?e:s}function i(e,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(e,s):e.__proto__=s)}Object.defineProperty(s,"__esModule",{value:!0});var l=function(){function e(e,s){for(var a=0;a<s.length;a++){var n=s[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(s,a,n){return a&&e(s.prototype,a),n&&e(s,n),s}}(),c=a(6),o=n(c),d=n(a(4)),h={className:d.default.string,onloadCallbackName:d.default.string,elementID:d.default.string,onloadCallback:d.default.func,verifyCallback:d.default.func,expiredCallback:d.default.func,render:d.default.oneOf(["onload","explicit"]),sitekey:d.default.string,theme:d.default.oneOf(["light","dark"]),type:d.default.string,verifyCallbackName:d.default.string,expiredCallbackName:d.default.string,size:d.default.oneOf(["invisible","compact","normal"]),tabindex:d.default.string,hl:d.default.string,badge:d.default.oneOf(["bottomright","bottomleft","inline"])},p={elementID:"g-recaptcha",className:"g-recaptcha",onloadCallback:void 0,onloadCallbackName:"onloadCallback",verifyCallback:void 0,verifyCallbackName:"verifyCallback",expiredCallback:void 0,expiredCallbackName:"expiredCallback",render:"onload",theme:"light",type:"image",size:"normal",tabindex:"0",hl:"en",badge:"bottomright"},u=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.grecaptcha&&"function"==typeof window.grecaptcha.render},m=void 0,g=function(e){function s(e){r(this,s);var a=t(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return a._renderGrecaptcha=a._renderGrecaptcha.bind(a),a.reset=a.reset.bind(a),a.state={ready:u(),widget:null},a.state.ready||"undefined"==typeof window||(m=setInterval(a._updateReadyState.bind(a),1e3)),a}return i(s,e),l(s,[{key:"componentDidMount",value:function(){this.state.ready&&this._renderGrecaptcha()}},{key:"componentDidUpdate",value:function(e,s){var a=this.props,n=a.render,r=a.onloadCallback;"explicit"===n&&r&&this.state.ready&&!s.ready&&this._renderGrecaptcha()}},{key:"componentWillUnmount",value:function(){clearInterval(m)}},{key:"reset",value:function(){var e=this.state,s=e.ready,a=e.widget;s&&null!==a&&grecaptcha.reset(a)}},{key:"execute",value:function(){var e=this.state,s=e.ready,a=e.widget;s&&null!==a&&grecaptcha.execute(a)}},{key:"_updateReadyState",value:function(){u()&&(this.setState({ready:!0}),clearInterval(m))}},{key:"_renderGrecaptcha",value:function(){this.state.widget=grecaptcha.render(this.props.elementID,{sitekey:this.props.sitekey,callback:this.props.verifyCallback?this.props.verifyCallback:void 0,theme:this.props.theme,type:this.props.type,size:this.props.size,tabindex:this.props.tabindex,hl:this.props.hl,badge:this.props.badge,"expired-callback":this.props.expiredCallback?this.props.expiredCallback:void 0}),this.props.onloadCallback&&this.props.onloadCallback()}},{key:"render",value:function(){return"explicit"===this.props.render&&this.props.onloadCallback?o.default.createElement("div",{id:this.props.elementID,"data-onloadcallbackname":this.props.onloadCallbackName,"data-verifycallbackname":this.props.verifyCallbackName}):o.default.createElement("div",{id:this.props.elementID,className:this.props.className,"data-sitekey":this.props.sitekey,"data-theme":this.props.theme,"data-type":this.props.type,"data-size":this.props.size,"data-badge":this.props.badge,"data-tabindex":this.props.tabindex})}}]),s}(c.Component);s.default=g,g.propTypes=h,g.defaultProps=p,e.exports=s.default},function(e,s){"use strict";function a(e){return function(){return e}}var n=function(){};n.thatReturns=a,n.thatReturnsFalse=a(!1),n.thatReturnsTrue=a(!0),n.thatReturnsNull=a(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,s,a){"use strict";function n(e,s,a,n,t,i,l,c){if(r(s),!e){var o;if(void 0===s)o=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[a,n,t,i,l,c],h=0;(o=new Error(s.replace(/%s/g,(function(){return d[h++]})))).name="Invariant Violation"}throw o.framesToPop=1,o}}var r=function(e){};e.exports=n},function(e,s,a){"use strict";var n=a(1),r=a(2),t=a(5);e.exports=function(){function e(e,s,a,n,i,l){l!==t&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function s(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s};return a.checkPropTypes=n,a.PropTypes=a,a}},function(e,s,a){e.exports=a(3)()},function(e,s){"use strict";var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=a},function(e,s){e.exports=n}]))}}]);
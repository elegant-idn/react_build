/*! For license information please see 9157.05f7d8a7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[9157],{71902:(e,t,u)=>{var n=Object.assign||f,s=function(){function e(e,t){for(var u=0;u<t.length;u++){var n=t[u];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,u,n){return u&&e(t.prototype,u),n&&e(t,n),t}}(),o=u(47313),i=a(o),r=a(u(75192));function a(e){return e&&e.__esModule?e:{default:e}}var l={position:"absolute",top:0,left:0,visibility:"hidden",height:0,overflow:"scroll",whiteSpace:"pre"},p=["extraWidth","injectStyles","inputClassName","inputRef","inputStyle","minWidth","onAutosize","placeholderIsMinWidth"],c=function(e,t){t.style.fontSize=e.fontSize,t.style.fontFamily=e.fontFamily,t.style.fontWeight=e.fontWeight,t.style.fontStyle=e.fontStyle,t.style.letterSpacing=e.letterSpacing,t.style.textTransform=e.textTransform},h=!("undefined"===typeof window||!window.navigator)&&/MSIE |Trident\/|Edge\//.test(window.navigator.userAgent),d=function(){return h?"_"+Math.random().toString(36).substr(2,12):void 0},f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return u.inputRef=function(e){u.input=e,"function"===typeof u.props.inputRef&&u.props.inputRef(e)},u.placeHolderSizerRef=f,u.sizerRef=function(e){u.sizer=e},u.state={inputWidth:e.minWidth,inputId:e.id||d()},u}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.copyInputStyles(),this.updateInputWidth()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.id;t!==this.props.id&&this.setState({inputId:t||d()})}},{key:"componentDidUpdate",value:function(e,t){t.inputWidth!==this.state.inputWidth&&"function"===typeof this.props.onAutosize&&this.props.onAutosize(this.state.inputWidth),this.updateInputWidth()}},{key:"componentWillUnmount",value:f},{key:"copyInputStyles",value:function(){if(this.mounted&&window.getComputedStyle){var e=this.input&&window.getComputedStyle(this.input);e&&(c(e,this.sizer),this.placeHolderSizer&&c(e,this.placeHolderSizer))}}},{key:"updateInputWidth",value:function(){if(this.mounted&&this.sizer&&"undefined"!==typeof this.sizer.scrollWidth){var e=void 0;e=this.props.placeholder&&(!this.props.value||this.props.value&&this.props.placeholderIsMinWidth)?Math.max(this.sizer.scrollWidth,this.placeHolderSizer.scrollWidth)+2:this.sizer.scrollWidth+2,(e+="number"===this.props.type&&void 0===this.props.extraWidth?16:parseInt(this.props.extraWidth)||0)<this.props.minWidth&&(e=this.props.minWidth),e!==this.state.inputWidth&&this.setState({inputWidth:e})}}},{key:"getInput",value:f},{key:"focus",value:f},{key:"blur",value:f},{key:"select",value:f},{key:"renderStyles",value:function(){var e=this.props.injectStyles;return h&&e?i.default.createElement("style",{dangerouslySetInnerHTML:{__html:"input#"+this.state.inputId+"::-ms-clear {display: none;}"}}):null}},{key:"render",value:function(){var e=[this.props.defaultValue,this.props.value,""].reduce((function(e,t){return null!==e&&void 0!==e?e:t})),t=n({},this.props.style);t.display||(t.display="inline-block");var u=n({boxSizing:"content-box",width:this.state.inputWidth+"px"},this.props.inputStyle),s=function(e,t){var u={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(u[n]=e[n]);return u}(this.props,[]);return function(e){p.forEach((function(t){return delete e[t]}))}(s),s.className=this.props.inputClassName,s.id=this.state.inputId,s.style=u,i.default.createElement("div",{className:this.props.className,style:t},this.renderStyles(),i.default.createElement("input",n({},s,{ref:this.inputRef})),i.default.createElement("div",{ref:this.sizerRef,style:l},e),this.props.placeholder?i.default.createElement("div",{ref:this.placeHolderSizerRef,style:l},this.props.placeholder):null)}}]),t}(o.Component);f.propTypes={className:r.default.string,defaultValue:r.default.any,extraWidth:r.default.oneOfType([r.default.number,r.default.string]),id:r.default.string,injectStyles:r.default.bool,inputClassName:r.default.string,inputRef:r.default.func,inputStyle:r.default.object,minWidth:r.default.oneOfType([r.default.number,r.default.string]),onAutosize:r.default.func,onChange:r.default.func,placeholder:r.default.string,placeholderIsMinWidth:r.default.bool,style:r.default.object,value:r.default.any},f.defaultProps={minWidth:1,injectStyles:!0},t.Z=f},39157:(e,t,u)=>{u.d(t,{ZP:()=>H});var n=u(71902),s=u(46123),o=u.n(s),i=u(75192),r=u.n(i),a=u(47313),l=u(1168),p=function(e){var t=e.onMouseDown;return a.createElement("span",{className:"Select-arrow",onMouseDown:t})};p.propTypes={onMouseDown:r().func};var c=[{base:"A",letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:"AA",letters:/[\uA732]/g},{base:"AE",letters:/[\u00C6\u01FC\u01E2]/g},{base:"AO",letters:/[\uA734]/g},{base:"AU",letters:/[\uA736]/g},{base:"AV",letters:/[\uA738\uA73A]/g},{base:"AY",letters:/[\uA73C]/g},{base:"B",letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:"C",letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:"D",letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:"DZ",letters:/[\u01F1\u01C4]/g},{base:"Dz",letters:/[\u01F2\u01C5]/g},{base:"E",letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:"F",letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:"G",letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:"H",letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:"I",letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:"J",letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:"K",letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:"L",letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:"LJ",letters:/[\u01C7]/g},{base:"Lj",letters:/[\u01C8]/g},{base:"M",letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:"N",letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:"NJ",letters:/[\u01CA]/g},{base:"Nj",letters:/[\u01CB]/g},{base:"O",letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:"OI",letters:/[\u01A2]/g},{base:"OO",letters:/[\uA74E]/g},{base:"OU",letters:/[\u0222]/g},{base:"P",letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:"Q",letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:"R",letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:"S",letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:"T",letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:"TZ",letters:/[\uA728]/g},{base:"U",letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:"V",letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:"VY",letters:/[\uA760]/g},{base:"W",letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:"X",letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:"Y",letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:"Z",letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:"a",letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:"aa",letters:/[\uA733]/g},{base:"ae",letters:/[\u00E6\u01FD\u01E3]/g},{base:"ao",letters:/[\uA735]/g},{base:"au",letters:/[\uA737]/g},{base:"av",letters:/[\uA739\uA73B]/g},{base:"ay",letters:/[\uA73D]/g},{base:"b",letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:"c",letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:"d",letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:"dz",letters:/[\u01F3\u01C6]/g},{base:"e",letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:"f",letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:"g",letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:"h",letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:"hv",letters:/[\u0195]/g},{base:"i",letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:"j",letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:"k",letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:"l",letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:"lj",letters:/[\u01C9]/g},{base:"m",letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:"n",letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:"nj",letters:/[\u01CC]/g},{base:"o",letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:"oi",letters:/[\u01A3]/g},{base:"ou",letters:/[\u0223]/g},{base:"oo",letters:/[\uA74F]/g},{base:"p",letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:"q",letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:"r",letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:"s",letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:"t",letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:"tz",letters:/[\uA729]/g},{base:"u",letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:"v",letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:"vy",letters:/[\uA761]/g},{base:"w",letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:"x",letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:"y",letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:"z",letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}],h=function(e){for(var t=0;t<c.length;t++)e=e.replace(c[t].letters,c[t].base);return e},d=f,f=function(e,t,u,n){return n.ignoreAccents&&(t=h(t)),n.ignoreCase&&(t=t.toLowerCase()),n.trimFilter&&(t=t.replace(/^\s+|\s+$/g,"")),u&&(u=u.map((f))),e.filter((function(e){if(u&&u.indexOf(e[n.valueKey])>-1)return!1;if(n.filterOption)return n.filterOption.call(void 0,e,t);if(!t)return!0;var s=e[n.valueKey],o=e[n.labelKey],i=d(s),r=d(o);if(!i&&!r)return!1;var a=i?String(s):null,l=r?String(o):null;return n.ignoreAccents&&(a&&"label"!==n.matchProp&&(a=h(a)),l&&"value"!==n.matchProp&&(l=h(l))),n.ignoreCase&&(a&&"label"!==n.matchProp&&(a=a.toLowerCase()),l&&"value"!==n.matchProp&&(l=l.toLowerCase())),"start"===n.matchPos?a&&"label"!==n.matchProp&&a.substr(0,t.length)===t||l&&"value"!==n.matchProp&&l.substr(0,t.length)===t:a&&"label"!==n.matchProp&&a.indexOf(t)>=0||l&&"value"!==n.matchProp&&l.indexOf(t)>=0}))},v=f;v.propTypes={focusOption:r().func,focusedOption:r().object,inputValue:r().string,instancePrefix:r().string,onFocus:r().func,onOptionRef:r().func,onSelect:r().func,optionClassName:r().string,optionComponent:r().func,optionRenderer:r().func,options:r().array,removeValue:r().func,selectValue:r().func,valueArray:r().array,valueKey:r().string};var E=f,b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:f,y=(function(){f"function"===typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=f),t.prototype.next=f,t.prototype.throw=f,t.prototype.return=f}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),g=function(){function e(e,t){for(var u=0;u<t.length;u++){var n=t[u];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,u,n){return u&&e(t.prototype,u),n&&e(t,n),t}}(),m=function(e,t,u){return t in e?Object.defineProperty(e,t,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[t]=u,e},C=Object.assign||f,F=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},O=f,A=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},D=function(e){freturn F(t,e),g(t,[{key:"handleMouseDown",value:f},{key:"handleMouseEnter",value:f},{key:"handleMouseMove",value:f},{key:"handleTouchEnd",value:f},{key:"handleTouchMove",value:f},{key:"handleTouchStart",value:f},{key:"onFocus",value:f},{key:"render",value:f}]),t}(a.Component);D.propTypes={children:r().node,className:r().string,instancePrefix:r().string.isRequired,isDisabled:r().bool,isFocused:r().bool,isSelected:r().bool,onFocus:r().func,onSelect:r().func,onUnfocus:r().func,option:r().object.isRequired,optionIndex:r().number};var k=function(e){function t(e){y(this,t);var u=A(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return u.handleMouseDown=u.handleMouseDown.bind(u),u.onRemove=u.onRemove.bind(u),u.handleTouchEndRemove=u.handleTouchEndRemove.bind(u),u.handleTouchMove=u.handleTouchMove.bind(u),u.handleTouchStart=u.handleTouchStart.bind(u),u}return F(t,e),g(t,[{key:"handleMouseDown",value:f},{key:"onRemove",value:f},{key:"handleTouchEndRemove",value:f},{key:"handleTouchMove",value:f},{key:"handleTouchStart",value:f},{key:"renderRemoveIcon",value:function(){if(!this.props.disabled&&this.props.onRemove)return a.createElement("span",{className:"Select-value-icon","aria-hidden":"true",onMouseDown:this.onRemove,onTouchEnd:this.handleTouchEndRemove,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove},"\xd7")}},{key:"renderLabel",value:function(){var e="Select-value-label";return this.props.onClick||this.props.value.href?a.createElement("a",{className:e,href:this.props.value.href,target:this.props.value.target,onMouseDown:this.handleMouseDown,onTouchEnd:this.handleMouseDown},this.props.children):a.createElement("span",{className:e,role:"option","aria-selected":"true",id:this.props.id},this.props.children)}},{key:"render",value:function(){return a.createElement("div",{className:o()("Select-value",this.props.value.disabled?"Select-value-disabled":"",this.props.value.className),style:this.props.value.style,title:this.props.value.title},this.renderRemoveIcon(),this.renderLabel())}}]),t}(a.Component);k.propTypes={children:r().node,disabled:r().bool,id:r().string,onClick:r().func,onRemove:r().func,value:r().object.isRequired};var S=f,w=r().oneOfType([r().string,r().node]),V=r().oneOfType([r().string,r().number]),T=1,P=function(e,t){var u="undefined"===typeof e?"undefined":b(e);if("string"!==u&&"number"!==u&&"boolean"!==u)return e;var n=t.options,s=t.valueKey;if(n)for(var o=0;o<n.length;o++)if(String(n[o][s])===String(e))return n[o]},I=f,R=function(e){function t(e){y(this,t);var u=A(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return["clearValue","focusOption","getOptionLabel","handleInputBlur","handleInputChange","handleInputFocus","handleInputValueChange","handleKeyDown","handleMenuScroll","handleMouseDown","handleMouseDownOnArrow","handleMouseDownOnMenu","handleTouchEnd","handleTouchEndClearValue","handleTouchMove","handleTouchOutside","handleTouchStart","handleValueClick","onOptionRef","removeValue","selectValue"].forEach((function(e){return u[e]=u[e].bind(u)})),u.state={inputValue:"",isFocused:!1,isOpen:!1,isPseudoFocused:!1,required:!1},u}return F(t,e),g(t,[{key:"componentWillMount",value:function(){this._instancePrefix="react-select-"+(this.props.instanceId||++T)+"-";var e=this.getValueArray(this.props.value);this.props.required&&this.setState({required:I(e[0],this.props.multi)})}},{key:"componentDidMount",value:function(){"undefined"!==typeof this.props.autofocus&&"undefined"!==typeof console&&console.warn("Warning: The autofocus prop has changed to autoFocus, support will be removed after react-select@1.0"),(this.props.autoFocus||this.props.autofocus)&&this.focus()}},{key:"componentWillReceiveProps",value:function(e){var t=this.getValueArray(e.value,e);e.required?this.setState({required:I(t[0],e.multi)}):this.props.required&&this.setState({required:!1}),this.state.inputValue&&this.props.value!==e.value&&e.onSelectResetsInput&&this.setState({inputValue:this.handleInputValueChange("")})}},{key:"componentDidUpdate",value:function(e,t){if(this.menu&&this.focused&&this.state.isOpen&&!this.hasScrolledToOption){var u=(0,l.findDOMNode)(this.focused),n=(0,l.findDOMNode)(this.menu),s=n.scrollTop,o=s+n.offsetHeight,i=u.offsetTop,r=i+u.offsetHeight;(s>i||o<r)&&(n.scrollTop=u.offsetTop),this.hasScrolledToOption=!0}else this.state.isOpen||(this.hasScrolledToOption=!1);if(this._scrollToFocusedOptionOnUpdate&&this.focused&&this.menu){this._scrollToFocusedOptionOnUpdate=!1;var a=(0,l.findDOMNode)(this.focused),p=(0,l.findDOMNode)(this.menu),c=a.getBoundingClientRect(),h=p.getBoundingClientRect();c.bottom>h.bottom?p.scrollTop=a.offsetTop+a.clientHeight-p.offsetHeight:c.top<h.top&&(p.scrollTop=a.offsetTop)}if(this.props.scrollMenuIntoView&&this.menuContainer){var d=this.menuContainer.getBoundingClientRect();window.innerHeight<d.bottom+this.props.menuBuffer&&window.scrollBy(0,d.bottom+this.props.menuBuffer-window.innerHeight)}if(e.disabled!==this.props.disabled&&(this.setState({isFocused:!1}),this.closeMenu()),t.isOpen!==this.state.isOpen){this.toggleTouchOutsideEvent(this.state.isOpen);var f=this.state.isOpen?this.props.onOpen:this.props.onClose;f&&f()}}},{key:"componentWillUnmount",value:f},{key:"toggleTouchOutsideEvent",value:f},{key:"handleTouchOutside",value:f},{key:"focus",value:f},{key:"blurInput",value:f},{key:"handleTouchMove",value:f},{key:"handleTouchStart",value:f},{key:"handleTouchEnd",value:f},{key:"handleTouchEndClearValue",value:f},{key:"handleMouseDown",value:f},{key:"handleMouseDownOnArrow",value:f},{key:"handleMouseDownOnMenu",value:f},{key:"closeMenu",value:f},{key:"handleInputFocus",value:f},{key:"handleInputBlur",value:f},{key:"handleInputChange",value:f},{key:"setInputValue",value:f},{key:"handleInputValueChange",value:f},{key:"handleKeyDown",value:f},{key:"handleValueClick",value:f},{key:"handleMenuScroll",value:f},{key:"getOptionLabel",value:f},{key:"getValueArray",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,u="object"===("undefined"===typeof t?"undefined":b(t))?t:this.props;if(u.multi){if("string"===typeof e&&(e=e.split(u.delimiter)),!Array.isArray(e)){if(null===e||void 0===e)return[];e=[e]}return e.map((f)).filter((f))}var n=P(e,u);return n?[n]:[]}},{key:"setValue",value:f},{key:"selectValue",value:f},{key:"addValue",value:f},{key:"popValue",value:f},{key:"removeValue",value:f},{key:"clearValue",value:f},{key:"getResetValue",value:f},{key:"focusOption",value:f},{key:"focusNextOption",value:f},{key:"focusPreviousOption",value:f},{key:"focusPageUpOption",value:f},{key:"focusPageDownOption",value:f},{key:"focusStartOption",value:f},{key:"focusEndOption",value:f},{key:"focusAdjacentOption",value:f},{key:"getFocusedOption",value:f},{key:"selectFocusedOption",value:f},{key:"renderLoading",value:function(){if(this.props.isLoading)return a.createElement("span",{className:"Select-loading-zone","aria-hidden":"true"},a.createElement("span",{className:"Select-loading"}))}},{key:"renderValue",value:function(e,t){var u=this,n=this.props.valueRenderer||this.getOptionLabel,s=this.props.valueComponent;if(!e.length){var o=f(this.state,this.props,t);return o?a.createElement("div",{className:"Select-placeholder"},this.props.placeholder):null}var i=this.props.onValueClick?this.handleValueClick:null;return this.props.multi?e.map((f)):function(e,t){var u=e.inputValue,n=e.isPseudoFocused,s=e.isFocused,o=t.onSelectResetsInput;return!u||!o&&!(!s&&n||s&&!n)}(this.state,this.props)?(t&&(i=null),a.createElement(s,{disabled:this.props.disabled,id:this._instancePrefix+"-value-item",instancePrefix:this._instancePrefix,onClick:i,placeholder:this.props.placeholder,value:e[0]},n(e[0]))):void 0}},{key:"renderInput",value:function(e,t){var u,s=this,i=o()("Select-input",this.props.inputProps.className),r=this.state.isOpen,l=o()((m(u={},this._instancePrefix+"-list",r),m(u,this._instancePrefix+"-backspace-remove-message",this.props.multi&&!this.props.disabled&&this.state.isFocused&&!this.state.inputValue),u)),p=this.state.inputValue;!p||this.props.onSelectResetsInput||this.state.isFocused||(p="");var c=C({},this.props.inputProps,{"aria-activedescendant":r?this._instancePrefix+"-option-"+t:this._instancePrefix+"-value","aria-describedby":this.props["aria-describedby"],"aria-expanded":""+r,"aria-haspopup":""+r,"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-owns":l,onBlur:this.handleInputBlur,onChange:this.handleInputChange,onFocus:this.handleInputFocus,ref:function(e){return s.input=e},role:"combobox",required:this.state.required,tabIndex:this.props.tabIndex,value:p});if(this.props.inputRenderer)return this.props.inputRenderer(c);if(this.props.disabled||!this.props.searchable){var h=O(this.props.inputProps,[]),d=o()(m({},this._instancePrefix+"-list",r));return a.createElement("div",C({},h,{"aria-expanded":r,"aria-owns":d,"aria-activedescendant":r?this._instancePrefix+"-option-"+t:this._instancePrefix+"-value","aria-disabled":""+this.props.disabled,"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],className:i,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,ref:f,role:"combobox",style:{border:0,width:1,display:"inline-block"},tabIndex:this.props.tabIndex||0}))}return this.props.autosize?a.createElement(n.Z,C({id:this.props.id},c,{className:i,minWidth:"5"})):a.createElement("div",{className:i,key:"input-wrap",style:{display:"inline-block"}},a.createElement("input",C({id:this.props.id},c)))}},{key:"renderClear",value:function(){var e=this.getValueArray(this.props.value);if(this.props.clearable&&e.length&&!this.props.disabled&&!this.props.isLoading){var t=this.props.multi?this.props.clearAllText:this.props.clearValueText,u=this.props.clearRenderer();return a.createElement("span",{"aria-label":t,className:"Select-clear-zone",onMouseDown:this.clearValue,onTouchEnd:this.handleTouchEndClearValue,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,title:t},u)}}},{key:"renderArrow",value:function(){if(this.props.arrowRenderer){var e=this.handleMouseDownOnArrow,t=this.state.isOpen,u=this.props.arrowRenderer({onMouseDown:e,isOpen:t});return u?a.createElement("span",{className:"Select-arrow-zone",onMouseDown:e},u):null}}},{key:"filterOptions",value:function(e){var t=this.state.inputValue,u=this.props.options||[];if(this.props.filterOptions){var n="function"===typeof this.props.filterOptions?this.props.filterOptions:f;return n(u,t,e,{filterOption:this.props.filterOption,ignoreAccents:this.props.ignoreAccents,ignoreCase:this.props.ignoreCase,labelKey:this.props.labelKey,matchPos:this.props.matchPos,matchProp:this.props.matchProp,trimFilter:this.props.trimFilter,valueKey:this.props.valueKey})}return u}},{key:"onOptionRef",value:f},{key:"renderMenu",value:f},{key:"renderHiddenField",value:function(e){var t=this;if(this.props.name){if(this.props.joinValues){var u=e.map((f)).join(this.props.delimiter);return a.createElement("input",{disabled:this.props.disabled,name:this.props.name,ref:f,type:"hidden",value:u})}return e.map((f))}}},{key:"getFocusableOptionIndex",value:function(e){var t=this._visibleOptions;if(!t.length)return null;var u=this.props.valueKey,n=this.state.focusedOption||e;if(n&&!n.disabled){var s=-1;if(t.some((function(e,t){var o=e[u]===n[u];return o&&(s=t),o})),-1!==s)return s}for(var o=0;o<t.length;o++)if(!t[o].disabled)return o;return null}},{key:"renderOuter",value:f},{key:"render",value:function(){var e=this,t=this.getValueArray(this.props.value),u=this._visibleOptions=this.filterOptions(this.props.multi&&this.props.removeSelected?t:null),n=this.state.isOpen;this.props.multi&&!u.length&&t.length&&!this.state.inputValue&&(n=!1);var s=this.getFocusableOptionIndex(t[0]),i=null;i=this._focusedOption=null!==s?u[s]:null;var r=o()("Select",this.props.className,{"has-value":t.length,"is-clearable":this.props.clearable,"is-disabled":this.props.disabled,"is-focused":this.state.isFocused,"is-loading":this.props.isLoading,"is-open":n,"is-pseudo-focused":this.state.isPseudoFocused,"is-searchable":this.props.searchable,"Select--multi":this.props.multi,"Select--rtl":this.props.rtl,"Select--single":!this.props.multi}),l=null;return this.props.multi&&!this.props.disabled&&t.length&&!this.state.inputValue&&this.state.isFocused&&this.props.backspaceRemoves&&(l=a.createElement("span",{id:this._instancePrefix+"-backspace-remove-message",className:"Select-aria-only","aria-live":"assertive"},this.props.backspaceToRemoveMessage.replace("{label}",t[t.length-1][this.props.labelKey]))),a.createElement("div",{ref:function(t){return e.wrapper=t},className:r,style:this.props.wrapperStyle},this.renderHiddenField(t),a.createElement("div",{ref:function(t){return e.control=t},className:"Select-control",onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,onTouchEnd:this.handleTouchEnd,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,style:this.props.style},a.createElement("div",{className:"Select-multi-value-wrapper",id:this._instancePrefix+"-value"},this.renderValue(t,n),this.renderInput(t,s)),l,this.renderLoading(),this.renderClear(),this.renderArrow()),n?this.renderOuter(u,t,i):null)}}]),t}(a.Component);R.propTypes={"aria-describedby":r().string,"aria-label":r().string,"aria-labelledby":r().string,arrowRenderer:r().func,autoBlur:r().bool,autoFocus:r().bool,autofocus:r().bool,autosize:r().bool,backspaceRemoves:r().bool,backspaceToRemoveMessage:r().string,className:r().string,clearAllText:w,clearRenderer:r().func,clearValueText:w,clearable:r().bool,closeOnSelect:r().bool,deleteRemoves:r().bool,delimiter:r().string,disabled:r().bool,escapeClearsValue:r().bool,filterOption:r().func,filterOptions:r().any,id:r().string,ignoreAccents:r().bool,ignoreCase:r().bool,inputProps:r().object,inputRenderer:r().func,instanceId:r().string,isLoading:r().bool,joinValues:r().bool,labelKey:r().string,matchPos:r().string,matchProp:r().string,menuBuffer:r().number,menuContainerStyle:r().object,menuRenderer:r().func,menuStyle:r().object,multi:r().bool,name:r().string,noResultsText:w,onBlur:r().func,onBlurResetsInput:r().bool,onChange:r().func,onClose:r().func,onCloseResetsInput:r().bool,onFocus:r().func,onInputChange:r().func,onInputKeyDown:r().func,onMenuScrollToBottom:r().func,onOpen:r().func,onSelectResetsInput:r().bool,onValueClick:r().func,openOnClick:r().bool,openOnFocus:r().bool,optionClassName:r().string,optionComponent:r().func,optionRenderer:r().func,options:r().array,pageSize:r().number,placeholder:w,removeSelected:r().bool,required:r().bool,resetValue:r().any,rtl:r().bool,scrollMenuIntoView:r().bool,searchable:r().bool,simpleValue:r().bool,style:r().object,tabIndex:V,tabSelectsValue:r().bool,trimFilter:r().bool,value:r().any,valueComponent:r().func,valueKey:r().string,valueRenderer:r().func,wrapperStyle:r().object},R.defaultProps={arrowRenderer:p,autosize:!0,backspaceRemoves:!0,backspaceToRemoveMessage:"Press backspace to remove {label}",clearable:!0,clearAllText:"Clear all",clearRenderer:function(){return a.createElement("span",{className:"Select-clear",dangerouslySetInnerHTML:{__html:"&times;"}})},clearValueText:"Clear value",closeOnSelect:!0,deleteRemoves:!0,delimiter:",",disabled:!1,escapeClearsValue:!0,filterOptions:f,ignoreAccents:!0,ignoreCase:!0,inputProps:{},isLoading:!1,joinValues:!1,labelKey:"label",matchPos:"any",matchProp:"any",menuBuffer:0,menuRenderer:v,multi:!1,noResultsText:"No results found",onBlurResetsInput:!0,onCloseResetsInput:!0,onSelectResetsInput:!0,openOnClick:!0,optionComponent:D,pageSize:5,placeholder:"Select...",removeSelected:!0,required:!1,rtl:!1,scrollMenuIntoView:!0,searchable:!0,simpleValue:!1,tabSelectsValue:!0,trimFilter:!0,valueComponent:k,valueKey:"value"};var B={autoload:r().bool.isRequired,cache:r().any,children:r().func.isRequired,ignoreAccents:r().bool,ignoreCase:r().bool,loadOptions:r().func.isRequired,loadingPlaceholder:r().oneOfType([r().string,r().node]),multi:r().bool,noResultsText:r().oneOfType([r().string,r().node]),onChange:r().func,onInputChange:r().func,options:r().array.isRequired,placeholder:r().oneOfType([r().string,r().node]),searchPromptText:r().oneOfType([r().string,r().node]),value:r().any},_={},M={autoload:!0,cache:_,children:f,ignoreAccents:!0,ignoreCase:!0,loadingPlaceholder:"Loading...",options:[],searchPromptText:"Type to search"},x=function(e){freturn F(t,e),g(t,[{key:"componentDidMount",value:f},{key:"componentWillReceiveProps",value:f},{key:"componentWillUnmount",value:f},{key:"loadOptions",value:f},{key:"onInputChange",value:f},{key:"noResultsText",value:f},{key:"focus",value:f},{key:"render",value:f}]),t}(a.Component);x.propTypes=B,x.defaultProps=M;var N=function(e){freturn F(t,e),g(t,[{key:"createNewOption",value:f},{key:"filterOptions",value:f},{key:"isOptionUnique",value:f},{key:"menuRenderer",value:f},{key:"onInputChange",value:f},{key:"onInputKeyDown",value:f},{key:"onOptionSelect",value:f},{key:"focus",value:f},{key:"render",value:f}]),t}(a.Component),K=f,j=f,W=f,L=f,z=f,q=f;N.isOptionUnique=j,N.isValidNewOption=W,N.newOptionCreator=L,N.promptTextCreator=z,N.shouldKeyDownEventCreateNewOption=q,N.defaultProps={filterOptions:f,isOptionUnique:j,isValidNewOption:W,menuRenderer:v,newOptionCreator:L,promptTextCreator:z,shouldKeyDownEventCreateNewOption:q,showNewOptionAtTop:!0},N.propTypes={children:r().func,filterOptions:r().any,isOptionUnique:r().func,isValidNewOption:r().func,menuRenderer:r().any,newOptionCreator:r().func,onInputChange:r().func,onInputKeyDown:r().func,onNewOptionClick:r().func,options:r().array,promptTextCreator:r().func,ref:r().func,shouldKeyDownEventCreateNewOption:r().func,showNewOptionAtTop:r().bool};var U=function(e){freturn F(t,e),g(t,[{key:"focus",value:f},{key:"render",value:f}]),t}(a.Component);U.propTypes={children:r().func.isRequired},U.defaultProps={children:f},R.Async=x,R.AsyncCreatable=U,R.Creatable=N,R.Value=k,R.Option=D;const H=R}}]);
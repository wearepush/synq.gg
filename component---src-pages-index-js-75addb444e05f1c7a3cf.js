/*! For license information please see component---src-pages-index-js-75addb444e05f1c7a3cf.js.LICENSE.txt */
(self.webpackChunksynq=self.webpackChunksynq||[]).push([[678],{9931:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!i(e[s],a[s]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!i(e[l[s]],a[l[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},6124:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},1823:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return je}});var r,o,i,a,c=n(7294),s=n(5697),l=n.n(s),u=n(6124),f=n.n(u),p=n(523),d=n.n(p),m=n(4756),h=n.n(m),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",w="http-equiv",_="innerHTML",A="itemprop",S="name",O="property",N="rel",k="src",j="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",I="encodeSpecialCharacters",M="onChangeClientState",F="titleTemplate",R=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),q=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=J(e,v.TITLE),n=J(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,P);return t||r||void 0},Z=function(e){return J(e,M)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===N&&"canonical"===e[n].toLowerCase()||s===N&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==_&&c!==T&&c!==A||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=h()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;se(v.BODY,r),se(v.HTML,o),ce(f,p);var d={baseTag:le(v.BASE,n),linkTags:le(v.LINK,i),metaTags:le(v.META,a),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(v.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===_)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,o=fe(n,r),[c.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===_||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===_||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(b,o,r),link:pe(v.LINK,i,r),meta:pe(v.META,a,r),noscript:pe(v.NOSCRIPT,c,r),script:pe(v.SCRIPT,s,r),style:pe(v.STYLE,l,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},me=f()((function(e){return{baseTag:Q([E,j],e),bodyAttributes:$(y,e),defer:J(e,L),encode:J(e,I),htmlAttributes:$(b,e),linkTags:G(v.LINK,[N,E],e),metaTags:G(v.META,[S,C,w,O,A],e),noscriptTags:G(v.NOSCRIPT,[_],e),onChangeClientState:Z(e),scriptTags:G(v.SCRIPT,[k,_],e),styleTags:G(v.STYLE,[T],e),title:V(e),titleAttributes:$(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),he=(o=me,a=i=function(e){function t(){return H(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case v.BODY:return U({},o,{bodyAttributes:U({},i)});case v.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(z(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ye=n(9516),be=n.n(ye),ge=function(){return c.createElement("header",{className:"header"},c.createElement("div",{className:"header__container"},c.createElement("div",{className:"header__logo"},c.createElement(be(),{className:"header__logo__icon"}),c.createElement("div",{className:"header__logo__content"},c.createElement("div",{className:"header__logo__name"},"Synq"),c.createElement("div",{className:"header__logo__slogan"},"Connects sport fans to what they love"))),c.createElement("div",{className:"header__button"},"Soon on iOS & Android")))},ve=n(9931),Ce=n.n(ve),Te=n.p+"static/center-image-item-2x-d1a9194f6aa3a12bb776f5f780c13166.webp",Ee=n.p+"static/center-image-item-2x-2452d49d59497c8e313582af9ba6a3ba.png",we=n.p+"static/left-image-item-2x-bf15de9ec731ca777cfa6d52f8c694d5.webp",_e=n.p+"static/left-image-item-2x-31b78959bdc6a21773b8025f1fe9065d.png",Ae=n.p+"static/right-image-item-2x-89a865c80192d213655822709bfe7673.webp",Se=n.p+"static/right-image-item-2x-00af3a93984dd00a8dc0b1bfe254443a.png",Oe=function(e){var t=e.alt,n=e.webp,r=e.png;return c.createElement("picture",null,c.createElement("source",{type:"image/webp",srcSet:n}),c.createElement("img",{src:r,alt:t}))},Ne=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1];return c.createElement("div",{className:"section"},c.createElement("div",{className:"section__container"},c.createElement("div",{className:"section__content"},c.createElement("div",{className:"section__pre-title"},"Bet Together!"),c.createElement("div",{className:"section__title"},"Wants ",c.createElement("span",null,"to be the first"),"? Subscribe to the newsletter and be aware of all the most favorable sport odds."),c.createElement("form",{className:"section__form"},c.createElement("input",{type:"email",className:"section__form__input",placeholder:"Enter your e-mail"}),c.createElement("button",{className:"section__form__button",type:"submit"},"Subscribe")))),c.createElement("div",{className:Ce()("section__image-list",{"section__image-list--is-main-anim-end":t})},c.createElement("div",{className:"section__image-item section__image-item--left"},c.createElement(Oe,{png:_e,webp:we,alt:"synq 1"})),c.createElement("div",{className:"section__image-item section__image-item--main",onAnimationEnd:function(){return n(!0)}},c.createElement(Oe,{png:Ee,webp:Te,alt:"synq 2"})),c.createElement("div",{className:"section__image-item section__image-item--right"},c.createElement(Oe,{png:Se,webp:Ae,alt:"synq 3"}))))},ke=function(){return c.createElement("footer",{className:"footer"},c.createElement("div",{className:"footer__container"},c.createElement("div",{className:"footer__logo"},c.createElement("div",{className:"footer__logo__icon"}),c.createElement("div",{className:"footer__logo__content"},c.createElement("div",{className:"footer__logo__name"},"Synq"),c.createElement("div",{className:"footer__logo__slogan"},"Connects sport fans to what they love"))),c.createElement("div",{className:"footer__text"},"Design by"," ",c.createElement("a",{href:"https://flatstudio.co/",target:"blank",className:"footer__link"},"Flatstudio"))))},je=function(){return c.createElement(c.Fragment,null,c.createElement(he,{htmlAttributes:{lang:"en"}},c.createElement("title",null,"SYNQ"),c.createElement("meta",{name:"description",content:"Connects sport fans to what they love"})),c.createElement(ge,null),c.createElement(Ne,null),c.createElement(ke,null))}},9516:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Custom Preset"),r.createElement("g",{id:"Custom-Preset",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:1},r.createElement("g",{id:"logo_icon",fillRule:"nonzero"},[r.createElement("rect",{id:"Rectangle",fill:"#1B1C1E",x:"0",y:"0",width:"50",height:"50",rx:"16",key:0}),r.createElement("polygon",{id:"Path",fill:"#14AFF1",points:"40.549 30.9029 35.1363 30.9029 32.3208 32.9545 40.549 32.9545",key:1}),r.createElement("path",{d:"M18.597,19.9901 C18.0586,19.7136 17.4694,19.4735 16.8291,19.2698 C16.1889,19.0661 15.5633,18.9643 14.9522,18.9643 C14.1082,18.9643 13.4316,19.1607 12.9224,19.5536 C12.4277,19.9464 12.1803,20.4702 12.1803,21.125 C12.1803,21.6197 12.3404,22.0417 12.6605,22.3909 C12.9806,22.7255 13.4025,23.0165 13.9264,23.2639 C14.4502,23.5113 14.9958,23.7441 15.5633,23.9623 C16.058,24.1515 16.5454,24.3624 17.0256,24.5953 C17.5057,24.8281 17.935,25.1191 18.3133,25.4683 C18.7061,25.8175 19.0117,26.2467 19.2299,26.756 C19.4627,27.2652 19.5791,27.8982 19.5791,28.6548 C19.5791,29.4842 19.3682,30.2408 18.9462,30.9246 C18.5388,31.6085 17.9495,32.1469 17.1783,32.5397 C16.4072,32.9326 15.4905,33.129 14.4283,33.129 C13.7299,33.129 13.0606,33.049 12.4204,32.8889 C11.7947,32.7289 11.2127,32.5252 10.6744,32.2778 C10.136,32.0159 9.6558,31.7467 9.2339,31.4703 L10.1724,29.8115 C10.5216,30.0589 10.9217,30.299 11.3728,30.5318 C11.8238,30.75 12.2967,30.9319 12.7914,31.0774 C13.2861,31.2084 13.7663,31.2738 14.2319,31.2738 C14.7266,31.2738 15.2141,31.1865 15.6942,31.0119 C16.1889,30.8228 16.5963,30.539 16.9164,30.1607 C17.2365,29.7824 17.3966,29.2804 17.3966,28.6548 C17.3966,28.1164 17.2511,27.6726 16.9601,27.3234 C16.6836,26.9597 16.3126,26.6541 15.847,26.4068 C15.3814,26.1449 14.8867,25.9121 14.3629,25.7084 C13.8682,25.5192 13.3662,25.3155 12.8569,25.0972 C12.3476,24.8644 11.8748,24.588 11.4383,24.2679 C11.0017,23.9332 10.6525,23.5258 10.3906,23.0456 C10.1287,22.5655 9.9978,21.9835 9.9978,21.2996 C9.9978,20.4702 10.1942,19.75 10.5871,19.1389 C10.9945,18.5132 11.5474,18.0258 12.2458,17.6766 C12.9442,17.3128 13.7445,17.1164 14.6466,17.0873 C15.6651,17.0873 16.56,17.211 17.3311,17.4583 C18.1168,17.7057 18.808,18.0112 19.4045,18.375 L18.597,19.9901 Z",id:"Path",fill:"#FFFFFF",key:2}),r.createElement("path",{d:"M23.7654,25.0754 C23.7654,23.9841 23.9691,22.9583 24.3765,21.998 C24.7985,21.0232 25.3805,20.1647 26.1225,19.4226 C26.8646,18.666 27.7158,18.0767 28.6761,17.6548 C29.651,17.2183 30.6986,17 31.819,17 C32.9248,17 33.9579,17.2183 34.9182,17.6548 C35.8931,18.0767 36.7515,18.666 37.4936,19.4226 C38.2502,20.1647 38.8395,21.0232 39.2615,21.998 C39.6834,22.9583 39.8944,23.9841 39.8944,25.0754 C39.8944,26.1958 39.6834,27.2434 39.2615,28.2183 C38.8395,29.1931 38.2502,30.0516 37.4936,30.7937 C36.7515,31.5212 35.8931,32.0959 34.9182,32.5179 C33.9579,32.9253 32.9248,33.129 31.819,33.129 C30.6986,33.129 29.651,32.9253 28.6761,32.5179 C27.7158,32.1105 26.8646,31.543 26.1225,30.8155 C25.3805,30.088 24.7985,29.2368 24.3765,28.2619 C23.9691,27.2871 23.7654,26.2249 23.7654,25.0754 Z M25.9479,25.0972 C25.9479,25.9266 26.1007,26.705 26.4063,27.4326 C26.7118,28.1455 27.1338,28.7785 27.6721,29.3314 C28.2105,29.8843 28.8362,30.3135 29.5491,30.6191 C30.2621,30.9246 31.0333,31.0774 31.8626,31.0774 C32.6774,31.0774 33.4413,30.9246 34.1543,30.6191 C34.8673,30.3135 35.4857,29.8843 36.0095,29.3314 C36.5333,28.7785 36.948,28.1455 37.2535,27.4326 C37.5591,26.705 37.7119,25.9193 37.7119,25.0754 C37.7119,24.2606 37.5591,23.4894 37.2535,22.7619 C36.948,22.0344 36.526,21.4015 35.9876,20.8631 C35.4493,20.3102 34.8236,19.881 34.1107,19.5754 C33.3977,19.2553 32.6338,19.0952 31.819,19.0952 C30.9896,19.0952 30.2184,19.2553 29.5055,19.5754 C28.7925,19.881 28.1669,20.3102 27.6285,20.8631 C27.0901,21.416 26.6755,22.0562 26.3845,22.7837 C26.0934,23.5113 25.9479,24.2824 25.9479,25.0972 Z",id:"Shape",fill:"#FFFFFF",key:3})]))])}o.defaultProps={width:"50px",height:"50px",viewBox:"0 0 50 50",version:"1.1"},e.exports=o,o.default=o}}]);
//# sourceMappingURL=component---src-pages-index-js-75addb444e05f1c7a3cf.js.map
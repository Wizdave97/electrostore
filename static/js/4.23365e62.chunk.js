(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{5978:function(t,e,r){t.exports=r(5979)},5979:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function m(){}function v(){}function y(){}var g={};g[a]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(C([])));w&&w!==r&&n.call(w,a)&&(g=w);var b=y.prototype=m.prototype=Object.create(g);function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){var e;this._invoke=function(r,o){function a(){return new Promise(function(e,a){!function e(r,o,a,i){var c=u(t[r],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(l).then(function(t){s.value=t,a(s)},function(t){return e("throw",t,a,i)})}i(c.arg)}(r,o,e,a)})}return e=e?e.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return v.prototype=b.constructor=y,y.constructor=v,y[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var a=new L(s(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},5994:function(t,e,r){"use strict";r.r(e);var n=r(5978),o=r.n(n);function a(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}var i=r(55),c=r(56),s=r(59),u=r(57),l=r(60),f=r(0),h=r.n(f),p=r(3),d=r(58),m=r(24),v=r(10),y=r(151),g=r(17),x=function(t){var e;return{imgContainer:(e={width:"100%",padding:"40px",display:"flex",flexWrap:"nowrap",boxSizing:"border-box"},Object(g.a)(e,t.breakpoints.up("sm"),{padding:"70px"}),Object(g.a)(e,"& img",{width:"100%",height:"auto"}),e),details:{width:"100%",display:"flex",flexWrap:"wrap",padding:"40px",boxSizing:"border-box"},text:{width:"100%",display:"flex",flexWrap:"wrap"},actions:{width:"100%",display:"flex",justifyContent:"space-between",flexWrap:"wrap"},info:{width:"100%",display:"flex",flexWrap:"wrap",alignContent:"center",boxSizing:"border-box"},description:{width:"100%",display:"flex",flexWrap:"wrap",alignContent:"center",boxSizing:"border-box"}}},w=r(209),b=r(152),E=function(t){function e(){var t,r;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={item:null,inCart:!1},r.setCartifiedState=function(t){r.props.item_ids.includes(t)&&r.setState(function(t){return{inCart:!t.inCart}})},r}return Object(l.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;this.fixDetailsOnMount(t),this.setCartifiedState(t)}},{key:"fixDetailsOnMount",value:function(){var t,e=(t=o.a.mark(function t(e){var r,n,a,i,c,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.fetchProducts();case 2:if(!this.props.products){t.next=30;break}r=!0,n=!1,a=void 0,t.prev=6,i=this.props.products[Symbol.iterator]();case 8:if(r=(c=i.next()).done){t.next=16;break}if((s=c.value).id!=e){t.next=13;break}return this.setState({item:s}),t.abrupt("break",16);case 13:r=!0,t.next=8;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(6),n=!0,a=t.t0;case 22:t.prev=22,t.prev=23,r||null==i.return||i.return();case 25:if(t.prev=25,!n){t.next=28;break}throw a;case 28:return t.finish(25);case 29:return t.finish(22);case 30:case"end":return t.stop()}},t,this,[[6,18,22,30],[23,,25,29]])}),function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,s,"next",t)}function s(t){a(i,n,o,c,s,"throw",t)}c(void 0)})});return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.props.classes,r=this.state,n=r.item,o=r.inCart,a=h.a.createElement(y.a,null);return n&&(a=h.a.createElement(f.Fragment,null,h.a.createElement(p.k,{item:!0,xs:12,sm:6},h.a.createElement("div",{className:e.imgContainer},h.a.createElement("img",{src:n.img,alt:n.title}))),h.a.createElement(p.k,{item:!0,xs:12,sm:6},h.a.createElement("div",{className:e.details},h.a.createElement("div",{className:e.info},h.a.createElement(p.u,{className:e.text,variant:"h5",align:"center",color:"secondary"},"Info"),h.a.createElement(p.u,{className:e.text,variant:"h6"},"Name : ",n.title),h.a.createElement(p.u,{className:e.text,variant:"h6"},"Company : ",n.company),h.a.createElement(p.u,{className:e.text,variant:"h6"},"Price :$ ",n.price)),h.a.createElement("div",{className:e.description},h.a.createElement(p.u,{className:e.text,variant:"h5",align:"center",color:"secondary"},"Description"),h.a.createElement(p.u,{className:e.text,variant:"body1",align:"left"},n.info),h.a.createElement("div",{className:e.actions},h.a.createElement(p.c,{size:"medium",variant:"outlined",color:"secondary",component:m.b,to:"/products"},"Continue Shopping"),h.a.createElement(p.c,{size:"medium",variant:"outlined",color:"secondary",onClick:function(){o?t.props.removeFromCart(n):t.props.addToCart(n),t.setCartifiedState(n.id)}},o?"Remove from cart":"Add to cart"))))))),a}}]),e}(f.Component);e.default=Object(d.b)(function(t){return{item_ids:t.cart.item_ids,just_in:t.products.just_in,editors_choice:t.products.editors_choice,products:t.products.products}},function(t){return{addToCart:function(e){return t(Object(b.a)(e))},removeFromCart:function(e){return t(Object(b.d)(e))},fetchProducts:function(){return t(w.c())}}})(Object(v.withStyles)(x)(E))}}]);
//# sourceMappingURL=4.23365e62.chunk.js.map
(this.webpackJsonptask=this.webpackJsonptask||[]).push([[4],{46:function(t,e,r){t.exports=r(52)},47:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,u,"next",t)}function u(t){n(i,a,o,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))},48:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(50);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},49:function(t,e,r){"use strict";var n=r(1);r(0),r(53);e.a=function(t){return Object(n.jsx)("div",{className:"card ".concat(t.className),style:t.style,children:t.children})}},50:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},51:function(t,e,r){"use strict";var n=r(1),a=(r(0),r(9));r(55);e.a=function(t){return t.href?Object(n.jsx)("a",{className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),href:t.href,children:t.children}):t.to?Object(n.jsx)(a.b,{to:t.to,exact:t.exact,className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),children:t.children}):Object(n.jsx)("button",{className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),type:t.type,onClick:t.onClick,disabled:t.disabled,children:t.children})}},52:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(I){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,o=Object.create(a.prototype),i=new T(n||[]);return o._invoke=function(t,e,r){var n=f;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return P()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function b(){}function y(){}function j(){}var m={};m[o]=function(){return this};var O=Object.getPrototypeOf,g=O&&O(O(C([])));g&&g!==r&&n.call(g,o)&&(m=g);var w=j.prototype=b.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=w.constructor=j,j.constructor=y,y.displayName=u(j,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(E.prototype),E.prototype[i]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),u(w,c,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},53:function(t,e,r){},54:function(t,e,r){},55:function(t,e,r){},56:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(46),a=r.n(n),o=r(47),i=r(11),c=r(0),u=function(){var t=Object(c.useState)(!1),e=Object(i.a)(t,2),r=e[0],n=e[1],u=Object(c.useState)(),s=Object(i.a)(u,2),l=s[0],f=s[1],h=Object(c.useRef)([]),d=Object(c.useCallback)(function(){var t=Object(o.a)(a.a.mark((function t(e){var r,o,i,c,u,s,l=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",o=l.length>2&&void 0!==l[2]?l[2]:null,i=l.length>3&&void 0!==l[3]?l[3]:{},n(!0),c=new AbortController,h.current.push(c),t.prev=6,t.next=9,fetch(e,{method:r,body:o,headers:i,signal:c.signal});case 9:return u=t.sent,t.next=12,u.json();case 12:if(s=t.sent,h.current=h.current.filter((function(t){return t!==c})),u.ok){t.next=16;break}throw new Error(s.message);case 16:return n(!1),t.abrupt("return",s);case 20:throw t.prev=20,t.t0=t.catch(6),f(t.t0.message),n(!1),t.t0;case 25:case"end":return t.stop()}}),t,null,[[6,20]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(c.useEffect)((function(){return function(){h.current.forEach((function(t){return t.abort()}))}}),[]),{isLoading:r,error:l,sendRequest:d,clearError:function(){f(null)}}}},57:function(t,e,r){"use strict";var n=r(1),a=r(0),o=r.n(a),i=r(48),c=r(8),u=r.n(c),s=r(44),l=r(17),f=(r(54),function(t){var e=Object(n.jsxs)("div",{className:"modal ".concat(t.className),style:t.style,children:[Object(n.jsx)("header",{className:"modal__header ".concat(t.headerClass),children:Object(n.jsx)("h2",{children:t.header})}),Object(n.jsxs)("form",{onSubmit:t.onSubmit?t.onSubmit:function(t){return t.preventDefault()},children:[Object(n.jsx)("div",{className:"modal__content ".concat(t.contentClass),children:t.children}),Object(n.jsx)("footer",{className:"modal__footer ".concat(t.footerClass),children:t.footer})]})]});return u.a.createPortal(e,document.getElementById("modal-hook"))}),h=function(t){return Object(n.jsxs)(o.a.Fragment,{children:[t.show&&Object(n.jsx)(l.a,{onClick:t.onCancel}),Object(n.jsx)(s.a,{in:t.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:Object(n.jsx)(f,Object(i.a)({},t))})]})},d=r(51);e.a=function(t){return Object(n.jsx)(h,{onCancel:t.onClear,header:"An Error Occurred!",show:!!t.error,footer:Object(n.jsx)(d.a,{onClick:t.onClear,children:"Okay"}),children:Object(n.jsx)("p",{children:t.error})})}},88:function(t,e,r){},89:function(t,e,r){},90:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r(46),o=r.n(a),i=r(47),c=r(48),u=r(11),s=r(0),l=r(49),f=r(20);var h="REQUIRE",d="MINLENGTH",p="MAXLENGTH",v=function(t){return{type:d,val:t}},b=function(t,e){var r,n=!0,a=function(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=Object(f.a)(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}(e);try{for(a.s();!(r=a.n()).done;){var o=r.value;o.type===h&&(n=n&&t.trim().length>0),o.type===d&&(n=n&&t.trim().length>=o.val),o.type===p&&(n=n&&t.trim().length<=o.val),"MIN"===o.type&&(n=n&&+t>=o.val),"MAX"===o.type&&(n=n&&+t<=o.val)}}catch(i){a.e(i)}finally{a.f()}return n},y=(r(88),function(t,e){switch(e.type){case"CHANGE":return Object(c.a)(Object(c.a)({},t),{},{value:e.val,isValid:b(e.val,e.validators)});case"TOUCH":return Object(c.a)(Object(c.a)({},t),{},{isTouched:!0});default:return t}}),j=function(t){var e=Object(s.useReducer)(y,{value:t.initialValue||"",isTouched:!1,isValid:t.initialValid||!1}),r=Object(u.a)(e,2),a=r[0],o=r[1],i=t.id,c=t.onInput,l=a.value,f=a.isValid;Object(s.useEffect)((function(){c(i,l,f)}),[i,l,f,c]);var h=function(e){o({type:"CHANGE",val:e.target.value,validators:t.validators})},d=function(){o({type:"TOUCH"})},p="input"===t.element?Object(n.jsx)("input",{id:t.id,type:t.type,placeholder:t.placeholder,onChange:h,onBlur:d,value:a.value}):Object(n.jsx)("textarea",{id:t.id,rows:t.rows||3,onChange:h,onBlur:d,value:a.value});return Object(n.jsxs)("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid"),children:[Object(n.jsx)("label",{htmlFor:t.id,children:t.label}),p,!a.isValid&&a.isTouched&&Object(n.jsx)("p",{children:t.errorText})]})},m=r(51),O=r(50),g=function(t,e){switch(e.type){case"INPUT_CHANGE":var r=!0;for(var n in t.inputs)t.inputs[n]&&(r=n===e.inputId?r&&e.isValid:r&&t.inputs[n].isValid);return Object(c.a)(Object(c.a)({},t),{},{inputs:Object(c.a)(Object(c.a)({},t.inputs),{},Object(O.a)({},e.inputId,{value:e.value,isValid:e.isValid})),isValid:r});case"SET_DATA":return{inputs:e.inputs,isValid:e.formIsValid};default:return t}},w=r(57),x=r(18),E=r(12),k=r(56);r(89),e.default=function(){var t=Object(s.useContext)(E.a),e=Object(s.useState)(!0),r=Object(u.a)(e,2),a=r[0],f=r[1],h=Object(k.a)(),d=h.isLoading,p=h.sendRequest,b=h.error,y=h.clearError,O=function(t,e){var r=Object(s.useReducer)(g,{inputs:t,isValid:e}),n=Object(u.a)(r,2),a=n[0],o=n[1];return[a,Object(s.useCallback)((function(t,e,r){o({type:"INPUT_CHANGE",value:e,isValid:r,inputId:t})}),[]),Object(s.useCallback)((function(t,e){o({type:"SET_DATA",inputs:t,formIsValid:e})}),[])]}({username:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),N=Object(u.a)(O,3),L=N[0],T=N[1],C=N[2],P=function(){var e=Object(i.a)(o.a.mark((function e(r){var n,i,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!a){e.next=13;break}return e.prev=2,e.next=5,p("http://localhost:5000/api/login","POST",JSON.stringify({username:L.inputs.username.value,password:L.inputs.password.value}),{"Content-Type":"application/json"});case 5:n=e.sent,t.login(n.userId,n.token),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:e.next=26;break;case 13:return e.prev=13,(i=new FormData).append("nickname",L.inputs.nickname.value),i.append("username",L.inputs.username.value),i.append("password",L.inputs.password.value),e.next=20,p("http://localhost:5000/api/signup","POST",i);case 20:c=e.sent,t.login(c.userId,c.token),e.next=26;break;case 24:e.prev=24,e.t1=e.catch(13);case 26:case"end":return e.stop()}}),e,null,[[2,9],[13,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w.a,{error:b,onClear:y}),Object(n.jsxs)(l.a,{className:"authentication",children:[d&&Object(n.jsx)(x.a,{asOverlay:!0}),Object(n.jsx)("h2",{children:"Login Required"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{onSubmit:P,children:[!a&&Object(n.jsx)(j,{element:"input",id:"nickname",type:"text",label:"Nick Name",validators:[v(3)],errorText:"Please enter a valid nick name.",onInput:T}),Object(n.jsx)(j,{element:"input",id:"username",type:"username",label:"User Name",validators:[v(3)],errorText:"Please enter a valid user name.",onInput:T}),Object(n.jsx)(j,{element:"input",id:"password",type:"password",label:"Password",validators:[v(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:T}),Object(n.jsx)(m.a,{type:"submit",disabled:!L.isValid,children:a?"LOGIN":"SIGNUP"})]}),Object(n.jsxs)(m.a,{inverse:!0,onClick:function(){a?C(Object(c.a)(Object(c.a)({},L.inputs),{},{nickname:{value:"",isValid:!1}}),!1):C(Object(c.a)(Object(c.a)({},L.inputs),{},{nickname:void 0}),L.inputs.username.isValid&&L.inputs.password.isValid),f((function(t){return!t}))},children:["SWITCH TO ",a?"SIGNUP":"LOGIN"]})]})]})}}}]);
//# sourceMappingURL=4.aeaaebb3.chunk.js.map
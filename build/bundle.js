!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=8)}([function(t,e,r){(function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){var n=void 0!==t&&"[object process]"==={}.toString.call(t)||"undefined"!=typeof navigator&&"ReactNative"===navigator.product?e:self;n.Proxy||(n.Proxy=function(){function t(t){return!!t&&("object"===r(t)||"function"==typeof t)}var e=null,n=function(r,n){function o(){}if(!t(r)||!t(n))throw new TypeError("Cannot create proxy with a non-object as target or handler");e=function(){o=function(t){throw new TypeError("Cannot perform '"+t+"' on a proxy that has been revoked")}};var i=n;for(var a in n={get:null,set:null,apply:null,construct:null},i){if(!(a in n))throw new TypeError("Proxy polyfill does not support trap '"+a+"'");n[a]=i[a]}"function"==typeof i&&(n.apply=i.apply.bind(i));var s=this,u=!1,c=!1;"function"==typeof r?(s=function(){var t=this&&this.constructor===s,e=Array.prototype.slice.call(arguments);return o(t?"construct":"apply"),t&&n.construct?n.construct.call(this,r,e):!t&&n.apply?n.apply(r,this,e):t?(e.unshift(r),new(r.bind.apply(r,e))):r.apply(this,e)},u=!0):r instanceof Array&&(s=[],c=!0);var l=n.get?function(t){return o("get"),n.get(this,t,s)}:function(t){return o("get"),this[t]},f=n.set?function(t,e){o("set"),n.set(this,t,e,s)}:function(t,e){o("set"),this[t]=e},h={};if(Object.getOwnPropertyNames(r).forEach(function(t){if(!((u||c)&&t in s)){var e={enumerable:!!Object.getOwnPropertyDescriptor(r,t).enumerable,get:l.bind(r,t),set:f.bind(r,t)};Object.defineProperty(s,t,e),h[t]=!0}}),i=!0,Object.setPrototypeOf?Object.setPrototypeOf(s,Object.getPrototypeOf(r)):s.__proto__?s.__proto__=r.__proto__:i=!1,n.get||!i)for(var p in r)h[p]||Object.defineProperty(s,p,{get:l.bind(r,p)});return Object.seal(r),Object.seal(s),s};return n.revocable=function(t,r){return{proxy:new n(t,r),revoke:e}},n}(),n.Proxy.revocable=n.Proxy.revocable)}()}).call(this,r(1),r(2))},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var t=s(h);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new d(t,e)),1!==c.length||l||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(4);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"*, *:before, *:after {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  font-family: inherit; }\n\nhtml, body {\n  width: 100%;\n  height: 100%; }\n\ncanvas {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0; }\n",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,l=[],f=r(7);function h(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(m(n.parts[a],e))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(m(n.parts[a],e));i[n.id]={id:n.id,refs:1,parts:s}}}}function p(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function d(t,e){var r=s(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),l.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,r);r.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function y(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return b(e,t.attrs),d(t,e),e}function b(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function m(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=c++;r=u||(u=y(e)),n=x.bind(null,r,a,!1),o=x.bind(null,r,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),d(t,e),e}(e),n=function(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=f(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,e),o=function(){v(r),r.href&&URL.revokeObjectURL(r.href)}):(r=y(e),n=function(t,e){var r=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){v(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=p(t,e);return h(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var a=r[o];(s=i[a.id]).refs--,n.push(s)}t&&h(p(t,e),e);for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var g,w=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function x(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,r){"use strict";r.r(e);var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)||""===t)throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function u(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function c(t){this.map={},t instanceof c?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function f(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function h(t){var e=new FileReader,r=f(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?this._bodyArrayBuffer=p(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t,e,r,n=l(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=f(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(t,e){t=a(t),e=s(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},c.prototype.delete=function(t){delete this.map[a(t)]},c.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},c.prototype.set=function(t,e){this.map[a(t)]=s(e)},c.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},c.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),u(t)},c.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),u(t)},c.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),u(t)},n.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function y(t,e){var r,n,o=(e=e||{}).body;if(t instanceof y){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),v.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function m(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},d.call(y.prototype),d.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var g=[301,302,303,307,308];m.redirect=function(t,e){if(-1===g.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})};var w=self.DOMException;try{new w}catch(t){(w=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),w.prototype.constructor=w}function x(t,e){return new Promise(function(r,o){var i=new y(t,e);if(i.signal&&i.signal.aborted)return o(new w("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var t,e,n={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new c,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;r(new m(o,n))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.onabort=function(){o(new w("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&n.blob&&(a.responseType="blob"),i.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),i.signal&&(i.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",s)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})}x.polyfill=!0,self.fetch||(self.fetch=x,self.Headers=c,self.Request=y,self.Response=m);r(0);function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){O(t,e,r[e])})}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function k(t){var e=Object.seal(S({},t)),r={__all__:[]};for(var n in e)r[n]=[];var o={set:function(t,e,n){var o=t[e];return t[e]=n,r[e]&&n!==o&&(r[e].map(function(t){return t(n,o)}),r.__all__.map(function(t){return t(n,o)})),!0}};return new Proxy(S({},e,{watch:function(t,e){"string"==typeof t&&t in r&&r[t].push(e),"function"==typeof t&&r.__all__.push(t)}}),{set:o.set})}var T={api:{currentlyPlaying:"https://api.spotify.com/v1/me/player",trackAnalysis:"https://api.spotify.com/v1/audio-analysis/",trackFeatures:"https://api.spotify.com/v1/audio-features/",seek:"https://api.spotify.com/v1/me/player/seek",headers:{},pingDelay:1e3},tokens:{accessToken:"",refreshToken:"",refreshCode:""},visualizer:k({hidpi:!1,intervalTypes:["tatums","segments","beats","bars","sections"],activeIntervals:k({tatums:{},segments:{},beats:{},bars:{},sections:{}}),currentlyPlaying:{},trackAnalysis:{},trackFeatures:{},initialTrackProgress:0,initialStart:0,trackProgress:0,active:!1,initialized:!1,drawing:!1,totalStars:24,minSize:0,maxSize:0,activeSize:0,radiusStep:[.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],sizeStep:[],colorSchemes:[["rgb(255,159,28)","rgb(255,191,105)","rgb(203,243,240)","rgb(46,196,182)","rgb(255,255,255)"],["rgb(229,99,153)","rgb(210,241,228)","rgb(251,202,239)","rgb(72,48,77)","rgb(255,255,255)"],["rgb(198,0,66)","rgb(255,119,168)","rgb(226,206,239)","rgb(255,198,217)","rgb(255,255,255)"],["rgb(118,229,252)","rgb(27,154,170)","rgb(157,172,255)","rgb(61,52,139)","rgb(238,251,255)"],["rgb(10,36,99)","rgb(62,146,204)","rgb(255,250,255)","rgb(216,49,91)","rgb(39,27,24)"]].map(function(t){return{scheme:t,selected:!1}}),stars:[],background:{},activeColorScheme:{}})},_=k(T),E=Math.PI;function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.innerWidth,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.innerHeight,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=window.devicePixelRatio?window.devicePixelRatio:1;return t.width=e*(n?o:1),t.height=r*(n?o:1),t}function P(t){return E*t/180}function j(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{x:t*Math.cos(e)+r,y:t*Math.sin(e)+n}}function z(t,e){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=360/t,a=[],s=0;s<t;s++){var u=j(e,P(i*s+o),r,n);a.push(u)}return a}function R(t,e){if(!t||!e)return function(){return!1};var r=t.slice(4,-1).split(",").map(function(t){return parseInt(t,10)}),n=e.slice(4,-1).split(",").map(function(t){return parseInt(t,10)});return function(t){var e=C(r[0],n[0])(t),o=C(r[1],n[1])(t),i=C(r[2],n[2])(t);return"rgb(".concat(e,",").concat(o,",").concat(i,")")}}function C(t,e){return t&&e?(e-=t=+t,function(r){return t+e*r}):function(){return!1}}var I={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"easeOutQuint",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;if(!I[e])throw new Error('Unknown easing function "'.concat(e,'"'));for(var n=I[e](t),o=0;o<r;o++)n+=t;return n/(r+1)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var L=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color={last:e,next:e,interval:{}}}var e,r,n;return e=t,(r=[{key:"update",value:function(t){var e=t.val,r=t.interval;this.color.last=this.color.next,this.color.next=e,this.color.interval=r}},{key:"getColor",value:function(t){var e=this.color.interval.start,r=this.color.interval.duration,n=U(Math.min((t-e)/r,1));return R(this.color.last,this.color.next)(n)}},{key:"draw",value:function(t){var e=t.ctx,r=t.width,n=t.height,o=t.trackProgress;e.fillStyle=this.getColor(o),e.fillRect(0,0,r,n)}}])&&B(e.prototype,r),n&&B(e,n),t}();function D(t){return t[Math.floor(Math.random()*t.length)]}function M(t){return t&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null}function F(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function N(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function q(t){var e=t.tokens,r=t.api;e.accessToken=M("KALEIDOSYNC_ACCESS_TOKEN"),e.refreshToken=M("KALEIDOSYNC_REFRESH_TOKEN"),e.refreshCode=M("KALEIDOSYNC_REFRESH_CODE"),r.headers=new Headers({Authorization:"Bearer "+e.accessToken,Accept:"application/json"})}function H(t){var e=t.visualizer;e.initialized=!0,e.active=!0,console.log("Visualizer started.")}function Q(t){var e=t.visualizer,r=window.innerHeight<window.innerWidth;e.maxSize=r?1*window.innerWidth/2:1*window.innerHeight/2,e.minSize=e.maxSize/7,e.activeSize=e.maxSize;var n=e.maxSize,o=e.totalStars;e.sizeStep=[n/o*.6,n/o*.8,n/o*1,n/o*1.2,n/o*1.4,n/o*1.6]}function $(t,e){var r=t.visualizer,n=e.canvas,o=e.points,i=e.color,a=e.size,s=n.width/2,u=n.height/2,c=a,l=a*D(r.radiusStep),f={x:s,y:u,points:o,outerRadius:{last:c,next:c,interval:{},get:function(){return c}},innerRadius:{last:l,next:l,interval:{},get:function(){return l}},color:{last:i,next:i,interval:{},get:function(){return i}}};r.stars.push(f)}function K(t,e){var r=t.visualizer,n=e.index,o=e.innerRadius,i=void 0===o?null:o,a=e.outerRadius,s=void 0===a?null:a,u=e.color,c=void 0===u?null:u,l=e.points,f=void 0===l?null:l,h=r.stars[n],p=function(t,e){var r=e.val,n=e.interval;h[t].last=h[t].next,h[t].next=r,h[t].interval=n,h[t].get=function(e){var r,o,i=n.start,a=n.duration,s=U(Math.min((e-i)/a,1));return(r=h[t].last,o=h[t].next,"string"==typeof r&&-1!==r.indexOf("rgb(")?R(r,o):C(r,o))(s)}};null!==c&&p("color",c),null!==i&&p("innerRadius",i),null!==s&&p("outerRadius",s),null!==f&&(h.points=f)}function G(t,e){var r=t.visualizer;e&&(r.colorOverride="shuffle"!==e);var n=e&&"shuffle"!==e?e:D(r.colorSchemes);if(n&&n.scheme){var o=D(n.scheme);r.colorSchemes.forEach(function(t){return t.selected=!1}),n.selected=!0;for(var i={original:N(n.scheme),scheme:N(n.scheme),negative:o},a=0;a<Math.floor(60*Math.random())+10;)i.scheme.push(o),a++;r.activeColorScheme=i}}function J(t,e){t.visualizer.trackProgress=e}function V(t){t.visualizer.initialStart=window.performance.now()}function Y(t,e){var r=t.visualizer,n=e.canvas,o=e.ctx;r.background.draw({ctx:o,width:n.width,height:n.height,trackProgress:r.trackProgress}),r.stars.forEach(function(t){var e=r.trackProgress,i=t.color.get(e),a=t.innerRadius.get(e),s=t.outerRadius.get(e),u=e/75,c=function(t,e,r){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=z(t,r,n,o,i),s=z(t,e,n,o,360/t/2+i),u=[],c=0;c<t;c++)u.push({x:a[c].x,y:a[c].y}),u.push({x:s[c].x,y:s[c].y});return u}(t.points,a,s,n.width/2,n.height/2,u);o.fillStyle=i,function(t,e){t.beginPath();for(var r=0;r<e.length;r++){var n=e[r],o=n.x,i=n.y;0===r?t.moveTo(o,i):t.lineTo(o,i)}return t.closePath(),t}(o,c).fill()})}function W(t){var e=t.visualizer;e.intervalTypes.forEach(function(t){var r=function(t){for(var r=0;r<e.trackAnalysis[t].length;r++){if(r===e.trackAnalysis[t].length-1)return r;if(e.trackAnalysis[t][r].start<e.trackProgress&&e.trackProgress<e.trackAnalysis[t][r+1].start)return r}return-1}(t);e.activeIntervals[t].start&&r===e.activeIntervals[t].index||(e.activeIntervals[t]=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){F(t,e,r[e])})}return t}({},e.trackAnalysis[t][r],{index:r}))})}function X(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){Z(t,e,r[e])})}return t}function Z(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function tt(t){setTimeout(function(){return function(t){var e=new Request(t.api.currentlyPlaying,{headers:t.api.headers});fetch(e).then(function(t){return t.json()}).then(function(e){if(e.error&&401===e.error.status)return et(t);!function(t,e){var r=e.track,n=e.playing,o=e.progress,i=JSON.stringify(t.visualizer.currentlyPlaying)===JSON.stringify(r),a={client:t.visualizer.trackProgress,server:o,error:t.visualizer.trackProgress-o};if(console.log("Sync error: ".concat(Math.round(a.error),"ms")),null==r)return tt(t);if(n&&!t.visualizer.active)return i?(H(t),tt(t)):rt(t,{track:r,progress:o});!n&&t.visualizer.active&&(t.visualizer.active=!1,console.log("Visualizer stopped."));if(n&&t.visualizer.active&&!i)return rt(t,{track:r,progress:o});n&&t.visualizer.active&&i&&Math.abs(a.error)>500&&J(t,{progress:o});tt(t)}(t,{track:e.item,playing:e.is_playing,timestamp:e.timestamp,progress:e.progress_ms})}).catch(function(t){return console.log(t)})}(t)},t.api.pingDelay)}function et(t){if(!t.tokens.refreshToken)return window.location.href="";fetch("http://localhost:8001/refresh?token="+t.tokens.refreshToken).then(function(t){return t.json()}).then(function(e){!function(t,e,r,n,o,i){if(!t||/^(?:expires|max\-age|path|domain|secure)$/i.test(t))return!1;var a="";if(r)switch(r.constructor){case Number:a=r===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+r;break;case String:a="; expires="+r;break;case Date:a="; expires="+r.toUTCString()}document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+a+(o?"; domain="+o:"")+(n?"; path="+n:"")+(i?"; secure":"")}("KALEIDOSYNC_ACCESS_TOKEN",e.access_token),q(t),tt(t)}).catch(function(t){return console.log(t)})}function rt(t,e){var r=e.track,n=e.progress,o=t.api,i=o.trackAnalysis,a=o.trackFeatures,s=o.headers,u=fetch(new Request(i+r.id,{headers:s})).then(function(t){return t.json()}),c=fetch(new Request(a+r.id,{headers:s})).then(function(t){return t.json()}),l=window.performance.now();Promise.all([u,c]).then(function(e){var o=X({},e[0]),i=X({},e[1]);return o.error&&401===o.error.status?et(t):i.error&&401===i.error.status?et(t):(function(t,e){var r=t.visualizer,n=e.track,o=e.analysis;r.intervalTypes.forEach(function(t){var e=o[t];e[0].duration=e[0].start+e[0].duration,e[0].start=0,e[e.length-1].duration=n.duration_ms/1e3-e[e.length-1].start,e.forEach(function(t){t.start=1e3*t.start,t.duration=1e3*t.duration})})}(t,{track:r,analysis:o}),function(t,e){var r=e.track,n=e.analysis,o=e.features,i=e.progress,a=t.visualizer;a.currentlyPlaying=r,a.trackAnalysis=n,a.trackFeatures=o,a.initialTrackProgress=i,V(t),H(t),console.log("Now playing: ".concat(a.currentlyPlaying.album.artists[0].name," – ").concat(a.currentlyPlaying.name))}(t,{track:r,analysis:o,features:i,progress:n+(window.performance.now()-l)}),void tt(t))}).catch(function(t){return console.log(t)})}function nt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var ot=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.state=_,this.canvas=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r=document.createElement("canvas");return t&&e.appendChild(r),r}(),this.ctx=this.canvas.getContext("2d"),A(this.canvas),q(this.state),Q(this.state),function(t,e){var r=t.visualizer;if(!0!==r.initialized){G(t);for(var n=r.activeSize,o=0;o<r.totalStars;o++){var i=24;(o+1)%2==0&&(i=18),(o+1)%3==0&&(i=12),(o+1)%8==0&&(i=32),(n=Math.round(n-D(r.sizeStep)))<r.minSize&&(n=r.minSize),$(t,{canvas:e,points:i,color:o===r.totalStars-1?r.activeColorScheme.negative:D(r.activeColorScheme.scheme),size:n})}r.background=new L(r.activeColorScheme.negative)}}(this.state,this.canvas),this.watch(),window.addEventListener("resize",function(){Q(e.state),A(e.canvas)}),tt(this.state)}var e,r,n;return e=t,(r=[{key:"watch",value:function(){var t=this;this.state.visualizer.watch("active",function(e){!0===e?t.start():t.stop()});var e=this.state.visualizer.activeIntervals;e.watch("tatums",function(){return e=t.state,r="tatums",n=e.visualizer,o=n.activeSize,void n.stars.forEach(function(t,i){(o=Math.round(o-D(n.sizeStep)))<n.minSize&&(o=n.minSize);var a={val:o*D(n.radiusStep),interval:n.activeIntervals[r]},s={val:o,interval:n.activeIntervals[r]};K(e,{innerRadius:a,outerRadius:s,index:i})});var e,r,n,o}),e.watch("segments",function(){return e=t.state,r=e.visualizer,n=r.activeIntervals.segments,o=r.trackAnalysis.segments[n.index-1]?r.trackAnalysis.segments[n.index-1].loudness_max:n.loudness_max,i=r.trackAnalysis.segments[n.index+1]?r.trackAnalysis.segments[n.index+1].loudness_max:n.loudness_max,a=(n.loudness_max+o+i)/3,void(r.activeSize=r.maxSize+30*a+-20*r.trackFeatures.loudness);var e,r,n,o,i,a}),e.watch("beats",function(){var e,r,n;e=t.state,r="beats",(n=e.visualizer).stars.forEach(function(t,o){var i=o===n.totalStars-1?n.activeColorScheme.negative:D(n.activeColorScheme.scheme);K(e,{color:{val:i,interval:n.activeIntervals[r]},index:o})}),function(t,e){var r=t.visualizer;r.background.update({val:r.activeColorScheme.negative,interval:r.activeIntervals[e]})}(t.state,"beats")}),e.watch("bars",function(e){e.index%4==0&&G(t.state)})}},{key:"start",value:function(){V(_),requestAnimationFrame(this.paint.bind(this))}},{key:"stop",value:function(){cancelAnimationFrame(this.paint)}},{key:"paint",value:function(t){!0===this.state.visualizer.active&&requestAnimationFrame(this.paint.bind(this));var e=t-this.state.visualizer.initialStart+this.state.visualizer.initialTrackProgress;J(this.state,e),W(this.state),Y(this.state,{canvas:this.canvas,ctx:this.ctx})}}])&&nt(e.prototype,r),n&&nt(e,n),t}();r(3);function it(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e.default=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),"#start"===window.location.hash?this.kaleidosync=new ot:this.auth()}var e,r,n;return e=t,(r=[{key:"auth",value:function(){fetch("http://localhost:8001/auth").then(function(t){return t.json()}).then(function(t){return t.auth_id?window.location.href="http://localhost:8001/login?auth_id=".concat(t.auth_id):null}).catch(function(t){return console.log(t)})}}])&&it(e.prototype,r),n&&it(e,n),t}())}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[973,678],{3454:function(e,t,r){"use strict";var n,o;e.exports=(null===(n=r.g.process)||void 0===n?void 0:n.env)&&"object"===typeof(null===(o=r.g.process)||void 0===o?void 0:o.env)?r.g.process:r(7663)},7973:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),o=r(5715),i=r(2013),a=r(9153),u=r(4867),l=r(8543),c=r(7294),s=r(1163),f=r(5243),h=r(1864),d=r.n(h);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(e){var t=e.track,r=(0,c.useState)(0),o=r[0],i=r[1],h=(0,a.Sx)(),v=(0,s.useRouter)();return(0,c.useEffect)((function(){var e=d().join(v.basePath,t);fetch(e).then((function(e){return e.text()})).then((function(e){var t=(0,l.ng)((new DOMParser).parseFromString(e,"text/xml"));i(t),f.bounds=function(e){var t=g(e.reduce((function(e,t){var r=g(t,2),n=r[0],o=r[1];return e[0]=Math.min(e[0],o),e[1]=Math.min(e[1],n),e[2]=Math.max(e[2],o),e[3]=Math.max(e[3],n),e}),[1/0,1/0,-1/0,-1/0]),4);return[[t[0],t[1]],[t[2],t[3]]]}(t.features[0].geometry.coordinates),h.fitBounds(f.bounds,{padding:[50,50]})}))}),[]),o?(0,n.jsx)(u.Q,{data:o}):null};function m(e){var t=e.track;return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"my-5 h-1/2",children:(0,n.jsxs)(o.h,{center:[51.505,-.09],zoom:4,scrollWheelZoom:!1,className:"h-96 w-full",children:[(0,n.jsx)(i.I,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,n.jsx)(p,{track:t})]})})})}},1864:function(e,t,r){var n=r(3454);!function(){"use strict";var t={977:function(e){function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",o=0,i=-1,a=0,u=0;u<=e.length;++u){if(u<e.length)r=e.charCodeAt(u);else{if(47===r)break;r=47}if(47===r){if(i===u-1||1===a);else if(i!==u-1&&2===a){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var l=n.lastIndexOf("/");if(l!==n.length-1){-1===l?(n="",o=0):o=(n=n.slice(0,l)).length-1-n.lastIndexOf("/"),i=u,a=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=u,a=0;continue}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(i+1,u):n=e.slice(i+1,u),o=u-i-1;i=u,a=0}else 46===r&&-1!==a?++a:a=-1}return n}var o={resolve:function(){for(var e,o="",i=!1,a=arguments.length-1;a>=-1&&!i;a--){var u;a>=0?u=arguments[a]:(void 0===e&&(e=n.cwd()),u=e),t(u),0!==u.length&&(o=u+"/"+o,i=47===u.charCodeAt(0))}return o=r(o,!i),i?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&o&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];t(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":o.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=o.resolve(e))===(r=o.resolve(r)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var i=e.length,a=i-n,u=1;u<r.length&&47===r.charCodeAt(u);++u);for(var l=r.length-u,c=a<l?a:l,s=-1,f=0;f<=c;++f){if(f===c){if(l>c){if(47===r.charCodeAt(u+f))return r.slice(u+f+1);if(0===f)return r.slice(u+f)}else a>c&&(47===e.charCodeAt(n+f)?s=f:0===f&&(s=0));break}var h=e.charCodeAt(n+f);if(h!==r.charCodeAt(u+f))break;47===h&&(s=f)}var d="";for(f=n+s+1;f<=i;++f)f!==i&&47!==e.charCodeAt(f)||(0===d.length?d+="..":d+="/..");return d.length>0?d+r.slice(u+s):(u+=s,47===r.charCodeAt(u)&&++u,r.slice(u))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,o=-1,i=!0,a=e.length-1;a>=1;--a)if(47===(r=e.charCodeAt(a))){if(!i){o=a;break}}else i=!1;return-1===o?n?"/":".":n&&1===o?"//":e.slice(0,o)},basename:function(e,r){if(void 0!==r&&"string"!==typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,o=0,i=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var u=r.length-1,l=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!a){o=n+1;break}}else-1===l&&(a=!1,l=n+1),u>=0&&(c===r.charCodeAt(u)?-1===--u&&(i=n):(u=-1,i=l))}return o===i?i=l:-1===i&&(i=e.length),e.slice(o,i)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!a){o=n+1;break}}else-1===i&&(a=!1,i=n+1);return-1===i?"":e.slice(o,i)},extname:function(e){t(e);for(var r=-1,n=0,o=-1,i=!0,a=0,u=e.length-1;u>=0;--u){var l=e.charCodeAt(u);if(47!==l)-1===o&&(i=!1,o=u+1),46===l?-1===r?r=u:1!==a&&(a=1):-1!==r&&(a=-1);else if(!i){n=u+1;break}}return-1===r||-1===o||0===a||1===a&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,o=e.charCodeAt(0),i=47===o;i?(r.root="/",n=1):n=0;for(var a=-1,u=0,l=-1,c=!0,s=e.length-1,f=0;s>=n;--s)if(47!==(o=e.charCodeAt(s)))-1===l&&(c=!1,l=s+1),46===o?-1===a?a=s:1!==f&&(f=1):-1!==a&&(f=-1);else if(!c){u=s+1;break}return-1===a||-1===l||0===f||1===f&&a===l-1&&a===u+1?-1!==l&&(r.base=r.name=0===u&&i?e.slice(1,l):e.slice(u,l)):(0===u&&i?(r.name=e.slice(1,a),r.base=e.slice(1,l)):(r.name=e.slice(u,a),r.base=e.slice(u,l)),r.ext=e.slice(a,l)),u>0?r.dir=e.slice(0,u-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,o),a=!1}finally{a&&delete r[e]}return i.exports}o.ab="//";var i=o(977);e.exports=i}()},7663:function(e){!function(){var t={162:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,l=[],c=!1,s=-1;function f(){c&&u&&(c=!1,u.length?l=u.concat(l):s=-1,l.length&&h())}function h(){if(!c){var e=a(f);c=!0;for(var t=l.length;t;){for(u=l,l=[];++s<t;)u&&u[s].run();s=-1,t=l.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new d(e,t)),1!==l.length||c||a(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=v,n.addListener=v,n.once=v,n.off=v,n.removeListener=v,n.removeAllListeners=v,n.emit=v,n.prependListener=v,n.prependOnceListener=v,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(162);e.exports=o}()},1163:function(e,t,r){e.exports=r(880)}}]);
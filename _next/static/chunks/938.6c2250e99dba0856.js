"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[938],{3938:function(t,n,e){e.r(n),e.d(n,{default:function(){return D}});var r=e(5893),o=e(7294);const u=(0,o.createContext)(null),c=u.Provider;function i(){const t=(0,o.useContext)(u);if(null==t)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return t}var s=e(5243);function a(){return a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},a.apply(this,arguments)}function l({bounds:t,boundsOptions:n,center:e,children:r,className:u,id:i,placeholder:l,style:f,whenReady:p,zoom:d,...m},y){const[h]=(0,o.useState)({className:u,id:i,style:f}),[g,x]=(0,o.useState)(null);(0,o.useImperativeHandle)(y,(()=>g?.map??null),[g]);const b=(0,o.useCallback)((r=>{if(null!==r&&null===g){const o=new s.Map(r,m);null!=e&&null!=d?o.setView(e,d):null!=t&&o.fitBounds(t,n),null!=p&&o.whenReady(p),x(function(t){return Object.freeze({__version:1,map:t})}(o))}}),[]);(0,o.useEffect)((()=>()=>{g?.map.remove()}),[]);const v=g?o.createElement(c,{value:g},r):l??null;return o.createElement("div",a({},h,{ref:b}),v)}const f=(0,o.forwardRef)(l);e(3935);function p(t,n,e){return Object.freeze({instance:t,context:n,container:e})}function d(t,n){return null==n?function(n,e){return(0,o.useRef)(t(n,e))}:function(e,r){const u=(0,o.useRef)(t(e,r)),c=(0,o.useRef)(e),{instance:i}=u.current;return(0,o.useEffect)((function(){c.current!==e&&(n(i,e,c.current),c.current=e)}),[i,e,r]),u}}function m(t,n){const e=(0,o.useRef)();(0,o.useEffect)((function(){return null!=n&&t.instance.on(n),e.current=n,function(){null!=e.current&&t.instance.off(e.current),e.current=null}}),[t,n])}function y(t,n){const e=t.pane??n.pane;return e?{...t,pane:e}:t}function h(t,n){(0,o.useEffect)((function(){return(n.layerContainer??n.map).addLayer(t.instance),function(){n.layerContainer?.removeLayer(t.instance),n.map.removeLayer(t.instance)}}),[n,t])}function g(t){return function(n){const e=i(),r=t(y(n,e),e);return function(t,n){const e=(0,o.useRef)(n);(0,o.useEffect)((function(){n!==e.current&&null!=t.attributionControl&&(null!=e.current&&t.attributionControl.removeAttribution(e.current),null!=n&&t.attributionControl.addAttribution(n)),e.current=n}),[t,n])}(e.map,n.attribution),m(r.current,n.eventHandlers),h(r.current,e),r}}function x(t){return function(n){const e=i(),r=t(y(n,e),e);return m(r.current,n.eventHandlers),h(r.current,e),function(t,n){const e=(0,o.useRef)();(0,o.useEffect)((function(){if(n.pathOptions!==e.current){const r=n.pathOptions??{};t.instance.setStyle(r),e.current=r}}),[t,n])}(r.current,n),r}}const b=function(t){function n(n,e){const{instance:r}=t(n).current;return(0,o.useImperativeHandle)(e,(()=>r)),null}return(0,o.forwardRef)(n)}(g(d((function({url:t,...n},e){return p(new s.TileLayer(t,y(n,e)),e)}),(function(t,n,e){const{opacity:r,zIndex:o}=n;null!=r&&r!==e.opacity&&t.setOpacity(r),null!=o&&o!==e.zIndex&&t.setZIndex(o)}))));function v(){return i().map}const w=function(t,n){return function(t){function n(n,e){const{instance:r,context:u}=t(n).current;return(0,o.useImperativeHandle)(e,(()=>r)),null==n.children?null:o.createElement(c,{value:u},n.children)}return(0,o.forwardRef)(n)}(x(d(t,n)))}((function({data:t,...n},e){const r=new s.GeoJSON(t,n);return p(r,(o=e,u={overlayContainer:r},Object.freeze({...o,...u})));var o,u}),(function(t,n,e){n.style!==e.style&&(null==n.style?t.resetStyle():t.setStyle(n.style))}));function N(t,n){return Array.from(t.getElementsByTagName(n))}function O(t){return t?.normalize(),t&&t.textContent||""}function j(t,n,e){const r=t.getElementsByTagName(n),o=r.length?r[0]:null;return o&&e&&e(o),o}function E(t,n,e){const r={};if(!t)return r;const o=t.getElementsByTagName(n),u=o.length?o[0]:null;return u&&e?e(u,r):r}function k(t,n,e){const r=O(j(t,n));return r&&e&&e(r)||{}}function S(t,n,e){const r=parseFloat(O(j(t,n)));if(!isNaN(r))return r&&e&&e(r)||{}}function A(t,n,e){const r=parseFloat(O(j(t,n)));if(!isNaN(r))return r&&e&&e(r),r}function C(t,n){const e={};for(const r of n)k(t,r,(t=>{e[r]=t}));return e}function R(t){return 1===t?.nodeType}function F(t){return E(t,"line",(t=>Object.assign({},k(t,"color",(t=>({stroke:`#${t}`}))),S(t,"opacity",(t=>({"stroke-opacity":t}))),S(t,"width",(t=>({"stroke-width":96*t/25.4}))))))}function M(t){let n=[];if(null===t)return n;for(const e of Array.from(t.childNodes)){if(!R(e))continue;const t=T(e.nodeName);if("gpxtpx:TrackPointExtension"===t)n=n.concat(M(e));else{const r=O(e);n.push([t,z(r)])}}return n}function T(t){return["heart","gpxtpx:hr","hr"].includes(t)?"heart":t}function z(t){const n=parseFloat(t);return isNaN(n)?t:n}function I(t){const n=[parseFloat(t.getAttribute("lon")||""),parseFloat(t.getAttribute("lat")||"")];if(isNaN(n[0])||isNaN(n[1]))return null;A(t,"ele",(t=>{n.push(t)}));const e=j(t,"time");return{coordinates:n,time:e?O(e):null,extendedValues:M(j(t,"extensions"))}}function P(t){const n=C(t,["name","cmt","desc","type","time","keywords"]),e=Array.from(t.getElementsByTagNameNS("http://www.garmin.com/xmlschemas/GpxExtensions/v3","*"));for(const o of e)o.parentNode?.parentNode===t&&(n[o.tagName.replace(":","_")]=O(o));const r=N(t,"link");return r.length&&(n.links=r.map((t=>Object.assign({href:t.getAttribute("href")},C(t,["text","type"]))))),n}function _(t,n){const e=N(t,n),r=[],o=[],u={};for(let c=0;c<e.length;c++){const t=I(e[c]);if(t){r.push(t.coordinates),t.time&&o.push(t.time);for(const[n,r]of t.extendedValues){const t="heart"===n?n:n.replace("gpxtpx:","")+"s";u[t]||(u[t]=Array(e.length).fill(null)),u[t][c]=r}}}if(!(r.length<2))return{line:r,times:o,extendedValues:u}}function L(t){const n=_(t,"rtept");if(n)return{type:"Feature",properties:Object.assign({_gpxType:"rte"},P(t),F(j(t,"extensions"))),geometry:{type:"LineString",coordinates:n.line}}}function B(t){const n=N(t,"trkseg"),e=[],r=[],o=[];for(const i of n){const t=_(i,"trkpt");t&&(o.push(t),t.times&&t.times.length&&r.push(t.times))}if(0===o.length)return null;const u=o.length>1,c=Object.assign({_gpxType:"trk"},P(t),F(j(t,"extensions")),r.length?{coordinateProperties:{times:u?r:r[0]}}:{});for(const i of o){e.push(i.line),c.coordinateProperties||(c.coordinateProperties={});const t=c.coordinateProperties,n=Object.entries(i.extendedValues);for(let e=0;e<n.length;e++){const[r,c]=n[e];u?(t[r]||(t[r]=o.map((t=>new Array(t.line.length).fill(null)))),t[r][e]=c):t[r]=c}}return{type:"Feature",properties:c,geometry:u?{type:"MultiLineString",coordinates:e}:{type:"LineString",coordinates:e[0]}}}function H(t){const n=Object.assign(P(t),C(t,["sym"])),e=I(t);return e?{type:"Feature",properties:n,geometry:{type:"Point",coordinates:e.coordinates}}:null}function*V(t){for(const n of N(t,"trk")){const t=B(n);t&&(yield t)}for(const n of N(t,"rte")){const t=L(n);t&&(yield t)}for(const n of N(t,"wpt")){const t=H(n);t&&(yield t)}}function G(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function Z(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,u=[],c=!0,i=!1;try{for(e=e.call(t);!(c=(r=e.next()).done)&&(u.push(r.value),!n||u.length!==n);c=!0);}catch(s){i=!0,o=s}finally{try{c||null==e.return||e.return()}finally{if(i)throw o}}return u}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return G(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return G(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var $=function(t){var n=t.track,e=(0,o.useState)(0),u=e[0],c=e[1],i=v();return(0,o.useEffect)((function(){fetch(n).then((function(t){return t.text()})).then((function(t){var n,e=(n=(new DOMParser).parseFromString(t,"text/xml"),{type:"FeatureCollection",features:Array.from(V(n))});c(e),s.bounds=function(t){var n=Z(t.reduce((function(t,n){var e=Z(n,2),r=e[0],o=e[1];return t[0]=Math.min(t[0],o),t[1]=Math.min(t[1],r),t[2]=Math.max(t[2],o),t[3]=Math.max(t[3],r),t}),[1/0,1/0,-1/0,-1/0]),4);return[[n[0],n[1]],[n[2],n[3]]]}(e.features[0].geometry.coordinates),i.fitBounds(s.bounds)}))}),[]),u?(0,r.jsx)(w,{data:u}):null};function D(t){var n=t.track;return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"my-5 h-1/2",children:(0,r.jsxs)(f,{center:[51.505,-.09],zoom:4,scrollWheelZoom:!1,className:"h-96 w-full",children:[(0,r.jsx)(b,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,r.jsx)($,{track:n})]})})})}}}]);
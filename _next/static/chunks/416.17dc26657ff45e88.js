"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[416],{8543:function(n,t,e){function r(n,t){return Array.from(n.getElementsByTagName(t))}function o(n){return n?.normalize(),n&&n.textContent||""}function u(n,t,e){const r=n.getElementsByTagName(t),o=r.length?r[0]:null;return o&&e&&e(o),o}function c(n,t,e){const r={};if(!n)return r;const o=n.getElementsByTagName(t),u=o.length?o[0]:null;return u&&e?e(u,r):r}function i(n,t,e){const r=o(u(n,t));return r&&e&&e(r)||{}}function s(n,t,e){const r=parseFloat(o(u(n,t)));if(!isNaN(r))return r&&e&&e(r)||{}}function a(n,t,e){const r=parseFloat(o(u(n,t)));if(!isNaN(r))return r&&e&&e(r),r}function l(n,t){const e={};for(const r of t)i(n,r,(n=>{e[r]=n}));return e}function f(n){return 1===n?.nodeType}function p(n){return c(n,"line",(n=>Object.assign({},i(n,"color",(n=>({stroke:`#${n}`}))),s(n,"opacity",(n=>({"stroke-opacity":n}))),s(n,"width",(n=>({"stroke-width":96*n/25.4}))))))}function d(n){let t=[];if(null===n)return t;for(const e of Array.from(n.childNodes)){if(!f(e))continue;const n=m(e.nodeName);if("gpxtpx:TrackPointExtension"===n)t=t.concat(d(e));else{const r=o(e);t.push([n,y(r)])}}return t}function m(n){return["heart","gpxtpx:hr","hr"].includes(n)?"heart":n}function y(n){const t=parseFloat(n);return isNaN(t)?n:t}function h(n){const t=[parseFloat(n.getAttribute("lon")||""),parseFloat(n.getAttribute("lat")||"")];if(isNaN(t[0])||isNaN(t[1]))return null;a(n,"ele",(n=>{t.push(n)}));const e=u(n,"time");return{coordinates:t,time:e?o(e):null,extendedValues:d(u(n,"extensions"))}}function g(n){const t=l(n,["name","cmt","desc","type","time","keywords"]),e=Array.from(n.getElementsByTagNameNS("http://www.garmin.com/xmlschemas/GpxExtensions/v3","*"));for(const r of e)r.parentNode?.parentNode===n&&(t[r.tagName.replace(":","_")]=o(r));const u=r(n,"link");return u.length&&(t.links=u.map((n=>Object.assign({href:n.getAttribute("href")},l(n,["text","type"]))))),t}function x(n,t){const e=r(n,t),o=[],u=[],c={};for(let r=0;r<e.length;r++){const n=h(e[r]);if(n){o.push(n.coordinates),n.time&&u.push(n.time);for(const[t,o]of n.extendedValues){const n="heart"===t?t:t.replace("gpxtpx:","")+"s";c[n]||(c[n]=Array(e.length).fill(null)),c[n][r]=o}}}if(!(o.length<2))return{line:o,times:u,extendedValues:c}}function v(n){const t=x(n,"rtept");if(t)return{type:"Feature",properties:Object.assign({_gpxType:"rte"},g(n),p(u(n,"extensions"))),geometry:{type:"LineString",coordinates:t.line}}}function b(n){const t=r(n,"trkseg"),e=[],o=[],c=[];for(const r of t){const n=x(r,"trkpt");n&&(c.push(n),n.times&&n.times.length&&o.push(n.times))}if(0===c.length)return null;const i=c.length>1,s=Object.assign({_gpxType:"trk"},g(n),p(u(n,"extensions")),o.length?{coordinateProperties:{times:i?o:o[0]}}:{});for(const r of c){e.push(r.line),s.coordinateProperties||(s.coordinateProperties={});const n=s.coordinateProperties,t=Object.entries(r.extendedValues);for(let e=0;e<t.length;e++){const[r,o]=t[e];i?(n[r]||(n[r]=c.map((n=>new Array(n.line.length).fill(null)))),n[r][e]=o):n[r]=o}}return{type:"Feature",properties:s,geometry:i?{type:"MultiLineString",coordinates:e}:{type:"LineString",coordinates:e[0]}}}function N(n){const t=Object.assign(g(n),l(n,["sym"])),e=h(n);return e?{type:"Feature",properties:t,geometry:{type:"Point",coordinates:e.coordinates}}:null}function*O(n){for(const t of r(n,"trk")){const n=b(t);n&&(yield n)}for(const t of r(n,"rte")){const n=v(t);n&&(yield n)}for(const t of r(n,"wpt")){const n=N(t);n&&(yield n)}}function w(n){return{type:"FeatureCollection",features:Array.from(O(n))}}e.d(t,{ng:function(){return w}})},1410:function(n,t,e){e.d(t,{Hb:function(){return o},UO:function(){return i},mE:function(){return s},sj:function(){return u}});var r=e(7294);function o(n){return Object.freeze({__version:1,map:n})}function u(n,t){return Object.freeze({...n,...t})}const c=(0,r.createContext)(null),i=c.Provider;function s(){const n=(0,r.useContext)(c);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}},7999:function(n,t,e){e.d(t,{I:function(){return u},O:function(){return o}});var r=e(7294);function o(n,t,e){return Object.freeze({instance:n,context:t,container:e})}function u(n,t){return null==t?function(t,e){return(0,r.useRef)(n(t,e))}:function(e,o){const u=(0,r.useRef)(n(e,o)),c=(0,r.useRef)(e),{instance:i}=u.current;return(0,r.useEffect)((function(){c.current!==e&&(t(i,e,c.current),c.current=e)}),[i,e,o]),u}}},9308:function(n,t,e){e.d(t,{Au:function(){return f},Lf:function(){return p}});var r=e(7294),o=(e(3935),e(1410));var u=e(7999);function c(n,t){const e=(0,r.useRef)();(0,r.useEffect)((function(){return null!=t&&n.instance.on(t),e.current=t,function(){null!=e.current&&n.instance.off(e.current),e.current=null}}),[n,t])}var i=e(1802);function s(n,t){(0,r.useEffect)((function(){return(t.layerContainer??t.map).addLayer(n.instance),function(){t.layerContainer?.removeLayer(n.instance),t.map.removeLayer(n.instance)}}),[t,n])}function a(n){return function(t){const e=(0,o.mE)(),u=n((0,i.q)(t,e),e);return function(n,t){const e=(0,r.useRef)(t);(0,r.useEffect)((function(){t!==e.current&&null!=n.attributionControl&&(null!=e.current&&n.attributionControl.removeAttribution(e.current),null!=t&&n.attributionControl.addAttribution(t)),e.current=t}),[n,t])}(e.map,t.attribution),c(u.current,t.eventHandlers),s(u.current,e),u}}function l(n){return function(t){const e=(0,o.mE)(),u=n((0,i.q)(t,e),e);return c(u.current,t.eventHandlers),s(u.current,e),function(n,t){const e=(0,r.useRef)();(0,r.useEffect)((function(){if(t.pathOptions!==e.current){const r=t.pathOptions??{};n.instance.setStyle(r),e.current=r}}),[n,t])}(u.current,t),u}}function f(n,t){return function(n){function t(t,e){const{instance:u,context:c}=n(t).current;return(0,r.useImperativeHandle)(e,(()=>u)),null==t.children?null:r.createElement(o.UO,{value:c},t.children)}return(0,r.forwardRef)(t)}(l((0,u.I)(n,t)))}function p(n,t){return function(n){function t(t,e){const{instance:o}=n(t).current;return(0,r.useImperativeHandle)(e,(()=>o)),null}return(0,r.forwardRef)(t)}(a((0,u.I)(n,t)))}},1802:function(n,t,e){function r(n,t){const e=n.pane??t.pane;return e?{...n,pane:e}:n}e.d(t,{q:function(){return r}})},4867:function(n,t,e){e.d(t,{Q:function(){return i}});var r=e(9308),o=e(7999),u=e(1410),c=e(5243);const i=(0,r.Au)((function({data:n,...t},e){const r=new c.GeoJSON(n,t);return(0,o.O)(r,(0,u.sj)(e,{overlayContainer:r}))}),(function(n,t,e){t.style!==e.style&&(null==t.style?n.resetStyle():n.setStyle(t.style))}))},5715:function(n,t,e){e.d(t,{h:function(){return s}});var r=e(1410),o=e(5243),u=e(7294);function c(){return c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},c.apply(this,arguments)}function i({bounds:n,boundsOptions:t,center:e,children:i,className:s,id:a,placeholder:l,style:f,whenReady:p,zoom:d,...m},y){const[h]=(0,u.useState)({className:s,id:a,style:f}),[g,x]=(0,u.useState)(null);(0,u.useImperativeHandle)(y,(()=>g?.map??null),[g]);const v=(0,u.useCallback)((u=>{if(null!==u&&null===g){const c=new o.Map(u,m);null!=e&&null!=d?c.setView(e,d):null!=n&&c.fitBounds(n,t),null!=p&&c.whenReady(p),x((0,r.Hb)(c))}}),[]);(0,u.useEffect)((()=>()=>{g?.map.remove()}),[]);const b=g?u.createElement(r.UO,{value:g},i):l??null;return u.createElement("div",c({},h,{ref:v}),b)}const s=(0,u.forwardRef)(i)},2013:function(n,t,e){e.d(t,{I:function(){return i}});var r=e(9308),o=e(1802),u=e(7999),c=e(5243);const i=(0,r.Lf)((function({url:n,...t},e){const r=new c.TileLayer(n,(0,o.q)(t,e));return(0,u.O)(r,e)}),(function(n,t,e){const{opacity:r,zIndex:o}=t;null!=r&&r!==e.opacity&&n.setOpacity(r),null!=o&&o!==e.zIndex&&n.setZIndex(o)}))},9153:function(n,t,e){e.d(t,{Sx:function(){return o}});var r=e(1410);e(7294);function o(){return(0,r.mE)().map}}}]);
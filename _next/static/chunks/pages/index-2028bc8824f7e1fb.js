(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6068)}])},959:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893);function s(e){var n=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:n})}},5515:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),s=t(8420),i=t(5313);function a(e){var n=e.dateString,t=(0,s.Z)(n);return(0,r.jsx)("time",{dateTime:n,children:(0,i.Z)(t,"LLLL\td, yyyy")})}},3391:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),s=t(9008);function i(){return(0,r.jsxs)(s.default,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#000000"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat("Markdown",".")}),(0,r.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"})]})}function a(e){var n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:n})})]})}},6068:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return F},default:function(){return E}});var r=t(5893),s=t(959),i=t(5152),a=t(5515),c=t(1664),o=t.n(c),l=(0,i.default)((function(){return Promise.all([t.e(269),t.e(9),t.e(973)]).then(t.bind(t,7973))}),{loadableGenerated:{webpack:function(){return[7973]}},ssr:!1});function u(e){var n=e.title,t=e.date,s=e.excerpt,i=e.slug,c=e.track;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-5",children:(0,r.jsx)(l,{track:c})}),(0,r.jsx)("h3",{className:"text-3xl mb-3 leading-snug",children:(0,r.jsx)(o(),{href:"/posts/".concat(i),children:(0,r.jsx)("a",{className:"hover:underline",children:n})})}),(0,r.jsx)("div",{className:"text-lg mb-4",children:(0,r.jsx)(a.Z,{dateString:t})}),(0,r.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:s})]})}function d(e){var n=e.posts;return(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",children:"Stages"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:n.map((function(e){return(0,r.jsx)(u,{title:e.title,date:e.date,slug:e.slug,excerpt:e.excerpt,track:e.track},e.slug)}))})]})}function x(){return(0,r.jsxs)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:[(0,r.jsx)("h1",{className:"text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8",children:"Espresso Divide."}),(0,r.jsxs)("h4",{className:"text-center md:text-left text-lg mt-5 md:pl-8",children:["1400km from Napoli to Milano"," "]})]})}var f=t(3391),m=t(4051),h=t.n(m),p=t(1864),g=t.n(p),v=t(1163),j=t(7294);function b(e,n,t,r,s,i,a){try{var c=e[i](a),o=c.value}catch(l){return void t(l)}c.done?n(o):Promise.resolve(o).then(r,s)}function k(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function a(e){b(i,r,s,a,c,"next",e)}function c(e){b(i,r,s,a,c,"throw",e)}a(void 0)}))}}var w=function(){var e=k(h().mark((function e(n,t){var r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=k(h().mark((function e(t){var r,s,i,a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=g().join(n,t.track),s=r.replace(".gpx",".geojson"),e.next=4,fetch(s);case 4:return i=e.sent,e.next=7,i.json();case 7:return a=e.sent,e.abrupt("return",a.bounds);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())).then((function(e){return e.reduce((function(e,n){return e[0][0]=Math.min(e[0][0],n[0][0]),e[0][1]=Math.min(e[0][1],n[0][1]),e[1][0]=Math.max(e[1][0],n[1][0]),e[1][1]=Math.max(e[1][1],n[1][1]),e}),[[1/0,1/0],[-1/0,-1/0]])}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),N=(0,i.default)((function(){return Promise.all([t.e(269),t.e(9),t.e(973)]).then(t.bind(t,7973)).then((function(e){return e.MapOverview}))}),{loadableGenerated:{webpack:function(){return[7973]}},ssr:!1});function y(e){var n=e.posts,t=(0,j.useState)(null),s=t[0],i=t[1],a=(0,v.useRouter)();return(0,j.useEffect)((function(){function e(){return(e=k(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(a.basePath,n);case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",children:"Overview"}),(0,r.jsx)("div",{className:"mb-5",children:s&&(0,r.jsx)(N,{posts:n,bounds:s})})]})}var _=t(9008),F=!0;function E(e){var n=e.allPosts;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(_.default,{children:(0,r.jsx)("title",{children:"Espresso Divide Tour Blog"})}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(y,{posts:n}),(0,r.jsx)(d,{posts:n})]})]})})}}},function(e){e.O(0,[577,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{JRtg:function(e,t,r){"use strict";var n=r("nKUr"),a=r("KQm4"),c=r("YFqc"),s=r.n(c);t.a=function(e){var t=e.showAvatar;return Object(n.jsxs)("div",{className:"container px-5",children:[Object(n.jsx)("h3",{className:"mt-5",children:"Yaz\u0131lar"}),Object(n.jsx)("div",{className:"row mt-3",children:Object(a.a)(Array(6)).map((function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsxs)("div",{className:"d-flex",children:[t&&Object(n.jsx)("img",{src:"avatars/placeholder.png",height:"120",className:"me-3"}),Object(n.jsxs)("div",{className:"flex-fill",children:[Object(n.jsx)("div",{className:"mb-1 date_font text-muted",children:"4 Mart 2021"}),Object(n.jsx)("strong",{children:Object(n.jsx)("a",{href:"#",children:"Mars \u0130kizler Burcunda"})}),Object(n.jsx)("p",{className:"card-text mb-auto",children:"2020\u2019yi geride b\u0131rak\u0131rken, \xf6ncelikle herkesin d\xf6n\xfcp kendini tebrik etmesi\u2026"}),Object(n.jsx)("p",{children:Object(n.jsx)(s.a,{href:"/astrolog",children:Object(n.jsx)("a",{children:"Selin Karahano\u011flu"})})})]})]})})})}))})]})}},"KN+Z":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return c}));var n=r("nKUr"),a=r("JRtg");function c(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"container px-5",children:Object(n.jsxs)("div",{className:"d-flex mt-5",children:[Object(n.jsxs)("div",{className:"me-4 me-sm-5 text-center",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{className:"fas fa-star"}),Object(n.jsx)("i",{className:"fas fa-star"}),Object(n.jsx)("i",{className:"fas fa-star"}),Object(n.jsx)("i",{className:"far fa-star"}),Object(n.jsx)("i",{className:"far fa-star"})]}),Object(n.jsx)("img",{src:"avatars/placeholder.png",className:"mx-2 my-2"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:"20"})," Kont\xf6r / Saat"]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Selin Karahano\u011flu"}),Object(n.jsx)("p",{children:"2 Maecenas ac risus arcu. Donec vel malesuada est, eget egestas massa. Donec pharetra porttitor ipsum a ornare. Nam suscipit semper libero, sed elementum purus porta a. Maecenas vehicula, justo quis."}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"badge rounded-pill bg-light text-dark",children:"\xd6ng\xf6r\xfc"}),Object(n.jsx)("span",{className:"badge rounded-pill bg-light text-dark",children:"Rektifikasyon"}),Object(n.jsx)("span",{className:"badge rounded-pill bg-light text-dark",children:"Tek Soru"})]})]})]})}),Object(n.jsx)(a.a,{})]})}},KQm4:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return a}))},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var c=a(r("q1tI")),s=r("elyg"),i=r("nOHt"),o=r("vNVm"),l={};function u(e,t,r,n){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,i.useRouter)(),a=r&&r.pathname||"/",f=c.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),r=n(t,2),c=r[0],i=r[1];return{href:c,as:e.as?(0,s.resolveHref)(a,e.as):i||c}}),[a,e.href,e.as]),d=f.href,j=f.as,p=e.children,m=e.replace,b=e.shallow,h=e.scroll,v=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var x=c.Children.only(p),g=x&&"object"===typeof x&&x.ref,O=(0,o.useIntersection)({rootMargin:"200px"}),y=n(O,2),N=y[0],k=y[1],w=c.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);(0,c.useEffect)((function(){var e=k&&t&&(0,s.isLocalURL)(d),n="undefined"!==typeof v?v:r&&r.locale,a=l[d+"%"+j+(n?"%"+n:"")];e&&!a&&u(r,d,j,{locale:n})}),[j,d,k,v,t,r]);var _={ref:w,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,c,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:c,locale:o,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,r,d,j,m,b,h,v)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(r,d,j,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var M="undefined"!==typeof v?v:r&&r.locale,E=r&&r.isLocaleDomain&&(0,s.getDomainLocale)(j,M,r&&r.locales,r&&r.domainLocales);_.href=E||(0,s.addBasePath)((0,s.addLocale)(j,M,r&&r.defaultLocale))}return c.default.cloneElement(x,_)};t.default=f},lf0y:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/astrolog",function(){return r("KN+Z")}])},vNVm:function(e,t,r){"use strict";var n=r("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!s,o=(0,a.useRef)(),l=(0,a.useState)(!1),u=n(l,2),f=u[0],d=u[1],j=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),r||f||e&&e.tagName&&(o.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,c=n.observer,s=n.elements;return s.set(e,t),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){if(!s&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[j,f]};var a=r("q1tI"),c=r("0G5g"),s="undefined"!==typeof IntersectionObserver;var i=new Map}},[["lf0y",0,2,1]]]);
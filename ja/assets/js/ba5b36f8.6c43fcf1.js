(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[170],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},983:function(e,t,r){"use strict";r.d(t,{M:function(){return o}});var n=r(7294),i=r(9205),a="titleOffset_2I3u",c="iconContainer_1xRA",o=function(e){var t=e.title?n.createElement("div",{className:"card__header"},n.createElement("span",{className:c},e.icon&&n.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),n.createElement("h3",{className:e.icon&&a},e.title)):"";return n.createElement("div",{className:"card-demo",style:{margin:"2rem"}},n.createElement("div",{className:"card"},t,n.createElement("div",{className:"card__body"},n.createElement("p",null," ",e.children," "))))}},9205:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var n=r(7294),i="hidden_2JtY",a="iconContainer_2Rnc",c="visible_2147",o="link_Lh4h",l="clickable_3vcc",u=function(e){var t=" "+(e.active?c:i),r=o+" "+(e.link&&l);return n.createElement("div",{className:a+t},n.createElement("a",{href:e.link,className:r},e.icon||"\ud83d\ude80"))}},5303:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),c=r(983),o=["components"],l={title:"\ud83c\udf33 \u7a7a\u9593\u30c4\u30ea\u30fc",sidebar_position:1},u={unversionedId:"Guide/web-ifc-three/Tutorials/Spatial tree",id:"Guide/web-ifc-three/Tutorials/Spatial tree",isDocsHomePage:!1,title:"\ud83c\udf33 \u7a7a\u9593\u30c4\u30ea\u30fc",description:"\ud83d\udea7\ud83d\udc77\u200d\u2640\ufe0f\u5efa\u8a2d\u4e2d \ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Guide/web-ifc-three/Tutorials/Spatial tree.mdx",sourceDirName:"Guide/web-ifc-three/Tutorials",slug:"/Guide/web-ifc-three/Tutorials/Spatial tree",permalink:"/info/ja/docs/Guide/web-ifc-three/Tutorials/Spatial tree",version:"current",sidebarPosition:1,frontMatter:{title:"\ud83c\udf33 \u7a7a\u9593\u30c4\u30ea\u30fc",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcc3 \u30d7\u30ed\u30d1\u30c6\u30a3",permalink:"/info/ja/docs/Guide/web-ifc-three/Tutorials/Properties"},next:{title:"\ud83c\udfa2 \u30c8\u30e9\u30d0\u30fc\u30b9",permalink:"/info/ja/docs/Guide/web-ifc-three/Tutorials/Traversing"}},s=[{value:"\ud83d\udea7\ud83d\udc77\u200d\u2640\ufe0f\u5efa\u8a2d\u4e2d \ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7",id:"\u2640\ufe0f\u5efa\u8a2d\u4e2d-\u2642\ufe0f",children:[]}],f={toc:s};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u2640\ufe0f\u5efa\u8a2d\u4e2d-\u2642\ufe0f"},"\ud83d\udea7\ud83d\udc77\u200d\u2640\ufe0f\u5efa\u8a2d\u4e2d \ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7"),(0,a.kt)(c.M,{icon:"\ud83d\udc99",title:"IFC.js\u306b\u8208\u5473\u3092\u6301\u3063\u3066\u3044\u305f\u3060\u304d\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002",mdxType:"IfcCard"},"\u73fe\u5728\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u4e2d\u3067\u3059\u3002\u305d\u308c\u307e\u3067\u306e\u9593\u3001",(0,a.kt)("a",{href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord\u30c1\u30e3\u30f3\u30cd\u30eb"),"\u306b\u53c2\u52a0\u3057\u3066\u3001IFC.js\u306e\u5b9f\u88c5\u3084\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3078\u306e\u53c2\u52a0\u306b\u5fc5\u8981\u306a\u8cea\u554f\u3092\u3057\u3066\u307f\u3066\u306f\u3044\u304b\u304c\u3067\u3057\u3087\u3046\u304b\u3002"))}p.isMDXComponent=!0}}]);
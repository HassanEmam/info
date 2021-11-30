(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5324],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3878:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var r=n(7294),o="icon_1PGw",a=n(9205),i=function(e){return r.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},r.createElement("div",{className:o},r.createElement(a.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var r=n(7294),o=n(9205),a="titleOffset_2I3u",i="iconContainer_1xRA",s=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:i},e.icon&&r.createElement(o.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&a},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return p}});var r=n(7294),o="hidden_2JtY",a="iconContainer_2Rnc",i="visible_2147",s="link_Lh4h",l="clickable_3vcc",p=function(e){var t=" "+(e.active?i:o),n=s+" "+(e.link&&l);return r.createElement("div",{className:a+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},6649:function(e,t,n){"use strict";n.d(t,{x:function(){return a}});var r=n(7294),o="threeScene_3QXR",a=function(e){return r.createElement("iframe",{className:o,width:"100%",height:"300",key:Math.random(),src:e.link,frameBorder:"0"})}},4518:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(3878),s=n(983),l=n(6649),p=["components"],c={title:"\ud83d\udcc3 Properties",sidebar_position:3},u={unversionedId:"Guide/web-ifc-three/Tutorials/Properties",id:"Guide/web-ifc-three/Tutorials/Properties",isDocsHomePage:!1,title:"\ud83d\udcc3 Properties",description:"Introduction",source:"@site/docs/Guide/web-ifc-three/Tutorials/Properties.mdx",sourceDirName:"Guide/web-ifc-three/Tutorials",slug:"/Guide/web-ifc-three/Tutorials/Properties",permalink:"/info/docs/Guide/web-ifc-three/Tutorials/Properties",version:"current",sidebarPosition:3,frontMatter:{title:"\ud83d\udcc3 Properties",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u2728 Subsets",permalink:"/info/docs/Guide/web-ifc-three/Tutorials/Highlighting"},next:{title:"\ud83d\udc53 Hiding",permalink:"/info/docs/Guide/web-ifc-three/Tutorials/Hiding"}},h=[{value:"Introduction",id:"introduction",children:[]},{value:"How to do it",id:"how-to-do-it",children:[{value:"Hello properties",id:"hello-properties",children:[]},{value:"Traverse the IFC",id:"traverse-the-ifc",children:[]},{value:"Spatial tree",id:"spatial-tree",children:[]},{value:"Get items by type",id:"get-items-by-type",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],d={toc:h};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,'\ud83e\uddec\ud83e\uddec\ud83e\uddec\ufe0f\nAlthough virtually all BIM models have geometry, almost everyone agrees that what is really important is the "I" in BIM, i.e. ',(0,a.kt)("strong",{parentName:"p"},"Information"),". IFC.js can traverse any IFC file from top to bottom at ",(0,a.kt)("strong",{parentName:"p"},"native speed")," and with ",(0,a.kt)("strong",{parentName:"p"},"almost no code"),"."),(0,a.kt)("p",null,"\ud83d\udcbe\nThis not only makes it possible to create web applications that ",(0,a.kt)("strong",{parentName:"p"},"read information from IFC")," files directly on the client side, but also to transfer that information into relational or non-relational databases and process it on the backend."),(0,a.kt)(i.r,{mdxType:"IfcAlert"},"IFC.js can read IFC files by IDs, by spatial tree and by filtered search."),(0,a.kt)("p",null,"\ud83d\udcda\nThere are several types of properties in the IFC scheme, each with a specific purpose, and IFC.js can get ",(0,a.kt)("strong",{parentName:"p"},"all of them"),". Some of the most common are:"),(0,a.kt)(s.M,{icon:"\ud83d\udcd5",title:"Native properties",mdxType:"IfcCard"},"Specific to each IFC class."),(0,a.kt)(s.M,{icon:"\ud83d\udcd7",title:"Type properties",mdxType:"IfcCard"},"Describe properties of all elements of the same type (e.g. all envelope walls of a particular type)."),(0,a.kt)(s.M,{icon:"\ud83d\udcd8",title:"Material properties",mdxType:"IfcCard"},"Describes all the materials that make up the layers of that element."),(0,a.kt)(s.M,{icon:"\ud83d\udcd9",title:"Property sets",mdxType:"IfcCard"},"Arbitrary sets of user-defined properties. There may be multiple sets of properties associated with one or more elements. Each property set contains an arbitrary group of properties related to each other."),(0,a.kt)(s.M,{icon:"\ud83d\udcd2",title:"Quantity sets",mdxType:"IfcCard"},"Sets of properties describing the dimensions of the elements to which they refer. Although it would also be possible to infer element dimensions implicitly from the geometry definition, this explicit description makes it much easier to create applications that measure IFC models."),(0,a.kt)("p",null,"\ud83d\udeb4\u200d\u2642\ufe0f But enough theory! Let's get down to work."),(0,a.kt)("h2",{id:"how-to-do-it"},"How to do it"),(0,a.kt)("h3",{id:"hello-properties"},"Hello properties"),(0,a.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb The basic way to extract properties from an IFC is from the ID of an element. In many cases, when the user selects an element, we will want to get its direct and indirect properties. ",(0,a.kt)("a",{href:"https://ifcjs.github.io/info/docs/Guide/web-ifc-three/Tutorials/Picking/",target:"_self"},"Previous tutorials ")," have shown how to get that ID easily. "),(0,a.kt)("p",null,"   \u261d\nNow that we have that ID, how hard it is to get the properties of an element? You only need to add ",(0,a.kt)("strong",{parentName:"p"},"one line of code")," to what we saw in the ",(0,a.kt)("a",{href:"https://ifcjs.github.io/info/docs/Guide/web-ifc-three/Tutorials/Picking/",target:"_self"}," picking tutorial ")," to be able to see the properties of the selected element when double clicking."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{9}","{9}":!0},"// Event that gets executed when an item is picked\nasync function pick(event) {\n    const found = cast(event)[0];\n    if (found) {\n        const index = found.faceIndex;\n        const geometry = found.object.geometry;\n        const ifc = ifcLoader.ifcManager;\n        const id = ifc.getExpressId(geometry, index);\n        const modelID = found.object.modelID;\n        const props = await ifc.getItemProperties(modelID, id);\n        output.innerHTML = JSON.stringify(props, null, 2);\n    }\n}\n")),(0,a.kt)(l.x,{link:"https://ifcjs.github.io/hello-world/examples/web-ifc-three/picking-properties/",mdxType:"Scene"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83e\udd28 But what are these properties?")),(0,a.kt)("p",null,"They are ",(0,a.kt)("strong",{parentName:"p"},"native properties"),", that is, the basic properties inherent to each ifc element type. The properties are given as a ",(0,a.kt)("strong",{parentName:"p"},"JavaScript object"),", so they are super easy to traverse."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83e\udd14 Why do some properties have numbers as values?")),(0,a.kt)("p",null,"These are not numbers, but ",(0,a.kt)("strong",{parentName:"p"},"express IDs"),"! This means that you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"getItemProperties()")," again using that ID, and you'll get the properties of that ",(0,a.kt)("strong",{parentName:"p"},"referenced")," element."),(0,a.kt)(s.M,{mdxType:"IfcCard"},"That is how IFC works: each ",(0,a.kt)("b",null,"element")," has ",(0,a.kt)("b",null,"properties"),", and each ",(0,a.kt)("b",null,"property")," can be the reference to other ",(0,a.kt)("b",null,"element"),". So you can basically traverse the whole IFC navigating through references."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\ude11 References? But I want all the information directly!")),(0,a.kt)("p",null,"Don't worry, we got you covered! You can use an optional third parameter of ",(0,a.kt)("inlineCode",{parentName:"p"},"getItemProperties()"),", which is a boolean that is false by default. If you set it to true, we will get all referenced elements recursively and give you everything nicely packed in a single JavaScript object."),(0,a.kt)("p",null,"Nonetheless, we usually recommend avoiding this in order to avoid runtime overheads. Much better is to use ",(0,a.kt)("inlineCode",{parentName:"p"},"getItemProperties()")," only for those IDs you need when you need them."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\ude44 How can I get other types of properties?")),(0,a.kt)("p",null,"The IFC.js API has other similar methods for all other property types: ",(0,a.kt)("inlineCode",{parentName:"p"},"getTypeProperties()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"getMaterialProperties()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"getPropertySets()"),". This last method fetches both property sets and quantity sets."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\ude28 Is ",(0,a.kt)("inlineCode",{parentName:"strong"},"getItemProperties()")," the only way to traverse the IFC?")),(0,a.kt)("p",null,"Not at all! We'll see how to traverse the whole spatial structure next."),(0,a.kt)("h3",{id:"traverse-the-ifc"},"Traverse the IFC"),(0,a.kt)("p",null,"\ud83d\udd25 You can now browse the IFC information from the ID of an element, and you also know how to get the ID by clicking on objects in the scene. However, we know that ",(0,a.kt)("strong",{parentName:"p"},"this is not enough"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"What if you want to get the properties of elements that have no geometric representation (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"IfcSite"),")?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"What if you want to traverse the entire spatial structure of the IFC?"))),(0,a.kt)("p",null,"\ud83c\udf08 Of course, all this is really easy with the IFC.js API."),(0,a.kt)("h3",{id:"spatial-tree"},"Spatial tree"),(0,a.kt)("p",null,"\ud83c\udf33\ud83c\udf32\ud83c\udf34 As you may know, all IFCs have a general structure called ",(0,a.kt)("strong",{parentName:"p"},"Spatial Element Structure")," (we'll refer to it as ",(0,a.kt)("inlineCode",{parentName:"p"},"spatial tree"),"). It is composed of elements that define the relative position of all products (physical objects) in the project."),(0,a.kt)(i.r,{mdxType:"IfcAlert"},"The spatial structure generally consists of IfcProject, IfcSite, IfcBuilding, IfcBuildingStorey and IfcSpace."),(0,a.kt)("p",null,"You can get the spatial structure of the project simply calling ",(0,a.kt)("inlineCode",{parentName:"p"},"getSpatialStructure()"),", where the only parameter is the ",(0,a.kt)("inlineCode",{parentName:"p"},"modelID"),". This method will return the whole spatial structure of the project as a JavaScript object."),(0,a.kt)("p",null,"\ud83d\udea7 Does this means that you get all the properties of all the products of the project? ",(0,a.kt)("strong",{parentName:"p"},"Nope"),", because that would be computationally expensive. Instead, you get a tree of items with the following information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Node {\n    expressID: number;\n    type: string;\n    children: Node[];\n}\n")),(0,a.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb\nNotice that you only get the ",(0,a.kt)("strong",{parentName:"p"},"type")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"IfcWall"),") and the ",(0,a.kt)("strong",{parentName:"p"},"express ID"),". If you want to get the properties of an element, you'll have to traverse the tree and call the abovementioned property getter methods over all the IDs."),(0,a.kt)(s.M,{mdxType:"IfcCard"},"If your goal is to display properties to users, it's generally better to only get the properties when the user requests it (e. g. clicks on a specific item in your GUI)."),(0,a.kt)("p",null,"For instance, if you request the spatial structure of a project, you might get something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    expressID: 100,\n    type: "IfcProject",\n    children: [{\n        expressID: 101,\n        type: "IfcSite",\n        children: [{\n            expressID: 102,\n            type: "IfcBuilding",\n            children:[\n                {\n                    expressID: 103,\n                    type: "IfcBuildingStorey",\n                    children: {...}\n                },\n                {\n                    expressID: 104,\n                    type: "IfcBuildingStorey",\n                    children: {...}\n                }\n            ]\n        }]\n    }]\n}\n')),(0,a.kt)("h3",{id:"get-items-by-type"},"Get items by type"),(0,a.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb\nSometimes you'll want to retrieve ",(0,a.kt)("strong",{parentName:"p"},"all elements of a certain type")," (e.g. all ",(0,a.kt)("inlineCode",{parentName:"p"},"IfcWall")," instances in the project). In these cases it is not useful to select elements by clicking on them or to get the spatial tree of the project."),(0,a.kt)("p",null,"\ud83c\udfb8\ud83e\ude95\ud83c\udfbb\nThat's what the ",(0,a.kt)("inlineCode",{parentName:"p"},"getAllItemsOfType")," method is for. Using it is really easy, and you can import the types directly from ",(0,a.kt)("inlineCode",{parentName:"p"},"web-ifc"),". For instance, to get the properties of all the ",(0,a.kt)("inlineCode",{parentName:"p"},"IfcSlab")," instances of the project, you can do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { IFCSLAB } from "web-ifc";\n\nconst ifc = ifcLoader.ifcManager;\nconst modelID = 0;\n\nasync function logAllSlabs() {\n    const slabsID = await ifc.getAllItemsOfType(modelID, IFCSLAB);\n\n    for(let i = 0; i <= slabsID.length; i++) {\n        const slabID = slabsID[i];\n        const slabProperties = await ifc.getItemProperties(0, slabID);\n        console.log(slabProperties);\n    }\n\n}\n\nlogAllSlabs();\n')),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89\nCongratulations! You should now be able to ",(0,a.kt)("strong",{parentName:"p"},"traverse any IFC")," and extract the properties you are looking for."),(0,a.kt)("p",null,"\ud83d\udc31\u200d\ud83d\udc64 However, what can we do with these properties? One possible application can be found in the following tutorial, where we will see how to ",(0,a.kt)("strong",{parentName:"p"},"hide and isolate")," elements."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[1184],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),b=r,f=m["".concat(s,".").concat(b)]||m[b]||u[b]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},7852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={slug:"tailscale-extension-for-lambda-containers",title:"Using Tailscale on Lambda for a Live Development Proxy",authors:["kcollins"],tags:["tailscale","websockets","lambda","extension","container"]},l=void 0,i={permalink:"/blog/tailscale-extension-for-lambda-containers",source:"@site/blog/2023-06-03-tailscale-extension-for-lambda-containers.mdx",title:"Using Tailscale on Lambda for a Live Development Proxy",description:"Using Tailscale on Lambda for a Live Development Proxy",date:"2023-06-03T00:00:00.000Z",formattedDate:"June 3, 2023",tags:[{label:"tailscale",permalink:"/blog/tags/tailscale"},{label:"websockets",permalink:"/blog/tags/websockets"},{label:"lambda",permalink:"/blog/tags/lambda"},{label:"extension",permalink:"/blog/tags/extension"},{label:"container",permalink:"/blog/tags/container"}],readingTime:3.335,hasTruncateMarker:!0,authors:[{name:"Ken Collins",title:"Principal Engineer & Cloud Architect",url:"https://dev.to/metaskills",imageURL:"https://github.com/metaskills.png",key:"kcollins"}],frontMatter:{slug:"tailscale-extension-for-lambda-containers",title:"Using Tailscale on Lambda for a Live Development Proxy",authors:["kcollins"],tags:["tailscale","websockets","lambda","extension","container"]},prevItem:{title:"The Elusive Lambda Console; A Specification Proposal.",permalink:"/blog/lambda-console-a-specification-proposal"},nextItem:{title:"Welcome Lamby v4!",permalink:"/blog/welcome-to-lamby-v4"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lamby.cloud/img/blog/tailscale/header.png",alt:"Using Tailscale on Lambda for a Live Development Proxy"})),(0,r.kt)("p",null,"\u26a0\ufe0f DISCLAIMER: In no way am I advocating for the use of live proxies as a normal way to develop against cloud resources. However in some edge cases, such as developing a new system, live dev proxies or the general use of Tailscale in Lambda could be useful."))}m.isMDXComponent=!0}}]);
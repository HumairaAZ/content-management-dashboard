(this["webpackJsonpcontent-management-dashboard"]=this["webpackJsonpcontent-management-dashboard"]||[]).push([[0],{127:function(e,n,t){},137:function(e,n,t){"use strict";t.r(n);var a,c=t(0),r=t.n(c),s=t(16),i=t.n(s),o=(t(96),t(106)),l=t(19),j=t(194),d=t(195),b=t(97),m=(t(127),t(203)),h=t(209),u=t(181),O=t(185),x=t(210),g=t(188),p=t(212),v=t(204),f=t(213),k=t(189),y=t(190),C=t(191),S=t(192),w=t(207),B=t(193),N=t(141),W=t(206),E=t(201),L=t(9);const M=Object(m.a)(a||(a=Object(b.a)(["\n  {\n    pokemons(first: 151) {\n      id\n      number\n      name\n      image\n      classification\n      types\n    }\n  }\n"])));var A=function(){const{loading:e,error:n,data:t}=Object(h.a)(M),[a,r]=Object(c.useState)(""),[s,i]=Object(c.useState)("number"),[o,l]=Object(c.useState)(1),[j,d]=Object(c.useState)(null);if(e)return Object(L.jsx)(u.a,{});if(n)return Object(L.jsx)("p",{children:"Error :("});const b=t.pokemons.filter((e=>e.name.toLowerCase().includes(a.toLowerCase()))).sort(((e,n)=>"name"===s?e.name.localeCompare(n.name):e.number-n.number)),m=b.slice(20*(o-1),20*o);return Object(L.jsxs)("div",{className:"dashboard",children:[Object(L.jsx)(O.a,{variant:"h4",gutterBottom:!0,children:"Content Management Dashboard"}),Object(L.jsx)(x.a,{label:"Search Pok\xe9mon",variant:"outlined",fullWidth:!0,margin:"normal",onChange:e=>r(e.target.value)}),Object(L.jsxs)(g.a,{variant:"outlined",fullWidth:!0,margin:"normal",children:[Object(L.jsx)(p.a,{children:"Sort By"}),Object(L.jsxs)(v.a,{value:s,onChange:e=>i(e.target.value),label:"Sort By",children:[Object(L.jsx)(f.a,{value:"number",children:"Number"}),Object(L.jsx)(f.a,{value:"name",children:"Name"})]})]}),Object(L.jsx)(k.a,{container:!0,spacing:3,children:m.map((e=>Object(L.jsx)(k.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(L.jsx)(E.a.div,{whileHover:{scale:1.1},children:Object(L.jsxs)(y.a,{onClick:()=>(e=>{d(e)})(e),children:[Object(L.jsx)(C.a,{component:"img",alt:e.name,height:"140",image:e.image,title:e.name,loading:"lazy"}),Object(L.jsxs)(S.a,{children:[Object(L.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(L.jsxs)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:["#",e.number]})]})]})})},e.id)))}),Object(L.jsx)(W.a,{count:Math.ceil(b.length/20),page:o,onChange:(e,n)=>l(n)}),j&&Object(L.jsx)(w.a,{open:!!j,onClose:()=>{d(null)},closeAfterTransition:!0,BackdropComponent:B.a,BackdropProps:{timeout:500},children:Object(L.jsx)(N.a,{in:!!j,children:Object(L.jsxs)("div",{className:"modal-content",children:[Object(L.jsx)(O.a,{variant:"h4",gutterBottom:!0,children:j.name}),Object(L.jsxs)(O.a,{variant:"body1",children:["Number: ",j.number]}),Object(L.jsxs)(O.a,{variant:"body1",children:["Classification: ",j.classification]}),Object(L.jsxs)(O.a,{variant:"body1",children:["Types: ",j.types.join(", ")]}),Object(L.jsx)("img",{src:j.image,alt:j.name})]})})})]})};var J=function(){return Object(L.jsxs)(o.a,{basename:"/content-management-dashboard",children:[Object(L.jsx)(j.a,{}),Object(L.jsx)(d.a,{children:Object(L.jsx)("div",{className:"App",children:Object(L.jsx)(l.c,{children:Object(L.jsx)(l.a,{path:"/",exact:!0,component:A})})})})]})},P=t(202),T=t(205),q=t(200);const z=new P.a({uri:"https://graphql-pokemon2.vercel.app/",cache:new T.a});"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((e=>{console.log("SW registered: ",e)})).catch((e=>{console.log("SW registration failed: ",e)}))})),i.a.render(Object(L.jsx)(q.a,{client:z,children:Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(J,{})})}),document.getElementById("root"))},96:function(e,n,t){}},[[137,1,2]]]);
//# sourceMappingURL=main.915d9fb1.chunk.js.map
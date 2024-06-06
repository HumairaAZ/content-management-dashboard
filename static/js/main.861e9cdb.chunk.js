(this["webpackJsonpcontent-management-dashboard"]=this["webpackJsonpcontent-management-dashboard"]||[]).push([[0],{127:function(e,a,n){},137:function(e,a,n){"use strict";n.r(a);var t,c=n(0),r=n.n(c),s=n(16),i=n.n(s),o=(n(96),n(106)),l=n(19),j=n(194),d=n(195),b=n(97),h=(n(127),n(203)),m=n(209),u=n(181),O=n(185),x=n(210),g=n(188),v=n(212),p=n(204),f=n(213),y=n(189),k=n(190),C=n(191),S=n(192),w=n(207),W=n(193),B=n(141),N=n(206),F=n(201),P=n(9);const T=Object(h.a)(t||(t=Object(b.a)(["\n  {\n    pokemons(first: 151) {\n      id\n      number\n      name\n      image\n      classification\n      types\n    }\n  }\n"])));var A=function(){const{loading:e,error:a,data:n}=Object(m.a)(T),[t,r]=Object(c.useState)(""),[s,i]=Object(c.useState)("number"),[o,l]=Object(c.useState)(""),[j,d]=Object(c.useState)(1),[b,h]=Object(c.useState)(null);if(e)return Object(P.jsx)(u.a,{});if(a)return Object(P.jsx)("p",{children:"Error :("});const A=n.pokemons.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())&&(!o||e.types.includes(o)))).sort(((e,a)=>"name"===s?e.name.localeCompare(a.name):e.number-a.number)),E=A.slice(20*(j-1),20*j);return Object(P.jsxs)("div",{className:"dashboard",children:[Object(P.jsx)(O.a,{variant:"h4",gutterBottom:!0,children:"Content Management Dashboard"}),Object(P.jsx)(x.a,{label:"Search Pok\xe9mon",variant:"outlined",fullWidth:!0,margin:"normal",onChange:e=>r(e.target.value)}),Object(P.jsxs)(g.a,{variant:"outlined",fullWidth:!0,margin:"normal",children:[Object(P.jsx)(v.a,{children:"Sort By"}),Object(P.jsxs)(p.a,{value:s,onChange:e=>i(e.target.value),label:"Sort By",children:[Object(P.jsx)(f.a,{value:"number",children:"Number"}),Object(P.jsx)(f.a,{value:"name",children:"Name"})]})]}),Object(P.jsxs)(g.a,{variant:"outlined",fullWidth:!0,margin:"normal",children:[Object(P.jsx)(v.a,{children:"Filter by Type"}),Object(P.jsxs)(p.a,{value:o,onChange:e=>l(e.target.value),label:"Filter by Type",children:[Object(P.jsx)(f.a,{value:"",children:"All"}),Object(P.jsx)(f.a,{value:"Grass",children:"Grass"}),Object(P.jsx)(f.a,{value:"Poison",children:"Poison"}),Object(P.jsx)(f.a,{value:"Fire",children:"Fire"}),Object(P.jsx)(f.a,{value:"Water",children:"Water"})]})]}),Object(P.jsx)(y.a,{container:!0,spacing:3,children:E.map((e=>Object(P.jsx)(y.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(P.jsx)(F.a.div,{whileHover:{scale:1.1},onClick:()=>(e=>{h(e)})(e),children:Object(P.jsxs)(k.a,{children:[Object(P.jsx)(C.a,{component:"img",alt:e.name,height:"140",image:e.image,title:e.name,loading:"lazy"}),Object(P.jsxs)(S.a,{children:[Object(P.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(P.jsxs)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:["#",e.number]})]})]})})},e.id)))}),Object(P.jsx)(N.a,{count:Math.ceil(A.length/20),page:j,onChange:(e,a)=>d(a)}),b&&Object(P.jsx)(w.a,{open:!!b,onClose:()=>{h(null)},closeAfterTransition:!0,BackdropComponent:W.a,BackdropProps:{timeout:500},children:Object(P.jsx)(B.a,{in:!!b,children:Object(P.jsxs)("div",{className:"modal-content",children:[Object(P.jsx)(O.a,{variant:"h4",gutterBottom:!0,children:b.name}),Object(P.jsxs)(O.a,{variant:"body1",children:["Number: ",b.number]}),Object(P.jsxs)(O.a,{variant:"body1",children:["Classification: ",b.classification]}),Object(P.jsxs)(O.a,{variant:"body1",children:["Types: ",b.types.join(", ")]}),Object(P.jsx)("img",{src:b.image,alt:b.name})]})})})]})};var E=function(){return Object(P.jsxs)(o.a,{basename:"/content-management-dashboard",children:[Object(P.jsx)(j.a,{}),Object(P.jsx)(d.a,{children:Object(P.jsx)("div",{className:"App",children:Object(P.jsx)(l.c,{children:Object(P.jsx)(l.a,{path:"/",exact:!0,component:A})})})})]})},L=n(202),M=n(205),G=n(200);const J=new L.a({uri:"https://graphql-pokemon2.vercel.app/",cache:new M.a});"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((e=>{console.log("SW registered: ",e)})).catch((e=>{console.log("SW registration failed: ",e)}))})),i.a.render(Object(P.jsx)(G.a,{client:J,children:Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(E,{})})}),document.getElementById("root"))},96:function(e,a,n){}},[[137,1,2]]]);
//# sourceMappingURL=main.861e9cdb.chunk.js.map
(this["webpackJsonpcontent-management-dashboard"]=this["webpackJsonpcontent-management-dashboard"]||[]).push([[0],{50:function(e,n,c){},69:function(e,n,c){},75:function(e,n,c){"use strict";c.r(n);var t,a=c(3),s=c.n(a),r=c(52),o=c.n(r),i=(c(50),c(57)),d=c(9),j=c(53),b=(c(69),c(90)),m=c(92),h=c(11);const l=Object(b.a)(t||(t=Object(j.a)(["\n  {\n    pokemons(first: 10) {\n      id\n      number\n      name\n      image\n    }\n  }\n"])));var p=function(){const{loading:e,error:n,data:c}=Object(m.a)(l);return e?Object(h.jsx)("p",{children:"Loading..."}):n?Object(h.jsx)("p",{children:"Error :("}):Object(h.jsxs)("div",{className:"dashboard",children:[Object(h.jsx)("h1",{children:"Content Management Dashboard"}),Object(h.jsx)("div",{className:"pokemon-list",children:c.pokemons.map((e=>Object(h.jsxs)("div",{className:"pokemon-card",children:[Object(h.jsx)("img",{src:e.image,alt:e.name}),Object(h.jsx)("p",{children:e.name})]},e.id)))})]})};var O=function(){return Object(h.jsx)(i.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(d.c,{children:Object(h.jsx)(d.a,{path:"/",exact:!0,component:p})})})})},x=c(89),u=c(91),g=c(88);const v=new x.a({uri:"https://graphql-pokemon2.vercel.app/",cache:new u.a});o.a.render(Object(h.jsx)(g.a,{client:v,children:Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.3351d165.chunk.js.map
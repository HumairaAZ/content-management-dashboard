(this["webpackJsonpcontent-management-dashboard"]=this["webpackJsonpcontent-management-dashboard"]||[]).push([[0],{50:function(e,n,a){},69:function(e,n,a){},75:function(e,n,a){"use strict";a.r(n);var t,c=a(3),s=a.n(c),r=a(52),o=a.n(r),i=(a(50),a(57)),d=a(9),j=a(53),m=(a(69),a(90)),b=a(92),h=a(11);const l=Object(m.a)(t||(t=Object(j.a)(["\n  {\n    pokemons(first: 10) {\n      id\n      number\n      name\n      image\n    }\n  }\n"])));var p=function(){const{loading:e,error:n,data:a}=Object(b.a)(l);return e?Object(h.jsx)("p",{children:"Loading..."}):n?Object(h.jsx)("p",{children:"Error :("}):Object(h.jsxs)("div",{className:"dashboard",children:[Object(h.jsx)("h1",{children:"Content Management Dashboard"}),Object(h.jsx)("div",{className:"pokemon-list",children:a.pokemons.map((e=>Object(h.jsxs)("div",{className:"pokemon-card",children:[Object(h.jsx)("img",{src:e.image,alt:e.name}),Object(h.jsx)("p",{children:e.name})]},e.id)))})]})};var O=function(){return Object(h.jsx)(i.a,{basename:"/content-management-dashboard",children:Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(d.c,{children:Object(h.jsx)(d.a,{path:"/",exact:!0,component:p})})})})},x=a(89),u=a(91),g=a(88);const v=new x.a({uri:"https://graphql-pokemon2.vercel.app/",cache:new u.a});o.a.render(Object(h.jsx)(g.a,{client:v,children:Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.bbe2556f.chunk.js.map
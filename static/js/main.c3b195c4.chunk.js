(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),i=(t(11),t(2)),s=t.n(i),o=t(1),m=(t(13),t(5)),u=t.n(m),d=(t(14),function(e){var a=e.article,t=a.title,n=a.urlToImage,r=a.description,l=a.author,i=a.url;return c.a.createElement("div",{className:"card-wrapper"},c.a.createElement("div",{className:"card-main"},c.a.createElement("div",{className:"card-title"},c.a.createElement("p",null,t)),c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:n,alt:t})),c.a.createElement("div",{className:"card-description"},c.a.createElement("p",null,r),c.a.createElement("h5",null,l))),c.a.createElement("div",{className:"card-btn-link"},c.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"Seguir leyendo")))}),p=(t(15),function(e){var a=e.isLoading,t=e.category;return c.a.createElement("div",{className:"header-wrapper"},c.a.createElement("div",{className:"ico-sideNav"},c.a.createElement("div",{onClick:function(a){e.onSideNav(!0)},className:"ico"})),c.a.createElement("div",{className:"logo"}),a?c.a.createElement("div",{className:"spinner-wrapper"},c.a.createElement("span",{className:"spinner"})):"",c.a.createElement("span",null),c.a.createElement("div",{className:"category-ico"},t))}),E=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),m=i[0],E=i[1],v=Object(n.useState)("general"),N=Object(o.a)(v,2),f=N[0],g=N[1],b=Object(n.useState)(!1),y=Object(o.a)(b,2),h=y[0],k=y[1];Object(n.useEffect)((function(){k(!0);!function(){var e,a;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.awrap(fetch("https://newsapi.org/v2/top-headlines?country=co&category=".concat(f,"&apiKey=0e900685dbcb4a72bdcfbcdf457bcf29")));case 3:return e=t.sent,t.next=6,s.a.awrap(e.json());case 6:a=t.sent,k(!1),r(a.articles),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),alert("Error Fetching");case 14:case"end":return t.stop()}}),null,null,[[0,11]])}()}),[f]);return console.log(t),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:m?"overlay":""},c.a.createElement("div",{className:m?"sideNav active":"sideNav"},c.a.createElement("div",{onClick:function(){E(!1)},className:"close-sideNav"},c.a.createElement("div",{className:"ico-close"}),c.a.createElement("div",{className:"logo-sideNav"})),c.a.createElement("div",{className:"category-wrapper"},c.a.createElement("h5",null,"CATEGORIAS"),c.a.createElement("ul",{onClick:function(){return E(!1)}},c.a.createElement("li",{className:"category-item",onClick:function(){return g("general")}},"General"),c.a.createElement("li",{className:"category-item",onClick:function(){return g("business")}},"Negocios"),c.a.createElement("li",{className:"category-item",onClick:function(){return g("science")}},"Ciencia"),c.a.createElement("li",{className:"category-item",onClick:function(){return g("technology")}},"Tecnolog\xeda"),c.a.createElement("li",{className:"category-item",onClick:function(){return g("health")}},"Salud"),c.a.createElement("li",{className:"category-item",onClick:function(){return g("entertainment")}},"Entretenimiento"))))),c.a.createElement(p,{onSideNav:function(e){e&&E(!0)},isLoading:h,category:f}),c.a.createElement("div",{className:"App-card-wrapper"},t.map((function(e){return c.a.createElement(d,{key:u()(),article:e})}))))};l.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.c3b195c4.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-".concat(e.mode," navbar-").concat(e.mode," text-").concat("light"===e.mode?"dark":"light")},l.a.createElement("div",{className:"container-fluid "},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))))),l.a.createElement("div",{className:"form-check form-switch"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))}function m(e){var t=Object(n.useState)("Enter Text here!"),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),m=Object(o.a)(s,2),i=m[0],u=m[1],d="";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h2",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white"},value:r,className:"form-control",onChange:function(e){c(e.target.value)},id:"myBox",rows:"5"})),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Text transform to uppercase","success")}},"Convert"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){c(""),e.showAlert("Text cleard","success")}},"Clear"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){d="";for(var t=r.split(" "),a=0;a<t.length;a++)t[a].includes("@")&&(d+=t[a],d+=" ");""===d?d="No Email found!":e.showAlert("Email(s) has been extracted","success"),u(d)}},"Extract")),l.a.createElement("div",{style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h1",null,"Your text Summary"),l.a.createElement("p",null,r.split(" ").length," words ",r.length," chracters"),l.a.createElement("p",null,.008*r.split(" ").length," Minutes required to read"),l.a.createElement("h4",null,"Email(s) in text"),l.a.createElement("p",{style:{color:"red"}},i)))}function i(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,e.alert.type)," ",e.alert.msg)}var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],h=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},3e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtil",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="black",h("Dark mode has been Enabled","success")):(r("light"),document.body.style.backgroundColor="white",h("Light mode has been Enabled","success"))}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container"},l.a.createElement(m,{heading:"Enter text to convert",mode:a,showAlert:h})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.51fa026c.chunk.js.map
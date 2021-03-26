(this["webpackJsonpgenshin-average-calculator"]=this["webpackJsonpgenshin-average-calculator"]||[]).push([[0],{10:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var c=a(1),l=a.n(c),n=a(4),s=a.n(n),r=(a(9),a(2));a(10),a(11);var i=function(e,t,a,c,l){return 0===l?l++:l/=100,e*(1+(t/=100)*(a/=100))*(c=1+c/100)*l},o=a(0);var d=function(){var e=l.a.useState(0),t=Object(r.a)(e,2),a=t[0],c=t[1],n=l.a.useState(1e3),s=Object(r.a)(n,2),d=s[0],u=s[1],m=l.a.useState(50),j=Object(r.a)(m,2),b=j[0],h=j[1],f=l.a.useState(100),x=Object(r.a)(f,2),g=x[0],p=x[1],O=l.a.useState(0),v=Object(r.a)(O,2),N=v[0],k=v[1],C=l.a.useState(100),y=Object(r.a)(C,2),I=y[0],w=y[1],S=l.a.useState([]),A=Object(r.a)(S,2),B=A[0],D=A[1],E=l.a.useState(""),F=Object(r.a)(E,2),P=F[0],L=F[1];l.a.useEffect((function(){var e=i(d,b,g,N,I).toFixed(1);c(e)}),[b,a,g,N,d]);var M=function(){var e={final:a,desc:""===P?"No description":P,metric:"Attack: ".concat(d,", Crit%: ").concat(b,", CritDmg%: ").concat(g,", Elem%:").concat(g,", Mod: ").concat(I)};D(B.concat(e)),L("")};return Object(o.jsxs)("div",{className:"justify-content-center align-items-center min-vh-100 bg-light d-flex flex-column",children:[Object(o.jsx)("div",{className:"py-4 min-vw-100 text-center text-light bg-dark",children:Object(o.jsx)("h1",{className:"display-4",children:"Genshin Impact: Simple Average Calculator"})}),Object(o.jsxs)("div",{className:"d-flex flex-column",children:[Object(o.jsxs)("div",{className:"p-2 d-flex justify-content-center",children:[Object(o.jsxs)("form",{className:"p-4",children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"attack",className:"font-weight-bold",children:"Attack"}),Object(o.jsx)("input",{className:"form-control",id:"attackInput",placeholder:"Input total Attack",value:d,onChange:function(e){u(e.target.value)}}),Object(o.jsx)("small",{className:"form-text text-muted",id:"attackInput",children:"Your total attack, which is displayed as Base Atk + Atk Bonus at the details screen."})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"attack",className:"font-weight-bold",children:"Crit%"}),Object(o.jsx)("input",{className:"form-control",id:"critInput",placeholder:"Input crit rate",value:b,onChange:function(e){h(e.target.value)}}),Object(o.jsx)("small",{className:"form-text text-muted",id:"critInput",children:"Critical rate percentage."})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"attack",className:"font-weight-bold",children:"CritDmg%"}),Object(o.jsx)("input",{className:"form-control",id:"critDmgInput",placeholder:"Input crit damage",value:g,onChange:function(e){p(e.target.value)}}),Object(o.jsx)("small",{className:"form-text text-muted",id:"critDmgInput",children:"Critical damage percentage."})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"attack",className:"font-weight-bold",children:"Ele%"}),Object(o.jsx)("input",{className:"form-control",id:"eleInput",placeholder:"Input elemental bonus damage",value:N,onChange:function(e){k(e.target.value)}}),Object(o.jsx)("small",{className:"form-text text-muted",id:"eleInput",children:"Elemental damage bonus (Electro, Pyro, etc.)."})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"attack",className:"font-weight-bold",children:"Skill Modifier (WiP)"}),Object(o.jsx)("input",{disabled:!0,className:"form-control",id:"modifier",placeholder:"Input skill modifier",value:I,onChange:function(e){w(e.target.value)}}),Object(o.jsx)("small",{className:"form-text text-muted",id:"eleInput",children:"Your skill modifier."})]})]}),Object(o.jsxs)("div",{className:"p-4 d-flex justify-content-center flex-column w-50",children:[Object(o.jsxs)("div",{className:"mb-5 text-center",children:[Object(o.jsx)("h5",{className:"",children:"Average final damage:"}),Object(o.jsx)("h3",{className:"text-dark display-3",children:a})]}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"form-group text-center",children:[Object(o.jsx)("input",{id:"descriptionInput",className:"form-control",placeholder:"Log description/alias",value:P,onChange:function(e){L(e.target.value)},onKeyPress:function(e){13===(e.keyCode||e.which)&&(e.preventDefault(),M())}}),Object(o.jsx)("small",{className:"text-dark",children:"Save current values with description/alias attached to the log."})]}),Object(o.jsxs)("div",{className:"form-group d-flex justify-content-center",children:[Object(o.jsx)("button",{id:"pushBtn",type:"button",className:"btn btn-dark d-block mx-2",onClick:M,children:"Add to logs"}),Object(o.jsx)("button",{id:"clearBtn",type:"button",className:"btn btn-dark d-block mx-2",onClick:function(){D([])},children:"Clear log"})]})]})]})]}),Object(o.jsxs)("div",{className:"pb-3 d-flex justify-content-center align-items-center flex-column",children:[Object(o.jsx)("h5",{className:"d-flex align-self-start",children:"Logs:"}),Object(o.jsx)("div",{className:"p-2 border overflow-auto",style:{height:"25vh",backgroundColor:"#efefef",width:"80vw"},children:Object(o.jsx)("pre",{children:B.map((function(e){return function(e){return Object(o.jsxs)("code",{children:[JSON.stringify(e),Object(o.jsx)("br",{})]})}(e)}))})})]})]}),Object(o.jsx)("small",{className:"pb-2",children:"Features to be added: Tidier logs, elemental mastery and reactions, Noblesse/Gambler, Mobile Polish"})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,c=t.getFID,l=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),l(e),n(e),s(e)}))};s.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),u()},9:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.f2c69298.chunk.js.map
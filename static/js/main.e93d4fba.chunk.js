(this["webpackJsonppokedex-deploy"]=this["webpackJsonppokedex-deploy"]||[]).push([[0],{83:function(n,e,t){},94:function(n,e,t){},96:function(n,e,t){"use strict";t.r(e);var a=t(25),r=t(2),c=t(75),o=t.n(c),i=t(5),b=(t(83),t(18)),u=t(27),l=t(11),s=t(3),m=t(33);function d(){var n=Object(i.a)(["\n    query pokemon($name: String!) {\n        pokemon(name: $name) {\n            id\n            name\n            abilities {\n                ability {\n                    name\n                }\n            }\n            moves {\n                move {\n                    name\n                }\n            }\n            types {\n                type {\n                    name\n                }\n            }\n            sprites {\n                front_default,\n                back_default\n            }\n            message\n            status\n        }\n    }\n"]);return d=function(){return n},n}function p(){var n=Object(i.a)(["\n    query pokemons($limit: Int, $offset: Int) {\n        pokemons(limit: $limit, offset: $offset) {\n            nextOffset\n            prevOffset\n            results {\n                url\n                name\n                image\n            }\n        }\n    }\n"]);return p=function(){return n},n}var O=Object(b.gql)(p()),j=Object(b.gql)(d()),f=t(19);function h(){var n=Object(i.a)(["\n        width: ",";\n        text-align: ",";\n        display: inline-block;\n        vertical-align: top;\n    "]);return h=function(){return n},n}function g(){var n=Object(i.a)(["\n        height: 100%;\n    "]);return g=function(){return n},n}function v(){var n=Object(i.a)(["\n        background-color: #e6e6e6;\n        border-radius: 15px;\n        padding: 3px;\n        color: black;\n        font-size: 20px;\n        text-decoration: none;\n    "]);return v=function(){return n},n}var x=function(n){var e=0,t=JSON.parse(localStorage.getItem("myPokemon"));if(t)t.map((function(t){t[0]===n.pokemon.name&&(e+=1)}));var a=n.pokemon.name.charAt(0).toUpperCase()+n.pokemon.name.slice(1),r=Object(s.a)(v()),c=Object(s.a)(g()),o=Object(f.a)("div")(h(),(function(n){return n.left?"40%":"60%"}),(function(n){return n.left?"center":""}));return Object(s.b)("div",{css:r},Object(s.b)(o,{left:!0},Object(s.b)("img",{css:c,src:n.pokemon.image,alt:n.pokemon.name})),Object(s.b)(o,{right:!0},Object(s.b)("p",null,a),Object(s.b)("p",null,"Owned : ",e)))};function k(){var n=Object(i.a)(["\n        background-color: red;\n        border-radius: 5px;\n        color: white;\n        width: ","px;\n        height: ","px;\n        box-shadow: 2px 3px blue;\n    "]);return k=function(){return n},n}var w=function(n){var e=f.a.button(k(),n.width,n.height);return Object(a.jsx)(e,{onClick:function(){return n.handleChange?n.handleChange():void 0},children:n.name})};function y(){var n=Object(i.a)(["\n        width: 95%;\n        margin: 0 auto;\n        padding: 5px;\n    "]);return y=function(){return n},n}function C(){var n=Object(i.a)(["\n        text-align: center;\n        margin-bottom: 5px;\n    "]);return C=function(){return n},n}function S(){var n=Object(i.a)(["\n        width: 100%;\n    "]);return S=function(){return n},n}var I=function(){var n=Object(s.a)(S()),e=Object(s.a)(C()),t=Object(s.a)(y()),a=Object(r.useState)(6),c=Object(m.a)(a,1)[0],o=Object(r.useState)(0),i=Object(m.a)(o,2),l=i[0],d=i[1],p=0,j=0,f={limit:c,offset:l},h=Object(b.useQuery)(O,{variables:f}),g=h.loading,v=h.error,k=h.data;if(g)return"Loading...";if(v)return"Error! ".concat(v.message);k&&(p=k.pokemons.prevOffset,j=k.pokemons.nextOffset);var I=k.pokemons.results.map((function(n){return Object(s.b)("div",{css:t},Object(s.b)(u.b,{to:"/detail/".concat(n.name),style:{textDecoration:"none"}},Object(s.b)(x,{key:n.name,pokemon:n})))}));return Object(s.b)("div",{css:n},Object(s.b)("div",{css:e},Object(s.b)(u.b,{to:"/pokemon-list"},Object(s.b)(w,{name:"My Pokemon",width:"120",height:"40"}))),I,Object(s.b)("div",{css:e},Object(s.b)(w,{name:"<",width:"120",height:"40",handleChange:function(n){"clickaway"!==n&&d(p)}}),"\u2003",Object(s.b)(w,{name:">",width:"120",height:"40",handleChange:function(n){"clickaway"!==n&&d(j)}})))};function N(){var n=Object(i.a)(["\n        display: inline-block;\n        vertical-align: top;\n        background-color: #919191;\n        border-radius: 5px;\n        margin-right: 5px;\n        margin-bottom: 5px;\n        padding: 5px;\n        color: white;\n    "]);return N=function(){return n},n}function P(){var n=Object(i.a)(["\n        padding: 20px;\n        background-color: #e6e6e6;\n        border-radius: 45px 45px 0px 0px;\n    "]);return P=function(){return n},n}function J(){var n=Object(i.a)(["\n        width: 40%;\n        @media (max-width: 800px) {\n          width: 45%;\n        }\n    "]);return J=function(){return n},n}function q(){var n=Object(i.a)(["\n        text-align: center;\n    "]);return q=function(){return n},n}function A(){var n=Object(i.a)(["\n        bottom: 0px;\n    "]);return A=function(){return n},n}var M=function(n){var e=Object(s.a)(A()),t=Object(s.a)(q()),a=Object(s.a)(J()),r=Object(s.a)(P()),c=Object(s.a)(N()),o=n.pokemon.types.map((function(n){return Object(s.b)("div",{css:c},n.type.name)})),i=n.pokemon.moves.map((function(n){return Object(s.b)("div",{css:c},n.move.name)}));return Object(s.b)("div",{css:e},Object(s.b)("div",{css:t},Object(s.b)("img",{css:a,src:n.pokemon.sprites.front_default,alt:n.pokemon.name})),Object(s.b)("div",{css:r},Object(s.b)("p",null,"Types : "),o,Object(s.b)("p",null,"Moves : "),i))};t(94);var $=function(n){var e=n.show?"modal display-block":"modal display-none";return Object(a.jsx)("div",{className:e,children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsx)("span",{className:"close",onClick:n.handleClose,children:"\xd7"}),Object(a.jsx)("p",{children:n.headerTitle}),Object(a.jsx)("br",{}),n.children]})})};function E(){var n=Object(i.a)(["\n        text-align: center;\n        margin-top: 15px;\n        margin-bottom: 10px;\n    "]);return E=function(){return n},n}function T(){var n=Object(i.a)(["\n        text-align: center;\n    "]);return T=function(){return n},n}function _(){var n=Object(i.a)(["\n        width: 95%;\n        margin: 0 auto;\n        padding: 5px;\n    "]);return _=function(){return n},n}var z=function(n){var e=n.match,t=Object(s.a)(_()),a=Object(f.a)("div")(T()),c=Object(f.a)("div")(E()),o=Object(r.useState)(!1),i=Object(m.a)(o,2),l=i[0],d=i[1],p=Object(r.useState)(""),O=Object(m.a)(p,2),h=O[0],g=O[1],v={name:e.params.name},x=Object(b.useQuery)(j,{variables:v}),k=x.loading,y=x.error,C=x.data;return k?"Loading...":y?"Error! ".concat(y.message):Object(s.b)("div",{css:t},Object(s.b)(a,null,Object(s.b)(u.b,{to:"/"},Object(s.b)(w,{name:"Home",width:"120",height:"40"})),"\u2003",Object(s.b)(u.b,{to:"/pokemon-list"},Object(s.b)(w,{name:"My Pokemon",width:"120",height:"40"}))),Object(s.b)(M,{key:C.pokemon,pokemon:C.pokemon}),Object(s.b)(c,null,Object(s.b)(w,{name:"Catch Me",width:"120",height:"40",handleChange:function(){Math.random()>.5?(d(!0),alert("Catch Success! Please Input Nickname to Your Pokemon!")):alert("Catch Failed! Please Try Aain!")}})),Object(s.b)($,{show:l,handleClose:function(){d(!1)},headerTitle:"Input Nickname"},Object(s.b)("input",{placeholder:"Input Nickname",onChange:function(n){g(n.target.value)}}),Object(s.b)("button",{onClick:function(){var n=0,t=[],a=JSON.parse(localStorage.getItem("myPokemon"));null===a?t.push([e.params.name,h]):(a.map((function(t){t[1]===h&&t[0]===e.params.name&&(n=1)})),a.push([e.params.name,h]),t=a),1===n?alert("Nickname Already Exist!"):(localStorage.setItem("myPokemon",JSON.stringify(t)),d(!1),alert("Catch Success!"))}},"Submit")))};function L(){var n=Object(i.a)(["\n        background-color: red;\n        border-radius: 5px;\n        color: white;\n        width: 90%;\n        box-shadow: 1px 1px blue;\n    "]);return L=function(){return n},n}function Q(){var n=Object(i.a)(["\n        font-size: 15px;\n        font-style: italic;\n    "]);return Q=function(){return n},n}function D(){var n=Object(i.a)(["\n        font-size: 25px;\n    "]);return D=function(){return n},n}function H(){var n=Object(i.a)(["\n        width: 70%;\n    "]);return H=function(){return n},n}function R(){var n=Object(i.a)(["\n        text-align: center;\n        padding: 10px;\n        background-color: #e6e6e6;\n        width: 28%;\n        border-radius: 15px;\n        display: inline-block;\n        vertical-align: top;\n        margin-right: 10px;\n        margin-bottom: 10px;\n        word-wrap: break-word;\n        @media (max-width: 1200px) {\n          width: 40%;\n        }\n        @media (max-width: 800px) {\n          width: 40%;\n        }\n        @media (max-width: 600px) {\n          width: 80%;\n        }\n    "]);return R=function(){return n},n}var U=function(n){var e=Object(s.a)(R()),t=Object(s.a)(H()),a=Object(f.a)("div")(D()),r=Object(f.a)("div")(Q()),c=Object(f.a)("button")(L()),o={name:n.name},i=Object(b.useQuery)(j,{variables:o}),u=i.loading,l=i.error,m=i.data;if(u)return"Loading...";if(l)return"Error! ".concat(l.message);var d=m.pokemon.name.charAt(0).toUpperCase()+m.pokemon.name.slice(1);return Object(s.b)("div",{css:e},Object(s.b)("img",{css:t,src:m.pokemon.sprites.front_default,alt:m.pokemon.name}),Object(s.b)(a,null,d),Object(s.b)(r,null,n.nickname),Object(s.b)(c,{onClick:function(){return n.handleChange?n.handleChange():void 0}},"Release"))};function B(){var n=Object(i.a)(["\n        text-align: center;\n        width: 50%;\n        border-radius: 15px;\n        border: 1px solid black;\n    "]);return B=function(){return n},n}function F(){var n=Object(i.a)(["\n        text-align: center;\n    "]);return F=function(){return n},n}function Y(){var n=Object(i.a)(["\n        width: 95%;\n        margin: 0 auto;\n        padding: 5px;\n    "]);return Y=function(){return n},n}function G(){var n=Object(i.a)(["\n        text-align: center;\n        margin-bottom: 15px;\n    "]);return G=function(){return n},n}var K=function(n){n.match;var e=Object(s.a)(G()),t=Object(s.a)(Y()),a=Object(s.a)(F()),c=(Object(f.a)("div")(B()),JSON.parse(localStorage.getItem("myPokemon"))),o=[];c&&(o=c);var i=Object(r.useState)(o),b=Object(m.a)(i,2),l=b[0],d=b[1];function p(n,e){var t=-1;c.map((function(a,r){a[0]===n&&a[1]===e&&(t=r)})),c.splice(t,1),localStorage.setItem("myPokemon",JSON.stringify(c)),d(JSON.parse(localStorage.getItem("myPokemon")))}l.map((function(n,e){return Object(s.b)("tr",null,Object(s.b)("td",null,e+1),Object(s.b)("td",null,n[0]),Object(s.b)("td",null,n[1]),Object(s.b)("td",null,Object(s.b)("button",{onClick:function(){p(n[0],n[1])}},"Delete")))}));var O=l.map((function(n){return Object(s.b)(U,{name:n[0],nickname:n[1],handleChange:function(){return p(n[0],n[1])}})}));return Object(s.b)("div",{css:t},Object(s.b)("div",{css:e},Object(s.b)(u.b,{to:"/"},Object(s.b)(w,{name:"Home",width:"120",height:"40"}))),Object(s.b)("div",{css:a},O))};function V(){var n=Object(i.a)(["\n    font-family:'Roboto', sans-serif;\n    width: 50%;\n    margin-left: 25%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    @media (max-width: 800px) {\n      width: 100%;\n      margin-left: 0%;\n    }\n  "]);return V=function(){return n},n}var W=function(){var n=new b.ApolloClient({uri:"https://graphql-pokeapi.vercel.app/api/graphql",cache:new b.InMemoryCache}),e=Object(s.a)(V());return Object(s.b)(b.ApolloProvider,{client:n},Object(s.b)(u.a,null,Object(s.b)("div",{css:e},Object(s.b)(l.c,null,Object(s.b)(l.a,{path:"/",exact:!0,component:I}),Object(s.b)(l.a,{path:"/detail/:name",component:z}),Object(s.b)(l.a,{path:"/pokemon-list/",component:K})))))};o.a.render(Object(a.jsx)(W,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.e93d4fba.chunk.js.map
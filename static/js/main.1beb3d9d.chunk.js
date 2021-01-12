(this["webpackJsonppokedex-deploy"]=this["webpackJsonppokedex-deploy"]||[]).push([[0],{83:function(e,n,t){},94:function(e,n,t){},96:function(e,n,t){"use strict";t.r(n);var c=t(4),a=t(2),o=t(75),r=t.n(o),i=t(16),s=(t(83),t(24)),l=t(26),b=t(11),m=t(5),u=t(32);function j(){var e=Object(i.a)(["\n    query pokemon($name: String!) {\n        pokemon(name: $name) {\n            id\n            name\n            abilities {\n                ability {\n                    name\n                }\n            }\n            moves {\n                move {\n                    name\n                }\n            }\n            types {\n                type {\n                    name\n                }\n            }\n            sprites {\n                front_default\n            }\n            message\n            status\n        }\n    }\n"]);return j=function(){return e},e}function d(){var e=Object(i.a)(["\n    query pokemons($limit: Int, $offset: Int) {\n        pokemons(limit: $limit, offset: $offset) {\n            nextOffset\n            prevOffset\n            results {\n                url\n                name\n                image\n            }\n        }\n    }\n"]);return d=function(){return e},e}var p=Object(s.gql)(d()),O=Object(s.gql)(j()),h=t(50);function f(){var e=Object(i.a)(["\n        width: ",";\n        text-align: ",";\n        display: inline-block;\n        vertical-align: top;\n    "]);return f=function(){return e},e}function x(){var e=Object(i.a)(["\n        height: 100%;\n    "]);return x=function(){return e},e}function g(){var e=Object(i.a)(["\n        font-family:'Roboto', sans-serif;\n        background-color: grey;\n        border-radius: 15px;\n        padding: 3px;\n        color: white;\n        font-size: 20px;\n        text-decoration: none;\n    "]);return g=function(){return e},e}var k=function(e){var n=0,t=JSON.parse(localStorage.getItem("myPokemon"));if(t)t.map((function(t){t[0]===e.pokemon.name&&(n+=1)}));var c=e.pokemon.name.charAt(0).toUpperCase()+e.pokemon.name.slice(1),a=Object(m.a)(g()),o=Object(m.a)(x()),r=Object(h.a)("div")(f(),(function(e){return e.left?"40%":"60%"}),(function(e){return e.left?"center":""}));return Object(m.b)("div",{css:a},Object(m.b)(r,{left:!0},Object(m.b)("img",{css:o,src:e.pokemon.image,alt:e.pokemon.name})),Object(m.b)(r,{right:!0},Object(m.b)("p",null,c),Object(m.b)("p",null,"Owned : ",n)))};function v(){var e=Object(i.a)(["\n        background-color: red;\n        border-radius: 5px;\n        color: white;\n        width: ","px;\n        height: ","px;\n        box-shadow: 2px 3px blue;\n    "]);return v=function(){return e},e}var y=function(e){var n=h.a.button(v(),e.width,e.height);return Object(c.jsx)(n,{onClick:function(){return e.handleChange()},children:e.name})};function w(){var e=Object(i.a)(["\n        width: 95%;\n        margin: 0 auto;\n        padding: 5px;\n    "]);return w=function(){return e},e}function S(){var e=Object(i.a)(["\n        text-align: center;\n        margin-bottom: 5px;\n    "]);return S=function(){return e},e}function C(){var e=Object(i.a)(["\n        width: 100%;\n    "]);return C=function(){return e},e}var N=function(){var e=Object(m.a)(C()),n=Object(m.a)(S()),t=Object(m.a)(w()),c=Object(a.useState)(6),o=Object(u.a)(c,1)[0],r=Object(a.useState)(0),i=Object(u.a)(r,2),b=i[0],j=i[1],d=0,O=0,h={limit:o,offset:b},f=Object(s.useQuery)(p,{variables:h}),x=f.loading,g=f.error,v=f.data;if(x)return"Loading...";if(g)return"Error! ".concat(g.message);v&&(d=v.pokemons.prevOffset,O=v.pokemons.nextOffset);var N=v.pokemons.results.map((function(e){return Object(m.b)("div",{css:t},Object(m.b)(l.b,{to:"/detail/".concat(e.name),style:{textDecoration:"none"}},Object(m.b)(k,{key:e.name,pokemon:e})))}));return Object(m.b)("div",{css:e},Object(m.b)("div",{css:n},Object(m.b)(l.b,{to:"/pokemon-list"},Object(m.b)(y,{name:"My Pokemon",width:"120",height:"40"}))),N,Object(m.b)("div",{css:n},Object(m.b)(y,{name:"<",width:"120",height:"40",handleChange:function(e){"clickaway"!==e&&j(d)}}),"\u2003",Object(m.b)(y,{name:">",width:"120",height:"40",handleChange:function(e){"clickaway"!==e&&j(O)}})))};var I=function(e){return Object(c.jsxs)("div",{className:"pokemon",children:[Object(c.jsx)("div",{className:"pokemon_image",children:Object(c.jsx)("img",{src:e.pokemon.sprites.front_default,alt:e.pokemon.name})}),Object(c.jsx)("div",{className:"pokemon_name",children:Object(c.jsx)("p",{children:e.pokemon.types[0].type.name})})]})};t(94);var P=function(e){var n=e.show?"modal display-block":"modal display-none";return Object(c.jsx)("div",{className:n,children:Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsx)("span",{className:"close",onClick:e.handleClose,children:"\xd7"}),Object(c.jsx)("p",{children:e.headerTitle}),Object(c.jsx)("br",{}),e.children]})})};var J=function(e){var n=e.match,t=Object(a.useState)(!1),o=Object(u.a)(t,2),r=o[0],i=o[1],b=Object(a.useState)(""),m=Object(u.a)(b,2),j=m[0],d=m[1],p={name:n.params.name},h=Object(s.useQuery)(O,{variables:p}),f=h.loading,x=h.error,g=h.data;return f?"Loading...":x?"Error! ".concat(x.message):Object(c.jsxs)("div",{className:"pokemons",children:[Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)("button",{children:"Home"})}),Object(c.jsx)(l.b,{to:"/pokemon-list",children:Object(c.jsx)("button",{children:"My Pokemon"})}),Object(c.jsx)(I,{pokemon:g.pokemon},g.pokemon),Object(c.jsx)("button",{onClick:function(){Math.random()>.5?(i(!0),alert("Catch Success! Please Input Nickname to Your Pokemon!")):alert("Catch Failed! Please Try Aain!")},children:"Catch"}),Object(c.jsxs)(P,{show:r,handleClose:function(){i(!1)},headerTitle:"Input Username",children:[Object(c.jsx)("input",{placeholder:"Input Username",onChange:function(e){d(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){var e=0,t=[],c=JSON.parse(localStorage.getItem("myPokemon"));null===c?t.push([n.params.name,j]):(c.map((function(t){t[1]===j&&t[0]===n.params.name&&(e=1)})),c.push([n.params.name,j]),t=c),1===e?alert("Username Already Exist!"):(localStorage.setItem("myPokemon",JSON.stringify(t)),i(!1),alert("Catch Success!"))},children:"Submit"})]})]})};var q=function(e){e.match;var n=JSON.parse(localStorage.getItem("myPokemon")),t=[];n&&(t=n);var o=Object(a.useState)(t),r=Object(u.a)(o,2),i=r[0],s=r[1],b=i.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t+1}),Object(c.jsx)("td",{children:e[0]}),Object(c.jsx)("td",{children:e[1]}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:function(){!function(e,t){var c=-1;n.map((function(n,a){n[0]===e&&n[1]===t&&(c=a)})),n.splice(c,1),localStorage.setItem("myPokemon",JSON.stringify(n)),s(JSON.parse(localStorage.getItem("myPokemon")))}(e[0],e[1])},children:"Delete"})})]})}));return Object(c.jsxs)("div",{className:"pokemons",children:[Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)("button",{children:"Home"})}),Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Number"}),Object(c.jsx)("td",{children:"Pokemon"}),Object(c.jsx)("td",{children:"Nickname"})]})}),Object(c.jsx)("tbody",{children:b})]})]})};function $(){var e=Object(i.a)(["\n    width: 50%;\n    margin-left: 25%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    @media (max-width: 800px) {\n      width: 100%;\n      margin-left: 0%;\n    }\n  "]);return $=function(){return e},e}var A=function(){var e=new s.ApolloClient({uri:"https://graphql-pokeapi.vercel.app/api/graphql",cache:new s.InMemoryCache}),n=Object(m.a)($());return Object(m.b)(s.ApolloProvider,{client:e},Object(m.b)(l.a,null,Object(m.b)("div",{css:n},Object(m.b)(b.c,null,Object(m.b)(b.a,{path:"/",exact:!0,component:N}),Object(m.b)(b.a,{path:"/detail/:name",component:J}),Object(m.b)(b.a,{path:"/pokemon-list/",component:q})))))};r.a.render(Object(c.jsx)(A,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.1beb3d9d.chunk.js.map
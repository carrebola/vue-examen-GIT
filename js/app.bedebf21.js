(function(){"use strict";var n={858:function(n,r,t){var o=t(963),e=t(252);function a(n,r,t,o,a,c){const s=(0,e.up)("VerMascotas");return(0,e.wg)(),(0,e.j4)(s)}var c=t(577);const s={class:"container"},i=(0,e._)("h1",null,"Mascotas",-1),u={class:"row g-0"},l={class:"col-md-4"},f=["src"],d={class:"col-md-8"},p={class:"card-body"},v={class:"card-title"},m={class:"card-text"};function h(n,r,t,o,a,h){return(0,e.wg)(),(0,e.iD)("div",s,[i,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(a.arrayMascotas.datos,(n=>((0,e.wg)(),(0,e.iD)("div",{key:n.nombre,class:"card mb-3",style:{"max-width":"540px"}},[(0,e._)("div",u,[(0,e._)("div",l,[(0,e._)("img",{src:h.urlImagen(n.imagen),class:"img-fluid rounded-start",alt:""},null,8,f)]),(0,e._)("div",d,[(0,e._)("div",p,[(0,e._)("h5",v,(0,c.zw)(n.nombre),1),(0,e._)("p",m,(0,c.zw)(n.descripción),1)])])])])))),128))])}var g={data(){return{arrayMascotas:[]}},methods:{urlImagen(n){return"https://ejemplo-soc.herokuapp.com/imagenes/"+n},async verMascotas(){console.log("ver mascotas");try{const n=await fetch("https://ejemplo-soc.herokuapp.com/api/mascotas"),r=await n.json();this.arrayMascotas=r}catch(n){console.log(n)}}},computed:{},mounted(){this.verMascotas()}},w=t(744);const b=(0,w.Z)(g,[["render",h]]);var y=b,O={name:"App",components:{VerMascotas:y}};const j=(0,w.Z)(O,[["render",a]]);var _=j;(0,o.ri)(_).mount("#app")}},r={};function t(o){var e=r[o];if(void 0!==e)return e.exports;var a=r[o]={exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(r,o,e,a){if(!o){var c=1/0;for(l=0;l<n.length;l++){o=n[l][0],e=n[l][1],a=n[l][2];for(var s=!0,i=0;i<o.length;i++)(!1&a||c>=a)&&Object.keys(t.O).every((function(n){return t.O[n](o[i])}))?o.splice(i--,1):(s=!1,a<c&&(c=a));if(s){n.splice(l--,1);var u=e();void 0!==u&&(r=u)}}return r}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[o,e,a]}}(),function(){t.d=function(n,r){for(var o in r)t.o(r,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)}}(),function(){var n={143:0};t.O.j=function(r){return 0===n[r]};var r=function(r,o){var e,a,c=o[0],s=o[1],i=o[2],u=0;if(c.some((function(r){return 0!==n[r]}))){for(e in s)t.o(s,e)&&(t.m[e]=s[e]);if(i)var l=i(t)}for(r&&r(o);u<c.length;u++)a=c[u],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(l)},o=self["webpackChunkvue_examen"]=self["webpackChunkvue_examen"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(858)}));o=t.O(o)})();
//# sourceMappingURL=app.bedebf21.js.map
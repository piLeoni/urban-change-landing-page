(function(n){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],r=!0,c=1;c<e.length;c++){var u=e[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),n=i(i.s=e[0]))}return n}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=r,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/urban-change-landing-page/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;o.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},1:function(n,t){},2:function(n,t){},"50b4":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-app",[e("v-main",[e("landing-page")],1)],1)},o=[],i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-container",{staticClass:"scl-container outliner",attrs:{fluid:"","fill-height":""}},[e("v-row",{staticClass:"outliner d-flex",attrs:{align:"center",justify:"center"}},[e("v-col",{staticClass:"outliner",attrs:{cols:"10",sm:"6",md:"4",lg:"3"}},[e("div",{staticClass:"scl-title mb-6"},[n._v("Urban"),e("br"),n._v("Changes")]),e("div",{staticClass:"scl-subtitle mb-10"},[n._v(" Help us recognize the chages that happened in cities! ")]),e("v-btn",{staticClass:"scl-button depressed mb-16 white--text",attrs:{tile:"",color:"red"},on:{click:function(t){return n.randomLink()}}},[n._v("LAUNCH THE SURVEY")]),e("div",{staticClass:"scl-team"},[e("b",[n._v("Team: ")]),n._v(" "),e("br"),n._v(" Zhuangyuan Fan "),e("br"),n._v(" Kee Jang Moon "),e("br"),n._v(" Fan Zhang"),e("br"),n._v(" Fabio Duarte ")])],1)],1)],1)},c=[],u=(e("d3b7"),e("d81d"),e("86ec")),l=e.n(u),s={name:"LandingPage",data:function(){return{links:null}},methods:{randomLink:function(){if(this.links){var n=this.links[Math.floor(Math.random()*this.links.length)];window.open(n,"_blank")}}},mounted:function(){var n=this;fetch("".concat("/urban-change-landing-page/","links/links.csv")).then((function(n){return n.text()})).then((function(t){n.links=l()(t,{skip_empty_lines:!0}).map((function(n){return n[1]}))})).catch((function(n){return console.log(n)}))}},f=s,p=(e("6875"),e("2877")),d=e("6544"),v=e.n(d),h=e("8336"),b=e("62ad"),g=e("a523"),m=e("0fd9"),_=Object(p["a"])(f,i,c,!1,null,"173261ce",null),y=_.exports;v()(_,{VBtn:h["a"],VCol:b["a"],VContainer:g["a"],VRow:m["a"]});var w={name:"App",components:{LandingPage:y},data:function(){return{}}},k=w,O=e("7496"),j=e("f6c4"),x=Object(p["a"])(k,a,o,!1,null,null,null),C=x.exports;v()(x,{VApp:O["a"],VMain:j["a"]});var P=e("2f62");r["a"].use(P["a"]);var M=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=e("f309");r["a"].use(S["a"]);var V=new S["a"]({});e("5aea");r["a"].config.productionTip=!1,new r["a"]({store:M,vuetify:V,render:function(n){return n(C)}}).$mount("#app")},"5aea":function(n,t,e){},6875:function(n,t,e){"use strict";e("50b4")}});
//# sourceMappingURL=app.7fb048d1.js.map
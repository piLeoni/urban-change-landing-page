(function(n){function t(t){for(var a,i,s=t[0],c=t[1],u=t[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(n[a]=c[a]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],a=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),n=i(i.s=e[0]))}return n}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=a,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)i.d(e,a,function(t){return n[t]}.bind(null,a));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/urban-change/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},1:function(n,t){},2:function(n,t){},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-app",[e("v-main",[e("landing-page")],1)],1)},o=[],i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-container",{staticClass:"scl-container outliner",attrs:{fluid:"","fill-height":""}},[e("v-row",{staticClass:"outliner d-flex",attrs:{align:"center",justify:"center"}},[e("v-col",{staticClass:"outliner",attrs:{cols:"10",sm:"6",md:"5",lg:"4"}},[e("div",{staticClass:"scl-title mb-6"},[n._v("Urban"),e("br"),n._v("Changes")]),e("div",{staticClass:"scl-subtitle mb-10"},[n._v(" Help us recognize the changes that happened in cities! ")]),e("v-btn",{staticClass:"scl-button depressed mb-16 white--text",attrs:{tile:"",large:"",color:"#54B0AE"},on:{click:function(t){return n.randomLink()}}},[n._v("LAUNCH THE SURVEY")]),e("div",{staticClass:"scl-team"},[e("div",{staticClass:"scl-team-title mb-5"},[n._v(" A project by MIT Senseable City Lab ")]),e("b",[n._v("Team:")]),n._v(" Zhuangyuan Fan, Kee Jang Moon, Fan Zhang, Pietro Leoni, Fabio Duarte ")])],1)],1)],1)},s=[],c=(e("d3b7"),e("d81d"),e("9911"),e("86ec")),u=e.n(c),l={name:"LandingPage",data:function(){return{links:null}},methods:{randomLink:function(){if(this.links){var n=this.links[Math.floor(Math.random()*this.links.length)];window.open(n,"_blank")}}},mounted:function(){var n=this;fetch("https://raw.githubusercontent.com/brookefzy/urban-change/main/assets/surveylinks.csv").then((function(n){return n.text()})).then((function(t){n.links=u()(t,{columns:!0,skip_empty_lines:!0}).map((function(n){return n.link}))})).catch((function(n){return console.log(n)}))}},f=l,p=(e("dbd1"),e("2877")),d=e("6544"),v=e.n(d),h=e("8336"),b=e("62ad"),m=e("a523"),g=e("0fd9"),y=Object(p["a"])(f,i,s,!1,null,"386cf891",null),_=y.exports;v()(y,{VBtn:h["a"],VCol:b["a"],VContainer:m["a"],VRow:g["a"]});var w={name:"App",components:{LandingPage:_},data:function(){return{}}},k=w,j=e("7496"),C=e("f6c4"),O=Object(p["a"])(k,r,o,!1,null,null,null),x=O.exports;v()(O,{VApp:j["a"],VMain:C["a"]});var P=e("2f62");a["a"].use(P["a"]);var M=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=e("f309");a["a"].use(S["a"]);var L=new S["a"]({});e("5aea");a["a"].config.productionTip=!1,new a["a"]({store:M,vuetify:L,render:function(n){return n(x)}}).$mount("#app")},"5aea":function(n,t,e){},"9ed8":function(n,t,e){},dbd1:function(n,t,e){"use strict";e("9ed8")}});
//# sourceMappingURL=app.22f95004.js.map
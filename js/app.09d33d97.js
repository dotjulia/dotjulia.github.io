(function(e){function n(n){for(var r,i,s=n[0],l=n[1],c=n[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(n);while(f.length)f.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,s=1;s<t.length;s++){var l=t[s];0!==a[l]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var u=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("64a9")},"1b20":function(e,n,t){"use strict";t("3794")},3794:function(e,n,t){},"4c42":function(e,n,t){},"4e0e":function(e,n,t){"use strict";t("53a4")},"53a4":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("settings",{attrs:{backgroundSize:e.backgroundImageSize,players:e.players},on:{changedbackground:function(n){return e.backgroundSizeChanged(n)},rerender:function(n){return e.rerender()},newbackground:function(n){return e.setBackground(n)},deleteplayer:function(n){return e.deletePlayer(n)},addplayer:function(n){return e.addPlayer()}}}),t("canvas-renderer",{ref:"canvasrenderer",attrs:{backgroundImageSize:e.backgroundImageSize,players:e.players,backgroundImage:e.imageData}})],1)},o=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"background",style:"background-image: url("+e.backgroundImage+");"})},s=[],l={name:"Background",props:{backgroundImage:String}},c=l,u=(t("c6a0"),t("2877")),d=Object(u["a"])(c,i,s,!1,null,"4c7b9faf",null),f=d.exports,p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("canvas",{ref:"canvas",staticClass:"canvas-renderer"})},g=[],h=(t("ac6a"),t("ac4d"),t("8a81"),t("5df3"),t("1c4c"),t("7f7f"),t("6b54"),t("96cf"),t("1da1"));t("6c7b"),t("c5f6");function v(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=m(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw o}}}}function m(e,n){if(e){if("string"===typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,n):void 0}}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var b={name:"CanvasRenderer",props:{players:Array,backgroundImage:String,backgroundImageSize:Number},data:function(){return{canvasCTX:null,draggingPlayer:null,loadedImage:null}},methods:{renderBackground:function(){var e=this;return new Promise((function(n,t){if(e.loadedImage&&e.loadedImage.src==e.backgroundImage){var r=e.backgroundImageSize,a=e.loadedImage.width/e.loadedImage.height;return e.canvasCTX.drawImage(e.loadedImage,0,0,e.loadedImage.width,e.loadedImage.height,0,0,r*a,r),void n()}var o=new Image;o.onload=function(){var t=e.backgroundImageSize,r=o.width/o.height;e.canvasCTX.drawImage(o,0,0,o.width,o.height,0,0,t*r,t),e.loadedImage=o,n()},o.src=e.backgroundImage}))},renderPlayers:function(){var e,n=v(this.players);try{for(n.s();!(e=n.n()).done;){var t=e.value;void 0!=t.x&&void 0!=t.y||(t.x=0,t.y=0),this.canvasCTX.beginPath(),this.canvasCTX.arc(t.x,t.y,t.size/2,0,2*Math.PI,!1),this.canvasCTX.fillStyle=t.backgroundColor,this.canvasCTX.fill(),this.canvasCTX.fillStyle=t.foregroundColor,this.canvasCTX.font="".concat(.8*t.size,"px sans-serif"),this.canvasCTX.fillText(t.content,t.x-t.size/4,t.y+t.size/4)}}catch(r){n.e(r)}finally{n.f()}},rerender:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$refs.canvas.width=window.innerWidth,this.$refs.canvas.height=window.innerHeight,e.next=4,this.renderBackground();case 4:this.renderPlayers();case 5:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),windowSizeChanged:function(){this.rerender()},isInPlayer:function(e,n){var t,r=v(this.players);try{for(r.s();!(t=r.n()).done;){var a=t.value,o=a.x-e,i=a.y-n;if(Math.abs(o)<a.size/2&&Math.abs(i)<a.size/2)return a}}catch(s){r.e(s)}finally{r.f()}return!1},mouseDown:function(e){var n=this.isInPlayer(e.clientX,e.clientY);n&&(this.draggingPlayer=n)},mouseMove:function(e){this.draggingPlayer&&(this.draggingPlayer.x=e.clientX,this.draggingPlayer.y=e.clientY,this.rerender())},mouseUp:function(e){this.draggingPlayer=null,this.rerender()}},watch:{backgroundImage:function(e,n){this.rerender()},players:{deep:!0,handler:function(){this.rerender()}},backgroundImageSize:function(){this.rerender()}},mounted:function(){this.canvasCTX=this.$refs.canvas.getContext("2d"),window.addEventListener("resize",this.windowSizeChanged),this.$refs.canvas.addEventListener("mousedown",this.mouseDown),this.$refs.canvas.addEventListener("mouseup",this.mouseUp),this.$refs.canvas.addEventListener("mousemove",this.mouseMove),this.rerender()},destroyed:function(){window.removeEventListener("resize",this.windowSizeChanged),this.$refs.canvas.removeEventListener("mousedown",this.mouseDown),this.$refs.canvas.removeEventListener("mouseup",this.mouseUp),this.$refs.canvas.removeEventListener("mousemove",this.mouseMove)}},w=b,k=(t("1b20"),Object(u["a"])(w,p,g,!1,null,"04c59e61",null)),x=k.exports,C=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("movable",[t("div",{staticClass:"circle",style:"width: "+e.width+"px; height: "+e.height+"px; background-color: "+e.backgroundColor+"; color: "+e.foregroundColor},[e._v(e._s(e.content))])])},S=[],z={name:"MovableEntity",props:{width:Number,height:Number,backgroundColor:String,foregroundColor:String,content:String}},P=z,_=(t("a725"),Object(u["a"])(P,C,S,!1,null,"43fd24cc",null)),I=_.exports,$=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"parentEl",staticStyle:{position:"absolute"},attrs:{width:"30%"}},[t("movable",{staticStyle:{"z-index":"10",height:"70px",width:"100%"},attrs:{target:"parentEl"}}),t("v-card",{ref:"settings",staticClass:"settings",attrs:{dark:"",width:"100%"}},[t("v-card-title",[e._v("\r\n            Settings\r\n            ")]),t("v-expansion-panels",[t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("\r\n                    Players\r\n                ")]),t("v-expansion-panel-content",[t("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("#")]),t("th",{staticClass:"text-left"},[e._v("\r\n                                    Content\r\n                                ")]),t("th",{staticClass:"text-left"},[e._v("\r\n                                    Background Color\r\n                                ")]),t("th",{staticClass:"text-left"},[e._v("\r\n                                    Foreground Color\r\n                                ")]),t("th",{staticClass:"text-left"},[e._v("\r\n                                    Size\r\n                                ")])])]),t("tbody",e._l(e.players,(function(n){return t("player-display",{key:n.id,attrs:{player:n},on:{deleteplayer:function(n){return e.deletePlayer(n)}}})})),1)]},proxy:!0}])},[e._v(">\r\n                    ")]),t("v-btn",{staticStyle:{"align-items":"left"},on:{click:function(n){return e.$emit("addplayer")}}},[e._v(" + Add")])],1)],1),t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("\r\n                    Background\r\n                ")]),t("v-expansion-panel-content",[t("div",{staticClass:"flexbox"},[t("label",{staticClass:"v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--default",staticStyle:{"margin-top":"auto","margin-bottom":"auto","margin-right":"20px"}},[t("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{input:e.onSelectFile}}),e._v("\r\n                            Select Background\r\n                        ")]),t("v-text-field",{staticClass:"background-size-input",attrs:{solo:"","append-icon":"mdi-image-size-select-large"},on:{change:function(n){return e.$emit("changedbackground",e.size)}},model:{value:e.size,callback:function(n){e.size=n},expression:"size"}})],1)])],1),t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("\r\n                    Debug\r\n                ")]),t("v-expansion-panel-content",[t("v-btn",{on:{click:function(n){return e.$emit("rerender")}}},[e._v("Rerender")])],1)],1)],1)],1)],1)},E=[],j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("tr",[t("td",[e._v(e._s(e.player.id))]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.player.content,expression:"player.content"}],attrs:{type:"text",solo:""},domProps:{value:e.player.content},on:{input:function(n){n.target.composing||e.$set(e.player,"content",n.target.value)}}})]),t("td",[t("v-swatches",{staticClass:"swatch",attrs:{"background-color":"#212121",solo:""},model:{value:e.player.backgroundColor,callback:function(n){e.$set(e.player,"backgroundColor",n)},expression:"player.backgroundColor"}})],1),t("td",[t("v-swatches",{staticClass:"swatch",attrs:{"background-color":"#212121",solo:""},model:{value:e.player.foregroundColor,callback:function(n){e.$set(e.player,"foregroundColor",n)},expression:"player.foregroundColor"}})],1),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.player.size,expression:"player.size"}],attrs:{type:"text",solo:""},domProps:{value:e.player.size},on:{input:function(n){n.target.composing||e.$set(e.player,"size",n.target.value)}}})]),t("v-btn",{attrs:{icon:"",color:"pink"},nativeOn:{click:function(n){return e.deletePlayer()}}},[t("v-icon",[e._v("mdi-delete")])],1)],1)},O=[],T=t("7f75"),A=t.n(T),M=(t("b3a4"),{components:{VSwatches:A.a},name:"PlayerDisplay",mounted:function(){console.log(this.$vuetify.theme.themes.dark)},props:{player:Object,data:function(){return{}},methods:{deletePlayer:function(){this.$emit("deleteplayer",this.player.id)}}}}),X=M,B=(t("e338"),t("6544")),V=t.n(B),D=t("8336"),L=t("132d"),N=Object(u["a"])(X,j,O,!1,null,"5528156a",null),F=N.exports;V()(N,{VBtn:D["a"],VIcon:L["a"]});var R={components:{PlayerDisplay:F},name:"Settings",props:{players:Array,backgroundSize:Number},data:function(){return{size:400}},mounted:function(){this.size=this.backgroundSize},methods:{deletePlayer:function(e){this.$emit("deleteplayer",e)},onSelectFile:function(){var e=this,n=this.$refs.fileInput,t=n.files;if(t&&t[0]){var r=new FileReader;r.onload=function(n){e.$emit("newbackground",n.target.result)},r.readAsDataURL(t[0])}else console.log("no image selected")}}},U=R,H=(t("4e0e"),t("b0af")),J=t("99d9"),Y=t("cd55"),q=t("49e2"),W=t("c865"),G=t("0393"),K=t("1f4f"),Q=t("8654"),Z=Object(u["a"])(U,$,E,!1,null,"7f01a94f",null),ee=Z.exports;V()(Z,{VBtn:D["a"],VCard:H["a"],VCardTitle:J["a"],VExpansionPanel:Y["a"],VExpansionPanelContent:q["a"],VExpansionPanelHeader:W["a"],VExpansionPanels:G["a"],VSimpleTable:K["a"],VTextField:Q["a"]});var ne={name:"app",components:{MovableEntity:I,Background:f,Settings:ee,CanvasRenderer:x},methods:{backgroundSizeChanged:function(e){this.backgroundImageSize=+e},rerender:function(){this.$refs.canvasrenderer.rerender()},setBackground:function(e){this.imageData=e},addPlayer:function(){this.players.push({id:this.players.reduce((function(e,n){return e<n.id?n.id:e}),this.players[0].id)+1,backgroundColor:this.players[0].backgroundColor,foregroundColor:this.players[0].foregroundColor,content:this.players[0].content,size:this.players[0].size})},deletePlayer:function(e){this.players=this.players.filter((function(n){return n.id!=e}))}},data:function(){return{backgroundImageSize:800,imageData:"https://i.redd.it/oteavhdmcnl61.jpg",players:[{id:0,backgroundColor:"#ff0000",foregroundColor:"#ffffff",content:"P",size:25}]}}},te=ne,re=(t("034f"),Object(u["a"])(te,a,o,!1,null,null,null)),ae=re.exports,oe=t("1051"),ie=t.n(oe),se=t("9483");Object(se["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var le=t("f309");r["default"].use(le["a"]);var ce=new le["a"]({});r["default"].config.productionTip=!1,r["default"].use(ie.a),new r["default"]({vuetify:ce,render:function(e){return e(ae)}}).$mount("#app")},"64a9":function(e,n,t){},a725:function(e,n,t){"use strict";t("4c42")},bbb2:function(e,n,t){},beb5:function(e,n,t){},c6a0:function(e,n,t){"use strict";t("bbb2")},e338:function(e,n,t){"use strict";t("beb5")}});
//# sourceMappingURL=app.09d33d97.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06d62bc2"],{1292:function(t,e,n){"use strict";n("4f2d")},"12f2":function(t,e,n){"use strict";n("d3c1")},1444:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),i={class:"cd-wrapper"},l={class:"head"},s={key:0,class:"content"};function u(t,e,n,u,a,r){var o=Object(c["K"])("mySwipe"),b=Object(c["K"])("cdList");return Object(c["D"])(),Object(c["h"])("div",i,[Object(c["i"])("div",l,[Object(c["l"])(o,{swipe:t.swipe,class:"swipe"},null,8,["swipe"])]),t.content.length?(Object(c["D"])(),Object(c["h"])("div",s,[Object(c["l"])(b,{albumlist:t.content[0].albumlist,title:"最新上架",class:"cdlist"},null,8,["albumlist"]),Object(c["l"])(b,{albumlist:t.content[1].albumlist,title:"本周最热",class:"cdlist"},null,8,["albumlist"]),Object(c["l"])(b,{albumlist:t.content[2].albumlist,title:t.content[2].title,class:"cdlist"},null,8,["albumlist","title"]),Object(c["l"])(b,{albumlist:t.content[3].albumlist,title:t.content[3].title,class:"cdlist"},null,8,["albumlist","title"]),Object(c["l"])(b,{albumlist:t.content[4].albumlist,title:t.content[4].title,class:"cdlist"},null,8,["albumlist","title"]),Object(c["l"])(b,{albumlist:t.content[5].albumlist,title:t.content[5].title,class:"cdlist"},null,8,["albumlist","title"]),Object(c["l"])(b,{albumlist:t.content[6].albumlist,title:t.content[6].title,class:"cdlist"},null,8,["albumlist","title"]),Object(c["l"])(b,{albumlist:t.content[7].albumlist,title:t.content[7].title,class:"cdlist"},null,8,["albumlist","title"])])):Object(c["g"])("",!0)])}var a=n("5530"),r=(n("d81d"),n("fb6a"),n("bc3a")),o=n.n(r),b=n("7c53"),d=(n("d3b7"),function(t){return Object(c["G"])("data-v-43efc02e"),t=t(),Object(c["E"])(),t}),j={class:"scorll-wrapper"},p={class:"head"},O={class:"left"},f={class:"title"},m=d((function(){return Object(c["i"])("div",{class:"right"},[Object(c["i"])("span",null,"更多"),Object(c["i"])("i",{class:"iconfont icon-youjiantou"})],-1)})),v={class:"list"},h=d((function(){return Object(c["i"])("i",{class:"iconfont icon-zuojiantou"},null,-1)})),g=[h],y=["onClick"],w={class:"img"},k=["src"],x={class:"tag"},_={style:{"font-size":"18px"}},I=Object(c["k"])("立即购买"),D=d((function(){return Object(c["i"])("i",{class:"iconfont icon-youjiantou"},null,-1)})),C=[D];function M(t,e,n,i,l,s){var u=Object(c["K"])("van-button");return Object(c["D"])(),Object(c["h"])("div",j,[Object(c["i"])("div",p,[Object(c["i"])("div",O,[Object(c["i"])("span",f,Object(c["M"])(n.title),1)]),m]),Object(c["i"])("div",v,[Object(c["i"])("div",{class:"iconleft",onClick:e[0]||(e[0]=function(){return i.reduce&&i.reduce.apply(i,arguments)})},g),(Object(c["D"])(!0),Object(c["h"])(c["a"],null,Object(c["J"])(s.resList,(function(t){return Object(c["D"])(),Object(c["h"])("div",{class:"item",key:t.actid,onClick:function(e){return i.gotoDeatil(t.album_mid)}},[Object(c["i"])("div",w,[Object(c["i"])("img",{src:t.buypage},null,8,k)]),Object(c["i"])("div",x,[Object(c["i"])("p",_,Object(c["M"])(t.album_name),1),Object(c["i"])("p",null,Object(c["M"])(t.intro),1),Object(c["i"])("p",null,"￥"+Object(c["M"])(t.price),1)]),Object(c["l"])(u,{type:"default",round:"",class:"buy"},{default:Object(c["S"])((function(){return[I]})),_:1})],8,y)})),128)),Object(c["i"])("div",{class:"iconright",onClick:e[1]||(e[1]=function(){return i.add&&i.add.apply(i,arguments)})},C)])])}var S=n("6c02"),L={props:{albumlist:Array,title:String},setup:function(t){var e=Object(c["H"])({start:0,end:4}),n=function(){e.start>0&&(e.start--,e.end--)},i=function(){e.end<t.albumlist.length&&e.start++,e.end++},l=Object(S["d"])(),s=function(t){l.push({path:"/cdListPage",query:{id:t}})};return Object(a["a"])({reduce:n,add:i,gotoDeatil:s},Object(c["N"])(e))},computed:{resList:function(){return this.albumlist.slice(this.start,this.end)}}},A=(n("1292"),n("6b0d")),J=n.n(A);const T=J()(L,[["render",M],["__scopeId","data-v-43efc02e"]]);var H=T,q={components:{mySwipe:b["a"],cdList:H},setup:function(){var t=Object(c["H"])({banner:[],swipe:[],content:[],start:0,end:4});return Object(c["A"])((function(){o()({url:"/api/getDigitalAlbumLists"}).then((function(e){console.log(e.data.response.data),t.banner=e.data.response.data.banner,t.content=e.data.response.data.content,t.swipe=t.banner.map((function(t){var e={pic_info:{}};e.pic_info.url=t.picurl,e.jump_info={};var n=t.jumpurl.indexOf("="),c=t.jumpurl.indexOf("&");return e.jump_info.url=t.jumpurl.slice(n+1,c),e}));for(var n=0;n<t.content.length;n++)for(var c=0;c<t.content[n].albumlist.length;c++){var i=t.content[n].albumlist[c].buypage.indexOf("="),l=t.content[n].albumlist[c].buypage.indexOf("&");t.content[n].albumlist[c].buypage="https://y.qq.com/music/photo_new/T002R300x300M000"+t.content[n].albumlist[c].buypage.slice(i+1,l)+".jpg?max_age=2592000"}}))})),Object(a["a"])({},Object(c["N"])(t))}};n("12f2");const K=J()(q,[["render",u],["__scopeId","data-v-d56c4b56"]]);e["default"]=K},"4f2d":function(t,e,n){},"7c53":function(t,e,n){"use strict";var c=n("7a23"),i={class:"swipe-wrap"},l={class:"swipe"},s={class:"viewWrapper"},u=["onClick"],a=["src"],r=["onClick"],o=["src"],b=["onClick"];function d(t,e,n,d,j,p){var O=Object(c["K"])("van-icon");return Object(c["D"])(),Object(c["h"])("div",i,[Object(c["i"])("div",l,[Object(c["i"])("ul",s,[(Object(c["D"])(!0),Object(c["h"])(c["a"],null,Object(c["J"])(n.swipe,(function(t){return Object(c["D"])(),Object(c["h"])("li",{class:"item",style:Object(c["v"])(p.transStyle),key:t,onClick:function(e){return d.jumpTo(t.jump_info.url)}},[Object(c["i"])("img",{src:t.pic_info.url,alt:""},null,8,a)],12,u)})),128)),(Object(c["D"])(!0),Object(c["h"])(c["a"],null,Object(c["J"])(n.swipe,(function(t){return Object(c["D"])(),Object(c["h"])("li",{class:"item",style:Object(c["v"])(p.transStyle),key:t,onClick:function(e){return d.jumpTo(t.jump_info.url)}},[Object(c["i"])("img",{src:t.pic_info.url,alt:""},null,8,o)],12,r)})),128)),Object(c["i"])("ul",{class:"point-wrapper",style:Object(c["v"])(p.circleStyle)},[(Object(c["D"])(!0),Object(c["h"])(c["a"],null,Object(c["J"])(n.swipe.length,(function(e,n){return Object(c["D"])(),Object(c["h"])("li",{key:e,class:Object(c["u"])(["circle",n==t.currentIndex?"active":""]),onClick:function(t){return d.onHandle(n)}},null,10,b)})),128))],4)]),Object(c["l"])(O,{name:"arrow-left",class:"icon-left",onClick:d.leftMove},null,8,["onClick"]),Object(c["l"])(O,{name:"arrow",class:"icon-right",onClick:d.rightMove},null,8,["onClick"])])])}var j=n("5530"),p=n("6c02"),O={props:{swipe:{type:Array,default:function(){return[1,2,3,4]}}},setup:function(t){var e=Object(c["H"])({currentIndex:0,autoTime:2e3,wrapperWidth:860,itemWidth:430}),n=function(t){e.currentIndex=t},i=function(){0!=e.currentIndex?e.currentIndex--:e.currentIndex=t.swipe.length-1},l=Object(p["d"])(),s=function(t){l.push({path:"/cdListPage",query:{id:t}})},u=function(){e.currentIndex>=t.swipe.length||e.currentIndex++},a=function(){setInterval((function(){e.currentIndex++,e.currentIndex>=t.swipe.length&&(e.currentIndex=0)}),e.autoTime)};return Object(c["A"])((function(){a()})),Object(j["a"])({autoMove:a,onHandle:n,rightMove:u,leftMove:i,jumpTo:s},Object(c["N"])(e))},computed:{transStyle:function(){return"transform:translateX(".concat(-this.currentIndex*this.itemWidth,"px)")},circleStyle:function(){return"left:calc(50% - ".concat(30*this.swipe.length/2,"px - 5px)")}}},f=(n("8385"),n("6b0d")),m=n.n(f);const v=m()(O,[["render",d],["__scopeId","data-v-6254c20f"]]);e["a"]=v},8385:function(t,e,n){"use strict";n("9c59")},"9c59":function(t,e,n){},d3c1:function(t,e,n){},d81d:function(t,e,n){"use strict";var c=n("23e7"),i=n("b727").map,l=n("1dde"),s=l("map");c({target:"Array",proto:!0,forced:!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-06d62bc2.bac2ad70.js.map
(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{166:function(e,n,t){e.exports=t(308)},171:function(e,n,t){},172:function(e,n,t){},308:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(14),i=t.n(c),u=(t(171),t(27)),o=t.n(u),s=t(53),l=t(47),f=t(107),p=(t(172),t(173),t(77)),d=t(311),m=t(312),h=t(314),v=t(42),b=t(313),k=t(310),y=p.a.Option,g=function(){var e=Object(r.useState)([]),n=Object(f.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(""),u=Object(f.a)(i,2),g=u[0],E=u[1];Object(r.useEffect)((function(){fetch("https://sahpossum.herokuapp.com/items/getVkItems/all").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]);var w=function(e){d.b.info(e)},x=function(){var e=Object(l.a)(o.a.mark((function e(n,r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map((function(e){if(e._id===r._id){var t=Object(s.a)({},e);return t.available=n,t}return e}));case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.varPrice.length<3)){e.next=7;break}return e.next=3,t.map((function(e){if(e._id===n._id){var t=Object(s.a)({},e);return t.varPrice.push({count:0,price:0}),t}return e}));case 3:r=e.sent,c(r),e.next=8;break;case 7:w("\u041d\u0435\u043b\u044c\u0437\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 3 \u043f\u0443\u043d\u043a\u0442\u043e\u0432");case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(o.a.mark((function e(n,r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1===n.varPrice.length){e.next=7;break}return e.next=3,t.map((function(e){if(e._id===n._id){var t=Object(s.a)({},e);return t.varPrice.splice(r,1),t}return e}));case 3:a=e.sent,c(a),e.next=8;break;case 7:w("\u041d\u0435\u043b\u044c\u0437\u044f \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0446\u0435\u043d\u044b");case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.key=g,S(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(o.a.mark((function e(n,r,a){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map((function(e){if(e._id===r._id){var t=Object(s.a)({},e);return t.varPrice[a].count=n,t}return e}));case 2:i=e.sent,c(i);case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(o.a.mark((function e(n,r,a){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map((function(e){if(e._id===r._id){var t=Object(s.a)({},e);return t.varPrice[a].countLabel=n,t}return e}));case 2:i=e.sent,c(i);case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(o.a.mark((function e(n,r,a){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map((function(e){if(e._id===r._id){var t=Object(s.a)({},e);return t.varPrice[a].price=n,t}return e}));case 2:i=e.sent,c(i);case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map((function(e){if(e._id===n._id){var t=Object(s.a)({},e);return t.isTrading=!n.isTrading,t.key=g,S(t),t}return e}));case 2:r=e.sent,c(r),w("\u0413\u043e\u0442\u043e\u0432\u043e.");case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S=function(e){e.key=g,fetch("https://sahpossum.herokuapp.com/items/changeVkItem",{method:"PATCH",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e.error?w(e.error):w("\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b")}))},J=[{title:"\u0424\u043e\u0442\u043e",dataIndex:"thumb_photo",key:"thumb_photo",render:function(e){return a.a.createElement("img",{style:{width:100,height:100},src:e})}},{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"title",key:"title",render:function(e){return a.a.createElement("a",null,e)}},{title:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",dataIndex:"available",key:"available",render:function(e,n){return a.a.createElement(m.a,{value:e,onChange:function(e){return x(e,n)}})}},{title:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",dataIndex:"varPrice",key:"varPrice",render:function(e,n){return e.map((function(t,r){return a.a.createElement("div",{key:r},a.a.createElement(h.a,{color:"green"},a.a.createElement("div",null,a.a.createElement(m.a,{style:{margin:5},placeholder:"\u0412\u0435\u0441/\u041e\u0431\u044c\u0435\u043c",value:t.count,onChange:function(e){return C(e,n,r)}}),a.a.createElement(p.a,{value:t.countLabel||null,onChange:function(e){return P(e,n,r)}},a.a.createElement(y,{value:"\u0412\u0435\u0441"},"\u0412\u0435\u0441"),a.a.createElement(y,{value:"\u0426\u0432\u0435\u0442"},"\u0426\u0432\u0435\u0442"),a.a.createElement(y,{value:"\u041e\u0431\u044a\u0435\u043c"},"\u041e\u0431\u044a\u0435\u043c"),a.a.createElement(y,{value:"\u0420\u0430\u0437\u043c\u0435\u0440"},"\u0420\u0430\u0437\u043c\u0435\u0440")),a.a.createElement(m.a,{style:{margin:5},placeholder:"\u0426\u0435\u043d\u0430",value:t.price,onChange:function(e){return I(e,n,r)}}),a.a.createElement(p.a,{defaultValue:"\u0440\u0443\u0431."},a.a.createElement(y,{value:"\u0440\u0443\u0431."},"\u0440\u0443\u0431.")),a.a.createElement(v.a,{onClick:function(){return O(n,r)},style:{margin:5},danger:!0},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),r===e.length-1&&a.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.a.createElement(v.a,{type:"dashed",onClick:function(){return j(n)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),a.a.createElement(v.a,{type:"dashed",onClick:function(){return _(n)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))}))}},{title:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043f\u0440\u043e\u0434\u0430\u0436\u0438",dataIndex:"isTrading",key:"isTrading",render:function(e,n){return a.a.createElement(h.a,{onClick:function(){return T(n)},color:e?"green":"red",key:1},e?"\u041f\u0440\u043e\u0434\u0430\u0435\u0442\u0441\u044f":"\u0421\u043d\u044f\u0442 \u0441 \u043f\u0440\u043e\u0434\u0430\u0436\u0438")}}];return a.a.createElement("div",{className:"container"},a.a.createElement(b.a,{value:g,onChange:function(e){return E(e.target.value)},placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0432 \u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043a\u043b\u044e\u0447 \u0434\u043e\u0441\u0442\u0443\u043f\u0430. \u0411\u0435\u0437 \u043d\u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u044b."}),a.a.createElement(k.a,{columns:J,dataSource:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[166,1,2]]]);
//# sourceMappingURL=main.1a5ab26d.chunk.js.map
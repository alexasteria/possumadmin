(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{168:function(e,t,n){e.exports=n(312)},173:function(e,t,n){},174:function(e,t,n){},312:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(15),u=n.n(c),o=(n(173),n(41)),i=(n(174),n(175),n(314)),s=n(8),l=n.n(s),f=n(32),d=n(28),m=n(79),p=n(315),h=n(318),v=n(316),y=n(48),k=n(317),E=n(313),b=m.a.Option,g=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)(""),i=Object(o.a)(u,2),s=i[0],g=i[1];Object(r.useEffect)((function(){fetch("https://saharnypossum.herokuapp.com/items/getVkItems/all").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]);var j=function(e){p.b.info(e)},O=function(){var e=Object(d.a)(l.a.mark((function e(t,r,a){var u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.map((function(e){if(e._id===r._id){var n=Object(f.a)({},e);return n.varPrice[a].available=t,n}return e}));case 2:u=e.sent,c(u);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.map((function(e){if(e._id===r._id){var n=Object(f.a)({},e);return n.category=t,n}return e}));case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.varPrice.length<3)){e.next=7;break}return e.next=3,n.map((function(e){if(e._id===t._id){var n=Object(f.a)({},e);return n.varPrice.push({count:0,price:0}),n}return e}));case 3:r=e.sent,c(r),e.next=8;break;case 7:j("\u041d\u0435\u043b\u044c\u0437\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 3 \u043f\u0443\u043d\u043a\u0442\u043e\u0432");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(l.a.mark((function e(t,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1===t.varPrice.length){e.next=7;break}return e.next=3,n.map((function(e){if(e._id===t._id){var n=Object(f.a)({},e);return n.varPrice.splice(r,1),n}return e}));case 3:a=e.sent,c(a),e.next=8;break;case 7:j("\u041d\u0435\u043b\u044c\u0437\u044f \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0446\u0435\u043d\u044b");case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.key=s,N(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(l.a.mark((function e(t,r,a){var u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.map((function(e){if(e._id===r._id){var n=Object(f.a)({},e);return n.varPrice[a].count=t,n}return e}));case 2:u=e.sent,c(u);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(l.a.mark((function e(t,r,a){var u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.map((function(e){if(e._id===r._id){var n=Object(f.a)({},e);return n.varPrice[a].countLabel=t,n}return e}));case 2:u=e.sent,c(u);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(l.a.mark((function e(t,r,a){var u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.map((function(e){if(e._id===r._id){var n=Object(f.a)({},e);return n.varPrice[a].price=t,n}return e}));case 2:u=e.sent,c(u);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.map((function(e){if(e._id===t._id){var n=Object(f.a)({},e);return n.isTrading=!t.isTrading,n.key=s,N(n),n}return e}));case 2:r=e.sent,c(r),j("\u0413\u043e\u0442\u043e\u0432\u043e.");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){e.key=s,fetch("https://saharnypossum.herokuapp.com/items/changeVkItem",{method:"PATCH",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e.error?j(e.error):j("\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b")}))},J=[{title:"\u0424\u043e\u0442\u043e",dataIndex:"thumb_photo",key:"thumb_photo",render:function(e){return a.a.createElement("img",{style:{width:100,height:100},src:e})}},{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"title",key:"title",render:function(e){return a.a.createElement("a",null,e)}},{title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",dataIndex:"category",key:"category",render:function(e,t){return a.a.createElement(m.a,{value:e||"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",onChange:function(e){return x(e,t)}},a.a.createElement(b,{value:"\u041a\u043e\u043d\u0441\u0435\u0440\u0432\u044b"},"\u041a\u043e\u043d\u0441\u0435\u0440\u0432\u044b"),a.a.createElement(b,{value:"\u041a\u043e\u0440\u043c\u0430/\u0434\u043e\u0431\u0430\u0432\u043a\u0438 \u0434\u043b\u044f \u0436\u0438\u0432\u044b\u0445 \u043d\u0430\u0441\u0435\u043a\u043e\u043c\u044b\u0445"},"\u041a\u043e\u0440\u043c\u0430/\u0434\u043e\u0431\u0430\u0432\u043a\u0438 \u0434\u043b\u044f \u0436\u0438\u0432\u044b\u0445 \u043d\u0430\u0441\u0435\u043a\u043e\u043c\u044b\u0445"),a.a.createElement(b,{value:"\u041d\u0430\u0431\u043e\u0440\u044b/\u0441\u043c\u0435\u0441\u0438"},"\u041d\u0430\u0431\u043e\u0440\u044b/\u0441\u043c\u0435\u0441\u0438"),a.a.createElement(b,{value:"\u0421\u0443\u0431\u043b\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435"},"\u0421\u0443\u0431\u043b\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435"),a.a.createElement(b,{value:"\u041f\u0442\u0438\u0446\u044b \u041d\u0430\u0441\u0435\u043a\u043e\u043c\u043e\u044f\u0434\u043d\u044b\u0435,\u043b\u0438\u0441\u0442\u043e\u044f\u0434\u043d\u044b\u0435, \u043f\u0440\u0438\u043c\u0430\u0442\u044b"},"\u041f\u0442\u0438\u0446\u044b \u041d\u0430\u0441\u0435\u043a\u043e\u043c\u043e\u044f\u0434\u043d\u044b\u0435,\u043b\u0438\u0441\u0442\u043e\u044f\u0434\u043d\u044b\u0435, \u043f\u0440\u0438\u043c\u0430\u0442\u044b"),a.a.createElement(b,{value:"\u0420\u044b\u0431\u043a\u0438 \u0438 \u043a\u0440\u0430\u0431\u044b"},"\u0420\u044b\u0431\u043a\u0438 \u0438 \u043a\u0440\u0430\u0431\u044b"),a.a.createElement(b,{value:"\u0412\u0438\u0442\u0430\u043c\u0438\u043d\u044b/\u043b\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u0430"},"\u0412\u0438\u0442\u0430\u043c\u0438\u043d\u044b/\u043b\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u0430"),a.a.createElement(b,{value:"\u041a\u043e\u0440\u043c\u0430/\u0434\u0438\u0435\u0442\u044b"},"\u041a\u043e\u0440\u043c\u0430/\u0434\u0438\u0435\u0442\u044b"),a.a.createElement(b,{value:"\u041f\u0440\u0438\u043c\u0430\u0442\u044b"},"\u041f\u0440\u0438\u043c\u0430\u0442\u044b"),a.a.createElement(b,{value:"\u0421\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0443\u0445\u043e\u0434\u0430"},"\u0421\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0443\u0445\u043e\u0434\u0430"),a.a.createElement(b,{value:"\u041f\u0440\u043e\u0447\u0435\u0435"},"\u041f\u0440\u043e\u0447\u0435\u0435"))}},{title:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",dataIndex:"varPrice",key:"varPrice",render:function(e,t){return e.map((function(n,r){return a.a.createElement("div",{key:r},a.a.createElement(h.a,{color:"green"},a.a.createElement("div",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",a.a.createElement(v.a,{style:{margin:5},placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",value:n.available,onChange:function(e){return O(e,t,r)}}),"\u0424\u0430\u0441\u043e\u0432\u043a\u0430",a.a.createElement(v.a,{style:{margin:5},placeholder:"\u0412\u0435\u0441/\u041e\u0431\u044c\u0435\u043c",value:n.count,onChange:function(e){return P(e,t,r)}}),a.a.createElement(m.a,{value:n.countLabel||null,onChange:function(e){return I(e,t,r)}},a.a.createElement(b,{value:"\u0412\u0435\u0441"},"\u0412\u0435\u0441"),a.a.createElement(b,{value:"\u0426\u0432\u0435\u0442"},"\u0426\u0432\u0435\u0442"),a.a.createElement(b,{value:"\u041e\u0431\u044a\u0435\u043c"},"\u041e\u0431\u044a\u0435\u043c"),a.a.createElement(b,{value:"\u0420\u0430\u0437\u043c\u0435\u0440"},"\u0420\u0430\u0437\u043c\u0435\u0440")),a.a.createElement(v.a,{style:{margin:5},placeholder:"\u0426\u0435\u043d\u0430",value:n.price,onChange:function(e){return S(e,t,r)}}),a.a.createElement(m.a,{defaultValue:"\u0440\u0443\u0431."},a.a.createElement(b,{value:"\u0440\u0443\u0431."},"\u0440\u0443\u0431.")),a.a.createElement(y.a,{onClick:function(){return _(t,r)},style:{margin:5},danger:!0},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),r===e.length-1&&a.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.a.createElement(y.a,{type:"dashed",onClick:function(){return w(t)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),a.a.createElement(y.a,{type:"dashed",onClick:function(){return C(t)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))}))}},{title:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043f\u0440\u043e\u0434\u0430\u0436\u0438",dataIndex:"isTrading",key:"isTrading",render:function(e,t){return a.a.createElement(h.a,{onClick:function(){return T(t)},color:e?"green":"red",key:1},e?"\u041f\u0440\u043e\u0434\u0430\u0435\u0442\u0441\u044f":"\u0421\u043d\u044f\u0442 \u0441 \u043f\u0440\u043e\u0434\u0430\u0436\u0438")}}];return a.a.createElement("div",{className:"container"},a.a.createElement(k.a,{value:s,onChange:function(e){return g(e.target.value)},placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0432 \u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043a\u043b\u044e\u0447 \u0434\u043e\u0441\u0442\u0443\u043f\u0430. \u0411\u0435\u0437 \u043d\u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u044b."}),a.a.createElement(E.a,{columns:J,dataSource:n}))},j=m.a.Option,O=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)(""),i=Object(o.a)(u,2),s=i[0],h=i[1],v=function(){var e=Object(d.a)(l.a.mark((function e(t,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.map((function(e){if(e._id===r._id){var n=Object(f.a)({},e);return n.status=t,n}return e}));case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(l.a.mark((function e(t,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,n.map((function(e){if(e._id===r._id){var n=Object(f.a)({},e);return n.track=t,n}return e}));case 3:a=e.sent,c(a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.key=s,O(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){e.key=s,fetch("https://saharnypossum.herokuapp.com/pay/orders",{method:"PATCH",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e.error?x(e.error):x("\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b")}))},x=function(e){p.b.info(e)};Object(r.useEffect)((function(){fetch("https://saharnypossum.herokuapp.com/pay/orders",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({})}).then((function(e){return e.json()})).then((function(e){console.log(e),c(e)}))}),[]);var w=[{title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",dataIndex:"user",key:"user",render:function(e){return a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://vk.com/id".concat(e)},"http://vk.com/id".concat(e))}},{title:"\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437\u0430",dataIndex:"num",key:"num",render:function(e){return e}},{title:"\u0421\u0443\u043c\u043c\u0430",dataIndex:"sum",key:"sum",render:function(e){return e}},{title:"\u0414\u0435\u0442\u0430\u043b\u0438",dataIndex:"jsonParams",key:"jsonParams",render:function(e,t){return a.a.createElement("div",null,a.a.createElement("pre",null,JSON.stringify(e,"",2)),a.a.createElement(y.a,{type:"dashed",onClick:function(){return g(t)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}},{title:"Track-code",dataIndex:"track",key:"track",render:function(e,t){return a.a.createElement(k.a,{value:e,placeholder:!e&&"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d",onChange:function(e){return b(e.target.value,t)}})}},{title:"\u0421\u0442\u0430\u0442\u0443\u0441",dataIndex:"status",key:"status",render:function(e,t){return a.a.createElement(m.a,{value:e||null,onChange:function(e){return v(e,t)}},a.a.createElement(j,{value:"\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"},"\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"),a.a.createElement(j,{value:"\u041e\u043f\u043b\u0430\u0447\u0435\u043d"},"\u041e\u043f\u043b\u0430\u0447\u0435\u043d"),a.a.createElement(j,{value:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d"},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d"),a.a.createElement(j,{value:"\u041e\u0442\u043c\u0435\u043d\u0435\u043d"},"\u041e\u0442\u043c\u0435\u043d\u0435\u043d"))}}];return a.a.createElement("div",{className:"container"},a.a.createElement(k.a,{value:s,onChange:function(e){return h(e.target.value)},placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0432 \u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043a\u043b\u044e\u0447 \u0434\u043e\u0441\u0442\u0443\u043f\u0430. \u0411\u0435\u0437 \u043d\u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u044b."}),a.a.createElement(E.a,{columns:w,dataSource:n}))},x=m.a.Option,w=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)(""),i=Object(o.a)(u,2),s=i[0],h=i[1],v=function(){var e=Object(d.a)(l.a.mark((function e(t,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.map((function(e){if(e._id===r._id){var n=Object(f.a)({},e);return n.status=t,n}return e}));case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(l.a.mark((function e(t,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.map((function(e){if(e._id===r._id){var n=Object(f.a)({},e);return n.track=t,n}return e}));case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.key=s,j(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){e.key=s,fetch("https://saharnypossum.herokuapp.com/pay/orders",{method:"PATCH",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e.error?O(e.error):O("\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b")}))},O=function(e){p.b.info(e)};Object(r.useEffect)((function(){fetch("https://saharnypossum.herokuapp.com/pay/ordersOld",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({})}).then((function(e){return e.json()})).then((function(e){console.log(e),c(e)}))}),[]);var w=[{title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",dataIndex:"user",key:"user",render:function(e){return a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://vk.com/id".concat(e)},"http://vk.com/id".concat(e))}},{title:"\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437\u0430",dataIndex:"num",key:"num",render:function(e){return e}},{title:"\u0421\u0443\u043c\u043c\u0430",dataIndex:"sum",key:"sum",render:function(e){return e}},{title:"\u0414\u0435\u0442\u0430\u043b\u0438",dataIndex:"jsonParams",key:"jsonParams",render:function(e,t){return a.a.createElement("div",null,a.a.createElement("pre",null,JSON.stringify(e,"",2)),a.a.createElement(y.a,{type:"dashed",onClick:function(){return g(t)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}},{title:"Track-code",dataIndex:"track",key:"track",render:function(e,t){return a.a.createElement(k.a,{value:e,placeholder:!e&&"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d",onChange:function(e){return b(e.target.value,t)}})}},{title:"\u0421\u0442\u0430\u0442\u0443\u0441",dataIndex:"status",key:"status",render:function(e,t){return a.a.createElement(m.a,{value:e||null,onChange:function(e){return v(e,t)}},a.a.createElement(x,{value:"\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"},"\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"),a.a.createElement(x,{value:"\u041e\u043f\u043b\u0430\u0447\u0435\u043d"},"\u041e\u043f\u043b\u0430\u0447\u0435\u043d"),a.a.createElement(x,{value:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d"},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d"),a.a.createElement(x,{value:"\u041e\u0442\u043c\u0435\u043d\u0435\u043d"},"\u041e\u0442\u043c\u0435\u043d\u0435\u043d"))}}];return a.a.createElement("div",{className:"container"},a.a.createElement(k.a,{value:s,onChange:function(e){return h(e.target.value)},placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0432 \u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043a\u043b\u044e\u0447 \u0434\u043e\u0441\u0442\u0443\u043f\u0430. \u0411\u0435\u0437 \u043d\u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u044b."}),a.a.createElement(E.a,{columns:w,dataSource:n}))},_=i.a.TabPane,C=function(){var e=Object(r.useState)("items"),t=Object(o.a)(e,2),n=t[0],c=t[1];return a.a.createElement(i.a,{defaultActiveKey:n,onChange:function(e){c(e)}},a.a.createElement(_,{tab:"\u0422\u043e\u0432\u0430\u0440\u044b",key:"items"},a.a.createElement(g,null)),a.a.createElement(_,{tab:"\u0417\u0430\u043a\u0430\u0437\u044b (\u043d\u043e\u0432\u044b\u0435)",key:"orders"},a.a.createElement(O,null)),a.a.createElement(_,{tab:"\u0417\u0430\u043a\u0430\u0437\u044b (\u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435)",key:"orders_old"},a.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[168,1,2]]]);
//# sourceMappingURL=main.72491e42.chunk.js.map
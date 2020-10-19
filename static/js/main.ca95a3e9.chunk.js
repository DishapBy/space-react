(this["webpackJsonpspace-react"]=this["webpackJsonpspace-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/logo.d5ab31ce.svg"},25:function(e,t,a){e.exports=a.p+"static/media/earth.6160d272.mp4"},26:function(e,t,a){e.exports=a.p+"static/media/mars.50a0c445.mp4"},27:function(e,t,a){e.exports=a.p+"static/media/moon.c576729b.mp4"},28:function(e,t,a){e.exports=a.p+"static/media/space.7a69e904.mp4"},29:function(e,t,a){e.exports=a.p+"static/media/falcon1.4e43f38e.png"},30:function(e,t,a){e.exports=a.p+"static/media/falcon9.70c0d6ca.png"},31:function(e,t,a){e.exports=a.p+"static/media/falconHeavy.c1e42c98.png"},32:function(e,t,a){e.exports=a.p+"static/media/starship.9502c370.png"},38:function(e,t,a){e.exports=a(75)},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(21),r=a.n(l),s=a(12),m=a(22),o=a(37),i=a(36),u=(a(43),a(7)),d=a(1),p=(a(44),a(10)),E=a.n(p),h=function(e){return c.a.createElement("header",{className:"header"},c.a.createElement(u.b,{to:"/"},c.a.createElement("img",{src:E.a,alt:"Logo Space X",e:"logo"})),c.a.createElement("nav",{className:"main-nav nav"},c.a.createElement("ul",{className:"list"},e.rockets.map((function(t,a){return c.a.createElement("li",{key:a,className:"item"},c.a.createElement(u.b,{to:"/rocket/".concat(t.replace(" ","_")),onClick:function(){e.changeRocket(t)},className:"item-link"},t))})))),c.a.createElement("nav",{className:"secondary-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement(u.c,{exact:!0,to:"/space-react/",className:"item-link",activeClassName:"active"},"Home")),c.a.createElement("li",{className:"item"},c.a.createElement(u.c,{to:"/calendar",className:"item-link",activeClassName:"active"},"Calendar")))))},f=(a(49),function(e){var t=e.elon_twitter,a=e.flickr,n=e.twitter,l=e.website;return c.a.createElement("footer",{className:"footer"},c.a.createElement("img",{src:E.a,alt:"logo Space X",className:"logo"}),c.a.createElement("nav",{className:"footer-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Elon Musk Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:a,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Flickr")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:l,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Website")))),c.a.createElement("p",{className:"footer-text"},"For additional questions, contact",c.a.createElement("a",{className:"footer-link",href:"mailto:rideshare@spacex.com"},"rideshare@spacex.com")))}),b=(a(50),a(24)),N=a.n(b),k=(a(58),a(25)),v=a.n(k),g=a(26),y=a.n(g),w=a(27),_=a.n(w),x=a(28),O=a.n(x),C={"Falcon 1":_.a,"Falcon 9":v.a,"Falcon Heavy":y.a,other:O.a},F=function(e){return console.log(C.hasOwnProperty(e.rocket)),c.a.createElement("section",{className:"main"},c.a.createElement("h1",{className:"title"},e.name||e.rocket),e.rocket&&c.a.createElement("div",{className:"video-container"},c.a.createElement("video",{className:"video",autoPlay:!0,loop:!0,muted:!0,src:C.hasOwnProperty(e.rocket)?C[e.rocket]:C.other})))},S=a(29),j=a.n(S),R=a(30),T=a.n(R),L=a(31),P=a.n(L),D=a(32),I=a.n(D),A={"Falcon 1":j.a,"Falcon 9":T.a,"Falcon Heavy":P.a,Starship:I.a},H=function(e){var t=e.name,a=e.height,n=e.diameter,l=e.mass,r=e.payload_weights;return console.log(t),c.a.createElement(c.a.Fragment,null,c.a.createElement(F,{rocket:t}),c.a.createElement("section",{className:"features"},c.a.createElement("h2",{className:"features-title"},t," ",c.a.createElement("br",null),"Overview"),c.a.createElement("div",{className:"overview"},c.a.createElement("table",{className:"table"},c.a.createElement("caption",{className:"table-title"},"Size"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"HEIGHT"),c.a.createElement("td",{className:"table-column"},a.meters," m / ",a.feet," ft")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"DIAMETER"),c.a.createElement("td",{className:"table-column"},n.meters," m / 5.5 ft")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"MASS"),c.a.createElement("td",{className:"table-column"},l.kg," kg / ",l.lb," lb")),r.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:"table-column"},"PAYLOAD TO ",e.id.toUpperCase()),c.a.createElement("td",{className:"table-column"},e.kg," kg / ",e.lb," lb"))})))),c.a.createElement(N.a,{speed:14},c.a.createElement("img",{src:A[t],alt:"rocket",className:"rocket"})),c.a.createElement("article",null,c.a.createElement("h3",{className:"features-subtitle"},"DESCRIPTION"),c.a.createElement("p",{className:"features-text"},"The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.")))))},M=(a(59),a(13)),U=a(8),q=a.n(U),X=a(11),B=function e(){var t=this;Object(s.a)(this,e),this.startUrl="https://api.spacexdata.com/v4/",this.getResource=function(){var e=Object(X.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Error ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getRocket=Object(X.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.startUrl+"rockets");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getLauncher=Object(X.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.startUrl+"launches/past");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getCompany=Object(X.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.startUrl+"company  ");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},J=new B,z=function(){var e=Object(n.useState)([]),t=Object(M.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){J.getLauncher().then((function(e){return c(e)}))}),[]);return{data:a,getLaunch:function(e){return a.find((function(t){return t.id===e}))}}},G=function(){var e=z().data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(F,{name:"Calendar"}),c.a.createElement("section",{className:"calendar"},c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"calendar-list"},e.map((function(e){return c.a.createElement("li",{key:e.id,className:"calendar-item"},c.a.createElement("article",{className:"launches"},c.a.createElement("div",{className:"launches-image"},c.a.createElement("img",{src:e.links.patch.small,alt:""})),c.a.createElement("div",{className:"launches-content"},c.a.createElement("h2",{className:"launches-title"},e.name),c.a.createElement(u.b,{to:"/details/".concat(e.id),className:"button launches-details"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))}))))))},W=(a(61),function(e){var t=e.company;return c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement("hgroup",{className:"title"},c.a.createElement("h1",null,c.a.createElement("img",{className:"logo-title",src:E.a,alt:t.name})),c.a.createElement("h2",{className:"subtitle"},t.summary)),c.a.createElement("div",{className:"row"},c.a.createElement("table",{className:"home_table home_table-manager"},c.a.createElement("caption",{className:"home_table-title"},"Manager"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CEO"),c.a.createElement("td",{className:"home_table-column"},t.ceo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"COO"),c.a.createElement("td",{className:"home_table-column"},t.coo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO"),c.a.createElement("td",{className:"home_table-column"},t.cto)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO PROPULSION"),c.a.createElement("td",{className:"home_table-column"},t.cto_propulsion)))),c.a.createElement("table",{className:"home_table home_table-location"},c.a.createElement("caption",{className:"home_table-title"},"Location"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"State"),c.a.createElement("td",{className:"home_table-column"},t.headquarters.state)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"City"),c.a.createElement("td",{className:"home_table-column"},t.headquarters.city)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"Address"),c.a.createElement("td",{className:"home_table-column"},t.headquarters.address)))),c.a.createElement("video",{id:"video",autoPlay:!0,loop:!0,muted:!0,className:"responsive-video",width:"100%",height:"100%",preload:"auto"},c.a.createElement("source",{type:"video/mp4",src:"https://www.spacex.com/media/mission_reusability.mp4"}),c.a.createElement("source",{type:"video/webm",src:"https://www.spacex.com/media/mission_reusability.webm"})))))}),Y=(a(62),a(33)),K=function(e){var t=Object(n.useState)(null),a=Object(M.a)(t,2),l=a[0],r=a[1],s=z().getLaunch;Object(n.useEffect)((function(){r(s(e.match.params.id))}));e.match.params.id;console.log(l);var m=Object(d.e)();return l?c.a.createElement(c.a.Fragment,null,c.a.createElement(F,{name:l.name}),c.a.createElement("main",{className:"details"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"details-row"},c.a.createElement("div",{className:"details-image"},c.a.createElement("img",{src:l.links.patch.small,alt:null===l||void 0===l?void 0:l.name})),c.a.createElement("div",{className:"details-content"},c.a.createElement("p",{className:"details-description"},null===l||void 0===l?void 0:l.details))),c.a.createElement(Y.a,{className:"details-youtube",videoId:l.links.youtube_id})),c.a.createElement("a",{onClick:m.goBack,className:"button button-back"},"go back"))):null},Q=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).fetchData=new B,e.state={rocket:"Falcon 9",rocketFeatures:null,rockets:[],company:null},e.updateRocket=function(){e.fetchData.getRocket().then((function(t){return e.setState({rockets:t.map((function(e){return e.name}))}),t})).then((function(t){return t.find((function(t){return t.name===e.state.rocket}))})).then((function(t){return e.setState({rocketFeatures:t})}))},e.changeRocket=function(t){e.setState({rocket:t},e.updateRocket)},e.updateCompany=function(){e.fetchData.getCompany().then((function(t){return e.setState({company:t})}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updateRocket(),this.updateCompany()}},{key:"render",value:function(){var e=this;return c.a.createElement(u.a,null,c.a.createElement(h,{rockets:this.state.rockets,changeRocket:this.changeRocket}),c.a.createElement(d.a,{exact:!0,path:"/space-react/",render:function(){return e.state.company&&c.a.createElement(W,{company:e.state.company})}}),c.a.createElement(d.a,{path:"/rocket/:rocket",render:function(){return e.state.rocketFeatures&&c.a.createElement(H,e.state.rocketFeatures)}}),c.a.createElement(d.a,{path:"/calendar",component:G}),c.a.createElement(d.a,{path:"/details/:id",component:K}),this.state.company&&c.a.createElement(f,this.state.company))}}]),a}(c.a.Component);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Q,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ca95a3e9.chunk.js.map
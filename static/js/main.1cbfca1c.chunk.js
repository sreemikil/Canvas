(this.webpackJsonpcanvas=this.webpackJsonpcanvas||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(5),a=n.n(o),u=(n(11),n(4)),i=n.n(u),s=n(6),l=n(2),f=n(0),d=["Black","White","red","green","yellow","blue"],p=["1","2","4","8","10"];var b=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(r.useState)(d[0]),c=Object(l.a)(n,2),o=c[0],a=c[1],u=Object(r.useState)(p[0]),b=Object(l.a)(u,2),x=b[0],j=b[1],g=Object(r.useState)(!1),h=Object(l.a)(g,2),O=h[0],v=h[1],m=Object(r.useState)({x:0,y:0}),y=Object(l.a)(m,2),k=y[0],w=y[1];Object(r.useEffect)((function(){e.current&&(t.current=e.current.getContext("2d"))}),[]);var C=Object(r.useCallback)((function(e,n){O&&(t.current.beginPath(),t.current.strokeStyle=o,t.current.lineWidth=x,t.current.lineJoin="round",t.current.moveTo(k.x,k.y),t.current.lineTo(e,n),t.current.closePath(),t.current.stroke(),w({x:e,y:n}))}),[k,O,o,x,w]),R=function(){var t=Object(s.a)(i.a.mark((function t(){var n,r,c,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.current.toDataURL("image/png"),t.next=3,fetch(n);case 3:return t.next=5,t.sent.blob();case 5:r=t.sent,c=URL.createObjectURL(r),(o=document.createElement("a")).href=c,o.download="image.png",o.click();case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(e){v(!1)};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("canvas",{style:{border:"1px solid #000"},width:1200,height:600,ref:e,onMouseDown:function(e){w({x:e.pageX,y:e.pageY}),v(!0)},onMouseUp:L,onMouseLeave:L,onMouseMove:function(e){C(e.pageX,e.pageY)}}),Object(f.jsx)("br",{}),Object(f.jsx)("select",{style:{padding:"8px 24px",color:"#0062ff",border:"2px solid #0062ff",borderRadius:"4px"},value:o,onChange:function(e){return a(e.target.value)},children:d.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}))}),Object(f.jsx)("select",{style:{marginLeft:"24px",padding:"8px 24px",color:"#0062ff",border:"2px solid #0062ff",borderRadius:"4px"},value:x,onChange:function(e){return j(e.target.value)},children:p.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}))}),Object(f.jsx)("button",{style:{marginLeft:"24px",padding:"8px 24px",color:"#0062ff",border:"2px solid #0062ff",borderRadius:"4px"},onClick:function(){t.current.clearRect(0,0,t.current.canvas.width,t.current.canvas.height)},children:"Clear"}),Object(f.jsx)("button",{style:{marginLeft:"24px",padding:"8px 24px",background:"#0062ff",color:"#ffffff",border:"2px solid #0062ff",borderRadius:"4px"},onClick:R,children:"Download"})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(b,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.1cbfca1c.chunk.js.map
(this.webpackJsonpgameoflife=this.webpackJsonpgameoflife||[]).push([[0],{24:function(e,t,n){e.exports=n(34)},29:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),o=(n(29),n(13)),u=n(12),i=function(e){return r.a.createElement("div",{className:e.boxClass,id:e.id,onClick:function(){return e.selectBox(e.row,e.col)}})},s=function(e){for(var t=14*e.cols+1,n=[],a="",c=0;c<e.rows;c++)for(var l=0;l<e.cols;l++){var o=c+"_"+l;a=e.gridFull[c][l]?"box on":"box off",n.push(r.a.createElement(i,{boxClass:a,key:o,boxId:o,row:c,col:l,selectBox:e.selectBox}))}return r.a.createElement("div",{className:"grid",style:{width:t}},n)},f=n(36),m=n(37),b=n(11),d=function(e){return r.a.createElement("div",{className:"center"},r.a.createElement(f.a,null,r.a.createElement("button",{className:"btn btn default",onClick:function(){return e.playButton()}},"Play"),r.a.createElement("button",{className:"btn btn default",onClick:function(){return e.pauseButton()}},"Pause"),r.a.createElement("button",{className:"btn btn default",onClick:function(){return e.clear()}},"Clear"),r.a.createElement("button",{className:"btn btn default",onClick:function(){return e.slow()}},"Slow"),r.a.createElement("button",{className:"btn btn default",onClick:function(){return e.fast()}},"Fast"),r.a.createElement("button",{className:"btn btn default",onClick:function(){return e.seed()}},"Seed"),r.a.createElement(m.a,{title:"Grid Size",id:"size-menu",onSelect:function(t){e.gridSize(t)}},r.a.createElement(b.a.Item,{eventKey:"1"},"20x10"),r.a.createElement(b.a.Item,{eventKey:"2"},"50x30"),r.a.createElement(b.a.Item,{eventKey:"3"},"70x50"))))},v=30,E=50,p=100,k=function(){var e=Object(a.useRef)(),t=Object(a.useState)(0),n=Object(u.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(Array(v).fill().map((function(){return Array(E).fill(!1)}))),f=Object(u.a)(i,2),m=f[0],b=f[1],k=Object(a.useState)(null),x=Object(u.a)(k,2),y=x[0],h=x[1];Object(a.useEffect)((function(){e.current||(j(),w(),e.current=!0,console.log("This Runs"))}),[]);var j=function(){for(var e=Object(o.a)(m),t=0;t<v;t++)for(var n=0;n<E;n++)1===Math.floor(4*Math.random())&&(e[t][n]=!0);b(e)},w=function(){clearInterval(y),h(setInterval((function(){C()}),p))},O=function(){clearInterval(y);var e=Array(v).fill().map((function(){return Array(E).fill(!1)}));b(e),l(0)},C=function(){for(var e=m,t=Object(o.a)(m),n=0;n<v;n++)for(var a=0;a<E;a++){var r=0;n>0&&e[n-1][a]&&r++,n>0&&a>0&&e[n-1][a-1]&&r++,n>0&&a<E-1&&e[n-1][a+1]&&r++,a<E-1&&e[n][a+1]&&r++,a>0&&e[n][a-1]&&r++,n<v-1&&e[n+1][a]&&r++,n<v-1&&a>0&&e[n+1][a-1]&&r++,n<v-1&&a<E-1&&e[n+1][a+1]&&r++,e[n][a]&&(r<2||r>3)&&(t[n][a]=!1),e[n][a]||3!==r||(t[n][a]=!0)}l((function(e){return e+1})),b(t)};return r.a.createElement("div",null,r.a.createElement("h1",null,"The Game of Life"),r.a.createElement(d,{playButton:w,pauseButton:function(){clearInterval(y)},slow:function(){p=1e3,w()},fast:function(){p=100,w()},clear:O,seed:j,gridSize:function(e){switch(e){case"1":v=10,E=20;break;case"2":v=30,E=50;break;case"3":v=50,E=70;break;default:v=30,E=50}O()}}),r.a.createElement(s,{gridFull:m,rows:v,cols:E,selectBox:function(e,t){var n=Object(o.a)(m);n[e][t]=!n[e][t],b(n)}}),r.a.createElement("h2",null,"Generations: ",c))};var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};l.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.753902e6.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(86)},47:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(36),s=n.n(r),o=(n(47),n(11)),l=n(12),c=n(13),d=n(16),p=n(14),u=n(17),m=n(2),g=n(24),b=n(4),f=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.props.list){var t=this.props.list,n=t.id,r=t.listName;return i.a.createElement("div",{key:n},i.a.createElement("button",{onClick:function(){e.props.addToList("".concat(n))}},"Add to list ",r),i.a.createElement("h1",null,r),i.a.createElement(b.c,{droppableId:n},function(e,n){return i.a.createElement("div",{className:"my-lists",ref:e.innerRef,style:(r=n.isDraggingOver,{background:r?"lightblue":"lightgrey",display:"flex",padding:8})},t.items.map(function(e,t){return i.a.createElement(a.Fragment,{key:t},e?i.a.createElement(b.b,{key:e.id,draggableId:e.id,index:t},function(t,n){return i.a.createElement("div",Object.assign({className:"item-style",ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:(a=n.isDragging,r=t.draggableProps.style,Object(m.a)({userSelect:"none",padding:16,margin:"0 ".concat(8,"px 0 0"),background:a?"lightgreen":"grey"},r))}),e.content);var a,r}):i.a.createElement("div",{className:"no-items"}))}),e.placeholder);var r}))}}}]),t}(a.Component),v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},function(e,t){return t}).map(function(e){return{id:"item-".concat(e+t),content:"item ".concat(e+t)}})},y=function(e,t,n){var a,i=(a=e.items?Array.from(e.items):Array.from(e)).splice(t,1),r=Object(g.a)(i,1)[0];return a.splice(n,0,r),a},h=function(e,t,n,a){var i=Array.from(e.items),r=Array.from(t.items),s=i.splice(n.index,1),o=Object(g.a)(s,1)[0];r.splice(a.index,0,o);var l={};return l[n.droppableId]=i,l[a.droppableId]=r,l},O=0,w=2,L=3,j=3,E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).createNewList=function(e){var t="droppable"+L,a=v(1,j),i=n.state.lists,r={listName:e,id:t,items:a};i.push(r),n.setState({lists:i}),n.id2List=Object(m.a)({},n.id2List,Object(o.a)({},t,e)),L++,j++,w++},n.addToList=function(e){O++,e=n.id2List[e];var t=n.state.lists,a=t.find(function(t){return t.listName===e}).items;a.push({id:"new-item-".concat(O),content:"new content ".concat(O)}),n.setState({lists:t.map(function(t){return t.listName===e?t=Object(m.a)({},t,{items:a}):t})})},n.getList=function(e){var t=n.state.lists,a=n.id2List[e];return t.find(function(e){return e.listName===a})},n.onDragEnd=function(e){if("COLUMN"===e.type){if(!e.destination)return;var t=y(n.state.lists,e.source.index,e.destination.index);n.setState({lists:t})}else{var a=e.source,i=e.destination;if(!i)return;if(a.droppableId===i.droppableId){var r=y(n.getList(a.droppableId),a.index,i.index),s=n.id2List[a.droppableId];n.setState({lists:n.state.lists.map(function(e){return e.listName===s?e=Object(m.a)({},e,{items:r}):e})})}else{var o=h(n.getList(a.droppableId),n.getList(i.droppableId),a,i),l=n.id2List[a.droppableId],c=n.id2List[i.droppableId],d=[],p=!0,u=!1,g=void 0;try{for(var b,f=o[i.droppableId][Symbol.iterator]();!(p=(b=f.next()).done);p=!0){var v=b.value;d.push(v)}}catch(k){u=!0,g=k}finally{try{p||null==f.return||f.return()}finally{if(u)throw g}}var O=[],w=!0,L=!1,j=void 0;try{for(var E,N=o[a.droppableId][Symbol.iterator]();!(w=(E=N.next()).done);w=!0){var I=E.value;O.push(I)}}catch(k){L=!0,j=k}finally{try{w||null==N.return||N.return()}finally{if(L)throw j}}n.setState({lists:n.state.lists.map(function(e){return e.listName===l?e=Object(m.a)({},e,{items:O}):e.listName===c?e=Object(m.a)({},e,{items:d}):e})})}}},n.id2List={droppable1:"newList0",droppable2:"newList1"},n.state={lists:[{listName:"newList0",id:"droppable1",items:[{id:"item-0",content:"item 0"},{id:"item-1",content:"item 1"}]},{listName:"newList1",id:"droppable2",items:[{id:"item-2",content:"item 2"}]}]},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(a.Fragment,null,i.a.createElement("button",{onClick:function(){e.createNewList("newlist".concat(w))}},"Add list"),i.a.createElement(b.a,{onDragEnd:this.onDragEnd},i.a.createElement(b.c,{droppableId:"droppable",direction:"horizontal",type:"COLUMN"},function(t,n){return i.a.createElement("div",Object.assign({ref:t.innerRef,style:(a=n.isDraggingOver,{background:a?"lightblue":"lightgrey",display:"flex",padding:8})},t.droppableProps),e.state.lists.map(function(t,n){return i.a.createElement("div",{className:"list-wrap",key:t.id},i.a.createElement(b.b,{draggableId:t.id,index:n},function(n,a){return i.a.createElement("div",Object.assign({className:"list-style",ref:n.innerRef},n.draggableProps,n.dragHandleProps,{style:(r=a.isDragging,s=n.draggableProps.style,Object(m.a)({userSelect:"none",padding:16,margin:"0 ".concat(8,"px 0 0"),background:r?"lightgreen":"grey"},s))}),i.a.createElement(f,{addToList:e.addToList,list:t}));var r,s}))}),t.placeholder);var a})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.9c3b36b0.chunk.js.map
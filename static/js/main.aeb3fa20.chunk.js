(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(85)},46:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(35),i=n.n(o),d=(n(46),n(4)),l=n(5),s=n(7),c=n(6),u=n(8),p=n(2),m=n(23),f=n(9),b=function(e){function t(){return Object(d.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){if("addItem"===this.props.itemId){var e=this.props.listId;!function(e,t,n){document.querySelector(e).addEventListener("keypress",function(a){if("Enter"===a.key){var r=document.querySelector(e).value;"#list-name-input"===e?t(r):t(n,r)}})}("#".concat(e,"-input"),this.props.addToList,e),function(e,t){var n=document.querySelector(e);if(n.createTextRange){var a=n.createTextRange();a.move("character",t),a.select()}else n.focus(),void 0!==n.selectionStart&&n.setSelectionRange(t,t)}("#".concat(e,"-input"),0)}}},{key:"render",value:function(){var e=this;if("addItem"===this.props.itemId){var t=this.props.listId,n=this.props.itemId;return r.a.createElement("input",{onBlur:function(){return e.props.deleteItem(t,n)},id:"".concat(t,"-input"),className:"item-content-input",autoComplete:"off",placeholder:"Enter item content"})}var a=this.props.itemId;return r.a.createElement("div",{id:"".concat(a)},this.props.content)}}]),t}(a.Component),v=function(e){function t(){return Object(d.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.list,n=t.id,o=t.listName;return r.a.createElement("div",{key:n},r.a.createElement("i",{onClick:function(){return e.props.confirmDeletePopup("block",n)},className:"far fa-times-circle"}),"addList"===n?r.a.createElement("input",{autoComplete:"off",id:"list-name-input",placeholder:"Enter list name"}):r.a.createElement("h1",{className:"list-title-style"},o),r.a.createElement(f.c,{isDropDisabled:"addList"===n,droppableId:n},function(o,i){return r.a.createElement("div",{className:"my-lists",ref:o.innerRef,style:(d=i.isDraggingOver,{background:d?"lightblue":"gray",padding:"5px",width:"270px",minHeight:"20vh",maxHeight:"70vh",overflow:"auto"})},t.items.map(function(t,o){return r.a.createElement(a.Fragment,{key:o},t?r.a.createElement(f.b,{isDragDisabled:"addItem"===t.id,key:"addItem"===t.id?t.id+"-"+n:t.id,draggableId:"addItem"===t.id?t.id+"-"+n:t.id,index:o},function(a,o){return r.a.createElement("div",Object.assign({className:"item-style",ref:a.innerRef},a.draggableProps,a.dragHandleProps,{style:(i=o.isDragging,d=a.draggableProps.style,Object(p.a)({userSelect:"none",padding:"16px",margin:"0 0 4px 0",border:"1px solid black",width:"220px",background:i?"lightgreen":"lightgray"},d))}),r.a.createElement("i",{onClick:function(){return e.props.confirmDeletePopup("block",n,t.id)},className:"far fa-times-circle"}),r.a.createElement("div",{style:{display:"none"},id:"list-id-".concat(n)},n),r.a.createElement(b,{deleteItem:e.props.deleteItem,addToList:e.props.addToList,listId:n,itemId:t.id,content:t.content}));var i,d}):r.a.createElement("div",{className:"no-items"}))}),o.placeholder);var d}),r.a.createElement("button",{onClick:function(){return e.props.startAdd(n)}},"Add item"))}}]),t}(a.Component),g=function(e,t,n){var a,r=(a=e.items?Array.from(e.items):Array.from(e)).splice(t,1),o=Object(m.a)(r,1)[0];return a.splice(n,0,o),a},y=function(e,t,n,a){var r=Array.from(e.items),o=Array.from(t.items),i=r.splice(n.index,1),d=Object(m.a)(i,1)[0];o.splice(a.index,0,d);var l={};return l[n.droppableId]=r,l[a.droppableId]=o,l},h=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).deleteList=function(e){n.confirmDeletePopup("none");var t=n.state.lists.filter(function(t){return t.id!==e});n.setState({lists:t}),n.props.saveBoard("".concat(n.props.boardInfo.boardId),t)},n.createNewList=function(e){var t="droppable"+n.droppableNumber,a=n.state.lists,r={listName:e,id:t,items:[]};a.push(r),n.setState({lists:a}),document.getElementById("list-name-input").value="",n.droppableNumber++,n.props.saveBoard("".concat(n.props.boardInfo.boardId),a)},n.deleteItem=function(e,t){n.confirmDeletePopup("none","list","item");var a=n.state.lists,r=a.find(function(t){return t.id===e}),o=r.items.filter(function(e){return e.id!==t});r.items=o,n.setState({lists:a.map(function(t){return t.id===e?r:t})}),n.props.saveBoard("".concat(n.props.boardInfo.boardId),a.map(function(t){return t.id===e?r:t}))},n.addToList=function(e,t){var a=n.state.lists,r=a.find(function(t){return t.id===e}).items;(r=r.filter(function(e){return"addItem"!==e.id})).push({id:"item-".concat(n.itemIndex),content:t}),r.push({id:"addItem",content:"Add item"}),n.itemIndex++,n.setState({lists:a.map(function(t){return t.id===e?t=Object(p.a)({},t,{items:r}):t})}),n.props.setCaretPosition("#".concat(e,"-input"),0),n.props.saveBoard("".concat(n.props.boardInfo.boardId),a.map(function(t){return t.id===e?t=Object(p.a)({},t,{items:r}):t}))},n.getList=function(e){return n.state.lists.find(function(t){return t.id===e})},n.onDragEnd=function(e){if("COLUMN"===e.type){if(!e.destination)return;var t=g(n.state.lists,e.source.index,e.destination.index);n.setState({lists:t}),n.props.saveBoard("".concat(n.props.boardInfo.boardId),t)}else{var a=e.source,r=e.destination;if(!r)return;if(a.droppableId===r.droppableId){var o=g(n.getList(a.droppableId),a.index,r.index);n.setState({lists:n.state.lists.map(function(e){return e.id===a.droppableId?e=Object(p.a)({},e,{items:o}):e})}),n.props.saveBoard("".concat(n.props.boardInfo.boardId),n.state.lists.map(function(e){return e.id===a.droppableId?e=Object(p.a)({},e,{items:o}):e}))}else{var i=y(n.getList(a.droppableId),n.getList(r.droppableId),a,r),d=[],l=!0,s=!1,c=void 0;try{for(var u,m=i[r.droppableId][Symbol.iterator]();!(l=(u=m.next()).done);l=!0){var f=u.value;d.push(f)}}catch(S){s=!0,c=S}finally{try{l||null==m.return||m.return()}finally{if(s)throw c}}var b=[],v=!0,h=!1,I=void 0;try{for(var E,B=i[a.droppableId][Symbol.iterator]();!(v=(E=B.next()).done);v=!0){var k=E.value;b.push(k)}}catch(S){h=!0,I=S}finally{try{v||null==B.return||B.return()}finally{if(h)throw I}}n.setState({lists:n.state.lists.map(function(e){return e.id===a.droppableId?e=Object(p.a)({},e,{items:b}):e.id===r.droppableId?e=Object(p.a)({},e,{items:d}):e})}),n.props.saveBoard("".concat(n.props.boardInfo.boardId),n.state.lists.map(function(e){return e.id===a.droppableId?e=Object(p.a)({},e,{items:b}):e.id===r.droppableId?e=Object(p.a)({},e,{items:d}):e}))}}},n.confirmDeletePopup=function(e,t,n){if(n){var a=document.getElementById("confirm-item-delete-popup");if("none"===e)a.style="display: none;";else a.style="display: block;",document.getElementById("item-id").textContent=n,document.getElementById("item-list-id").textContent=t}else{var r=document.getElementById("confirm-list-delete-popup");if("none"===e)r.style="display: none;";else r.style="display: block;",document.getElementById("list-id").textContent=t}},n.startAdd=function(e){var t=n.state.lists,a=t.find(function(t){return t.id===e}).items;a.push({id:"addItem",content:"Add item"}),n.setState({lists:t.map(function(t){return t.id===e?t=Object(p.a)({},t,{items:a}):t})})},n.itemIndex=0,n.droppableNumber=0,n.state={lists:[]},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){if(this.props.dragElement("confirm-item-delete-popup"),this.props.dragElement("confirm-list-delete-popup"),this.props.boardInfo.lists&&0!==this.props.boardInfo.lists.length){var e=this.props.boardInfo.lists;if(this.setState({lists:e}),e.length>0){var t=e.slice().sort(function(e,t){return e.id.slice(9)-t.id.slice(9)}),n=t[t.length-1].id.slice(9);this.droppableNumber=parseInt(n)+1;var a=[],r=!0,o=!1,i=void 0;try{for(var d,l=e[Symbol.iterator]();!(r=(d=l.next()).done);r=!0){var s=d.value,c=!0,u=!1,p=void 0;try{for(var m,f=s.items[Symbol.iterator]();!(c=(m=f.next()).done);c=!0){var b=m.value;a.push(b)}}catch(I){u=!0,p=I}finally{try{c||null==f.return||f.return()}finally{if(u)throw p}}}}catch(I){o=!0,i=I}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}if(a.sort(function(e,t){return e.id.slice(5)-t.id.slice(5)}),a[a.length-1]&&"addItem"!==a[a.length-1].id){var v=a[a.length-1].id.slice(5);this.itemIndex=parseInt(v)+1}}}var g,y,h;this.props.setCaretPosition("#list-name-input",0),g="#list-name-input",y=this.createNewList,document.querySelector(g).addEventListener("keypress",function(e){if("Enter"===e.key){var t=document.querySelector(g).value;"#list-name-input"===g?y(t):y(h,t)}})}},{key:"render",value:function(){var e=this,t=this.state.lists.map(function(t,n){return r.a.createElement("div",{className:"list-wrap",key:t.id},r.a.createElement(f.b,{draggableId:t.id,index:n,isDragDisabled:"addList"===t.id},function(n,a){return r.a.createElement("div",Object.assign({className:"list-style",ref:n.innerRef},n.draggableProps,n.dragHandleProps,{style:(o=a.isDragging,i=n.draggableProps.style,Object(p.a)({userSelect:"none",padding:"5px",margin:"0 8px 0 0",minHeight:"20%",width:"280px",border:"1px solid black",background:o?"lightgreen":"grey"},i))}),r.a.createElement(v,{deleteItem:e.deleteItem,startAdd:e.startAdd,addToList:e.addToList,confirmDeletePopup:e.confirmDeletePopup,popupSwitch:e.switchItemPopup,list:t}));var o,i}))});return r.a.createElement("div",{id:"board-wrap"},r.a.createElement("button",{onClick:function(){return e.props.closeBoard("".concat(e.props.boardInfo.boardId),e.state.lists)}},"Home"),r.a.createElement("div",{id:"board-title"},this.props.boardInfo.boardName),r.a.createElement(f.a,{onDragEnd:this.onDragEnd},r.a.createElement(f.c,{droppableId:"droppable",direction:"horizontal",type:"COLUMN"},function(e,n){return r.a.createElement("div",Object.assign({id:"board",ref:e.innerRef,style:(a=n.isDraggingOver,{background:a?"lightblue":"white",display:"flex",padding:"20px 8px 8px 8px",flexWrap:"no-wrap",width:"fit-content",height:"fit-content",alignSelf:"center"})},e.droppableProps),t,r.a.createElement("div",{id:"list-name-input-style"},r.a.createElement("input",{autoComplete:"off",id:"list-name-input",placeholder:"Enter list name"})),e.placeholder);var a})),r.a.createElement("div",{id:"confirm-item-delete-popup",className:"pop-ups"},r.a.createElement("i",{onClick:function(){return e.confirmDeletePopup("none","list","item")},className:"far fa-times-circle"}),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"none"},id:"item-id"}),r.a.createElement("div",{style:{display:"none"},id:"item-list-id"}),r.a.createElement("p",null,"Delete item?"),r.a.createElement("button",{onClick:function(){return e.deleteItem("".concat(document.getElementById("item-list-id").textContent),"".concat(document.getElementById("item-id").textContent))},id:"yes-button"},"Yes"),r.a.createElement("button",{onClick:function(){return e.confirmDeletePopup("none","list","item")}},"No")),r.a.createElement("div",{id:"confirm-list-delete-popup",className:"pop-ups"},r.a.createElement("i",{onClick:function(){return e.confirmDeletePopup("none")},className:"far fa-times-circle"}),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"none"},id:"list-id"}),r.a.createElement("p",null,"Delete list?"),r.a.createElement("button",{onClick:function(){return e.deleteList("".concat(document.getElementById("list-id").textContent))},id:"yes-button"},"Yes"),r.a.createElement("button",{onClick:function(){return e.confirmDeletePopup("none")}},"No")))}}]),t}(a.Component),I=function(e){var t=0,n=0,a=0,r=0,o=function(){document.onmouseup=null,document.onmousemove=null},i=function(o){(o=o||window.event).preventDefault(),t=a-o.clientX,n=r-o.clientY,a=o.clientX,r=o.clientY,document.getElementById(e).style.top=document.getElementById(e).offsetTop-n+"px",document.getElementById(e).style.left=document.getElementById(e).offsetLeft-t+"px"},d=function(e){(e=e||window.event).preventDefault(),a=e.clientX,r=e.clientY,document.onmouseup=o,document.onmousemove=i};document.getElementById(e),document.getElementById(e).onmousedown=d},E=function(e,t){var n=document.querySelector(e);if(n.createTextRange){var a=n.createTextRange();a.move("character",t),a.select()}else n.focus(),void 0!==n.selectionStart&&n.setSelectionRange(t,t)},B=function(e,t){document.querySelector(e).addEventListener("keypress",function(n){if("Enter"===n.key){var a=document.querySelector(e).value;t(a)}})},k=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).createBoard=function(e){n.switchBoardPopup("none");var t=n.state.boards,a={boardId:"board-".concat(n.boardNumber),boardName:e,lists:null};t.push(a),n.setState({boards:t,currentBoard:a}),n.boardNumber++,n.saveBoard(a.boardId,a.lists)},n.saveBoard=function(e,t){var a=n.state.boards.find(function(t){return t.boardId===e});a.lists=t;var r=[];if(JSON.parse(localStorage.getItem("boards"))&&JSON.parse(localStorage.getItem("boards")).length>0){var o=JSON.parse(localStorage.getItem("boards"));o.forEach(function(t){t.boardId===e&&(t=a),r.push(t)}),0===o.filter(function(t){return t.boardId===e}).length&&r.push(a)}else r=n.state.boards.map(function(t){return t.boardId===e?a:t});n.setState({boards:r}),localStorage.setItem("boards",JSON.stringify(r))},n.loadBoard=function(e){var t=n.state.boards.find(function(t){return t.boardId===e});n.setState({currentBoard:t})},n.closeBoard=function(e,t){var a=n.state.boards.find(function(t){return t.boardId===e});a.lists=t,n.setState({boards:n.state.boards.map(function(t){return t.boardId===e?a:t})}),n.saveBoard(e,t),n.setState({currentBoard:null})},n.deleteBoard=function(e){n.confirmBoardDeletePopup("none");var t=n.state.boards.filter(function(t){return t.boardId!==e});n.setState({boards:t}),localStorage.setItem("boards",JSON.stringify(t))},n.switchBoardPopup=function(e){var t=document.getElementById("board-pop-up"),a=document.getElementById("board-name-input");"none"===e?(t.style="display: none;",a.value=""):(n.confirmBoardDeletePopup("none"),B("#board-name-input",n.createBoard),t.style="display: block;",E("#board-name-input",0))},n.confirmBoardDeletePopup=function(e,t){var a=document.getElementById("confirm-board-delete-popup");"none"===e?a.style="display: none;":(n.switchBoardPopup("none"),a.style="display: block;",document.getElementById("board-id").textContent=t)},n.boardNumber=0,n.state={boards:[],currentBoard:null},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){if(I("board-pop-up"),I("confirm-board-delete-popup"),0===this.state.boards.length&&JSON.parse(localStorage.getItem("boards"))&&JSON.parse(localStorage.getItem("boards")).length>0){var e=JSON.parse(localStorage.getItem("boards")),t=e[e.length-1].boardId.slice(6);this.boardNumber=parseInt(t)+1,this.setState({boards:e})}}},{key:"render",value:function(){var e=this;if(this.state.currentBoard){var t=this.state.currentBoard;return r.a.createElement(h,{dragElement:I,closeBoard:this.closeBoard,saveBoard:this.saveBoard,boardInfo:t,setCaretPosition:E})}var n=this.state.boards.map(function(t){return r.a.createElement("div",{className:"board-names-wrap",key:t.boardId},r.a.createElement("div",{className:"board-names",onClick:function(){return e.loadBoard("".concat(t.boardId))}},t.boardName),r.a.createElement("i",{onClick:function(){return e.confirmBoardDeletePopup("block",t.boardId)},className:"far fa-times-circle"}))});return r.a.createElement("div",{id:"app"},r.a.createElement("h1",null,"List-Maker"),r.a.createElement("div",null,r.a.createElement("h3",null,"Boards"),r.a.createElement("div",{id:"board-dropdown"},n.length>0?n.map(function(e){return e}):"No boards")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.switchBoardPopup("block")}},"Create board")),r.a.createElement("div",{id:"board-pop-up",className:"pop-ups"},r.a.createElement("i",{onClick:function(){return e.switchBoardPopup("none")},className:"far fa-times-circle"}),r.a.createElement("br",null),r.a.createElement("input",{id:"board-name-input",placeholder:"Enter board name"}),r.a.createElement("button",{onClick:function(){return e.createBoard("".concat(document.getElementById("board-name-input").value))}},"Create board")),r.a.createElement("div",{id:"confirm-board-delete-popup",className:"pop-ups"},r.a.createElement("i",{onClick:function(){return e.confirmBoardDeletePopup("none")},className:"far fa-times-circle"}),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"none"},id:"board-id"}),r.a.createElement("p",null,"Delete board?"),r.a.createElement("button",{onClick:function(){return e.deleteBoard("".concat(document.getElementById("board-id").textContent))},id:"yes-button"},"Yes"),r.a.createElement("button",{onClick:function(){return e.confirmBoardDeletePopup("none")}},"No")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.aeb3fa20.chunk.js.map
(this.webpackJsonpst=this.webpackJsonpst||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){},159:function(e,t,n){},161:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),s=n.n(c),i=(n(153),n(154),n(17)),o=n(41),l=n(40),u=n(5),d=n(208),j=n(209),b=n(210),p=n(233),m=n(47),f=n(207),h=n(31),x=n(109),O=n.n(x),g=n(113),v=n.n(g),S=n(114),I=n.n(S),w=n(115),y=n.n(w),D=n(116),C=n.n(D),k=n(117),N=n.n(k),T=n(118),F=n.n(T),R=n(119),L=n.n(R),E=n(120),B=n.n(E),P=n(121),A=n.n(P),U=n(122),M=n.n(U),z=n(3),H=function(e,t){var n={MenuIcon:O.a,ComputerIcon:v.a,DashboardIcon:I.a,AssignmentIcon:y.a,DateRangeIcon:C.a,AccessAlarmIcon:N.a,Dot:F.a,RemoveUser:L.a,Details:B.a,Session:A.a,User:M.a}[e];return Object(z.jsx)(n,Object(l.a)({},t))},W=function(e){return Object(z.jsx)("div",{className:"textBg",children:Object(z.jsx)("div",{children:e})})},G=function(e){return Object(z.jsx)("div",{className:"textSm",children:Object(z.jsx)("div",{children:e})})},K=function(e){return new Date("1970-01-01T"+e+"Z").toLocaleTimeString({},{timeZone:"UTC",hour12:!0,hour:"numeric",minute:"numeric"})},Y=n(232),q=Object(f.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},toolbar:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)}})),J=function(e){var t=e.handleNavigation,n=e.openNav,a=q();Object(h.a)();return Object(z.jsx)(d.a,{position:"fixed",className:Object(u.a)(a.appBar,Object(o.a)({},a.appBarShift,n)),children:Object(z.jsxs)(Y.a,{display:"flex",flexDirection:"row",children:[Object(z.jsxs)(j.a,{children:[Object(z.jsx)(b.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return t(!0)},edge:"start",className:Object(u.a)(a.menuButton,Object(o.a)({},a.hide,n)),children:H("MenuIcon")}),Object(z.jsx)(m.a,{variant:"h6",noWrap:!0,children:"GuidePRO"})]}),Object(z.jsx)(p.a,{"aria-label":"recipe",children:function(){var e=localStorage.getItem("employeeName").split(" ");return e[0].split("")[0].toUpperCase()+e[e.length-1].split("")[0].toUpperCase()}()})]})})},Z=n(234),Q=n(211),X=n(212),V=n(124),$=n.n(V),_=n(123),ee=n.n(_),te=n(213),ne=n(214),ae=n(215),re=n(51),ce=(n(159),Object(f.a)((function(e){return{drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(o.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1})}}))),se=[{name:"Home",path:"/Home",icon:"DashboardIcon"},{name:"Session Room",path:"/SessionRoom",icon:"ComputerIcon"},{name:"My Reports",path:"/Report",icon:"AssignmentIcon"}],ie=function(e){var t,n,a=e.handleNavigation,r=e.openNav,c=ce(),s=Object(h.a)();return console.log("Navigator rendered"),Object(z.jsxs)(Z.a,{variant:"permanent",className:Object(u.a)(c.drawer,(t={},Object(o.a)(t,c.drawerOpen,r),Object(o.a)(t,c.drawerClose,!r),t)),classes:{paper:Object(u.a)((n={},Object(o.a)(n,c.drawerOpen,r),Object(o.a)(n,c.drawerClose,!r),n))},children:[Object(z.jsx)("div",{className:c.toolbar,children:Object(z.jsx)(b.a,{onClick:function(){return a(!1)},children:"rtl"===s.direction?Object(z.jsx)(ee.a,{}):Object(z.jsx)($.a,{})})}),Object(z.jsx)(Q.a,{}),Object(z.jsx)(X.a,{children:se.map((function(e,t){return Object(z.jsx)(re.b,{activeClassName:"activeNav",to:e.path,children:Object(z.jsxs)(te.a,{button:!0,children:[Object(z.jsx)(ne.a,{children:H(e.icon)}),Object(z.jsx)(ae.a,{primary:e.name})]})},t)}))})]})},oe=n(18),le=(n(161),n(216)),ue=function(e){return Object(z.jsx)(le.a,Object(l.a)(Object(l.a)({},e),{},{children:e.children}))};ue.defaultProps={variant:"outlined"};var de,je,be=ue,pe=n(100),me=n(9),fe=n.n(me),he=n(15),xe=n(218),Oe=n(221),ge=n(220),ve=n(219),Se=n(217),Ie=function(e){var t=e.headerTitle,n=e.children,a=e.textCOnfirm,r=e.textCancel,c=e.handleConfirm,s=e.handleClose,i=e.openModal,o=Object(h.a)(),l=Object(Se.a)(o.breakpoints.down("sm"));return console.log("modal executed"),Object(z.jsxs)(xe.a,{fullScreen:l,fullWidth:!0,maxWidth:"md",open:i,onClose:s,"aria-labelledby":"responsive-dialog-title",children:[Object(z.jsx)(ve.a,{id:"responsive-dialog-title",children:t}),Object(z.jsx)(ge.a,{children:n}),Object(z.jsxs)(Oe.a,{children:[Object(z.jsx)(be,{autoFocus:!0,onClick:s,color:"primary",variant:"contained",children:r}),Object(z.jsx)(be,{onClick:c,color:"primary",autoFocus:!0,variant:"contained",children:a})]})]})},we=r.a.memo(Ie),ye=n(231),De=n(127),Ce=n(82),ke=(n(167),{apiKey:"AIzaSyCLTFKZT0D2t8UuejotDrARyowQ7DAP6oU",authDomain:"guidepro-1816f.firebaseapp.com",projectId:"guidepro-1816f",storageBucket:"guidepro-1816f.appspot.com",messagingSenderId:"51910174014",appId:"1:51910174014:web:24c91898e4f38bf353786f",measurementId:"G-P1DYSS49KV"});de=Ce.a.initializeApp(ke),je=de.firestore();var Ne=function(){var e=Object(he.a)(fe.a.mark((function e(t,n){var a;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je.collection("Users").doc(t).set({empName:n,empId:t});case 3:return a=e.sent,console.log("firestore response",a),e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),Te=function(){var e=Object(he.a)(fe.a.mark((function e(t){var n,a;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=je.collection("Users").doc(t),e.next=3,n.get();case 3:if(!(a=e.sent).exists){e.next=8;break}return e.abrupt("return",a.data());case 8:return e.abrupt("return",void 0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(he.a)(fe.a.mark((function e(t){var n,a,r,c,s,i,o,l;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.user,a=t.sessionId,r=t.sessionName,c=t.startDate,s=t.startTime,i=t.endDate,o=t.endTime,l=t.ownerName,e.prev=1,e.next=4,je.collection("Users").doc(n).collection("Sessions").doc(a).set({sessionId:a,sessionName:r,startDate:c,startTime:s,endDate:i,endTime:o,ownerName:l,ownerId:n,status:"off"});case 4:return e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),Re=function(e){return je.collection("Register").doc(e).collection("Participants")},Le=function(){var e=Object(he.a)(fe.a.mark((function e(t,n,a){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je.collection("Users").doc(t).collection("Sessions").doc(n).update({status:a});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n,a){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(he.a)(fe.a.mark((function e(t,n,a){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je.collection("Register").doc(t).collection("Participants").doc(n).set({empId:n,empName:a});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n,a){return e.apply(this,arguments)}}(),Be=function(){var e=Object(he.a)(fe.a.mark((function e(t,n){var a;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je.collection("Users").doc(t).collection("Sessions").doc(n).get();case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(he.a)(fe.a.mark((function e(t,n){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je.collection("Register").doc(t).collection("Participants").doc(n).delete();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(he.a)(fe.a.mark((function e(t){var n,a;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je.collectionGroup("Sessions").where("ownerId","==",t).orderBy("startDate").get();case 2:return n=e.sent,a=[],void 0===n&&0===n.length||n.forEach((function(e){a.push(e.data())})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ue=n(20),Me=n(230),ze=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(new Date),s=Object(i.a)(c,2),o=s[0],u=s[1],d=Object(a.useState)(new Date),j=Object(i.a)(d,2),b=j[0],p=j[1],m=Object(a.useRef)(),f=Object(a.useRef)(),h=Object(a.useCallback)((function(){r(!1)}),[]),x=Object(a.useCallback)((function(){r(!0)}),[]),O=Object(a.useCallback)((function(e){u(e)}),[]),g=Object(a.useCallback)((function(e){p(e)}),[]),v=function(){var e=Object(he.a)(fe.a.mark((function e(){var t;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==m.current.value.trim()){e.next=4;break}f.current.innerHTML="Session name cannot be blank !",e.next=17;break;case 4:if(!(new Date(o.toDateString()).getTime()>new Date(b.toDateString()).getTime())){e.next=8;break}f.current.innerHTML="Start date cannot be after end date !",e.next=17;break;case 8:if(!(new Date(o.toDateString()).getTime()<new Date((new Date).toDateString()).getTime())){e.next=12;break}f.current.innerHTML="Start date cannot be a past date !",e.next=17;break;case 12:return f.current.innerHTML="",t={user:localStorage.getItem("employeeId"),ownerName:localStorage.getItem("employeeName"),sessionId:""+(new Date).getTime(),startDate:new Date(o.toDateString()).getTime(),startTime:new Date(o).getTime(),endDate:new Date(b.toDateString()).getTime(),endTime:new Date(b).getTime(),sessionName:m.current.value},e.next=16,Fe(Object(l.a)({},t));case 16:h();case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(be,{onClick:function(){return x()},variant:"contained",size:"large",color:"primary",children:"Schedule A Session"}),Object(z.jsx)(we,{headerTitle:"Schedule Session",textCOnfirm:"Schedule",textCancel:"Cancel",handleConfirm:v,handleClose:h,openModal:n,children:Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("form",{children:[Object(z.jsxs)(Y.a,{display:"flex",flexDirection:"column",children:[Object(z.jsx)(ye.a,{id:"sessionName",label:"Session Name",multiline:!0,rows:4,variant:"outlined",inputRef:m}),Object(z.jsxs)(Ue.a,{utils:De.a,children:[Object(z.jsx)(Me.a,{margin:"normal",id:"startDate",label:"Start Date & Time",value:o,onChange:O,KeyboardButtonProps:{"aria-label":"change date"}}),Object(z.jsx)(Me.a,{margin:"normal",id:"endDate",label:"End Date & Time",value:b,onChange:g,KeyboardButtonProps:{"aria-label":"change date"}})]})]}),Object(z.jsx)("div",{ref:f,style:{color:"red"}})]})})})]})},He=n(222),We=n(223),Ge=n(224),Ke=function(){var e=Object(oe.e)(),t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1],s=localStorage.getItem("employeeId"),o=function(){var e;(e=new Date((new Date).toDateString()).getTime(),je.collectionGroup("Sessions").where("startDate","==",e)).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),c(t)}))};Object(a.useEffect)((function(){return o()}),[]);var l=function(){var t=Object(he.a)(fe.a.mark((function t(n,a){return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Le(s,n,"active");case 2:if(a===s){t.next=5;break}return t.next=5,Ee(n,s,localStorage.getItem("employeeName"));case 5:localStorage.setItem("activeSessionId",n),localStorage.setItem("sessionOwnerId",a),e.push("/SessionRoom");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(z.jsx)(z.Fragment,{children:r.map((function(e,t){return Object(z.jsxs)(He.a,{container:!0,spacing:1,children:[Object(z.jsx)(He.a,{item:!0,xs:0,sm:0,className:"timelineY"}),Object(z.jsx)(He.a,{item:!0,xs:1,sm:1,className:"timelineX"}),Object(z.jsx)(He.a,{item:!0,xs:10,sm:10,children:Object(z.jsxs)(Y.a,{mb:2,display:"flex",flexDirection:"column",children:[Object(z.jsxs)(Y.a,{display:"flex",flexDirection:"row",children:[H("AccessAlarmIcon",{color:"disabled"}),Object(z.jsxs)(m.a,{style:{color:"#797979"},variant:"button",gutterBottom:!0,children:[K(new Date(e.startTime).toTimeString().split(" ")[0])," ","-"," ",K(new Date(e.endTime).toTimeString().split(" ")[0])]})]}),Object(z.jsxs)(We.a,{elevation:2,children:[Object(z.jsx)(Ge.a,{avatar:Object(z.jsx)(p.a,{variant:"rounded","aria-label":"recipe",children:"R"}),title:e.sessionName,subheader:e.ownerName}),Object(z.jsxs)(Y.a,{display:"flex",flexDirection:"row",justifyContent:"flex-end",pb:1,pr:1,children:["active"===e.status?Object(z.jsxs)(Y.a,{display:"flex",justifyContent:"justify-center",p:1,children:[H("Dot",{color:"error"})," ","Live"]}):null,s===e.ownerId?Object(z.jsx)(be,{variant:"contained",color:"primary",disabled:"active"===e.status||"closed"===e.status||"expired"===e.status,onClick:function(){return l(e.sessionId,e.ownerId)},children:"off"===e.status?"Start Session":"expired"===e.status?"Session Expired":"closed"===e.status?"Closed":"Active"}):Object(z.jsx)(be,{variant:"contained",color:"primary",disabled:"expired"===e.status||"closed"===e.status||"off"===e.status,onClick:function(){return l(e.sessionId,e.ownerId)},children:"off"===e.status||"active"===e.status?"Join Session":"expired"===e.status?"Session Expired":"Session Closed"})]})]})]})})]},t)}))})},Ye=function(){return console.log("Home executed"),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(pe.a,{children:Object(z.jsxs)(Y.a,{display:"flex",flexDirection:"column",mx:"auto",px:2,pb:2,justifyContent:"center",children:[Object(z.jsx)("p",{children:"Schedule a new session as you plan to host"}),Object(z.jsx)(ze,{})]})}),W("Today's Sessions"),Object(z.jsxs)(Y.a,{mb:2,display:"flex",flexDirection:"row",children:[H("DateRangeIcon"),Object(z.jsx)(m.a,{gutterBottom:!0,children:(new Date).toDateString()})]}),Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(Ke,{})})]})},qe=n(225),Je=function(e){var t=e.sessionId,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),u=l[0],d=l[1],j=Object(a.useState)(),p=Object(i.a)(j,2),m=p[0],f=p[1],h=function(){var e=Object(he.a)(fe.a.mark((function e(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe(t,m);case 2:d(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return function(e){Re(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),s(t)}))}(t)}),[t]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(X.a,{style:{paddingTop:0},children:c.map((function(e,t){return Object(z.jsxs)(Y.a,{children:[Object(z.jsx)(Q.a,{}),Object(z.jsxs)(te.a,{style:{paddingLeft:0},children:[e.empName,Object(z.jsx)(qe.a,{onClick:function(){return t=e.empId,f(t),void d(!0);var t},children:Object(z.jsx)(b.a,{edge:"end","aria-label":"delete",children:H("RemoveUser",{color:"error"})})})]}),Object(z.jsx)(Q.a,{})]},t)}))}),Object(z.jsx)(we,{headerTitle:"Mark Absent",textCOnfirm:"Confirm",textCancel:"Cancel",handleConfirm:function(){return h()},handleClose:function(){return d(!1)},openModal:u,children:Object(z.jsx)(z.Fragment,{children:"Are you sure you want to remove the participant from session? This will mark the participant as absent."})})]})},Ze=function(){var e=Object(a.useState)("Stop"),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){}),[n]);return Object(z.jsxs)(be,{size:"small",variant:"contained",color:"secondary",onClick:function(){return Le(localStorage.getItem("sessionOwnerId"),localStorage.getItem("activeSessionId"),"Stop"===n?"expired":"active"),void r("Stop"===n?"Start":"Stop")},children:[n," Attendance"]})},Qe=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(oe.e)(),s=Object(a.useCallback)(Object(he.a)(fe.a.mark((function e(){var t;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("activeSessionId")||!localStorage.getItem("sessionOwnerId")){e.next=5;break}return e.next=3,Be(localStorage.getItem("sessionOwnerId"),localStorage.getItem("activeSessionId"));case 3:"active"===(t=e.sent).data().status||"expired"===t.data().status?(r(t.data()),l()):"off"===t.data().status?(localStorage.removeItem("sessionOwnerId"),localStorage.removeItem("activeSessionId")):"closed"===t.data().status&&(r({}),(localStorage.getItem("sessionOwnerId")||localStorage.getItem("activeSessionId"))&&(localStorage.removeItem("sessionOwnerId"),localStorage.removeItem("activeSessionId")));case 5:case"end":return e.stop()}}),e)}))),[]),o=function(){r({}),localStorage.removeItem("activeSessionId"),localStorage.removeItem("sessionOwnerId"),c.push("/Home")},l=function(){var e,t;(e=localStorage.getItem("sessionOwnerId"),t=localStorage.getItem("activeSessionId"),je.collection("Users").doc(e).collection("Sessions").doc(t)).onSnapshot((function(e){"closed"===e.data().status&&o()}))},u=function(){var e=Object(he.a)(fe.a.mark((function e(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Le(localStorage.getItem("sessionOwnerId"),localStorage.getItem("activeSessionId"),"closed");case 2:o();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(he.a)(fe.a.mark((function e(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe(localStorage.getItem("activeSessionId"),localStorage.getItem("employeeId"));case 2:o();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return s()}),[s]),Object(a.useEffect)((function(){localStorage.getItem("sessionOwnerId")&&localStorage.getItem("sessionOwnerId")!==localStorage.getItem("employeeId")&&Re(localStorage.getItem("activeSessionId")).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data().empId)})),void 0===t.find((function(e){return e===localStorage.getItem("employeeId")}))&&o()}))}),[]),0===Object.keys(n).length?Object(z.jsx)(z.Fragment,{children:"You have not joined any active session or the session is yet to be started by the host."}):Object(z.jsxs)(z.Fragment,{children:[localStorage.getItem("sessionOwnerId")===localStorage.getItem("employeeId")?Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(be,{size:"small",variant:"contained",color:"secondary",onClick:function(){return u()},children:"Stop Session"})}):Object(z.jsxs)(Y.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[Object(z.jsxs)(Y.a,{display:"flex",justifyContent:"justify-center",p:1,children:[H("Dot",{color:"error"})," ","Live"]}),Object(z.jsx)(be,{size:"small",variant:"contained",color:"secondary",onClick:function(){return d()},children:"Exit Session"})]}),W("Session Details"),Object(z.jsxs)(We.a,{elevation:2,children:[Object(z.jsx)(Ge.a,{avatar:Object(z.jsx)(p.a,{variant:"rounded","aria-label":"recipe",children:"R"}),title:n.sessionName,subheader:n.ownerName}),Object(z.jsx)(Y.a,{display:"flex",flexDirection:"row",justifyContent:"flex-end",pb:1,pr:1})]}),W("Session Quiz"),Object(z.jsx)(z.Fragment,{children:"No quizes allocated till now."}),localStorage.getItem("sessionOwnerId")===localStorage.getItem("employeeId")?Object(z.jsxs)(z.Fragment,{children:[W("Participants"),Object(z.jsx)(Ze,{}),Object(z.jsx)(Y.a,{mt:1,children:Object(z.jsx)(Je,{sessionId:n.sessionId})})]}):null]})},Xe=n(128),Ve=n(226),$e=n(125),_e=n.n($e),et=function(e){var t=e.session,n=e.handleClose,a=e.open,r=e.pList,c=t.sessionName,s=t.startTime,i=t.endTime,o=t.startDate;return Object(z.jsxs)(xe.a,{fullScreen:!0,open:a,onClose:n,children:[Object(z.jsx)(d.a,{children:Object(z.jsx)(j.a,{children:Object(z.jsx)(b.a,{edge:"start",color:"inherit",onClick:n,"aria-label":"close",children:Object(z.jsx)(_e.a,{})})})}),Object(z.jsx)(Y.a,{mt:8,children:Object(z.jsxs)(ge.a,{children:[G("Session Details"),Object(z.jsxs)(Y.a,{children:[Object(z.jsx)("h4",{children:c}),Object(z.jsx)(Y.a,{children:new Date(o).toDateString()}),Object(z.jsxs)(m.a,{style:{color:"#797979"},variant:"button",gutterBottom:!0,children:[K(new Date(s).toTimeString().split(" ")[0])," ","-"," ",K(new Date(i).toTimeString().split(" ")[0])]})]}),W("Participants ("+r.length+")"),0!==r.length?Object(z.jsx)(z.Fragment,{children:r.map((function(e,t){return Object(z.jsxs)(X.a,{children:[Object(z.jsxs)(te.a,{style:{paddingLeft:0,paddingRight:30},children:[H("User"),Object(z.jsx)("span",{style:{paddingLeft:5},children:e.empName})]}),Object(z.jsx)(Q.a,{})]},t)}))}):Object(z.jsx)(z.Fragment,{children:" No participants"})]})})]})},tt=function(e){var t=e.session,n=Object(a.useState)(!1),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)([]),l=Object(i.a)(o,2),u=l[0],d=l[1],j=Object(a.useCallback)(function(){var e=Object(he.a)(fe.a.mark((function e(t){var n,a;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re(t).get();case 2:n=e.sent,a=[],n.forEach((function(e){a.push(e.data())})),d(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),b=function(){var e=Object(he.a)(fe.a.mark((function e(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t.sessionId);case 2:s(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(qe.a,{style:{right:0},onClick:function(){return b()},children:H("Details")}),Object(z.jsx)(et,{session:t,open:c,handleClose:function(){return s(!1)},pList:u})]})},nt=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(he.a)(fe.a.mark((function e(){var t,n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae(localStorage.getItem("employeeId"));case 2:t=e.sent,n={},0!==t.length&&t.forEach((function(e){n[e.startDate]?n[e.startDate]=[].concat(Object(Xe.a)(n[e.startDate]),[e]):n[e.startDate]=[e]})),r(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return c()}),[]),Object(z.jsx)(z.Fragment,{children:0!==Object.keys(n).length?Object(z.jsx)(z.Fragment,{children:Object.keys(n).reverse().map((function(e,t){return Object(z.jsxs)(Y.a,{children:[G(new Date(Number(e)).toDateString()),Object(z.jsx)(X.a,{children:n[e].map((function(e,t){return Object(z.jsxs)(Y.a,{children:[Object(z.jsxs)(te.a,{style:{paddingLeft:0,paddingRight:30},children:[Object(z.jsx)(Ve.a,{style:{minWidth:35},children:H("Session")}),e.sessionName,Object(z.jsx)(tt,{session:e})]}),Object(z.jsx)(Q.a,{})]},t)}))})]},t)}))}):Object(z.jsx)(z.Fragment,{children:"You have not hosted any sessions yet."})})},at=Object(f.a)((function(e){return{toolbar:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(2)}}})),rt=function(){var e=at();Object(h.a)();return Object(z.jsxs)("main",{className:e.content,children:[Object(z.jsx)("div",{className:e.toolbar}),Object(z.jsx)(oe.a,{path:"/Home",children:Object(z.jsx)(Ye,{})}),Object(z.jsx)(oe.a,{path:"/SessionRoom",children:Object(z.jsx)(Qe,{})}),Object(z.jsx)(oe.a,{path:"/Report",children:Object(z.jsx)(nt,{})})]})},ct=(n(164),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=function(e){console.log(e),r(e)};return console.log("Landing rendered"),Object(z.jsxs)("div",{className:"landingPage",children:[Object(z.jsx)(J,{handleNavigation:function(e){return c(e)},openNav:n}),Object(z.jsx)(ie,{handleNavigation:function(e){return c(e)},openNav:n}),Object(z.jsx)(rt,{})]})}),st=n(229),it=n(227),ot=n(126),lt=n.n(ot),ut=n(228);function dt(){return Object(z.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(z.jsx)(it.a,{color:"inherit",href:"https://github.com/joyjd/st",children:"GuidePRO"})," ",(new Date).getFullYear(),"."]})}var jt=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),bt=function(e){var t=e.onLoginFunc,n=jt(),r=Object(a.useRef)(),c=Object(a.useRef)(),s=function(){var e=Object(he.a)(fe.a.mark((function e(n){var a,s,i;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=r.current.value,s=c.current.value,e.next=5,Te(s);case 5:if(void 0!==(i=e.sent)){e.next=12;break}return e.next=9,Ne(s,a);case 9:t(a,s),e.next=13;break;case 12:t(i.empName,i.empId);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(ut.a,{component:"main",maxWidth:"xs",children:[Object(z.jsx)(st.a,{}),Object(z.jsxs)("div",{className:n.paper,children:[Object(z.jsx)(p.a,{className:n.avatar,children:Object(z.jsx)(lt.a,{})}),Object(z.jsx)(m.a,{component:"h1",variant:"h5",children:"Log in"}),Object(z.jsxs)("form",{onSubmit:s,className:n.form,children:[Object(z.jsx)(ye.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Employee Name",name:"Name",inputRef:r,autoFocus:!0}),Object(z.jsx)(ye.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"Employee Id",label:"Employee Id",id:"empId",inputRef:c}),Object(z.jsx)(le.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit,children:"Log In"})]})]}),Object(z.jsx)(Y.a,{mt:8,children:Object(z.jsx)(dt,{})})]})},pt=r.a.createContext(),mt=function(e){var t=e.children,n=Object(a.useState)(!1),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){localStorage.getItem("isLoggedIn")&&s(!0)}),[]),Object(z.jsx)(pt.Provider,{value:{isLoggedIn:c,onLogin:function(e,t){localStorage.setItem("isLoggedIn",!0),localStorage.setItem("employeeName",e),localStorage.setItem("employeeId",t),s(!0)}},children:t})},ft=pt,ht=function(){var e=Object(a.useContext)(ft);return e.isLoggedIn?Object(z.jsx)(ct,{}):Object(z.jsx)(bt,{onLoginFunc:e.onLogin})},xt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,238)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(re.a,{children:Object(z.jsx)(mt,{children:Object(z.jsx)(ht,{})})})}),document.getElementById("root")),xt()}},[[165,1,2]]]);
//# sourceMappingURL=main.c6d14b14.chunk.js.map
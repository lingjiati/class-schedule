(this.webpackJsonpschedule=this.webpackJsonpschedule||[]).push([[0],{39:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(9),s=n.n(o),r=(n(39),n(18)),a=(n.p,n(80)),l=n(78),u=(n(20),n(3));var h=function(e){var t=e.schedule,n=e.info,c=e.periods,i=e.day;return console.log(i),Object(u.jsx)(a.a,{twoLine:!0,children:t[i].map((function(e,t){return Object(u.jsx)(l.b,{graphic:n[e].icon,text:e,secondaryText:c[t]})}))})},d=(n(45),n(46),n(21)),j=n(22);n(52);var g=function(e){var t=e.page,n=e.setPage,c=(e.toggle,i.a.useState(!1)),o=Object(r.a)(c,2),s=o[0],h=o[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{title:t,navigationIcon:!0,onNav:function(){return h(!0)}}),Object(u.jsx)(d.b,{}),Object(u.jsx)(j.a,{modal:!0,open:s,onClose:function(){return h(!1)},children:Object(u.jsx)(j.b,{children:Object(u.jsxs)(a.a,{children:[Object(u.jsx)(l.a,{onClick:function(){return n("Schedule")},children:"Schedule"}),Object(u.jsx)(l.a,{onClick:function(){n("Todos")},children:"Todos"})]})})})]})},p=n(79),b=n(32),m=n(31),x=n.n(m);n(60);var v=function(e){e.toggle;var t=Object(c.createRef)(),n=new x.a({type:"date"});return n.time,Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(p.a,{handle:Object(u.jsx)(l.b,{text:"Pizza",metaIcon:"chevron_right"}),children:[Object(u.jsx)(l.b,{text:"Cheese"}),Object(u.jsx)(l.b,{text:"Pepperoni"}),Object(u.jsx)(l.b,{text:"Supreme"})]}),Object(u.jsx)(b.a,{trailingIcon:{icon:"event",onClick:function(){document.querySelector(".mddtp-picker__subtitle").classList.remove("mddtp-picker__color--active"),document.querySelector(".mddtp-picker__title").classList.add("mddtp-picker__color--active"),n.toggle(),console.log(n.time.toString()),document.querySelector("#mddtp-date__ok").addEventListener("click",(function(){t.current.querySelector("input").value=n.time.format("MMM Do YY")}))}},ref:t})]})},y=(n(29),n(68),{1:["Chemistry","Chemistry","Technology","Mathematics","Electives","Electives","Alternatives"],2:["Mathematics","Mathematics","Music","English","Chinese","Geography","Sports"],3:["Physics","Physics","Geology","English","Alternatives","Club","Alternatives"],4:["Geology","Chinese","Deutsch","Geography","Mathematics","English","Art"],5:["Geography","English","Sports","Geology","Chinese","Chinese","Guidance"]}),O={Chemistry:{icon:"science"},Geology:{icon:"travel_explore"},Technology:{icon:"computer"},Mathematics:{icon:"calculate"},Electives:{icon:"functions"},Alternatives:{icon:"nature_people"},Music:{icon:"music_note"},English:{icon:"language"},Chinese:{icon:"book"},Geography:{icon:"terrain"},Sports:{icon:"sports_tennis"},Physics:{icon:"analytics"},Club:{icon:"group"},Deustch:{icon:"language"},Art:{icon:"palette"},Guidance:{icon:"directions"}},f=["8:10 - 9:00","9:10 - 10:00","10:10 - 11:00","11:10 - 12:00","13:10 - 14:00","14:10 - 15:00","15:20 - 16:10"];var C=function(){var e=i.a.useState("Schedule"),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{page:n,setPage:c}),"Schedule"===n?Object(u.jsx)(h,{info:O,schedule:y,day:5,periods:f}):Object(u.jsx)(v,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),S()}},[[69,1,2]]]);
//# sourceMappingURL=main.8cee7997.chunk.js.map
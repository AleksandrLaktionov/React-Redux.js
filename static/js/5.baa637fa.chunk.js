(this["webpackJsonpreact.js"]=this["webpackJsonpreact.js"]||[]).push([[5],{288:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3ua91",dialogsItems:"Dialogs_dialogsItems__18n4n",messages:"Dialogs_messages__2olSi",send:"Dialogs_send__2ZtN0"}},289:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(49),s=t(50),i=t(52),r=t(51),o=t(0),c=t.n(o),l=t(18),u=t(10),m=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var a=function(a){Object(i.a)(o,a);var t=Object(r.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(u.a,{to:"/login"})}}]),o}(c.a.Component);return Object(l.b)(m)(a)}},300:function(e,a,t){"use strict";t.r(a);var n=t(124),s=t(0),i=t.n(s),r=t(288),o=t.n(r),c=t(19),l=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:o.a.dialog},i.a.createElement(c.b,{to:a},e.name))},u=function(e){return i.a.createElement("div",{className:o.a.dialog},e.message)},m=t(10),d=t(83),g=t(125),b=t(63),f=t(26),E=Object(b.a)(60),p=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(d.a,{component:f.b,name:"newMessageBody",placeholder:"Enter your message",validate:[b.b,E]})),i.a.createElement("div",null,i.a.createElement("button",{className:o.a.send},"Send")))})),v=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return i.a.createElement(l,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return i.a.createElement(u,{message:e.message,key:e.id})}));return e.isAuth?i.a.createElement("div",{className:o.a.dialogs},i.a.createElement("div",{className:o.a.dialogsItems},t),i.a.createElement("div",{className:o.a.messages},i.a.createElement("div",null,n),i.a.createElement(p,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))):i.a.createElement(m.a,{to:"/login"})},h=t(18),j=t(289),_=t(8);a.default=Object(_.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(n.b)(a))}}})),j.a)(v)}}]);
//# sourceMappingURL=5.baa637fa.chunk.js.map
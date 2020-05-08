(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{25:function(e,t,n){e.exports=n(41)},30:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(12),c=n.n(o),i=(n(30),n(5)),s=n(6),l=n(8),u=n(7),d=n(3),p=(n(37),n(11));var E=n(16),m=n.n(E);function v(e){return m()(e).format("YYYY-MM-DD|HH:mm").split("|")}function h(e){return m()(e,"YYYY-MM-DD|HH:mm").toDate()}n(39);var f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){e&&e.target&&e.target.name&&a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleChangeDateTime=function(e,t){e&&e.target&&a.setState(Object(p.a)({},t,e.target.value))},a.handleFormSubmit=function(e){e.preventDefault()},a.editEvent=function(){a.props.editEvent(a.state),a.props.closeForm()},a.state={id:a.props.inputsValue.id,title:a.props.inputsValue.title||"",startDate:v(a.props.inputsValue.start||a.props.currentDate)[0],startTime:v(a.props.inputsValue.time)[1],notes:a.props.inputsValue.notes||""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-wrapper",style:{top:this.props.coordinates.top,left:this.props.coordinates.left}},r.a.createElement("button",{className:"btn-close",type:"button",onClick:this.props.closeForm},r.a.createElement("i",{className:"fa fa-times-circle-o","aria-hidden":"true"})),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"hidden",name:"id",value:this.state.id}),r.a.createElement("input",{type:"text",name:"title",placeholder:"event name",value:this.state.title,onChange:this.handleChange}),r.a.createElement("i",{className:"fa fa-calendar-o","aria-hidden":"true"}),r.a.createElement("input",{type:"date",name:"date",placeholder:"event date",value:this.state.startDate,onChange:function(t){return e.handleChangeDateTime(t,"startDate")}}),r.a.createElement("i",{className:"fa fa-clock-o","aria-hidden":"true"}),r.a.createElement("input",{type:"time",name:"time",placeholder:"event time",value:this.state.startTime,onChange:function(t){return e.handleChangeDateTime(t,"startTime")}}),r.a.createElement("input",{type:"text",name:"notes",placeholder:"notes",value:this.state.notes,onChange:this.handleChange}),this.props.isEdit?r.a.createElement("div",{className:"btn-wrap"},r.a.createElement("button",{className:"btn-cancel",onClick:function(){return e.props.removeEvent(e.props.inputsValue.id)}},"Discard"),r.a.createElement("button",{type:"button",onClick:this.editEvent},"Edit")):r.a.createElement("div",{className:"btn-wrap"},r.a.createElement("button",{className:"btn-cancel",onClick:this.props.closeForm},"Cancel"),r.a.createElement("button",{type:"button",onClick:function(){return e.props.createEvent(e.state)}},"Save"))))}}]),n}(r.a.Component);var b=Object(d.b)((function(e){return{currentDate:e.calendar.currentDate,inputsValue:e.calendar.inputsValue,isEdit:e.calendar.isEdit,coordinates:e.calendar.coordinates}}),(function(e){return{createEvent:function(t){return e(function(e){return{type:"CREATE_EVENT",data:e}}(t))},editEvent:function(t){return e(function(e){return{type:"EDIT_EVENT",data:e}}(t))},removeEvent:function(t){return e(function(e){return console.log(e),{type:"REMOVE_EVENT",id:e}}(t))},closeForm:function(){return e({type:"CLOSE_FORM"})}}}))(f),O=n(10),j=n(20),y=n(9),_=n(21),g=n(22),C=n(23),F=(n(40),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).calendarComponentRef=r.a.createRef(),e.state={calendarWeekends:!0},e.createEventForm=function(t){var n=t.jsEvent.toElement.getBoundingClientRect(),a={top:n.bottom-n.height/2,left:n.left};e.props.closeForm(),e.props.openEventForm(t.date,a)},e.editEventForm=function(t){var n=t.jsEvent.toElement.getBoundingClientRect();e.props.openEventFormWithValues({id:+t.event.id,title:t.event.title,start:t.event.start,time:t.event.start,notes:t.event.extendedProps.notes},e.getCoordinates(n))},e.getCoordinates=function(e){return{top:e.bottom-e.height/2+20,left:e.left-20}},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"calendar-wrapper"},r.a.createElement(j.a,{defaultView:"dayGridMonth",header:{left:"today,prev,next",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},buttonText:{today:"Today",month:"Month",week:"Week",day:"Day",list:"Agenda",prev:"Back",next:"Next"},plugins:[y.d,_.a,C.a,g.a],ref:this.calendarComponentRef,weekends:this.state.calendarWeekends,events:Object(O.a)(this.props.calendarEvents),dateClick:this.createEventForm,eventClick:this.editEventForm,firstDay:1,selectable:!0,editable:!0,droppable:!0,eventDrop:this.drop,eventReceive:this.eventReceive}))}}]),n}(r.a.Component));var D=Object(d.b)((function(e){return{calendarEvents:e.calendar.calendarEvents,showEventForm:e.calendar.showEventForm}}),(function(e){return{openEventForm:function(t,n){return e(function(e,t){return{type:"SHOW_EVENT_FORM",coordinates:t,currentDate:e}}(t,n))},openEventFormWithValues:function(t,n){return e(function(e,t){return{type:"SHOW_EVENT_FORM_WITH_VALUE",values:e,coordinates:t}}(t,n))},closeForm:function(){return e({type:"CLOSE_FORM"})}}}))(F),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(D,null),this.props.showEventForm?r.a.createElement(b,null):null)}}]),n}(r.a.Component);var T=Object(d.b)((function(e){return{showEventForm:e.calendar.showEventForm}}))(w);var V=function(){return r.a.createElement(T,null)},N=n(4),k=n(2),R={showEventForm:!1,calendarEvents:[{id:0,title:"My test event",start:new Date,time:"",notes:"fu"}],coordinates:{},inputsValue:{},isEdit:!1,currentDate:"",colors:""};var M=Object(N.c)({calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_EVENT_FORM":var n=t.currentDate||new Date,a={id:e.calendarEvents.length,start:n,time:n,title:"",notes:""};return Object(k.a)(Object(k.a)({},e),{},{showEventForm:!0,coordinates:t.coordinates,inputsValue:a});case"SHOW_EVENT_FORM_WITH_VALUE":return Object(k.a)(Object(k.a)({},e),{},{showEventForm:!0,inputsValue:t.values,coordinates:t.coordinates,isEdit:!0});case"CREATE_EVENT":var r=Object(O.a)(e.calendarEvents);return r.push({id:r.length,title:t.data.title,start:h("".concat(t.data.startDate,"|").concat(t.data.startTime)),time:t.data.time,notes:t.data.notes}),Object(k.a)(Object(k.a)({},e),{},{showEventForm:!1,calendarEvents:r});case"EDIT_EVENT":return e.calendarEvents[t.data.id]&&(e.calendarEvents[t.data.id]={id:t.data.id,title:t.data.title,start:h("".concat(t.data.startDate,"|").concat(t.data.startTime)),time:t.data.time,notes:t.data.notes}),Object(k.a)(Object(k.a)({},e),{},{calendarEvents:Object(O.a)(e.calendarEvents)});case"REMOVE_EVENT":return Object(k.a)(Object(k.a)({},e),{},{calendarEvents:Object(O.a)(e.calendarEvents).filter((function(e,n){return n!==t.id})),showEventForm:!1});case"CLOSE_FORM":return Object(k.a)(Object(k.a)({},e),{},{showEventForm:!1});default:return e}}}),S=n(24),W="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):N.d,H=Object(N.e)(M,W(Object(N.a)((function(e){return function(e){return function(t){return e(t)}}}),S.a))),x=r.a.createElement(d.a,{store:H},r.a.createElement(V,null));c.a.render(x,document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.f376d681.chunk.js.map
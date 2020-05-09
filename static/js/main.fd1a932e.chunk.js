(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{37:function(e,t,a){e.exports=a(52)},42:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(6),l=a.n(o),c=(a(42),a(13)),i=a(14),s=a(16),u=a(15),d=a(8),p=(a(48),a(18)),E=a(29),m=[{value:"blue",label:"Blue",color:"#3B86FF"},{value:"ocean",label:"Ocean",color:"#05b4d9"},{value:"purple",label:"Purple",color:"#644faa"},{value:"red",label:"Red",color:"#e75339"},{value:"orange",label:"Orange",color:"#ff8a0d"},{value:"yellow",label:"Yellow",color:"#ffc400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#2f4c58"},{value:"silver",label:"Silver",color:"#757a73"}],v=a(3),h=a(36);var f=a(25),b=a.n(f);function O(e){return b()(e).format("YYYY-MM-DD|HH:mm").split("|")}function y(e){return b()(e,"YYYY-MM-DD|HH:mm").toDate()}a(50);var D=v.z.Option,g=function(e){return r.a.createElement(D,e,r.a.createElement("i",{className:"fa fa-square","aria-hidden":"true",style:{color:e.data.color,margin:"0 4px 0 0"}}),e.data.label)},j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClickOutside=function(){n.props.closeForm()},n.handleChange=function(e){e&&e.target&&e.target.name&&n.setState(Object(p.a)({},e.target.name,e.target.value))},n.handleChangeDateTime=function(e,t){e&&e.target&&n.setState(Object(p.a)({},t,e.target.value))},n.handleChangeSelect=function(e){n.setState({color:e,colorData:e})},n.handleFormSubmit=function(e){e.preventDefault()},n.editEvent=function(){n.props.editEvent(n.state),n.props.closeForm()},n.state={id:n.props.inputsValue.id,title:n.props.inputsValue.title||"",startDate:O(n.props.inputsValue.start||n.props.currentDate)[0],startTime:O(n.props.inputsValue.time)[1],notes:n.props.inputsValue.notes||"",color:n.props.inputsValue.colorData||m[0],colorData:n.props.inputsValue.colorData||m[0]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-wrapper",style:{top:this.props.coordinates.top,left:this.props.coordinates.left}},r.a.createElement("button",{className:"btn-close",type:"button",onClick:this.props.closeForm},r.a.createElement("i",{className:"fa fa-times-circle-o","aria-hidden":"true"})),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"hidden",name:"id",value:this.state.id}),r.a.createElement("input",{type:"text",name:"title",maxLength:30,placeholder:"event name",value:this.state.title,onChange:this.handleChange}),r.a.createElement("div",{className:"input-wrap"},r.a.createElement("label",{htmlFor:"date"},r.a.createElement("i",{className:"fa fa-calendar-o","aria-hidden":"true"})),r.a.createElement("input",{id:"date",type:"date",name:"date",placeholder:"event date",value:this.state.startDate,onChange:function(t){return e.handleChangeDateTime(t,"startDate")}})),r.a.createElement("div",{className:"input-wrap"},r.a.createElement("label",{htmlFor:"time"},r.a.createElement("i",{className:"fa fa-clock-o","aria-hidden":"true"})),r.a.createElement("input",{id:"time",type:"time",name:"time",placeholder:"event time",value:this.state.startTime,onChange:function(t){return e.handleChangeDateTime(t,"startTime")}})),r.a.createElement(h.a,{classNamePrefix:"custom-select",defaultValue:this.state.color,options:m,onChange:this.handleChangeSelect,components:{Option:g}}),r.a.createElement("input",{type:"text",name:"notes",placeholder:"notes",value:this.state.notes,onChange:this.handleChange}),this.props.isEdit?r.a.createElement("div",{className:"btn-wrap"},r.a.createElement("button",{className:"btn-cancel",onClick:function(){return e.props.removeEvent(e.props.inputsValue.id)}},"Discard"),r.a.createElement("button",{type:"button",onClick:this.editEvent},"Edit")):r.a.createElement("div",{className:"btn-wrap"},r.a.createElement("button",{className:"btn-cancel",onClick:this.props.closeForm},"Cancel"),r.a.createElement("button",{type:"button",onClick:function(){return e.props.createEvent(e.state)}},"Save"))))}}]),a}(r.a.Component);var F=Object(d.b)((function(e){return{currentDate:e.calendar.currentDate,inputsValue:e.calendar.inputsValue,isEdit:e.calendar.isEdit,coordinates:e.calendar.coordinates}}),(function(e){return{createEvent:function(t){return e(function(e){return{type:"CREATE_EVENT",payload:{data:e}}}(t))},editEvent:function(t){return e(function(e){return{type:"EDIT_EVENT",payload:{data:e}}}(t))},removeEvent:function(t){return e(function(e){return{type:"REMOVE_EVENT",payload:{id:e}}}(t))},closeForm:function(){return e({type:"CLOSE_FORM"})}}}))(Object(E.a)(j)),C=a(10),_=a(31),w=a(17),V=a(32),N=a(33),T=a(34),k=(a(51),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).calendarComponentRef=r.a.createRef(),e.state={calendarWeekends:!0},e.createEventForm=function(t){e.props.closeForm(),e.props.openEventForm(t.date,e.getCoordinates(t,!1))},e.editEventForm=function(t){e.props.openEventFormWithValues({id:+t.event.id,title:t.event.title,start:t.event.start,time:t.event.start,notes:t.event.extendedProps.notes,color:t.event.backgroundColor,colorData:t.event.extendedProps.colorData},e.getCoordinates(t,!0))},e.getCoordinates=function(t,a){var n=t&&t.jsEvent&&t.jsEvent.toElement;if(t){var r=e.getDomParentElement(n,a?6:5),o=n.getBoundingClientRect(),l=r.getBoundingClientRect();return{top:l.top+Math.round(l.height/2)+(a?20:0),left:o.left-15}}},e.droppedEvent=function(t){e.props.droppedEvent(+t.event.id,t.event.start)},e}return Object(i.a)(a,[{key:"getDomParentElement",value:function(e,t){for(var a=e,n=0;n<t;){if(!a.parentElement)return a;a=a.parentElement,n++}return a}},{key:"render",value:function(){return r.a.createElement("div",{className:"calendar-wrapper"},r.a.createElement(_.a,{defaultView:"dayGridMonth",header:{left:"today,prev,next",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},buttonText:{today:"Today",month:"Month",week:"Week",day:"Day",list:"Agenda",prev:"Back",next:"Next"},plugins:[w.d,V.a,T.a,N.a],ref:this.calendarComponentRef,weekends:this.state.calendarWeekends,events:Object(C.a)(this.props.calendarEvents),dateClick:this.createEventForm,eventClick:this.editEventForm,firstDay:1,selectable:!0,editable:!0,droppable:!0,eventDrop:this.droppedEvent,eventReceive:this.eventReceive,nowIndicator:!0}))}}]),a}(r.a.Component));var S=Object(d.b)((function(e){return{calendarEvents:e.calendar.calendarEvents,showEventForm:e.calendar.showEventForm}}),(function(e){return{openEventForm:function(t,a){return e(function(e,t){return{type:"SHOW_EVENT_FORM",payload:{coordinates:t,currentDate:e}}}(t,a))},openEventFormWithValues:function(t,a){return e(function(e,t){return{type:"SHOW_EVENT_FORM_WITH_VALUE",payload:{values:e,coordinates:t}}}(t,a))},closeForm:function(){return e({type:"CLOSE_FORM"})},droppedEvent:function(t,a){return e(function(e,t){return{type:"DROPPED_EVENT",payload:{id:e,date:t}}}(t,a))}}}))(k),R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(S,null),this.props.showEventForm?r.a.createElement(F,null):null)}}]),a}(r.a.Component);var M=Object(d.b)((function(e){return{showEventForm:e.calendar.showEventForm}}))(R);var W=function(){return r.a.createElement(M,null)},x=a(9),P=a(5),H={showEventForm:!1,calendarEvents:[{id:0,title:"My test event",start:new Date,time:"",notes:"fu",color:"#3B86FF",colorData:""}],coordinates:{},inputsValue:{},isEdit:!1,currentDate:""};var Y=Object(x.c)({calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_EVENT_FORM":var a=t.payload.currentDate||new Date,n={id:e.calendarEvents.length,start:a,time:a,title:"",notes:"",color:""};return Object(P.a)(Object(P.a)({},e),{},{showEventForm:!0,coordinates:t.payload.coordinates,inputsValue:n,isEdit:!1});case"SHOW_EVENT_FORM_WITH_VALUE":return Object(P.a)(Object(P.a)({},e),{},{showEventForm:!0,inputsValue:t.payload.values,coordinates:t.payload.coordinates,isEdit:!0});case"CREATE_EVENT":var r=t.payload.data,o=Object(C.a)(e.calendarEvents);return o.push({id:o.length,title:r.title,start:y("".concat(r.startDate,"|").concat(r.startTime)),time:r.time,notes:r.notes,color:r.color.color,colorData:r.colorData}),Object(P.a)(Object(P.a)({},e),{},{showEventForm:!1,calendarEvents:o});case"EDIT_EVENT":var l=t.payload.data;return e.calendarEvents[l.id]&&(e.calendarEvents[l.id]={id:l.id,title:l.title,start:y("".concat(l.startDate,"|").concat(l.startTime)),time:l.time,notes:l.notes,color:l.color.color,colorData:l.colorData}),Object(P.a)(Object(P.a)({},e),{},{calendarEvents:Object(C.a)(e.calendarEvents)});case"REMOVE_EVENT":return Object(P.a)(Object(P.a)({},e),{},{calendarEvents:Object(C.a)(e.calendarEvents).filter((function(e,a){return a!==t.payload.id})),showEventForm:!1});case"CLOSE_FORM":return Object(P.a)(Object(P.a)({},e),{},{showEventForm:!1});case"DROPPED_EVENT":return e.calendarEvents[t.payload.id]&&(e.calendarEvents[t.payload.id].start=t.payload.date),Object(P.a)(Object(P.a)({},e),{},{calendarEvents:Object(C.a)(e.calendarEvents)});default:return e}}}),B=a(35),I="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):x.d,L=Object(x.e)(Y,I(Object(x.a)((function(e){return function(e){return function(t){return e(t)}}}),B.a))),A=r.a.createElement(d.a,{store:L},r.a.createElement(W,null));l.a.render(A,document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.fd1a932e.chunk.js.map
import React from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from '@fullcalendar/list'
import interactionPlugin from "@fullcalendar/interaction"
import {connect} from 'react-redux'
import {openForm, openFormWithValues} from '../../redux/action/calendar'

class CalendarView extends React.Component {

    calendarComponentRef = React.createRef();
    state = {
        calendarWeekends: true,
    }

    handleDateClick = arg => {
        this.props.openForm(arg.date)
    }

    handleClickEvent = (event) => {
        const data = {
            id: +event.event.id,
            title: event.event.title,
            start: event.event.start,
            time: event.event.start,
            notes: event.event.extendedProps.notes
        }

        this.props.openFormWithValues(data)
    }

    render() {
        return (
            <div>
                <FullCalendar
                    defaultView="dayGridMonth"
                    header={{
                        left: "today prev,next",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                    }}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    ref={this.calendarComponentRef}
                    weekends={this.state.calendarWeekends}
                    events={[...this.props.calendarEvents]}
                    dateClick={this.handleDateClick}
                    eventClick={this.handleClickEvent}
                    firstDay={1}
                    selectable={true}
                    editable={true}
                    droppable={true}
                    eventDrop={function(eventBj, date) {
                        console.log('eventDrop function');
                    }}
                    drop={(date, jsEvent, ui, resourceId) => {
                        console.log('drop function');
                    }}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        calendarEvents: state.calendar.calendarEvents,
        showEventForm: state.calendar.showEventForm,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openForm: currentDay => dispatch(openForm(currentDay)),
        openFormWithValues: values => dispatch(openFormWithValues(values)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)
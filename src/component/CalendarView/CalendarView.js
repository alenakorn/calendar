import React from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from '@fullcalendar/list'
import interactionPlugin from "@fullcalendar/interaction"
import {connect} from 'react-redux'
import {openEventForm, openEventFormWithValues} from '../../redux/action/calendar'

import './CalendarView.scss'

class CalendarView extends React.Component {

    calendarComponentRef = React.createRef();
    state = {
        calendarWeekends: true,
    }

    createEvent = event => {
        const rect = event.jsEvent.toElement.getBoundingClientRect()
        const coordinates = {
            top: rect.bottom - (rect.height/2),
            left: rect.left
        }

        this.props.openEventForm(event.date, coordinates)
    }



    editEvent = (event) => {
        this.props.openEventFormWithValues({
            id: +event.event.id,
            title: event.event.title,
            start: event.event.start,
            time: event.event.start,
            notes: event.event.extendedProps.notes
        })
    }

    render() {
        return (
            <div className='calendar-wrapper'>
                <FullCalendar
                    defaultView="dayGridMonth"
                    header={{
                        left: "today,prev,next",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                    }}
                    buttonText={{
                        today: 'Today',
                        month: 'Month',
                        week: 'Week',
                        day: 'Day',
                        list: 'Agenda',
                        prev: 'Back',
                        next: 'Next',

                    }}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    ref={this.calendarComponentRef}
                    weekends={this.state.calendarWeekends}
                    events={[...this.props.calendarEvents]}
                    dateClick={this.createEvent}
                    eventClick={this.editEvent}
                    firstDay={1}
                    selectable={true}
                    editable={true}
                    droppable={true}
                    eventDrop={this.drop}
                    eventReceive={this.eventReceive}
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
        openEventForm: (currentDay, coordinates) => dispatch(openEventForm(currentDay, coordinates)),
        openEventFormWithValues: values => dispatch(openEventFormWithValues(values)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)

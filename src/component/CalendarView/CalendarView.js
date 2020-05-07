import React from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from '@fullcalendar/list'
import interactionPlugin from "@fullcalendar/interaction"
import {connect} from 'react-redux'
import {dateClick} from '../../redux/action/calendar'

class CalendarView extends React.Component {

    calendarComponentRef = React.createRef();
    state = {
        calendarWeekends: true,
        calendarEvents: this.props.calendarEvents
    }

    handleDateClick = arg => {
        this.props.dateClick(arg.date)
    }

    render() {
        return (
            <div>
                <FullCalendar
                    id={this.props.randomId}
                    defaultView="dayGridMonth"
                    header={{
                        left: "today prev,next",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                    }}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    ref={this.calendarComponentRef}
                    weekends={this.state.calendarWeekends}
                    events={this.props.calendarEvents}
                    dateClick={this.handleDateClick}
                    firstDay={1}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        calendarEvents: state.calendar.calendarEvents,
        showEventForm: state.calendar.showEventForm,
        rerenderCalendar: state.calendar.rerenderCalendar,
        randomId: state.calendar.randomId,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dateClick: currentDay => dispatch(dateClick(currentDay))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)
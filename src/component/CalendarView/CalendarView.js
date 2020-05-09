import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import {connect} from 'react-redux'
import {
    closeForm,
    droppedEvent,
    getEventsFromLocalStorage,
    openEventForm,
    openEventFormWithValues
} from '../../redux/action/calendar'
import {prepareEventItem} from '../../shared/eventModel'
import './CalendarView.scss'

class CalendarView extends React.Component {

    calendarComponentRef = React.createRef()
    state = {
        calendarWeekends: true,
    }

    componentDidMount() {
        this.props.getEventsFromLocalStorage()
    }

    createEventForm = event => {
        this.props.closeForm()
        this.props.openEventForm(event.date, this.getCoordinates(event, false))
    }

    editEventForm = info => {
        this.props.openEventFormWithValues(
            prepareEventItem('SHOW_EVENT_FORM_WITH_VALUE', info.event),
            this.getCoordinates(info, true)
        )
    }

    getCoordinates = (event, isTypeEdit) => {
        const elem = event && event.jsEvent && event.jsEvent.toElement
        if (!event) {
            return
        }
        const container = this.getDomParentElement(elem, (isTypeEdit ? 6 : 5))
        const rectElement = elem.getBoundingClientRect()
        const rectContainer = container.getBoundingClientRect()
        let top = rectContainer.top + Math.round(rectContainer.height / 2) + (isTypeEdit ? 20 : 0)
        let left = rectElement.left - 15
        return {top, left}
    }

    getDomParentElement(elem, levelUp) {
        let destination = elem
        let i = 0
        while (i < levelUp) {
            if (destination.parentElement) {
                destination = destination.parentElement
            } else {
                return destination
            }
            i++
        }
        return destination
    }

    droppedEvent = info => {
        this.props.droppedEvent(+info.event.id, info.event.start)
    }

    render() {
        const calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]
        const calendarHeader = {
            left: 'today,prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }
        const calendarButtonText = {
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day',
            list: 'Agenda',
            prev: 'Back',
            next: 'Next',
        }
        return (
            <div className='calendar-wrapper'>
                <FullCalendar
                    defaultView='dayGridMonth'
                    header={calendarHeader}
                    buttonText={calendarButtonText}
                    plugins={calendarPlugins}
                    ref={this.calendarComponentRef}
                    weekends={this.state.calendarWeekends}
                    events={[...this.props.calendarEvents]}
                    dateClick={this.createEventForm}
                    eventClick={this.editEventForm}
                    firstDay={1}
                    selectable={true}
                    editable={true}
                    droppable={true}
                    eventDrop={this.droppedEvent}
                    eventReceive={this.eventReceive}
                    nowIndicator={true}
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
        openEventFormWithValues: (values, coordinates) => dispatch(openEventFormWithValues(values, coordinates)),
        closeForm: () => dispatch(closeForm()),
        droppedEvent: (id, date) => dispatch(droppedEvent(id, date)),
        getEventsFromLocalStorage: () => dispatch(getEventsFromLocalStorage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)

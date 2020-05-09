import React from 'react'
import {connect} from 'react-redux'
import './CalendarWrapper.scss'

import EventPopover from '../../component/EventForm/EventForm'
import CalendarView from '../../component/CalendarView/CalendarView'

class CalendarWrapper extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <CalendarView />
                {this.props.showEventForm ? <EventPopover/> : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        showEventForm: state.calendar.showEventForm,
    }
}


export default connect(mapStateToProps )(CalendarWrapper)

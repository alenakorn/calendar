import React from "react";
import {connect} from 'react-redux'
import {createEvent, editEvent, removeEvent} from '../../redux/action/calendar'
import {fromDate} from "../../shared/dates";

import './EventForm.scss'

class EventForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.inputsValue.id,
            title: this.props.inputsValue.title || "",
            startDate: fromDate(this.props.inputsValue.start || this.props.currentDate)[0],
            startTime: fromDate(this.props.inputsValue.time)[1],
            notes: this.props.inputsValue.notes || ''
        };
    }

    handleChange = (event) => {
        if (!(event && event.target && event.target.name)) {
            return;
        }
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChangeDateTime = (event, type) => {
        if (!(event && event.target)) {
            return;
        }
        this.setState({
            [type]: event.target.value,
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    editEvent = () => {
        this.props.editEvent(this.state)
    }

    render() {
        return (
            <div className="form-wrapper">
                <button className="btn-close" type="button" onClick={() => this.props.removeEvent(this.props.inputsValue.id)}>
                    <i className="fa fa-times-circle-o" aria-hidden="true"/>
                </button>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        type="hidden"
                        name="id"
                        value={this.state.id}
                    />
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />

                    <i className="fa fa-calendar-o" aria-hidden="true"/>
                    <input
                        type="date"
                        name="date"
                        value={this.state.startDate}
                        onChange={event => this.handleChangeDateTime(event, 'startDate')}
                    />

                    <i className="fa fa-clock-o" aria-hidden="true"/>
                    <input
                        type="time"
                        name="time"
                        value={this.state.startTime}
                        onChange={event => this.handleChangeDateTime(event, 'startTime')}
                    />
                    <input
                        type="text"
                        name="notes"
                        value={this.state.notes}
                        onChange={this.handleChange}
                    />
                    <div className='btn-wrap'>
                        <button className='btn-cancel'>Cancel</button>
                        <button type='button' onClick={this.editEvent}>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentDate: state.calendar.currentDate,
        inputsValue: state.calendar.inputsValue,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createEvent: data => dispatch(createEvent(data)),
        editEvent: data => dispatch(editEvent(data)),
        removeEvent: id => dispatch(removeEvent(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

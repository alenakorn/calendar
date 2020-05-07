import React from "react";
import {connect} from 'react-redux'
import {removeEvents, submitForm} from '../../redux/action/calendar'
import moment from 'moment'

import './EventForm.scss'

class EventForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.inputsValue.id,
            title: this.props.inputsValue.title || "",
            startDate: this.fromDate(this.props.inputsValue.start || this.props.currentDate)[0],
            startTime: this.fromDate(this.props.inputsValue.time)[1],
            notes: this.props.inputsValue.notes || ''
        };
    }

    fromDate(date) {
        return moment(date).format('YYYY-MM-DD|HH:mm').split('|')
    }

    toDate(str) {
        return moment(str, 'YYYY-MM-DD|HH:mm').toDate()
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

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleSaveForm = () => {
        this.props.submitForm(this.state)
    }

    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <button type="button" onClick={() => this.props.removeEvents(this.props.inputsValue.id)}>xDELx</button>
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
                    <input
                        type="date"
                        name="date"
                        value={this.state.startDate}
                        onChange={event => this.handleChangeDateTime(event, 'startDate')}
                    />
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
                        <button type='button' onClick={this.handleSaveForm}>Save</button>
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
        submitForm: data => dispatch(submitForm(data)),
        removeEvents: id => dispatch(removeEvents(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

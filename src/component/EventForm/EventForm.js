import React from "react";
import {connect} from 'react-redux'
import {submitForm} from '../../redux/action/calendar'
import moment from 'moment'

class EventForm extends React.Component {

    state = {
        title: this.props.inputsValue.title || "",
        start: this.props.inputsValue.start || this.props.currentDate,
        time: this.props.inputsValue.start || this.props.inputsValue.time,
        notes: this.props.inputsValue.notes || ''
    };


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

    handleChangeDateTime = (event, type, dateRaw) => {
        const value = (type === 'time') ? dateRaw : event.target.value;
        const valueDate = this.toDate(value)
        this.setState({
            [type]: valueDate,
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input
                        type="date"
                        name="start"
                        value={this.fromDate(this.state.start)[0]}
                        onChange={event => this.handleChangeDateTime(event, 'date')}
                    />
                    <input
                        type="time"
                        name="time"
                        value={this.fromDate(this.state.time)[1]}
                        onChange={event => this.handleChangeDateTime(event, 'time', this.fromDate(this.state.time))}
                    />
                    <input
                        type="text"
                        name="notes"
                        value={this.state.notes}
                        onChange={this.handleChange}
                    />

                    <button>Cancel</button>
                    <button type='button' onClick={this.handleSaveForm}>Save</button>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

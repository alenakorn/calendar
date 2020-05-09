import React from 'react'
import {connect} from 'react-redux'
import onClickOutside from 'react-onclickoutside'
import { colourOptions } from '../../shared/colors'
import Select, {components} from 'react-select'
import {closeForm, createEvent, editEvent, removeEvent} from '../../redux/action/calendar'
import {fromDate} from '../../shared/dates'

import './EventForm.scss'

const { Option } = components
const IconOption = props => (
    <Option {...props}>
        <i className="fa fa-square" aria-hidden="true" style={{ color: props.data.color, margin: '0 4px 0 0' }}/>
        {props.data.label}
    </Option>
)

class EventForm extends React.Component {

    constructor(props) {
        super(props)
        this.state  = {
            id: this.props.inputsValue.id,
            title: this.props.inputsValue.title || "",
            startDate: fromDate(this.props.inputsValue.start || this.props.currentDate)[0],
            startTime: fromDate(this.props.inputsValue.time)[1],
            notes: this.props.inputsValue.notes || '',
            color: colourOptions[0]
        }
        console.log('props', props.inputsValue)
    }

    handleClickOutside = () => {
        this.props.closeForm()
    }

    handleChange = (event) => {
        if (!(event && event.target && event.target.name)) {
            return
        }
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChangeDateTime = (event, type) => {
        if (!(event && event.target)) {
            return
        }
        this.setState({
            [type]: event.target.value,
        })
    }

    handleChangeSelect = (selectedOption) => {
        this.setState({
            color: selectedOption
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
    }

    editEvent = () => {
        this.props.editEvent(this.state)
        this.props.closeForm()
    }

    render() {
        return (
            <div className="form-wrapper" style={{top: this.props.coordinates.top, left: this.props.coordinates.left}}>
                <button className="btn-close" type="button" onClick={this.props.closeForm}>
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
                        maxLength={30}
                        placeholder="event name"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <div className="input-wrap">
                        <label htmlFor="date">
                            <i className="fa fa-calendar-o" aria-hidden="true"/>
                        </label>
                        <input
                            id="date"
                            type="date"
                            name="date"
                            placeholder="event date"
                            value={this.state.startDate}
                            onChange={event => this.handleChangeDateTime(event, 'startDate')}
                        />
                    </div>

                    <div className="input-wrap">
                        <label htmlFor="time">
                            <i className="fa fa-clock-o" aria-hidden="true"/>
                        </label>
                        <input
                            id="time"
                            type="time"
                            name="time"
                            placeholder="event time"
                            value={this.state.startTime}
                            onChange={event => this.handleChangeDateTime(event, 'startTime')}
                        />
                    </div>
                    <Select
                        classNamePrefix='custom-select'
                        defaultValue={this.state.color}
                        options={colourOptions}
                        onChange={this.handleChangeSelect}
                        components={{ Option: IconOption }}
                    />
                    <input
                        type="text"
                        name="notes"
                        placeholder="notes"
                        value={this.state.notes}
                        onChange={this.handleChange}
                    />
                    { this.props.isEdit
                        ? (
                            <div className='btn-wrap'>
                                <button className='btn-cancel' onClick={() => this.props.removeEvent(this.props.inputsValue.id)}>Discard</button>
                                <button type='button' onClick={this.editEvent}>Edit</button>
                            </div>
                        )
                        : (
                            <div className='btn-wrap'>
                                <button className='btn-cancel' onClick={this.props.closeForm}>Cancel</button>
                                <button type='button' onClick={() => this.props.createEvent(this.state)}>Save</button>
                            </div>
                        )
                    }
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentDate: state.calendar.currentDate,
        inputsValue: state.calendar.inputsValue,
        isEdit: state.calendar.isEdit,
        coordinates: state.calendar.coordinates
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createEvent: data => dispatch(createEvent(data)),
        editEvent: data => dispatch(editEvent(data)),
        removeEvent: id => dispatch(removeEvent(id)),
        closeForm: () => dispatch(closeForm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(EventForm))

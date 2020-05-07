import React from "react";
import {connect} from 'react-redux'
import {submitForm} from '../../redux/action/calendar'

class EventForm extends React.Component {

    state = {
        title: "",
        start: new Date(),
        notes: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
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
                        id="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input
                        type="data"
                        name="start"
                        id="start"
                        value={new Date()}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="notes"
                        id="notes"
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

function mapDispatchToProps(dispatch) {
    return {
        submitForm: data => dispatch(submitForm(data))
    }
}

export default connect(null, mapDispatchToProps)(EventForm);

import {CREATE_NEW_EVENT, SHOW_EVENT_FORM, SHOW_EVENT_FORM_WITH_VALUE} from '../action/types'

const initialState = {
    showEventForm: false,
    calendarEvents: [
        {
            title: 'My test event',
            start: new Date(),
            time: '',
            notes: 'fu'
        }
    ],
    inputsValue: {},
    currentDate: '',
}

export default function calendar(state = initialState, action) {
    switch (action.type) {
        case SHOW_EVENT_FORM:
            return {
                ...state,
                showEventForm: true,
                currentDate: action.currentDate
            }
        case SHOW_EVENT_FORM_WITH_VALUE: {
            return {
                ...state,
                showEventForm: true,
                inputsValue: action.values
            }
        }
        case CREATE_NEW_EVENT:
            let calendarEvents = state.calendarEvents
            calendarEvents.push(action.data)
            return {
                ...state, showEventForm: false, calendarEvents,
            }
        default :
            return state;
    }

}

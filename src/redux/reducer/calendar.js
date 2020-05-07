import {CREATE_NEW_EVENT, REMOVE_EVENTS, SHOW_EVENT_FORM, SHOW_EVENT_FORM_WITH_VALUE} from '../action/types'

const initialState = {
    showEventForm: false,
    calendarEvents: [
        {
            id: 0,
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
            const calendarEvents = state.calendarEvents
            const id = calendarEvents.length
            calendarEvents.push({...action.data, id})

            return {
                ...state, showEventForm: false, calendarEvents,
            }
        case REMOVE_EVENTS:
            return {
                ...state,
                calendarEvents: [...state.calendarEvents].filter((value,key) => key !== action.id)

            }
        default :
            return state;
    }

}

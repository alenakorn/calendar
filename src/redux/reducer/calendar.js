import {CREATE_NEW_EVENT, SHOW_EVENT_FORM} from '../action/types'

const initialState = {
    showEventForm: false,
    calendarEvents: [
        {
            // id: 'a',
            title: 'My test event',
            start: new Date(),
            notes: 'fu'
        }
    ],
    currentDate: '',
    rerenderCalendar: false,
    randomId: Math.random()
}

export default function calendar(state = initialState, action) {
    switch (action.type) {
        case SHOW_EVENT_FORM:
            return {
                ...state,
                showEventForm: true,
                currentDate: action.currentDate
            }
        case CREATE_NEW_EVENT:
            let calendarEvents = state.calendarEvents
            calendarEvents.push(action.data)
            return {
                ...state, showEventForm: false, calendarEvents, rerenderCalendar: true, randomId: action.randomId
            }
        default :
            return state;
    }

}

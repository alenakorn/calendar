import {CREATE_NEW_EVENT, EDIT_EVENT, REMOVE_EVENT, SHOW_EVENT_FORM, SHOW_EVENT_FORM_WITH_VALUE} from '../action/types'
import {toDate} from "../../shared/dates";

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
                ...state,
                showEventForm: false,
                calendarEvents,
            }

        case EDIT_EVENT:
            if (state.calendarEvents[action.data.id]) {
                state.calendarEvents[action.data.id] = {
                    id: action.data.id,
                    title: action.data.title,
                    start: toDate(`${action.data.startDate}|${action.data.startTime}`),
                    time: action.data.time,
                    notes: action.data.notes
                }
            }
            return {
                ...state,
                calendarEvents: [...state.calendarEvents]
            }

        case REMOVE_EVENT:
            return {
                ...state,
                calendarEvents: [...state.calendarEvents].filter((value, key) => key !== action.id)
            }

        default :
            return state;
    }

}

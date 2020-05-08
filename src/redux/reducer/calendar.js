import {
    CLOSE_FORM,
    CREATE_EVENT,
    EDIT_EVENT,
    REMOVE_EVENT,
    SHOW_EVENT_FORM,
    SHOW_EVENT_FORM_WITH_VALUE
} from '../action/types'
import {toDate} from "../../shared/dates";

const initialState = {
    showEventForm: false,
    calendarEvents: [
        {
            id: 0,
            title: 'My test event',
            start: new Date(),
            time: '',
            notes: 'fu',
            color: 'blur'
        }
    ],
    coordinates: {},
    inputsValue: {},
    isEdit: false,
    currentDate: '',
}

export default function calendar(state = initialState, action) {

    switch (action.type) {

        case SHOW_EVENT_FORM: {
            const date = action.currentDate || new Date()
            const defaultInputValues = {
                id: state.calendarEvents.length,
                start: date,
                time: date,
                title: '',
                notes: '',
                color: ''
            }
            return {
                ...state,
                showEventForm: true,
                coordinates: action.coordinates,
                inputsValue: defaultInputValues
            }
        }

        case SHOW_EVENT_FORM_WITH_VALUE: {
            return {
                ...state,
                showEventForm: true,
                inputsValue: action.values,
                coordinates: action.coordinates,
                isEdit: true
            }
        }

        case CREATE_EVENT:
            const calendarEvents = [...state.calendarEvents]
            calendarEvents.push({
                id: calendarEvents.length,
                title: action.data.title,
                start: toDate(`${action.data.startDate}|${action.data.startTime}`),
                time: action.data.time,
                notes: action.data.notes,
                color: action.data.color,
            })
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
                    notes: action.data.notes,
                    color: action.data.color,
                }
            }
            return {
                ...state,
                calendarEvents: [...state.calendarEvents],
            }

        case REMOVE_EVENT:
            return {
                ...state,
                calendarEvents: [...state.calendarEvents].filter((value, key) => key !== action.id),
                showEventForm: false,
            }

        case CLOSE_FORM:
            return {
                ...state,
                showEventForm: false,
            }

        default :
            return state;
    }

}

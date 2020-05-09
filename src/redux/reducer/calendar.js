import {
    CLOSE_FORM,
    CREATE_EVENT,
    DROPPED_EVENT,
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
            color: '#3B86FF'
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
            const date = action.payload.currentDate || new Date()
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
                coordinates: action.payload.coordinates,
                inputsValue: defaultInputValues,
                isEdit: false
            }
        }

        case SHOW_EVENT_FORM_WITH_VALUE: {
            return {
                ...state,
                showEventForm: true,
                inputsValue: action.payload.values,
                coordinates: action.payload.coordinates,
                isEdit: true
            }
        }

        case CREATE_EVENT:
            const dataCreate = action.payload.data
            const calendarEvents = [...state.calendarEvents]
            calendarEvents.push({
                id: calendarEvents.length,
                title: dataCreate.title,
                start: toDate(`${dataCreate.startDate}|${dataCreate.startTime}`),
                time: dataCreate.time,
                notes: dataCreate.notes,
                color: dataCreate.color,
            })
            return {
                ...state,
                showEventForm: false,
                calendarEvents,
            }

        case EDIT_EVENT:
            const dataEdit = action.payload.data
            if (state.calendarEvents[dataEdit.id]) {
                console.log('dataEdit.color', dataEdit.color)
                state.calendarEvents[dataEdit.id] = {
                    id: dataEdit.id,
                    title: dataEdit.title,
                    start: toDate(`${dataEdit.startDate}|${dataEdit.startTime}`),
                    time: dataEdit.time,
                    notes: dataEdit.notes,
                    color: dataEdit.color,
                }
            }
            return {
                ...state,
                calendarEvents: [...state.calendarEvents],
            }

        case REMOVE_EVENT:
            return {
                ...state,
                calendarEvents: [...state.calendarEvents].filter((value, key) => key !== action.payload.id),
                showEventForm: false,
            }

        case CLOSE_FORM:
            return {
                ...state,
                showEventForm: false,
            }

        case DROPPED_EVENT:
            if (state.calendarEvents[action.payload.id]) {
                state.calendarEvents[action.payload.id].start = action.payload.date
            }

            return {
                ...state,
                calendarEvents: [...state.calendarEvents]
            }

        default :
            return state;
    }

}

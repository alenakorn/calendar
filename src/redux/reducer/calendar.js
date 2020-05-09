import {prepareEventItem} from '../../shared/eventModel'

import {
    CLOSE_FORM,
    CREATE_EVENT,
    DROPPED_EVENT,
    EDIT_EVENT,
    GET_EVENT_FROM_LOCAL_STORAGE,
    SET_TO_LOCAL_STORAGE,
    REMOVE_EVENT,
    SHOW_EVENT_FORM,
    SHOW_EVENT_FORM_WITH_VALUE
} from '../action/types'

const initialState = {
    showEventForm: false,
    calendarEvents: [],
    coordinates: {},
    inputsValue: {},
    isEdit: false,
    currentDate: '',
}

export default function calendar(state = initialState, action) {

    switch (action.type) {

        case SHOW_EVENT_FORM: {
            const date = action.payload.currentDate || new Date()
            return {
                ...state,
                showEventForm: true,
                coordinates: action.payload.coordinates,
                inputsValue: prepareEventItem('SHOW_EVENT_FORM', {id: state.calendarEvents.length, date}),
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
            const calendarEvents = [...state.calendarEvents]
            calendarEvents.push(
                prepareEventItem('CREATE_EVENT', {...action.payload,  id: calendarEvents.length})
            )
            return {
                ...state,
                showEventForm: false,
                calendarEvents,
            }

        case EDIT_EVENT:
            if (action.payload && state.calendarEvents[action.payload.id]) {
                state.calendarEvents[action.payload.id] = prepareEventItem('EDIT_EVENT', action.payload)
            }
            return {
                ...state,
                calendarEvents: [...state.calendarEvents],
            }

        case REMOVE_EVENT:
            return {
                ...state,
                calendarEvents: [...state.calendarEvents].filter((value, key) => key !== action.payload),
                showEventForm: false,
            }

        case CLOSE_FORM:
            return {
                ...state,
                showEventForm: false,
            }

        case DROPPED_EVENT:
            if (action.payload && state.calendarEvents[action.payload.id]) {
                state.calendarEvents[action.payload.id].start = action.payload.date
            }

            return {
                ...state,
                calendarEvents: [...state.calendarEvents]
            }

        case SET_TO_LOCAL_STORAGE:
            window.localStorage.setItem('calendarEvents', JSON.stringify(state.calendarEvents))
            return {
                ...state
            }

        case GET_EVENT_FROM_LOCAL_STORAGE:
            return {
                ...state,
                calendarEvents: JSON.parse(window.localStorage.getItem('calendarEvents')) || []
            }

        default :
            return state
    }
}

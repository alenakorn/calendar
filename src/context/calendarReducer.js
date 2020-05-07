import {CREATE_NEW_EVENT, SHOW_EVENT_FORM} from './type'

const handlers = {
    [SHOW_EVENT_FORM]: state => ({...state, showEventForm: true }),
    [CREATE_NEW_EVENT]: (state, {payload}) => ({...state, calendarEvents: payload, showEventForm: false}),
    DEFAULT: state => state,
}

export const CalendarReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
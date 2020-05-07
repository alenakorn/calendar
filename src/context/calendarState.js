import React, {useReducer} from 'react'
import {CalendarReducer} from './calendarReducer'
import {CalendarContext} from './calendarContext'
import {CREATE_NEW_EVENT, SHOW_EVENT_FORM} from './type'

export const CalendarState = ({children}) => {
    const initialState = {
        showEventForm: false,
        calendarEvents: [{
            title: 'Event Now',
            start: new Date(),
            notes: '',
        }],
}

    const [state, dispatch] = useReducer(CalendarReducer, initialState)

    const dateClick = () => {
        dispatch({
            type: SHOW_EVENT_FORM
        })
    }

    const submitForm = data => {

        state.calendarEvents.push(data)

        dispatch({
            type: CREATE_NEW_EVENT,
            payload: state.calendarEvents
        })
    }

    const {showEventForm, calendarEvents} = state
    return (
        <CalendarContext.Provider value={{
            dateClick, submitForm,
            showEventForm,calendarEvents
        }}>
            {children}
        </CalendarContext.Provider>
    )
}


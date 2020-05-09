import {
    CLOSE_FORM,
    CREATE_EVENT, DROPPED_EVENT,
    EDIT_EVENT, GET_EVENT_FROM_LOCAL_STORAGE,
    REMOVE_EVENT, SET_TO_LOCAL_STORAGE,
    SHOW_EVENT_FORM,
    SHOW_EVENT_FORM_WITH_VALUE
} from './types'

export function openEventForm(currentDate, coordinates) {
    return {
        type: SHOW_EVENT_FORM,
        payload: {
            coordinates,
            currentDate
        }
    }
}

export function openEventFormWithValues(values, coordinates) {
    return {
        type: SHOW_EVENT_FORM_WITH_VALUE,
        payload: {
            values,
            coordinates
        }
    }
}

export function editEvent(data) {
    return dispatch => {
        dispatch({type: EDIT_EVENT, payload: data})
        dispatch(setToLocalStorage())
    }
}

export function createEvent(data) {
    return dispatch => {
        dispatch({type: CREATE_EVENT, payload: data})
        dispatch(setToLocalStorage())
    }
}

export function removeEvent(id) {
    return dispatch => {
        dispatch({type: REMOVE_EVENT, payload: id})
        dispatch(setToLocalStorage())
    }
}

export function closeForm() {
    return {
        type: CLOSE_FORM
    }
}

export function droppedEvent(id, date) {
    return dispatch => {
        dispatch({
            type: DROPPED_EVENT,
            payload: {
                id,
                date
            }
        })
        dispatch(setToLocalStorage())
    }
}

export function setToLocalStorage() {
    return {
        type: SET_TO_LOCAL_STORAGE
    }
}

export function getEventsFromLocalStorage() {
    return {
        type: GET_EVENT_FROM_LOCAL_STORAGE
    }
}
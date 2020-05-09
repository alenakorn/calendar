import {
    CLOSE_FORM,
    CREATE_EVENT,
    EDIT_EVENT,
    REMOVE_EVENT,
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
    return {
        type: EDIT_EVENT,
        payload: {
            data
        },
    }
}

export function createEvent(data) {
    return {
        type: CREATE_EVENT,
        payload: {
            data
        },
    }
}

export function removeEvent(id) {
    return {
        type: REMOVE_EVENT,
        payload: {
            id
        }
    }
}

export function closeForm() {
    return {
        type: CLOSE_FORM
    }
}
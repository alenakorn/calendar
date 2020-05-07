import {
    CREATE_EVENT,
    EDIT_EVENT,
    REMOVE_EVENT,
    SHOW_EVENT_FORM,
    SHOW_EVENT_FORM_WITH_VALUE
} from './types'

export function openEventForm(currentDate) {
    return {
        type: SHOW_EVENT_FORM,
        currentDate
    }
}

export function openEventFormWithValues(values) {
    return {
        type: SHOW_EVENT_FORM_WITH_VALUE,
        values
    }
}

// @TODO: Implement
export function editEvent(data) {
    return {
        type: EDIT_EVENT,
        data,
    }
}

export function createEvent(data) {
    return {
        type: CREATE_EVENT,
        data,
    }
}

export function removeEvent(id) {
    console.log(id)
    return {
        type: REMOVE_EVENT,
        id
    }
}

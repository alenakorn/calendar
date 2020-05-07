import {CREATE_NEW_EVENT, SHOW_EVENT_FORM} from './types'

export function dateClick(currentDate) {
    return {
        type: SHOW_EVENT_FORM,
        currentDate
    }
}

export function submitForm(data) {
    console.log('data>>', data)
    return {
        type: CREATE_NEW_EVENT,
        data,
        randomId: Math.random() - 1
    }
}
















/*
export function fetchContacts() {
    return async dispatch => {
        try {
            const response = await axios.get('/contacts.json')
            const keys = Object.keys(response.data)
            const values = Object.values(response.data)
            const data = values.map((val, key) => ({...val, id: keys[key]}))

            dispatch(fetchContactsSuccess(data))
        } catch (e) {
            dispatch({type: EMPTY_CONTACT_LIST})
        }
    }
}
export function createSuccess() {
    return {
        type: CREATE_SUCCESS
    }
}

export function submitContact(contacts) {
    return async(dispatch) => {
        dispatch({type: SUBMIT_CREATE_FORM, contacts});
        await axios.post('/contacts.json', contacts)
        dispatch(createSuccess())
    }
}

export function closeSuccessMessage() {
    return {
        type: CLOSE_SUCCESS_MESSAGE
    }}

    export function openContact(id) {
    return async dispatch => {
        try {
            const response = await axios.get(`/contacts/${id}.json`)
            dispatch(openContactSuccess(response.data, id))
        } catch (e) {
            console.log(e)
        }
    }
}

    */

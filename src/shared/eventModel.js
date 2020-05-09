import {fromDate, toDate} from './dates'
import {colourOptions} from './colors'

export const prepareEventItem = (type, props) => {

    switch (type) {

        case 'SHOW_EVENT_FORM':
            return {
                id: props.id,
                start: props.date,
                time: props.date,
                title: '',
                notes: '',
                color: ''
            }
            
        case 'SHOW_EVENT_FORM_WITH_VALUE':
            return {
                id: +props.id,
                title: props.title,
                start: props.start,
                time: props.start,
                notes: props.extendedProps.notes,
                color: props.backgroundColor,
                colorData: props.extendedProps.colorData
            }

        case 'CREATE_EVENT':
        case 'EDIT_EVENT':
            return {
                id: props.id,
                title: props.title,
                start: toDate(`${props.startDate}|${props.startTime}`),
                time: props.time,
                notes: props.notes,
                color: props.color.color,
                colorData: props.colorData
            }

        default:
            // @TODO: Make one format: "startDate, startTime" VS "start, time"
            return {
                id: props.inputsValue.id,
                title: props.inputsValue.title || '',
                startDate: fromDate(props.inputsValue.start || props.currentDate)[0],
                startTime: fromDate(props.inputsValue.time)[1],
                notes: props.inputsValue.notes || '',
                color: props.inputsValue.colorData || colourOptions[0],
                colorData: props.inputsValue.colorData || colourOptions[0]
            }
    }

}
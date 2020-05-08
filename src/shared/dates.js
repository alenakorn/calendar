import moment from "moment";

export const FORMAT = 'YYYY-MM-DD|HH:mm';

export function fromDate(date) {
    return moment(date).format(FORMAT).split('|')
}

export function toDate(str) {
    return moment(str, FORMAT).toDate()
}

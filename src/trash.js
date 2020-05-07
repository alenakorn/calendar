const customDayPropGetter = date => {
    if (date.getDate() === 6 || date.getDate() === 7) {
        return {
            className: 'special-day',
            style: {
                backgroundColor: date.getDate() === 7 ? '#faa' : '#afa',
            },
        }
    }

    else return {}
}




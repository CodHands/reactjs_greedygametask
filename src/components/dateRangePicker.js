import React, { useState } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

export default ({ dateRange, filterRange }) => {
    const maxDate = dateRange[0].timestamp;
    const minDate = dateRange[dateRange.length - 1].timestamp;

    const [date, setDate] = useState([new Date(), new Date()])

    const onChange = (selectedDate) => {
        setDate(selectedDate)
        if (selectedDate != null) {
            const x = formatDate(selectedDate);
            filterRange(x)
        }
    }

    const formatDate = (selected) => {
        const newDates = selected.map((date) => {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [year, month, day].join('-')
        })

        return newDates

    }

    return (
        <div>
            <DateRangePicker
                onChange={onChange}
                value={date}
                minDate={new Date(minDate)}
                maxDate={new Date(maxDate)}
            />
        </div>
    )
}

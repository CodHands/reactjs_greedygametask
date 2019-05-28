import React, { useState } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

export default ({ dateRange }) => {
    const maxDate = dateRange[0].timestamp;
    const minDate = dateRange[dateRange.length - 1].timestamp;

    const [date, setDate] = useState([new Date(), new Date()])

    const onChange = (date) => {
        setDate(date)
    }

    console.log(date);

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

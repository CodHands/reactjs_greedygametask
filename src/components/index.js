import React, { useEffect, useState } from 'react'
import { BASE_URI } from '../services';
import DateRangePicker from './dateRangePicker';
import TabularView from './table'

export default () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            let response = await fetch(`${BASE_URI}`)
            let list = await response.json()
            console.log(list);
            if (list && list.length) {
                let sortedList = list.sort(function (a, b) {
                    // Turn your strings into dates, and then subtract them
                    // to get a value that is either negative, positive, or zero.
                    return new Date(b.timestamp) - new Date(a.timestamp);
                });
                setData(sortedList)
            }
        } catch (e) {
            throw e;
        }
    }
    console.log(data);

    return (
        <div>
            {data && data.length ?
                (<div>
                    <DateRangePicker dateRange={data} />
                    <TabularView tabularData={data} />
                </div>)
                : null}
        </div>
    )
}

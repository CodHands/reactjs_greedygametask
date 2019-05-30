import React, { useEffect, useState } from 'react'
import { BASE_URI } from '../services';
import DateRangePicker from './dateRangePicker';
import TabularView from './table';
import LineChart from './lineChart';

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

    const filterDate = (filteredDates) => {
        const filteredData = data.filter((el) => el.timestamp >= filteredDates[0] && el.timestamp <= filteredDates[1]);
        setData(filteredData);
    }

    return (
        <div className="game-data">
            {data && data.length ?
                (<div>
                    <DateRangePicker dateRange={data} filterRange={filterDate} />
                    <TabularView tabularData={data} />
                    <LineChart lineChartData={data} />
                </div>)
                : null}
        </div>
    )
}

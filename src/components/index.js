import React, { useEffect, useState } from 'react'
import { BASE_URI } from '../services';
import DateRangePicker from './dateRangePicker';
import TabularView from './table';
import LineChart from './lineChart';

const Home = () => {

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            let response = await fetch(`${BASE_URI}`)
            let list = await response.json()
            if (list && list.length) {
                let sortedList = list.sort(function (a, b) {
                    return new Date(b.timestamp) - new Date(a.timestamp);
                });
                setData(sortedList)
                setFilteredData(sortedList)
            }
        } catch (e) {
            throw e;
        }
    }

    const filterDate = (filteredDates) => {
        const filteredData = data.filter((el) => el.timestamp >= filteredDates[0] && el.timestamp <= filteredDates[1]);
        setFilteredData(filteredData);
    }

    return (
        <div className="game-data">
            {filteredData && filteredData.length ?
                (<div>
                    <DateRangePicker dateRange={filteredData} filterRange={filterDate} />
                    <LineChart lineChartData={filteredData} />
                    <TabularView tabularData={filteredData} />
                </div>)
                : <img src="/images/loading.gif" className="loader-spinner" alt="loader" />}
        </div>
    )
}

export default Home
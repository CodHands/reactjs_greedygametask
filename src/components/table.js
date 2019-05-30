import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";


export default ({ tabularData }) => {
    const [tableData, setTableData] = useState(tabularData)

    useEffect(() => {
        let updatedTableData = tabularData.map((tb) => {
            tb['eCPM'] = ((tb.revenue / tb.impressions) * 1000).toFixed(3);
            return tb
        })
        setTableData(updatedTableData);
    }, [tabularData])

    const options = {
        responsive: "scroll",
        rowsPerPage: 5,
        search: false,
        filter: false,
        print: false,
        download: false,
        viewColumns: false,
        page: 0,
        rowsPerPageOptions: [5, 10]
    };

    const columns = [
        { name: "timestamp", label: "Date" },
        { name: "game", label: "Game" },
        { name: "revenue", label: "Revenue" },
        { name: "impressions", label: "Impressions" },
        { name: "eCPM", label: "eCPM" }
    ]

    return (
        <div className="margin-xy">
            <MUIDataTable
                data={tableData}
                columns={columns}
                options={options}
            />
        </div>
    )
}



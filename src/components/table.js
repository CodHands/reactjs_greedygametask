import React, { useEffect, useState } from 'react';
// import { ReactMUIDatatable } from "react-material-ui-datatable";
import MUIDataTable from "mui-datatables";


export default ({ tabularData, page }) => {

    const [tableData, setTableData] = useState(tabularData)

    useEffect(() => {
        setTableData(tabularData);
    }, [tabularData, page])

    const options = {
        responsive: "scroll",
        rowsPerPage: 5,
        search: false,
        filter: false,
        print: false,
        download: false,
        viewColumns: false
    };

    const columns = [
        { name: "timestamp", label: "Date" },
        { name: "game", label: "Game" },
        { name: "revenue", label: "Revenue" },
        { name: "impressions", label: "Impressions" }
    ]

    console.log(tableData);

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



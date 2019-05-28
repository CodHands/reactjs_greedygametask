import React from 'react';
import { ReactMUIDatatable } from "react-material-ui-datatable";

export default ({ tabularData }) => {
    const options = {
        filter: true,
        filterType: "dropdown",
        responsive: "scroll"
    };

    const columns = [
        { name: "timestamp", label: "Date" },
        { name: "game", label: "Game" },
        { name: "revenue", label: "Revenue" },
        { name: "impressions", label: "Impressions" }
    ]

    return (
        <div className="margin-xy">
            <ReactMUIDatatable data={tabularData}
                columns={columns}
                options={options}
                searchable={false}
                filterable={false}
            />;
        </div>
    )
}



import React from 'react';
import './App.css';
import { BarChart, ColumnChart, ExecuteQuery } from "@sisense/sdk-ui";
import { Data, measures } from "@sisense/sdk-data";
import * as DM from "./sample-ecommerce";

function App() {
  return (
    <>
      <ExecuteQuery
        dataSource={DM.DataSource}
        dimensions={[DM.Commerce.Date.Years]}
        measures={[measures.sum(DM.Commerce.Revenue, 'Total Quantity')]}
        filters={[]}
      >
        {(data: Data) => {
          return <BarChart dataSet={data}
                           dataOptions={{
                             category: [{name: 'Years', type: 'datetime'}],
                             value: [{name: 'Total Quantity'}],
                             breakBy: []
                           }}
                  />;
        }}
      </ExecuteQuery>
    </>
  );
}

export default App;

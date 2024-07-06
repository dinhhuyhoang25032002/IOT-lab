import React from "react";
import Plot from 'react-plotly.js';
const LineChart = (props) => {
    const getData = () => {
        return Math.random();
    }
    // let cnt = 0;
    // setInterval(() => {
    //     Plot.extendTraces("linechart",
    //         {
    //             y: [[getData()]]
    //         }, [0]
    //     )
    //     cnt++;
    //     if (cnt > 300) {
    //         Plot.relayout("linechart",
    //             {
    //                 xaxis: {
    //                     range: [cnt - 500, cnt]
    //                 }
    //             }
    //         )
    //     }
    // }, 2000);

    return (
        <>
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'text+line',
                        marker: { color: 'red' },
                    },
                    {
                        type: 'line',
                        x: [1, 2, 3 ],
                        y: [2, 5, 3]
                    },
                ]}
                layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
            />
        </>

    );



}
export default LineChart;
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2';
import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash'
import { Chart, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);


const ChartValue = (props) => {

    const plugins = [
        {
            id: "textCenter",
            beforeDatasetsDraw(chart, args, pluginOption) {
                const { ctx, data } = chart;
              {  console.log('check chart,', chart)}
                ctx.save();
                ctx.font = "16px Roboto, sans-serif";
                ctx.fillStyle = 'red';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(`${data.datasets[0].data[0]}*C`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
            },
        },
    ]
    const options = {
        plugins: {
            datalabels: {
                display: false,
                color: "black"
            }
        },
        legend: {
            display: false
        }
    };

    const buildData = () => {
        let data = {
            labels: ['humidityLevel'],
            datasets: [
                {
                    label: "% Trails Open",
                    data: [`${props.gasLevel}`, `${1000 - props.gasLevel}`],
                    borderColor: "rgba(231, 120, 7, 0.4)",
                    backgroundColor: ["rgb(100, 241, 223)", "rgb(131, 128, 128)"],
                }
            ]
        }
        return data;
    }
    const buildDataLine = () => {
        if (props.gasLevel !== null) {
            setTimeout(() => {
                let data = {
                    labels: ['humidityLevel'],
                    datasets: [
                        {
                            label: "% Trails Open",
                            data: [`${props.gasLevel}`, `${1000 - props.gasLevel}`],
                            borderColor: "rgba(231, 120, 7, 0.4)",
                            backgroundColor: ["rgb(100, 241, 223)", "rgb(131, 128, 128)"],
                        }
                    ]
                }
                return data;
            },1000)
        }
    }
    useEffect(() => {
        buildData();
    }, [props.gasLevel]);
    return (
        <>
            <div className='display-chart'>
                <Doughnut data={buildData()} plugins={plugins} options={options} width="270" height="270"></Doughnut>
            </div>
            <div className='display-chart'>

            </div>
        </>
    );
}
export default ChartValue;
import ReactApexChart from 'react-apexcharts'
import React from 'react';
import ApexCharts, { ApexOptions, appendSeries } from 'apexcharts'
class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: false,
      options: {
        series: [{
          name: "newSeries1",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        }],
        chart: {
          id: 'realtime',
          fontFamily: 'Helvetica, Arial, sans-serif',
          height: 350,
          width: 550,
          background: '#fff',
          type: 'line',
          speed: 800,
          foreColor: '#373d3f',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              enabled: true,
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true,
            type: 'x',
            autoScaleYaxis: false,
            zoomedArea: {
              fill: {
                color: '#90CAF9',
                opacity: 0.4
              },
              stroke: {
                color: '#0D47A1',
                opacity: 0.4,
                width: 1
              }
            }
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Dynamic Updating Chart',
          align: 'center'
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: 'numberic',
        },
        yaxis: {
          max: 100
        },
        legend: {
          show: false
        },
        subtitle: {
          text: "Hoang",
          align: 'left',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '12px',
            fontWeight: 'normal',
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#9699a2'
          },
        }
      }
    };
  }

  componentDidMount() {
    let data = document.getElementById
    // let { LineChart } = this.state;
    // console.log('check data Linechart: mount', LineChart);
    // LineChart.appendSeries(
    //   {
    //     name: 'newSeries',
    //     data: [32, 44, 31, 41, 22]
    //   }
    // )
    // try {

    //   setInterval(() => {
    //     appendSeries(
    //       {
    //         name: 'newSeries1',
    //         data: [100, 91, 32, 44, 5]
    //       })
    //     exec('realtime', 'appendSeries', this.state.options.series, true)
    //   }, 5000);

    // } catch(error) {
    //   console.log("check err: ", error);
  }



  //   componentDidUpdate(preProps, preState, snapshot) {

  //   }

  render() {

    console.log("check data: ", this.state.series);
    return (
      <div className="chart">
        <ReactApexChart className="LineChart" options={this.state.options} series={this.state.options.series} type="line" height={350} width={550} />
      </div>
    );
  }
}

// export default ApexChart






// class ApexChart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       series: [{
//         data: [10,15,25,30].slice()
//       }],
//       options: {
//         chart: {
//           id: 'realtime',
//           height: 350,
//           type: 'line',
//           animations: {
//             enabled: true,
//             easing: 'linear',
//             dynamicAnimation: {
//               speed: 1000
//             }
//           },
//           toolbar: {
//             show: false
//           },
//           zoom: {
//             enabled: false
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           curve: 'smooth'
//         },
//         title: {
//           text: 'Dynamic Updating Chart',
//           align: 'left'
//         },
//         markers: {
//           size: 0
//         },
//         xaxis: {
//           type: 'datetime',
//         //  range: XAXISRANGE,
//         },
//         yaxis: {
//           max: 100
//         },
//         legend: {
//           show: false
//         },
//       },


//     };
//   }


//   componentDidMount() {
//     window.setInterval(() => {
//       getNewSeries(lastDate, {
//         min: 10,
//         max: 90
//       })

//       ApexCharts.exec('realtime', 'updateSeries', [{
//         data: data
//       }])
//     }, 1000)
//   }

//   render() {
//     return (
//       <div>
//         <div id="chart">
//           <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
//         </div>
//         <div id="html-dist"></div>
//       </div>
//     );
//   }
// }

export default ApexChart;
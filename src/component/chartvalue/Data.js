

const Data = {
    labels: ['1', '2', '3'],
    datasets: [
        // {
        //     label: "% Lifts Open",
        //     data: ['33', '67'],
        //     borderColor: "rgba(19, 49, 92, 1)",
        //     backgroundColor: "rgba(19, 49, 92,0.2)",
        // },
        {
            label: "% Trails Open",
            data: ['15', `${100 - 15}`, '67'],
            borderColor: "rgba(231, 120, 7, 0.4)",
            backgroundColor: ["rgb(231, 120, 7)", "rgb(21, 120, 7)", "rgb(21, 120, 7)"],
        },
        // {
        //     label: "% Terrain Open",
        //     data: ['9', '23', '65', '83', '90', '34'],
        //     borderColor: "rgba(19, 64, 116, 1)",
        //     backgroundColor: "rgba(19, 64, 116,0.2)",
        // }
    ]
};
export default Data;
import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts"
import TransactionCard from "../components/TransactionCard";


const HotMarket = ({ showSidebar }) => {


    function generateData(count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = (i + 1).toString();
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }

    const [options] = useState({
        chart: {
            height: 350,
            type: 'heatmap',
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                        from: -30,
                        to: 5,
                        name: 'low',
                        color: '#00A100'
                    },
                    {
                        from: 6,
                        to: 20,
                        name: 'medium',
                        color: '#128FD9'
                    },
                    {
                        from: 21,
                        to: 45,
                        name: 'high',
                        color: '#FFB200'
                    },
                    {
                        from: 46,
                        to: 55,
                        name: 'extreme',
                        color: '#FF0000'
                    }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1
        },
        title: {
            text: 'HeatMap Chart with Color Range'
        },
    });



    const [series] = useState([{
        name: 'Jan',
        data: generateData(5, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Feb',
        data: generateData(5, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Mar',
        data: generateData(5, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Apr',
        data: generateData(5, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'May',
        data: generateData(5, {
            min: -30,
            max: 55
        })
    },
    ]);
    const deals = ["Company-1", "Company-2", "Company-3", "Company-4", "Company-5"]


    return (
        <div className='container' onClick={showSidebar}>


            <div className="hot-market">

                {deals.map((el, index) => (
                    <TransactionCard
                        name={el}
                        amount={el.length}
                        key={el.index}
                    />
                ))}

                <h1 className="hotmarket-title"> Hot Markets </h1>
                <div className="heat-map">
                    <div className="heatMap-allIndustries">



                        <h3 className="heatMap-title">Heat Map for All industries</h3>
                        <div className="heatMap-content1">
                            <div id="chart">
                                <ReactApexChart options={options} series={series} type="heatmap" height={400} width={400} />
                            </div>
                        </div>

                        <div className="heatMap-content2">
                            Card is here!
                        </div>


                    </div>
                    <div className="heatMap-allIndustries">
                        <h3 className="heatMap-title">Heat Maps By industries</h3>
                        <div className="heatMap-content1">
                            <div id="chart">
                                <ReactApexChart options={options} series={series} type="heatmap" height={400} width={400} />
                            </div>
                        </div>
                        <div className="heatMap-content2">
                            Card is here!
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotMarket

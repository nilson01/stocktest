import React, { useState, useEffect } from 'react'
import ReactApexChart from "react-apexcharts"

import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useFetch from '../useFetch';
import * as ReactBootStrap from "react-bootstrap";


const BootstrapButton = withStyles({
    root: {
        backgroundColor: '#f7aaaa',
        color: 'white',
        '&:hover': {
            backgroundColor: '#f75f5f',
            borderRadius: '1px',
        },
    },
})(Button);

const StockDetails = ({ showSidebar }) => {
    const [name] = useState('twtr');
    const [keyStatsButton, setKeyStatsButton] = useState(false);
    const [analystsButton, setAnalystsButton] = useState(false);
    const [newsButton, setNewsButton] = useState(false);
    const [profileButton, setProfileButton] = useState(true);
    const [intradayPricesVal, setintradayPricesVal] = useState([1, 2, 3]);
    const [candleData, setcandleData] = useState([
        {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24]
        },
    ]);

    const keyStatsUrl = "https://cloud.iexapis.com/stable/time-series/REPORTED_FINANCIALS/" + name + "?token=sk_9b43110c530b43f3929296619e077129";
    // const newsSentimentUrl = "https://finnhub.io/api/v1/news-sentiment?symbol=" + name + "&token=c3e7in2ad3ief4elcsn0";
    const newsUrl = "https://cloud.iexapis.com/stable/stock/" + name + "/news?token=sk_9b43110c530b43f3929296619e077129";
    const profileUrl = "https://cloud.iexapis.com/stable/stock/" + name + "/company?token=sk_9b43110c530b43f3929296619e077129";
    const analystsUrl = "https://finnhub.io/api/v1/stock/recommendation?symbol=" + name + "&token=c3e7in2ad3ief4elcsn0";
    const intradayPricesUrl = "https://cloud.iexapis.com/stable/stock/" + name + "/intraday-prices?token=sk_9b43110c530b43f3929296619e077129"

    const { data: keyStats, error: errKeyStats, isPending: isPendingKeyStats } = useFetch(keyStatsUrl);
    // const { data: newsSentiment, error: errNewsSentiment, isPending: isPendingNewsSentiment } = useFetch(newsSentimentUrl);
    const { data: news, error: errNews, isPending: isPendingNews } = useFetch(newsUrl);
    const { data: tempProfile, error: errProfile, isPending: isPendingProfile } = useFetch(profileUrl);
    const { data: tempAnalysts, error: errAnalysts, isPending: isPendingAnalysts } = useFetch(analystsUrl);
    const { data: intradayPrices } = useFetch(intradayPricesUrl);

    // console.log((intradayPrices != null) && intradayPrices[1]);
    useEffect(() => {
        if (intradayPrices != null) {
            setintradayPricesVal([intradayPrices]);

            var temp2 = [];
            intradayPricesVal.forEach((el) => {
                var result = [el.open, el.high, el.low, el.close];
                console.log("I am here");
                temp2.push({
                    x: el.date,
                    y: result,
                });
            });
            setcandleData(temp2);
        }

    }, [intradayPrices, intradayPricesVal])


    // console.log(candleData);

    // console.log('This is I am checking', intradayPricesVal)

    // for (let i; i < intradayPricesVal.length; i++) {
    //     console.log(intradayPricesVal[i]);
    // }

    const analysts = [];
    tempAnalysts && analysts.push(tempAnalysts[0]);

    // var analysts = tempAnalysts[0];
    // console.log('tempProfile:' + tempProfile);

    let profile = [];
    tempProfile && profile.push(tempProfile);


    const keyStatsButtonControl = (e) => {
        e.preventDefault();
        setKeyStatsButton(true);
        setAnalystsButton(false);
        setNewsButton(false);
        setProfileButton(false);
    }
    const analystsButtonControl = (e) => {
        e.preventDefault();
        setKeyStatsButton(false);
        setAnalystsButton(true);
        setNewsButton(false);
        setProfileButton(false);
    }
    const newsButtonControl = (e) => {
        e.preventDefault();
        setKeyStatsButton(false);
        setAnalystsButton(false);
        setNewsButton(true);
        setProfileButton(false);
    }
    const profileButtonControl = (e) => {
        e.preventDefault();
        setKeyStatsButton(false);
        setAnalystsButton(false);
        setNewsButton(false);
        setProfileButton(true);
    }
    // console.log(tempKeyStats);

    // console.log(keyStats);

    const renderKeyStats = (stock, index) => {
        // console.log('test' + stock);
        return (
            <tr key={index}>
                <td>{stock.CostOfRevenue}</td>
                <td>{stock.CommonStockDividendsPerShareDeclared}</td>
                <td>{stock.CommonStockSharesOutstanding}</td>
                <td>{stock.EarningsPerShareBasic} </td>
                <td>{stock.EarningsPerShareDiluted}</td>
                <td>{stock.GrossProfit}</td>
                <td>{stock.NetIncomeLoss}</td>
                <td>{stock.OperatingExpenses}</td>
                <td>{stock.SalesRevenueNet}</td>
                <td>{stock.NetIncomeLoss}</td>

            </tr>
        );
    };

    // const renderNewsSentiment = (stock, index) => {
    //     return (
    //         <tr key={index}>
    //             <td>{stock.articlesInLastWeek}</td>
    //             <td>{stock.sectorAverageBullishPercent}</td>
    //             <td>{stock.bullishPercent}</td>
    //         </tr>
    //     );
    // }

    const renderNews = (stock, index) => {
        return (
            <tr key={index}>
                <td>{stock.headline}</td>
                <td>{stock.summary}</td>
                <td>{stock.url}</td>
            </tr>
        );
    }

    const renderProfile = (stock, index) => {
        return (
            <tr key={index}>
                {/* <td>{Object.keys(stock)}</td> */}
                <td>{stock.companyName}</td>
                <td>{stock.exchange}</td>
                <td>{stock.industry}</td>
                <td>{stock.description}</td>
                <td>{stock.employees}</td>
                <td>{stock.address}, {stock.city}, {stock.state}, {stock.zip}, {stock.country}</td>
                <td>{stock.website}</td>
            </tr>
        );
    }

    const renderAnalysts = (stock, index = 0) => {
        return (
            <tr key={index}>
                <td>{stock.buy}</td>
                <td>{stock.hold}</td>
                <td>{stock.sell}</td>
                <td>{stock.strongBuy}</td>
                <td>{stock.strongSell}</td>
            </tr>
        );
    }


    const [options] = useState({
        chart: {
            height: 350,
            type: 'candlestick',
        },
        title: {
            text: 'CandleStick Chart - Category X-axis',
            align: 'left'
        },
        annotations: {
            xaxis: [
                {
                    x: 'Oct 06 14:00',
                    borderColor: '#00E396',
                    label: {
                        borderColor: '#00E396',
                        style: {
                            fontSize: '12px',
                            color: '#fff',
                            background: '#00E396'
                        },
                        orientation: 'horizontal',
                        offsetY: 7,
                        text: 'Annotation Test'
                    }
                }
            ]
        },
        tooltip: {
            enabled: true,
        },
        xaxis: {
            type: 'datetime'

        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    });





    const [series] = useState([{
        name: 'candle',
        data: candleData,
    }]);

    return (
        <div className='container' onClick={showSidebar}>


            <div className="stock-details">
                <h1 className="stockDetails-title">Stock Details</h1>
                <div id="candle-graph" className="test-div">
                    {/* <h3>Candle graph</h3><br></br> */}

                    <div id="chart">
                        <ReactApexChart options={options} series={series} type="candlestick" height={450} width={600} />
                    </div>


                </div>

                <div className="stockDetails-contentTitles">
                    <div className="stockDetails-button" >
                        <BootstrapButton variant="outlined" color="primary" onClick={keyStatsButtonControl}> Keystats  </BootstrapButton>
                    </div>
                    <div id="analysts" className="stockDetails-button">
                        <BootstrapButton variant="outlined" color="primary" onClick={analystsButtonControl}> Analysts  </BootstrapButton>
                    </div>
                    <div id="news" className="stockDetails-button">
                        <BootstrapButton variant="outlined" color="primary" onClick={newsButtonControl}> News  </BootstrapButton>
                    </div>
                    <div id="profile" className="stockDetails-button">
                        <BootstrapButton variant="outlined" color="primary" onClick={profileButtonControl}> Profile </BootstrapButton>
                    </div>
                </div>
                <div className="stockDetails-contents">
                    {keyStatsButton && <ReactBootStrap.Table hover bordered size="md">
                        <thead>
                            <tr>
                                <th>Cost of Revenue</th>
                                <th>Dividends per Share</th>
                                <th>Common Shares Outstanding</th>
                                <th>Earnings per Share Basic</th>
                                <th>Earnings per Share Diluted</th>
                                <th>Gross Profit</th>
                                <th>Net Income Loss</th>
                                <th>Operating Expenses</th>
                                <th>Net Sales Revenue</th>
                                <th>Net Income Loss</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="keyStatsTable">
                            {(isPendingKeyStats) && <div> Loading... </div>}
                            {errKeyStats && <div> {errKeyStats} </div>}
                            {keyStats && keyStats.map(renderKeyStats)}
                        </tbody>
                    </ReactBootStrap.Table>}

                    {newsButton && <ReactBootStrap.Table hover bordered size="md">
                        <thead>
                            <tr>
                                <th>Headline</th>
                                <th>Summary</th>
                                <th>URL</th>
                            </tr>
                        </thead>
                        <tbody className="newsTable">
                            {(isPendingNews) && <div> Loading... </div>}
                            {errNews && <div> {errNews} </div>}
                            {news && news.map(renderNews)}
                        </tbody>
                    </ReactBootStrap.Table>}

                    {profileButton && <ReactBootStrap.Table hover bordered size="md">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Exchange</th>
                                <th>Industry</th>
                                <th>Description</th>
                                <th>Employees</th>
                                <th>Address</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody className="profileTable">
                            {(isPendingProfile) && <div> Loading... </div>}
                            {errProfile && <div> {errProfile} </div>}
                            {profile && profile.map(renderProfile)}
                        </tbody>
                    </ReactBootStrap.Table>}

                    {analystsButton && <ReactBootStrap.Table hover bordered size="md">
                        <thead>
                            <tr>
                                <th>Buy</th>
                                <th>Hold</th>
                                <th>Sell</th>
                                <th>Strong Buy</th>
                                <th>Strong Sell</th>
                            </tr>
                        </thead>
                        <tbody className="analystsTable">
                            {(isPendingAnalysts) && <div> Loading... </div>}
                            {errAnalysts && <div> {errAnalysts} </div>}
                            {analysts && analysts.map(renderAnalysts)}
                        </tbody>
                    </ReactBootStrap.Table>}
                </div>
            </div>
        </div>

    )
}

export default StockDetails

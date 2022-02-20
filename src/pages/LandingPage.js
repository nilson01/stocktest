import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import mainAnimation from '../media/stock_futuristic.mov';
import upwardTrendAnimation from '../media/upwardTrend.mp4';
import downwardTrendAnimation from '../media/downwardTrend.mp4';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    button: {
        margin: theme.spacing(1),
        borderRadius: '20px',
    },
}));


const LandingPage = ({ showSidebar }) => {
    const classes = useStyles();
    const [email, setEmail] = useState()

    const writeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const submitEmail = (e) => {
        e.preventDefault();
        (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
            ? (console.log(email))
            : console.log("Email is not valid!");

    }
    return (
        <div className='container' onClick={showSidebar}>
            <div className="Video">
                <h1 className='texthead'>Invest, Grow, Build</h1>
                <h3 className="buyHighSellLow">Buy High, Sell Low!</h3>
                <video id="downwardTrend" autoPlay loop muted>
                    <source src={downwardTrendAnimation} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video id="main-video" autoPlay loop muted>
                    <source src={mainAnimation} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video id="upwardTrend" autoPlay loop muted>
                    <source src={upwardTrendAnimation} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="linegraph">



                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>

                            <a href="https://www.google.com/finance/quote/.IXIC:INDEXNASDAQ">
                                <Typography gutterBottom variant="h5" component="h2">
                                    <Button variant="outlined" color="primary">
                                        NASDAQ
                                </Button>
                                </Typography>

                            </a>



                            <Typography variant="body2" color="textSecondary" component="p">

                                The Nasdaq Stock Market is an American stock exchange based in New York City.
                                It is ranked second on the list of stock exchanges by market capitalization of shares traded, behind the New York Stock
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <a href='https://www.google.com/finance/quote/.INX:INDEXSP'>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <Button variant="outlined" color="primary">
                                        S&#38;P 500
                                </Button>
                                </Typography>
                            </a>

                            <Typography variant="header" color="header" component="p">
                                The Standard and Poor's 500, or simply the S&#38;P 500, is a stock market index tracking the stock performance of 500 of the
                                largest companies listed on stock exchanges in the United States. It is one of the most commonly followed equity indices.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div className="footer">
                <div className='footerContainer'>
                    <div>
                        <h2 className='footElement'>Let's connect!</h2>

                    </div>

                    <div className='footElement fE2'>
                        <input
                            type='text'
                            placeholder='Type your email here...'
                            onChange={writeEmail}
                            className="inputFooter"
                        ></input>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={submitEmail}
                        >
                            Contact Us
                    </Button>
                    </div>

                    <div className='footElement'>
                        <IconButton color="inherit" aria-label="Menu" className='name'>
                            <FacebookIcon fontSize='large' />
                        </IconButton>
                        <IconButton color="inherit" aria-label="Menu" className='name'>
                            <InstagramIcon fontSize='large' />
                        </IconButton>
                        <IconButton color="inherit" aria-label="Menu" className='name'>
                            <TwitterIcon fontSize='large' />
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LandingPage
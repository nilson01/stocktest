import React from "react";
import {
    Card,
    CardContent,
    makeStyles,
    Container,
    Typography,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
    card: {
        width: "30%",
        background: theme.palette.primary.main,
        boxShadow: "5px",
        margin: "1px"

    },
}));

export default function TransactionCard(props) {
    const classes = styles();
    return (
        <Container style={{ height: "60px" }}>
            <Card style={{ height: "80%" }} elevation={4} className={classes.card}>
                <CardContent
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography>{props.name}</Typography>
                    <Typography>{`$${(props.amount).toFixed(2)}`}</Typography>
                    {/* <Typography>{`$${(props.return / 100).toFixed(2)}`}</Typography> */}
                    <Typography>{props.status}</Typography>
                </CardContent>
            </Card>
        </Container>
    );
}
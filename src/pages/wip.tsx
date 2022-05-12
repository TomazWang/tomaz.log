import React from 'react';
import Layout from '@theme/Layout';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import useBaseUrl from '@docusaurus/useBaseUrl';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        // color: theme.palette.text.secondary,
    },
    img: {
        maxWidth: "80%"
    }
}));

function WipPage() {
    const classes = useStyles();

    return (
        <Layout title="Work in Progress...">
            <Grid container style={{ padding: '5%' }} spacing={3} direction="row" alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Box >
                        <h1>Website is under construction..</h1>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img className={classes.img} src={useBaseUrl('img/wip_programming.svg')} />
                </Grid>
            </Grid>
        </Layout>
    );
}

export default WipPage;

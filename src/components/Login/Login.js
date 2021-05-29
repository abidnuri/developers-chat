import React from 'react';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase.config"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        align: 'center',
    },
}));

const Login = () => {
    const classes = useStyles();
    const signin = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div justify="center" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item md={6}>
                    <img width="100%" src="https://i.ibb.co/DW6bw09/chat.png" alt="" />
                </Grid>
                <Grid item md={6}>
                    <div className="login-chat" style={{ paddingTop: "30%" }}>
                        <h1>Developers Chat</h1>
                        <Button onClick={signin} variant="contained" color="secondary">Login Here</Button>
                    </div>
                </Grid>
            </Grid>
        </div>

    );
};

export default Login;
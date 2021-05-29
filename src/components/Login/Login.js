import React from 'react';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import {auth,provider} from "./firebase.config"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Login = () => {

    const signin = () =>{
        auth.signInWithPopup(provider).catch((error)=> alert (error.message));
    }

    return (
        <div className="login">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <img src="https://i.ibb.co/DW6bw09/chat.png" alt="" />
                </Grid>
                <Grid item xs={6}>
                    <h2 >Developers Chat</h2>
                    <Button onClick={signin} variant="contained" color="secondary">Login</Button>
                </Grid>
            </Grid>
        </div>

    );
};

export default Login;
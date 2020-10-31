import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './assets/expense-tracker-logo.svg'
import { Link, useLocation } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // textAlign: "start",
        // marginLeft: "20px"
    },
    appbar: {
        padding: "15px"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: "start",
        marginLeft: "20px"
    },
    button: {
        textDecoration: "none",
        color: "black"
    },
    buttonActive: {
        textDecoration: "none",
        color: "black",
        borderBottom: "5px solid #1BAB8E"
    }

}));

function Header() {
    const classes = useStyles();
    const [active, setActive] = useState({});
    const location = useLocation();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" className={classes.appbar} >
                <Toolbar>

                    <img src={logo} alt="" style={{ width: "3rem", height: "3rem" }} />
                    <Typography variant="h5" className={classes.title}>
                        Expense Tracker
                    </Typography>
                    <div>

                        <Link to="/signup" className={location.pathname === "/signup" ? classes.buttonActive : classes.button} >
                            <Button> Sign up</Button>
                        </Link>


                        <Link to="/login" className={location.pathname === "/login" ? classes.buttonActive : classes.button} >
                            <Button className={classes.button}> Login </Button>
                        </Link>

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header


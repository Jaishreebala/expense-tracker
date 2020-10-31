import React from 'react';
import './stylesheets/login.css';
import google from './assets/google.svg';
import flatUi from './assets/flat-ui-bg.svg';

function Login() {
    return (
        <div className="mainDiv">
            <div className="cols">
                <h1>Login To Your Expense Tracker Account</h1>
                {/* MATERIAL UI STUFF */}
                <div className="linksArea">

                </div>
                <div className="center"> <div className="greenButton">Login</div></div>
                <div className="center"><div className="googleLink green"><img src={google} alt="Google" style={{ padding: "10px" }} /> Login With Google</div></div>
                <div className="noAccount">Don’t have an account? <span className="green">Sign Up</span> </div>
            </div>
            <div className="cols">
                <img src={flatUi} alt="" />
            </div>
        </div>
    );
}
export default Login;

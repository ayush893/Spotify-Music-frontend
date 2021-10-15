import React from 'react';
import './Login.css';
import {loginUrl} from "./spotify";

function Login() {
    return (
        <div className="login">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPrSwF3iA-m0U0--jGBoGrhBVLtT8GzDCEId8hzAilgHUw_Zri5zjDoIZe2W7NIPHtw&usqp=CAU" alt=""/>
            <a href={loginUrl}>Login with spotify</a>
        </div>
    )
}

export default Login

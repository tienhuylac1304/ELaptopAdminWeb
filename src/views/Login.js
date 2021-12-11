import React from "react";
import '../components/css/Login.css'
const Login=()=>{
    return(
        <form action="index.html" class="box" method="POST">
            <h1>Login</h1>
            <div class="title">Username</div>
            <input type="text" class="textbox" id="username" placeholder="Input your Username.."/>
            <div class="title">Password</div>
            <input type="password" class="textbox" id="password" placeholder="Input your Password.."/>
            <div class="rememberPass">
                <span class="text">Remember me</span>
                <input type="checkbox"/>
            </div>
            <input type="submit" class="login" id="btnLogin" value="Login"/>
        </form>
    )
}
export default Login
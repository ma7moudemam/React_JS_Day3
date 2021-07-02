import React, { Component } from 'react';
class Login extends Component {
    state = {
        username:"",password:""
    }
    handlerLogin = () => {
        let LoginObject = {
            userName:this.state.userName,
            password:this.state.password
        }
        this.props.LoginHandelar(LoginObject);
        console.log("sasa");
    }
    render() { 
        return ( 
            <div>
                <div class="container2">
                <form className="row justify-content-center">
                    <label for="usrname">Username</label>
                    <input type="text" id="usrname" name="usrname" pattern="[A-Za-z]{3}" required
                    onChange={(e) => this.setState({ username: e.target.value })}/>

                    <label for="psw">Password</label>
                    <input type="password" id="psw" name="psw" pattern=".{8,}" required
                    onChange={(e) => this.setState({ password: e.target.value })}/>
                    
                    <button type="button" className="btn btn-success col-3 mt-4 mb-4" onClick={this.handlerLogin} >LogIn</button>
                    </form>
                <div/>
            </div>
            </div>

         );
    }
}
 
export default Login;
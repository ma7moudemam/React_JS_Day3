import React, { Component } from 'react';
class Register extends Component {
    state = {
        name:"",address:"",age:"",email:"",userName:"",password:""
    }
    handlerRegester = () => {
        let RegesterObject = {
            name: this.state.name,
            address: this.state.address,
            age:this.state.age,
            email:this.state.email,
            userName:this.state.userName,
            password:this.state.password
        }
        this.props.RegesterHandler(RegesterObject);
        console.log("sasa");
    }
    render() { 
        return ( 
            <div>
                <div class="container2">
                <form className="row justify-content-center" >
                    <label for="usrname">Name</label>
                    <input type="text" id="name"  pattern="[A-Za-z]{3}" required
                   onChange={(e) => this.setState({ name: e.target.value })}/>
                    <label for="usrname">Address</label>
                    <input type="text" id="address"  pattern="\s*\S+(?:\s+\S+)" required
                    onChange={(e) => this.setState({ address: e.target.value })}/>
                    <label for="usrname">Age</label>
                    <input type="text" id="age" pattern="[0-9]{2}$" required
                    onChange={(e) => this.setState({ age: e.target.value })}/>
                    <label for="usrname">Email</label>
                    <input type="text" id="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required
                    onChange={(e) => this.setState({ email: e.target.value })}/>
                    <label for="usrname">Username</label>
                    <input type="text" id="usrname"  pattern="[A-Za-z]{3}" required
                    onChange={(e) => this.setState({ userName: e.target.value })}/>
                    <label for="psw">Password</label>
                    <input type="password" id="psw"  pattern=".{8,}" required
                    onChange={(e) => this.setState({ password: e.target.value })}/>
                    <label for="psw">Confirm Password</label>
                    <input type="password" id="confirmpsw" na pattern=".{8,}" required/>
                    <button type="button" className="btn btn-success col-3 mt-4 mb-4" onClick={this.handlerRegester} >Register</button>
                    </form>
                <div/>
            </div>
            </div>

         );
    }
}
 
export default Register;
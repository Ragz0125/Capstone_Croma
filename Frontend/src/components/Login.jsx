import React, {Component} from 'react'
import '../css/register.css'
import {Route, Redirect,Link} from 'react-router-dom'
import AuthenticationService from '../AuthenticationService.js';
import AuthenticatedRoute from '../AuthenticatedRoute.jsx';
import axios from 'axios'

class Login extends Component{

    constructor(props){
        super(props)
        this.state={
            users:[

            ],
            username:"",
            password:""
        };

        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.LoginClick = this.LoginClick.bind(this)
        this.CredentialCheck = this.CredentialCheck.bind(this)
    }

    onChangeUserName(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    componentDidMount(){
        axios.get("http://localhost:8080/user/").then(response=>{this.setState({users: response.data})
    })
  
    }

    CredentialCheck(){
        for(var i =0;i<this.state.users.length;i++){
            if(this.state.username === this.state.users[i].userName && this.state.password === this.state.users[i].password){
                localStorage.setItem("id", this.state.users[i].id)
                localStorage.setItem("email", this.state.users[i].email)
                localStorage.setItem("username", this.state.users[i].userName)
                localStorage.setItem("password", this.state.users[i].password)
                console.log(this.state.users[i].email)
                console.log(true)
                return(true)
            }
        }
        return(false)

    }

    LoginClick(){
        let check = this.CredentialCheck()
        if(check)
            {  
                var id = localStorage.getItem("id");
                var email = localStorage.getItem("email");
                var username = localStorage.getItem("username");
                var password = localStorage.getItem("password");
                // window.location="/home"
                this.props.history.push("/home")
                AuthenticationService.registerSuccessfulLogin(username,id,email,password)
                console.log("Successful")
                // this.setState({showSuccessMessage: true})
            }
        else{
            console.log("failed")
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }

    render(){
        return(
            <div className='login'>

                <div className="logo1">
                    <img src="https://www.freepnglogos.com/uploads/notebook-png/diary-note-book-spiral-notebook-icon-20.png" alt=""></img>
                </div>

                <center><div className="text">
                    BookBuzz
                </div></center>

            <form className='login-form'>
                <div className='username'>
                    <input type="text" name="username" placeholder='Enter Username' value={this.state.username} onChange={this.onChangeUserName}></input>
                </div>
                <div className='password'>
                    <input type="password" name='password' placeholder='Enter Password' value={this.state.password} onChange={this.onChangePassword}></input>
                </div>

                <center><div className='btn'>
                        <input type="submit" value="Login " className='btn btn-success' onClick={this.LoginClick}/>
                </div></center>
            </form>

            <center><div>
                    Are you a New User? <Link to='/register'>Click here to signup</Link>

                </div></center>

            </div>
        )
    }
}

export default Login;
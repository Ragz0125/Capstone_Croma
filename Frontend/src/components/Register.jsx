import React, {Component} from 'react'
import Link from 'react-router-dom'
import '../css/register.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends Component{

    constructor(){
        super()
        this.state={
            userName: "",
            email: "",
            password:""
        }

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeUsername(e){
        this.setState({
            userName: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        const registerobj={
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }
        console.log(registerobj)
        axios.post("http://localhost:8080/user/", registerobj).then(response=>console.log(response))
        toast("Regsitered Successfully")
        window.location="/"
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

            <form className='login-form' onSubmit={this.onSubmit}>
                <div className='username'>
                    <input type="text" name="username" placeholder='Enter Username' value={this.state.userName} onChange={this.onChangeUsername} required></input>
                </div>
                <div className='email'>
                    <input type="email" name="username" placeholder='Enter Email' value={this.state.email} onChange={this.onChangeEmail} required></input>
                </div>
                <div className='password'>
                    <input type="password" name='password' placeholder='Enter Password' value={this.state.password} onChange={this.onChangePassword} required></input>
                </div>

                <center><div className='btn'>
                        <input type="submit" value="Register " className='btn btn-success' />
                </div></center>
            </form>
            <ToastContainer position="top-right"/>
            </div>
        )
    }
}

export default Register;

import React, {Component} from 'react'
import '../css/register.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateUser extends Component{

    constructor(){
        super()
        this.state={
            id:"",
            username:"",
            email:"",
            password:""
        }

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
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
        const userobj={
            id:localStorage.getItem("id"),
            userName:this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        console.log(userobj)
        axios.post("http://localhost:8080/user/", userobj).then(response=>console.log(response))
        toast("Updated Successfully")
    }


    render(){

        return(
            <div className='login'>

                <center><div className="text">
                    Update Details
                </div></center>

            <form className='login-form' onSubmit={this.onSubmit}>
                <div className='username'>
                    <input type="text" name="username" placeholder='Enter Username' value={this.state.username} onChange={this.onChangeUsername}></input>
                </div>
                <div className='email'>
                    <input type="email" name="username" placeholder='Enter Email' value={this.state.email} onChange={this.onChangeEmail}></input>
                </div>
                <div className='password'>
                    <input type="password" name='password' placeholder='Enter Password' value={this.state.password} onChange={this.onChangePassword}></input>
                </div>

                <center><div className='btn'>
                        <input type="submit" value="Update Details " className='btn btn-success' />
                </div></center>
            </form>
            <ToastContainer position="top-right"/>
            </div>
        )
    }
}

export default UpdateUser
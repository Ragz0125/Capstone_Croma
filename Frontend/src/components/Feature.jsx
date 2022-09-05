import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../css/search.css'
import Records from '../records/books.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookList=props=>(
    <tr>
        <td>
            {
                props.booksobj.title
            }
        </td>
        {/* <td>
        {
                props.booksobj.publish_year[0]
        }
        </td>
       
        <td>
        {
            props.booksobj.author_name[0]
        }
        </td> */}
        <td>
        <button className="btn btn-secondary" onClick={()=>{props.addFav(props.booksobj)}}>
            Favourite
        </button>
        </td>
    </tr>
)

class Feature extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            books: [

            ],
            name: "",
            userid: ""
        };
    }

    componentDidMount(){
        const author = localStorage.getItem("author")
        axios.get(`http://openlibrary.org/search.json?author=${author}`).then(response=>{
            // console.log(response.data.docs)
            this.setState({books : response.data.docs})
        }).catch(err=>console.log(err))
        // console.log(this.state.books)
    }

    addFav(props){
        const favobj={
            bookname: props.title,
            users:{
                id: sessionStorage.getItem("authenticatedId"),
                userName: sessionStorage.getItem("authenticatedUser"),
                password: sessionStorage.getItem("authenticatedPassword"),
                email: sessionStorage.getItem("authenticatedEmail")
            }
        }
        console.log(favobj)
        axios.post("http://localhost:8080/fav/",favobj).then(response=>console.log(response))
        toast("Added Successfully")

    }

    // getBookList(){
    //     if(this.state.books){
    //         return this.state.books.map(bookvalue=>{
    //             console.log(bookvalue)
    //             return <BookList booksboj={bookvalue}/>
    //         })
    //     }
    // }

    render(){

        return(
            <section className='home'>
                <h1 className='heading'>Library</h1>

                <div className='books-wrapper'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>
                                    Book Name
                                </th>
                                <th>
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                    this.state.books.map(bookvalue=>{
                                        console.log(bookvalue)
                                        return <BookList booksobj={bookvalue} addFav={this.addFav}/>
                                    })
                            }
                        </tbody>
                    </table>
                    <ToastContainer position="top-right"/>
                </div>
            </section>
        )
    }
}

export default Feature;
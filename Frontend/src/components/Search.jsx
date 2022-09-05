import React, {Component} from 'react'
import axios from 'axios'
import '../css/search-bar.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookList=props=>(
    <tr>
        <td>
            {
                props.booksobj.title
            }
        </td>
        <td>
        {
                props.booksobj.first_publish_year
            }
        </td>
        <td>
        <button className="btn btn-secondary" onClick={()=>{props.addFav(props.booksobj)}}>
            Favourite
        </button>
        </td>
    </tr>
)

class Search extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            books: [

            ],
            serachText:"",
            name: "",
            userid: ""
        };
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.getBookList = this.getBookList.bind(this)
    }

    handleSearch(e){
        this.setState({
            serachText:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        axios.get(`http://openlibrary.org/search.json?q=${this.state.serachText}`).then(response=>{
            console.log(response.data.docs)
            this.setState({books : response.data.docs})
        }).catch(err=>console.log(err))
    }

    componentDidMount(){
        axios.get("http://openlibrary.org/search.json?author=max").then(response=>{
            console.log(response.data.docs)
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
    //             return <BookList booksboj={bookvalue} addFav={this.addFav}/>
    //         })
    //     }
    // }

    render(){

        return(
            <section className='home'>

                <center><div className='search-btn'>
                <input className='search' type="search" placeholder='Serach' id="search" onChange={this.handleSearch}></input> 
                <input type="submit" value="Search " className='btn btn-success' onClick={this.handleSubmit}/>
                </div></center>

                {/* <p>{this.state.serachText}</p> */}
                <h1 className='heading'>Library</h1>

                <div className='books-wrapper'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>
                                    Book Name
                                </th>
                                
                                <th>
                                    Year of Publication
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

export default Search;
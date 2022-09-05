import React,{Component} from 'react'
import '../css/fav.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookList=props=>(
    <tr>
        <td>
            {
                props.booksobj.bookname
            }
        </td>
        <td>
        <button className="btn btn-secondary" onClick={()=>{props.deleteFav(props.booksobj)}} >
            Delete
        </button>
        </td>
    </tr>
)

class Favourites extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            books: [

            ]
        }
        this.deleteFav = this.deleteFav.bind(this)
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/fav/${sessionStorage.getItem("authenticatedId")}`).then(response=>{
            // console.log(response.data)
            this.setState({books : response.data})
        }).catch(err=>console.log(err))
    }

    deleteFav(props){
        axios.delete(`http://localhost:8080/fav/${props.id}`).then(response=>(console.log(response)))
        toast("Deleted Successfully")
        window.location.reload(false)
    }
 
    render(){

        return(
            <section className='home'>
                <h1 className='heading'>My Favourites</h1>

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
                                        return <BookList booksobj={bookvalue} deleteFav={this.deleteFav} />
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

export default Favourites
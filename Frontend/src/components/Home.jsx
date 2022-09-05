import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css'
import book1 from "../images/book-1.png"
import book2 from "../images/book-2.png"
import stand from "../images/book-stand.png"


class Home extends Component{
    constructor(){
        super()
        this.toSearch = this.toSearch.bind(this)
        this.toAuthors = this.toAuthors.bind(this)
    }

    toSearch(){
        window.location="/search"
    }

    toAuthors(){
        window.location="/authors"
    }

    render(){

        return(

            <section className='home'>
                
                <div className='row'>

                    <div className='content'>
                        <h3>Get Now</h3>
                        <p>We are a library, we pay special attention to books. Not everyone has access to a public or academic library with a good collection, so to provide universal access we need to provide digital versions of books. We began a program to digitize books in 2005 and today we scan 4,000 books per day in 18 locations around the world. Books published prior to 1927 are available for download, and hundreds of thousands of modern books can be borrowed through our Open Library site. One of the Internet Archive's missions is to serve people who have difficulty interacting with physical books, so most of our digitized books are available to people with print disabilities</p>
                        <button className='button' onClick={this.toSearch}>Explore More Books</button>
                        <button className='button' style={{ marginLeft: '.5rem' }} onClick={this.toAuthors}>Explore More Authors</button>
                    </div>

                    <div className='books-slider'>
                        <div className='wrapper'>
                            <img className='img' src={book1}></img>
                            <img className='img' src={book2}></img>
                        </div>
                        <img src={stand} className="stand"></img>
                    </div>

                </div>
        
            </section>
        )
    }
}

export default Home;

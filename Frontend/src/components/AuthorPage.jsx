import { Component } from "react";
import '../css/authors.css'
class AuthorPage extends Component{

    constructor(){
        super()
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        localStorage.removeItem("author")
    }

    onSubmit(author){
        localStorage.setItem("author",author)
        window.location = `./feature/${author}`
    }
    render(){

        return(
            <section className='home'>
                <h1 className='heading'>Highlighted Authors</h1>
            <center><div className="display-authors">
            <div class="card" onClick={()=>this.onSubmit(document.getElementById("author_name1").innerHTML)}>
                    <div class="container">
                       <h4 id="author_name1">Shakespeare</h4>
                       <p>William Shakespeare is widely considered the greatest dramatist of all time as well as the most influential writer in the history of the English language.</p> 
                    </div>
            </div>

            <div class="card"  onClick={()=>this.onSubmit(document.getElementById("author_name2").innerHTML)}>
                    <div class="container">
                       <h4 id="author_name2">J.K.Rowling</h4> 
                       <p>Joanne Rowling CH OBE FRSL, also known by her pen name J. K. Rowling, is a British author and philanthropist. She wrote Harry Potter, a seven-volume children's fantasy series published from 1997 to 2007.</p>
                    </div>
            </div>


            <div class="card" onClick={()=>this.onSubmit(document.getElementById("author_name3").innerHTML)}>
                    <div class="container">
                       <h4 id="author_name3">Charles Dickens</h4> 
                       <p>Charles John Huffam Dickens FRSA was an English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era.</p>
                    </div>
            </div>


            <div class="card" onClick={()=>this.onSubmit(document.getElementById("author_name4").innerHTML)}>
                    <div class="container">
                       <h4 id="author_name4">Dan Brown</h4> 
                       <p>Daniel Gerhard Brown is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons, The Da Vinci Code, The Lost Symbol, Inferno, and Origin.</p>
                    </div>
            </div>

            <div class="card" onClick={()=>this.onSubmit(document.getElementById("author_name5").innerHTML)}>
                    <div class="container">
                       <h4 id="author_name5">Jane Austen</h4> 
                       <p>Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique, and comment upon the British landed gentry at the end of the 18th century. </p>
                    </div>
            </div>
            </div></center>
            </section>
        )
    }
}

export default AuthorPage
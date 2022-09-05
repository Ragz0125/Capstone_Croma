// import "./App.css";
// import { Component } from "react";
// import { BrowserRouter as Routes, Router, Route} from "react-router-dom";
// import CreateProduct from "./components/CreateProduct";
// import NavBar from "./components/NavBar";

// class App extends Component {
//   render() {
//     return (
//       <Routes>
//       <NavBar/>
//         <Router>
//           {/* <Route path="/" element={<NavBar />} /> */}
//           <Route path="/createProduct" element={<CreateProduct />} />
//         </Router>
//       </Routes>
//     );
//   }
// }

// export default App;















//import "./App.css";












// import { BrowserRouter as Router, Route } from "react-router-dom";
// import CreateProduct from "./components/CreateProduct";
// import NavBar from "./components/NavBar";

// function App() {
//   return (
//     <Router>
      
//         <Route exact path="/CreateProduct" element={<CreateProduct/>}/> 
//         <Route path="/" component={NavBar} />


//     </Router>
//   );
// }

// export default App;

import { Component } from "react";
import { BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./components/Register";
import Feature from "./components/Feature";
import UpdateUser from "./components/UpdateUser";
import Search from "./components/Search";
import Login from "./components/Login";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Favourites from "./components/Favourites";
import AuthorPage from "./components/AuthorPage";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <NavBar/>   

         <Route path='/' exact component={Login}/>
         <Route path='/login' component={Login}/> 
         <Route path='/register' component={Register}/>
         <AuthenticatedRoute path='/home' component={Home}/>
         <AuthenticatedRoute path='/feature' component={Feature}/>
         <AuthenticatedRoute path='/updateuser' component={UpdateUser}/>
         <AuthenticatedRoute path='/search' component={Search}/>
         <AuthenticatedRoute path='/myfavourites' component={Favourites}/>
         <Route path='/authors' component={AuthorPage}/>

      </BrowserRouter>
    );
  }
}

export default App;
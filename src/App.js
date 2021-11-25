
import './App.css';
import React from 'react';
import UserLoader from './components/UserLoader';
import WindowSizes from './components/WindowSizes';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



const Home = () =>{ return <h1>Home</h1>}
const About = () =>{ return <h1>About</h1>}
const Contact = () =>{ return <h1>Contact</h1>}
function App(){  
  return <BrowserRouter>  
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'></Link>
      </li>
      <li>
        <Link to='/contact'></Link>
      </li>
    </ul>
  </nav>
    <Routes>
      <Route path="/" element={<Home />}></Route>   
      <Route path="/about" element={<About />}></Route>   
      <Route path="/contact" element={<Contact />}></Route>   
    </Routes>    
 </BrowserRouter>
}   
  
export default App;
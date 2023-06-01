import { Link } from 'react-router-dom';
import './App.css';
import logo from './71bu5rak.png'
// import { Routes , Route } from 'react-router-dom';


function App() {
  return (
    <center>
    <div id='main_container'>
      
        <div className='box1'>
          <img src={logo} style={{height:"130px", width:"140px" , position:"relative", top:"50px" , left:"20px"}} />
          <h1 style={{fontSize:"100px"}} >Welcome  <label style={{color:"teal"}} >Back</label> </h1>
          <p style={{fontSize:"30px" , color:"#A8A8A8"}} >Glad to see you ,Again</p><br/><br/>
          <form>
          <input size={60} style={{height:"50px" , border:"1px solid black" , borderRadius:"10px" , fontSize:"20px" , color:"#A8A8A8" }}  type='email' placeholder='Enter Your Email' /><br/><br/>
          <input size={60} style={{height:"50px", border:"1px solid black" , borderRadius:"10px" ,fontSize:"20px" , color:"#A8A8A8" }} type='password' placeholder='Enter Your Password' /><br/>
          <a style={{color:"#A8A8A8", position:"relative",left:"27vh"}} >Forgot Password?</a><br/><br/><br/>
          <button type='submit' style={{height:"50px" , width:"65vh" , fontSize:"25px",borderRadius:"10px" , backgroundColor:"black" , color:"white"}}  >Log In
      
          </button><br/><br/><br/><br/><br/>
          <a style= {{color:"black" }} >Don't an account yet? Sign Up</a>

          </form>
        </div>
      </div>
      </center>
  );
  
}

export default App;

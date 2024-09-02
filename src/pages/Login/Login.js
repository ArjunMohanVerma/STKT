import React ,{ useState}from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav"
import Footer from "../Footer/Footer"

const Login = () => {
  const [details, setDetails] = useState({
    email:"",
    password:"",
  })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setDetails((prev)=>{
      return{...prev, [name]: value};
    }); 
  };

  const handleClick=(e)=>{
    console.log(details.email);
    console.log(details.password);
  setDetails({email:"",password:""})
  }

  return (
    <>
    <Nav/>
    <div className="ct">
    <div className="addUser">
      <h3>Log in</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <br/>
          <label htmlFor="email" className="lb">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
            required
            onChange={handleChange} value={details.email}
          /><br/>
          <label htmlFor="Password" className="lb">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            required
            onChange={handleChange} value={details.password}
          />
          <Link to="" className="fp">Forgot Password </Link><br/><br/>
          <button type="submit" onClick={handleClick} className="buutn">
            Login
          </button>
        </div>
      </form><br/>
      <div className="login">
        <p className="para">Don't have Account?&nbsp;&nbsp;<Link to="/signup" className="snup">
          Sign Up
        </Link> </p>
        
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
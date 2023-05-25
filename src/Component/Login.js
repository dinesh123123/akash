
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Headerone from './Headerone';
import Footerone from './Footerone';
import { useNavigate } from 'react-router-dom';
import Facebook from './Facebook';
import Myaccount from './Myaccount';
import Header from './Header';

function Login()
{
  const navigate = useNavigate();
  const [ output , setOutput ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  
  const handleSubmit=(evt)=>{
    evt.preventDefault();

      if(email==undefined)
     setOutput("*Email is required")      
    else if(password==undefined)
     setOutput("*Password is required")

     else if(password==undefined)
     setOutput("*Password is required")
    else
    {
    let userDetails={"email":email,"password":password};
    axios.post("http://103.104.74.215:3008/website/login",userDetails).then((response)=>{
  if(response.data.token!="error")
        {
          const responseData=response.data.userDetails;
          //localStorage.setItem("token",response.data.data.token);
          localStorage.setItem("_id",response.data.data._id);
          //localStorage.setItem("userId",response.data.data.userId);
            localStorage.setItem("name",response.data.data.name);
            localStorage.setItem("email",response.data.data.email);
            localStorage.setItem("password",response.data.data.password);
             localStorage.setItem("phone",response.data.data.phone);
             localStorage.setItem("role",response.data.data.role);
            //localStorage.setItem("info",response.data.data.info);
            response.data.data.role=="0" ? navigate("/") : navigate("/"); 
             }
        else
        {
         setOutput("Invalid user or verify your account....");
         setEmail('');
         setPassword('');
        } 
      }).catch((err)=>{
        console.log(err);
    });
   }
  };
  







    return(
        <div>
        <Header/>
        <section className="breadcrumb__section breadcrumb__bg">
        <div className="container">
          <div className="row row-cols-1">
            <div className="col">
              <div className="breadcrumb__content">
                <h1 className="breadcrumb__content--title text-white mb-10">Account Page</h1>
                <ul className="breadcrumb__content--menu d-flex">
                  <li className="breadcrumb__content--menu__items"><Link className="text-white" to="/">Home</Link></li>
                  <li className="breadcrumb__content--menu__items"><span className="text-white">Account Page</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/>
      <br/>
    <div class="about_section layout_padding">
       
       <div class="container" style={{backgroundColor:'white', borderRadius:'2px' , boxShadow:'0 5px 10px '}}>
             <div >
                <div class="col-lg-6">
                  <br/>
                  {/* <br/> */}
                <h2>Login Here!!!</h2>
                <p>Login if you area a returning customer.</p>
<font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} text="center">
    <div class="form-group" >
      <label for="email">Email address:</label>
      <input type="email" className="account__login--input" placeholder="Email Addres" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="account__login--input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
    
    </div>
    <button class="account__login--forgot" type="submit"><Link to='/forgotpassword'>Forgot Your Password?</Link></button>
    <br/>
    <br/>
    
    <button type="submit" class="account__login--btn primary__btn">Login</button>

    <div className="account__login--divide">
        <span className="account__login--divide__text">OR</span>
      </div>
      <div className="account__social d-flex justify-content-center mb-15">



{/* <Facebook/> */}

        
      </div>
      <p class="account__login--signup__text">Don,t Have an Account? <button type="submit"><Link to='/register'>Sign up now</Link></button></p>
      <br/>
      <br/>
        </form>
  
                </div>
                

             </div>
       </div>
       
    </div>

<br/>
<br/>
    <Footerone/>
    
    </div>
    );
}

export default Login;

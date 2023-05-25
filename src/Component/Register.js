// import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import Headerone from './Headerone';
import Footerone from './Footerone';
import { Link } from 'react-router-dom';
import Header from './Header';

function Register()
{
  const [ output , setOutput ] = useState();
  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ phone , setPhone ] = useState();
  const [ password , setPassword ] = useState();

  const handleSubmit=(evt)=>{
    evt.preventDefault();
    let userDetails={"name":name,"email":email,"password":password,"phone":phone};
    //console.log(name,email,phone,password);
    axios.post("http://103.104.74.215:3008/website/signup" ,userDetails).then((response)=>{
    console.log(userDetails);
        setOutput(response.data.result);
        setName('');
        setEmail('');
        setPassword('');
       setPhone('');
          
      }).catch((err)=>{
        console.log(err);
    });
  };
  
    return (
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
             <div class="row">
<div class="col-lg-6">

<br/>
<h2>Create an Account</h2>
<p><Link to='/login'>Login if you area a returning customer.</Link></p>
<font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" className="account__login--input"  value={name} onChange={e => setName(e.target.value)}  />
    </div>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" className="account__login--input" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="mobile">Mobile:</label>
      <input type="number" className="account__login--input" value={phone} onChange={e => setPhone(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="account__login--input" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
    <button type="submit" class="account__login--btn primary__btn mb-10"> Submit & Register</button>
  </form>
  <div className="account__login--remember position__relative">
        <input className="checkout__checkbox--input" id="check2" type="checkbox" />
        <span className="checkout__checkbox--checkmark" />
        <label className="checkout__checkbox--label login__remember--label" htmlFor="check2">
          I have read and agree to the terms &amp; conditions</label>
          <br/>
          <br/>
      
      </div>

</div>

             </div>

       </div>
       <br/>
      <br/>
       
       {/*about section end */} 
    </div>
    
    <Footerone/>
    </div>
    );
}

export default Register;

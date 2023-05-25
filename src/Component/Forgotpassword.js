import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Headerone from './Headerone';
import Footerone from './Footerone';
import Header from './Header';

function Forgotpassword()
{
    const [ output , setOutput ] = useState();
    const [ email , setEmail ] = useState();
  
    const handleSubmit=(evt)=>{
  let userid= localStorage.getItem("_id")
  
      evt.preventDefault();
    let userDetails={"email":email,"userId":userid};
    //console.log(email);
    
    axios.post("http://103.104.74.215:3008/website/resetPassword" ,userDetails).then((response)=>{
    
    //console.log("hello",response.data);
        setOutput(response.data.result);
        setEmail('');
        //console.log(response.data);
        alert(response.data);  
        alert(response.result.data); 
      }).catch((err)=>{
        //console.log(err);
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
      
       <div class="container">
             <div class="row">
<div class="col-lg-6">
<h2>Enter Email Here!!!</h2>
<font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} >
        <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" className="account__login--input" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    
    <button type="submit" class="choiceus__info--btn primary__btn btn__style3"> Submit </button>
<br/>
<br/>
    <button type="submit" class="account__login--forgot" ><Link to='/login'> Back to Login</Link> </button>
    <br/>
<br/>

  </form>
</div>
             </div>
       </div>
       {/*about section end */} 
    </div>
    <Footerone/>
    </div>

  )
}

export default Forgotpassword;

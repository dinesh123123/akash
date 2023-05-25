import React from 'react'
import { FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Facebook() 
{
    const navigate = useNavigate();
    const [ output , setOutput ] = useState();
    const [ email , setEmail ] = useState();
    const [ name , setName ] = useState();
    
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
      let userDetails={"_id": "644f87d95ad943e1aa1be7aa","name":"Khushi HR" ,"email":"samajsewa365days@gmail.com"};
      axios.post("http://103.104.74.215:3008/website/facebook_login",userDetails).then((response)=>{
        
      //console.log("response",userDetails);
      //console.log("response",response.data.data.role);    
      if(response.data.token!="error")
      {
             const responseData=response.data.userDetails;
             
          localStorage.setItem("facebook_id",response.data.data.facebook_id);
            localStorage.setItem("name",response.data.data.name);
            localStorage.setItem("email",response.data.data.email);
            localStorage.setItem("password",response.data.data.password);
             localStorage.setItem("phone",response.data.data.phone);
             localStorage.setItem("role",response.data.data.role);
            localStorage.setItem("info",response.data.data.info);
            
  
             response.data.data.role=="user" ? navigate("/myaccount") : navigate("/myaccount"); 
             
              
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
  return (
    <div>
      <LoginSocialFacebook 
 appId='2127968227399061'
 onResolve={(response)=>{
  //console.log(response);
 }}
 onReject={(error)=>{
  //console.log(error);
 }}
 >


      < FacebookLoginButton/>  
      {name}  
  
</LoginSocialFacebook>
    </div>
  )
}

export default Facebook

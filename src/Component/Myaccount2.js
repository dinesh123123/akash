import { Link } from 'react-router-dom'
import React from 'react'
import Footerone from './Footerone'
import Header from './Header'
import Headerone from './Headerone'

function Myaccount2() {
  return (
    <div>
        <Headerone/>

        <div class="my__account--section section--padding">
            <div class="container">
                <div class="my__account--section__inner border-radius-10 d-flex">
                    <div class="account__left--sidebar">
                        <h3 class="account__content--title mb-20">My Profile</h3>
                        <ul class="account__menu">
                            <li class="account__menu--list active"><Link to="/myaccount">Dashboard</Link></li>
                        <br/>
                        <li class="account__menu--list"><Link to="/wishlist">Wishlist</Link></li>
                    <br/>
                    <li class="account__menu--list"><Link to="/myaccount2">Setting</Link></li>
                <br/>
                            {/* <li class="account__menu--list"><Link to="/login">Log Out</Link></li> */}
                        <br/>
                        <button class="account__login--btn primary__btn">Need Help?</button>
                        </ul>
                    </div>

                    <div class="col">
                        <div class="account__login">
                            <div class="account__login--header mb-25">
                                <h3 class="account__login--header__title mb-10">My Settings</h3>
                                {/* <!-- <p class="account__login--header__desc">Login if you area a returning customer.</p> --> */}
                            </div>
                            <div class="account__login--inner">
                                
                                <label>
                                    <input class="account__login--input" placeholder={localStorage.getItem("name")} type="email"/>
                                </label>
                                <label>
                                    <input class="account__login--input" placeholder={localStorage.getItem("email")} type="email"/>
                                </label>
                                <label>
                                    <input class="account__login--input" placeholder={localStorage.getItem("password")} type="password"/>
                                </label>
                                <div class="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                                    <div class="account__login--remember position__relative">
                                        <input class="checkout__checkbox--input" id="check1" type="checkbox"/>
                                        {/* <!-- <span class="checkout__checkbox--checkmark"></span> --> */}
                                        {/* <!-- <label class="checkout__checkbox--label login__remember--label" for="check1">
                                            Remember me</label> --> */}
                                    </div>
                                    {/* <!-- <button class="account__login--forgot" type="submit">Forgot Your Password?</button> --> */}
                                </div>
                                <button class="account__login--btn primary__btn" type="submit"><Link to='/forgotpassword'>Change Password</Link></button>
                                {/* <!-- <div class="account__login--divide">
                                    <span class="account__login--divide__text">OR</span>
                                </div> -->
                                <!-- <div class="account__social d-flex justify-content-center mb-15">
                                    <a class="account__social--link facebook" target="_blank" href="https://www.facebook.com/">Facebook</a>
                                    <a class="account__social--link google" target="_blank" href="https://www.google.com/">Google</a>
                                    <a class="account__social--link twitter" target="_blank" href="https://twitter.com/">Twitter</a>
                                </div>
                                <p class="account__login--signup__text">Don,t Have an Account? <button type="submit">Sign up now</button></p>
                            </div> --> */}
                        </div>
                    </div>

                    {/* <!-- <div class="account__wrapper">
                        <div class="account__content">
                            <h3 class="account__content--title mb-20">My Settings</h3>
                            
                            <div>
                                What's your name?<br/>
                                <input type="text" placeholder="John">
                                
                                <br/>
                                <br/>
                                Email address*<br/>
                                <input type="text" placeholder="john12@gmail.com">
                                <br/>
                                <br/>
                               
                                 Mobile Number<br/>
                                <input type="number" placeholder="1122334455">
                                <br/>
                                <br/>
<button>Change Password</button>

                            </div> --> */}
                            
 
                           
                            {/* <!-- <button class="new__address--btn primary__btn mb-25" type="button">Add a new address</button> -->
                            <!-- <div class="account__details two">
                                <h4 class="account__details--title">Default</h4>
                                <p class="account__details--desc">Admin <br> Dhaka <br> Dhaka 12119 <br> Bangladesh</p>
                                <a class="account__details--link" href="my-account-2.html">View Addresses (1)</a>
                            </div>
                            <div class="account__details--footer d-flex">
                                <button class="account__details--footer__btn" type="button">Edit</button>
                                <button class="account__details--footer__btn" type="button">Delete</button>
                            </div> --> */}
                        </div>
                    </div>
                </div>
            </div>
       


      <Footerone/>
    </div>

  )
}

export default Myaccount2

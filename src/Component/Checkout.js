
import { Link } from 'react-router-dom'
import React from 'react'
import Header from './Header'
import Footerone from './Footerone'
import { useState , useEffect } from 'react'
import axios from 'axios'
import Orderlist from './Orderlist'
import Addaddress from './Addaddress'

function Checkout() {
    const [lists, setLists]=useState([]);
    const [data , setData]=useState();
    const [output, setOutput] = useState();
    const [address, setAddress] = useState();
    const [pincode, setPincode] = useState();
    const [city, setCity] = useState();
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      let userDetails = { address: address, pincode: pincode, city: city };
      const userid = localStorage.getItem("_id");
      const addresss = address;
      const pincodee = pincode;
      const cityy = city;
      console.log("checkingddsasdasd",userid,addresss,pincodee,cityy)
      
      const options = {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      };
      const requestData = JSON.stringify({
        userId: userid,
        address: addresss,
        pincode: pincodee,
        city: cityy ,
      });
      
      axios
        .post("http://103.104.74.215:3008/website/add_address", requestData, options)
        .then((response) => {
          // Handle the response
        })
        .catch((err) => {
          // Handle the error
        });
    };



    useEffect(()=>{
        getHomeData();
      },[]);
    
    
      const getHomeData = async () => {
        const userid=localStorage.getItem('_id')
        console.log("check for summery userid",userid)
             const options ={
             headers: {
                 "content-type" : "application/json; charset=utf-8",
                 "Access-Control-Allow-Origin" : '*'
             }
         }
            const data = JSON.stringify({
                "userId": userid
                });
              await axios.post("http://103.104.74.215:3008/website/order_summery",data,options).then(res => {
             setLists(res.data.data);
                      }).catch(err =>{
                        
             })
         }

  return (
    <div>
      <Header/>
      {/* <!-- Start breadcrumb section --> */}
        <section class="breadcrumb__section breadcrumb__bg">
            <div class="container">
                <div class="row row-cols-1">
                    <div class="col">
                        <div class="breadcrumb__content">
                            <h1 class="breadcrumb__content--title text-white mb-10">Checkout</h1>
                            <ul class="breadcrumb__content--menu d-flex">
                                <li class="breadcrumb__content--menu__items"><Link class="text-white" to="/home">Home</Link></li>
                                <li class="breadcrumb__content--menu__items"><span class="text-white">Checkout</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End breadcrumb section -->

        <!-- Start checkout page area --> */}
        <div class="checkout__page--area section--padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-6">
                        <div class="main checkout__mian">
                            <form action="#">
                                <div class="checkout__content--step section__contact--information">
                                    <div class="section__header checkout__section--header d-flex align-items-center justify-content-between mb-25">
                                        <h2 class="section__header--title h3">Contact information</h2>
                                        <p class="layout__flex--item">
                                            Already have an account?
                                            <Link class="layout__flex--item__link" to="/login">Log in</Link>  
                                        </p>
                                    </div>
                                    
                                </div>
{/* <Addaddress/> */}
<div class="checkout__content--step section__shipping--address">
        <font style={{ color: "blue" }}>{output}</font>
        <form onSubmit={handleSubmit}>
          <div class="section__shipping--address__content">
            <div class="row">
              <div class="col-12 mb-20">
                <div class="checkout__input--list">
                  <label class="checkout__input--label mb-5" for="input4">
                    Address <span class="checkout__input--label__star">*</span>
                  </label>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    class="checkout__input--field border-radius-5"
                    placeholder="Address"
                    id="input4"
                    type="text"
                  />
                </div>
              </div>

              <div class="col-12 mb-20">
                <div class="checkout__input--list">
                  <label class="checkout__input--label mb-5" for="input5">
                    Town/City{" "}
                    <span class="checkout__input--label__star">*</span>
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    class="checkout__input--field border-radius-5"
                    placeholder="City"
                    id="input5"
                    type="text"
                  />
                </div>
              </div>

              <div class="col-lg-12 mb-20">
                <div class="checkout__input--list">
                  <label class="checkout__input--label mb-5" for="input6">
                    Postal Code{" "}
                    <span class="checkout__input--label__star">*</span>
                  </label>
                  <input
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    class="checkout__input--field border-radius-5"
                    placeholder="Postal code"
                    id="input6"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <details>
            <summary class="checkout__checkbox mb-20">
              <input class="checkout__checkbox--input" type="checkbox" />
              <span class="checkout__checkbox--checkmark"></span>
              <span class="checkout__checkbox--label">
                Ship to a different address?
              </span>
            </summary>
            <div class="section__shipping--address__content">
              <div class="row">
                <div class="col-12 mb-20">
                  <div class="checkout__input--list">
                    <label class="checkout__input--label mb-5" for="input10">
                      Address{" "}
                      <span class="checkout__input--label__star">*</span>
                    </label>
                    <input
                      class="checkout__input--field border-radius-5"
                      placeholder="Address1"
                      id="input10"
                      type="text"
                    />
                  </div>
                </div>
                <div class="col-12 mb-20">
                  <div class="checkout__input--list">
                    <input
                      class="checkout__input--field border-radius-5"
                      placeholder="Apartment, suite, etc. (optional)"
                      type="text"
                    />
                  </div>
                </div>
                <div class="col-12 mb-20">
                  <div class="checkout__input--list">
                    <label class="checkout__input--label mb-5" for="input11">
                      Town/City{" "}
                      <span class="checkout__input--label__star">*</span>
                    </label>
                    <input
                      class="checkout__input--field border-radius-5"
                      placeholder="City"
                      id="input11"
                      type="text"
                    />
                  </div>
                </div>

                <div class="col-lg-12 mb-20">
                  <div class="checkout__input--list">
                    <label class="checkout__input--label mb-5" for="input12">
                      Postal Code{" "}
                      <span class="checkout__input--label__star">*</span>
                    </label>
                    <input
                      class="checkout__input--field border-radius-5"
                      placeholder="Postal code"
                      id="input12"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </details> */}
          <button type="submit">Save</button>
        </form>
      </div>

                                <div class="order-notes mb-20">
                                    <label class="checkout__input--label mb-5" for="order">Order Notes <span class="checkout__input--label__star">*</span></label>
                                   <textarea class="checkout__notes--textarea__field border-radius-5" id="order" placeholder="Notes about your order, e.g. special notes for delivery." spellcheck="false"></textarea>
                                </div>
                                <div class="checkout__content--step__footer d-flex align-items-center">
                                    <Link class="continue__shipping--btn primary__btn border-radius-5" to="/home">Continue To Shipping</Link>
                                    <Link class="previous__link--content" to="/cart">Return to cart</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                     <Orderlist/>
                    
                </div>
            </div>
        </div>
        {/* <!-- End checkout page area --> */}


      <Footerone/>
    </div>
  )
}

export default Checkout
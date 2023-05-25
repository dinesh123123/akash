import React from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';
import Headerone from './Headerone';

function Working() {
    return (
<>
            <Headerone/>
        <div className="container">
        {/* <div className="checkout-data">
        <a href><span style={{color: '#1dbdc0', padding: '0px 39px'}}>Checkout</span></a>
        <a href className="myDIV"> <span style={{color: '#fdb614', padding: '0px 4px'}}>Verification</span></a>
        <span className="hide">I am shown when someone hovers over the div above.</span>
        <a href className="myDIV"> <span style={{padding: '0px 24px'}}>Delivery</span></a>
        <p className="hide">Once the kyc Verification done ,item will delivery at your location.</p>
      </div> */}
      <br/>
      <br/>
      <br/>
          <div className="categories__inner d-flex align-items-center">
            <div className="swiper-slide swiper-slide-active">
              <h2 className="categories__content--title">Upload your PAN Card</h2>
              <input type="file" style={{fontSize: 'large'}}/>
                                  
                            
              
             <br />
              <br />
              <br />
             
              <div>
        <ul>
          <li>
            <img src="assets/img/icon/landscape-mode.svg" alt='' style={{margin: '28px 6px -10px 1px'}} />Please upload a picture of your PAN card in jpg, jpeg or png format in <span>landscape mode</span></li>
          <br />
          <br />
          <img src="assets/img/icon/original-photo.svg" alt=''/>Please upload the picture of your <span>original PAN card</span> not photocopies
          <br />
          <br />
          <li>
            <img src="assets/img/icon/original-photo.svg" alt=''/>
            Please ensure that the details on PAN card are properly visible without any blur
          </li>
        </ul>
      </div>

<br/>
<br/>
<br/>
             
              <Link className="categories__content--btn primary__btn btn__style2" to="/shop">See All Categories</Link>     
            </div>

          </div>
        </div>
        </>
      );
    }
  


export default Working

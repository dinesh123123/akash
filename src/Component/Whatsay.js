import { Link } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Whatsay = () => {
  const [lists, setLists]=useState([]);
  useEffect(()=>{
  getHomeData();
},[]);
const getHomeData = async () => {
  const options ={
      headers: {
          "content-type" : "application/json; charset=utf-8",
          "Access-Control-Allow-Origin" : '*'
      }
  }
     const data = JSON.stringify({
        });

      await axios.get("http://103.104.74.215:3008/website/feedback_list",data,options).then(res => {
      setLists(res.data.data);
  //console.log("response",res.data.data);
  }).catch(err =>{
      })
  }


  var settings = {
    className: "",
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: false,
    
     
     
    
  };
  return (
<>
<section class="product__section section--padding color-scheme-3 pt-0">
            <div class="container">
            <div className="section__heading text-center mb-30">
        <h2 className="section__heading--maintitle">What Say Our Top Clints</h2>
      </div> 
   

            <div className='carousel_slider'>
              
        <Slider {...settings}>
        {lists.map((list) => {
                        return(
        <div className="swiper-slide swiper-slide-active"  data-swiper-slide-index={0} role="group" aria-label="1 / 5" style={{width: '286.667px', marginRight: '30px'}}>
        <div className="testimonial__items--style3 border-radius-5">
          <div className="testimonial__style3--topbar text-center">
            <div className="testimonial__thumbnail--style3">
              <img style={{borderRadius:'88px' , width:'144px'}} className="testimonial__thumbnail--style3__img display-block" src={"http://103.104.74.215:3008/uploads/"+list.image} alt="testimonial-img" />
            </div>
            <div className="testimonial__style3--author">
              <h3 className="testimonial__style3--author__title h4">{list.title}</h3>
              {/* <h4 className="testimonial__style3--author__subtitle h5">Product Designer</h4> */}
            </div>
          </div>
          <div className="testimonial__style3--content">
            <svg className="testimonial__style3--quote__icon" xmlns="http://www.w3.org/2000/svg" width={27} height="20.25" viewBox="0 0 27 20.25">
              <path data-name="Icon open-double-quote-serif-left" d="M10.125,0A10.155,10.155,0,0,0,0,10.125V20.25H10.125V10.125H3.375a6.727,6.727,0,0,1,6.75-6.75ZM27,0A10.155,10.155,0,0,0,16.875,10.125V20.25H27V10.125H20.25A6.727,6.727,0,0,1,27,3.375Z" fill="#d8d8d8" />
            </svg>
            <p className="testimonial__style3--content__desc text-center">{list.text} </p>
          </div>
        </div>
      </div>
      )
    })
    }
        </Slider>
        
            </div>
            
            
        </div>
      </section>
    </>
  )
}
 

export default Whatsay
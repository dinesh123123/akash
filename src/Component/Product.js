import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from 'react-router-dom';
import React from 'react'
import { useState , useEffect} from 'react';
import Header from './Header'
import axios from 'axios';
import Footerone from './Footerone'
import Tabs from './Tabs'
import Addcart from "./Addcart";
function Product() {
  const [color, setColor] = useState('red');
  const [size, setSize] = useState('single');
  const [counter, setCounter] = useState(1);
  
  const [lists, setLists] = useState();


  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleCountChange = (event) => {
    setCounter(Number(event.target.value));
  };
  
   
  useEffect(()=>{
      getHomeData();
    },[]);
    const getHomeData = async () => {
      const id=localStorage.getItem('pro_id')
      
      
      const options ={
          headers: {
              "content-type" : "application/json; charset=utf-8",
              "Access-Control-Allow-Origin" : '*'
          }
      }
         const data = JSON.stringify({
          "productId":id,
          

  });
                 await axios.post("http://103.104.74.215:3008/website/product_details",data,options).then(res => {
          setLists(res.data.data);
      
      }).catch(err =>{
          })
      }


      

      var settings = {
        className: "",
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        
         
         
        
      };
      
      

return (
<>
<Header/>

    <main className="main__content_wrapper">
      {/* Start breadcrumb section */}
      <section className="breadcrumb__section breadcrumb__bg">
        <div className="container">
          <div className="row row-cols-1">
          
            <div className="col">
           
              <div className="breadcrumb__content">
                <h1 className="breadcrumb__content--title text-white mb-10">Product Details</h1>
                <ul className="breadcrumb__content--menu d-flex">
                  <li className="breadcrumb__content--menu__items"><Link className="text-white" to="/">Home</Link></li>
                  <li className="breadcrumb__content--menu__items"><span className="text-white">Product Details</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End breadcrumb section */}
      {/* Start product details section */}
      <section className="product__details--section section--padding">
        <div className="container">
        
          <div className="row row-cols-lg-2 row-cols-lg-2">
          
           <div className="col">
                         <div className="">
                <div className="">
                  <div className="product__media--preview swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                  <Slider {...settings}>
                  {lists?.images.map((list)=>
                    <img   src={"http://103.104.74.215:3008/uploads/"+list} alt="product-media-img" />
                  ) 
                }

</Slider>
                    
                  </div>
                </div>
                
                <div className="">
                 
                </div>
                
              </div> 
               
              
            </div>  
             
            <div className="">
              <div className="">
                <form action="#">
                  <h2 className="">{lists?.product_name}</h2>
                  <div className="">
                    <span className="current__price">₹{lists?.price*counter}</span>
                    <span className="old__price">₹{lists?.discount_price}</span>
                  </div>
                  <div className="product__details--info__rating d-flex align-items-center mb-15">
                    
                  </div>
                  <p className="product__details--info__desc mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam ullam is recusandae laborum explicabo id sequi quisquam, ab sunt deleniti quidem ea animi facilis quod nostrum odit! Repellendus voluptas suscipit.</p>
                  <div className="product__variant">
                   
                  </div>
                  <div className="product__variant--list mb-20">
                    <fieldset className="variant__input--fieldset">
                      
                    </fieldset>
                  </div>
                  <div className="product__variant--list quantity d-flex align-items-center mb-20">
                    <div className="quantity__box">

<button style={{fontFamily:'monospace'}} type="button"  onClick={() => setCounter(counter - 1)}>-</button>
                                    {counter}
                                     <button style={{fontFamily:'monospace'}} type="button"  onClick={() => setCounter(counter + 1)}>+</button>
                                      </div>
                        <button className="primary__btn quickview__cart--btn" 
                        onClick={(()=>localStorage.setItem("userId",lists._id))}> 
                        <Addcart  color={color} size={size} count={counter} price={lists?.price*counter}/>
                    </button> 
                                      </div>
                  <div className="product__variant--list mb-15">
                    <Link onClick={(()=>localStorage.setItem("userId",lists._id))} className="variant__wishlist--icon mb-15" to="/wishlist" title="Add to wishlist">
                      <svg className="quickview__variant--wishlist__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                      Add to Wishlist
                    </Link>
                    <button className="variant__buy--now__btn primary__btn" type="submit">Buy it now</button>
                  </div>
                  <div>
                  Color:
        <select  value={color} onChange={handleColorChange}>
          <option value="">Select a color</option>
          <option value="red">{lists?.color[0]}</option>
          <option value="blue">{lists?.color[1]}</option>
          <option value="black">{lists?.color[2]}</option>
          <option value="white">{lists?.color[3]}</option>
          <option value="pink">{lists?.color[4]}</option>
          <option value="gray">{lists?.color[5]}</option>

        </select>
   </div>
                  <div className="product__variant--list mb-15">
                    <div className="product__details--info__meta">
                      <p className="product__details--info__meta--list"><strong>
                      Size:-
        <select value={size} onChange={handleSizeChange}>
          <option value="">Select a size</option>
          <option value="single">{lists?.size[0]}</option>
          <option value="double">{lists?.size[1]}</option>
          <option value="queen size">{lists?.size[2]}</option>
          <option value="king size">{lists?.size[3]}</option>
          <option value="five">{lists?.size[4]}</option>
          <option value="four">{lists?.size[5]}</option>
  </select>
                        </strong> 
                          </p>
                      
                      <p className="product__details--info__meta--list"><strong>Sky:{lists?.duration}</strong>  <span>4420</span> </p>
                      <p className="product__details--info__meta--list"><strong>Vendor:</strong>  <span>Belo</span> </p>
                      <p className="product__details--info__meta--list"><strong>Type:</strong>  <span>{lists?.category_name}</span> </p>
                    </div>
                  </div>
                </form></div>
              </div>
                        </div>
                </div>
              </section>
      {/* End product details section */}
      {/* Start product details tab section */}
      <section className="product__details--tab__section section--padding">
        <Tabs/>
       
      </section>
      {/* End product details tab section */}
      
    </main>
    <Footerone/>
    </>
  );
}


export default Product;

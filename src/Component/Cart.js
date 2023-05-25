import Removecart from './Removecart';
import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react';
import axios from 'axios';
import Ordersummery from './Ordersummery';

function Cart() {
  
  const [lists, setLists]=useState([]);
  const [data , setData]=useState();

 
  useEffect(()=>{
    getHomeData();
  },[]);
 

  const calcPrice = (lists) => {
    return lists.reduce((accumulator, object) => {
      return Number(accumulator) + Number(object.total_price);
    }, 0);
  };

  const getHomeData = async () => {
    const userid=localStorage.getItem('_id')
    
    
         const options ={
         headers: {
             "content-type" : "application/json; charset=utf-8",
             "Access-Control-Allow-Origin" : '*'
         }
     }
        const data = JSON.stringify({
            "userId": userid
            
 
          });
          
          

         await axios.post("http://103.104.74.215:3008/website/cart_list",data,options).then(res => {
         setLists(res.data.data);
         
     }).catch(err =>{
         })
     }
     
     const removeCartitem = (item) => {
      const options = {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      };
    
      const data = JSON.stringify({
        cartId: item,
      });
    
      axios
        .post("http://103.104.74.215:3008/website/cart_remove", data, options)
        .then((res) => {
          //setLists(res.data.data);
         getHomeData()
          //console.log("response aaaaaaaaaaaaaaaaaa", res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };


    // const getHomeData = async () => {
    //   const userid=localStorage.getItem('cartId')
    //   const options ={
    //      headers: {
    //          "content-type" : "application/json; charset=utf-8",
    //          "Access-Control-Allow-Origin" : '*'
    //      }
    //  }
    //     const data = JSON.stringify({
    //             "cartId": userid,
    //           });


    //      await axios.post("http://103.104.74.215:3008/website/cart_remove",data,options).then(res => {
    //      setLists(res.data.data);
    //  }).catch(err =>{
    //      })
    //  }




      return (
        <div>
          
            <Header/>
          {/* End header area */}
          <main className="main__content_wrapper">
            {/* Start breadcrumb section */}
            <section className="breadcrumb__section breadcrumb__bg">
              <div className="container-fluid">
                <div className="row row-cols-1">
                  <div className="col">
                    <div className="breadcrumb__content">
                      <h1 className="breadcrumb__content--title text-white mb-10">Shopping Cart</h1>
                      <ul className="breadcrumb__content--menu d-flex">
                        <li className="breadcrumb__content--menu__items"><Link className="text-white" to="/home">Home</Link></li>
                        <li className="breadcrumb__content--menu__items"><span className="text-white">Shopping Cart</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End breadcrumb section */}
            {/* cart section start */}
            <section className="cart__section section--padding">
              <div className="container-fluid">
                <div className="cart__section--inner">
                 
                    <h2 className="cart__title mb-40">Shopping Cart{} </h2>
                    {/* {lists.map((list) => {
                        return( */}
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="cart__table">
                          <table className="cart__table--inner">
                            <thead className="cart__table--header">
                              <tr className="cart__table--header__items">
                                <th className="cart__table--header__list">Product</th>
                                <th className="cart__table--header__list">Price</th>
                                <th className="cart__table--header__list">Quantity</th>
                                <th className="cart__table--header__list">Total</th>
                              </tr>
                            </thead>
                            <tbody className="cart__table--body">
                            {lists.map((list) => {
                        return(
                          
                              <tr className="cart__table--body__items">
                                <td className="cart__table--body__list">
                                
                                  <div className="cart__product d-flex align-items-center">
                                  <button   className="cart__remove--btn"   
                                    onClick={()=>removeCartitem(list._id)} > 
                        <div  className="" type="submit" onClick={getHomeData}>
      <button type="submit"
        onClick={getHomeData}
        className="cart__remove--btn" aria-label="search button" ><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" /></svg>
        <Link to="/cart"></Link>
      </button>
    </div>
                        
                        
                        {/* <Removecart/> */}
                                    </button>
                                    <div className="cart__thumbnail">
                                    
                                    </div>
                                    <div class="cart__thumbnail">

                                    </div>
    <div className="cart__thumbnail">
                                    
                                    </div>
                                    {/* <h1>{list._id}</h1> */}
                                    <div class="cart__thumbnail">
                                                            <a href="product-details.html"><img class="border-radius-5" src= 
                                                            {"http://103.104.74.215:3008/uploads/"+list.productId.images[0]}
                                                            alt="cart-product"/></a>
                                                        </div>
                                    <div className="cart__content">
                                    {/* <h1>{list._id}</h1> */}
                                      <h4 className="cart__content--title"><Link to="/product">{}</Link></h4>
                                      <span className="cart__content--variant">Color: {list?.color}</span>
                                      Size:{list?.size}
                                      
                                      
                                    </div>
                                  </div>
                                </td>
                                
                                <td className="cart__table--body__list">
                                  <span className="cart__price">₹{list.productId.price}</span>
                                </td>
                                <td className="cart__table--body__list">
                                  <div className="quantity__box">
                                 
                                  {list.qty}


</div>
                                </td>
                                <td className="cart__table--body__list">
                                  <span className="cart__price end">₹{list.total_price}</span>
                                </td>
                                {/* <p>{calcPrice(lists)}</p> */}
                              </tr>


                              )

})
}
                              </tbody>
                            
                          </table> 
                          <div className="continue__shopping d-flex justify-content-between">
                            <Link className="continue__shopping--link" to="/">Continue shopping</Link>
                            <button className="continue__shopping--clear" type="submit">Clear Cart</button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cart__summary border-radius-10">
                          <div className="coupon__code mb-30">
                            <h3 className="coupon__code--title">Coupon</h3>
                            <p className="coupon__code--desc">Enter your coupon code if you have one.</p>
                            <div className="coupon__code--field d-flex">
                              <label>
                                <input className="coupon__code--field__input border-radius-5" placeholder="Coupon code" type="text" />
                              </label>
                              <button className="coupon__code--field__btn primary__btn" type="submit">Apply Coupon</button>
                            </div>
                          </div>
                          <br />
                          <button className="rm-btn compare-tenure-btn" style={{margin: '10px 0 15px', borderRadius: '4px', border: '1px solid #0c5791', color: 'white', background: '#0c5791', boxShadow: 'none', display: 'block', fontWeight: 700, fontSize: '12px', width: '100%', padding: '10px 20px'}}><Link to="/compare"> 
                              Compare All Tenures
                            </Link></button>
                          
                          <input className="coupon__code--field__input border-radius-5" placeholder="Enter pincode" type="text" />Delivery Pincode
                          <br />
                          <br />
                          
                          <div className="cart__summary--total mb-20">
                            <table className="cart__summary--total__table">
                              <tbody>
                                <tr className="cart__summary--total__list">
                                  <td className="cart__summary--total__title text-left">SUBTOTAL</td>
                                  <td className="cart__summary--amount text-right">₹{calcPrice(lists)}</td>
                                </tr>
                                <tr className="cart__summary--total__list">
                                  <td className="cart__summary--total__title text-left">GRAND TOTAL</td>
                                  <td className="cart__summary--amount text-right">₹{calcPrice(lists)}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div> 
                          <br />
                          <br />
                          <div className="cart__summary--footer">
                            <p className="cart__summary--footer__desc">Shipping &amp; taxes calculated at checkout</p>
                            <ul className="d-flex justify-content-between">
                              <li><button className="cart__summary--footer__btn primary__btn cart" type="submit">Update Cart</button></li>
                              <li>
                              
                              <button className="cart__summary--footer__btn primary__btn checkout" to="/checkout" 
                         onClick={(()=>localStorage.setItem("userId",lists._id ,"total_price",calcPrice.lists))}> 
                        <Ordersummery/>
                            </button> </li>
          </ul>
                          </div>
                        </div> 
                      </div>
                    </div> 
                    
                </div>
              </div>     
            </section>
           
          </main>
        </div>
      );
    }


export default Cart
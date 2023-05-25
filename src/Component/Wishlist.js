import Addcart from './Addcart';
import { Link } from 'react-router-dom';
import { useEffect , useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footerone from './Footerone';
import Headerone from './Headerone';

function Wishlist() 
{
    const [lists, setLists]=useState([]);
     useEffect(()=>{
     getHomeData();
   },[]);
   const getHomeData = async () => {
    const userid=localStorage.getItem('_id')

    
     const options ={
         headers: {
             "content-type" : "application/json; charset=utf-8",
             "Access-Control-Allow-Origin" : '*'
         }
     }
        const data = JSON.stringify({

            "userId": userid,

           });
 
         await axios.post("http://103.104.74.215:3008/website/wish_list",data,options).then(res => {
         setLists(res.data.data);
     
     }).catch(err =>{
         })
     }
     //console.log("userid for",lists)

  return (
    <div>
        <Header/>
              {/* <!-- cart section start --> */}
        <section class="cart__section section--padding">
            <div class="container">
                <div class="cart__section--inner">
                {/* {lists.map((list) => {
                        return( */}
                    <form action="#"> 
                        <h2 class="cart__title mb-40">Wishlist</h2>
                        
                        <div class="cart__table">

                        {lists.map((list) => {
                        return(
                            
                            <table class="cart__table--inner">
                                
                                <thead class="cart__table--header">
                             
                                    <tr class="cart__table--header__items">
                                        <th class="cart__table--header__list">Product</th>
                                        <th class="cart__table--header__list">Price</th>
                                        <th class="cart__table--header__list text-center">STOCK STATUS</th>
                                        <th class="cart__table--header__list text-right">ADD TO CART</th>
                                    </tr>
                                </thead>
                                <tbody class="cart__table--body">
                                    <tr class="cart__table--body__items">
                                        <td class="cart__table--body__list">
                                            <div class="cart__product d-flex align-items-center">
                                                <button class="cart__remove--btn" aria-label="search button" type="button"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg></button>
                                                <div class="cart__thumbnail">
                                                    <a href="product-details.html"><img class="border-radius-5" 
                                                            src= 
                                                            {"http://103.104.74.215:3008/uploads/"+list.productId.images[0]} alt="cart-product"/></a>
                                                </div>
                                                <div class="cart__content">
                                                    <h4 class="cart__content--title"><a href="product-details.html">{lists?.product_name}</a></h4>
                                                    <span class="cart__content--variant">Color: {list.productId.color}</span>
                                                    
                                                </div>
                                            </div>
                                        </td>
                                        <td class="cart__table--body__list">
                                            <span class="cart__price">₹{list.productId.price}</span>
                                        </td>
                                        <td class="cart__table--body__list text-center">
                                            <span class="in__stock text__secondary">in stock</span>
                                        </td>
                                        <td class="cart__table--body__list text-right">
                                        <button class="wishlist__cart--btn primary__btn" 
                        onClick={(()=>localStorage.setItem("userId",lists._id))}> 
                        <Addcart/>
                    </button> 

                                            {/* <Link class="wishlist__cart--btn primary__btn" to="/cart">Add To Cart</Link> */}
                                        </td>
                                    </tr>
                                    
                                </tbody>
                                
                            </table> 
                            )
                        })
                        }
                            <div class="continue__shopping d-flex justify-content-between">
                                <Link class="continue__shopping--link" to="/home">Continue shopping</Link>
                                <Link class="continue__shopping--clear" to="/home">View All Products</Link>
                                
                            </div>
                            
                            
                        </div> 
                        
                    </form> 
                     
                </div>
                
                
            </div>  
            
               
        </section>
        

<Footerone/>
    </div>
  )
}

export default Wishlist;

import { Link } from 'react-router-dom'
import React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios';

function Browsepopular()
 {
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
    
            await axios.get("http://103.104.74.215:3008/website/category_list",data,options).then(res => {
            setLists(res.data.data);
        //console.log("response",res.data.data);
        }).catch(err =>{
            })
        }
  return (

    <div>
                {/* <!-- Start Categories section --> */}
        <section class="categories__section color-scheme-3 section--padding">
            <div class="container">
                <div class="section__heading text-center mb-50">
                    <h2 class="section__heading--maintitle">EXPLORE PRODUCTS</h2>
                </div>
                <div class="categories__section--inner">
                    <div class="row row-cols-lg-6 row-cols-md-4 row-cols-sm-3 row-cols-2  mb--n30">
       {lists.map((list) => {
                        return(
       
                                                 <div onClick={(()=>localStorage.setItem("item_id",list._id ,"item.name",list.name))} class="col mb-30"  key={list._id}>
                                                      
                                                       <div class="categories__product--items border border-radius-5 text-center">
                              <Link class="categories__product--items__link" to="/shop">
                                  <img  src={"http://103.104.74.215:3008/uploads/"+list.image}  class="categories__product--thumbnail__img display-block"  alt="categories-product"/>
                                  <h3 class="categories__product--title h4">{list.name}</h3>
                                  

                                  
                                  
                              </Link>
                          </div>
                      </div>   
  )
})
}
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Categories section --> */}
      
    </div>
  )
}

export default Browsepopular

import { Link } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';



function City() {


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
    
            await axios.get("http://103.104.74.215:3008/website/city_list",data,options).then(res => {
            setLists(res.data.data);
        console.log("response",res.data.data);
        }).catch(err =>{
            })
        }
return (
    <div className='container' >

{lists.map((list) => {
                        return(
                            <div className='container' key={list._id}>

<p>{list.city}</p>                            
{/* <img src={"http://103.104.74.215:3008/uploads/"+list.image} alt='sliderimage' /> */}


</div> 
     )
                        })
                        }
</div>
);
}
export default City;
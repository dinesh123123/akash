import { Link } from 'react-router-dom'
import React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios';

function Whyyouchoice()  {

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
  
          await axios.get("http://103.104.74.215:3008/website/features_list",data,options).then(res => {
          setLists(res.data.data);
      //console.log("response",res.data.data);
      }).catch(err =>{
          })
      }

    return (

      <section className="choiceus__section color-scheme-3 section--padding pt-0">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-5 col-md-5">
              <div className="choiceus__content">
                <h2 className="choiceus__content--title">Why You Choice Us</h2>
                {/* <p className="choiceus__content--desc">Get up to 80% off for this weak and get offer.
                  Don't miss this chance hit order button.</p> */}
                <div className="choiceus__info">
                  <div className="choiceus__info--step d-flex">
                  {lists.map((list) => {
                        return(
                    <div className="choiceus__info--list"  key={list._id}>
                      {/* <svg className="choiceus__info--icon" data-name="Group 118" xmlns="http://www.w3.org/2000/svg" width="38.02" height="41.512" viewBox="0 0 38.02 41.512">
                        <path data-name="Path 81" d="M51.769,17.16h-.1V14.642a14.642,14.642,0,1,0-29.284,0V17.16h-.616a4.184,4.184,0,0,0-4.007,4.316V27.9a4.059,4.059,0,0,0,3.954,4.16h3.855a.976.976,0,0,0,.929-1.021c0-.019,0-.039,0-.058V18.393c0-.616-.36-1.233-.925-1.233h-1.13V14.642a12.587,12.587,0,0,1,25.174,0V17.16h-1.13c-.565,0-.925.616-.925,1.233V30.98a.976.976,0,0,0,.867,1.074l.058,0h1.182l-.1.154a8.117,8.117,0,0,1-6.525,3.237,5.086,5.086,0,0,0-10.07.976A5.138,5.138,0,0,0,38.1,41.512a5.292,5.292,0,0,0,3.7-1.593,4.521,4.521,0,0,0,1.233-2.466A10.172,10.172,0,0,0,51.2,33.394l.976-1.439a3.5,3.5,0,0,0,3.6-3.545V21.989C55.776,19.78,54.132,17.16,51.769,17.16ZM24.437,30H21.765a2,2,0,0,1-1.954-2.052c0-.018,0-.036,0-.055V21.475a2.13,2.13,0,0,1,1.952-2.261h2.672Zm15.875,8.477a3.031,3.031,0,0,1-2.209.976,3.134,3.134,0,0,1-3.083-3.031,3.031,3.031,0,0,1,6.062,0v0A2.723,2.723,0,0,1,40.312,38.481Zm13.409-10.07C53.721,29.8,52.385,30,51.769,30H49.611V19.215h2.158c1.13,0,1.952,1.593,1.952,2.774Z" transform="translate(-17.756)" fill="currentColor" />
                      </svg> */}
                      <span class="choiceus__info--list" className="choiceus__info--text">{list.title}</span>
                      <p >{list.text}</p>
                    </div>
                      )
                    })
                    }
                  </div>
                  <div className="choiceus__info--step d-flex">
                  
                  </div>
                </div>
                <Link className="choiceus__info--btn primary__btn btn__style3" to="/about">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Whyyouchoice

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState  , useEffect} from 'react';

function Ordersummery() {
   const [lists, setLists]=useState();
   const [data , setData]=useState();
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
                "total_price":"10200"
              });

         await axios.post("http://103.104.74.215:3008/website/order_summery",data,options).then(res => {
         setLists(res.data.data);
     }).catch(err =>{
         })
     }

     //console.log("check fortesting userid",lists)
  return (
    <div>
      <button
        className="primary__btn quickview__cart--btn"
        type="submit"
        onClick={getHomeData}
      >
        <Link to="/checkout">Check Out</Link>
      </button>
    </div>
  );
}

export default Ordersummery;

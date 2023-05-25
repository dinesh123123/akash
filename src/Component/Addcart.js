import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState  , useEffect} from 'react';

function Addcart(props) {
  const [lists, setLists]=useState();
  const [data , setData]=useState();

  
  
   const getHomeData = async () => {

    const productid=localStorage.getItem('pro_id')
    
    const userid=localStorage.getItem('_id')
    const colors=props.color
    const sizes=props.size
    const counters=props.count
    const prices=props.price

    
         const options ={
         headers: {
             "content-type" : "application/json; charset=utf-8",
             "Access-Control-Allow-Origin" : '*'
         }
     }
        const data = JSON.stringify({
           "productId" :productid,
           "userId": userid,
           "delevery_charge": "99",
           "total_price": prices,
          "color": colors,
           "size": sizes,
           "qty": counters,
           "duration": "3",  


 });

        await axios.post("http://103.104.74.215:3008/website/add_cart",data,options).then(res => {
         setLists(res.data.data);
     }).catch(err =>{
         })
     }

  return (
    <div>
      <button
        className="primary__btn quickview__cart--btn"
        type="submit"
        onClick={getHomeData}
      >
        <Link to="/cart">Add to Cart</Link>
      </button>
    </div>
  );
}

export default Addcart;

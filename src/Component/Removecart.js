import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState  , useEffect} from 'react';

function Addcart() {
  const [lists, setLists]=useState();
  const [data , setData]=useState();

      const getHomeData = async () => {
      const userid=localStorage.getItem('cartId')
      const options ={
         headers: {
             "content-type" : "application/json; charset=utf-8",
             "Access-Control-Allow-Origin" : '*'
         }
     }
        const data = JSON.stringify({
                "cartId": userid,
              });


         await axios.post("http://103.104.74.215:3008/website/cart_remove",data,options).then(res => {
         setLists(res.data.data);
     }).catch(err =>{
         })
     }

  return (
    <div  className=""
    type="submit"
    onClick={getHomeData}>
      <button
        
        type="submit"
        onClick={getHomeData}
        className="cart__remove--btn" aria-label="search button" ><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" /></svg>
        <Link to="/cart"></Link>
      </button>
    </div>
  );
}

export default Addcart;

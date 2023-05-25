import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Order(props) {
  const [lists, setLists]=useState();
  const [data, setData] = useState();
  const [totalPrice, setTotalPrice] = useState();
  
  const [price, setPrice] = useState(props.price);
  const prces=props.price
  console.log("props pricesss",prces)
  

  const getHomeData2 = async () => {
    const userid = localStorage.getItem("_id");
    const shipingidd = localStorage.getItem("shipingid");
   const prcese=localStorage.getItem("total_price")
// console.log("prisdasdkasdkakdasdadasd",prcese)



    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      "userId": userid,
      "ShippingAddressId" : "646f1c1c9171fd56df50014c" ,

      "t_price": "1500",
    };

    try {
      const response = await axios.post(
        "http://103.104.74.215:3008/website/order",
        data,
        options
      );
           setLists(response.data.data);
           console.log("response of order",response.data.data)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Link to='/checkout'>
    <button onClick={getHomeData2} class="checkout__now--btn primary__btn" type="submit">
Checkout Now
</button>
</Link>

</>
  );
}

export default Order;


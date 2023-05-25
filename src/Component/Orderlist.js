import Removecart from "./Removecart";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Ordersummery from "./Ordersummery";
import Order from "./Order";

function Orderlist() {
  const [lists, setLists] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    getHomeData();
  }, []);

  const calcPrice = (lists) => {
    return lists.reduce((accumulator, object) => {
      return Number(accumulator) + Number(object.total_price);
    }, 0);
  };

  const getHomeData = async () => {
    const userid = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = JSON.stringify({
      userId: userid,
    });

    await axios
      .post(
        "http://103.104.74.215:3008/website/order_summery_list",
        data,
        options
      )
      .then((res) => {
        setLists(res.data.data);
      })
      .catch((err) => {});
  };



  

  return (
    <div class="col-lg-5 col-md-6">
      <aside class="checkout__sidebar sidebar border-radius-10">
        <h2 class="checkout__order--summary__title text-center mb-15">
          Your Order Summary
        </h2>
        <div class="cart__table checkout__product--table">
          <table class="cart__table--inner">
            <tbody class="cart__table--body">
              {lists.map((list) => {
                return (
                  <tr class="cart__table--body__items">
                    <td class="cart__table--body__list">
                      <div class="product__image two  d-flex align-items-center">
                        <div class="product__thumbnail border-radius-5">
                          <a class="display-block" href="product-details.html">
                            <img
                              class="display-block border-radius-5"
                              src={
                                "http://103.104.74.215:3008/uploads/" +
                                list.productId.images[0]
                              }
                              alt="cart-product"
                            />
                          </a>
                          <span class="product__thumbnail--quantity">
                            {list.qty}
                          </span>
                        </div>
                        <div class="product__description">
                          <h4 class="product__description--name">
                            <a href="product-details.html">
                              {list.productId.product_name}
                            </a>
                          </h4>
                          <span class="product__description--name">
                            Color: {list.color}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td class="cart__table--body__list">
                      <span class="cart__price">₹{list.total_price}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div class="checkout__total">
          <table class="checkout__total--table">
            <tfoot class="checkout__total--footer">
              <tr class="checkout__total--footer__items">
                <td class="checkout__total--footer__title checkout__total--footer__list text-left">
                  Total{" "}
                </td>
                <td class="checkout__total--footer__amount checkout__total--footer__list text-right">
                  ₹{calcPrice(lists)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="payment__history mb-30">
          <h3 class="payment__history--title mb-20">Payment</h3>
          <ul class="payment__history--inner d-flex">
            <li class="payment__history--list">
              <button class="payment__history--link primary__btn" type="submit">
                Credit Card
              </button>
            </li>
            <li class="payment__history--list">
              <button class="payment__history--link primary__btn" type="submit">
                Bank Transfer
              </button>
            </li>
            <li class="payment__history--list">
              <button class="payment__history--link primary__btn" type="submit">
                Paypal
              </button>
            </li>
          </ul>
        </div>
<Order/>

        {/* <button class="checkout__now--btn primary__btn" type="submit">
          Checkout Now
        </button> */}
      </aside>
    </div>
  );
}

export default Orderlist;

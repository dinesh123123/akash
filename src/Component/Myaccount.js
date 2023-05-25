import { Link } from "react-router-dom";
import React from "react";
import Headerone from "./Headerone";
import { useState, useEffect } from "react";
import axios from "axios";

function Myaccount(props) {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    getHomeData();
  }, []);
  const getHomeData = async () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = JSON.stringify({});

    await axios
      .post("http://103.104.74.215:3008/website/login", data, options)
      .then((res) => {
        setLists(res.data.data);
        //console.log("response",res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getHomeData2();
  }, []);

  const getHomeData2 = async () => {
    const userid = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = JSON.stringify({
      userId: "646f18c89171fd56df500084",
    });

    try {
      const res = await axios.post(
        "http://103.104.74.215:3008/website/order_history",
        data,
        options
      );
      setLists(res.data.data);
      console.log("responseasdsd", res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Headerone />
      <main class="main__content_wrapper">
        <section class="my__account--section section--padding">
          <div class="container">
            <span class="account__welcome--text">
              Hello, {localStorage.getItem("name")} welcome to your dashboard!
            </span>

            <Link to="/home" class="buying">
              <button class="choiceus__info--btn primary__btn btn__style3">
                Starting Buying
              </button>
            </Link>
            <p class="choiceus__info--btn primary__btn btn__style3">
              {" "}
              Checkout the offers to save more on your new lifestyle.
            </p>

            <div class="my__account--section__inner border-radius-10 d-flex">
              <div class="account__left--sidebar">
                <h3 class="account__content--title mb-20">My Profile</h3>
                <ul class="account__menu">
                  <li class="account__menu--list active">
                    <Link to="/myaccount">Dashboard</Link>
                  </li>
                  <br />

                  <li>
                    <select
                      name="forma"
                      onchange="location = this.value;"
                      style={{ height: "41px;width: 154px;" }}
                    >
                      <option value="">My Subscription</option>
                      <option value="transactions.html">Transactions</option>
                      <option value="invoices.html">Invoices</option>
                      <option value="all-requests.html">All Requests</option>
                      <option value="active-subscriptions.html">
                        Active Items
                      </option>
                      <option value="closed-subscriptions.html">
                        Closed Item
                      </option>
                    </select>
                  </li>
                  <br />

                  <li class="account__menu--list">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <br />

                  <li class="account__menu--list">
                    <Link to="/referral">Referral</Link>
                  </li>
                  <br />

                  <li class="account__menu--list">
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <br />
                  <li class="account__menu--list">
                    <Link to="/myaccount2">Setting</Link>
                  </li>
                  <br />
                  {/* <li class="account__menu--list"><Link to="/login">Log Out</Link></li> */}
                  <br />
                  <br />
                  <button class="account__login--btn primary__btn">
                    Need-Help
                  </button>
                </ul>
              </div>
              <div class="account__wrapper">
                <div class="account__content">
                  <h3 class="account__content--title mb-20">Orders History</h3>
                  <div class="account__table--area">
                    <table class="account__table">
                      <thead class="account__table--header">
                        <tr class="account__table--header__child">
                          <th class="account__table--header__child--items">
                            Order
                          </th>
                          <th class="account__table--header__child--items">
                            Date
                          </th>
                          <th class="account__table--header__child--items">
                            Payment Status
                          </th>
                          <th class="account__table--header__child--items">
                            Fulfillment Status
                          </th>
                          <th class="account__table--header__child--items">
                            Total
                          </th>
                        </tr>
                      </thead>
                      {lists.map((list) => {
                        return (
                          <tbody class="account__table--body mobile__none">
                            <tr class="account__table--body__child">
                              <td class="account__table--body__child--items">
                                {list.productId.price}
                              </td>
                              <td class="account__table--body__child--items">
                                November 24, 2022
                              </td>
                              <td class="account__table--body__child--items">
                                Paid
                              </td>
                              <td class="account__table--body__child--items">
                              {list.status}
                              </td>
                              <td class="account__table--body__child--items">
                              {list.total_price}
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                      {/* <tbody class="account__table--body mobile__block"> */}
                      {/* <tr class="account__table--body__child">
                                            <td class="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr>
                                        <tr class="account__table--body__child">
                                            <td class="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr>
                                        <tr class="account__table--body__child">
                                            <td class="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr>
                                        <tr class="account__table--body__child">
                                            <td class="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr>
                                        <tr class="account__table--body__child">
                                            <td class="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr>
                                        <tr class="account__table--body__child">
                                            <td class="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr> */}
                      {/* <tr class="account__table--body__child">
                                            <td class="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td class="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr> */}
                      {/* </tbody> */}
                    </table>
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

export default Myaccount;

import React from "react";
import Footerone from "./Footerone";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function About() {
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
      .get("http://103.104.74.215:3008/website/about_us_list", data, options)
      .then((res) => {
        setLists(res.data.data);
        //console.log("response", res.data.data);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <Header />
      {/* <!-- Start breadcrumb section --> */}
      <section class="breadcrumb__section breadcrumb__bg">
        <div class="container">
          <div class="row row-cols-1">
            <div class="col">
              <div class="breadcrumb__content">
                <h1 class="breadcrumb__content--title text-white mb-10">
                  About Us
                </h1>
                <ul class="breadcrumb__content--menu d-flex">
                  <li class="breadcrumb__content--menu__items">
                    <Link class="text-white" to="/home">
                      Home
                    </Link>
                  </li>
                  <li class="breadcrumb__content--menu__items">
                    <span class="text-white">About Us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End breadcrumb section --> */}
      {/* <!-- Start about section --> */}
      <section class="about__section section--padding mb-95">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="about__thumbnail d-flex">
                <div class="about__thumbnail--items">
                  <img
                    class="about__thumbnail--img border-radius-5 display-block"
                    src="assets/img/other/about-thumb-list1.webp"
                    alt="about-thumbnail"
                  />
                </div>
                <div class="about__thumbnail--items position__relative">
                  <img
                    class="about__thumbnail--img border-radius-5 display-block"
                    src="assets/img/other/about-thumb-list2.webp"
                    alt="about-thumbnail"
                  />
                  <div class="banner__bideo--play about__thumbnail--play">
                    <a
                      class="bideo__play--icon glightbox"
                      href="https://vimeo.com/115041822"
                      data-gallery="video"
                    >
                      <svg
                        id="play"
                        xmlns="http://www.w3.org/2000/svg"
                        width="46.302"
                        height="46.302"
                        viewBox="0 0 46.302 46.302"
                      >
                        <g
                          id="Group_193"
                          data-name="Group 193"
                          transform="translate(0 0)"
                        >
                          <path
                            id="Path_116"
                            data-name="Path 116"
                            d="M39.521,6.781a23.151,23.151,0,0,0-32.74,32.74,23.151,23.151,0,0,0,32.74-32.74ZM23.151,44.457A21.306,21.306,0,1,1,44.457,23.151,21.33,21.33,0,0,1,23.151,44.457Z"
                            fill="currentColor"
                          ></path>
                          <g
                            id="Group_188"
                            data-name="Group 188"
                            transform="translate(15.588 11.19)"
                          >
                            <g id="Group_187" data-name="Group 187">
                              <path
                                id="Path_117"
                                data-name="Path 117"
                                d="M190.3,133.213l-13.256-8.964a3,3,0,0,0-4.674,2.482v17.929a2.994,2.994,0,0,0,4.674,2.481l13.256-8.964a3,3,0,0,0,0-4.963Zm-1.033,3.435-13.256,8.964a1.151,1.151,0,0,1-1.8-.953V126.73a1.134,1.134,0,0,1,.611-1.017,1.134,1.134,0,0,1,1.185.063l13.256,8.964a1.151,1.151,0,0,1,0,1.907Z"
                                transform="translate(-172.366 -123.734)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g>
                          <g
                            id="Group_190"
                            data-name="Group 190"
                            transform="translate(28.593 5.401)"
                          >
                            <g id="Group_189" data-name="Group 189">
                              <path
                                id="Path_118"
                                data-name="Path 118"
                                d="M328.31,70.492a18.965,18.965,0,0,0-10.886-10.708.922.922,0,1,0-.653,1.725,17.117,17.117,0,0,1,9.825,9.664.922.922,0,1,0,1.714-.682Z"
                                transform="translate(-316.174 -59.724)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g>
                          <g
                            id="Group_192"
                            data-name="Group 192"
                            transform="translate(22.228 4.243)"
                          >
                            <g id="Group_191" data-name="Group 191">
                              <path
                                id="Path_119"
                                data-name="Path 119"
                                d="M249.922,47.187a19.08,19.08,0,0,0-3.2-.27.922.922,0,0,0,0,1.845,17.245,17.245,0,0,1,2.889.243.922.922,0,1,0,.31-1.818Z"
                                transform="translate(-245.801 -46.917)"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span class="visually-hidden">Play</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {lists.map((list) => {
              return (
                <div class="col-lg-6">
                  <div class="about__content" key={list._id}>
                    <span class="about__content--subtitle text__secondary mb-20">
                      {" "}
                      Why Choose us
                    </span>
                    <h2 class="about__content--maintitle mb-25">
                      {list.title}
                    </h2>
                    <p class="about__content--desc mb-20">{list.text}</p>
                    <p class="about__content--desc mb-25">
                      Itaque accusantium eveniet a laboriosam dolorem? Magni
                      suscipit est corrupti explicabo non perspiciatis,
                      excepturi ut asperiores assumenda rerum? Provident ab
                      corrupti sequi, voluptates repudiandae eius odit aut.
                    </p>
                    <div class="about__author position__relative">
                      <h4 class="about__author--name">Bruce Sutton</h4>
                      <span class="about__author--rank">Spa Manager</span>
                      <img
                        class="about__author--signature"
                        src="assets/img/icon/signature.webp"
                        alt="signature"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- End about section --> */}

      <Footerone />
    </div>
  );
}

export default About;

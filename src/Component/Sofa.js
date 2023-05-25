import { Link } from 'react-router-dom'
import React from 'react'
import Header from './Header'
import Footerone from './Footerone'

function Sofa() {
  return (
    <div>
        <Header/>
         {/* Start breadcrumb section */}
      <section className="breadcrumb__section breadcrumb__bg">
        <div className="container">
          <div className="row row-cols-1">
            <div className="col">
              <div className="breadcrumb__content">
                <h1 className="breadcrumb__content--title text-white mb-10">Shop Grid</h1>
                <ul className="breadcrumb__content--menu d-flex">
                  <li className="breadcrumb__content--menu__items"><Link className="text-white" to="/">Home</Link></li>
                  <li className="breadcrumb__content--menu__items"><span className="text-white">Shop Grid</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End breadcrumb section */}
       {/* Start shop section */}
       <section className="shop__section section--padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="shop__header bg__gray--color d-flex align-items-center justify-content-between mb-30">
                <button className="widget__filter--btn d-none d-md-flex align-items-center">
                  <svg className="widget__filter--btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={28} d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80" /><circle cx={336} cy={128} r={28} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={28} /><circle cx={176} cy={256} r={28} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={28} /><circle cx={336} cy={384} r={28} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={28} /></svg> 
                  <span className="widget__filter--btn__text">Filter</span>
                </button>
                <div className="product__view--mode d-flex align-items-center">
                  <div className="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
                    <label className="product__view--label">Prev Page :</label>
                    <div className="select shop__header--select">
                      <select className="product__view--select">
                        <option selected value={1}>65</option>
                        <option value={2}>40</option>
                        <option value={3}>42</option>
                        <option value={4}>57 </option>
                        <option value={5}>60 </option>
                      </select>
                    </div>
                  </div>
                  <div className="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
                    <label className="product__view--label">Sort By :</label>
                    <div className="select shop__header--select">
                      <select className="product__view--select">
                        <option selected value={1}>Sort by latest</option>
                        <option value={2}>Sort by popularity</option>
                        <option value={3}>Sort by newness</option>
                        <option value={4}>Sort by  rating </option>
                      </select>
                    </div>
                  </div>
                  <div className="product__view--mode__list">
                    <div className="product__grid--column__buttons d-flex justify-content-center">
                      <button className="product__grid--column__buttons--icons active" data-toggle="tab" aria-label="product grid btn" data-target="#product_grid">
                        <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 9 9">
                          <g transform="translate(-1360 -479)">
                            <rect id="Rectangle_5725" data-name="Rectangle 5725" width={4} height={4} transform="translate(1360 479)" fill="currentColor" />
                            <rect id="Rectangle_5727" data-name="Rectangle 5727" width={4} height={4} transform="translate(1360 484)" fill="currentColor" />
                            <rect id="Rectangle_5726" data-name="Rectangle 5726" width={4} height={4} transform="translate(1365 479)" fill="currentColor" />
                            <rect id="Rectangle_5728" data-name="Rectangle 5728" width={4} height={4} transform="translate(1365 484)" fill="currentColor" />
                          </g>
                        </svg>
                      </button>
                      {/* <button class="product__grid--column__buttons--icons active" data-toggle="tab" aria-label="product list btn" data-target="#product_grid">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 13 8">
                                                <g id="Group_14700" data-name="Group 14700" transform="translate(-1376 -478)">
                                                  <g  transform="translate(12 -2)">
                                                    <g id="Group_1326" data-name="Group 1326">
                                                      <rect id="Rectangle_5729" data-name="Rectangle 5729" width="3" height="2" transform="translate(1364 483)" fill="currentColor"/>
                                                      <rect id="Rectangle_5730" data-name="Rectangle 5730" width="9" height="2" transform="translate(1368 483)" fill="currentColor"/>
                                                    </g>
                                                    <g id="Group_1328" data-name="Group 1328" transform="translate(0 -3)">
                                                      <rect id="Rectangle_5729-2" data-name="Rectangle 5729" width="3" height="2" transform="translate(1364 483)" fill="currentColor"/>
                                                      <rect id="Rectangle_5730-2" data-name="Rectangle 5730" width="9" height="2" transform="translate(1368 483)" fill="currentColor"/>
                                                    </g>
                                                    <g id="Group_1327" data-name="Group 1327" transform="translate(0 -1)">
                                                      <rect id="Rectangle_5731" data-name="Rectangle 5731" width="3" height="2" transform="translate(1364 487)" fill="currentColor"/>
                                                      <rect id="Rectangle_5732" data-name="Rectangle 5732" width="9" height="2" transform="translate(1368 487)" fill="currentColor"/>
                                                    </g>
                                                  </g>
                                                </g>
                                              </svg>
                                        </button> */}
                    </div>
                  </div>
                </div>
                <p className="product__showing--count">Showing 1–9 of 21 results</p>
              </div>
              <div className="shop__product--wrapper">
                <div className="tab_content">
                  <div id="product_grid" className="tab_pane active show">
                    <div className="product__section--inner product__grid--inner">
                      <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product1.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product2.webp" alt="product-img" />
                              </Link>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="/wishlist">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Fashion Plastic Chair</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹150.00</span>
                                <span className="old__price">₹200.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product3.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product4.webp" alt="product-img" />
                              </Link>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Modern Swivel Chair</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹160.00</span>
                                <span className="old__price">₹210.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product5.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product6.webp" alt="product-img" />
                              </Link>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Design Living Sofa</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹155.00</span>
                                <span className="old__price">₹205.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product7.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product8.webp" alt="product-img" />
                              </Link>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Plastic Chair Wooden</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹190.00</span>
                                <span className="old__price">₹200.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product9.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product10.webp" alt="product-img" />
                              </Link>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Folding Tables Chairs</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹175.00</span>
                                <span className="old__price">₹190.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product11.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product12.webp" alt="product-img" />
                              </Link>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Modern Fabric Chair</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹165.00</span>
                                <span className="old__price">₹210.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product13.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product14.webp" alt="product-img" />
                              </Link>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Globe Electric Lamp</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹145.00</span>
                                <span className="old__price">₹185.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product15.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product1.webp" alt="product-img" />
                              </Link>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Fashion Plastic Chair</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹150.00</span>
                                <span className="old__price">₹200.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product14.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product2.webp" alt="product-img" />
                              </Link>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Design Rooms Sofa</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹155.00</span>
                                <span className="old__price">₹215.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product6.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product5.webp" alt="product-img" />
                              </Link>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Fashion Plastic Chair</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹150.00</span>
                                <span className="old__price">₹200.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product1.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product2.webp" alt="product-img" />
                              </Link>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Fashion Plastic Chair</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹150.00</span>
                                <span className="old__price">₹200.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product3.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product4.webp" alt="product-img" />
                              </Link>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Modern Swivel Chair</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹160.00</span>
                                <span className="old__price">₹210.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product5.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product6.webp" alt="product-img" />
                              </Link>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Design Living Sofa</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹155.00</span>
                                <span className="old__price">₹205.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product7.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product8.webp" alt="product-img" />
                              </Link>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Plastic Chair Wooden</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹190.00</span>
                                <span className="old__price">₹200.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product9.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product10.webp" alt="product-img" />
                              </Link>
                              <div className="product__badge">
                                <span className="product__badge--items sale">New</span>
                              </div>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Folding Tables Chairs</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹175.00</span>
                                <span className="old__price">₹190.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items ">
                            <div className="product__items--thumbnail">
                              <Link className="product__items--link" to="/product">
                                <img className="product__items--img product__primary--img" src="assets/img/product/product11.webp" alt="product-img" />
                                <img className="product__items--img product__secondary--img" src="assets/img/product/product12.webp" alt="product-img" />
                              </Link>
                              <ul className="product__items--action d-flex justify-content-center">
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" data-open="modal1" to="/shop">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={256} cy={256} r={80} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /></svg>
                                    <span className="visually-hidden">Quick View</span>
                                  </Link>
                                </li>
                                <li className="product__items--action__list">
                                  <Link className="product__items--action__btn" to="wishlist.html">
                                    <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="17.51" height="15.443" viewBox="0 0 24.526 21.82">
                                      <path d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0" transform="translate(0 0)" fill="currentColor" />
                                    </svg>
                                    <span className="visually-hidden">Wishlist</span>
                                  </Link>
                                </li>
                                {/* */}
                              </ul>
                            </div>
                            <div className="product__items--content text-center">
                              {/* */}
                              <h3 className="product__items--content__title h4"><Link to="/product">Modern Fabric Chair</Link></h3>
                              <div className="product__items--price">
                                <span className="current__price">₹165.00</span>
                                <span className="old__price">₹210.00</span>
                              </div>
                              <Link className="product__items--action__cart--btn primary__btn" to="/cart">
                                <svg className="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                  <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                </svg>
                                <span className="add__to--cart__text"> Add to cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="product_list" className="tab_pane">
                    <div className="product__section--inner">
                      <div className="row row-cols-1 mb--n30">
                        <div className="col mb-30">
                          <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                            <div className="product__list--items__left d-flex align-items-center">
                              <div className="product__items--thumbnail product__list--items__thumbnail">
                                <Link className="product__items--link" to="/product">
                                  <img className="product__items--img product__primary--img" src="assets/img/product/product11.webp" alt="product-img" />
                                  <img className="product__items--img product__secondary--img" src="assets/img/product/product10.webp" alt="product-img" />
                                </Link>
                                <div className="product__badge">
                                  <span className="product__badge--items sale">Sale</span>
                                </div>
                              </div>
                              <div className="product__list--items__content">
                                <span className="product__items--content__subtitle mb-5">Wooden</span>
                                <h4 className="product__list--items__content--title mb-15"><Link to="/product">Larger Minimal Wooden Chair</Link></h4>
                                <p className="product__list--items__content--desc m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi.</p>
                              </div>
                            </div>
                            <div className="product__list--items__right">
                              <span className="product__list--current__price">₹299.00</span>
                              <ul className="rating product__list--rating d-flex">
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list"><span className="rating__list--text">( 5.0)</span></li>
                              </ul>
                              <div className="product__list--action">
                                <Link className="product__list--action__cart--btn primary__btn" to="/cart">
                                  <svg className="product__list--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="16.897" height="17.565" viewBox="0 0 18.897 21.565">
                                    <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                  </svg>
                                  <span className="product__list--action__cart--text"> Add To Cart</span>
                                </Link>
                                <ul className="product__list--action__wrapper d-flex align-items-center">
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" data-open="modal1" to="/shop">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                                      <span className="visually-hidden">Quick View</span>
                                    </Link>
                                  </li>
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" to="wishlist.html">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24.403" height="20.204" viewBox="0 0 24.403 20.204">
                                        <g transform="translate(0)">
                                          <g data-name="Group 473" transform="translate(0 0)">
                                            <path data-name="Path 242" d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z" transform="translate(0 -35.514)" fill="currentColor" />
                                          </g>
                                        </g>
                                      </svg>
                                      <span className="visually-hidden">Wishlist</span>
                                    </Link>
                                  </li>
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" to="compare.html">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.654" height="18.388" viewBox="0 0 25.654 18.388">
                                        <path data-name="Path 287" d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z" transform="translate(0 -72.508)" fill="currentColor" />
                                      </svg>
                                      <span className="visually-hidden">Compare</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                            <div className="product__list--items__left d-flex align-items-center">
                              <div className="product__items--thumbnail product__list--items__thumbnail">
                                <Link className="product__items--link" to="/product">
                                  <img className="product__items--img product__primary--img" src="assets/img/product/product1.webp" alt="product-img" />
                                  <img className="product__items--img product__secondary--img" src="assets/img/product/product2.webp" alt="product-img" />
                                </Link>
                              </div>
                              <div className="product__list--items__content">
                                <span className="product__items--content__subtitle mb-5">Modern</span>
                                <h4 className="product__list--items__content--title mb-15"><Link to="/product">White Minimalist Combo Sofa</Link></h4>
                                <p className="product__list--items__content--desc m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi.</p>
                              </div>
                            </div>
                            <div className="product__list--items__right">
                              <span className="product__list--current__price">₹320.00</span>
                              <ul className="rating product__list--rating d-flex">
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list"><span className="rating__list--text">( 5.0)</span></li>
                              </ul>
                              <div className="product__list--action">
                                <Link className="product__list--action__cart--btn primary__btn" to="/cart">
                                  <svg className="product__list--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="16.897" height="17.565" viewBox="0 0 18.897 21.565">
                                    <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                  </svg>
                                  <span className="product__list--action__cart--text"> Add To Cart</span>
                                </Link>
                                <ul className="product__list--action__wrapper d-flex align-items-center">
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" data-open="modal1" to="/shop">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                                      <span className="visually-hidden">Quick View</span>
                                    </Link>
                                  </li>
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" to="wishlist.html">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24.403" height="20.204" viewBox="0 0 24.403 20.204">
                                        <g transform="translate(0)">
                                          <g data-name="Group 473" transform="translate(0 0)">
                                            <path data-name="Path 242" d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z" transform="translate(0 -35.514)" fill="currentColor" />
                                          </g>
                                        </g>
                                      </svg>
                                      <span className="visually-hidden">Wishlist</span>
                                    </Link>
                                  </li>
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" to="compare.html">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.654" height="18.388" viewBox="0 0 25.654 18.388">
                                        <path data-name="Path 287" d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z" transform="translate(0 -72.508)" fill="currentColor" />
                                      </svg>
                                      <span className="visually-hidden">Compare</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                            <div className="product__list--items__left d-flex align-items-center">
                              <div className="product__items--thumbnail product__list--items__thumbnail">
                                <Link className="product__items--link" to="/product">
                                  <img className="product__items--img product__primary--img" src="assets/img/product/product3.webp" alt="product-img" />
                                  <img className="product__items--img product__secondary--img" src="assets/img/product/product4.webp" alt="product-img" />
                                </Link>
                                <div className="product__badge">
                                  <span className="product__badge--items sale">Sale</span>
                                </div>
                              </div>
                              <div className="product__list--items__content">
                                <span className="product__items--content__subtitle mb-5">Chair</span>
                                <h4 className="product__list--items__content--title mb-15"><Link to="/product">Modern Swivel Chair</Link></h4>
                                <p className="product__list--items__content--desc m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi.</p>
                              </div>
                            </div>
                            <div className="product__list--items__right">
                              <span className="product__list--current__price">₹280.00</span>
                              <ul className="rating product__list--rating d-flex">
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list"><span className="rating__list--text">( 5.0)</span></li>
                              </ul>
                              <div className="product__list--action">
                                <Link className="product__list--action__cart--btn primary__btn" to="/cart">
                                  <svg className="product__list--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="16.897" height="17.565" viewBox="0 0 18.897 21.565">
                                    <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                  </svg>
                                  <span className="product__list--action__cart--text"> Add To Cart</span>
                                </Link>
                                <ul className="product__list--action__wrapper d-flex align-items-center">
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" data-open="modal1" to="/shop">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                                      <span className="visually-hidden">Quick View</span>
                                    </Link>
                                  </li>
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" to="wishlist.html">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24.403" height="20.204" viewBox="0 0 24.403 20.204">
                                        <g transform="translate(0)">
                                          <g data-name="Group 473" transform="translate(0 0)">
                                            <path data-name="Path 242" d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z" transform="translate(0 -35.514)" fill="currentColor" />
                                          </g>
                                        </g>
                                      </svg>
                                      <span className="visually-hidden">Wishlist</span>
                                    </Link>
                                  </li>
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" to="compare.html">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.654" height="18.388" viewBox="0 0 25.654 18.388">
                                        <path data-name="Path 287" d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z" transform="translate(0 -72.508)" fill="currentColor" />
                                      </svg>
                                      <span className="visually-hidden">Compare</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                            <div className="product__list--items__left d-flex align-items-center">
                              <div className="product__items--thumbnail product__list--items__thumbnail">
                                <Link className="product__items--link" to="/product">
                                  <img className="product__items--img product__primary--img" src="assets/img/product/product5.webp" alt="product-img" />
                                  <img className="product__items--img product__secondary--img" src="assets/img/product/product6.webp" alt="product-img" />
                                </Link>
                              </div>
                              <div className="product__list--items__content">
                                <span className="product__items--content__subtitle mb-5">Wooden</span>
                                <h4 className="product__list--items__content--title mb-15"><Link to="/product">Modern Stylish Single Sofa</Link></h4>   
                                <p className="product__list--items__content--desc m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi.</p>
                              </div>
                            </div>
                            <div className="product__list--items__right">
                              <span className="product__list--current__price">₹255.00</span>
                              <ul className="rating product__list--rating d-flex">
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list"><span className="rating__list--text">( 5.0)</span></li>
                              </ul>
                              <div className="product__list--action">
                                <Link className="product__list--action__cart--btn primary__btn" to="/cart">
                                  <svg className="product__list--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="16.897" height="17.565" viewBox="0 0 18.897 21.565">
                                    <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                  </svg>
                                  <span className="product__list--action__cart--text"> Add To Cart</span>
                                </Link>
                                <ul className="product__list--action__wrapper d-flex align-items-center">
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" data-open="modal1" to="/shop">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                                      <span className="visually-hidden">Quick View</span>
                                    </Link>
                                  </li>
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" to="wishlist.html">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24.403" height="20.204" viewBox="0 0 24.403 20.204">
                                        <g transform="translate(0)">
                                          <g data-name="Group 473" transform="translate(0 0)">
                                            <path data-name="Path 242" d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z" transform="translate(0 -35.514)" fill="currentColor" />
                                          </g>
                                        </g>
                                      </svg>
                                      <span className="visually-hidden">Wishlist</span>
                                    </Link>
                                  </li>
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" to="compare.html">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.654" height="18.388" viewBox="0 0 25.654 18.388">
                                        <path data-name="Path 287" d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z" transform="translate(0 -72.508)" fill="currentColor" />
                                      </svg>
                                      <span className="visually-hidden">Compare</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                            <div className="product__list--items__left d-flex align-items-center">
                              <div className="product__items--thumbnail product__list--items__thumbnail">
                                <Link className="product__items--link" to="/product">
                                  <img className="product__items--img product__primary--img" src="assets/img/product/product7.webp" alt="product-img" />
                                  <img className="product__items--img product__secondary--img" src="assets/img/product/product8.webp" alt="product-img" />
                                </Link>
                                <div className="product__badge">
                                  <span className="product__badge--items sale">Sale</span>
                                </div>
                              </div>
                              <div className="product__list--items__content">
                                <span className="product__items--content__subtitle mb-5">Plastic</span>
                                <h4 className="product__list--items__content--title mb-15"><Link to="/product">New Furniture Tree Planet</Link></h4>   
                                <p className="product__list--items__content--desc m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi.</p>
                              </div>
                            </div>
                            <div className="product__list--items__right">
                              <span className="product__list--current__price">₹275.00</span>
                              <ul className="rating product__list--rating d-flex">
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list"><span className="rating__list--text">( 5.0)</span></li>
                              </ul>
                              <div className="product__list--action">
                                <Link className="product__list--action__cart--btn primary__btn" to="/cart">
                                  <svg className="product__list--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="16.897" height="17.565" viewBox="0 0 18.897 21.565">
                                    <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                  </svg>
                                  <span className="product__list--action__cart--text"> Add To Cart</span>
                                </Link>
                                <ul className="product__list--action__wrapper d-flex align-items-center">
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" data-open="modal1" to="/shop">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                                      <span className="visually-hidden">Quick View</span>
                                    </Link>
                                  </li>
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" to="wishlist.html">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24.403" height="20.204" viewBox="0 0 24.403 20.204">
                                        <g transform="translate(0)">
                                          <g data-name="Group 473" transform="translate(0 0)">
                                            <path data-name="Path 242" d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z" transform="translate(0 -35.514)" fill="currentColor" />
                                          </g>
                                        </g>
                                      </svg>
                                      <span className="visually-hidden">Wishlist</span>
                                    </Link>
                                  </li>
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" to="compare.html">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.654" height="18.388" viewBox="0 0 25.654 18.388">
                                        <path data-name="Path 287" d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z" transform="translate(0 -72.508)" fill="currentColor" />
                                      </svg>
                                      <span className="visually-hidden">Compare</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col mb-30">
                          <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                            <div className="product__list--items__left d-flex align-items-center">
                              <div className="product__items--thumbnail product__list--items__thumbnail">
                                <Link className="product__items--link" to="/product">
                                  <img className="product__items--img product__primary--img" src="assets/img/product/product9.webp" alt="product-img" />
                                  <img className="product__items--img product__secondary--img" src="assets/img/product/product10.webp" alt="product-img" />
                                </Link>
                              </div>
                              <div className="product__list--items__content">
                                <span className="product__items--content__subtitle mb-5">Wooden</span>
                                <h4 className="product__list--items__content--title mb-15"><Link to="/product">Single Stylish Mini Chair</Link></h4>
                                <p className="product__list--items__content--desc m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas dolore doloribus architecto sequi corporis deleniti officia culpa dolor esse consectetur eligendi.</p>
                              </div>
                            </div>
                            <div className="product__list--items__right">
                              <span className="product__list--current__price">₹310.00</span>
                              <ul className="rating product__list--rating d-flex">
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105" height="11.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                    </svg>
                                  </span>
                                </li>
                                <li className="rating__list"><span className="rating__list--text">( 5.0)</span></li>
                              </ul>
                              <div className="product__list--action">
                                <Link className="product__list--action__cart--btn primary__btn" to="/cart">
                                  <svg className="product__list--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="16.897" height="17.565" viewBox="0 0 18.897 21.565">
                                    <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor" />
                                  </svg>
                                  <span className="product__list--action__cart--text"> Add To Cart</span>
                                </Link>
                                <ul className="product__list--action__wrapper d-flex align-items-center">
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" data-open="modal1" to="/shop">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" /></svg>
                                      <span className="visually-hidden">Quick View</span>
                                    </Link>
                                  </li>
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" to="wishlist.html">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24.403" height="20.204" viewBox="0 0 24.403 20.204">
                                        <g transform="translate(0)">
                                          <g data-name="Group 473" transform="translate(0 0)">
                                            <path data-name="Path 242" d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z" transform="translate(0 -35.514)" fill="currentColor" />
                                          </g>
                                        </g>
                                      </svg>
                                      <span className="visually-hidden">Wishlist</span>
                                    </Link>
                                  </li>
                                  <li className="product__list--action__child">
                                    <Link className="product__list--action__btn" to="compare.html">
                                      <svg className="product__list--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.654" height="18.388" viewBox="0 0 25.654 18.388">
                                        <path data-name="Path 287" d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z" transform="translate(0 -72.508)" fill="currentColor" />
                                      </svg>
                                      <span className="visually-hidden">Compare</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination__area bg__gray--color">
                  <nav className="pagination">
                    <ul className="pagination__wrapper d-flex align-items-center justify-content-center">
                      <li className="pagination__list"><Link to="/shop" className="pagination__item--arrow  link ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M244 400L100 256l144-144M120 256h292" /></svg></Link>
                      </li><li>
                      </li><li className="pagination__list"><span className="pagination__item pagination__item--current">1</span></li>
                      <li className="pagination__list"><Link to="/shop" className="pagination__item link">2</Link></li>
                      <li className="pagination__list"><Link to="/shop" className="pagination__item link">3</Link></li>
                      <li className="pagination__list"><Link to="/shop" className="pagination__item link">4</Link></li>
                      <li className="pagination__list"><Link to="/shop" className="pagination__item--arrow  link ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M268 112l144 144-144 144M392 256H100" /></svg></Link>
                      </li><li>
                      </li></ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End shop section */}
      <Footerone/>
    </div>
  )
}

export default Sofa

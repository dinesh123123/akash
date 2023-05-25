import { Link } from 'react-router-dom'
import React from 'react'
import Footerone from './Footerone'
import Headerone from './Headerone'

function Compare() {
  return (
    <div>
<Headerone/>
        <main className="main__content_wrapper">
        {/* Start breadcrumb section */}
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content">
                  <h1 className="breadcrumb__content--title text-white mb-10">Compare</h1>
                  <ul className="breadcrumb__content--menu d-flex">
                    <li className="breadcrumb__content--menu__items"><Link className="text-white" to="/">Home</Link></li>
                    <li className="breadcrumb__content--menu__items"><span className="text-white">Compare</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End breadcrumb section */}
        {/* Start Compare section */}
        <section className="compare__section section--padding">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="section__heading text-center mb-40">
                  <h2 className="compare__heading--maintitle">COMPARE PRODUCT PAGE STYLE</h2>
                </div>
                <div className="compare__section--inner table-responsive">
                  <table className="compare__table">
                    <thead className="compare__table--header">
                      <tr className="compare__table--items">
                        <td className="compare__table--items__child">
                          <button type="button" aria-label="compare remove btn" className="compare__remove">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
                          </button>
                          <h4 className="compare__product--title">Cotton Dress</h4>
                          <img className="compare__product--thumbnail" src="assets/img/product/product1.webp" alt="compare-image" />
                        </td>
                        <td className="compare__table--items__child">
                          <button type="button" aria-label="compare remove btn" className="compare__remove">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
                          </button>
                          <h4 className="compare__product--title">Edna Dress</h4>
                          <img className="compare__product--thumbnail" src="assets/img/product/product2.webp" alt="compare-image" />
                        </td>
                        <td className="compare__table--items__child">
                          <button type="button" aria-label="compare remove btn" className="compare__remove">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
                          </button>
                          <h4 className="compare__product--title">Edna Dress</h4>
                          <img className="compare__product--thumbnail" src="assets/img/product/product3.webp" alt="compare-image" />
                        </td>
                        <td className="compare__table--items__child">
                          <button type="button" aria-label="compare remove btn" className="compare__remove">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
                          </button>
                          <h4 className="compare__product--title">Edna Dress</h4>
                          <img className="compare__product--thumbnail" src="assets/img/product/product4.webp" alt="compare-image" />
                        </td>
                        <td className="compare__table--items__child">
                          <button type="button" aria-label="compare remove btn" className="compare__remove">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
                          </button>
                          <h4 className="compare__product--title">Edna Dress</h4>
                          <img className="compare__product--thumbnail" src="assets/img/product/product5.webp" alt="compare-image" />
                        </td>
                      </tr>
                    </thead>
                    <tbody className="compare__table--body">
                      <tr className="compare__table--items">
                        <td className="compare__table--items__child">
                          <span className="compare__product--price">₹89,00</span>
                        </td>
                        <td className="compare__table--items__child">
                          <span className="compare__product--price">₹89,00</span>
                        </td>
                        <td className="compare__table--items__child">
                          <span className="compare__product--price">₹89,00</span>
                        </td>
                        <td className="compare__table--items__child">
                          <span className="compare__product--price">₹89,00</span>
                        </td>
                        <td className="compare__table--items__child">
                          <span className="compare__product--price">₹89,00</span>
                        </td>
                      </tr>
                      <tr className="compare__table--items">
                        <th className="compare__table--items__child--header">Product Description</th>
                        <th className="compare__table--items__child--header">Product Description</th>
                        <th className="compare__table--items__child--header">Product Description</th>
                        <th className="compare__table--items__child--header">Product Description</th>
                        <th className="compare__table--items__child--header">Product Description</th>
                      </tr>
                      <tr className="compare__table--items">
                        <td className="compare__table--items__child">
                          <p className="compare__description">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil.</p>
                        </td>
                        <td className="compare__table--items__child">
                          <p className="compare__description">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil.</p>
                        </td>
                        <td className="compare__table--items__child">
                          <p className="compare__description">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil.</p>
                        </td>
                        <td className="compare__table--items__child">
                          <p className="compare__description">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil.</p>
                        </td>
                        <td className="compare__table--items__child">
                          <p className="compare__description">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil.</p>
                        </td>
                      </tr>
                      <tr className="compare__table--items">
                        <th className="compare__table--items__child--header">Availability</th>
                        <th className="compare__table--items__child--header">Availability</th>
                        <th className="compare__table--items__child--header">Availability</th>
                        <th className="compare__table--items__child--header">Availability</th>
                        <th className="compare__table--items__child--header">Availability</th>
                      </tr>
                      <tr className="compare__table--items">
                        <td className="compare__table--items__child">
                          <p className="compare__instock text__secondary">In stock</p>
                        </td>
                        <td className="compare__table--items__child">
                          <p className="compare__instock text__secondary">In stock</p>
                        </td>
                        <td className="compare__table--items__child">
                          <p className="compare__instock text__secondary">In stock</p>
                        </td>
                        <td className="compare__table--items__child">
                          <p className="compare__instock text__secondary">In stock</p>
                        </td>
                        <td className="compare__table--items__child">
                          <p className="compare__instock text__secondary">In stock</p>
                        </td>
                      </tr>
                      <tr className="compare__table--items">
                        <td className="compare__table--items__child text-center">
                          <Link className="compare__cart--btn primary__btn" to="/cart">Add to Cart</Link>
                        </td>
                        <td className="compare__table--items__child text-center">
                          <Link className="compare__cart--btn primary__btn" to="/cart">Add to Cart</Link>
                        </td>
                        <td className="compare__table--items__child text-center">
                          <Link className="compare__cart--btn primary__btn" to="/cart">Add to Cart</Link>
                        </td>
                        <td className="compare__table--items__child text-center">
                          <Link className="compare__cart--btn primary__btn" to="/cart">Add to Cart</Link>
                        </td>
                        <td className="compare__table--items__child text-center">
                          <Link className="compare__cart--btn primary__btn" to="/cart">Add to Cart</Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Compare section */}
        {/* Start Newsletter banner section */}
        {/* <section class="newsletter__banner--section section--padding pt-0">
            <div class="container">
                <div class="newsletter__banner--thumbnail position__relative">
                    <img class="newsletter__banner--thumbnail__img" src="assets/img/banner/banner-bg7.webp" alt="newsletter-banner">
                    <div class="newsletter__content newsletter__subscribe">
                        <h5 class="newsletter__content--subtitle text-white">Want to offer regularly ?</h5>
                        <h2 class="newsletter__content--title text-white h3 mb-25">Subscribe Our Newsletter <br>
                            for Get Daily Update</h2>
                        <form class="newsletter__subscribe--form position__relative" action="#">
                            <label>
                                <input class="newsletter__subscribe--input" placeholder="Enter your email address" type="email">
                            </label>
                            <button class="newsletter__subscribe--button primary__btn" type="submit">Subscribe
                                <svg class="newsletter__subscribe--button__icon" xmlns="http://www.w3.org/2000/svg" width="9.159" height="7.85" viewBox="0 0 9.159 7.85">
                                    <path  data-name="Icon material-send" d="M3,12.35l9.154-3.925L3,4.5,3,7.553l6.542.872L3,9.3Z" transform="translate(-3 -4.5)" fill="currentColor"/>
                                </svg>
                            </button>
                        </form>   
                    </div>
                </div>
            </div>
        </section> */}
        {/* End Newsletter banner section */}
      </main>
<Footerone/>      
    </div>
  )
}

export default Compare

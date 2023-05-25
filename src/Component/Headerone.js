import React from 'react'
import { Link } from 'react-router-dom';
import About from './About';
function Headerone() {
    

    const removeToken = () => {
        localStorage.removeItem('_id');
             localStorage.removeItem('name')
            localStorage.removeItem('email')	  
            localStorage.removeItem('password')
            localStorage.removeItem('phone')
            localStorage.removeItem('role')
            //  localStorage.removeItem('info')
    };


  return (
    
      <div className="header__section header__section3 header__transparent mb-20 color-scheme-3">
        <div className="header__topbar border-bottom">
            <div className="container">
                <div className="header__topbar--inner header__topbar--inner2 d-flex align-items-center justify-content-between">

                    
                     
                   
                </div>
            </div>
        </div>
        <div className="main__header main__header--style3 header__sticky">
            <div className="container">
                <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
                    <div className="offcanvas__header--menu__open ">
                        <Link className="offcanvas__header--menu__open--btn" to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
                            <span className="visually-hidden">Offcanvas Menu Open</span>
                        </Link>
                    </div>
                    <div className="main__logo">
        <Link className="main__logo--link" to="/"><img className="main__logo--img" src="assets/img/logo/nav-log.webp" alt="logo-img" /></Link>
      </div>
                    <div className="header__menu d-none d-lg-block">
                        <nav className="header__menu--navigation style3">
                            <ul className="d-flex justify-content-center">
                                <li className="header__menu--items style3">
                                    <Link className="header__menu--link style3" to="/home">Home <span className="menu__plus--icon">+</span></Link>
                                    
                                </li>
                                <li className="header__menu--items mega__menu--items style3">
                                <Link className="header__menu--link style3" to="/shop">Shop <span className="menu__plus--icon">+</span></Link>
                        <ul className="header__mega--menu d-flex">
                          <li className="header__mega--menu__li">
                            {/* <span class="header__mega--subtitle">Column One</span> */}
                            <ul className="header__mega--sub__menu">
                              <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/chair">Chairs</Link></li>
                              <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/bedseat">Bedstead</Link></li>
                              <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/sofa">Sofa</Link></li>
                              
                            </ul>
                          </li>
                          <li className="header__mega--menu__li">
                           
                            <ul className="header__mega--sub__menu">
                              <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/product">Tv Cabinet</Link></li>
                              <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/shoprightsidebar">Smart Fit</Link></li>
                              <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/door">Door</Link></li>
                              
                            </ul>
                          </li>
                          <li className="header__mega--menu__li">
                            
                            <ul className="header__mega--sub__menu">
                              <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/table">Table</Link></li>
                              <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/product">Wardrobe</Link></li>
                              <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/officechair">Office Chair</Link></li>
                              
                            </ul>
                          </li> 
                          <li className="header__mega--menu__li">
                            {/* <span class="header__mega--subtitle">Column Four</span> */}
                            <ul className="header__mega--sub__menu">
                              <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/dressingtable">Dressing Table</Link></li>
                              <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/product">Miscellaneous</Link></li>
                              <li className="header__mega--sub__menu_li"><Link className="header__mega--sub__menu--title" to="/product">Kitchen</Link></li>
                              
                            </ul> 
                          </li>
                        </ul>
                      </li>
                      <li className="header__menu--items style3">
                        <Link className="header__menu--link style3" to="/about">About US </Link>  
                      </li>
                     
                      <li className="header__menu--items style3">
                        <Link className="header__menu--link style3" to="/contact">Contact </Link>  
                      </li>
                      <li className="header__menu--items style3">
                        <Link className="header__menu--link style3" to="/myaccount">Myaccount </Link>  
                      </li>

                      {/* <li className="header__menu--items style3">
                        <Link className="header__menu--link style3" to="/register">Register </Link>  
                      </li>
                      <li className="header__menu--items style3">
                        <Link className="header__menu--link style3" to="/login">Login </Link>  
                      </li> */}

                    </ul>
                  </nav>
                </div>
                <div className="header__account">
                  <ul className="d-flex">
                   
                    <li className="header__account--items  header__account--search__items">
                      <Link className="header__account--btn search__open--btn" href="javascript:void(0)">
                        
                        <span className="visually-hidden">Search</span>
                      </Link>
                    </li>
                    <li className="header__account--items">
                                {/* <Link className="header__account--btn minicart__open--btn" to="/cart">Home
                                    
                                   
                                </Link> */}
                            </li>
                   
                            <li className="header__account--items">
                                <Link className="header__account--btn minicart__open--btn" to="/cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.897" height="21.565" viewBox="0 0 18.897 21.565">
                                        <path  d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor"/>
                                    </svg>
                                    <span className="items__count">02</span> 
                                </Link>
                            </li>
                            <li class="header__account--items">
                                <Link class="choiceus__info--btn primary__btn btn__style3" onClick={removeToken} style={{fontSize:'9px'}} to="/">LOGOUT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Start Offcanvas header menu --> */}
        <div className="offcanvas-header color-scheme-3" tabindex="-1">
            <div className="offcanvas__inner">
                <div className="offcanvas__logo">
                    <Link className="offcanvas__logo_link" to="/home">
                        <img src="assets/img/logo/nav-log3.webp" alt="Furea Logo"/>
                    </Link>
                    <button className="offcanvas__close--btn" aria-label="offcanvas close btn">close</button>
                </div>
                <nav className="offcanvas__menu">
                    <ul className="offcanvas__menu_ul">
                        <li className="offcanvas__menu_li">
                            <a className="offcanvas__menu_item" to="/home">Home</a>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li"><a href="index.html" className="offcanvas__sub_menu_item">Home One</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="index-2.html" className="offcanvas__sub_menu_item">Home Two</a></li>
                                <li className="offcanvas__sub_menu_li"><a href="index-3.html" className="offcanvas__sub_menu_item">Home Three</a></li>
                            </ul>
                        </li>
                        <li className="offcanvas__menu_li">
                            <Link className="offcanvas__menu_item" to="/
                            p">Shop</Link>
                            <ul className="offcanvas__sub_menu">
                                <li className="offcanvas__sub_menu_li">
                                    <a href="#" className="offcanvas__sub_menu_item">Column One</a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Shop Left Sidebar</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Shop Right Sidebar</Link></li>
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Shop Grid</Link></li>
                                        {/* <li className="offcanvas__sub_menu_li">Link  className="offcanvas__sub_menu_item" to="/shop">Shop Grid List</Link></li> */}
                                        <li className="offcanvas__sub_menu_li"><Link className="offcanvas__sub_menu_item" to="/shop">Shop List</Link></li>
                                    </ul>
                                </li>
                                <li className="offcanvas__sub_menu_li">
                                    <a href="#" className="offcanvas__sub_menu_item">Column Two</a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-details.html">Standard Product</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-variable.html">Video Product</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-variable.html">Variable Product</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-left-sidebar.html">Product Left Sidebar</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-gallery.html">Product Gallery</a></li>
                                    </ul>
                                </li>
                                <li className="offcanvas__sub_menu_li">
                                    <a href="#" className="offcanvas__sub_menu_item">Column Three</a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="my-account.html">My Account</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="my-account-2.html">My Account 2</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="404.html">404 Page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="login.html">Login Page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="faq.html">Faq Page</a></li>
                                    </ul>
                                </li>
                                <li className="offcanvas__sub_menu_li">
                                    <a href="#" className="offcanvas__sub_menu_item">Column Four</a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="compare.html">Compare Pages</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="cart.html">Cart Page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="checkout.html">Checkout page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="wishlist.html">Wishlist Page</a></li>
                                        <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="404.html">Error Page</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="offcanvas__menu_li"><Link className="offcanvas__menu_item" to='/about'>About</Link></li>
                        <li className="offcanvas__menu_li"><Link className="offcanvas__menu_item" to="/contact">Contact</Link></li>
                    </ul>
                    <div className="offcanvas__account--items">
                        <Link className="offcanvas__account--items__btn d-flex align-items-center" to="/login">
                        <span className="offcanvas__account--items__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg> 
                            </span>
                        <span className="offcanvas__account--items__label">Login / Register</span>
                        </Link>
                    </div>
                    <div className="language__currency">
                        <ul className="d-flex align-items-center">
                            <li className="language__currency--list">
                                <a className="offcanvas__language--switcher" href="#">
                                    <img className="language__switcher--icon__img" src="assets/img/icon/language-icon.webp" alt="currency"/>
                                    <span>English</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.797" height="9.05" viewBox="0 0 9.797 6.05">
                                        <path  d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                    </svg>
                                </a>
                                <div className="offcanvas__dropdown--language">
                                    <ul>
                                        <li className="language__items"><a className="language__text" href="#">France</a></li>
                                        <li className="language__items"><a className="language__text" href="#">Russia</a></li>
                                        <li className="language__items"><a className="language__text" href="#">Spanish</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="language__currency--list">
                                <a className="offcanvas__account--currency__menu" href="#">
                                    <img src="assets/img/icon/usd-icon.webp" alt="currency"/>
                                    <span>₹ US Dollar</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.797" height="9.05" viewBox="0 0 9.797 6.05">
                                        <path  d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7"/>
                                    </svg>
                                </a>
                                <div className="offcanvas__account--currency__submenu">
                                    <ul>
                                        <li className="currency__items"><a className="currency__text" href="#">CAD</a></li>
                                        <li className="currency__items"><a className="currency__text" href="#">CNY</a></li>
                                        <li className="currency__items"><a className="currency__text" href="#">EUR</a></li>
                                        <li className="currency__items"><a className="currency__text" href="#">GBP</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        
    </div>
    
  );
}

export default Headerone;


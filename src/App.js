import Shop1 from './Component/Shop1'
import Table from './Component/Table';
import Bedseat from './Component/Bedseat';
import { Route, Routes } from 'react-router-dom';
import Shop from './Component/Shop'
import Header from './Component/Header';
import Footer from './Component/Footer';
import About from './Component/About';
//import Blogdetails from './Component/Blogdetails';
import Login from './Component/Login';
import Contact from './Component/Contact';
import Cart from './Component/Cart';
import Portfolio from './Component/Portfolio';
import Wishlist from './Component/Wishlist';
import Error from './Component/Error';
// import Shop from './Component/Shop';
import Home from './Component/Home';
import Checkout from './Component/Checkout';
import Myaccount from './Component/Myaccount';
import Transactions from './Component/Transactions';
import Profile from './Component/Profile';
import Referral from './Component/Referral';
import Setting from './Component/Setting';
import Myaccount2 from './Component/Myaccount2';
import Working from './Component/Working';
import Product from './Component/Product';
import Topnewf from './Component/Topnewf';
import Compare from './Component/Compare';
import Shoprightsidebar from './Component/Shoprightsidebar';
import Chair from './Component/Chair';
import Sofa from './Component/Sofa';
import Door from './Component/Door';
import Officechair from './Component/Officechair';
import Dressingtable from './Component/Dressingtable';
import Register from './Component/Register';
import Forgotpassword from './Component/Forgotpassword';
import Privacy from './Component/Privacy';
import Termcondition from './Component/Termcondition';
import Faq from './Component/Faq';
import Offer from './Component/Offer';
import City from './Component/City';
import Topnewf1 from './Component/Topnewf1';




function App() {
  return (
    <div className="App">
      
<Routes>

  <Route path='/' element={<Home/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/shop' element={<Shop/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/checkout' element={<Checkout/>}></Route>
<Route path='/myaccount' element={<Myaccount/>}></Route>
<Route path='/transactions' element={<Transactions/>}></Route>
<Route path='/profile' element={<Profile/>}></Route>
<Route path='/referral' element={<Referral/>}></Route>
<Route path='/wishlist' element={<Wishlist/>}></Route>
<Route path='/setting' element={<Setting/>}></Route>
<Route path='/myaccount2' element={<Myaccount2/>}></Route>
<Route path='/profile' element={<Profile/>}></Route>
<Route path='/working' element={<Working/>}></Route>
<Route path='/product' element={<Product/>}></Route>
<Route path='/topnewf' element={<Topnewf/>}></Route>
<Route path='/compare' element={<Compare/>}></Route>
<Route path='/shoprightsidebar' element={<Shoprightsidebar/>}></Route>
<Route path='/chair' element={<Chair/>}></Route>
<Route path='/bedseat' element={<Bedseat/>}></Route>
<Route path='/sofa' element={<Sofa/>}></Route>
<Route path='/door' element={<Door/>}></Route>
<Route path='/table' element={<Table/>}></Route>
<Route path='/officechair' element={<Officechair/>}></Route>
<Route path='/dressingtable' element={<Dressingtable/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/forgotpassword' element={<Forgotpassword/>}></Route>
<Route path='/privacy' element={<Privacy/>}></Route>
<Route path='/termcondition' element={<Termcondition/>}> </Route>
<Route path='/faq' element={<Faq/>}> </Route>
<Route path='/offer' element={<Offer/>}></Route>
<Route path='/city' element={<City/>}></Route>
<Route path='/topnewf1' element={<Topnewf1/>}></Route>
<Route path='/shop1' element={<Shop1/>}></Route>



</Routes>


      {/* <Shop/> */}
      {/* <About/>
      <Contact/>
      <Error/>
      <Wishlist/>
      <Portfolio/>
      <Cart/> */}
      {/* <Blogdetails/> */}
      {/* <Login/>
      <Footer/> */}
    
    
    </div>
    
  );
}

// const express = require('express')
// const app = express()

//  var cors = require('cors')

// app.use(cors()) // Use this after the variable declaration


export default App;

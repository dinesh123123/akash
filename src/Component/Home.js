import React from 'react'

import Footer from './Footer'
import Header from './Header'
import Slider from './Slider'
import Whatsay from './Whatsay'
import Topnewf from './Topnewf'
import Browsepopular from './Browsepopular'
import Whyyouchoice from './Whyyouchoice'
import Topnewf1 from './Topnewf1'
function Home() {
  return (
    <div>
      <Header/>
<Slider/>
<Browsepopular/>
<Topnewf1/>
    <Topnewf/> 
<Whyyouchoice/>
    <Whatsay/>
    <Footer/>
    </div>
  )
}

export default Home

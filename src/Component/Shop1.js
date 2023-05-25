import { useEffect , useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Shop1() {

  const [lists, setLists]=useState([]);
  useEffect(()=>{
      getHomeData();
    },[]);
    const getHomeData = async () => {
      const id=localStorage.getItem('sub_id')
      //console.log("this is id 64310b0e7fa73143ba40b1f0  ",id)
      //console.log("64316b285896052b23a569f3")
      const options ={
          headers: {
              "content-type" : "application/json; charset=utf-8",
              "Access-Control-Allow-Origin" : '*'
          }
      }
         const data = JSON.stringify({
          "subcategoryId": id

          
          
          

 
            });
  
          await axios.post("http://103.104.74.215:3008/website/subcategory_rentProduct_list",data,options).then(res => {
          setLists(res.data.data);
      //console.log("response",res.data.data);
      }).catch(err =>{
          })
      }


  return (
    <div>
      <Header/>

  
<main className="main__content_wrapper">
        {/* Start breadcrumb section */}
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container-fluid">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content">
                  <h1 className="breadcrumb__content--title text-white mb-10">Shop Left</h1>
                  <ul className="breadcrumb__content--menu d-flex">
                    <li className="breadcrumb__content--menu__items"><Link className="text-white" to="/">Home</Link></li>
                    <li className="breadcrumb__content--menu__items"><span className="text-white">Shop Left Sidebar</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End breadcrumb section */}
        {/* Start shop section */}
        <section className="shop__section section--padding">
          <div className="container-fluid">
            <div className="row">
              
              <div className="col-xl-12 col-lg-12">
              
                <div className="shop__product--wrapper">
                  <div className="tab_content">
                    <div id="product_grid" className="tab_pane active show">
                      <div className="product__section--inner product__grid--inner">
                        <div className="row row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
                          
                        {lists.map((list) => {
                        return(
                          <div onClick={(()=>localStorage.setItem("pro_id",list._id ,"userId",list.userId))} className="col mb-30" key={list._id}>
                          
                            <div className="product__items ">
                              <div className="product__items--thumbnail">
                                <Link className="product__items--link" to="/product">

                                 <img style={{height:'167px'}} className="product__items--img product__primary--img" src={"http://103.104.74.215:3008/uploads/"+list.images[0]}  alt="product-img" />
                                 
                                </Link>
                                <div className="product__badge">
                                  <span className="product__badge--items sale">New</span>
                                </div>
                                <ul className="product__items--action d-flex justify-content-center">
               </ul>
                              </div>
                              <div className="product__items--content text-center">
                               <h3 className="product__items--content__title h4"><a href="product-details.html">{list.product_name}</a></h3>
                                     <div className="product__items--price">
                                  {/* <span className="current__price">₹150.00</span>
                                  <span className="old__price">₹200.00</span> */}
                                </div>
                             </div>
                            </div>
                            </div>
  )
})
}
                          </div> 
                                            </div>
                      </div>
                  </div> 
                </div>
</div> 
</div>
          </div>
        </section>
        {/* End shop section */}
              </main>
    </div>
  );
}


  
  
  
export default Shop1

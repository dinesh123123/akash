// import axios from "axios";
// import React from "react";
// import { useState } from "react";

// const Addaddress = () => {
//   const [output, setOutput] = useState();
//   const [address, setAddress] = useState();
//   const [pincode, setPincode] = useState();
//   const [city, setCity] = useState();

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     let userDetails = { address: address, pincode: pincode, city: city };
//     const userid = localStorage.getItem("_id");
//     const addresss = address;
//     const pincodee = pincode;
//     const cityy = city;

//     const options = {
//       headers: {
//         "content-type": "application/json; charset=utf-8",
//         "Access-Control-Allow-Origin": "*",
//       },
//     };
//     const data = JSON.stringify({
//       "userId": "646da5923b5f3cddf3274bf9",
//       "address": "pani pat ka paani",
//       "pincode": "1234567890",
//       "city": "kolkata",
//     });

//     axios
//       .post("http://103.104.74.215:3008/website/add_address", data, options)
//       .then((response) => {
//         console.log(response.data);
//         setOutput(response.data.result);
//         setAddress("");
//         setPincode("");
//         setCity("");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <div class="checkout__content--step section__shipping--address">
//         <font style={{ color: "blue" }}>{output}</font>
//         <form onSubmit={handleSubmit}>
//           <div class="section__shipping--address__content">
//             <div class="row">
//               <div class="col-12 mb-20">
//                 <div class="checkout__input--list">
//                   <label class="checkout__input--label mb-5" for="input4">
//                     Address <span class="checkout__input--label__star">*</span>
//                   </label>
//                   <input
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     class="checkout__input--field border-radius-5"
//                     placeholder="Address"
//                     id="input4"
//                     type="text"
//                   />
//                 </div>
//               </div>

//               <div class="col-12 mb-20">
//                 <div class="checkout__input--list">
//                   <label class="checkout__input--label mb-5" for="input5">
//                     Town/City{" "}
//                     <span class="checkout__input--label__star">*</span>
//                   </label>
//                   <input
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     class="checkout__input--field border-radius-5"
//                     placeholder="City"
//                     id="input5"
//                     type="text"
//                   />
//                 </div>
//               </div>

//               <div class="col-lg-12 mb-20">
//                 <div class="checkout__input--list">
//                   <label class="checkout__input--label mb-5" for="input6">
//                     Postal Code{" "}
//                     <span class="checkout__input--label__star">*</span>
//                   </label>
//                   <input
//                     value={pincode}
//                     onChange={(e) => setPincode(e.target.value)}
//                     class="checkout__input--field border-radius-5"
//                     placeholder="Postal code"
//                     id="input6"
//                     type="text"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <details>
//             <summary class="checkout__checkbox mb-20">
//               <input class="checkout__checkbox--input" type="checkbox" />
//               <span class="checkout__checkbox--checkmark"></span>
//               <span class="checkout__checkbox--label">
//                 Ship to a different address?
//               </span>
//             </summary>
//             <div class="section__shipping--address__content">
//               <div class="row">
//                 <div class="col-12 mb-20">
//                   <div class="checkout__input--list">
//                     <label class="checkout__input--label mb-5" for="input10">
//                       Address{" "}
//                       <span class="checkout__input--label__star">*</span>
//                     </label>
//                     <input
//                       class="checkout__input--field border-radius-5"
//                       placeholder="Address1"
//                       id="input10"
//                       type="text"
//                     />
//                   </div>
//                 </div>
//                 <div class="col-12 mb-20">
//                   <div class="checkout__input--list">
//                     <input
//                       class="checkout__input--field border-radius-5"
//                       placeholder="Apartment, suite, etc. (optional)"
//                       type="text"
//                     />
//                   </div>
//                 </div>
//                 <div class="col-12 mb-20">
//                   <div class="checkout__input--list">
//                     <label class="checkout__input--label mb-5" for="input11">
//                       Town/City{" "}
//                       <span class="checkout__input--label__star">*</span>
//                     </label>
//                     <input
//                       class="checkout__input--field border-radius-5"
//                       placeholder="City"
//                       id="input11"
//                       type="text"
//                     />
//                   </div>
//                 </div>

//                 <div class="col-lg-12 mb-20">
//                   <div class="checkout__input--list">
//                     <label class="checkout__input--label mb-5" for="input12">
//                       Postal Code{" "}
//                       <span class="checkout__input--label__star">*</span>
//                     </label>
//                     <input
//                       class="checkout__input--field border-radius-5"
//                       placeholder="Postal code"
//                       id="input12"
//                       type="text"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </details>
//           <button type="submit">Save</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Addaddress;

import React,{useState} from 'react';
import axios from 'axios';
const Configtokens = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("login")}` }
  });

export const AddProductCart = (quantity,id) =>{     
    const productCart ={quantity:quantity,product:id,}
    console.log(productCart)
       axios.post(`https://ecommerce-exercise-backend.herokuapp.com/products/add_to_cart/`,productCart,Configtokens())
       .then(()=> console.log("inData"))
      .catch((err) => {console.log("error :",err)});    
    }
export default AddProductCart;
  
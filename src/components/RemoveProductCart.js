import React from 'react';
import axios from 'axios';
import CartListComponent from './CartListComponent'
const Configtokens = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("login")}` }
  });

export const RemoveProductCart = (id) => {
       console.log(id)
       axios.delete(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/remove_item/`,Configtokens())
       .then(()=> console.log("Deleted"))
      .catch((err) => {console.log("error :",err)});    
    
  return (
    <div>{CartListComponent()}</div>
  )
}
export default RemoveProductCart;





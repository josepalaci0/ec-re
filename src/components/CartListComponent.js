import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {setCartProducts} from '../../src/settings/actions/ProductsActions';
import CartList from '../pages/containers/CartList';

export const CartListComponent = () => {
    const product = useSelector((state) => state.CartListProducts.cart);        
    const dispatch =useDispatch(); 

    const Configtokens = () => ({
        headers: { Authorization: `Bearer ${localStorage.getItem("login")}` }
    });

    const fetchCartListProducts = async () =>{
        const response = await axios
        .get(`https://ecommerce-exercise-backend.herokuapp.com/cart/`,Configtokens())
        .catch((err) => {
            console.log("error :",err)
        }); 
        dispatch(setCartProducts(response.data));
    }
    useEffect(() => {
      fetchCartListProducts()
  }, []);
    
  return (
    <div>{CartList()}</div>
  )
}

export default CartListComponent;
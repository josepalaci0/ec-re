import React,{useEffect,useState} from 'react';
import axios from 'axios';
import ProductDetail from '../pages/containers/ProductDetail';
import { useDispatch,useSelector } from 'react-redux';
import {selectedProduct} from '../../src/settings/actions/ProductsActions';
import Products from '../pages/containers/Products';

const Configtokens = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("login")}` }
});

export const ProductDetailComponent = (props) => {
  const [id, setid] = useState(props.match.params.id);   
  const product = useSelector((state) => state.ProductDetail.product);        
  const dispatch =useDispatch();   
  

  const fetchProductDetails = async () =>{
      const response = await axios
      .get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`,Configtokens())
      .catch((err) => {
          console.log("error :",err)
      });  
      dispatch(selectedProduct(response.data));
  }

  useEffect(() => {    
     fetchProductDetails()  
  }, []);  

  return (
    <div>
      <ProductDetail/>
      <Products/>
      </div>
  )
}
export default ProductDetailComponent;

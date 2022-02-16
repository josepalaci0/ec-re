import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import {selectedProduct} from '../../settings/actions/ProductsActions'

 const Test_ProductDetail = (props) => {
    const [id, setid] = useState(props.match.params.id);   
    const product = useSelector((state) => state.ProductDetail.product);        
    const dispatch =useDispatch();     
    const Configtokens = () => ({
        headers: { Authorization: `Bearer ${localStorage.getItem("login")}` }
    });

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
    console.log(`PRODUCTS: `, product)  

  return (
    <div>test_ProductDetail</div>
  )
}
export default Test_ProductDetail;

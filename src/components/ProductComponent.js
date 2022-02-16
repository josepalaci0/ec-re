import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from '../settings/actions/ProductsActions';
import { Products } from '../pages/containers/Products';

const ProductComponent = () => {
    const products = useSelector((state) => state.ProductList.products)
    const dispatch = useDispatch()
    const Configtokens = () => ({
        headers: { Authorization: `Bearer ${localStorage.getItem("login")}` }
    });

    const fetchProducts = async () => {
        const response = await axios
            .get("https://ecommerce-exercise-backend.herokuapp.com/products/", Configtokens())
            .catch((err) => {
                console.log(`Error :`, err)
            });
        dispatch(setProduct(response.data));
    }
    useEffect(() => {
        fetchProducts()
    }, []);
    

    return (<div>
        <section className="section latest__products" id="latest">
            
                <Products />
            
        </section>
        
    </div>);
}

export default ProductComponent;
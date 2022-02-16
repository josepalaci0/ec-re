import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";




export const Products = () => {
  const products = useSelector((state) => state.ProductList.products) 
    const history = useHistory();     
    
    const renderList = (products) => {        
        return products.map(res => (<div className="product" key={res.id}>
        <div className="product__header">
          <img src={res.images[2].url} alt="" />
        </div>
        <div className="product__footer">
          <h3>{res.name}</h3>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
          </div>
          <div className="product__price">
            <h4>${res.price}</h4>
          </div>
          <a><button type="submit" className="product__btn" onClick={() => history.push(`/products/detail/${res.id}`)}>Add To Cart</button></a>
        </div>
        <ul>
          <li>
            <a data-tip="Quick View" data-place="left" onClick={() => history.push(`/products/detail/${res.id}`)}>
            <i className="fas fa-info-circle"></i>            
            </a>
          </li>
          <li>
            <a data-tip="Add To Wishlist" data-place="left" href="#">
            <i className="far fa-heart"></i>
            </a>
          </li>
          <li>
            <a data-tip="Add To Compare" data-place="left" href="#">
            <i className="fas fa-sync-alt"></i>
            </a>
          </li>
        </ul>
      </div>))       
    }  
    
  return (<div className="container__producto">{renderList(products)}</div>)
  
}
export default Products;

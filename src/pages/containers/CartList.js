import React from 'react'
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import RemoveProductCart from '../../components/RemoveProductCart'
const CartList = () => {
    const product = useSelector((state) => state.CartListProducts.cart); 
    const history = useHistory();     
    console.log(product)
  return (
    <div>{product? <section  className="section cart__area">
    <div  className="container">
      <div  className="responsive__cart-area">
        <form  className="cart__form">
          <div  className="cart__table table-responsive">
            <table width="100%"  className="table">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>NAME</th>
                  <th>UNIT PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              {product.map(res => <tbody key={res.id}>
                <tr>
                  <td  className="product__thumbnail">
                    <a>
                      <img src={res.product?.images[1].url} alt="" />
                    </a>
                  </td>
                  <td  className="product__name">
                    <a>{res.product?.name}</a>
                    <small></small>
                  </td>
                  <td  className="product__price">
                    <div  className="price">
                      <span  className="new__price">${res.product?.price}</span>
                    </div>
                  </td>
                  <td  className="product__quantity">
                    <div  className="input-counter">
                      <div className="counter-btn">                        
                        {res.quantity}                        
                      </div>
                    </div>
                  </td>
                  <td  className="product__subtotal">
                    <div  className="price">
                      <span  className="new__price">{(res.quantity *res.product?.price).toFixed(2)}</span>
                    </div>
                    <a  className="remove__cart-item" onClick={() => RemoveProductCart(res.id)}>
                    Remove                    
                    </a>
                  </td>
                </tr>

              </tbody>)}              
            </table>
          </div>
        </form>
      </div>
    </div>
  </section> :<div>Cargando.....</div>}</div>
  )
}
export default CartList;

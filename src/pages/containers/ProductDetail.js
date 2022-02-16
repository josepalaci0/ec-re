import React,{useState,useEffect} from 'react';
import { useSelector } from "react-redux";
import AddProductCart from '../../components/AddProductCart';



const ProductDetail = () => { 
    const detailproduct = useSelector((state) => state.ProductDetail.product);    
    const [galery, setGalery] = useState("");   
    const [quantity, setQuantity] = useState(1); 
    
  return <div>{   detailproduct
    ? <div><div className="container">  
          
    <section className="section product-details__section">
        <div className="product-detail__container">
            <div className="product-detail__left">
                <div className="details__container--left">
                    <div className="product__pictures">
                        <img src={galery} className="picture" />
                        <div className='pictures__galery'>
                            {detailproduct.images?.map((res) => (<div className="pictures__container" key={res.id}>
                                <img src={res.url} className="picture" onClick={() => setGalery(res.url)} />
                            </div>))
                            }
                        </div>
                    </div>                                    
                </div>
                <div className="product-details__btn">
                    <div className="add" onClick={()=>AddProductCart(quantity,detailproduct.id)}>
                        <span>
                            <svg>
                                <i  className="fa-solid fa-cart-shopping"></i>
                            </svg>
                        </span>
                        
                        ADD TO CART</div>
                    <div className="buy">
                        <span>
                            <svg>
                                <i  className="fa-solid fa-credit-card"></i>
                            </svg>
                        </span>
                        BUY NOW
                    </div>
                </div>
            </div>

            <div className="product-detail__right">
                <div className="product-detail__content">
                    <h3>{detailproduct.name }</h3>
                    <div className="price">
                        <span className="new__price">${detailproduct?.price}</span>
                    </div>                                    
                    <p>
                        {detailproduct.description}
                    </p>
                    <div className="product__info-container">
                        <ul className="product__info">                                  
                            <li>
                                <div className="input-counter">
                                    <span>Quantity:</span>
                                    <div>
                                        <span className="minus-btn" onClick={() => setQuantity(quantity-1)}>
                                        <i  className="fa-solid fa-minus"></i>
                                        </span>
                                        <div type="text" min="1"  max="10" className="counter-btn" >{quantity}</div>
                                        <span className="minus-btn" onClick={() => setQuantity(quantity+1)}>
                                        <i  className="fa-solid fa-plus"></i>
                                        </span>
                                        
                                    </div>
                                </div>
                            </li>

                            <li>
                                <span>Subtotal:</span>
                                <div className="new__price">{(detailproduct?.price*quantity).toFixed(2)}</div>
                            </li>
                            <li>
                                <span>Category:</span>
                                <div>{detailproduct?.category.name}</div>
                            </li>                            
                        </ul>
                        <div className="product-info__btn">
                            <div >
                                <span>

                                </span>&nbsp;
                                SIZE GUIDE
                            </div>
                            <div>
                                <span>

                                </span>&nbsp;
                                SHIPPING
                            </div>
                            <div>
                                <span>
                                    &nbsp;
                                </span>
                                ASK ABOUT THIS PRODUCT
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="product-detail__bottom">
            <div className="title__container tabs">

                <div className="section__titles category__titles ">
                    <div className="section__title detail-btn active" data-id="description">
                        <span className="dot"></span>
                        <h1 className="primary__title">Description</h1>
                    </div>
                </div>

                <div className="section__titles">
                    <div className="section__title detail-btn" data-id="reviews">
                        <span className="dot"></span>
                        <h1 className="primary__title">Reviews</h1>
                    </div>
                </div>

                <div className="section__titles">
                    <div className="section__title detail-btn" data-id="shipping">
                        <span className="dot"></span>
                        <h1 className="primary__title">Shipping Details</h1>
                    </div>
                </div>
            </div>                            
        </div>
    </section> 
                    
</div>

</div>

    : <h1>FAIL RENDER </h1>}       
     </div>
  

 
}   

export default ProductDetail;

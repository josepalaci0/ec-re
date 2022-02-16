import React, { useState } from 'react';
import { useSelector} from "react-redux";
import { NavLink} from 'react-router-dom';

const Navbar = () => {
  const [actived, setActived] = useState("");  
  const product = useSelector((state) => state.CartListProducts.cart);  
  


    
    
  return (
    <>
      <nav>
        <div className="navigation">
          <div className="container">
            <nav className="nav">
              <div className="nav__hamburger" onClick={() => setActived("active")}>
                <i className="fas fa-bars"></i>
              </div>

              <div className="nav__logo">
                <div className="scroll-link">
                  Ecommerce Gold
                </div>
              </div>

              <div className={`nav__menu ${actived}`}>
                <div className="menu__top">
                  <span className="nav__category">Ecommerce Gold</span>
                  <div className="close__toggle" onClick={() => setActived("") }>
                    <i className="fas fa-times-circle"></i>
                  </div>
                </div>
                <ul className="nav__list">
                  <li className="nav__item">
                    <div className="nav__link" onClick={() => setActived("")} >
                    <NavLink exact to="/login/">Login</NavLink>
                      </div>
                  </li>
                  <li className="nav__item">
                    <div className="nav__link" onClick={() => setActived("")} >
                    <NavLink exact to="/products/">Pruducts</NavLink>
                    </div>
                  </li>
                  <li className="nav__item" onClick={() => setActived("")} >
                    <div className="nav__link">
                    <NavLink exact to="/cart/">Cart</NavLink>
                    </div>
                  </li>
                  <li className="nav__item">
                    <div className="nav__link" onClick={() => setActived("")} ></div>
                  </li>
                </ul>
              </div>
              <div className="nav__icons">
                <div className="icon__item">
                  <i className="fas fa-user"></i>
                </div>

                <div className="icon__item">
                  <i className="fas fa-search"></i>
                </div>

                <div className="icon__item">
                <NavLink exact to="/cart/">
                  <i className="fas fa-shopping-cart">,</i>
                  </NavLink>
                  <span id="cart__total">{
                    product?product.length:0}</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>

    </>
  )
}
export default Navbar;
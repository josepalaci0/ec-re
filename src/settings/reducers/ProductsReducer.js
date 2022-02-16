import Actiontypes  from '../contants/actiontypes'

const DefaultState = {
    products:[]
};
export const ProductsReducer = (state = DefaultState,{type,payload}) => {
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
};


export const selectedProductReducer = (state={},{type, payload}) =>{
    switch (type) {
        case Actiontypes.SELECTED_PRODUCT:
            return { ...state, product: payload};  
        default:
          return state;
    }

}

export const CartListProductsReducer = (state = [],{type,payload}) => {
    switch (type) {
        case Actiontypes.SET_CART_PRODUCTS:
            return {...state, cart: payload};
        default:
            return state;
    }
};


 
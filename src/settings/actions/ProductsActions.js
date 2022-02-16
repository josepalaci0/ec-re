import  Actiontypes  from '../contants/actiontypes'

export const setProduct = (products) => {
    return {
        type: Actiontypes.SET_PRODUCTS,
        payload: products,
    };
};


export const selectedProduct = (product) => {
    return {
        type: Actiontypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const setCartProducts = (cart) => {
    return {
        type: Actiontypes.SET_CART_PRODUCTS,
        payload: cart,
    }
}


